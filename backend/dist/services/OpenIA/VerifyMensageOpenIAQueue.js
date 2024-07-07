'use strict';
const M = b, N = b;
(function (c, d) {
    const K = b, L = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(K(0x1c1)) / (-0x2e7 * -0xa + -0x1eb8 + 0x1b3) * (parseInt(L(0x195)) / (-0x320 + 0x11f5 * 0x2 + 0x419 * -0x8)) + parseInt(L(0x1ea)) / (-0x259 + -0x5ee + 0x2 * 0x425) + -parseInt(L(0x1d4)) / (-0x12bb + 0x1a4d * -0x1 + -0xf04 * -0x3) * (parseInt(L(0x1a8)) / (-0x15 * 0xc3 + 0x38c * -0xb + -0x6 * -0x92c)) + parseInt(L(0x1ec)) / (0x22a2 + -0x250f + 0x273) + -parseInt(L(0x1ab)) / (0x1 * -0x13a3 + -0x16b1 + 0x2a5b) + -parseInt(K(0x1d3)) / (-0x12c1 + -0xf78 + -0xb6b * -0x3) + parseInt(K(0x1d9)) / (0x26d5 * -0x1 + -0x35c + 0x2a3a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x25daa + 0x46129 * -0x1 + 0x8f5af));
function a() {
    const R = [
        'eToIA',
        'Services/C',
        'contact_na',
        'yuMIX',
        '1Aekiif',
        'pending',
        'tenantId',
        'vices/help',
        'bot',
        'status',
        'body',
        'number',
        'log',
        'KTWSk',
        'GjwBh',
        'ervices/Up',
        'default',
        '../../rest',
        'Wallet',
        '../../mode',
        'answer',
        'Transfer',
        '1022448UndiMe',
        '16lfjNfs',
        'walletId',
        'read',
        'where',
        'HWLVT',
        '5760108CKmugv',
        'rvice',
        'dateQueueI',
        'ls/Whatsap',
        'value',
        'answered',
        'name',
        'ContactBai',
        'ticket',
        'defineProp',
        'ticket_id',
        'queue_tran',
        'typeMessag',
        'message',
        'receiver_n',
        'erty',
        '../Message',
        '492822VcYaiQ',
        'geSystemSe',
        '91944oRacxd',
        '288104xzktDA',
        'ATicket',
        'ient',
        'getBodyMes',
        'reateMessa',
        'sendMessag',
        'leys',
        'queueId',
        'MsbSp',
        'msg',
        'sendType',
        '../WbotSer',
        'Olá',
        'ber',
        'parse',
        'findByPk',
        'fromMe',
        'sender_num',
        'ensagem',
        '184120ZqyiEM',
        '__esModule',
        'from_ia',
        '1787380gZSoic',
        'umber',
        'Clients/op',
        'bxQuA',
        'fault',
        'enIARestCl',
        'ls/Contact',
        'contactId',
        'sage',
        '../TicketS',
        'ers/Verify',
        'is_chat_ia',
        'findOne',
        'whatsappId',
        'primeira\x20m',
        '__importDe',
        'isGroup',
        'cNrPZ'
    ];
    a = function () {
        return R;
    };
    return a();
}
var __importDefault = this && this[M(0x1ba) + M(0x1af)] || function (c) {
    const O = M;
    return c && c[O(0x1a9)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x5f * -0x46 + -0xa9d + 0x4 * 0x98b);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[M(0x1dd)] = !![], Object[N(0x1e2) + N(0x1e8)](exports, N(0x1a9), k);
const Contact_1 = __importDefault(require(N(0x1d0) + N(0x1b1))), openIARestClient_1 = require(M(0x1ce) + N(0x1ad) + M(0x1b0) + M(0x197)), CreateMessageSystemService_1 = __importDefault(require(M(0x1e9) + N(0x1be) + M(0x199) + M(0x1eb) + M(0x1da))), Whatsapp_1 = __importDefault(require(N(0x1d0) + N(0x1dc) + 'p')), UpdateQueueIATicket_1 = __importDefault(require(M(0x1b4) + N(0x1cc) + M(0x1db) + M(0x196))), ContactWallet_1 = __importDefault(require(N(0x1d0) + N(0x1b1) + N(0x1cf))), VerifyContactBaileys_1 = require(M(0x1a0) + N(0x1c4) + M(0x1b5) + M(0x1e0) + N(0x19b)), VerifyMensageOpenIAQueue = async (m, n, o = ![], p = ![], q, r) => {
        const P = M, Q = M, s = {};
        s[P(0x1d8)] = function (u, v) {
            return u === v;
        }, s[Q(0x1cb)] = P(0x1c2), s[Q(0x1bc)] = P(0x1b9) + P(0x1a7), s[P(0x1ca)] = P(0x1a1), s[P(0x1ae)] = P(0x1c5), s[P(0x1c0)] = function (u, v) {
            return u == v;
        }, s[P(0x19d)] = Q(0x1d2);
        const t = s;
        if (t[P(0x1d8)](m[Q(0x1c6)], t[Q(0x1cb)]) && !m[P(0x1bb)] && !m[Q(0x1de)] && m[P(0x1b6)] && n[P(0x1aa)]) {
            if (r && r[Q(0x1a5)])
                return;
            const u = {};
            u[P(0x1b2)] = m[P(0x1b2)];
            const v = {};
            v[P(0x1d7)] = u;
            const w = await ContactWallet_1[P(0x1cd)][Q(0x1b7)](v);
            if (!!w) {
                await (-0x2 * 0xb7 + 0x1 * -0x19b + 0x309, UpdateQueueIATicket_1[P(0x1cd)])(null, m, w[P(0x1d5)]);
                return;
            }
            try {
                const x = await Contact_1[P(0x1cd)][P(0x1a4)](m[P(0x1b2)]), y = await Whatsapp_1[Q(0x1cd)][P(0x1a4)](m[P(0x1b8)]);
                let z;
                if (o) {
                    const D = {};
                    D['id'] = t[P(0x1bc)], D[Q(0x1bf) + 'me'] = x[P(0x1df)], D[P(0x1e3)] = m['id'], D[Q(0x1c7)] = t[P(0x1ca)], D[P(0x1a6) + P(0x1a2)] = y[P(0x1c8)], D[Q(0x1e7) + P(0x1ac)] = x[Q(0x1c8)];
                    const E = {};
                    E[Q(0x1e6)] = D, z = await (0x267a + -0x534 + -0x1 * 0x2146, openIARestClient_1[P(0x19a) + P(0x1bd)])(E);
                } else {
                    const F = await (-0xcb2 + -0x1b9d + -0x1 * -0x284f, VerifyContactBaileys_1[P(0x198) + Q(0x1b3)])(r), G = {};
                    G['id'] = q['id'], G[P(0x1bf) + 'me'] = x[P(0x1df)], G[P(0x1e3)] = m['id'], G[Q(0x1c7)] = F, G[P(0x1a6) + Q(0x1a2)] = y[Q(0x1c8)], G[Q(0x1e7) + Q(0x1ac)] = x[P(0x1c8)];
                    const H = {};
                    H[Q(0x1e6)] = G, z = await (-0x788 * 0x4 + -0x64 * 0x7 + -0x2 * -0x106e, openIARestClient_1[Q(0x19a) + P(0x1bd)])(H);
                }
                z = JSON[Q(0x1a3)](z);
                const A = {};
                A[P(0x1c7)] = z[Q(0x1e6)][Q(0x1d1)], A[Q(0x1a5)] = !![], A[P(0x1d6)] = !![], A[Q(0x19f)] = t[P(0x1ae)];
                const B = A, C = {};
                C[P(0x19e)] = B, C[P(0x1c3)] = m[P(0x1c3)], C[Q(0x1e1)] = m, C[P(0x19f)] = B[P(0x19f)], C[Q(0x1c6)] = t[P(0x1cb)], await (0x23 * -0xa1 + -0x41 * -0x32 + -0x1dd * -0x5, CreateMessageSystemService_1[Q(0x1cd)])(C);
                if (t[Q(0x1c0)](z[P(0x1e6)][P(0x1e5) + 'e'], t[Q(0x19d)])) {
                    const I = p ? m[Q(0x19c)] : y[P(0x1e4) + 'sf'];
                    await (0x18 * 0xca + 0x736 + 0x1a26 * -0x1, UpdateQueueIATicket_1[Q(0x1cd)])(I, m);
                }
            } catch (J) {
                console[Q(0x1c9)](J);
            }
        }
    };
exports[M(0x1cd)] = VerifyMensageOpenIAQueue;