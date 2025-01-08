
const responses = [
  "Świetnie!",
  "Kto gra główną rolę?",
  "Lubisz filmy Tego reżysera?",
  "Będę 10 minut wcześniej",
  "Może kupimy sobie popcorn?",
  "Ja wolę Colę",
  "Zaproszę jeszcze Grześka",
  "Tydzień temu też byłem w kinie na Diunie",
  "Ja funduję bilety",
];


function sendMessage() {
  const input = document.getElementById("message-input");
  const chatContent = document.getElementById("chat-content");

  if (input.value.trim() !== "") {
    const message = document.createElement("div");
    message.className = "message jolanta";
    message.innerHTML = `<img src="Jolka.jpg" alt="Jolanta Nowak"><p>${input.value}</p>`;
    chatContent.appendChild(message);
    chatContent.scrollTop = chatContent.scrollHeight;
    input.value = "";
  }
}


function generateRandomResponse() {
  const chatContent = document.getElementById("chat-content");
  const randomIndex = Math.floor(Math.random() * responses.length);

  const message = document.createElement("div");
  message.className = "message krzysztof";
  message.innerHTML = `<p>${responses[randomIndex]}</p><img src="Krzysiek.jpg" alt="Krzysztof Łukasiński">`;
  chatContent.appendChild(message);
  chatContent.scrollTop = chatContent.scrollHeight;
}


document.getElementById("send-button").addEventListener("click", sendMessage);
document
  .getElementById("random-response")
  .addEventListener("click", generateRandomResponse);
