const controls1 = document.querySelectorAll(".control-1");
const controls2 = document.querySelectorAll(".control-2");
const controls3 = document.querySelectorAll(".control-3");
let currentItem1 = 0;
let currentItem2 = 0;
let currentItem3 = 0;
const item1 = document.querySelectorAll(".item-1");
const item2 = document.querySelectorAll(".item-2");
const item3 = document.querySelectorAll(".item-3");
const maxitem = item1.length;

controls1.forEach((control) => {
    control.addEventListener("click", (e) => {
        isLeft = e.target.classList.contains("arrow-left");

        if (isLeft) {
            currentItem1 -= 1;
        } else {
            if (currentItem1 + 1 === maxitem) {
                // Next item is the first one, scroll back to the top
                window.scrollTo({ behavior: "smooth" });
            }
            currentItem1 += 1;
        }

        if (currentItem1 >= maxitem) {
            currentItem1 = 0;
        }

        if (currentItem1 < 0) {
            currentItem1 = maxitem - 1;
        }

        item1.forEach((item) => item.classList.remove("current-item-1"));

        item1[currentItem1].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "nearest"
        });

        item1[currentItem1].classList.add("current-item-1");
    });
});

controls2.forEach((control) => {
    control.addEventListener("click", (e) => {
        isLeft = e.target.classList.contains("arrow-left");

        if (isLeft) {
            currentItem2 -= 1;
        } else {
            if (currentItem2 + 1 === maxitem) {
                // Next item is the first one, scroll back to the top
                window.scrollTo({ behavior: "smooth" });
            }
            currentItem2 += 1;
        }

        if (currentItem2 >= maxitem) {
            currentItem2 = 0;
        }

        if (currentItem2 < 0) {
            currentItem2 = maxitem - 1;
        }

        item2.forEach((item) => item.classList.remove("current-item-2"));

        item2[currentItem2].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "nearest"
        });

        item2[currentItem2].classList.add("current-item-2");
    });
});

controls3.forEach((control) => {
    control.addEventListener("click", (e) => {
        isLeft = e.target.classList.contains("arrow-left");

        if (isLeft) {
            currentItem3 -= 1;
        } else {
            if (currentItem3 + 1 === maxitem) {
                // Next item is the first one, scroll back to the top
                window.scrollTo({ behavior: "smooth" });
            }
            currentItem3 += 1;
        }

        if (currentItem3 >= maxitem) {
            currentItem3 = 0;
        }

        if (currentItem3 < 0) {
            currentItem3 = maxitem - 1;
        }

        item3.forEach((item) => item.classList.remove("current-item-3"));

        item3[currentItem3].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "nearest"
        });

        item3[currentItem3].classList.add("current-item-3");
    });
});
