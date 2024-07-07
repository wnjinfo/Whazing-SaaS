'use strict';
const a6 = b, a7 = b;
(function (c, d) {
    const a4 = b, a5 = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(a4(0xa1)) / (0x472 + -0x263d * -0x1 + -0x2aae) * (-parseInt(a5(0xb2)) / (0x4 * -0x2f5 + 0x3 * 0x775 + -0x3 * 0x383)) + -parseInt(a4(0xbd)) / (0x3 * 0x9ca + 0x1893 + -0x35ee) + -parseInt(a4(0x7d)) / (-0x10e + -0x1 * -0x20ff + -0x1fed) + -parseInt(a5(0x9b)) / (-0x2ad * -0xd + -0x10a9 * -0x2 + -0x1 * 0x4416) * (parseInt(a4(0xa0)) / (-0x64 * 0x27 + -0x1fcb + -0x323 * -0xf)) + parseInt(a4(0x8b)) / (-0xb7 * 0xf + 0x1a73 + 0xfb3 * -0x1) * (parseInt(a4(0x71)) / (-0x3 * 0x8cb + 0x54 * -0x1 + 0x559 * 0x5)) + parseInt(a4(0xb0)) / (0x11 * -0xd1 + 0x5 * -0x721 + 0x318f) + parseInt(a5(0x97)) / (0xd * -0x251 + -0x3 * -0x5b3 + -0x2 * -0x687);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1102a3 + -0x1 * 0x5be5d + 0x20117b));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1370 + -0x1f * 0x1f + 0x179d);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[a6(0x88) + a7(0x91)] || function (c) {
    const a8 = a7;
    return c && c[a8(0x6d)] ? c : { 'default': c };
};
const o = {};
o[a6(0x7b)] = !![], Object[a7(0x85) + a7(0xc1)](exports, a6(0x6d), o);
const Message_1 = __importDefault(require(a7(0xa4) + a6(0x79))), Ticket_1 = __importDefault(require(a7(0xa4) + a7(0x82))), socketEmit_1 = __importDefault(require(a7(0xb4) + a7(0xa3) + a7(0x9c))), Contact_1 = __importDefault(require(a6(0xa4) + a6(0x9e)));
function extractMessageId(d) {
    const a9 = a6, aa = a6, e = {};
    e[a9(0xa6)] = a9(0x90) + a9(0x70), e[aa(0xa8)] = function (g, h) {
        return g === h;
    }, e[a9(0x95)] = a9(0xb6), e[a9(0x80)] = a9(0x8a), e[aa(0xb1)] = aa(0x7c) + aa(0xa2) + a9(0x81) + aa(0xb8);
    const f = e;
    try {
        const g = JSON[aa(0x92)](d);
        return g[a9(0x8e)][a9(0x7e) + aa(0x9d)][a9(0x8e)][aa(0xbc) + aa(0x74)][a9(0xba)]['id'];
    } catch (h) {
        if (f[a9(0xa8)](f[aa(0x95)], f[a9(0x80)]))
            throw new d(f[a9(0xa6)]);
        else
            throw new Error(f[aa(0xb1)]);
    }
}
function a() {
    const ad = [
        '33929250xvbein',
        'PVrHL',
        'enwge',
        'kYJOz',
        '5UVrDqt',
        'Emit',
        'age',
        'ls/Contact',
        'FdJgG',
        '6299646hKDFGo',
        '83499XWSxJD',
        'trair\x20mess',
        'ers/socket',
        '../../mode',
        'edited',
        'udGdt',
        'RHvVk',
        'tjHmP',
        'create',
        'SEQWU',
        'mediaType',
        'default',
        'type',
        'payload',
        'tenantId',
        '1118043WVtlek',
        'xDTDR',
        '10nZQHwC',
        'include',
        '../../help',
        'ticket',
        'ipLhD',
        'vLUfw',
        'ataJson',
        'Zynqj',
        'key',
        'htIcf',
        'protocolMe',
        '3427398cQgXrp',
        'update',
        'LHhvc',
        'body',
        'erty',
        'SXVhp',
        'CqqJV',
        'chat:creat',
        'o\x20encontra',
        '__esModule',
        'riginal\x20nã',
        'fpZIx',
        'NG_MESSAGE',
        '7824dyDqsH',
        'where',
        'vXEsz',
        'ssage',
        'messageId',
        'hnVwm',
        'uIoHF',
        'quotedMsg',
        'ls/Message',
        'dataJson',
        'value',
        'Erro\x20ao\x20ex',
        '3170676jlgUHt',
        'editedMess',
        'Mensagem\x20o',
        'xwxHf',
        'ageId\x20do\x20d',
        'ls/Ticket',
        'fUxNi',
        'model',
        'defineProp',
        'ZqnUH',
        'aOTmL',
        '__importDe',
        'fromMe',
        'IKynA',
        '3549RKrYZN',
        'CMRga',
        'findOne',
        'message',
        'contactId',
        'ERR_CREATI',
        'fault',
        'parse',
        'chat:updat',
        'qqovE',
        'XEscS',
        'contact'
    ];
    a = function () {
        return ad;
    };
    return a();
}
const CreateMessageService = async ({
    messageData: v,
    tenantId: w
}) => {
    const ab = a6, ac = a6, x = {
            'RHvVk': ab(0xb5),
            'fpZIx': ab(0x96),
            'ZqnUH': ac(0x78),
            'aOTmL': function (G, H) {
                return G === H;
            },
            'htIcf': ab(0x7e) + ab(0x9d),
            'SXVhp': function (G, H) {
                return G(H);
            },
            'FdJgG': function (G, H) {
                return G !== H;
            },
            'PVrHL': ac(0x76),
            'qqovE': ab(0xb9),
            'CqqJV': ac(0x93) + 'e',
            'kYJOz': ab(0x7f) + ab(0x6e) + ab(0x6c) + 'da',
            'fUxNi': ac(0xbf),
            'vLUfw': ab(0xaa),
            'vXEsz': ab(0x8c),
            'uIoHF': ac(0x90) + ac(0x70),
            'enwge': ab(0xc4) + 'e'
        };
    if (x[ab(0x87)](v[ab(0xab)], x[ac(0xbb)]) && v[ac(0x7a)]) {
        const G = v[ac(0x7a)], H = x[ac(0xc2)](extractMessageId, G), I = {};
        I[ab(0x75)] = H, I[ac(0xaf)] = w;
        const J = {};
        J[ab(0x72)] = I;
        const K = await Message_1[ac(0xac)][ac(0x8d)](J);
        if (K) {
            if (x[ac(0x9f)](x[ab(0x98)], x[ab(0x94)])) {
                const L = {};
                L[ac(0xa5)] = v[ac(0xc0)], await K[ac(0xbe)](L);
                const M = {};
                return M[ac(0xaf)] = w, M[ac(0xad)] = x[ac(0xc3)], M[ab(0xae)] = K, (-0x3 * 0x247 + -0x139c + 0x1a71 * 0x1, socketEmit_1[ac(0xac)])(M), K;
            } else {
                const O = {};
                return O[ac(0xac)] = j, O && z[ab(0x6d)] ? i : O;
            }
        } else
            throw new Error(x[ac(0x9a)]);
    }
    const y = {};
    y[ab(0x75)] = v[ab(0x75)], y[ac(0xaf)] = w;
    const z = {};
    z[ac(0x72)] = y;
    let A = await Message_1[ac(0xac)][ac(0x8d)](z);
    if (!A) {
        const O = { ...v };
        O[ab(0xaf)] = w, A = await Message_1[ac(0xac)][ab(0xa9)](O);
    } else {
        if (x[ab(0x87)](x[ab(0x83)], x[ac(0xb7)])) {
            const Q = {};
            Q[ac(0xaf)] = i;
            const R = {};
            R[ac(0x84)] = z[ac(0xac)], R['as'] = x[ab(0xa7)], R[ab(0x72)] = Q, R[ab(0xb3)] = [x[ab(0x6f)]];
            const S = {};
            S[ac(0x84)] = Q[ac(0xac)], S['as'] = x[ab(0x86)], S[ab(0xb3)] = [x[ac(0x6f)]], y = [
                R,
                S
            ];
        } else
            await A[ac(0xbe)](v);
    }
    let B;
    if (!v[ab(0x89)]) {
        const Q = {};
        Q[ab(0xaf)] = w;
        const R = {};
        R[ac(0x84)] = Ticket_1[ac(0xac)], R['as'] = x[ac(0xa7)], R[ab(0x72)] = Q, R[ab(0xb3)] = [x[ab(0x6f)]];
        const S = {};
        S[ac(0x84)] = Message_1[ac(0xac)], S['as'] = x[ab(0x86)], S[ac(0xb3)] = [x[ac(0x6f)]];
        const T = {};
        T['id'] = v[ac(0x8f)];
        const U = {};
        U[ac(0x84)] = Contact_1[ac(0xac)], U['as'] = x[ac(0x6f)], U[ac(0x72)] = T, B = [
            R,
            S,
            U
        ];
    } else {
        const V = {};
        V[ab(0xaf)] = w;
        const W = {};
        W[ac(0x84)] = Ticket_1[ac(0xac)], W['as'] = x[ac(0xa7)], W[ac(0x72)] = V, W[ab(0xb3)] = [x[ab(0x6f)]];
        const X = {};
        X[ab(0x84)] = Message_1[ab(0xac)], X['as'] = x[ab(0x86)], X[ac(0xb3)] = [x[ab(0x6f)]], B = [
            W,
            X
        ];
    }
    const C = {};
    C[ab(0x75)] = v[ac(0x75)], C[ab(0xaf)] = w;
    const D = {};
    D[ab(0x72)] = C, D[ab(0xb3)] = B;
    const E = await Message_1[ab(0xac)][ac(0x8d)](D);
    if (!E) {
        if (x[ab(0x9f)](x[ac(0x73)], x[ab(0x73)])) {
            const Z = {};
            Z[ac(0xaf)] = k;
            const a0 = {};
            a0[ac(0x84)] = j[ab(0xac)], a0['as'] = x[ab(0xa7)], a0[ac(0x72)] = Z, a0[ac(0xb3)] = [x[ab(0x6f)]];
            const a1 = {};
            a1[ab(0x84)] = l[ab(0xac)], a1['as'] = x[ab(0x86)], a1[ab(0xb3)] = [x[ab(0x6f)]];
            const a2 = {};
            a2['id'] = n[ac(0x8f)];
            const a3 = {};
            a3[ab(0x84)] = m[ab(0xac)], a3['as'] = x[ac(0x6f)], a3[ac(0x72)] = a2, i = [
                a0,
                a1,
                a3
            ];
        } else
            throw new Error(x[ac(0x77)]);
    }
    const F = {};
    return F[ac(0xaf)] = w, F[ab(0xad)] = x[ac(0x99)], F[ab(0xae)] = E, (0x2b * -0x71 + -0xf29 * -0x1 + 0x3d2, socketEmit_1[ac(0xac)])(F), A;
};
exports[a7(0xac)] = CreateMessageService;