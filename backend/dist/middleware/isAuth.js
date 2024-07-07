'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x35d + 0xaee + -0xcca);
        let h = e[f];
        return h;
    }, b(c, d);
}
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(B(0x1a3)) / (-0x124d + -0xd9 * 0x17 + 0x1 * 0x25cd) + -parseInt(B(0x1a0)) / (-0xdc3 + -0xf * -0x11b + -0x2d0) + parseInt(B(0x18c)) / (0x72c + -0xba4 + 0x47b) + -parseInt(C(0x193)) / (-0x3 * -0x9d + 0x1053 + -0x1226) + parseInt(C(0x191)) / (0x929 + -0x1131 * 0x1 + 0x80d) + parseInt(B(0x19c)) / (0xa91 + -0x1478 + 0x9ed) + parseInt(B(0x185)) / (0x4c0 * -0x8 + -0x11a8 + 0x37af);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x70 * 0xa9 + -0x1 * -0x970f + 0x132f7));
var __importDefault = this && this[D(0x188) + D(0x195)] || function (c) {
    const F = E;
    return c && c[F(0x18a)] ? c : { 'default': c };
};
const A = {};
A[E(0x198)] = !![], Object[E(0x1a7) + D(0x181)](exports, D(0x18a), A);
function a() {
    const I = [
        'fault',
        'LVBeO',
        'UjSSG',
        'value',
        'ed.',
        'tenantId',
        'user',
        '833742gvYqtY',
        'DKIAZ',
        'XodFG',
        'Token\x20was\x20',
        '190986QZfoee',
        'vzxHg',
        'cHErw',
        '94215KDFaSo',
        '../errors/',
        'not\x20provid',
        'AGmHn',
        'defineProp',
        'ion',
        'jsonwebtok',
        'erty',
        'secret',
        'default',
        'authorizat',
        '1050791IusHEg',
        'lkYeT',
        '../config/',
        '__importDe',
        'auth',
        '__esModule',
        'profile',
        '438159nSPBZf',
        'ken.',
        'headers',
        'AppError',
        'split',
        '667670aurnEz',
        'Invalid\x20to',
        '971068wVkcvs',
        'verify'
    ];
    a = function () {
        return I;
    };
    return a();
}
const jsonwebtoken_1 = require(E(0x1a9) + 'en'), AppError_1 = __importDefault(require(E(0x1a4) + E(0x18f))), auth_1 = __importDefault(require(E(0x187) + D(0x189))), isAuth = (d, e, f) => {
        const G = D, H = E, g = {
                'cHErw': G(0x19f) + H(0x1a5) + H(0x199),
                'LVBeO': function (j, k) {
                    return j !== k;
                },
                'UjSSG': G(0x1a1),
                'DKIAZ': H(0x1a6),
                'lkYeT': H(0x192) + H(0x18d),
                'XodFG': function (j) {
                    return j();
                }
            }, h = d[H(0x18e)][H(0x184) + G(0x1a8)];
        if (!h)
            throw new AppError_1[(H(0x183))](g[G(0x1a2)], -0x18fa + 0x13d2 + 0x6bb);
        const [, i] = h[H(0x190)]('\x20');
        try {
            const j = (-0xaf * 0x15 + -0x60b + 0x1466, jsonwebtoken_1[H(0x194)])(i, auth_1[H(0x183)][G(0x182)]), {
                    id: k,
                    profile: l,
                    tenantId: m
                } = j, n = {};
            n['id'] = k, n[H(0x18b)] = l, n[G(0x19a)] = m, d[G(0x19b)] = n;
        } catch (o) {
            if (g[G(0x196)](g[G(0x197)], g[H(0x19d)]))
                throw new AppError_1[(G(0x183))](g[H(0x186)], 0x322 + -0xcf8 + 0xb69);
            else {
                const q = (0x9d + 0x11a1 * -0x2 + 0x22a5, g[H(0x194)])(h, i[G(0x183)][G(0x182)]), {
                        id: r,
                        profile: s,
                        tenantId: t
                    } = q, u = {};
                u['id'] = r, u[G(0x18b)] = s, u[H(0x19a)] = t, j[G(0x19b)] = u;
            }
        }
        return g[H(0x19e)](f);
    };
exports[D(0x183)] = isAuth;