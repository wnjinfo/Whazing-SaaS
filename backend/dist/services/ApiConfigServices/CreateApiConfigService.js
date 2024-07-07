'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(w(0xb6)) / (-0x658 * 0x2 + 0x1a02 + 0xd51 * -0x1) * (parseInt(w(0xca)) / (0x670 + -0x207 * 0x2 + -0x260)) + parseInt(w(0xba)) / (-0xaa3 + 0xa8a + 0x1c) * (-parseInt(x(0xbd)) / (-0x1 * 0xb53 + 0x67 * 0x3d + -0xd34)) + parseInt(w(0xa8)) / (0x50d + 0x11fd + -0x1705) * (-parseInt(x(0xb5)) / (-0x17 * -0x19f + -0x11b5 * -0x1 + -0x1b7c * 0x2)) + parseInt(x(0xb1)) / (-0x11c7 + -0x167a + 0x2848) * (-parseInt(x(0xb2)) / (0x86f + 0x2 * -0x1f9 + -0x7 * 0xa3)) + -parseInt(x(0xb9)) / (-0x3 * -0x3e2 + 0x143 * -0x1e + 0x1a3d) + parseInt(x(0xc2)) / (-0x1 * 0x176c + 0x35e * -0x9 + -0x94 * -0x5d) * (-parseInt(w(0xbf)) / (-0x5b * 0x13 + 0x634 * -0x2 + 0x4cd * 0x4)) + -parseInt(x(0xc4)) / (-0x3b1 + 0x1b * 0x61 + -0x67e) * (-parseInt(w(0xc3)) / (-0x3 * -0x61b + -0x1c63 + -0x1 * -0xa1f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0x6a11b + 0x562c1 * 0x1 + -0x5 * -0xf48b));
function a() {
    const D = [
        '350296rCrxZV',
        '__esModule',
        'name',
        '6HMYsGj',
        '1zTkYkm',
        'profile',
        'authToken',
        '3167820oqlAsT',
        '105wyokIG',
        'urlMessage',
        'erty',
        '32672nWlQLk',
        'value',
        '87703KXiLkK',
        'userId',
        'sessionId',
        '430cXysUr',
        '26rGRmey',
        '9702204cTsIxd',
        '__importDe',
        'create',
        'defineProp',
        '../../conf',
        'sign',
        '142664mnNWpi',
        'token',
        '730d',
        'ig/auth',
        'WSrUi',
        'ls/ApiConf',
        'expiresIn',
        'Status',
        '572755peyDac',
        'fault',
        'urlService',
        'jsonwebtok',
        'ypqmm',
        '../../mode',
        'admin',
        'default',
        'tenantId',
        '35GgnEie'
    ];
    a = function () {
        return D;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x246d + 0x1 * 0x4df + 0x2031);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[y(0xc5) + y(0xa9)] || function (c) {
    const A = z;
    return c && c[A(0xb3)] ? c : { 'default': c };
};
const k = {};
k[y(0xbe)] = !![], Object[y(0xc7) + y(0xbc)](exports, z(0xb3), k);
const jsonwebtoken_1 = require(z(0xab) + 'en'), ApiConfig_1 = __importDefault(require(y(0xad) + y(0xa5) + 'ig')), auth_1 = __importDefault(require(y(0xc8) + y(0xa3))), CreateApiConfigService = async ({
        name: g,
        sessionId: h,
        urlServiceStatus: i,
        urlMessageStatus: j,
        userId: l,
        authToken: m,
        tenantId: n
    }) => {
        const B = z, C = y, o = {};
        o[B(0xac)] = B(0xae), o[C(0xa4)] = B(0xcc);
        const p = o, {secret: q} = auth_1[B(0xaf)], r = {};
        r[B(0xb0)] = n, r[C(0xb7)] = p[B(0xac)], r[C(0xc1)] = h;
        const s = {};
        s[B(0xa6)] = p[B(0xa4)];
        const t = (-0x1995 + 0x1f * -0x91 + 0xfb * 0x2c, jsonwebtoken_1[C(0xc9)])(r, q, s), u = {};
        u[B(0xb4)] = g, u[C(0xc1)] = h, u[C(0xcb)] = t, u[B(0xb8)] = m, u[C(0xaa) + B(0xa7)] = i, u[B(0xbb) + C(0xa7)] = j, u[C(0xc0)] = l, u[C(0xb0)] = n;
        const v = await ApiConfig_1[B(0xaf)][B(0xc6)](u);
        return v;
    };
exports[z(0xaf)] = CreateApiConfigService;