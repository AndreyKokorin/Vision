const canvas = document.querySelector(".glass");
const context = canvas.getContext("2d");
const main = document.querySelector(".main");


const image = new Image();
image.src ="https://i.postimg.cc/PJGFbg7b/glass.png";

image.onload = function() {
    context.drawImage(image, 0, 0, 300, 130);
};



const mouseMoveListener = (event) => {
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    if(event.buttons === 1){
        canvas.classList.add("pouseAnim")
        var rect = canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        context.clearRect(x - 15, y - 26.5, 53, 50);
    }
    
    let isTransparent = true;
    for (var i = 3; i < imageData.data.length; i += 4) {
        var alpha = imageData.data[i + 3];
        if (alpha !== 0) {
          isTransparent = false;
          break;
        }
    }

    if(isTransparent){
        console.log("Стерт полностью")
    }
}

imageData = context.getImageData(0, 0, canvas.width, canvas.height);
canvas.addEventListener("mousemove", mouseMoveListener)

