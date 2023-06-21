/**
 * @jest-environment jsdom
 */

const { game, newGame } = require("../game");


beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contains corret ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});


describe("newGame works correctly", () => {
    beforeAll(() => {
        game.score = 42;
        game.playerMoves = [1, 2, 3, 4];
        game.currentGame = [5, 6, 7, 8];
        newGame();
    });
    test("should set game.score to zero", () => {
        expect(game.score).toEqual(0);
    });
    test("should set playerMoves score to []", () => {
        expect(game.playerMoves).toEqual([]);
    });
    test("should set currentGame score to []", () => {
        expect(game.currentGame).toEqual([]);
    });
});