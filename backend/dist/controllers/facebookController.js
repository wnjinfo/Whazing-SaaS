'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x186 * -0x6 + 0xc95 + -0x2fc);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const u = [
        'fault',
        's/Facebook',
        '581202rFdKhA',
        '2nSdKxQ',
        'accountId',
        '4Kgeiah',
        'whatsapp',
        '101486gPxzTm',
        'status',
        'user',
        'Services/G',
        '42AMdUgb',
        '99285cKYMoH',
        'gout',
        'defineProp',
        'LinkedPage',
        '5150880juWmag',
        'userToken',
        'store',
        'facebookLo',
        '../service',
        'etTokenAnd',
        'body',
        'value',
        'etLogoutLi',
        '109623oPWCHq',
        '140qsvgxF',
        'json',
        'Services/S',
        '292375boiEJG',
        '__importDe',
        '7bgdkeO',
        'tenantId',
        'erty',
        '960568BKRibD',
        'default',
        '__esModule',
        'nkedPage'
    ];
    a = function () {
        return u;
    };
    return a();
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x82)) / (-0x2090 * -0x1 + 0xf96 + -0x3025) * (parseInt(l(0x8e)) / (-0x1 * 0x1ea6 + -0x8 * 0x1e2 + -0x428 * -0xb)) + parseInt(l(0x7e)) / (0x11a1 * -0x1 + 0x1031 + 0x7 * 0x35) * (-parseInt(l(0x90)) / (0x1f7 * 0x11 + 0x20 * -0x8 + -0x2063 * 0x1)) + parseInt(m(0x97)) / (0xd8 + -0x652 * -0x1 + 0x3b * -0x1f) * (parseInt(m(0x96)) / (0x1128 + -0x2 * -0x4a + -0x11b6)) + parseInt(m(0x84)) / (0x3fc + -0x163 + -0x292) * (parseInt(l(0x87)) / (0x101d + 0xd20 + -0x1d35)) + -parseInt(l(0x8d)) / (0x221d + 0xd0e + -0x2f22) + -parseInt(l(0x7f)) / (-0x6c5 * -0x4 + -0xd * 0xc7 + 0x3 * -0x5a5) * (parseInt(l(0x92)) / (0xecb * -0x2 + 0xbf1 + 0x11b0)) + parseInt(m(0x75)) / (-0xb45 * 0x1 + -0x4 * -0x779 + -0x1293);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x1f11d + -0xa7dc * -0x2 + 0xb9c1 * -0x1));
var __importDefault = this && this[n(0x83) + n(0x8b)] || function (c) {
    const p = n;
    return c && c[p(0x89)] ? c : { 'default': c };
};
const k = {};
k[o(0x7c)] = !![], Object[n(0x99) + o(0x86)](exports, n(0x89), k), exports[n(0x78) + n(0x98)] = exports[n(0x77)] = void (-0x1d8e + -0x1 * -0x4e5 + 0x18a9);
const GetTokenAndLinkedPage_1 = __importDefault(require(n(0x79) + n(0x8c) + n(0x95) + n(0x7a) + n(0x9a))), SetLogoutLinkedPage_1 = __importDefault(require(o(0x79) + o(0x8c) + n(0x81) + n(0x7d) + o(0x8a))), store = async (d, e) => {
        const q = n, r = n, {
                whatsapp: f,
                accountId: g,
                userToken: h
            } = d[q(0x7b)], i = {};
        return i[r(0x91)] = f, i[r(0x8f)] = g, i[r(0x76)] = h, i[r(0x85)] = d[r(0x94)][q(0x85)], await (-0xa6 * -0x2b + 0xa33 * 0x1 + 0x2615 * -0x1, GetTokenAndLinkedPage_1[r(0x88)])(i), e[q(0x93)](0x2683 + -0x1b36 + -0xa85)[r(0x80)]();
    };
exports[o(0x77)] = store;
const facebookLogout = async (d, e) => {
    const s = n, t = o, f = d[s(0x7b)], g = {};
    return g[t(0x91)] = f, g[t(0x85)] = d[t(0x94)][s(0x85)], await (-0x4 * 0x34a + -0x119 * 0x1a + -0x1 * -0x29b2, SetLogoutLinkedPage_1[t(0x88)])(g), e[s(0x93)](-0xd * 0x22 + 0x5 * -0x366 + 0x1a * 0xc0)[s(0x80)]();
};
exports[o(0x78) + o(0x98)] = facebookLogout;