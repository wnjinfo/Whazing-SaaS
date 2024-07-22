'use strict';
const C = b, D = b;
function a() {
    const H = [
        'erty',
        '6833660JkUECH',
        'value',
        'ddMMyyyyHH',
        'date-fns',
        '11Ppxrko',
        '4233150zOwERM',
        'endsWith',
        '23689790vaTDhd',
        'CPoJz',
        '7669197XvZgdr',
        'originalna',
        '4733330lFaQUP',
        'multer',
        'fault',
        'resolve',
        'extname',
        'werCase',
        'replace',
        'default',
        'xml',
        'path',
        'mimetype',
        '2YjwATY',
        'format',
        '2066502ghlUED',
        'diskStorag',
        'public',
        '14PvduKw',
        '__esModule',
        '538938XCCnoh',
        '8okdLnO',
        'mmssSSS',
        'ZIfmT',
        'defineProp',
        'aLEKA',
        'toLocaleLo',
        '__importDe'
    ];
    a = function () {
        return H;
    };
    return a();
}
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(A(0x1e7)) / (-0x2 * 0x87e + -0x24 * 0xa4 + 0x280d) * (-parseInt(A(0x1ee)) / (-0x154 * -0x10 + -0x14e7 * -0x1 + -0x2a25)) + parseInt(A(0x1e9)) / (-0x1 * 0x23ae + -0x1a13 + 0x3dc4) + parseInt(A(0x1f7)) / (-0x222 + 0x1a39 + 0x1813 * -0x1) + parseInt(A(0x1dc)) / (-0x1 * 0x11e7 + -0x16d6 + -0x11a * -0x25) + parseInt(B(0x1fc)) / (-0x1 * 0xc6f + 0x1 * 0x2705 + -0x1a90) * (parseInt(A(0x1ec)) / (0x26e7 * -0x1 + 0x3 * 0x1cf + 0x2181)) + parseInt(B(0x1ef)) / (-0x1 * 0x121 + 0x26 * -0x3c + 0xa11) * (-parseInt(A(0x1da)) / (-0x259a + -0x8c0 + 0x2e63)) + parseInt(A(0x1fe)) / (-0x5a8 * 0x3 + -0x1 * -0x6b9 + 0x1 * 0xa49) * (-parseInt(B(0x1fb)) / (0x7d1 + -0x1951 * 0x1 + 0x5d9 * 0x3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7dee6 + 0xa2400 + 0xce949));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3 * -0x14b + -0x3 * -0x243 + -0x1 * 0x10e);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[C(0x1f5) + C(0x1de)] || function (c) {
    const E = D;
    return c && c[E(0x1ed)] ? c : { 'default': c };
};
const z = {};
z[D(0x1f8)] = !![], Object[C(0x1f2) + D(0x1f6)](exports, D(0x1ed), z);
const path_1 = __importDefault(require(C(0x1e5))), multer_1 = __importDefault(require(C(0x1dd))), date_fns_1 = require(D(0x1fa)), publicFolder = path_1[D(0x1e3)][D(0x1df)](__dirname, '..', '..', D(0x1eb));
exports[C(0x1e3)] = {
    'directory': publicFolder,
    'storage': multer_1[D(0x1e3)][D(0x1ea) + 'e']({
        'destination': publicFolder,
        'filename'(c, d, e) {
            const F = C, G = C, f = {
                    'CPoJz': F(0x1e4),
                    'aLEKA': F(0x1f9) + G(0x1f0),
                    'ZIfmT': function (h, i, j) {
                        return h(i, j);
                    }
                };
            let g;
            if (d[F(0x1e6)]?.[F(0x1f4) + F(0x1e1)]()[G(0x1fd)](f[F(0x1ff)]))
                g = d[G(0x1db) + 'me'];
            else {
                const {originalname: h} = d, i = path_1[F(0x1e3)][G(0x1e0)](h), j = h[F(0x1e2)](i, '')[G(0x1e2)]('#', '')[F(0x1e2)]('&', ''), k = (-0x11 * -0xb7 + 0x823 + -0x144a, date_fns_1[F(0x1e8)])(new Date(), f[G(0x1f3)]);
                g = j + '_' + k + i;
            }
            return f[F(0x1f1)](e, null, g);
        }
    })
};