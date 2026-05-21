<meta name='viewport' content='width=device-width, initial-scale=1'/><!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">

<meta
name="viewport"
content="width=device-width, initial-scale=1.0"
/>

<title>
Ritual Cyberpunk NFT
</title>

<link
rel="stylesheet"
href="style.css"
/>

<link
href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@400;600;700&display=swap"
rel="stylesheet"
/>

</head>

<body>

<div class="scanline"></div>

<!-- TOP NAVBAR -->

<div class="top-navbar">

<button
class="market-toggle"
onclick="toggleMarket()"
>
MARKET
</button>

</div>

<!-- MARKET SIDEBAR -->

<div
class="market-sidebar"
id="market-sidebar"
>

<div class="market-header">

<div class="market-title">
MARKET
</div>

<button
class="close-market"
onclick="toggleMarket()"
>
✕
</button>

</div>

<div
class="market-grid"
id="market-grid"
>

<!-- MARKET ITEMS AUTO -->

</div>

</div>

<!-- MAIN -->

<div class="container">

<!-- HERO -->

<div class="hero">

<div class="badge">
RITUAL TESTNET
</div>

<h1>
SUMMON<br>
CYBER ENTITY
</h1>

<p>
Mint futuristic cyberpunk entities powered by Ritual Testnet.
Every summon unlocks a mysterious AI character from the digital realm.
</p>

</div>

<!-- MAIN UI -->

<div class="top-ui">

<!-- LEFT -->

<div class="wallet-card">

<button
id="connect-wallet"
class="connect-btn"
>
CONNECT WALLET
</button>

<div id="wallet-address">
Wallet not connected
</div>

<!-- STATS -->

<div class="stats-row">

<div class="stat-box">

<div class="stat-label">
TOTAL MINTS
</div>

<div
class="stat-value"
id="mint-count"
>
0
</div>

</div>

<div class="stat-box">

<div class="stat-label">
SUPPLY LEFT
</div>

<div
class="stat-value"
id="live-supply"
>
5000
</div>

</div>

</div>

<!-- SUMMON -->

<div style="text-align:center">

<div class="summon-area">

<div class="summon-circle">

<div
class="ritual-card"
id="gacha-display"
>
?
</div>

</div>

</div>

<button
class="mint-btn"
id="mint-button"
>
SUMMON ENTITY
</button>

<div class="mint-desc">
POWERED BY RITUAL TESTNET
</div>

<div
class="scan-status"
id="scan-text"
>
AI ENTITY SCANNER READY
</div>

</div>

</div>

<!-- RIGHT -->

<div class="banner-wrap">

<img
src="assets/banner.png"
class="side-banner"
/>

<div class="banner-overlay"></div>

</div>

</div>

<!-- COLLECTION -->

<div class="collection-section">

<div class="collection-title">
ENTITY COLLECTION
</div>

<div class="filter-tabs">

<button
class="filter-btn active"
data-filter="all"
>
ALL
</button>

<button
class="filter-btn"
data-filter="legendary"
>
LEGENDARY
</button>

<button
class="filter-btn"
data-filter="epic"
>
EPIC
</button>

<button
class="filter-btn"
data-filter="rare"
>
RARE
</button>

<button
class="filter-btn"
data-filter="common"
>
COMMON
</button>

</div>

<div
class="collection-grid"
id="collection-grid"
>

<div class="empty">
No entities collected yet.
</div>

</div>

</div>

<!-- HISTORY -->

<div class="history-box">

<div class="history-title">
LATEST SUMMONS
</div>

<div
class="history-list"
id="history-list"
>

<div class="history-item">
No summons yet
</div>

</div>

</div>

</div>

<!-- MODAL -->

<div
class="modal"
id="modal"
>

<div class="modal-content">

<div id="modal-card"></div>

<button
class="close-btn"
onclick="closeModal()"
>
Close
</button>

</div>

</div>

<!-- SCRIPT -->

<script>

function toggleMarket(){

document
.getElementById('market-sidebar')
.classList.toggle('active');

}

</script>

<script src="script.js"></script>

</body>
</html><style>/* ========= RESET ========= */

*{
margin:0;
padding:0;
box-sizing:border-box;
}

:root{

--bg-primary:#07110b;
--bg-secondary:#0b1a12;
--bg-card:#102117;

--neon-green:#00ff88;
--neon-green2:#00cc6a;
--neon-green3:#66ffb2;

--neon-dark:#003b22;

--text:#e8fff4;
--text-dim:#8fbfa7;
}

