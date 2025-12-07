# Repository Setup Guide

This guide will help you set up the Garden Planner repository on GitHub with version control.

## Quick Setup

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon → **"New repository"**
3. Fill in:
   - **Repository name**: `garden-planner` (or your preferred name)
   - **Description**: "Square foot garden planning tool with harvest tracking"
   - **Public** or **Private** (your choice)
   - ❌ **Don't** initialize with README (we already have one)
4. Click **"Create repository"**

### 2. Initialize Local Repository

Open terminal in the `garden-planner-repo` folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Garden Planner v3.0.0"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/garden-planner.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace `yourusername` with your actual GitHub username!**

---

## File Structure

```
garden-planner/
├── index.html              # Main application (standalone)
├── README.md               # Project documentation
├── LICENSE                 # MIT License
├── CHANGELOG.md           # Version history
├── CONTRIBUTING.md        # Contribution guidelines
├── package.json           # Project metadata
├── .gitignore            # Git ignore rules
│
├── src/
│   └── GardenPlanner.jsx  # React component version
│
├── docs/
│   ├── QUICK-START.md     # Quick start guide
│   ├── SAVE-GUIDE.md      # Save/backup documentation
│   ├── NEW-FEATURES.md    # Harvest calendar features
│   ├── VARIETIES-GUIDE.md # Varieties system guide
│   └── UPDATE-SUMMARY.md  # Latest updates
│
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Pages deployment
```

---

## Enable GitHub Pages (Optional)

Host your garden planner online for free!

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in left sidebar
4. Under **Source**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click **Save**
6. Wait a few minutes
7. Your site will be live at: `https://yourusername.github.io/garden-planner/`

The GitHub Action will automatically deploy updates when you push to `main`.

---

## Making Changes

### Basic Workflow

```bash
# 1. Make your changes to files

# 2. See what changed
git status

# 3. Add changes
git add .

# 4. Commit with descriptive message
git commit -m "Add feature: description of what you changed"

# 5. Push to GitHub
git push
```

### Feature Branch Workflow (Recommended)

```bash
# 1. Create feature branch
git checkout -b feature/new-feature-name

# 2. Make changes and commit
git add .
git commit -m "Add new feature"

# 3. Push feature branch
git push -u origin feature/new-feature-name

# 4. Create Pull Request on GitHub
# 5. Merge when ready
# 6. Switch back to main
git checkout main
git pull
```

---

## Version Control Best Practices

### Commit Messages

**Good commits:**
```
✅ Add variety inheritance system
✅ Fix harvest date calculation bug
✅ Update README with varieties guide
✅ Improve mobile responsiveness
```

**Bad commits:**
```
❌ update
❌ fixed stuff
❌ changes
❌ asdfasdf
```

### When to Commit

- After completing a feature
- After fixing a bug
- Before trying something experimental
- At least once per work session
- Before major refactoring

### What NOT to Commit

Already in `.gitignore`:
- `node_modules/`
- Personal data files
- OS-specific files (`.DS_Store`)
- IDE configuration

---

## Collaborating

### Adding Collaborators

1. Go to repository **Settings**
2. Click **Collaborators**
3. Click **Add people**
4. Enter GitHub username
5. They'll receive an invitation

### Handling Pull Requests

1. Review changes carefully
2. Test locally if possible
3. Leave constructive feedback
4. Approve and merge when ready

---

## Versioning

We use [Semantic Versioning](https://semver.org/):

- **MAJOR.MINOR.PATCH** (e.g., 3.0.0)
- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes

### Creating a Release

```bash
# 1. Update version in package.json
# 2. Update CHANGELOG.md
# 3. Commit changes
git add package.json CHANGELOG.md
git commit -m "Bump version to 3.1.0"

# 4. Create git tag
git tag -a v3.1.0 -m "Release v3.1.0"

# 5. Push tag
git push origin v3.1.0
```

Then create a release on GitHub:
1. Go to **Releases** → **Draft a new release**
2. Choose your tag
3. Add release notes from CHANGELOG
4. Publish release

---

## Backup Strategy

### Cloud Backups
✅ GitHub (automatic with every push)
✅ Enable GitHub Pages for live backup

### Local Backups
```bash
# Clone to another location
git clone https://github.com/yourusername/garden-planner.git backup/

# Or create zip
git archive -o garden-planner-backup.zip HEAD
```

---

## Troubleshooting

### "Permission denied"
```bash
# Use HTTPS instead of SSH
git remote set-url origin https://github.com/yourusername/garden-planner.git
```

### "Merge conflicts"
```bash
# 1. Pull latest changes
git pull

# 2. Fix conflicts in files marked with <<<<<<<
# 3. Add resolved files
git add .

# 4. Complete merge
git commit -m "Resolve merge conflicts"
```

### "Diverged branches"
```bash
# Option 1: Rebase (cleaner)
git pull --rebase

# Option 2: Merge
git pull --no-rebase
```

---

## Useful Commands

```bash
# View commit history
git log --oneline

# See current changes
git diff

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard local changes
git checkout -- filename.html

# View all branches
git branch -a

# Switch branches
git checkout branch-name

# Delete branch
git branch -d branch-name
```

---

## GitHub Desktop (Alternative)

Prefer GUI? Use [GitHub Desktop](https://desktop.github.com/):

1. Download and install
2. Sign in with GitHub account
3. Click **Add** → **Clone Repository**
4. Choose your repository
5. Use GUI for commits/pushes

---

## Next Steps

1. ✅ Push initial commit
2. ✅ Enable GitHub Pages (optional)
3. ✅ Add collaborators (if team project)
4. ✅ Create first feature branch
5. ✅ Make improvements!

---

## Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [GitHub Pages](https://pages.github.com/)
- [Semantic Versioning](https://semver.org/)

---

Happy coding! 🌱
