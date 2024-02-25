import safeString from '../src/utils/safeString'

const assert = require('assert');

describe("SafeString", function() {

    it('Москва', () => {
        const str = 'Москва'
        assert.notEqual(safeString(str), str);
    });

    it('Спб', () => {
        const str = 'Спб'
        assert.notEqual(safeString(str), str);
    });

    it('Омск', () => {
        const str = 'Омск'
        assert.notEqual(safeString(str), str);
    });

    it('18+', () => {
        const str = '18+'
        assert.notEqual(safeString(str), str);
    });

    it('Секс', () => {
        const str = 'Секс'
        assert.notEqual(safeString(str), str);
    });

    it('наркотики', () => {
        const str = 'наркотики'
        assert.notEqual(safeString(str), str);
    });

    it('Ливны', () => {
        const str = 'Ливны'
        assert.notEqual(safeString(str), str); //не проходит
    });
});
