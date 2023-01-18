const { score, bestScore } = require('./bowlingScore');
describe('Track Bowling Score', () => {
    describe('Score of each round', () => {
        it('should return score of round', () => {
            expect(score([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
        });
        it('should raise Invalid if number of rounds is not 10', () => {
            expect(() => score([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toThrow("Invalid");
        });
        it('should return best score of the game', () => {
            expect(bestScore([[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]])).toBe(90);
        });
    });
});
