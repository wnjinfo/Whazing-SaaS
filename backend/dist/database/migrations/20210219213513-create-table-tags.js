'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0x189)) / (0x1fde + -0x233 * -0x1 + -0x2210) + parseInt(y(0x178)) / (0x8b6 + -0x30b * -0xc + -0x2d38) * (parseInt(x(0x192)) / (0x1 * 0xdeb + 0x1 * -0x5fb + -0x7ed)) + parseInt(x(0x183)) / (-0x1bb3 + -0x630 + -0x3 * -0xb4d) * (parseInt(x(0x17b)) / (0x1941 + 0x1884 + -0x31c0)) + parseInt(x(0x17f)) / (0x1eee + 0x2 * 0x821 + 0x2 * -0x1795) * (-parseInt(x(0x181)) / (0x26ef * -0x1 + 0x8 * 0x17d + 0x2 * 0xd87)) + -parseInt(y(0x194)) / (0xfba + 0x332 + -0x64c * 0x3) * (parseInt(x(0x175)) / (0x18 * 0xcc + -0xf11 + -0x406)) + -parseInt(y(0x16e)) / (0x1e45 + 0x1936 + 0x39 * -0xf9) * (parseInt(y(0x180)) / (-0x4a7 * -0x3 + 0x701 + -0x14eb)) + parseInt(y(0x190)) / (-0x4b0 * 0x3 + -0x1 * 0xced + -0x9 * -0x301) * (parseInt(x(0x187)) / (-0x75 * -0x4f + 0xc7f * 0x2 + -0x4 * 0xf43));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1ad8e5 + -0x1a * 0x2220 + -0x93547));
function a() {
    const F = [
        'defineProp',
        '__esModule',
        '84XxRhEh',
        'RXfol',
        '27etFFlX',
        'primaryKey',
        '32xJVedn',
        'DATE',
        'Iyeke',
        'INTEGER',
        'Users',
        'DataTypes',
        '11001070BcYsze',
        'value',
        'allowNull',
        'erty',
        'STRING',
        'defaultVal',
        'type',
        '1892322CqYXdi',
        'autoIncrem',
        'naACS',
        '32858ZoGNsB',
        'BOOLEAN',
        'SET\x20NULL',
        '5TJHtia',
        'ent',
        'exports',
        'all',
        '5748nzEAiW',
        '11HjysRV',
        '9611ZCSwla',
        'sequelize',
        '267412lWBmFS',
        'ujtfN',
        'createTabl',
        'dropTable',
        '6227936cNrkEH',
        'Tags',
        '617117xEcxUB',
        'ogwxC',
        'Tenants',
        'UJhpW',
        'CASCADE'
    ];
    a = function () {
        return F;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xd * -0x16c + -0x16cf + 0x5c1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const w = {};
w[z(0x16f)] = !![], Object[A(0x18e) + z(0x171)](exports, z(0x18f), w);
const sequelize_1 = require(z(0x182));
module[A(0x17d)] = {
    'up': h => {
        const B = A, C = z, i = {};
        i[B(0x18a)] = B(0x188), i[C(0x191)] = C(0x198), i[C(0x177)] = B(0x18d), i[B(0x196)] = B(0x17a), i[C(0x18c)] = B(0x18b);
        const j = i, k = {};
        k[B(0x174)] = sequelize_1[B(0x199)][B(0x197)], k[C(0x193)] = !![], k[B(0x176) + C(0x17c)] = !![], k[C(0x170)] = ![];
        const l = {};
        l[B(0x174)] = sequelize_1[B(0x199)][C(0x172)], l[B(0x170)] = ![];
        const m = {};
        m[B(0x174)] = sequelize_1[B(0x199)][C(0x179)], m[C(0x173) + 'ue'] = !![], m[B(0x170)] = ![];
        const n = {};
        return n[B(0x174)] = sequelize_1[C(0x199)][B(0x172)], n[C(0x170)] = ![], Promise[C(0x17e)]([h[C(0x185) + 'e'](j[B(0x18a)], {
                'id': k,
                'tag': l,
                'isActive': m,
                'color': n,
                'userId': {
                    'type': sequelize_1[B(0x199)][C(0x197)],
                    'references': {
                        'model': j[C(0x191)],
                        'key': 'id'
                    },
                    'onUpdate': j[B(0x177)],
                    'onDelete': j[B(0x196)]
                },
                'tenantId': {
                    'type': sequelize_1[C(0x199)][B(0x197)],
                    'references': {
                        'model': j[C(0x18c)],
                        'key': 'id'
                    },
                    'onUpdate': j[B(0x177)],
                    'onDelete': j[B(0x177)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'createdAt': {
                    'type': sequelize_1[C(0x199)][C(0x195)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[C(0x199)][C(0x195)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const D = z, E = A, e = {};
        e[D(0x184)] = D(0x188);
        const f = e;
        return Promise[E(0x17e)]([d[E(0x186)](f[D(0x184)])]);
    }
};