'use strict';
const n = b, o = b;
function a() {
    const s = [
        'defineProp',
        '3149640lStBjE',
        'default',
        'ASC',
        '51694njkPnS',
        'order',
        'erty',
        '205716zKKQNY',
        '5582112mqfmGi',
        'value',
        'findAll',
        '__esModule',
        '21691296SXAoyD',
        '72PymVcG',
        '1939860oAJmgN',
        'AhnGZ',
        'ls/Setting',
        '../../mode',
        'fault',
        '__importDe',
        '902808zpNdyO',
        'tenantId',
        '20AAEzEn',
        'where'
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
            const f = parseInt(l(0x10d)) / (0x1033 + -0xdf5 * 0x1 + -0x23d) * (parseInt(m(0x11f)) / (-0x10cf + 0x11a6 + -0xd5)) + -parseInt(l(0x11d)) / (0x1269 * -0x1 + 0x652 + 0xc1a) + -parseInt(m(0x10a)) / (-0x18f8 + 0x2060 + -0x764) + -parseInt(m(0x117)) / (-0x10cc + -0x1859 * 0x1 + 0x292a) + -parseInt(l(0x116)) / (0x182 + -0x277 + -0x1 * -0xfb) * (parseInt(l(0x110)) / (-0x1925 + 0x229f * -0x1 + 0x3bcb)) + -parseInt(l(0x111)) / (0xa9b + 0x11d * 0x1b + -0x5ce * 0x7) + parseInt(l(0x115)) / (-0xd * 0xde + -0x1949 + 0x2498);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0xa10d5 + 0xc * 0x275c + -0x6305 * 0xf));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1f3 * 0x6 + 0xfb9 + -0x17f * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[n(0x11c) + o(0x11b)] || function (c) {
    const p = n;
    return c && c[p(0x114)] ? c : { 'default': c };
};
const k = {};
k[o(0x112)] = !![], Object[n(0x109) + o(0x10f)](exports, n(0x114), k);
const Setting_1 = __importDefault(require(n(0x11a) + o(0x119))), AdminListSettingsService = async e => {
        const q = n, r = o, f = {};
        f[q(0x118)] = q(0x10c);
        const g = f, h = {};
        e && (h[r(0x11e)] = e);
        const i = {};
        i[r(0x120)] = h, i[q(0x10e)] = [[
                'id',
                g[q(0x118)]
            ]];
        const j = await Setting_1[q(0x10b)][r(0x113)](i);
        return j;
    };
exports[n(0x10b)] = AdminListSettingsService;