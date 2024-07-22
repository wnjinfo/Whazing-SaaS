'use strict';
const I = b, J = b;
(function (c, d) {
    const G = b, H = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(G(0x112)) / (-0x1 * -0x1183 + -0x26ec + 0x156a) * (parseInt(H(0x107)) / (-0xc46 + -0xccb + -0x395 * -0x7)) + parseInt(H(0xfb)) / (0x17e * 0xd + -0x29 * -0x3 + 0x2 * -0x9ef) * (-parseInt(H(0xd0)) / (0x3 * 0x21 + 0x1 * 0x583 + -0x5e2)) + parseInt(H(0x11a)) / (0xc7e + 0x1 * 0x5b5 + 0x1 * -0x122e) + parseInt(H(0x11d)) / (-0x3 * 0x6a5 + -0x1 * 0x1367 + 0x275c) * (parseInt(H(0xf1)) / (0x10f6 + 0x1 * -0xce5 + 0x2 * -0x205)) + parseInt(H(0xff)) / (0x3e * 0x12 + 0x24b2 + -0x2906) * (-parseInt(G(0xe6)) / (0x17f7 + 0x46b * -0x6 + -0xdc * -0x3)) + parseInt(H(0xe4)) / (0x1a8e + -0x94b + -0x1139) + -parseInt(H(0x10a)) / (0x11d0 + 0x2 * 0x647 + -0x7 * 0x455);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x871c * 0x14 + -0xc0694 + 0x1 * 0xad29d));
