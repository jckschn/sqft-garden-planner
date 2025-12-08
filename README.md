# 🌱 Square Foot Garden Planner

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-3.0.0-blue.svg)](CHANGELOG.md)

A comprehensive, browser-based garden planning tool for square foot gardening with harvest tracking, variety management, and visual indicators.

**[🚀 Live Demo](https://yourusername.github.io/garden-planner/)** | **[📖 Documentation](docs/)** | **[🐛 Report Bug](https://github.com/yourusername/garden-planner/issues)** | **[💡 Request Feature](https://github.com/yourusername/garden-planner/issues)**

---

## ✨ Features

### Core Planning
- 🌱 **Two 3ft × 6ft raised bed gardens** (customizable names)
- 📐 **Variable plants per square** (1, 2, 3, 4, 6, 9, or 16)
- ⚡ **Batch planting** - fill entire rows or beds instantly
- 🎨 **Color-coded vegetables** with custom abbreviations

### Harvest Tracking
- 📅 **Weekly harvest calendar** organized by bed
- ✨ **Visual ready-to-harvest indicators** (golden glow effect)
- ⏰ **7-day advance warnings** for upcoming harvests
- 📊 **Automatic harvest date calculation**

### Vegetable Varieties (NEW!)
- 🌾 **Add specific varieties** (e.g., "Yukon Gold" potato)
- 🔄 **Smart inheritance** - varieties inherit parent properties
- 📋 **Organized dropdowns** - varieties grouped under parents
- ⚙️ **Flexible customization** - override any inherited property

### Data Management
- 💾 **Auto-save** to browser (every change saved)
- 📤 **Export to JSON** (backup your plan)
- 📥 **Import from JSON** (restore or share plans)
- 🔒 **Privacy-focused** - all data stays local

---

## 🚀 Quick Start

### Option 1: Use Online (Easiest)

Visit the [live demo](https://yourusername.github.io/garden-planner/) and start planning immediately!

### Option 2: Download and Use Locally

1. Download `index.html`
2. Double-click to open in your browser
3. Start planning!

### Option 3: Clone Repository

```bash
git clone https://github.com/yourusername/garden-planner.git
cd garden-planner
open index.html  # macOS
# or just double-click index.html
```

---

## 📖 Documentation

- **[Quick Start Guide](docs/QUICK-START.md)** - Get started in 5 minutes
- **[Varieties Guide](docs/VARIETIES-GUIDE.md)** - Using the varieties system
- **[Harvest Features](docs/NEW-FEATURES.md)** - Calendar and visual indicators
- **[Save & Backup](docs/SAVE-GUIDE.md)** - Data management guide
- **[Setup Guide](SETUP.md)** - Repository setup and version control

---

## 🎯 Use Cases

### Succession Planting
Plant the same crop at intervals for continuous harvest:
```
Week 1: Plant Row 1 with lettuce
Week 3: Plant Row 2 with lettuce  
Week 5: Plant Row 3 with lettuce
→ Fresh lettuce every 2 weeks!
```

### Variety Tracking
Track different cultivars with unique maturity dates:
```
Potato Varieties:
- Red Pontiac: 85 days
- Yukon Gold: 95 days
- Russet: 100 days
→ Staggered harvest over 3 weeks!
```

### Visual Planning
Color-code by family, season, or use:
```
Nightshades: Red/Purple
Brassicas: Green
Root Crops: Orange/Brown
→ Easy crop rotation planning!
```

---

## 🖼️ Screenshots

### Garden Grid
![Garden Planning Grid](docs/images/garden-grid.png)
*Plan your 3ft × 6ft raised beds with visual color coding*

### Harvest Calendar
![Harvest Calendar](docs/images/harvest-calendar.png)
*Weekly view of upcoming harvests organized by bed*

### Variety Management
![Variety Manager](docs/images/varieties.png)
*Organize vegetables with parent-child relationships*

---

## 🛠️ Technology Stack

- **React 18** - UI framework
- **Tailwind CSS** - Styling (via CDN)
- **LocalStorage** - Data persistence
- **Vanilla JavaScript** - No build step required
- **100% client-side** - No server needed

---

## 📦 Project Structure

```
garden-planner/
├── index.html              # Main application
├── src/
│   └── GardenPlanner.jsx  # React component
├── docs/                   # Documentation
├── .github/workflows/      # CI/CD
└── package.json           # Project metadata
```

---

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Clone your fork
3. Create a feature branch: `git checkout -b feature/amazing-feature`
4. Make your changes
5. Test in multiple browsers
6. Commit: `git commit -m "Add amazing feature"`
7. Push: `git push origin feature/amazing-feature`
8. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Inspired by the square foot gardening method by Mel Bartholomew
- Built with React and Tailwind CSS
- Icons from Lucide React

---

## 📊 Roadmap

- [ ] Mobile app version (PWA)
- [ ] Companion planting suggestions
- [ ] Frost date integration
- [ ] Garden journal/notes
- [ ] Photo upload for plants
- [ ] Multi-year planning
- [ ] Weather integration

See the [open issues](https://github.com/yourusername/garden-planner/issues) for a full list of proposed features.

---

## 💬 Support

- 📖 [Documentation](docs/)
- 🐛 [Report a Bug](https://github.com/yourusername/garden-planner/issues)
- 💡 [Request a Feature](https://github.com/yourusername/garden-planner/issues)
- ❓ [Ask a Question](https://github.com/yourusername/garden-planner/discussions)

---

## ⭐ Star History

If you find this project helpful, please consider giving it a star!

---

**Made with 🌱 for gardeners everywhere**

**Download this file:**
- **[garden-planner.html](computer:///mnt/user-data/outputs/garden-planner.html)** ⭐ Main application file

**Then just double-click to open in your browser!**

---

## 🎯 All Features at a Glance

### Core Planning Features
✅ Two 3ft × 6ft raised bed gardens (18 squares each)
✅ Variable plants per square (1, 2, 3, 4, 6, 9, or 16)
✅ Batch planting - fill entire rows or all squares at once
✅ Custom vegetables with colors & 3-letter abbreviations
✅ Automatic harvest date calculation
✅ Color-coded visual planning with abbreviations

### NEW! Harvest Tracking
✨ **Harvest Calendar** - Weekly schedule of what's ready to harvest
✨ **Visual Indicators** - Plants glow golden when ready to harvest (within 7 days)
✨ **Custom Bed Names** - Rename your gardens to anything you want

### Data Management
💾 Auto-save to browser (every change saved automatically)
💾 Export to JSON file (backup your plan)
💾 Import from JSON file (restore or share plans)
💾 Clear all data (start fresh)

---

## 🚀 Quick Start

1. **Download** `garden-planner.html`
2. **Double-click** the file to open in your browser
3. **Click a dot** to plant a vegetable
4. **Fill in details:**
   - Choose vegetable type
   - Set planting date
   - Days to maturity (auto-filled)
   - Harvest date (auto-calculated)
5. **Watch it save** - See "✓ Saved" after each change

---

## 📖 Feature Details

### 🌾 Planning Your Garden

**Individual Dots:**
- Click any dot to edit
- Choose vegetable, planting date, maturity period
- Harvest date calculates automatically

**Batch Planting (Fast!):**
- **Fill Row** - Plant same crop across entire row (6 squares)
- **Fill All Squares** - Plant same crop across whole bed (18 squares)
- Set vegetables, dates, and plants-per-square all at once

**Plants Per Square:**
- Hover over any square → click the number badge
- Choose 1-16 plants per square foot
- Examples:
  - 1 = Tomato, Potato, Cabbage
  - 4 = Lettuce, Chard, Basil
  - 9 = Spinach, Beets, Bush Beans
  - 16 = Carrots, Radishes, Onions

### 📅 Harvest Calendar (NEW!)

**Access:** Click "Harvest Calendar" button (orange/amber)

**What you see:**
- Weekly breakdown of all harvests
- Organized by your custom bed names
- Color-coded vegetables
- "This Week" highlighted in green
- Past weeks shown dimmed
- Future weeks in amber

**Perfect for:**
- Planning harvest days
- Knowing what's coming up
- Tracking what you've already harvested
- Sharing your schedule (screenshot it!)

### ✨ Ready-to-Harvest Indicators (NEW!)

**Visual Effects on Garden Grid:**
When a plant is within 7 days of harvest OR past its harvest date:
- 🌟 Golden pulsing border
- 📊 Ping animation effect  
- 🎨 Diagonal stripe pattern
- 🔔 "Ready to Harvest!" tooltip

**Why 7 days?**
Gives you advance warning so you can:
- Prepare harvest tools
- Plan your harvest day
- Know what's coming this week

### ✏️ Custom Bed Names (NEW!)

**How to rename:**
1. Click on the bed name (see ✏️ emoji)
2. Type your new name
3. Press Enter or click outside

**Ideas:**
- "Tomato Garden" / "Salad Bed"
- "North Garden" / "South Garden"
- "Spring Crops" / "Fall Harvest"
- "Kids' Garden" / "Herb Garden"

**Benefits:**
- Shows up in Harvest Calendar
- Exports with your plan
- Makes organizing easier

### 🥕 Vegetable Management

**Access:** Click "Manage Vegetables" button (blue)

**You can:**
- Add custom vegetables
- Edit existing vegetables
- Change colors and abbreviations
- Delete vegetables (removes from all plantings)

**Each vegetable has:**
- Name (e.g., "Tomato")
- 3-letter abbreviation (e.g., "TOM")
- Days to maturity (e.g., 70)
- Color for visual coding

### 💾 Save & Backup

**Auto-Save:**
- Every change saves to your browser instantly
- See "✓ Saved" confirmation
- No login required
- Works offline

**Export Plan:**
- Download complete backup as `.json` file
- Share with friends
- Move between computers
- Keep weekly backups

**Import Plan:**
- Restore from backup
- Load someone else's plan
- Recover after browser data clear

**Important Notes:**
- Data is browser-specific (Chrome ≠ Firefox)
- Clearing browser data = losing your plan
- Always keep exported backups!

---

## 💡 Pro Usage Tips

### Succession Planting
1. Plant lettuce in Row 1 on Week 1
2. Plant lettuce in Row 2 on Week 3  
3. Plant lettuce in Row 3 on Week 5
4. Continuous harvest every 2 weeks!

### Using the Calendar
- Check it every Sunday for the week ahead
- Export screenshots for your kitchen
- Plan harvest batches by bed
- Track what you've completed

### Visual Planning
- Use similar colors for crop families
- Abbreviations make scanning easy
- Golden glow = harvest prep time
- Batch plant for efficiency

### Organizing Beds
- Name by crop type: "Tomato Bed"
- Name by season: "Spring Garden"
- Name by location: "Sunny Spot"
- Name by family: "Nightshades"

---

## 🎨 Visual Examples

### Normal vs Ready to Harvest
```
Normal: ● TOM  (solid red, no effects)
Ready:  ◉ TOM  (golden glow, pulsing, striped)
```

### Batch Planting Workflow
```
1. Click "Fill Row" next to Row 1
2. Select "Lettuce" 
3. Set planting date: Jan 15
4. Choose 4 plants per square
5. Click "Apply to Row 1"
6. All 6 squares instantly filled with lettuce!
```

### Harvest Calendar View
```
📅 Week of March 10-16 ← This Week
  
  🌱 Tomato Garden
    🍅 Tomato - March 12
    🥬 Lettuce - March 14
  
  🌱 Salad Bed  
    🥕 Carrot - March 11
    🌶️ Pepper - March 15
```

---

## 🔧 Troubleshooting

### My changes disappeared
- Did you clear browser cookies/data?
- Different browser = different save
- Import your last export

### Plants not glowing
- Need planting date + days to maturity
- Must be within 7 days of harvest
- Check the Harvest Calendar to verify dates

### Can't rename bed
- Click directly on the name text
- Look for ✏️ emoji
- Try refreshing page

### Calendar is empty
- Add planting dates to vegetables
- Set days to maturity
- Wait for auto-save (see "✓ Saved")

### Export not working
- Check Downloads folder
- Try different browser
- File downloads as `.json`

---

## 📱 Browser Compatibility

**Works in:**
✅ Chrome/Edge (Recommended)
✅ Firefox
✅ Safari
✅ Opera
✅ Brave

**Requirements:**
- JavaScript enabled
- Local storage enabled
- Modern browser (2020+)

---

## 🗂️ Additional Documentation

Read these guides for more details:

1. **[QUICK-START.md](computer:///mnt/user-data/outputs/QUICK-START.md)** - Fast setup guide
2. **[SAVE-GUIDE.md](computer:///mnt/user-data/outputs/SAVE-GUIDE.md)** - Detailed save/backup info  
3. **[NEW-FEATURES.md](computer:///mnt/user-data/outputs/NEW-FEATURES.md)** - Harvest calendar & visual indicators

---

## 🌟 Feature Summary

| Feature | What It Does |
|---------|--------------|
| 📐 Square Foot Grid | Visual layout of 3x6 beds |
| 🌱 Variable Dots | 1-16 plants per square |
| ⚡ Batch Planting | Fill rows/beds instantly |
| 🎨 Color Coding | Visual organization |
| 📅 Harvest Calendar | Weekly schedule |
| ✨ Glow Effects | Ready-to-harvest alerts |
| ✏️ Custom Names | Rename your beds |
| 🥕 Veggie Manager | Add/edit vegetables |
| 💾 Auto-Save | No data loss |
| 📤 Export/Import | Backup & share |

---

## 🎯 Perfect For

- Square foot gardeners
- Succession planting
- Raised bed gardens
- Urban gardening
- Planning harvest schedules
- Garden clubs (share plans!)
- Teaching kids about gardening

---

## 🌱 Happy Gardening!

You now have a complete garden planning tool with:
- Visual planning grid
- Harvest tracking calendar
- Ready-to-harvest alerts
- Auto-save & backup
- Complete customization

**Get started:** Just double-click `garden-planner.html`!

---

*Last updated: December 2024*
*Version: 2.0 (with Harvest Calendar & Visual Indicators)*