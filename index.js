const express = require("express");
const app = express();
const PORT = 6700;

app.get("/", (req, res) => {
res.send(`
<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<title>Christian Dev | Ultra Pro</title>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">

<style>
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Orbitron', sans-serif;
scroll-behavior:smooth;
}

body{
background:#0a0a0f;
color:white;
overflow-x:hidden;
}

/* PARTICLE CANVAS */
#particles{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
z-index:-1;
}

/* NAVBAR */
nav{
position:fixed;
width:100%;
padding:20px;
background:rgba(0,0,0,0.5);
backdrop-filter:blur(10px);
display:flex;
justify-content:center;
gap:40px;
z-index:100;
}

nav a{
color:#00f7ff;
text-decoration:none;
transition:0.3s;
}

nav a:hover{
color:#ff00ff;
text-shadow:0 0 10px #ff00ff;
}

/* HERO */
.hero{
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
}

.hero h1{
font-size:50px;
background:linear-gradient(90deg,#00f7ff,#ff00ff);
-webkit-background-clip:text;
color:transparent;
animation:glow 2s infinite alternate;
}

@keyframes glow{
from{filter:drop-shadow(0 0 5px #00f7ff);}
to{filter:drop-shadow(0 0 20px #ff00ff);}
}

.hero p{
margin-top:20px;
opacity:0.8;
}

/* SECTIONS */
.section{
padding:100px 50px;
text-align:center;
opacity:0;
transform:translateY(50px);
transition:1s;
}

.section.active{
opacity:1;
transform:translateY(0);
}

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:30px;
margin-top:50px;
}

.card{
background:#111;
padding:30px;
border-radius:15px;
transition:0.4s;
box-shadow:0 0 15px rgba(0,247,255,0.1);
}

.card:hover{
transform:scale(1.05);
box-shadow:0 0 25px #00f7ff;
}

.card h3{
color:#00f7ff;
margin-bottom:15px;
}

footer{
padding:40px;
text-align:center;
background:#000;
}
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
<h1>ULTRA DEV EXPERIENCE</h1>
<p>Impara Coding, Bot Discord, hacking e sicurezza, Siti Web</p>
</div>

<section class="section" id="idee">
<h2>💡 IDEE PER IMPARARE</h2>
<div class="cards">
<div class="card">
<h3>🤖 Bot Discord</h3>
<p>Dashboard, ticket system, musica, verifiche.</p>
</div>
<div class="card">
<h3>🌐 Web Dev</h3>
<p>HTML, CSS, JS con animazioni moderne.</p>
</div>
<div class="card">
<h3>🧠 Logica</h3>
<p>Variabili, funzioni, algoritmi spiegati semplice.</p>
</div>
</div>
</section>

<section class="section" id="progetti">
<h2>🚀 PROGETTI</h2>
<div class="cards">
<div class="card">
<h3>Mini Social</h3>
<p>Crea un social con login.</p>
</div>
<div class="card">
<h3>Dashboard Bot</h3>
<p>Collega sito e bot Discord.</p>
</div>
<div class="card">
<h3>Portfolio Dev</h3>
<p>Mostra i tuoi lavori online.</p>
</div>
</div>
</section>

<section class="section" id="sicurezza">
<h2>🔐 Sicurezza Informatica</h2>
<div class="cards">
<div class="card">
<h3>Hacking Etico</h3>
<p>Impara a proteggere server e account.</p>
</div>
<div class="card">
<h3>Password Security</h3>
<p>Come creare password forti.</p>
</div>
</div>
</section>

<footer>
Christian Dev © 2026
</footer>

<script>

/* SCROLL ANIMATION */
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
sections.forEach(sec=>{
const top = sec.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
sec.classList.add("active");
}
});
});

/* PARTICLE BACKGROUND */
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

</script>

</body>
</html>
`);
});

app.listen(PORT, () => {
console.log("🔥 SITO attivo! su http://localhost:" + PORT);
});