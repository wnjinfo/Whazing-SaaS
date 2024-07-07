'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x425 * -0x1 + -0x1fc9 + 0x5 * 0x5a4);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const D = [
        'createdAt',
        'ent',
        'value',
        'defineProp',
        '8XhzHpJ',
        'type',
        'DataTypes',
        'Users',
        'STRING',
        'unique',
        '9243936rZakzT',
        'sequelize',
        '2264800VRmaHN',
        '154DHbcxO',
        'email',
        'LzYHO',
        'name',
        'DATE',
        '16433QnhdyG',
        'createTabl',
        '1473336sTUQkf',
        'passwordHa',
        'erty',
        'dropTable',
        'ftRUV',
        'primaryKey',
        '1131597MwZqIi',
        'updatedAt',
        '4013874qXADvR',
        'autoIncrem',
        'INTEGER',
        '5621553tdQWjv',
        'allowNull',
        '__esModule',
        'exports'
    ];
    a = function () {
        return D;
    };
    return a();
}
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x96)) / (-0xece + 0x1 * -0x25f3 + 0x34c2) * (-parseInt(w(0x91)) / (0x18 * -0xb5 + -0xb99 + -0x181 * -0x13)) + parseInt(v(0x9e)) / (0x23 * -0xe9 + -0x49d * 0x2 + 0x2918) * (parseInt(v(0xab)) / (-0x2d * -0x29 + -0x1cf5 + 0x4 * 0x571)) + parseInt(w(0x90)) / (-0x2044 + -0x29 * 0xcd + 0x411e) + parseInt(v(0xa0)) / (0x1ed + -0x169c * 0x1 + 0x14b5) + -parseInt(w(0xa3)) / (-0x1dba + -0x2ce + 0x208f) + -parseInt(v(0x98)) / (-0x261 + 0x11fb * -0x2 + 0x265f) + parseInt(w(0xb1)) / (-0x2a2 * 0x1 + -0x23ed * 0x1 + -0x34 * -0xbe);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xb84b5 + -0x1092cd * 0x1 + 0x14 * 0x1e6b2));
const q = {};
q[x(0xa9)] = !![], Object[y(0xaa) + y(0x9a)](exports, y(0xa5), q);
const sequelize_1 = require(x(0xb2));
module[x(0xa6)] = {
    'up': k => {
        const z = x, A = y, l = {};
        l[z(0x9c)] = z(0xae);
        const m = l, n = {};
        n[z(0xac)] = sequelize_1[A(0xad)][z(0xa2)], n[z(0xa1) + z(0xa8)] = !![], n[z(0x9d)] = !![], n[A(0xa4)] = ![];
        const o = {};
        o[A(0xac)] = sequelize_1[A(0xad)][z(0xaf)], o[z(0xa4)] = ![];
        const p = {};
        p[z(0xac)] = sequelize_1[z(0xad)][A(0xaf)], p[z(0xa4)] = ![], p[A(0xb0)] = !![];
        const r = {};
        r[A(0xac)] = sequelize_1[A(0xad)][z(0xaf)], r[z(0xa4)] = ![];
        const s = {};
        s[z(0xac)] = sequelize_1[z(0xad)][A(0x95)], s[z(0xa4)] = ![];
        const t = {};
        t[A(0xac)] = sequelize_1[A(0xad)][A(0x95)], t[z(0xa4)] = ![];
        const u = {};
        return u['id'] = n, u[A(0x94)] = o, u[A(0x92)] = p, u[A(0x99) + 'sh'] = r, u[A(0xa7)] = s, u[A(0x9f)] = t, k[z(0x97) + 'e'](m[z(0x9c)], u);
    },
    'down': d => {
        const B = y, C = y, e = {};
        e[B(0x93)] = C(0xae);
        const f = e;
        return d[C(0x9b)](f[B(0x93)]);
    }
};