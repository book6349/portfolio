document.addEventListener('DOMContentLoaded', function() {
    const visitBtn = document.querySelector('.visit-btn');
    const dropdownContent = document.querySelector('.dropdown-content');

    visitBtn.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });

    
    window.onclick = function(event) {
        if (!event.target.matches('.visit-btn')) {
            const dropdowns = document.querySelectorAll('.dropdown-content');
            dropdowns.forEach(dropdown => {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            });
        }
    };
});
