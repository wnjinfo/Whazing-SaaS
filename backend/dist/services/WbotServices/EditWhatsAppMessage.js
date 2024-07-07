'use strict';
const R = b, S = b;
(function (c, d) {
    const P = b, Q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(P(0x1a6)) / (0x1 * -0x1981 + 0x1 * -0x983 + 0x2305) + -parseInt(P(0x19d)) / (0x1d0b + 0x3e9 + -0x20f2) * (-parseInt(Q(0x1a0)) / (0x1f36 + -0x179d + -0x1 * 0x796)) + -parseInt(P(0x1bf)) / (-0x1991 + -0x6 * -0xca + 0x14d9) + -parseInt(Q(0x197)) / (-0xb03 * 0x2 + -0x9 * 0x2e9 + 0x7e * 0x62) + -parseInt(P(0x19c)) / (0x9d1 + 0x1055 + -0x4 * 0x688) + parseInt(P(0x199)) / (-0x6 * 0x22c + -0xe02 + -0x1 * -0x1b11) + parseInt(Q(0x19a)) / (0xa53 * -0x1 + -0xd4f + -0x2 * -0xbd5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x220e7 * -0x7 + 0x889f6 + 0x5 * 0x39bfc));
var __importDefault = this && this[R(0x198) + R(0x1c5)] || function (c) {
    const T = S;
    return c && c[T(0x1b2)] ? c : { 'default': c };
};
const k = {};
k[S(0x180)] = !![], Object[S(0x18f) + S(0x1a7)](exports, R(0x1b2), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xd8b + 0x143b + -0x533);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(S(0x187) + R(0x1a1) + 'r')), GetTicketWbotBaileys_1 = __importDefault(require(R(0x1bd) + R(0x1c1) + S(0x1a8) + S(0x1c3))), Message_1 = __importDefault(require(S(0x18d) + S(0x1c6))), Ticket_1 = __importDefault(require(S(0x18d) + R(0x1c4))), socketEmit_1 = __importDefault(require(R(0x1bd) + S(0x18b) + S(0x1b7))), EditWhatsAppMessage = async ({
        messageId: o,
        tenantId: p,
        body: q
    }) => {
        const U = S, V = R, r = {};
        r[U(0x189)] = V(0x1b6) + U(0x1c7), r[V(0x19e)] = V(0x186), r[U(0x192)] = U(0x1b4), r[V(0x1bc)] = function (z, A) {
            return z !== A;
        }, r[U(0x194)] = V(0x18a), r[V(0x193)] = U(0x182) + U(0x1b0) + V(0x195), r[U(0x1bb)] = U(0x183) + U(0x1a4), r[V(0x1a2)] = function (z, A) {
            return z / A;
        }, r[U(0x188)] = function (z, A) {
            return z - A;
        }, r[U(0x1a3)] = function (z, A) {
            return z > A;
        }, r[U(0x17f)] = function (z, A) {
            return z !== A;
        }, r[U(0x1ba)] = U(0x1be), r[U(0x1a5)] = V(0x1b5), r[V(0x18c)] = U(0x18e) + 'e', r[V(0x1c0)] = U(0x1c2);
        const s = r;
        let t;
        try {
            const y = {};
            y[V(0x1b1)] = o, y[U(0x190)] = p;
            const z = {};
            z[U(0x19f)] = Ticket_1[U(0x1ac)], z['as'] = s[V(0x19e)], z[U(0x191)] = [s[V(0x192)]];
            const A = {};
            A[V(0x1ab)] = y, A[U(0x191)] = [z], t = await Message_1[V(0x1ac)][V(0x184)](A);
            if (!t) {
                if (s[U(0x1bc)](s[U(0x194)], s[U(0x194)])) {
                    const C = {};
                    return C[V(0x1ac)] = j, C && h[U(0x1b2)] ? i : C;
                } else
                    throw new AppError_1[(V(0x1ac))](s[V(0x193)]);
            }
        } catch (C) {
            throw new AppError_1[(U(0x1ac))](s[U(0x1bb)]);
        }
        const {ticket: u} = t, v = await (0x201f + -0x151f * 0x1 + 0x8 * -0x160, GetTicketWbotBaileys_1[U(0x1ac)])(u), w = JSON[U(0x181)](t[U(0x17d)]), x = w[U(0x17e)][U(0x1b8)];
        try {
            const D = {};
            D[U(0x1af)] = q, D[V(0x185)] = w[V(0x17e)], await v[U(0x1ae) + 'e'](x, D, {});
            const E = s[U(0x1a2)](s[V(0x188)](new Date()[V(0x1a9)](), new Date(t[V(0x196)])[U(0x1a9)]()), 0x1 * 0x17661 + -0x105b0 + 0x1 * 0x79af);
            if (s[U(0x1a3)](E, -0x22b5 * -0x1 + -0x8e7 + -0x19c4))
                throw new AppError_1[(V(0x1ac))](s[U(0x189)]);
            if (s[U(0x1bc)](t[V(0x1aa)], null)) {
                if (s[V(0x17f)](s[V(0x1ba)], s[V(0x1a5)]))
                    throw new AppError_1[(V(0x1ac))](s[V(0x189)]);
                else
                    throw new d[(V(0x1ac))](s[U(0x189)]);
            }
            const F = {};
            F[U(0x1aa)] = q, await t[V(0x1b3)](F);
            const {ticket: G} = t, H = {};
            H[V(0x190)] = G[V(0x190)], H[V(0x1b9)] = s[U(0x18c)], H[V(0x1ad)] = t, (0x23b1 + -0x726 + -0x1c8b, socketEmit_1[V(0x1ac)])(H);
            const I = {};
            I[V(0x1b1)] = o, I[U(0x190)] = p;
            const J = {};
            J[U(0x19f)] = Ticket_1[V(0x1ac)], J['as'] = s[V(0x19e)], J[U(0x191)] = [s[U(0x192)]];
            const K = {};
            K[V(0x190)] = p;
            const L = await Message_1[V(0x1ac)][V(0x184)]({
                    'where': I,
                    'include': [
                        J,
                        {
                            'model': Message_1[U(0x1ac)],
                            'as': s[U(0x1c0)],
                            'include': [s[U(0x192)]],
                            'where': K,
                            'required': ![]
                        }
                    ]
                }), M = {};
            return M[V(0x19b)] = L[V(0x19b)], M[U(0x1c8)] = L, M;
        } catch (O) {
            throw new AppError_1[(V(0x1ac))](s[U(0x189)]);
        }
    };
