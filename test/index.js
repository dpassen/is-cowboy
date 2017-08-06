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
        assert(cowboy('\uD83E\uDD20') == true);
    });

    it('handles other unicode surrogate pairs', function () {
        assert(cowboy('\uD83E\uDD37') == false);
    });
});
