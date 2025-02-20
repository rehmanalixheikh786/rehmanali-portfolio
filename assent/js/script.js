const navToggler = document.querySelector('#nav_toggler');
const navList = document.querySelector('#nav_list');

navToggler.addEventListener('click', () => {
    navList.classList.toggle('toggler_active');
});
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                entry.target.classList.remove("not-in-view");
            } else {
                entry.target.classList.remove("in-view");
                entry.target.classList.add("not-in-view");
            }
        });
    },
    {
        rootMargin: "0px",
        threshold: [0, 0.1, 0],
    },
);

const tags = document.querySelectorAll("section, footer");
tags.forEach((tag) => {
    observer.observe(tag);
});