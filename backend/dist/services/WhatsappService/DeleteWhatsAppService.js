'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x16d)) / (-0x1a26 + 0xbe8 + 0x1 * 0xe3f) * (parseInt(q(0x164)) / (-0xa1 + 0x844 + -0x7a1)) + -parseInt(q(0x16c)) / (-0x470 * 0x3 + -0x3 * 0x1ff + 0x2 * 0x9a8) + -parseInt(p(0x162)) / (-0x207c + 0x1372 + 0xd0e) + -parseInt(p(0x163)) / (-0x187a + 0x269 + -0xb0b * -0x2) + -parseInt(p(0x15e)) / (0x1 * 0xfbb + 0x1941 * 0x1 + -0x31 * 0xd6) + parseInt(q(0x166)) / (-0x608 + -0x5b5 + 0xbc4) + parseInt(p(0x15d)) / (0xb8c + -0x2a5 + 0x8df * -0x1) * (parseInt(q(0x159)) / (-0x3e * 0x7e + -0x1e7a + 0x3d07));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1496a3 + 0x15340 + 0x205e68));
var __importDefault = this && this[r(0x16e) + r(0x15c)] || function (c) {
    const t = s;
    return c && c[t(0x169)] ? c : { 'default': c };
};
const k = {};
function a() {
    const w = [
        '447535HMESir',
        '4GqPlZZ',
        'P_FOUND',
        '296289NwLxZq',
        'update',
        'RUCpx',
        '__esModule',
        'where',
        'ERR_NO_WAP',
        '1542687xcouKz',
        '639167HcFrNf',
        '__importDe',
        'isDeleted',
        'defineProp',
        '../../erro',
        '../../mode',
        'value',
        'default',
        'findOne',
        'nYyKT',
        'tenantId',
        '25942509SoQSlj',
        'DISCONNECT',
        'erty',
        'fault',
        '8lXwSQW',
        '8698644cKYAqD',
        'rs/AppErro',
        'status',
        'ls/Whatsap',
        '5163068PTmHNB'
    ];
    a = function () {
        return w;
    };
    return a();
}
k[r(0x154)] = !![], Object[s(0x170) + r(0x15b)](exports, r(0x169), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1315 + 0x4 * -0x608 + 0x2c88);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Whatsapp_1 = __importDefault(require(s(0x153) + r(0x161) + 'p')), AppError_1 = __importDefault(require(r(0x171) + r(0x15f) + 'r')), DeleteWhatsApprService = async (g, h) => {
        const u = r, v = r, i = {};
        i[u(0x157)] = u(0x16b) + v(0x165), i[v(0x168)] = v(0x15a) + 'ED';
        const j = i, l = {};
        l['id'] = g, l[v(0x158)] = h;
        const m = {};
        m[u(0x16a)] = l;
        const n = await Whatsapp_1[v(0x155)][u(0x156)](m);
        if (!n)
            throw new AppError_1[(v(0x155))](j[u(0x157)], 0x3 * -0x23f + -0x1c9f + 0x24f0);
        const o = {};
        o[u(0x16f)] = !![], o[u(0x160)] = j[v(0x168)], await n[u(0x167)](o);
    };
exports[s(0x155)] = DeleteWhatsApprService;