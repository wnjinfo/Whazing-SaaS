'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0xf7)) / (-0x1 * -0x1762 + 0x1 * 0x5ec + -0x1d4d) * (-parseInt(r(0xe5)) / (0x13f9 + -0x15f1 + 0x1fa)) + parseInt(r(0xe2)) / (-0x24b5 * 0x1 + -0xda0 + 0x3258) + -parseInt(s(0xdd)) / (0x25 * 0x13 + -0x76e * -0x2 + 0x5dd * -0x3) + -parseInt(r(0xe3)) / (0x4 * 0x229 + -0x2 * 0x46e + -0x3d * -0x1) * (-parseInt(r(0xfa)) / (0x15f * -0xb + -0x141a + 0x2335)) + parseInt(s(0xf2)) / (-0x2267 * -0x1 + -0x13 * -0x1df + -0x45ed) + -parseInt(s(0xea)) / (-0x3ef + 0x7 * -0x457 + -0x7 * -0x4e8) + parseInt(s(0xf8)) / (0x88d + 0x125a + -0x1ade) * (-parseInt(s(0xf5)) / (-0x8 * 0x26b + -0x179 * -0x5 + 0xc05));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x9facd + 0x1 * 0xad777 + -0xb * -0xcaf3));
function a() {
    const y = [
        'jsonwebtok',
        'eshToken',
        '__esModule',
        'rs/AppErro',
        'vices/Show',
        'N_EXPIRED',
        '6606173oIIMKo',
        'default',
        'newToken',
        '1609680uOXDOL',
        '../UserSer',
        '162473tVfcbe',
        '18QoBJha',
        'verify',
        '1624416pNbQlG',
        'ers/Create',
        'Tokens',
        'refreshSec',
        '../../erro',
        'UserServic',
        '__importDe',
        'RefreshTok',
        'value',
        'tokenVersi',
        'refreshTok',
        'erty',
        'ig/auth',
        'defineProp',
        'ERR_SESSIO',
        '3045060MRxDbj',
        '../../conf',
        'fault',
        'OXHgf',
        'ret',
        '2991006mwplfd',
        '15MnSokQ',
        'enService',
        '8NfeKqV',
        'createRefr',
        'createAcce',
        'ssToken',
        'RRUHa',
        '3134888FTOzXM',
        '../../help'
    ];
    a = function () {
        return y;
    };
    return a();
}
var __importDefault = this && this[t(0x100) + u(0xdf)] || function (c) {
    const v = u;
    return c && c[v(0xee)] ? c : { 'default': c };
};
const k = {};
k[t(0x102)] = !![], Object[u(0xdb) + t(0xd9)](exports, u(0xee), k), exports[u(0x101) + u(0xe4)] = void (0x1199 + 0x1145 + -0x22de);
const jsonwebtoken_1 = require(t(0xec) + 'en'), AppError_1 = __importDefault(require(t(0xfe) + u(0xef) + 'r')), ShowUserService_1 = __importDefault(require(t(0xf6) + u(0xf0) + t(0xff) + 'e')), auth_1 = __importDefault(require(t(0xde) + u(0xda))), CreateTokens_1 = require(u(0xeb) + t(0xfb) + t(0xfc)), RefreshTokenService = async e => {
        const w = t, x = u, f = {};
        f[w(0xe9)] = w(0xdc) + w(0xf1), f[w(0xe0)] = function (p, q) {
            return p !== q;
        };
        const g = f;
        let h;
        try {
            h = (-0x1e88 + -0x18dc * -0x1 + -0x2 * -0x2d6, jsonwebtoken_1[w(0xf9)])(e, auth_1[w(0xf3)][x(0xfd) + x(0xe1)]);
        } catch (p) {
            throw new AppError_1[(x(0xf3))](g[w(0xe9)], -0x1 * 0x30 + 0x5 * 0x493 + -0x33 * 0x6a);
        }
        const {
                id: i,
                tokenVersion: j
            } = h, l = await (0x22d * -0xa + 0xcb * 0x11 + 0x847, ShowUserService_1[x(0xf3)])(i, 0xa3 * -0x3 + -0x775 * -0x3 + 0x1 * -0x1475);
        if (g[w(0xe0)](l[x(0x103) + 'on'], j))
            throw new AppError_1[(w(0xf3))](g[w(0xe9)], 0x23ff * 0x1 + -0x26bb + 0x44d);
        const m = (-0x21f * 0xe + 0x1d36 + -0x3e * -0x2, CreateTokens_1[w(0xe7) + x(0xe8)])(l), n = (0xbfb + 0x290 * -0x7 + 0x5f5, CreateTokens_1[w(0xe6) + w(0xed)])(l), o = {};
        return o[w(0xf4)] = m, o[w(0xd8) + 'en'] = n, o;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xba5 + 0x8f3 * -0x2 + 0x4f * 0x17);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[u(0x101) + u(0xe4)] = RefreshTokenService;