html{
scroll-behavior:smooth;
}

body{

font-family:'Rajdhani',sans-serif;

background:
radial-gradient(circle at top,#00ff8822,transparent 40%),
radial-gradient(circle at bottom,#00ff8844,transparent 40%),
#07110b;

color:var(--text);

overflow-x:hidden;

min-height:100vh;

position:relative;
}

/* ========= GRID BG ========= */

body::before{

content:'';

position:fixed;
inset:0;

background:
linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),
linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);

background-size:40px 40px;

pointer-events:none;

z-index:-2;
}

/* ========= BIG GLOW ========= */

body::after{

content:'';

position:fixed;

top:-200px;
left:50%;

transform:translateX(-50%);

width:700px;
height:700px;

background:#00ff8810;

filter:blur(140px);

border-radius:50%;

pointer-events:none;

z-index:-3;

animation:bgPulse 6s ease-in-out infinite;
}

@keyframes bgPulse{

0%{
opacity:.4;
transform:translateX(-50%) scale(1);
}

50%{
opacity:.8;
transform:translateX(-50%) scale(1.1);
}

100%{
opacity:.4;
transform:translateX(-50%) scale(1);
}
}

/* ========= PARTICLES ========= */

.particle{

position:fixed;

width:4px;
height:4px;

background:#00ff88;

border-radius:50%;

pointer-events:none;

opacity:.5;

z-index:-1;

animation:floatParticle linear infinite;
}

@keyframes floatParticle{

from{

transform:
translateY(100vh)
translateX(0);

opacity:0;
}

20%{
opacity:.8;
}

80%{
opacity:.8;
}

to{

transform:
translateY(-100px)
translateX(80px);

opacity:0;
}
}

/* ========= SCANLINE ========= */

.scanline{

position:fixed;
inset:0;

pointer-events:none;

background:
linear-gradient(
to bottom,
transparent 95%,
rgba(0,255,136,.04) 100%
);

background-size:100% 6px;

mix-blend-mode:overlay;

opacity:.3;

z-index:9999;

animation:scanMove 8s linear infinite;
}

@keyframes scanMove{

from{
background-position:0 0;
}

to{
background-position:0 100px;
}
}

/* ========= CONTAINER ========= */

.container{

max-width:1400px;

margin:auto;

padding:40px;
}

/* ========= NAVBAR ========= */

.top-navbar{

position:fixed;

top:20px;
right:20px;

z-index:9999;
}

/* ========= MARKET BUTTON ========= */

.market-toggle{

padding:12px 20px;

border:none;

border-radius:14px;

cursor:pointer;

background:
linear-gradient(
135deg,
#00ff88,
#00cc6a
);

color:#02150b;

font-family:'Orbitron';

font-size:.75rem;

font-weight:700;

letter-spacing:2px;

box-shadow:
0 0 20px #00ff8866;

transition:.3s;
}

.market-toggle:hover{

transform:
translateY(-2px)
scale(1.02);

box-shadow:
0 0 35px #00ff8899;
}

/* ========= MARKET ========= */

.market-sidebar{

position:fixed;

top:0;
right:-430px;

width:430px;

height:100vh;

background:
linear-gradient(
180deg,
#08150d,
#07110b
);

border-left:
1px solid rgba(0,255,136,.15);

backdrop-filter:blur(20px);

padding:25px;

overflow-y:auto;

z-index:99999;

transition:.4s ease;
}

.market-sidebar.active{

right:0;
}

.market-header{

display:flex;

justify-content:space-between;

align-items:center;

margin-bottom:25px;
}

.market-title{

font-size:1.2rem;

font-family:'Orbitron';

letter-spacing:2px;

color:#66ffb2;

text-shadow:
0 0 10px #00ff88;
}

.close-market{

background:none;

border:none;

font-size:1.7rem;

color:#66ffb2;

cursor:pointer;

transition:.3s;
}

.close-market:hover{

transform:rotate(90deg);
}

/* ========= HERO ========= */

.hero{

text-align:center;

padding-top:60px;
}

.badge{

display:inline-block;

padding:10px 20px;

border-radius:999px;

background:#00ff8810;

border:1px solid #00ff8833;

backdrop-filter:blur(10px);

font-size:.8rem;

letter-spacing:3px;

color:#66ffb2;

margin-bottom:30px;

box-shadow:
0 0 20px #00ff8822;

animation:badgeGlow 2s infinite;
}

