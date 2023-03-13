const optifine = document.getElementById("optifine")
const skybox = document.getElementById("skybox")
const download = document.getElementById("download")

addCheckboxListener(optifine);
addCheckboxListener(skybox);

function addCheckboxListener (element) {
    element.addEventListener("click", function() {
        if (!optifine.checked && !skybox.checked) {
            download.download = "§c§lMORDOR§7-§flight.zip"
        }
        else if (optifine.checked && !skybox.checked) {
            download.download = "§c§lMORDOR§7-§fof.zip"
        }
        else if (optifine.checked && skybox.checked || !optifine.checked && skybox.checked) {
            download.download = "§c§lMORDOR§7-§fv4.zip"
        }
    })
}