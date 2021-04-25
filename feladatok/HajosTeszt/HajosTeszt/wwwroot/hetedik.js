var kérdések;
var kérdésSorszám = 0;

function letöltés() {
    fetch('question.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data))

}
function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d
    kérdésMegjelenítés(0);
}
var kérdésMegjelenítés = function (kérdésSzáma) {
    let kérdés_szöveg = documentum.getElementById("kérdés_szöveg");
    let kép = document.getElementById("kép1");
    let válasz1 = document.getElementById("válasz1")
    let válasz2 = document.getElementById("válasz2")
    let válasz3 = document.getElementById("válasz3")
}
kérdés_szöveg.innerHTML = kérdések[kérdésSzáma].questionText
kép.src = " https://szoft1.comeback.hu/hajo/" + kérdések[kérdésSzáma].image
válasz1.innerText = kérdések[kérdésSzáma].answer1
válasz2.innerText = kérdések[kérdésSzáma].answer2
válasz3.innerText = kérdések[kérdésSzáma].answer3

window.onload = () => {

    letöltés();

    function Vissza() {
        if (kérdésSzáma == 0) {
            kérdésSzáma = kérdések.length - 1;
            letöltés();
        }
        else {
            kérdésSzáma--;
            letöltés();
        }
    }
    function Előre() {
        if (kérdésSzáma = kérdések.length - 1) {
            kérdésSzáma = 0;
            letöltés();
        }
        else {
            kérdésSzáma++;
            letöltés();
        }
    }
    document.getElementById("válasz1").onclick = () => {

        if (kérdések[kérdésSorszám].correctAnswer == 1) {
            document.getElementById("válasz1").style.background = "blue";
        }
        else {
            document.getElementById("válasz1").style.background = "green";
            document.getElementById("válasz" + kérdések[kérdésSorszám].correctAnswer).style.background = "blue";
        }

        document.getElementById("válasz1").style.pointerEvents = 'none';
        document.getElementById("válasz2").style.pointerEvents = 'none';
        document.getElementById("válasz3").style.pointerEvents = 'none';

    }

    document.getElementById("válasz2").onclick = () => {

        if (kérdések[kérdésSorszám].correctAnswer == 2) {
            document.getElementById("válasz2").style.background = "blue";
        }
        else {
            document.getElementById("válasz2").style.background = "green";
            document.getElementById("válasz" + kérdések[kérdésSorszám].correctAnswer).style.background = "blue";
        }

        document.getElementById("válasz1").style.pointerEvents = 'none';
        document.getElementById("válasz2").style.pointerEvents = 'none';
        document.getElementById("válasz3").style.pointerEvents = 'none';
    }

    document.getElementById("válasz3").onclick = () => {

        if (kérdések[kérdésSorszám].correctAnswer == 3) {
            document.getElementById("válasz3").style.background = "blue";
        }
        else {
            document.getElementById("válasz3").style.background = "green";
            document.getElementById("válasz" + kérdések[kérdésSorszám].correctAnswer).style.background = "blue";
        }

        document.getElementById("válasz1").style.pointerEvents = 'none';
        document.getElementById("válasz2").style.pointerEvents = 'none';
        document.getElementById("válasz3").style.pointerEvents = 'none';
    }
    fetch('/questions/1')
        .then(response => response.json())
        .then(data => kérdésMegjelenítés(data)
        );

    function kérdésMegjelenítés(kérdés) {
        console.log(kérdés);
        document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
        document.getElementById("válasz1").innerText = kérdés.answer1
        document.getElementById("válasz2").innerText = kérdés.answer2
        document.getElementById("válasz3").innerText = kérdés.answer3
        document.getElementById("kép").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;  
}