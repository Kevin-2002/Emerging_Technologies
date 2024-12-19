const messagesContainer = document.getElementById('messages');

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const messageText = userInput.value.trim();

    if (messageText === '') return;

    addMessage(messageText, 'user');

    // Simulate a bot response
    setTimeout(() => {
        addMessage("I'm here to help!", 'bot');
    }, 500);

    userInput.value = '';
}

function addMessage(text, sender) {
    const message = document.createElement('div');
    message.classList.add('message', sender);
    message.textContent = text;
    messagesContainer.appendChild(message);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}