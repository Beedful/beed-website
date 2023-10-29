var mullist = document.getElementById("mul-list");
const s = window.location.search;
const ss = new URLSearchParams(s);
const n = ss.get("num");
var nn = Number(n);

for (let e = 1; e <= 100; e++) {
    var obj = document.createElement('li');
    obj.innerHTML = `${n} &times; ${e} = ${e * nn}`
    mullist.innerHTML = mullist.innerHTML + `<li>${obj.innerHTML}</li><br>`
}