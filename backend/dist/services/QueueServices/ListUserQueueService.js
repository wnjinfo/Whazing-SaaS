'use strict';
const n = b, o = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x496 * -0x6 + -0x1bed * -0x1 + -0x2 * 0x1b17);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x152)) / (-0x8 * -0x21 + 0x3fa + -0x501) + parseInt(l(0x158)) / (-0x487 + 0x1229 * 0x1 + 0x4 * -0x368) * (parseInt(l(0x143)) / (0x108b + -0x74 + 0xc4 * -0x15)) + -parseInt(m(0x146)) / (-0x4 * 0x55 + 0x221a + -0x1 * 0x20c2) + -parseInt(m(0x171)) / (0x1061 + -0xbad + 0xb * -0x6d) + -parseInt(l(0x14a)) / (0x314 * 0x5 + 0x2616 + -0x3574) * (parseInt(l(0x147)) / (-0xefc + -0x5 * -0x5ff + -0x1df * 0x8)) + parseInt(l(0x157)) / (-0x1549 + -0x11b + 0x52 * 0x46) * (parseInt(l(0x16a)) / (-0x2fc + 0x1 * 0xb4d + 0x424 * -0x2)) + parseInt(m(0x149)) / (-0x20a5 + 0x3 * 0x801 + -0x3c * -0x25) * (-parseInt(l(0x154)) / (0x26a * 0x3 + 0x4 * 0x75f + -0x24af));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x19 * -0x1935 + 0xf724 + 0x8b620));
var __importDefault = this && this[n(0x16f) + n(0x153)] || function (c) {
    const p = o;
    return c && c[p(0x148)] ? c : { 'default': c };
};
const k = {};
function a() {
    const s = [
        '1187300ScemkY',
        '\x20u\x20\x0a\x20\x20\x20\x20,\x20',
        'value',
        '33822ZAWlwG',
        'default',
        '\x22UsersQueu',
        '2910604NNaldV',
        '14833GOlQQC',
        '__esModule',
        '1420zFGsxs',
        '906qqCEMe',
        '\x22\x20=\x20:tenan',
        'query',
        '\x20from\x20\x22Que',
        '\x0a\x20\x20\x20\x20selec',
        '=\x20:userId\x20',
        '\x20=\x20q.id\x20\x0a\x20',
        'sequelize',
        '509540RRTrxW',
        'fault',
        '913QngVhL',
        'replacemen',
        '\x20u.id\x20\x0a\x20\x20\x20',
        '93464bCGEbs',
        '122fjqvLe',
        'tId\x0a\x20\x20\x20\x20',
        'SELECT',
        'type',
        'ls/Queue',
        '\x20\x20\x20and\x20uq.',
        'defineProp',
        '\x0a\x20\x20\x20\x20and\x20q',
        'userId',
        'es\x22\x20uq\x20\x0a\x20\x20',
        '../../mode',
        't\x20q.*\x20\x0a\x20\x20\x20',
        'ues\x22\x20q\x0a\x20\x20\x20',
        '\x20\x20where\x20uq',
        'tenantId',
        '\x20and\x20u.id\x20',
        'erty',
        'QueryTypes',
        '441tirgCW',
        '\x22userId\x22\x20=',
        '.\x22queueId\x22',
        '\x20,\x20\x22Users\x22',
        '.\x22tenantId',
        '__importDe',
        'nest'
    ];
    a = function () {
        return s;
    };
    return a();
}
k[o(0x173)] = !![], Object[n(0x15e) + n(0x168)](exports, n(0x148), k);
const sequelize_1 = require(n(0x151)), Queue_1 = __importDefault(require(n(0x162) + o(0x15c))), ListUserQueueService = async ({
        tenantId: e,
        userId: f
    }) => {
        const q = o, r = n, g = q(0x14e) + q(0x163) + r(0x14d) + q(0x164) + r(0x16d) + r(0x172) + r(0x145) + r(0x161) + r(0x165) + q(0x16c) + q(0x150) + q(0x15d) + q(0x16b) + q(0x156) + r(0x167) + q(0x14f) + q(0x15f) + r(0x16e) + r(0x14b) + q(0x159), h = {};
        h[r(0x166)] = e, h[r(0x160)] = f;
        const i = {};
        i[r(0x155) + 'ts'] = h, i[r(0x15b)] = sequelize_1[q(0x169)][q(0x15a)], i[r(0x170)] = !![];
        const j = await Queue_1[r(0x144)][r(0x151)]?.[q(0x14c)](g, i);
        return j;
    };
exports[n(0x144)] = ListUserQueueService;