function a() {
    const W = [
        '../../mode',
        'chat:updat',
        'defineProp',
        'tenantId',
        'include',
        'aDLnT',
        'pmcqK',
        'epbzi',
        'h\x20this\x20ID.',
        'createdAt',
        '7240965yjzBXz',
        '__importDe',
        '4445119rDWQrX',
        '13117064PmkUmJ',
        'ticketId',
        '4636092JVWbmB',
        '386flHGTn',
        'XUyGF',
        'model',
        '11433NEpdDa',
        'rs/AppErro',
        'fpvJX',
        'NaGKX',
        'G_MSG',
        'HHtWY',
        '1397691rgYphZ',
        'erty',
        'ketWbotBai',
        'getTime',
        'edited',
        'where',
        'default',
        'payload',
        'sendMessag',
        'text',
        '\x20found\x20wit',
        'messageId',
        '__esModule',
        'update',
        'contact',
        'MNyHd',
        'ERR_EDITIN',
        'Emit',
        'remoteJid',
        'type',
        'UUKAe',
        'BrsAm',
        'tQPdJ',
        '../../help',
        'MBHsc',
        '5684592QCItzB',
        'QMsZe',
        'ers/GetTic',
        'quotedMsg',
        'leys',
        'ls/Ticket',
        'fault',
        'ls/Message',
        'G_WAPP_MSG',
        'message',
        'dataJson',
        'key',
        'NtGTP',
        'value',
        'parse',
        'No\x20message',
        'ERR_FINDIN',
        'findOne',
        'edit',
        'ticket',
        '../../erro',
        'cKZbY',
        'HPRLe',
        'jUWQU',
        'ers/socket',
        'bHVkv'
    ];
    a = function () {
        return W;
    };
    return a();
}
exports[S(0x1ac)] = EditWhatsAppMessage;