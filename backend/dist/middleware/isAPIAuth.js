'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(B(0x151)) / (-0x1db * -0x10 + -0x1 * 0x2641 + 0x892) + parseInt(C(0x156)) / (0x7 * 0x13d + -0x1 * -0x11a5 + 0x5b * -0x4a) + parseInt(C(0x142)) / (-0x1 * -0x24be + -0x1cbd + -0x7fe) * (parseInt(C(0x168)) / (-0x45 * 0x73 + 0xefe + 0x1005)) + -parseInt(B(0x14e)) / (-0x1937 + -0x1 * 0x1972 + 0x32ae) * (parseInt(C(0x14d)) / (0x902 * -0x2 + 0x208 * 0x7 + 0x1e9 * 0x2)) + parseInt(B(0x154)) / (-0xa6 * -0x13 + 0x970 + -0x15bb) * (parseInt(C(0x160)) / (0xb97 * -0x1 + -0x16ee + 0x1d * 0x131)) + -parseInt(B(0x15c)) / (-0x17 * 0x19c + 0x17c4 + 0x1 * 0xd49) + parseInt(B(0x152)) / (-0x1 * 0x11b8 + 0x1f07 + 0x2b * -0x4f) * (parseInt(C(0x15e)) / (0xb * 0x5f + -0x31 * 0x37 + 0x67d));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1304a6 + -0x9 * -0xee9 + 0x1f57 * -0x43));
var __importDefault = this && this[D(0x157) + E(0x16a)] || function (c) {
    const F = D;
    return c && c[F(0x15a)] ? c : { 'default': c };
};
const A = {};
function a() {
    const I = [
        'secret',
        'GNkaS',
        'APIAuth',
        'not\x20provid',
        'ken.',
        'sessionId',
        'split',
        'jPheu',
        'value',
        '582UnmNPM',
        '27110wStksi',
        'AppError',
        'defineProp',
        '823180sibWyY',
        '2493910Bjhvgq',
        'Invalid\x20to',
        '18956KqidXZ',
        'Token\x20was\x20',
        '1279732HJDycX',
        '__importDe',
        'ion',
        'verify',
        '__esModule',
        'apiId',
        '8683254FPeWbg',
        'auth',
        '11wbHYdA',
        'erty',
        '3896RNiWxh',
        '../config/',
        'jsonwebtok',
        'tmaYX',
        'tenantId',
        '../errors/',
        'authorizat',
        'headers',
        '76SaFrQX',
        'default',
        'fault',
        '134061UHpWkO',
        'ed.'
    ];
    a = function () {
        return I;
    };
    return a();
}
A[D(0x14c)] = !![], Object[D(0x150) + E(0x15f)](exports, D(0x15a), A);
const jsonwebtoken_1 = require(E(0x162) + 'en'), AppError_1 = __importDefault(require(E(0x165) + E(0x14f))), auth_1 = __importDefault(require(E(0x161) + D(0x15d))), isAPIAuth = (d, e, f) => {
        const G = D, H = D, g = {
                'tmaYX': G(0x155) + H(0x147) + H(0x143),
                'jPheu': G(0x153) + G(0x148),
                'GNkaS': function (j) {
                    return j();
                }
            }, h = d[G(0x167)][H(0x166) + H(0x158)];
        if (!h)
            throw new AppError_1[(G(0x169))](g[H(0x163)], -0x2c + -0xc1d + 0x4 * 0x377);
        const [, i] = h[G(0x14a)]('\x20');
        try {
            const j = (-0x1385 + -0x1108 + 0x3 * 0xc2f, jsonwebtoken_1[H(0x159)])(i, auth_1[G(0x169)][H(0x144)]), {
                    apiId: k,
                    sessionId: l,
                    tenantId: m
                } = j, n = {};
            n[G(0x15b)] = k, n[H(0x149)] = l, n[G(0x164)] = m, d[H(0x146)] = n;
        } catch (o) {
            throw new AppError_1[(G(0x169))](g[G(0x14b)], 0x2 * -0x7c3 + -0x58 * 0x41 + 0x2771);
        }
        return g[H(0x145)](f);
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1a01 + 0x162f + 0x514);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[D(0x169)] = isAPIAuth;