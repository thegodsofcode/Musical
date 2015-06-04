#pragma strict

public var angle : float = 0;
public var speed : float = 5;

function Start () {
	//speed = 1;
}

function Update () {

		angle+=speed;
			    	    
	    transform.rotation = Quaternion.AngleAxis(angle, Vector3.up);
	    
	    if(angle>360)
	    	angle = 0;	
	
}