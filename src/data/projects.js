export const projects = [
  {
    id: "MoveGUI-by-Hand",
    title: "MoveGUI by Hand",
    period: "2024.03 - 2025.01",
    summary: "MediaPipeを用いたハンドジェスチャ画面操作アプリ",
    description: "高校時代に課題研究で制作。MediaPipeを用いたハンドジェスチャ認識によって、上下スクロールやクリック操作のような画面操作をWebカメラを通して非接触で可能としたアプリケーション。",
    stack: {
      Frontend: "Tkinter",
      Backend: "Python (MediaPipe, scikit-learn, NumPy, PyAutoGUI, OpenCV, Joblib)",
      Infrastructure: "Raspberry Pi 4 Model B 4GB, RasTechカメラモジュール"
    },
    github: "非公開"
  },
  {
    id: "gakushoku-bot",
    title: "gakushoku-bot",
    period: "2025.11",
    summary: "毎日定時に会津大学の学食メニューをDiscordへ通知するBot",
    description: "毎日定時に会津大学の学食メニューをDiscordへ通知するアプリケーション。10:00に『日替わりランチ』、15:30に『夕食セット』、19:00に『明日のメニュー予告』を通知する。",
    stack: {
      Frontend: "Discord Client",
      Backend: "Discord Webhook API, JavaScript",
      Infrastructure: "Cloudflare Workers"
    },
    github: "https://github.com/yonu33/gakushoku-bot"
  },
  {
    id: "uoa-hub-auth-bot",
    title: "uoa-hub-auth-bot",
    period: "2025.11",
    summary: "大学Discordのメール認証＆自動ロール付与システム",
    description: "大学コミュニティや関連団体のDiscordサーバー参加者向けのメール認証システム。大学ドメインのメールアドレスで認証し、自動でロールを付与する。",
    stack: {
      Frontend: "Discord Client, HTML, CSS",
      Backend: "JavaScript (Discord API, Gmail API)",
      Database: "Google Sheets",
      Infrastructure: "Cloudflare Workers, Google Apps Script"
    },
    github: "非公開",
    article: "https://qiita.com/yonu/items/fcaac74ca97eb41835b7"
  },
  {
    id: "akabeko-reminder-bot",
    title: "akabeko-reminder-bot",
    period: "2026.01",
    summary: "会津弁で喋る中規模コミュニティ向けリマインダーBot",
    description: "Discord上で登録した予定をロールまたはユーザ個人単位に向けて会津弁でメンションする、中規模コミュニティ向けリマインダーBot。",
    stack: {
      Frontend: "Discord Client",
      Backend: "Python (discord.py, APScheduler)",
      Database: "SQLite",
      Infrastructure: "Docker, Docker Compose, Raspberry Pi 4 Model B"
    },
    github: "https://github.com/yonu33/akabeko-reminder-bot"
  }
];