'use strict';
const G = b, H = b;
(function (c, d) {
    const E = b, F = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(E(0x1ff)) / (0x3 * 0x4f4 + 0x21eb + -0x30c6 * 0x1) * (parseInt(F(0x204)) / (-0x23 * 0x90 + 0x183e + -0xc * 0x61)) + parseInt(F(0x1d9)) / (-0xca1 + -0x1ac4 + 0x2768) * (parseInt(E(0x1f0)) / (0x45 * 0x62 + -0x1 * 0xc9d + -0xdc9 * 0x1)) + -parseInt(E(0x215)) / (0x4f3 + 0x1808 + -0x2 * 0xe7b) + parseInt(F(0x1f2)) / (0x3b9 * 0x9 + -0x1091 * 0x1 + -0x10ea) + parseInt(E(0x1e0)) / (0x122d + -0x2 * -0xb61 + -0x28e8) * (parseInt(E(0x1d7)) / (0xed7 + 0x1 * 0xa6f + 0x1 * -0x193e)) + -parseInt(F(0x1e9)) / (-0xab9 * -0x2 + 0x26 * -0xce + -0x92b * -0x1) * (-parseInt(E(0x1df)) / (-0xfb0 + 0xf9a * 0x2 + -0xf7a)) + -parseInt(E(0x1f3)) / (0xff7 + 0x1 * -0x2de + -0xd0e);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x18ada0 + -0x65 * -0x3459 + 0x12 * -0x1c841));
var __importDefault = this && this[G(0x20f) + G(0x200)] || function (c) {
    const I = G;
    return c && c[I(0x216)] ? c : { 'default': c };
};
const k = {};
k[H(0x1fd)] = !![], Object[G(0x1f6) + G(0x212)](exports, H(0x216), k);
const sequelize_1 = require(G(0x1e3)), socketEmit_1 = __importDefault(require(G(0x1da) + G(0x1dc) + G(0x1eb))), Message_1 = __importDefault(require(H(0x1e5) + G(0x20c))), Ticket_1 = __importDefault(require(H(0x1e5) + H(0x1f4))), ShowTicketService_1 = __importDefault(require(H(0x1f5) + G(0x1e8) + H(0x1fc) + H(0x1f7))), queueValidation_1 = __importDefault(require(H(0x1f1) + G(0x213) + G(0x20b))), CreateForwardMessageService = async ({
        userId: l,
        tenantId: m,
        message: n,
        contact: o,
        ticketIdOrigin: p
    }) => {
        const J = G, K = H, q = {};
        q[J(0x1ea)] = J(0x1ef), q[J(0x1fa)] = J(0x20d), q[J(0x1fe)] = K(0x205), q[K(0x1db)] = K(0x209), q[K(0x1de)] = J(0x206), q[J(0x1e7)] = K(0x208), q[J(0x201)] = J(0x1ed) + J(0x1fb) + J(0x20a), q[J(0x1e1)] = J(0x1ec) + 'e';
        const r = q, s = {};
        s['id'] = p, s[J(0x1e4)] = m;
        const t = await (0x5b * 0x41 + 0x2 * 0x1372 + 0x3b * -0x10d, ShowTicketService_1[J(0x207)])(s);
        let u;
        const v = {
                [sequelize_1['Op']['or']]: [
                    r[K(0x1ea)],
                    r[J(0x1fa)]
                ]
            }, w = {};
        w[J(0x211)] = v, w[K(0x1e4)] = m, w[J(0x202)] = o['id'];
        const x = {};
        x[K(0x214)] = w, u = await Ticket_1[K(0x207)][J(0x1ee)](x);
        !u && (u = await Ticket_1[J(0x207)][J(0x20e)]({
            'contactId': o['id'],
            'status': r[J(0x1ea)],
            'isGroup': o[K(0x210)],
            'userId': l,
            'tenantId': m,
            'unreadMessages': 0x0,
            'whatsappId': t[J(0x1d5)],
            'lastMessage': n[K(0x1dd)],
            'lastMessageAt': new Date()[K(0x217)](),
            'answered': !![]
        }));
        const y = {
                'body': n[K(0x1dd)],
                'contactId': o['id'],
                'fromMe': !![],
                'read': !![],
                'mediaType': n?.[J(0x1d8)],
                'mediaUrl': n?.[J(0x1d6)],
                'mediaName': n?.[K(0x1d6)],
                'timestamp': new Date()[J(0x217)](),
                'userId': l,
                'scheduleDate': null,
                'sendType': r[K(0x1fe)],
                'status': r[K(0x1fa)],
                'ticketId': u['id'],
                'tenantId': m
            }, z = await Message_1[J(0x207)][K(0x20e)](y), A = {};
        A[K(0x1e4)] = m;
        const B = {};
        B[K(0x1e6)] = Ticket_1[K(0x207)], B['as'] = r[J(0x1db)], B[J(0x214)] = A, B[J(0x1f9)] = [r[J(0x1de)]];
        const C = await Message_1[K(0x207)][K(0x1f8)](z['id'], {
            'include': [
                B,
                {
                    'model': Message_1[K(0x207)],
                    'as': r[K(0x1e7)],
                    'include': [r[J(0x1de)]]
                }
            ]
        });
        if (!C)
            throw new Error(r[K(0x201)]);
        await u[J(0x203)]({
            'lastMessage': C[K(0x1dd)],
            'lastMessageAt': new Date()[K(0x217)](),
            'answered': !![]
        }), await (-0x77e + -0x18b7 + 0x2035, queueValidation_1[K(0x207)])(u[K(0x1d5)], u[J(0x1e4)], [C]);
        const D = {};
        D[K(0x1e4)] = m, D[K(0x1d4)] = r[K(0x1e1)], D[J(0x1e2)] = C, (0x9e * 0x37 + -0x1f84 + -0x26e, socketEmit_1[J(0x207)])(D);
    };
exports[G(0x207)] = CreateForwardMessageService;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x5 * -0x4bf + -0x205 * 0x13 + 0x3fee);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const L = [
        'QCZMb',
        'NG_MESSAGE',
        'owTicketSe',
        'value',
        'TPqdH',
        '3970iONOyR',
        'fault',
        'dTUIe',
        'contactId',
        'update',
        '404FspECi',
        'chat',
        'contact',
        'default',
        'quotedMsg',
        'ticket',
        '_SYSTEM',
        'idation',
        'ls/Message',
        'pending',
        'create',
        '__importDe',
        'isGroup',
        'status',
        'erty',
        's/queueVal',
        'where',
        '508350xVzxsO',
        '__esModule',
        'getTime',
        'type',
        'whatsappId',
        'mediaName',
        '640JeWfgc',
        'mediaType',
        '63LsgWpJ',
        '../../help',
        'ZIYBR',
        'ers/socket',
        'body',
        'uaRIp',
        '2070170BgyxOV',
        '145460sPFPzC',
        'ZJvzB',
        'payload',
        'sequelize',
        'tenantId',
        '../../mode',
        'model',
        'djXHI',
        'ervices/Sh',
        '9LDljaF',
        'MummD',
        'Emit',
        'chat:creat',
        'ERR_CREATI',
        'findOne',
        'open',
        '102356puAzdr',
        '../../util',
        '9077028UwZjmC',
        '23623809kyBiWI',
        'ls/Ticket',
        '../TicketS',
        'defineProp',
        'rvice',
        'findByPk',
        'include'
    ];
    a = function () {
        return L;
    };
    return a();
}