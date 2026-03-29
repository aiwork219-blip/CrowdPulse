# 🏏⚽🏀🎾 CrowdPulse — Sports Sentiment OS

A real-time sports sentiment platform with live scores, crowd heatmaps, whale alerts, AI signals, and Binance referral integration.

---

## 🚀 DEPLOY TO VERCEL (5 minutes)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Deploy
```bash
cd crowdpulse
vercel
```
Follow prompts → your site is LIVE at `https://crowdpulse-xxx.vercel.app`

---

## 🔑 API KEYS (Free Tier — all 100+ calls/day FREE)

### 🏏 Cricket — cricapi.com
1. Go to **https://cricapi.com** → Sign Up (free)
2. Dashboard → Copy your API Key
3. In Vercel: `Settings → Environment Variables`
   - Name: `CRICKET_API_KEY`
   - Value: `your_key_here`

### ⚽ Football — api-football.com
1. Go to **https://dashboard.api-football.com** → Register (free)
2. Copy API Key from dashboard
3. In Vercel: `Settings → Environment Variables`
   - Name: `FOOTBALL_API_KEY`
   - Value: `your_key_here`

### 🏀 Basketball (NBA) + 🎾 Tennis — RapidAPI
1. Go to **https://rapidapi.com** → Sign Up (free)
2. Subscribe to:
   - **API-NBA**: https://rapidapi.com/api-sports/api/api-nba (free tier)
   - **Tennis Live Data**: search "tennis live data" on RapidAPI
3. Copy your RapidAPI key
4. In Vercel: `Settings → Environment Variables`
   - Name: `RAPIDAPI_KEY`
   - Value: `your_key_here`

### After adding keys → Redeploy:
```bash
vercel --prod
```

---

## 📁 Project Structure
```
crowdpulse/
├── vercel.json          ← routing config
├── package.json
├── public/
│   └── index.html       ← complete frontend
└── api/
    ├── cricket.js       ← /api/cricket
    ├── football.js      ← /api/football
    ├── basketball.js    ← /api/basketball
    └── tennis.js        ← /api/tennis
```

---

## ✅ Features Built

| Feature | Status |
|---|---|
| 🏏 Cricket live scores | ✅ |
| ⚽ Football live scores | ✅ |
| 🏀 NBA live scores | ✅ |
| 🎾 Tennis live scores | ✅ |
| 📊 Crowd sentiment bars | ✅ Auto-animate |
| 🐋 Whale radar | ✅ Simulated live |
| 🤖 AI signal layer | ✅ |
| ⚡ Crowd flip detector | ✅ |
| 📈 Volatility meters | ✅ |
| 🎮 2D Cricket pitch | ✅ Animated |
| 🎮 2D Football field | ✅ Animated ball |
| 🎮 Basketball court | ✅ Heat zones |
| 🎮 Tennis court | ✅ Shot placement |
| 🏏 Ball-by-ball tracker | ✅ |
| 🧠 Crowd IQ Score | ✅ |
| 🔓 Quiz unlock engine | ✅ |
| 💰 Binance referral funnel | ✅ |
| 📱 Mobile responsive | ✅ |
| 🔄 Auto-refresh live data | ✅ Every 30s |

---

## 💡 Without API Keys
The site works PERFECTLY in demo mode with realistic mock data.
Add API keys anytime to switch to real live data.

---

## 📈 Next Phase Ideas
- Telegram bot integration for signals
- User accounts + prediction history
- Push notifications for crowd flips
- Real Binance API integration
- More sports: F1, Tennis ATP rankings
