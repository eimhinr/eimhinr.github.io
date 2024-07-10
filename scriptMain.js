document.addEventListener('DOMContentLoaded', function() {
    // Get the first H1 element on the page
    var firstH1 = document.querySelector('h1');
    
    // Check if the content of the first H1 is exactly 'Eimhin'
    if (firstH1 && firstH1.textContent.trim() === 'Eimhin') {
        // Change the content to 'Eimhin Rafferty'
        firstH1.textContent = 'Eimhin Rafferty';
    }
});