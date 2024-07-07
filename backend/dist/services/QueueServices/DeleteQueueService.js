'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x19b)) / (-0x6 * -0x662 + -0x19c6 + -0x1 * 0xc85) * (parseInt(o(0x191)) / (-0x3be * -0x2 + -0x889 + 0x10f)) + -parseInt(p(0x1a0)) / (0x5 * -0x301 + -0x129e + 0x2 * 0x10d3) + -parseInt(o(0x1a3)) / (-0x21f4 + -0x3 * -0xaf1 + -0x1 * -0x125) + parseInt(p(0x18a)) / (-0x23 * 0x3f + 0x270a + -0x1e68) + parseInt(p(0x193)) / (0x1827 + 0x1c96 + -0x34b7) + parseInt(p(0x18f)) / (0x1d * -0x58 + -0x7dc * 0x1 + 0x11db) + parseInt(p(0x189)) / (-0xcf4 * 0x2 + 0x20ef + -0x6ff) * (-parseInt(o(0x19f)) / (-0x2368 + -0x1e0e + 0x15d5 * 0x3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xef3a * 0x1 + -0x8 * -0xf35f + 0x344c9));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4 * -0xa + 0x1d * -0xb + 0x29c);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[q(0x199) + r(0x18c)] || function (c) {
    const s = r;
    return c && c[s(0x19e)] ? c : { 'default': c };
};
function a() {
    const v = [
        '45uBYjXW',
        '3604587AsvpvQ',
        'rs/AppErro',
        'erty',
        '5450236yGHvLj',
        'defineProp',
        'value',
        'findOne',
        'ERR_NO_QUE',
        '711456wIQXcx',
        '3833030eCChjF',
        'ERR_QUEUE_',
        'fault',
        'destroy',
        'ls/Queue',
        '4634014qdfCAN',
        'UE_FOUND',
        '34OaVjds',
        'TICKET_EXI',
        '6664572KqeXzu',
        'default',
        'STS',
        'RULxY',
        '../../mode',
        'tenantId',
        '__importDe',
        'oDBoB',
        '73133QRLaCE',
        '../../erro',
        'where',
        '__esModule'
    ];
    a = function () {
        return v;
    };
    return a();
}
const k = {};
k[r(0x186)] = !![], Object[r(0x185) + q(0x1a2)](exports, r(0x19e), k);
const Queue_1 = __importDefault(require(r(0x197) + r(0x18e))), AppError_1 = __importDefault(require(q(0x19c) + q(0x1a1) + 'r')), DeleteQueueService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = r, u = r, h = {};
        h[t(0x19a)] = u(0x188) + t(0x190), h[u(0x196)] = u(0x18b) + u(0x192) + u(0x195);
        const i = h, j = {};
        j['id'] = f, j[u(0x198)] = g;
        const l = {};
        l[t(0x19d)] = j;
        const m = await Queue_1[u(0x194)][u(0x187)](l);
        if (!m)
            throw new AppError_1[(t(0x194))](i[u(0x19a)], 0xeec + -0x159a + 0x842);
        try {
            await m[u(0x18d)]();
        } catch (n) {
            throw new AppError_1[(t(0x194))](i[t(0x196)], 0x1bf2 + 0xa * 0x14d + -0x2760);
        }
    };
exports[q(0x194)] = DeleteQueueService;