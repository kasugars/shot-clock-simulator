# GoDaddy Hosting Instructions for Shot Clock Trainer

## What You Need

Your Shot Clock Trainer consists of just 3 files:
- `index.html` - The main webpage
- `style.css` - The styling
- `script.js` - The functionality

## Step-by-Step GoDaddy Hosting Setup

### 1. Download Your Files
Download these 3 files from your current project:
- index.html
- style.css  
- script.js

### 2. Access GoDaddy File Manager
1. Log into your GoDaddy account
2. Go to "My Products"
3. Find your hosting plan and click "Manage"
4. Click "File Manager" or "cPanel File Manager"

### 3. Upload Files
1. Navigate to the `public_html` folder (this is your website's root directory)
2. Upload all 3 files directly into the `public_html` folder
3. Make sure `index.html` is in the root directory

### 4. Set Permissions (if needed)
- Files should have 644 permissions
- GoDaddy usually sets this automatically

### 5. Test Your Website
1. Visit your domain name in a web browser
2. The Shot Clock Trainer should load immediately
3. Test all buttons and functionality

## File Structure on GoDaddy
```
public_html/
├── index.html
├── style.css
└── script.js
```

## Alternative: Using FTP
If you prefer FTP:
1. Use an FTP client like FileZilla
2. Connect using your GoDaddy FTP credentials
3. Upload files to the `public_html` directory

## Troubleshooting

**If the site doesn't load:**
- Check that `index.html` is in the `public_html` folder
- Ensure all 3 files are uploaded
- Wait 5-10 minutes for changes to propagate

**If styling looks wrong:**
- Verify `style.css` is in the same folder as `index.html`
- Check file permissions are set to 644

**If buttons don't work:**
- Verify `script.js` is uploaded and in the correct location
- Check browser console for JavaScript errors

## Domain Setup
- If using a new domain, it may take 24-48 hours to fully propagate
- You can test using your temporary GoDaddy URL first

## Cost Considerations
- Standard GoDaddy hosting plans support this static website
- No special server requirements needed
- Basic shared hosting is sufficient

Your Shot Clock Trainer will be live and accessible to anyone with your domain name!