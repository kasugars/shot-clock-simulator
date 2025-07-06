# Basketball Training Suite - Deployment Guide

This guide covers deploying your Basketball Training Suite to GitHub Pages and Netlify.

## File Structure

Your site is ready for deployment with these key files:

```
basketball-training-suite/
├── index.html              # Main navigation page
├── shot-clock.html         # Shot clock trainer
├── shot-clock-fixed.html   # Alternative shot clock
├── scoreboard.html         # Scoreboard trainer
├── style.css              # Main stylesheet
├── script.js              # Shot clock functionality
├── scoreboard.js          # Scoreboard functionality
├── README.md              # Project documentation
├── netlify.toml           # Netlify configuration
├── .gitignore             # Git ignore rules
└── .github/workflows/     # GitHub Actions
    └── deploy.yml         # Deployment validation
```

## GitHub Repository Setup

### 1. Create New Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `basketball-training-suite` or similar
3. Make it public (required for free GitHub Pages)
4. Don't initialize with README (you have one already)

### 2. Upload Your Files
Option A - Using GitHub Web Interface:
1. Click "uploading an existing file"
2. Drag and drop all files from your project
3. Commit with message: "Initial commit - Basketball Training Suite"

Option B - Using Git Command Line:
```bash
git init
git add .
git commit -m "Initial commit - Basketball Training Suite"
git branch -M main
git remote add origin https://github.com/yourusername/basketball-training-suite.git
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to repository Settings
2. Scroll to "Pages" section
3. Source: "Deploy from a branch"
4. Branch: "main"
5. Folder: "/ (root)"
6. Click "Save"

Your site will be available at: `https://yourusername.github.io/basketball-training-suite/`

## Netlify Deployment

### Method 1: Git Integration (Recommended)
1. Sign up/login to [Netlify](https://netlify.com)
2. Click "New site from Git"
3. Choose "GitHub" and authorize Netlify
4. Select your `basketball-training-suite` repository
5. Deploy settings:
   - Branch: `main`
   - Build command: (leave empty)
   - Publish directory: (leave empty or use `/`)
6. Click "Deploy site"

### Method 2: Manual Upload
1. Zip all your project files
2. Go to [Netlify](https://netlify.com)
3. Drag and drop your zip file to the deployment area
4. Your site will be deployed instantly

## Custom Domain (Optional)

### For GitHub Pages:
1. Add a file named `CNAME` to your repository root
2. Content: `yourdomain.com`
3. Update your domain's DNS settings to point to GitHub Pages

### For Netlify:
1. Go to Site settings > Domain management
2. Add custom domain
3. Follow DNS configuration instructions

## Optimization Tips

### Performance
- All files are already optimized for static hosting
- CSS and JavaScript files are minified where appropriate
- Images are optimized for web delivery

### SEO
- Each page has proper meta tags
- Descriptive titles and descriptions
- Mobile-responsive design

### Caching
- Netlify.toml includes optimal caching headers
- Static assets cached for 1 year
- HTML files cached for 1 hour

## Testing Your Deployment

### Before Deployment
1. Test all pages locally
2. Check mobile responsiveness
3. Verify all links work
4. Test audio functionality

### After Deployment
1. Visit your live site
2. Test on different devices
3. Check browser console for errors
4. Verify Buy Me a Coffee button works

## Troubleshooting

### Common Issues

**404 Errors on GitHub Pages:**
- Ensure all file names match exactly (case-sensitive)
- Check that `index.html` is in the root directory

**Netlify Build Failures:**
- Check that all files are included in your repository
- Verify netlify.toml syntax is correct

**Audio Not Working:**
- Ensure HTTPS is enabled (required for Web Audio API)
- Check browser console for security errors

**Mobile Display Issues:**
- Clear browser cache
- Test in incognito/private mode
- Check that responsive meta tags are present

### Support
- GitHub Pages: [GitHub Pages Documentation](https://docs.github.com/en/pages)
- Netlify: [Netlify Documentation](https://docs.netlify.com/)
- Buy Me a Coffee: [Buy Me a Coffee Integration](https://www.buymeacoffee.com/extras)

## Updating Your Site

### For GitHub Pages:
1. Make changes to your files
2. Commit and push to main branch
3. Site updates automatically in 1-2 minutes

### For Netlify:
1. Make changes to your files
2. Push to GitHub (if using Git integration)
3. Site updates automatically in 30-60 seconds

## Analytics (Optional)

Add Google Analytics to track usage:
1. Create Google Analytics account
2. Add tracking code to all HTML pages
3. Monitor traffic and user behavior

## Backup Strategy

- Keep a local copy of all files
- Your GitHub repository serves as a backup
- Export site from Netlify if needed
- Document any custom configurations

---

Your Basketball Training Suite is now ready for the world! 🏀