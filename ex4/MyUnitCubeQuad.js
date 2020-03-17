class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
        super(scene);
        this.scene = scene;
        this.plane = new MyQuad(scene);
        this.initMaterials();
    }
    
    initMaterials() {
        this.topMaterial = new CGFappearance(this.scene);
        this.topMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.topMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.topMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.topMaterial.setShininess(10.0);
        this.topMaterial.loadTexture('images/mineTop.png');
        this.topMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.bottomMaterial = new CGFappearance(this.scene);
        this.bottomMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.bottomMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.bottomMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.bottomMaterial.setShininess(10.0);
        this.bottomMaterial.loadTexture('images/mineBottom.png');
        this.bottomMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.sideMaterial = new CGFappearance(this.scene);
        this.sideMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.sideMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.sideMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.sideMaterial.setShininess(10.0);
        this.sideMaterial.loadTexture('images/mineSide.png');
        this.sideMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

	display() {
        this.scene.pushMatrix();

        // transformations need to be in reverse order
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.bottomMaterial.apply();
        this.plane.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(-Math.PI/2, 1, 0, 0); 
        this.topMaterial.apply();   
        this.plane.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.sideMaterial.apply();   
        this.plane.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(-Math.PI/2, 0, 1, 0);
        this.plane.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(0, 0, 0.5);
        this.plane.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.plane.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        /*this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(2*Math.sqrt(2), 2*Math.sqrt(2)-1, 0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.triangleSmall.texCoords = [
            0, 0,
            0, 0.5,
            0.25, 0.25
        ]
        this.triangleSmall.initBuffers();
        this.triangleSmall.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2)/2, -Math.sqrt(2)/2, 0);
        this.scene.rotate(Math.PI/4, 0, 0, 1);
        this.triangleSmall.texCoords = [
            0.25, 0.75,
            0.75, 0.75,
            0.5, 0.5
        ]
        this.triangleSmall.initBuffers();
        this.triangleSmall.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-Math.sqrt(2), Math.sqrt(2), 0);
        this.scene.rotate(3*Math.PI/4, 0, 0, 1);
        this.triangleBig.texCoords = [
            1, 0,
            0, 0,
            0.5, 0.5
        ]
        this.triangleBig.initBuffers();
        this.triangleBig.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        this.scene.translate(-2, 0, 0);
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.triangleBig.texCoords = [
            1, 0,
            1, 1,
            0.5, 0.5
        ]
        this.triangleBig.initBuffers();
        this.triangleBig.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();
        
        this.scene.translate(-1, -1, 0);
        this.scene.rotate(Math.PI/2, 0, 0, 1);
        this.triangle.display();

        this.scene.popMatrix();*/
        // ---- END Primitive drawing section
	}
}
