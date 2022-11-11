// var darkBtn = document.querySelector('.header_mode-light')
// var bodyEl = document.querySelector('body')
// var bodyContainer = document.querySelector('.body_container')
// var inputcontainerEl = document.querySelector('.header_input-container')
// var inputEl = document.querySelector('.header_input')
// var aboutBtn = document.querySelector('.btn_about')
// var contactBtn = document.querySelector('.btn_contact')
// var formAbout = document.querySelector('.body_form-about')


// darkBtn.addEventListener('click', function(){
//     bodyEl.classList.toggle('dark-mode')
//     darkBtn.classList.toggle('dark-mode')
//     inputEl.classList.toggle('dark-mode')
//     inputcontainerEl.classList.toggle('dark-mode')
// })

// function btnClick(){
//     bodyContainer.classList.toggle('hide')
//     formAbout.classList.toggle('display')
// }

// aboutBtn.addEventListener('click', function(){
//     btnClick()
// })

// contactBtn.addEventListener('click', function(){
//     btnClick()
// })

var audioEl = document.querySelector('#audio')
var icon = document.querySelector('#icon')

icon.onclick = function() {
    audioEl.play()
}