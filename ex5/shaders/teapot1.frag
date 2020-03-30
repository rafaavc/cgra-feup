#ifdef GL_ES
precision highp float;
#endif

varying vec4 vPosition;

void main() {
    vec4 color;
    if (vPosition.y > 0.5) {
        color = vec4(0.894, 0.901, 0, 1); // yellow
    } else {
        color = vec4(0.062, 0.431, 0.819, 1); // blue
    }
	gl_FragColor =  color;
}