@keyframes badgeGlow{

0%{
box-shadow:0 0 10px #00ff8833;
}

50%{
box-shadow:0 0 30px #00ff8899;
}

100%{
box-shadow:0 0 10px #00ff8833;
}
}

.hero h1{

font-size:5rem;

font-family:'Orbitron';

line-height:.9;

background:
linear-gradient(
180deg,
#ffffff,
#66ffb2
);

-webkit-background-clip:text;
-webkit-text-fill-color:transparent;

text-shadow:
0 0 30px #00ff8844,
0 0 60px #00cc6a33;

animation:titlePulse 3s infinite;
}

@keyframes titlePulse{

0%{
transform:scale(1);
}

50%{
transform:scale(1.015);
}

100%{
transform:scale(1);
}
}

.hero p{

margin-top:25px;

max-width:700px;

margin-inline:auto;

font-size:1.1rem;

line-height:1.7;

color:var(--text-dim);
}

/* ========= MAIN UI ========= */

.top-ui{

margin-top:60px;

display:grid;

grid-template-columns:1fr 420px;

gap:50px;

align-items:start;
}

/* ========= WALLET ========= */

.wallet-card{

background:rgba(0,255,136,.03);

border:1px solid rgba(0,255,136,.1);

backdrop-filter:blur(20px);

border-radius:24px;

box-shadow:
0 0 40px #00ff8822;

padding:30px;

text-align:center;

position:relative;

overflow:hidden;
}

.wallet-card::before{

content:'';

position:absolute;

top:-120px;
left:-120px;

width:240px;
height:240px;

background:#00ff8822;

filter:blur(80px);

border-radius:50%;
}

/* ========= BUTTONS ========= */

.connect-btn,
.mint-btn,
.buy-btn{

background:
linear-gradient(
135deg,
#00ff88,
#00cc6a
);

color:#02150b;

font-family:'Orbitron';

font-weight:700;

cursor:pointer;

border:none;

transition:.3s;
}

.connect-btn{

width:100%;

padding:18px;

border-radius:18px;

letter-spacing:2px;

font-size:1rem;

box-shadow:
0 0 20px #00ff8866;
}

.connect-btn:hover{

transform:translateY(-4px);

box-shadow:
0 0 40px #00ff8899;
}

#wallet-address{

margin-top:18px;

font-size:.95rem;

color:#66ffb2;
}

/* ========= STATS ========= */

.stats-row{

display:grid;

grid-template-columns:1fr 1fr;

gap:15px;

margin-top:25px;
}

.stat-box{

background:#08150d;

border:1px solid #11331f;

padding:18px;

border-radius:18px;

transition:.3s;
}

.stat-box:hover{

transform:translateY(-3px);

box-shadow:
0 0 20px #00ff8833;
}

.stat-label{

font-size:.8rem;

letter-spacing:2px;

color:#66ffb2;
}

.stat-value{

margin-top:8px;

font-size:1.6rem;

font-family:'Orbitron';

text-shadow:
0 0 12px #00ff88;
}

/* ========= SUMMON ========= */

.summon-area{

display:flex;
justify-content:center;
align-items:center;

margin-top:25px;
}

.summon-circle{

width:420px;
height:420px;

border-radius:50%;

position:relative;

display:flex;
justify-content:center;
align-items:center;

background:
radial-gradient(
circle,
#00ff8822,
transparent 70%
);

box-shadow:
0 0 80px #00ff8844,
inset 0 0 60px #00cc6a22;

animation:circlePulse 4s infinite;
}

@keyframes circlePulse{

0%{
box-shadow:
0 0 60px #00ff8844,
inset 0 0 40px #00cc6a22;
}

50%{
box-shadow:
0 0 100px #00ff8899,
inset 0 0 70px #00cc6a44;
}

100%{
box-shadow:
0 0 60px #00ff8844,
inset 0 0 40px #00cc6a22;
}
}

.summon-circle::before{

content:'';

position:absolute;

inset:20px;

border-radius:50%;

border:
2px solid rgba(0,255,136,.15);

animation:
spin 10s linear infinite;
}

