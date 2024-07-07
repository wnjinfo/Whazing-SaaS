'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0x84)) / (0x4 * 0x10 + -0x1af0 + 0x1ab1 * 0x1) + parseInt(v(0x7d)) / (-0x1a * -0x1a + -0x401 + 0x15f) * (parseInt(w(0x90)) / (-0x1 * 0xa73 + -0x2 * -0xcfe + -0xf86)) + -parseInt(v(0xa0)) / (0x1a9b + 0xf2 * 0x1 + -0x1b89) + -parseInt(w(0x89)) / (0x18a * 0x13 + 0x21ca + -0x3f03) * (parseInt(v(0x85)) / (0x7 * -0x3bf + -0x11 * -0x216 + -0x1 * 0x937)) + parseInt(v(0xa1)) / (0x204f + 0x184d * -0x1 + 0xe3 * -0x9) + -parseInt(w(0x86)) / (0x4d4 + 0xe33 + 0x655 * -0x3) * (-parseInt(v(0x7f)) / (0x35e + 0x8d7 + 0x4c * -0x29)) + -parseInt(w(0x92)) / (0x2168 + 0x117a + -0x32d8);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3 * 0x23ba0 + 0xe2 * 0xbb6 + -0x7079f));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x7d * -0x35 + -0x2 * 0x110e + 0x1f * 0x48);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const D = [
        'Dvupz',
        'YvUkH',
        'createTabl',
        'exports',
        '1792532DfWeII',
        '5844769GsEqHA',
        'GnZpQ',
        '2NdYfma',
        'Users',
        '27dLKgEC',
        'AutoReply',
        'dropTable',
        'ent',
        'CASCADE',
        '819606FRExHA',
        '36ENuxiP',
        '3464368QUwNtg',
        'autoIncrem',
        'SET\x20NULL',
        '93930GejHxo',
        'erty',
        'sequelize',
        'INTEGER',
        'value',
        'primaryKey',
        'RqflF',
        '3224919xvrEMS',
        'STRING',
        '11727700DNEeMX',
        'UpMTz',
        'allowNull',
        'rSEmo',
        'DATE',
        'defineProp',
        'DataTypes',
        '__esModule',
        'type',
        'StepsReply'
    ];
    a = function () {
        return D;
    };
    return a();
}
const u = {};
u[x(0x8d)] = !![], Object[y(0x97) + y(0x8a)](exports, y(0x99), u);
const sequelize_1 = require(x(0x8b));
module[y(0x9f)] = {
    'up': g => {
        const z = x, A = x, h = {};
        h[z(0xa2)] = A(0x9b), h[z(0x95)] = z(0x80), h[A(0x93)] = A(0x83), h[A(0x9c)] = A(0x7e), h[A(0x8f)] = z(0x88);
        const i = h, j = {};
        j[A(0x9a)] = sequelize_1[z(0x98)][A(0x8c)], j[A(0x87) + z(0x82)] = !![], j[A(0x8e)] = !![], j[z(0x94)] = ![];
        const k = {};
        k[z(0x9a)] = sequelize_1[A(0x98)][z(0x91)], k[A(0x94)] = ![];
        const l = {};
        return l[A(0x9a)] = sequelize_1[z(0x98)][z(0x8c)], l[z(0x94)] = ![], g[A(0x9e) + 'e'](i[A(0xa2)], {
            'id': j,
            'reply': k,
            'stepOrder': l,
            'idAutoReply': {
                'type': sequelize_1[A(0x98)][z(0x8c)],
                'references': {
                    'model': i[z(0x95)],
                    'key': 'id'
                },
                'onUpdate': i[A(0x93)],
                'onDelete': i[A(0x93)]
            },
            'action': {
                'type': sequelize_1[A(0x98)][A(0x8c)],
                'allowNull': ![],
                'defaultValue': 0x0
            },
            'userId': {
                'type': sequelize_1[z(0x98)][z(0x8c)],
                'references': {
                    'model': i[A(0x9c)],
                    'key': 'id'
                },
                'onUpdate': i[A(0x93)],
                'onDelete': i[z(0x8f)]
            },
            'createdAt': {
                'type': sequelize_1[A(0x98)][z(0x96)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[z(0x98)][A(0x96)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const B = x, C = x, e = {};
        e[B(0x9d)] = C(0x9b);
        const f = e;
        return d[C(0x81)](f[B(0x9d)]);
    }
};