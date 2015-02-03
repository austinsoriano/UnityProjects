#pragma strict

var MAX_X : int = 5;
var MIN_X : int = -5;
var X_Increment : float = 0.1;
var Dir_Right : boolean = true;

function Start () {
	Debug.Log("Mover Starts");	
}

function Update () {
	if(Dir_Right) {
		transform.position.x += X_Increment;
	} else {
		transform.position.x -= X_Increment;
	}
	if(transform.position.x >= MAX_X) {
		Dir_Right = false;
	} else if(transform.position.x <= MIN_X) {
		Dir_Right = true;
	}
}