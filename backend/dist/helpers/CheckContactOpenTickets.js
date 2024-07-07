'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x1a6)) / (0x734 + -0x2033 * -0x1 + 0x2766 * -0x1) * (-parseInt(o(0x1ad)) / (-0x2544 + 0xaea + -0x1c * -0xf1)) + parseInt(o(0x1a9)) / (0x174 + 0x2145 + -0x2 * 0x115b) + -parseInt(o(0x1ae)) / (-0x5f6 + 0x2 * 0x101d + -0x1a40) + -parseInt(o(0x1a1)) / (0xe * 0x265 + -0xc2a + 0x71d * -0x3) * (parseInt(p(0x1b1)) / (-0x781 + 0xe23 + 0x69c * -0x1)) + parseInt(o(0x1af)) / (-0x1 * -0x819 + -0xcd * -0x21 + -0x1 * 0x227f) + parseInt(o(0x1aa)) / (0x154b + -0x2 * 0xb8d + 0x1d7) + -parseInt(p(0x1bc)) / (-0x955 * 0x2 + 0xee8 + -0x3cb * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xe901f * 0x1 + 0x7d9d9 * -0x1 + 0x1f4826));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x8f3 + 0x176e + -0x1ec0);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const v = [
        'findOne',
        'fault',
        '__importDe',
        'sequelize',
        'AppError',
        'ztKyn',
        'nkBLk',
        '../models/',
        '4802238nXDGQJ',
        '../errors/',
        'default',
        '25WbVcgn',
        'where',
        'open',
        'erty',
        '__esModule',
        '12cjSWbc',
        'stringify',
        'status',
        '2829330LaMbhf',
        '3731488XdDhEf',
        'Ticket',
        'pending',
        '7534EgJpwe',
        '941696jXeaDk',
        '903259BWfsjI',
        'defineProp',
        '280338cYdxAm',
        'value',
        'contactId'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[q(0x1b6) + q(0x1b5)] || function (c) {
    const s = q;
    return c && c[s(0x1a5)] ? c : { 'default': c };
};
const k = {};
k[q(0x1b2)] = !![], Object[q(0x1b0) + r(0x1a4)](exports, r(0x1a5), k);
const sequelize_1 = require(r(0x1b7)), AppError_1 = __importDefault(require(r(0x1bd) + r(0x1b8))), Ticket_1 = __importDefault(require(r(0x1bb) + q(0x1ab))), CheckContactOpenTickets = async g => {
        const t = q, u = q, h = {};
        h[t(0x1b9)] = t(0x1a3), h[t(0x1ba)] = t(0x1ac);
        const i = h, j = {
                [sequelize_1['Op']['or']]: [
                    i[u(0x1b9)],
                    i[t(0x1ba)]
                ]
            }, l = {};
        l[u(0x1b3)] = g, l[u(0x1a8)] = j;
        const m = {};
        m[t(0x1a2)] = l;
        const n = await Ticket_1[u(0x1be)][t(0x1b4)](m);
        if (n)
            throw new AppError_1[(t(0x1be))](JSON[u(0x1a7)](n), -0xca7 + -0xbaf * -0x1 + 0x291);
    };
exports[r(0x1be)] = CheckContactOpenTickets;