'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(A(0x15e)) / (-0x8 * -0x1c6 + 0x648 + -0x1477 * 0x1) + parseInt(B(0x172)) / (0x1 * -0x851 + 0x1605 + -0x6d9 * 0x2) + parseInt(A(0x152)) / (-0x267 + -0x650 + -0x45d * -0x2) * (-parseInt(B(0x15b)) / (-0xe26 + -0x6 * -0x139 + 0x6d4)) + parseInt(B(0x170)) / (0x71b + -0xf90 + -0x87a * -0x1) * (-parseInt(B(0x16f)) / (0x1ddd * 0x1 + 0xd * 0x29 + -0x552 * 0x6)) + parseInt(B(0x15f)) / (-0x6 * 0xf3 + 0x1 * -0x2f6 + -0x27 * -0x39) + parseInt(B(0x157)) / (0x12c + 0x250c + -0x2630) + parseInt(B(0x16b)) / (0x1372 + -0x481 * -0x1 + -0x17ea) * (parseInt(B(0x156)) / (0x175 * -0x5 + -0x191 * 0x5 + 0x2 * 0x794));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x3c1a6 + 0x45479 + 0x22aab));
function a() {
    const H = [
        'UtYeJ',
        '335748xJNSQr',
        'werCase',
        'mmssSSS',
        'diskStorag',
        'originalna',
        '120093IEWBVp',
        'erty',
        'date-fns',
        'public',
        '276550SUbUVw',
        '2207456KYTurR',
        'mimetype',
        'vqwNg',
        'toLocaleLo',
        '16rfaRnY',
        'resolve',
        'defineProp',
        '299426hXTCHD',
        '1401260tgGLSy',
        'value',
        '__esModule',
        'replace',
        'extname',
        'yGygy',
        'format',
        'multer',
        'endsWith',
        'default',
        'xml',
        'fault',
        '9ERMbfL',
        'path',
        'ddMMyyyyHH',
        '__importDe',
        '174bDZTSG',
        '5605XSQAMz'
    ];
    a = function () {
        return H;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x849 + 0x818 + 0x180);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[C(0x16e) + D(0x16a)] || function (c) {
    const E = C;
    return c && c[E(0x161)] ? c : { 'default': c };
};
const z = {};
z[D(0x160)] = !![], Object[C(0x15d) + C(0x153)](exports, D(0x161), z);
const path_1 = __importDefault(require(C(0x16c))), multer_1 = __importDefault(require(C(0x166))), date_fns_1 = require(C(0x154)), publicFolder = path_1[C(0x168)][C(0x15c)](__dirname, '..', '..', C(0x155));
exports[D(0x168)] = {
    'directory': publicFolder,
    'storage': multer_1[D(0x168)][C(0x150) + 'e']({
        'destination': publicFolder,
        'filename'(c, d, e) {
            const F = C, G = D, f = {
                    'yGygy': F(0x169),
                    'vqwNg': F(0x16d) + G(0x14f),
                    'UtYeJ': function (h, i, j) {
                        return h(i, j);
                    }
                };
            let g;
            if (d[G(0x158)]?.[G(0x15a) + F(0x173)]()[G(0x167)](f[F(0x164)]))
                g = d[F(0x151) + 'me'];
            else {
                const {originalname: h} = d, i = path_1[F(0x168)][F(0x163)](h), j = h[G(0x162)](i, '')[F(0x162)]('#', '')[G(0x162)]('&', ''), k = (-0xc7e + -0x196b + 0x1 * 0x25e9, date_fns_1[F(0x165)])(new Date(), f[G(0x159)]);
                g = j + '_' + k + i;
            }
            return f[G(0x171)](e, null, g);
        }
    })
};