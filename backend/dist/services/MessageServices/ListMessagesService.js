'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(B(0x113)) / (-0x2582 + 0x1a21 + 0xb62) + -parseInt(C(0x10e)) / (0x54b + 0x5 * -0x177 + 0x20a) * (parseInt(C(0x142)) / (0x1225 + -0x22bc + -0x1a9 * -0xa)) + -parseInt(C(0x121)) / (-0x496 * -0x2 + -0xec6 + 0x59e) * (parseInt(C(0x132)) / (0x18a4 + -0x6 * 0xc1 + 0x31 * -0x69)) + parseInt(B(0x127)) / (0x174d + -0x2 * 0x4e7 + 0x1 * -0xd79) * (-parseInt(B(0x139)) / (-0xcfc + -0x1b4f + 0x2852)) + -parseInt(B(0x118)) / (-0xd11 + -0x2 * 0x12f5 + 0x9 * 0x5ab) + -parseInt(C(0x13c)) / (0x3f * -0x1b + 0x1551 + 0x1 * -0xea3) * (parseInt(B(0x133)) / (0x24b * 0x7 + -0x21a3 + 0x2f * 0x60)) + parseInt(C(0x125)) / (-0x2 * 0xe1a + -0x124d + 0x2e8c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2d02 * -0x4e + 0x36c4 * 0x29 + -0xf959f * 0x1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1ea1 + -0x33a + 0x22e6);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[D(0x137) + E(0x129)] || function (c) {
    const F = D;
    return c && c[F(0x126)] ? c : { 'default': c };
};
function a() {
    const I = [
        '__esModule',
        '1280670XHNjtl',
        'gmMyF',
        'fault',
        'queueId',
        'ls/Message',
        'contact',
        'owTicketSe',
        'DAagX',
        'quotedMsg',
        'ERR_NO_TIC',
        'DESC',
        '65qduaLm',
        '226130xvVQZv',
        'required',
        'defineProp',
        '../TicketS',
        '__importDe',
        'model',
        '7BxwYWl',
        '../../mode',
        'FJmXf',
        '72XSUWiE',
        'createdAt',
        'fzOvj',
        'value',
        'default',
        'order',
        '20541WGkVkK',
        'KET_FOUND',
        'pRDtu',
        'contactId',
        'findAndCou',
        'ls/Ticket',
        '146qcWOuS',
        'OffLine',
        'ervices/Sh',
        'include',
        'tenantId',
        '156077pfuCcv',
        'erty',
        'oSfua',
        'ryWLK',
        'nPJDK',
        '2428456tNVNcZ',
        'rvice',
        'reverse',
        'length',
        'Hctnf',
        '../../erro',
        'whatsappId',
        'ticketId',
        'ntAll',
        '34492RMatzW',
        'rs/AppErro',
        'gvmAW',
        'where',
        '21099166WoRaSo'
    ];
    a = function () {
        return I;
    };
    return a();
}
const k = {};
k[D(0x13f)] = !![], Object[D(0x135) + E(0x114)](exports, D(0x126), k);
const AppError_1 = __importDefault(require(D(0x11d) + D(0x122) + 'r')), Message_1 = __importDefault(require(D(0x13a) + D(0x12b))), MessageOffLine_1 = __importDefault(require(D(0x13a) + E(0x12b) + D(0x10f))), Ticket_1 = __importDefault(require(E(0x13a) + D(0x10d))), ShowTicketService_1 = __importDefault(require(D(0x136) + E(0x110) + E(0x12d) + D(0x119))), ListMessagesService = async ({
        pageNumber: pageNumber = '1',
        ticketId: i,
        tenantId: j
    }) => {
        const G = E, H = D, l = {};
        l[G(0x116)] = H(0x130) + H(0x143), l[H(0x13b)] = function (z, A) {
            return z * A;
        }, l[G(0x13e)] = function (z, A) {
            return z - A;
        }, l[G(0x123)] = H(0x12c), l[H(0x115)] = G(0x12f), l[H(0x11c)] = G(0x13d), l[H(0x144)] = H(0x131), l[G(0x128)] = function (z, A) {
            return z === A;
        }, l[G(0x117)] = function (z, A) {
            return z > A;
        }, l[G(0x12e)] = function (z, A) {
            return z + A;
        };
        const m = l, n = {};
        n['id'] = i, n[G(0x112)] = j;
        const o = await (-0x3c1 + 0xbb1 + -0x7f0, ShowTicketService_1[H(0x140)])(n);
        if (!o)
            throw new AppError_1[(G(0x140))](m[G(0x116)], 0x3b6 + 0x4d * 0x3a + 0xe * -0x166);
        const p = 0x1 * -0x22b7 + -0x6a1 * -0x1 + 0x1c34, q = m[H(0x13b)](p, m[G(0x13e)](+pageNumber, -0x1dcf * 0x1 + 0x17 * 0x17d + -0x46b)), r = {};
        r[G(0x12a)] = o[G(0x12a)], r[G(0x10b)] = o[G(0x10b)], r[G(0x11e)] = o[G(0x11e)], r['id'] = o['id'];
        const s = {};
        s[H(0x138)] = Ticket_1[H(0x140)], s[H(0x124)] = r, s[G(0x134)] = !![];
        const {
            count: t,
            rows: u
        } = await Message_1[H(0x140)][H(0x10c) + G(0x120)]({
            'limit': p,
            'include': [
                m[G(0x123)],
                {
                    'model': Message_1[H(0x140)],
                    'as': m[G(0x115)],
                    'include': [m[H(0x123)]]
                },
                s
            ],
            'offset': q,
            'order': [[
                    m[G(0x11c)],
                    m[H(0x144)]
                ]]
        });
        let v = [];
        if (m[H(0x128)](+pageNumber, -0x43 * -0x53 + -0x1599 + -0x1f)) {
            const x = {};
            x[G(0x11f)] = i;
            const y = {};
            y[G(0x124)] = x, y[G(0x111)] = [
                m[H(0x123)],
                {
                    'model': Message_1[H(0x140)],
                    'as': m[G(0x115)],
                    'include': [m[H(0x123)]]
                }
            ], y[H(0x141)] = [[
                    m[H(0x11c)],
                    m[H(0x144)]
                ]];
            const {rows: z} = await MessageOffLine_1[H(0x140)][G(0x10c) + G(0x120)](y);
            v = z;
        }
        const w = m[H(0x117)](t, m[H(0x12e)](q, u[H(0x11b)]));
        return {
            'messages': u[H(0x11a)](),
            'messagesOffLine': v,
            'ticket': o,
            'count': t,
            'hasMore': w
        };
    };
exports[E(0x140)] = ListMessagesService;