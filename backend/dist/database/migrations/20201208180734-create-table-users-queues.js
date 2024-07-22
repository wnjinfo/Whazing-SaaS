'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x9f)) / (0x6eb * 0x3 + 0xa3 * -0x3b + 0x10d1) * (-parseInt(p(0x9d)) / (0x9a + -0x72a + 0x692)) + -parseInt(p(0x82)) / (0x1d8b + 0xd * -0x1b9 + -0x723) + parseInt(q(0x8b)) / (0x23b9 + 0x1 * 0x955 + 0x5 * -0x902) + -parseInt(p(0x8f)) / (-0x1 * -0x7cd + 0x10af + -0x1 * 0x1877) + parseInt(q(0x80)) / (0x3 * -0xc68 + -0x1765 + 0x3ca3) * (-parseInt(p(0x9e)) / (-0x2f6 * 0x5 + -0x1 * -0xb9b + 0x33a)) + -parseInt(p(0x94)) / (0x3 * -0x8b0 + -0x9 * -0x7 + -0x19d9 * -0x1) + -parseInt(q(0x90)) / (-0xa * -0x15d + -0x1255 + 0x4bc) * (-parseInt(q(0x8d)) / (-0x18 * -0x53 + -0x24cd + 0x1d0f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x80 * 0xa39 + 0xa2309 * 0x1 + -0x9d929));
function a() {
    const x = [
        'allowNull',
        'DataTypes',
        '1276892JExKTp',
        'type',
        '23470YapVRA',
        '__esModule',
        '1151390OxDDYm',
        '3618hjVvMT',
        'value',
        'wDXwo',
        'defineProp',
        '1070616CGMYxB',
        'DATE',
        'CASCADE',
        'WQhZz',
        'erty',
        'primaryKey',
        'Queues',
        'ThGvK',
        'exports',
        '20qQawAL',
        '133RgMKJF',
        '13942xozYmr',
        'INTEGER',
        'createTabl',
        'sequelize',
        '207474xFufMn',
        'dropTable',
        '81429eSHHoU',
        'ZFofQ',
        'UsersQueue',
        'Users',
        'ent',
        'ArmEe',
        'autoIncrem'
    ];
    a = function () {
        return x;
    };
    return a();
}
const o = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x14e0 + 0x5c7 + 0xf97);
        let h = e[f];
        return h;
    }, b(c, d);
}
o[r(0x91)] = !![], Object[s(0x93) + s(0x98)](exports, s(0x8e), o);
const sequelize_1 = require(r(0x7f));
module[s(0x9c)] = {
    'up': e => {
        const t = s, u = r, f = {};
        f[t(0x97)] = t(0x84) + 's', f[u(0x92)] = u(0x9a), f[t(0x87)] = t(0x96), f[t(0x83)] = t(0x85);
        const g = f, h = {};
        return h[t(0x8c)] = sequelize_1[t(0x8a)][u(0xa0)], h[u(0x99)] = !![], h[t(0x88) + u(0x86)] = !![], h[u(0x89)] = ![], e[t(0x7e) + 'e'](g[t(0x97)], {
            'id': h,
            'queueId': {
                'type': sequelize_1[u(0x8a)][u(0xa0)],
                'references': {
                    'model': g[u(0x92)],
                    'key': 'id'
                },
                'onUpdate': g[t(0x87)],
                'onDelete': g[u(0x87)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[u(0x8a)][u(0xa0)],
                'references': {
                    'model': g[u(0x83)],
                    'key': 'id'
                },
                'onUpdate': g[t(0x87)],
                'onDelete': g[u(0x87)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[t(0x8a)][t(0x95)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[u(0x8a)][t(0x95)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = s, w = r, e = {};
        e[v(0x9b)] = v(0x84) + 's';
        const f = e;
        return d[w(0x81)](f[w(0x9b)]);
    }
};