function rot13(str) {
    const sg = str.replace(/[a-zA-Z]/gi, function (s) {
        return encoder(s);
    });

    return sg;
}

function encoder(msg) {
    return String.fromCharCode(msg.charCodeAt(0) + (msg.toLowerCase() < 'n' ? 13 : -13));
}

console.log(rot13("SERR CVMMN!")) //FREE PIZZA;
console.log(rot13("SERR PBQR PNZC")) //FREE PIZZA;
console.log(rot13("SERR YBIR?")) //FREE PIZZA;
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")) //FREE PIZZA;