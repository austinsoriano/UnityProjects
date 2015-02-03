#pragma strict

function Start () {
	Debug.Log("Create Cube Starts");
	
	var cube = GameObject.CreatePrimitive(PrimitiveType.Cube);
	cube.transform.position = Vector3(0, 0, 0);
	cube.AddComponent("Mover");
	
	// for camera
	Camera.main.gameObject.AddComponent("Mover");
	Debug.Log("Added the Mover script to the camera");
}