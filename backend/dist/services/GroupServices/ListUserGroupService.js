'use strict';
const n = b, o = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x48d * -0x5 + -0x1 * 0x1d19 + 0x14 * 0x58);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x8d)) / (0x1047 * 0x1 + 0x12af * -0x1 + 0x269) + -parseInt(m(0xae)) / (0x1 * -0x1163 + 0x22 * 0xb + -0xfef * -0x1) + -parseInt(l(0xb1)) / (-0x1 * -0x2078 + 0x267c + -0x46f1) + -parseInt(l(0x96)) / (-0x205e + 0x1 * 0x25af + 0x1 * -0x54d) + parseInt(l(0x9e)) / (0x1882 + -0xbc5 + -0xcb8) + parseInt(m(0x9c)) / (-0x21 * 0x4f + 0x137b + -0x946) * (-parseInt(m(0x94)) / (0xfb2 + 0x7 * 0x54d + -0x7 * 0x78a)) + -parseInt(l(0xb3)) / (-0x217f + 0x2622 + -0x1 * 0x49b) * (-parseInt(l(0x8c)) / (-0x221a + -0x2085 + 0x42a8));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x68150 + -0x1074c3 + 0xf07 * 0x246));
var __importDefault = this && this[n(0x91) + n(0xa6)] || function (c) {
    const p = n;
    return c && c[p(0xb4)] ? c : { 'default': c };
};
const k = {};
function a() {
    const s = [
        '\x0a\x20\x20\x20\x20selec',
        '32cfAafO',
        '__esModule',
        '\x20,\x20\x22Users\x22',
        'ups\x22\x20q\x0a\x20\x20\x20',
        't\x20q.*\x20\x0a\x20\x20\x20',
        '\x0a\x20\x20\x20\x20and\x20q',
        '\x22\x20=\x20:tenan',
        'nest',
        '10860093arynAJ',
        '755028xWkRzx',
        'type',
        'SELECT',
        '\x22UsersGrou',
        '__importDe',
        'ls/Group',
        '.\x22groupId\x22',
        '913241uMuPzH',
        '.\x22tenantId',
        '4271664mnPOYJ',
        'userId',
        '\x20\x20\x20and\x20uq.',
        'default',
        'value',
        'query',
        '66fiiIxb',
        'defineProp',
        '3264785ozXEWm',
        '\x22userId\x22\x20=',
        '=\x20:userId\x20',
        'ps\x22\x20uq\x20\x0a\x20\x20',
        '\x20u\x20\x0a\x20\x20\x20\x20,\x20',
        '\x20=\x20q.id\x20\x0a\x20',
        'sequelize',
        '\x20u.id\x20\x0a\x20\x20\x20',
        'fault',
        'tId\x0a\x20\x20\x20\x20',
        'erty',
        'replacemen',
        'QueryTypes',
        '\x20\x20where\x20uq',
        '../../mode',
        'tenantId',
        '858066Mdiytm',
        '\x20and\x20u.id\x20',
        '\x20from\x20\x22Gro',
        '3175284qgiYEj'
    ];
    a = function () {
        return s;
    };
    return a();
}
k[n(0x9a)] = !![], Object[o(0x9d) + n(0xa8)](exports, o(0xb4), k);
const sequelize_1 = require(o(0xa4)), Group_1 = __importDefault(require(n(0xac) + n(0x92))), ListUserGroupService = async ({
        tenantId: e,
        userId: f
    }) => {
        const q = o, r = n, g = q(0xb2) + r(0x88) + q(0xb0) + r(0xb6) + r(0xb5) + q(0xa2) + r(0x90) + r(0xa1) + q(0xab) + r(0x93) + q(0xa3) + q(0x98) + r(0x9f) + q(0xa5) + r(0xaf) + r(0xa0) + q(0x89) + r(0x95) + r(0x8a) + r(0xa7), h = {};
        h[q(0xad)] = e, h[r(0x97)] = f;
        const i = {};
        i[r(0xa9) + 'ts'] = h, i[r(0x8e)] = sequelize_1[r(0xaa)][q(0x8f)], i[q(0x8b)] = !![];
        const j = await Group_1[r(0x99)][r(0xa4)]?.[q(0x9b)](g, i);
        return j;
    };
exports[n(0x99)] = ListUserGroupService;