# 🎮 RETRO PORTFOLIO - 80s/90s Aesthetic

A stunning personal portfolio website with authentic retro 80s/90s design aesthetic, complete with neon colors, glitch effects, CRT screen effects, pixel art elements, and smooth animations.

## 🌟 Features

### Design Elements
- **Neon Color Palette**: Vibrant pink (#FF10F0), cyan (#00FFFF), purple (#B413FF) on dark background
- **CRT Screen Effects**: Authentic scanlines and subtle flicker animations
- **Glitch Effects**: Dynamic glitch text animations with RGB shifts
- **Arcade Typography**: Retro arcade and computer fonts (Orbitron, Space Mono)
- **Terminal Windows**: Classic 90s OS-style terminal interface components
- **Grid Layouts**: Old-school UI aesthetic with modern responsiveness

### Interactive Features
- **Loading Screen**: Animated retro loading bar with Press Start prompt
- **Smooth Scrolling**: Beautiful scroll animations and transitions
- **Sound Effects**: 8-bit style beep sounds for interactions (Web Audio API)
- **Cursor Trail**: Neon particle trail following your mouse
- **Button Ripple Effects**: Interactive ripple animations on clicks
- **Sound Toggle**: Mute/unmute background sounds easily
- **Form Validation**: Retro-styled contact form with feedback
- **FPS Counter**: Real-time performance monitor in footer
- **Keyboard Shortcuts**: Quick navigation with number keys (1-5) and M for sound

### Sections
1. **Home**: Terminal-style intro with animated welcome message
2. **About**: Retro card layout with profile, mission, and experience
3. **Projects**: Arcade-style project tiles with tags and descriptions
4. **Skills**: Retro progress bars with shimmer effect
5. **Contact**: Terminal-style form with social links

### Technical Features
- **Fully Responsive**: Mobile, tablet, and desktop optimized
- **Dark Mode Default**: Eye-friendly dark theme
- **Accessibility**: Respects prefers-reduced-motion and keyboard navigation
- **No Dependencies**: Pure HTML, CSS, and JavaScript (no frameworks required)
- **Performance Optimized**: Smooth 60fps animations
- **Web Audio API**: Browser-native sound effects
- **Intersection Observer**: Efficient viewport-based animations

## 📁 File Structure

```
portfolio/
├── index.html          # HTML structure and content
├── styles.css          # All CSS styles and animations
├── script.js           # JavaScript interactions and effects
└── README.md           # This file
```

## 🚀 Getting Started

### Quick Start
1. Download all three files (`index.html`, `styles.css`, `script.js`)
2. Place them in the same directory
3. Open `index.html` in a web browser
4. Enjoy the retro experience!

### Local Server (Recommended)
For the best experience and to avoid any CORS issues:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (with http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `styles.css`:

```css
:root {
    --color-bg: #0a0e27;        /* Background */
    --color-pink: #FF10F0;      /* Primary neon */
    --color-cyan: #00FFFF;      /* Secondary neon */
    --color-purple: #B413FF;    /* Tertiary neon */
}
```

### Updating Content
All content sections are in `index.html`:
- **About Section**: Edit `.about-card` divs
- **Projects**: Update `.project-card` entries
- **Skills**: Modify skill items with desired percentages
- **Contact**: Change email and social links

### Customizing Fonts
The portfolio uses Google Fonts. To change:
1. Edit the `@import` link in HTML head
2. Update `--font-arcade` and `--font-mono` in CSS
3. Apply to relevant elements

### Adding Background Music
To add background music:
1. Add audio file reference to the `<audio>` tag in HTML
2. Implement playback in `script.js` with the sound manager

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `1` | Jump to Home |
| `2` | Jump to About |
| `3` | Jump to Projects |
| `4` | Jump to Skills |
| `5` | Jump to Contact |
| `M` | Toggle Sound |

### Easter Egg
Try the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A

## 🎵 Sound Features

The portfolio uses the Web Audio API to generate retro 8-bit style sounds:
- **Button Click**: Square wave beep (800Hz)
- **Success**: Ascending three-tone sequence
- **Error**: Descending two-tone sequence
- **Toggle Sound**: Click the 🔊 icon or press M

Sounds are disabled by default (muted icon 🔇). Users can enable them by clicking the sound toggle.

## 🎬 Animation Details

### Loading Screen
- 2.5-second animated progress bar
- "Press Start" blinking text
- Smooth fade-out after completion

### Glitch Text
- Random RGB shift offsets
- Clip-path based animation
- Multiple layers for 3D effect

### Scanlines & Flicker
- Authentic CRT monitor simulation
- Continuous moving scanline effect
- Subtle opacity flicker

### Parallax
- Subtle depth effect on scroll
- Terminal window parallax movement
- Smooth mathematical easing

### Cursor Trail
- Particle-based trail effect
- Random particle sizes
- Gradient neon colors
- 30-particle limit for performance

## 📱 Responsive Breakpoints

- **Desktop**: 1400px+ (full features)
- **Tablet**: 769px - 1399px (optimized grid)
- **Mobile**: 480px - 768px (single column)
- **Small Mobile**: < 480px (minimal layout)

## 🎮 Component Showcase

### Terminal Windows
Classic Windows 95-style terminals with title bars, minimize/maximize/close buttons, and retro text effects.

### Neon Buttons
Animated border-fill buttons with smooth color transitions and glow effects on hover.

### Progress Bars
Retro-styled progress bars with gradient fill and shimmer animation.

### Project Cards
Hover-activated cards with elevation effect and color transitions.

### Contact Form
Terminal-styled form inputs with focus states and validation feedback.

## 🚀 Performance Tips

1. **Reduce Particle Count**: Edit `maxDots` in cursor trail for lower-end devices
2. **Disable Animations**: Use prefers-reduced-motion setting
3. **Image Optimization**: If adding images, optimize for web
4. **Code Splitting**: For larger projects, separate JavaScript into modules

## 🔧 Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (iOS 12.2+)
- Internet Explorer: Not supported (uses modern CSS Grid, Flexbox, ES6)

### Required Features
- CSS Grid
- CSS Flexbox
- CSS Custom Properties
- Web Audio API (optional for sounds)
- Intersection Observer
- ES6 JavaScript

## 📚 JavaScript Classes

### SoundManager
Manages all audio effects using Web Audio API.

```javascript
soundManager.playBeep(frequency, duration);
soundManager.playSuccess();
soundManager.playError();
soundManager.toggle(); // Mute/unmute
```

### CursorTrail
Creates particle trail following mouse movement.

```javascript
cursorTrail.createDot();
cursorTrail.clearTrail();
```

### FPSCounter
Monitors and displays frames per second.

## 🎨 CSS Custom Properties

All major colors, fonts, and effects use CSS variables for easy customization:

```css
--color-bg: #0a0e27;
--color-pink: #FF10F0;
--color-cyan: #00FFFF;
--color-purple: #B413FF;
--color-white: #FFFFFF;
--color-text: #E0E0E0;
--font-arcade: 'Orbitron', monospace;
--font-mono: 'Space Mono', monospace;
--shadow-neon-pink: 0 0 20px rgba(255, 16, 240, 0.5);
--shadow-neon-cyan: 0 0 20px rgba(0, 255, 255, 0.5);
--shadow-neon-purple: 0 0 20px rgba(180, 19, 255, 0.5);
```

## 🔐 Security Notes

This is a front-end portfolio with no backend. The contact form:
- Does NOT send emails
- Does NOT store data
- Only logs to browser console

For production, integrate with:
- Formspree
- Netlify Forms
- EmailJS
- Your own backend service

## 📝 Content Tips

### About Section
Keep it concise (2-3 sentences per card). Use the three cards to highlight:
1. Your professional profile
2. Your mission/values
3. Your experience/background

### Projects
Include:
- Clear project title
- 1-2 sentence description
- Relevant technology tags
- Link to live demo or GitHub

### Skills
List core competencies with honest percentage estimates. Focus on:
- Technologies you use frequently
- Skills that define your expertise
- Areas you're passionate about

## 🎯 Deployment

### Netlify
1. Push files to GitHub
2. Connect Netlify to repository
3. Deploy automatically on push

### Vercel
1. Push files to GitHub
2. Import project in Vercel
3. Deploy with one click

### GitHub Pages
1. Create repository named `username.github.io`
2. Push portfolio files
3. Access at `https://username.github.io`

### Traditional Hosting
1. FTP files to hosting server
2. Update domain settings
3. Done!

## 🐛 Troubleshooting

### Animations Not Working
- Check browser compatibility
- Verify CSS file is loaded (check Network tab)
- Clear browser cache and hard refresh (Ctrl+Shift+R)

### Sounds Not Playing
- Enable sound toggle (🔊 button)
- Check browser allows audio (permissions)
- Open browser console for errors

### Performance Issues
- Disable cursor trail on mobile
- Reduce scanline frequency
- Disable parallax on lower-end devices
- Check for large unoptimized images

### Mobile Display Issues
- Check viewport meta tag in HTML
- Test on actual devices
- Use mobile DevTools in browser
- Verify media queries are correct

## 📖 Learn More

### Web Audio API
- https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API

### CSS Animations
- https://developer.mozilla.org/en-US/docs/Web/CSS/animation

### Intersection Observer
- https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

### Retro Design
- https://en.wikipedia.org/wiki/Vaporwave
- https://en.wikipedia.org/wiki/Synthwave

## 📄 License

This portfolio template is free to use and modify. Credit is appreciated but not required!

## 🎮 Have Fun!

This portfolio is meant to be enjoyed. Explore the keyboard shortcuts, find the easter egg, and let your personality shine through the retro aesthetic.

---

**Made with ❤️ and Neon Vibes** ✨

Questions? Check the code comments for detailed explanations of how everything works!
