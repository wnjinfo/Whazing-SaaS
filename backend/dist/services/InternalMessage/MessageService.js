'use strict';
const I = b, J = b;
(function (c, d) {
    const G = b, H = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(G(0xba)) / (-0x2386 + -0x13ec + -0xb17 * -0x5) + -parseInt(H(0xdb)) / (0x7a9 + -0x1819 + 0x1072) * (-parseInt(H(0xb8)) / (0xc3e + -0x22fa + 0x16bf)) + -parseInt(G(0xcd)) / (-0x815 + -0x1 * 0x365 + 0xb7e) * (-parseInt(G(0xa7)) / (-0x305 * 0x2 + 0x10 * 0x158 + 0x43 * -0x3b)) + -parseInt(G(0xb7)) / (0x26 * 0xa3 + 0x26b4 + 0x8 * -0x7dc) * (-parseInt(H(0xae)) / (-0x43 * 0x88 + 0xaf4 * 0x2 + 0xdb7 * 0x1)) + parseInt(G(0xa2)) / (0x1544 * -0x1 + -0x1 * -0x1ea9 + -0x33 * 0x2f) * (-parseInt(G(0xbe)) / (-0x5 * 0x3bb + -0x1 * 0x671 + -0x397 * -0x7)) + parseInt(H(0xd6)) / (0x13cd + -0x56a * -0x1 + -0x192d) + parseInt(H(0xc2)) / (-0x55f + -0x1203 * 0x1 + -0x176d * -0x1) * (-parseInt(H(0xdc)) / (-0x2041 + -0x2500 + 0x71 * 0x9d));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3101b + 0x9831a * 0x1 + -0xbff9));
var __importDefault = this && this[I(0xa1) + J(0xd1)] || function (c) {
    const K = J;
    return c && c[K(0xc3)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x133c + -0xc28 * 0x1 + 0x2001);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
function a() {
    const R = [
        'name',
        '210942hLyoIg',
        'include',
        'dsbhk',
        'ada.',
        '45mthLEc',
        'pShZa',
        'findByPk',
        'findAll',
        '4531285UwNxPT',
        '__esModule',
        'receiver',
        'ZbqVz',
        'where',
        'gem',
        'nysTl',
        'dhAss',
        'OFNgJ',
        'update',
        'limit',
        '1604VfpAdV',
        'ls/Interna',
        'attributes',
        'rYOVu',
        'fault',
        'false',
        'lMessage',
        'isUnread',
        'model',
        '4875360MXRrCH',
        'PZgGU',
        'ls/User',
        'DsMod',
        'default',
        '2PiBFzf',
        '36NLfoNI',
        'ão\x20encontr',
        'criarMensa',
        'sender',
        'groupId',
        'erty',
        'timestamp',
        'BMObJ',
        'agens',
        '__importDe',
        '599784OufiMA',
        'SpucP',
        'defineProp',
        'LJdFt',
        'sequelize',
        '6550PBBknm',
        'QRZwF',
        'listarMens',
        '../../mode',
        'BSQVh',
        'receiverId',
        'order',
        '14707DZMElO',
        'marcarMens',
        'agemNaoLid',
        'create',
        'Mensagem\x20n',
        'senderId',
        'mIwAx',
        'value',
        'iEzRP',
        '906osfMjn',
        '1329423toARgG'
    ];
    a = function () {
        return R;
    };
    return a();
}
k[J(0xb5)] = !![], Object[J(0xa4) + J(0x9d)](exports, I(0xc3), k);
const sequelize_1 = require(J(0xa6)), InternalMessage_1 = __importDefault(require(J(0xaa) + J(0xce) + I(0xd3))), User_1 = __importDefault(require(J(0xaa) + J(0xd8)));
class MessageService {
    static async [J(0xa9) + J(0xa0)](o, p, q) {
        const L = I, M = I, r = {};
        r[L(0xc5)] = L(0xb2) + L(0xdd) + L(0xbd), r[M(0xbc)] = function (t, u) {
            return t == u;
        }, r[M(0xd0)] = M(0xd2), r[L(0xa5)] = M(0xdf), r[M(0xca)] = L(0xb9), r[L(0xbf)] = L(0xc4), r[M(0xc9)] = L(0x9e), r[M(0xa3)] = function (t, u) {
            return t !== u;
        }, r[M(0x9f)] = M(0xb4), r[M(0xa8)] = M(0xc8);
        const s = r;
        try {
            let t;
            if (s[M(0xbc)](q, s[M(0xd0)])) {
                const u = {};
                u[L(0xb3)] = o, u[M(0xac)] = p;
                const v = {};
                v[M(0xac)] = o, v[L(0xb3)] = p;
                const w = {
                        [sequelize_1['Op']['or']]: [
                            u,
                            v
                        ]
                    }, x = {};
                x[L(0xd5)] = User_1[L(0xda)], x['as'] = s[L(0xa5)], x[L(0xcf)] = [
                    'id',
                    s[M(0xca)]
                ];
                const y = {};
                y[L(0xd5)] = User_1[L(0xda)], y['as'] = s[M(0xbf)], y[L(0xcf)] = [
                    'id',
                    s[L(0xca)]
                ];
                const z = {};
                z[L(0xc6)] = w, z[M(0xbb)] = [
                    x,
                    y
                ], z[M(0xad)] = [s[M(0xc9)]], z[L(0xcc)] = 0x1f4, t = await InternalMessage_1[M(0xda)][M(0xc1)](z);
            } else {
                const A = {};
                A[L(0xe0)] = p;
                const B = {};
                B[L(0xd5)] = User_1[M(0xda)], B['as'] = s[M(0xa5)], B[L(0xcf)] = [
                    'id',
                    s[L(0xca)]
                ];
                const C = {};
                C[L(0xd5)] = User_1[L(0xda)], C['as'] = s[L(0xbf)], C[L(0xcf)] = [
                    'id',
                    s[M(0xca)]
                ];
                const D = {};
                D[M(0xc6)] = A, D[M(0xbb)] = [
                    B,
                    C
                ], D[M(0xad)] = [s[M(0xc9)]], D[M(0xcc)] = 0x1f4, t = await InternalMessage_1[L(0xda)][L(0xc1)](D);
            }
            return t;
        } catch (E) {
            if (s[M(0xa3)](s[L(0x9f)], s[L(0xa8)]))
                throw E;
            else
                throw new d(s[M(0xc5)]);
        }
    }
    static async [J(0xde) + I(0xc7)](c) {
        const N = I, O = I;
        try {
            return await InternalMessage_1[N(0xda)][O(0xb1)](c);
        } catch (d) {
            throw d;
        }
    }
    static async [J(0xaf) + J(0xb0) + 'a'](e) {
        const P = I, Q = I, f = {};
        f[P(0xd7)] = P(0xb2) + P(0xdd) + P(0xbd), f[P(0xb6)] = function (h, i) {
            return h === i;
        }, f[P(0xd9)] = P(0xab);
        const g = f;
        try {
            const h = await InternalMessage_1[Q(0xda)][P(0xc0)](e);
            if (!h)
                throw new Error(g[P(0xd7)]);
            const i = {};
            i[P(0xd4)] = !![], await h[Q(0xcb)](i);
        } catch (j) {
            if (g[Q(0xb6)](g[P(0xd9)], g[P(0xd9)]))
                throw j;
            else
                throw d;
        }
    }
}
exports[J(0xda)] = MessageService;