const aiTools = [
  ["ChatGPT", "對話、寫作、程式", "適合整理想法、寫文章、輔助 coding、做資料摘要。"],
  ["Claude", "長文閱讀、研究", "適合讀長文件、整理脈絡、寫比較細緻的文字。"],
  ["Gemini", "Google 生態、多模態", "適合搭配搜尋、文件、圖片與日常生產力工作。"],
  ["Perplexity", "AI 搜尋", "適合找資料、追來源、快速做主題調查。"],
  ["Midjourney", "圖片生成", "適合做風格感強的視覺、概念圖與社群素材。"],
  ["Runway", "影片生成、剪輯", "適合短影片、動態素材、影像後製測試。"],
  ["NotebookLM", "筆記、音訊摘要", "適合把文件變成摘要、問答與 podcast 式導讀。"],
  ["Cursor", "AI 程式編輯器", "適合在專案裡改程式、讀 code、做快速原型。"],
];

const weeklyNews = [
  ["官方公告", "模型與產品更新", "追蹤 OpenAI、Google DeepMind、Anthropic 等官方消息，整理新模型、新功能與安全政策。"],
  ["YouTube 科技節目", "可收錄科技浪與科技 YouTuber", "把影片重點整理成懶人包，例如 AI 工具實測、發表會精華、模型比較。"],
  ["Podcast 音訊節目", "每週 AI 聽讀摘要", "把科技評論、創投、產品開發類 podcast 轉成三到五則重點，方便快速跟上。"],
];

const dogDolls = [
  ["可卡狗娃娃", "長耳朵代表", "耳朵蓬鬆垂下來，眼神溫柔，笑臉加腮紅後很像會撒嬌的小朋友。"],
  ["西施狗娃娃", "公主瀏海", "臉部毛量豐富，可以加小蝴蝶結，微笑表情和粉色腮紅讓整隻更甜。"],
  ["比熊娃娃", "棉花糖圓頭", "白色捲毛和圓圓頭是重點，笑起來像一顆柔軟棉花糖。"],
  ["白色松鼠博美娃娃", "圓圓雪球", "松鼠博美是品種稱呼，這裡設定成白色、圓圓、笑臉、腮紅，尾巴蓬鬆上捲。"],
  ["柴犬娃娃", "元氣三角耳", "橘棕毛色、白色眉點和三角耳很有辨識度，笑臉配腮紅會更活潑。"],
];

const h = React.createElement;

function Card({ className, children }) {
  return h("article", { className }, children);
}

function App() {
  return h(
    "main",
    { className: "site-shell" },
    h(
      "nav",
      { className: "topbar", "aria-label": "主要導覽" },
      h("a", { className: "brand", href: "#home" }, "AI 週報與狗娃娃圖鑑"),
      h(
        "div",
        { className: "nav-actions" },
        h("a", { href: "#tools" }, "AI 工具"),
        h("a", { href: "#news" }, "AI 新聞"),
        h("a", { href: "#dogs" }, "狗娃娃")
      )
    ),
    h(
      "section",
      { id: "home", className: "hero" },
      h(
        "div",
        { className: "hero-copy" },
        h("p", { className: "eyebrow" }, "React Static Test"),
        h("h1", null, "AI 工具、每週新消息，還有可愛狗娃娃。"),
        h(
          "p",
          { className: "lead" },
          "這是一個用 React 做的測試型靜態網站：上半部整理 AI 工具與新聞來源，下半部用圖文介紹可卡、西施、比熊、白色松鼠博美與柴犬娃娃。"
        ),
        h(
          "div",
          { className: "hero-actions" },
          h("a", { className: "primary-action", href: "#tools" }, "看 AI 工具"),
          h("a", { className: "secondary-action", href: "#dogs" }, "看狗娃娃")
        )
      ),
      h(
        "figure",
        { className: "hero-image" },
        h("img", {
          src: "public/dog-plush-collection.png",
          alt: "五隻有笑臉和腮紅的可愛狗娃娃，包含可卡、西施、比熊、白色松鼠博美與柴犬",
        })
      )
    ),
    h(
      "section",
      { id: "tools", className: "content-band" },
      h(
        "div",
        { className: "section-heading" },
        h("p", { className: "eyebrow" }, "AI Tools"),
        h("h2", null, "常見 AI 工具清單"),
        h("p", null, "先用分類整理常見工具，未來可以改成搜尋、篩選或每日更新。")
      ),
      h(
        "div",
        { className: "tool-grid" },
        aiTools.map(([name, type, note]) =>
          h(
            Card,
            { className: "tool-card", key: name },
            h("span", null, type),
            h("h3", null, name),
            h("p", null, note)
          )
        )
      )
    ),
    h(
      "section",
      { id: "news", className: "news-band" },
      h(
        "div",
        { className: "section-heading" },
        h("p", { className: "eyebrow" }, "Weekly AI News"),
        h("h2", null, "每週 AI 新聞與新發布"),
        h("p", null, "來源可以包含官方公告、科技新聞、YouTube 節目與 podcast。這裡先放測試版摘要版型。")
      ),
      h(
        "div",
        { className: "news-list" },
        weeklyNews.map(([source, title, text]) =>
          h(
            Card,
            { className: "news-item", key: title },
            h("span", null, source),
            h("h3", null, title),
            h("p", null, text)
          )
        )
      ),
      h(
        "p",
        { className: "source-strip" },
        "建議每週更新：OpenAI、Google DeepMind、Anthropic、YouTube 科技浪、AI podcast、產品發表會。"
      )
    ),
    h(
      "section",
      { id: "dogs", className: "content-band dog-section" },
      h(
        "div",
        { className: "section-heading" },
        h("p", { className: "eyebrow" }, "Cute Plush Dogs"),
        h("h2", null, "可愛狗娃娃圖文介紹"),
        h("p", null, "每一隻狗娃娃都設定成笑臉並加上粉色腮紅，讓畫面更可愛。")
      ),
      h(
        "div",
        { className: "dog-grid" },
        dogDolls.map(([breed, tag, text]) =>
          h(
            Card,
            { className: "dog-card", key: breed },
            h("span", null, tag),
            h("h3", null, breed),
            h("p", null, text)
          )
        )
      )
    ),
    h("footer", { className: "footer" }, "React static page, ready for GitHub Pages.")
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(h(App));
