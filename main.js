document.addEventListener("DOMContentLoaded", () => {

    function showExperienceContainers () {
        const experienceContainers = document.getElementsByClassName('experience-container');
        for(let i = 0; i < experienceContainers.length; i++) {
            experienceContainers[i].addEventListener('click', e => {
                if(e.target.classList.contains('expand')) {
                    show(e.target.nextElementSibling, 'show');
                    show(e.target, 'active');
                }
            });
        }
    }

    function show (el, classToAdd) {
        el.classList.contains(classToAdd)
            ? el.classList.remove(classToAdd)
            : el.classList.add(classToAdd);
    }

    showExperienceContainers();

});