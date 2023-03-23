var txt = document.getElementById("txt");
var btn = document.getElementById("btn");
var img = document.getElementById("img");

btn.addEventListener('click', function() {
    if (txt.value == "test_pass") {
        img.removeAttribute("hidden");
    } else {
        alert("Wrong password!!")
    }
})