'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1697 * -0x1 + 0x281 * 0x1 + 0x15e5);
        let h = e[f];
        return h;
    }, b(c, d);
}
const J = b, K = b;
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(H(0x1d6)) / (-0x1988 + 0xb * 0x317 + -0x43a * 0x2) + parseInt(I(0x1d4)) / (0x44 * -0x2 + 0x1577 + -0x14ed) + -parseInt(I(0x1fb)) / (-0x12e1 + -0x9 + 0x5f * 0x33) + -parseInt(I(0x1e5)) / (-0x1 * -0x25c + 0x2611 * -0x1 + 0x23b9) + parseInt(H(0x1f1)) / (0x1d16 + -0x112e + -0x1 * 0xbe3) + parseInt(H(0x1e8)) / (-0xcb4 + 0x27a + -0x40 * -0x29) * (-parseInt(I(0x1e6)) / (0xc6 * 0x12 + -0x1a4a + 0xc65)) + parseInt(H(0x1f4)) / (-0x223c + 0x129c + 0xfa8);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x49ef + 0x6ce33 + -0x4f * 0x617));
var __importDefault = this && this[J(0x1e2) + K(0x1f6)] || function (c) {
    const L = J;
    return c && c[L(0x1f7)] ? c : { 'default': c };
};
const x = {};
x[K(0x1f5)] = !![], Object[K(0x1e1) + K(0x1e4)](exports, K(0x1f7), x);
function a() {
    const O = [
        'secret',
        '../config/',
        'defineProp',
        '__importDe',
        '../utils/l',
        'erty',
        '2061076OrwbaY',
        '3095687AfAHAm',
        'auth',
        '6lkofWw',
        'VyJVX',
        'BBJJE',
        'lIzqb',
        'hnWPG',
        'Wkmao',
        'vbgrk',
        'VpQkT',
        'RRkmT',
        '341550uNaTYQ',
        'provided',
        'default',
        '11165808oVisVY',
        'value',
        'fault',
        '__esModule',
        'verify',
        'qRdsp',
        'data',
        '1704078Bodglm',
        'ZKYxO',
        'MlLQv',
        'profile',
        'buYgS',
        'DsDmI',
        '1037314DuugXp',
        'sIngb',
        '153242tkXNai',
        'jsonwebtok',
        'ogger',
        'isValid',
        'logger',
        'FRmAT',
        'error',
        'tenantId',
        'Token\x20not\x20'
    ];
    a = function () {
        return O;
    };
    return a();
}
const jsonwebtoken_1 = require(J(0x1d7) + 'en'), auth_1 = __importDefault(require(J(0x1e0) + J(0x1e7))), logger_1 = require(J(0x1e3) + K(0x1d8)), decode = g => {
        const M = K, N = J, h = {};
        h[M(0x1cf)] = N(0x1de) + N(0x1f2), h[N(0x1ec)] = function (m, n) {
            return m !== n;
        }, h[M(0x1f0)] = M(0x1d3), h[N(0x1e9)] = N(0x1ee), h[N(0x1d2)] = function (m, n) {
            return m === n;
        }, h[M(0x1ef)] = M(0x1f9), h[N(0x1d5)] = M(0x1d0), h[M(0x1eb)] = N(0x1ed), h[M(0x1ea)] = M(0x1db);
        const i = h, j = {};
        j['id'] = '', j[N(0x1d1)] = '', j[M(0x1dd)] = 0x0;
        const k = {};
        k[M(0x1d9)] = ![], k[M(0x1fa)] = j;
        const l = k;
        if (!g) {
            if (i[M(0x1ec)](i[M(0x1f0)], i[N(0x1e9)]))
                return logger_1[M(0x1da)][M(0x1dc)](i[N(0x1cf)]), l;
            else {
                const n = {};
                return n[M(0x1f3)] = j, g && h[M(0x1f7)] ? i : n;
            }
        }
        try {
            if (i[M(0x1d2)](i[N(0x1ef)], i[N(0x1d5)])) {
                const o = (-0x9d * -0x1d + -0xb * -0x28f + -0x2dee, h[M(0x1f8)])(i, j[M(0x1f3)][M(0x1df)]), {
                        id: p,
                        profile: q,
                        tenantId: r
                    } = o;
                k[N(0x1d9)] = !![];
                const s = {};
                s['id'] = p, s[N(0x1d1)] = q, s[M(0x1dd)] = r, l[M(0x1fa)] = s;
            } else {
                const o = (-0x30e + 0x4b1 * 0x2 + -0x654, jsonwebtoken_1[M(0x1f8)])(g, auth_1[N(0x1f3)][M(0x1df)]), {
                        id: p,
                        profile: q,
                        tenantId: r
                    } = o;
                l[M(0x1d9)] = !![];
                const s = {};
                s['id'] = p, s[N(0x1d1)] = q, s[N(0x1dd)] = r, l[M(0x1fa)] = s;
            }
        } catch (t) {
            if (i[N(0x1ec)](i[M(0x1eb)], i[M(0x1ea)]))
                logger_1[M(0x1da)][M(0x1dc)](t);
            else {
                const y = {};
                y['id'] = '', y[M(0x1d1)] = '', y[M(0x1dd)] = 0x0;
                const z = {};
                z[N(0x1d9)] = ![], z[N(0x1fa)] = y;
                const A = z;
                if (!i)
                    return o[M(0x1da)][N(0x1dc)](i[M(0x1cf)]), A;
                try {
                    const B = (0x7c5 + 0x448 + -0x269 * 0x5, p[N(0x1f8)])(q, r[N(0x1f3)][M(0x1df)]), {
                            id: C,
                            profile: D,
                            tenantId: E
                        } = B;
                    A[M(0x1d9)] = !![];
                    const F = {};
                    F['id'] = C, F[N(0x1d1)] = D, F[N(0x1dd)] = E, A[M(0x1fa)] = F;
                } catch (G) {
                    t[N(0x1da)][N(0x1dc)](G);
                }
                return A;
            }
        }
        return l;
    };
exports[J(0x1f3)] = decode;