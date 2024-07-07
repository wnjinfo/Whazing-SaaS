'use strict';
function a() {
    const H = [
        'toLocaleLo',
        'mmssSSS',
        'format',
        'erty',
        'NELwb',
        '__importDe',
        '3LzmyWq',
        'VLMva',
        'multer',
        '6873223gvGebQ',
        'endsWith',
        '1143722BKOlzz',
        'public',
        'value',
        'date-fns',
        'werCase',
        '6206656uOPSPc',
        'resolve',
        'ddMMyyyyHH',
        'mimetype',
        'diskStorag',
        '1388980ptRXFI',
        'default',
        'replace',
        '261753YWETGH',
        'fault',
        'YumJA',
        '9237294WGmMjz',
        'path',
        '4415455YPQZGu',
        'extname',
        '6BItxLS',
        'xml',
        '__esModule',
        'originalna',
        'defineProp'
    ];
    a = function () {
        return H;
    };
    return a();
}
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(A(0x96)) / (-0x1245 + 0x19 * 0xf5 + 0x1 * -0x5a7) + -parseInt(B(0x89)) / (0x14e7 * -0x1 + 0x196b * -0x1 + 0x2e54) + -parseInt(B(0xa8)) / (0x2 * -0x1be + 0xf2d + -0xbae) * (parseInt(A(0x93)) / (0x1 * 0xb15 + -0x6b6 * 0x4 + 0x1 * 0xfc7)) + parseInt(B(0x9b)) / (0x1feb + -0x1325 + -0xcc1) + -parseInt(B(0x9d)) / (-0x3 * 0x86e + 0xb4f + -0xe01 * -0x1) * (parseInt(A(0x87)) / (0x14b1 * -0x1 + 0x2245 + -0xd8d)) + parseInt(B(0x8e)) / (-0x1bc0 + 0x1357 + 0x871) + parseInt(A(0x99)) / (0x35 * 0xd + -0x93b + -0x11 * -0x63);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0xfe34d + -0x5209d * -0x1 + 0x13d * 0xf21));
var __importDefault = this && this[C(0xa7) + C(0x97)] || function (c) {
    const E = D;
    return c && c[E(0x9f)] ? c : { 'default': c };
};
const z = {};
z[D(0x8b)] = !![], Object[C(0xa1) + D(0xa5)](exports, D(0x9f), z);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x267c * -0x1 + 0xa3 * -0x26 + 0x3f33);
        let h = e[f];
        return h;
    }, b(c, d);
}
const path_1 = __importDefault(require(D(0x9a))), multer_1 = __importDefault(require(D(0x86))), date_fns_1 = require(D(0x8c)), publicFolder = path_1[D(0x94)][D(0x8f)](__dirname, '..', '..', D(0x8a));
exports[D(0x94)] = {
    'directory': publicFolder,
    'storage': multer_1[C(0x94)][D(0x92) + 'e']({
        'destination': publicFolder,
        'filename'(c, d, e) {
            const F = C, G = D, f = {
                    'NELwb': F(0x9e),
                    'VLMva': F(0x90) + F(0xa3),
                    'YumJA': function (h, i, j) {
                        return h(i, j);
                    }
                };
            let g;
            if (d[F(0x91)]?.[F(0xa2) + G(0x8d)]()[F(0x88)](f[G(0xa6)]))
                g = d[G(0xa0) + 'me'];
            else {
                const {originalname: h} = d, i = path_1[F(0x94)][F(0x9c)](h), j = h[G(0x95)](i, '')[G(0x95)]('#', '')[F(0x95)]('&', ''), k = (0x2 * -0x77f + 0x1 * 0x12db + -0x3dd, date_fns_1[G(0xa4)])(new Date(), f[G(0x85)]);
                g = j + '_' + k + i;
            }
            return f[G(0x98)](e, null, g);
        }
    })
};