'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(B(0x1aa)) / (0xc * -0x18 + -0x15c4 * 0x1 + 0x1 * 0x16e5) + -parseInt(C(0x19f)) / (-0x1a0d + 0x74f * -0x5 + 0x3e9a) * (-parseInt(B(0x19c)) / (-0x46c * 0x7 + 0x7ed * 0x4 + 0x7 * -0x1b)) + parseInt(B(0x194)) / (0xc1b + -0x1efc + 0x12e5) * (-parseInt(B(0x1b6)) / (-0xd * 0x245 + 0x498 + 0x2 * 0xc77)) + parseInt(C(0x1bb)) / (-0x98a + -0xba0 + 0x1530) * (-parseInt(B(0x199)) / (-0x209c + 0xc2f + 0x1474)) + parseInt(C(0x1bd)) / (0x15a9 + 0x111 + 0x2 * -0xb59) * (-parseInt(C(0x1ba)) / (0x3b * 0x15 + 0x83e + -0xd0c)) + parseInt(C(0x1a5)) / (-0x11 * 0xe9 + 0x218c + 0x39 * -0x51) + -parseInt(B(0x1ab)) / (-0x243c + 0x2386 + 0xc1 * 0x1) * (-parseInt(C(0x19a)) / (0xa27 * 0x1 + -0x2b * 0xd7 + -0x2 * -0xd01));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1f3e0 + 0x3c3d * -0x28 + 0x109d3c));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x12 * 0x95 + 0x1590 + -0x1 * 0x1e77);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const I = [
        '5oROmBE',
        'secret',
        'oPRme',
        'not\x20provid',
        '1549755YwWzIQ',
        '788772ScYxBD',
        'qQoOw',
        '8TMhhcK',
        'VWHtl',
        'ken.',
        '../errors/',
        'Grwuq',
        'kSRFd',
        'jsonwebtok',
        'frdPM',
        '__esModule',
        'erty',
        '669748rZnWWt',
        'AppError',
        'ion',
        'ed.',
        'fault',
        '14PFypky',
        '150828HbqiKV',
        'Invalid\x20to',
        '15CwXIsL',
        'tenantId',
        '../config/',
        '5458TPYxOZ',
        'default',
        '__importDe',
        'verify',
        'JyEKo',
        'IVdoR',
        '3646780dMTWrU',
        'user',
        'luMDv',
        'headers',
        'fvhnF',
        '2648MOhaiS',
        '495sHVpfm',
        'Token\x20was\x20',
        'OKieq',
        'OGROn',
        'auth',
        'defineProp',
        'jUbnJ',
        'value',
        'profile',
        'split',
        'authorizat'
    ];
    a = function () {
        return I;
    };
    return a();
}
var __importDefault = this && this[D(0x1a1) + E(0x198)] || function (c) {
    const F = D;
    return c && c[F(0x1c5)] ? c : { 'default': c };
};
const A = {};
A[E(0x1b2)] = !![], Object[D(0x1b0) + E(0x193)](exports, E(0x1c5), A);
const jsonwebtoken_1 = require(D(0x1c3) + 'en'), AppError_1 = __importDefault(require(E(0x1c0) + E(0x195))), auth_1 = __importDefault(require(E(0x19e) + D(0x1af))), isAuth = (d, e, f) => {
        const G = D, H = E, g = {
                'qQoOw': G(0x19b) + H(0x1bf),
                'fvhnF': function (j, k) {
                    return j !== k;
                },
                'oPRme': G(0x1ad),
                'IVdoR': G(0x1ac) + H(0x1b9) + G(0x197),
                'VWHtl': H(0x1ae),
                'kSRFd': G(0x1c4),
                'luMDv': function (j, k) {
                    return j !== k;
                },
                'JyEKo': H(0x1c1),
                'jUbnJ': function (j) {
                    return j();
                }
            }, h = d[G(0x1a8)][H(0x1b5) + H(0x196)];
        if (!h) {
            if (g[H(0x1a9)](g[H(0x1b8)], g[H(0x1b8)])) {
                const k = {};
                return k[G(0x1a0)] = j, g && h[G(0x1c5)] ? i : k;
            } else
                throw new AppError_1[(G(0x1a0))](g[H(0x1a4)], -0x1ebd + 0x3bd + -0x415 * -0x7);
        }
        const [, i] = h[G(0x1b4)]('\x20');
        try {
            if (g[G(0x1a9)](g[H(0x1be)], g[H(0x1c2)])) {
                const k = (0x24ae + -0x562 * -0x7 + -0x4a5c, jsonwebtoken_1[H(0x1a2)])(i, auth_1[H(0x1a0)][G(0x1b7)]), {
                        id: l,
                        profile: m,
                        tenantId: n
                    } = k, o = {};
                o['id'] = l, o[G(0x1b3)] = m, o[G(0x19d)] = n, d[G(0x1a6)] = o;
            } else
                throw new d[(G(0x1a0))](g[G(0x1bc)], -0xe * 0x62 + 0xd05 * 0x1 + 0x26 * -0x29);
        } catch (q) {
            if (g[H(0x1a7)](g[G(0x1a3)], g[G(0x1a3)])) {
                const s = (-0x581 * -0x5 + 0xa7c + -0x2601, g[G(0x1a2)])(h, i[H(0x1a0)][H(0x1b7)]), {
                        id: t,
                        profile: u,
                        tenantId: v
                    } = s, w = {};
                w['id'] = t, w[G(0x1b3)] = u, w[G(0x19d)] = v, j[H(0x1a6)] = w;
            } else
                throw new AppError_1[(G(0x1a0))](g[G(0x1bc)], 0xf * -0x17b + -0x2e * 0xa7 + 0x35ca);
        }
        return g[G(0x1b1)](f);
    };
exports[D(0x1a0)] = isAuth;