spoint = document.getElementById("spoint");
epoint = document.getElementById("epoint");
genbtn = document.getElementById("gen");
generated = document.getElementById("generated");

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
genbtn.addEventListener('click', function() {
  var generatednum = getRandomNumber(Number(spoint.value), Number(epoint.value));
  generated.innerHTML = generatednum;
  console.log("Generated random number: " + generatednum);
})
  