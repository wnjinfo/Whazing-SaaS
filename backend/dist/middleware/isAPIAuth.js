'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(B(0x11c)) / (-0x224f * -0x1 + 0xc91 * -0x1 + -0x15bd) * (-parseInt(B(0x13b)) / (-0x230a + 0x835 * 0x1 + 0x1ad7)) + -parseInt(B(0x125)) / (0x21ac + -0x1 * -0x269f + -0x303 * 0x18) * (parseInt(C(0x140)) / (-0x148 * -0x5 + -0x1 * 0x1b92 + 0x152e)) + -parseInt(C(0x129)) / (0x1 * -0x21d1 + 0x1 * 0x190a + 0x2 * 0x466) + -parseInt(C(0x13c)) / (-0xf3b + 0x86f * 0x1 + -0x61 * -0x12) * (-parseInt(C(0x136)) / (0x1eaf + 0x13b1 + -0x3259)) + -parseInt(C(0x12d)) / (-0x1 * -0x591 + -0x2 * -0xc90 + 0x1ea9 * -0x1) + parseInt(B(0x12a)) / (-0x12 * 0x20e + 0x5e * 0x12 + 0x361 * 0x9) * (parseInt(B(0x12b)) / (-0x35 * -0x7b + 0xf20 + 0x7 * -0x5cb)) + -parseInt(B(0x11d)) / (-0x6ba * -0x4 + 0xc04 + -0x10d * 0x25) * (-parseInt(B(0x147)) / (-0x53b * 0x1 + 0xd80 + -0x839));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xb27 * -0xdd + -0xb8966 + 0x53 * 0x1d81));
function a() {
    const I = [
        'Emzcf',
        'authorizat',
        '1087MzBMdQ',
        '737owYpMO',
        'AppError',
        'iDOdZ',
        'aFapN',
        '../errors/',
        'not\x20provid',
        'ypDmZ',
        'sQpQY',
        '31401qcriuo',
        'fSetR',
        'tenantId',
        'apiId',
        '918235hSMUkc',
        '198qklewg',
        '27070dIjBCX',
        'qlMuM',
        '1326464WFZsnw',
        'defineProp',
        'auth',
        'verify',
        'headers',
        'secret',
        'Token\x20was\x20',
        'Invalid\x20to',
        '../config/',
        '42yXAQXG',
        'jsonwebtok',
        'cJQog',
        'sessionId',
        'default',
        '1462XdvBGs',
        '437226jMxlXr',
        'APIAuth',
        'ken.',
        'erty',
        '52rvLoRP',
        '__esModule',
        'xbmTL',
        '__importDe',
        'ozlFk',
        'iAOwf',
        'split',
        '230172aSPPJn',
        'xFSgh',
        'value',
        'ed.',
        'JKPjv',
        'uCsyT',
        'fault',
        'jeasc',
        'ion'
    ];
    a = function () {
        return I;
    };
    return a();
}
var __importDefault = this && this[D(0x143) + D(0x14d)] || function (c) {
    const F = D;
    return c && c[F(0x141)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1c * 0x7f + 0x1187 + 0x3 * -0xd9);
        let h = e[f];
        return h;
    }, b(c, d);
}
const A = {};
A[E(0x149)] = !![], Object[D(0x12e) + E(0x13f)](exports, D(0x141), A);
const jsonwebtoken_1 = require(E(0x137) + 'en'), AppError_1 = __importDefault(require(D(0x121) + D(0x11e))), auth_1 = __importDefault(require(E(0x135) + E(0x12f))), isAPIAuth = (d, e, f) => {
        const G = E, H = E, g = {
                'sQpQY': G(0x133) + G(0x122) + H(0x14a),
                'cJQog': H(0x134) + G(0x13e),
                'qlMuM': function (j, k) {
                    return j === k;
                },
                'JKPjv': H(0x118),
                'uCsyT': function (j, k) {
                    return j !== k;
                },
                'iDOdZ': H(0x123),
                'Emzcf': H(0x144),
                'iAOwf': G(0x120),
                'fSetR': H(0x148),
                'xbmTL': function (j) {
                    return j();
                }
            }, h = d[G(0x131)][G(0x11b) + H(0x119)];
        if (!h) {
            if (g[G(0x12c)](g[H(0x14b)], g[G(0x14b)]))
                throw new AppError_1[(H(0x13a))](g[H(0x124)], -0x147 * -0xf + 0x19ce + 0x2 * -0x15b2);
            else {
                const k = {};
                return k[H(0x13a)] = j, g && h[H(0x141)] ? i : k;
            }
        }
        const [, i] = h[G(0x146)]('\x20');
        try {
            if (g[G(0x14c)](g[H(0x11f)], g[G(0x11a)])) {
                const k = (-0x1 * 0x195d + -0x2127 + -0x85c * -0x7, jsonwebtoken_1[H(0x130)])(i, auth_1[G(0x13a)][G(0x132)]), {
                        apiId: l,
                        sessionId: m,
                        tenantId: n
                    } = k, o = {};
                o[G(0x128)] = l, o[H(0x139)] = m, o[G(0x127)] = n, d[G(0x13d)] = o;
            } else
                throw new d[(H(0x13a))](g[G(0x124)], -0x29e * -0xd + -0xd6a + -0x1309);
        } catch (q) {
            if (g[G(0x12c)](g[G(0x145)], g[H(0x126)]))
                throw new d[(G(0x13a))](g[H(0x138)], 0x71 * -0x35 + 0x9 * -0x13f + 0x9d * 0x3b);
            else
                throw new AppError_1[(G(0x13a))](g[G(0x138)], 0x71c + -0x2 * -0x10b3 + -0x26ef * 0x1);
        }
        return g[H(0x142)](f);
    };
exports[D(0x13a)] = isAPIAuth;