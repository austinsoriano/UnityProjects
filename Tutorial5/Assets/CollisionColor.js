#pragma strict

var theColor : Color;
var theOtherColor : Color;

function Start () {
	theColor.r = 0;
	theColor.g = 5;
	theColor.b = 5;
	
	theOtherColor.r = 5;
	theOtherColor.g = 0;
	theOtherColor.b = 5;
}

function OnCollisionEnter() {
	Debug.Log("Collided!");
	if(renderer.material.color == theColor) {
		renderer.material.color = theOtherColor;
	} else {
		renderer.material.color = theColor;
	}
}