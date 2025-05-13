// Function to change text content
function changeText() {
    const textElement = document.getElementById('dynamic-text');
    textElement.textContent = 'Text changed dynamically!';
}

// Function to change CSS style
function changeStyle() {
    const section = document.getElementById('content-area');
    section.style.backgroundColor = '#e0f7fa';
    section.style.padding = '20px';
    section.style.border = '2px solid #007bff';
}

// Function to add a new paragraph
function addElement() {
    const section = document.getElementById('content-area');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'This is a new paragraph added dynamically!';
    newParagraph.id = 'new-paragraph';
    section.appendChild(newParagraph);
}

// Function to remove a paragraph
function removeElement() {
    const paragraph = document.getElementById('new-paragraph');
    if (paragraph) {
        paragraph.remove();
    } else {
        alert('No dynamically added paragraph to remove!');
    }
}

// Add event listeners to buttons
document.getElementById('change-text-btn').addEventListener('click', changeText);
document.getElementById('change-style-btn').addEventListener('click', changeStyle);
document.getElementById('add-element-btn').addEventListener('click', addElement);
document.getElementById('remove-element-btn').addEventListener('click', removeElement);
