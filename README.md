# Metacritic Games App

A React Native (Expo) app that browses top-rated games with their Metacritic scores.

## Features

- Browse games ranked by Metacritic score
- View game details with description, score, and critic reviews
- Animated fade-in cards on the game list
- SVG logo and dark theme UI

## Tech Stack

- **Expo SDK 54** — cross-platform React Native framework
- **RAWG Video Games Database API** — provides real Metacritic scores (0-100) for thousands of games

## Getting Started

### Prerequisites

- Node.js 18+
- Expo CLI (`npx expo`)
- Android/iOS emulator or physical device with Expo Go

### Setup

```bash
# Install dependencies
npm install

# Set your RAWG API key
# 1. Sign up at https://rawg.io/apidocs (free)
# 2. Copy your key into .env:
echo "EXPO_PUBLIC_RAWG_API_KEY=your_key_here" > .env

# Start the app
npx expo start
```

Scan the QR code with Expo Go (Android/iOS) or press `a` for Android emulator / `i` for iOS simulator.

## API

Uses [RAWG API](https://rawg.io/apidocs) — the largest video game database API. The free tier allows 20,000 requests/month.
