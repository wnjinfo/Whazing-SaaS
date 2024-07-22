'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x19e)) / (-0x2 * 0x122b + 0x1da3 + 0x6b4) * (parseInt(m(0x1b5)) / (0xfda + -0x2d * 0x31 + 0x73b * -0x1)) + -parseInt(m(0x1be)) / (-0x1355 + -0x914 + -0x1ac * -0x11) * (-parseInt(m(0x1a0)) / (-0x47f + -0x2 * 0xdd7 + 0x2031)) + -parseInt(m(0x19f)) / (0x2 * -0x219 + -0x1a6f + 0x1ea6) + parseInt(m(0x1b9)) / (0x1d28 + 0xf65 + 0x1 * -0x2c87) * (parseInt(l(0x1bb)) / (-0x2 * 0x129a + -0x1619 + 0x3b54)) + -parseInt(l(0x1b6)) / (0x1e26 * -0x1 + -0x15c7 + 0x33f5) + -parseInt(l(0x1a9)) / (0xdea + -0x10e1 + 0x300) * (-parseInt(l(0x1b3)) / (0x99d + 0x1 * 0x21ef + -0x2 * 0x15c1)) + -parseInt(m(0x1b1)) / (-0xc22 * 0x3 + -0x1a4a + 0x65 * 0x9f);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x76b3d + -0x9fb51 * 0x1 + -0x1 * -0x99129));
function a() {
    const u = [
        'Services/S',
        '4615554Eotpti',
        's/Facebook',
        '7TactrV',
        'etTokenAnd',
        '__importDe',
        '177dfVkgo',
        'userToken',
        'store',
        'json',
        'value',
        '2575TdYhPy',
        '778690WFbRYM',
        '61836aUBcoo',
        '../service',
        'erty',
        '__esModule',
        'nkedPage',
        'gout',
        'user',
        'facebookLo',
        'default',
        '4149McSpDh',
        'whatsapp',
        'etLogoutLi',
        'fault',
        'tenantId',
        'LinkedPage',
        'body',
        'defineProp',
        '7119442PaNWgv',
        'Services/G',
        '190TTwCqX',
        'status',
        '290pYiYny',
        '6411880VhRjaM',
        'accountId'
    ];
    a = function () {
        return u;
    };
    return a();
}
var __importDefault = this && this[n(0x1bd) + o(0x1ac)] || function (c) {
    const p = o;
    return c && c[p(0x1a3)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x5ac * 0x1 + -0x6f * -0x1f + -0x1183);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[n(0x19d)] = !![], Object[n(0x1b0) + n(0x1a2)](exports, o(0x1a3), k), exports[o(0x1a7) + o(0x1a5)] = exports[n(0x19b)] = void (0x1 * -0x910 + 0x1518 + -0xc08);
const GetTokenAndLinkedPage_1 = __importDefault(require(o(0x1a1) + o(0x1ba) + o(0x1b2) + o(0x1bc) + n(0x1ae))), SetLogoutLinkedPage_1 = __importDefault(require(n(0x1a1) + n(0x1ba) + o(0x1b8) + o(0x1ab) + n(0x1a4))), store = async (d, e) => {
        const q = n, r = n, {
                whatsapp: f,
                accountId: g,
                userToken: h
            } = d[q(0x1af)], i = {};
        return i[q(0x1aa)] = f, i[q(0x1b7)] = g, i[q(0x19a)] = h, i[r(0x1ad)] = d[q(0x1a6)][r(0x1ad)], await (0x3ea + 0x1 * -0xf4d + 0x247 * 0x5, GetTokenAndLinkedPage_1[q(0x1a8)])(i), e[r(0x1b4)](-0xadc + 0x21 * -0xf7 + 0x2b7b)[q(0x19c)]();
    };
exports[o(0x19b)] = store;
const facebookLogout = async (d, e) => {
    const s = o, t = n, f = d[s(0x1af)], g = {};
    return g[s(0x1aa)] = f, g[s(0x1ad)] = d[s(0x1a6)][s(0x1ad)], await (-0x85 * -0x5 + -0x57e + 0x2e5, SetLogoutLinkedPage_1[t(0x1a8)])(g), e[s(0x1b4)](-0x6f3 + 0x1c9 * -0x1 + -0x15c * -0x7)[s(0x19c)]();
};
exports[o(0x1a7) + n(0x1a5)] = facebookLogout;