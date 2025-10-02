#!/bin/bash
set -e

# Extract version from src/version.ts (expects: export const APP_VERSION = "vX.Y.Z";)
VERSION=$(grep 'APP_VERSION' src/version.ts | sed -E 's/.*"([^"]+)".*/\1/')
SEMVER=$(echo "$VERSION" | sed 's/^v//')   # strip "v" for package.json + git tags
DIST_ZIP="muse-chat-${VERSION}-dist.zip"

echo "🔍 Detected version: $VERSION (semver: $SEMVER)"

# --- Sync package.json version ---
PKG_VERSION=$(node -p "require('./package.json').version")
if [ "$PKG_VERSION" != "$SEMVER" ]; then
  echo "🔄 Updating package.json version from $PKG_VERSION → $SEMVER"
  npm version "$SEMVER" --no-git-tag-version
else
  echo "✅ package.json already matches $SEMVER"
fi

# --- Install dependencies ---
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
else
  echo "✅ Dependencies already installed."
fi

# --- Commit version bump ---
if ! git diff --quiet package.json package-lock.json; then
  git add package.json package-lock.json
  git commit -m "chore(release): bump version to ${VERSION}"
else
  echo "✅ No version bump needed in git commit."
fi

# --- Tag release ---
if git rev-parse "v$SEMVER" >/dev/null 2>&1; then
  echo "⚠️  Tag v$SEMVER already exists, skipping."
else
  git tag -a "v$SEMVER" -m "Release $VERSION"
  echo "🏷️  Created git tag v$SEMVER"
fi

# --- Push commit and tags ---
echo "🚀 Pushing to origin..."
git push origin main
git push origin --tags

# --- Build ---
echo "🏗️ Building project..."
npm run build

# --- Package dist ---
if [ -d "dist" ]; then
  echo "📦 Packaging dist/ into $DIST_ZIP"
  rm -f "$DIST_ZIP"
  zip -r "$DIST_ZIP" dist/
  echo "✅ Build packaged as $DIST_ZIP"
else
  echo "❌ Build failed: dist/ folder not found."
  exit 1
fi

echo "🎉 Release $VERSION completed successfully."
