const https = require("https");

//Credentials
const TELEGRAM_TOKEN = "Add your telegram token";
const CHAT_ID = "Add the chat ID";

// Function to perform HTTP GET request
function httpGet(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve(JSON.parse(data)));
    }).on("error", reject);
  });
}

// Function to send message to Telegram
function sendToTelegram(message) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "Markdown",
    });

    const options = {
      hostname: "api.telegram.org",
      path: `/bot${TELEGRAM_TOKEN}/sendMessage`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(body),
      },
    };

    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve(JSON.parse(data)));
    });

    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

//Main function to fetch random Wikipedia article and send to Telegram
async function main() {
  try {
    console.log("Fetching random Wikipedia article...");
    const wikiData = await httpGet(
      "https://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=extracts&exintro=true&explaintext=true&exsentences=3&format=json&origin=*"
    );

    const page = Object.values(wikiData.query.pages)[0];
    const title = page.title;
    const summary = page.extract || "No summary available.";
    const url = `https://en.wikipedia.org/wiki/${encodeURIComponent(title)}`;

    const message = `*${title}*\n\n${summary}\n\nRead more: ${url}`;

    console.log("Sending to Telegram...");
    const result = await sendToTelegram(message);
    console.log("Telegram response:", result);

    if (result.ok) {
      console.log("Successfully sent to Telegram!");
    } else {
      console.log("Telegram error:", result.description);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();
