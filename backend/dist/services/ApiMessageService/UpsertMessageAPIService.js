'use strict';
const E = b, F = b;
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(C(0x14a)) / (-0xfcf + 0x7 * -0x2e7 + 0x1 * 0x2421) * (-parseInt(D(0x13c)) / (-0x28 * 0xc6 + -0x13e2 + 0x196a * 0x2)) + parseInt(D(0x152)) / (0x1bb6 + 0xb07 * 0x2 + -0x31c1) + parseInt(D(0x14b)) / (0x8a3 + -0x798 + -0x107) + -parseInt(C(0x15a)) / (-0x1 * 0x1b82 + -0x1d * 0x4f + 0x247a) * (-parseInt(C(0x150)) / (0x2678 + -0x1005 + 0x1 * -0x166d)) + parseInt(C(0x13d)) / (-0x4f8 + 0xdef + 0x16 * -0x68) + parseInt(D(0x142)) / (-0xb * 0x2e5 + 0x3 * 0x944 + -0x1 * -0x413) + parseInt(D(0x156)) / (-0x1eaf + -0x1 * 0x23c5 + 0x427d) * (-parseInt(C(0x144)) / (-0x656 * -0x1 + 0x1 * 0x3ee + -0xa3a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x29221 + 0x7f8ea + 0x5fc33));
function a() {
    const J = [
        '7796694BinCcZ',
        'ERR_CREATI',
        '3289470KsZoUO',
        'body',
        'aTnJO',
        'erty',
        '921708OPlFUY',
        'sessionId',
        'messageId',
        '__importDe',
        '5BKeNNH',
        'apiConfig',
        'messageWA',
        'default',
        'create',
        'age',
        'value',
        'mediaUrl',
        'number',
        'externalKe',
        '1729016LkNlQd',
        '2809156ZCazQZ',
        'defineProp',
        'update',
        'findOne',
        'ack',
        '11932360WnpeCL',
        'NG_MESSAGE',
        '400JFmMqE',
        '../../mode',
        'mediaName',
        'reload',
        '__esModule',
        'fault',
        '1OjAFCX',
        '5673728GLnmEr',
        'tenantId',
        'timestamp',
        'where',
        'ls/ApiMess'
    ];
    a = function () {
        return J;
    };
    return a();
}
var __importDefault = this && this[E(0x159) + E(0x149)] || function (c) {
    const G = F;
    return c && c[G(0x148)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x2456 + -0x1cd4 + 0x609 * 0xb);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[E(0x160)] = !![], Object[F(0x13e) + E(0x155)](exports, F(0x148), k);
const ApiMessage_1 = __importDefault(require(E(0x145) + F(0x14f) + F(0x15f))), UpsertMessageAPIService = async ({
        sessionId: h,
        messageId: i,
        body: j,
        ack: l,
        number: m,
        mediaName: n,
        mediaUrl: o,
        timestamp: p,
        externalKey: q,
        messageWA: r,
        apiConfig: s,
        tenantId: t
    }) => {
        const H = F, I = F, u = {};
        u[H(0x154)] = I(0x151) + H(0x143);
        const v = u;
        let w;
        const x = {};
        x[H(0x158)] = i, x[I(0x14c)] = t;
        const y = {};
        y[H(0x14e)] = x;
        const z = await ApiMessage_1[H(0x15d)][H(0x140)](y);
        if (z) {
            const A = {};
            A[H(0x157)] = h, A[I(0x158)] = i, A[H(0x153)] = j, A[H(0x141)] = l, A[I(0x13a)] = m, A[H(0x146)] = n, A[H(0x139)] = o, A[H(0x14d)] = p, A[I(0x13b) + 'y'] = q, A[I(0x15c)] = r, A[H(0x15b)] = s, A[I(0x14c)] = t, await z[H(0x13f)](A), w = await z[H(0x147)]();
        } else {
            const B = {};
            B[H(0x157)] = h, B[H(0x158)] = i, B[H(0x153)] = j, B[I(0x141)] = l, B[H(0x13a)] = m, B[I(0x146)] = n, B[H(0x139)] = o, B[I(0x14d)] = p, B[H(0x13b) + 'y'] = q, B[H(0x15c)] = r, B[H(0x15b)] = s, B[I(0x14c)] = t, w = await ApiMessage_1[H(0x15d)][H(0x15e)](B);
        }
        if (!w)
            throw new Error(v[H(0x154)]);
        return w;
    };
exports[F(0x15d)] = UpsertMessageAPIService;