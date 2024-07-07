'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x107)) / (0x1eef * 0x1 + 0x999 * 0x4 + -0x1d3 * 0x26) + -parseInt(s(0x115)) / (-0x199 * 0x12 + 0x1807 + 0x4bd * 0x1) * (parseInt(r(0x12a)) / (-0x163c + 0x2090 + 0x13 * -0x8b)) + -parseInt(s(0x10a)) / (-0xb2 * 0x25 + -0x19a6 + 0x3364) * (parseInt(r(0x12b)) / (0x1be * -0x2 + 0x251b + -0x219a)) + parseInt(r(0x10c)) / (-0x18a0 + -0x12e0 * -0x1 + -0x1 * -0x5c6) * (parseInt(s(0x12f)) / (-0x559 * 0x1 + 0x1c51 * 0x1 + -0x16f1)) + parseInt(r(0x117)) / (0x17c + -0x1083 + 0xf0f) * (-parseInt(r(0x111)) / (0x2 * 0xad8 + 0x75d * -0x1 + -0xe4a)) + -parseInt(s(0x108)) / (-0x1b13 + 0x1f9d * 0x1 + 0x6 * -0xc0) * (-parseInt(r(0x109)) / (-0x2042 + 0x138a + 0xcc3)) + parseInt(s(0x106)) / (-0x2291 + 0xec1 * -0x1 + 0x315e);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5288a + 0x11fcf6 + -0x9a3e));
function a() {
    const z = [
        '1495701vgqTva',
        '1886765ZFIqoA',
        'type',
        'allowNull',
        '__esModule',
        '7fInOWJ',
        'rcpPQ',
        'dBKfa',
        '24725400SRpSji',
        '12238IghJok',
        '10hgsEaq',
        '10655447SvaAav',
        '4pOnCyY',
        'CASCADE',
        '5133006WXQvWS',
        'defineProp',
        'sequelize',
        'Users',
        'value',
        '2156418denPvp',
        'createTabl',
        'STRING',
        'ahSbW',
        '6OnELBt',
        'esLog',
        '40wxsiPD',
        'ZPmqi',
        'dropTable',
        'INTEGER',
        'exports',
        'XMPjf',
        'IsTUq',
        'ent',
        'DATE',
        'DataTypes',
        'Tickets',
        'autoIncrem',
        'erty',
        'UserMessag',
        'primaryKey',
        'TovQo',
        'RESTRICT',
        'SET\x20NULL',
        'defaultVal'
    ];
    a = function () {
        return z;
    };
    return a();
}
const q = {};
q[t(0x110)] = !![], Object[u(0x10d) + u(0x123)](exports, u(0x12e), q);
const sequelize_1 = require(t(0x10e));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xfba + 0x755 * 0x1 + 0x96a);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[t(0x11b)] = {
    'up': f => {
        const v = u, w = t, g = {};
        g[v(0x118)] = w(0x124) + w(0x116), g[v(0x105)] = v(0x10f), g[v(0x11d)] = v(0x10b), g[v(0x114)] = w(0x127), g[w(0x130)] = v(0x121), g[v(0x126)] = w(0x128);
        const h = g, i = {};
        i[v(0x12c)] = sequelize_1[v(0x120)][w(0x11a)], i[w(0x122) + w(0x11e)] = !![], i[v(0x125)] = !![], i[w(0x12d)] = ![];
        const j = {};
        return j[w(0x12c)] = sequelize_1[v(0x120)][v(0x113)], j[w(0x12d)] = !![], j[v(0x129) + 'ue'] = null, f[w(0x112) + 'e'](h[v(0x118)], {
            'id': i,
            'messageId': j,
            'userId': {
                'type': sequelize_1[v(0x120)][w(0x11a)],
                'references': {
                    'model': h[v(0x105)],
                    'key': 'id'
                },
                'onUpdate': h[w(0x11d)],
                'onDelete': h[v(0x114)]
            },
            'ticketId': {
                'type': sequelize_1[v(0x120)][w(0x11a)],
                'references': {
                    'model': h[v(0x130)],
                    'key': 'id'
                },
                'onUpdate': h[w(0x11d)],
                'onDelete': h[w(0x126)],
                'allowNull': !![]
            },
            'createdAt': {
                'type': sequelize_1[w(0x120)][w(0x11f)](0xf * -0x3b + 0x20f7 + -0x275 * 0xc),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[v(0x120)][v(0x11f)](-0x10d6 * -0x1 + 0x6bb + -0x178b * 0x1),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = u, y = u, e = {};
        e[x(0x11c)] = y(0x124) + y(0x116);
        const f = e;
        return d[x(0x119)](f[x(0x11c)]);
    }
};