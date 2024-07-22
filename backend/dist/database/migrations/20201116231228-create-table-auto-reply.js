'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0x1ca)) / (0x7d * -0xb + 0x115f + -0xbff) + parseInt(u(0x1cb)) / (-0x5 * 0x512 + 0x787 * 0x2 + 0xa4e) * (-parseInt(t(0x1d6)) / (-0x17c8 + 0x3b * 0x60 + 0x1ab)) + -parseInt(u(0x1d8)) / (-0x626 + -0x1f * 0x4c + 0xf5e) + -parseInt(u(0x1d0)) / (-0x4 * 0x764 + -0x1 * -0x169f + 0x37b * 0x2) + -parseInt(u(0x1d1)) / (-0x409 * 0x7 + -0x9cb + 0x2610) * (parseInt(t(0x1dd)) / (-0x8ab * 0x2 + -0x1 * 0xacd + 0xe * 0x203)) + parseInt(u(0x1e3)) / (0x8 * 0x388 + 0x3 * -0xaa9 + 0x6b * 0x9) + parseInt(u(0x1e2)) / (0x1 * -0xfd9 + 0x4b2 * -0x1 + 0x1494);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1a2c8a * 0x1 + -0x76ba1 * 0x2 + 0x21de0));
const s = {};
function a() {
    const B = [
        'Users',
        '2286320OARjIn',
        'sequelize',
        'INTEGER',
        'uuqQs',
        'AutoReply',
        '7tCfudK',
        'islEm',
        'type',
        'DataTypes',
        'exports',
        '37753092wEzFOx',
        '3058080xcrSME',
        'pjXwh',
        'erty',
        'defineProp',
        'autoIncrem',
        'AHMhO',
        'STRING',
        'SET\x20NULL',
        'uEFCU',
        'allowNull',
        'DATE',
        '636782jprZII',
        '10828IoJyKq',
        'value',
        'dropTable',
        '__esModule',
        'primaryKey',
        '2081105uhkXzL',
        '6514014oqTUzp',
        'defaultVal',
        'ent',
        'createTabl',
        'CASCADE',
        '546gvqUYE'
    ];
    a = function () {
        return B;
    };
    return a();
}
s[v(0x1cc)] = !![], Object[w(0x1e6) + w(0x1e5)](exports, v(0x1ce), s);
const sequelize_1 = require(v(0x1d9));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1a84 + -0x1b * -0x24 + -0x1c88);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[v(0x1e1)] = {
    'up': h => {
        const x = w, y = v, i = {};
        i[x(0x1e4)] = y(0x1dc), i[y(0x1de)] = x(0x1d7), i[x(0x1e8)] = y(0x1d5), i[x(0x1db)] = y(0x1ea);
        const j = i, k = {};
        k[x(0x1df)] = sequelize_1[x(0x1e0)][y(0x1da)], k[x(0x1e7) + y(0x1d3)] = !![], k[y(0x1cf)] = !![], k[y(0x1c8)] = ![];
        const l = {};
        l[y(0x1df)] = sequelize_1[x(0x1e0)][y(0x1e9)], l[x(0x1c8)] = ![];
        const m = {};
        m[x(0x1df)] = sequelize_1[x(0x1e0)][y(0x1e9)], m[y(0x1c8)] = ![];
        const n = {};
        return n[y(0x1df)] = sequelize_1[y(0x1e0)][y(0x1da)], n[y(0x1c8)] = ![], n[y(0x1d2) + 'ue'] = 0x0, h[x(0x1d4) + 'e'](j[x(0x1e4)], {
            'id': k,
            'reply': l,
            'words': m,
            'action': n,
            'userId': {
                'type': sequelize_1[y(0x1e0)][x(0x1da)],
                'references': {
                    'model': j[x(0x1de)],
                    'key': 'id'
                },
                'onUpdate': j[x(0x1e8)],
                'onDelete': j[x(0x1db)]
            },
            'createdAt': {
                'type': sequelize_1[y(0x1e0)][x(0x1c9)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[x(0x1e0)][x(0x1c9)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = v, A = w, e = {};
        e[z(0x1eb)] = z(0x1dc);
        const f = e;
        return d[z(0x1cd)](f[z(0x1eb)]);
    }
};