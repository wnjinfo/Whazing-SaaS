'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0x1d5)) / (-0x2 * 0x2e7 + -0x116e + 0x9 * 0x295) * (parseInt(x(0x1bd)) / (0x7de + -0x394 + 0x224 * -0x2)) + parseInt(y(0x1b3)) / (-0x181 * 0xb + -0x3 * -0xa5c + -0xe86) + parseInt(y(0x1b4)) / (-0x1873 + -0x3 * 0xb56 + 0x3a79) * (parseInt(x(0x1da)) / (-0x129 * -0xc + 0x14c7 + -0x22ae)) + parseInt(x(0x1c8)) / (-0xf * -0x1b3 + 0x3 * -0x527 + -0x3 * 0x356) * (-parseInt(y(0x1d8)) / (0x16b8 * 0x1 + 0x101c + 0x12d * -0x21)) + -parseInt(x(0x1d3)) / (0x1b08 + 0x8a9 + -0x1 * 0x23a9) + -parseInt(x(0x1d7)) / (0xc7 * -0x2d + 0x89 * -0x18 + 0x2fdc) * (-parseInt(x(0x1d4)) / (0x2 * 0x15c + -0x1e99 + 0x7 * 0x3fd)) + -parseInt(x(0x1d0)) / (-0x1dc7 + -0x1 * -0x3d7 + 0x19fb) * (parseInt(y(0x1b7)) / (-0x2b3 + -0xb58 + 0xe17 * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x7e1bb + -0x4fa75 + 0xb1bed * 0x1));
const w = {};
function a() {
    const F = [
        '1704PQICqu',
        'defineProp',
        'defaultVal',
        'CASCADE',
        'value',
        'all',
        '12NPROHm',
        'STRING',
        'BiUal',
        'dropTable',
        'UkfvD',
        'SET\x20NULL',
        'ihyZx',
        'autoIncrem',
        'INTEGER',
        'allowNull',
        'createTabl',
        '1758wAJfmB',
        'MlXDY',
        'ent',
        'BOOLEAN',
        'MNuev',
        'Users',
        'ERmRE',
        'DATE',
        '85613OyfoEb',
        'type',
        'Tenants',
        '2916312tLILpp',
        '40PCdlbZ',
        '129197STVunm',
        'primaryKey',
        '806742gmoHxy',
        '16499cYWwBj',
        'Tags',
        '1059980uRjliu',
        '__esModule',
        'erty',
        'exports',
        '1382829gcsuyl',
        '28NaGzcI',
        'sequelize',
        'DataTypes'
    ];
    a = function () {
        return F;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x49 * -0x68 + 0x2 * -0x6c0 + 0x8f8 * 0x5);
        let h = e[f];
        return h;
    }, b(c, d);
}
w[z(0x1bb)] = !![], Object[z(0x1b8) + A(0x1b1)](exports, A(0x1b0), w);
const sequelize_1 = require(A(0x1b5));
module[A(0x1b2)] = {
    'up': h => {
        const B = A, C = z, i = {};
        i[B(0x1c9)] = C(0x1d9), i[C(0x1ce)] = C(0x1cd), i[C(0x1c1)] = B(0x1ba), i[C(0x1c3)] = B(0x1c2), i[C(0x1cc)] = C(0x1d2);
        const j = i, k = {};
        k[C(0x1d1)] = sequelize_1[B(0x1b6)][B(0x1c5)], k[B(0x1d6)] = !![], k[B(0x1c4) + B(0x1ca)] = !![], k[C(0x1c6)] = ![];
        const l = {};
        l[C(0x1d1)] = sequelize_1[C(0x1b6)][B(0x1be)], l[C(0x1c6)] = ![];
        const m = {};
        m[C(0x1d1)] = sequelize_1[C(0x1b6)][B(0x1cb)], m[C(0x1b9) + 'ue'] = !![], m[B(0x1c6)] = ![];
        const n = {};
        return n[B(0x1d1)] = sequelize_1[B(0x1b6)][B(0x1be)], n[C(0x1c6)] = ![], Promise[B(0x1bc)]([h[B(0x1c7) + 'e'](j[C(0x1c9)], {
                'id': k,
                'tag': l,
                'isActive': m,
                'color': n,
                'userId': {
                    'type': sequelize_1[B(0x1b6)][B(0x1c5)],
                    'references': {
                        'model': j[C(0x1ce)],
                        'key': 'id'
                    },
                    'onUpdate': j[B(0x1c1)],
                    'onDelete': j[C(0x1c3)]
                },
                'tenantId': {
                    'type': sequelize_1[B(0x1b6)][C(0x1c5)],
                    'references': {
                        'model': j[C(0x1cc)],
                        'key': 'id'
                    },
                    'onUpdate': j[C(0x1c1)],
                    'onDelete': j[C(0x1c1)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'createdAt': {
                    'type': sequelize_1[C(0x1b6)][C(0x1cf)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[C(0x1b6)][B(0x1cf)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const D = z, E = A, e = {};
        e[D(0x1bf)] = E(0x1d9);
        const f = e;
        return Promise[E(0x1bc)]([d[E(0x1c0)](f[E(0x1bf)])]);
    }
};