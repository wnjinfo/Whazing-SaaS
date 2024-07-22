'use strict';
const E = b, F = b;
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(C(0x1f2)) / (-0xd9a + 0x16ea + -0x94f) + parseInt(C(0x1d8)) / (-0x4cd * -0x1 + -0xd36 + 0x1af * 0x5) + -parseInt(D(0x184)) / (0x117d + -0x22a0 + 0xa * 0x1b7) * (parseInt(C(0x1ad)) / (0xa91 + 0x37 * -0xad + 0x1a9e)) + parseInt(D(0x1de)) / (-0x2 * 0x765 + -0x4 * 0x79d + -0x1 * -0x2d43) * (parseInt(C(0x1ef)) / (0x26b * 0xa + 0xe32 + -0x2 * 0x132d)) + -parseInt(C(0x1ee)) / (-0x1 * 0x1a61 + -0xa9 * -0x35 + 0x1 * -0x895) * (-parseInt(C(0x1e5)) / (0x1 * 0x1483 + 0x1 * 0x64d + 0x1 * -0x1ac8)) + -parseInt(D(0x17e)) / (-0x220f + 0x20ae + 0x16a) + -parseInt(D(0x1e6)) / (-0x17d8 + -0x1017 + 0x27f9 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3 * -0x173ac + -0x2 * 0xaffc + -0x31 * 0x101));
var __importDefault = this && this[E(0x1db) + F(0x180)] || function (c) {
    const G = F;
    return c && c[G(0x1c6)] ? c : { 'default': c };
};
const m = {};
m[F(0x1ca)] = !![], Object[E(0x177) + F(0x1ed)](exports, E(0x1c6), m);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x265c + -0x8bb * 0x4 + 0x4abd);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(F(0x1cf)), SetTicketMessagesAsRead_1 = __importDefault(require(F(0x18e) + E(0x1eb) + F(0x1fe) + F(0x195))), socketEmit_1 = __importDefault(require(E(0x18e) + E(0x192) + F(0x1d9))), Message_1 = __importDefault(require(F(0x1a3) + F(0x1e9))), Ticket_1 = __importDefault(require(F(0x1a3) + E(0x18b))), Whatsapp_1 = __importDefault(require(E(0x1a3) + F(0x1d3) + 'p')), logger_1 = require(F(0x1e1) + E(0x17d)), SentMessage_1 = __importDefault(require(F(0x1b7) + F(0x1b5))), buildWabaMessage360 = async (h, i) => {
        const H = F, I = E, j = {
                'fQTGY': H(0x1a6),
                'oEyjM': I(0x18a),
                'bPqIo': I(0x182),
                'YOkUQ': function (l, o) {
                    return l(o);
                },
                'cxIbw': I(0x1f9),
                'Vpyug': H(0x17c),
                'Zjtbs': function (l, o) {
                    return l === o;
                },
                'EvLKL': H(0x1b9) + 'n',
                'LcLjH': function (l, o) {
                    return l === o;
                },
                'IWCue': function (l, o) {
                    return l === o;
                },
                'rUZUh': H(0x199),
                'UgOzC': H(0x1f0),
                'HGStj': function (l, o) {
                    return l === o;
                },
                'OVIpb': function (l, o) {
                    return l !== o;
                },
                'XgRRQ': I(0x1c2),
                'PEuAa': function (l, o) {
                    return l === o;
                },
                'XmaWX': function (l, o) {
                    return l === o;
                },
                'ZQeOu': I(0x1c9),
                'EbxBz': H(0x1a7),
                'ajCHD': function (l, o) {
                    return l === o;
                },
                'AyzpX': H(0x1f6),
                'DdTmN': I(0x1e7),
                'rOBEI': H(0x178),
                'uUXBN': H(0x1e4),
                'qfSuG': function (l, o) {
                    return l === o;
                },
                'pbovu': I(0x183),
                'PkFfA': H(0x1ea),
                'kDCOr': H(0x18f)
            };
        let k = {
            'timestamp': j[H(0x1ba)](String, h[H(0x176)]),
            'recipient_type': j[H(0x1c7)],
            'to': i,
            'type': j[I(0x1ab)]
        };
        if (j[H(0x194)](h[H(0x179)], j[H(0x1d5)]) || j[I(0x175)](h[I(0x179)], j[H(0x1e2)])) {
            if (j[I(0x185)](j[I(0x1c0)], j[I(0x193)])) {
                const o = {};
                o['id'] = j[I(0x1ec) + 'd'], o[H(0x1a9)] = k[I(0x1d7)] || l[H(0x1e3)] || '' || '';
                const p = { ...i };
                p[I(0x186)] = j[H(0x1e2)], p[H(0x1a6)] = o, h = p;
            } else {
                const o = {};
                o['id'] = h[I(0x1ec) + 'd'], o[H(0x1a9)] = h[I(0x1d7)] || h[I(0x1e3)] || '' || '', k = {
                    ...k,
                    'type': j[H(0x1e2)],
                    'document': o
                };
            }
        }
        if (j[I(0x1aa)](h[H(0x179)], j[I(0x17b)])) {
            if (j[H(0x1e8)](j[H(0x1f3)], j[I(0x1f3)])) {
                const q = {};
                q[H(0x1d7)] = h[I(0x1d7)];
                const r = { ...g };
                r[I(0x17c)] = q, f = r;
            } else {
                const q = {};
                q['id'] = h[I(0x1ec) + 'd'], q[H(0x1a9)] = h[H(0x1d7)] || h[H(0x1e3)] || '', k = {
                    ...k,
                    'type': j[H(0x17b)],
                    'image': q
                };
            }
        }
        if (j[I(0x1a0)](h[H(0x179)], j[H(0x1b0)])) {
            if (j[H(0x1ce)](j[H(0x1c3)], j[H(0x19c)])) {
                const s = {};
                s['id'] = j[I(0x1ec) + 'd'], s[I(0x1a9)] = k[I(0x1d7)] || l[I(0x1e3)] || '';
                const t = { ...i };
                t[H(0x186)] = j[I(0x1b0)], t[H(0x18a)] = s, h = t;
            } else {
                const s = {};
                s['id'] = h[H(0x1ec) + 'd'], s[H(0x1a9)] = h[H(0x1d7)] || h[H(0x1e3)] || '', k = {
                    ...k,
                    'type': j[I(0x1b0)],
                    'video': s
                };
            }
        }
        if (j[H(0x1a4)](h[H(0x179)], j[I(0x1f4)]) || j[H(0x1a4)](h[H(0x179)], j[I(0x1c5)])) {
            if (j[H(0x1a0)](j[I(0x1cc)], j[I(0x1cd)])) {
                const u = {};
                return u[I(0x17a)] = j, g && h[I(0x1c6)] ? i : u;
            } else {
                const u = {};
                u['id'] = h[H(0x1ec) + 'd'], u[I(0x1a9)] = h[I(0x1d7)] || h[H(0x1e3)] || '', k = {
                    ...k,
                    'type': j[H(0x1f4)],
                    'audio': u
                };
            }
        }
        if (j[I(0x1a5)](h[I(0x179)], j[I(0x197)]) || j[H(0x194)](h[I(0x179)], j[I(0x1ab)])) {
            if (j[H(0x1a0)](j[H(0x1b4)], j[H(0x1ae)])) {
                const w = {};
                w['id'] = j[H(0x1ec) + 'd'], w[I(0x1a9)] = k[I(0x1d7)] || l[H(0x1e3)] || '';
                const x = { ...i };
                x[I(0x186)] = j[I(0x17b)], x[I(0x182)] = w, x = x;
            } else {
                const w = {};
                w[I(0x1d7)] = h[H(0x1d7)], k = {
                    ...k,
                    'text': w
                };
            }
        }
        return k;
    }, n = { [sequelize_1['Op']['is']]: null }, where = {
        'fromMe': !![],
        'messageId': n,
        'status': E(0x19a),
        [sequelize_1['Op']['or']]: [
            { 'scheduleDate': { [sequelize_1['Op'][F(0x1a8)]]: new Date() } },
            { 'scheduleDate': { [sequelize_1['Op']['is']]: null } }
        ]
    }, Waba360SendMessagesSystem = async i => {
        const J = F, K = E, j = {
                'sPpag': J(0x1f6),
                'eAVWT': K(0x1d4),
                'bRhtm': K(0x1d2),
                'YvpFo': J(0x1d0),
                'nadvD': J(0x188),
                'pRbGd': K(0x1b2),
                'jgoEK': K(0x191),
                'FCXpD': J(0x189),
                'NgLWJ': J(0x1d1),
                'zOJfT': function (l, o) {
                    return l !== o;
                },
                'KrMoH': K(0x1b3),
                'ZWMld': K(0x1bd),
                'IoujQ': function (l, o) {
                    return l(o);
                },
                'WzlES': K(0x17c),
                'vFsgr': J(0x183),
                'YKIWf': function (l, o, p) {
                    return l(o, p);
                },
                'FpDXe': K(0x187),
                'QbVun': J(0x1bb),
                'ujndo': J(0x1fa) + J(0x1a1)
            }, k = await Message_1[K(0x17a)][J(0x19e)]({
                'where': where,
                'include': [
                    j[K(0x1be)],
                    {
                        'model': Ticket_1[K(0x17a)],
                        'as': j[J(0x19b)],
                        'where': {
                            'tenantId': i[J(0x1af)],
                            'channel': j[J(0x1ac)]
                        },
                        'include': [
                            j[K(0x1be)],
                            {
                                'model': Whatsapp_1[K(0x17a)],
                                'as': j[J(0x18d)],
                                'where': {
                                    'id': i['id'],
                                    'type': j[K(0x1ac)],
                                    'wabaBSP': j[K(0x1c1)]
                                }
                            }
                        ]
                    },
                    {
                        'model': Message_1[K(0x17a)],
                        'as': j[K(0x1c4)],
                        'include': [j[K(0x1be)]]
                    }
                ],
                'order': [[
                        j[J(0x198)],
                        j[J(0x1da)]
                    ]]
            });
        for (const l of k) {
            if (j[J(0x1f1)](j[K(0x1dc)], j[K(0x1b8)])) {
                const {ticket: o} = l, p = j[K(0x1bc)](String, o[K(0x1d4)][J(0x1b1)]);
                if (![
                        j[J(0x1c8)],
                        j[K(0x1fc)]
                    ][K(0x19d)](l[J(0x179)]) && l[J(0x1bf)] && !l[J(0x1ec) + 'd']) {
                }
                const q = await j[J(0x1b6)](buildWabaMessage360, l, p), r = {};
                r[K(0x1a2)] = q, r[K(0x1dd)] = i[K(0x190)];
                const s = await (-0x1047 + -0x1305 + 0x234c, SentMessage_1[K(0x17a)])(r), t = { ...l };
                t[J(0x1f7)] = s[K(0x17f)][-0x1741 + -0x7ae * 0x4 + 0x35f9]['id'], t[J(0x19f)] = j[J(0x1df)], t[J(0x181)] = 0x2;
                const u = t, v = { ...u }, w = {};
                w['id'] = l['id'];
                const x = {};
                x[K(0x1fb)] = w, await Message_1[K(0x17a)][K(0x18c)](v, x);
                const y = {};
                y[K(0x1af)] = o[J(0x1af)], y[J(0x186)] = j[J(0x1d6)], y[J(0x1f5)] = { ...u[K(0x1f8)] }, y[J(0x1f5)][K(0x1bf)] = l[J(0x1bf)], y[J(0x1f5)][J(0x1f7)] = u[J(0x1f7)], y[J(0x1f5)][K(0x19f)] = j[K(0x1df)], y[J(0x1f5)][K(0x181)] = 0x2, (-0x93a + -0x2 * 0x12ef + -0x16 * -0x224, socketEmit_1[J(0x17a)])(y), logger_1[J(0x1fd)][K(0x1e0)](j[K(0x1cb)]), await (-0x1f * -0x8b + -0x275 * 0x9 + 0x548, SetTicketMessagesAsRead_1[J(0x17a)])(o);
            } else {
                const A = {};
                A['id'] = B[K(0x1ec) + 'd'], A[J(0x1a9)] = k[K(0x1d7)] || l[K(0x1e3)] || '';
                const B = { ...A };
                B[K(0x186)] = j[J(0x196)], B[K(0x1f6)] = A, h = B;
            }
        }
    };
