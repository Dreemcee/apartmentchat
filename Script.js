const mainChatBody = document.getElementById('mainChatBody');
const input = document.getElementById('mainMessageInput');
const sendBtn = document.getElementById('mainSendBtn');
const addFileBtn = document.getElementById('addFileBtn');
const fileInput = document.getElementById('fileInput');

function addMessage(text, from='support') {
  const msg = document.createElement('div');
  msg.classList.add('message', from==='user' ? 'from-user' : 'from-support');

  if (from === 'support') {
    const label = document.createElement('div');
    label.classList.add('label');
    label.textContent = "Apartment Manager";

    const avatar = document.createElement('div');
    avatar.classList.add('avatar');
    avatar.textContent = "AM";

    msg.appendChild(label);
    msg.appendChild(avatar);
  }

  msg.appendChild(document.createTextNode(text));
  mainChatBody.appendChild(msg);
  mainChatBody.scrollTop = mainChatBody.scrollHeight;
}

// Send text message
sendBtn.onclick = () => {
  const text = input.value.trim();
  if (!text) return;
  addMessage(text, 'user');
  input.value="";

  setTimeout(() => {
    addMessage("Thank you for your message! Our Apartment Manager will reply shortly.");
  }, 500);
};

// Open file selector
addFileBtn.onclick = () => fileInput.click();

// On file selected
fileInput.onchange = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  let text = `Sent a ${file.type.startsWith('image') ? 'photo' : 'video'}: ${file.name}`;
  addMessage(text, 'user');

  fileInput.value = "";
};

// Initial messages
addMessage("Hello! Welcome to Apartment Manager Support.");
addMessage("How can we assist you today?");
