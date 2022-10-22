const items = document.querySelectorAll("section ul li");

for (const item of items) {
    item.onmousemove = (e) => {
        const decimal = e.clientX / item.offsetWidth;
        const basePercent1 = 15,
            basePercent2 = 60,
            percentRange = 20,
            adjustablePercent = percentRange * decimal;

        item.style.setProperty("--gradient-percent-1", `${basePercent1 + adjustablePercent}%`);
        item.style.setProperty("--gradient-percent-2", `${basePercent2 + adjustablePercent}%`);
    };
}
