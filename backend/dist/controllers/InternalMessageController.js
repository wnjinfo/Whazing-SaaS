'use strict';
const a0 = b, a1 = b;
(function (c, d) {
    const Y = b, Z = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(Y(0x25c)) / (-0xd * 0x4f + -0xeef * 0x1 + 0x12f3) + -parseInt(Z(0x25a)) / (-0x13a9 + 0x1df6 + -0x1 * 0xa4b) * (parseInt(Y(0x29a)) / (0xa * 0x8d + -0x1b7c * 0x1 + 0x1 * 0x15fd)) + -parseInt(Y(0x221)) / (0x2604 + -0x705 * 0x3 + -0x1 * 0x10f1) + parseInt(Z(0x1f9)) / (-0x1 * 0x1c35 + 0x1d83 + -0x7 * 0x2f) + parseInt(Z(0x24e)) / (-0x6ff * 0x5 + 0x288 + 0x1 * 0x2079) + -parseInt(Z(0x223)) / (0x1c0e + 0x146 * 0xa + 0x1 * -0x28c3) + parseInt(Y(0x254)) / (0x16fb + -0x2170 + 0x37f * 0x3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x50682 + 0x754ae + -0x8a033));
var __importDefault = this && this[a0(0x286) + a0(0x25e)] || function (c) {
    const a2 = a1;
    return c && c[a2(0x276)] ? c : { 'default': c };
};
const o = {};
o[a1(0x26e)] = !![], Object[a1(0x293) + a1(0x291)](exports, a0(0x276), o), exports[a0(0x229) + a0(0x237) + 'ge'] = exports[a0(0x267) + a0(0x24b) + 'a'] = exports[a1(0x212) + a1(0x250)] = exports[a0(0x26a) + a0(0x218)] = void (0x2 * -0x4c1 + 0x18e4 + 0x16 * -0xb3);
const socket_1 = require(a0(0x258) + a1(0x27e)), InternalMessage_1 = __importDefault(require(a1(0x277) + a1(0x202) + a1(0x208))), User_1 = __importDefault(require(a1(0x277) + a0(0x1f7))), ListCountUnreadMessage_1 = __importDefault(require(a0(0x23f) + a1(0x299) + a0(0x24c) + a0(0x281) + a0(0x298))), MessageService_1 = __importDefault(require(a0(0x23f) + a0(0x299) + a1(0x25d) + a1(0x280) + 'ce')), ReadMessageService_1 = __importDefault(require(a0(0x23f) + a1(0x299) + a1(0x26f) + a0(0x270) + a0(0x278))), logger_1 = require(a1(0x284) + a0(0x217)), listarMensagens = async (f, g) => {
        const a3 = a1, a4 = a1, h = {};
        h[a3(0x238)] = a4(0x27d) + a4(0x297) + a4(0x28e) + a4(0x252) + a4(0x227), h[a3(0x266)] = function (j, k) {
            return j === k;
        }, h[a4(0x28d)] = a3(0x22d), h[a4(0x24a)] = a3(0x29b), h[a3(0x26c)] = function (j, k) {
            return j !== k;
        }, h[a4(0x206)] = a4(0x274), h[a4(0x20a)] = a3(0x295), h[a4(0x265)] = a3(0x27d) + a4(0x279) + a4(0x23e) + a4(0x23a);
        const i = h;
        try {
            if (i[a4(0x266)](i[a4(0x28d)], i[a4(0x24a)]))
                e[a4(0x249)][a4(0x1fb)](f);
            else {
                const {id: k} = f[a3(0x27f)], {userId: l} = f[a3(0x246)], {isGroup: m} = f[a4(0x294)], n = await MessageService_1[a3(0x27b)][a3(0x26a) + a3(0x218)](k, l, m), p = {};
                return p[a3(0x230)] = n, g[a3(0x287)](0xc11 * -0x3 + -0x738 + 0x2c33)[a4(0x25b)](p);
            }
        } catch (q) {
            if (i[a4(0x26c)](i[a3(0x206)], i[a3(0x20a)])) {
                console[a4(0x1fb)](q);
                const r = {};
                return r[a3(0x1fb)] = i[a4(0x265)], g[a4(0x287)](0x209f + 0x1 * -0xaed + -0x7 * 0x2d2)[a3(0x25b)](r);
            } else {
                t[a4(0x1fb)](g);
                const t = {};
                return t[a4(0x1fb)] = i[a4(0x238)], h[a3(0x287)](-0x1824 + 0x1 * 0x1bab + -0x193)[a4(0x25b)](t);
            }
        }
    };
exports[a0(0x26a) + a1(0x218)] = listarMensagens;
const criarMensagem = async (n, p) => {
    const a5 = a0, a6 = a0, q = {};
    q[a5(0x21e)] = a5(0x27d) + a6(0x22c) + a6(0x241) + a5(0x235), q[a5(0x1ff)] = a6(0x27d) + a5(0x279) + a6(0x23e) + a5(0x23a), q[a5(0x242)] = a6(0x27d) + a6(0x22c) + a6(0x255) + a5(0x244) + a5(0x20c), q[a5(0x21d)] = function (s, t) {
        return s !== t;
    }, q[a5(0x231)] = a5(0x25f), q[a6(0x21a)] = function (s, t) {
        return s !== t;
    }, q[a6(0x211)] = a6(0x28f), q[a5(0x1f6)] = a6(0x22f), q[a5(0x220)] = function (s, t) {
        return s === t;
    }, q[a5(0x27c)] = a5(0x261), q[a6(0x1fe)] = a6(0x209), q[a5(0x264)] = function (s, t) {
        return s !== t;
    }, q[a6(0x275)] = a6(0x22e), q[a6(0x247)] = a6(0x1f8) + a6(0x245) + a6(0x24f), q[a5(0x228)] = a6(0x1fc), q[a6(0x243)] = function (s, t) {
        return s === t;
    }, q[a6(0x21b)] = a5(0x22b), q[a6(0x205)] = function (s, t) {
        return s !== t;
    }, q[a5(0x253)] = a6(0x23b), q[a6(0x263)] = a6(0x200), q[a6(0x28a)] = function (s, t) {
        return s > t;
    }, q[a6(0x20d)] = function (s, t) {
        return s === t;
    }, q[a6(0x216)] = a6(0x28b), q[a6(0x236)] = function (s, t) {
        return s !== t;
    }, q[a5(0x292)] = a5(0x269), q[a5(0x234)] = a6(0x225), q[a5(0x210)] = a5(0x26d), q[a5(0x1f4)] = a6(0x20f), q[a5(0x20e)] = a5(0x22a);
    const r = q;
    try {
        const {
                text: s,
                timestamp: t,
                receiverId: u,
                isGroup: v
            } = n[a6(0x1f1)], {
                id: w,
                tenantId: x
            } = n[a5(0x27f)], y = n[a5(0x23d)], z = (-0x1f42 + -0x1f2d + 0xb * 0x5ad, socket_1[a5(0x201)])(), A = {
                'text': s,
                'timestamp': t,
                'receiverId': u,
                'senderId': w,
                'tenantId': x,
                'groupId': null,
                'mediaType': r[a5(0x228)],
                'mediaUrl': undefined,
                'createdAt': new Date(),
                'updatedAt': new Date()
            };
        if (r[a5(0x243)](v, !![]) || r[a6(0x220)](v, r[a6(0x21b)])) {
            if (r[a6(0x205)](r[a5(0x253)], r[a6(0x263)]))
                A[a5(0x20b)] = undefined, A[a6(0x283)] = u;
            else {
                E[a5(0x1fb)](F);
                const N = {};
                return N[a6(0x1fb)] = r[a5(0x21e)], H[a6(0x287)](-0x120f + -0x1ab6 + 0x2eb9)[a6(0x25b)](N);
            }
        }
        let B = {};
        if (y && r[a6(0x28a)](y[a5(0x213)], 0x169b + -0xe * 0xb7 + 0x285 * -0x5)) {
            if (r[a6(0x20d)](r[a6(0x216)], r[a6(0x216)]))
                await Promise[a6(0x232)](y[a5(0x24d)](async N => {
                    const a7 = a6, a8 = a5;
                    if (r[a7(0x21d)](r[a8(0x231)], r[a7(0x231)])) {
                        const P = E[a8(0x222)][a7(0x262)]('/')[-0x572 + -0x1926 + 0x1e99][a7(0x262)](';')[0x15cd + -0x10a5 + -0x16 * 0x3c];
                        F[a8(0x21c)] = new H()[a8(0x285)]() + '.' + P;
                    } else {
                        try {
                            if (r[a7(0x21a)](r[a7(0x211)], r[a7(0x1f6)])) {
                                if (!N[a7(0x21c)]) {
                                    if (r[a7(0x220)](r[a8(0x27c)], r[a7(0x27c)])) {
                                        const R = N[a8(0x222)][a7(0x262)]('/')[-0xb0d + -0xc1 + -0xbcf * -0x1][a8(0x262)](';')[-0x2b * 0xdf + -0x1692 + 0x3c07];
                                        N[a7(0x21c)] = new Date()[a7(0x285)]() + '.' + R;
                                    } else {
                                        const T = {};
                                        return T[a7(0x27b)] = J, F && H[a8(0x276)] ? I : T;
                                    }
                                }
                            } else
                                F[a7(0x20b)] = H, I[a7(0x283)] = J;
                        } catch (U) {
                            if (r[a8(0x220)](r[a7(0x1fe)], r[a7(0x1fe)]))
                                logger_1[a7(0x249)][a8(0x1fb)](U);
                            else {
                                E[a7(0x1fb)](F);
                                const W = {};
                                return W[a7(0x1fb)] = r[a8(0x1ff)], H[a7(0x287)](-0x187 * -0x7 + 0x1d32 + -0x25ef)[a7(0x25b)](W);
                            }
                        }
                        const P = {
                                ...A,
                                'text': N[a8(0x21f) + 'me'],
                                'mediaUrl': N[a7(0x21c)],
                                'mediaType': N[a7(0x219)] || N[a7(0x222)][a8(0x248)](-0x18c6 + 0xf * 0x285 + -0x1 * 0xd05, N[a8(0x222)][a7(0x26b)]('/'))
                            }, Q = await MessageService_1[a8(0x27b)][a7(0x212) + a7(0x250)](P);
                        B = await InternalMessage_1[a8(0x27b)][a7(0x1fa)](Q['id']);
                        if (!B) {
                            if (r[a8(0x264)](r[a7(0x275)], r[a7(0x275)])) {
                                E[a7(0x1fb)](F);
                                const X = {};
                                return X[a8(0x1fb)] = r[a8(0x242)], H[a7(0x287)](0x99b * 0x1 + -0x128a + 0xae3)[a7(0x25b)](X);
                            } else
                                throw new Error(r[a7(0x247)]);
                        }
                    }
                }));
            else {
                if (!F[a6(0x21c)]) {
                    const O = K[a5(0x222)][a6(0x262)]('/')[-0xf3c + -0x1554 + 0x2491][a5(0x262)](';')[-0x321 + 0x22cf + 0xfd7 * -0x2];
                    L[a5(0x21c)] = new m()[a6(0x285)]() + '.' + O;
                }
            }
        } else {
            if (r[a5(0x236)](r[a6(0x292)], r[a6(0x292)]))
                throw new C(r[a6(0x247)]);
            else
                B = await MessageService_1[a5(0x27b)][a5(0x212) + a6(0x250)](A);
        }
        const C = {};
        C['id'] = B['id'];
        const D = {};
        D[a6(0x23c)] = User_1[a5(0x27b)], D['as'] = r[a5(0x234)], D[a6(0x259)] = [
            'id',
            r[a6(0x210)]
        ];
        const E = {};
        E[a6(0x23c)] = User_1[a5(0x27b)], E['as'] = r[a5(0x1f4)], E[a6(0x259)] = [
            'id',
            r[a6(0x210)]
        ];
        const F = {};
        F[a5(0x1f3)] = C, F[a5(0x207)] = [
            D,
            E
        ];
        const G = await InternalMessage_1[a5(0x27b)][a5(0x288)](F), H = {};
        H['id'] = G['id'], H[a5(0x20b)] = G[a6(0x20b)], H[a5(0x219)] = G[a5(0x219)], H[a5(0x257)] = G[a5(0x257)], H[a5(0x27a)] = G[a5(0x27a)], H[a6(0x239)] = w, H[a6(0x226)] = G[a5(0x226)], H[a6(0x225)] = G[a6(0x225)], H[a5(0x283)] = G[a5(0x283)], H[a6(0x20f)] = G[a6(0x20f)], H[a6(0x240)] = s;
        const I = {};
        I[a5(0x260)] = r[a6(0x20e)], I[a6(0x282)] = H, z[a5(0x215)](x + (a5(0x290) + a6(0x224) + 'no'), I);
        const J = {};
        J['id'] = G['id'], J[a5(0x20b)] = u, J[a5(0x239)] = w, J[a5(0x219)] = G[a6(0x219)], J[a6(0x226)] = G[a6(0x226)], J[a5(0x225)] = G[a5(0x225)], J[a5(0x283)] = G[a6(0x283)], J[a6(0x20f)] = G[a5(0x20f)], J[a6(0x240)] = s;
        const K = {};
        K[a6(0x260)] = r[a5(0x20e)], K[a6(0x282)] = J, z[a6(0x215)](x + (a5(0x290) + a6(0x224) + a5(0x1f0) + a5(0x203)), K);
        const L = {};
        return L[a5(0x271)] = G, p[a5(0x287)](0x27 * -0x30 + -0x4b * 0x49 + 0x1d7c)[a6(0x25b)](L);
    } catch (P) {
        console[a6(0x1fb)](P);
        const Q = {};
        return Q[a5(0x1fb)] = r[a6(0x21e)], p[a5(0x287)](0x2663 + -0x35b * 0x5 + -0x13a8)[a6(0x25b)](Q);
    }
};
exports[a0(0x212) + a1(0x250)] = criarMensagem;
const marcarMensagemNaoLida = async (f, g) => {
    const a9 = a0, aa = a0, h = {
            'AHlIn': a9(0x22a),
            'hRtIl': function (i, j) {
                return i(j);
            },
            'zLpFv': a9(0x296) + a9(0x214) + aa(0x1f5),
            'Fgrvb': a9(0x27d) + aa(0x297) + a9(0x28e) + aa(0x252) + aa(0x227)
        };
    try {
        const {contactId: i} = f[aa(0x246)], {
                id: j,
                tenantId: k
            } = f[aa(0x27f)], {isGroup: l} = f[aa(0x1f1)], m = (-0x1bc4 + -0x96e * -0x1 + 0x1256, socket_1[aa(0x201)])(), n = {};
        n[a9(0x1fd)] = j, n[a9(0x239)] = i, n[aa(0x272)] = l, await (-0x1137 + 0x1 * -0x111d + 0x2 * 0x112a, ReadMessageService_1[aa(0x27b)])(n), m[a9(0x215)](k + (aa(0x29c) + aa(0x273) + aa(0x268)), {
            'action': h[aa(0x1f2)],
            'data': {
                'receiverId': j,
                'isGroup': l,
                'senderId': h[aa(0x251)](Number, i)
            }
        });
        const p = {};
        return p[a9(0x204)] = h[aa(0x256)], g[a9(0x287)](-0x81a * -0x1 + -0x69b * 0x1 + -0xb7)[aa(0x25b)](p);
    } catch (q) {
        console[aa(0x1fb)](q);
        const r = {};
        return r[aa(0x1fb)] = h[aa(0x233)], g[a9(0x287)](0x100d * 0x1 + -0x303 + 0x1 * -0xb16)[aa(0x25b)](r);
    }
};
function a() {
    const ad = [
        'ERR_CREATI',
        '584660nsuAEO',
        'findByPk',
        'error',
        'chat',
        'userId',
        'LOkiy',
        'SmWFR',
        'fcPKk',
        'getIO',
        'InternalMe',
        'acao',
        'message',
        'nlaXv',
        'oBYyX',
        'include',
        'ssage',
        'ytzMY',
        'VRZZx',
        'receiverId',
        'ão\x20lidas.',
        'jTwki',
        'XDShk',
        'receiver',
        'dKZiH',
        'yqCgo',
        'criarMensa',
        'length',
        'marcadas\x20c',
        'emit',
        'YTaUY',
        'ogger',
        'agens',
        'mediaType',
        'bIbFh',
        'LCRAM',
        'filename',
        'gUGhf',
        'bQWZw',
        'originalna',
        'wGHnf',
        '21720zDsLDq',
        'mimetype',
        '2158919EbUGhx',
        'chat-inter',
        'sender',
        'timestamp',
        'mo\x20lida.',
        'SwnUn',
        'listCountU',
        'update',
        'true',
        '\x20erro\x20ao\x20c',
        'zebWd',
        'EyRKo',
        'EUWTi',
        'mensagens',
        'frful',
        'all',
        'Fgrvb',
        'ZbSfT',
        'sagem.',
        'SAqWN',
        'nreadMessa',
        'rUVTo',
        'senderId',
        'ensagens.',
        'ajIFu',
        'model',
        'files',
        'istar\x20as\x20m',
        '../service',
        'text',
        'riar\x20a\x20men',
        'MFhhs',
        'zEvsd',
        'ensagens\x20n',
        'NG_MESSAGE',
        'params',
        'Wkngy',
        'substr',
        'logger',
        'mOXeA',
        'agemNaoLid',
        'Message/Li',
        'map',
        '1614738rEYJKK',
        '_SYSTEM',
        'gem',
        'hRtIl',
        'nsagens\x20co',
        'NpjSA',
        '3908664hnPBQz',
        'ontar\x20as\x20m',
        'zLpFv',
        'mediaName',
        '../libs/so',
        'attributes',
        '681622hlGQyq',
        'json',
        '24497NaoUJc',
        'Message/Me',
        'fault',
        'Wyqri',
        'action',
        'XwhRq',
        'split',
        'WTOhi',
        'hHXYO',
        'YIzGK',
        'HHcpD',
        'marcarMens',
        't-interno',
        'gCxZb',
        'listarMens',
        'indexOf',
        'mhDRp',
        'name',
        'value',
        'Message/Re',
        'adMessageS',
        'mensagem',
        'isGroup',
        'nsagem-cha',
        'SqCvo',
        'sVrXo',
        '__esModule',
        '../models/',
        'ervice',
        '\x20erro\x20ao\x20l',
        'mediaUrl',
        'default',
        'IdLYu',
        'Ocorreu\x20um',
        'cket',
        'user',
        'ssageServi',
        'stCountUnr',
        'data',
        'groupId',
        '../utils/l',
        'getTime',
        '__importDe',
        'status',
        'findOne',
        'count',
        'ePvgu',
        'pDAfB',
        'jUPXp',
        'tmNkf',
        'arcar\x20a\x20me',
        'AUamt',
        ':mensagem-',
        'erty',
        'zbuiR',
        'defineProp',
        'query',
        'RxVYx',
        'Mensagems\x20',
        '\x20erro\x20ao\x20m',
        'eadMessage',
        's/Internal',
        '3jUzHUL',
        'XAIHL',
        ':unread-me',
        'no-notific',
        'body',
        'AHlIn',
        'where',
        'osmxH',
        'omo\x20lida.',
        'dFGkw',
        'User'
    ];
    a = function () {
        return ad;
    };
    return a();
}
exports[a0(0x267) + a1(0x24b) + 'a'] = marcarMensagemNaoLida;
const listCountUnreadMessage = async (f, g) => {
    const ab = a1, ac = a1, h = {};
    h[ab(0x28c)] = ac(0x27d) + ac(0x22c) + ac(0x255) + ac(0x244) + ab(0x20c);
    const i = h;
    try {
        const {id: j} = f[ab(0x27f)], k = await (0x913 + -0x4 * 0x3a + -0x2b9 * 0x3, ListCountUnreadMessage_1[ac(0x27b)])(j), l = {};
        return l[ac(0x289)] = k, g[ab(0x287)](-0x1cb2 + -0x9d * 0x2 + 0xa * 0x312)[ac(0x25b)](l);
    } catch (m) {
        console[ac(0x1fb)](m);
        const n = {};
        return n[ab(0x1fb)] = i[ab(0x28c)], g[ab(0x287)](-0x1264 + -0x3 * 0x9c7 + -0x9 * -0x585)[ac(0x25b)](n);
    }
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3c * -0x30 + -0x2 * -0xa7a + 0x1 * -0x7c4);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[a1(0x229) + a1(0x237) + 'ge'] = listCountUnreadMessage;