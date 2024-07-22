'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x1cb)) / (-0x1 * 0x2503 + -0x39 * -0x61 + 0xf6b) * (parseInt(w(0x1d2)) / (0xc * 0x1c5 + -0x2436 + 0x224 * 0x7)) + parseInt(w(0x1c9)) / (-0xed8 * -0x2 + 0xa80 + 0x11 * -0x25d) * (parseInt(w(0x1de)) / (-0x13 * -0xa1 + -0x1 * -0xf14 + 0x3 * -0x901)) + parseInt(w(0x1c6)) / (-0x36b * -0xb + 0xe7 * 0x9 + -0x2db3) + parseInt(w(0x1d0)) / (0x26d + 0xd9 * 0x10 + -0xff7 * 0x1) + -parseInt(w(0x1c5)) / (-0x4c * -0xd + -0x509 + 0x134) * (-parseInt(v(0x1d6)) / (0xafe + -0x29 * -0x21 + 0x103f * -0x1)) + -parseInt(w(0x1e2)) / (0x71f * -0x1 + -0x1860 + 0x1f88) + -parseInt(w(0x1dc)) / (0x78 * -0x8 + 0x1562 + -0x1198) * (parseInt(v(0x1ce)) / (-0x19 * 0xb7 + -0x186d + 0x2a57));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x557 * -0x1d8 + 0x1afcc9 * -0x1 + -0x34 * -0xfd19));
const q = {};
q[x(0x1d1)] = !![], Object[x(0x1e4) + y(0x1c1)](exports, y(0x1df), q);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xa5e + -0x1 * 0x1960 + 0x257e);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(y(0x1e0));
function a() {
    const D = [
        'ent',
        'defineProp',
        'DataTypes',
        'erty',
        'Users',
        'STRING',
        'type',
        '1190ddGVov',
        '2227795gAhUPq',
        'primaryKey',
        'INTEGER',
        '18Otxvmu',
        'DATE',
        '1236467eAcXsI',
        'name',
        'rSgNs',
        '979hLxnRY',
        'dropTable',
        '818946yYXNbb',
        'value',
        '2HfuzsF',
        'passwordHa',
        'email',
        'allowNull',
        '50440lHWCFS',
        'updatedAt',
        'EehKb',
        'createdAt',
        'exports',
        'unique',
        '267660Ietuhz',
        'autoIncrem',
        '819176BeoNYB',
        '__esModule',
        'sequelize',
        'createTabl',
        '7034346XdGNRD'
    ];
    a = function () {
        return D;
    };
    return a();
}
module[y(0x1da)] = {
    'up': k => {
        const z = x, A = x, l = {};
        l[z(0x1d8)] = z(0x1c2);
        const m = l, n = {};
        n[z(0x1c4)] = sequelize_1[z(0x1c0)][A(0x1c8)], n[A(0x1dd) + z(0x1e3)] = !![], n[z(0x1c7)] = !![], n[z(0x1d5)] = ![];
        const o = {};
        o[z(0x1c4)] = sequelize_1[z(0x1c0)][z(0x1c3)], o[z(0x1d5)] = ![];
        const p = {};
        p[A(0x1c4)] = sequelize_1[A(0x1c0)][A(0x1c3)], p[z(0x1d5)] = ![], p[A(0x1db)] = !![];
        const r = {};
        r[A(0x1c4)] = sequelize_1[A(0x1c0)][A(0x1c3)], r[A(0x1d5)] = ![];
        const s = {};
        s[A(0x1c4)] = sequelize_1[A(0x1c0)][A(0x1ca)], s[A(0x1d5)] = ![];
        const t = {};
        t[z(0x1c4)] = sequelize_1[z(0x1c0)][z(0x1ca)], t[z(0x1d5)] = ![];
        const u = {};
        return u['id'] = n, u[z(0x1cc)] = o, u[A(0x1d4)] = p, u[A(0x1d3) + 'sh'] = r, u[z(0x1d9)] = s, u[z(0x1d7)] = t, k[z(0x1e1) + 'e'](m[A(0x1d8)], u);
    },
    'down': d => {
        const B = y, C = x, e = {};
        e[B(0x1cd)] = B(0x1c2);
        const f = e;
        return d[C(0x1cf)](f[C(0x1cd)]);
    }
};