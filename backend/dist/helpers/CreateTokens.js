'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x89)) / (-0xbc5 + 0x2587 + -0x19c1) + parseInt(p(0xa0)) / (0x258b + -0x24a7 + 0x1 * -0xe2) + -parseInt(q(0x9f)) / (0x5 * -0x640 + -0xb79 + 0x2abc) * (parseInt(p(0x88)) / (0x18ac + 0x4e1 + -0x1d89)) + -parseInt(p(0x8f)) / (0x677 + 0xaf7 * 0x2 + -0x1c60) + parseInt(p(0x9e)) / (0x1da5 + 0x1f3d + 0x4c * -0xcd) * (-parseInt(q(0x99)) / (-0x240e + 0x3 * -0x694 + 0x37d1)) + -parseInt(p(0x97)) / (0x4 * -0x8f3 + 0x183 * 0x1 + -0x1 * -0x2251) * (-parseInt(q(0x98)) / (0x5e * -0x7 + 0xb40 + -0x8a5)) + parseInt(q(0x8c)) / (-0x15b1 + -0x2e * 0x67 + 0x283d) * (parseInt(p(0x8b)) / (-0x2 * -0x8a4 + -0x2bd + -0xe80));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x9c635 + -0x19cf * -0xa2 + 0x20612));
var __importDefault = this && this[r(0x91) + r(0x9d)] || function (c) {
    const t = r;
    return c && c[t(0x96)] ? c : { 'default': c };
};
const o = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x5ab * -0x6 + -0xd5f + -0x1b6 * -0x1c);
        let h = e[f];
        return h;
    }, b(c, d);
}
o[r(0xa6)] = !![], Object[r(0x9c) + r(0xa3)](exports, r(0x96), o), exports[r(0x95) + s(0xa1)] = exports[s(0x8e) + r(0x90)] = void (0x34a + 0x1268 + -0xad9 * 0x2);
function a() {
    const y = [
        'sign',
        'createAcce',
        '3473505TjIhHv',
        'ssToken',
        '__importDe',
        'tenantId',
        'expiresIn',
        'name',
        'createRefr',
        '__esModule',
        '13784uixUst',
        '2439NTICNC',
        '3983mtDdmK',
        'profile',
        'auth',
        'defineProp',
        'fault',
        '7386QptWbk',
        '1094844suYlAz',
        '559732prVpOc',
        'eshToken',
        'default',
        'erty',
        'usarname',
        'jsonwebtok',
        'value',
        'tokenVersi',
        '12QzUnrT',
        '131142ZGhwWs',
        '../config/',
        '22UfKGsm',
        '10872190dALxXK'
    ];
    a = function () {
        return y;
    };
    return a();
}
const jsonwebtoken_1 = require(s(0xa5) + 'en'), auth_1 = __importDefault(require(r(0x8a) + s(0x9b))), createAccessToken = e => {
        const u = r, v = r, {
                secret: f,
                expiresIn: g
            } = auth_1[u(0xa2)], h = {};
        h[v(0xa4)] = e[v(0x94)], h[v(0x92)] = e[u(0x92)], h[v(0x9a)] = e[u(0x9a)], h['id'] = e['id'];
        const i = {};
        return i[u(0x93)] = g, (0x1b0c + -0xfe2 + 0xb2a * -0x1, jsonwebtoken_1[v(0x8d)])(h, f, i);
    };
exports[s(0x8e) + s(0x90)] = createAccessToken;
const createRefreshToken = e => {
    const w = r, x = s, {
            refreshSecret: f,
            refreshExpiresIn: g
        } = auth_1[w(0xa2)], h = {};
    h['id'] = e['id'], h[w(0x87) + 'on'] = e[w(0x87) + 'on'];
    const i = {};
    return i[w(0x93)] = g, (-0x197d + -0x1 * -0x2335 + 0x4 * -0x26e, jsonwebtoken_1[w(0x8d)])(h, f, i);
};
exports[r(0x95) + s(0xa1)] = createRefreshToken;