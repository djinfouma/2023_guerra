window.addEventListener('scroll', function() {
    var titleElement = document.querySelector('head title');
    var scrollY = window.scrollY || window.pageYOffset;

    if (scrollY >= 300) {
    titleElement.classList.add('fixed');
    } else {
    titleElement.classList.remove('fixed');
    }
});
