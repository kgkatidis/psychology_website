document.addEventListener("DOMContentLoaded", () => {

  const faq = {
    "ωράριο": "Είμαστε ανοιχτά 17:00 - 22:00, Δευτέρα έως Παρασκευή.",
    "διεύθυνση": "Βρισκόμαστε στην Γρηγορίου Παλαμά 5, Θεσσαλονίκη, Ελλάδα.",
    "τηλέφωνο": "Μπορείτε να επικοινωνήσετε στο 6948071449.",
    "email": "Το email μας είναι klimisgiam@yahoo.gr."
  };

  function botReply(q) {
    q = q.toLowerCase();
    if (faq[q]) return faq[q];
    return "Δεν το κατάλαβα αυτό… παρακαλώ επιλέξτε μία από τις προκαθορισμένες ερωτήσεις;";
  }

  const toggle = document.getElementById("chatbot-toggle");
  const box = document.getElementById("chatbot-box");
  const closeBtn = document.getElementById("chatbot-close");
  const messages = document.getElementById("chatbot-messages");
  const input = document.getElementById("chatbot-input");
  const send = document.getElementById("chatbot-send");
  const quickButtons = document.querySelectorAll("#chatbot-quick button");

  /* Open/close chat */
  toggle.onclick = () => box.style.display = "flex";
  closeBtn.onclick = () => box.style.display = "none";

  /* Send message */
  function sendMessage(text) {
    if (!text) return;
    messages.innerHTML += `<div class="user-msg">${text}</div>`;
    const reply = botReply(text);
    messages.innerHTML += `<div class="bot-msg">${reply}</div>`;
    messages.scrollTop = messages.scrollHeight;
  }

  send.onclick = () => {
    sendMessage(input.value);
    input.value = "";
  };

  input.addEventListener("keypress", e => {
    if (e.key === "Enter") {
      sendMessage(input.value);
      input.value = "";
    }
  });

  /* Quick reply buttons */
  quickButtons.forEach(btn => {
    btn.onclick = () => sendMessage(btn.dataset.q);
  });

});
