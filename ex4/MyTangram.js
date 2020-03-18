/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
        super(scene);
        this.scene = scene;
        this.diamond = new MyDiamond(scene);
        this.triangle = new MyTriangle(scene);
        this.parallelogram = new MyParallelogram(scene);
        this.triangleSmall = new MyTriangleSmall(scene);
        this.triangleBig = new MyTriangleBig(scene);
        this.initMaterials();
    }
    
    initMaterials() {
        this.tangramMaterial = new CGFappearance(this.scene);
        this.tangramMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.tangramMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.tangramMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.tangramMaterial.setShininess(10.0);
        this.tangramMaterial.loadTexture('images/tangram.png');
        this.tangramMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

	display() {

        // ---- BEGIN Primitive drawing section
        let angle = Math.PI/4;
        let rot = [
            Math.cos(angle), Math.sin(angle), 0, 0,
            -Math.sin(angle), Math.cos(angle), 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]

        let tx = Math.sqrt(2)/2;
        let ty = Math.sqrt(2)/2;
        let tz = 0;

        let translate = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            tx, ty, tz, 1
        ]

        this.scene.pushMatrix();
        this.scene.multMatrix(translate);
        this.scene.multMatrix(rot);
        
        this.tangramMaterial.apply();
        this.diamond.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0, Math.sqrt(2), 0);
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.scene.scale(1, -1, 1);       
        this.parallelogram.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(2*Math.sqrt(2), 2*Math.sqrt(2)-1, 0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.triangleSmall.texCoords = [
            0.25, 0.75,
            0.75, 0.75,
            0.5, 0.5
        ]
        this.triangleSmall.initBuffers();
        this.triangleSmall.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2)/2, -Math.sqrt(2)/2, 0);
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.triangleSmall.texCoords = [
            0, 0,
            0, 0.5,
            0.25, 0.25
        ]
        this.triangleSmall.initBuffers();
        this.triangleSmall.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-Math.sqrt(2), Math.sqrt(2), 0);
        this.scene.rotate(3*Math.PI/4, 0, 0, 1);
        this.triangleBig.texCoords = [
            1, 0,
            1, 1,
            0.5, 0.5
        ]
        this.triangleBig.initBuffers();
        this.triangleBig.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-2, 0, 0);
        this.scene.rotate(Math.PI, 0, 0, 1);this.triangleBig.texCoords = [
            1, 0,
            0, 0,
            0.5, 0.5
        ]
        this.triangleBig.initBuffers();
        this.triangleBig.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        /*this.scene.translate(-2, 0, 0);
        this.scene.rotate(Math.PI, 0, 0, 1);*/
        this.scene.translate(-1, -1, 0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.triangle.display();

        this.scene.popMatrix();
        // ---- END Primitive drawing section
	}
}
