const optifine = document.getElementById("optifine")
const skybox = document.getElementById("skybox")
const download = document.getElementByClass("download")

addCheckboxListener(optifine);
addCheckboxListener(skybox);

function addCheckboxListener (element) {
    element.addEventListener("click", function() {
        if (optifine.checked && !skybox.checked) {
            
        }
        else {
    
        }
    })
}