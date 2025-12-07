# Repository File Structure Guide

Complete overview of the Garden Planner repository structure and file purposes.

```
garden-planner/
│
├── 📄 index.html                    # Main application (standalone, all-in-one file)
│   └── Purpose: Complete garden planner in a single HTML file
│       - React via CDN
│       - Tailwind CSS via CDN  
│       - All JavaScript inline
│       - No build step required
│       - Works offline
│       - Just double-click to open!
│
├── 📄 README.md                     # Project overview and documentation
│   └── Purpose: Main project documentation with:
│       - Feature overview
│       - Quick start instructions
│       - Links to detailed docs
│       - Contributing guidelines
│       - License information
│
├── 📄 LICENSE                       # MIT License
│   └── Purpose: Legal terms for using/modifying the project
│
├── 📄 CHANGELOG.md                  # Version history
│   └── Purpose: Track all changes across versions
│       - Version 3.0.0: Varieties system
│       - Version 2.0.0: Harvest calendar
│       - Version 1.0.0: Initial release
│
├── 📄 CONTRIBUTING.md               # Contribution guidelines
│   └── Purpose: Help contributors understand:
│       - How to report bugs
│       - How to suggest features
│       - Code style guidelines
│       - Pull request process
│
├── 📄 SETUP.md                      # Repository setup guide
│   └── Purpose: Instructions for:
│       - Setting up GitHub repository
│       - Version control basics
│       - Deployment to GitHub Pages
│       - Common Git commands
│
├── 📄 package.json                  # Project metadata
│   └── Purpose: NPM package information
│       - Version number
│       - Dependencies (none - it's standalone!)
│       - Repository URL
│       - Keywords for discoverability
│
├── 📄 .gitignore                    # Git ignore rules
│   └── Purpose: Tell Git what NOT to track
│       - node_modules/
│       - OS files (.DS_Store)
│       - IDE files (.vscode/)
│       - Temporary files
│
├── 📁 src/                          # Source code (React component)
│   │
│   └── 📄 GardenPlanner.jsx        # React component version
│       └── Purpose: For developers who want to:
│           - Integrate into existing React app
│           - Customize with build tools
│           - Use in npm-based projects
│           Note: Same code as index.html but as pure React component
│
├── 📁 docs/                         # Documentation files
│   │
│   ├── 📄 QUICK-START.md           # Quick start guide
│   │   └── Purpose: Get users started in 5 minutes
│   │       - Download and open
│   │       - Basic features overview
│   │       - First garden plan
│   │
│   ├── 📄 SAVE-GUIDE.md            # Save and backup guide
│   │   └── Purpose: Explain data management
│   │       - How auto-save works
│   │       - Export/import instructions
│   │       - Browser storage details
│   │       - Backup best practices
│   │
│   ├── 📄 NEW-FEATURES.md          # Harvest calendar features
│   │   └── Purpose: Document harvest tracking
│   │       - Weekly harvest calendar
│   │       - Visual harvest indicators
│   │       - Custom bed naming
│   │       - Usage examples
│   │
│   ├── 📄 VARIETIES-GUIDE.md       # Varieties system guide
│   │   └── Purpose: Explain varieties feature
│   │       - Parent-child relationships
│   │       - Inheritance system
│   │       - Adding varieties
│   │       - Use cases and examples
│   │
│   └── 📄 UPDATE-SUMMARY.md        # Latest update summary
│       └── Purpose: Quick overview of newest features
│           - What's new in v3.0.0
│           - Migration guide
│           - Feature comparison
│
├── 📁 examples/                     # Example garden plans
│   │
│   ├── 📄 spring-garden.md         # Spring garden example
│   │   └── Purpose: Template for spring planting
│   │       - Succession planting schedule
│   │       - Crop timing
│   │       - Harvest calendar
│   │
│   └── 📄 tomato-varieties.md      # Tomato variety trial
│       └── Purpose: Example of variety tracking
│           - Multiple cultivars
│           - Comparison tracking
│           - Staggered planting
│
└── 📁 .github/                      # GitHub-specific files
    │
    └── 📁 workflows/                # GitHub Actions
        │
        └── 📄 deploy.yml            # Auto-deployment workflow
            └── Purpose: Automatically deploy to GitHub Pages
                - Triggers on push to main
                - Builds and deploys site
                - No manual deployment needed
```

