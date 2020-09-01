# Brokkoleaderboard 🥦 ![Node.js CI](https://github.com/xinraTV/brokkoleaderboard/workflows/Node.js%20CI/badge.svg) ![Twitch Status](https://img.shields.io/twitch/status/xinraTV)

This is a script for the [Streamlabs Chabot](https://streamlabs.com/chatbot).

You may have to [setup scripting](https://github.com/StreamlabsSupport/Streamlabs-Chatbot/wiki/Prepare-&-Import-Scripts) first. You also need to install [NodeJS](https://nodejs.org/).

Clone this repository into `%appdata%\Streamlabs\Streamlabs Chatbot\Services\Scripts\Brokkoleaderboard`. After this, run the following commands:

```
npm install
npm run build
```

Setup `build/index.html` as a [browser source](https://github.com/StreamlabsSupport/Streamlabs-Chatbot/wiki/Script-overlays#locate-html-url) (you don't need an API key).
