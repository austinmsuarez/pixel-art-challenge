let color   =   ''
let dot_size=   5
let preview =   document.getElementById('color_preview')

function start_app() {
    color = randomHex()
    for( index = 5; index <=15; index++ ){
        var option = document.createElement('option')
        option.val = index
        option.text = index
        document.getElementById('font_size').add(option)
    }
    onOpacityChange()
    preview.style.background = color
    preview.style.width=5+'px'
    preview.style.height=5+'px'
}

function on_mouse_click(event) {
    var x = event.clientX
    var y = event.clientY
    if(x-dot_size/2 < 55) return console.log(x)
    var dot = document.createElement('div')
    dot.style.position = 'fixed'
    dot.style.top = y-dot_size/2;
    dot.style.left = x-dot_size/2;
    dot.style.opacity = preview.style.opacity;
    dot.style.width = dot_size+"px"
    dot.style.height = dot_size+"px"
    dot.style.background = color

    var canvas = document.getElementById('canvas')
    canvas.appendChild(dot)
    color = randomHex()
    preview.style.background = color
    preview.style.width=dot_size+'px'
    preview.style.height=dot_size+'px'
}

function font_selector(){
    dot_size = document.getElementById('font_size').value
    preview.style.width=dot_size+'px'
    preview.style.height=dot_size+'px'
}

function randomHex() {
    const hexMax = 256 * 256 * 256
    return '#' + Math.floor(Math.random() * hexMax).toString(16).toUpperCase().padStart(6, '0')
  }

function onOpacityChange(){
    var opacity = document.getElementById('opacity').value
    document.getElementById('opacity_value').innerHTML = opacity 
    preview.style.opacity = opacity
}

window.onload = function (event) {
    document.getElementById("canvas").addEventListener("mousedown",on_mouse_click)
    preview =   document.getElementById('color_preview')
    start_app() 
}