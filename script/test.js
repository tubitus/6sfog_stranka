const test = document.querySelector(".zmizik"); 
const brambor = document.querySelector(".gulas");
const brambory = document.querySelector(".submenu");

test.addEventListener("mouseover", () => {
    if (state == false) {
        test.classList.remove("is-on");
        state = true; 
    } 

    else {
        setTimeout(() => test.classList.add("is-on"), 1000000);
        state = false; 
    }
})

test.addEventListener("mouseleave", () => {
    if (state == true) {
        setTimeout(() => test.classList.add("is-on"), 5000);
        state = false; 
    } 
})

brambor.addEventListener("mouseover", () => {
    if (state == false) {
        test.classList.remove("is-on");
        state = true; 
    } 

    else {
        test.classList.add("is-on"); 
        state = false; 
    }
})

brambor.addEventListener("mouseleave", () => {
    if (state == true) {
        setTimeout(() => test.classList.add("is-on"), 5000);
        state = false; 
    } 
})

brambory.addEventListener("mouseover", () => {
    if (state == false) {
        test.classList.remove("is-on");
        state = true; 
    } 

    else {
        test.classList.add("is-on"); 
        state = false; 
    }
})

brambory.addEventListener("mouseleave", () => {
    if (state == true) {
        setTimeout(() => test.classList.add("is-on"), 5000);
        state = false; 
    } 
})