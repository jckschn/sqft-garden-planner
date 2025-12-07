# 🌱 Vegetable Varieties Feature Guide

## ✨ New Feature: Sub-Varieties with Parent Inheritance

You can now add specific varieties of vegetables (like "Yukon Gold" potato) while keeping them organized under their parent vegetable type!

---

## 🎯 How It Works

### Parent Vegetables
- **Main vegetable types** (Tomato, Potato, Lettuce, etc.)
- Set default properties: color, abbreviation, days to maturity
- Act as templates for varieties

### Varieties
- **Specific cultivars** under a parent (Yukon Gold, Russet Burbank, etc.)
- Can override parent properties OR inherit them
- Automatically organized under parent in dropdowns

---

## 📋 Using Varieties

### Step 1: Add a Variety

1. Click **"Manage Vegetables"** button
2. Find the parent vegetable (e.g., "Potato")
3. Click **"Add Variety"** button next to the parent
4. Fill in variety details:
   - **Name**: e.g., "Yukon Gold"
   - **Abbreviation**: e.g., "YUK" (optional - will use parent's if empty)
   - **Days to Maturity**: e.g., 95 (optional - will use parent's if empty)
   - **Color**: Choose color (optional - will use parent's if empty)
5. Click **"Add"**

### Step 2: Select Variety When Planting

When you click a dot to plant:
- Dropdown shows **organized list**
- Parent vegetables appear in bold
- Varieties appear indented below with ↳ arrow
- Example:
  ```
  Potato
    ↳ Yukon Gold
    ↳ Russet Burbank
    ↳ Red Pontiac
  ```

---

## 🔄 Parent Inheritance System

### What Gets Inherited?

If you **leave a field empty** on a variety, it inherits from the parent:

| Field | Variety Value | Inherited From | Result |
|-------|--------------|----------------|---------|
| Abbreviation | Empty | Potato → "POT" | Uses "POT" |
| Days to Maturity | Empty | Potato → 90 | Uses 90 days |
| Color | Empty | Potato → Brown | Uses brown |
| Name | "Yukon Gold" | Never inherited | "Yukon Gold" |

### Example Scenarios

**Scenario 1: Full Override**
```
Parent: Potato
  - Abbrev: POT
  - Days: 90
  - Color: Brown

Variety: Yukon Gold
  - Abbrev: YUK  ← Custom
  - Days: 95     ← Custom (5 days longer)
  - Color: Gold  ← Custom

Result: Completely custom appearance and timing
```

**Scenario 2: Partial Inheritance**
```
Parent: Tomato
  - Abbrev: TOM
  - Days: 70
  - Color: Red

Variety: Cherry Tomato
  - Abbrev: (empty) ← Inherits "TOM"
  - Days: 60         ← Custom (10 days faster)
  - Color: (empty)   ← Inherits red

Result: Same color/abbrev, different maturity
```

**Scenario 3: Complete Inheritance**
```
Parent: Lettuce
  - Abbrev: LET
  - Days: 45
  - Color: Green

Variety: Romaine
  - Abbrev: (empty) ← Inherits "LET"
  - Days: (empty)   ← Inherits 45
  - Color: (empty)  ← Inherits green

Result: Just a name variant, everything else same
```

---

## 🎨 Visual Organization

### In Vegetable Manager

**Parent vegetables** show:
- Larger size (bold, bigger font)
- Thicker border
- "Add Variety" button
- Edit and Delete buttons

**Varieties** show:
- Indented (shifted right)
- Smaller size
- ↳ Arrow prefix
- "(inherited)" label if using parent's value
- Edit and Delete buttons

### In Dropdown Lists

When selecting vegetables:
```
Potato               ← Parent (bold)
  ↳ Yukon Gold      ← Variety (indented)
  ↳ Russet Burbank  ← Variety
Tomato               ← Parent
  ↳ Cherry          ← Variety
  ↳ Beefsteak       ← Variety
```

---

## 💡 Use Cases & Examples

### Example 1: Potato Varieties
```
Parent: Potato
  - POT, 90 days, Brown

Varieties:
  - Yukon Gold: 95 days, golden color
  - Russet Burbank: 100 days, keep brown
  - Red Pontiac: 85 days, red color
```

**Benefit**: Track different maturity times for succession planting!

### Example 2: Tomato Types
```
Parent: Tomato
  - TOM, 70 days, Red

Varieties:
  - Cherry Tomato: CHE, 60 days, keep red
  - Beefsteak: BEE, 85 days, deep red
  - Roma: ROM, 75 days, keep red
```

**Benefit**: Different abbreviations for easy visual distinction!

### Example 3: Lettuce Heads
```
Parent: Lettuce
  - LET, 45 days, Green

Varieties:
  - Romaine: (inherits all) - just a name distinction
  - Butterhead: 50 days (5 days longer)
  - Iceberg: 55 days (10 days longer)
```

**Benefit**: Simple name tracking with timing variations!

---

## 🛠️ Managing Varieties

### Editing a Variety
1. Find the variety in the list (indented under parent)
2. Click the **Edit** button (pencil icon)
3. Modify any fields
4. Leave fields empty to inherit from parent
5. Click **"Save"**

### Deleting a Variety
1. Find the variety
2. Click the **Delete** button (trash icon)
3. Confirm deletion
4. Variety removed, parent remains

### Deleting a Parent
⚠️ **Warning**: Deleting a parent also deletes ALL its varieties!

---

## 🌟 Pro Tips

### Tip 1: Leave Defaults Empty
For varieties that are mostly the same as parent:
- Just fill in the name
- Leave everything else empty
- Inherits all parent properties
- Saves time!

### Tip 2: Use Abbreviations Wisely
- Parent: Generic (POT for all potatoes)
- Varieties: Specific (YUK, RUS, RED)
- Makes garden grid easier to read

### Tip 3: Color Code Varieties
Different colors for different uses:
- Early varieties: Light colors
- Late varieties: Dark colors
- By use: Red=cooking, Yellow=baking

### Tip 4: Track Succession Planting
Plant same variety at different times:
1. Add variety with specific days
2. Plant Row 1 today
3. Plant Row 2 in 2 weeks
4. Harvest calendar shows staggered harvests!

---

## 📊 Example Garden Plan

### Spring Potato Bed

**Parent Setup:**
```
Potato (POT, 90 days, brown)
```

**Varieties:**
```
┌─────────────────┬──────┬──────┬───────┐
│ Variety         │ Abbr │ Days │ Color │
├─────────────────┼──────┼──────┼───────┤
│ Yukon Gold      │ YUK  │  95  │ Gold  │
│ Red Pontiac     │ RED  │  85  │ Red   │
│ Russet Burbank  │ RUS  │ 100  │ Brown │
└─────────────────┴──────┴──────┴───────┘
```

**Planting Plan:**
- Row 1: Yukon Gold (planted March 1 → harvest June 4)
- Row 2: Red Pontiac (planted March 1 → harvest May 25)
- Row 3: Russet (planted March 15 → harvest June 23)

**Result**: Staggered harvest from May 25 to June 23!

---

## 🔍 Troubleshooting

### Q: Variety not showing in dropdown?
**A:** Refresh the page. New varieties should appear immediately.

### Q: Variety using wrong color/abbrev?
**A:** Check parent values. Empty variety fields inherit from parent.

### Q: Can I convert a parent to a variety?
**A:** No, create new variety and delete parent. Or edit parent.

### Q: How many varieties can I add?
**A:** Unlimited! Add as many as you need.

### Q: Do varieties export/import?
**A:** Yes! All variety data saves in exports.

---

## 🎯 Quick Reference

### Adding Varieties
1. Manage Vegetables → Find parent → Add Variety
2. Fill name (required)
3. Fill optional fields (or leave empty to inherit)
4. Click Add

### Inheritance Rules
- **Empty field** = Inherits from parent
- **Filled field** = Uses custom value
- **Name** = Never inherited (always required)

### Visual Indicators
- **Bold + thick border** = Parent
- **Indented + ↳** = Variety
- **(inherited)** = Using parent's value

---

## 🌱 Example Use Cases

✅ Track heirloom vs hybrid varieties
✅ Different maturity dates for succession
✅ Color-code by season (spring, fall)
✅ Organize by use (salad, cooking, canning)
✅ Trial multiple cultivars
✅ Plan crop rotation by family

---

**Happy variety tracking!** 🥔🍅🥬