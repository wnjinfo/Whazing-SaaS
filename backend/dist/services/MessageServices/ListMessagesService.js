'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(B(0x1ec)) / (0x55c * -0x5 + -0x4 * -0x859 + -0x697) * (-parseInt(B(0x1db)) / (-0x1d * 0xcb + -0x20ae * -0x1 + 0x9ad * -0x1)) + -parseInt(C(0x1dc)) / (-0x1d14 + 0x2 * -0x367 + 0x9 * 0x3fd) * (parseInt(B(0x1e3)) / (-0x1162 + -0x25ec + 0x3752 * 0x1)) + parseInt(C(0x1e8)) / (-0x2178 + 0x3 * -0xba + 0x23ab) * (parseInt(B(0x1e7)) / (-0x246c * 0x1 + -0x1f37 + 0x43a9)) + parseInt(B(0x1cc)) / (0x1832 + 0x1e41 * -0x1 + 0x616) * (parseInt(C(0x1e2)) / (-0x6 * -0x22d + 0x1bd1 * 0x1 + 0xf * -0x2b9)) + -parseInt(B(0x1ea)) / (0x11da + 0xf1e + -0x20ef) * (parseInt(B(0x1bd)) / (-0x10d2 * 0x2 + 0xce3 * -0x1 + -0x2e91 * -0x1)) + -parseInt(B(0x1cf)) / (0x1 * 0xc35 + 0xa9a + 0xb62 * -0x2) + parseInt(B(0x1de)) / (0xbc0 + 0x35 * 0x56 + -0x9d6 * 0x3) * (parseInt(B(0x1d4)) / (-0x78 + -0x1b7c + 0x1c01));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xb * 0x4ecd + 0x75b * -0xb5 + 0xef264));
var __importDefault = this && this[D(0x1bc) + D(0x1cd)] || function (c) {
    const F = D;
    return c && c[F(0x1ca)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 * 0xbdb + 0x2650 + -0x3c50);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[E(0x1c5)] = !![], Object[D(0x1e6) + E(0x1ee)](exports, E(0x1ca), k);
const AppError_1 = __importDefault(require(D(0x1df) + D(0x1be) + 'r')), Message_1 = __importDefault(require(E(0x1c9) + E(0x1bf))), MessageOffLine_1 = __importDefault(require(E(0x1c9) + D(0x1bf) + D(0x1e0))), Ticket_1 = __importDefault(require(D(0x1c9) + D(0x1f0))), ShowTicketService_1 = __importDefault(require(D(0x1d9) + D(0x1e5) + D(0x1cb) + D(0x1b6))), ListMessagesService = async ({
        pageNumber: pageNumber = '1',
        ticketId: i,
        tenantId: j
    }) => {
        const G = D, H = E, l = {};
        l[G(0x1d3)] = G(0x1c8) + G(0x1dd), l[H(0x1c1)] = function (z, A) {
            return z * A;
        }, l[G(0x1e4)] = function (z, A) {
            return z - A;
        }, l[G(0x1c7)] = H(0x1e9), l[H(0x1d7)] = G(0x1d5), l[G(0x1c0)] = H(0x1c6), l[G(0x1d0)] = H(0x1ba), l[G(0x1b9)] = function (z, A) {
            return z === A;
        }, l[G(0x1bb)] = function (z, A) {
            return z > A;
        }, l[G(0x1ef)] = function (z, A) {
            return z + A;
        };
        const m = l, n = {};
        n['id'] = i, n[G(0x1b8)] = j;
        const o = await (0x24 * 0x98 + -0x4 * 0x3e5 + -0x5cc, ShowTicketService_1[H(0x1ce)])(n);
        if (!o)
            throw new AppError_1[(G(0x1ce))](m[G(0x1d3)], 0x11d7 + -0x1139 * 0x2 + 0x13 * 0xf5);
        const p = -0x3c6 + -0x447 + -0x29 * -0x33, q = m[G(0x1c1)](p, m[G(0x1e4)](+pageNumber, -0x6f8 * 0x4 + -0x1523 + 0x3104 * 0x1)), r = {};
        r[H(0x1e1)] = o[H(0x1e1)], r[G(0x1f1)] = o[G(0x1f1)], r[H(0x1c3)] = o[H(0x1c3)], r['id'] = o['id'];
        const s = {};
        s[H(0x1ed)] = Ticket_1[G(0x1ce)], s[H(0x1c4)] = r, s[H(0x1eb)] = !![];
        const {
            count: t,
            rows: u
        } = await Message_1[G(0x1ce)][H(0x1d8) + G(0x1d1)]({
            'limit': p,
            'include': [
                m[H(0x1c7)],
                {
                    'model': Message_1[H(0x1ce)],
                    'as': m[G(0x1d7)],
                    'include': [m[H(0x1c7)]]
                },
                s
            ],
            'offset': q,
            'order': [[
                    m[G(0x1c0)],
                    m[G(0x1d0)]
                ]]
        });
        let v = [];
        if (m[G(0x1b9)](+pageNumber, 0x26b + 0xc02 + -0xe6c)) {
            const x = {};
            x[H(0x1d6)] = i;
            const y = {};
            y[H(0x1c4)] = x, y[G(0x1da)] = [
                m[G(0x1c7)],
                {
                    'model': Message_1[G(0x1ce)],
                    'as': m[G(0x1d7)],
                    'include': [m[G(0x1c7)]]
                }
            ], y[G(0x1b7)] = [[
                    m[H(0x1c0)],
                    m[H(0x1d0)]
                ]];
            const {rows: z} = await MessageOffLine_1[H(0x1ce)][H(0x1d8) + H(0x1d1)](y);
            v = z;
        }
        const w = m[G(0x1bb)](t, m[H(0x1ef)](q, u[G(0x1d2)]));
        return {
            'messages': u[H(0x1c2)](),
            'messagesOffLine': v,
            'ticket': o,
            'count': t,
            'hasMore': w
        };
    };
function a() {
    const I = [
        '__esModule',
        'owTicketSe',
        '8631axIMMn',
        'fault',
        'default',
        '3007081jWSfww',
        'iyBVs',
        'ntAll',
        'length',
        'eklsA',
        '208qIsqRD',
        'quotedMsg',
        'ticketId',
        'ZpDLC',
        'findAndCou',
        '../TicketS',
        'include',
        '3522IheLzW',
        '45kmLGIO',
        'KET_FOUND',
        '435192Ntalht',
        '../../erro',
        'OffLine',
        'queueId',
        '5000EQAoSr',
        '112200qNWRaE',
        'xxBbh',
        'ervices/Sh',
        'defineProp',
        '6IRqxGH',
        '134910LSQaTV',
        'contact',
        '18ffdgvT',
        'required',
        '50kYBrDM',
        'model',
        'erty',
        'MhHKo',
        'ls/Ticket',
        'contactId',
        'rvice',
        'order',
        'tenantId',
        'sQeyq',
        'DESC',
        'Vieof',
        '__importDe',
        '894310dbHeAm',
        'rs/AppErro',
        'ls/Message',
        'MjYVv',
        'lCPXA',
        'reverse',
        'whatsappId',
        'where',
        'value',
        'createdAt',
        'Eolvt',
        'ERR_NO_TIC',
        '../../mode'
    ];
    a = function () {
        return I;
    };
    return a();
}
exports[E(0x1ce)] = ListMessagesService;