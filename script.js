// Function to handle subscribe button click
function subscribe(channelUrl) {
    // Get the subscribe button element
    const subscribeButton = document.querySelector('.subscribe-button');
    
    // Add the animation class
    subscribeButton.classList.add('animate-pulse');
    
    // Remove the animation class after animation ends
    setTimeout(() => {
        subscribeButton.classList.remove('animate-pulse');
    }, 600); // Match the duration of the CSS animation
    
    // Open the channel URL in a new tab
    window.open(channelUrl, '_blank');
}

// Smooth scrolling for navigation links with animation
document.querySelectorAll('.navbar-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove 'active' class from all links
        document.querySelectorAll('.navbar-menu a').forEach(link => link.classList.remove('active', 'animate-pulse-link'));
        
        // Add 'active' and animation class to the clicked link
        this.classList.add('active', 'animate-pulse-link');
        
        // Scroll to the target section
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle navbar visibility when logo is clicked
document.querySelector('.logo').addEventListener('click', function() {
    const menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('collapsed');
});
