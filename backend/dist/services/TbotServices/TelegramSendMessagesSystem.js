'use strict';
const Q = b, R = b;
function a() {
    const V = [
        'ls/Message',
        'status',
        'jhmbu',
        '3174UPjUGX',
        'yyXyY',
        'info',
        'payload',
        'public',
        'ketMessage',
        'YQlGk',
        'age\x20is\x20(te',
        '400swqRMh',
        'kfYzo',
        'uqDst',
        'ack',
        'telegramId',
        'jHTtO',
        'messageId',
        'ers/SetTic',
        'sendVideo',
        'mediaType',
        'message_id',
        '198180KMGIcl',
        'image',
        'sendMessag',
        'sendVoice',
        'chat:ack',
        'ptt',
        'Emit',
        'type',
        'ls/Ticket',
        '__esModule',
        'nant:\x20',
        'RSQPn',
        'ASC',
        'body',
        'ticket',
        '616hQIpFh',
        'pending',
        'update',
        'auHbu',
        'tenantId',
        'e\x20media',
        'TkIaP',
        'createdAt',
        'value',
        'quotedMsg',
        '3749999SshxfN',
        'closed',
        'logger',
        '\x20message\x20(',
        'id:\x20',
        'e\x20text',
        'mediaUrl',
        'PtQDa',
        'default',
        'XRBJx',
        'ers/socket',
        '168yOQYQk',
        'uatyq',
        '../../help',
        'reply_to_m',
        'join',
        'where',
        'icRDn',
        '151xEDwwB',
        'bgvFO',
        'contact',
        'gOtcu',
        'source',
        'pBwlu',
        ')::\x20',
        'chat',
        'sequelize',
        'path',
        'QlvdB',
        'text',
        'iioKz',
        'includes',
        '7914LeRYIl',
        'defineProp',
        'sendDocume',
        'mediaName',
        'sended',
        '2966160xioIpI',
        'Degzh',
        'Message\x20Up',
        'dataValues',
        '11706oBfrde',
        'fault',
        'timestamp',
        'erty',
        'Error\x20send',
        '../../util',
        '__importDe',
        'essage_id',
        's/logger',
        '\x20|\x20Ticket:',
        'lte',
        'JavJb',
        'date',
        'vMMQs',
        'audio',
        'DbNpR',
        'video',
        'sAsRead',
        'IeNYI',
        'Error\x20mess',
        '10eeClpE',
        'findAll',
        '49347DJBdRa',
        'date\x20ok',
        'RjJLS',
        'telegram',
        'uQnRM',
        'sendPhoto',
        'error',
        '../../mode'
    ];
    a = function () {
        return V;
    };
    return a();
}
(function (c, d) {
    const O = b, P = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(O(0xb9)) / (0x2 * 0x14e + -0x1f99 + -0x2 * -0xe7f) * (-parseInt(P(0xf1)) / (0x70b + 0xc * -0xd0 + 0x2b7)) + parseInt(P(0xd0)) / (-0x156a + -0xf2f * -0x1 + 0x11 * 0x5e) * (-parseInt(O(0x9d)) / (-0x11c4 * 0x1 + -0x1666 * 0x1 + -0x4a * -0x8b)) + parseInt(O(0xcc)) / (-0x2e * -0x8e + 0x1db5 + 0x1b9a * -0x2) + -parseInt(P(0xc7)) / (0x22dc + 0xcdf + -0x2fb5) * (-parseInt(P(0xb2)) / (-0x1e7 * -0xf + -0x1 * -0x1741 + -0x33c3)) + parseInt(O(0xf9)) / (-0x22d * -0x3 + -0x2a6 + -0x3d9) * (parseInt(P(0xe6)) / (0x3 * -0xa23 + 0x945 + -0x152d * -0x1)) + parseInt(O(0xe4)) / (0x760 + 0x11b * 0x13 + -0x5 * 0x5ab) * (parseInt(O(0xa7)) / (-0x14f1 + 0x27b * 0xb + -0x64d * 0x1)) + parseInt(P(0x8e)) / (0x1 * -0xebf + 0x11db * 0x1 + -0x310);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x6316 + 0x2 * 0x5961d + 0x5 * -0xe34b));