.summon-circle::after{

content:'';

position:absolute;

inset:45px;

border-radius:50%;

border:
1px dashed rgba(0,255,136,.15);

animation:
spinReverse 14s linear infinite;
}

@keyframes spin{

from{
transform:rotate(0deg);
}

to{
transform:rotate(360deg);
}
}

@keyframes spinReverse{

from{
transform:rotate(360deg);
}

to{
transform:rotate(0deg);
}
}

/* ========= RITUAL CARD ========= */

.ritual-card{

width:230px;
height:320px;

border-radius:30px;

background:
linear-gradient(
180deg,
#102117,
#07110b
);

border:1px solid rgba(0,255,136,.08);

display:flex;
justify-content:center;
align-items:center;

font-size:5rem;

overflow:hidden;

box-shadow:
0 0 40px #00ff8833,
inset 0 0 50px #00cc6a22;

animation:
floatCard 4s ease-in-out infinite,
cardGlow 3s infinite;

transition:.3s;
}

@keyframes cardGlow{

0%{
box-shadow:
0 0 30px #00ff8833;
}

50%{
box-shadow:
0 0 70px #00ff8899;
}

100%{
box-shadow:
0 0 30px #00ff8833;
}
}

.ritual-card img{

width:100%;
height:100%;

object-fit:cover;
}

@keyframes floatCard{

0%{
transform:translateY(0px);
}

50%{
transform:translateY(-10px);
}

100%{
transform:translateY(0px);
}
}

/* ========= MINT BUTTON ========= */

.mint-btn{

margin-top:40px;

padding:18px 45px;

border-radius:20px;

letter-spacing:2px;

font-size:1rem;

box-shadow:
0 0 30px #00ff8866;

animation:buttonPulse 2s infinite;
}

.mint-btn:hover{

transform:
translateY(-5px)
scale(1.02);

box-shadow:
0 0 50px #00ff8899;
}

@keyframes buttonPulse{

0%{
box-shadow:0 0 20px #00ff8844;
}

50%{
box-shadow:0 0 50px #00ff88aa;
}

100%{
box-shadow:0 0 20px #00ff8844;
}
}

/* ========= GLOW STATUS ========= */

.mint-desc,
.scan-status{

margin-top:18px;

letter-spacing:2px;

color:#00ff88;

animation:neonPulse 1.5s infinite;

text-shadow:
0 0 8px #00ff88,
0 0 18px #00ff88,
0 0 40px #00cc6a;
}

.mint-desc{

font-size:.85rem;
}

.scan-status{

font-size:.9rem;
}

@keyframes neonPulse{

0%{

opacity:.5;

text-shadow:
0 0 5px #00ff88,
0 0 10px #00ff88;
}

50%{

opacity:1;

text-shadow:
0 0 12px #00ff88,
0 0 25px #00ff88,
0 0 50px #00cc6a;
}

100%{

opacity:.5;

text-shadow:
0 0 5px #00ff88,
0 0 10px #00ff88;
}
}

/* ========= COLLECTION ========= */

.collection-section{

margin-top:90px;

background:
rgba(0,255,136,.03);

border:
1px solid rgba(0,255,136,.08);

backdrop-filter:blur(20px);

border-radius:32px;

padding:40px;
}

.collection-title{

font-size:2rem;

font-family:'Orbitron';

margin-bottom:30px;

text-align:center;

text-shadow:
0 0 20px #00ff88;
}

.filter-tabs{

display:flex;

justify-content:center;

gap:10px;

flex-wrap:wrap;

margin-bottom:35px;
}

.filter-btn{

padding:12px 18px;

border:none;

border-radius:14px;

cursor:pointer;

background:#08150d;

border:1px solid #11331f;

color:#66ffb2;

transition:.3s;
}

.filter-btn:hover{

transform:translateY(-2px);
}

.filter-btn.active{

background:#00cc6a;

color:#02150b;

box-shadow:
0 0 20px #00ff8866;
}

/* ========= NFT GRID ========= */

.collection-grid{

display:grid;

grid-template-columns:
repeat(auto-fill,minmax(240px,1fr));

gap:25px;
}

.nft-card{

background:
linear-gradient(
180deg,
#102117,
#07110b
);

border-radius:28px;

overflow:hidden;

border:1px solid rgba(0,255,136,.08);

transition:.3s;

position:relative;
}

