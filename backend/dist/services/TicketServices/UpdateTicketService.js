'use strict';
const a3 = b, a4 = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x7 * -0x3f5 + 0x22 * -0x13 + 0xd * -0x1d3);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const a1 = b, a2 = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(a1(0x1a3)) / (-0xa9 + -0x1 * -0x26eb + 0x2641 * -0x1) + parseInt(a2(0x1bb)) / (-0x2a * -0x9b + 0x1 * -0x608 + -0x11 * 0x124) + parseInt(a1(0x198)) / (0x208 + -0x16 * 0xfb + 0x138d) + parseInt(a1(0x1e1)) / (0xd * -0x1f7 + -0x1 * -0x13b8 + -0x5d7 * -0x1) * (-parseInt(a1(0x192)) / (-0x2287 * 0x1 + 0x22b0 + -0x3 * 0xc)) + parseInt(a1(0x18e)) / (0x1c3a + 0x263f * 0x1 + -0x4273) * (-parseInt(a1(0x183)) / (-0xa * -0x369 + 0xeca + -0x30dd)) + parseInt(a1(0x1f2)) / (0x2b * 0x2b + -0x2 * -0x1272 + 0x3d * -0xb9) + parseInt(a1(0x1c0)) / (-0x1 * 0x12ad + 0xf2f * 0x1 + 0x387);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x86d0a + 0x1f * -0x3bcb + 0x2 * 0xb1826));
var __importDefault = this && this[a3(0x18b) + a3(0x1af)] || function (c) {
    const a5 = a3;
    return c && c[a5(0x181)] ? c : { 'default': c };
};
const k = {};
k[a3(0x1dd)] = !![], Object[a3(0x1da) + a4(0x1e9)](exports, a4(0x181), k);
const AppError_1 = __importDefault(require(a3(0x17b) + a3(0x1ae) + 'r')), CheckContactOpenTickets_1 = __importDefault(require(a3(0x1a4) + a3(0x179) + a4(0x1d2) + a3(0x1bc))), SetTicketMessagesAsRead_1 = __importDefault(require(a3(0x1a4) + a4(0x1ee) + a4(0x1c7) + a3(0x1c4))), Contact_1 = __importDefault(require(a3(0x1f4) + a3(0x189))), Ticket_1 = __importDefault(require(a3(0x1f4) + a3(0x1e0))), User_1 = __importDefault(require(a3(0x1f4) + a4(0x1f3))), socketEmit_1 = __importDefault(require(a4(0x1a4) + a4(0x1d0) + a4(0x1a0))), CreateLogTicketService_1 = __importDefault(require(a4(0x1ad) + a3(0x176) + a4(0x17a))), UpdateTicketService = async ({
        ticketData: s,
        ticketId: t,
        isTransference: u,
        userIdRequest: v
    }) => {
        const a6 = a4, a7 = a3, w = {};
        w[a6(0x1b2)] = a7(0x180) + a6(0x191), w[a6(0x1c3)] = a6(0x1d6) + a7(0x194), w[a6(0x1de)] = a7(0x1ba), w[a7(0x1ea)] = a7(0x19f), w[a7(0x1a2)] = a7(0x186), w[a6(0x1be)] = a7(0x18c), w[a6(0x1ef)] = a7(0x184), w[a6(0x17e)] = a6(0x1b0), w[a7(0x1df)] = a7(0x188), w[a7(0x1b6)] = a6(0x1c9), w[a7(0x1f0)] = function (Q, R) {
            return Q !== R;
        }, w[a6(0x1b3)] = a6(0x1a1), w[a7(0x1bf)] = a7(0x193), w[a6(0x17d)] = function (Q, R) {
            return Q !== R;
        }, w[a7(0x1d4)] = a7(0x1ce), w[a7(0x1c2)] = function (Q, R) {
            return Q === R;
        }, w[a7(0x185)] = a6(0x1d1), w[a6(0x19c)] = function (Q, R) {
            return Q === R;
        }, w[a6(0x1a8)] = a7(0x1e5), w[a6(0x1c8)] = function (Q, R) {
            return Q === R;
        }, w[a6(0x17f)] = function (Q, R) {
            return Q !== R;
        }, w[a6(0x1bd)] = a6(0x18d), w[a6(0x19a)] = function (Q, R) {
            return Q === R;
        }, w[a6(0x1a6)] = a6(0x1e2), w[a6(0x177)] = function (Q, R) {
            return Q === R;
        }, w[a6(0x18a)] = function (Q, R) {
            return Q === R;
        }, w[a6(0x1db)] = a7(0x1b1), w[a6(0x1d5)] = function (Q, R) {
            return Q === R;
        }, w[a7(0x1ac)] = a7(0x190), w[a7(0x1ca)] = a6(0x1f1), w[a7(0x1d9)] = a7(0x187), w[a6(0x196)] = a6(0x197) + a7(0x1b9), w[a7(0x1e6)] = function (Q, R) {
            return Q === R;
        }, w[a6(0x1ec)] = a6(0x1c1), w[a7(0x1ab)] = a7(0x1e4), w[a7(0x17c)] = a7(0x1c5) + a7(0x199), w[a7(0x1e7)] = a7(0x1c6) + a7(0x1d3);
        const x = w, {
                status: y,
                userId: z,
                tenantId: A,
                queueId: B
            } = s, C = {};
        C['id'] = t, C[a6(0x18f)] = A;
        const D = {};
        D[a6(0x1dc)] = Contact_1[a6(0x19d)], D['as'] = x[a6(0x1de)], D[a7(0x19e)] = [
            x[a6(0x1ea)],
            x[a7(0x1a2)],
            {
                'association': x[a6(0x1be)],
                'attributes': [
                    'id',
                    x[a7(0x1ef)]
                ]
            }
        ];
        const E = {};
        E[a6(0x1dc)] = User_1[a6(0x19d)], E['as'] = x[a7(0x17e)], E[a6(0x1aa)] = [
            'id',
            x[a6(0x1ef)]
        ];
        const F = {};
        F[a7(0x1a9) + 'n'] = x[a7(0x1df)], F[a7(0x1aa)] = [
            'id',
            x[a6(0x1ef)],
            x[a6(0x1b6)]
        ];
        const G = {};
        G[a6(0x182)] = C, G[a6(0x19e)] = [
            D,
            E,
            F
        ];
        const H = await Ticket_1[a6(0x19d)][a7(0x1f5)](G);
        if (!H) {
            if (x[a6(0x1f0)](x[a7(0x1b3)], x[a7(0x1bf)]))
                throw new AppError_1[(a6(0x19d))](x[a7(0x1c3)], -0x18d7 * -0x1 + 0x727 + -0x1e6a);
            else {
                const R = {};
                R[a6(0x18f)] = F, R[a7(0x1cc)] = x[a6(0x1b2)], R[a6(0x1eb)] = G, (-0xa7 * -0x1a + 0x1cd2 + -0x2dc8, E[a7(0x19d)])(R);
            }
        }
        await (-0x256 * 0x10 + 0xd14 + 0x613 * 0x4, SetTicketMessagesAsRead_1[a6(0x19d)])(H);
        const I = x[a6(0x17d)](H[a7(0x1e8)], x[a6(0x1d4)]) && x[a7(0x1c2)](s[a7(0x1e8)], x[a6(0x1d4)]), J = H[a6(0x1e8)], K = H[a7(0x1b0)]?.['id'];
        x[a6(0x1c2)](J, x[a7(0x185)]) && await (0x1f * 0xcd + -0x1525 + -0x6 * 0x9d, CheckContactOpenTickets_1[a7(0x19d)])(H[a7(0x1ba)]['id']);
        const L = x[a6(0x19c)](y, x[a6(0x1a8)]) ? x[a6(0x185)] : y, M = {};
        M[a6(0x1e8)] = L, M[a6(0x1b5)] = B, M[a7(0x1a7)] = z;
        const N = M;
        if (x[a6(0x1c8)](L, x[a6(0x185)])) {
            if (x[a6(0x17f)](x[a6(0x1bd)], x[a6(0x1bd)])) {
                const S = {};
                return S[a6(0x19d)] = S, F && G[a6(0x181)] ? M : S;
            } else
                N[a6(0x1e3)] = new Date()[a6(0x19b)]();
        }
        x[a6(0x19a)](J, x[a6(0x1d4)]) && x[a7(0x19a)](L, x[a6(0x1a6)]) && (N[a6(0x1cb) + 'd'] = null, N[a7(0x1cf) + a6(0x195)] = null, N[a6(0x1a5) + a7(0x1cd)] = new Date()[a7(0x19b)]());
        await H[a7(0x1d8)](N);
        if (x[a7(0x177)](J, x[a7(0x1d4)]) && x[a7(0x18a)](L, x[a6(0x1a6)])) {
            if (x[a7(0x1c2)](x[a7(0x1db)], x[a7(0x1db)])) {
                const S = {};
                S[a6(0x1a7)] = v, S[a6(0x178)] = t, S[a7(0x1cc)] = x[a7(0x1a6)], await (-0x2 * -0x977 + 0x1 * -0x121 + 0x11cd * -0x1, CreateLogTicketService_1[a7(0x19d)])(S);
            } else
                F[a7(0x1cb) + 'd'] = null, G[a7(0x1cf) + a7(0x195)] = null, M[a6(0x1a5) + a6(0x1cd)] = new j()[a6(0x19b)]();
        }
        if (x[a6(0x1c8)](L, x[a6(0x185)])) {
            const U = {};
            U[a7(0x1a7)] = v, U[a6(0x178)] = t, U[a6(0x1cc)] = x[a6(0x185)], await (0x1a68 + -0x72a + -0x133e, CreateLogTicketService_1[a6(0x19d)])(U);
        }
        if (x[a7(0x1c2)](J, x[a6(0x1a6)]) && x[a7(0x1d5)](L, x[a7(0x1d4)])) {
            const V = {};
            V[a7(0x1a7)] = v, V[a6(0x178)] = t, V[a6(0x1cc)] = x[a7(0x1d4)], await (0x10ac + 0x12 * -0x5e + -0xa10, CreateLogTicketService_1[a6(0x19d)])(V);
        }
        if (u) {
            if (x[a7(0x177)](x[a6(0x1ac)], x[a7(0x1ca)]))
                throw new C[(a7(0x19d))](x[a7(0x1c3)], 0xc1e + -0x2347 + 0x18bd);
            else {
                const X = {};
                X[a7(0x1a7)] = v, X[a7(0x178)] = t, X[a6(0x1cc)] = x[a7(0x1d9)], await (-0xa1f * -0x3 + -0x1045 + 0x52 * -0x2c, CreateLogTicketService_1[a6(0x19d)])(X);
                if (z) {
                    const Y = {};
                    Y[a6(0x1a7)] = z, Y[a6(0x178)] = t, Y[a7(0x1cc)] = x[a6(0x196)], await (0xe9e + 0x988 + -0x1826, CreateLogTicketService_1[a7(0x19d)])(Y);
                }
            }
        }
        await H[a6(0x1b7)]();
        u && (x[a7(0x1e6)](x[a7(0x1ec)], x[a7(0x1ab)]) ? D[a6(0x1e3)] = new E()[a7(0x19b)]() : await H[a6(0x1b4) + 'ue'](x[a6(0x17c)], !![]));
        if (I) {
            const a0 = {};
            a0[a6(0x18f)] = A, a0[a6(0x1cc)] = x[a6(0x1b2)], a0[a6(0x1eb)] = H, (0x6 * -0x1df + 0xa * -0x1eb + -0x79a * -0x4, socketEmit_1[a6(0x19d)])(a0);
        }
        const O = {};
        O[a7(0x18f)] = A, O[a6(0x1cc)] = x[a7(0x1e7)], O[a7(0x1eb)] = H, (0x1b13 + -0x1c11 * -0x1 + -0x3724, socketEmit_1[a7(0x19d)])(O);
        const P = {};
        return P[a6(0x1ed)] = H, P[a6(0x1b8)] = J, P[a6(0x1d7)] = K, P;
    };
