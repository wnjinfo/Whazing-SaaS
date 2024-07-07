'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x16f)) / (0xbe8 + -0x16e6 + 0x5 * 0x233) + parseInt(m(0x16c)) / (0x463 * -0x4 + 0x3 * 0x432 + 0x4f8) * (-parseInt(n(0x168)) / (-0xdf5 + -0x11da + -0xfe9 * -0x2)) + parseInt(m(0x174)) / (-0xbff + 0x196a + 0xd67 * -0x1) * (parseInt(n(0x16b)) / (0x1004 + 0x12c2 + -0x22c1)) + -parseInt(m(0x17d)) / (-0x2011 * 0x1 + -0x88d * 0x3 + 0x13 * 0x30a) + parseInt(n(0x166)) / (0x7e1 + 0x7cc * 0x5 + -0x2ed6) * (parseInt(m(0x17b)) / (0x5a7 * 0x3 + 0xad8 + -0x1bc5)) + parseInt(n(0x165)) / (-0x1 * 0xccf + -0xd3 * 0x17 + -0x7 * -0x48b) * (parseInt(n(0x175)) / (-0x5 * 0x69d + -0x51e + 0x2639)) + -parseInt(n(0x170)) / (0x15b * -0xe + -0x5 * 0x606 + 0x3123);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2c753 * 0x5 + 0x8cf59 + 0x1 * -0xc5db6));
function a() {
    const t = [
        '1105hlKRaG',
        '2KWsGZY',
        'erty',
        'ls/Queue',
        '1037700mXqOHg',
        '25093090aMVpWz',
        'fault',
        'default',
        'create',
        '10288dwVzzZ',
        '3280zFVtCs',
        'userId',
        'tenantId',
        'value',
        'defineProp',
        'isActive',
        '3945944egbqhV',
        '__importDe',
        '309672mSmAOf',
        'color',
        '../../mode',
        '34236VNryAn',
        '14keztbe',
        'queue',
        '2490198KHxyrV',
        'from_ia',
        '__esModule'
    ];
    a = function () {
        return t;
    };
    return a();
}
var __importDefault = this && this[o(0x17c) + p(0x171)] || function (c) {
    const q = o;
    return c && c[q(0x16a)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x5a * 0x14 + -0x2 * -0x53 + 0x7c5 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[o(0x178)] = !![], Object[p(0x179) + p(0x16d)](exports, o(0x16a), k);
const Queue_1 = __importDefault(require(p(0x164) + o(0x16e))), CreateQueueService = async ({
        queue: d,
        isActive: e,
        userId: f,
        from_ia: g,
        color: h,
        tenantId: i
    }) => {
        const r = p, s = p, j = {};
        j[r(0x167)] = d, j[s(0x17a)] = e, j[s(0x176)] = f, j[s(0x169)] = g, j[r(0x163)] = h, j[r(0x177)] = i;
        const l = await Queue_1[r(0x172)][s(0x173)](j);
        return l;
    };
exports[p(0x172)] = CreateQueueService;