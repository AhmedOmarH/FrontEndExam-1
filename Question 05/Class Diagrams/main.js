var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        if (color === void 0) { color = "red"; }
        if (filled === void 0) { filled = true; }
        this.color = color;
        this.filled = filled;
    }
    Shape.prototype.getColor = function () {
        return this.color;
    };
    Shape.prototype.setColor = function (color) {
        this.color = color;
    };
    Shape.prototype.isFilled = function () {
        return this.filled;
    };
    Shape.prototype.setFilled = function (filled) {
        this.filled = filled;
    };
    Shape.prototype.toString = function () {
        return "Shape[color=".concat(this.color, ",filled=").concat(this.filled, "]");
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius, color, filled) {
        var _this = this;
        if (color !== undefined && filled !== undefined) {
            _this = _super.call(this, color, filled) || this;
        }
        else {
            _this = _super.call(this) || this;
        }
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.getPerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    Circle.prototype.toString = function () {
        return "Circle[Shape[color=".concat(this.getColor(), ",filled=").concat(this.isFilled(), "],radius=").concat(this.radius, "]");
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, length, color, filled) {
        var _this = this;
        if (color !== undefined && filled !== undefined && length !== undefined) {
            _this = _super.call(this, color, filled) || this;
            _this.length = length;
        }
        else {
            _this = _super.call(this) || this;
            _this.length = width;
        }
        _this.width = width;
        return _this;
    }
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    Rectangle.prototype.setWidth = function (width) {
        this.width = width;
    };
    Rectangle.prototype.getLength = function () {
        return this.length;
    };
    Rectangle.prototype.setLength = function (length) {
        this.length = length;
    };
    Rectangle.prototype.getArea = function () {
        return this.width * this.length;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.length);
    };
    Rectangle.prototype.toString = function () {
        return "Rectangle[Shape[color=".concat(this.getColor(), ",filled=").concat(this.isFilled(), "],width=").concat(this.width, ",length=").concat(this.length, "]");
    };
    return Rectangle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(side, color, filled) {
        var _this = this;
        if (color !== undefined && filled !== undefined) {
            _this = _super.call(this, side, side, color, filled) || this;
        }
        else {
            _this = _super.call(this, side, side) || this;
        }
        return _this;
    }
    Square.prototype.getSide = function () {
        return this.getWidth();
    };
    Square.prototype.setSide = function (side) {
        this.setWidth(side);
        this.setLength(side);
    };
    Square.prototype.setWidth = function (width) {
        _super.prototype.setWidth.call(this, width);
        _super.prototype.setLength.call(this, width);
    };
    Square.prototype.setLength = function (length) {
        _super.prototype.setWidth.call(this, length);
        _super.prototype.setLength.call(this, length);
    };
    Square.prototype.toString = function () {
        return "Square[Rectangle[Shape[color=".concat(this.getColor(), ",filled=").concat(this.isFilled(), "],width=").concat(this.getWidth(), ",length=").concat(this.getLength(), "]]");
    };
    return Square;
}(Rectangle));
