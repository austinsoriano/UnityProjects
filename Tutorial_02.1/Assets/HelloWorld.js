#pragma strict

var counter : int;

function Start () {
	Debug.Log("Hello World");
	counter = 0;
}

function Update () {
	counter++;
	Debug.Log(counter);
}