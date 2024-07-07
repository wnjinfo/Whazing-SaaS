'use strict';
const M = b, N = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x3 * 0xa04 + -0x10 * -0x178 + 0x1e * 0x48);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const K = b, L = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(K(0x216)) / (-0xfe4 * -0x1 + 0xa * -0x3ab + 0x14cb) * (parseInt(K(0x1f6)) / (-0x112f + 0x3a4 * 0x1 + 0xd8d)) + -parseInt(L(0x228)) / (0x78d + -0x36 + -0x754) + -parseInt(K(0x20b)) / (0x1 * 0xcce + 0x149 * -0x3 + 0x1 * -0x8ef) + parseInt(K(0x1ef)) / (-0x34 * 0x35 + -0x5f * 0x7 + 0xd62) * (parseInt(K(0x210)) / (-0x4 * -0xd6 + 0x5c5 + -0x917)) + parseInt(K(0x204)) / (-0x899 + -0xc5 + 0x965) * (-parseInt(K(0x1f0)) / (-0x3d + -0x22a + 0x26f * 0x1)) + parseInt(K(0x1f1)) / (-0x85 * 0x2e + 0x1631 * -0x1 + 0x2e20) * (parseInt(K(0x230)) / (0x67 * 0x4a + -0x2b * 0x92 + 0x2 * -0x29b)) + parseInt(L(0x226)) / (-0x1420 + -0x19 * -0x151 + -0xcbe);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1f9b8 + -0x1 * 0xb6f55 + 0xc7 * 0x1d59));
var __importDefault = this && this[M(0x1f9) + N(0x206)] || function (c) {
    const O = M;
    return c && c[O(0x1f5)] ? c : { 'default': c };
};
const k = {};
k[M(0x23a)] = !![], Object[N(0x1e7) + M(0x1fb)](exports, M(0x1f5), k);
const Contact_1 = __importDefault(require(N(0x213) + N(0x203))), openIARestClient_1 = require(N(0x1fc) + M(0x232) + N(0x237) + M(0x20d)), CreateMessageSystemService_1 = __importDefault(require(N(0x23c) + M(0x1e6) + N(0x22b) + N(0x223) + N(0x209))), Whatsapp_1 = __importDefault(require(M(0x213) + M(0x220) + 'p')), UpdateQueueIATicket_1 = __importDefault(require(N(0x22a) + M(0x200) + N(0x234) + M(0x1e9))), ContactWallet_1 = __importDefault(require(N(0x213) + N(0x203) + M(0x21f))), VerifyContactBaileys_1 = require(M(0x22d) + N(0x22f) + M(0x227) + M(0x22c) + N(0x221)), VerifyMensageOpenIAQueue = async (m, n, o = ![], p = ![], q, r) => {
        const P = M, Q = M, s = {};
        s[P(0x207)] = function (u, v) {
            return u === v;
        }, s[Q(0x233)] = P(0x1e8), s[P(0x201)] = P(0x1fe) + Q(0x215), s[Q(0x202)] = P(0x1fa), s[P(0x1f3)] = Q(0x1e4), s[Q(0x21d)] = function (u, v) {
            return u == v;
        }, s[P(0x1ed)] = P(0x1ee);
        const t = s;
        if (t[Q(0x207)](m[Q(0x20c)], t[Q(0x233)]) && !m[Q(0x1fd)] && !m[Q(0x212)] && m[Q(0x21e)] && n[Q(0x217)]) {
            if (r && r[P(0x1f4)])
                return;
            const u = {};
            u[Q(0x1f7)] = m[Q(0x1f7)];
            const v = {};
            v[P(0x22e)] = u;
            const w = await ContactWallet_1[Q(0x219)][P(0x21a)](v);
            if (!!w) {
                await (0x22d1 + 0x4 * 0x59 + 0x2435 * -0x1, UpdateQueueIATicket_1[Q(0x219)])(null, m, w[Q(0x1f2)]);
                return;
            }
            try {
                const x = await Contact_1[P(0x219)][P(0x235)](m[P(0x1f7)]), y = await Whatsapp_1[Q(0x219)][Q(0x235)](m[Q(0x208)]);
                let z;
                if (o) {
                    const D = {};
                    D['id'] = t[Q(0x201)], D[P(0x1ff) + 'me'] = x[Q(0x21c)], D[P(0x229)] = m['id'], D[Q(0x1ea)] = t[P(0x202)], D[Q(0x231) + P(0x21b)] = y[P(0x1e5)], D[Q(0x238) + Q(0x205)] = x[Q(0x1e5)];
                    const E = {};
                    E[P(0x23d)] = D, z = await (0xb9b * -0x1 + 0x15eb + -0xa50, openIARestClient_1[P(0x224) + P(0x23b)])(E);
                } else {
                    const F = await (0x11e7 + 0x231 + -0x1418, VerifyContactBaileys_1[P(0x225) + Q(0x1ec)])(r), G = {};
                    G['id'] = q['id'], G[Q(0x1ff) + 'me'] = x[P(0x21c)], G[P(0x229)] = m['id'], G[Q(0x1ea)] = F, G[Q(0x231) + P(0x21b)] = y[Q(0x1e5)], G[P(0x238) + P(0x205)] = x[Q(0x1e5)];
                    const H = {};
                    H[P(0x23d)] = G, z = await (0x22d * 0xb + -0x9ab + 0x53 * -0x2c, openIARestClient_1[P(0x224) + Q(0x23b)])(H);
                }
                z = JSON[P(0x218)](z);
                const A = {};
                A[P(0x1ea)] = z[Q(0x23d)][P(0x20a)], A[Q(0x1f4)] = !![], A[Q(0x239)] = !![], A[Q(0x211)] = t[Q(0x1f3)];
                const B = A, C = {};
                C[P(0x1eb)] = B, C[P(0x20f)] = m[P(0x20f)], C[P(0x222)] = m, C[P(0x211)] = B[P(0x211)], C[P(0x20c)] = t[Q(0x233)], await (0x17b0 + -0xf87 + -0x1 * 0x829, CreateMessageSystemService_1[P(0x219)])(C);
                if (t[P(0x21d)](z[P(0x23d)][Q(0x1f8) + 'e'], t[Q(0x1ed)])) {
                    const I = p ? m[P(0x236)] : y[Q(0x214) + 'sf'];
                    await (-0x7 * -0x54a + -0xdf * -0x2b + 0x17 * -0x33d, UpdateQueueIATicket_1[P(0x219)])(I, m);
                }
            } catch (J) {
                console[P(0x20e)](J);
            }
        }
    };
