'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x171)) / (-0x3d * -0x4b + -0x1a90 + -0x7 * -0x13e) + parseInt(l(0x190)) / (0x23f6 + -0x21d4 + -0x220) + parseInt(l(0x173)) / (0xf44 * 0x1 + -0x3e0 * 0xa + -0x5 * -0x4b3) * (-parseInt(m(0x17f)) / (0xd2b * -0x1 + 0x529 * 0x3 + -0x24c)) + -parseInt(l(0x16f)) / (-0x5 * 0x55d + 0x1d1 * -0x13 + 0x3 * 0x1473) + -parseInt(l(0x172)) / (-0xa3f * 0x1 + -0x5db + 0x1020) * (-parseInt(m(0x18d)) / (0x30b * -0x3 + 0x1d95 * -0x1 + -0xd3 * -0x2f)) + parseInt(m(0x17d)) / (-0x214a + -0x338 * 0x1 + 0x248a) + -parseInt(m(0x17e)) / (-0x12e5 * 0x1 + 0x1 * -0xcf4 + -0x48e * -0x7) * (parseInt(l(0x187)) / (0x1324 + -0xe * 0x15b + -0x20));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xaed2f + -0x16cbb * 0x3 + 0xac96));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1d08 + -0x1 * -0xe55 + -0x29fb);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const s = [
        '8cFISuS',
        '\x20\x20where\x20uq',
        'tenantId',
        '.\x22tenantId',
        'es\x22\x20uq\x20\x0a\x20\x20',
        '\x20and\x20u.id\x20',
        '.\x22queueId\x22',
        'default',
        '320tYbXDY',
        'ues\x22\x20q\x0a\x20\x20\x20',
        '__importDe',
        'type',
        'userId',
        't\x20q.*\x20\x0a\x20\x20\x20',
        '382319KNZEXb',
        'defineProp',
        '\x20from\x20\x22Que',
        '1630136UnJYYU',
        'erty',
        'replacemen',
        'nest',
        '\x20,\x20\x22Users\x22',
        '=\x20:userId\x20',
        '\x0a\x20\x20\x20\x20and\x20q',
        '\x20\x20\x20and\x20uq.',
        '\x22userId\x22\x20=',
        '\x20u\x20\x0a\x20\x20\x20\x20,\x20',
        'SELECT',
        '\x0a\x20\x20\x20\x20selec',
        '\x22UsersQueu',
        'query',
        '\x20u.id\x20\x0a\x20\x20\x20',
        '1648380ctCRcz',
        'ls/Queue',
        '770913DikyNA',
        '18NfFcVB',
        '237324wVDKPJ',
        '../../mode',
        '__esModule',
        'value',
        '\x22\x20=\x20:tenan',
        'fault',
        'sequelize',
        'QueryTypes',
        'tId\x0a\x20\x20\x20\x20',
        '\x20=\x20q.id\x20\x0a\x20',
        '6494480olXhtp',
        '14562ETTxaw'
    ];
    a = function () {
        return s;
    };
    return a();
}
var __importDefault = this && this[n(0x189) + n(0x178)] || function (c) {
    const p = n;
    return c && c[p(0x175)] ? c : { 'default': c };
};
const k = {};
k[o(0x176)] = !![], Object[o(0x18e) + n(0x191)](exports, o(0x175), k);
const sequelize_1 = require(o(0x179)), Queue_1 = __importDefault(require(o(0x174) + o(0x170))), ListUserQueueService = async ({
        tenantId: e,
        userId: f
    }) => {
        const q = n, r = o, g = q(0x16b) + q(0x18c) + q(0x18f) + q(0x188) + q(0x164) + r(0x169) + r(0x16c) + q(0x183) + q(0x180) + r(0x185) + r(0x17c) + q(0x167) + r(0x168) + q(0x16e) + r(0x184) + r(0x165) + r(0x166) + q(0x182) + r(0x177) + q(0x17b), h = {};
        h[r(0x181)] = e, h[r(0x18b)] = f;
        const i = {};
        i[q(0x162) + 'ts'] = h, i[q(0x18a)] = sequelize_1[q(0x17a)][r(0x16a)], i[r(0x163)] = !![];
        const j = await Queue_1[r(0x186)][r(0x179)]?.[r(0x16d)](g, i);
        return j;
    };
exports[n(0x186)] = ListUserQueueService;