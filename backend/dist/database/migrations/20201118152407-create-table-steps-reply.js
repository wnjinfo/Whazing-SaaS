'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0x1d7)) / (-0x256e + -0x16 * 0xfe + -0xd * -0x48f) * (-parseInt(v(0x1d5)) / (0x139a + 0x53 * -0x61 + 0xbdb)) + parseInt(v(0x1e3)) / (-0x35 * 0x95 + -0xdba + 0x1 * 0x2c96) + parseInt(w(0x1d9)) / (-0x7b7 + 0xc1e + 0x463 * -0x1) + -parseInt(w(0x1cc)) / (-0x140b + 0x95f * -0x1 + -0x2ad * -0xb) * (parseInt(v(0x1cb)) / (-0x11 * 0xa1 + -0x21db + 0x2c92)) + parseInt(w(0x1de)) / (-0x2570 + 0x2b + 0x254c) * (parseInt(v(0x1e0)) / (0x59b + -0xf * 0x29 + -0x32c)) + parseInt(v(0x1d8)) / (0x1 * -0x2e6 + -0x62 * -0x53 + -0x1cd7) * (parseInt(w(0x1d2)) / (-0xe8 + 0x4 * 0x517 + 0x1 * -0x136a)) + -parseInt(v(0x1e2)) / (-0x24ed + -0x1 * 0x1246 + 0x373e);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xc1d8e + 0xcc631 + -0xceacb * 0x1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2 * 0x761 + -0x1409 + -0xc31 * -0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const u = {};
u[x(0x1e7)] = !![], Object[x(0x1ca) + x(0x1e5)](exports, y(0x1d4), u);
function a() {
    const D = [
        'YdRxt',
        'SET\x20NULL',
        '8209370irFxDi',
        'sequelize',
        '__esModule',
        '38QPlzEH',
        'BCrxc',
        '64915obdpZD',
        '9QymwYz',
        '2352484UUJSnR',
        'AutoReply',
        'STRING',
        'mqceX',
        'DATE',
        '21CLtZJC',
        'iUrTz',
        '3481048LVAeqy',
        'autoIncrem',
        '31452652EWGNoO',
        '1423977TmKYnL',
        'THHVA',
        'erty',
        'StepsReply',
        'value',
        'createTabl',
        'allowNull',
        'DataTypes',
        'INTEGER',
        'CASCADE',
        'MckGr',
        'type',
        'primaryKey',
        'Users',
        'defineProp',
        '4671210OtKPte',
        '5ETOTua',
        'exports',
        'dropTable',
        'ent'
    ];
    a = function () {
        return D;
    };
    return a();
}
const sequelize_1 = require(y(0x1d3));
module[y(0x1cd)] = {
    'up': g => {
        const z = y, A = x, h = {};
        h[z(0x1d0)] = z(0x1e6), h[z(0x1d6)] = A(0x1da), h[z(0x1df)] = A(0x1ec), h[z(0x1e4)] = z(0x1c9), h[A(0x1ed)] = z(0x1d1);
        const i = h, j = {};
        j[z(0x1ee)] = sequelize_1[A(0x1ea)][z(0x1eb)], j[z(0x1e1) + z(0x1cf)] = !![], j[z(0x1c8)] = !![], j[z(0x1e9)] = ![];
        const k = {};
        k[A(0x1ee)] = sequelize_1[z(0x1ea)][z(0x1db)], k[z(0x1e9)] = ![];
        const l = {};
        return l[z(0x1ee)] = sequelize_1[A(0x1ea)][z(0x1eb)], l[z(0x1e9)] = ![], g[A(0x1e8) + 'e'](i[A(0x1d0)], {
            'id': j,
            'reply': k,
            'stepOrder': l,
            'idAutoReply': {
                'type': sequelize_1[z(0x1ea)][z(0x1eb)],
                'references': {
                    'model': i[z(0x1d6)],
                    'key': 'id'
                },
                'onUpdate': i[A(0x1df)],
                'onDelete': i[z(0x1df)]
            },
            'action': {
                'type': sequelize_1[z(0x1ea)][A(0x1eb)],
                'allowNull': ![],
                'defaultValue': 0x0
            },
            'userId': {
                'type': sequelize_1[A(0x1ea)][A(0x1eb)],
                'references': {
                    'model': i[A(0x1e4)],
                    'key': 'id'
                },
                'onUpdate': i[z(0x1df)],
                'onDelete': i[z(0x1ed)]
            },
            'createdAt': {
                'type': sequelize_1[z(0x1ea)][z(0x1dd)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[A(0x1ea)][z(0x1dd)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const B = y, C = x, e = {};
        e[B(0x1dc)] = B(0x1e6);
        const f = e;
        return d[B(0x1ce)](f[C(0x1dc)]);
    }
};