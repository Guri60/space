function showAlert(message) {
    alert(message);
}

function reserveTable() {
    alert('Table reserved successfully!');
}

function sendMessage() {
    const message = document.getElementById('message').value;
    alert(`Message sent: ${message}`);
}

function highlightElement(id) {
    const element = document.getElementById(id);
    element.style.backgroundColor = 'yellow';
}