exports[N(0x219)] = VerifyMensageOpenIAQueue;
function a() {
    const R = [
        'GnyIe',
        'whatsappId',
        'rvice',
        'answer',
        '2384768kLXhkG',
        'status',
        'ient',
        'log',
        'tenantId',
        '12shVVme',
        'sendType',
        'answered',
        '../../mode',
        'queue_tran',
        'ensagem',
        '18thqgOw',
        'from_ia',
        'parse',
        'default',
        'findOne',
        'ber',
        'name',
        'CsOsl',
        'is_chat_ia',
        'Wallet',
        'ls/Whatsap',
        'leys',
        'ticket',
        'geSystemSe',
        'sendMessag',
        'getBodyMes',
        '20962799kkuTAd',
        'ers/Verify',
        '3452838EbjEMI',
        'ticket_id',
        '../TicketS',
        'reateMessa',
        'ContactBai',
        '../WbotSer',
        'where',
        'vices/help',
        '3164600sALhjL',
        'sender_num',
        'Clients/op',
        'UelWB',
        'dateQueueI',
        'findByPk',
        'queueId',
        'enIARestCl',
        'receiver_n',
        'read',
        'value',
        'eToIA',
        '../Message',
        'message',
        'bot',
        'number',
        'Services/C',
        'defineProp',
        'pending',
        'ATicket',
        'body',
        'msg',
        'sage',
        'rywXS',
        'Transfer',
        '2439790TODxUU',
        '8wjfCat',
        '9jmdpyK',
        'walletId',
        'xEkJk',
        'fromMe',
        '__esModule',
        '8966NBsrOw',
        'contactId',
        'typeMessag',
        '__importDe',
        'Olá',
        'erty',
        '../../rest',
        'isGroup',
        'primeira\x20m',
        'contact_na',
        'ervices/Up',
        'yaIwV',
        'COjwW',
        'ls/Contact',
        '5278189eVBTpq',
        'umber',
        'fault'
    ];
    a = function () {
        return R;
    };
    return a();
}