'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x1cc)) / (-0xb53 + -0x4 * -0x670 + -0xe6c) * (parseInt(m(0x1d0)) / (0x3 * -0x5db + 0x1329 + 0x196 * -0x1)) + -parseInt(m(0x1cd)) / (0xaa6 + 0x25ae + -0x3051) * (parseInt(m(0x1db)) / (-0xc83 + -0x14bf + 0x2146)) + parseInt(m(0x1c9)) / (0x449 * 0x2 + -0xad * 0x1c + 0xa5f) * (-parseInt(l(0x1cb)) / (0xd6 + 0x27 * 0x86 + 0x16 * -0xf7)) + parseInt(m(0x1da)) / (0xb24 + -0x1262 + 0x745) * (-parseInt(m(0x1dc)) / (-0x203d + 0x39a + 0x1cab)) + parseInt(m(0x1d2)) / (0x110b + 0x139 + -0x123b) + -parseInt(l(0x1d3)) / (0x1c92 + 0x1be + -0x1e46) * (-parseInt(l(0x1d9)) / (-0x15e5 + 0x2d9 + -0x1b * -0xb5)) + -parseInt(m(0x1c4)) / (-0x1 * -0x267c + 0xf48 + -0x35b8) * (-parseInt(l(0x1ca)) / (-0x1 * -0x102a + -0x2e * 0x2e + -0x1 * 0x7d9));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x116777 + -0xe7 * -0x3d1 + 0x1ae171));
function a() {
    const s = [
        'fault',
        '232rMWnXx',
        'ls/Tag',
        '5978205fjtuWj',
        '20IpDdlE',
        'color',
        'erty',
        'defineProp',
        'tag',
        '../../mode',
        '1608992LxRCaD',
        '558124RdUKMT',
        '4TOweVm',
        '56LYOrbb',
        'userId',
        '__importDe',
        'tenantId',
        '576456ZBgPqH',
        'isActive',
        'create',
        'value',
        '__esModule',
        '5NWbDHw',
        '858wSOvqK',
        '7973022NyiDwH',
        '2314RBQVpg',
        '3375525zwprKh',
        'default'
    ];
    a = function () {
        return s;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0xcfb + -0x10 + -0xb29);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[n(0x1c2) + n(0x1cf)] || function (c) {
    const p = o;
    return c && c[p(0x1c8)] ? c : { 'default': c };
};
const k = {};
k[n(0x1c7)] = !![], Object[o(0x1d6) + o(0x1d5)](exports, o(0x1c8), k);
const Tag_1 = __importDefault(require(n(0x1d8) + o(0x1d1))), CreateTagService = async ({
        tag: d,
        color: e,
        isActive: f,
        userId: g,
        tenantId: h
    }) => {
        const q = n, r = o, i = {};
        i[q(0x1d7)] = d, i[q(0x1d4)] = e, i[r(0x1c5)] = f, i[q(0x1dd)] = g, i[q(0x1c3)] = h;
        const j = await Tag_1[q(0x1ce)][q(0x1c6)](i);
        return j;
    };
exports[n(0x1ce)] = CreateTagService;