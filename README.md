# 📚 Wikipedia Telegram Bot

A Node.js bot that fetches random Wikipedia articles and posts them to a Telegram channel automatically.

---

## 🚀 Features

- Fetches a random Wikipedia article using the Wikipedia REST API
- Extracts the article title, summary, and URL
- Posts the formatted message to a Telegram channel via the Telegram Bot API
- Lightweight and easy to configure

---
<h4> Watch demo working here: https://drive.google.com/file/d/1kBEXW-DQqRIKjr4UKE_h0fljeGZuRu2-/view?usp=sharing</h4>
---

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **APIs Used**:
  - [Wikipedia REST API](https://en.wikipedia.org/api/rest_v1/)
  - [Telegram Bot API](https://core.telegram.org/bots/api)

---

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/syedayaseera/wikipedia-telegram-bot.git
cd wikipedia-telegram-bot
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

Create a `.env` file in the root directory:

```env
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_CHAT_ID=your_channel_or_chat_id
```

> **How to get these:**
> - `TELEGRAM_BOT_TOKEN` — Create a bot via [@BotFather](https://t.me/BotFather) on Telegram
> - `TELEGRAM_CHAT_ID` — Your channel username (e.g., `@yourchannel`) or numeric chat ID

---

## ▶️ Usage

Run the bot manually:

```bash
node index.js
```

The bot will:
1. Fetch a random Wikipedia article
2. Format the title, summary, and link
3. Post it to your configured Telegram chat

---

## 📁 Project Structure

```
wikipedia-telegram-bot/
├── index.js          # Main entry point
├── .env              # Environment variables (not committed)
├── .gitignore        # Ignores node_modules and .env
├── package.json      # Project metadata and dependencies
└── README.md         # Project documentation
```

---

## 🔒 Environment Variables

| Variable | Description |
|---|---|
| `TELEGRAM_BOT_TOKEN` | Your Telegram bot token from BotFather |
| `TELEGRAM_CHAT_ID` | Target chat or channel ID to post messages |

---

## 📝 Sample Output

```
📖 *Random Wikipedia Article*

*The History of the Internet*

The Internet is a global system of interconnected computer networks...

🔗 [Read more](https://en.wikipedia.org/wiki/Internet)
```

---

## 🙋‍♀️ Author

**Syeda Yaseera**
- GitHub: [@syedayaseera](https://github.com/syedayaseera)
- LinkedIn: [syeda-yaseera](https://linkedin.com/in/syeda-yaseera-92680523b)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
