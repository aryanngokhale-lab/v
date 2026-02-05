// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const openBtn = document.getElementById(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes!!']");

const title = document.getElementById("letter-title");
const catImg =document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// click envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

//logic to move NO btn

nobtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * 2 * Math.PI;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;       

    nobtn.style.transition = "transform 0.3s ease";
    nobtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

//logic to make yes btn grow

//logic to make yes btn grow

//yesbtn.style,position = "relative";
//yesbtn.style.transformOrigin = "center center";
//yesbtn.style.transition = "transform 0.3s ease";

//nobtn.addEventListener("click", () => {
// yesScale +=2;

// if (yesbtn.style.position !== "fixed") {
//     yesbtn.style.position = "fixed";
//     yesbtn.style.top = "50%";
//     yesbtn.style.left = "50%";
//     yesbtn.style.transform = "translate(-50%, -50%)"; scale(${yesScale})`;
// } else {
//    yesbtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
// }
//});

// YES IS CLICKED

yesbtn.addEventListener("click", () => {
    title.textContent = "Yay!! LESSGOOOOOOOOOO!!!!!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";

    finalText.textContent = "Thankyou for accepting my proposal i love you so much that i couldn't describe it here it's a bit dumb here i'll tell you in person 😘🥳🎉";
});
