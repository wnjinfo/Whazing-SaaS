'use strict';
const n = b, o = b;
function a() {
    const s = [
        '__esModule',
        '1057528qtGaxQ',
        'dueDate',
        'ANT_FOUND',
        'ERR_NO_TEN',
        '297196tAkajx',
        'rs/AppErro',
        '15540894zADAlY',
        '3elvFXw',
        'attributes',
        'erty',
        'findByPk',
        '14754qKhUaD',
        '3940628HoxUku',
        'ls/Tenant',
        'value',
        '2185OOyRyd',
        '../../erro',
        'fault',
        'default',
        'yVmJz',
        'xVjZt',
        '612114sblrTD',
        'defineProp',
        '../../mode',
        '6801382mVkVbu',
        '__importDe'
    ];
    a = function () {
        return s;
    };
    return a();
}
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x15e)) / (-0x1e87 * 0x1 + -0x693 + 0x54d * 0x7) + -parseInt(m(0x154)) / (-0x605 + 0x24 + 0x1 * 0x5e3) * (parseInt(l(0x161)) / (0x435 + -0x14a7 + 0x1075)) + -parseInt(l(0x166)) / (0x1 * 0x7d7 + -0xa38 + 0x265) + parseInt(l(0x169)) / (-0x1d7c + -0x1d * 0xe1 + 0x36fe) * (parseInt(l(0x165)) / (-0x10f8 + -0x1792 + 0x2890)) + -parseInt(m(0x157)) / (0x2371 * 0x1 + 0x53b + 0x1 * -0x28a5) + parseInt(m(0x15a)) / (-0x2596 + -0xaf * -0x12 + 0x50 * 0x51) + parseInt(m(0x160)) / (-0x1808 + 0x16a * 0x13 + -0x3 * 0xef);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xd82f3 * 0x2 + -0x68d1a + -0x5b3f4));
var __importDefault = this && this[n(0x158) + n(0x150)] || function (c) {
    const p = n;
    return c && c[p(0x159)] ? c : { 'default': c };
};
const k = {};
k[n(0x168)] = !![], Object[n(0x155) + n(0x163)](exports, n(0x159), k);
const Tenant_1 = __importDefault(require(o(0x156) + o(0x167))), AppError_1 = __importDefault(require(o(0x16a) + o(0x15f) + 'r')), ShowdueDateService = async ({tenantId: e}) => {
        const q = o, r = o, f = {};
        f[q(0x152)] = q(0x15b), f[r(0x153)] = r(0x15d) + r(0x15c);
        const g = f, h = {};
        h[r(0x162)] = [g[q(0x152)]];
        const i = await Tenant_1[r(0x151)][q(0x164)](e, h);
        if (!i)
            throw new AppError_1[(q(0x151))](g[q(0x153)], 0xbe7 + 0x9a9 * -0x3 + -0x638 * -0x3);
        return i;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1987 * 0x1 + -0xa * -0xc0 + -0x1fb7);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[n(0x151)] = ShowdueDateService;