'use strict';
const q = b, r = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x1a4d + -0x4 * -0xdf + 0x1775);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0xb6)) / (-0x259d + 0x1 * 0x1a3 + 0x1 * 0x23fb) * (-parseInt(o(0xa8)) / (-0x27 * -0xe3 + -0x117 + 0x10be * -0x2)) + parseInt(o(0xb0)) / (-0xfae + -0x4 * -0x96c + 0x3 * -0x755) + parseInt(p(0xa9)) / (-0x12ba + -0x1f8c + 0x324a) * (-parseInt(p(0xaa)) / (-0xb28 + 0x2691 + -0x1b64)) + -parseInt(o(0xbc)) / (-0x26c3 + -0x7bb * -0x1 + 0x19 * 0x13e) + -parseInt(p(0xab)) / (0x2dd * -0x2 + -0xb * -0x80 + 0x41) * (parseInt(o(0xc0)) / (0x89 * 0x1c + -0x1a45 + 0x1 * 0xb51)) + -parseInt(p(0xbf)) / (0x2de + 0xd * -0x63 + 0x1 * 0x232) + parseInt(p(0xba)) / (0x17d * 0xb + -0x1 * -0xb4c + -0x283 * 0xb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xfe0d2 + -0x9dadb + 0x25cb2e));
var __importDefault = this && this[q(0xaf) + q(0xad)] || function (c) {
    const s = r;
    return c && c[s(0xb1)] ? c : { 'default': c };
};
const k = {};
k[q(0xb2)] = !![], Object[q(0xbb) + q(0xb4)](exports, q(0xb1), k);
const sequelize_1 = require(r(0xb8)), AppError_1 = __importDefault(require(r(0xa4) + r(0xa6))), Ticket_1 = __importDefault(require(q(0xac) + r(0xbd))), CheckContactOpenTickets = async g => {
        const t = r, u = q, h = {};
        h[t(0xb9)] = t(0xc1), h[u(0xc2)] = u(0xbe);
        const i = h, j = {
                [sequelize_1['Op']['or']]: [
                    i[t(0xb9)],
                    i[t(0xc2)]
                ]
            }, l = {};
        l[t(0xae)] = g, l[u(0xa7)] = j;
        const m = {};
        m[u(0xb5)] = l;
        const n = await Ticket_1[u(0xb7)][u(0xb3)](m);
        if (n)
            throw new AppError_1[(u(0xb7))](JSON[u(0xa5)](n), 0x1283 + -0x16e6 + -0x5fc * -0x1);
    };
exports[r(0xb7)] = CheckContactOpenTickets;
function a() {
    const v = [
        'stringify',
        'AppError',
        'status',
        '25684wLfIlV',
        '12660NNcjgz',
        '1965QRsYdM',
        '35wnXvWv',
        '../models/',
        'fault',
        'contactId',
        '__importDe',
        '2778846NubvDS',
        '__esModule',
        'value',
        'findOne',
        'erty',
        'where',
        '74QqMlTF',
        'default',
        'sequelize',
        'DzyBe',
        '44051340iAAfLR',
        'defineProp',
        '2845446grwXgV',
        'Ticket',
        'pending',
        '12882654UUcGAS',
        '705944FgHyQy',
        'open',
        'gpcIQ',
        '../errors/'
    ];
    a = function () {
        return v;
    };
    return a();
}