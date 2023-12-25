var btn = document.getElementById("btn");
var img = document.getElementById("img");

btn.addEventListener('click', function() {
    let answer = prompt('Enter password');
    if (answer == atob("dGVzdF9wYXNz")) {
        img.removeAttribute("hidden");
    } else {
        alert("Wrong password!!")
    }
})