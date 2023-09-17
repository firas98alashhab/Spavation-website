const hiddenElements = document.querySelectorAll('.hidden');
const leftToRightElements = document.querySelectorAll('.left-to-right');
const popUpAnimationElements = document.querySelectorAll('.pop-up-animation');
const rightToLeftElements = document.querySelectorAll('.right-to-left');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, { threshold: 0.5 }); // Adjust the threshold as needed

const leftToRightObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
            leftToRightObserver.unobserve(entry.target); // Stop observing once animated
        }
    });
}, { threshold: 0.5 }); // Adjust the threshold as needed

const popUpAnimationObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            popUpAnimationObserver.unobserve(entry.target); // Stop observing once animated
        }
    });
}, { threshold: 0.5 }); // Adjust the threshold as needed

const rightToLeftObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
            rightToLeftObserver.unobserve(entry.target); // Stop observing once animated
        }
    });
}, { threshold: 0.5 }); // Adjust the threshold as needed

hiddenElements.forEach(element => {
    observer.observe(element);
});

leftToRightElements.forEach(element => {
    leftToRightObserver.observe(element);
});

popUpAnimationElements.forEach(element => {
    popUpAnimationObserver.observe(element);
});

rightToLeftElements.forEach(element => {
    rightToLeftObserver.observe(element);
});
