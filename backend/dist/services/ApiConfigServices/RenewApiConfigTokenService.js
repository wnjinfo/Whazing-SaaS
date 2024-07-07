'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(s(0x10d)) / (-0x4d * -0x2b + -0x2fd + -0x9f1) * (parseInt(s(0x120)) / (-0x1416 + -0xad9 + 0x1ef1)) + -parseInt(t(0x115)) / (-0x1c01 * 0x1 + 0x8 * -0x2f2 + -0x1 * -0x3394) * (parseInt(t(0x11c)) / (0x1 * -0x22ee + -0x13dc + 0x57b * 0xa)) + -parseInt(t(0xf7)) / (-0x5 * -0x3f6 + 0x1783 + 0x15a6 * -0x2) * (parseInt(t(0xf9)) / (-0x1 * -0x8a1 + -0x16 * -0x74 + 0x3 * -0x631)) + -parseInt(t(0x106)) / (-0x2ff + -0xc7d * -0x2 + -0x15f4) + -parseInt(t(0x111)) / (0x1 * -0x54f + -0x80 * 0x1d + 0x13d7) + -parseInt(t(0x110)) / (0x36f * 0x5 + 0x1189 * 0x1 + 0x7d * -0x47) * (parseInt(t(0xf8)) / (-0x409 + 0xdf * -0x1d + 0x5de * 0x5)) + parseInt(t(0x104)) / (-0x3 * -0x567 + -0x1 * 0x2677 + 0xad * 0x21) * (parseInt(s(0x109)) / (-0x1 * 0x11e7 + 0x3 * 0x81c + -0x47 * 0x17));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x65 * 0x1332 + -0x89 * -0x311 + 0x4 * -0x47ba));
var __importDefault = this && this[u(0x117) + v(0xfc)] || function (c) {
    const w = u;
    return c && c[w(0x103)] ? c : { 'default': c };
};
const k = {};
k[v(0x11d)] = !![], Object[v(0xfd) + u(0x102)](exports, u(0x103), k);
const jsonwebtoken_1 = require(u(0x100) + 'en'), ApiConfig_1 = __importDefault(require(v(0x10e) + u(0x116) + 'ig')), auth_1 = __importDefault(require(u(0xfb) + v(0x10b))), AppError_1 = __importDefault(require(u(0x11f) + u(0x121) + 'r')), RenewApiConfigTokenService = async ({
        apiId: g,
        sessionId: h,
        tenantId: i
    }) => {
        const x = v, y = u, j = {};
        j[x(0x108)] = x(0x112) + x(0xff) + x(0x114), j[y(0x11b)] = x(0x105), j[y(0x11a)] = x(0x11e);
        const l = j, {secret: m} = auth_1[x(0x118)], n = await ApiConfig_1[x(0x118)][y(0xfe)](g);
        if (!n)
            throw new AppError_1[(x(0x118))](l[y(0x108)], 0x1e4f + 0x7 * -0x525 + 0x748);
        const o = {};
        o[x(0x10a)] = i, o[x(0x107)] = l[y(0x11b)], o[x(0x113)] = h;
        const p = {};
        p[y(0x10c)] = l[y(0x11a)];
        const q = (-0x2 * 0x96b + -0x13ba + -0x2 * -0x1348, jsonwebtoken_1[x(0x119)])(o, m, p), r = {};
        return r[x(0x101)] = q, n[y(0xfa)](r), n[x(0x10f)](), n;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x29 * 0x79 + 0xa14 + -0x1c7e);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const z = [
        '36755oXGphN',
        '4551110aQTURE',
        '54hJSpou',
        'update',
        '../../conf',
        'fault',
        'defineProp',
        'findByPk',
        'NFIG_NOT_F',
        'jsonwebtok',
        'token',
        'erty',
        '__esModule',
        '70521WGguls',
        'admin',
        '831509tTllHD',
        'profile',
        'PfmAc',
        '3984KfIsJa',
        'tenantId',
        'ig/auth',
        'expiresIn',
        '23PHBOZk',
        '../../mode',
        'reload',
        '18sjSiQM',
        '2376qZjmSb',
        'ERR_API_CO',
        'sessionId',
        'OUND',
        '1623wperAR',
        'ls/ApiConf',
        '__importDe',
        'default',
        'sign',
        'HpmaX',
        'sldCr',
        '7384BdbHUf',
        'value',
        '730d',
        '../../erro',
        '43140sEkPiW',
        'rs/AppErro'
    ];
    a = function () {
        return z;
    };
    return a();
}
exports[u(0x118)] = RenewApiConfigTokenService;