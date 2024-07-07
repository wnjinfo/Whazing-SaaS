'use strict';
const n = b, o = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x22fa + -0x6 * 0x43d + 0x1 * -0x8b5);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0xf2)) / (0x1f2a + -0x126c + -0x43f * 0x3) + parseInt(m(0xdb)) / (0x13d * -0xe + 0x3 * 0x969 + -0x1 * 0xae3) + -parseInt(m(0xe6)) / (-0x202d + 0x24b8 + -0x488) * (parseInt(l(0xef)) / (0x269 * -0x8 + -0x28 * 0xd3 + 0x3444)) + parseInt(l(0x100)) / (0xb * 0x355 + -0xe23 + -0x167f) + parseInt(l(0xec)) / (-0x6 * -0x615 + 0x118d * -0x2 + -0x15e) * (-parseInt(m(0xfc)) / (-0x5ff + -0x2285 + 0x288b)) + -parseInt(m(0xee)) / (0x182 + -0x302 + -0x2 * -0xc4) * (parseInt(l(0xf4)) / (-0x2052 + -0xe75 * -0x1 + 0x11e6)) + parseInt(m(0xf8)) / (0x1601 * -0x1 + -0x407 + -0x1a12 * -0x1) * (parseInt(m(0xdd)) / (0x1 * 0xd8f + 0x56a + -0x12ee));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5b8ad + 0xb15c0 + 0x27687));
var __importDefault = this && this[n(0xdf) + o(0xe7)] || function (c) {
    const p = o;
    return c && c[p(0xed)] ? c : { 'default': c };
};
function a() {
    const s = [
        '\x20u\x20\x0a\x20\x20\x20\x20,\x20',
        '876yVUWnw',
        '__esModule',
        '56ZrgBUO',
        '4QhUozZ',
        '\x20\x20\x20and\x20uq.',
        'ls/Queue',
        '353318BwBtUx',
        'es\x22\x20uq\x20\x0a\x20\x20',
        '1089072OdlbUz',
        '\x20\x20where\x20uq',
        '\x22userId\x22\x20=',
        '\x20=\x20q.id\x20\x0a\x20',
        '270WANQNT',
        '\x20u.id\x20\x0a\x20\x20\x20',
        'QueryTypes',
        '=\x20:userId\x20',
        '33719dqJhdy',
        '\x20from\x20\x22Que',
        '\x20and\x20u.id\x20',
        'nest',
        '2732780CPIgkY',
        '\x22UsersQueu',
        '\x0a\x20\x20\x20\x20selec',
        'sequelize',
        '../../mode',
        'ues\x22\x20q\x0a\x20\x20\x20',
        'query',
        'tenantId',
        'value',
        '\x20,\x20\x22Users\x22',
        'SELECT',
        'type',
        '750718WCIXpR',
        'userId',
        '326700jNhTBL',
        '\x0a\x20\x20\x20\x20and\x20q',
        '__importDe',
        'erty',
        '\x22\x20=\x20:tenan',
        'defineProp',
        'replacemen',
        't\x20q.*\x20\x0a\x20\x20\x20',
        'default',
        '41619WNiOqk',
        'fault',
        'tId\x0a\x20\x20\x20\x20',
        '.\x22tenantId',
        '.\x22queueId\x22'
    ];
    a = function () {
        return s;
    };
    return a();
}
const k = {};
k[o(0xd7)] = !![], Object[n(0xe2) + o(0xe0)](exports, o(0xed), k);
const sequelize_1 = require(n(0x103)), Queue_1 = __importDefault(require(o(0x104) + n(0xf1))), ListUserQueueService = async ({
        tenantId: e,
        userId: f
    }) => {
        const q = n, r = o, g = q(0x102) + q(0xe4) + q(0xfd) + r(0x105) + q(0xd8) + r(0xeb) + r(0x101) + q(0xf3) + q(0xf5) + q(0xea) + q(0xf7) + r(0xf0) + r(0xf6) + r(0xf9) + r(0xfe) + r(0xfb) + r(0xde) + q(0xe9) + q(0xe1) + q(0xe8), h = {};
        h[r(0x107)] = e, h[r(0xdc)] = f;
        const i = {};
        i[r(0xe3) + 'ts'] = h, i[q(0xda)] = sequelize_1[q(0xfa)][r(0xd9)], i[r(0xff)] = !![];
        const j = await Queue_1[q(0xe5)][r(0x103)]?.[r(0x106)](g, i);
        return j;
    };
exports[o(0xe5)] = ListUserQueueService;