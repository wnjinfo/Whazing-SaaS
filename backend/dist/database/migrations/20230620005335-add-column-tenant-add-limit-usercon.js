'use strict';
const o = b, p = b;
(function (d, e) {
    const m = b, n = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(m(0x140)) / (-0x2 * -0x679 + 0x1 * -0x1aae + 0xdbd) * (-parseInt(m(0x142)) / (-0xeea + -0x476 * -0x7 + -0x1 * 0x104e)) + parseInt(n(0x129)) / (-0x39 * -0x1b + 0x4d8 + -0x15b * 0x8) + parseInt(n(0x130)) / (0x212e + 0x4d * 0x2c + 0x2e66 * -0x1) * (parseInt(m(0x136)) / (0x1 * -0x1591 + -0x146 * 0x1b + 0x37f8)) + -parseInt(m(0x13e)) / (-0xe85 + 0x269b * 0x1 + -0x1810) * (-parseInt(n(0x12e)) / (0x18 * 0x10 + 0x1 * 0x892 + -0xa0b)) + -parseInt(m(0x13b)) / (-0x1 * -0x7eb + 0x10 * -0x17e + 0xffd * 0x1) * (parseInt(n(0x139)) / (0x1681 * -0x1 + 0x26c3 + 0x1039 * -0x1)) + parseInt(m(0x13f)) / (0x37 * -0x17 + 0xddc + -0x8e1) * (-parseInt(m(0x13c)) / (-0xb3 * -0x26 + -0x1 * 0x230b + 0x884)) + -parseInt(m(0x143)) / (0x25dd + -0xdf7 + 0xbed * -0x2) * (parseInt(n(0x146)) / (-0x2013 + -0xee + 0x1 * 0x210e));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0xab8f3 * -0x2 + 0x56a32 + -0xefdaf));
const c = {};
function a() {
    const u = [
        'type',
        'AlZtR',
        '9RJoopt',
        'maxConnect',
        '2196008geLaLN',
        '12925chwxHQ',
        'exports',
        '606fkZbrw',
        '1050AUJcvq',
        '548Xyfyoc',
        'VdsXK',
        '1632HbcDvu',
        '12nDktcA',
        'allowNull',
        'describeTa',
        '14745718cswHTA',
        'ble',
        'olKUj',
        'INTEGER',
        'value',
        'Tenants',
        'maxUsers',
        'removeColu',
        '2190870DWUuen',
        'ions',
        'DataTypes',
        'sequelize',
        'amAUz',
        '93716VlTkOK',
        'erty',
        '1276DQHYxo',
        'DUSSi',
        'addColumn',
        'vIhtP',
        'defineProp',
        '__esModule',
        '10575jUtAIY'
    ];
    a = function () {
        return u;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1047 + 0x1 * 0xd85 + 0x3e7);
        let h = e[f];
        return h;
    }, b(c, d);
}
c[o(0x125)] = !![], Object[o(0x134) + o(0x12f)](exports, p(0x135), c);
const sequelize_1 = require(p(0x12c));
module[p(0x13d)] = {
    'up': async g => {
        const q = o, r = o, h = {};
        h[q(0x133)] = r(0x126), h[r(0x148)] = r(0x127), h[q(0x138)] = q(0x13a) + q(0x12a);
        const i = h, j = await g[q(0x145) + q(0x147)](i[r(0x133)]);
        if (!j || !j[i[q(0x148)]]) {
            const k = {};
            k[q(0x137)] = sequelize_1[q(0x12b)][r(0x149)], k[r(0x144)] = !![], await g[q(0x132)](i[q(0x133)], i[r(0x148)], k);
        }
        if (!j || !j[i[r(0x138)]]) {
            const l = {};
            l[r(0x137)] = sequelize_1[r(0x12b)][r(0x149)], l[r(0x144)] = !![], await g[r(0x132)](i[r(0x133)], i[q(0x138)], l);
        }
    },
    'down': async e => {
        const s = o, t = p, f = {};
        f[s(0x141)] = s(0x126), f[s(0x12d)] = s(0x127), f[s(0x131)] = t(0x13a) + t(0x12a);
        const g = f;
        await e[t(0x128) + 'mn'](g[t(0x141)], g[t(0x12d)]), await e[s(0x128) + 'mn'](g[s(0x141)], g[t(0x131)]);
    }
};