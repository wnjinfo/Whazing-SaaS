'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(A(0x1fd)) / (-0x1eac + 0x1b34 + 0x379) + -parseInt(A(0x1ee)) / (0x1a5b + -0x95 * -0x5 + -0x1d42) * (parseInt(B(0x208)) / (-0x2d * -0x9b + 0x13f * 0x7 + -0x731 * 0x5)) + parseInt(B(0x207)) / (-0x1 * -0xe20 + -0x158d + -0x17d * -0x5) * (parseInt(A(0x1f7)) / (0x32 * -0x3a + 0x2 * 0x1261 + -0x1969)) + -parseInt(A(0x202)) / (0x25a + 0x7 * 0x502 + 0x3a * -0xa5) + -parseInt(A(0x1f2)) / (-0xd * 0x1aa + 0x3 * 0x5fe + 0x3af) * (parseInt(B(0x1ed)) / (0x1b26 + -0x20a3 + 0x585)) + -parseInt(A(0x200)) / (0x1a59 + 0x9e9 + -0x2439) + parseInt(B(0x1ea)) / (-0x133c + 0x2ad + 0x1099) * (parseInt(A(0x20c)) / (0x3 * 0xb0d + 0x16fc + 0x167 * -0x28));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xe543b + 0x4de * -0x1b6 + -0x29 * -0x333f));
var __importDefault = this && this[C(0x209) + D(0x206)] || function (c) {
    const E = C;
    return c && c[E(0x1fc)] ? c : { 'default': c };
};
const x = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x1aa4 + -0x2 * -0xc36 + -0x3127);
        let h = e[f];
        return h;
    }, b(c, d);
}
x[D(0x1f8)] = !![], Object[C(0x1f6) + D(0x1f3)](exports, D(0x1fc), x);
const jsonwebtoken_1 = require(D(0x20b) + 'en'), auth_1 = __importDefault(require(C(0x1e9) + C(0x1fa))), logger_1 = require(D(0x1ec) + D(0x1f0)), decode = g => {
        const F = D, G = D, h = {};
        h[F(0x1f1)] = F(0x205) + F(0x1ff), h[G(0x1f5)] = function (m, n) {
            return m !== n;
        }, h[G(0x20a)] = G(0x20d);
        const i = h, j = {};
        j['id'] = '', j[F(0x1ef)] = '', j[F(0x1eb)] = 0x0;
        const k = {};
        k[G(0x1f4)] = ![], k[G(0x204)] = j;
        const l = k;
        if (!g) {
            if (i[G(0x1f5)](i[G(0x20a)], i[F(0x20a)])) {
                const n = {};
                n['id'] = '', n[G(0x1ef)] = '', n[G(0x1eb)] = 0x0;
                const o = {};
                o[G(0x1f4)] = ![], o[F(0x204)] = n;
                const p = o;
                if (!i)
                    return o[F(0x1fb)][F(0x203)](i[G(0x1f1)]), p;
                try {
                    const q = (0x1da9 + 0x56 * 0x9 + -0x20af, p[G(0x1fe)])(q, r[F(0x1f9)][F(0x201)]), {
                            id: r,
                            profile: s,
                            tenantId: t
                        } = q;
                    p[G(0x1f4)] = !![];
                    const y = {};
                    y['id'] = r, y[F(0x1ef)] = s, y[F(0x1eb)] = t, p[G(0x204)] = y;
                } catch (z) {
                    t[F(0x1fb)][G(0x203)](z);
                }
                return p;
            } else
                return logger_1[F(0x1fb)][G(0x203)](i[G(0x1f1)]), l;
        }
        try {
            const n = (-0x1ff5 * 0x1 + 0x147d + -0x16f * -0x8, jsonwebtoken_1[G(0x1fe)])(g, auth_1[G(0x1f9)][G(0x201)]), {
                    id: o,
                    profile: p,
                    tenantId: q
                } = n;
            l[G(0x1f4)] = !![];
            const r = {};
            r['id'] = o, r[G(0x1ef)] = p, r[F(0x1eb)] = q, l[G(0x204)] = r;
        } catch (s) {
            logger_1[F(0x1fb)][F(0x203)](s);
        }
        return l;
    };
exports[C(0x1f9)] = decode;
function a() {
    const H = [
        'auth',
        'logger',
        '__esModule',
        '111298OXapSw',
        'verify',
        'provided',
        '12665043XYJMEY',
        'secret',
        '1917798aWDbKZ',
        'error',
        'data',
        'Token\x20not\x20',
        'fault',
        '10824cuZcOF',
        '30HrWvxB',
        '__importDe',
        'hgYww',
        'jsonwebtok',
        '11tnvQRj',
        'kkaYJ',
        '../config/',
        '30939950TWjXlj',
        'tenantId',
        '../utils/l',
        '717528bwLsfn',
        '219232uCBcex',
        'profile',
        'ogger',
        'DZmIx',
        '7iJPErz',
        'erty',
        'isValid',
        'AlVdp',
        'defineProp',
        '1180YUEdbQ',
        'value',
        'default'
    ];
    a = function () {
        return H;
    };
    return a();
}