'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x7f)) / (0x100d * 0x1 + 0x2 * -0xa16 + -0xb * -0x60) * (parseInt(l(0x80)) / (-0x393 + -0x24e6 + 0x2b * 0xf1)) + parseInt(m(0x81)) / (0x13 * 0x20e + 0x18d + -0x6a * 0x62) + parseInt(l(0x78)) / (0x1afb + -0x2111 + -0x47 * -0x16) * (parseInt(l(0x82)) / (-0x2 * -0x1d7 + -0x143 * 0x2 + -0x123)) + -parseInt(m(0x74)) / (-0x879 + 0x22b * 0x2 + 0x47 * 0xf) * (-parseInt(l(0x75)) / (0xad * -0x12 + 0x472 + 0x7bf)) + -parseInt(l(0x8a)) / (0x1d72 * 0x1 + -0x188 * -0x2 + -0x207a * 0x1) + parseInt(m(0x7a)) / (0x12d7 + -0x125 * -0x9 + -0x1d1b) * (parseInt(m(0x73)) / (0x1902 + 0x11 * -0x9e + -0xe7a)) + -parseInt(l(0x79)) / (-0x1d76 + -0x1157 * -0x2 + -0x1 * 0x52d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xa7 * 0xf85 + 0x1 * -0x1177a3 + 0x139492));
var __importDefault = this && this[n(0x85) + o(0x77)] || function (c) {
    const p = o;
    return c && c[p(0x87)] ? c : { 'default': c };
};
const k = {};
k[n(0x72)] = !![], Object[n(0x76) + n(0x8b)](exports, o(0x87), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1b6 + 0x2274 + -0x23b8);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const s = [
        'ls/Tag',
        '../../mode',
        '__importDe',
        'isActive',
        '__esModule',
        'default',
        'tenantId',
        '8593072xXHRoU',
        'erty',
        'value',
        '10cixdpD',
        '6dwFwYU',
        '6324409wtLkbM',
        'defineProp',
        'fault',
        '884iOxoAa',
        '16318148eVAwKL',
        '1213731ZTtBVZ',
        'create',
        'color',
        'tag',
        'userId',
        '18SaqspN',
        '68954aIoQGz',
        '2636886rdihnE',
        '18590wwKxcs'
    ];
    a = function () {
        return s;
    };
    return a();
}
const Tag_1 = __importDefault(require(o(0x84) + n(0x83))), CreateTagService = async ({
        tag: d,
        color: e,
        isActive: f,
        userId: g,
        tenantId: h
    }) => {
        const q = o, r = o, i = {};
        i[q(0x7d)] = d, i[q(0x7c)] = e, i[r(0x86)] = f, i[r(0x7e)] = g, i[q(0x89)] = h;
        const j = await Tag_1[q(0x88)][r(0x7b)](i);
        return j;
    };
exports[o(0x88)] = CreateTagService;