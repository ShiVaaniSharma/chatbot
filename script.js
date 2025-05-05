// Get references to HTML elements
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Function to add a message to the chat box
function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');

    const pElement = document.createElement('p');
    pElement.textContent = message;
    messageElement.appendChild(pElement);

    chatBox.appendChild(messageElement);

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to get a bot response (Simple Logic)
function getBotResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase().trim();

    // Simple keyword matching
    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
        return "Hello there! How can I assist you?";
    } else if (lowerCaseMessage.includes('how are you')) {
        return "I'm just a bot, but I'm functioning as expected! Thanks for asking.";
    } else if (lowerCaseMessage.includes('help')) {
        return "Sure, I can try to help. What do you need assistance with?";
    } else if (lowerCaseMessage.includes('time')) {
        const now = new Date();
        return `The current time is ${now.toLocaleTimeString()}.`;
    } else if (lowerCaseMessage.includes('date')) {
        const now = new Date();
        return `Today's date is ${now.toLocaleDateString()}.`;
    } else if (lowerCaseMessage.includes('name')) {
        return "You can call me SimpleBot.";
    } else if (lowerCaseMessage.includes('bye') || lowerCaseMessage.includes('goodbye')) {
        return "Goodbye! Have a great day!";
    } else {
        // Default response
        return "Sorry, I didn't quite understand that. Can you rephrase?";
    }
}

// Function to handle sending a message
function sendMessage() {
    const messageText = userInput.value.trim();

    if (messageText === '') {
        return; // Do nothing if input is empty
    }

    // Display user's message
    addMessage(messageText, 'user');

    // Clear the input field
    userInput.value = '';

    // Get and display bot's response after a short delay
    setTimeout(() => {
        const botResponse = getBotResponse(messageText);
        addMessage(botResponse, 'bot');
    }, 500); // Simulate bot "thinking" time (500 milliseconds)
}

// Event listeners
sendButton.addEventListener('click', sendMessage);

// Allow sending message by pressing Enter key
userInput.addEventListener('keypress', function(event) {
    // Check if the key pressed was 'Enter' (key code 13)
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default form submission or line break
        sendMessage();
    }
});