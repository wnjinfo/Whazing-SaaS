'use strict';
function a() {
    const F = [
        'CASCADE',
        'zmqxM',
        'createTabl',
        'DataTypes',
        'eADIk',
        'INTEGER',
        'IaPiv',
        '39996390wXuYyU',
        'value',
        'dropTable',
        '8102151TDNgcI',
        'STRING',
        '575020hcKPKX',
        'restrict',
        'Tenants',
        '4mGuNAo',
        'allowNull',
        'BOOLEAN',
        '9189xIPQER',
        'DATE',
        '283073ubKrNK',
        'type',
        '8pFUiRE',
        '7108188THHayh',
        'exports',
        'JSON',
        'autoIncrem',
        'ChatFlow',
        'sequelize',
        'erty',
        'defaultVal',
        'defineProp',
        'primaryKey',
        'lOYRc',
        'Users',
        '__esModule',
        '133453jUisCw',
        'GnczL',
        '1164hdAiHj',
        'ent',
        'aWNOR'
    ];
    a = function () {
        return F;
    };
    return a();
}
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x9f)) / (0x77d + -0x152d + 0xdb1) * (parseInt(y(0xb3)) / (-0x209 * 0x1 + -0x125 * -0x16 + -0x1723 * 0x1)) + parseInt(y(0xb6)) / (-0x6 * 0x4e + -0x2557 + -0x127 * -0x22) * (-parseInt(x(0xa1)) / (-0x1 * -0xa7f + -0xb72 + 0xf7)) + -parseInt(x(0xb0)) / (-0x59d + 0x720 + 0x17e * -0x1) + -parseInt(x(0xbb)) / (0x258b * -0x1 + 0xb14 + 0x1a7d) + -parseInt(y(0xb8)) / (-0x222f + -0x463 * -0x7 + -0x381 * -0x1) * (parseInt(x(0xba)) / (-0x1f87 * -0x1 + -0xb1c + 0x1 * -0x1463)) + -parseInt(y(0xae)) / (-0x1fb + -0x7dc * 0x2 + -0x8de * -0x2) + parseInt(y(0xab)) / (0x21cd + -0x93 * 0x8 + -0x39 * 0x83);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6 * 0x519a + -0x102b17 + 0x176d37));
const w = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1cd * 0x13 + 0x19 * 0x3 + -0x1 * 0x21ef);
        let h = e[f];
        return h;
    }, b(c, d);
}
w[z(0xac)] = !![], Object[A(0x9a) + z(0x98)](exports, z(0x9e), w);
const sequelize_1 = require(z(0x97));
module[A(0x93)] = {
    'up': i => {
        const B = z, C = A, j = {};
        j[B(0xa0)] = C(0x96), j[C(0x9c)] = B(0x9d), j[C(0xaa)] = B(0xa4), j[B(0xa8)] = B(0xb2), j[C(0xa3)] = B(0xb1);
        const k = j, l = {};
        l[B(0xb9)] = sequelize_1[B(0xa7)][B(0xa9)], l[B(0x95) + C(0xa2)] = !![], l[B(0x9b)] = !![], l[C(0xb4)] = ![];
        const m = {};
        m[B(0xb9)] = sequelize_1[B(0xa7)][C(0xaf)], m[B(0xb4)] = ![], m[C(0x99) + 'ue'] = '';
        const n = {};
        n[B(0xb9)] = sequelize_1[C(0xa7)][B(0x94)], n[C(0xb4)] = ![], n[B(0x99) + 'ue'] = {};
        const o = {};
        o[B(0xb9)] = sequelize_1[B(0xa7)][C(0xb5)], o[C(0xb4)] = ![], o[B(0x99) + 'ue'] = !![];
        const p = {};
        return p[B(0xb9)] = sequelize_1[C(0xa7)][B(0xaf)], p[C(0xb4)] = !![], p[B(0x99) + 'ue'] = null, i[C(0xa6) + 'e'](k[B(0xa0)], {
            'id': l,
            'name': m,
            'flow': n,
            'isActive': o,
            'celularTeste': p,
            'userId': {
                'type': sequelize_1[B(0xa7)][C(0xa9)],
                'references': {
                    'model': k[C(0x9c)],
                    'key': 'id'
                },
                'onUpdate': k[C(0xaa)],
                'onDelete': k[B(0xaa)],
                'allowNull': !![],
                'defaultValue': null
            },
            'tenantId': {
                'type': sequelize_1[C(0xa7)][C(0xa9)],
                'references': {
                    'model': k[B(0xa8)],
                    'key': 'id'
                },
                'onUpdate': k[B(0xaa)],
                'onDelete': k[C(0xa3)],
                'allowNull': ![],
                'defaultValue': 0x1
            },
            'createdAt': {
                'type': sequelize_1[B(0xa7)][B(0xb7)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[C(0xa7)][B(0xb7)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const D = z, E = A, e = {};
        e[D(0xa5)] = E(0x96);
        const f = e;
        return d[D(0xad)](f[D(0xa5)]);
    }
};