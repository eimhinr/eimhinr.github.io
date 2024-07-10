document.addEventListener('DOMContentLoaded', function() {
    // Update the first H1 element if its content is 'Eimhin'
    var firstH1 = document.querySelector('h1');
    if (firstH1 && firstH1.textContent.trim() === 'Eimhin') {
        firstH1.textContent = 'Eimhin Rafferty';
    }

    // Handle collapsible headers
    var headers = document.querySelectorAll('h2, h3');
    
    headers.forEach(function(header) {
        header.classList.add('collapsible');
        if (header.tagName === 'H3') {
            header.innerHTML = '+ ' + header.innerHTML; // Initialize H3 with closed state
            var nextElement = header.nextElementSibling;
            while (nextElement && !nextElement.matches('h2, h3')) {
                nextElement.classList.add('collapsed'); // Collapse all content under H3
                nextElement = nextElement.nextElementSibling;
            }
        } else {
            header.innerHTML = '- ' + header.innerHTML; // Initialize H2 with open state
        }

        header.addEventListener('click', function() {
            var isExpanded = header.innerHTML.startsWith('-');
            header.innerHTML = isExpanded
                ? '+ ' + header.innerHTML.substring(2) // Closed state
                : '- ' + header.innerHTML.substring(2); // Open state

            var nextElement = header.nextElementSibling;
            while (nextElement && nextElement.tagName !== 'H2' && nextElement.tagName !== 'H3') {
                nextElement.style.display = isExpanded ? 'none' : 'block';
                if (nextElement.matches('h3, h4, h5')) {
                    nextElement.innerHTML = nextElement.innerHTML.startsWith('-')
                        ? nextElement.innerHTML.replace('-', '+')
                        : nextElement.innerHTML.replace('+', '-');
                }
                nextElement = nextElement.nextElementSibling;
            }
        });
    });
});
