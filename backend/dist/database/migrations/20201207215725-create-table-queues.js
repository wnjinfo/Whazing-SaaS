'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x406 + 0x1b74 + -0x6 * 0x3a9);
        let h = e[f];
        return h;
    }, b(c, d);
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x18d)) / (-0x2385 + 0x505 + 0x1e81) * (parseInt(q(0x17b)) / (-0x1bf6 + -0x1cd5 + 0x1 * 0x38cd)) + parseInt(p(0x185)) / (-0xe3 * -0x2 + 0x1 * 0x17f + 0x8b * -0x6) * (parseInt(q(0x19e)) / (-0x23f7 + -0x2e * -0xb2 + -0x21 * -0x1f)) + parseInt(q(0x188)) / (-0x2686 + -0x12 * 0x1f0 + 0x496b) * (-parseInt(p(0x197)) / (-0x8dc * -0x4 + -0x1 * 0x32f + 0x203b * -0x1)) + parseInt(q(0x17d)) / (-0x234a + 0x4dc + 0x3 * 0xa27) * (-parseInt(q(0x18e)) / (-0x1 * 0x2446 + -0x6e5 * 0x3 + 0x38fd)) + parseInt(q(0x19a)) / (0x120f + -0x7f4 * -0x1 + -0x19fa) * (parseInt(q(0x186)) / (0x210f + 0x26c3 + -0x1 * 0x47c8)) + parseInt(q(0x193)) / (-0xb05 + -0x2 * 0x3ea + -0x4b9 * -0x4) * (parseInt(q(0x190)) / (-0xeba * -0x2 + 0x54a + -0x1 * 0x22b2)) + parseInt(q(0x19b)) / (-0x11d8 + 0x2615 + 0x2 * -0xa18);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x23d * -0x113 + 0x4e171 + 0x1ada6));
const o = {};
o[r(0x198)] = !![], Object[s(0x178) + r(0x181)](exports, s(0x191), o);
const sequelize_1 = require(s(0x192));
function a() {
    const x = [
        'primaryKey',
        '2fpnjbs',
        'allowNull',
        '91oIvXZG',
        'wEwPo',
        'Users',
        'DataTypes',
        'erty',
        'tAylC',
        'createTabl',
        'ent',
        '284175uChXpD',
        '2028300kZdOqr',
        'INTEGER',
        '35MNuIhh',
        'CASCADE',
        'dropTable',
        'tboEt',
        'exports',
        '392957gbUslx',
        '284216pDgiSn',
        'jqKmV',
        '12ygvZIH',
        '__esModule',
        'sequelize',
        '4183003zfTpfv',
        'KFUDP',
        'SET\x20NULL',
        'autoIncrem',
        '284946ANGJIw',
        'value',
        'DATE',
        '9GGwHkI',
        '10161957mOSAVK',
        'Queues',
        'STRING',
        '4OqkIVf',
        'defineProp',
        'type'
    ];
    a = function () {
        return x;
    };
    return a();
}
module[s(0x18c)] = {
    'up': f => {
        const t = r, u = s, g = {};
        g[t(0x18b)] = u(0x19c), g[t(0x17e)] = u(0x17f), g[u(0x182)] = t(0x189), g[u(0x18f)] = u(0x195);
        const h = g, i = {};
        i[t(0x179)] = sequelize_1[t(0x180)][t(0x187)], i[u(0x17a)] = !![], i[u(0x196) + u(0x184)] = !![], i[u(0x17c)] = ![];
        const j = {};
        return j[u(0x179)] = sequelize_1[u(0x180)][u(0x19d)], j[t(0x17c)] = ![], f[u(0x183) + 'e'](h[t(0x18b)], {
            'id': i,
            'queue': j,
            'userId': {
                'type': sequelize_1[u(0x180)][t(0x187)],
                'references': {
                    'model': h[u(0x17e)],
                    'key': 'id'
                },
                'onUpdate': h[t(0x182)],
                'onDelete': h[t(0x18f)]
            },
            'createdAt': {
                'type': sequelize_1[u(0x180)][u(0x199)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[t(0x180)][u(0x199)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = r, w = r, e = {};
        e[v(0x194)] = v(0x19c);
        const f = e;
        return d[w(0x18a)](f[w(0x194)]);
    }
};