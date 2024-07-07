'use strict';
const o = b, p = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x10d0 + 0x3 * 0x600 + -0x216d);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x16b)) / (-0x63b * 0x5 + -0x12bc + 0x31e4) + -parseInt(n(0x179)) / (-0x21f * 0xa + 0x726 * -0x3 + -0x1555 * -0x2) * (-parseInt(n(0x164)) / (0x1561 + 0x1 * -0x244d + 0x1 * 0xeef)) + parseInt(n(0x17c)) / (0x1604 + -0x1397 + -0x269) * (-parseInt(m(0x16a)) / (0x31b + -0x49 * 0xb + 0xd)) + parseInt(m(0x180)) / (-0x1ce2 + 0x26e * 0xa + 0x49c) * (parseInt(n(0x17a)) / (0x41b * -0x2 + 0x1 * 0x1a35 + -0x11f8)) + parseInt(n(0x172)) / (-0x97b + -0x7dd + 0x22c * 0x8) + parseInt(n(0x170)) / (0x14 * -0x109 + -0x1 * -0x6cb + 0xdf2 * 0x1) + parseInt(m(0x169)) / (-0x19c1 + -0x575 + -0x40 * -0x7d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xb79fb + -0x179a * -0x93 + 0x54962));
var __importDefault = this && this[o(0x166) + o(0x173)] || function (c) {
    const q = o;
    return c && c[q(0x174)] ? c : { 'default': c };
};
const k = {};
k[o(0x17b)] = !![], Object[p(0x178) + p(0x16e)](exports, p(0x174), k);
function a() {
    const t = [
        '1287528snoaLW',
        'destroy',
        'findOne',
        'rrors/AppE',
        '1284wCMebo',
        'P_AUTO_REP',
        '131811tfEDBN',
        'odels/Step',
        '__importDe',
        'ERR_NO_STE',
        'default',
        '967130wwyhun',
        '10MNnfYR',
        '526653AszPQX',
        '../../../e',
        'rror',
        'erty',
        '../../../m',
        '3617946xXPhOR',
        'where',
        '3919440vVXJmj',
        'fault',
        '__esModule',
        'sReply',
        'LY_FOUND',
        'Oezud',
        'defineProp',
        '14UYkdPe',
        '11669gOCREj',
        'value'
    ];
    a = function () {
        return t;
    };
    return a();
}
const StepsReply_1 = __importDefault(require(o(0x16f) + o(0x165) + o(0x175))), AppError_1 = __importDefault(require(p(0x16c) + p(0x17f) + o(0x16d))), DeleteStepsReplyService = async f => {
        const r = p, s = o, g = {};
        g[r(0x177)] = r(0x167) + s(0x163) + r(0x176);
        const h = g, i = {};
        i['id'] = f;
        const j = {};
        j[r(0x171)] = i;
        const l = await StepsReply_1[r(0x168)][r(0x17e)](j);
        if (!l)
            throw new AppError_1[(r(0x168))](h[r(0x177)], 0x113 * 0x4 + -0x6 * -0x669 + -0x292e);
        await l[r(0x17d)]();
    };
exports[o(0x168)] = DeleteStepsReplyService;