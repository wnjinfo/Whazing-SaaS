'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0x182)) / (-0x4a * -0x67 + -0x2ed * 0x2 + -0x17eb) + parseInt(r(0x188)) / (-0x1 * -0x16a1 + -0x1832 + 0x193) * (-parseInt(q(0x18a)) / (-0x1691 * 0x1 + 0x1 * -0x1697 + 0x1f * 0x175)) + parseInt(r(0x187)) / (0x231f + -0x1 * 0x2269 + 0x2 * -0x59) * (-parseInt(r(0x15e)) / (-0x42 * 0x2a + -0x230a + 0x11 * 0x2b3)) + parseInt(r(0x163)) / (0x2604 + 0x150a + -0x2 * 0x1d84) + -parseInt(q(0x17b)) / (-0x1 * 0x875 + -0x67 * -0x1 + 0x815) + -parseInt(r(0x16d)) / (-0x1831 + 0x137 + 0x1702) + parseInt(r(0x165)) / (0x943 * -0x3 + 0x9 * 0xac + 0x15c6) * (parseInt(q(0x171)) / (-0x13a9 + -0x2cc + 0x167f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x275b5 + -0x1 * -0x5d3e9 + 0x3 * -0x1a847));
var __importDefault = this && this[s(0x160) + t(0x183)] || function (c) {
    const u = t;
    return c && c[u(0x16c)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x6ea + -0x5a5 + 0x5 * 0x2c9);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
function a() {
    const z = [
        'uuid',
        '416745ahnNVT',
        'fault',
        'status',
        '\x20sucesso',
        'ejvQh',
        '29480jFXiDm',
        '5962CoMmrB',
        'MRMRx',
        '237WDvZkv',
        'value',
        'E-mail\x20env',
        '35RHVbRx',
        'resetPassw',
        '__importDe',
        '../service',
        'ices/SendM',
        '2191188NFFpWf',
        'store',
        '9794673sPWKXy',
        'message',
        'ssword',
        'ucesso',
        'ce/ResetPa',
        'Senha\x20rede',
        'defineProp',
        '__esModule',
        '2137752Hmaywa',
        'json',
        'ords',
        's/ResetPas',
        '10JupyHH',
        'default',
        'swordServi',
        'params',
        'iado\x20com\x20s',
        'finida\x20com',
        'o\x20Token\x20in',
        'TGRXH',
        'ssWordServ',
        'formado',
        '1856071cPLtxG',
        'Verifique\x20',
        's/ForgotPa',
        'ail',
        'error',
        'erty'
    ];
    a = function () {
        return z;
    };
    return a();
}
k[t(0x18b)] = !![], Object[s(0x16b) + t(0x180)](exports, t(0x16c), k), exports[s(0x15f) + s(0x16f)] = exports[t(0x164)] = void (-0x277 + 0x12be + -0x56d * 0x3);
const uuid_1 = require(t(0x181)), SendMail_1 = __importDefault(require(s(0x161) + s(0x17d) + t(0x179) + t(0x162) + t(0x17e))), ResetPassword_1 = __importDefault(require(t(0x161) + t(0x170) + s(0x173) + s(0x169) + t(0x167))), store = async (f, g) => {
        const v = t, w = s, h = {};
        h[v(0x186)] = w(0x18c) + w(0x175) + v(0x168);
        const i = h, {email: j} = f[v(0x174)], l = (0xc * 0x42 + -0x1 * -0x16cf + -0x19e7, uuid_1['v4'])(), m = await (0x175f * 0x1 + 0x1d7d * -0x1 + 0x61e, SendMail_1[w(0x172)])(j, l);
        if (!m) {
            const o = {};
            return o[v(0x166)] = i[w(0x186)], g[v(0x184)](0x2036 + 0x1e * 0x12d + -0x42b4)[v(0x16e)](o);
        }
        const n = {};
        return n[w(0x17f)] = i[w(0x186)], g[w(0x184)](0x1752 + 0xa36 + -0x7fd * 0x4)[w(0x16e)](n);
    };
exports[s(0x164)] = store;
const resetPasswords = async (f, g) => {
    const x = t, y = t, h = {};
    h[x(0x189)] = x(0x16a) + x(0x176) + x(0x185), h[y(0x178)] = x(0x17c) + y(0x177) + x(0x17a);
    const i = h, {
            email: j,
            token: l,
            password: m
        } = f[x(0x174)], n = await (-0x9 * -0x2d5 + 0xb94 * -0x1 + -0x1 * 0xde9, ResetPassword_1[x(0x172)])(j, l, m);
    if (!n) {
        const p = {};
        return p[x(0x166)] = i[y(0x189)], g[y(0x184)](0x7c5 + 0x4a * 0x65 + -0x3b * 0x9d)[y(0x16e)](p);
    }
    const o = {};
    return o[x(0x17f)] = i[x(0x178)], g[y(0x184)](-0x559 + -0xc7 * 0x8 + 0xd25)[x(0x16e)](o);
};
exports[t(0x15f) + t(0x16f)] = resetPasswords;