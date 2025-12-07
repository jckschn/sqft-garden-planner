# Garden Planner - Save & Load Guide

## 🎉 Your garden plan now AUTOMATICALLY SAVES!

### How it Works

#### **Auto-Save (Automatic)**
- Every change you make is automatically saved to your browser
- You'll see "✓ Saved" appear briefly after each change
- Works even if you close the browser tab
- Data persists when you open the file again

#### **Export Plan (Backup to File)**
Click the "Export Plan" button to:
- Download a `.json` file with your complete garden plan
- Keep backups on your computer
- Share your plan with others
- Move your plan between different computers

**File naming:** `garden-plan-2024-12-07.json` (includes current date)

#### **Import Plan (Restore from File)**
Click the "Import Plan" button to:
- Upload a previously exported `.json` file
- Restore a backup
- Load a plan from another computer
- Try someone else's garden layout

#### **Clear All (Start Fresh)**
Click the "Clear All" button to:
- Remove all plants and reset to defaults
- Start over with a blank garden
- **Warning:** This cannot be undone! Export first if you want to keep your current plan.

---

## 📝 Important Notes

### Where is my data saved?

Your garden plan is saved in your **browser's localStorage**, which means:

✅ **Pros:**
- Automatic - no login required
- Fast - instant saves
- Private - stays on your computer
- Works offline

⚠️ **Limitations:**
- Data is tied to this specific browser
- Clearing browser data will delete your garden plan
- Won't sync between different browsers or computers
- Mobile and desktop have separate saves

### Best Practices

1. **Export regularly** - Click "Export Plan" weekly to create backups
2. **Keep multiple versions** - Export before making big changes
3. **Name your exports** - Rename files like `spring-2025-plan.json`
4. **Test imports** - Practice importing an export to make sure it works

---

## 🔄 Moving Your Plan Between Devices

### From Computer A to Computer B:
1. Open the garden planner on Computer A
2. Click "Export Plan"
3. Save the `.json` file
4. Transfer the file to Computer B (email, USB, cloud storage)
5. Open the garden planner on Computer B
6. Click "Import Plan"
7. Select your `.json` file

---

## 🐛 Troubleshooting

### "My changes disappeared!"
- Did you clear browser data/cookies? This deletes localStorage
- Are you using a different browser? Each browser has its own storage
- Try importing your last export

### "Export button not working"
- Check if downloads are blocked in your browser
- Look in your Downloads folder - it may have saved anyway
- Try a different browser

### "Import shows an error"
- Make sure you're selecting a `.json` file exported from this planner
- File might be corrupted - try an older backup
- Check that the file isn't empty (should be several KB in size)

---

## 💾 File Format

The exported `.json` file contains:
```json
{
  "beds": [ ... your bed configurations ... ],
  "vegetables": [ ... your vegetable list ... ],
  "exportDate": "2024-12-07T..."
}
```

You can edit this file in a text editor if you're comfortable with JSON, but be careful - invalid JSON won't import!

---

## 🌱 Happy Gardening!

Your garden plan is now safe and portable. Remember to export backups regularly!