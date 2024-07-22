'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(z(0xc1)) / (0x26cc + -0x21fe + -0x4cd * 0x1) * (parseInt(z(0xb1)) / (-0x1961 + -0x254a + 0x3ead)) + parseInt(z(0xc5)) / (0x53 * -0x1b + -0x10a5 * -0x1 + 0x1 * -0x7e1) * (-parseInt(A(0xb5)) / (0x1a8c + 0x5fe + -0x1043 * 0x2)) + -parseInt(z(0xb8)) / (0x176d * 0x1 + -0xba + -0x16ae) + -parseInt(A(0xc6)) / (-0x41 * -0x3b + 0x1a * -0xcb + -0x1e3 * -0x3) + parseInt(z(0xa0)) / (0x25 * 0x4a + 0x26f + 0x56 * -0x27) * (-parseInt(z(0xb6)) / (-0xaee * -0x3 + 0x1c94 + 0x3 * -0x1472)) + parseInt(A(0xa2)) / (0x1740 + -0x1 * 0x821 + 0xf16 * -0x1) + parseInt(A(0xbf)) / (0x1dde + -0x4f * 0x12 + -0x1846 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x71c7c + -0xf12a * 0x6 + 0x19420d * 0x1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x52 + 0x5af + -0x4bd);
        let h = e[f];
        return h;
    }, b(c, d);
}
const y = {};
y[B(0xb7)] = !![], Object[C(0xa4) + B(0xa6)](exports, C(0xad), y);
const sequelize_1 = require(B(0xb2));
function a() {
    const H = [
        'defaultVal',
        '261096msEybb',
        '3173736LrKKnb',
        '7952Onepwu',
        'exports',
        '137637fOedYC',
        'Tickets',
        'defineProp',
        'xuiey',
        'erty',
        'createTabl',
        'STRING',
        'allowNull',
        'Users',
        'INTEGER',
        'TEXT',
        '__esModule',
        'HmvhF',
        'DataTypes',
        'SET\x20NULL',
        '2oOoDtW',
        'sequelize',
        'BvmGN',
        'bDOZJ',
        '16VzcSMc',
        '1160oEyMrK',
        'value',
        '7724975BekomQ',
        'dropTable',
        'CASCADE',
        'BOOLEAN',
        'QgGRd',
        'nKRwF',
        'Messages',
        '21721060OJejxX',
        'type',
        '1218237THSFGe',
        'DATE',
        'primaryKey'
    ];
    a = function () {
        return H;
    };
    return a();
}
module[B(0xa1)] = {
    'up': j => {
        const D = C, E = B, k = {};
        k[D(0xbd)] = E(0xbe), k[E(0xb3)] = E(0xaa), k[D(0xbc)] = D(0xba), k[E(0xb4)] = E(0xb0), k[E(0xa5)] = E(0xa3);
        const l = k, m = {};
        m[E(0xc0)] = sequelize_1[D(0xaf)][E(0xa8)], m[D(0xc3)] = !![], m[E(0xa9)] = ![];
        const n = {};
        n[E(0xc0)] = sequelize_1[D(0xaf)][D(0xac)], n[D(0xa9)] = ![];
        const o = {};
        o[D(0xc0)] = sequelize_1[D(0xaf)][D(0xab)], o[E(0xa9)] = ![], o[E(0xc4) + 'ue'] = 0x0;
        const p = {};
        p[D(0xc0)] = sequelize_1[D(0xaf)][E(0xbb)], p[D(0xa9)] = ![], p[D(0xc4) + 'ue'] = ![];
        const q = {};
        q[D(0xc0)] = sequelize_1[E(0xaf)][E(0xa8)];
        const r = {};
        return r[D(0xc0)] = sequelize_1[E(0xaf)][D(0xa8)], j[D(0xa7) + 'e'](l[D(0xbd)], {
            'id': m,
            'body': n,
            'ack': o,
            'read': p,
            'mediaType': q,
            'mediaUrl': r,
            'userId': {
                'type': sequelize_1[D(0xaf)][E(0xab)],
                'references': {
                    'model': l[D(0xb3)],
                    'key': 'id'
                },
                'onUpdate': l[E(0xbc)],
                'onDelete': l[E(0xb4)]
            },
            'ticketId': {
                'type': sequelize_1[D(0xaf)][E(0xab)],
                'references': {
                    'model': l[E(0xa5)],
                    'key': 'id'
                },
                'onUpdate': l[D(0xbc)],
                'onDelete': l[E(0xbc)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[E(0xaf)][D(0xc2)](0x15ec + -0x1225 + -0x3c1),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[D(0xaf)][D(0xc2)](0x17f * -0x1a + 0x210d + 0xa7 * 0x9),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const F = C, G = B, e = {};
        e[F(0xae)] = G(0xbe);
        const f = e;
        return d[F(0xb9)](f[F(0xae)]);
    }
};