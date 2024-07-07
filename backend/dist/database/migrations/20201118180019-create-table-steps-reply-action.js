'use strict';
const x = b, y = b;
function a() {
    const D = [
        'nwWpv',
        'allowNull',
        'createTabl',
        '54708lrryRE',
        'value',
        '9247zIQvTe',
        'DataTypes',
        'SET\x20NULL',
        'exports',
        'erty',
        '808BcVoEm',
        '1162095oOyBot',
        'CASCADE',
        'cooWc',
        '3326690DUCiyL',
        '11eIXSmZ',
        'sequelize',
        'dropTable',
        '1009946ShzwTc',
        '2382HbsHaz',
        '338nhxvZc',
        'StepsReply',
        '1ovqUZv',
        'DATE',
        'type',
        'Users',
        'Actions',
        'sEOku',
        'ent',
        'primaryKey',
        'defineProp',
        'EgwDD',
        '12XpoDva',
        'STRING',
        'OECYI',
        'autoIncrem',
        '__esModule',
        '664435gzEuyk',
        '44991HJODXm',
        'cuUJU',
        'INTEGER'
    ];
    a = function () {
        return D;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2663 + -0x1cb3 + -0x909);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0xb2)) / (-0x59 * 0x35 + 0x4a8 * 0x6 + -0x982) * (-parseInt(v(0xae)) / (0x5 * 0x2b7 + 0x12 * -0xd7 + 0x18d)) + -parseInt(v(0xa7)) / (0x2229 + 0x1 * 0x6f1 + -0x2917) + parseInt(w(0xbc)) / (0x577 * -0x3 + -0x10d * 0x1 + -0x5 * -0x37e) * (-parseInt(v(0xc1)) / (0x2 * -0x1225 + -0x701 + 0x16 * 0x1f8)) + -parseInt(v(0xaf)) / (0xa9d + 0x207 + 0x1 * -0xc9e) * (-parseInt(w(0xca)) / (0x1878 + -0x1a9e + -0x22d * -0x1)) + -parseInt(v(0xcf)) / (-0x11f3 + 0x5d9 + 0xc22) * (-parseInt(w(0xc2)) / (-0xf66 * -0x2 + -0xfb0 + 0x11 * -0xe3)) + parseInt(v(0xaa)) / (0x3a5 + 0x6ac + -0xa47) * (-parseInt(w(0xab)) / (-0x9 * -0xe0 + 0xb07 + 0x22 * -0x8e)) + -parseInt(v(0xc8)) / (0x82a + 0x1c55 + 0xd9 * -0x2b) * (parseInt(w(0xb0)) / (0x15ca + 0x1703 + -0x2cc0));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x8491 * 0xf + 0x24bc1 * 0x3 + 0xa * -0x10321));
const u = {};
u[x(0xc9)] = !![], Object[y(0xba) + x(0xce)](exports, x(0xc0), u);
const sequelize_1 = require(x(0xac));
module[x(0xcd)] = {
    'up': e => {
        const z = y, A = y, f = {};
        f[z(0xa9)] = z(0xb1) + z(0xb6), f[A(0xc3)] = A(0xb1), f[z(0xc5)] = A(0xa8), f[A(0xbe)] = z(0xb5), f[A(0xbb)] = z(0xcc);
        const g = f, h = {};
        return h[A(0xb4)] = sequelize_1[A(0xcb)][z(0xc4)], h[A(0xbf) + A(0xb8)] = !![], h[A(0xb9)] = !![], h[A(0xc6)] = ![], e[A(0xc7) + 'e'](g[A(0xa9)], {
            'id': h,
            'stepReplyId': {
                'type': sequelize_1[A(0xcb)][z(0xc4)],
                'references': {
                    'model': g[A(0xc3)],
                    'key': 'id'
                },
                'onUpdate': g[z(0xc5)],
                'onDelete': g[A(0xc5)]
            },
            'words': {
                'type': sequelize_1[A(0xcb)][A(0xbd)],
                'allowNull': ![]
            },
            'action': {
                'type': sequelize_1[z(0xcb)][z(0xc4)],
                'allowNull': ![],
                'defaultValue': 0x0
            },
            'reply': {
                'type': sequelize_1[z(0xcb)][z(0xbd)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[A(0xcb)][z(0xc4)],
                'references': {
                    'model': g[A(0xbe)],
                    'key': 'id'
                },
                'onUpdate': g[z(0xc5)],
                'onDelete': g[z(0xbb)]
            },
            'createdAt': {
                'type': sequelize_1[z(0xcb)][A(0xb3)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[z(0xcb)][A(0xb3)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const B = x, C = y, e = {};
        e[B(0xb7)] = C(0xb1) + C(0xb6);
        const f = e;
        return d[C(0xad)](f[C(0xb7)]);
    }
};