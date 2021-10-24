displayDialog();

function displayDialog() {
    for (let i = 0; i < localStorage.length; i++) {
        addMessage(localStorage.getItem(i.toString()));
    }
    changeLastMessage(localStorage.getItem((localStorage.length - 1).toString()));
}

function sendMessage() {
        const msg = document.querySelector('input.chat-msg-input');
        if (msg.value.length > 0)
        {
            addMessage(msg.value);

            localStorage.setItem(localStorage.length.toString(), msg.value);
            changeLastMessage(localStorage.getItem((localStorage.length - 1).toString()));

            msg.value = '';
        }
}

function addMessage(text) {
    const chatTextBlock = document.querySelector('.chat-text-block');
    const node = document.createElement('div');
    node.className = "chat-message";
    node.insertAdjacentText("afterbegin", text);
    chatTextBlock.append(node);
}

function changeLastMessage(text) {
    const contactButton = document.querySelector('.contact-button')
    const lastMessage = document.querySelector('.contact-last-msg');
    lastMessage.textContent = text;
}
