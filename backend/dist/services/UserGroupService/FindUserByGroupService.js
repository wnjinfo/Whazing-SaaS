'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x67)) / (0xad * -0x2b + 0x24f2 + -0x7e2 * 0x1) + parseInt(n(0x78)) / (0xb7d + -0x2664 + -0x53 * -0x53) + -parseInt(n(0x65)) / (0x20bf + -0x2 * -0x982 + -0x6 * 0x8a0) + parseInt(o(0x71)) / (0x25d9 * -0x1 + -0x5 * 0x1a2 + 0x2e07) + -parseInt(n(0x68)) / (0x1 * -0xf5b + 0x1 * -0x13df + 0x1 * 0x233f) + parseInt(o(0x6c)) / (-0x4c5 + -0x1305 + 0x17d0) * (parseInt(n(0x7d)) / (-0x7d3 * 0x2 + 0xdc4 + 0x1e9)) + parseInt(n(0x79)) / (0x1425 + -0x123 * 0x6 + -0x53 * 0x29);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xbe683 + -0x638e * 0x4 + 0x3a07 * 0x61));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xaaa + 0x1cf4 * 0x1 + -0x1 * 0x273a);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[p(0x7c) + q(0x6f)] || function (c) {
    const r = p;
    return c && c[r(0x6b)] ? c : { 'default': c };
};
const k = {};
k[p(0x7b)] = !![], Object[p(0x76) + p(0x73)](exports, p(0x6b), k);
function a() {
    const u = [
        'yNsns',
        '1001206fItbVs',
        '3026300xvrgGE',
        'model',
        'oups',
        '__esModule',
        '1490526gqPWRB',
        'ls/UsersGr',
        'user',
        'fault',
        'ls/User',
        '1929268hgYJxQ',
        'default',
        'erty',
        'where',
        'groupId',
        'defineProp',
        'findAll',
        '169272UtSafb',
        '13198040PTZMhr',
        '../../mode',
        'value',
        '__importDe',
        '7YLHFXP',
        'include',
        '898737TQuQbU'
    ];
    a = function () {
        return u;
    };
    return a();
}
const User_1 = __importDefault(require(p(0x7a) + q(0x70))), UsersGroups_1 = __importDefault(require(q(0x7a) + p(0x6d) + p(0x6a))), FindUserByGroupService = async g => {
        const s = q, t = p, h = {};
        h[s(0x66)] = t(0x6e);
        const i = h, j = {};
        j[t(0x75)] = g;
        const l = {};
        l[t(0x69)] = User_1[s(0x72)], l['as'] = i[t(0x66)];
        const m = {};
        return m[s(0x74)] = j, m[s(0x64)] = [l], await UsersGroups_1[s(0x72)][s(0x77)](m);
    };
exports[p(0x72)] = FindUserByGroupService;