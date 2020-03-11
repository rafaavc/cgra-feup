/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
            0.5, 0.5, 0.5, // first vertices
            0.5, 0.5, -0.5,
            0.5, -0.5, 0.5,
            0.5, -0.5, -0.5,
            -0.5, 0.5, 0.5,
            -0.5, 0.5, -0.5,
            -0.5, -0.5, 0.5,
            -0.5, -0.5, -0.5,
            0.5, 0.5, 0.5, // second vertices
            0.5, 0.5, -0.5,
            0.5, -0.5, 0.5,
            0.5, -0.5, -0.5,
            -0.5, 0.5, 0.5,
            -0.5, 0.5, -0.5,
            -0.5, -0.5, 0.5,
            -0.5, -0.5, -0.5,
            0.5, 0.5, 0.5, // third vertices
            0.5, 0.5, -0.5,
            0.5, -0.5, 0.5,
            0.5, -0.5, -0.5,
            -0.5, 0.5, 0.5,
            -0.5, 0.5, -0.5,
            -0.5, -0.5, 0.5,
            -0.5, -0.5, -0.5
        ]; 
        
        this.normals = [];

        for (let i = 0; i < this.vertices.length-2; i+= 3) {
            let normal = [];
            switch (Math.floor(i/24)) {
                case 0:
                    normal = [1, 0, 0];
                    if (this.vertices[i] < 0) normal = normal.map((a) => -1*a);
                    break;
                case 1:
                    normal = [0, 1, 0];
                    if (this.vertices[i+1] < 0) normal = normal.map((a) => -1*a);
                    break;
                case 2:
                    normal = [0, 0, 1];
                    if (this.vertices[i+2] < 0) normal = normal.map((a) => -1*a);
                    break;
                default: 
                    break;
            }
            for (let a of normal) this.normals.push(a);
        }


		//Counter-clockwise reference of vertices
		this.indices = [
            4, 0, 1,
            1, 5, 4,
            4, 2, 0,
            6, 2, 4,
            3, 1, 0,
            2, 3, 0,
            2, 6, 7,
            3, 2, 7,
            5, 1, 3,
            5, 3, 7,
            4, 5, 6,
            6, 5, 7
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}