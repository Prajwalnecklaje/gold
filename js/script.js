// Sample JSON data (can be fetched from an API or a local file)
const users = [
    { id: 1, name: "John Doe", username: "johndoe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", username: "janesmith", email: "jane@example.com" },
    { id: 3, name: "Mike Johnson", username: "mikejohnson", email: "mike@example.com" }
];

// Function to display users
function displayUsers() {
    const userListElement = document.getElementById('user-list');
    
    users.forEach(user => {
        // Create a div element for each user
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');

        // Create HTML content for the user card
        userCard.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
        `;

        // Append the user card to the user list container
        userListElement.appendChild(userCard);
    });
}

// Call the displayUsers function when the page loads
document.addEventListener('DOMContentLoaded', displayUsers);
