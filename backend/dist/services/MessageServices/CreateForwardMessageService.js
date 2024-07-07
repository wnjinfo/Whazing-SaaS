'use strict';
const G = b, H = b;
(function (c, d) {
    const E = b, F = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(E(0x168)) / (-0xa3 * -0x35 + 0x7 * 0x163 + -0x7 * 0x635) * (-parseInt(E(0x163)) / (-0x212e + 0x544 + 0x1bec)) + -parseInt(F(0x153)) / (-0xd39 * -0x1 + -0x1 * -0x1cae + -0x29e4) + parseInt(F(0x150)) / (0xa63 + 0x7b1 + -0x44 * 0x44) * (-parseInt(F(0x15c)) / (-0x17 * -0xf9 + -0x53 * 0x37 + -0x485)) + parseInt(F(0x15a)) / (-0x861 + -0x5 * -0x46b + 0x18 * -0x92) + parseInt(E(0x166)) / (-0x10a2 + 0x5 * 0x6ac + 0x4b * -0x39) + parseInt(F(0x183)) / (0x1f02 + 0x1 * -0x4d7 + 0x1 * -0x1a23) + parseInt(F(0x187)) / (0x1189 + -0x240e + 0xbe * 0x19) * (-parseInt(E(0x177)) / (-0x59 * 0x69 + 0x416 + -0x7 * -0x4a3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x13a2f2 + -0xb1e48 * 0x2 + 0x37ed82));
function a() {
    const L = [
        'defineProp',
        'type',
        '44614mxNzRJ',
        'idation',
        'getTime',
        '7404670UMKfYj',
        'fault',
        '41kLLCdE',
        'findByPk',
        'erty',
        'ticket',
        'open',
        'quotedMsg',
        'jdTkZ',
        'TPZSy',
        'EMsSL',
        'update',
        'Bepjs',
        'ERR_CREATI',
        'ers/socket',
        'status',
        'isGroup',
        '22221310CVJcLh',
        'sequelize',
        'mediaType',
        'payload',
        'qvhZx',
        'ls/Message',
        'contact',
        'oSPjm',
        'chat',
        'value',
        '__importDe',
        'chat:creat',
        '10232024anVcdl',
        '_SYSTEM',
        'NG_MESSAGE',
        'model',
        '9LUdOFQ',
        'mediaName',
        'whatsappId',
        '../TicketS',
        'where',
        'pending',
        'rvice',
        'contactId',
        'rmffC',
        'tenantId',
        '__esModule',
        'cSDPE',
        '40952iqkkRE',
        'Emit',
        '../../help',
        '3025986lETQwk',
        'ls/Ticket',
        '../../mode',
        'findOne',
        'default',
        'owTicketSe',
        'include',
        '8044290kqcslx',
        '../../util',
        '215hRszpQ',
        'ervices/Sh',
        'body',
        'create',
        's/queueVal'
    ];
    a = function () {
        return L;
    };
    return a();
}
var __importDefault = this && this[G(0x181) + G(0x167)] || function (c) {
    const I = H;
    return c && c[I(0x14e)] ? c : { 'default': c };
};
const k = {};
k[H(0x180)] = !![], Object[H(0x161) + H(0x16a)](exports, H(0x14e), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2473 + -0x95f * -0x1 + -0x2c8b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(G(0x178)), socketEmit_1 = __importDefault(require(G(0x152) + G(0x174) + H(0x151))), Message_1 = __importDefault(require(G(0x155) + H(0x17c))), Ticket_1 = __importDefault(require(G(0x155) + H(0x154))), ShowTicketService_1 = __importDefault(require(H(0x147) + G(0x15d) + H(0x158) + G(0x14a))), queueValidation_1 = __importDefault(require(H(0x15b) + G(0x160) + H(0x164))), CreateForwardMessageService = async ({
        userId: l,
        tenantId: m,
        message: n,
        contact: o,
        ticketIdOrigin: p
    }) => {
        const J = H, K = H, q = {};
        q[J(0x14f)] = K(0x16c), q[J(0x16e)] = J(0x149), q[K(0x14c)] = K(0x17f), q[K(0x16f)] = J(0x16b), q[K(0x172)] = K(0x17d), q[J(0x170)] = K(0x16d), q[K(0x17e)] = K(0x173) + K(0x185) + K(0x184), q[J(0x17b)] = K(0x182) + 'e';
        const r = q, s = {};
        s['id'] = p, s[K(0x14d)] = m;
        const t = await (-0x16fc + -0x136f + -0x1 * -0x2a6b, ShowTicketService_1[J(0x157)])(s);
        let u;
        const v = {
                [sequelize_1['Op']['or']]: [
                    r[J(0x14f)],
                    r[K(0x16e)]
                ]
            }, w = {};
        w[K(0x175)] = v, w[K(0x14d)] = m, w[J(0x14b)] = o['id'];
        const x = {};
        x[J(0x148)] = w, u = await Ticket_1[J(0x157)][K(0x156)](x);
        !u && (u = await Ticket_1[J(0x157)][K(0x15f)]({
            'contactId': o['id'],
            'status': r[J(0x14f)],
            'isGroup': o[K(0x176)],
            'userId': l,
            'tenantId': m,
            'unreadMessages': 0x0,
            'whatsappId': t[K(0x189)],
            'lastMessage': n[J(0x15e)],
            'lastMessageAt': new Date()[J(0x165)](),
            'answered': !![]
        }));
        const y = {
                'body': n[K(0x15e)],
                'contactId': o['id'],
                'fromMe': !![],
                'read': !![],
                'mediaType': n?.[K(0x179)],
                'mediaUrl': n?.[K(0x188)],
                'mediaName': n?.[J(0x188)],
                'timestamp': new Date()[K(0x165)](),
                'userId': l,
                'scheduleDate': null,
                'sendType': r[K(0x14c)],
                'status': r[K(0x16e)],
                'ticketId': u['id'],
                'tenantId': m
            }, z = await Message_1[K(0x157)][J(0x15f)](y), A = {};
        A[J(0x14d)] = m;
        const B = {};
        B[K(0x186)] = Ticket_1[J(0x157)], B['as'] = r[J(0x16f)], B[J(0x148)] = A, B[J(0x159)] = [r[J(0x172)]];
        const C = await Message_1[J(0x157)][J(0x169)](z['id'], {
            'include': [
                B,
                {
                    'model': Message_1[K(0x157)],
                    'as': r[J(0x170)],
                    'include': [r[K(0x172)]]
                }
            ]
        });
        if (!C)
            throw new Error(r[J(0x17e)]);
        await u[J(0x171)]({
            'lastMessage': C[K(0x15e)],
            'lastMessageAt': new Date()[J(0x165)](),
            'answered': !![]
        }), await (-0xd7e + -0x2585 + -0x3303 * -0x1, queueValidation_1[K(0x157)])(u[K(0x189)], u[J(0x14d)], [C]);
        const D = {};
        D[K(0x14d)] = m, D[J(0x162)] = r[K(0x17b)], D[K(0x17a)] = C, (0x2a2 + -0x1769 + 0x14c7, socketEmit_1[J(0x157)])(D);
    };
exports[G(0x157)] = CreateForwardMessageService;