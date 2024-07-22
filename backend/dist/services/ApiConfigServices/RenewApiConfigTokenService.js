'use strict';
function a() {
    const z = [
        '64578gWdowW',
        '../../mode',
        '400NDDdPv',
        'jsonwebtok',
        '2395320osmUMO',
        '38445zfETQu',
        '9tnjdNC',
        '581FMsTbs',
        'value',
        'default',
        'sign',
        'NFIG_NOT_F',
        '__importDe',
        'rs/AppErro',
        '1038950MuSaRB',
        'BFZbD',
        'fault',
        'ls/ApiConf',
        '308UhEOrR',
        '__esModule',
        '960064QETBlp',
        '122158VgOdIh',
        'profile',
        'ig/auth',
        '../../conf',
        'findByPk',
        '31839EkIoDq',
        '730d',
        'admin',
        'sessionId',
        'update',
        'tenantId',
        'TEsNo',
        '../../erro',
        'expiresIn',
        'erty',
        'SGdQQ',
        '4LlfyYJ',
        'defineProp',
        'ERR_API_CO',
        'OUND',
        'token',
        'reload'
    ];
    a = function () {
        return z;
    };
    return a();
}
const u = b, v = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x237e + -0x27 * -0x6 + -0x71b * 0x5);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(s(0x10b)) / (0x908 * 0x2 + -0x83 * -0x49 + -0x1bb5 * 0x2) * (parseInt(s(0xfb)) / (-0xfa * 0xc + -0x1 * 0x5b1 + 0x116b)) + parseInt(t(0x100)) / (-0x5c * -0x14 + -0xc8c + 0x5 * 0x113) * (-parseInt(s(0xf8)) / (0x13f7 * 0x1 + -0x5d5 * 0x2 + -0x2c3 * 0x3)) + parseInt(s(0xf4)) / (-0x1037 * 0x2 + 0x3e6 * 0x2 + -0x18a7 * -0x1) + -parseInt(s(0xe6)) / (0x1644 + -0x26c + -0x13d2) * (-parseInt(t(0xed)) / (-0x1 * -0x3eb + -0x1505 + 0x1121)) + parseInt(t(0xfa)) / (0x11a2 + 0x1 * 0xd76 + -0x1f10) * (-parseInt(s(0xec)) / (-0x106 + 0x1479 * 0x1 + -0x136a)) + parseInt(t(0xe8)) / (-0x85a + 0x85 + 0x7df) * (-parseInt(s(0xeb)) / (0x2 * -0x7d0 + -0x1f96 + 0x2f41)) + parseInt(t(0xea)) / (0x1 * 0x13af + 0x10b9 + -0x245c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x9ebb9 + 0x1 * 0x575eb + 0xb9a12));
var __importDefault = this && this[u(0xf2) + u(0xf6)] || function (c) {
    const w = v;
    return c && c[w(0xf9)] ? c : { 'default': c };
};
const k = {};
k[v(0xee)] = !![], Object[u(0xe1) + v(0x109)](exports, u(0xf9), k);
const jsonwebtoken_1 = require(v(0xe9) + 'en'), ApiConfig_1 = __importDefault(require(u(0xe7) + v(0xf7) + 'ig')), auth_1 = __importDefault(require(u(0xfe) + u(0xfd))), AppError_1 = __importDefault(require(u(0x107) + u(0xf3) + 'r')), RenewApiConfigTokenService = async ({
        apiId: g,
        sessionId: h,
        tenantId: i
    }) => {
        const x = u, y = u, j = {};
        j[x(0x106)] = x(0xe2) + x(0xf1) + y(0xe3), j[x(0x10a)] = x(0x102), j[y(0xf5)] = x(0x101);
        const l = j, {secret: m} = auth_1[x(0xef)], n = await ApiConfig_1[x(0xef)][x(0xff)](g);
        if (!n)
            throw new AppError_1[(x(0xef))](l[y(0x106)], 0x1db4 + 0x1aa5 * -0x1 + -0x17b);
        const o = {};
        o[y(0x105)] = i, o[x(0xfc)] = l[y(0x10a)], o[x(0x103)] = h;
        const p = {};
        p[y(0x108)] = l[y(0xf5)];
        const q = (0x3 * -0x49b + 0x1 * 0x94f + 0x482 * 0x1, jsonwebtoken_1[x(0xf0)])(o, m, p), r = {};
        return r[x(0xe4)] = q, n[x(0x104)](r), n[x(0xe5)](), n;
    };
exports[u(0xef)] = RenewApiConfigTokenService;