.nft-card::before{

content:'';

position:absolute;

top:-100%;
left:-100%;

width:200%;
height:200%;

background:
linear-gradient(
45deg,
transparent,
rgba(255,255,255,.08),
transparent
);

transform:rotate(25deg);

transition:.6s;
}

.nft-card:hover::before{

top:100%;
left:100%;
}

.nft-card:hover{

transform:
translateY(-8px)
scale(1.02);

box-shadow:
0 0 40px #00ff8844;
}

.nft-image{

height:260px;

overflow:hidden;
}

.nft-image img{

width:100%;
height:100%;

object-fit:cover;

transition:.4s;
}

.nft-card:hover img{

transform:scale(1.08);
}

.nft-info{

padding:20px;
}

.nft-name{

font-size:1.2rem;

font-weight:700;
}

.nft-rarity{

margin-top:8px;

font-size:.8rem;

letter-spacing:2px;

color:#66ffb2;
}

.market-price{

margin-top:12px;

font-size:1rem;

letter-spacing:2px;

color:#66ffb2;
}

.buy-btn{

margin-top:18px;

width:100%;

padding:14px;

border-radius:14px;
}

/* ========= HISTORY ========= */

.history-box{

margin-top:50px;

background:
rgba(0,255,136,.03);

border:
1px solid rgba(0,255,136,.08);

border-radius:28px;

padding:30px;
}

.history-title{

font-size:1.5rem;

font-family:'Orbitron';

margin-bottom:20px;
}

.history-list{

display:flex;

flex-direction:column;

gap:15px;
}

.history-item{

padding:16px;

border-radius:18px;

background:#08150d;

border:1px solid #11331f;

color:#66ffb2;

animation:historyGlow 2s infinite;
}

@keyframes historyGlow{

0%{
box-shadow:0 0 5px #00ff8822;
}

50%{
box-shadow:0 0 20px #00ff8866;
}

100%{
box-shadow:0 0 5px #00ff8822;
}
}

/* ========= MODAL ========= */

.modal{

display:none;

position:fixed;
inset:0;

background:#000000dd;

backdrop-filter:blur(10px);

justify-content:center;
align-items:center;

z-index:99999;
}

.modal.active{

display:flex;
}

.modal-content{

background:#08150d;

border:1px solid #00ff8833;

padding:40px;

border-radius:30px;

text-align:center;

box-shadow:
0 0 60px #00ff8833;

animation:modalPop .4s ease;
}

@keyframes modalPop{

from{

opacity:0;
transform:scale(.8);
}

to{

opacity:1;
transform:scale(1);
}
}

.close-btn{

padding:14px 30px;

border:none;

border-radius:14px;

cursor:pointer;

background:#00cc6a;

color:#02150b;

font-weight:700;

margin-top:20px;
}

/* ========= MOBILE ========= */

@media(max-width:980px){

.container{
padding:20px;
}

.top-ui{
grid-template-columns:1fr;
}

.hero h1{
font-size:3rem;
}

.summon-circle{
width:320px;
height:320px;
}

.ritual-card{
width:180px;
height:250px;
}

.stats-row{
grid-template-columns:1fr;
}

.market-sidebar{
width:100%;
right:-100%;
}

.top-navbar{
top:15px;
right:15px;
}

.market-toggle{

padding:10px 16px;

font-size:.7rem;
}
}</style><script>const nftDatabase = [

{
id:1,
name:'Cat Signal Bronze',
rarity:'legendary',
price:'2.5 ETH',
image:'assets/nft1.png'
},

{
id:2,
name:'Cyber Oni',
rarity:'epic',
price:'1.2 ETH',
image:'assets/nft2.png'
},

{
id:3,
name:'Void Android',
rarity:'rare',
price:'0.6 ETH',
image:'assets/nft3.png'
},

{
id:4,
name:'Neon Rabbit',
rarity:'common',
price:'0.2 ETH',
image:'assets/nft4.png'
}

];

/* STORAGE */

let collection =
JSON.parse(
localStorage.getItem('ritualCollection')
) || {};

let totalMints =
Number(
localStorage.getItem('ritualMints')
) || 0;

let marketItems =
JSON.parse(
localStorage.getItem('ritualMarket')
) || [];

/* ELEMENTS */

const collectionGrid =
document.getElementById('collection-grid');

const marketGrid =
document.getElementById('market-grid');

const mintCount =
document.getElementById('mint-count');

const historyList =
document.getElementById('history-list');

/* SAVE */

