'use strict';
const B = b, C = b;
function a() {
    const H = [
        'primaryKey',
        '4060SNAZpz',
        'DataTypes',
        'BRGca',
        '39IsvCuk',
        'defaultVal',
        'ttKOE',
        'STRING',
        'INTEGER',
        'erty',
        'exports',
        '72926gxNuai',
        'value',
        '20iDfyAf',
        'type',
        'Messages',
        '27501732dDRqkh',
        'BOOLEAN',
        'createTabl',
        '5048lUycni',
        '4887405irOuoO',
        'TEXT',
        '__esModule',
        'gxhkr',
        '8325HXDAYr',
        'sequelize',
        '4254VbWLie',
        '190616NLAmqj',
        'Tickets',
        'CASCADE',
        'xTAPu',
        'Users',
        'allowNull',
        'DATE',
        'JnNkg',
        '800767gwddtx',
        '25xUmDvf',
        'defineProp',
        'dropTable',
        'ibrHV',
        'SET\x20NULL'
    ];
    a = function () {
        return H;
    };
    return a();
}
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(z(0x19c)) / (-0x1 * 0x1597 + 0x98c * -0x1 + 0xf92 * 0x2) * (-parseInt(A(0x1ac)) / (-0x308 + -0xf4f + 0x1259)) + parseInt(z(0x1a5)) / (-0x63e + 0x1d1 + -0x1 * -0x470) * (-parseInt(z(0x193)) / (-0x302 + -0x1 * 0x2399 + -0x1 * -0x269f)) + -parseInt(z(0x18c)) / (-0xdce + -0xa8a + 0x185d) + -parseInt(A(0x192)) / (0x1555 + 0x1566 + -0xd * 0x349) * (-parseInt(A(0x1a2)) / (0xe5c * -0x1 + -0x20d3 + 0x2f36)) + -parseInt(A(0x1b4)) / (-0x1e * -0xda + -0x3d3 + -0x15b1) * (-parseInt(z(0x190)) / (-0x126a + 0x24b6 + -0x1 * 0x1243)) + parseInt(z(0x1ae)) / (0x492 + 0x103d + -0x14c5) * (-parseInt(A(0x19b)) / (0xb * 0x6d + -0x1fb1 + 0x5 * 0x569)) + parseInt(z(0x1b1)) / (-0x159 + -0x14ae + -0x1613 * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2 * -0x8149f + -0xaa955 + 0x42701));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2f + 0x2233 + -0x12 * 0x1d3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const y = {};
y[B(0x1ad)] = !![], Object[B(0x19d) + B(0x1aa)](exports, C(0x18e), y);
const sequelize_1 = require(B(0x191));
module[C(0x1ab)] = {
    'up': j => {
        const D = B, E = B, k = {};
        k[D(0x1a4)] = E(0x1b0), k[E(0x18f)] = E(0x197), k[E(0x19f)] = D(0x195), k[D(0x1a7)] = E(0x1a0), k[E(0x196)] = E(0x194);
        const l = k, m = {};
        m[E(0x1af)] = sequelize_1[D(0x1a3)][D(0x1a8)], m[E(0x1a1)] = !![], m[D(0x198)] = ![];
        const n = {};
        n[D(0x1af)] = sequelize_1[E(0x1a3)][D(0x18d)], n[D(0x198)] = ![];
        const o = {};
        o[D(0x1af)] = sequelize_1[E(0x1a3)][E(0x1a9)], o[D(0x198)] = ![], o[E(0x1a6) + 'ue'] = 0x0;
        const p = {};
        p[D(0x1af)] = sequelize_1[E(0x1a3)][E(0x1b2)], p[E(0x198)] = ![], p[D(0x1a6) + 'ue'] = ![];
        const q = {};
        q[E(0x1af)] = sequelize_1[D(0x1a3)][E(0x1a8)];
        const r = {};
        return r[D(0x1af)] = sequelize_1[D(0x1a3)][D(0x1a8)], j[E(0x1b3) + 'e'](l[D(0x1a4)], {
            'id': m,
            'body': n,
            'ack': o,
            'read': p,
            'mediaType': q,
            'mediaUrl': r,
            'userId': {
                'type': sequelize_1[D(0x1a3)][D(0x1a9)],
                'references': {
                    'model': l[E(0x18f)],
                    'key': 'id'
                },
                'onUpdate': l[D(0x19f)],
                'onDelete': l[E(0x1a7)]
            },
            'ticketId': {
                'type': sequelize_1[E(0x1a3)][D(0x1a9)],
                'references': {
                    'model': l[E(0x196)],
                    'key': 'id'
                },
                'onUpdate': l[D(0x19f)],
                'onDelete': l[E(0x19f)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[D(0x1a3)][D(0x199)](0x15ff + 0x19e0 + -0x2fd9),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[E(0x1a3)][E(0x199)](0x6f4 * 0x1 + -0x131 * -0x19 + -0xf1 * 0x27),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const F = B, G = B, e = {};
        e[F(0x19a)] = F(0x1b0);
        const f = e;
        return d[F(0x19e)](f[G(0x19a)]);
    }
};