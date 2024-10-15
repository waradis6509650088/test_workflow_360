const request = require('supertest');
const app = require('../math.js');

describe("simple arithmetic", () => {
    test("addition", () => {
        expect(app.add(5, 3)).toBe(8);
    });
    test("subtract", () => {
        expect(app.subtract(5, 1)).toBe(4);
    });
    test("multiply", () => {
        expect(app.multiply(2, 3)).toBe(6);
    });
});
