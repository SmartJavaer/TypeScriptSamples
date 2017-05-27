class Shape {
    area: number;
    private color1: string;

    constructor(public name: string, width: number, height: number) {
        this.area = width * height;
        this.color1 = 'pink';
    };

    shoutout() {
        return "I'm " + this.color1 + " " + this.name + " with an area of " + this.area + " cm squared.";
    }
}

class Shape3D extends Shape {

    volume: number;

    constructor(public name: string, width: number, height: number, length: number) {
        super(name, width, height);
        this.volume = length * this.area;
    };

    shoutout(): string {
        return "I'm " + this.name + " with a volume of " + this.volume + " cm cube.";
    }

    superShout(): string {
        return super.shoutout();
    }
}

var square = new Shape("square", 30, 30);

console.log(square.shoutout());
console.log('Area of Shape: ' + square.area);
console.log('Name of Shape: ' + square.name);
console.log('Color of Shape: ' + square.color1);
console.log('Width of Shape: ' + square.width);
console.log('Height of Shape: ' + square.height);
