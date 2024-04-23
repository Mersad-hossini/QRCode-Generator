let $ = document
let wrapper = $.querySelector(".wrapper")
let inputElem = $.querySelector("input")
let buttonElem = $.querySelector("button")
let imgElem = $.querySelector("img")

buttonElem.addEventListener("click", () => {
    let inputValue = inputElem.value.trim()
    if(inputValue) {
        imgElem.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}`
        buttonElem.innerHTML = "Generating QR Code..."
    }
    
    imgElem.addEventListener("load", () => {
        wrapper.classList.add("active")
        buttonElem.innerHTML = "Generate QR Code"
    })
})

inputElem.addEventListener("keyup", () => {
    if(!inputElem.value.trim()) {
        wrapper.classList.remove("active")
    }   
})