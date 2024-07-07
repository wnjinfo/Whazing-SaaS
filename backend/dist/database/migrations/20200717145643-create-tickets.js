'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x16eb + 0x525 + 0x35f * -0x8);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const B = [
        'wGXph',
        '987543XeRLka',
        'Tickets',
        '4741480dmnwFc',
        '__esModule',
        '2GZjWSP',
        '1983186hvWDuD',
        'createTabl',
        'DataTypes',
        'STRING',
        'type',
        'RjJOl',
        'SET\x20NULL',
        '182444FywUmu',
        'value',
        'primaryKey',
        'sequelize',
        'DDMFi',
        'AHtSm',
        'pending',
        'exports',
        'allowNull',
        'ent',
        'ekLEj',
        '96678fJOiyh',
        'INTEGER',
        '1275245BqEagC',
        'jUlut',
        '5436oPmFWo',
        'Users',
        'autoIncrem',
        'dropTable',
        'DATE',
        'defineProp',
        'erty',
        '112zudVpU',
        'CASCADE',
        'dGbxe',
        'Contacts'
    ];
    a = function () {
        return B;
    };
    return a();
}
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x131)) / (0x2381 + -0x1 * 0x1427 + -0x1 * 0xf59) * (parseInt(u(0x11e)) / (-0x11ca + -0x1190 * 0x1 + 0x235c)) + parseInt(t(0x11a)) / (-0x17d3 + 0x57c + 0x125a) + parseInt(u(0x126)) / (0xfea + -0x4 * 0x5f2 + -0x7e2 * -0x1) + parseInt(u(0x133)) / (-0x66 * -0x55 + -0x17dd * 0x1 + 0x8e * -0x12) + -parseInt(u(0x135)) / (0x2113 * -0x1 + -0x26de * 0x1 + -0x47f7 * -0x1) * (-parseInt(t(0x13c)) / (0x2 * 0x6f1 + -0x4ab + 0xc * -0xc4)) + -parseInt(t(0x11c)) / (-0x88c + 0x127d + -0x3b * 0x2b) + parseInt(t(0x11f)) / (-0x4 * -0x2cc + -0xe57 + 0x8 * 0x66);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2620d + 0x1e9 * 0x75 + -0x1a * -0x1755));
const s = {};
s[v(0x127)] = !![], Object[v(0x13a) + w(0x13b)](exports, w(0x11d), s);
const sequelize_1 = require(w(0x129));
module[w(0x12d)] = {
    'up': e => {
        const x = v, y = w, f = {};
        f[x(0x12b)] = y(0x11b), f[x(0x130)] = x(0x12c), f[y(0x134)] = y(0x118), f[y(0x119)] = x(0x13d), f[y(0x124)] = x(0x136), f[x(0x12a)] = y(0x125);
        const g = f, h = {};
        return h[y(0x123)] = sequelize_1[x(0x121)][y(0x132)], h[y(0x137) + y(0x12f)] = !![], h[x(0x128)] = !![], h[y(0x12e)] = ![], e[x(0x120) + 'e'](g[y(0x12b)], {
            'id': h,
            'status': {
                'type': sequelize_1[x(0x121)][y(0x122)],
                'defaultValue': g[x(0x130)],
                'allowNull': ![]
            },
            'lastMessage': { 'type': sequelize_1[y(0x121)][x(0x122)] },
            'contactId': {
                'type': sequelize_1[y(0x121)][y(0x132)],
                'references': {
                    'model': g[x(0x134)],
                    'key': 'id'
                },
                'onUpdate': g[x(0x119)],
                'onDelete': g[y(0x119)]
            },
            'userId': {
                'type': sequelize_1[x(0x121)][y(0x132)],
                'references': {
                    'model': g[x(0x124)],
                    'key': 'id'
                },
                'onUpdate': g[y(0x119)],
                'onDelete': g[x(0x12a)]
            },
            'createdAt': {
                'type': sequelize_1[x(0x121)][y(0x139)](0x186b + -0x89 * 0x1d + -0x8e0),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[y(0x121)][y(0x139)](-0x12b9 * -0x1 + -0x1 * -0x190b + 0xb * -0x3fa),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = v, A = v, e = {};
        e[z(0x13e)] = A(0x11b);
        const f = e;
        return d[A(0x138)](f[z(0x13e)]);
    }
};