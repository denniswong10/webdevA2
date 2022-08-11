// Variety Selection
/* 
    Select between differnt type of button according to 
    whichever cateogry that been chosen
*/

// Define: Target-element of cateogry
let varietyOfList = document.querySelectorAll(".varitey_container");
let varietyOfPreview = document.querySelectorAll(".variety_preview");

// Clear selected cateogry for preview
function clearSelectionForPreview(cateogry) {
    // Clear highlight button
    for (let i = 0; i < varietyOfList[cateogry].children.length; i++) {
        varietyOfList[cateogry].children[i].classList.remove("selectedBtn");
    }
}

// Break element of cateogry into sub element of that cateogry
for (let x = 0; x < varietyOfList.length; x++) {

    for (let y = 0; y < varietyOfList[x].children.length; y++) {

        varietyOfList[x].children[y].addEventListener("click", function() {

            clearSelectionForPreview(x);
            varietyOfList[x].children[y].classList.toggle("selectedBtn");

            // Get parameter and delay it to the preview section
            getPreview_Images(x,y);
        });
    }
}

// Get preview of images that been chosen by user
function getPreview_Images(cateogry, sub) {
    // Clear all content
    for (let i = 0; i < varietyOfPreview[cateogry].children.length; i++) {
        varietyOfPreview[cateogry].children[i].className = "notActive";
    }

    // Clear highlight button
    for (let i = 0; i < varietyOfList[cateogry].children.length; i++) {
        varietyOfList[cateogry].children[i].classList.remove();
    }

    // Show selected content
    if (varietyOfPreview[cateogry].children[sub].className === "notActive") {
        varietyOfPreview[cateogry].children[sub].className = "active";
    }
    else {
        varietyOfPreview[cateogry].children[sub].className = "notActive";
    }
}