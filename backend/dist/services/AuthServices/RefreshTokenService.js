'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x144)) / (-0x2b * -0xdf + -0x80f + -0x23 * 0xd7) * (parseInt(r(0x166)) / (-0x10d + -0x2460 + 0x7 * 0x559)) + -parseInt(r(0x15b)) / (0x1 * -0x324 + -0x1693 + 0x19ba) * (-parseInt(r(0x154)) / (0xd * -0x1f1 + -0x1 * 0x7 + 0x1948)) + -parseInt(s(0x145)) / (-0x4 * 0x29 + -0x346 * 0x2 + 0x735) * (-parseInt(r(0x160)) / (0x1823 * -0x1 + -0x17 * -0x12 + 0x168b)) + -parseInt(r(0x14f)) / (0x1 * 0x1f3 + -0x1 * 0xf97 + 0xdab) + parseInt(r(0x164)) / (0xbfb * 0x2 + -0x2c * -0x57 + -0x26e2) * (-parseInt(r(0x157)) / (0x3 * 0x713 + 0x3 * 0xced + 0x1 * -0x3bf7)) + parseInt(s(0x147)) / (0x2 * -0x1a9 + -0x685 * -0x5 + -0x9bf * 0x3) + parseInt(s(0x15c)) / (0xdc9 + 0x4 * -0x8c2 + 0x154a) * (-parseInt(r(0x14e)) / (0x15e7 + 0x1 * 0x1733 + -0x1687 * 0x2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3655d * 0x1 + 0x7 * -0x1eb33 + 0x1d376c));
var __importDefault = this && this[t(0x15f) + t(0x15a)] || function (c) {
    const v = u;
    return c && c[v(0x141)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x26df + -0xc88 + -0x1917);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[u(0x14c)] = !![], Object[u(0x161) + t(0x16a)](exports, t(0x141), k), exports[t(0x163) + u(0x167)] = void (0xb73 * -0x1 + 0x1323 * -0x1 + 0x1e96);
const jsonwebtoken_1 = require(t(0x16b) + 'en'), AppError_1 = __importDefault(require(u(0x159) + u(0x158) + 'r')), ShowUserService_1 = __importDefault(require(t(0x149) + t(0x15e) + u(0x148) + 'e')), auth_1 = __importDefault(require(t(0x146) + t(0x168))), CreateTokens_1 = require(u(0x153) + u(0x142) + u(0x16c)), RefreshTokenService = async e => {
        const w = u, x = t, f = {};
        f[w(0x155)] = w(0x165) + x(0x151), f[w(0x140)] = function (p, q) {
            return p !== q;
        };
        const g = f;
        let h;
        try {
            h = (0x88b + 0x1 * 0x212b + -0x232 * 0x13, jsonwebtoken_1[w(0x15d)])(e, auth_1[x(0x152)][w(0x14a) + w(0x143)]);
        } catch (p) {
            throw new AppError_1[(x(0x152))](g[x(0x155)], -0x2129 + -0x14e * 0xb + 0x3114);
        }
        const {
                id: i,
                tokenVersion: j
            } = h, l = await (-0xb86 + 0xc * 0x92 + 0x4ae, ShowUserService_1[w(0x152)])(i, -0x22 * 0x105 + 0xaf6 + 0x17b5);
        if (g[w(0x140)](l[w(0x156) + 'on'], j))
            throw new AppError_1[(x(0x152))](g[w(0x155)], 0x8c7 * 0x3 + 0x1 * -0x186d + -0x57);
        const m = (0xf5a + 0x18b7 + -0x2811, CreateTokens_1[w(0x162) + w(0x16d)])(l), n = (-0x2467 * -0x1 + 0x8 * 0x27e + -0x3857, CreateTokens_1[w(0x169) + x(0x14d)])(l), o = {};
        return o[x(0x150)] = m, o[w(0x14b) + 'en'] = n, o;
    };
exports[u(0x163) + u(0x167)] = RefreshTokenService;
function a() {
    const y = [
        'UserServic',
        '../UserSer',
        'refreshSec',
        'refreshTok',
        'value',
        'eshToken',
        '1574652CJcYXB',
        '1985928WOtrFU',
        'newToken',
        'N_EXPIRED',
        'default',
        '../../help',
        '157588crjgvA',
        'JFwel',
        'tokenVersi',
        '261smVHbS',
        'rs/AppErro',
        '../../erro',
        'fault',
        '21HHLjep',
        '22StajJd',
        'verify',
        'vices/Show',
        '__importDe',
        '420uopDbY',
        'defineProp',
        'createAcce',
        'RefreshTok',
        '367240fcniNU',
        'ERR_SESSIO',
        '70tpqEOB',
        'enService',
        'ig/auth',
        'createRefr',
        'erty',
        'jsonwebtok',
        'Tokens',
        'ssToken',
        'CrlRz',
        '__esModule',
        'ers/Create',
        'ret',
        '15749hbFiuc',
        '73890ggvsxb',
        '../../conf',
        '8278830pnucsC'
    ];
    a = function () {
        return y;
    };
    return a();
}