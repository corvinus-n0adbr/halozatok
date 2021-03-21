﻿window.onload = () => {
    console.log("Betöltődött");
    var faktorialisR = (n) => {
        if (n === 0 || n === 1)
        {
            return 1;
        }
        else
        {
            return n * faktorialisR(n - 1);
        }
    }
    for (var sor = 0; sor < 10; sor++)
    {
        var sordiv = document.createElement("div");
        sordiv.classList.add("sor");
        document.getElementsById("pascal").appendChild(sordiv);

        for (var oszlop = 0; oszlop <= sor; oszlop++)
        {
            var elemdiv = document.createElement("div")
            sordiv.appendChild(elemdiv);
            elemdiv.classList.add("elem");
            elemdiv.innerText = faktorialisR(sor) / (faktorialisR(oszlop) * faktorialisR(sor - oszlop));
            elemdiv.style.background = 'rgb(0, 21, ${255*2/elemdiv.innerText)+125})';

        }
    }
}