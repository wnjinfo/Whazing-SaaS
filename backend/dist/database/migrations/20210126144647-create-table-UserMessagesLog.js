'use strict';
function a() {
    const z = [
        '1688UZAdbb',
        '174bjAbpm',
        'DataTypes',
        'value',
        'defineProp',
        '11EBRVJJ',
        '303170cnLFRY',
        'esLog',
        'allowNull',
        'Tickets',
        'defaultVal',
        'RESTRICT',
        '20asOUvO',
        'CASCADE',
        'aVisr',
        'type',
        '240wXQAae',
        '2896FTCGUG',
        'STRING',
        'exports',
        'autoIncrem',
        'UserMessag',
        '173781ZavNVB',
        'dropTable',
        'eYaVX',
        '2472UjCWrR',
        'erty',
        'primaryKey',
        'DATE',
        'INTEGER',
        '40765zsMoFv',
        'sequelize',
        'QHMqS',
        'ejxii',
        'oTBii',
        'nXjmD',
        'SET\x20NULL',
        'Users',
        '__esModule',
        'ent',
        '5807388XkuoHB',
        'NWXoK',
        'createTabl',
        '1241440RiolyQ'
    ];
    a = function () {
        return z;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1279 * 0x2 + -0x118c + -0x1248);
        let h = e[f];
        return h;
    }, b(c, d);
}
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x132)) / (0x4 * -0x8f7 + -0x1688 + 0x1377 * 0x3) * (parseInt(s(0x142)) / (0xb3b * -0x3 + -0x1d06 + -0x1 * -0x3eb9)) + parseInt(s(0x11e)) / (-0x1bf0 + 0xec8 + 0x1 * 0xd2b) * (parseInt(r(0x131)) / (-0x1f7 * -0xe + 0x70 * 0x17 + -0x258e)) + parseInt(s(0x123)) / (0x97 * 0x37 + -0x5 * -0x2a7 + -0x2daf) * (-parseInt(s(0x141)) / (-0x26e0 + 0x903 * 0x2 + 0x1 * 0x14e0)) + parseInt(s(0x137)) / (0x2459 * 0x1 + -0x9f1 + 0x3 * -0x8cb) + -parseInt(r(0x130)) / (-0x985 * -0x3 + 0xcb6 * -0x1 + 0xfd1 * -0x1) + -parseInt(r(0x147)) / (-0x19e2 + -0x11b9 + 0x2ba4) * (-parseInt(r(0x13d)) / (0x8e6 * -0x1 + -0xe * -0x2b6 + -0x3 * 0x9ac)) + parseInt(s(0x136)) / (-0x7c + -0x1a * 0xb5 + 0x12e9) * (parseInt(r(0x12d)) / (-0x1ed5 + -0xc1 * -0x2b + -0x2 * 0xc5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1dd5b + 0x172a8 + -0x8f82));
const q = {};
q[t(0x134)] = !![], Object[t(0x135) + t(0x11f)](exports, t(0x12b), q);
const sequelize_1 = require(t(0x124));
module[u(0x144)] = {
    'up': f => {
        const v = t, w = u, g = {};
        g[v(0x126)] = v(0x146) + v(0x138), g[w(0x149)] = v(0x12a), g[v(0x12e)] = v(0x13e), g[w(0x125)] = w(0x13c), g[w(0x128)] = w(0x13a), g[w(0x127)] = w(0x129);
        const h = g, i = {};
        i[v(0x140)] = sequelize_1[v(0x133)][w(0x122)], i[w(0x145) + w(0x12c)] = !![], i[v(0x120)] = !![], i[v(0x139)] = ![];
        const j = {};
        return j[v(0x140)] = sequelize_1[v(0x133)][v(0x143)], j[v(0x139)] = !![], j[w(0x13b) + 'ue'] = null, f[w(0x12f) + 'e'](h[w(0x126)], {
            'id': i,
            'messageId': j,
            'userId': {
                'type': sequelize_1[w(0x133)][w(0x122)],
                'references': {
                    'model': h[v(0x149)],
                    'key': 'id'
                },
                'onUpdate': h[w(0x12e)],
                'onDelete': h[w(0x125)]
            },
            'ticketId': {
                'type': sequelize_1[w(0x133)][v(0x122)],
                'references': {
                    'model': h[w(0x128)],
                    'key': 'id'
                },
                'onUpdate': h[w(0x12e)],
                'onDelete': h[v(0x127)],
                'allowNull': !![]
            },
            'createdAt': {
                'type': sequelize_1[v(0x133)][v(0x121)](0x1e0e + -0x1c * -0xdf + 0xc * -0x489),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[v(0x133)][v(0x121)](-0x1 * -0x120b + 0x2e5 + -0x14ea),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = t, y = u, e = {};
        e[x(0x13f)] = y(0x146) + x(0x138);
        const f = e;
        return d[x(0x148)](f[x(0x13f)]);
    }
};