function saveData(){

localStorage.setItem(
'ritualCollection',
JSON.stringify(collection)
);

localStorage.setItem(
'ritualMints',
totalMints
);

localStorage.setItem(
'ritualMarket',
JSON.stringify(marketItems)
);

}

/* MARKET TOGGLE */

function toggleMarket(){

document
.getElementById('market-sidebar')
.classList.toggle('active');

}

/* RANDOM NFT */

function getRandomNFT(){

const rand = Math.random()*100;

if(rand < 1){

return nftDatabase[0];

}

else if(rand < 10){

return nftDatabase[1];

}

else if(rand < 40){

return nftDatabase[2];

}

return nftDatabase[3];

}

/* STATS */

function updateStats(){

if(mintCount){

mintCount.innerText =
totalMints;

}

const supply =
document.getElementById('live-supply');

if(supply){

supply.innerText =
5000 - totalMints;

}

}

/* SOUND */

function playSummonSound(){

const audio =
new Audio(
'https://actions.google.com/sounds/v1/science_fiction/alien_beam.ogg'
);

audio.volume = 0.4;

audio.play();

}

/* PARTICLES */

function createParticles(){

for(let i=0;i<25;i++){

const particle =
document.createElement('div');

particle.className =
'particle';

particle.style.left =
Math.random()*100 + 'vw';

particle.style.animationDuration =
(2 + Math.random()*3) + 's';

particle.style.opacity =
Math.random();

document.body.appendChild(particle);

setTimeout(()=>{

particle.remove();

},4000);

}

}

/* FLASH */

function cinematicFlash(){

const flash =
document.createElement('div');

flash.className =
'flash active';

document.body.appendChild(flash);

setTimeout(()=>{

flash.remove();

},700);

}

/* HISTORY */

function addHistory(text){

if(!historyList) return;

const item =
document.createElement('div');

item.className =
'history-item';

item.innerText = text;

historyList.prepend(item);

if(historyList.children.length > 8){

historyList.lastChild.remove();

}

}

/* SUMMON NFT */

async function summonNFT(){

const display =
document.getElementById('gacha-display');

const scanText =
document.getElementById('scan-text');

display.classList.add('summoning');

playSummonSound();

createParticles();

if(scanText){

scanText.innerText =
'AI ENTITY SCANNING...';

}

const spinImages =
nftDatabase.map(n=>n.image);

let i = 0;

const spin = setInterval(()=>{

display.innerHTML = `
<img src="${spinImages[i % spinImages.length]}">
`;

i++;

},120);

await new Promise(
r=>setTimeout(r,2500)
);

clearInterval(spin);

display.classList.remove('summoning');

cinematicFlash();

const nft = getRandomNFT();

display.innerHTML = `
<img src="${nft.image}">
`;

display.className =
`ritual-card ${nft.rarity}`;

collection[nft.id] =
(collection[nft.id] || 0) + 1;

totalMints++;

saveData();

updateStats();

renderCollection();

showModal(nft);

addHistory(
`SUMMONED ${nft.name} • ${nft.rarity.toUpperCase()}`
);

if(scanText){

scanText.innerText =
`${nft.rarity.toUpperCase()} ENTITY DETECTED`;

}

setTimeout(()=>{

if(scanText){

scanText.innerText =
'AI ENTITY SCANNER READY';

}

},3000);

}

/* COLLECTION */

function renderCollection(filter='all'){

const items =
Object.entries(collection);

if(items.length === 0){

collectionGrid.innerHTML = `
<div class="empty">
No entities collected yet.
</div>
`;

return;

}

collectionGrid.innerHTML = '';

items.forEach(([id,count])=>{

const nft =
nftDatabase.find(
n=>n.id == id
);

if(
filter !== 'all'
&&
nft.rarity !== filter
){
return;
}

const card =
document.createElement('div');

card.className =
`nft-card ${nft.rarity}`;

card.innerHTML = `

<div class="nft-count">
x${count}
</div>

<div class="nft-image">
<img src="${nft.image}">
</div>

<div class="nft-info">

<div class="nft-name">
${nft.name}
</div>

<div class="nft-rarity">
${nft.rarity.toUpperCase()}
</div>

<div class="market-price">
${nft.price}
</div>

<button
class="buy-btn"
onclick="listToMarket(${nft.id})"
>
SELL ON MARKET
</button>

</div>
`;

collectionGrid.appendChild(card);

});

}

