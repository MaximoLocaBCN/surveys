

import routes from 'routes.json';

const CryptoJS = require('crypto-js');


function getFriendlyUrl(lang, key) {
    const route = routes.find(r => r.key === key);
    if (route) {
        const url = route.routes[lang];
        if (url) return url;
        else return route.routes['en'];
    }
}

function formatNumber(amount, decimalScale = 2) {
    return (Math.round((amount + Number.EPSILON) * 100) / 100).toFixed(decimalScale);
}

function formatPrice(amount) {
    // USING de-DE instead es-ES because this has bug with decimals
    const formatter = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 2,
    });

    const fraction = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0,
    });

    if (amount % 1 === 0) return fraction.format(amount);
    return formatter.format(amount);
}



function encrypt(value) {
    let val = CryptoJS.DES.encrypt(value, "locabarcelona").toString()
    val = val.replaceAll('+', 'xMl3Jk').replaceAll('/', 'Por21Ld').replaceAll('=', 'Ml32');
    return val;
}

function decrypt(value) {
    let val = value.replaceAll('xMl3Jk', '+').replaceAll('Por21Ld', '/').replaceAll('Ml32', '=');
    val = CryptoJS.DES.decrypt(val, "locabarcelona").toString(CryptoJS.enc.Utf8)
    return val;
}


export { getFriendlyUrl, formatNumber, formatPrice, encrypt, decrypt };
