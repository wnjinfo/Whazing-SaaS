'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(B(0x1bf)) / (0x198f + 0x6e + -0x19fc) + -parseInt(B(0x1a0)) / (0x12c3 + -0x8d4 * 0x2 + -0x119) * (-parseInt(C(0x1cc)) / (-0x1 * -0x1dd7 + -0xa * -0x1f + -0x2 * 0xf85)) + -parseInt(C(0x1c7)) / (-0x12e7 + 0x661 * 0x1 + 0xc8a) + parseInt(C(0x1b2)) / (-0x18a0 + -0x3a * 0x47 + -0x1 * -0x28bb) * (parseInt(C(0x1c3)) / (0x17b * 0x8 + 0x1ce2 + -0x2 * 0x145a)) + -parseInt(C(0x1cf)) / (0x179a + 0x103 * 0x19 + -0x30de) * (parseInt(B(0x1b8)) / (0x1c55 * 0x1 + 0x2 * 0x15a + -0x1f01)) + -parseInt(B(0x1a1)) / (0x2602 + 0x19ec + -0x3fe5) * (-parseInt(B(0x1b1)) / (0x26 * 0x59 + 0x503 + -0x122f)) + -parseInt(C(0x1ab)) / (-0x2 * -0x135d + 0x19d7 + 0xac1 * -0x6);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5fb70 + 0x1193ba + 0x366b1 * 0x1));
function a() {
    const I = [
        'PrgAN',
        '1631650MaVHqU',
        'Didpe',
        'headers',
        'wPsXj',
        '9900cdFXnR',
        'tenantId',
        'HMhoC',
        '../config/',
        '6098604IOldzE',
        'jsonwebtok',
        'defineProp',
        'erty',
        'QtNVD',
        '66JkbYJw',
        'yuqTA',
        '../errors/',
        '21007kRMyFf',
        'yrNbU',
        'NJFun',
        '__importDe',
        'value',
        'qEikM',
        'ybFdG',
        '92458fYGIXJ',
        '3411171lmnlNo',
        'nRaEe',
        'ion',
        'AppError',
        'auth',
        'Token\x20was\x20',
        'cjTFK',
        'Invalid\x20to',
        'secret',
        'default',
        '35223540rAfEoZ',
        'hqgaS',
        'user',
        'CWCgQ',
        'verify',
        '__esModule',
        '50GkaWHz',
        '5015EkgDQR',
        'QEbkj',
        'split',
        'zOBSI',
        'ken.',
        'authorizat',
        '1304rhUpEV',
        'not\x20provid',
        'ed.',
        'profile',
        'ojolG',
        'fault'
    ];
    a = function () {
        return I;
    };
    return a();
}
var __importDefault = this && this[D(0x19c) + D(0x1bd)] || function (c) {
    const F = D;
    return c && c[F(0x1b0)] ? c : { 'default': c };
};
const A = {};
A[D(0x19d)] = !![], Object[E(0x1c9) + D(0x1ca)](exports, D(0x1b0), A);
const jsonwebtoken_1 = require(E(0x1c8) + 'en'), AppError_1 = __importDefault(require(D(0x1ce) + D(0x1a4))), auth_1 = __importDefault(require(E(0x1c6) + D(0x1a5))), isAuth = (d, e, f) => {
        const G = D, H = E, g = {
                'NJFun': G(0x1a6) + G(0x1b9) + G(0x1ba),
                'qEikM': G(0x1a8) + H(0x1b6),
                'QEbkj': function (j, k) {
                    return j === k;
                },
                'ojolG': G(0x1ae),
                'yuqTA': G(0x1c2),
                'yrNbU': G(0x1ac),
                'PrgAN': H(0x1c0),
                'ybFdG': function (j, k) {
                    return j === k;
                },
                'HMhoC': G(0x1cb),
                'zOBSI': H(0x1a7),
                'nRaEe': function (j) {
                    return j();
                }
            }, h = d[H(0x1c1)][G(0x1b7) + H(0x1a3)];
        if (!h) {
            if (g[G(0x1b3)](g[H(0x1bc)], g[G(0x1cd)]))
                throw new d[(H(0x1aa))](g[H(0x19b)], 0x12cd + 0x2556 * 0x1 + -0x3690);
            else
                throw new AppError_1[(H(0x1aa))](g[G(0x19b)], -0x299 + -0x269f + -0x2acb * -0x1);
        }
        const [, i] = h[G(0x1b4)]('\x20');
        try {
            if (g[H(0x1b3)](g[H(0x1d0)], g[H(0x1be)])) {
                const l = (0xe16 + 0x1f49 + -0x1 * 0x2d5f, g[H(0x1af)])(h, i[H(0x1aa)][H(0x1a9)]), {
                        id: m,
                        profile: n,
                        tenantId: o
                    } = l, p = {};
                p['id'] = m, p[H(0x1bb)] = n, p[H(0x1c4)] = o, j[H(0x1ad)] = p;
            } else {
                const l = (0x2b4 + -0x1 * -0x87d + -0xb31, jsonwebtoken_1[G(0x1af)])(i, auth_1[H(0x1aa)][H(0x1a9)]), {
                        id: m,
                        profile: n,
                        tenantId: o
                    } = l, p = {};
                p['id'] = m, p[G(0x1bb)] = n, p[G(0x1c4)] = o, d[H(0x1ad)] = p;
            }
        } catch (q) {
            if (g[H(0x19f)](g[H(0x1c5)], g[H(0x1b5)]))
                throw new d[(H(0x1aa))](g[G(0x19e)], -0x4 * 0x378 + 0x1978 * 0x1 + -0xa05);
            else
                throw new AppError_1[(G(0x1aa))](g[H(0x19e)], -0x1 * -0xbde + 0x1282 + -0x49 * 0x65);
        }
        return g[H(0x1a2)](f);
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1b9b + -0xe9e * 0x2 + 0x3a72);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[D(0x1aa)] = isAuth;