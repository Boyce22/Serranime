const controls1 = document.querySelectorAll(".control-1");
const controls2 = document.querySelectorAll(".control-2");
const controls3 = document.querySelectorAll(".control-3");
const controls4 = document.querySelectorAll(".control-4");
const controls5 = document.querySelectorAll(".control-5");
let currentItem1 = 0;
let currentItem2 = 0;
let currentItem3 = 0;
let currentItem4 = 0;
let currentItem5 = 0;
const item1 = document.querySelectorAll(".item-1");
const item2 = document.querySelectorAll(".item-2");
const item3 = document.querySelectorAll(".item-3");
const item4 = document.querySelectorAll(".item-4");
const item5 = document.querySelectorAll(".item-5");
const maxitem1 = item1.length;
const maxitem2 = item2.length;
const maxitem3 = item3.length;
const maxitem4 = item4.length;
const maxitem5 = item5.length;

controls1.forEach((control) => {
    control.addEventListener("click", (e) => {
        isLeft = e.target.classList.contains("arrow-left");

        if (isLeft) {
            currentItem1 -= 2;
        } else {
            if (currentItem1 + 2 === maxitem1) {
                // Next item is the first one, scroll back to the top
                window.scrollTo({ behavior: "smooth" });
            }
            currentItem1 += 2;
        }

        if (currentItem1 >= maxitem1) {
            currentItem1 = 0;
        }

        if (currentItem1 < 0) {
            currentItem1 = maxitem1 - 1;
        }

        item1.forEach((item) => item.classList.remove("current-item-1"));

        item1[currentItem1].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        });

        item1[currentItem1].classList.add("current-item-1");
    });
});

controls2.forEach((control) => {
    control.addEventListener("click", (e) => {
        isLeft = e.target.classList.contains("arrow-left");

        if (isLeft) {
            currentItem2 -= 3;
        } else {
            if (currentItem2 + 3 === maxitem2) {
                // Next item is the first one, scroll back to the top
                window.scrollTo({ behavior: "smooth" });
            }
            currentItem2 += 3;
        }

        if (currentItem2 >= maxitem2) {
            currentItem2 = 0;
        }

        if (currentItem2 < 0) {
            currentItem2 = maxitem2 - 1;
        }

        item2.forEach((item) => item.classList.remove("current-item-2"));

        item2[currentItem2].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        });

        item2[currentItem2].classList.add("current-item-2");
    });
});

controls3.forEach((control) => {
    control.addEventListener("click", (e) => {
        isLeft = e.target.classList.contains("arrow-left");

        if (isLeft) {
            currentItem3 -= 3;
        } else {
            if (currentItem3 + 3 === maxitem3) {
                // Next item is the first one, scroll back to the top
                window.scrollTo({ behavior: "smooth" });
            }
            currentItem3 += 2;
        }

        if (currentItem3 >= maxitem3) {
            currentItem3 = 0;
        }

        if (currentItem3 < 0) {
            currentItem3 = maxitem3 - 1;
        }

        item3.forEach((item) => item.classList.remove("current-item-3"));

        item3[currentItem3].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        });

        item3[currentItem3].classList.add("current-item-3");
    });
});

controls4.forEach((control) => {
    control.addEventListener("click", (e) => {
        isLeft = e.target.classList.contains("arrow-left");

        if (isLeft) {
            currentItem4 -= 3;
        } else {
            if (currentItem4 + 3 === maxitem4) {
                // Next item is the first one, scroll back to the top
                window.scrollTo({ behavior: "smooth" });
            }
            currentItem4 += 3;
        }

        if (currentItem4 >= maxitem4) {
            currentItem4 = 0;
        }

        if (currentItem4 < 0) {
            currentItem4 = maxitem4 - 1;
        }

        item4.forEach((item) => item.classList.remove("current-item-4"));

        item4[currentItem4].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        });

        item4[currentItem4].classList.add("current-item-4");
    });
});

controls5.forEach((control) => {
    control.addEventListener("click", (e) => {
        isLeft = e.target.classList.contains("arrow-left");

        if (isLeft) {
            currentItem5 -= 2;
        } else {
            if (currentItem5 + 2 === maxitem5) {
                // Next item is the first one, scroll back to the top
                window.scrollTo({ behavior: "smooth" });
            }
            currentItem5 += 2;
        }

        if (currentItem5 >= maxitem5) {
            currentItem5 = 0;
        }

        if (currentItem5 < 0) {
            currentItem5 = maxitem5 - 1;
        }

        item5.forEach((item) => item.classList.remove("current-item-5"));

        item5[currentItem5].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        });

        item5[currentItem5].classList.add("current-item-5");
    });
});