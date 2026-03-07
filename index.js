const express = require("express");
const app = express();

// CSS + effetti
const style = `
*{margin:0;padding:0;box-sizing:border-box;font-family:'Orbitron', sans-serif;scroll-behavior:smooth;}
body{background:#0a0a0f;color:white;overflow-x:hidden;}
#particles{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;}
nav{position:fixed;width:100%;padding:20px;background:rgba(0,0,0,0.5);backdrop-filter:blur(10px);display:flex;justify-content:center;gap:40px;z-index:100;}
nav a{color:#00f7ff;text-decoration:none;transition:0.3s;}
nav a:hover{color:#ff00ff;text-shadow:0 0 10px #ff00ff;}
.hero{height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;}
.hero h1{font-size:50px;background:linear-gradient(90deg,#00f7ff,#ff00ff);-webkit-background-clip:text;color:transparent;}
.section{padding:100px 50px;text-align:center;}
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:30px;margin-top:50px;}
.card{background:#111;padding:30px;border-radius:15px;transition:0.4s;box-shadow:0 0 15px rgba(0,247,255,0.1);cursor:pointer;}
.card:hover{transform:scale(1.05);box-shadow:0 0 25px #00f7ff;}
#detail{display:none;margin-top:50px;text-align:left;max-width:900px;margin-left:auto;margin-right:auto;padding:30px;background:#111;border-radius:15px;}
pre{background:#1c1c1c;padding:15px;border-radius:10px;overflow-x:auto;}
button{display:inline-block;margin-top:20px;padding:10px 20px;background:#00f7ff;color:#000;border:none;border-radius:10px;cursor:pointer;}
footer{padding:40px;text-align:center;background:#000;margin-top:50px;}
`;

// Pagina principale
app.get("/", (req,res)=>{

res.send(`

<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<title>Christian Dev | Tutorials 3.0</title>

<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">

<link rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css">

<style>
${style}
</style>

</head>

<body>

<canvas id="particles"></canvas>

<nav>
<a href="/">Home</a>
<a href="#tutorial">Tutorial</a>
<a href="#progetti">Progetti</a>
</nav>

<div class="hero">
<h1>ULTRA DEV 3.0 EXPERIENCE</h1>
<p>Impara Coding, Bot, Web Dev e Sicurezza</p>
</div>

<section id="tutorial" class="section">

<h2>📚 Tutorial</h2>

<div class="cards">

<div class="card" onclick="showDetail('bot')">
<h3>🤖 Bot Discord</h3>
<p>Tutorial passo passo</p>
</div>

<div class="card" onclick="showDetail('web')">
<h3>🌐 Web Dev</h3>
<p>Tutorial passo passo</p>
</div>

<div class="card" onclick="showDetail('logica')">
<h3>🧠 Logica</h3>
<p>Tutorial passo passo</p>
</div>

</div>

</section>

<section id="progetti" class="section">

<h2>🚀 Progetti</h2>

<div class="cards">

<div class="card" onclick="showDetail('dashboard')">
<h3>📊 Dashboard Bot</h3>
</div>

<div class="card" onclick="showDetail('portfolio')">
<h3>💎 Portfolio Dev</h3>
</div>

<div class="card" onclick="showDetail('sicurezza')">
<h3>🔐 Sicurezza</h3>
</div>

</div>

</section>

<div id="detail"></div>

<footer>
Christian Dev © 2026
</footer>

<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>

<script>

hljs.highlightAll()

// PARTICLES
const canvas = document.getElementById("particles")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particles=[]

for(let i=0;i<80;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2,
dx:(Math.random()-0.5),
dy:(Math.random()-0.5)

})

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{

p.x+=p.dx
p.y+=p.dy

if(p.x<0||p.x>canvas.width) p.dx*=-1
if(p.y<0||p.y>canvas.height) p.dy*=-1

ctx.beginPath()
ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
ctx.fillStyle="#00f7ff"
ctx.fill()

})

requestAnimationFrame(animate)

}

animate()

// TUTORIAL DETAILS

function showDetail(tab){

const detail=document.getElementById("detail")

let html=""

if(tab==="bot"){

html=\`
<h2>🤖 Bot Discord</h2>

<p>1️⃣ Installa discord.js</p>

<pre><code class="language-bash">
npm install discord.js
</code></pre>

<p>2️⃣ Codice base</p>

<pre><code class="language-js">
const {Client} = require('discord.js')

const client = new Client()

client.login("TOKEN")
</code></pre>

\`

}

if(tab==="web"){

html=\`

<h2>🌐 Web Dev</h2>

<pre><code class="language-html">
&lt;h1&gt;Ciao mondo&lt;/h1&gt;
</code></pre>

<pre><code class="language-css">
body{
background:black;
color:white;
}
</code></pre>

\`

}

if(tab==="logica"){

html=\`

<h2>🧠 Logica</h2>

<pre><code class="language-js">
for(let i=0;i<5;i++){

console.log(i)

}
</code></pre>

\`

}

if(tab==="dashboard"){

html=\`

<h2>📊 Dashboard Bot</h2>

<pre><code class="language-js">
fetch("/api/users")

.then(res=>res.json())

.then(data=>console.log(data))
</code></pre>

\`

}

if(tab==="portfolio"){

html=\`

<h2>💎 Portfolio Dev</h2>

<pre><code class="language-html">
&lt;div class="project"&gt;

&lt;h2&gt;Progetto&lt;/h2&gt;

&lt;/div&gt;
</code></pre>

\`

}

if(tab==="sicurezza"){

html=\`

<h2>🔐 Sicurezza</h2>

<p>Usa password forti e non condividere token.</p>

\`

}

html+=\`<button onclick="closeDetail()">Torna indietro</button>\`

detail.innerHTML=html
detail.style.display="block"

detail.scrollIntoView({behavior:"smooth"})

hljs.highlightAll()

}

function closeDetail(){

document.getElementById("detail").style.display="none"

}

</script>

</body>
</html>

`)

})

// necessario per Vercel
module.exports = app