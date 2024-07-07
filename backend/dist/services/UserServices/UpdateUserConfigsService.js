'use strict';
function a() {
    const v = [
        'name',
        'arKyx',
        'where',
        '../../erro',
        'configs',
        '__importDe',
        '263380RsjiRY',
        'rs/AppErro',
        'kpfBy',
        '1327664zOCJtj',
        '3136330qWJriJ',
        'THPtC',
        'findOne',
        'email',
        '1074968ieicRo',
        'ls/User',
        'R_FOUND',
        '161RcMXWW',
        'attributes',
        'defineProp',
        'MKfKo',
        'value',
        '3cMPNzH',
        'ERR_NO_USE',
        'tenantId',
        '18ZRoLHZ',
        '../../mode',
        '22VlsXgU',
        'FQfcN',
        'fault',
        '__esModule',
        'profile',
        'erty',
        '223302LnfRyf',
        'default',
        '12653010bwLnJV',
        '2707316nsBwdX',
        'update'
    ];
    a = function () {
        return v;
    };
    return a();
}
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x1ad)) / (-0x16f3 + -0x72c + 0x1e20) + -parseInt(p(0x1b0)) / (-0x20f3 + -0x107 * 0x11 + 0x326c) + -parseInt(o(0x1bd)) / (0x8ab * 0x1 + -0x1b * 0x8e + 0x652) * (parseInt(p(0x1a5)) / (0x1f52 + -0x2310 + 0x3c2 * 0x1)) + parseInt(o(0x1b1)) / (0x14ce + -0x2 * -0xcf4 + -0x2eb1) + -parseInt(o(0x1a2)) / (0xb25 + -0x812 * -0x2 + -0x1b43) * (parseInt(o(0x1b8)) / (0xb * -0x37f + -0x1 * -0xfab + 0x9 * 0x289)) + -parseInt(p(0x1b5)) / (0x1a42 + 0x3a7 + -0x1de1) * (parseInt(o(0x19a)) / (-0xd7 * -0x26 + 0x7 * 0x3c1 + -0x745 * 0x8)) + -parseInt(o(0x1a4)) / (0x1aa6 * -0x1 + -0x2 * -0x743 + 0xc2a) * (-parseInt(o(0x19c)) / (-0x1387 + 0x6 * 0x36c + -0xf6));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0x22dd9 + 0x8157a + -0x1a1 * -0x65));
var __importDefault = this && this[q(0x1ac) + r(0x19e)] || function (c) {
    const s = q;
    return c && c[s(0x19f)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2042 + -0x20ad + 0x4288);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[q(0x1bc)] = !![], Object[q(0x1ba) + r(0x1a1)](exports, r(0x19f), k);
const AppError_1 = __importDefault(require(r(0x1aa) + r(0x1ae) + 'r')), User_1 = __importDefault(require(q(0x19b) + q(0x1b6))), UpdateUserConfigsService = async ({
        userConfigs: f,
        userId: g,
        tenantId: h
    }) => {
        const t = q, u = q, i = {};
        i[t(0x1a8)] = u(0x1a7), i[u(0x1af)] = t(0x1b4), i[u(0x1bb)] = t(0x1a0), i[t(0x1b2)] = u(0x1ab), i[t(0x19d)] = u(0x1be) + u(0x1b7);
        const j = i, l = {};
        l['id'] = g, l[u(0x199)] = h;
        const m = {};
        m[u(0x1a9)] = l, m[t(0x1b9)] = [
            j[u(0x1a8)],
            'id',
            j[t(0x1af)],
            j[u(0x1bb)],
            j[t(0x1b2)]
        ];
        const n = await User_1[t(0x1a3)][t(0x1b3)](m);
        if (!n)
            throw new AppError_1[(u(0x1a3))](j[u(0x19d)], -0x18 * 0x79 + -0x103a + -0x52 * -0x5b);
        await n[u(0x1a6)]({
            'configs': {
                ...n[t(0x1ab)],
                ...f
            }
        });
    };
exports[q(0x1a3)] = UpdateUserConfigsService;