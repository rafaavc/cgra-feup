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
        this.redMaterial = new CGFappearance(this.scene);
        this.redMaterial.setAmbient(0.2, 0.2, 0.2, 1.0);
        this.redMaterial.setDiffuse(1, 0, 0, 1.0);
        this.redMaterial.setDiffuse(1, 0, 0, 1.0);
        this.redMaterial.setShininess(20.0);

        this.purpleMaterial = new CGFappearance(this.scene);
        this.purpleMaterial.setAmbient(0.3, 0.3, 0.3, 1.0);
        this.purpleMaterial.setDiffuse(128/255, 0, 128/255, 1.0);
        this.purpleMaterial.setDiffuse(128/255, 0, 128/255, 1.0);
        this.purpleMaterial.setShininess(20.0);

        this.orangeMaterial = new CGFappearance(this.scene);
        this.orangeMaterial.setAmbient(0.3, 0.3, 0.3, 1.0);
        this.orangeMaterial.setDiffuse(1, 165/255, 0, 1.0);
        this.orangeMaterial.setDiffuse(1, 165/255, 0, 1.0);
        this.orangeMaterial.setShininess(20.0);

        this.blueMaterial = new CGFappearance(this.scene);
        this.blueMaterial.setAmbient(0.3, 0.3, 0.3, 1.0);
        this.blueMaterial.setDiffuse(0, 0, 230/255, 1.0);
        this.blueMaterial.setDiffuse(0, 0, 230/255, 1.0);
        this.blueMaterial.setShininess(20.0);

        this.pinkMaterial = new CGFappearance(this.scene);
        this.pinkMaterial.setAmbient(0.3, 0.3, 0.3, 1.0);
        this.pinkMaterial.setDiffuse(1, 192/255, 203/255, 1.0);
        this.pinkMaterial.setDiffuse(1, 192/255, 203/255, 1.0);
        this.pinkMaterial.setShininess(20.0);

        this.yellowMaterial = new CGFappearance(this.scene);
        this.yellowMaterial.setAmbient(0.3, 0.3, 0.3, 1.0);
        this.yellowMaterial.setDiffuse(1, 1, 0, 1.0);
        this.yellowMaterial.setDiffuse(1, 1, 0, 1.0);
        this.yellowMaterial.setShininess(20.0);
    }

	display() {
        /*this.scene.popMatrix();
        this.scene.pushMatrix();*/

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
        
        this.diamond.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(0, Math.sqrt(2), 0);
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.scene.scale(1, -1, 1);  
        this.yellowMaterial.apply();      
        this.parallelogram.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(2*Math.sqrt(2), 2*Math.sqrt(2)-1, 0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.redMaterial.apply();
        this.triangleSmall.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2)/2, -Math.sqrt(2)/2, 0);
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.purpleMaterial.apply();
        this.triangleSmall.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-Math.sqrt(2), Math.sqrt(2), 0);
        this.scene.rotate(3*Math.PI/4, 0, 0, 1);
        this.orangeMaterial.apply();
        this.triangleBig.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-2, 0, 0);
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.blueMaterial.apply();
        this.triangleBig.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        /*this.scene.translate(-2, 0, 0);
        this.scene.rotate(Math.PI, 0, 0, 1);*/
        this.scene.translate(-1, -1, 0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.pinkMaterial.apply();
        this.triangle.display();

        this.scene.popMatrix();
        // ---- END Primitive drawing section
	}
}
