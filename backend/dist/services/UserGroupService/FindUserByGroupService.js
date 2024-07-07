'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x1d3)) / (0x244a + 0x4 * 0x22f + -0x2d05) + -parseInt(n(0x1cb)) / (0x537 + -0x19be + 0x2ef * 0x7) * (parseInt(n(0x1d5)) / (0x205 + 0xa * 0x17b + -0x10d0)) + parseInt(o(0x1d6)) / (0x8b + -0x70a + 0x1 * 0x683) + parseInt(n(0x1d7)) / (0x1 * 0x24da + -0x14f4 + -0x10f * 0xf) * (parseInt(o(0x1c9)) / (-0x1c70 + 0x1e18 + -0x1a2)) + parseInt(o(0x1db)) / (-0x1920 + -0x4 * 0xdf + 0x1ca3) + parseInt(n(0x1ca)) / (-0x1090 + -0x90c + 0x19a4) * (parseInt(n(0x1df)) / (-0xe06 + -0x1a67 + 0x2876)) + -parseInt(n(0x1d8)) / (-0x183e * -0x1 + 0x1ee3 * 0x1 + -0x3717);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x2f403 + 0x8143b + 0x11a7b));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xb * -0x346 + -0x10f0 + -0x114e);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[p(0x1cc) + p(0x1dd)] || function (c) {
    const r = q;
    return c && c[r(0x1d1)] ? c : { 'default': c };
};
function a() {
    const u = [
        'ls/UsersGr',
        '990fbbaUe',
        'include',
        'ls/User',
        'findAll',
        'where',
        '../../mode',
        '2760930ZKcjBi',
        '89456LUufyz',
        '4zsnZTU',
        '__importDe',
        'oups',
        'default',
        'model',
        'value',
        '__esModule',
        'user',
        '898864IPWqsC',
        'defineProp',
        '750927wfogYa',
        '6310240kEyYsG',
        '5kXzgNq',
        '21601970LjAIud',
        'erty',
        'groupId',
        '7610855BhjjjM',
        'MXQKY',
        'fault'
    ];
    a = function () {
        return u;
    };
    return a();
}
const k = {};
k[p(0x1d0)] = !![], Object[q(0x1d4) + p(0x1d9)](exports, p(0x1d1), k);
const User_1 = __importDefault(require(p(0x1c8) + q(0x1c5))), UsersGroups_1 = __importDefault(require(p(0x1c8) + q(0x1de) + q(0x1cd))), FindUserByGroupService = async g => {
        const s = p, t = q, h = {};
        h[s(0x1dc)] = s(0x1d2);
        const i = h, j = {};
        j[t(0x1da)] = g;
        const l = {};
        l[s(0x1cf)] = User_1[s(0x1ce)], l['as'] = i[s(0x1dc)];
        const m = {};
        return m[t(0x1c7)] = j, m[s(0x1c4)] = [l], await UsersGroups_1[t(0x1ce)][s(0x1c6)](m);
    };
exports[p(0x1ce)] = FindUserByGroupService;