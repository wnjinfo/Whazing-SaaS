'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x152)) / (0xfcb + -0x5a * -0x46 + 0x1433 * -0x2) + -parseInt(v(0x147)) / (0x684 + -0x7b4 + 0x132) + parseInt(w(0x143)) / (0x176b + 0xf7 * 0x1 + -0x185f) + -parseInt(w(0x15d)) / (0x1fb6 + 0x17 * 0x199 + -0x4471) + parseInt(v(0x146)) / (0x17c0 * 0x1 + 0x1292 * 0x1 + 0x27d * -0x11) * (-parseInt(w(0x14b)) / (0x7b5 * 0x1 + -0xca7 * -0x1 + -0x1456)) + -parseInt(v(0x148)) / (0x2527 + -0x11e6 + -0x6b * 0x2e) + parseInt(v(0x154)) / (-0xf70 + -0xd02 + 0x5a * 0x51);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x109e0e + -0x26836 + -0x5830e));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xb3e * 0x2 + 0x10c7 + -0xd * -0x89);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const D = [
        'sequelize',
        '19124992bYaxrx',
        'primaryKey',
        'autoIncrem',
        'type',
        'unique',
        'email',
        'Users',
        'DATE',
        'defineProp',
        '3992340tWYqqB',
        'updatedAt',
        'vRfHt',
        'exports',
        'passwordHa',
        'createdAt',
        'dropTable',
        'DataTypes',
        '245196hDhERH',
        'erty',
        'ecJpG',
        '43975DRGMAD',
        '357358oIqWce',
        '2022272WZCLQJ',
        'name',
        'value',
        '510CEhSBW',
        '__esModule',
        'createTabl',
        'ent',
        'allowNull',
        'INTEGER',
        'STRING',
        '310937hkPfod'
    ];
    a = function () {
        return D;
    };
    return a();
}
const q = {};
q[x(0x14a)] = !![], Object[y(0x15c) + y(0x144)](exports, y(0x14c), q);
const sequelize_1 = require(y(0x153));
module[x(0x160)] = {
    'up': k => {
        const z = y, A = y, l = {};
        l[z(0x145)] = z(0x15a);
        const m = l, n = {};
        n[z(0x157)] = sequelize_1[z(0x142)][z(0x150)], n[A(0x156) + z(0x14e)] = !![], n[z(0x155)] = !![], n[z(0x14f)] = ![];
        const o = {};
        o[A(0x157)] = sequelize_1[z(0x142)][A(0x151)], o[A(0x14f)] = ![];
        const p = {};
        p[A(0x157)] = sequelize_1[A(0x142)][A(0x151)], p[A(0x14f)] = ![], p[A(0x158)] = !![];
        const r = {};
        r[A(0x157)] = sequelize_1[A(0x142)][z(0x151)], r[A(0x14f)] = ![];
        const s = {};
        s[z(0x157)] = sequelize_1[z(0x142)][z(0x15b)], s[A(0x14f)] = ![];
        const t = {};
        t[z(0x157)] = sequelize_1[A(0x142)][A(0x15b)], t[A(0x14f)] = ![];
        const u = {};
        return u['id'] = n, u[A(0x149)] = o, u[z(0x159)] = p, u[A(0x161) + 'sh'] = r, u[A(0x140)] = s, u[A(0x15e)] = t, k[z(0x14d) + 'e'](m[z(0x145)], u);
    },
    'down': d => {
        const B = x, C = x, e = {};
        e[B(0x15f)] = C(0x15a);
        const f = e;
        return d[C(0x141)](f[C(0x15f)]);
    }
};