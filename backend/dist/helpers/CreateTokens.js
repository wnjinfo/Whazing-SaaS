'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x9b)) / (0x7a8 + -0x62 + -0x745 * 0x1) * (parseInt(q(0xa5)) / (0x1916 + 0xc13 * 0x2 + -0x189d * 0x2)) + parseInt(q(0xa3)) / (0xd * -0x53 + 0x4 * -0x6c5 + 0x1f4e) + -parseInt(p(0x9c)) / (-0x4f1 + 0x1242 + -0x3 * 0x46f) + -parseInt(q(0x9d)) / (0x2432 + -0x2 * 0xef0 + -0x64d) * (parseInt(p(0xaa)) / (-0x118 + -0x2 * -0x56b + -0x26e * 0x4)) + parseInt(p(0x9e)) / (0x25f1 * 0x1 + -0x1168 + -0x2 * 0xa41) + parseInt(q(0x98)) / (-0x15 * 0x6a + -0xe20 + 0x16da) + -parseInt(q(0xa2)) / (0x17a + -0x6 * 0x59f + 0x2049);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5e883 * 0x2 + -0x2f5 * 0xf9 + 0x3a922));
var __importDefault = this && this[r(0xa6) + r(0xa8)] || function (c) {
    const t = s;
    return c && c[t(0xa4)] ? c : { 'default': c };
};
const o = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xe1b + 0x2015 + -0x37c * 0x5);
        let h = e[f];
        return h;
    }, b(c, d);
}
o[s(0x93)] = !![], Object[r(0x9f) + r(0xab)](exports, r(0xa4), o), exports[r(0xa9) + s(0x99)] = exports[r(0x94) + r(0xa1)] = void (-0x6 * 0x33b + 0x774 * 0x1 + 0xbee);
const jsonwebtoken_1 = require(s(0xa0) + 'en'), auth_1 = __importDefault(require(s(0x90) + s(0xa7))), createAccessToken = e => {
        const u = s, v = s, {
                secret: f,
                expiresIn: g
            } = auth_1[u(0x8f)], h = {};
        h[u(0x96)] = e[v(0x9a)], h[u(0x91)] = e[u(0x91)], h[v(0x97)] = e[u(0x97)], h['id'] = e['id'];
        const i = {};
        return i[v(0x95)] = g, (-0x32f * -0x7 + 0x6c5 + -0x2 * 0xe87, jsonwebtoken_1[u(0x8e)])(h, f, i);
    };
exports[r(0x94) + r(0xa1)] = createAccessToken;
function a() {
    const y = [
        'createRefr',
        '95652sFTpqJ',
        'erty',
        'sign',
        'default',
        '../config/',
        'tenantId',
        'tokenVersi',
        'value',
        'createAcce',
        'expiresIn',
        'usarname',
        'profile',
        '6576112EetSvp',
        'eshToken',
        'name',
        '1fmlmII',
        '4019536RSOPTF',
        '505zvAVMB',
        '10460709abAQCK',
        'defineProp',
        'jsonwebtok',
        'ssToken',
        '5515560PwsYfx',
        '3727686BOTwDc',
        '__esModule',
        '989444MYhfkT',
        '__importDe',
        'auth',
        'fault'
    ];
    a = function () {
        return y;
    };
    return a();
}
const createRefreshToken = e => {
    const w = r, x = r, {
            refreshSecret: f,
            refreshExpiresIn: g
        } = auth_1[w(0x8f)], h = {};
    h['id'] = e['id'], h[x(0x92) + 'on'] = e[x(0x92) + 'on'];
    const i = {};
    return i[w(0x95)] = g, (0x114c + 0x60 * 0x66 + -0x5 * 0xb1c, jsonwebtoken_1[x(0x8e)])(h, f, i);
};
exports[s(0xa9) + r(0x99)] = createRefreshToken;