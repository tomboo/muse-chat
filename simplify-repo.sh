#!/bin/bash
set -e

echo "=== 1. Fetch latest branches ==="
git fetch --all --prune

echo "=== 2. Delete old local branches ==="
git branch -D stage6.6-dev stage6.7-dev feature/collapsible-debug-panel || true

echo "=== 3. Delete old remote branches ==="
git push origin --delete stage6.6-dev || true
git push origin --delete stage6.7-dev || true
git push origin --delete feature/collapsible-debug-panel || true

echo "=== 4. Create new feature branch from main ==="
git checkout main
git pull origin main
git checkout -b feature
git push -u origin feature

echo "=== 5. Clean up GitHub milestones (requires gh CLI) ==="
# Close milestones instead of deleting (keeps history)
gh milestone list --state open --limit 100 | grep "v6." | while read -r line; do
  number=$(echo "$line" | awk '{print $1}')
  echo "Closing milestone #$number..."
  gh milestone edit "$number" --state closed
done

echo "=== 6. Optional: prune unused labels ==="
# Keep only a few simple labels
for lbl in "ci" "core" "storage" "stage6.6" "stage6.7" "ui"; do
  gh label delete "$lbl" --yes || true
done

echo "✅ Migration complete!"
echo "Repo is now: main (stable) + feature (active development)."
