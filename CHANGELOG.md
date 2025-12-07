# Changelog

All notable changes to the Garden Planner project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [4.1.0] - 2024-12-07

### Added
- **Fill Cell**: Orange "Fill" button appears on hover for individual square filling
- **Fill Column**: Cyan "Fill Col" buttons in column headers to fill entire columns
- Column headers above garden grid showing column numbers
- Color-coded fill buttons for easy identification (orange=cell, cyan=column, indigo=row, purple=all)

### Changed
- Enhanced batch planting modal to support 4 fill modes: cell, column, row, and all
- Improved visual hierarchy with column labels
- Updated batch plant modal title to show "Column X", "Single Cell", etc.

## [4.0.0] - 2024-12-07

### Added
- **Garden Configuration System**: Configure up to 4 gardens with custom dimensions
- Custom garden dimensions from 1ft × 1ft to 10ft × 10ft
- Garden Settings modal with enable/disable toggles for each garden
- Custom naming for each garden
- Dynamic grid rendering based on configured dimensions
- Warning messages when changing dimensions (data loss alert)
- Garden dimension display on each bed (e.g., "6ft × 3ft (18 sq ft)")

### Changed
- Updated default configuration to support 4 gardens (2 enabled, 2 disabled)
- Enhanced state management to track garden configuration
- Grid rendering now fully dynamic based on width and height
- Updated header to show garden count dynamically

## [3.0.0] - 2024-12-07

### Added
- **Vegetable Varieties System**: Add specific varieties (e.g., "Yukon Gold") under parent vegetables
- Parent-child vegetable hierarchy with smart inheritance
- Varieties inherit parent properties (color, abbreviation, days to maturity) when fields left empty
- Organized dropdown menus showing varieties indented under parents
- "Add Variety" button for each parent vegetable in manager
- Visual distinction between parents and varieties in vegetable list

### Changed
- Vegetable dropdown now shows organized hierarchy with ↳ arrow prefix for varieties
- Vegetable manager UI updated to show parent/variety relationships
- Enhanced visual indicators for parent vegetables (bold, thicker borders)

## [2.0.0] - 2024-12-07

### Added
- **Harvest Calendar**: Weekly view of all upcoming harvests organized by bed
- **Visual Harvest Indicators**: Golden glow/pulse effect on plants ready to harvest (within 7 days)
- **Custom Bed Names**: Click to rename raised beds
- Diagonal stripe pattern on ready-to-harvest dots
- "This Week" highlighting in harvest calendar
- Grouping of harvests by custom bed names in calendar

### Changed
- Harvest dates now trigger visual alerts 7 days in advance
- Calendar organized by week with bed groupings

## [1.0.0] - 2024-12-07

### Added
- Initial release
- Two 3ft × 6ft raised bed gardens (18 squares each)
- Variable plants per square foot (1, 2, 3, 4, 6, 9, 16)
- Batch planting functionality (fill rows or entire beds)
- Custom vegetable management with colors and abbreviations
- Automatic harvest date calculation
- Auto-save to browser localStorage
- Export garden plan to JSON file
- Import garden plan from JSON file
- Color-coded visual planning
- Individual dot editing
- Square-level dot count configuration

### Features
- React-based UI with Tailwind CSS
- Browser-based (no installation required)
- Offline functionality
- Data persistence via localStorage
- Portable backups via JSON export
