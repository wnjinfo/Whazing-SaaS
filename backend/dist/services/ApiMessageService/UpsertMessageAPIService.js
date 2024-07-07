'use strict';
const E = b, F = b;
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(C(0x130)) / (0x565 + 0x10 * 0x11c + -0x1724) + parseInt(C(0x115)) / (-0x2139 + -0x1919 + 0x3a54) * (-parseInt(C(0x13c)) / (0xa79 + -0x2f6 * 0x8 + 0xd3a * 0x1)) + parseInt(D(0x134)) / (-0x4 * 0x18a + 0x231 + 0x3fb) * (parseInt(D(0x122)) / (0x1 * 0x7b5 + -0x27 * 0x61 + 0xf * 0x79)) + parseInt(C(0x118)) / (0x8d3 * -0x3 + -0x1 * -0x223d + -0x7be) + -parseInt(D(0x131)) / (0xd46 + 0xd * 0x192 + -0x7 * 0x4cf) + -parseInt(D(0x12c)) / (0x3c3 + -0x6c4 * 0x4 + 0x3 * 0x7c7) * (parseInt(C(0x12f)) / (0x8a7 * -0x2 + 0x5 * 0x505 + 0x2 * -0x3e1)) + parseInt(D(0x138)) / (0x1149 + 0x1bf * -0x11 + 0x8 * 0x18e) * (parseInt(C(0x12b)) / (-0x9a * -0x1c + -0x3 * 0x661 + 0x2 * 0x12b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x324cd + -0x117f0 + -0x118f));
var __importDefault = this && this[E(0x117) + E(0x126)] || function (c) {
    const G = F;
    return c && c[G(0x11e)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xcd7 + -0x1716 + 0x2502);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
function a() {
    const J = [
        '13359UkBMNT',
        'mediaUrl',
        '4iidaAN',
        'body',
        '__importDe',
        '603960qkDNuK',
        'default',
        'value',
        'defineProp',
        'update',
        'mediaName',
        '__esModule',
        'ERR_CREATI',
        'messageId',
        'timestamp',
        '320XXfQAh',
        'reload',
        'create',
        'tenantId',
        'fault',
        'externalKe',
        'erty',
        'YlHAE',
        'apiConfig',
        '4711729cqiggy',
        '1716632gdqTCN',
        'age',
        'messageWA',
        '9SYPpjy',
        '14273suJxDO',
        '1291773ScqhzD',
        'ack',
        'sessionId',
        '1448wDVcyS',
        'where',
        '../../mode',
        'ls/ApiMess',
        '10rXYKBz',
        'number',
        'findOne',
        'NG_MESSAGE'
    ];
    a = function () {
        return J;
    };
    return a();
}
k[E(0x11a)] = !![], Object[F(0x11b) + F(0x128)](exports, E(0x11e), k);
const ApiMessage_1 = __importDefault(require(E(0x136) + E(0x137) + F(0x12d))), UpsertMessageAPIService = async ({
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
        const H = F, I = E, u = {};
        u[H(0x129)] = H(0x11f) + H(0x13b);
        const v = u;
        let w;
        const x = {};
        x[H(0x120)] = i, x[H(0x125)] = t;
        const y = {};
        y[H(0x135)] = x;
        const z = await ApiMessage_1[H(0x119)][I(0x13a)](y);
        if (z) {
            const A = {};
            A[I(0x133)] = h, A[I(0x120)] = i, A[H(0x116)] = j, A[H(0x132)] = l, A[H(0x139)] = m, A[H(0x11d)] = n, A[I(0x13d)] = o, A[I(0x121)] = p, A[H(0x127) + 'y'] = q, A[H(0x12e)] = r, A[H(0x12a)] = s, A[I(0x125)] = t, await z[I(0x11c)](A), w = await z[H(0x123)]();
        } else {
            const B = {};
            B[H(0x133)] = h, B[I(0x120)] = i, B[I(0x116)] = j, B[H(0x132)] = l, B[I(0x139)] = m, B[I(0x11d)] = n, B[I(0x13d)] = o, B[I(0x121)] = p, B[I(0x127) + 'y'] = q, B[H(0x12e)] = r, B[I(0x12a)] = s, B[I(0x125)] = t, w = await ApiMessage_1[H(0x119)][I(0x124)](B);
        }
        if (!w)
            throw new Error(v[I(0x129)]);
        return w;
    };
exports[E(0x119)] = UpsertMessageAPIService;