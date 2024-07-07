'use strict';
const Q = b, R = b;
(function (c, d) {
    const O = b, P = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(O(0x15e)) / (-0x113e * -0x1 + -0x23 * 0x16 + -0xe3b * 0x1) * (-parseInt(O(0x152)) / (-0x2475 * 0x1 + -0x2 * -0x596 + 0x194b)) + -parseInt(P(0xf7)) / (-0x6ad + 0x3ef + 0x8d * 0x5) * (parseInt(P(0x13b)) / (0x1e87 + -0x233c + 0x1f * 0x27)) + -parseInt(P(0x128)) / (-0x1f29 + 0xbe + -0x2 * -0xf38) * (parseInt(P(0x15d)) / (0x7 * -0x289 + 0x8cb * -0x1 + 0x1a90)) + parseInt(O(0x131)) / (-0xb * -0x229 + -0x1ff6 + -0x4e * -0x1b) + parseInt(O(0x144)) / (0xd * 0x254 + 0x10b0 + 0x23c * -0x15) * (-parseInt(O(0x13e)) / (-0x1e73 * 0x1 + -0x22e8 + 0xae6 * 0x6)) + parseInt(O(0x143)) / (-0x12 * 0x13a + -0x18ff + -0x2f1d * -0x1) + parseInt(P(0x112)) / (0x7ae * -0x1 + -0x1e4b + -0xcac * -0x3) * (parseInt(P(0x161)) / (0x142e + -0x2116 + 0xcf4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x17763 * 0x2 + 0x52896 + 0xb901 * -0x7));
var __importDefault = this && this[Q(0xfb) + R(0xfa)] || function (c) {
    const S = Q;
    return c && c[S(0x164)] ? c : { 'default': c };
};
const q = {};
q[R(0x14c)] = !![], Object[Q(0x139) + R(0x11b)](exports, R(0x164), q);
function a() {
    const V = [
        '../../help',
        'status',
        'info',
        'muzCY',
        'Message\x20Up',
        '5BpfjkW',
        'lte',
        'telegramId',
        'error',
        'ptt',
        'Emit',
        'dABvG',
        'sendVoice',
        'Error\x20send',
        '733390prYUEY',
        'join',
        'public',
        'messageId',
        'xjbrn',
        'ers/SetTic',
        '\x20|\x20Ticket:',
        'XgSGx',
        'defineProp',
        'body',
        '39112BrFKjM',
        'lDTtU',
        'ls/Ticket',
        '9liUnkc',
        's/logger',
        'ketMessage',
        'nant:\x20',
        'dataValues',
        '3381320DBHeam',
        '1122328dYaqIq',
        'contact',
        'chat:ack',
        'quotedMsg',
        'sAsRead',
        'ers/socket',
        'ASC',
        'timestamp',
        'value',
        'path',
        'gnotb',
        'e\x20media',
        'logger',
        'image',
        '10VMXmKU',
        'XDeMf',
        'kEnBF',
        '../../mode',
        'Error\x20mess',
        'yhmJE',
        'findAll',
        'rUVhr',
        'sendDocume',
        'BsNUe',
        'nfDrB',
        '24942QznKDg',
        '3931qxDeuh',
        'chat',
        'text',
        '15492EeAObB',
        'default',
        'createdAt',
        '__esModule',
        '\x20message\x20(',
        'tTACb',
        'mediaUrl',
        'where',
        'audio',
        'sendMessag',
        'telegram',
        '39ocVmNj',
        'includes',
        'zmrqh',
        'fault',
        '__importDe',
        'ack',
        'e\x20text',
        'pbloF',
        'update',
        'pending',
        'type',
        'tVTvy',
        'age\x20is\x20(te',
        'date',
        'mediaType',
        'closed',
        'KCTNZ',
        'IBalf',
        'cjeJY',
        'sendPhoto',
        'mediaName',
        'sequelize',
        'date\x20ok',
        'qSjLN',
        '../../util',
        'reply_to_m',
        'source',
        '66mynNjD',
        'ls/Message',
        'id:\x20',
        'essage_id',
        'ticket',
        'tenantId',
        'payload',
        'IBXsy',
        'video',
        'erty',
        'sendVideo',
        'message_id',
        'sended',
        ')::\x20',
        'fHkmT',
        'eSylM',
        'DEPNN'
    ];
    a = function () {
        return V;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1831 + 0x8ad * -0x4 + 0xb77);
        let h = e[f];
        return h;
    }, b(c, d);
}
const path_1 = require(Q(0x14d)), sequelize_1 = require(R(0x10c)), SetTicketMessagesAsRead_1 = __importDefault(require(R(0x123) + R(0x136) + Q(0x140) + R(0x148))), socketEmit_1 = __importDefault(require(R(0x123) + R(0x149) + R(0x12d))), Message_1 = __importDefault(require(R(0x155) + R(0x113))), Ticket_1 = __importDefault(require(R(0x155) + Q(0x13d))), logger_1 = require(Q(0x10f) + R(0x13f)), SendMessagesSystemWbot = async (m, n) => {
        const T = R, U = R, o = {};
        o[T(0xf9)] = T(0x100), o[T(0x107)] = U(0x145), o[T(0x122)] = T(0x116), o[T(0x154)] = T(0x106), o[U(0xfe)] = T(0xf6), o[U(0x15c)] = T(0x147), o[U(0x157)] = U(0x163), o[U(0x109)] = T(0x14a), o[T(0x119)] = T(0x15f), o[T(0x121)] = T(0x160), o[U(0x15b)] = T(0x133), o[T(0x166)] = function (v, w) {
            return v === w;
        }, o[T(0x159)] = T(0xf4), o[U(0x102)] = function (v, w) {
            return v === w;
        }, o[U(0x135)] = T(0x12c), o[T(0x13c)] = U(0x151), o[U(0x120)] = function (v, w) {
            return v === w;
        }, o[U(0x138)] = T(0x11a), o[T(0x14e)] = T(0xf5) + T(0x14f), o[U(0x153)] = T(0xf5) + T(0xfd), o[U(0x108)] = function (v, w) {
            return v * w;
        }, o[T(0x10e)] = T(0x11e), o[U(0x126)] = T(0x146), o[U(0x12e)] = T(0x127) + T(0x10d);
        const p = o, r = { [sequelize_1['Op']['is']]: null }, s = {
                'fromMe': !![],
                'messageId': r,
                'status': p[U(0xf9)],
                [sequelize_1['Op']['or']]: [
                    { 'scheduleDate': { [sequelize_1['Op'][U(0x129)]]: new Date() } },
                    { 'scheduleDate': { [sequelize_1['Op']['is']]: null } }
                ]
            }, t = await Message_1[U(0x162)][U(0x158)]({
                'where': s,
                'include': [
                    p[U(0x107)],
                    {
                        'model': Ticket_1[U(0x162)],
                        'as': p[T(0x122)],
                        'where': {
                            'tenantId': n,
                            [sequelize_1['Op']['or']]: {
                                'status': { [sequelize_1['Op']['ne']]: p[T(0x154)] },
                                'isFarewellMessage': !![]
                            },
                            'channel': p[U(0xfe)],
                            'whatsappId': m['id']
                        },
                        'include': [p[U(0x107)]]
                    },
                    {
                        'model': Message_1[U(0x162)],
                        'as': p[T(0x15c)],
                        'include': [p[T(0x107)]]
                    }
                ],
                'order': [[
                        p[U(0x157)],
                        p[U(0x109)]
                    ]]
            });
        let u;
        for (const v of t) {
            const w = v, {ticket: x} = w, y = x[T(0x145)][U(0x12a)], z = {};
            w[U(0x147)] && (z[T(0x110) + T(0x115)] = w[U(0x147)][T(0x134)]);
            try {
                if (![
                        p[U(0x119)],
                        p[U(0x121)]
                    ][T(0xf8)](w[T(0x105)]) && w[U(0x10b)]) {
                    const F = (0x19db + 0xa15 * -0x2 + -0x5b1, path_1[T(0x132)])(__dirname, '..', '..', '..', p[U(0x15b)]), G = (-0x1882 + 0x309 * 0x3 + 0x1 * 0xf67, path_1[T(0x132)])(F, w[U(0x10b)]);
                    if (p[U(0x166)](w[T(0x105)], p[U(0x159)]) || p[T(0x102)](w[U(0x105)], p[T(0x135)])) {
                        const H = {};
                        H[U(0x111)] = G, u = await m[U(0xf6)][U(0x12f)](y, H, z);
                    } else {
                        if (p[U(0x102)](w[T(0x105)], p[U(0x13c)])) {
                            const I = {};
                            I[U(0x111)] = G, u = await m[U(0xf6)][U(0x10a)](y, I, z);
                        } else {
                            if (p[U(0x120)](w[U(0x105)], p[U(0x138)])) {
                                const J = {};
                                J[T(0x111)] = G, u = await m[T(0xf6)][T(0x11c)](y, J, z);
                            } else {
                                const K = {};
                                K[T(0x111)] = G, u = await m[T(0xf6)][T(0x15a) + 'nt'](y, K, z);
                            }
                        }
                    }
                    logger_1[U(0x150)][U(0x125)](p[T(0x14e)]);
                } else
                    u = await m[U(0xf6)][T(0xf5) + 'e'](y, w[U(0x13a)], z), logger_1[U(0x150)][T(0x125)](p[U(0x153)]);
                const A = {
                        ...w,
                        ...u,
                        'id': w['id'],
                        'timestamp': p[U(0x108)](u[U(0x104)], -0x3 * -0x3e9 + -0x26fb + 0x1f28),
                        'messageId': u[U(0x11d)],
                        'status': p[T(0x10e)],
                        'ack': 0x2
                    }, B = { ...A }, C = {};
                C['id'] = w['id'];
                const D = {};
                D[T(0x168)] = C, await Message_1[U(0x162)][U(0xff)](B, D);
                const E = {};
                E[U(0x117)] = x[U(0x117)], E[U(0x101)] = p[T(0x126)], E[U(0x118)] = { ...w[T(0x142)] }, E[U(0x118)]['id'] = w['id'], E[U(0x118)][T(0x167)] = w[U(0x167)], E[U(0x118)][T(0x14b)] = A[T(0x14b)], E[U(0x118)][T(0x134)] = u[T(0x11d)], E[U(0x118)][T(0x124)] = p[U(0x10e)], E[U(0x118)][T(0xfc)] = 0x2, (0x725 * -0x2 + -0x103b + -0x1 * -0x1e85, socketEmit_1[U(0x162)])(E), logger_1[U(0x150)][U(0x125)](p[T(0x12e)]), await (-0x2e * 0xc7 + -0x1ff4 + 0x9 * 0x786, SetTicketMessagesAsRead_1[U(0x162)])(x);
            } catch (L) {
                const M = w['id'], N = w[U(0x116)]['id'];
                logger_1[U(0x150)][T(0x12b)](U(0x156) + T(0x103) + U(0x141) + n + (U(0x137) + '\x20') + N + ')'), logger_1[U(0x150)][T(0x12b)](U(0x130) + T(0x165) + U(0x114) + M + U(0x11f) + L);
            }
        }
    };
exports[R(0x162)] = SendMessagesSystemWbot;