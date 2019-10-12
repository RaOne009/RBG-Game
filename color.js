var color = ["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)",
"rgb(255, 255, 0)", "rgb(255, 0, 255)", "rgb(0, 255, 255)",]
var square = document.querySelectorAll(".square");
var pickedcolor = color[3];
var colordisplay = document.getElementById("colordisplay")
//var messagedisplay = querySelector("#message");
colordisplay.textContent = pickedcolor;
for (var i = 0; i < color .length; ++i) {
    square[i].style.background = color [i];
    square[i].addEventListner("click", function(){
        var clickedcolor = this.style.background;
        if (clickedcolor === pickedcolor) {
                messagedisplay.textContent = "Correct";
                changecolor(pickedcolor);
        } else {
            messagedisplay.textContent = "Try Again";
            this.style.background = "#232323";
        }
    });
}
function changecolor(value) {
    for (var i = 0; i < square.length; ++i) {
        square[i].style.background = value;
    }
}
function randomcolor() {

}
