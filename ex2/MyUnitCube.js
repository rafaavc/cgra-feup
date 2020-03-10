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
            0.5, 0.5, 0.5,
            0.5, 0.5, -0.5,
            0.5, -0.5, 0.5,
            0.5, -0.5, -0.5,
            -0.5, 0.5, 0.5,
            -0.5, 0.5, -0.5,
            -0.5, -0.5, 0.5,
            -0.5, -0.5, -0.5
		];

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