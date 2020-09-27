document.addEventListener("DOMContentLoaded", () => {

    function showExperienceContainers () {
        const experienceContainers = document.getElementsByClassName('experience-container');
        for(let i = 0; i < experienceContainers.length; i++) {
            experienceContainers[i].addEventListener('click', e => {
                if(e.target.classList.contains('expand')) {
                    show(e.target);
                    activeToggle(e.target);
                }
            })
        }
    }

    function show (el) {
        const sibling = el.nextElementSibling;
        if (sibling.classList.contains('show')) {
            sibling.classList.remove('show');
        } else {
            sibling.classList.add('show');
        }
    }

    function activeToggle (el) {
        console.log(el);
        el.classList.contains('active')
            ? el.classList.remove('active')
            : el.classList.add('active');
    }

    showExperienceContainers();

});