let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
// Duivel oor 1
context.beginPath();
context.fill();
context.lineWidth=2;
context.strokeStyle="red";
context.fill();
context.strokeRect(110, 55, 20, 25);
context.closePath();
context.stroke();

// Duivel oor 2
context.beginPath();
context.lineWidth=2;
context.strokeStyle="red";
context.fill();
context.strokeRect(260, 47, 20, 25);
context.closePath();
context.stroke();
// Smiley circel 
context.beginPath();
context.arc(200,200,150,0,2*Math.PI);
context.strokeStyle="red";
context.fill();
context.stroke();
context.closePath();
// Linker oog
context.beginPath();
context.arc(130,130,40,0,2+Math.PI);
context.fill();
context.lineWidth=2;
context.closePath();
context.stroke();
// Rechter oog 
context.beginPath();
context.arc(280,130,40,0,0+Math.PI);
context.fill();
context.lineWidth=2;
context.closePath();
context.stroke();
// Mond bovenste lijn
context.beginPath();
context.strokeStyle="red";
context.moveTo(100,268);
context.lineTo(304,225);
context.lineWidth=2;
context.closePath();
context.stroke();
//Halve circel van mond
context.beginPath();
context.strokeStyle="red";
context.arc(200,234,105,-0.1,0.9*Math.PI);
context.closePath();
context.stroke()
//Halve circel van tong
context.beginPath();
context.strokeStyle="red";
context.arc(210,275,50,-0.1,0.9*Math.PI);
context.lineWidth=3;
context.closePath();
context.stroke()
//Lijn tong
context.beginPath();
context.strokeStyle="red";
context.moveTo(161,291);
context.lineTo(260,271);
context.lineWidth=2;
context.closePath();
context.stroke();
// Neus
context.beginPath();
context.strokeStyle="red";
context.fill();
context.arc(200,200,10,0,10+Math.PI);
context.closePath();
context.stroke();

