'use strict';
const D = b, E = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x195f + -0x1 * 0x6 + -0x1aad * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(B(0x15a)) / (-0x9 * 0x3ff + -0x564 + 0x295c) + parseInt(B(0x14a)) / (0xe33 + 0x4 * 0x700 + -0x2a31 * 0x1) * (parseInt(B(0x157)) / (-0x9d4 + 0xd6a + -0x393)) + parseInt(C(0x14b)) / (-0xb88 * -0x1 + 0x1 * 0x71d + 0x13 * -0xfb) + parseInt(B(0x148)) / (-0x1d5 + 0x239 * -0xb + 0x1a4d) + -parseInt(B(0x149)) / (-0xa * 0x2b4 + 0x4 * 0x87f + -0x6ee) * (parseInt(B(0x169)) / (-0x3a5 * -0x4 + -0x2002 + 0x1175)) + parseInt(B(0x14d)) / (0x2458 + 0x4f * 0x6e + -0x2e * 0x187) * (-parseInt(C(0x153)) / (-0x7 * 0x4cf + -0x29f + 0x2451)) + -parseInt(B(0x16a)) / (-0x1 * -0x18ee + -0x241 * 0x1 + -0x16a3 * 0x1) * (parseInt(C(0x150)) / (-0x8 * 0x3e1 + 0x39f + -0x1 * -0x1b74));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1338a3 + -0x145fb + 0xbc0 * 0x2ab));
var __importDefault = this && this[D(0x16f) + E(0x159)] || function (c) {
    const F = E;
    return c && c[F(0x14f)] ? c : { 'default': c };
};
const A = {};
A[D(0x165)] = !![], Object[E(0x151) + D(0x161)](exports, D(0x14f), A);
const jsonwebtoken_1 = require(E(0x167) + 'en'), AppError_1 = __importDefault(require(D(0x15c) + E(0x15e))), auth_1 = __importDefault(require(E(0x16b) + D(0x14c))), isAPIAuth = (d, e, f) => {
        const G = D, H = E, g = {
                'kIuxZ': G(0x15f) + H(0x168) + H(0x15b),
                'MXITX': G(0x164) + G(0x15d),
                'bJxcr': function (j) {
                    return j();
                }
            }, h = d[H(0x160)][G(0x16c) + H(0x162)];
        if (!h)
            throw new AppError_1[(G(0x152))](g[H(0x154)], 0x1931 + -0x1008 + -0x796);
        const [, i] = h[G(0x156)]('\x20');
        try {
            const j = (0x2387 + -0x183 * 0x1 + -0x137 * 0x1c, jsonwebtoken_1[G(0x16e)])(i, auth_1[G(0x152)][G(0x155)]), {
                    apiId: k,
                    sessionId: l,
                    tenantId: m
                } = j, n = {};
            n[H(0x166)] = k, n[G(0x163)] = l, n[G(0x14e)] = m, d[G(0x170)] = n;
        } catch (o) {
            throw new AppError_1[(H(0x152))](g[G(0x16d)], 0x524 + -0x23eb + 0x2 * 0x102d);
        }
        return g[H(0x158)](f);
    };
function a() {
    const I = [
        '146610hzWYpS',
        '../config/',
        'authorizat',
        'MXITX',
        'verify',
        '__importDe',
        'APIAuth',
        '5658865ZwxEaj',
        '3522JFnFXb',
        '10vqmRFl',
        '3972284tFxnBN',
        'auth',
        '8gAMCzQ',
        'tenantId',
        '__esModule',
        '11MoRtnm',
        'defineProp',
        'default',
        '5001894gFKbqA',
        'kIuxZ',
        'secret',
        'split',
        '489387txpOFI',
        'bJxcr',
        'fault',
        '613872UvJLtV',
        'ed.',
        '../errors/',
        'ken.',
        'AppError',
        'Token\x20was\x20',
        'headers',
        'erty',
        'ion',
        'sessionId',
        'Invalid\x20to',
        'value',
        'apiId',
        'jsonwebtok',
        'not\x20provid',
        '12460SrtmZG'
    ];
    a = function () {
        return I;
    };
    return a();
}
exports[E(0x152)] = isAPIAuth;