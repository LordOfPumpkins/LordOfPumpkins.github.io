const optifine = document.getElementById("optifine")
const skybox = document.getElementById("skybox")

addCheckboxListener(optifine);
addCheckboxListener(skybox);

function addCheckboxListener (element) {
    element.addEventListener("click", function() {
        if (optifine.checked && !skybox.checked) {
            
        }
        else if (!optifine.checked && skybox.checked) {
    
        }
        else {
    
        }
    })
}