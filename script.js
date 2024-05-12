 // script.js
const toggleButtons = document.querySelectorAll('.toggle-button');

toggleButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const plan = e.target.dataset.toggle;
        const planElement = document.querySelector(`[data-plan="${plan}"]`);
        const detailsElement = planElement.querySelector('ul');

        if (detailsElement.style.display === 'block') {
            detailsElement.style.display = 'none';
        } else {
            detailsElement.style.display = 'block';
        }
    });
});