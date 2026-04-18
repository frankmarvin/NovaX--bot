🚀 NovaX WhatsApp Bot

A modern, lightweight WhatsApp Multi-Device bot built with Baileys.
NovaX is fast, customizable, and designed as a clean foundation for building advanced WhatsApp automation systems.


---


🏷️ Badge

https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge&logo=node.js

https://img.shields.io/badge/Baileys-WhatsApp%20API-blue?style=for-the-badge

https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge

https://img.shields.io/badge/Platform-WhatsApp-success?style=for-the-badge

https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge

https://img.shields.io/badge/PRs-Welcome-orange?style=for-the-badge

https://img.shields.io/badge/Maintained-Yes-blue?style=for-the-badge


---


## ✨ Features

- ⚡ Fast & stable (Baileys MD)
- 📱 QR / Pairing code authentication
- 🧩 Simple command handler
- 🔧 Easy configuration
- ☁️ Deployment-ready (multi-platform)
- 🛠️ Clean structure for scaling


---


## 📦 Project Structure

NovaX/
├── index.js
├── settings.js
├── package.json
├── app.json
├── heroku.yml
├── Dockerfile
└── Images/


---


## ⚙️ Installation

git clone https://github.com/frankmarvin/novax-bot.git

cd novax-bot

npm install

Edit settings.js:
global.botname = "NovaX"
global.owner = ["254748642275"]
global.prefix = "."


---


## ▶️ Run Locally

npm start


---


## ☁️ Deployment Options

# 🚀 Heroku

+ Ensure heroku.yml exists
- Push repo to GitHub
- Connect to Heroku
- Deploy using container stack

# 🐳 Docker

docker build -t novax-bot .

docker run novax-bot

# ⚡ Railway (Recommended)

- Go to Railway
- Create new project
- Connect GitHub repo
- Railway auto-detects Node.js
- Add environment variables if needed
- Deploy

# 🌐 Render

- Go to Render
- New → Web Service
- Connect GitHub repo
- Set:
- 
Build Command: npm install

Start Command: npm start
- Deploy

# 🧱 VPS (Ubuntu / Linux Server)

sudo apt update

sudo apt install nodejs npm -y

git clone https://github.com/frankmarvin/novax-bot.git

cd novax-bot

npm install

npm start

# 🔄 Keep Bot Running (PM2)

npm install -g pm2

pm2 start index.js --name novax

pm2 save

pm2 startup

# 🟢 Replit (Quick Testing)

- Create Node.js Repl
- Upload files
- Run:
- 
npm install

npm start

# 🧊 Termux (Android)

pkg update && pkg upgrade

pkg install nodejs git

git clone https://github.com/frankmarvin/novax-bot.git

cd novax-bot

npm install

npm start


---


## 🔐 Environment Tips

- Never expose /session folder
- Use .env for secrets
- Restart bot if session breaks


---


## 🤖 Commands

- .menu
- .ping
- .alive


---


## 🛠️ Customization

Easily extend with:
- Admin systems
- AI integrations
- Anti-delete
- Games
- Database


---


## 📜 License
MIT License © 2026

## ⭐ Final Note
NovaX is deployment-ready across multiple platforms.
Run it locally, host it in the cloud, or scale it on a VPS.

Built with ⚡ using Baileys
