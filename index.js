const express = require("express");
const app = express();
const PORT = 6700;

// CSS condiviso
const style = `
*{margin:0;padding:0;box-sizing:border-box;font-family:'Orbitron', sans-serif;scroll-behavior:smooth;}
body{background:#0a0a0f;color:white;overflow-x:hidden;}
nav{position:fixed;width:100%;padding:20px;background:rgba(0,0,0,0.5);backdrop-filter:blur(10px);display:flex;justify-content:center;gap:40px;z-index:100;}
nav a{color:#00f7ff;text-decoration:none;transition:0.3s;}
nav a:hover{color:#ff00ff;text-shadow:0 0 10px #ff00ff;}
h1{font-size:50px;background:linear-gradient(90deg,#00f7ff,#ff00ff);-webkit-background-clip:text;color:transparent;}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:30px;margin-top:50px;}
.card{background:#111;padding:30px;border-radius:15px;transition:0.4s;box-shadow:0 0 15px rgba(0,247,255,0.1);cursor:pointer;}
.card:hover{transform:scale(1.05);box-shadow:0 0 25px #00f7ff;}
pre{background:#1c1c1c;padding:15px;border-radius:10px;overflow-x:auto;}
button{display:inline-block;margin-top:20px;padding:10px 20px;background:#00f7ff;color:#000;border:none;border-radius:10px;cursor:pointer;transition:0.3s;}
button:hover{background:#ff00ff;color:#fff;}
footer{padding:40px;text-align:center;background:#000;margin-top:50px;}
`;

// Funzione per generare pagina
function makePage(title, content) {
  return `
<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<title>${title}</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<style>${style}</style>
</head>
<body>
<nav>
<a href="/">🏠 Home</a>
<a href="/bot">🤖 Bot</a>
<a href="/web">🌐 Web</a>
<a href="/logica">🧠 Logica</a>
<a href="/dashboard">📊 Dashboard</a>
<a href="/portfolio">💎 Portfolio</a>
<a href="/sicurezza">🔐 Sicurezza</a>
</nav>
<div style="padding:120px 50px 50px 50px;">
${content}
</div>
<footer>Christian Dev © 2026</footer>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
</body>
</html>
`;
}

// Contenuti delle pagine
const pages = {
  "/": makePage("Christian Dev | Tutorials 3.0", `
<h1>ULTRA DEV 3.0 EXPERIENCE</h1>
<p>Tutorial per principianti: Coding, Bot, Web, Sicurezza</p>
<div class="cards">
<div class="card"><a href="/bot">🤖 Bot Discord</a></div>
<div class="card"><a href="/web">🌐 Web Dev</a></div>
<div class="card"><a href="/logica">🧠 Logica</a></div>
<div class="card"><a href="/dashboard">📊 Dashboard Bot</a></div>
<div class="card"><a href="/portfolio">💎 Portfolio Dev</a></div>
<div class="card"><a href="/sicurezza">🔐 Sicurezza</a></div>
</div>
`),

  "/bot": makePage("🤖 Tutorial Bot Discord", `
<h1>🤖 Bot Discord - Tutorial</h1>
<p>Impara a creare un bot Discord e cosa fa ogni riga di codice.</p>
<h2>1️⃣ Installazione</h2>
<pre><code class="language-bash">npm init -y
npm install discord.js</code></pre>
<h2>2️⃣ Codice base</h2>
<pre><code class="language-js">const Discord = require('discord.js');
const client = new Discord.Client();
client.login('TOKEN');</code></pre>
<p>client.login('TOKEN') connette il bot a Discord.</p>
<h2>3️⃣ Aggiungere comandi</h2>
<pre><code class="language-js">client.on('message', message => {
  if(message.content === '!ciao'){
    message.channel.send('Ciao!');
  }
});</code></pre>
`),

  "/web": makePage("🌐 Tutorial Web Dev", `
<h1>🌐 Web Development - Tutorial</h1>
<p>Creiamo pagine web interattive.</p>
<h2>1️⃣ HTML base</h2>
<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;&lt;head&gt;&lt;/head&gt;&lt;body&gt;Ciao&lt;/body&gt;&lt;/html&gt;</code></pre>
<h2>2️⃣ CSS design</h2>
<pre><code class="language-css">body { background:#0a0a0f; color:white; }</code></pre>
<h2>3️⃣ JS interazioni</h2>
<pre><code class="language-js">console.log('Ciao Mondo');</code></pre>
`),

  "/logica": makePage("🧠 Tutorial Logica", `
<h1>🧠 Logica - Programmazione</h1>
<h2>Variabili</h2>
<pre><code class="language-js">let x = 10;
let nome = 'Christian';</code></pre>
<h2>Cicli</h2>
<pre><code class="language-js">for(let i=0;i<5;i++){
  console.log(i);
}</code></pre>
<h2>Funzioni</h2>
<pre><code class="language-js">function saluta(){
  console.log('Ciao!');
}</code></pre>
`),

  "/dashboard": makePage("📊 Dashboard Bot", `
<h1>📊 Dashboard Bot</h1>
<p>Pagina web collegata al bot tramite API.</p>
<h2>Esempio fetch API</h2>
<pre><code class="language-js">fetch('/api/users')
.then(res => res.json())
.then(data => console.log(data));</code></pre>
`),

  "/portfolio": makePage("💎 Portfolio Dev", `
<h1>💎 Portfolio Dev</h1>
<p>Guida per creare un portfolio per i tuoi progetti.</p>
<h2>HTML base</h2>
<pre><code class="language-html">&lt;div class='project'&gt;&lt;h2&gt;Progetto&lt;/h2&gt;&lt;/div&gt;</code></pre>
`),

  "/sicurezza": makePage("🔐 Sicurezza Informatica", `
<h1>🔐 Sicurezza Informatica</h1>
<h2>Password sicure</h2>
<pre><code class="language-js">const password = 'MyStrongPassword!123';</code></pre>
<p>Proteggi server e account seguendo regole di base.</p>
`),
};

// Rotte
for (const path in pages) {
  app.get(path, (req, res) => res.send(pages[path]));
}

app.listen(PORT, () => {
  console.log(`🔥 ULTRA PRO 3.0 attivo su http://localhost:${PORT}`);
});