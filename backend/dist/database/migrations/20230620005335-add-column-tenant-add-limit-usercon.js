'use strict';
function a() {
    const u = [
        'sequelize',
        '976406WCzjrQ',
        'ions',
        'ble',
        'Tenants',
        '18mgOpGm',
        'maxConnect',
        'QDCpd',
        'DataTypes',
        '5118968odRAvY',
        '4672584cNLuNO',
        'NOaXX',
        'maxUsers',
        '__esModule',
        '10271920pEohLQ',
        'defineProp',
        'describeTa',
        'erty',
        'XKzOJ',
        'INTEGER',
        '280ruiRXF',
        '1403871VJRLRe',
        'exports',
        'NhUMi',
        '3464040eLMvxX',
        'value',
        'removeColu',
        '2zprqUz',
        'RFXvP',
        'addColumn',
        'allowNull',
        'type',
        'dwjov',
        '45852kAnmks'
    ];
    a = function () {
        return u;
    };
    return a();
}
const o = b, p = b;
(function (d, e) {
    const m = b, n = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(m(0x1d1)) / (-0x2 * -0x48b + 0xe2 * -0x8 + -0x205 * 0x1) * (parseInt(m(0x1c9)) / (-0x182 + -0x2332 + 0x24b6)) + -parseInt(n(0x1c6)) / (-0xfc3 * 0x2 + 0xa9 * -0x28 + -0x1 * -0x39f1) + -parseInt(m(0x1cf)) / (-0x1e6f + 0x8 * 0x212 + 0xde3) * (-parseInt(m(0x1e4)) / (0x1 * -0xb42 + -0x596 + 0x1 * 0x10dd)) + parseInt(m(0x1d5)) / (-0x127d + 0x4eb * -0x5 + 0x3 * 0xe5e) * (parseInt(m(0x1e5)) / (-0x2214 + -0xee6 + 0x3101)) + -parseInt(m(0x1d9)) / (0x1 * 0x24b0 + 0x98a + -0x6 * 0x7b3) + -parseInt(m(0x1da)) / (0x1d3e + 0x1 * -0x26df + 0x9aa) + parseInt(n(0x1de)) / (0x7a * 0x1d + -0x11 * -0x166 + 0x2 * -0x12c7);
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, 0x4 * 0x6e48a + 0x9c25c * 0x1 + -0x533e * 0x47));
const c = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xa * 0x8b + 0x20a4 + -0x1971);
        let h = e[f];
        return h;
    }, b(c, d);
}
c[o(0x1c7)] = !![], Object[o(0x1df) + o(0x1e1)](exports, o(0x1dd), c);
const sequelize_1 = require(p(0x1d0));
module[o(0x1e6)] = {
    'up': async g => {
        const q = p, r = o, h = {};
        h[q(0x1ca)] = r(0x1d4), h[r(0x1db)] = r(0x1dc), h[r(0x1d7)] = r(0x1d6) + q(0x1d2);
        const i = h, j = await g[q(0x1e0) + q(0x1d3)](i[r(0x1ca)]);
        if (!j || !j[i[r(0x1db)]]) {
            const k = {};
            k[r(0x1cd)] = sequelize_1[q(0x1d8)][q(0x1e3)], k[q(0x1cc)] = !![], await g[q(0x1cb)](i[r(0x1ca)], i[q(0x1db)], k);
        }
        if (!j || !j[i[r(0x1d7)]]) {
            const l = {};
            l[r(0x1cd)] = sequelize_1[r(0x1d8)][r(0x1e3)], l[q(0x1cc)] = !![], await g[r(0x1cb)](i[r(0x1ca)], i[r(0x1d7)], l);
        }
    },
    'down': async e => {
        const s = o, t = p, f = {};
        f[s(0x1c5)] = t(0x1d4), f[s(0x1e2)] = s(0x1dc), f[s(0x1ce)] = s(0x1d6) + s(0x1d2);
        const g = f;
        await e[t(0x1c8) + 'mn'](g[t(0x1c5)], g[t(0x1e2)]), await e[s(0x1c8) + 'mn'](g[s(0x1c5)], g[s(0x1ce)]);
    }
};