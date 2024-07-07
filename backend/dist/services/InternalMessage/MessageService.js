'use strict';
const J = b, K = b;
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(H(0x148)) / (0x857 + -0x2673 + 0x1e1d * 0x1) + parseInt(H(0x146)) / (-0x1 * 0xf62 + -0x155a + 0x24be) + -parseInt(H(0x126)) / (-0x1e93 * -0x1 + -0x9f5 * 0x2 + -0x3a * 0x2f) + parseInt(I(0x125)) / (0x42f + 0x1479 * -0x1 + 0x104e) * (parseInt(H(0x10e)) / (0x1445 * 0x1 + -0x831 + -0xc0f)) + -parseInt(I(0x141)) / (0xb * 0x16a + -0x1 * -0x1918 + -0x514 * 0x8) + -parseInt(I(0x12a)) / (-0x5 * -0x526 + 0x19fe + -0x33b5) * (parseInt(I(0x150)) / (0xf6 * -0x11 + -0x1 * -0x1c49 + -0xbeb)) + parseInt(H(0x153)) / (0x3 * -0x48d + -0x1e7 * -0x14 + -0x185c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x6f * -0x321d + -0x1 * 0xa2a7d + -0x1fba9 * -0x1));
function a() {
    const S = [
        'order',
        'MgmWb',
        'include',
        'iAlWr',
        'receiver',
        'value',
        'listarMens',
        'ada.',
        'name',
        'iQXaC',
        'isUnread',
        'defineProp',
        'findByPk',
        'attributes',
        '30844EKMill',
        '2902071SDVxAo',
        'tlFZN',
        'Vdjgj',
        'QDjIg',
        '308DDVvyd',
        'ão\x20encontr',
        'Mensagem\x20n',
        'tDgHW',
        'rqurc',
        'sequelize',
        'model',
        'aPDYP',
        'false',
        'lMessage',
        'nzopK',
        'senderId',
        'vPRjI',
        'limit',
        'default',
        'fault',
        'update',
        'hFbWT',
        'gWegs',
        'erty',
        'CHsVf',
        '__importDe',
        'tUCOy',
        '4757190qonvTY',
        'agens',
        'YGQIA',
        'agemNaoLid',
        'criarMensa',
        '857806GFVXiT',
        'where',
        '1332251MIJKDJ',
        'findAll',
        'yvwxh',
        'dsSkF',
        'VfANj',
        'LhPTn',
        '__esModule',
        'oImlA',
        '262928BZwNSL',
        'qhmxm',
        'timestamp',
        '42825384lDzOUi',
        'WWgFP',
        'yuMXr',
        'sender',
        'gem',
        'receiverId',
        'groupId',
        '155NQgNHe',
        'create',
        'marcarMens',
        '../../mode',
        'ls/User',
        'ls/Interna',
        'LLJbL',
        'JmqPo',
        'FNTbg'
    ];
    a = function () {
        return S;
    };
    return a();
}
var __importDefault = this && this[J(0x13f) + K(0x139)] || function (c) {
    const L = K;
    return c && c[L(0x14e)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x25f7 + 0x862 + 0x1e9e);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[K(0x11c)] = !![], Object[J(0x122) + K(0x13d)](exports, K(0x14e), k);
const sequelize_1 = require(K(0x12f)), InternalMessage_1 = __importDefault(require(K(0x111) + K(0x113) + J(0x133))), User_1 = __importDefault(require(K(0x111) + J(0x112)));
class MessageService {
    static async [K(0x11d) + K(0x142)](o, p, q) {
        const M = K, N = K, r = {};
        r[M(0x14a)] = function (t, u) {
            return t == u;
        }, r[M(0x134)] = N(0x132), r[N(0x14f)] = M(0x10a), r[M(0x114)] = N(0x11f), r[M(0x116)] = N(0x11b), r[N(0x140)] = N(0x152), r[N(0x131)] = function (t, u) {
            return t === u;
        }, r[M(0x13e)] = N(0x128), r[N(0x13c)] = function (t, u) {
            return t === u;
        }, r[M(0x129)] = N(0x136);
        const s = r;
        try {
            let t;
            if (s[N(0x14a)](q, s[N(0x134)])) {
                const u = {};
                u[M(0x135)] = o, u[M(0x10c)] = p;
                const v = {};
                v[M(0x10c)] = o, v[M(0x135)] = p;
                const w = {
                        [sequelize_1['Op']['or']]: [
                            u,
                            v
                        ]
                    }, x = {};
                x[M(0x130)] = User_1[N(0x138)], x['as'] = s[M(0x14f)], x[M(0x124)] = [
                    'id',
                    s[N(0x114)]
                ];
                const y = {};
                y[N(0x130)] = User_1[M(0x138)], y['as'] = s[M(0x116)], y[N(0x124)] = [
                    'id',
                    s[M(0x114)]
                ];
                const z = {};
                z[N(0x147)] = w, z[N(0x119)] = [
                    x,
                    y
                ], z[N(0x117)] = [s[N(0x140)]], z[N(0x137)] = 0x1f4, t = await InternalMessage_1[N(0x138)][N(0x149)](z);
            } else {
                if (s[M(0x131)](s[M(0x13e)], s[N(0x13e)])) {
                    const A = {};
                    A[M(0x10d)] = p;
                    const B = {};
                    B[M(0x130)] = User_1[M(0x138)], B['as'] = s[M(0x14f)], B[M(0x124)] = [
                        'id',
                        s[N(0x114)]
                    ];
                    const C = {};
                    C[M(0x130)] = User_1[N(0x138)], C['as'] = s[N(0x116)], C[N(0x124)] = [
                        'id',
                        s[N(0x114)]
                    ];
                    const D = {};
                    D[N(0x147)] = A, D[M(0x119)] = [
                        B,
                        C
                    ], D[N(0x117)] = [s[N(0x140)]], D[N(0x137)] = 0x1f4, t = await InternalMessage_1[M(0x138)][M(0x149)](D);
                } else
                    throw d;
            }
            return t;
        } catch (F) {
            if (s[M(0x13c)](s[M(0x129)], s[M(0x129)]))
                throw F;
            else
                throw d;
        }
    }
    static async [K(0x145) + J(0x10b)](d) {
        const O = K, P = K, e = {};
        e[O(0x14c)] = O(0x12c) + O(0x12b) + P(0x11e), e[P(0x11a)] = function (g, h) {
            return g === h;
        }, e[O(0x154)] = P(0x127), e[O(0x12d)] = P(0x120), e[P(0x151)] = function (g, h) {
            return g !== h;
        }, e[P(0x115)] = P(0x118), e[O(0x109)] = P(0x13b);
        const f = e;
        try {
            if (f[O(0x11a)](f[P(0x154)], f[O(0x12d)]))
                throw new d(f[P(0x14c)]);
            else
                return await InternalMessage_1[P(0x138)][P(0x10f)](d);
        } catch (h) {
            if (f[O(0x151)](f[P(0x115)], f[P(0x109)]))
                throw h;
            else
                throw d;
        }
    }
    static async [K(0x110) + J(0x144) + 'a'](e) {
        const Q = J, R = K, f = {};
        f[Q(0x12e)] = function (h, i) {
            return h === i;
        }, f[R(0x143)] = R(0x14d), f[R(0x14b)] = Q(0x12c) + R(0x12b) + Q(0x11e);
        const g = f;
        try {
            if (g[Q(0x12e)](g[R(0x143)], g[Q(0x143)])) {
                const h = await InternalMessage_1[Q(0x138)][Q(0x123)](e);
                if (!h)
                    throw new Error(g[R(0x14b)]);
                const i = {};
                i[Q(0x121)] = !![], await h[R(0x13a)](i);
            } else {
                const l = {};
                return l[Q(0x138)] = j, g && h[Q(0x14e)] ? i : l;
            }
        } catch (l) {
            throw l;
        }
    }
}
exports[K(0x138)] = MessageService;