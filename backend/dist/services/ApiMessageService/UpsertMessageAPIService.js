'use strict';
const E = b, F = b;
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(C(0xc8)) / (0x466 * -0x1 + -0xdc7 * -0x1 + 0x320 * -0x3) * (parseInt(D(0xca)) / (0x11b5 + 0x4d1 + -0x1684)) + -parseInt(D(0xb5)) / (0x1f80 + -0xabc + -0x7 * 0x2f7) * (-parseInt(D(0xd9)) / (-0x4 * -0x182 + -0x1c * -0x2 + -0x63c)) + parseInt(C(0xc3)) / (0x1ff2 + -0x9 * -0x35 + -0x21ca) + parseInt(C(0xd7)) / (-0x261f + -0x1 * 0x15b + -0x10 * -0x278) + parseInt(C(0xdd)) / (0x1921 * 0x1 + -0x141 * -0x1d + -0x3d77) * (-parseInt(C(0xd1)) / (-0x1541 * 0x1 + -0x1 * -0x2221 + -0xcd8)) + -parseInt(D(0xc0)) / (-0xe4c + 0xca + 0xd8b) + -parseInt(D(0xda)) / (-0x790 + -0x8a7 + 0x56b * 0x3) * (parseInt(D(0xbb)) / (0x1 * -0x189b + -0xed5 + -0xd29 * -0x3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xe01f1 + -0x7d0f9 + 0x4b109));
var __importDefault = this && this[E(0xc4) + E(0xc9)] || function (c) {
    const G = E;
    return c && c[G(0xd5)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1d8e + 0x1ad7 + -0x124 * -0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[F(0xb7)] = !![], Object[F(0xcf) + E(0xd4)](exports, F(0xd5), k);
function a() {
    const J = [
        'ack',
        'apiConfig',
        'erty',
        '__esModule',
        'messageId',
        '2252994MFdvzp',
        'externalKe',
        '3957076gssxxd',
        '48490HxjqVZ',
        'mediaName',
        'messageWA',
        '14bUWjgA',
        '3zIcnbL',
        '../../mode',
        'value',
        'sessionId',
        'age',
        'body',
        '1430RFcQpZ',
        'default',
        'NG_MESSAGE',
        'timestamp',
        'update',
        '6247584rhaiOb',
        'mediaUrl',
        'where',
        '2105620XqsZqS',
        '__importDe',
        'findOne',
        'number',
        'reload',
        '1xzCBRO',
        'fault',
        '1013002OFGvbC',
        'tenantId',
        'ERR_CREATI',
        'Xuvhr',
        'create',
        'defineProp',
        'ls/ApiMess',
        '1018520piPRkk'
    ];
    a = function () {
        return J;
    };
    return a();
}
const ApiMessage_1 = __importDefault(require(F(0xb6) + F(0xd0) + F(0xb9))), UpsertMessageAPIService = async ({
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
        const H = E, I = E, u = {};
        u[H(0xcd)] = I(0xcc) + H(0xbd);
        const v = u;
        let w;
        const x = {};
        x[I(0xd6)] = i, x[H(0xcb)] = t;
        const y = {};
        y[I(0xc2)] = x;
        const z = await ApiMessage_1[I(0xbc)][I(0xc5)](y);
        if (z) {
            const A = {};
            A[I(0xb8)] = h, A[H(0xd6)] = i, A[H(0xba)] = j, A[H(0xd2)] = l, A[H(0xc6)] = m, A[H(0xdb)] = n, A[H(0xc1)] = o, A[H(0xbe)] = p, A[H(0xd8) + 'y'] = q, A[I(0xdc)] = r, A[I(0xd3)] = s, A[I(0xcb)] = t, await z[I(0xbf)](A), w = await z[H(0xc7)]();
        } else {
            const B = {};
            B[H(0xb8)] = h, B[I(0xd6)] = i, B[I(0xba)] = j, B[H(0xd2)] = l, B[I(0xc6)] = m, B[I(0xdb)] = n, B[I(0xc1)] = o, B[I(0xbe)] = p, B[H(0xd8) + 'y'] = q, B[I(0xdc)] = r, B[I(0xd3)] = s, B[H(0xcb)] = t, w = await ApiMessage_1[I(0xbc)][I(0xce)](B);
        }
        if (!w)
            throw new Error(v[H(0xcd)]);
        return w;
    };
exports[F(0xbc)] = UpsertMessageAPIService;