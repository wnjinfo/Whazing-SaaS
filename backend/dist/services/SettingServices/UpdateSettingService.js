'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xc1 * 0x3 + -0xcdc * 0x1 + -0xeb * -0xc);
        let h = e[f];
        return h;
    }, b(c, d);
}
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x76)) / (-0x20b3 + 0x11f5 + -0x19 * -0x97) * (parseInt(q(0x84)) / (-0x13d * -0x5 + 0xc * -0xab + 0x1d5)) + parseInt(r(0x78)) / (-0x1 * -0x134e + 0xfe4 * 0x2 + 0x3313 * -0x1) + -parseInt(r(0x7e)) / (-0x1eaf * -0x1 + -0x10 * 0xb + 0x1dfb * -0x1) + -parseInt(q(0x6b)) / (-0x2 * -0x1052 + -0x18e * -0x8 + -0x1 * 0x2d0f) * (-parseInt(r(0x6d)) / (-0x14e6 + 0x179c + -0x2b0)) + -parseInt(q(0x7a)) / (-0x2667 + 0xc4b * 0x1 + -0x1 * -0x1a23) + parseInt(r(0x83)) / (-0x1 * 0x12b7 + 0x192a + -0x66b) + parseInt(r(0x7b)) / (0x5e * 0x3b + 0x1fc7 + 0x8 * -0x6ad) * (-parseInt(q(0x86)) / (-0x11 * -0x102 + -0x4ee * 0x1 + -0xc2a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x14 * -0x136b1 + 0xbb123 * 0x1 + -0x157469));
var __importDefault = this && this[s(0x70) + t(0x79)] || function (c) {
    const u = s;
    return c && c[u(0x77)] ? c : { 'default': c };
};
const k = {};
k[t(0x7d)] = !![], Object[s(0x75) + s(0x6f)](exports, t(0x77), k);
const AppError_1 = __importDefault(require(t(0x81) + s(0x72) + 'r')), Setting_1 = __importDefault(require(s(0x6e) + t(0x6c))), UpdateSettingService = async ({
        key: g,
        value: h,
        tenantId: i
    }) => {
        const v = s, w = s, j = {};
        j[v(0x85)] = v(0x82) + v(0x71);
        const l = j, m = {};
        m[v(0x87)] = g, m[w(0x7c)] = i;
        const n = {};
        n[v(0x74)] = m;
        const o = await Setting_1[v(0x73)][w(0x80)](n);
        if (!o)
            throw new AppError_1[(w(0x73))](l[v(0x85)], -0xb1e * 0x1 + -0x826 * 0x1 + 0x14d8);
        const p = {};
        return p[v(0x7d)] = h, await o[v(0x7f)](p), o;
    };
function a() {
    const x = [
        'erty',
        '__importDe',
        'TING_FOUND',
        'rs/AppErro',
        'default',
        'where',
        'defineProp',
        '1JcBYsj',
        '__esModule',
        '4970325KmHEbB',
        'fault',
        '12430271tqkmZq',
        '9zOTKHg',
        'tenantId',
        'value',
        '3186404lCvWxw',
        'update',
        'findOne',
        '../../erro',
        'ERR_NO_SET',
        '607432MxNmKY',
        '2364094osKXDz',
        'XhvlD',
        '9468020ghQOkE',
        'key',
        '7776655qcFSjh',
        'ls/Setting',
        '6HAcLnz',
        '../../mode'
    ];
    a = function () {
        return x;
    };
    return a();
}
exports[t(0x73)] = UpdateSettingService;