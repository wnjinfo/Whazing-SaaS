'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x101)) / (-0x1f8b * 0x1 + -0x14fe + 0x348a) + -parseInt(l(0x104)) / (0x59f + 0x1b9b + -0x2138) * (parseInt(m(0xf2)) / (-0x3bb * -0x2 + -0xdd * -0x1d + -0x207c)) + -parseInt(m(0xf5)) / (0x5d1 * -0x4 + -0x265d + 0x1 * 0x3da5) * (-parseInt(l(0xff)) / (-0xe9 * -0x3 + -0x2 * 0x7d3 + 0x90 * 0x17)) + -parseInt(l(0x105)) / (0x50d * -0x5 + 0xd6c * 0x2 + -0x1 * 0x191) + -parseInt(l(0xf4)) / (0x1aa2 + 0x2513 * -0x1 + 0xa78) * (parseInt(l(0x109)) / (0x1611 * -0x1 + 0xd3e + 0x8db)) + parseInt(l(0xfa)) / (-0xd01 * 0x2 + 0xbd5 + 0xe36) * (parseInt(m(0xfc)) / (0x17ab + -0x1968 + 0x1c7)) + -parseInt(l(0x108)) / (-0x1ecf + -0x10 * -0x223 + -0x356) * (-parseInt(l(0xf6)) / (0x5 * -0x80 + 0x21b + 0x71));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x32bf4 + 0xa3554 + 0x7b8ce));
var __importDefault = this && this[n(0xef) + o(0x100)] || function (c) {
    const p = o;
    return c && c[p(0xf1)] ? c : { 'default': c };
};
const k = {};
function a() {
    const s = [
        'ls/Setting',
        'default',
        '13491HnDWzB',
        'tenantId',
        '7640pkhUWB',
        'erty',
        'ASC',
        '30FPETQK',
        'fault',
        '1160748ggoyBx',
        '../../mode',
        'where',
        '124286yVsOyf',
        '5512872skpVQi',
        'wmsSZ',
        'value',
        '23689930imAazd',
        '48azHDVR',
        '__importDe',
        'findAll',
        '__esModule',
        '48UExggd',
        'defineProp',
        '1819524EXEbrV',
        '98772XfmPeG',
        '24FCzLWr',
        'order'
    ];
    a = function () {
        return s;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x18a4 + 0x2432 + -0xa9f);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[n(0x107)] = !![], Object[o(0xf3) + n(0xfd)](exports, o(0xf1), k);
const Setting_1 = __importDefault(require(n(0x102) + o(0xf8))), AdminListSettingsService = async e => {
        const q = o, r = o, f = {};
        f[q(0x106)] = r(0xfe);
        const g = f, h = {};
        e && (h[r(0xfb)] = e);
        const i = {};
        i[q(0x103)] = h, i[q(0xf7)] = [[
                'id',
                g[r(0x106)]
            ]];
        const j = await Setting_1[q(0xf9)][q(0xf0)](i);
        return j;
    };
exports[n(0xf9)] = AdminListSettingsService;