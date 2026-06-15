# 🎯 Bubble Hit Game

A simple browser-based game built with HTML, CSS, and JavaScript.

## 📖 Description

Click the bubble that matches the hit number before time runs out!

## 🎮 How to Play

1. A random **Hit Number** is shown at the top
2. Bubbles with random numbers appear on the screen
3. Click the bubble that matches the hit number
4. Correct click = **+10 score**
5. Game ends when time runs out

## ⏱️ Game Rules

- Total Time: **60 seconds**
- Correct click = **+10 score**
- Wrong click = no score change
- Time ends → **Game Over** screen appears

## 🧠 Features

- Random bubble generation
- Real-time score update
- Countdown timer
- Dynamic DOM manipulation

## 🛠️ Tech Stack

- HTML
- CSS
- JavaScript (DOM manipulation, Events, setInterval)

## 📂 Project Structure

```
├── index.html
├── style.css
└── script.js
```

## 🚀 How It Works

- `makeBubble()` → creates random number bubbles
- `getNewHit()` → selects target number
- Click event → checks if clicked number matches target
- `runTimer()` → controls game countdown

## 💡 Future Improvements

- Add levels (easy, medium, hard)
- Add sound effects
- Add animations
- Store high score

## 👨‍💻 Author

Made with ❤️ while learning JavaScript DOM
