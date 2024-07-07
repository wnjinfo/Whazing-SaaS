'use strict';
const t = b, u = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x14b1 + -0x18ec + 0x58a);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x164)) / (-0x1 * -0x1c5d + 0x32b * -0x1 + 0x1931 * -0x1) + parseInt(r(0x16c)) / (-0x1639 + -0x1a26 + 0x3061) + -parseInt(s(0x170)) / (0x3a0 + 0xb * 0x361 + -0x28c8) + -parseInt(s(0x173)) / (-0x17b8 + -0x1 * -0x80f + 0xfad) * (parseInt(s(0x154)) / (0x1a49 + 0x25d3 + -0x3 * 0x155d)) + -parseInt(s(0x174)) / (-0x57 * -0x3c + 0x1cc5 + -0x257 * 0x15) * (-parseInt(s(0x152)) / (0x2c * -0x71 + -0x23 * 0xb3 + 0x2bec * 0x1)) + -parseInt(r(0x15f)) / (0x2573 + 0x154 + -0x6d * 0x5b) * (-parseInt(r(0x14f)) / (-0x47 * 0x1d + -0x2 * -0xc22 + -0x1030)) + -parseInt(s(0x162)) / (-0x18ae + -0x254 * -0xb + -0xe4) * (parseInt(r(0x161)) / (-0x20ed + 0x19ca + 0x397 * 0x2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x13cd2c * 0x1 + -0xd * -0x196ab + 0xafd2a));
const q = {};
function a() {
    const z = [
        'fCjvG',
        'primaryKey',
        'autoIncrem',
        '1346400RAxqZR',
        'lets',
        'Tenants',
        'qimoa',
        '1623186YLaCgE',
        'defineProp',
        'dropTable',
        '4CUzZui',
        '6129546wlrKkB',
        'sequelize',
        '671742HYJNaG',
        '__esModule',
        'xJfvQ',
        '7RYECrR',
        'INTEGER',
        '5238385PDnKXH',
        'DATE',
        'createTabl',
        'COLcZ',
        'allowNull',
        'exports',
        'CASCADE',
        'erty',
        'DataTypes',
        'FjrQR',
        'ContactWal',
        '104GEGTnM',
        'ent',
        '10505ptRcaP',
        '1410EmVxrf',
        'type',
        '165838ftOgTU',
        'seCBG',
        'Contacts',
        'Users',
        'value'
    ];
    a = function () {
        return z;
    };
    return a();
}
q[t(0x168)] = !![], Object[u(0x171) + u(0x15b)](exports, t(0x150), q);
const sequelize_1 = require(u(0x175));
module[u(0x159)] = {
    'up': e => {
        const v = t, w = u, f = {};
        f[v(0x157)] = v(0x15e) + v(0x16d), f[w(0x151)] = w(0x167), f[v(0x15d)] = v(0x15a), f[w(0x169)] = w(0x166), f[w(0x165)] = w(0x16e);
        const g = f, h = {};
        return h[v(0x163)] = sequelize_1[w(0x15c)][w(0x153)], h[w(0x16b) + v(0x160)] = !![], h[v(0x16a)] = !![], h[w(0x158)] = ![], e[w(0x156) + 'e'](g[w(0x157)], {
            'id': h,
            'walletId': {
                'type': sequelize_1[v(0x15c)][w(0x153)],
                'references': {
                    'model': g[w(0x151)],
                    'key': 'id'
                },
                'onUpdate': g[w(0x15d)],
                'onDelete': g[w(0x15d)],
                'allowNull': ![]
            },
            'contactId': {
                'type': sequelize_1[v(0x15c)][w(0x153)],
                'references': {
                    'model': g[w(0x169)],
                    'key': 'id'
                },
                'onUpdate': g[v(0x15d)],
                'onDelete': g[v(0x15d)],
                'allowNull': ![]
            },
            'tenantId': {
                'type': sequelize_1[v(0x15c)][w(0x153)],
                'references': {
                    'model': g[w(0x165)],
                    'key': 'id'
                },
                'onUpdate': g[v(0x15d)],
                'onDelete': g[w(0x15d)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[v(0x15c)][v(0x155)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[w(0x15c)][v(0x155)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = u, y = t, e = {};
        e[x(0x16f)] = x(0x15e) + y(0x16d);
        const f = e;
        return d[y(0x172)](f[x(0x16f)]);
    }
};