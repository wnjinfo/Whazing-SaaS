'use strict';
const M = b, N = b;
(function (c, d) {
    const K = b, L = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(K(0x1e8)) / (0x145 * 0x3 + -0xc5 * -0x23 + -0x1ebd) + -parseInt(K(0x1f0)) / (-0x14af + -0x1 * 0x1ae3 + 0x366 * 0xe) * (parseInt(L(0x203)) / (0x10cd + -0x8d * 0x17 + -0x41f)) + -parseInt(K(0x1fb)) / (0x2 * 0x776 + -0x12 * 0x19b + -0x4aa * -0x3) + -parseInt(L(0x1d4)) / (0x123 * 0x2 + 0x51 * -0x43 + 0x12f2) + -parseInt(L(0x1c6)) / (0x9a3 + 0x1338 + 0x79 * -0x3d) * (parseInt(L(0x1f8)) / (0x115 * 0x19 + -0x2 * 0xa67 + -0x638)) + parseInt(K(0x1fa)) / (0x5 * 0x139 + -0x1be3 + -0x2 * -0xae7) + -parseInt(L(0x218)) / (0xe68 + 0xbe3 + -0x1a42) * (-parseInt(K(0x215)) / (0x23a6 + 0x2703 + -0x4a9f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1308dd + 0xa375f + 0x2 * 0x98917));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x3fb + 0x2 * -0xe7d + -0x5 * -0x55a);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const R = [
        'pending',
        'Services/C',
        'ticket',
        'ticket_id',
        '2gubntw',
        '../Message',
        'name',
        'ient',
        'status',
        'sendMessag',
        'rvice',
        'msg',
        '2989483nuUltR',
        'bot',
        '9176968HObHhY',
        '5257156UsLttY',
        'ls/Whatsap',
        'body',
        'answered',
        'fault',
        'sendType',
        'findOne',
        'reateMessa',
        '31242joCueP',
        'contact_na',
        'Iosdp',
        'enIARestCl',
        'fromMe',
        'ber',
        'umber',
        'BUvRk',
        'getBodyMes',
        'Clients/op',
        'eToIA',
        'ensagem',
        'contactId',
        'tenantId',
        'ContactBai',
        'isGroup',
        'geSystemSe',
        'ervices/Up',
        '2557670bEdaCI',
        'walletId',
        'queue_tran',
        '63SDSumv',
        'where',
        'ls/Contact',
        'log',
        'erty',
        'from_ia',
        '../TicketS',
        '18DgbiCH',
        'WMLMj',
        'tzaZT',
        'default',
        'sage',
        'vices/help',
        'MiLNK',
        'Transfer',
        'dateQueueI',
        'defineProp',
        '__esModule',
        'leys',
        'ers/Verify',
        '__importDe',
        '2004850SmmDym',
        '../WbotSer',
        'queueId',
        '../../mode',
        'receiver_n',
        '../../rest',
        'typeMessag',
        'answer',
        'message',
        'number',
        'BNttn',
        'sender_num',
        'value',
        'HAdAd',
        'Olá',
        'primeira\x20m',
        'whatsappId',
        'is_chat_ia',
        'parse',
        'read',
        '741310MBdckv',
        'ATicket',
        'findByPk',
        'Wallet'
    ];
    a = function () {
        return R;
    };
    return a();
}
var __importDefault = this && this[M(0x1d3) + N(0x1ff)] || function (c) {
    const O = M;
    return c && c[O(0x1d0)] ? c : { 'default': c };
};
const k = {};
k[M(0x1e0)] = !![], Object[M(0x1cf) + N(0x1c3)](exports, M(0x1d0), k);
const Contact_1 = __importDefault(require(N(0x1d7) + M(0x21a))), openIARestClient_1 = require(M(0x1d9) + M(0x20c) + N(0x206) + N(0x1f3)), CreateMessageSystemService_1 = __importDefault(require(M(0x1f1) + N(0x1ed) + N(0x202) + M(0x213) + N(0x1f6))), Whatsapp_1 = __importDefault(require(N(0x1d7) + M(0x1fc) + 'p')), UpdateQueueIATicket_1 = __importDefault(require(N(0x1c5) + N(0x214) + N(0x1ce) + N(0x1e9))), ContactWallet_1 = __importDefault(require(M(0x1d7) + M(0x21a) + N(0x1eb))), VerifyContactBaileys_1 = require(N(0x1d5) + N(0x1cb) + N(0x1d2) + N(0x211) + N(0x1d1)), VerifyMensageOpenIAQueue = async (m, n, o = ![], p = ![], q, r) => {
        const P = M, Q = M, s = {};
        s[P(0x1cc)] = function (u, v) {
            return u === v;
        }, s[Q(0x1de)] = Q(0x1ec), s[P(0x20a)] = Q(0x1e3) + P(0x20e), s[Q(0x1c8)] = P(0x1e2), s[P(0x205)] = P(0x1f9), s[P(0x1c7)] = function (u, v) {
            return u == v;
        }, s[P(0x1e1)] = P(0x1cd);
        const t = s;
        if (t[Q(0x1cc)](m[Q(0x1f4)], t[P(0x1de)]) && !m[Q(0x212)] && !m[P(0x1fe)] && m[Q(0x1e5)] && n[P(0x1c4)]) {
            if (r && r[Q(0x207)])
                return;
            const u = {};
            u[P(0x20f)] = m[P(0x20f)];
            const v = {};
            v[P(0x219)] = u;
            const w = await ContactWallet_1[Q(0x1c9)][Q(0x201)](v);
            if (!!w) {
                await (0x35 * -0xb1 + 0x1cf8 + 0x7ad, UpdateQueueIATicket_1[Q(0x1c9)])(null, m, w[Q(0x216)]);
                return;
            }
            try {
                const x = await Contact_1[Q(0x1c9)][Q(0x1ea)](m[Q(0x20f)]), y = await Whatsapp_1[P(0x1c9)][P(0x1ea)](m[Q(0x1e4)]);
                let z;
                if (o) {
                    const D = {};
                    D['id'] = t[P(0x20a)], D[Q(0x204) + 'me'] = x[P(0x1f2)], D[P(0x1ef)] = m['id'], D[Q(0x1fd)] = t[Q(0x1c8)], D[Q(0x1df) + P(0x208)] = y[Q(0x1dd)], D[P(0x1d8) + Q(0x209)] = x[P(0x1dd)];
                    const E = {};
                    E[Q(0x1dc)] = D, z = await (-0x1f78 + 0x101 * 0xb + -0x7 * -0x2eb, openIARestClient_1[Q(0x1f5) + Q(0x20d)])(E);
                } else {
                    const F = await (0xdce + -0x1328 + 0x55a, VerifyContactBaileys_1[Q(0x20b) + P(0x1ca)])(r), G = {};
                    G['id'] = q['id'], G[Q(0x204) + 'me'] = x[P(0x1f2)], G[P(0x1ef)] = m['id'], G[Q(0x1fd)] = F, G[P(0x1df) + Q(0x208)] = y[P(0x1dd)], G[Q(0x1d8) + Q(0x209)] = x[P(0x1dd)];
                    const H = {};
                    H[Q(0x1dc)] = G, z = await (-0x17fa + -0x11a * 0x1c + 0x36d2, openIARestClient_1[Q(0x1f5) + P(0x20d)])(H);
                }
                z = JSON[P(0x1e6)](z);
                const A = {};
                A[P(0x1fd)] = z[Q(0x1dc)][P(0x1db)], A[P(0x207)] = !![], A[P(0x1e7)] = !![], A[Q(0x200)] = t[Q(0x205)];
                const B = A, C = {};
                C[P(0x1f7)] = B, C[Q(0x210)] = m[P(0x210)], C[P(0x1ee)] = m, C[P(0x200)] = B[Q(0x200)], C[P(0x1f4)] = t[P(0x1de)], await (0x1b83 + -0xb26 + -0x47 * 0x3b, CreateMessageSystemService_1[Q(0x1c9)])(C);
                if (t[Q(0x1c7)](z[P(0x1dc)][Q(0x1da) + 'e'], t[P(0x1e1)])) {
                    const I = p ? m[P(0x1d6)] : y[P(0x217) + 'sf'];
                    await (0x1236 + 0x1503 + 0x1 * -0x2739, UpdateQueueIATicket_1[Q(0x1c9)])(I, m);
                }
            } catch (J) {
                console[Q(0x21b)](J);
            }
        }
    };
exports[N(0x1c9)] = VerifyMensageOpenIAQueue;