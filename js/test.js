size = 16;
number = 1;
function Size() {
  size++
  document.getElementById("up").style.fontSize = size+'px';
}
function Add() {
  number += 1;
  document.getElementById("number").innerHTML = number;
}
function Boo() {
  document.write('<p id="boo">Boo!</p>');
}
function Alert() {
  alert('Boo!');
}
function Log() {
  console.log('a scary error!');
}
function Print() {
  window.print();
}
function Login() {
  document.getElementById('login').style.display = "block";
}
function NewWindow() {
    window.open('new.html', '', 'width=500,height=350,resizable=no,menubar=no');
}

let direction = 0;

function Canvas() {
  document.getElementById("canvasButtons").style.display = "block";
  const c = document.getElementById("canvas");
  c.style = "display: inline-block;";
  const ctx = c.getContext("2d");
  ctx.moveTo(0, 50);
  let width = 0;
  let height = 0;

  function delay(ms) { 
    return new Promise(resolve => setTimeout(resolve, ms)); 
  } 
  async function slowedLoop() {
    while (width < 200) {
      Draw();
      refresh = document.getElementById("kurs").innerHTML = height;

      await delay(100)
    }
  }

  async function Draw() {
      console.log("executed");
      ctx.lineTo(width, height);
      ctx.stroke();
      width++;
      if (direction == 0) {
        height = height + 1;
      } else {
        height = height - 1;
      }
  }
  slowedLoop()
}
function CanvasUp() {
  direction = 1;
}
function CanvasDown() {
  direction = 0;
}
