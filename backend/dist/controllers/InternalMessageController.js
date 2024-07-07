'use strict';
const Y = b, Z = b;
(function (c, d) {
    const W = b, X = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(W(0xe5)) / (-0x17e * -0x2 + 0x16f9 + -0x19f4) + parseInt(X(0xf0)) / (-0x136c * 0x1 + 0x278 + 0x10f6) * (parseInt(X(0xa9)) / (0x2172 + 0x1636 + -0x37a5)) + parseInt(X(0xdf)) / (-0x26ad * 0x1 + 0xa8b + 0x1c26) * (-parseInt(X(0xd4)) / (-0x36 * 0x43 + 0x14a4 + -0x67d * 0x1)) + -parseInt(W(0x81)) / (0xb5f * -0x1 + 0x232d + -0x2f9 * 0x8) + -parseInt(W(0xfd)) / (-0x25ec + 0x1e * -0xa7 + -0x1 * -0x3985) * (parseInt(W(0x6b)) / (-0x7 * -0x112 + -0x140e + 0xc98)) + -parseInt(W(0xc5)) / (0x30 * -0x98 + 0x2 * 0x5d3 + 0x10e3) * (-parseInt(X(0xeb)) / (-0x77 * -0x52 + 0xb5 + -0x26c9 * 0x1)) + -parseInt(X(0xf4)) / (-0x53 * 0x5f + -0x1df * -0x5 + 0x157d) * (-parseInt(W(0xaa)) / (-0x1129 * -0x1 + 0x31 * -0x13 + -0xd7a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3 * -0x572b6 + -0x76d8 + 0x1ecd9a * 0x1));
var __importDefault = this && this[Y(0x92) + Y(0x97)] || function (c) {
    const a0 = Y;
    return c && c[a0(0xb2)] ? c : { 'default': c };
};
const o = {};
o[Z(0x108)] = !![], Object[Y(0xbe) + Y(0xce)](exports, Z(0xb2), o), exports[Z(0xcf) + Z(0x86) + 'ge'] = exports[Z(0xd8) + Z(0xdb) + 'a'] = exports[Z(0x90) + Y(0x64)] = exports[Z(0xa6) + Z(0x9a)] = void (-0xbb3 * 0x3 + 0xa8b + 0x1c1 * 0xe);
const socket_1 = require(Y(0xb7) + Z(0x116)), InternalMessage_1 = __importDefault(require(Z(0x103) + Z(0x7b) + Z(0x7f))), User_1 = __importDefault(require(Z(0x103) + Y(0xb4))), ListCountUnreadMessage_1 = __importDefault(require(Y(0x106) + Y(0x65) + Z(0xde) + Z(0xbd) + Z(0xa0))), MessageService_1 = __importDefault(require(Z(0x106) + Y(0x65) + Y(0x105) + Y(0xd3) + 'ce')), ReadMessageService_1 = __importDefault(require(Z(0x106) + Z(0x65) + Z(0xa4) + Y(0x66) + Y(0xff))), logger_1 = require(Z(0xfb) + Z(0xf2)), listarMensagens = async (f, g) => {
        const a1 = Y, a2 = Y, h = {};
        h[a1(0x91)] = a2(0x8a) + a2(0x72) + a1(0x8f) + a2(0xe1), h[a1(0x10b)] = a1(0x8a) + a1(0x9b) + a1(0x82) + a1(0x10d) + a2(0x9d), h[a1(0x114)] = function (j, k) {
            return j !== k;
        }, h[a2(0xb6)] = a2(0x6c), h[a2(0xcb)] = a1(0xa8), h[a2(0xe3)] = function (j, k) {
            return j !== k;
        }, h[a2(0xe4)] = a1(0xd9);
        const i = h;
        try {
            if (i[a2(0x114)](i[a1(0xb6)], i[a1(0xcb)])) {
                const {id: j} = f[a2(0xa2)], {userId: k} = f[a1(0x6d)], {isGroup: l} = f[a1(0xca)], m = await MessageService_1[a1(0xcc)][a1(0xa6) + a2(0x9a)](j, k, l), n = {};
                return n[a1(0x7d)] = m, g[a2(0xfe)](0x1162 + -0x242d + 0x1393)[a2(0xf7)](n);
            } else {
                f[a2(0xee)](g);
                const q = {};
                return q[a2(0xee)] = i[a1(0x91)], h[a2(0xfe)](-0xc22 + 0x9d * 0x12 + -0x14 * -0x27)[a2(0xf7)](q);
            }
        } catch (q) {
            if (i[a1(0xe3)](i[a1(0xe4)], i[a1(0xe4)])) {
                f[a2(0xee)](g);
                const s = {};
                return s[a2(0xee)] = i[a1(0x10b)], h[a1(0xfe)](-0x35a * -0x4 + -0x62b * -0x5 + -0x1b * 0x191)[a1(0xf7)](s);
            } else {
                console[a1(0xee)](q);
                const s = {};
                return s[a1(0xee)] = i[a2(0x91)], g[a2(0xfe)](0x1 * 0xe67 + 0x452 + 0x9f * -0x1b)[a2(0xf7)](s);
            }
        }
    };
exports[Y(0xa6) + Z(0x9a)] = listarMensagens;
const criarMensagem = async (n, p) => {
    const a3 = Z, a4 = Y, q = {};
    q[a3(0x77)] = a3(0x7c) + a3(0xa5) + a3(0xae), q[a4(0x75)] = a3(0x8a) + a3(0x9b) + a3(0xe8) + a4(0xfa), q[a4(0x115)] = function (s, t) {
        return s === t;
    }, q[a3(0xe2)] = a3(0x74), q[a4(0xf1)] = a4(0x9c), q[a3(0xe9)] = function (s, t) {
        return s !== t;
    }, q[a4(0x94)] = a3(0x7a), q[a3(0x68)] = a4(0x8a) + a4(0x76) + a3(0x101) + a4(0x8c) + a4(0xbc), q[a4(0xf8)] = function (s, t) {
        return s === t;
    }, q[a4(0xa1)] = a3(0xac), q[a3(0xdc)] = a4(0xaf), q[a3(0xc7)] = a4(0x85), q[a3(0x9e)] = function (s, t) {
        return s === t;
    }, q[a4(0xe0)] = a3(0x104), q[a3(0x83)] = function (s, t) {
        return s > t;
    }, q[a3(0xe7)] = function (s, t) {
        return s === t;
    }, q[a3(0xb8)] = a4(0xc9), q[a3(0xfc)] = a4(0xad), q[a3(0xba)] = function (s, t) {
        return s === t;
    }, q[a3(0x8b)] = a3(0xb1), q[a3(0x95)] = a3(0x102), q[a3(0x73)] = a3(0xb0), q[a3(0x112)] = a4(0x78), q[a4(0x7e)] = a4(0x8d);
    const r = q;
    try {
        if (r[a3(0xf8)](r[a3(0xa1)], r[a3(0xdc)])) {
            const t = {};
            return t[a4(0xcc)] = j, g && h[a4(0xb2)] ? i : t;
        } else {
            const {
                    text: t,
                    timestamp: u,
                    receiverId: v,
                    isGroup: w
                } = n[a4(0xc4)], {
                    id: x,
                    tenantId: y
                } = n[a4(0xa2)], z = n[a4(0xc8)], A = (-0x26b9 + -0xf02 + 0x35bb, socket_1[a4(0xe6)])(), B = {
                    'text': t,
                    'timestamp': u,
                    'receiverId': v,
                    'senderId': x,
                    'tenantId': y,
                    'groupId': null,
                    'mediaType': r[a4(0xc7)],
                    'mediaUrl': undefined,
                    'createdAt': new Date(),
                    'updatedAt': new Date()
                };
            (r[a4(0x115)](w, !![]) || r[a3(0x9e)](w, r[a4(0xe0)])) && (B[a4(0x80)] = undefined, B[a4(0xd2)] = v);
            let C = {};
            if (z && r[a3(0x83)](z[a3(0xf9)], 0x1788 + 0xd * 0x45 + 0x3 * -0x903)) {
                if (r[a4(0xe7)](r[a4(0xb8)], r[a4(0xfc)])) {
                    if (!G[a3(0xc0)]) {
                        const O = L[a3(0xab)][a4(0xb3)]('/')[0x23f7 + -0x189f + -0xb57][a3(0xb3)](';')[0xfb + -0x23b6 + 0x22bb];
                        M[a3(0xc0)] = new m()[a4(0xbf)]() + '.' + O;
                    }
                } else
                    await Promise[a3(0xea)](z[a3(0x10f)](async O => {
                        const a5 = a3, a6 = a3;
                        try {
                            if (r[a5(0x115)](r[a6(0xe2)], r[a6(0xf1)]))
                                throw new D(r[a6(0x77)]);
                            else {
                                if (!O[a6(0xc0)]) {
                                    const S = O[a5(0xab)][a6(0xb3)]('/')[-0x1d * -0x25 + -0x3 * 0x36d + 0x1 * 0x617][a6(0xb3)](';')[0x97 + -0x268c + -0x7b * -0x4f];
                                    O[a6(0xc0)] = new Date()[a5(0xbf)]() + '.' + S;
                                }
                            }
                        } catch (T) {
                            if (r[a5(0xe9)](r[a6(0x94)], r[a5(0x94)])) {
                                F[a5(0xee)](G);
                                const V = {};
                                return V[a5(0xee)] = r[a6(0x75)], I[a6(0xfe)](-0x1 * -0x20d2 + 0x1760 + -0x363e)[a5(0xf7)](V);
                            } else
                                logger_1[a5(0xd0)][a5(0xee)](T);
                        }
                        const P = {
                                ...B,
                                'text': O[a6(0x111) + 'me'],
                                'mediaUrl': O[a6(0xc0)],
                                'mediaType': O[a5(0xc1)] || O[a6(0xab)][a6(0x99)](-0x3 * -0x84f + 0x5f * -0xd + -0x2 * 0xa0d, O[a6(0xab)][a6(0x71)]('/'))
                            }, Q = await MessageService_1[a5(0xcc)][a6(0x90) + a6(0x64)](P);
                        C = await InternalMessage_1[a6(0xcc)][a6(0x79)](Q['id']);
                        if (!C)
                            throw new Error(r[a6(0x77)]);
                    }));
            } else {
                if (r[a3(0xba)](r[a4(0x8b)], r[a4(0x8b)]))
                    C = await MessageService_1[a3(0xcc)][a3(0x90) + a4(0x64)](B);
                else {
                    F[a4(0xee)](G);
                    const P = {};
                    return P[a3(0xee)] = r[a4(0x68)], I[a3(0xfe)](-0xdfb + 0x24e8 + 0x3b * -0x5b)[a4(0xf7)](P);
                }
            }
            const D = {};
            D['id'] = C['id'];
            const E = {};
            E[a3(0x96)] = User_1[a4(0xcc)], E['as'] = r[a3(0x95)], E[a3(0xa7)] = [
                'id',
                r[a4(0x73)]
            ];
            const F = {};
            F[a3(0x96)] = User_1[a3(0xcc)], F['as'] = r[a3(0x112)], F[a4(0xa7)] = [
                'id',
                r[a4(0x73)]
            ];
            const G = {};
            G[a3(0xf6)] = D, G[a4(0x89)] = [
                E,
                F
            ];
            const H = await InternalMessage_1[a4(0xcc)][a4(0x100)](G), I = {};
            I['id'] = H['id'], I[a3(0x80)] = H[a4(0x80)], I[a3(0xc1)] = H[a4(0xc1)], I[a3(0x107)] = H[a3(0x107)], I[a4(0xef)] = H[a4(0xef)], I[a3(0x6a)] = x, I[a4(0xc3)] = H[a3(0xc3)], I[a3(0x102)] = H[a3(0x102)], I[a4(0xd2)] = H[a3(0xd2)], I[a3(0x78)] = H[a3(0x78)], I[a3(0x93)] = t;
            const J = {};
            J[a3(0xa3)] = r[a3(0x7e)], J[a3(0x10e)] = I, A[a4(0xf3)](y + (a4(0xbb) + a3(0x67) + 'no'), J);
            const K = {};
            K['id'] = H['id'], K[a3(0x80)] = v, K[a3(0x6a)] = x, K[a3(0xc1)] = H[a4(0xc1)], K[a3(0xc3)] = H[a4(0xc3)], K[a4(0x102)] = H[a3(0x102)], K[a4(0xd2)] = H[a4(0xd2)], K[a4(0x78)] = H[a4(0x78)], K[a4(0x93)] = t;
            const L = {};
            L[a4(0xa3)] = r[a4(0x7e)], L[a4(0x10e)] = K, A[a3(0xf3)](y + (a3(0xbb) + a4(0x67) + a4(0xd5) + a3(0xd1)), L);
            const M = {};
            return M[a3(0x110)] = H, p[a4(0xfe)](0x1abd * -0x1 + -0x11b7 + 0x2d3d)[a3(0xf7)](M);
        }
    } catch (P) {
        console[a4(0xee)](P);
        const Q = {};
        return Q[a3(0xee)] = r[a3(0x75)], p[a3(0xfe)](-0x47 * 0x71 + -0xab0 * 0x3 + -0x743 * -0x9)[a4(0xf7)](Q);
    }
};
function a() {
    const ab = [
        'ssage',
        'receiverId',
        '1126452hBsYDT',
        'ontar\x20as\x20m',
        'BuyNn',
        'vRiJU',
        'chat',
        'nreadMessa',
        'KDWjU',
        'NPksR',
        'include',
        'Ocorreu\x20um',
        'NkDIp',
        'nsagens\x20co',
        'update',
        't-interno',
        'istar\x20as\x20m',
        'criarMensa',
        'LvuHv',
        '__importDe',
        'text',
        'RiZNR',
        'kWaor',
        'model',
        'fault',
        'KkeOp',
        'substr',
        'agens',
        '\x20erro\x20ao\x20c',
        'GxJYF',
        'ão\x20lidas.',
        'SbXaA',
        'marcadas\x20c',
        'eadMessage',
        'udeDi',
        'user',
        'action',
        'Message/Re',
        'NG_MESSAGE',
        'listarMens',
        'attributes',
        'LcPLP',
        '474bzsWHz',
        '130332bBqoGo',
        'mimetype',
        'qzEDw',
        'eAxsj',
        '_SYSTEM',
        'aPEoe',
        'name',
        'hHWqX',
        '__esModule',
        'split',
        'User',
        'XEyLl',
        'oMCep',
        '../libs/so',
        'IqjBh',
        'ZBRPm',
        'Hnnhv',
        ':mensagem-',
        'mo\x20lida.',
        'stCountUnr',
        'defineProp',
        'getTime',
        'filename',
        'mediaType',
        ':unread-me',
        'timestamp',
        'body',
        '4761hbifyb',
        'omo\x20lida.',
        'mtbxR',
        'files',
        'CqyWF',
        'query',
        'grYLe',
        'default',
        'dLbuu',
        'erty',
        'listCountU',
        'logger',
        'acao',
        'groupId',
        'ssageServi',
        '10qXBOei',
        'no-notific',
        'bTrXI',
        'kDhWU',
        'marcarMens',
        'gvPwk',
        'Jjuig',
        'agemNaoLid',
        'mIdOo',
        'userId',
        'Message/Li',
        '3145348ctBlXY',
        'KDKzY',
        'ensagens.',
        'BBQwn',
        'pgpGK',
        'cRCku',
        '88715bLZHvs',
        'getIO',
        'SfIuN',
        'riar\x20a\x20men',
        'gaxMB',
        'all',
        '1150icuEly',
        'isGroup',
        'count',
        'error',
        'mediaUrl',
        '13476zQYGyR',
        'ddDks',
        'ogger',
        'emit',
        '2101ZtwGVi',
        'BmfaO',
        'where',
        'json',
        'sAmfT',
        'length',
        'sagem.',
        '../utils/l',
        'YZDKc',
        '7SZyRXh',
        'status',
        'ervice',
        'findOne',
        'arcar\x20a\x20me',
        'sender',
        '../models/',
        'true',
        'Message/Me',
        '../service',
        'mediaName',
        'value',
        'QnTtC',
        'WFDeF',
        'SMHlk',
        'message',
        'ensagens\x20n',
        'data',
        'map',
        'mensagem',
        'originalna',
        'UpFvL',
        'RQXKn',
        'nNlwJ',
        'dVKna',
        'cket',
        'gem',
        's/Internal',
        'adMessageS',
        'chat-inter',
        'qOqPt',
        'Mensagems\x20',
        'senderId',
        '3468856JKpAvP',
        'uBwul',
        'params',
        'nsagem-cha',
        'ZViQs',
        'WeyTI',
        'indexOf',
        '\x20erro\x20ao\x20l',
        'KEOGw',
        'kAsrQ',
        'eYJYp',
        '\x20erro\x20ao\x20m',
        'Dtvhr',
        'receiver',
        'findByPk',
        'TUznj',
        'InternalMe',
        'ERR_CREATI',
        'mensagens',
        'vlNnL'
    ];
    a = function () {
        return ab;
    };
    return a();
}
exports[Z(0x90) + Z(0x64)] = criarMensagem;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x9df + 0x1 * 0xa32 + -0x13ad);
        let h = e[f];
        return h;
    }, b(c, d);
}
const marcarMensagemNaoLida = async (f, g) => {
    const a7 = Y, a8 = Y, h = {
            'XEyLl': function (i, j) {
                return i === j;
            },
            'Jjuig': a7(0xd6),
            'WeyTI': a7(0x8d),
            'KDWjU': function (i, j) {
                return i(j);
            },
            'ZViQs': a7(0x69) + a8(0x9f) + a8(0xc6),
            'dLbuu': function (i, j) {
                return i !== j;
            },
            'BmfaO': a7(0x98),
            'vRiJU': a8(0x8a) + a7(0x76) + a8(0x101) + a7(0x8c) + a8(0xbc)
        };
    try {
        if (h[a7(0xb5)](h[a8(0xda)], h[a7(0xda)])) {
            const {contactId: i} = f[a7(0x6d)], {
                    id: j,
                    tenantId: k
                } = f[a7(0xa2)], {isGroup: l} = f[a8(0xc4)], m = (-0x266c + 0x947 + -0x33d * -0x9, socket_1[a7(0xe6)])(), n = {};
            n[a8(0xdd)] = j, n[a7(0x6a)] = i, n[a7(0xec)] = l, await (-0x4 * 0x584 + 0x1da2 + 0x11 * -0x72, ReadMessageService_1[a8(0xcc)])(n), m[a8(0xf3)](k + (a7(0xc2) + a8(0x6e) + a8(0x8e)), {
                'action': h[a7(0x70)],
                'data': {
                    'receiverId': j,
                    'isGroup': l,
                    'senderId': h[a7(0x87)](Number, i)
                }
            });
            const p = {};
            return p[a8(0x10c)] = h[a8(0x6f)], g[a8(0xfe)](0x1 * 0x1e86 + -0xadc * -0x3 + -0x1f29 * 0x2)[a7(0xf7)](p);
        } else
            e[a7(0xd0)][a7(0xee)](f);
    } catch (r) {
        if (h[a8(0xcd)](h[a8(0xf5)], h[a7(0xf5)]))
            g[a7(0x80)] = h, i[a7(0xd2)] = j;
        else {
            console[a7(0xee)](r);
            const t = {};
            return t[a8(0xee)] = h[a7(0x84)], g[a8(0xfe)](-0x1c63 + -0x3 * -0x871 + 0x1 * 0x504)[a7(0xf7)](t);
        }
    }
};
exports[Z(0xd8) + Z(0xdb) + 'a'] = marcarMensagemNaoLida;
const listCountUnreadMessage = async (f, g) => {
    const a9 = Z, aa = Z, h = {};
    h[a9(0x88)] = function (j, k) {
        return j === k;
    }, h[aa(0x109)] = a9(0xd7), h[aa(0xb9)] = aa(0x10a), h[a9(0x113)] = aa(0x8a) + a9(0x9b) + a9(0x82) + a9(0x10d) + a9(0x9d);
    const i = h;
    try {
        const {id: j} = f[aa(0xa2)], k = await (-0x8c7 * 0x1 + -0x7 * -0x107 + -0x7 * -0x3a, ListCountUnreadMessage_1[aa(0xcc)])(j), l = {};
        return l[a9(0xed)] = k, g[aa(0xfe)](-0x3 * -0x14 + -0x4 * -0x1f7 + -0x750)[aa(0xf7)](l);
    } catch (m) {
        if (i[a9(0x88)](i[aa(0x109)], i[a9(0xb9)])) {
            const p = f[a9(0xab)][a9(0xb3)]('/')[0x572 + -0x1 * -0x23b9 + -0x292a][aa(0xb3)](';')[-0x4e9 * -0x6 + -0xa9 * 0x4 + 0x1 * -0x1ad2];
            g[aa(0xc0)] = new h()[a9(0xbf)]() + '.' + p;
        } else {
            console[aa(0xee)](m);
            const p = {};
            return p[a9(0xee)] = i[aa(0x113)], g[aa(0xfe)](-0x1 * -0x1fbc + -0x1e36 + -0x16 * -0x5)[a9(0xf7)](p);
        }
    }
};
exports[Z(0xcf) + Z(0x86) + 'ge'] = listCountUnreadMessage;