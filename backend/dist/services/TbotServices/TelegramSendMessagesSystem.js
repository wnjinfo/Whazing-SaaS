'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4d0 + 0x1470 + -0xf3a);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Q = b, R = b;
(function (c, d) {
    const O = b, P = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(O(0xbd)) / (-0x1e99 + -0x8cb * -0x1 + 0x15cf) * (parseInt(O(0xa5)) / (0x74 * 0x1 + 0x1891 + -0x1903)) + parseInt(P(0xc8)) / (0x1604 + 0xa3e * 0x2 + -0x2a7d) + -parseInt(P(0xc6)) / (-0x2eb + 0xdca + -0x18d * 0x7) + -parseInt(P(0xa9)) / (-0x234b + 0x1737 * 0x1 + 0x1 * 0xc19) * (-parseInt(O(0xa1)) / (-0x2 * 0x7d3 + 0x70 * -0x2e + 0x23cc)) + -parseInt(O(0x74)) / (0x1 * 0xc03 + -0x1226 + 0x20e * 0x3) + parseInt(P(0xb8)) / (-0x31 * -0x8e + -0xd43 + -0xf * 0xed) * (-parseInt(O(0x6a)) / (0x1f6 * -0x1 + -0x3b * -0x5e + 0x3ef * -0x5)) + parseInt(P(0x77)) / (0x919 * -0x1 + -0x6b0 + 0xfd3) * (parseInt(P(0xd4)) / (-0x167 * -0x7 + 0x47 * -0x79 + -0x1 * -0x17c9));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x27ceb + 0x3904a + 0x2314 * 0xa));
var __importDefault = this && this[Q(0xa4) + Q(0xb1)] || function (c) {
    const S = Q;
    return c && c[S(0x82)] ? c : { 'default': c };
};
const q = {};
q[R(0xaf)] = !![], Object[R(0x73) + Q(0x9a)](exports, Q(0x82), q);
const path_1 = require(R(0x69)), sequelize_1 = require(Q(0xce)), SetTicketMessagesAsRead_1 = __importDefault(require(R(0x87) + R(0xd7) + R(0x7f) + Q(0xbf))), socketEmit_1 = __importDefault(require(R(0x87) + R(0xa7) + R(0x80))), Message_1 = __importDefault(require(R(0x81) + R(0xc2))), Ticket_1 = __importDefault(require(R(0x81) + R(0x9c))), logger_1 = require(Q(0xd1) + R(0x6c)), SendMessagesSystemWbot = async (m, n) => {
        const T = Q, U = Q, o = {};
        o[T(0xb4)] = T(0x86), o[U(0x6f)] = T(0xc1), o[U(0x79)] = U(0x72), o[T(0x8a)] = U(0x9b), o[T(0xc9)] = T(0x66), o[T(0xd6)] = T(0xb6), o[T(0xba)] = T(0xb3), o[U(0xa2)] = U(0x98), o[T(0x68)] = T(0x84), o[T(0x78)] = T(0xd2), o[T(0xd8)] = U(0x8e), o[T(0x9d)] = function (v, w) {
            return v === w;
        }, o[U(0x8b)] = T(0x9f), o[T(0xad)] = U(0xd3), o[T(0x7e)] = function (v, w) {
            return v === w;
        }, o[U(0xca)] = T(0xcd), o[T(0x7a)] = T(0x97), o[U(0xb9)] = U(0x88) + T(0x90), o[U(0x91)] = T(0x88) + U(0x70), o[U(0x7b)] = function (v, w) {
            return v * w;
        }, o[U(0x71)] = T(0xa0), o[T(0x75)] = T(0xbc), o[U(0x6d)] = U(0x8f) + U(0xbb);
        const p = o, r = { [sequelize_1['Op']['is']]: null }, s = {
                'fromMe': !![],
                'messageId': r,
                'status': p[U(0xb4)],
                [sequelize_1['Op']['or']]: [
                    { 'scheduleDate': { [sequelize_1['Op'][T(0x93)]]: new Date() } },
                    { 'scheduleDate': { [sequelize_1['Op']['is']]: null } }
                ]
            }, t = await Message_1[T(0xa3)][T(0xc7)]({
                'where': s,
                'include': [
                    p[U(0x6f)],
                    {
                        'model': Ticket_1[U(0xa3)],
                        'as': p[T(0x79)],
                        'where': {
                            'tenantId': n,
                            [sequelize_1['Op']['or']]: {
                                'status': { [sequelize_1['Op']['ne']]: p[U(0x8a)] },
                                'isFarewellMessage': !![]
                            },
                            'channel': p[U(0xc9)],
                            'whatsappId': m['id']
                        },
                        'include': [p[T(0x6f)]]
                    },
                    {
                        'model': Message_1[U(0xa3)],
                        'as': p[T(0xd6)],
                        'include': [p[U(0x6f)]]
                    }
                ],
                'order': [[
                        p[U(0xba)],
                        p[T(0xa2)]
                    ]]
            });
        let u;
        for (const v of t) {
            const w = v, {ticket: x} = w, y = x[U(0xc1)][T(0xcb)], z = {};
            w[U(0xb6)] && (z[T(0x7c) + T(0xcc)] = w[U(0xb6)][T(0x67)]);
            try {
                if (![
                        p[T(0x68)],
                        p[T(0x78)]
                    ][U(0x92)](w[U(0xb0)]) && w[U(0xd5)]) {
                    const F = (-0x5c + 0x2a4 * 0x2 + 0x4 * -0x13b, path_1[U(0x6b)])(__dirname, '..', '..', '..', p[U(0xd8)]), G = (0xb93 * -0x2 + -0x2203 + 0x3929, path_1[T(0x6b)])(F, w[U(0xd5)]);
                    if (p[U(0x9d)](w[T(0xb0)], p[U(0x8b)]) || p[U(0x9d)](w[U(0xb0)], p[T(0xad)])) {
                        const H = {};
                        H[U(0xab)] = G, u = await m[T(0x66)][U(0x94)](y, H, z);
                    } else {
                        if (p[U(0x7e)](w[T(0xb0)], p[T(0xca)])) {
                            const I = {};
                            I[U(0xab)] = G, u = await m[T(0x66)][T(0x76)](y, I, z);
                        } else {
                            if (p[T(0x7e)](w[U(0xb0)], p[T(0x7a)])) {
                                const J = {};
                                J[U(0xab)] = G, u = await m[U(0x66)][T(0xc4)](y, J, z);
                            } else {
                                const K = {};
                                K[T(0xab)] = G, u = await m[T(0x66)][T(0xa6) + 'nt'](y, K, z);
                            }
                        }
                    }
                    logger_1[U(0x83)][T(0x9e)](p[T(0xb9)]);
                } else
                    u = await m[T(0x66)][T(0x88) + 'e'](y, w[U(0xb2)], z), logger_1[T(0x83)][T(0x9e)](p[T(0x91)]);
                const A = {
                        ...w,
                        ...u,
                        'id': w['id'],
                        'timestamp': p[U(0x7b)](u[U(0x99)], -0x1 * -0x1447 + 0x9fa * 0x3 + -0x2e4d),
                        'messageId': u[U(0xb5)],
                        'status': p[T(0x71)],
                        'ack': 0x2
                    }, B = { ...A }, C = {};
                C['id'] = w['id'];
                const D = {};
                D[T(0x85)] = C, await Message_1[T(0xa3)][U(0x96)](B, D);
                const E = {};
                E[U(0x8d)] = x[U(0x8d)], E[T(0xc5)] = p[T(0x75)], E[T(0xd0)] = { ...w[T(0xaa)] }, E[T(0xd0)]['id'] = w['id'], E[T(0xd0)][T(0x7d)] = w[T(0x7d)], E[T(0xd0)][T(0x89)] = A[T(0x89)], E[T(0xd0)][U(0x67)] = u[T(0xb5)], E[T(0xd0)][U(0x6e)] = p[U(0x71)], E[T(0xd0)][T(0xbe)] = 0x2, (0x4 * 0x15a + 0x429 * -0x7 + 0x1 * 0x17b7, socketEmit_1[T(0xa3)])(E), logger_1[U(0x83)][U(0x9e)](p[T(0x6d)]), await (-0x11e * -0xf + -0x5 * -0x68f + -0x318d, SetTicketMessagesAsRead_1[T(0xa3)])(x);
            } catch (L) {
                const M = w['id'], N = w[U(0x72)]['id'];
                logger_1[T(0x83)][U(0xc0)](U(0xa8) + U(0xac) + T(0xc3) + n + (T(0xcf) + '\x20') + N + ')'), logger_1[U(0x83)][U(0xc0)](T(0xb7) + U(0x95) + U(0xae) + M + U(0x8c) + L);
            }
        }
    };
