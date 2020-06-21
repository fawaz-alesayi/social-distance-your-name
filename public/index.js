$('document').ready(() => {
    document.body.style.background = generateRandomPastel(); 
})

function generateRandomPastel() {
    let hue = Math.floor(Math.random() * 360);
    let pastel = 'hsl(' + hue + ', 100%, 87.5%)';
    return pastel;
}

document.getElementById('input').addEventListener('input', sepName)
const initialForms = {
    "ب": "&#xFE91",
    "ت": "&#xFE97",
    "ث": "&#xFE9B",
    "ج": "&#xFE9F",
    "ح": "&#xFEA3",
    "خ": "&#xFEA7",
    "س": "&#xFEB3",
    "ش": "&#xFEB7",
    "ص": "&#xFEBB",
    "ض": "&#xFEBF",
    "ط": "&#xFEC3",
    "ظ": "&#xFEC7",
    "ع": "&#xFECB",
    "غ": "&#xFECF",
    "ف": "&#xFED3",
    "ق": "&#xFED7",
    "ك": "&#xFEDB",
    "ل": "&#xFEDF",
    "م": "&#xFEE3",
    "ن": "&#xFEE7",
    "ه": "&#xFEEB",
    "ي": "&#xFEF3"
}

const finalForms = {
    "ه": "&#xFEEA",
    "ة": "&#xFE94",
    "ي": "&#xFEF2"
}

const connectedForms = {
    "ئ": "&#xFE8B",
}

function sepName() {
    let name = document.getElementById('input').value
    let nameArr = name.split('')
    let length = name.length
    console.log(name.split(''))

    let seperatedName = nameArr.map((letter, index) => {
        if (letter in initialForms && index !== length - 1)
            return letter + "ـ"
        else if (letter in finalForms && nameArr[index - 1] in initialForms)
            return finalForms[letter]
        else if (letter in connectedForms)
            return connectedForms[letter]
        else
            return letter
    })

    document.getElementById('name').innerHTML = seperatedName.join(' ')
}

function copyDiv() {
    var range = document.createRange();
    range.selectNode(document.getElementById("name"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}