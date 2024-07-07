'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x190)) / (0x1 * 0x240d + 0x17 * 0xb7 + 0x9 * -0x5d5) * (parseInt(u(0x189)) / (0x18d * 0x15 + -0x2 * 0xcbb + -0x719 * 0x1)) + -parseInt(t(0x193)) / (0x1adf + -0x1 * 0x24fd + -0x1 * -0xa21) * (-parseInt(t(0x182)) / (-0x86 + 0x1649 + -0x15bf)) + parseInt(u(0x19c)) / (-0x1565 + -0xff7 * -0x2 + -0xa84) * (-parseInt(u(0x19e)) / (-0x129a + 0x1d6 * -0x4 + -0x67e * -0x4)) + -parseInt(t(0x17e)) / (-0x22e9 + 0x1 * -0x15b9 + 0x38a9) * (-parseInt(u(0x18f)) / (0xd87 + 0x4f7 * 0x2 + -0x176d)) + -parseInt(t(0x18e)) / (0x65 * 0x1 + 0x19 * 0x145 + -0x53 * 0x63) * (parseInt(t(0x185)) / (-0x1 * 0xf06 + -0x3c * -0x81 + 0x4 * -0x3cb)) + parseInt(u(0x19d)) / (0x938 + -0x1 * 0xcff + 0x3d2) + -parseInt(u(0x19a)) / (0x126d + -0x1 * -0x19db + 0x254 * -0x13);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xbc3 * 0xf7 + 0x1 * 0x45f0e + 0x1622ab));
const o = {};
o[v(0x18b)] = !![], Object[w(0x199) + v(0x191)](exports, w(0x184), o);
const sequelize_1 = require(v(0x195));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1f01 + -0x179f + -0x5e5);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const B = [
        '240960BPVOkB',
        'updatedAt',
        'xDKxM',
        'DataTypes',
        '697322DakiKS',
        'INTEGER',
        'value',
        'autoIncrem',
        'createdAt',
        '54CCUbdw',
        '624016YSTIlE',
        '1qsmlus',
        'erty',
        'SettingsGe',
        '336282czuGcc',
        'createTabl',
        'sequelize',
        'primaryKey',
        'neral',
        'type',
        'defineProp',
        '15045708Orhyjw',
        'allowNull',
        '5230mRhBVq',
        '8934288oimVsw',
        '3144vReJIz',
        'exports',
        'TEXT',
        'ent',
        'STRING',
        '49XlqmuC',
        'key',
        'NvMLS',
        'DATE',
        '44hUUAxJ',
        'dropTable',
        '__esModule'
    ];
    a = function () {
        return B;
    };
    return a();
}
module[w(0x19f)] = {
    'up': j => {
        const x = v, y = v, k = {};
        k[x(0x180)] = y(0x192) + y(0x197);
        const l = k, m = {};
        m[y(0x198)] = sequelize_1[y(0x188)][x(0x18a)], m[x(0x18c) + y(0x1a1)] = !![], m[y(0x196)] = !![], m[y(0x19b)] = ![];
        const n = {};
        n[x(0x198)] = sequelize_1[x(0x188)][x(0x17d)], n[y(0x196)] = ![], n[x(0x19b)] = ![];
        const p = {};
        p[y(0x198)] = sequelize_1[y(0x188)][x(0x1a0)], p[y(0x19b)] = ![];
        const q = {};
        q[x(0x198)] = sequelize_1[y(0x188)][y(0x181)], q[x(0x19b)] = ![];
        const r = {};
        r[y(0x198)] = sequelize_1[y(0x188)][y(0x181)], r[y(0x19b)] = ![];
        const s = {};
        return s['id'] = m, s[x(0x17f)] = n, s[y(0x18b)] = p, s[x(0x18d)] = q, s[y(0x186)] = r, j[y(0x194) + 'e'](l[x(0x180)], s);
    },
    'down': d => {
        const z = v, A = w, e = {};
        e[z(0x187)] = z(0x192) + z(0x197);
        const f = e;
        return d[z(0x183)](f[z(0x187)]);
    }
};