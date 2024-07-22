'use strict';
const q = b, r = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x26be + 0x3 * 0xa9e + 0x8c2);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x1ee)) / (0x1838 + 0x98 * 0x18 + -0x2677) + -parseInt(p(0x1f3)) / (0x19 * 0xa2 + -0x2550 + -0x56 * -0x40) + -parseInt(o(0x1e5)) / (-0x64b + 0x13 * 0x194 + -0x17ae * 0x1) + -parseInt(o(0x1eb)) / (-0xec * -0x14 + 0x1 * -0x16ed + 0x481 * 0x1) + -parseInt(p(0x1e2)) / (0x1 * 0x1127 + -0x31d * 0xc + 0x6be * 0x3) + -parseInt(o(0x1f9)) / (0x458 + -0x26e0 + 0x228e) + parseInt(o(0x1de)) / (-0x7 * 0x15 + -0x1779 + 0x1 * 0x1813) * (parseInt(o(0x1f2)) / (0x92 * -0xd + -0x12b0 + 0x1a22));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x11a04b * -0x1 + -0x7f702 + -0x366b6 * -0xc));
var __importDefault = this && this[q(0x1e7) + q(0x1e0)] || function (c) {
    const s = r;
    return c && c[s(0x1ef)] ? c : { 'default': c };
};
const k = {};
k[r(0x1ec)] = !![], Object[q(0x1f0) + q(0x1ea)](exports, q(0x1ef), k);
const sequelize_1 = require(q(0x1e8)), AppError_1 = __importDefault(require(r(0x1f8) + r(0x1f1))), Ticket_1 = __importDefault(require(r(0x1ed) + q(0x1e9))), CheckContactOpenTickets = async g => {
        const t = q, u = q, h = {};
        h[t(0x1f6)] = u(0x1e6), h[u(0x1fa)] = t(0x1f7);
        const i = h, j = {
                [sequelize_1['Op']['or']]: [
                    i[t(0x1f6)],
                    i[u(0x1fa)]
                ]
            }, l = {};
        l[u(0x1e1)] = g, l[u(0x1df)] = j;
        const m = {};
        m[t(0x1f4)] = l;
        const n = await Ticket_1[u(0x1e3)][u(0x1e4)](m);
        if (n)
            throw new AppError_1[(u(0x1e3))](JSON[u(0x1f5)](n), 0x1cd9 + 0xf56 + -0x2a96);
    };
exports[r(0x1e3)] = CheckContactOpenTickets;
function a() {
    const v = [
        '../models/',
        '1989568Bmhkyw',
        '__esModule',
        'defineProp',
        'AppError',
        '1351448UQwHJh',
        '774718maKiEQ',
        'where',
        'stringify',
        'zSBjU',
        'pending',
        '../errors/',
        '10744734PCECHu',
        'vwMzo',
        '203QplcRk',
        'status',
        'fault',
        'contactId',
        '4305900zboHqc',
        'default',
        'findOne',
        '2965212kwxkjg',
        'open',
        '__importDe',
        'sequelize',
        'Ticket',
        'erty',
        '7452576GyvFod',
        'value'
    ];
    a = function () {
        return v;
    };
    return a();
}