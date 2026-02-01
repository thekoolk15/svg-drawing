# 🎨 SVG Drawing Canvas

A simple, fun browser-based drawing app built with vanilla HTML, CSS, and JavaScript. No frameworks, no dependencies — just pure web tech.

![Demo](https://img.shields.io/badge/Status-Live-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## ✨ What's this?

Ever wanted a quick canvas to doodle on without opening a heavy app? Same here.

This is a minimal SVG-based drawing tool where you can:
- **Click and drag** to draw freehand lines
- **Pick any color** you want
- **Adjust brush size** for thick or thin strokes
- **Clear everything** and start over

That's it. Nothing fancy — it just works.

---

## 🚀 Getting Started

1. Clone this repo (or just download the files)
   ```bash
   git clone https://github.com/yourusername/svg-drawing-canvas.git
   ```

2. Open `index.html` in your browser

3. Start drawing!

No build steps. No `npm install`. Just open and go.

---

## 🛠 How it works

The drawing is done using **SVG polylines**. When you click and drag:
1. A new `<polyline>` element is created
2. Mouse coordinates get added as points while you move
3. When you release, the polyline is complete

Each stroke is its own polyline, so they're all independent.

### Tech used:
- **SVG** for crisp, scalable drawings
- **Vanilla JS** for event handling
- **CSS** with some modern touches (gradients, glassmorphism vibes)

---

## 📁 Project Structure

```
svg-drawing/
├── index.html    # Main page
├── styles.css    # All the styling
├── script.js     # Drawing logic
└── README.md     # You're here
```

---

## 🎯 Features

| Feature | Status |
|---------|--------|
| Freehand drawing | ✅ |
| Color picker | ✅ |
| Brush size slider | ✅ |
| Clear canvas | ✅ |
| Touch support (mobile) | ✅ |
| Dark mode UI | ✅ |

---

## 📱 Mobile Support

Yep, it works on phones too. Touch events are handled, so you can draw with your finger.

---

## 🤔 Why SVG?

- **Scalable** — no pixelation when zooming
- **Lightweight** — just XML under the hood
- **Easy to manipulate** — DOM-friendly

Canvas is great too, but SVG felt right for this project.

---

## 📝 License

Do whatever you want with this. MIT License.

---

## 🙌 Contributing

Found a bug? Want to add something? PRs are welcome.

---

Made with ☕ and late nights.
