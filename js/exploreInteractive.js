// Flip cards
/* 
    Manage of flip-up and down cards that 
    been clicked and convert them
    to text content
*/

// Define: Target-image, Hidden Content and Reset Content
let cards = document.querySelectorAll("#flipCard");
let cards_content = document.querySelectorAll("#flipCard-content");
let button = document.querySelectorAll("#returnBtn");

// Reset Content display
function backToOriginalForm(index) {
    console.log("Reveal the hidden content...");

    button[index].innerHTML = "Click here to return to orginal state";
    button[index].classList.toggle("flipBackCard");
}

function originalForm(index) {
    console.log("Back to orginal form...");

    button[index].innerHTML = "Click on the images to flip the content";
    button[index].classList.toggle("flipBackCard");
    cards[index].classList.remove("flipUpCard");
}

// Target-image Displaying
function DetailFlippedCard(index) {
    console.log("Flip the target-image content...");

    if (cards[index].className === "flipped") {
        cards[index].className = "flipDownCard";
        setTimeout(backToOriginalForm, 3100, index);
    }
    else if (cards[index].className === "flipDownCard") {
        cards[index].className = "flipUpCard";
        setTimeout(originalForm, 3100, index);
    }
}

// Hidden Content Displaying
function flipTextContentOfCards(index) {
    console.log("Flip the hidden content...");

    if (cards_content[index].className === "unflipped") {
        cards_content[index].className = "flipDownCard";
        setTimeout(DetailFlippedCard, 2000, index);
    }
    else if (cards_content[index].className === "flipDownCard") {
        cards_content[index].className = "flipUpCard";
        setTimeout(DetailFlippedCard, 100, index);
    }
}

// Interaction with target-images to start this action
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function() {
        cards[i].classList.toggle("flipped");
        setTimeout(flipTextContentOfCards, 2000, i);
        console.log("Selected target-images of " + i);
    });
}

// Interaction with Reset Content to start this action
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
        if (button[i].className === "flipBackCard" && 
        button[i].innerHTML != "Please Wait...") 
        { 
            button[i].innerHTML = "Please Wait..."; 
            setTimeout(flipTextContentOfCards, 2000, i);
            cards_content[i].className = "unflipped";
            console.log("Selected reset-content of " + i);
        }
    });
}