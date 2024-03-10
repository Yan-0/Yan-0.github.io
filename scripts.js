function toggleProjectDetails(projectId) {
    const dropdownContent = document.getElementById(projectId);
    dropdownContent.classList.toggle('show');
}

function toggleCertificationDetails(certificationId) {
    const dropdownContent = document.getElementById(certificationId);
    dropdownContent.classList.toggle('show');
}



document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle the visibility of the navigation menu
    function toggleMenu() {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle('show');
    }

    // Function to close the navigation menu
    function closeMenu() {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
        }
    }

    // Attach click event listeners to the hamburger icon and menu items
    const mobileMenuIcon = document.querySelector('.mobile-menu');
    mobileMenuIcon.addEventListener('click', toggleMenu);

    const navMenuItems = document.querySelectorAll('.nav-menu a');
    navMenuItems.forEach(function (item) {
        item.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside the menu
    document.addEventListener('click', function (event) {
        const target = event.target;
        if (!target.closest('.nav-menu') && !target.closest('.mobile-menu')) {
            closeMenu();
        }
    });
});
