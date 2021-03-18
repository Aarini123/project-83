var mouse_event="empty";
var last_postion_of_X,last_position_of_Y;
canvas=document.getElementById("Canvas_blank");
ctx=canvas.getContext("2d");
var color="black";
var width_line=3;
canvas.addEventListener("mousedown",mouse_Down);

function mouse_Down(e) {
    color=document.getElementById("Color_1").value;
    width_line=document.getElementById("Width_line_input").value;
    mouse_event="Mousedown";
}
canvas.addEventListener("mouseup",mouse_Up);
function mouse_Up(){
    mouse_event="mouseup";
}

canvas.addEventListener("mouseleave",mouse_Leave);
function mouse_Leave(){
    mouse_Up="mouseleave";
}

canvas.addEventListener("mousemove",Mouse_move);

function Mouse_move(e) {
currentPostion_X=e.clientX-canvas.offsetLeft;
currentPostion_Y=e.clientY-canvas.offsetTop;
if(mouse_event=="Mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_line;
    ctx.moveTo(last_position_of_X,last_position_of_Y);
    ctx.lineTo(currentPostion_X,currentPostion_Y);
    ctx.stroke();
}
last_position_of_X=currentPostion_X;
last_position_of_Y=currentPostion_Y;
}
function Area_clear() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}




var last_position_of_x, last_position_of_y;

    canvas = document.getElementById("Canvas_blank");
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 3;
var width=screen.width;
var new_width=screen.width-70;
var new_height=screen.height-300;
if (width<992){
    document.getElementById("Canvas_blank").width=new_width;
    document.getElementById("Canvas_blank").height=new_height;
document.body.style.overflow="hidden";
}
    canvas.addEventListener("touchstart",touch_Start);
    
    function touch_Start(e)
    {
        
        color = document.getElementById("Color_1").value;
        width_of_line = document.getElementById("Width_line_input").value;
        last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
        last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
    }


    canvas.addEventListener("touchmove", Touch_move);
    function Touch_move(e)
    {

         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

       
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
       

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }
function clear_Area(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}