var __importDefault = this && this[I(0xeb) + I(0xc1)] || function (c) {
    const K = I;
    return c && c[K(0x104)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x91b + -0x1 * -0xceb + -0x310);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[J(0xe9)] = !![], Object[I(0xe5) + J(0x110)](exports, J(0x104), k);
function a() {
    const P = [
        'writeFile',
        'oQVZX',
        '-appMessag',
        'mimetype',
        'dhnLz',
        'emit',
        'kQQVL',
        '-notificat',
        '1084088jdrlBy',
        'ooElf',
        'error',
        'dCorI',
        'WJQFN',
        'logger',
        'NG_MESSAGE',
        'substr',
        'KFFXy',
        'read',
        'getIO',
        'jPkOv',
        'mFjeP',
        'tenantId',
        'CreateMess',
        'userId',
        'quotedMsg',
        'yQMVV',
        'chat',
        'ERR_CREATI',
        '4094890ybvFAJ',
        'defineProp',
        '9KWBDws',
        'OffLine',
        'filename',
        'value',
        'base64',
        '__importDe',
        '../../mode',
        'UAUgb',
        'path',
        'timestamp',
        'QTzHv',
        '7ayZBub',
        'indexOf',
        'ireSz',
        'kCfKT',
        'abQbw',
        'mediaType',
        'KnESN',
        'util',
        '/socket',
        'kADTW',
        '12mlfhmw',
        'buffer',
        'rDUlL',
        'join',
        '1048088pvxIAC',
        'promisify',
        'status',
        'lgqvJ',
        'ageOffLine',
        '__esModule',
        'JxIUe',
        'getTime',
        '1526uENaRI',
        'ZMZjV',
        'Service',
        '2768051yDerdo',
        'toString',
        'pwLcF',
        'mediaUrl',
        'include',
        'nVqHG',
        'erty',
        'OmUay',
        '830ZzdzAC',
        'all',
        'ticketId',
        '../../libs',
        '../../util',
        'bHSDO',
        'public',
        'ls/Ticket',
        '22725LxJtYs',
        'findByPk',
        'ticket',
        '6194022zAHTpV',
        'split',
        'create',
        'EliDv',
        'body',
        'wId',
        'contactId',
        'PnMyO',
        'default',
        's/logger',
        'ls/Message',
        'gwJRh',
        'RQROG',
        'ion',
        'map',
        'MHLZy',
        'fUfHM',
        'fault',
        'DDIpf',
        'update',
        'eJdWE',
        'fromMe',
        'contact',
        'hSIlb'
    ];
    a = function () {
        return P;
    };
    return a();
}
const fs_1 = require('fs'), util_1 = require(J(0xf8)), path_1 = require(J(0xee)), logger_1 = require(J(0x116) + I(0x126)), MessageOffLine_1 = __importDefault(require(I(0xec) + I(0x127) + J(0xe7))), socket_1 = require(I(0x115) + I(0xf9)), Ticket_1 = __importDefault(require(J(0xec) + I(0x119))), Message_1 = __importDefault(require(J(0xec) + I(0x127))), writeFileAsync = (0x1 * -0x2381 + 0x1 * -0x183 + 0x2504, util_1[J(0x100)])(fs_1[J(0xc8)]), CreateMessageOffilineService = async ({
        msg: g,
        tenantId: h,
        medias: i,
        ticket: j,
        userId: l
    }) => {
        const L = J, M = J, m = {
                'kCfKT': L(0xe3) + M(0xd6),
                'hSIlb': function (q, r) {
                    return q === r;
                },
                'gwJRh': M(0x108),
                'jPkOv': function (q, r) {
                    return q !== r;
                },
                'ireSz': M(0xd3),
                'pwLcF': L(0x117),
                'mFjeP': M(0xc2),
                'oQVZX': L(0xc0),
                'RQROG': function (q, r, s, t) {
                    return q(r, s, t);
                },
                'UAUgb': M(0x118),
                'eJdWE': L(0xea),
                'QTzHv': function (q, r) {
                    return q === r;
                },
                'PnMyO': M(0x10f),
                'lgqvJ': M(0xcc),
                'rDUlL': M(0xc6),
                'EliDv': M(0x11c),
                'yQMVV': L(0xe0),
                'KFFXy': L(0x12c),
                'WJQFN': L(0xce),
                'abQbw': L(0x11f),
                'OmUay': L(0xde) + M(0x103) + M(0x109),
                'JxIUe': L(0xe2),
                'kADTW': M(0xf7)
            }, n = (0x668 * 0x1 + 0x33b + -0x9a3 * 0x1, socket_1[L(0xda)])(), o = {};
        o[M(0x122)] = undefined, o[M(0x114)] = j['id'], o[M(0x121)] = g[M(0x121)], o[M(0x123)] = j[L(0x123)], o[L(0xc5)] = g[L(0xc5)], o[M(0xd9)] = !![], o[M(0xf6)] = m[M(0x105)], o[M(0x10d)] = undefined, o[L(0xef)] = undefined, o[L(0xdf)] = l;
        const p = o;
        try {
            if (i)
                m[M(0xf0)](m[M(0xfa)], m[L(0xfa)]) ? await Promise[L(0x113)](i[L(0x12b)](async q => {
                    const N = M, O = L, r = {};
                    r[N(0xd1)] = m[O(0xf4)];
                    const s = r;
                    if (m[N(0xc7)](m[N(0x128)], m[O(0x128)])) {
                        try {
                            if (m[N(0xdb)](m[N(0xf3)], m[N(0x10c)])) {
                                if (!q[O(0xe8)]) {
                                    if (m[O(0xc7)](m[N(0xdc)], m[O(0xc9)]))
                                        throw new r(s[O(0xd1)]);
                                    else {
                                        const z = q[O(0xcb)][O(0x11e)]('/')[0x1e85 * -0x1 + 0x25da + -0x754][N(0x11e)](';')[-0x55f + 0x9b * 0x21 + 0xa * -0x176];
                                        q[O(0xe8)] = new Date()[O(0x106)]() + '.' + z;
                                    }
                                }
                                await m[N(0x129)](writeFileAsync, (-0x143a + -0x97 * -0x21 + -0x5 * -0x27, path_1[O(0xfe)])(__dirname, '..', '..', '..', '..', m[O(0xed)], q[N(0xe8)]), q[N(0xfc)], m[N(0xc4)]);
                            } else {
                                const B = {};
                                return B[N(0x125)] = j, g && h[O(0x104)] ? i : B;
                            }
                        } catch (B) {
                            if (m[O(0xf0)](m[N(0x124)], m[N(0x102)]))
                                throw new r(s[N(0xd1)]);
                            else
                                logger_1[N(0xd5)][O(0xd2)](B);
                        }
                        const t = {
                                ...p,
                                'mediaUrl': q[N(0xe8)],
                                'mediaType': q[N(0xcb)][N(0xd7)](-0x1863 + 0x5f5 + 0x126e, q[N(0xcb)][N(0xf2)]('/'))
                            }, u = await MessageOffLine_1[O(0x125)][N(0x11f)](t), v = {};
                        v[O(0xdd)] = h;
                        const w = {};
                        w[O(0x10e)] = [
                            m[O(0xfd)],
                            {
                                'model': Ticket_1[N(0x125)],
                                'as': m[N(0x120)],
                                'where': v,
                                'include': [m[N(0xfd)]]
                            },
                            {
                                'model': Message_1[O(0x125)],
                                'as': m[O(0xe1)],
                                'include': [m[O(0xfd)]]
                            }
                        ];
                        const x = await MessageOffLine_1[O(0x125)][N(0x11b)](u['id'], w);
                        if (!x) {
                            if (m[N(0xc7)](m[N(0xd8)], m[N(0xd4)]))
                                v[O(0xd5)][N(0xd2)](w);
                            else
                                throw new Error(m[N(0xf4)]);
                        }
                        n['to'](h + '-' + x[N(0x114)][N(0x10b)]())['to'](h + '-' + x[O(0x11c)][N(0x101)])['to'](h + (O(0xcf) + N(0x12a)))[O(0xcd)](h + (N(0xca) + 'e'), {
                            'action': m[N(0xf5)],
                            'message': x,
                            'ticket': x[N(0x11c)],
                            'contact': x[N(0x11c)][O(0xc6)]
                        }), await j[N(0xc3)]({
                            'lastMessage': x[O(0x121)],
                            'lastMessageAt': new Date()[N(0x106)]()
                        });
                    } else {
                        const F = f[O(0xcb)][N(0x11e)]('/')[-0x63 * 0x43 + -0x3 * 0x392 + -0x928 * -0x4][N(0x11e)](';')[-0xc8c + -0x22a1 + 0x2f2d];
                        g[O(0xe8)] = new h()[O(0x106)]() + '.' + F;
                    }
                })) : e[L(0xd5)][M(0xd2)](m[L(0x111)], f);
            else {
                const r = { ...p };
                r[L(0xf6)] = m[M(0x105)];
                const s = await MessageOffLine_1[L(0x125)][L(0x11f)](r), t = {};
                t[L(0xdd)] = h;
                const u = {};
                u[M(0x10e)] = [
                    m[M(0xfd)],
                    {
                        'model': Ticket_1[L(0x125)],
                        'as': m[L(0x120)],
                        'where': t,
                        'include': [m[M(0xfd)]]
                    },
                    {
                        'model': Message_1[M(0x125)],
                        'as': m[L(0xe1)],
                        'include': [m[M(0xfd)]]
                    }
                ];
                const v = await MessageOffLine_1[L(0x125)][M(0x11b)](s['id'], u);
                if (!v)
                    throw new Error(m[M(0xf4)]);
                await j[L(0xc3)]({
                    'lastMessage': v[M(0x121)],
                    'lastMessageAt': new Date()[L(0x106)]()
                }), n['to'](h + '-' + v[L(0x114)][M(0x10b)]())['to'](h + '-' + v[M(0x11c)][M(0x101)])['to'](h + (L(0xcf) + M(0x12a)))[M(0xcd)](h + (M(0xca) + 'e'), {
                    'action': m[M(0xf5)],
                    'message': v,
                    'ticket': v[L(0x11c)],
                    'contact': v[M(0x11c)][L(0xc6)]
                });
            }
        } catch (w) {
            logger_1[M(0xd5)][M(0xd2)](m[L(0x111)], w);
        }
    };
exports[J(0x125)] = CreateMessageOffilineService;