'use strict';
const L = b, M = b;
function a() {
    const U = [
        '2630151adfCvV',
        'ão\x20encontr',
        'koeQh',
        '126mqhIVR',
        'tyWuU',
        'CuKOe',
        'lhpyu',
        'senderId',
        'create',
        'agens',
        'value',
        'model',
        'rSdGx',
        '2029095SLmTGK',
        '3388744twjhFN',
        'update',
        'findAll',
        'aFiSp',
        'mjIIc',
        '__importDe',
        'include',
        'attributes',
        'criarMensa',
        'sender',
        'olroA',
        'UhHLW',
        'EpTQq',
        'RTVqc',
        'agemNaoLid',
        'timestamp',
        'bjJKt',
        'TBUrA',
        '54941MxyeXB',
        'ada.',
        '3897vOANxG',
        'zpofy',
        'YnxeU',
        'uAyYe',
        'qBqiS',
        '311269COAajp',
        'groupId',
        '12JNyepo',
        'mVfRI',
        'findByPk',
        'receiverId',
        'hzDBE',
        'limit',
        'marcarMens',
        'false',
        '4BvdVPR',
        'ToaNs',
        'isUnread',
        'EcqOK',
        '1781186yaQCiV',
        '19410EBuHGD',
        'ls/User',
        'sequelize',
        'uLncS',
        'ls/Interna',
        'fXxbJ',
        'name',
        'order',
        '../../mode',
        'Mensagem\x20n',
        'ZhqnA',
        'default',
        'pNLVA',
        '__esModule',
        'listarMens',
        'erty',
        'gem',
        'receiver',
        'fault',
        'defineProp',
        'where',
        'lMessage'
    ];
    a = function () {
        return U;
    };
    return a();
}
(function (c, d) {
    const J = b, K = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(J(0xfd)) / (-0x916 * 0x4 + -0xc * -0x28c + 0x5c9) * (parseInt(J(0x106)) / (0xbea + -0x18ed + 0xd05)) + parseInt(K(0xdd)) / (-0xe8 * 0x8 + -0x12a + 0x86d * 0x1) * (parseInt(K(0xc2)) / (0x708 + 0x981 * -0x1 + 0x27d)) + -parseInt(J(0xea)) / (-0x1 * -0x24df + 0xc97 + 0x3 * -0x107b) + parseInt(J(0xe0)) / (0x1 * 0x16a9 + -0x1d58 + 0x6b5) * (parseInt(J(0x104)) / (0x1e06 + -0x43 * 0x11 + -0x198c)) + parseInt(J(0xeb)) / (0x3 * -0x22b + 0x2e3 * 0x1 + -0x1 * -0x3a6) + -parseInt(J(0xff)) / (0x100e + -0x7 * 0xa3 + 0x10 * -0xb9) * (parseInt(J(0xc7)) / (-0x1 * -0x1fb7 + -0x14eb + -0xac2)) + -parseInt(K(0xc6)) / (0x12e + 0xb1d * 0x2 + 0x175d * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x260b5 + -0xcd5cf + -0x1 * -0x16c915));
var __importDefault = this && this[L(0xf0) + L(0xd9)] || function (c) {
    const N = M;
    return c && c[N(0xd4)] ? c : { 'default': c };
};
const k = {};
k[L(0xe7)] = !![], Object[M(0xda) + L(0xd6)](exports, M(0xd4), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1dad + -0x157c + 0x33e5 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(M(0xc9)), InternalMessage_1 = __importDefault(require(M(0xcf) + L(0xcb) + M(0xdc))), User_1 = __importDefault(require(L(0xcf) + M(0xc8)));
class MessageService {
    static async [M(0xd5) + L(0xe6)](o, p, q) {
        const O = M, P = L, r = {};
        r[O(0xee)] = P(0xd0) + P(0xde) + O(0xfe), r[O(0xfb)] = function (t, u) {
            return t === u;
        }, r[O(0xe2)] = O(0xf7), r[P(0xc3)] = function (t, u) {
            return t == u;
        }, r[P(0x102)] = P(0xc1), r[P(0xbe)] = O(0x100), r[O(0x101)] = P(0xf4), r[O(0xfc)] = O(0xcd), r[P(0xf5)] = P(0xd8), r[O(0xf8)] = O(0xfa), r[O(0x107)] = function (t, u) {
            return t !== u;
        }, r[O(0xdf)] = O(0xd3), r[O(0xe9)] = P(0xe3), r[P(0xd1)] = O(0xcc);
        const s = r;
        try {
            if (s[P(0xfb)](s[P(0xe2)], s[O(0xe2)])) {
                let t;
                if (s[O(0xc3)](q, s[P(0x102)])) {
                    if (s[P(0xfb)](s[P(0xbe)], s[O(0xbe)])) {
                        const u = {};
                        u[O(0xe4)] = o, u[O(0xbd)] = p;
                        const v = {};
                        v[P(0xbd)] = o, v[O(0xe4)] = p;
                        const w = {
                                [sequelize_1['Op']['or']]: [
                                    u,
                                    v
                                ]
                            }, x = {};
                        x[O(0xe8)] = User_1[O(0xd2)], x['as'] = s[P(0x101)], x[O(0xf2)] = [
                            'id',
                            s[O(0xfc)]
                        ];
                        const y = {};
                        y[P(0xe8)] = User_1[O(0xd2)], y['as'] = s[P(0xf5)], y[O(0xf2)] = [
                            'id',
                            s[O(0xfc)]
                        ];
                        const z = {};
                        z[P(0xdb)] = w, z[O(0xf1)] = [
                            x,
                            y
                        ], z[P(0xce)] = [s[P(0xf8)]], z[O(0xbf)] = 0x1f4, t = await InternalMessage_1[P(0xd2)][P(0xed)](z);
                    } else
                        throw new d(s[P(0xee)]);
                } else {
                    if (s[P(0x107)](s[O(0xdf)], s[P(0xe9)])) {
                        const B = {};
                        B[O(0x105)] = p;
                        const C = {};
                        C[O(0xe8)] = User_1[O(0xd2)], C['as'] = s[O(0x101)], C[P(0xf2)] = [
                            'id',
                            s[P(0xfc)]
                        ];
                        const D = {};
                        D[O(0xe8)] = User_1[P(0xd2)], D['as'] = s[O(0xf5)], D[O(0xf2)] = [
                            'id',
                            s[O(0xfc)]
                        ];
                        const E = {};
                        E[P(0xdb)] = B, E[O(0xf1)] = [
                            C,
                            D
                        ], E[O(0xce)] = [s[P(0xf8)]], E[O(0xbf)] = 0x1f4, t = await InternalMessage_1[P(0xd2)][P(0xed)](E);
                    } else {
                        const G = {};
                        return G[O(0xd2)] = j, g && h[P(0xd4)] ? i : G;
                    }
                }
                return t;
            } else
                throw d;
        } catch (H) {
            if (s[O(0x107)](s[P(0xd1)], s[P(0xd1)]))
                throw d;
            else
                throw H;
        }
    }
    static async [M(0xf3) + M(0xd7)](d) {
        const Q = M, R = L, e = {};
        e[Q(0xca)] = function (g, h) {
            return g === h;
        }, e[Q(0xe1)] = Q(0x103), e[R(0xf6)] = R(0xc5);
        const f = e;
        try {
            if (f[Q(0xca)](f[Q(0xe1)], f[Q(0xf6)]))
                throw d;
            else
                return await InternalMessage_1[Q(0xd2)][Q(0xe5)](d);
        } catch (h) {
            throw h;
        }
    }
    static async [L(0xc0) + M(0xf9) + 'a'](e) {
        const S = M, T = M, f = {};
        f[S(0xef)] = S(0xd0) + T(0xde) + S(0xfe);
        const g = f;
        try {
            const h = await InternalMessage_1[T(0xd2)][T(0xbc)](e);
            if (!h)
                throw new Error(g[S(0xef)]);
            const i = {};
            i[T(0xc4)] = !![], await h[S(0xec)](i);
        } catch (j) {
            throw j;
        }
    }
}
exports[M(0xd2)] = MessageService;