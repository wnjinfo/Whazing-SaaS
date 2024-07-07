'use strict';
function a() {
    const L = [
        '25909088TaKbhV',
        'emit',
        'writeFile',
        'HzfmO',
        'status',
        'create',
        'contactId',
        'update',
        '4468150uEImDX',
        'CreateMess',
        'split',
        'util',
        'wId',
        'value',
        '1073104uqFAml',
        '9010920LrgMuj',
        'iRKwQ',
        'error',
        '-notificat',
        'Service',
        'JUQvq',
        'mimetype',
        'mediaUrl',
        'fSeVz',
        'RtlfB',
        'mVYDy',
        'ticketId',
        'findByPk',
        'ion',
        'UqVms',
        'UZIbk',
        'rmiuH',
        'mediaType',
        'LeAeB',
        'uwOZx',
        'PTmNn',
        'base64',
        'gkfjX',
        '1501451YpLXRY',
        'timestamp',
        'defineProp',
        'ageOffLine',
        'getTime',
        'fromMe',
        'chat',
        'uOcza',
        '5242eQOrky',
        'public',
        'DknAy',
        'include',
        'all',
        'erty',
        'logger',
        'indexOf',
        'tenantId',
        '-appMessag',
        'PHWlL',
        'nhlWV',
        'map',
        '__importDe',
        'iOgvC',
        'join',
        '../../libs',
        'path',
        '4398987CofRxE',
        'userId',
        'quotedMsg',
        'LcWji',
        'ticket',
        'OffLine',
        'VdAkD',
        'Mboqt',
        'contact',
        'tsGTs',
        'pntGL',
        'LPpmP',
        'default',
        'substr',
        'ERR_CREATI',
        '__esModule',
        'promisify',
        'JWhso',
        'ls/Message',
        '/socket',
        'sWzHU',
        '../../mode',
        '130eMFFDh',
        'body',
        '../../util',
        'LbaTv',
        'buffer',
        'AOIsc',
        'ocMlq',
        'read',
        'filename',
        'BkjDj',
        'XYErc',
        'NG_MESSAGE',
        's/logger',
        'toString',
        'ls/Ticket',
        'Gpvqm',
        'getIO',
        'hKIaE',
        'bbvQp',
        'fault'
    ];
    a = function () {
        return L;
    };
    return a();
}
const E = b, F = b;
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(C(0x102)) / (-0x1be6 + -0x25f1 + 0x41d8) * (parseInt(D(0x12a)) / (-0x2416 + -0x50b + 0x1 * 0x2923)) + parseInt(C(0x114)) / (0x1b91 * -0x1 + -0x992 + -0x2526 * -0x1) + parseInt(D(0x14c)) / (-0x11c6 + 0x1451 + -0x287) + parseInt(D(0x146)) / (0x3d3 * -0x3 + -0x244a * 0x1 + 0x2fc8) + parseInt(C(0x14d)) / (0xdfd + 0x277 + -0x106e) + parseInt(C(0xfa)) / (0x1e87 + -0x1 * 0xbaa + -0x1 * 0x12d6) + -parseInt(D(0x13e)) / (0x4 * -0x10c + 0x7 * -0x175 + 0x1 * 0xe6b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xf20e3 + 0x2fa7 * 0x27 + -0xa * -0x1f458));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x6d * -0xc + 0xc61 * 0x1 + -0x65b * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[E(0x10f) + E(0x13d)] || function (c) {
    const G = F;
    return c && c[G(0x123)] ? c : { 'default': c };
};
const k = {};
k[E(0x14b)] = !![], Object[F(0xfc) + F(0x107)](exports, E(0x123), k);
const fs_1 = require('fs'), util_1 = require(F(0x149)), path_1 = require(E(0x113)), logger_1 = require(F(0x12c) + E(0x136)), MessageOffLine_1 = __importDefault(require(E(0x129) + F(0x126) + F(0x119))), socket_1 = require(E(0x112) + F(0x127)), Ticket_1 = __importDefault(require(E(0x129) + E(0x138))), Message_1 = __importDefault(require(F(0x129) + E(0x126))), writeFileAsync = (0x2515 + -0x97d + 0xdcc * -0x2, util_1[E(0x124)])(fs_1[E(0x140)]), CreateMessageOffilineService = async ({
        msg: g,
        tenantId: h,
        medias: i,
        ticket: j,
        userId: l
    }) => {
        const H = E, I = E, m = {
                'LcWji': H(0x122) + H(0x135),
                'sWzHU': function (q, r) {
                    return q !== r;
                },
                'mVYDy': I(0x10d),
                'HzfmO': function (q, r, s, t) {
                    return q(r, s, t);
                },
                'gkfjX': H(0x103),
                'PTmNn': I(0xf8),
                'JUQvq': function (q, r) {
                    return q !== r;
                },
                'uOcza': I(0x12f),
                'UZIbk': I(0x11f),
                'iRKwQ': I(0x11c),
                'BkjDj': I(0x118),
                'rmiuH': I(0x116),
                'JWhso': function (q, r) {
                    return q === r;
                },
                'PHWlL': H(0x130),
                'pntGL': I(0x143),
                'iOgvC': H(0x147) + I(0xfd) + I(0x151),
                'VdAkD': I(0x100),
                'LbaTv': function (q, r) {
                    return q !== r;
                },
                'UqVms': H(0xf5),
                'hKIaE': I(0xf6),
                'RtlfB': function (q, r) {
                    return q !== r;
                },
                'bbvQp': H(0x139),
                'Mboqt': function (q, r) {
                    return q === r;
                },
                'XYErc': I(0x104),
                'fSeVz': I(0x11d)
            }, n = (-0x1 * -0x1335 + 0x593 + -0x319 * 0x8, socket_1[H(0x13a)])(), o = {};
        o[H(0x14a)] = undefined, o[I(0xee)] = j['id'], o[H(0x12b)] = g[I(0x12b)], o[H(0x144)] = j[H(0x144)], o[H(0xff)] = g[H(0xff)], o[I(0x131)] = !![], o[H(0xf4)] = m[I(0x11a)], o[H(0xea)] = undefined, o[I(0xfb)] = undefined, o[H(0x115)] = l;
        const p = o;
        try {
            if (m[H(0x12d)](m[I(0xf1)], m[I(0x13b)])) {
                if (i)
                    await Promise[H(0x106)](i[H(0x10e)](async q => {
                        const J = H, K = H;
                        try {
                            if (m[J(0x128)](m[K(0xed)], m[K(0xed)]))
                                u[K(0x108)][J(0x14f)](f);
                            else {
                                if (!q[J(0x132)]) {
                                    const x = q[K(0x153)][J(0x148)]('/')[-0x3e8 * -0x8 + 0x10bc + -0xad * 0x47][K(0x148)](';')[0x39b * -0x3 + 0x23e8 + 0x3 * -0x85d];
                                    q[J(0x132)] = new Date()[J(0xfe)]() + '.' + x;
                                }
                                await m[K(0x141)](writeFileAsync, (0x528 * -0x2 + -0x1c84 + 0x46 * 0x8e, path_1[K(0x111)])(__dirname, '..', '..', '..', '..', m[K(0xf9)], q[K(0x132)]), q[J(0x12e)], m[K(0xf7)]);
                            }
                        } catch (y) {
                            if (m[K(0x152)](m[K(0x101)], m[K(0xf2)]))
                                logger_1[J(0x108)][J(0x14f)](y);
                            else
                                throw new t(m[K(0x117)]);
                        }
                        const r = {
                                ...p,
                                'mediaUrl': q[J(0x132)],
                                'mediaType': q[K(0x153)][J(0x121)](0x37 * -0x25 + 0x15 * -0x49 + 0xdf0, q[J(0x153)][K(0x109)]('/'))
                            }, s = await MessageOffLine_1[K(0x120)][J(0x143)](r), t = {};
                        t[K(0x10a)] = h;
                        const u = {};
                        u[J(0x105)] = [
                            m[J(0x14e)],
                            {
                                'model': Ticket_1[J(0x120)],
                                'as': m[J(0x133)],
                                'where': t,
                                'include': [m[K(0x14e)]]
                            },
                            {
                                'model': Message_1[J(0x120)],
                                'as': m[J(0xf3)],
                                'include': [m[K(0x14e)]]
                            }
                        ];
                        const v = await MessageOffLine_1[K(0x120)][K(0xef)](s['id'], u);
                        if (!v) {
                            if (m[K(0x125)](m[K(0x10c)], m[K(0x10c)]))
                                throw new Error(m[J(0x117)]);
                            else {
                                const B = {};
                                return B[K(0x120)] = j, g && h[J(0x123)] ? i : B;
                            }
                        }
                        n['to'](h + '-' + v[K(0xee)][J(0x137)]())['to'](h + '-' + v[J(0x118)][K(0x142)])['to'](h + (K(0x150) + K(0xf0)))[J(0x13f)](h + (J(0x10b) + 'e'), {
                            'action': m[K(0x11e)],
                            'message': v,
                            'ticket': v[K(0x118)],
                            'contact': v[J(0x118)][K(0x11c)]
                        }), await j[J(0x145)]({
                            'lastMessage': v[J(0x12b)],
                            'lastMessageAt': new Date()[J(0xfe)]()
                        });
                    }));
                else {
                    if (m[I(0xec)](m[H(0x13c)], m[H(0x13c)])) {
                        const r = f[I(0x153)][I(0x148)]('/')[-0xbd9 * 0x3 + -0x598 * -0x4 + 0xd2c][H(0x148)](';')[0xaca * -0x1 + 0x1 * 0xba2 + -0x4 * 0x36];
                        g[H(0x132)] = new h()[I(0xfe)]() + '.' + r;
                    } else {
                        const r = { ...p };
                        r[H(0xf4)] = m[H(0x11a)];
                        const s = await MessageOffLine_1[I(0x120)][H(0x143)](r), t = {};
                        t[I(0x10a)] = h;
                        const u = {};
                        u[I(0x105)] = [
                            m[I(0x14e)],
                            {
                                'model': Ticket_1[I(0x120)],
                                'as': m[H(0x133)],
                                'where': t,
                                'include': [m[I(0x14e)]]
                            },
                            {
                                'model': Message_1[H(0x120)],
                                'as': m[H(0xf3)],
                                'include': [m[I(0x14e)]]
                            }
                        ];
                        const v = await MessageOffLine_1[H(0x120)][I(0xef)](s['id'], u);
                        if (!v)
                            throw new Error(m[I(0x117)]);
                        await j[H(0x145)]({
                            'lastMessage': v[H(0x12b)],
                            'lastMessageAt': new Date()[H(0xfe)]()
                        }), n['to'](h + '-' + v[I(0xee)][I(0x137)]())['to'](h + '-' + v[I(0x118)][I(0x142)])['to'](h + (H(0x150) + I(0xf0)))[I(0x13f)](h + (H(0x10b) + 'e'), {
                            'action': m[I(0x11e)],
                            'message': v,
                            'ticket': v[H(0x118)],
                            'contact': v[H(0x118)][I(0x11c)]
                        });
                    }
                }
            } else
                throw new d(m[H(0x117)]);
        } catch (x) {
            m[I(0x11b)](m[I(0x134)], m[I(0xeb)]) ? e[H(0x108)][I(0x14f)](m[H(0x110)], f) : logger_1[I(0x108)][I(0x14f)](m[H(0x110)], x);
        }
    };
exports[E(0x120)] = CreateMessageOffilineService;