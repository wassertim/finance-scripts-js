import {JSDOM} from 'jsdom';

function getliquidCryptos(document) {    
    var liquidCryptosNodes = Array.from(document.querySelectorAll('.css-1sud65k'));    

    return liquidCryptosNodes.map((currencyColumn) => {
        const pair1 = currencyColumn.querySelector('.css-17wnpgm').textContent;
        const pair2 = currencyColumn.querySelector('.css-iognj9').textContent;
        return pair1 + pair2;
    });    
}

async function getDocument(url) {
    const jsdom = await JSDOM.fromURL(url);
    return jsdom.window.document;    
}

(async () => {        
    var document = await getDocument('https://www.binance.com/en/markets/spot-BTC');
    var cryptos = getliquidCryptos(document);
    console.log(cryptos.map(v => `"${v}"`).join(', '));    
})();
