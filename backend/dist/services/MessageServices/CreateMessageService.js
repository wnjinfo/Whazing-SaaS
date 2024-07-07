'use strict';
const a3 = b, a4 = b;
(function (c, d) {
    const a1 = b, a2 = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(a1(0x1e8)) / (0x1656 + 0x1e03 + -0x1a2c * 0x2) + parseInt(a1(0x1b7)) / (0x1dd2 + -0x17a9 + -0x3 * 0x20d) + parseInt(a2(0x1b0)) / (0x2 * -0x9d3 + 0x1946 + -0x59d) + -parseInt(a2(0x1a7)) / (-0x1401 + 0x3f * -0x7f + 0x3346) + -parseInt(a1(0x1e2)) / (0x3f1 + -0x1347 + 0xf5b) + parseInt(a2(0x1bd)) / (0x4 * 0x7a8 + -0x1a0c * -0x1 + -0x38a6) + -parseInt(a1(0x1c5)) / (-0x5e6 + -0xc3b * -0x1 + -0x64e);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1030db + -0x9c70 * -0x11 + -0x42b7a * 0x3));
var __importDefault = this && this[a3(0x1c9) + a3(0x1de)] || function (c) {
    const a5 = a3;
    return c && c[a5(0x19f)] ? c : { 'default': c };
};
const o = {};
o[a3(0x1a8)] = !![], Object[a3(0x1b2) + a3(0x1cf)](exports, a3(0x19f), o);
const Message_1 = __importDefault(require(a3(0x1e9) + a3(0x1d1))), Ticket_1 = __importDefault(require(a3(0x1e9) + a3(0x1a4))), socketEmit_1 = __importDefault(require(a4(0x1b4) + a4(0x1db) + a4(0x1d4))), Contact_1 = __importDefault(require(a4(0x1e9) + a4(0x1be)));
function extractMessageId(d) {
    const a6 = a4, a7 = a3, e = {};
    e[a6(0x1a3)] = a7(0x1ed) + a7(0x1ad) + a6(0x1b5) + a7(0x1d0);
    const f = e;
    try {
        const g = JSON[a7(0x1ab)](d);
        return g[a7(0x1a2)][a7(0x1cb) + a6(0x1bc)][a7(0x1a2)][a6(0x1da) + a7(0x1e4)][a6(0x1a0)]['id'];
    } catch (h) {
        throw new Error(f[a6(0x1a3)]);
    }
}
const CreateMessageService = async ({
    messageData: v,
    tenantId: w
}) => {
    const a8 = a3, a9 = a3, x = {
            'SOqYz': a8(0x1ed) + a9(0x1ad) + a8(0x1b5) + a9(0x1d0),
            'WcxFe': function (G, H) {
                return G === H;
            },
            'nLcJN': a8(0x1cb) + a9(0x1bc),
            'qpxGG': function (G, H) {
                return G(H);
            },
            'pwWVo': function (G, H) {
                return G !== H;
            },
            'TFxIj': a9(0x1e0),
            'TSiUf': a9(0x1aa),
            'wYcuq': a9(0x1b1) + 'e',
            'dxrUA': a8(0x1d3) + a8(0x1b9) + a8(0x1c6) + 'da',
            'sYfgQ': function (G, H) {
                return G === H;
            },
            'fYJGT': a8(0x1ca),
            'CJEfG': a9(0x1b3),
            'knUpO': a8(0x1e3),
            'AgcwE': a9(0x1bb),
            'ogXwU': a9(0x1c3),
            'wUKVd': function (G, H) {
                return G === H;
            },
            'DfLGy': a9(0x1ba),
            'hsHIt': a9(0x1a1) + a8(0x1af),
            'SSXYh': a9(0x1e6) + 'e'
        };
    if (x[a8(0x1a9)](v[a9(0x1ce)], x[a8(0x1c8)]) && v[a9(0x1ae)]) {
        const G = v[a8(0x1ae)], H = x[a9(0x19e)](extractMessageId, G), I = {};
        I[a9(0x1ef)] = H, I[a9(0x1cd)] = w;
        const J = {};
        J[a9(0x19d)] = I;
        const K = await Message_1[a8(0x1d9)][a9(0x1b8)](J);
        if (K) {
            if (x[a8(0x1cc)](x[a8(0x1e1)], x[a8(0x1d2)])) {
                const L = {};
                L[a9(0x1eb)] = v[a9(0x1ec)], await K[a8(0x1c7)](L);
                const M = {};
                return M[a9(0x1cd)] = w, M[a8(0x1d7)] = x[a9(0x1dd)], M[a9(0x1b6)] = K, (0x416 + 0x3d1 + 0x7 * -0x121, socketEmit_1[a9(0x1d9)])(M), K;
            } else
                throw new J(x[a8(0x1a6)]);
        } else
            throw new Error(x[a8(0x1c2)]);
    }
    const y = {};
    y[a9(0x1ef)] = v[a8(0x1ef)], y[a8(0x1cd)] = w;
    const z = {};
    z[a8(0x19d)] = y;
    let A = await Message_1[a8(0x1d9)][a9(0x1b8)](z);
    if (!A) {
        const O = { ...v };
        O[a9(0x1cd)] = w, A = await Message_1[a8(0x1d9)][a8(0x1d5)](O);
    } else
        await A[a8(0x1c7)](v);
    let B;
    if (!v[a8(0x1d6)]) {
        if (x[a8(0x1c0)](x[a9(0x1c1)], x[a8(0x1d8)])) {
            const Q = e[a9(0x1ab)](f);
            return Q[a8(0x1a2)][a9(0x1cb) + a9(0x1bc)][a8(0x1a2)][a9(0x1da) + a8(0x1e4)][a9(0x1a0)]['id'];
        } else {
            const Q = {};
            Q[a9(0x1cd)] = w;
            const R = {};
            R[a8(0x1ac)] = Ticket_1[a8(0x1d9)], R['as'] = x[a9(0x1bf)], R[a8(0x19d)] = Q, R[a9(0x1c4)] = [x[a8(0x1e5)]];
            const S = {};
            S[a9(0x1ac)] = Message_1[a8(0x1d9)], S['as'] = x[a9(0x1e7)], S[a9(0x1c4)] = [x[a9(0x1e5)]];
            const T = {};
            T['id'] = v[a9(0x1a5)];
            const U = {};
            U[a8(0x1ac)] = Contact_1[a9(0x1d9)], U['as'] = x[a8(0x1e5)], U[a8(0x19d)] = T, B = [
                R,
                S,
                U
            ];
        }
    } else {
        const V = {};
        V[a9(0x1cd)] = w;
        const W = {};
        W[a8(0x1ac)] = Ticket_1[a8(0x1d9)], W['as'] = x[a8(0x1bf)], W[a9(0x19d)] = V, W[a8(0x1c4)] = [x[a9(0x1e5)]];
        const X = {};
        X[a8(0x1ac)] = Message_1[a8(0x1d9)], X['as'] = x[a9(0x1e7)], X[a8(0x1c4)] = [x[a8(0x1e5)]], B = [
            W,
            X
        ];
    }
    const C = {};
    C[a9(0x1ef)] = v[a8(0x1ef)], C[a9(0x1cd)] = w;
    const D = {};
    D[a9(0x19d)] = C, D[a8(0x1c4)] = B;
    const E = await Message_1[a9(0x1d9)][a8(0x1b8)](D);
    if (!E) {
        if (x[a9(0x1df)](x[a9(0x1ea)], x[a8(0x1ea)]))
            throw new Error(x[a8(0x1dc)]);
        else
            try {
                const Z = i[a9(0x1ab)](j);
                return Z[a8(0x1a2)][a8(0x1cb) + a8(0x1bc)][a9(0x1a2)][a9(0x1da) + a9(0x1e4)][a9(0x1a0)]['id'];
            } catch (a0) {
                throw new l(x[a9(0x1a6)]);
            }
    }
    const F = {};
    return F[a8(0x1cd)] = w, F[a9(0x1d7)] = x[a9(0x1ee)], F[a8(0x1b6)] = E, (0xe64 + -0x115a + 0x2f6, socketEmit_1[a9(0x1d9)])(F), A;
};
exports[a3(0x1d9)] = CreateMessageService;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x20e * -0x2 + 0x6b * -0x4e + 0x2653);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const aa = [
        'AgcwE',
        'chat:creat',
        'ogXwU',
        '1368633TRZrnF',
        '../../mode',
        'DfLGy',
        'edited',
        'body',
        'Erro\x20ao\x20ex',
        'SSXYh',
        'messageId',
        'where',
        'qpxGG',
        '__esModule',
        'key',
        'ERR_CREATI',
        'message',
        'PLHGA',
        'ls/Ticket',
        'contactId',
        'SOqYz',
        '2111268UjXxuf',
        'value',
        'WcxFe',
        'ituzO',
        'parse',
        'model',
        'trair\x20mess',
        'dataJson',
        'NG_MESSAGE',
        '4932255lofZNy',
        'chat:updat',
        'defineProp',
        'IwklX',
        '../../help',
        'ageId\x20do\x20d',
        'payload',
        '2515474nNEfDO',
        'findOne',
        'riginal\x20nã',
        'vzvwJ',
        'contact',
        'age',
        '5684616XGKQYI',
        'ls/Contact',
        'knUpO',
        'sYfgQ',
        'fYJGT',
        'dxrUA',
        'quotedMsg',
        'include',
        '15649788jGfLDG',
        'o\x20encontra',
        'update',
        'nLcJN',
        '__importDe',
        'loBJu',
        'editedMess',
        'pwWVo',
        'tenantId',
        'mediaType',
        'erty',
        'ataJson',
        'ls/Message',
        'TSiUf',
        'Mensagem\x20o',
        'Emit',
        'create',
        'fromMe',
        'type',
        'CJEfG',
        'default',
        'protocolMe',
        'ers/socket',
        'hsHIt',
        'wYcuq',
        'fault',
        'wUKVd',
        'EkjSI',
        'TFxIj',
        '7661565JaTquz',
        'ticket',
        'ssage'
    ];
    a = function () {
        return aa;
    };
    return a();
}