exports[a3(0x19d)] = UpdateTicketService;
function a() {
    const a8 = [
        'ers/CheckC',
        'vice',
        '../../erro',
        'FQgcF',
        'vzsdz',
        'uOhYT',
        'qhzSm',
        'notificati',
        '__esModule',
        'where',
        '868WhCQUS',
        'name',
        'qJWWM',
        'tags',
        'transfered',
        'whatsapp',
        'ls/Contact',
        'iHYpi',
        '__importDe',
        'wallets',
        'xiGZs',
        '16764zHMIzI',
        'tenantId',
        'kzYWT',
        'on:new',
        '2265CFjGzN',
        'vFnEY',
        'KET_FOUND',
        'plyId',
        'bpnBO',
        'receivedTr',
        '1720305fjTzCq',
        'ence',
        'bFlQz',
        'getTime',
        'ikezd',
        'default',
        'include',
        'extraInfo',
        'Emit',
        'pUuTO',
        'wgceB',
        '64573YuaoDI',
        '../../help',
        'startedAtt',
        'HqEUP',
        'userId',
        'ykpwM',
        'associatio',
        'attributes',
        'vhuvq',
        'ayvPZ',
        './CreateLo',
        'rs/AppErro',
        'fault',
        'user',
        'QifFT',
        'pnIay',
        'mknZj',
        'setDataVal',
        'queueId',
        'MVNMu',
        'reload',
        'oldStatus',
        'ansfer',
        'contact',
        '393112DTLsmz',
        'Tickets',
        'VxNXz',
        'nKTXx',
        'YQjma',
        '1575837AecuQN',
        'dUovf',
        'HCRce',
        'zPfyz',
        'sAsRead',
        'isTransfer',
        'ticket:upd',
        'ketMessage',
        'BASie',
        'isDeleted',
        'IhfaP',
        'autoReplyI',
        'type',
        'endanceAt',
        'pending',
        'stepAutoRe',
        'ers/socket',
        'closed',
        'ontactOpen',
        'ate',
        'EZNdN',
        'ZKaoT',
        'ERR_NO_TIC',
        'oldUserId',
        'update',
        'fAHlR',
        'defineProp',
        'KnUYz',
        'model',
        'value',
        'krWrK',
        'tncqT',
        'ls/Ticket',
        '4544qPYohw',
        'open',
        'closedAt',
        'GFCjy',
        'close',
        'Zqrlq',
        'PQQiM',
        'status',
        'erty',
        'iCjLe',
        'payload',
        'lxuKF',
        'ticket',
        'ers/SetTic',
        'gByKG',
        'vLbXB',
        'BqlLa',
        '3263920gNMCzu',
        'ls/User',
        '../../mode',
        'findOne',
        'gTicketSer',
        'DHwHi',
        'ticketId'
    ];
    a = function () {
        return a8;
    };
    return a();
}