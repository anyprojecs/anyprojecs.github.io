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