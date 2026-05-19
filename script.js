<meta name='viewport' content='width=device-width, initial-scale=1'/><!DOCTYPE html>
<html lang="en">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Ritual Cyberpunk NFT</title>

<link rel="stylesheet" href="style.css">

<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@400;600;700&display=swap" rel="stylesheet">

</head>

<body>

<div class="scanline"></div>

<div class="container">

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

<div class="top-ui">

<div class="wallet-card">

<button id="connect-wallet" class="connect-btn">
CONNECT WALLET
</button>

<div id="wallet-address">
Wallet not connected
</div>

<div style="text-align:center">

<div class="summon-area">

<div class="summon-circle">

<div class="ritual-card" id="gacha-display">
?
</div>

</div>

</div>

<button class="mint-btn" id="mint-button">
SUMMON ENTITY
</button>

<div class="mint-desc">
POWERED BY RITUAL TESTNET
</div>

</div>

</div>

<img
src="assets/banner.png"
class="side-banner"
/>

</div>

<div class="collection-section">

<div class="collection-title">
ENTITY COLLECTION
</div>

<div class="filter-tabs">

<button class="filter-btn active" data-filter="all">
ALL
</button>

<button class="filter-btn" data-filter="legendary">
LEGENDARY
</button>

<button class="filter-btn" data-filter="epic">
EPIC
</button>

<button class="filter-btn" data-filter="rare">
RARE
</button>

<button class="filter-btn" data-filter="common">
COMMON
</button>

</div>

<div class="collection-grid" id="collection-grid">

<div class="empty">
No entities collected yet.
</div>

</div>

</div>

</div>

<div class="modal" id="modal">

<div class="modal-content">

<div id="modal-card"></div>

<button class="close-btn" onclick="closeModal()">
Close
</button>

</div>

</div>

<script src="script.js"></script>

</body>
</html><style>*{
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

body{

font-family:'Rajdhani',sans-serif;

background:
radial-gradient(circle at top,#00ff8822,transparent 40%),
radial-gradient(circle at bottom,#00ff8844,transparent 40%),
#07110b;

color:var(--text);

overflow-x:hidden;

min-height:100vh;
}

body::before{

content:'';

position:fixed;
inset:0;

background:
linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),
linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);

background-size:40px 40px;

pointer-events:none;

z-index:-1;
}

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
}

.container{

max-width:1400px;

margin:auto;

padding:40px;
}

.hero{

text-align:center;

padding-top:30px;
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
}

.hero p{

margin-top:25px;

max-width:700px;

margin-inline:auto;

font-size:1.1rem;

line-height:1.7;

color:var(--text-dim);
}

.top-ui{

margin-top:60px;

display:grid;

grid-template-columns:1fr 420px;

gap:50px;

align-items:center;
}

.wallet-card{

background:rgba(0,255,136,.03);

border:1px solid rgba(0,255,136,.1);

backdrop-filter:blur(20px);

border-radius:24px;

box-shadow:
0 0 40px #00ff8822;

padding:30px;

text-align:center;
}

.connect-btn{

width:100%;

padding:18px;

border:none;

border-radius:18px;

cursor:pointer;

background:
linear-gradient(
135deg,
#00ff88,
#00cc6a
);

color:#02150b;

font-family:'Orbitron';

letter-spacing:2px;

font-size:1rem;

font-weight:700;

box-shadow:
0 0 20px #00ff8866;

transition:.3s;
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

.summon-area{

display:flex;
justify-content:center;
align-items:center;
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
}

.ritual-card img{

width:100%;
height:100%;

object-fit:cover;
}

.mint-btn{

margin-top:40px;

padding:18px 45px;

border:none;

border-radius:20px;

cursor:pointer;

background:
linear-gradient(
135deg,
#00ff88,
#00cc6a
);

font-family:'Orbitron';

letter-spacing:2px;

font-size:1rem;

color:#02150b;

font-weight:700;

box-shadow:
0 0 30px #00ff8866;

transition:.3s;
}

.mint-btn:hover{

transform:
translateY(-5px)
scale(1.02);

box-shadow:
0 0 50px #00ff8899;
}

.mint-desc{

margin-top:18px;

font-size:.85rem;

letter-spacing:3px;

color:#66ffb2;
}

.side-banner{

width:100%;

border-radius:30px;

border:1px solid rgba(0,255,136,.1);

box-shadow:0 0 60px #00ff8822;
}

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

.filter-btn.active{

background:#00cc6a;

color:#02150b;

border-color:#00ff88;
}

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

.nft-card:hover{

transform:
translateY(-8px)
scale(1.02);

box-shadow:

0 0 40px #00ff8844,
0 0 80px #00cc6a22;
}

.nft-card.legendary{

border-color:#66ffb2;
}

.nft-card.epic{

border-color:#00ff88;
}

.nft-card.rare{

border-color:#00cc6a;
}

.nft-card.common{

border-color:#244433;
}

.nft-image{

height:260px;

background:
radial-gradient(
circle,
#00ff8822,
transparent 70%
);

display:flex;
justify-content:center;
align-items:center;

overflow:hidden;
}

.nft-image img{

width:100%;
height:100%;

object-fit:cover;
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

letter-spacing:2px;

font-size:.8rem;

color:#66ffb2;
}

.nft-count{

position:absolute;

top:15px;
right:15px;

background:#000000aa;

padding:8px 12px;

border-radius:999px;

font-size:.8rem;

backdrop-filter:blur(10px);

color:#66ffb2;
}

.empty{

text-align:center;

padding:60px;

color:#66ffb2;
}

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
}

