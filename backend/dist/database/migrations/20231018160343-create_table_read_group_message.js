'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x22ef + -0x295 + 0x2717);
        let h = e[f];
        return h;
    }, b(c, d);
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x1bb)) / (0x56a + 0x4ac + 0xa15 * -0x1) * (-parseInt(q(0x1b3)) / (0x1 * 0x1549 + -0x1ad0 + 0x589)) + -parseInt(q(0x195)) / (0x25 * 0x17 + -0x3 * -0xc95 + -0x290f * 0x1) + -parseInt(q(0x1ac)) / (-0x408 + -0x1e7 * -0x4 + -0x390) * (parseInt(q(0x19c)) / (0x145 + 0x239f + -0x1 * 0x24df)) + parseInt(q(0x1a1)) / (0x2d6 * -0x3 + -0x129 * -0x3 + 0x1 * 0x50d) * (parseInt(p(0x1a5)) / (0x3 * -0xbca + 0x23 * 0xdf + 0x13a * 0x4)) + -parseInt(q(0x1b6)) / (0x21a0 + -0x2333 + 0x19b) + parseInt(p(0x19a)) / (-0x219b + -0x931 * -0x3 + 0x1 * 0x611) * (parseInt(q(0x1ab)) / (-0x1d9 * -0x13 + -0x5 * -0x46c + 0x15 * -0x2b9)) + parseInt(p(0x1ae)) / (0xd55 + -0x1 * 0x300 + 0x2 * -0x525);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2a0cc + -0x6a738 + 0x124f24 * 0x1));
const o = {};
function a() {
    const x = [
        'InternalMe',
        '5076049wzEmYo',
        'value',
        'xGqHc',
        'type',
        'createTabl',
        '266tcymRA',
        '__esModule',
        'ent',
        '9152800vVOXIO',
        'ssage',
        'QZuep',
        'erty',
        'defineProp',
        '12128kNBHIJ',
        'INTEGER',
        'IdwbS',
        '4806309CMUocL',
        'primaryKey',
        'dropTable',
        'ReadMessag',
        'DATE',
        '9DVkJTd',
        'CASCADE',
        '813760GuoFMM',
        'allowNull',
        'AdKAG',
        'UTYLE',
        'pBoEi',
        '18TudprR',
        'sequelize',
        'BIGINT',
        'autoIncrem',
        '1373281KmkmuH',
        'exports',
        'SET\x20NULL',
        'UsersGroup',
        'eGroups',
        'DataTypes',
        '16702990PtuXzj',
        '16JYPQal'
    ];
    a = function () {
        return x;
    };
    return a();
}
o[r(0x1af)] = !![], Object[r(0x1ba) + s(0x1b9)](exports, r(0x1b4), o);
const sequelize_1 = require(r(0x1a2));
module[r(0x1a6)] = {
    'up': e => {
        const t = r, u = s, f = {};
        f[t(0x1a0)] = t(0x198) + u(0x1a9), f[u(0x194)] = t(0x1ad) + t(0x1b7), f[t(0x19e)] = u(0x19b), f[t(0x19f)] = t(0x1a7), f[u(0x1b0)] = u(0x1a8) + 's';
        const g = f, h = {};
        return h[u(0x1b1)] = sequelize_1[u(0x1aa)][t(0x193)], h[u(0x196)] = !![], h[u(0x1a4) + t(0x1b5)] = !![], h[u(0x19d)] = ![], e[t(0x1b2) + 'e'](g[t(0x1a0)], {
            'id': h,
            'internalMessageId': {
                'type': sequelize_1[t(0x1aa)][t(0x1a3)],
                'references': {
                    'model': g[t(0x194)],
                    'key': 'id'
                },
                'onUpdate': g[t(0x19e)],
                'onDelete': g[u(0x19f)]
            },
            'userGroupId': {
                'type': sequelize_1[t(0x1aa)][u(0x193)],
                'references': {
                    'model': g[u(0x1b0)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x19e)],
                'onDelete': g[u(0x19e)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[u(0x1aa)][u(0x199)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[u(0x1aa)][u(0x199)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = s, w = r, e = {};
        e[v(0x1b8)] = v(0x198) + v(0x1a9);
        const f = e;
        return d[v(0x197)](f[v(0x1b8)]);
    }
};