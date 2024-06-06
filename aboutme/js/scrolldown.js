const div = document.querySelector("div");
window.addEventListener("scroll", () => {
    // Get relevant properties from document.documentElement
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    // Get percentage of page that has been scrolled
    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 50;

    div.style.width = `${scrolled}%`;
});
