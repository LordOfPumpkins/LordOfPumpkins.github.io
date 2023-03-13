addCheckboxClickListener (
    document.getElementById("optifine")
)
addCheckboxClickListener (
    document.getElementById("skybox")
)

function addCheckboxClickListener (element) {
    element.addEventListener("click", function() {
        if (element.checked) {
          // do something if the checkbox is checked
        } else {
          // do something else if the checkbox is not checked
        }
    })
}