exports[Q(0xa3)] = SendMessagesSystemWbot;
function a() {
    const V = [
        'LyBnW',
        'e\x20text',
        'qvUOX',
        'ticket',
        'defineProp',
        '1900822BePbyV',
        'UCYAb',
        'sendPhoto',
        '20zBofLd',
        'nYFqp',
        'Qnidd',
        'jSoJS',
        'dKLMC',
        'reply_to_m',
        'mediaUrl',
        'QtUAP',
        'ketMessage',
        'Emit',
        '../../mode',
        '__esModule',
        'logger',
        'chat',
        'where',
        'pending',
        '../../help',
        'sendMessag',
        'timestamp',
        'OOfSB',
        'BAMIu',
        ')::\x20',
        'tenantId',
        'public',
        'Message\x20Up',
        'e\x20media',
        'UjvbR',
        'includes',
        'lte',
        'sendVoice',
        '\x20message\x20(',
        'update',
        'video',
        'ASC',
        'date',
        'erty',
        'closed',
        'ls/Ticket',
        'hdWBi',
        'info',
        'audio',
        'sended',
        '30YBYNah',
        'tTzIf',
        'default',
        '__importDe',
        '19608HYtXjt',
        'sendDocume',
        'ers/socket',
        'Error\x20mess',
        '267795SFtcnP',
        'dataValues',
        'source',
        'age\x20is\x20(te',
        'jyzzx',
        'id:\x20',
        'value',
        'mediaType',
        'fault',
        'body',
        'createdAt',
        'Ujdbx',
        'message_id',
        'quotedMsg',
        'Error\x20send',
        '8kQwhlN',
        'yFRvj',
        'cNSIk',
        'date\x20ok',
        'chat:ack',
        '8IVHJjg',
        'ack',
        'sAsRead',
        'error',
        'contact',
        'ls/Message',
        'nant:\x20',
        'sendVideo',
        'type',
        '1259292EVLFPW',
        'findAll',
        '304716lQdVNQ',
        'IhXRs',
        'mUbFd',
        'telegramId',
        'essage_id',
        'image',
        'sequelize',
        '\x20|\x20Ticket:',
        'payload',
        '../../util',
        'text',
        'ptt',
        '3283566sfrAxs',
        'mediaName',
        'VoldB',
        'ers/SetTic',
        'EGeDH',
        'telegram',
        'messageId',
        'FsvvB',
        'path',
        '1271547nwgkzP',
        'join',
        's/logger',
        'XjPAD',
        'status'
    ];
    a = function () {
        return V;
    };
    return a();
}