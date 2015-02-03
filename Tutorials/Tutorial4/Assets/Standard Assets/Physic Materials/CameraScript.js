#pragma strict

function Start () {
	var floor = GameObject.CreatePrimitive(PrimitiveType.Plane);
	floor.transform.position = Vector3(0, -1, 10);
	floor.transform.localScale = Vector3(10, 1, 10);
	
	var cube1 = GameObject.CreatePrimitive(PrimitiveType.Cube);
	cube1.transform.position = Vector3(0, 10, 10);
	cube1.transform.rotation = Quaternion.Euler(10, 0, 10);
	cube1.AddComponent("CollisionColor");
	cube1.AddComponent("Rigidbody");
	cube1.collider.material.bounciness = 1.5;
	
	var cube2 = GameObject.CreatePrimitive(PrimitiveType.Cube);
	cube2.transform.position = Vector3(2, 10, 10);
	cube2.AddComponent("CollisionColor");
	cube2.AddComponent("Rigidbody");
	cube2.collider.material.bounciness = 0;	
}
