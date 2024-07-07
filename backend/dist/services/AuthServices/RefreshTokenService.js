'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x9 * 0x107 + -0x1 * -0x638 + 0xdff * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x187)) / (-0x8df * -0x2 + -0x1ba5 + 0x9e8) + -parseInt(r(0x184)) / (0x588 + -0x3 * -0x766 + 0x1bb8 * -0x1) + parseInt(r(0x186)) / (-0x574 * -0x5 + -0x12a + -0x1a17) + -parseInt(r(0x18c)) / (0x2583 * 0x1 + -0xb09 + -0x1a76) * (-parseInt(r(0x198)) / (0x118e * -0x1 + -0x7fc + -0x3 * -0x885)) + parseInt(s(0x197)) / (-0x25 * -0x3e + 0x22ad + -0x2b9d) + parseInt(s(0x188)) / (-0x1353 + -0x8f9 + 0x1c53) * (-parseInt(r(0x178)) / (0x1416 + 0x114a + 0x14 * -0x1de)) + -parseInt(s(0x1a1)) / (-0xc54 + -0x1 * 0x1c3b + -0x1 * -0x2898);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xa1c3 * 0x14 + -0x11cbe8 * -0x1 + 0x45737));
var __importDefault = this && this[t(0x19f) + t(0x194)] || function (c) {
    const v = t;
    return c && c[v(0x185)] ? c : { 'default': c };
};
const k = {};
k[t(0x192)] = !![], Object[u(0x18d) + u(0x180)](exports, u(0x185), k), exports[u(0x17f) + u(0x191)] = void (-0x3 * 0xb2b + 0xffb * -0x2 + 0x4177 * 0x1);
const jsonwebtoken_1 = require(u(0x17a) + 'en'), AppError_1 = __importDefault(require(t(0x18e) + u(0x19b) + 'r')), ShowUserService_1 = __importDefault(require(u(0x19e) + u(0x199) + u(0x1a0) + 'e')), auth_1 = __importDefault(require(u(0x190) + u(0x17d))), CreateTokens_1 = require(u(0x1a2) + u(0x195) + u(0x18a)), RefreshTokenService = async e => {
        const w = u, x = u, f = {};
        f[w(0x182)] = x(0x17b) + x(0x183), f[w(0x196)] = function (p, q) {
            return p !== q;
        };
        const g = f;
        let h;
        try {
            h = (-0x7ce + 0x17f6 + -0x1028, jsonwebtoken_1[w(0x19c)])(e, auth_1[x(0x18f)][w(0x17c) + x(0x179)]);
        } catch (p) {
            throw new AppError_1[(x(0x18f))](g[w(0x182)], -0xb35 + 0x4c5 * 0x1 + 0x2ab * 0x3);
        }
        const {
                id: i,
                tokenVersion: j
            } = h, l = await (-0xcb1 * 0x3 + -0xc5b * -0x2 + -0x1 * -0xd5d, ShowUserService_1[w(0x18f)])(i, 0x839 + -0x1235 + 0x9fd);
        if (g[x(0x196)](l[x(0x19d) + 'on'], j))
            throw new AppError_1[(w(0x18f))](g[x(0x182)], 0x3f1 * 0x4 + -0xe75 * 0x2 + 0xeb7);
        const m = (-0x1f38 + 0x971 * -0x1 + 0x28a9, CreateTokens_1[x(0x18b) + x(0x189)])(l), n = (-0x24 * 0x43 + 0x7 * -0xc0 + 0xeac, CreateTokens_1[x(0x19a) + w(0x181)])(l), o = {};
        return o[x(0x17e)] = m, o[w(0x193) + 'en'] = n, o;
    };
exports[t(0x17f) + t(0x191)] = RefreshTokenService;
function a() {
    const y = [
        '434621BzaqkK',
        '35jFrAot',
        'ssToken',
        'Tokens',
        'createAcce',
        '8AZUigT',
        'defineProp',
        '../../erro',
        'default',
        '../../conf',
        'enService',
        'value',
        'refreshTok',
        'fault',
        'ers/Create',
        'MFcqq',
        '7238034sesmbW',
        '876655rZoeon',
        'vices/Show',
        'createRefr',
        'rs/AppErro',
        'verify',
        'tokenVersi',
        '../UserSer',
        '__importDe',
        'UserServic',
        '263034hUzupu',
        '../../help',
        '476648jKYaca',
        'ret',
        'jsonwebtok',
        'ERR_SESSIO',
        'refreshSec',
        'ig/auth',
        'newToken',
        'RefreshTok',
        'erty',
        'eshToken',
        'Kxkvc',
        'N_EXPIRED',
        '565526MvnbeH',
        '__esModule',
        '330231eFAPno'
    ];
    a = function () {
        return y;
    };
    return a();
}