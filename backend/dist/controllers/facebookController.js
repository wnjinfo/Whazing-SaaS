'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x18d)) / (0xe5d + 0xc29 * 0x2 + -0x26ae) * (parseInt(m(0x189)) / (0x1c13 + 0x2 * 0xc5b + -0x34c7)) + parseInt(m(0x19d)) / (-0x161 * -0x1 + -0xd31 + 0xbd3) * (parseInt(l(0x191)) / (0x2 * -0x55a + 0x4 * -0x552 + 0x2000)) + -parseInt(m(0x1a0)) / (0x14 * 0x1d9 + -0xf3e + -0x15b1) + parseInt(l(0x198)) / (0x1161 + 0x1e92 + 0x1 * -0x2fed) * (-parseInt(l(0x197)) / (0x23f + -0x2081 + 0x1 * 0x1e49)) + parseInt(l(0x194)) / (-0x1 * 0xc41 + 0x3 * -0x57 + -0x83 * -0x1a) * (-parseInt(l(0x1a8)) / (-0x14cd + -0x2509 + 0x5 * 0xb93)) + -parseInt(m(0x1a4)) / (0x12 * 0x222 + -0x1 * 0x2fc + -0x3ee * 0x9) * (-parseInt(l(0x184)) / (0xe9 * 0x10 + 0x156 * -0x13 + 0x135 * 0x9)) + parseInt(l(0x190)) / (-0x7 * -0xb6 + -0xfda + 0xaec) * (-parseInt(l(0x18f)) / (-0x5e * -0x2b + -0x779 * 0x1 + 0x2 * -0x422));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1c * -0x202 + -0x75cca + 0xc4171));
var __importDefault = this && this[n(0x188) + n(0x1a3)] || function (c) {
    const p = n;
    return c && c[p(0x19c)] ? c : { 'default': c };
};
function a() {
    const u = [
        'etTokenAnd',
        '73736bUTtzS',
        '300iMEdii',
        '1496536bqPdrF',
        'store',
        'userToken',
        '216BBgwPq',
        's/Facebook',
        'Services/G',
        '35AqbgqA',
        '70056SPxVSx',
        'json',
        'erty',
        'defineProp',
        '__esModule',
        '3TafoUw',
        'body',
        'gout',
        '2190150aPVqai',
        '../service',
        'value',
        'fault',
        '290rRaFyn',
        'user',
        'LinkedPage',
        'accountId',
        '163917NoqCaw',
        'facebookLo',
        'whatsapp',
        '175241tAtVjB',
        'etLogoutLi',
        'status',
        'default',
        '__importDe',
        '10pdykbE',
        'tenantId',
        'Services/S',
        'nkedPage',
        '120023UstJsF'
    ];
    a = function () {
        return u;
    };
    return a();
}
const k = {};
k[n(0x1a2)] = !![], Object[n(0x19b) + o(0x19a)](exports, o(0x19c), k), exports[o(0x182) + n(0x19f)] = exports[n(0x192)] = void (0x1 * -0xaa9 + -0x217d + 0x2 * 0x1613);
const GetTokenAndLinkedPage_1 = __importDefault(require(n(0x1a1) + n(0x195) + o(0x196) + o(0x18e) + o(0x1a6))), SetLogoutLinkedPage_1 = __importDefault(require(n(0x1a1) + n(0x195) + n(0x18b) + n(0x185) + n(0x18c))), store = async (d, e) => {
        const q = o, r = o, {
                whatsapp: f,
                accountId: g,
                userToken: h
            } = d[q(0x19e)], i = {};
        return i[r(0x183)] = f, i[r(0x1a7)] = g, i[q(0x193)] = h, i[q(0x18a)] = d[r(0x1a5)][r(0x18a)], await (-0x1 * 0x1ad1 + -0x1678 + 0x3149, GetTokenAndLinkedPage_1[r(0x187)])(i), e[q(0x186)](0x15 * -0x1ab + -0x2152 + 0x4521)[r(0x199)]();
    };
exports[n(0x192)] = store;
const facebookLogout = async (d, e) => {
    const s = o, t = n, f = d[s(0x19e)], g = {};
    return g[s(0x183)] = f, g[s(0x18a)] = d[t(0x1a5)][t(0x18a)], await (0x26ce + 0xbdf + 0x32ad * -0x1, SetLogoutLinkedPage_1[t(0x187)])(g), e[s(0x186)](-0x1 * 0x71d + 0x4 * 0xd + 0x7b1)[s(0x199)]();
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x6 * 0x293 + 0x3 * 0x6b1 + -0x31f);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[n(0x182) + o(0x19f)] = facebookLogout;