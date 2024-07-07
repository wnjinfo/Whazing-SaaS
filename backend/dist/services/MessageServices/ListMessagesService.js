'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(B(0x1bd)) / (0x2616 + 0x99b * 0x1 + 0x8 * -0x5f6) + -parseInt(B(0x1e6)) / (-0xb9 * 0x25 + -0x537 * -0x2 + 0x1051) * (-parseInt(B(0x1b3)) / (0x32 + -0x192f * 0x1 + 0xa0 * 0x28)) + -parseInt(B(0x1c2)) / (0xf01 + 0x242c + 0x3329 * -0x1) * (-parseInt(B(0x1b5)) / (0x1f9f + -0x876 + -0x1724)) + parseInt(B(0x1cd)) / (-0x8 * -0x4d4 + -0x2201 + -0x499) * (parseInt(C(0x1ae)) / (0x2b * 0xe + 0xe39 + 0x584 * -0x3)) + -parseInt(B(0x1c6)) / (-0x1 * -0x21d6 + 0xef8 + -0x30c6) * (-parseInt(C(0x1da)) / (0x2 * 0x99d + -0xf12 + -0x1 * 0x41f)) + -parseInt(C(0x1b0)) / (0x77b + 0xb * 0x1af + -0x19f6) + -parseInt(C(0x1b8)) / (0x3 * 0x563 + 0x2374 + -0x3392);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4f8dc + -0x5df80 + -0xf2241 * -0x1));
var __importDefault = this && this[D(0x1ba) + D(0x1af)] || function (c) {
    const F = D;
    return c && c[F(0x1d6)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2608 + -0x13db + 0x1 * -0x107f);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
function a() {
    const I = [
        '126840DwIGMg',
        'tenantId',
        'TbUBZ',
        '31170LVjItD',
        'queueId',
        '2745vSkfzW',
        'contact',
        'ls/Ticket',
        '4945061YvnKzy',
        '../TicketS',
        '__importDe',
        'rvice',
        'OffLine',
        '132746xrKtkU',
        'dwerI',
        'where',
        'contactId',
        'include',
        '100QZFNlm',
        'nSCck',
        'EdwRq',
        'value',
        '16GVUKel',
        'owTicketSe',
        'quotedMsg',
        '../../mode',
        'HilUO',
        'order',
        'ervices/Sh',
        '6zrvIKB',
        'TJGSD',
        'defineProp',
        'HxXpS',
        'HzxWl',
        'erty',
        'whatsappId',
        'ls/Message',
        'length',
        '__esModule',
        'reverse',
        '../../erro',
        'createdAt',
        '1313019SXpChw',
        'ntAll',
        'ticketId',
        'KET_FOUND',
        'ERR_NO_TIC',
        'findAndCou',
        'model',
        'rs/AppErro',
        'kyFPo',
        'DESC',
        'required',
        'cQoDy',
        '30faNWpL',
        'default',
        '2902795FrRuLs',
        'fault'
    ];
    a = function () {
        return I;
    };
    return a();
}
k[D(0x1c5)] = !![], Object[D(0x1cf) + D(0x1d2)](exports, E(0x1d6), k);
const AppError_1 = __importDefault(require(E(0x1d8) + D(0x1e1) + 'r')), Message_1 = __importDefault(require(D(0x1c9) + E(0x1d4))), MessageOffLine_1 = __importDefault(require(E(0x1c9) + D(0x1d4) + D(0x1bc))), Ticket_1 = __importDefault(require(E(0x1c9) + D(0x1b7))), ShowTicketService_1 = __importDefault(require(E(0x1b9) + D(0x1cc) + D(0x1c7) + E(0x1bb))), ListMessagesService = async ({
        pageNumber: pageNumber = '1',
        ticketId: i,
        tenantId: j
    }) => {
        const G = E, H = D, l = {};
        l[G(0x1d1)] = G(0x1de) + G(0x1dd), l[H(0x1ce)] = function (z, A) {
            return z * A;
        }, l[H(0x1be)] = function (z, A) {
            return z - A;
        }, l[G(0x1e2)] = H(0x1b6), l[H(0x1e5)] = G(0x1c8), l[G(0x1d0)] = H(0x1d9), l[H(0x1c4)] = H(0x1e3), l[H(0x1c3)] = function (z, A) {
            return z === A;
        }, l[G(0x1b2)] = function (z, A) {
            return z > A;
        }, l[G(0x1ca)] = function (z, A) {
            return z + A;
        };
        const m = l, n = {};
        n['id'] = i, n[H(0x1b1)] = j;
        const o = await (0x1d9 + 0x5b1 * 0x5 + -0x1e4e, ShowTicketService_1[H(0x1e7)])(n);
        if (!o)
            throw new AppError_1[(H(0x1e7))](m[H(0x1d1)], 0x38e + -0xd * 0x1f1 + -0x18d * -0xf);
        const p = 0x614 * -0x2 + 0x477 + 0x7cf, q = m[H(0x1ce)](p, m[H(0x1be)](+pageNumber, 0x1 * 0xe71 + -0x7 * -0x544 + 0x10c * -0x31)), r = {};
        r[G(0x1b4)] = o[H(0x1b4)], r[H(0x1c0)] = o[G(0x1c0)], r[H(0x1d3)] = o[H(0x1d3)], r['id'] = o['id'];
        const s = {};
        s[G(0x1e0)] = Ticket_1[H(0x1e7)], s[G(0x1bf)] = r, s[H(0x1e4)] = !![];
        const {
            count: t,
            rows: u
        } = await Message_1[G(0x1e7)][H(0x1df) + H(0x1db)]({
            'limit': p,
            'include': [
                m[G(0x1e2)],
                {
                    'model': Message_1[G(0x1e7)],
                    'as': m[G(0x1e5)],
                    'include': [m[G(0x1e2)]]
                },
                s
            ],
            'offset': q,
            'order': [[
                    m[H(0x1d0)],
                    m[G(0x1c4)]
                ]]
        });
        let v = [];
        if (m[G(0x1c3)](+pageNumber, -0x38e + -0x1c3c + 0x1fcb)) {
            const x = {};
            x[G(0x1dc)] = i;
            const y = {};
            y[G(0x1bf)] = x, y[H(0x1c1)] = [
                m[H(0x1e2)],
                {
                    'model': Message_1[H(0x1e7)],
                    'as': m[H(0x1e5)],
                    'include': [m[G(0x1e2)]]
                }
            ], y[G(0x1cb)] = [[
                    m[H(0x1d0)],
                    m[G(0x1c4)]
                ]];
            const {rows: z} = await MessageOffLine_1[H(0x1e7)][G(0x1df) + H(0x1db)](y);
            v = z;
        }
        const w = m[H(0x1b2)](t, m[G(0x1ca)](q, u[H(0x1d5)]));
        return {
            'messages': u[H(0x1d7)](),
            'messagesOffLine': v,
            'ticket': o,
            'count': t,
            'hasMore': w
        };
    };
exports[E(0x1e7)] = ListMessagesService;