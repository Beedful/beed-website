var mullist = document.getElementById("mul-list");
const s = window.location.search;
const ss = new URLSearchParams(s);
const n = ss.get("num");
var nn = Number(n);

for (let e = 1; e <= 100; e++) {
    var r = toString(e * nn)
    var ee = toString(e)
    var obj = document.createElement('li');
    obj.innerHTML = `$n x $ee = $r`
    obj.appendChild(mullist);
}