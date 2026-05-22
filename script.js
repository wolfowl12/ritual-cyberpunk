const nftDatabase = [

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

updateStats();

updateWalletUI();
