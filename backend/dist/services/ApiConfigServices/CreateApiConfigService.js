'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(w(0x10a)) / (0xd58 + -0x16cc + 0x975) + -parseInt(w(0xf6)) / (0x1bbb + -0x2242 + 0x1 * 0x689) * (parseInt(w(0xf7)) / (0x1422 + 0x1f45 + -0x3364)) + parseInt(x(0xf2)) / (-0x1aff + 0x1 * -0x11e2 + 0x2ce5) + -parseInt(w(0xee)) / (-0x6dd * 0x2 + -0x6d3 + 0x1 * 0x1492) * (-parseInt(x(0xfd)) / (0xc00 + 0x13d8 + 0x2 * -0xfe9)) + -parseInt(x(0x10b)) / (0x1cd * 0x2 + -0x1925 * 0x1 + -0xac9 * -0x2) + parseInt(w(0xed)) / (-0x901 * -0x2 + -0x257 * -0xd + -0x3065) + parseInt(w(0x10d)) / (0xd3 * -0x8 + 0x1a9e + -0x2db * 0x7) * (-parseInt(x(0x105)) / (0x3b * -0x3b + -0x121a * 0x1 + 0x1fbd));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xd3d * 0x25 + -0x2 * 0x8a73 + 0x5e63 * 0x3));
var __importDefault = this && this[y(0xf9) + y(0xef)] || function (c) {
    const A = y;
    return c && c[A(0xf3)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1039 + -0x1 * -0x1f30 + -0xe0a);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[z(0x100)] = !![], Object[y(0xfe) + z(0x107)](exports, y(0xf3), k);
const jsonwebtoken_1 = require(y(0x111) + 'en'), ApiConfig_1 = __importDefault(require(z(0x108) + z(0xfa) + 'ig')), auth_1 = __importDefault(require(y(0x10e) + y(0xff))), CreateApiConfigService = async ({
        name: g,
        sessionId: h,
        urlServiceStatus: i,
        urlMessageStatus: j,
        userId: l,
        authToken: m,
        tenantId: n
    }) => {
        const B = y, C = z, o = {};
        o[B(0x113)] = B(0xfc), o[C(0x106)] = C(0x112);
        const p = o, {secret: q} = auth_1[B(0x103)], r = {};
        r[B(0x110)] = n, r[C(0x10c)] = p[B(0x113)], r[C(0x104)] = h;
        const s = {};
        s[B(0xf5)] = p[C(0x106)];
        const t = (0x268e + -0x1ed5 + -0x7b9, jsonwebtoken_1[C(0x10f)])(r, q, s), u = {};
        u[C(0xf1)] = g, u[C(0x104)] = h, u[C(0x101)] = t, u[C(0xf4)] = m, u[B(0x109) + B(0xf8)] = i, u[C(0xf0) + C(0xf8)] = j, u[B(0xfb)] = l, u[B(0x110)] = n;
        const v = await ApiConfig_1[B(0x103)][B(0x102)](u);
        return v;
    };
exports[z(0x103)] = CreateApiConfigService;
function a() {
    const D = [
        'profile',
        '2364399XlnAwL',
        '../../conf',
        'sign',
        'tenantId',
        'jsonwebtok',
        '730d',
        'Mfpcb',
        '2027960uFNflm',
        '10eLtvwt',
        'fault',
        'urlMessage',
        'name',
        '902984rqGOoG',
        '__esModule',
        'authToken',
        'expiresIn',
        '8956LCWoVk',
        '123VhkcGO',
        'Status',
        '__importDe',
        'ls/ApiConf',
        'userId',
        'admin',
        '88014RjDKKK',
        'defineProp',
        'ig/auth',
        'value',
        'token',
        'create',
        'default',
        'sessionId',
        '10mLywCO',
        'cnBzb',
        'erty',
        '../../mode',
        'urlService',
        '185094GuXZAZ',
        '842576rWjahO'
    ];
    a = function () {
        return D;
    };
    return a();
}