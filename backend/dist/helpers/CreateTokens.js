'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x1bc)) / (0x968 * 0x2 + -0x9c1 * -0x1 + -0x1c90) * (parseInt(q(0x1c2)) / (0x6a * -0x13 + 0x1064 + -0x884)) + parseInt(q(0x1b5)) / (0x2 * -0x131f + 0x1 * -0x409 + 0x2 * 0x1525) * (-parseInt(q(0x1c5)) / (-0x281 * 0x4 + -0x2294 + 0x2c9c)) + -parseInt(q(0x1c6)) / (0x14ec + -0x2 * 0x10c9 + -0x439 * -0x3) + -parseInt(p(0x1ac)) / (0x6f * 0x11 + 0x6b5 * 0x2 + -0x14c3) + parseInt(q(0x1c3)) / (0xb * 0x75 + 0x2a * -0x7e + 0xfac) * (parseInt(q(0x1b3)) / (0x33 * -0x7 + 0x94d + -0x7e0)) + parseInt(p(0x1b2)) / (-0x160e + 0x27 * 0xd5 + 0x44 * -0x27) + -parseInt(q(0x1af)) / (-0x2ed * 0x3 + -0x73 * -0x4f + -0x239 * 0xc) * (-parseInt(p(0x1bb)) / (0x1697 * -0x1 + 0x2680 + 0x3 * -0x54a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x136442 + -0x5b1fe + -0x3fdef));
var __importDefault = this && this[r(0x1b6) + s(0x1ba)] || function (c) {
    const t = r;
    return c && c[t(0x1ae)] ? c : { 'default': c };
};
function a() {
    const y = [
        'tokenVersi',
        'fault',
        '44297qNMumD',
        '1XWWKaX',
        'createRefr',
        'ssToken',
        'profile',
        'eshToken',
        'jsonwebtok',
        '1506724zZabWJ',
        '51177AOmifx',
        'value',
        '450308TOZjts',
        '1312560MrJKrY',
        'usarname',
        'expiresIn',
        'auth',
        '../config/',
        'createAcce',
        '1107432bKwAwh',
        'defineProp',
        '__esModule',
        '2550hPYHmZ',
        'sign',
        'default',
        '4614399vEwxsp',
        '448WsfHYm',
        'erty',
        '3UuxsYz',
        '__importDe',
        'name',
        'tenantId'
    ];
    a = function () {
        return y;
    };
    return a();
}
const o = {};
o[s(0x1c4)] = !![], Object[r(0x1ad) + r(0x1b4)](exports, s(0x1ae), o), exports[s(0x1bd) + r(0x1c0)] = exports[s(0x1ab) + s(0x1be)] = void (-0x2 * 0x363 + -0x17ca + 0x1e90);
const jsonwebtoken_1 = require(s(0x1c1) + 'en'), auth_1 = __importDefault(require(s(0x1ca) + r(0x1c9))), createAccessToken = e => {
        const u = s, v = s, {
                secret: f,
                expiresIn: g
            } = auth_1[u(0x1b1)], h = {};
        h[v(0x1c7)] = e[u(0x1b7)], h[u(0x1b8)] = e[u(0x1b8)], h[u(0x1bf)] = e[v(0x1bf)], h['id'] = e['id'];
        const i = {};
        return i[v(0x1c8)] = g, (0x7 * -0xdb + 0x384 * 0x8 + -0x1623, jsonwebtoken_1[u(0x1b0)])(h, f, i);
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x13fc + -0xa4b + -0x806);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[r(0x1ab) + r(0x1be)] = createAccessToken;
const createRefreshToken = e => {
    const w = r, x = r, {
            refreshSecret: f,
            refreshExpiresIn: g
        } = auth_1[w(0x1b1)], h = {};
    h['id'] = e['id'], h[w(0x1b9) + 'on'] = e[x(0x1b9) + 'on'];
    const i = {};
    return i[w(0x1c8)] = g, (-0x2429 * 0x1 + 0x1f9c + 0x48d, jsonwebtoken_1[x(0x1b0)])(h, f, i);
};
exports[r(0x1bd) + r(0x1c0)] = createRefreshToken;