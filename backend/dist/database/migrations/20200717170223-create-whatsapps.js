'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3 * 0xcf9 + 0x161b + 0x5 * -0xbfb);
        let h = e[f];
        return h;
    }, b(c, d);
}
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0x138)) / (-0x2b + 0x2 * -0x723 + 0x56 * 0x2b) * (parseInt(A(0x12c)) / (-0x871 * 0x2 + -0x4e1 * 0x2 + 0x3 * 0x8e2)) + parseInt(A(0x13e)) / (0x22a6 * 0x1 + 0x6 * -0x53 + -0x20b1) * (-parseInt(z(0x129)) / (0x7ba + 0x259a * -0x1 + -0x4 * -0x779)) + parseInt(A(0x13a)) / (0x22c6 + -0xb * -0x105 + -0x2df8) * (-parseInt(A(0x120)) / (-0x4b * -0x10 + 0x2695 + -0x2b3f)) + parseInt(A(0x144)) / (-0x140c + -0x2684 + 0x3a97) * (parseInt(A(0x135)) / (-0x1 * 0x221d + -0x19d5 + 0x3bfa)) + -parseInt(A(0x125)) / (-0x588 + 0x228e + -0x1cfd) + parseInt(z(0x130)) / (0x1255 + 0x1b7e + -0x2dc9 * 0x1) * (parseInt(z(0x128)) / (-0x19c7 * -0x1 + 0x1 * 0x15f3 + -0x2faf * 0x1)) + -parseInt(A(0x123)) / (0x26b5 * 0x1 + -0x15 * 0xea + -0x1377) * (-parseInt(z(0x139)) / (0x7db * 0x3 + 0x11e * 0x1c + -0x36cc * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x47b63 * 0x2 + -0x167 * -0x44d + -0xb6c7 * -0xe));
function a() {
    const H = [
        'sequelize',
        '10gVjVpH',
        'battery',
        'plugged',
        'status',
        'createdAt',
        '1483176XRzLQh',
        'createTabl',
        'allowNull',
        '4tmkTDd',
        '9952345KMVmdB',
        '5OOjJrU',
        'exports',
        'DataTypes',
        'session',
        '954795ETjCBD',
        'TEXT',
        'BSKCT',
        'value',
        'erty',
        'INTEGER',
        '14GcpaBa',
        'type',
        'STRING',
        'BOOLEAN',
        'defineProp',
        'qrcode',
        '1427898ThNSnF',
        'updatedAt',
        'primaryKey',
        '24YcrThv',
        'Whatsapps',
        '1898721wlULzi',
        'DATE',
        '__esModule',
        '3075083dNVHTB',
        '8DzdGIg',
        'ent',
        'dropTable',
        '316562TkdyCp',
        'autoIncrem',
        'hwkNn'
    ];
    a = function () {
        return H;
    };
    return a();
}
const u = {};
u[B(0x141)] = !![], Object[B(0x148) + B(0x142)](exports, C(0x127), u);
const sequelize_1 = require(C(0x12f));
module[B(0x13b)] = {
    'up': m => {
        const D = B, E = C, n = {};
        n[D(0x140)] = D(0x124);
        const o = n, p = {};
        p[E(0x145)] = sequelize_1[D(0x13c)][D(0x143)], p[D(0x12d) + D(0x12a)] = !![], p[E(0x122)] = !![], p[E(0x137)] = ![];
        const q = {};
        q[D(0x145)] = sequelize_1[D(0x13c)][E(0x13f)];
        const r = {};
        r[D(0x145)] = sequelize_1[E(0x13c)][D(0x13f)];
        const s = {};
        s[E(0x145)] = sequelize_1[E(0x13c)][D(0x146)];
        const t = {};
        t[E(0x145)] = sequelize_1[E(0x13c)][D(0x146)];
        const v = {};
        v[E(0x145)] = sequelize_1[D(0x13c)][E(0x147)];
        const w = {};
        w[E(0x145)] = sequelize_1[D(0x13c)][E(0x126)], w[E(0x137)] = ![];
        const x = {};
        x[D(0x145)] = sequelize_1[E(0x13c)][E(0x126)], x[E(0x137)] = ![];
        const y = {};
        return y['id'] = p, y[D(0x13d)] = q, y[E(0x11f)] = r, y[E(0x133)] = s, y[E(0x131)] = t, y[D(0x132)] = v, y[D(0x134)] = w, y[E(0x121)] = x, m[D(0x136) + 'e'](o[D(0x140)], y);
    },
    'down': d => {
        const F = B, G = B, e = {};
        e[F(0x12e)] = F(0x124);
        const f = e;
        return d[G(0x12b)](f[G(0x12e)]);
    }
};