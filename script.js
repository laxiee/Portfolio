function cycleHoverEffects() {
    let navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach((link, index) => {
        // Apply the transformations with a delay based on the index
        setTimeout(() => {
            let childSpan = link.querySelector('span > span');
            let childImg = link.querySelector('img');

            // Apply hover effect styles
            if (childSpan) {
                childSpan.style.transform = 'scale(1, 0)';
            }

            if (childImg) {
                childImg.style.transform = 'scale(1, 1)';
            }

            // Revert styles back after 2 seconds
            setTimeout(() => {
                if (childSpan) {
                    childSpan.style.transform = 'scale(1, 1)';
                }

                if (childImg) {
                    childImg.style.transform = 'scale(1, 0)';
                }
            }, 1200);  // Duration of the hover effect
        }, index * 3500); // Start next effect slightly after the previous one
    });

    // Recursively call the function to cycle the effects forever
    // Total delay is the number of links times the delay per link plus some buffer
    setTimeout(cycleHoverEffects, navLinks.length * 3500);
}

// Initial call to start the cycle
cycleHoverEffects();