---

## File Relationships

### Core Application Files
```
index.html  ←──────┐
                   │ (same code, different format)
src/GardenPlanner.jsx
```

### Documentation Hierarchy
```
README.md (start here)
    │
    ├─→ docs/QUICK-START.md (for beginners)
    ├─→ docs/VARIETIES-GUIDE.md (for variety features)
    ├─→ docs/NEW-FEATURES.md (for harvest features)
    ├─→ docs/SAVE-GUIDE.md (for data management)
    └─→ docs/UPDATE-SUMMARY.md (latest changes)
```

### Setup & Contributing
```
SETUP.md (for repository setup)
    │
    └─→ CONTRIBUTING.md (for contributors)
            │
            └─→ CHANGELOG.md (version history)
```

---

## Where to Find Things

### Want to...

**Use the garden planner?**
→ `index.html` (just download and open)

**Learn how to use it?**
→ `README.md` → `docs/QUICK-START.md`

**Understand varieties system?**
→ `docs/VARIETIES-GUIDE.md`

**Back up your data?**
→ `docs/SAVE-GUIDE.md`

**Contribute to the project?**
→ `CONTRIBUTING.md`

**Set up your own repository?**
→ `SETUP.md`

**See what changed recently?**
→ `CHANGELOG.md` or `docs/UPDATE-SUMMARY.md`

**Integrate into React app?**
→ `src/GardenPlanner.jsx`

**See example garden plans?**
→ `examples/`

**Deploy to GitHub Pages?**
→ `.github/workflows/deploy.yml` (automatic)

---

## File Size Reference

| File | Size | Purpose |
|------|------|---------|
| `index.html` | ~85 KB | Main application |
| `src/GardenPlanner.jsx` | ~32 KB | React component |
| All docs | ~30 KB | Documentation |
| Total repo | ~150 KB | Very lightweight! |

---

## Maintaining the Structure

### When adding new features:

1. **Update these files:**
   - `index.html` - Add the feature
   - `src/GardenPlanner.jsx` - Keep in sync
   - `CHANGELOG.md` - Document the change
   - `package.json` - Bump version if needed
   - `docs/UPDATE-SUMMARY.md` - Describe for users

2. **Consider adding:**
   - New doc in `docs/` if feature is complex
   - Example in `examples/` if useful
   - Tests (future: `tests/` folder)

### When releasing new version:

1. Update `CHANGELOG.md`
2. Update version in `package.json`
3. Create git tag: `git tag v3.1.0`
4. Push tag: `git push origin v3.1.0`
5. Create GitHub release with notes

---

## Best Practices

### ✅ Do:
- Keep `index.html` and `src/GardenPlanner.jsx` in sync
- Update `CHANGELOG.md` for every version
- Document new features in `docs/`
- Add examples for complex features
- Keep README.md up to date

### ❌ Don't:
- Commit `node_modules/` (in `.gitignore`)
- Commit personal garden data
- Commit IDE-specific configs
- Break the single-file nature of `index.html`
- Forget to update version numbers

---

## Future Structure (Potential)

As project grows, consider:

```
garden-planner/
├── tests/                   # Automated tests
│   ├── unit/
│   └── integration/
│
├── assets/                  # Images, icons
│   ├── images/
│   └── icons/
│
├── locales/                 # Internationalization
│   ├── en.json
│   ├── es.json
│   └── fr.json
│
└── scripts/                 # Build scripts
    ├── build.js
    └── validate.js
```

---

**The structure is designed to be simple, accessible, and maintainable!** 🌱
