const { score, bestScore } = require('./bowlingScore');
describe('Track Bowling Score', () => {
    describe('Score of each round', () => {
        it('should return score of round', () => {
            expect(score([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
        });
        it('should raise Invalid if number of rounds is not 10', () => {
            expect(() => score([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toThrow('Invalid');
        });
        it('should raise Invalid array if array is empty', () => {
            expect(() => score([])).toThrow('Invalid array');
        });
        it('should raise Invalid array if input is not array', () => {
            expect(() => score('string')).toThrow('Invalid array');
        });
        it('should return Invalid array if any array entry is empty', () => {
            expect(() => bestScore([[], [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]])).toThrow('Invalid array');
        });
        it('should return Invalid array if any game entry is invalid type', () => {
            expect(() => bestScore(['string', [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6]])).toThrow('Invalid array');
        });
        it('should return best score of the game', () => {
            expect(bestScore([[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]])).toBe(90);
        });
    });
});
