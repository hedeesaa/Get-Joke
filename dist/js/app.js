document.getElementById("form").addEventListener("submit", loadJokes);

function loadJokes(e) {
  document.getElementById("process").style.display = "block";
  const num = document.getElementById("number").value;
  document.getElementById("number").value = "";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `http://api.icndb.com/jokes/random/${num}`, true);

  xhr.onload = function() {
    const recieve = JSON.parse(xhr.responseText);
    console.log(recieve);
    if (recieve.type === "success") {
      recieve.value.forEach(function(joke) {
        const jokeDiv = document.createElement("div");
        jokeDiv.className = "joke-container";
        jokeDiv.innerHTML = joke.joke;
        document.getElementById("jokes").appendChild(jokeDiv);
      });
      document.getElementById("process").style.display = "none";
    }
  };
  xhr.send();
  e.preventDefault();
}
