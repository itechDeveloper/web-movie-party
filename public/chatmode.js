var userToChat;
var chat_container = document.querySelector('#chat-container');
var back_button = document.querySelector('#back-button');
const message_part = document.querySelector("#msg-part");

function startChatMode(){
    chat_container.classList.add("chat-mode");
    userToChat = window.event.target.value;
    localStorage.setItem("userToChat", userToChat);
    localStorage.setItem("getMessageCounters", "true");
}

function stopChatMode(){
    chat_container.classList.remove("chat-mode");
    userToChat = null;
    localStorage.setItem("userToChat", userToChat);
    localStorage.setItem("getMessageCounters", "false");

    setTimeout(interval_delete_messages, 2000);
}

var interval_delete_messages = function deleteOldMessages(){
    var child = message_part.lastElementChild;
    while(child){
        message_part.removeChild(child);
        child = message_part.lastElementChild;
    }
}