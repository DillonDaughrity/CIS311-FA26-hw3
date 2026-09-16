const submitButton = document.getElementById("submitButton")
const toast = document.getElementById("toast")

submitButton.addEventListener('click', (e) => {

    if (!form.reportValidity()) return
    
    e.preventDefault()

   showToast(2000)
 })

let hideTimer

function showToast(duration = 2000) {
    toast.showPopover()
    restartTimer(duration)
}

function restartTimer(duration = 2000) {
    clearTimeout(hideTimer)
    hideTimer = setTimeout(() => toast.hidePopover(), duration)
}

toast.addEventListener("pointerenter", () => clearTimeout(hideTimer))
toast.addEventListener("pointerleave", () => restartTimer()) 