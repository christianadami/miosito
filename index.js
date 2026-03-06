const express = require("express");
const app = express();
const PORT = 6700;

app.get("/", (req, res) => {
res.send(`
<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<title>Christian Dev | Ultra Pro 2.0</title>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">
<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:'Orbitron', sans-serif;scroll-behavior:smooth;}
body{background:#0a0a0f;color:white;overflow-x:hidden;}
#particles{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;}
nav{position:fixed;width:100%;padding:20px;background:rgba(0,0,0,0.5);backdrop-filter:blur(10px);display:flex;justify-content:center;gap:40px;z-index:100;}
nav a{color:#00f7ff;text-decoration:none;transition:0.3s;}
nav a:hover{color:#ff00ff;text-shadow:0 0 10px #ff00ff;}
.hero{height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;}
.hero h1{font-size:50px;background:linear-gradient(90deg,#00f7ff,#ff00ff);-webkit-background-clip:text;color:transparent;animation:glow 2s infinite alternate;}
@keyframes glow{from{filter:drop-shadow(0 0 5px #00f7ff);}to{filter:drop-shadow(0 0 20px #ff00ff);}}
.hero p{margin-top:20px;opacity:0.8;}
.section{padding:100px 50px;text-align:center;opacity:0;transform:translateY(50px);transition:1s;}
.section.active{opacity:1;transform:translateY(0);}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:30px;margin-top:50px;}
.card{background:#111;padding:30px;border-radius:15px;transition:0.4s;box-shadow:0 0 15px rgba(0,247,255,0.1);cursor:pointer;}
.card:hover{transform:scale(1.05);box-shadow:0 0 25px #00f7ff;}
.card h3{color:#00f7ff;margin-bottom:15px;}
#detail{display:none;margin-top:50px;text-align:left;max-width:900px;margin-left:auto;margin-right:auto;padding:30px;background:#111;border-radius:15px;box-shadow:0 0 25px rgba(0,247,255,0.4);animation:fadein 0.5s;}
#detail h2{color:#ff00ff;margin-bottom:20px;}
#detail p{margin-bottom:15px;line-height:1.5;}
#detail pre{background:#1c1c1c;padding:15px;border-radius:10px;overflow-x:auto;}
#backBtn{display:inline-block;margin-top:20px;padding:10px 20px;background:#00f7ff;color:#000;border:none;border-radius:10px;cursor:pointer;transition:0.3s;}
#backBtn:hover{background:#ff00ff;color:#fff;}
@keyframes fadein{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:translateY(0);}}
footer{padding:40px;text-align:center;background:#000;}
</style>
</head>
<body>

<canvas id="particles"></canvas>

<nav>
<a href="#idee">Idee</a>
<a href="#progetti">Progetti</a>
<a href="#sicurezza">Sicurezza</a>
</nav>

<div class="hero">
<h1>ULTRA DEV 2.0 EXPERIENCE</h1>
<p>Impara Coding, Bot Discord, Sicurezza, Siti Web</p>
</div>

<section class="section" id="idee">
<h2>💡 IDEE PER IMPARARE</h2>
<div class="cards">
<div class="card" onclick="showDetail('bot')"><h3>🤖 Bot Discord</h3><p>Clicca per vedere i tutorial</p></div>
<div class="card" onclick="showDetail('web')"><h3>🌐 Web Dev</h3><p>Clicca per vedere i tutorial</p></div>
<div class="card" onclick="showDetail('logica')"><h3>🧠 Logica</h3><p>Clicca per vedere i tutorial</p></div>
</div>
</section>

<section class="section" id="progetti">
<h2>🚀 PROGETTI</h2>
<div class="cards">
<div class="card" onclick="showDetail('dashboard')"><h3>Dashboard Bot</h3><p>Clicca per tutorial completo</p></div>
<div class="card" onclick="showDetail('portfolio')"><h3>Portfolio Dev</h3><p>Clicca per vedere come creare</p></div>
</div>
</section>

<section class="section" id="sicurezza">
<h2>🔐 Sicurezza Informatica</h2>
<div class="cards">
<div class="card" onclick="showDetail('sicurezza')"><h3>Hacking Etico</h3><p>Clicca per tutorial</p></div>
</div>
</section>

<div id="detail"></div>

<footer>
Christian Dev © 2026
</footer>

<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>

<script>
// SCROLL ANIMATION
const sections = document.querySelectorAll(".section");
window.addEventListener("scroll", () => {
sections.forEach(sec=>{
const top = sec.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
sec.classList.add("active");
}
});
});

// PARTICLE BACKGROUND
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particles = [];
for(let i=0;i<100;i++){
particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
radius:Math.random()*2,
dx:(Math.random()-0.5),
dy:(Math.random()-0.5)
});
}
function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
particles.forEach(p=>{
p.x+=p.dx;
p.y+=p.dy;
if(p.x<0||p.x>canvas.width) p.dx*=-1;
if(p.y<0||p.y>canvas.height) p.dy*=-1;
ctx.beginPath();
ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);
ctx.fillStyle="#00f7ff";
ctx.fill();
});
requestAnimationFrame(animate);
}
animate();

// TABS / DETAIL
function showDetail(tab){
const detail = document.getElementById("detail");
let html = "";
if(tab==="bot"){
html = "<h2>🤖 Bot Discord</h2><p>Installa Node.js e discord.js</p><p>Crea comandi, ticket system, musica</p><pre><code class='language-js'>const Discord = require('discord.js');\nconst client = new Discord.Client();\nclient.login('TOKEN');</code></pre>";
}
else if(tab==="web"){
html = "<h2>🌐 Web Dev</h2><p>HTML, CSS, JS con esempi pratici:</p><pre><code class='language-html'>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n&lt;body&gt;\n&lt;h1&gt;Hello World&lt;/h1&gt;\n&lt;/body&gt;\n&lt;/html&gt;</code></pre>";
}
else if(tab==="logica"){
html = "<h2>🧠 Logica</h2><p>Esempio JS:</p><pre><code class='language-js'>let x = 10;\nfor(let i=0;i<5;i++){\n  console.log(x+i);\n}</code></pre>";
}
else if(tab==="dashboard"){
html = "<h2>📊 Dashboard Bot</h2><p>Come collegare bot e dashboard:</p><pre><code class='language-js'>fetch('/api/users')\n.then(res=>res.json())\n.then(data=>console.log(data));</code></pre>";
}
else if(tab==="portfolio"){
html = "<h2>💎 Portfolio Dev</h2><p>Pagina progetto esempio:</p><pre><code class='language-html'>&lt;div class='project'&gt;&lt;h2&gt;Progetto&lt;/h2&gt;&lt;/div&gt;</code></pre>";
}
else if(tab==="sicurezza"){
html = "<h2>🔐 Sicurezza</h2><p>Consigli base:</p><pre><code class='language-js'>const password = 'MyStrongPassword!123';\nconsole.log('Proteggi le tue credenziali');</code></pre>";
}
html += "<button id='backBtn' onclick='closeDetail()'>🔙 Torna Indietro</button>";
detail.innerHTML = html;
detail.style.display="block";
detail.scrollIntoView({behavior:'smooth'});
hljs.highlightAll();
}

function closeDetail(){
const detail = document.getElementById("detail");
detail.style.display="none";
window.scrollTo({top:0,behavior:'smooth'});
}
</script>

</body>
</html>
`);
});

app.listen(PORT, () => {
console.log("🔥 ULTRA PRO 2.0 TUTORIAL attivo su http://localhost:" + PORT);
});