'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x1c8)) / (0xba4 + -0xdae + 0x20b) * (-parseInt(p(0x1bc)) / (-0x21a5 + -0x10b0 + 0x107 * 0x31)) + parseInt(p(0x1b8)) / (0x1 * 0xf85 + 0x21a3 * 0x1 + -0x3125) * (-parseInt(p(0x1d1)) / (0x6 * 0x25 + -0x1444 + 0x47 * 0x46)) + parseInt(q(0x1cf)) / (-0xe88 + -0x183d + 0x26ca) * (-parseInt(p(0x1c1)) / (-0x1 * 0x11b5 + -0x23f9 + 0x35b4)) + -parseInt(q(0x1c0)) / (-0x32 * -0x3c + -0x6cc + -0x4e5) * (-parseInt(p(0x1b1)) / (0x2676 + 0x42d * -0x6 + -0xd60)) + parseInt(p(0x1c9)) / (-0x2548 + -0x19e9 + 0x1 * 0x3f3a) * (parseInt(q(0x1d5)) / (-0x1fa5 + 0x4d * -0x3d + 0x2 * 0x1904)) + parseInt(p(0x1bb)) / (-0xe5c + -0xa1 * -0x10 + -0x65 * -0xb) + -parseInt(p(0x1cd)) / (0x1 * 0x1fdc + -0xb8c + -0x1444) * (-parseInt(p(0x1ca)) / (0x1 * 0x7c1 + 0x163a + -0x1dee));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7d5b3 + -0xb110c + 0x1ef8c8));
const o = {};
o[r(0x1c2)] = !![], Object[r(0x1b2) + s(0x1c3)](exports, s(0x1cc), o);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x25fb + 0x196f * -0x1 + 0x4 * -0x2b7);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const x = [
        '20dOAspG',
        'exports',
        '8OiISMi',
        'defineProp',
        'ZRoTQ',
        'kXSwx',
        'VZeOO',
        'Vyraq',
        'sequelize',
        '84369QHmMpT',
        'dropTable',
        'Users',
        '13635578Tbklfp',
        '106PBARXn',
        'DATE',
        'type',
        'bzbmv',
        '10088918jtamlb',
        '204wXhUzI',
        'value',
        'erty',
        'CASCADE',
        'createTabl',
        'ent',
        'allowNull',
        '20693lhmsRe',
        '4733289AdbDHM',
        '91ISnlSC',
        'INTEGER',
        '__esModule',
        '626952UDLdhU',
        'primaryKey',
        '118310FfcfJY',
        'DataTypes',
        '200ZnYxaf',
        'autoIncrem',
        'UsersQueue',
        'Queues'
    ];
    a = function () {
        return x;
    };
    return a();
}
const sequelize_1 = require(s(0x1b7));
module[s(0x1b0)] = {
    'up': e => {
        const t = r, u = s, f = {};
        f[t(0x1b6)] = t(0x1d3) + 's', f[u(0x1b3)] = t(0x1d4), f[u(0x1b4)] = t(0x1c4), f[t(0x1bf)] = t(0x1ba);
        const g = f, h = {};
        return h[u(0x1be)] = sequelize_1[u(0x1d0)][u(0x1cb)], h[u(0x1ce)] = !![], h[t(0x1d2) + t(0x1c6)] = !![], h[t(0x1c7)] = ![], e[t(0x1c5) + 'e'](g[u(0x1b6)], {
            'id': h,
            'queueId': {
                'type': sequelize_1[t(0x1d0)][u(0x1cb)],
                'references': {
                    'model': g[u(0x1b3)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x1b4)],
                'onDelete': g[t(0x1b4)],
                'allowNull': ![]
            },
            'userId': {
                'type': sequelize_1[u(0x1d0)][u(0x1cb)],
                'references': {
                    'model': g[u(0x1bf)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x1b4)],
                'onDelete': g[u(0x1b4)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[u(0x1d0)][t(0x1bd)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[t(0x1d0)][u(0x1bd)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = r, w = s, e = {};
        e[v(0x1b5)] = v(0x1d3) + 's';
        const f = e;
        return d[w(0x1b9)](f[v(0x1b5)]);
    }
};