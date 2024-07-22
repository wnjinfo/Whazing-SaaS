'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(w(0x7c)) / (-0x766 + -0x227 + 0x4c7 * 0x2) + parseInt(w(0x7e)) / (-0x1 * -0xe41 + -0xa7 * 0x4 + 0x3e1 * -0x3) + parseInt(w(0x7f)) / (0x21c + -0x8 * 0x18b + 0xa3f) + parseInt(x(0x74)) / (0x1 * 0xc6f + -0x3 * 0x563 + -0x2 * -0x1df) * (parseInt(x(0x80)) / (-0x32f + 0x367 + -0x33)) + -parseInt(x(0x75)) / (0x1c49 + -0x8df + -0x1364) + parseInt(x(0x94)) / (0x17a6 + -0x1a33 + -0x37 * -0xc) * (-parseInt(w(0x82)) / (-0x530 + -0xa1a + 0xf52)) + parseInt(w(0x8f)) / (0xbc + 0x679 * 0x3 + 0x32 * -0x67) * (-parseInt(w(0x88)) / (0x45 * -0x72 + -0xff * -0x7 + -0x1 * -0x17cb));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xf * -0xa934 + -0x756a9 + 0x1b24ea));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x17e * 0xf + 0x1501 + 0x2af4 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[y(0x91) + y(0x81)] || function (c) {
    const A = y;
    return c && c[A(0x71)] ? c : { 'default': c };
};
const k = {};
function a() {
    const D = [
        'jsonwebtok',
        '1095241AgDbDp',
        'erty',
        '211020IlyJOF',
        '1794108dBOWeT',
        '6197390vDewIF',
        'fault',
        '423592kGvvIA',
        '../../conf',
        'value',
        'jvuxd',
        'urlMessage',
        'create',
        '8560aJBZQP',
        '730d',
        'defineProp',
        '../../mode',
        'authToken',
        'name',
        'ls/ApiConf',
        '12843YIhjFT',
        'tenantId',
        '__importDe',
        'urlService',
        'ig/auth',
        '98uFtyaR',
        'sign',
        'admin',
        'sessionId',
        '__esModule',
        'XgDhD',
        'expiresIn',
        '4OMPjxB',
        '2563332wQhUVQ',
        'userId',
        'token',
        'profile',
        'default',
        'Status'
    ];
    a = function () {
        return D;
    };
    return a();
}
k[z(0x84)] = !![], Object[y(0x8a) + y(0x7d)](exports, y(0x71), k);
const jsonwebtoken_1 = require(z(0x7b) + 'en'), ApiConfig_1 = __importDefault(require(y(0x8b) + y(0x8e) + 'ig')), auth_1 = __importDefault(require(y(0x83) + z(0x93))), CreateApiConfigService = async ({
        name: g,
        sessionId: h,
        urlServiceStatus: i,
        urlMessageStatus: j,
        userId: l,
        authToken: m,
        tenantId: n
    }) => {
        const B = y, C = z, o = {};
        o[B(0x85)] = B(0x6f), o[C(0x72)] = B(0x89);
        const p = o, {secret: q} = auth_1[B(0x79)], r = {};
        r[B(0x90)] = n, r[B(0x78)] = p[C(0x85)], r[C(0x70)] = h;
        const s = {};
        s[B(0x73)] = p[B(0x72)];
        const t = (-0x9 * 0x221 + 0x583 + 0xda6, jsonwebtoken_1[B(0x95)])(r, q, s), u = {};
        u[B(0x8d)] = g, u[C(0x70)] = h, u[C(0x77)] = t, u[C(0x8c)] = m, u[C(0x92) + B(0x7a)] = i, u[C(0x86) + C(0x7a)] = j, u[C(0x76)] = l, u[B(0x90)] = n;
        const v = await ApiConfig_1[C(0x79)][C(0x87)](u);
        return v;
    };
exports[z(0x79)] = CreateApiConfigService;