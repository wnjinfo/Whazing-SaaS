'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0xc5)) / (0x17fc + 0x17ff * -0x1 + 0x4) + parseInt(l(0xe3)) / (0x1929 + 0xce9 + 0x2610 * -0x1) + parseInt(m(0xdb)) / (0x10bc + -0x1669 + 0x5b0) + -parseInt(l(0xe5)) / (0x22c0 + 0x19d * -0xd + -0xdc3) * (-parseInt(m(0xc2)) / (0x142a + -0x1cfd + 0x2 * 0x46c)) + parseInt(m(0xcf)) / (0x11da + -0x1 * 0x264e + 0x147a) * (parseInt(m(0xcd)) / (0x695 + -0x15ed + 0xf5f)) + parseInt(m(0xe1)) / (-0x1bcd * 0x1 + -0x10b7 + 0xb23 * 0x4) + -parseInt(l(0xd9)) / (0xe67 + -0x5 * 0x1f4 + 0x24d * -0x2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4714 * 0x7 + -0xda * 0x3cc + 0xe * 0xb1de));
var __importDefault = this && this[n(0xe4) + n(0xc4)] || function (c) {
    const p = o;
    return c && c[p(0xcb)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x233 * -0x2 + 0x1ff6 + 0x1 * -0x1ad5);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
function a() {
    const s = [
        '.\x22tenantId',
        'fault',
        '396290qYgFYV',
        'replacemen',
        '\x20\x20\x20and\x20uq.',
        'type',
        'QueryTypes',
        '\x0a\x20\x20\x20\x20and\x20q',
        '__esModule',
        '\x20u.id\x20\x0a\x20\x20\x20',
        '7ZYnfRK',
        'tId\x0a\x20\x20\x20\x20',
        '1043958QtQbAp',
        'SELECT',
        '\x20and\x20u.id\x20',
        'query',
        'nest',
        'ps\x22\x20uq\x20\x0a\x20\x20',
        '../../mode',
        'default',
        'erty',
        'ls/Group',
        '17355105zkLhSn',
        '\x22userId\x22\x20=',
        '1410372NRxJOI',
        'sequelize',
        't\x20q.*\x20\x0a\x20\x20\x20',
        'tenantId',
        'defineProp',
        'value',
        '4158472SpmDKZ',
        '\x20u\x20\x0a\x20\x20\x20\x20,\x20',
        '1099660YNaofK',
        '__importDe',
        '4LlqRDP',
        '.\x22groupId\x22',
        'userId',
        '\x20,\x20\x22Users\x22',
        '\x22\x20=\x20:tenan',
        '\x20=\x20q.id\x20\x0a\x20',
        '\x20\x20where\x20uq',
        '=\x20:userId\x20',
        '\x22UsersGrou',
        'ups\x22\x20q\x0a\x20\x20\x20',
        '\x0a\x20\x20\x20\x20selec',
        '\x20from\x20\x22Gro',
        '582535glDkDF'
    ];
    a = function () {
        return s;
    };
    return a();
}
k[o(0xe0)] = !![], Object[n(0xdf) + n(0xd7)](exports, n(0xcb), k);
const sequelize_1 = require(n(0xdc)), Group_1 = __importDefault(require(o(0xd5) + n(0xd8))), ListUserGroupService = async ({
        tenantId: e,
        userId: f
    }) => {
        const q = o, r = o, g = q(0xc0) + r(0xdd) + q(0xc1) + r(0xbf) + r(0xe8) + q(0xe2) + r(0xbe) + r(0xd4) + q(0xbc) + r(0xe6) + r(0xbb) + r(0xc7) + q(0xda) + r(0xcc) + r(0xd1) + r(0xbd) + r(0xca) + r(0xc3) + q(0xe9) + r(0xce), h = {};
        h[r(0xde)] = e, h[q(0xe7)] = f;
        const i = {};
        i[q(0xc6) + 'ts'] = h, i[q(0xc8)] = sequelize_1[r(0xc9)][q(0xd0)], i[q(0xd3)] = !![];
        const j = await Group_1[q(0xd6)][q(0xdc)]?.[r(0xd2)](g, i);
        return j;
    };
exports[n(0xd6)] = ListUserGroupService;