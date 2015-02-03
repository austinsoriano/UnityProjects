#pragma strict

var theColor : Color;
var theOtherColor : Color;

function Start () {
	theColor.r = 0;
	theColor.g = 10;
	theColor.b = 10;
	
	theOtherColor.r = 10;
	theOtherColor.g = 0;
	theOtherColor.g = 10;
}

function Update () {
	Debug.Log("Collided!");
	if(renderer.material.color == theColor) {
		renderer.material.color = theOtherColor;
	} else {
		renderer.material.color = theColor;
	}
}