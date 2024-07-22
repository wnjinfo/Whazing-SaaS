'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x162)) / (0x209a * 0x1 + -0x538 + -0x1b61) + parseInt(n(0x178)) / (0x16 * 0x1b3 + 0x824 + 0x3cb * -0xc) + parseInt(n(0x176)) / (-0xe4a + -0xa13 + 0x1860) + parseInt(n(0x174)) / (0x8fc + -0x1a3 * 0xc + -0x4 * -0x2ab) * (-parseInt(o(0x17b)) / (0x91 + 0xce2 * -0x2 + 0x1938)) + -parseInt(o(0x172)) / (-0xd4 + 0x1b23 + 0x1 * -0x1a49) * (parseInt(n(0x177)) / (0x302 + 0x138e + -0x1689 * 0x1)) + -parseInt(n(0x170)) / (-0x1441 + 0xcb * 0x4 + 0x111d) + -parseInt(n(0x16c)) / (0xbb3 + -0xd95 + 0x1 * 0x1eb) * (-parseInt(o(0x17a)) / (0x134a * -0x1 + -0x1deb + 0x709 * 0x7));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x85ad2 + -0x6925a + -0x11 * -0x1b334));
function a() {
    const u = [
        'findAll',
        '../../mode',
        '13988496lKTOFg',
        'ls/UsersGr',
        '1074xHoUtB',
        'ls/User',
        '12RwWPdN',
        'fault',
        '1376106SvCVzh',
        '12719ggWOKg',
        '3047848LQoyJu',
        'default',
        '20HaDvCd',
        '1076405GvZEIz',
        'where',
        'Uptbk',
        '563474wogDjv',
        '__esModule',
        '__importDe',
        'value',
        'include',
        'model',
        'user',
        'oups',
        'defineProp',
        'erty',
        '4901994yqjtKh',
        'groupId'
    ];
    a = function () {
        return u;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1c6 + 0x1867 * 0x1 + -0x18cb * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[p(0x164) + p(0x175)] || function (c) {
    const r = q;
    return c && c[r(0x163)] ? c : { 'default': c };
};
const k = {};
k[p(0x165)] = !![], Object[p(0x16a) + q(0x16b)](exports, p(0x163), k);
const User_1 = __importDefault(require(p(0x16f) + q(0x173))), UsersGroups_1 = __importDefault(require(p(0x16f) + p(0x171) + p(0x169))), FindUserByGroupService = async g => {
        const s = p, t = p, h = {};
        h[s(0x17d)] = t(0x168);
        const i = h, j = {};
        j[t(0x16d)] = g;
        const l = {};
        l[t(0x167)] = User_1[s(0x179)], l['as'] = i[s(0x17d)];
        const m = {};
        return m[s(0x17c)] = j, m[s(0x166)] = [l], await UsersGroups_1[s(0x179)][s(0x16e)](m);
    };
exports[p(0x179)] = FindUserByGroupService;