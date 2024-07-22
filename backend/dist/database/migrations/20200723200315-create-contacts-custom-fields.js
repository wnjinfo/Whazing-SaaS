'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x184)) / (-0x122c + -0x2 * -0x946 + 0x1 * -0x5f) * (-parseInt(s(0x186)) / (-0x2030 + -0x184f + 0x3881)) + parseInt(r(0x17e)) / (-0x1d64 + -0x70a + 0x2471 * 0x1) + parseInt(r(0x16a)) / (0xe8e * -0x2 + 0x3d * -0xf + -0x1 * -0x20b3) + -parseInt(s(0x17f)) / (0x1e16 + 0x593 * -0x2 + 0xa7 * -0x1d) + -parseInt(r(0x169)) / (-0x9b1 + 0x10c5 + -0x6 * 0x12d) + -parseInt(r(0x16d)) / (-0x1c95 + -0x118e + -0x26e * -0x13) * (parseInt(s(0x180)) / (0x20b * 0xf + -0x25 * 0x2 + -0x1e53)) + parseInt(r(0x16c)) / (0x704 + -0x1d4d * 0x1 + 0x1652);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5c * -0x1695 + -0x36a84 + 0x11 * 0xed83));
const q = {};
q[t(0x183)] = !![], Object[u(0x17b) + t(0x171)](exports, t(0x172), q);
const sequelize_1 = require(u(0x168));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xdf8 + -0x95 * -0x20 + -0xd * 0x40);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[t(0x177)] = {
    'up': g => {
        const v = t, w = u, h = {};
        h[v(0x16f)] = v(0x17c) + v(0x16e), h[v(0x185)] = v(0x17d), h[v(0x182)] = v(0x179);
        const i = h, j = {};
        j[v(0x173)] = sequelize_1[w(0x16b)][w(0x170)], j[v(0x175) + v(0x181)] = !![], j[v(0x187)] = !![], j[v(0x174)] = ![];
        const k = {};
        k[w(0x173)] = sequelize_1[v(0x16b)][w(0x189)], k[w(0x174)] = ![];
        const l = {};
        return l[v(0x173)] = sequelize_1[v(0x16b)][v(0x189)], l[v(0x174)] = ![], g[w(0x178) + 'e'](i[v(0x16f)], {
            'id': j,
            'name': k,
            'value': l,
            'contactId': {
                'type': sequelize_1[v(0x16b)][v(0x170)],
                'references': {
                    'model': i[v(0x185)],
                    'key': 'id'
                },
                'onUpdate': i[v(0x182)],
                'onDelete': i[w(0x182)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[v(0x16b)][w(0x17a)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[w(0x16b)][w(0x17a)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = t, y = u, e = {};
        e[x(0x188)] = y(0x17c) + y(0x16e);
        const f = e;
        return d[x(0x176)](f[x(0x188)]);
    }
};
function a() {
    const z = [
        '206683CyUWOF',
        'brKVo',
        '2BkhJoh',
        'primaryKey',
        'QtWSZ',
        'STRING',
        'sequelize',
        '1527696BsKVwm',
        '152192sXrPWq',
        'DataTypes',
        '8287785eBOuVc',
        '2368982fAEKaW',
        'tomFields',
        'dIOos',
        'INTEGER',
        'erty',
        '__esModule',
        'type',
        'allowNull',
        'autoIncrem',
        'dropTable',
        'exports',
        'createTabl',
        'CASCADE',
        'DATE',
        'defineProp',
        'ContactCus',
        'Contacts',
        '545835BPtDBM',
        '316050kuReXX',
        '8vHIgRo',
        'ent',
        'DoABw',
        'value'
    ];
    a = function () {
        return z;
    };
    return a();
}