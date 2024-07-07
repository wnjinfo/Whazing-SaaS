'use strict';
const G = b, H = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x5a5 + 0x33b + -0x7fa * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const E = b, F = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(E(0xf4)) / (0x1a * -0xbf + -0xb2d * -0x3 + -0xe20) * (parseInt(E(0x124)) / (0x2121 + 0x4 * -0x245 + -0x1 * 0x180b)) + parseInt(E(0xed)) / (0x19da * 0x1 + -0x1 * -0xd55 + -0x272c) * (parseInt(F(0xe8)) / (0xe * 0x232 + -0x1da + 0x5 * -0x5c6)) + parseInt(F(0xf7)) / (0x256 + 0x1 * 0x1b7d + 0x2fb * -0xa) * (parseInt(F(0x111)) / (0x81f + -0x4 * 0x5f4 + 0xfb7)) + parseInt(E(0x11e)) / (0x1 * -0x1654 + 0x1 * -0x1863 + -0x2 * -0x175f) * (parseInt(E(0xfa)) / (-0x1072 + -0x6 * 0x638 + -0xf * -0x396)) + parseInt(F(0xef)) / (-0x1b1b * -0x1 + -0x9d * 0x13 + -0x1 * 0xf6b) * (-parseInt(E(0x12a)) / (0x89 * -0xb + 0xfa7 + -0x1 * 0x9ba)) + -parseInt(E(0x105)) / (0x41e + -0x1683 + -0x76 * -0x28) * (-parseInt(E(0x12b)) / (0x5 * -0x4fd + -0x2311 + 0x3c0e)) + -parseInt(F(0xeb)) / (0x16be + -0x21ab + 0x119 * 0xa);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x6d23 + -0x3207 * 0x17 + 0x92491));
function a() {
    const L = [
        '27478uNbwPh',
        '../../mode',
        'mediaName',
        'owTicketSe',
        'ticket',
        'ers/socket',
        'open',
        'sequelize',
        'type',
        'ILPCk',
        '../../util',
        's/queueVal',
        '15240osqwIK',
        'GUumD',
        'status',
        'ZlPIa',
        'idation',
        'getTime',
        'include',
        'contactId',
        'create',
        '__esModule',
        'ERR_CREATI',
        'rvice',
        'erty',
        '2760289NsUJeK',
        'model',
        'findOne',
        'ErFQx',
        'payload',
        'whatsappId',
        '94154RRhUjS',
        'ervices/Sh',
        'ls/Ticket',
        'defineProp',
        'isGroup',
        'default',
        '2726170tgLvYa',
        '876bIsWYH',
        'contact',
        '../TicketS',
        '941848eHmRdo',
        'update',
        '../../help',
        '4476810EhSZtS',
        'tenantId',
        '6JiREmU',
        'gUPZZ',
        '18AWoaqz',
        'value',
        'findByPk',
        '_SYSTEM',
        'fault',
        '8hIRXDK',
        'HbqaK',
        'nHGow',
        '975gFsvTT',
        'mediaType',
        'NG_MESSAGE',
        '8eRyzDG',
        'where',
        'ls/Message',
        '__importDe',
        'body',
        'chat:creat',
        'pending',
        'quotedMsg',
        'OrErw',
        'Emit',
        'chat'
    ];
    a = function () {
        return L;
    };
    return a();
}
var __importDefault = this && this[G(0xfd) + H(0xf3)] || function (c) {
    const I = G;
    return c && c[I(0x11a)] ? c : { 'default': c };
};
const k = {};
k[H(0xf0)] = !![], Object[H(0x127) + H(0x11d)](exports, G(0x11a), k);
const sequelize_1 = require(G(0x10c)), socketEmit_1 = __importDefault(require(H(0xea) + G(0x10a) + H(0x103))), Message_1 = __importDefault(require(G(0x106) + H(0xfc))), Ticket_1 = __importDefault(require(H(0x106) + H(0x126))), ShowTicketService_1 = __importDefault(require(G(0xe7) + G(0x125) + H(0x108) + G(0x11c))), queueValidation_1 = __importDefault(require(G(0x10f) + H(0x110) + G(0x115))), CreateForwardMessageService = async ({
        userId: l,
        tenantId: m,
        message: n,
        contact: o,
        ticketIdOrigin: p
    }) => {
        const J = G, K = G, q = {};
        q[J(0xf6)] = K(0x10b), q[J(0xf5)] = J(0x100), q[J(0x112)] = K(0x104), q[J(0x121)] = J(0x109), q[K(0x114)] = K(0xe6), q[J(0x102)] = J(0x101), q[K(0xee)] = J(0x11b) + K(0xf9) + K(0xf2), q[J(0x10e)] = J(0xff) + 'e';
        const r = q, s = {};
        s['id'] = p, s[K(0xec)] = m;
        const t = await (-0x2 * -0x1102 + -0xd40 + -0x14c4, ShowTicketService_1[K(0x129)])(s);
        let u;
        const v = {
                [sequelize_1['Op']['or']]: [
                    r[J(0xf6)],
                    r[J(0xf5)]
                ]
            }, w = {};
        w[K(0x113)] = v, w[K(0xec)] = m, w[K(0x118)] = o['id'];
        const x = {};
        x[K(0xfb)] = w, u = await Ticket_1[K(0x129)][J(0x120)](x);
        !u && (u = await Ticket_1[K(0x129)][K(0x119)]({
            'contactId': o['id'],
            'status': r[J(0xf6)],
            'isGroup': o[J(0x128)],
            'userId': l,
            'tenantId': m,
            'unreadMessages': 0x0,
            'whatsappId': t[J(0x123)],
            'lastMessage': n[J(0xfe)],
            'lastMessageAt': new Date()[J(0x116)](),
            'answered': !![]
        }));
        const y = {
                'body': n[J(0xfe)],
                'contactId': o['id'],
                'fromMe': !![],
                'read': !![],
                'mediaType': n?.[J(0xf8)],
                'mediaUrl': n?.[K(0x107)],
                'mediaName': n?.[K(0x107)],
                'timestamp': new Date()[J(0x116)](),
                'userId': l,
                'scheduleDate': null,
                'sendType': r[J(0x112)],
                'status': r[J(0xf5)],
                'ticketId': u['id'],
                'tenantId': m
            }, z = await Message_1[K(0x129)][J(0x119)](y), A = {};
        A[J(0xec)] = m;
        const B = {};
        B[K(0x11f)] = Ticket_1[K(0x129)], B['as'] = r[J(0x121)], B[K(0xfb)] = A, B[J(0x117)] = [r[J(0x114)]];
        const C = await Message_1[J(0x129)][K(0xf1)](z['id'], {
            'include': [
                B,
                {
                    'model': Message_1[K(0x129)],
                    'as': r[J(0x102)],
                    'include': [r[K(0x114)]]
                }
            ]
        });
        if (!C)
            throw new Error(r[K(0xee)]);
        await u[K(0xe9)]({
            'lastMessage': C[K(0xfe)],
            'lastMessageAt': new Date()[K(0x116)](),
            'answered': !![]
        }), await (0x715 + 0x2 * -0x1106 + 0xd * 0x213, queueValidation_1[J(0x129)])(u[K(0x123)], u[K(0xec)], [C]);
        const D = {};
        D[K(0xec)] = m, D[K(0x10d)] = r[J(0x10e)], D[K(0x122)] = C, (0x1371 + 0x3 * -0x2c7 + 0x3 * -0x3b4, socketEmit_1[K(0x129)])(D);
    };
exports[H(0x129)] = CreateForwardMessageService;