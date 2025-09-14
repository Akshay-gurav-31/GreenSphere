# FasalMitra - Project Structure

## 📁 Project Organization

```
fasal-udharak-main/
├── 📄 index.html                    # Main landing page
├── 📄 PROJECT_STRUCTURE.md          # This file
├── 📄 .gitignore                    # Git ignore rules
├── 📄 bun.lockb                     # Package lock file
│
├── 📁 assets/                       # All static assets
│   ├── 📁 css/
│   │   └── 📄 main.css              # Main stylesheet (previously style.css)
│   ├── 📁 js/
│   │   ├── 📄 main.js               # Main JavaScript (previously script.js)
│   │   └── 📄 config.js             # Configuration file
│   └── 📁 images/
│       ├── 🖼️ logo.png              # Application logo
│       ├── 🖼️ hero-farming.jpg      # Hero section image
│       ├── 🖼️ agri-icons.jpg        # Agricultural icons
│       └── 🖼️ screenshot.png        # Application screenshot
│
├── 📁 pages/                        # Application pages
│   └── 📄 farm-advisor.html         # Farm advisor page (previously farm-advisor-plus.html)
│
└── 📁 docs/                         # Documentation
    ├── 📄 README.md                 # Project documentation
    └── 📄 IMPLEMENTATION_SUMMARY.md # Implementation details
```

## 🔗 File Relationships

### Main Entry Points:
- **index.html** → Landing page with navigation to farm advisor
- **pages/farm-advisor.html** → Main application interface

### Asset Dependencies:
- All HTML files reference **assets/css/main.css** for styling
- Main page uses **assets/js/main.js** for interactive features
- Logo references: **assets/images/logo.png**
- Hero image: **assets/images/hero-farming.jpg**

### Navigation:
- Landing page buttons navigate to: `pages/farm-advisor.html`
- All image paths use relative references from their respective locations

## 🚀 Development Setup

1. **Local Development**: Open `index.html` in browser or use a local server
2. **File Editing**: All source files are now organized in logical folders
3. **Asset Management**: Images, CSS, and JS are separated for better maintenance

## 📋 Recent Changes

- ✅ Organized files into logical folder structure
- ✅ Updated all internal file references
- ✅ Renamed files for better clarity
- ✅ Maintained all functionality while improving organization