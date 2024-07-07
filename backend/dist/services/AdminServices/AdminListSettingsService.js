'use strict';
const n = b, o = b;
function a() {
    const s = [
        'default',
        '224282IlCbWG',
        '4717181qoyYiV',
        'defineProp',
        '30delGHM',
        '24606yMWyru',
        'ASC',
        'tlhMg',
        'where',
        'erty',
        '6gieFHd',
        'tenantId',
        '../../mode',
        '294294EqbtzM',
        '__importDe',
        'fault',
        '8mszqCd',
        '215wvyavo',
        '348qFlmJA',
        'order',
        '1587753juHdBG',
        '41995uoyWIk',
        'value',
        'ls/Setting',
        'findAll',
        '627464eaqpDR',
        '__esModule'
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
            const f = -parseInt(l(0xfc)) / (0x5 * 0x5ae + -0x2506 + 0x8a1) + -parseInt(l(0x103)) / (0xfbd * 0x1 + -0x1524 + 0x569) * (parseInt(l(0x10c)) / (0x5 * 0x4e5 + -0x15ad + -0x1 * 0x2c9)) + parseInt(m(0x100)) / (-0x68 * -0x53 + -0xba9 + -0x160b) + parseInt(l(0xf8)) / (0x1 * -0x1c87 + -0x137e + 0x300a) * (parseInt(l(0x107)) / (0x23e8 + 0x8f * -0x2c + -0xb4e)) + parseInt(l(0x104)) / (-0xfb4 + -0x1135 + 0x20f0) * (parseInt(m(0xf7)) / (0xcbf + 0x7 * 0x38b + -0x2584)) + parseInt(l(0xfb)) / (-0xb22 + 0xde2 + -0x2b7) * (parseInt(m(0x106)) / (-0x1 * 0x5cb + 0x3a * -0x10 + 0x1 * 0x975)) + parseInt(m(0xf4)) / (0x23 * 0x46 + 0x15a0 + -0x1f27) * (-parseInt(l(0xf9)) / (0x18cb + 0x95 * -0x1 + -0x182a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xc1c07 + -0x48c97 + -0x4f8));
var __importDefault = this && this[n(0xf5) + n(0xf6)] || function (c) {
    const p = o;
    return c && c[p(0x101)] ? c : { 'default': c };
};
const k = {};
k[n(0xfd)] = !![], Object[o(0x105) + o(0x10b)](exports, n(0x101), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1e8a + -0x5aa + 0x2527);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Setting_1 = __importDefault(require(o(0xf3) + o(0xfe))), AdminListSettingsService = async e => {
        const q = o, r = n, f = {};
        f[q(0x109)] = r(0x108);
        const g = f, h = {};
        e && (h[r(0x10d)] = e);
        const i = {};
        i[q(0x10a)] = h, i[q(0xfa)] = [[
                'id',
                g[q(0x109)]
            ]];
        const j = await Setting_1[q(0x102)][q(0xff)](i);
        return j;
    };
exports[n(0x102)] = AdminListSettingsService;