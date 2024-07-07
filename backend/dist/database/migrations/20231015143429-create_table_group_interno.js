'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x162c + -0x1b7f + 0x1ff * 0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const x = [
        'INTEGER',
        'SET\x20NULL',
        'DataTypes',
        'primaryKey',
        'wQdxJ',
        'STRING',
        'autoIncrem',
        'defineProp',
        '2298784BAptav',
        'createTabl',
        'DATE',
        '11714WuOagv',
        '16MCUoWP',
        'ZPKKV',
        'erty',
        'type',
        '9RRpKuY',
        'allowNull',
        '__esModule',
        'sequelize',
        'CASCADE',
        '1452560uQOUPr',
        '98IxOhvc',
        'Groups',
        'IIDAU',
        'Users',
        'blqpr',
        'value',
        'dropTable',
        '6707118rgYpYQ',
        '234gBoycl',
        'adMsz',
        'ent',
        '1026550UOEpMd',
        'exports',
        '847424hureep',
        '78294aAWvAF'
    ];
    a = function () {
        return x;
    };
    return a();
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0xce)) / (0x1a03 + -0x953 + 0x10af * -0x1) + parseInt(p(0xb6)) / (-0x6d3 * -0x1 + 0x238c + 0x2d * -0xf1) * (-parseInt(q(0xc9)) / (0x3 * -0x6f7 + -0x1 * -0x12f2 + 0x1f6)) + parseInt(q(0xb7)) / (0x52 * -0x2b + -0x167a + 0x2444) * (parseInt(p(0xcc)) / (0x6 * -0x46f + 0x1 * 0x977 + 0x1128)) + -parseInt(q(0xaa)) / (0x14d * 0x1c + 0x79f * -0x2 + 0x54a * -0x4) * (-parseInt(p(0xc1)) / (0x15e5 + -0x37 + 0xf1 * -0x17)) + parseInt(q(0xb3)) / (-0x1c10 + 0x272 + 0x19a6) * (parseInt(p(0xbb)) / (-0x3 * 0x975 + 0x9 * 0xd3 + -0x3 * -0x6ff)) + parseInt(p(0xc0)) / (-0x6b3 + 0xa * -0x92 + 0xc71) + parseInt(p(0xc8)) / (0x83d * -0x4 + -0x1626 + 0x3725);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1b98 * -0x7a + -0xe5da4 * 0x1 + 0x26d682 * 0x1));
const o = {};
o[r(0xc6)] = !![], Object[r(0xb2) + r(0xb9)](exports, r(0xbd), o);
const sequelize_1 = require(r(0xbe));
module[s(0xcd)] = {
    'up': f => {
        const t = r, u = s, g = {};
        g[t(0xb8)] = u(0xc2), g[t(0xaf)] = t(0xc4), g[t(0xc3)] = u(0xbf), g[t(0xca)] = t(0xac);
        const h = g, i = {};
        i[u(0xba)] = sequelize_1[t(0xad)][t(0xab)], i[u(0xae)] = !![], i[t(0xb1) + u(0xcb)] = !![], i[u(0xbc)] = ![];
        const j = {};
        return j[t(0xba)] = sequelize_1[u(0xad)][u(0xb0)], j[t(0xbc)] = ![], f[t(0xb4) + 'e'](h[t(0xb8)], {
            'id': i,
            'group': j,
            'userId': {
                'type': sequelize_1[t(0xad)][u(0xab)],
                'references': {
                    'model': h[t(0xaf)],
                    'key': 'id'
                },
                'onUpdate': h[t(0xc3)],
                'onDelete': h[u(0xca)]
            },
            'createdAt': {
                'type': sequelize_1[u(0xad)][t(0xb5)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[t(0xad)][u(0xb5)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = r, w = r, e = {};
        e[v(0xc5)] = v(0xc2);
        const f = e;
        return d[v(0xc7)](f[v(0xc5)]);
    }
};