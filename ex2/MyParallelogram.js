/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyParallelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
            0, 0, 0,    //0
            1, 1, 0,    //1
            2, 0, 0,    //2
            3, 1, 0     //3
		];

		//Counter-clockwise reference of vertices (when double sided, it has also clockwise vertice ordering)
		this.indices = [
			0, 3, 1,
			0, 2, 3,
 			 // Adding double-sidedness
            1, 3, 0,
			3, 2, 0
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}
