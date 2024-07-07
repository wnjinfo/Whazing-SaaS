'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0x1b2)) / (0x8ac + -0x1511 + 0xc66) * (parseInt(y(0x1b3)) / (-0x6e0 + -0x1 * -0x1dc3 + -0x16e1 * 0x1)) + parseInt(y(0x1aa)) / (0x22f4 + -0x1bb6 + -0x3 * 0x269) + parseInt(x(0x1a1)) / (-0x16 * -0x123 + -0x1b11 + 0xb1 * 0x3) * (parseInt(y(0x1c0)) / (0x1fa8 + 0x1357 + -0x32fa)) + parseInt(x(0x1b4)) / (-0x11fa + -0x20f2 + 0x1979 * 0x2) + -parseInt(x(0x1be)) / (-0x194 + -0x1df2 * -0x1 + -0x1c57) * (parseInt(x(0x1ba)) / (-0x1 * -0x12e5 + 0x1862 + -0x2b3f)) + parseInt(x(0x1bd)) / (0x92f + -0x3 * -0xb49 + -0x2b01) + -parseInt(y(0x19a)) / (0x416 * -0x2 + 0x430 + 0x406);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2 * 0x83590 + -0x82834 * -0x2 + 0xa9d36));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x12f9 * 0x2 + 0xcbb * -0x1 + 0x3447);
        let h = e[f];
        return h;
    }, b(c, d);
}
const w = {};
w[z(0x1ae)] = !![], Object[A(0x1b7) + z(0x1b1)](exports, A(0x1a8), w);
const sequelize_1 = require(A(0x1a2));
module[A(0x1a0)] = {
    'up': h => {
        const B = A, C = z, i = {};
        i[B(0x19e)] = B(0x1b5), i[C(0x1ac)] = C(0x1a9), i[B(0x1b6)] = B(0x19f), i[B(0x1b0)] = B(0x1a3), i[B(0x1a7)] = B(0x1a5);
        const j = i, k = {};
        k[C(0x1bf)] = sequelize_1[B(0x1af)][C(0x1a6)], k[B(0x1bc)] = !![], k[C(0x1bb) + B(0x1c2)] = !![], k[C(0x19d)] = ![];
        const l = {};
        l[C(0x1bf)] = sequelize_1[C(0x1af)][B(0x1ab)], l[B(0x19d)] = ![];
        const m = {};
        m[B(0x1bf)] = sequelize_1[C(0x1af)][B(0x19b)], m[C(0x19c) + 'ue'] = !![], m[C(0x19d)] = ![];
        const n = {};
        return n[B(0x1bf)] = sequelize_1[B(0x1af)][B(0x1ab)], n[C(0x19d)] = ![], Promise[C(0x1b9)]([h[C(0x1a4) + 'e'](j[C(0x19e)], {
                'id': k,
                'tag': l,
                'isActive': m,
                'color': n,
                'userId': {
                    'type': sequelize_1[C(0x1af)][B(0x1a6)],
                    'references': {
                        'model': j[B(0x1ac)],
                        'key': 'id'
                    },
                    'onUpdate': j[B(0x1b6)],
                    'onDelete': j[B(0x1b0)]
                },
                'tenantId': {
                    'type': sequelize_1[C(0x1af)][C(0x1a6)],
                    'references': {
                        'model': j[C(0x1a7)],
                        'key': 'id'
                    },
                    'onUpdate': j[C(0x1b6)],
                    'onDelete': j[C(0x1b6)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'createdAt': {
                    'type': sequelize_1[C(0x1af)][C(0x1b8)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[C(0x1af)][C(0x1b8)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const D = z, E = z, e = {};
        e[D(0x1c1)] = D(0x1b5);
        const f = e;
        return Promise[D(0x1b9)]([d[E(0x1ad)](f[D(0x1c1)])]);
    }
};
function a() {
    const F = [
        'allowNull',
        'GNuHF',
        'CASCADE',
        'exports',
        '4quXPSD',
        'sequelize',
        'SET\x20NULL',
        'createTabl',
        'Tenants',
        'INTEGER',
        'zcvkS',
        '__esModule',
        'Users',
        '1979916qHpHLT',
        'STRING',
        'eOWIW',
        'dropTable',
        'value',
        'DataTypes',
        'uxqAC',
        'erty',
        '3VRcrEh',
        '901518Ryihgl',
        '8168796HSaKDf',
        'Tags',
        'eDdZd',
        'defineProp',
        'DATE',
        'all',
        '72fCneAh',
        'autoIncrem',
        'primaryKey',
        '4158504cZqvYV',
        '856758jCpGRA',
        'type',
        '3682320vtNJBy',
        'qcReF',
        'ent',
        '27819230noKHKC',
        'BOOLEAN',
        'defaultVal'
    ];
    a = function () {
        return F;
    };
    return a();
}