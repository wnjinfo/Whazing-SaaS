'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0xdb)) / (0x797 * -0x1 + 0x12 * 0x2b + 0x3 * 0x186) + -parseInt(n(0xb8)) / (0x329 + -0x1d0a + 0x19e3) * (-parseInt(n(0xd2)) / (0x12dd + 0x22 * -0x3 + 0x1274 * -0x1)) + -parseInt(o(0xc6)) / (-0x33 * 0x9a + 0x1b2a + -0x1 * -0x388) + -parseInt(o(0xdc)) / (0x15e7 + -0x63d * 0x4 + 0x2 * 0x189) * (parseInt(o(0xcb)) / (0x21b4 + 0x216 * 0x11 + -0x4524)) + -parseInt(n(0xb5)) / (-0x1 * -0x719 + 0x24 * -0x1f + -0x2b6) + parseInt(o(0xd3)) / (0x7bb + -0x29 * 0xb2 + 0x14cf) + parseInt(o(0xd1)) / (0x56d + -0xef1 + 0x98d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x9 * 0x50e3 + 0x143 * 0x3ef + -0x4dae * 0xc));
function a() {
    const u = [
        'xBbGZ',
        'uIqAC',
        '__importDe',
        'findOne',
        '2691024SvbcjK',
        'createdAt',
        'ERR_NO_CHA',
        'tokenAPI',
        'BbyAB',
        'value',
        '6105834IXXiGS',
        '53121wMSrph',
        '195584Pmywvi',
        'where',
        'omXsW',
        'fault',
        'default',
        '../../mode',
        'fbObject',
        'MvFwR',
        '163904UcODNZ',
        '5tgYLbT',
        '__esModule',
        'SwXIg',
        'fbPageId',
        'attributes',
        'sAMjT',
        'status',
        '2256457iYTtjO',
        'defineProp',
        'erty',
        '20zlaajh',
        'name',
        'tenantId',
        'instagramK',
        'ls/Whatsap',
        'type',
        '../../erro',
        'NNEL_FOUND',
        'HxsSR',
        'zzuYk',
        'updatedAt',
        'rs/AppErro',
        'VHZfN',
        'ChwAb',
        '4RCWNrP'
    ];
    a = function () {
        return u;
    };
    return a();
}
var __importDefault = this && this[p(0xc9) + p(0xd6)] || function (c) {
    const r = q;
    return c && c[r(0xaf)] ? c : { 'default': c };
};
const k = {};
k[p(0xd0)] = !![], Object[p(0xb6) + p(0xb7)](exports, q(0xaf), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x86c + 0x6f2 + 0x229);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Whatsapp_1 = __importDefault(require(q(0xd8) + p(0xbc) + 'p')), AppError_1 = __importDefault(require(p(0xbe) + q(0xc3) + 'r')), MessengerShowChannel = async ({fbPageId: f}) => {
        const s = p, t = q, g = {};
        g[s(0xc0)] = t(0xb9), g[t(0xd5)] = t(0xb4), g[t(0xb3)] = s(0xbd), g[s(0xc5)] = s(0xcc), g[t(0xc7)] = t(0xc2), g[s(0xc8)] = s(0xba), g[t(0xda)] = t(0xce), g[t(0xcf)] = s(0xb1), g[t(0xc4)] = t(0xd9), g[t(0xb0)] = s(0xbb) + 'ey', g[t(0xc1)] = t(0xcd) + t(0xbf);
        const h = g, i = [
                'id',
                h[t(0xc0)],
                h[s(0xd5)],
                h[t(0xb3)],
                h[s(0xc5)],
                h[s(0xc7)],
                h[s(0xc8)],
                h[t(0xda)],
                h[t(0xcf)],
                h[t(0xc4)],
                h[t(0xb0)]
            ], j = {};
        j[s(0xb1)] = f;
        const l = {};
        l[s(0xd4)] = j, l[s(0xb2)] = i;
        const m = await Whatsapp_1[s(0xd7)][t(0xca)](l);
        if (!m)
            throw new AppError_1[(s(0xd7))](h[s(0xc1)], -0x8e4 * -0x4 + -0xf7 + -0x2105);
        return m;
    };
exports[q(0xd7)] = MessengerShowChannel;