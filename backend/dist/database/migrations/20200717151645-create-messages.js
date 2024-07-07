'use strict';
const B = b, C = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x165c + -0xb9 * 0x19 + -0x2e4);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(z(0x189)) / (-0xb6b + -0x15de + 0x214a) + -parseInt(z(0x16e)) / (-0x5 * 0x71e + 0x1a02 * 0x1 + -0x4cb * -0x2) * (parseInt(z(0x17f)) / (-0x109c * -0x2 + -0xc0c + -0x1529)) + parseInt(z(0x16f)) / (-0xee3 + -0x14d2 + -0x1f * -0x127) + -parseInt(z(0x170)) / (-0x79a + -0x1927 + 0x20c6) * (-parseInt(A(0x17c)) / (0x193 * -0x9 + 0x1973 * 0x1 + -0xb42)) + parseInt(z(0x18a)) / (0x599 * 0x4 + -0x1eef * -0x1 + 0x12 * -0x2f6) * (-parseInt(z(0x187)) / (-0x1a9f * -0x1 + -0x23c * 0x1 + -0x185b)) + parseInt(z(0x17b)) / (0x5f + -0xadb + 0x1 * 0xa85) + -parseInt(z(0x171)) / (0x1 * -0x125f + 0x1612 + -0x3a9 * 0x1) * (parseInt(z(0x16a)) / (0x14 * 0x1a3 + 0xecf * 0x2 + -0x3e4f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x13bce5 + -0x1bfc1c + 0x3e94c4));
const y = {};
function a() {
    const H = [
        '212435oCzHUF',
        '3760oQTmgo',
        'wCVxW',
        'GEELc',
        'TEXT',
        'BOOLEAN',
        'SET\x20NULL',
        'ERspz',
        'exports',
        'createTabl',
        'defaultVal',
        '13770585IWLJxG',
        '234DakFMW',
        'STRING',
        'Messages',
        '5208519scBKtK',
        'hAZcq',
        'value',
        'sequelize',
        'DKiaI',
        'defineProp',
        'Tickets',
        'erty',
        '24VpFrzi',
        'INTEGER',
        '1425804HmEZGz',
        '3613953XWuBbm',
        '__esModule',
        'DataTypes',
        'type',
        'CASCADE',
        'DATE',
        'cegGW',
        'allowNull',
        '29436HIXhiN',
        'dropTable',
        'primaryKey',
        'Users',
        '2NWXYoO',
        '2608348BhTCWE'
    ];
    a = function () {
        return H;
    };
    return a();
}
y[B(0x181)] = !![], Object[C(0x184) + C(0x186)](exports, B(0x18b), y);
const sequelize_1 = require(C(0x182));
module[B(0x178)] = {
    'up': j => {
        const D = B, E = B, k = {};
        k[D(0x177)] = E(0x17e), k[E(0x172)] = E(0x16d), k[D(0x168)] = E(0x18e), k[E(0x173)] = E(0x176), k[E(0x180)] = E(0x185);
        const l = k, m = {};
        m[E(0x18d)] = sequelize_1[D(0x18c)][D(0x17d)], m[D(0x16c)] = !![], m[D(0x169)] = ![];
        const n = {};
        n[E(0x18d)] = sequelize_1[E(0x18c)][E(0x174)], n[D(0x169)] = ![];
        const o = {};
        o[E(0x18d)] = sequelize_1[E(0x18c)][E(0x188)], o[E(0x169)] = ![], o[D(0x17a) + 'ue'] = 0x0;
        const p = {};
        p[D(0x18d)] = sequelize_1[D(0x18c)][D(0x175)], p[D(0x169)] = ![], p[D(0x17a) + 'ue'] = ![];
        const q = {};
        q[E(0x18d)] = sequelize_1[D(0x18c)][D(0x17d)];
        const r = {};
        return r[E(0x18d)] = sequelize_1[D(0x18c)][E(0x17d)], j[D(0x179) + 'e'](l[D(0x177)], {
            'id': m,
            'body': n,
            'ack': o,
            'read': p,
            'mediaType': q,
            'mediaUrl': r,
            'userId': {
                'type': sequelize_1[E(0x18c)][D(0x188)],
                'references': {
                    'model': l[E(0x172)],
                    'key': 'id'
                },
                'onUpdate': l[D(0x168)],
                'onDelete': l[D(0x173)]
            },
            'ticketId': {
                'type': sequelize_1[D(0x18c)][E(0x188)],
                'references': {
                    'model': l[D(0x180)],
                    'key': 'id'
                },
                'onUpdate': l[D(0x168)],
                'onDelete': l[D(0x168)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[E(0x18c)][E(0x167)](-0x1 * -0x435 + -0x1eb4 + 0x1a85),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[E(0x18c)][E(0x167)](-0x4f * 0x46 + 0x16a9 + -0x109),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const F = B, G = B, e = {};
        e[F(0x183)] = F(0x17e);
        const f = e;
        return d[G(0x16b)](f[F(0x183)]);
    }
};