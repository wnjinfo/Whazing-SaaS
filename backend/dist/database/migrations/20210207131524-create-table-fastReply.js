'use strict';
function a() {
    const B = [
        'RjYuU',
        'DATE',
        'CASCADE',
        'ent',
        'Users',
        '31979610qDHhtZ',
        'TEXT',
        '__esModule',
        'sequelize',
        'value',
        'FastReply',
        'SET\x20NULL',
        '7567096YzlYjp',
        'erty',
        'exports',
        'type',
        '10DpGknB',
        '2988026PUWwXu',
        'defineProp',
        'DcwtG',
        'STRING',
        '3RxzofU',
        '1235901eYIAoQ',
        'allowNull',
        'createTabl',
        'DataTypes',
        'primaryKey',
        'ZTBNy',
        '5858672bvuiLs',
        'INTEGER',
        '2398170wmwPfn',
        'HRlbp',
        'Tenants',
        'stAOy',
        'autoIncrem',
        '9109156eZmUsF',
        'eNAmA',
        'dropTable'
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
            const f = parseInt(t(0x84)) / (-0xf1 * -0x4 + -0xc2f * -0x1 + -0xff2) + -parseInt(u(0x7f)) / (-0x1 * 0x1518 + -0x1d * -0x95 + 0x2f * 0x17) * (-parseInt(u(0x83)) / (0x17cf + -0x1f30 + 0x764)) + -parseInt(u(0x8a)) / (0xf25 + -0x1c72 + 0x1 * 0xd51) + parseInt(u(0x7e)) / (0x25e0 + -0xe21 * -0x1 + -0x1154 * 0x3) * (parseInt(u(0x8c)) / (-0x16e9 + -0x19d3 + 0x9e * 0x4f)) + parseInt(t(0x6b)) / (0x1192 + -0x54d * 0x3 + -0x1a4) + parseInt(t(0x7a)) / (0x1a8f + -0x1b94 + 0x10d) + -parseInt(t(0x73)) / (-0x24b8 + -0x1 * 0xcca + 0x318b * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x72803 + 0x6d3 * -0x25c + -0x9a7f * -0x22));
const s = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x255e + 0x1ebd + -0xd * 0x535);
        let h = e[f];
        return h;
    }, b(c, d);
}
s[v(0x77)] = !![], Object[w(0x80) + w(0x7b)](exports, w(0x75), s);
const sequelize_1 = require(v(0x76));
module[w(0x7c)] = {
    'up': g => {
        const x = v, y = v, h = {};
        h[x(0x81)] = x(0x78), h[y(0x8f)] = y(0x72), h[y(0x8d)] = y(0x70), h[x(0x6c)] = x(0x79), h[y(0x89)] = y(0x8e);
        const i = h, j = {};
        j[x(0x7d)] = sequelize_1[y(0x87)][x(0x8b)], j[y(0x6a) + y(0x71)] = !![], j[y(0x88)] = !![], j[y(0x85)] = ![];
        const k = {};
        k[x(0x7d)] = sequelize_1[y(0x87)][x(0x82)], k[x(0x85)] = ![];
        const l = {};
        return l[x(0x7d)] = sequelize_1[x(0x87)][x(0x74)], l[y(0x85)] = ![], g[y(0x86) + 'e'](i[x(0x81)], {
            'id': j,
            'key': k,
            'message': l,
            'userId': {
                'type': sequelize_1[y(0x87)][y(0x8b)],
                'references': {
                    'model': i[x(0x8f)],
                    'key': 'id'
                },
                'onUpdate': i[y(0x8d)],
                'onDelete': i[y(0x6c)]
            },
            'tenantId': {
                'type': sequelize_1[y(0x87)][x(0x8b)],
                'references': {
                    'model': i[y(0x89)],
                    'key': 'id'
                },
                'onUpdate': i[x(0x8d)],
                'onDelete': i[x(0x8d)],
                'allowNull': ![],
                'defaultValue': 0x1
            },
            'createdAt': {
                'type': sequelize_1[x(0x87)][x(0x6f)](-0x958 + 0x1c45 + -0x12e7),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[y(0x87)][x(0x6f)](-0x2114 + 0x25 * 0x6d + 0x1159),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = v, A = v, e = {};
        e[z(0x6e)] = z(0x78);
        const f = e;
        return d[z(0x6d)](f[z(0x6e)]);
    }
};