exports[F(0x17a)] = Waba360SendMessagesSystem;
function a() {
    const L = [
        'where',
        'vFsgr',
        'logger',
        'ketMessage',
        'LcLjH',
        'timestamp',
        'defineProp',
        'aWucL',
        'mediaType',
        'default',
        'bPqIo',
        'text',
        's/logger',
        '2721096SaRqNH',
        'messages',
        'fault',
        'ack',
        'image',
        'chat',
        '24oKvVuS',
        'IWCue',
        'type',
        'sended',
        'whatsapp',
        'createdAt',
        'video',
        'ls/Ticket',
        'update',
        'nadvD',
        '../../help',
        'jaYEc',
        'tokenAPI',
        'quotedMsg',
        'ers/socket',
        'UgOzC',
        'Zjtbs',
        'sAsRead',
        'sPpag',
        'pbovu',
        'FCXpD',
        'BjYGW',
        'pending',
        'bRhtm',
        'EbxBz',
        'includes',
        'findAll',
        'status',
        'PEuAa',
        'date\x20ok',
        'message',
        '../../mode',
        'ajCHD',
        'qfSuG',
        'document',
        'yEdCi',
        'lte',
        'caption',
        'HGStj',
        'Vpyug',
        'YvpFo',
        '130488EDQHAc',
        'kDCOr',
        'tenantId',
        'oEyjM',
        'number',
        '360',
        'ApFEY',
        'PkFfA',
        'age',
        'YKIWf',
        './SentMess',
        'ZWMld',
        'applicatio',
        'YOkUQ',
        'chat:ack',
        'IoujQ',
        'JtlcM',
        'eAVWT',
        'mediaUrl',
        'rUZUh',
        'pRbGd',
        'ZvkHF',
        'ZQeOu',
        'jgoEK',
        'DdTmN',
        '__esModule',
        'cxIbw',
        'WzlES',
        'VrBsE',
        'value',
        'ujndo',
        'rOBEI',
        'uUXBN',
        'XmaWX',
        'sequelize',
        'waba',
        'ASC',
        'ticket',
        'ls/Whatsap',
        'contact',
        'EvLKL',
        'QbVun',
        'body',
        '567846tNBaJV',
        'Emit',
        'NgLWJ',
        '__importDe',
        'KrMoH',
        'apiKey',
        '436440ouXYsx',
        'FpDXe',
        'info',
        '../../util',
        'fQTGY',
        'mediaName',
        'TvNwv',
        '49592ydHQYn',
        '1152090jhkptI',
        'voice',
        'OVIpb',
        'ls/Message',
        'jefHN',
        'ers/SetTic',
        'wabaMediaI',
        'erty',
        '126IiDqai',
        '12GXYhhu',
        'luvwn',
        'zOJfT',
        '291195UmnQEs',
        'XgRRQ',
        'AyzpX',
        'payload',
        'audio',
        'messageId',
        'dataValues',
        'individual',
        'Message\x20Up'
    ];
    a = function () {
        return L;
    };
    return a();
}