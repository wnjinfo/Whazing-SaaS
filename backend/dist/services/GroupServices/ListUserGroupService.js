'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x359 + -0xc9 * 0x2b + -0x1 * -0x1ed9);
        let h = e[f];
        return h;
    }, b(c, d);
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x93)) / (-0x7 * -0x52c + -0x1 * -0xe63 + -0x3296) * (parseInt(m(0xa0)) / (0x1e37 + -0x4 * 0x691 + 0x1 * -0x3f1)) + -parseInt(m(0x84)) / (0x3b * 0x53 + 0x1020 + -0x233e) * (-parseInt(m(0x98)) / (0xb7c + -0x1bd2 + -0x2e * -0x5b)) + -parseInt(l(0x96)) / (0x1382 + -0x4 * 0x7f4 + 0xc53) * (parseInt(m(0x9d)) / (0x39 * 0xae + -0x1c07 + -0x1 * 0xab1)) + -parseInt(m(0x8d)) / (0x9f + -0x23aa + 0x2312) + -parseInt(m(0x71)) / (-0x24e3 + 0x7 * 0x565 + -0xd8) * (parseInt(l(0x9a)) / (-0x9cf + -0x36 * -0x2b + 0xc6)) + parseInt(m(0x83)) / (-0xa * 0x1d + -0x1 * 0x1ae7 + -0x1 * -0x1c13) * (-parseInt(m(0x97)) / (-0x95 * -0x2b + -0xe94 + 0x534 * -0x2)) + parseInt(m(0x77)) / (-0x59b + 0x744 + 0x7 * -0x3b) * (parseInt(m(0xa1)) / (-0x8a5 * -0x4 + -0x431 + 0x1 * -0x1e56));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x43 * -0x1051 + 0x13adf4 + -0x119 * 0x416));
var __importDefault = this && this[n(0x85) + n(0x89)] || function (c) {
    const p = n;
    return c && c[p(0x8b)] ? c : { 'default': c };
};
function a() {
    const s = [
        '.\x22groupId\x22',
        '\x20\x20\x20and\x20uq.',
        '\x20\x20where\x20uq',
        '530IIZmyq',
        '1623KDVwSp',
        '__importDe',
        'default',
        'ups\x22\x20q\x0a\x20\x20\x20',
        '\x0a\x20\x20\x20\x20selec',
        'fault',
        '\x20u.id\x20\x0a\x20\x20\x20',
        '__esModule',
        '\x22userId\x22\x20=',
        '1713173FGcFDt',
        'query',
        'ps\x22\x20uq\x20\x0a\x20\x20',
        '../../mode',
        'SELECT',
        'tId\x0a\x20\x20\x20\x20',
        '1XqGfXp',
        '\x20u\x20\x0a\x20\x20\x20\x20,\x20',
        '\x22UsersGrou',
        '1148685BHEvnp',
        '153549lXvEaU',
        '3252uDueJo',
        'type',
        '6129dMuIZI',
        'erty',
        'nest',
        '18KpQlLN',
        '\x20from\x20\x22Gro',
        'userId',
        '1425548gMDDsn',
        '17736589LhduPX',
        'QueryTypes',
        '.\x22tenantId',
        '776UqRyKZ',
        'defineProp',
        'ls/Group',
        '\x20=\x20q.id\x20\x0a\x20',
        'sequelize',
        '\x20,\x20\x22Users\x22',
        '24zMlMOw',
        't\x20q.*\x20\x0a\x20\x20\x20',
        '\x0a\x20\x20\x20\x20and\x20q',
        'value',
        '\x20and\x20u.id\x20',
        '=\x20:userId\x20',
        '\x22\x20=\x20:tenan',
        'tenantId',
        'replacemen'
    ];
    a = function () {
        return s;
    };
    return a();
}
const k = {};
k[o(0x7a)] = !![], Object[n(0x72) + n(0x9b)](exports, o(0x8b), k);
const sequelize_1 = require(o(0x75)), Group_1 = __importDefault(require(n(0x90) + n(0x73))), ListUserGroupService = async ({
        tenantId: e,
        userId: f
    }) => {
        const q = n, r = n, g = q(0x88) + r(0x78) + q(0x9e) + q(0x87) + r(0x76) + q(0x94) + q(0x95) + q(0x8f) + q(0x82) + q(0x80) + r(0x74) + q(0x81) + r(0x8c) + q(0x8a) + r(0x7b) + q(0x7c) + r(0x79) + q(0x70) + q(0x7d) + q(0x92), h = {};
        h[r(0x7e)] = e, h[q(0x9f)] = f;
        const i = {};
        i[q(0x7f) + 'ts'] = h, i[q(0x99)] = sequelize_1[r(0x6f)][r(0x91)], i[r(0x9c)] = !![];
        const j = await Group_1[q(0x86)][r(0x75)]?.[q(0x8e)](g, i);
        return j;
    };
exports[o(0x86)] = ListUserGroupService;