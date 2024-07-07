'use strict';
const t = b, u = b;
function a() {
    const z = [
        '1401055aBbJSO',
        '__esModule',
        'STRING',
        '469527tFzeGw',
        '13434oGqfKO',
        'sequelize',
        'value',
        '6562HKpDBd',
        'dropTable',
        'rXLTZ',
        '3085190yeqBnk',
        '55XWpmYA',
        'INTEGER',
        'DATE',
        '308hsIgas',
        'autoIncrem',
        '71KgsBHo',
        '9ZpMxDM',
        'xHafn',
        'ent',
        'exports',
        'type',
        'erty',
        'Contacts',
        '926208AvwtND',
        'defineProp',
        'ContactCus',
        '2786208TMVaOu',
        'DataTypes',
        'allowNull',
        'tomFields',
        'inFLv',
        'primaryKey',
        'CASCADE',
        'wDTkR',
        'createTabl'
    ];
    a = function () {
        return z;
    };
    return a();
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x1d1)) / (0x82d + 0x1 * 0x229f + 0x61d * -0x7) * (parseInt(r(0x1c8)) / (0x1 * 0x11a7 + -0xf8 * -0x22 + -0x3295)) + -parseInt(s(0x1c4)) / (0x1294 + 0x4d9 * 0x6 + -0x2fa7) + -parseInt(s(0x1d9)) / (-0x170f + -0x179f * 0x1 + 0x2eb2 * 0x1) + -parseInt(r(0x1c1)) / (-0x2 * -0x72b + 0x33 * -0x3 + -0xdb8) + -parseInt(r(0x1c5)) / (-0x3 * 0x4f3 + 0x1 * 0xeb + -0x26 * -0x5e) * (parseInt(r(0x1cf)) / (-0x1 * 0xd96 + 0x209d + -0x1300)) + parseInt(r(0x1dc)) / (0x196e + 0x3 * 0x85d + 0x19 * -0x205) * (-parseInt(s(0x1d2)) / (0x166d * 0x1 + -0x1d40 + 0x6dc)) + -parseInt(r(0x1cb)) / (0x136e + -0xd2d + -0x637 * 0x1) * (-parseInt(s(0x1cc)) / (-0x1 * -0xd79 + 0x3b3 * -0x1 + -0x1 * 0x9bb));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x34 * -0xc2f + 0x1c44e + 0x3ad52));
const q = {};
q[t(0x1c7)] = !![], Object[u(0x1da) + t(0x1d7)](exports, u(0x1c2), q);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x43 * -0x4e + 0x1 * -0x1d7 + 0x9 * -0x1df);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(u(0x1c6));
module[t(0x1d5)] = {
    'up': g => {
        const v = t, w = u, h = {};
        h[v(0x1bc)] = w(0x1db) + w(0x1df), h[w(0x1ca)] = w(0x1d8), h[v(0x1bf)] = v(0x1be);
        const i = h, j = {};
        j[w(0x1d6)] = sequelize_1[w(0x1dd)][v(0x1cd)], j[w(0x1d0) + w(0x1d4)] = !![], j[v(0x1bd)] = !![], j[w(0x1de)] = ![];
        const k = {};
        k[v(0x1d6)] = sequelize_1[w(0x1dd)][v(0x1c3)], k[v(0x1de)] = ![];
        const l = {};
        return l[w(0x1d6)] = sequelize_1[w(0x1dd)][v(0x1c3)], l[v(0x1de)] = ![], g[w(0x1c0) + 'e'](i[w(0x1bc)], {
            'id': j,
            'name': k,
            'value': l,
            'contactId': {
                'type': sequelize_1[w(0x1dd)][v(0x1cd)],
                'references': {
                    'model': i[w(0x1ca)],
                    'key': 'id'
                },
                'onUpdate': i[v(0x1bf)],
                'onDelete': i[v(0x1bf)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[w(0x1dd)][v(0x1ce)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[v(0x1dd)][w(0x1ce)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = t, y = t, e = {};
        e[x(0x1d3)] = x(0x1db) + x(0x1df);
        const f = e;
        return d[x(0x1c9)](f[y(0x1d3)]);
    }
};