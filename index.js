const toggleButton = document.querySelectorAll('.toggle-btn');
const offCanvasSection = document.querySelector('.off-canvas');
const tl = gsap.timeline();

toggleButton.forEach(function(toggleButton) {
    toggleButton.addEventListener('click', function() {
        
        // Check the current display property of the section
        if (offCanvasSection.style.display === 'none' || offCanvasSection.style.display === '') {

            tl.to(offCanvasSection, {
                display: 'flex',
                flexDirection: 'column',
                opacity: 1,
                '--beforeScale': 150,
            });

            tl.fromTo('.off-canvas h3', {
                x : 50,
                opacity: 0,
            },

            {
                display: 'block',
                opacity: 1,
                x : 0,
                stagger: 0.1,
            }, "<"); 

        } else {
          
            tl.to(offCanvasSection, {
                display: 'none',
                opacity: 0,
                '--beforeScale': 0,
            });

            tl.to('.off-canvas h3', {
                x: 50,
                display: 'hidden',
                opacity: 0,
                stagger: 0.1,
            }, "<");
            
        }
    });
});