'use strict';
function a() {
    const z = [
        'Queues',
        '196453iAOvSy',
        'defineProp',
        'CHOtm',
        'queueId',
        'value',
        'erty',
        '591606wfbXKH',
        'defaultVal',
        'sequelize',
        'type',
        'BahXl',
        '15pZpBti',
        'Users',
        'LCCSQ',
        '754800dpTssF',
        'XmfKi',
        'removeColu',
        'allowNull',
        'FxlFA',
        '20181wmqhgj',
        'addColumn',
        '472iLGOWS',
        'Actions',
        'queue',
        'CASCADE',
        'leUeF',
        'tmjJR',
        'DataTypes',
        '4tlyxfF',
        'userIdDest',
        '3436542VKWxEx',
        '__esModule',
        'vkZZS',
        'INTEGER',
        'UmDfF',
        'QrZnY',
        'qLRjx',
        'ination',
        'all',
        'exports',
        '493638rhrcck',
        '1345340QhChJY',
        'rjlLt',
        'StepsReply',
        'restrict',
        '33dpTULY'
    ];
    a = function () {
        return z;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1bd4 + 0x7 * -0x427 + 0x2b2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x19a)) / (-0x13 * 0x161 + -0xdab * 0x2 + 0xb * 0x4de) + -parseInt(r(0x187)) / (0x7d8 + 0x8d * -0x2f + 0x1 * 0x120d) * (parseInt(s(0x1a0)) / (0x1 * 0x107a + 0x1d4b + -0x16e1 * 0x2)) + parseInt(s(0x194)) / (-0x1894 + 0x2659 * 0x1 + -0xdc1) + parseInt(s(0x176)) / (0x2158 + 0x5ae + -0x1 * 0x2701) * (-parseInt(s(0x193)) / (-0x1485 + 0x1507 * -0x1 + 0x2992)) + -parseInt(r(0x17e)) / (0xf6e + 0x1cd3 * -0x1 + -0x4 * -0x35b) * (-parseInt(s(0x180)) / (0x1efd * -0x1 + -0x251f + 0x4424)) + parseInt(s(0x189)) / (-0x4 * 0x715 + 0x1 * 0xc71 + -0x2 * -0x7f6) + parseInt(r(0x179)) / (-0x1d21 * 0x1 + 0xd * 0x1cd + 0x5c2) * (-parseInt(r(0x198)) / (0x2af + 0x121d + 0x45 * -0x4d));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1c * -0x2548 + -0x10 * -0x3178 + 0x44c44));
const q = {};
q[t(0x19e)] = !![], Object[t(0x19b) + t(0x19f)](exports, t(0x18a), q);
const sequelize_1 = require(u(0x1a2));
module[u(0x192)] = {
    'up': d => {
        const v = t, w = t, e = {};
        e[v(0x195)] = w(0x196) + v(0x181), e[v(0x18f)] = w(0x182), e[v(0x17d)] = v(0x19d), e[w(0x17a)] = w(0x199), e[w(0x19c)] = v(0x183), e[w(0x178)] = v(0x197), e[w(0x185)] = w(0x188) + w(0x190), e[v(0x18b)] = w(0x177);
        const f = e;
        return Promise[v(0x191)]([
            d[v(0x17b) + 'mn'](f[v(0x195)], f[v(0x18f)]),
            d[w(0x17f)](f[w(0x195)], f[v(0x17d)], {
                'type': sequelize_1[w(0x186)][v(0x18c)],
                'references': {
                    'model': f[w(0x17a)],
                    'key': 'id'
                },
                'onUpdate': f[v(0x19c)],
                'onDelete': f[w(0x178)],
                'defaultValue': null,
                'allowNull': !![]
            }),
            d[w(0x17b) + 'mn'](f[w(0x195)], f[v(0x185)]),
            d[v(0x17f)](f[w(0x195)], f[v(0x185)], {
                'type': sequelize_1[v(0x186)][v(0x18c)],
                'references': {
                    'model': f[v(0x18b)],
                    'key': 'id'
                },
                'onUpdate': f[v(0x19c)],
                'onDelete': f[w(0x178)],
                'defaultValue': null,
                'allowNull': !![]
            })
        ]);
    },
    'down': f => {
        const x = u, y = u, g = {};
        g[x(0x184)] = y(0x196) + y(0x181), g[y(0x18e)] = x(0x19d), g[x(0x175)] = x(0x182), g[x(0x18d)] = y(0x188) + y(0x190);
        const h = g, i = {};
        i[x(0x1a3)] = sequelize_1[x(0x186)][x(0x18c)], i[x(0x1a1) + 'ue'] = null, i[x(0x17c)] = !![];
        const j = {};
        return j[x(0x1a3)] = sequelize_1[y(0x186)][x(0x18c)], j[y(0x1a1) + 'ue'] = null, j[y(0x17c)] = !![], Promise[x(0x191)]([
            f[y(0x17b) + 'mn'](h[y(0x184)], h[x(0x18e)]),
            f[y(0x17f)](h[y(0x184)], h[y(0x175)], i),
            f[x(0x17b) + 'mn'](h[y(0x184)], h[y(0x18d)]),
            f[x(0x17f)](h[x(0x184)], h[x(0x18d)], j)
        ]);
    }
};