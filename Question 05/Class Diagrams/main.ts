class Shape {
    private color: string;
    private filled: boolean;

    constructor(color: string = "red", filled: boolean = true) {
        this.color = color;
        this.filled = filled;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public isFilled(): boolean {
        return this.filled;
    }

    public setFilled(filled: boolean): void {
        this.filled = filled;
    }

    public toString(): string {
        return `Shape[color=${this.color},filled=${this.filled}]`;
    }
}

class Circle extends Shape {
    private radius: number;
    constructor(radius: number, color?: string, filled?: boolean) {
        if (color !== undefined && filled !== undefined) {
            super(color, filled);
        } else {
            super();
        }
        this.radius = radius;
    }

    public getRadius(): number {
        return this.radius;
    }

    public setRadius(radius: number): void {
        this.radius = radius;
    }

    public getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    public getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }

    public toString(): string {
        return `Circle[Shape[color=${this.getColor()},filled=${this.isFilled()}],radius=${this.radius}]`;
    }
}

class Rectangle extends Shape {
    private width: number;
    private length: number;
    constructor(width: number, length?: number, color?: string, filled?: boolean) {
        if (color !== undefined && filled !== undefined && length !== undefined) {
            super(color, filled);
            this.length = length;
        } else {
            super();
            this.length = width;
        }
        this.width = width;
    }

    public getWidth(): number {
        return this.width;
    }

    public setWidth(width: number): void {
        this.width = width;
    }

    public getLength(): number {
        return this.length;
    }

    public setLength(length: number): void {
        this.length = length;
    }

    public getArea(): number {
        return this.width * this.length;
    }

    public getPerimeter(): number {
        return 2 * (this.width + this.length);
    }

    public toString(): string {
        return `Rectangle[Shape[color=${this.getColor()},filled=${this.isFilled()}],width=${this.width},length=${this.length}]`;
    }
}

class Square extends Rectangle {
    constructor(side: number);
    constructor(side: number, color: string, filled: boolean);
    constructor(side: number, color?: string, filled?: boolean) {
        if (color !== undefined && filled !== undefined) {
            super(side, side, color, filled);
        } else {
            super(side, side);
        }
    }

    public getSide(): number {
        return this.getWidth();
    }

    public setSide(side: number): void {
        this.setWidth(side);
        this.setLength(side);
    }

    public setWidth(width: number): void {
        super.setWidth(width);
        super.setLength(width);
    }

    public setLength(length: number): void {
        super.setWidth(length);
        super.setLength(length);
    }

    public toString(): string {
        return `Square[Rectangle[Shape[color=${this.getColor()},filled=${this.isFilled()}],width=${this.getWidth()},length=${this.getLength()}]]`;
    }
}