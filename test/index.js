var assert = require('assert');
var cowboy = require('..');

describe('is-cowboy', function () {
    it('handles garbage data', function () {
        assert(cowboy() == false);
        assert(cowboy({}) == false);
        assert(cowboy([]) == false);
        assert(cowboy(null) == false);
        assert(cowboy(undefined) == false);
    });

    it('handles empty strings', function () {
        assert(cowboy('') == false);
    });

    it('handles cowboys', function () {
        assert(cowboy('\u{1F920}') == true);
    });

    it('handles other unicode strings', function () {
        assert(cowboy('\u{1F937}') == false);
    });
});
