// Get references to the elements
const readMoreLinks = document.querySelectorAll('.read-more');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const closeModalButton = document.getElementById('close-modal');

// Attach event listeners to each "Read More" link
readMoreLinks.forEach(link => {
    link.addEventListener('click', () => {
        const postTitle = link.getAttribute('data-title');
        const postContent = link.getAttribute('data-content');
        showModal(postTitle, postContent);
    });
});

// Function to show the modal
function showModal(title, content) {
    modalContent.innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>
    `;
    modal.style.display = 'block';
}

// Event listener for closing the modal
closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal if the user clicks outside of it
window.addEventListener('click', event => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
