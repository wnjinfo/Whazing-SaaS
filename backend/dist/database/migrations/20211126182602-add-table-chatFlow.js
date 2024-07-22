'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0x1bb)) / (0x1 * 0x14b6 + -0x49 + -0xa36 * 0x2) + -parseInt(y(0x1a8)) / (0x13ac + 0xb70 + -0x1f1a) + parseInt(x(0x1af)) / (-0x1e02 + -0x26d0 + 0x44d5) * (parseInt(x(0x1a2)) / (0x6fe + 0x1057 + -0x1751)) + parseInt(x(0x19c)) / (0x1 * -0xa38 + 0x2441 + -0xa * 0x29a) * (-parseInt(x(0x1ab)) / (0x6 * -0x15b + 0x15a0 + -0xd78)) + -parseInt(x(0x1b3)) / (-0x2487 + -0xac1 * 0x2 + 0x4 * 0xe84) + parseInt(y(0x1a1)) / (0xa3 * 0x1f + 0x51b + -0x18d0) + -parseInt(y(0x19e)) / (-0x3d * -0x2b + -0x88b + -0x1ab) * (-parseInt(x(0x1ac)) / (0x39d * 0x5 + -0x205c + 0x3 * 0x4c7));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x14c * -0x423 + -0x4f * 0x2d7d + -0x15 * -0xcf5a));
function a() {
    const F = [
        'CASCADE',
        'type',
        'ChatFlow',
        'iQwPT',
        'STRING',
        '731193sXKWTg',
        'bOMcm',
        'autoIncrem',
        'zwBCW',
        'INTEGER',
        'defineProp',
        'JkQuY',
        'restrict',
        'primaryKey',
        'defaultVal',
        '25nhayrK',
        'value',
        '3537wRbltK',
        'createTabl',
        'KgLRT',
        '4449752RSnEtm',
        '480MUymUR',
        'JSON',
        'allowNull',
        'sequelize',
        'exports',
        'Users',
        '137422KCxJJa',
        'DATE',
        'DataTypes',
        '1044924OedrDu',
        '4250xfjUQJ',
        'dropTable',
        '__esModule',
        '14520eTjyeZ',
        'erty',
        'BOOLEAN',
        'ent',
        '3845807IAIZAx',
        'gzBNS',
        'Tenants'
    ];
    a = function () {
        return F;
    };
    return a();
}
const w = {};
w[z(0x19d)] = !![], Object[z(0x1c0) + A(0x1b0)](exports, A(0x1ae), w);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x17 * -0x1a5 + 0x490 * -0x1 + 0x7ea * -0x4);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(z(0x1a5));
module[A(0x1a6)] = {
    'up': i => {
        const B = z, C = z, j = {};
        j[B(0x1b9)] = C(0x1b8), j[C(0x1bc)] = C(0x1a7), j[C(0x1b4)] = C(0x1b6), j[B(0x1a0)] = C(0x1b5), j[B(0x1be)] = C(0x1c2);
        const k = j, l = {};
        l[B(0x1b7)] = sequelize_1[C(0x1aa)][C(0x1bf)], l[C(0x1bd) + B(0x1b2)] = !![], l[B(0x1c3)] = !![], l[B(0x1a4)] = ![];
        const m = {};
        m[B(0x1b7)] = sequelize_1[B(0x1aa)][B(0x1ba)], m[B(0x1a4)] = ![], m[B(0x19b) + 'ue'] = '';
        const n = {};
        n[C(0x1b7)] = sequelize_1[B(0x1aa)][C(0x1a3)], n[B(0x1a4)] = ![], n[B(0x19b) + 'ue'] = {};
        const o = {};
        o[B(0x1b7)] = sequelize_1[B(0x1aa)][C(0x1b1)], o[B(0x1a4)] = ![], o[B(0x19b) + 'ue'] = !![];
        const p = {};
        return p[C(0x1b7)] = sequelize_1[C(0x1aa)][B(0x1ba)], p[B(0x1a4)] = !![], p[B(0x19b) + 'ue'] = null, i[B(0x19f) + 'e'](k[B(0x1b9)], {
            'id': l,
            'name': m,
            'flow': n,
            'isActive': o,
            'celularTeste': p,
            'userId': {
                'type': sequelize_1[C(0x1aa)][C(0x1bf)],
                'references': {
                    'model': k[C(0x1bc)],
                    'key': 'id'
                },
                'onUpdate': k[C(0x1b4)],
                'onDelete': k[C(0x1b4)],
                'allowNull': !![],
                'defaultValue': null
            },
            'tenantId': {
                'type': sequelize_1[B(0x1aa)][C(0x1bf)],
                'references': {
                    'model': k[B(0x1a0)],
                    'key': 'id'
                },
                'onUpdate': k[C(0x1b4)],
                'onDelete': k[C(0x1be)],
                'allowNull': ![],
                'defaultValue': 0x1
            },
            'createdAt': {
                'type': sequelize_1[B(0x1aa)][C(0x1a9)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[C(0x1aa)][B(0x1a9)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const D = A, E = A, e = {};
        e[D(0x1c1)] = D(0x1b8);
        const f = e;
        return d[E(0x1ad)](f[E(0x1c1)]);
    }
};