var __importDefault = this && this[Q(0xd6) + Q(0xd1)] || function (c) {
    const S = R;
    return c && c[S(0x97)] ? c : { 'default': c };
};
const q = {};
q[R(0xa5)] = !![], Object[R(0xc8) + R(0xd3)](exports, Q(0x97), q);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x141b + 0x69 + 0x143e);
        let h = e[f];
        return h;
    }, b(c, d);
}
const path_1 = require(R(0xc2)), sequelize_1 = require(R(0xc1)), SetTicketMessagesAsRead_1 = __importDefault(require(R(0xb4) + R(0x100) + Q(0xf6) + R(0xe1))), socketEmit_1 = __importDefault(require(R(0xb4) + Q(0xb1) + R(0x94))), Message_1 = __importDefault(require(Q(0xed) + R(0xee))), Ticket_1 = __importDefault(require(R(0xed) + Q(0x96))), logger_1 = require(R(0xd5) + R(0xd8)), SendMessagesSystemWbot = async (m, n) => {
        const T = R, U = Q, o = {};
        o[T(0xe8)] = U(0x9e), o[U(0xf2)] = T(0xbb), o[U(0xbc)] = T(0x9c), o[U(0xa3)] = U(0xa8), o[T(0xb3)] = U(0xe9), o[U(0xc3)] = T(0xa6), o[U(0xc5)] = T(0xa4), o[U(0xb8)] = U(0x9a), o[U(0xbe)] = U(0xc0), o[U(0xfa)] = T(0xc4), o[T(0xae)] = U(0xf5), o[U(0xb0)] = function (v, w) {
            return v === w;
        }, o[U(0xdd)] = T(0xde), o[U(0xdf)] = function (v, w) {
            return v === w;
        }, o[U(0xba)] = T(0x93), o[T(0x99)] = function (v, w) {
            return v === w;
        }, o[T(0xf0)] = T(0x8f), o[T(0xe2)] = function (v, w) {
            return v === w;
        }, o[T(0xcd)] = U(0xe0), o[U(0xf7)] = T(0x90) + T(0xa2), o[U(0xa0)] = U(0x90) + T(0xac), o[T(0xdb)] = function (v, w) {
            return v * w;
        }, o[T(0xea)] = T(0xcb), o[T(0xfe)] = U(0x92), o[T(0xfb)] = T(0xce) + U(0xe7);
        const p = o, r = { [sequelize_1['Op']['is']]: null }, s = {
                'fromMe': !![],
                'messageId': r,
                'status': p[T(0xe8)],
                [sequelize_1['Op']['or']]: [
                    { 'scheduleDate': { [sequelize_1['Op'][U(0xda)]]: new Date() } },
                    { 'scheduleDate': { [sequelize_1['Op']['is']]: null } }
                ]
            }, t = await Message_1[U(0xaf)][T(0xe5)]({
                'where': s,
                'include': [
                    p[U(0xf2)],
                    {
                        'model': Ticket_1[U(0xaf)],
                        'as': p[U(0xbc)],
                        'where': {
                            'tenantId': n,
                            [sequelize_1['Op']['or']]: {
                                'status': { [sequelize_1['Op']['ne']]: p[U(0xa3)] },
                                'isFarewellMessage': !![]
                            },
                            'channel': p[U(0xb3)],
                            'whatsappId': m['id']
                        },
                        'include': [p[U(0xf2)]]
                    },
                    {
                        'model': Message_1[U(0xaf)],
                        'as': p[T(0xc3)],
                        'include': [p[T(0xf2)]]
                    }
                ],
                'order': [[
                        p[U(0xc5)],
                        p[T(0xb8)]
                    ]]
            });
        let u;
        for (const v of t) {
            const w = v, {ticket: x} = w, y = x[U(0xbb)][U(0xfd)], z = {};
            w[T(0xa6)] && (z[T(0xb5) + U(0xd7)] = w[U(0xa6)][U(0xff)]);
            try {
                if (![
                        p[U(0xbe)],
                        p[T(0xfa)]
                    ][T(0xc6)](w[U(0x8c)]) && w[T(0xca)]) {
                    const F = (-0x1a64 + -0x13c3 + 0x2e27 * 0x1, path_1[U(0xb6)])(__dirname, '..', '..', '..', p[U(0xae)]), G = (0xc * 0x1d + 0x4c8 + -0x624, path_1[T(0xb6)])(F, w[U(0xca)]);
                    if (p[T(0xb0)](w[U(0x8c)], p[T(0xdd)]) || p[U(0xdf)](w[U(0x8c)], p[U(0xba)])) {
                        const H = {};
                        H[T(0xbd)] = G, u = await m[U(0xe9)][U(0x91)](y, H, z);
                    } else {
                        if (p[T(0x99)](w[U(0x8c)], p[T(0xf0)])) {
                            const I = {};
                            I[T(0xbd)] = G, u = await m[T(0xe9)][U(0xeb)](y, I, z);
                        } else {
                            if (p[U(0xe2)](w[T(0x8c)], p[U(0xcd)])) {
                                const J = {};
                                J[T(0xbd)] = G, u = await m[T(0xe9)][T(0x101)](y, J, z);
                            } else {
                                const K = {};
                                K[T(0xbd)] = G, u = await m[U(0xe9)][T(0xc9) + 'nt'](y, K, z);
                            }
                        }
                    }
                    logger_1[U(0xa9)][U(0xf3)](p[U(0xf7)]);
                } else
                    u = await m[T(0xe9)][T(0x90) + 'e'](y, w[U(0x9b)], z), logger_1[U(0xa9)][U(0xf3)](p[U(0xa0)]);
                const A = {
                        ...w,
                        ...u,
                        'id': w['id'],
                        'timestamp': p[T(0xdb)](u[T(0xdc)], 0x1b5a + -0x1 * -0x739 + -0x3 * 0xa39),
                        'messageId': u[U(0x8d)],
                        'status': p[T(0xea)],
                        'ack': 0x2
                    }, B = { ...A }, C = {};
                C['id'] = w['id'];
                const D = {};
                D[U(0xb7)] = C, await Message_1[T(0xaf)][U(0x9f)](B, D);
                const E = {};
                E[T(0xa1)] = x[T(0xa1)], E[U(0x95)] = p[U(0xfe)], E[T(0xf4)] = { ...w[U(0xcf)] }, E[T(0xf4)]['id'] = w['id'], E[T(0xf4)][U(0xad)] = w[U(0xad)], E[T(0xf4)][T(0xd2)] = A[T(0xd2)], E[T(0xf4)][U(0xff)] = u[T(0x8d)], E[T(0xf4)][U(0xef)] = p[T(0xea)], E[T(0xf4)][U(0xfc)] = 0x2, (0x305 * -0xb + -0x93 * 0x1f + -0x2 * -0x1982, socketEmit_1[T(0xaf)])(E), logger_1[T(0xa9)][U(0xf3)](p[U(0xfb)]), await (0x8ec * 0x4 + -0xc7b + -0x1735, SetTicketMessagesAsRead_1[U(0xaf)])(x);
            } catch (L) {
                const M = w['id'], N = w[T(0x9c)]['id'];
                logger_1[T(0xa9)][U(0xec)](T(0xe3) + U(0xf8) + U(0x98) + n + (U(0xd9) + '\x20') + N + ')'), logger_1[T(0xa9)][T(0xec)](T(0xd4) + U(0xaa) + T(0xab) + M + U(0xbf) + L);
            }
        }
    };
exports[Q(0xaf)] = SendMessagesSystemWbot;