'use strict';
const x = b, y = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x218b + -0x258b + 0x489e);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x19c)) / (0x203e + -0x25cc + 0x58f) * (parseInt(w(0x188)) / (0x5db * 0x4 + 0x1772 + -0x2edc)) + -parseInt(v(0x198)) / (-0x657 + 0xba1 + -0x547) + parseInt(v(0x19b)) / (-0x1e3 + 0x3d3 + 0x3 * -0xa4) * (parseInt(v(0x1aa)) / (-0x253 * -0x9 + -0xbe4 * -0x1 + -0x20ca)) + parseInt(w(0x195)) / (0x45f + 0x7 * -0x151 + 0x7 * 0xb2) + -parseInt(w(0x191)) / (0x1208 + 0x6cb + -0x18cc) + parseInt(w(0x18b)) / (0x1e63 + 0x166b + -0x34c6) + -parseInt(v(0x1a6)) / (-0x6ca * 0x3 + 0x1fa1 + -0xb3a) * (parseInt(w(0x18d)) / (0x1b3f + 0xfcf + -0x1582 * 0x2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x52554 + 0x1a * 0x24e7 + 0x55c32));
const u = {};
u[x(0x1a0)] = !![], Object[x(0x19e) + x(0x199)](exports, y(0x18a), u);
const sequelize_1 = require(x(0x19d));
function a() {
    const D = [
        'StepsReply',
        'CASCADE',
        '4ddlLCS',
        'DATE',
        '__esModule',
        '3390128OqUtIb',
        'autoIncrem',
        '10FbFRyi',
        'DataTypes',
        'Zbywi',
        'dropTable',
        '1957109lXZURG',
        'SVuCg',
        'wKhEE',
        'exports',
        '121818FWKFdt',
        'zpZEY',
        'kldmp',
        '178725arEYhG',
        'erty',
        'INTEGER',
        '268LOmDUx',
        '78643dgorEs',
        'sequelize',
        'defineProp',
        'type',
        'value',
        'SET\x20NULL',
        'pXPPU',
        'createTabl',
        'Users',
        'ent',
        '4314879sJrrSo',
        'AutoReply',
        'allowNull',
        'STRING',
        '35590PKkstO',
        'primaryKey'
    ];
    a = function () {
        return D;
    };
    return a();
}
module[x(0x194)] = {
    'up': g => {
        const z = x, A = y, h = {};
        h[z(0x192)] = z(0x1ac), h[z(0x18f)] = z(0x1a7), h[A(0x1a2)] = z(0x1ad), h[z(0x197)] = z(0x1a4), h[z(0x193)] = A(0x1a1);
        const i = h, j = {};
        j[z(0x19f)] = sequelize_1[A(0x18e)][A(0x19a)], j[A(0x18c) + A(0x1a5)] = !![], j[A(0x1ab)] = !![], j[z(0x1a8)] = ![];
        const k = {};
        k[A(0x19f)] = sequelize_1[z(0x18e)][z(0x1a9)], k[z(0x1a8)] = ![];
        const l = {};
        return l[z(0x19f)] = sequelize_1[z(0x18e)][A(0x19a)], l[z(0x1a8)] = ![], g[A(0x1a3) + 'e'](i[A(0x192)], {
            'id': j,
            'reply': k,
            'stepOrder': l,
            'idAutoReply': {
                'type': sequelize_1[A(0x18e)][z(0x19a)],
                'references': {
                    'model': i[A(0x18f)],
                    'key': 'id'
                },
                'onUpdate': i[A(0x1a2)],
                'onDelete': i[A(0x1a2)]
            },
            'action': {
                'type': sequelize_1[z(0x18e)][A(0x19a)],
                'allowNull': ![],
                'defaultValue': 0x0
            },
            'userId': {
                'type': sequelize_1[z(0x18e)][A(0x19a)],
                'references': {
                    'model': i[A(0x197)],
                    'key': 'id'
                },
                'onUpdate': i[z(0x1a2)],
                'onDelete': i[A(0x193)]
            },
            'createdAt': {
                'type': sequelize_1[z(0x18e)][z(0x189)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[A(0x18e)][A(0x189)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const B = y, C = x, e = {};
        e[B(0x196)] = C(0x1ac);
        const f = e;
        return d[B(0x190)](f[B(0x196)]);
    }
};