.modal-card{

width:280px;

margin-bottom:25px;
}

.close-btn{

padding:14px 30px;

border:none;

border-radius:14px;

cursor:pointer;

background:#00cc6a;

color:#02150b;

font-weight:700;
}

@media(max-width:980px){

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
}</style><script>const nftDatabase = [

{
id:1,
name:'Cat Signal Bronze',
rarity:'legendary',
image:'assets/nft1.png'
},

{
id:2,
name:'Cyber Oni',
rarity:'epic',
image:'assets/nft2.png'
},

{
id:3,
name:'Void Android',
rarity:'rare',
image:'assets/nft3.png'
},

{
id:4,
name:'Neon Rabbit',
rarity:'common',
image:'assets/nft4.png'
}

];

let collection = {};

const collectionGrid =
document.getElementById('collection-grid');

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

async function summonNFT(){

const display =
document.getElementById('gacha-display');

const spinImages =
nftDatabase.map(n=>n.image);

let i = 0;

const spin = setInterval(()=>{

display.innerHTML = `
<img src="${spinImages[i % spinImages.length]}">
`;

i++;

},120);

await new Promise(r=>setTimeout(r,2500));

clearInterval(spin);

const nft = getRandomNFT();

display.innerHTML = `
<img src="${nft.image}">
`;

collection[nft.id] =
(collection[nft.id] || 0) + 1;

renderCollection();

showModal(nft);
}

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
nftDatabase.find(n=>n.id == id);

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

</div>
`;

collectionGrid.appendChild(card);

});
}

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

document
.getElementById('connect-wallet')
.addEventListener(
'click',
async()=>{

try{

if(window.ethereum){

const accounts =
await ethereum.request({
method:'eth_requestAccounts'
});

const wallet =
accounts[0];

document
.getElementById('wallet-address')
.innerText =

wallet.slice(0,6)
+
'...'
+
wallet.slice(-4);

const btn =
document.getElementById('connect-wallet');

btn.innerText =
'WALLET CONNECTED';

btn.style.opacity = '0.8';

btn.style.pointerEvents = 'none';

}

else{

window.location.href =
'https://metamask.app.link/dapp/'
+
window.location.host;

}

}

catch(err){

console.log(err);

alert('Wallet connection failed');

}

}
);

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

alert('Switch to Sepolia Testnet');
return;

}

const accounts =
await ethereum.request({
method:'eth_requestAccounts'
});

const wallet = accounts[0];

const mintBtn =
document.getElementById('mint-button');

mintBtn.innerText =
'CONFIRM TRANSACTION';

const tx = await ethereum.request({

method:'eth_sendTransaction',

params:[{

from:wallet,

to:wallet,

value:'0x38D7EA4C68000'

}]

});

console.log(tx);

mintBtn.innerText =
'SUMMONING ENTITY...';

await summonNFT();

mintBtn.innerText =
'SUMMON ENTITY';

}

catch(err){

console.log(err);

alert('Transaction cancelled');

document
.getElementById('mint-button')
.innerText =
'SUMMON ENTITY';

}

}
);</script>