/* LIST NFT */

function listToMarket(id){

const nft =
nftDatabase.find(
n=>n.id == id
);

if(
!collection[id]
||
collection[id] <= 0
){
return;
}

collection[id]--;

marketItems.push({

id:nft.id,
name:nft.name,
rarity:nft.rarity,
price:nft.price,
image:nft.image,
seller:'0x' +
Math.random()
.toString(16)
.slice(2,8)

});

if(collection[id] <= 0){

delete collection[id];

}

saveData();

renderCollection();

renderMarket();

addHistory(
`LISTED ${nft.name} ON BLACK MARKET`
);

}

/* RENDER MARKET */

function renderMarket(){

if(!marketGrid) return;

if(marketItems.length === 0){

marketGrid.innerHTML = `
<div class="empty">
No market listings yet.
</div>
`;

return;

}

marketGrid.innerHTML = '';

marketItems.forEach((item,index)=>{

const card =
document.createElement('div');

card.className =
'market-card';

card.innerHTML = `

<div class="market-image">
<img src="${item.image}">
</div>

<div class="market-info">

<div class="market-name">
${item.name}
</div>

<div class="nft-rarity">
${item.rarity.toUpperCase()}
</div>

<div class="market-price">
${item.price}
</div>

<div class="seller-tag">
SELLER: ${item.seller}
</div>

<button
class="buy-btn"
onclick="buyMarketItem(${index})"
>
BUY ENTITY
</button>

</div>
`;

marketGrid.appendChild(card);

});

}

/* BUY NFT */

function buyMarketItem(index){

const item =
marketItems[index];

collection[item.id] =
(collection[item.id] || 0) + 1;

marketItems.splice(index,1);

saveData();

renderCollection();

renderMarket();

addHistory(
`PURCHASED ${item.name}`
);

}

/* MODAL */

function showModal(nft){

const modal =
document.getElementById('modal');

const modalCard =
document.getElementById('modal-card');

modalCard.innerHTML = `

<div class="nft-card ${nft.rarity} modal-card">

<div class="nft-image">
<img src="${nft.image}">
</div>

<div class="nft-info">

<div class="nft-name">
${nft.name}
</div>

<div class="nft-rarity">
${nft.rarity.toUpperCase()}
</div>

<div class="market-price">
${nft.price}
</div>

</div>

</div>
`;

modal.classList.add('active');

}

function closeModal(){

document
.getElementById('modal')
.classList.remove('active');

}

/* FILTER */

document
.querySelectorAll('.filter-btn')
.forEach(btn=>{

btn.addEventListener('click',()=>{

document
.querySelectorAll('.filter-btn')
.forEach(
b=>b.classList.remove('active')
);

btn.classList.add('active');

renderCollection(
btn.dataset.filter
);

});

});

/* CONNECT WALLET */

document
.getElementById('connect-wallet')
.addEventListener(
'click',
async()=>{

if(!window.ethereum){

alert('No wallet detected');

return;

}

const accounts =
await ethereum.request({

method:'eth_requestAccounts'

});

document
.getElementById('wallet-address')
.innerText =

accounts[0]
.slice(0,6)
+
'...'
+
accounts[0]
.slice(-4);

}
);

/* MINT */

document
.getElementById('mint-button')
.addEventListener(
'click',
async()=>{

if(!window.ethereum){

alert('No wallet detected');

return;

}

try{

const chainId =
await ethereum.request({

method:'eth_chainId'

});

if(chainId !== '0xaa36a7'){

alert(
'Switch to Sepolia Testnet'
);

return;

}

const accounts =
await ethereum.request({

method:'eth_requestAccounts'

});

const wallet =
accounts[0];

const mintBtn =
document.getElementById('mint-button');

mintBtn.innerText =
'CONFIRM TRANSACTION';

await ethereum.request({

method:'eth_sendTransaction',

params:[{

from:wallet,

to:wallet,

value:'0x38D7EA4C68000'

}]

});

mintBtn.innerText =
'AI SCANNING...';

await summonNFT();

mintBtn.innerText =
'SUMMON ENTITY';

}

catch(err){

console.log(err);

alert(
'Transaction cancelled'
);

document
.getElementById('mint-button')
.innerText =
'SUMMON ENTITY';

}

}
);

/* INIT */

renderCollection();

renderMarket();

updateStats();</script>