'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x191)) / (-0x1969 + -0x1327 + 0x1 * 0x2c91) * (-parseInt(r(0x190)) / (-0x26e + 0x14e1 + 0x1271 * -0x1)) + -parseInt(r(0x18b)) / (0x8b * 0x19 + 0x14c3 + -0x2253) + -parseInt(r(0x170)) / (-0xf4b + 0x19d4 + 0x1 * -0xa85) * (-parseInt(s(0x182)) / (0x374 + -0x11e2 + -0x4d1 * -0x3)) + -parseInt(r(0x188)) / (0x1 * 0x6f5 + -0xe7f + 0x790) + -parseInt(s(0x17a)) / (-0xa * -0x1f7 + 0x1d88 + -0x3127) * (parseInt(r(0x18d)) / (-0x365 + -0x9 * -0x1ba + -0xc1d)) + parseInt(r(0x189)) / (0x3 * 0x6ff + -0x7 * 0x4df + 0xd25) + -parseInt(s(0x197)) / (-0x17d + -0xb5b + 0xce2) * (-parseInt(s(0x198)) / (0x2f * -0xd3 + 0x1 * 0x484 + -0x1122 * -0x2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x8fa52 + 0x1 * -0x81c8f + 0x2ccf * 0x7d));
function a() {
    const z = [
        '10KoZPSE',
        '8256116TalSQd',
        'autoIncrem',
        'erty',
        '6540jFwpuM',
        'wJtQR',
        'defineProp',
        'exports',
        'fRnFg',
        'QAoxC',
        'CASCADE',
        'defaultVal',
        'DataTypes',
        'SET\x20NULL',
        '7lArxbe',
        'UserMessag',
        'ktOBd',
        'VuWXd',
        'allowNull',
        'RESTRICT',
        'Tickets',
        'value',
        '935ztACiw',
        'INTEGER',
        'createTabl',
        '__esModule',
        'type',
        'esLog',
        '2096364YmTenh',
        '251775XDdURA',
        'dropTable',
        '1114179FzcXCE',
        'sQnpF',
        '3113848khJUjw',
        'primaryKey',
        'RVkGY',
        '16qKyAjd',
        '42456HbvFeq',
        'ent',
        'STRING',
        'sequelize',
        'DATE',
        'Users'
    ];
    a = function () {
        return z;
    };
    return a();
}
const q = {};
q[t(0x181)] = !![], Object[t(0x172) + u(0x16f)](exports, u(0x185), q);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x3a * -0xa6 + 0x1 * -0x1363 + 0x1 * -0x10cb);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(u(0x194));
module[t(0x173)] = {
    'up': f => {
        const v = t, w = u, g = {};
        g[v(0x171)] = v(0x17b) + v(0x187), g[v(0x175)] = v(0x196), g[w(0x174)] = v(0x176), g[v(0x18f)] = v(0x17f), g[v(0x17d)] = v(0x180), g[v(0x17c)] = v(0x179);
        const h = g, i = {};
        i[v(0x186)] = sequelize_1[v(0x178)][v(0x183)], i[w(0x16e) + w(0x192)] = !![], i[w(0x18e)] = !![], i[v(0x17e)] = ![];
        const j = {};
        return j[w(0x186)] = sequelize_1[v(0x178)][w(0x193)], j[v(0x17e)] = !![], j[v(0x177) + 'ue'] = null, f[v(0x184) + 'e'](h[w(0x171)], {
            'id': i,
            'messageId': j,
            'userId': {
                'type': sequelize_1[w(0x178)][v(0x183)],
                'references': {
                    'model': h[w(0x175)],
                    'key': 'id'
                },
                'onUpdate': h[v(0x174)],
                'onDelete': h[w(0x18f)]
            },
            'ticketId': {
                'type': sequelize_1[w(0x178)][w(0x183)],
                'references': {
                    'model': h[v(0x17d)],
                    'key': 'id'
                },
                'onUpdate': h[w(0x174)],
                'onDelete': h[v(0x17c)],
                'allowNull': !![]
            },
            'createdAt': {
                'type': sequelize_1[w(0x178)][w(0x195)](-0x1 * -0x1eba + -0x1315 + 0x5 * -0x253),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[v(0x178)][v(0x195)](-0x1d91 + -0xee7 + 0x2c7e),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = t, y = u, e = {};
        e[x(0x18c)] = y(0x17b) + y(0x187);
        const f = e;
        return d[y(0x18a)](f[y(0x18c)]);
    }
};