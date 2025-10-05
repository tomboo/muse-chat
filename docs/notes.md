## Restart
rm -rf node_modules .vite dist
npm install
npm run dev

## Unzip
unzip ~/Downloads/<filename>.zip -d .

## Merge
Here’s the clean way to merge your feature branch into main and tag v1.1.0 before continuing development:

### 1. Make sure you are on the feature branch
git checkout feature

### 2. Pull the latest changes from remote
git pull origin feature

### 3. Switch to main
git checkout main

### 4. Pull the latest main to be sure
git pull origin main

### 5. Merge feature into main
git merge --no-ff feature -m "Merge feature branch into main for v1.1.0"

### 6. Push updated main to remote
git push origin main

### 7. Tag the release
git tag -a v1.1.0 -m "Release v1.1.0: simplified workflow, collapsible Debug Panel, cleanup"

### 8. Push the tag to remote
git push origin v1.1.0
