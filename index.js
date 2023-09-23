const toggleButton = document.querySelectorAll('.toggle-btn');
const offCanvasSection = document.querySelector('.off-canvas');
const tl = gsap.timeline();
let mm = gsap.matchMedia();

toggleButton.forEach(function(toggleButton) {
    toggleButton.addEventListener('click', function() {
        
        // Check the current display property of the section
        if (offCanvasSection.style.display === 'none' || offCanvasSection.style.display === '') {


            mm.add({
                isMobile : "(max-width: 426px)",
                isTablet : "(max-width: 768px)",
                isDesktop : "(min-width: 1024px)",
            }, (context) =>{

                let {isMobile, isTablet} = context.conditions;

                tl.to(offCanvasSection, {
                    display: 'flex',
                    flexDirection: 'column',
                    opacity: 1,
                    '--beforeScale': isMobile ? 147 : (isTablet ? 192 : 320),
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

            })

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
