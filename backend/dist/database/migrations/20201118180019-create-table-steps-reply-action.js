'use strict';
const x = b, y = b;
function a() {
    const D = [
        'CASCADE',
        '2897106QeYwNl',
        'oTOhB',
        '161900anJetD',
        '24SrHyre',
        '1962590itdTeR',
        'exports',
        'Actions',
        'yhHdl',
        '361382VSSWZR',
        'DATE',
        'defineProp',
        'type',
        'URxLK',
        '27708OSYJQU',
        'value',
        'SET\x20NULL',
        'StepsReply',
        'Users',
        'aiVSC',
        '126asAXMb',
        '730wxuXtW',
        '4wxEitZ',
        'allowNull',
        'autoIncrem',
        'createTabl',
        'ent',
        '11733073dSHYlh',
        'DataTypes',
        'INTEGER',
        '__esModule',
        'pCPVa',
        '904269kJCKcR',
        'erty',
        'sequelize',
        'dropTable',
        'primaryKey',
        'qUCTj',
        '12BMTWfr',
        'STRING'
    ];
    a = function () {
        return D;
    };
    return a();
}
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0x133)) / (0x17 * -0x12f + 0x8 * 0x3a9 + -0x20e * 0x1) + parseInt(w(0x118)) / (0x189e + 0x1 * 0x103d + -0x1 * 0x28d9) + parseInt(v(0x114)) / (0x5 * -0xf1 + -0x4c9 + 0x981) * (parseInt(v(0x129)) / (0x13a2 + -0x1f34 + 0x2 * 0x5cb)) + -parseInt(v(0x128)) / (0x9cb * 0x2 + 0x86c * -0x1 + -0xb25) * (-parseInt(w(0x121)) / (0x159b + 0x1232 + 0x1 * -0x27c7)) + parseInt(w(0x11c)) / (0xf * -0x34 + 0x6 * -0x55 + -0x1 * -0x511) * (parseInt(w(0x117)) / (-0x154a + 0x2 * -0xf53 + 0x33f8)) + parseInt(w(0x127)) / (0x21a5 * -0x1 + -0xb3c + 0x2cea) * (-parseInt(v(0x116)) / (-0xf07 * 0x1 + -0x3b * 0x43 + 0x1e82)) + -parseInt(w(0x12e)) / (-0x1397 + -0xc2f * -0x1 + 0x773) * (parseInt(v(0x111)) / (-0x1e * -0xb8 + 0x927 + -0x3 * 0xa39));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x81 * -0x2 + 0x3 * 0x22000 + -0x1 * -0x272e1));
const u = {};
u[x(0x122)] = !![], Object[x(0x11e) + x(0x134)](exports, x(0x131), u);
const sequelize_1 = require(x(0x135));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x75 + -0x1 * 0xaff + -0x5 * -0x281);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[x(0x119)] = {
    'up': e => {
        const z = y, A = x, f = {};
        f[z(0x138)] = z(0x124) + z(0x11a), f[A(0x132)] = A(0x124), f[z(0x11b)] = z(0x113), f[A(0x115)] = A(0x125), f[z(0x126)] = A(0x123);
        const g = f, h = {};
        return h[A(0x11f)] = sequelize_1[A(0x12f)][A(0x130)], h[z(0x12b) + A(0x12d)] = !![], h[A(0x137)] = !![], h[z(0x12a)] = ![], e[z(0x12c) + 'e'](g[A(0x138)], {
            'id': h,
            'stepReplyId': {
                'type': sequelize_1[A(0x12f)][A(0x130)],
                'references': {
                    'model': g[z(0x132)],
                    'key': 'id'
                },
                'onUpdate': g[A(0x11b)],
                'onDelete': g[z(0x11b)]
            },
            'words': {
                'type': sequelize_1[A(0x12f)][A(0x112)],
                'allowNull': ![]
            },
            'action': {
                'type': sequelize_1[A(0x12f)][z(0x130)],
                'allowNull': ![],
                'defaultValue': 0x0
            },
            'reply': {
                'type': sequelize_1[z(0x12f)][A(0x112)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[z(0x12f)][z(0x130)],
                'references': {
                    'model': g[z(0x115)],
                    'key': 'id'
                },
                'onUpdate': g[A(0x11b)],
                'onDelete': g[A(0x126)]
            },
            'createdAt': {
                'type': sequelize_1[z(0x12f)][z(0x11d)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[A(0x12f)][z(0x11d)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const B = x, C = x, e = {};
        e[B(0x120)] = B(0x124) + C(0x11a);
        const f = e;
        return d[B(0x136)](f[B(0x120)]);
    }
};