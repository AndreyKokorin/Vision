const canvas = document.querySelector(".glass");
const context = canvas.getContext("2d");
const main = document.querySelector(".main");
const lastic = document.querySelector(".lastic")
const eraseText = document.querySelector(".erase");
const aftertext = document.querySelector(".aftertext");
const afterBtn = document.querySelector(".afterbtn");

const image = new Image();
image.src ="img/glass.svg";

image.onload = function() {
    context.drawImage(image, 0, 0, 300, 130);
};



const mouseMoveListener = (event) => {
    if(event.buttons === 1){
        canvas.classList.add("pouseAnim");

        var rect = canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        context.clearRect(x - 15, y - 26.5, 53, 50);

        lastic.style.top = event.clientY - 25  + "px";
        lastic.style.left = event.clientX - 26 + "px";

        lastic.classList.remove("lasticOff");
        lastic.classList.add("lasticShow");
        canvas.classList.add("cursorN");

        eraseText.classList.add("opacity0")
    }

    if(isFullyTransparent()){
        main.classList.add("smile");
        aftertext.classList.add("aftertextAnim");
        afterBtn.classList.add("opacity1");
        lastic.remove();
    }
}

function isFullyTransparent() {
    var d = context.getImageData(0, 0, canvas.width, canvas.height).data;
    for (var i=3; i < d.length; i+=4)
    if (d[i]) 
      return false
    return true
  }
  
canvas.addEventListener("mouseup", () => {
    lastic.classList.add("lasticOff")
    lastic.classList.remove("lasticShow")
    canvas.classList.remove("cursorN")
})
canvas.addEventListener("mousemove", mouseMoveListener)

