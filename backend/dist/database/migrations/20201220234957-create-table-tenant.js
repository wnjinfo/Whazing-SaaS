'use strict';
const r = b, s = b;
function a() {
    const x = [
        'dropTable',
        '27EKdYfy',
        'ent',
        'MaiHX',
        'CASCADE',
        '189iEYWWG',
        'value',
        'allowNull',
        'INTEGER',
        'restrict',
        'Users',
        'oWpvt',
        '28073650wdxkdZ',
        'sequelize',
        '67720bacRLA',
        '30uRTQEw',
        'vKWWA',
        'nmfsA',
        '412045ssITbd',
        '748796APsRrz',
        'rJgUo',
        'primaryKey',
        'autoIncrem',
        'Tenants',
        'DataTypes',
        '295124ylHwht',
        'DATE',
        'erty',
        '__esModule',
        'gdUIv',
        '1844410nPfblT',
        'STRING',
        'type',
        'defineProp',
        'exports',
        '392LbQqkH',
        'createTabl',
        'active',
        '61444caNeVK'
    ];
    a = function () {
        return x;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x240f + -0x9 * -0x38b + 0x5db * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x1d2)) / (0x1 * 0x6d + 0x2 * 0x32b + -0x6c2) + -parseInt(q(0x1cc)) / (0xb7 * 0x9 + 0x1565 + -0x1bd2) + -parseInt(q(0x1be)) / (-0x1f82 + 0x8df + 0xd * 0x1be) * (parseInt(p(0x1b8)) / (0x21 * -0x22 + -0x1 * 0xc44 + 0x10aa)) + -parseInt(q(0x1cb)) / (0x6e * 0x1e + 0x184f + 0x1 * -0x252e) * (parseInt(q(0x1c8)) / (0x3 * 0xa3 + 0x1161 + -0x4 * 0x4d1)) + -parseInt(q(0x1b5)) / (0x1af1 * -0x1 + 0x6f * -0x4a + 0x3b0e) * (parseInt(q(0x1c7)) / (0x9 * 0x3ce + -0xef * 0x1f + -0x545)) + -parseInt(p(0x1ba)) / (-0x1d19 + -0x83f + 0x1 * 0x2561) * (-parseInt(q(0x1b0)) / (-0x90 * 0x8 + -0x1a72 + 0x1efc)) + parseInt(q(0x1c5)) / (0xdff * -0x1 + 0x23c3 * 0x1 + -0x15b9);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xa23c0 + -0x125 * -0xc91 + 0x251db * 0x2));
const o = {};
o[r(0x1bf)] = !![], Object[s(0x1b3) + s(0x1d4)](exports, r(0x1d5), o);
const sequelize_1 = require(r(0x1c6));
module[s(0x1b4)] = {
    'up': e => {
        const t = r, u = r, f = {};
        f[t(0x1c4)] = t(0x1d0), f[u(0x1c9)] = t(0x1b7), f[t(0x1cd)] = t(0x1c3), f[u(0x1bc)] = t(0x1bd), f[u(0x1af)] = u(0x1c2);
        const g = f, h = {};
        return h[t(0x1b2)] = sequelize_1[u(0x1d1)][t(0x1c1)], h[u(0x1cf) + u(0x1bb)] = !![], h[u(0x1ce)] = !![], h[u(0x1c0)] = ![], e[u(0x1b6) + 'e'](g[t(0x1c4)], {
            'id': h,
            'status': {
                'type': sequelize_1[u(0x1d1)][t(0x1b1)],
                'defaultValue': g[u(0x1c9)],
                'allowNull': ![]
            },
            'ownerId': {
                'type': sequelize_1[u(0x1d1)][t(0x1c1)],
                'references': {
                    'model': g[t(0x1cd)],
                    'key': 'id'
                },
                'onUpdate': g[u(0x1bc)],
                'onDelete': g[u(0x1af)]
            },
            'createdAt': {
                'type': sequelize_1[t(0x1d1)][t(0x1d3)](0x14a9 + -0x15cc + 0x129),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[t(0x1d1)][u(0x1d3)](-0x2059 + 0x587 * -0x7 + 0x4710),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = s, w = s, e = {};
        e[v(0x1ca)] = v(0x1d0);
        const f = e;
        return d[w(0x1b9)](f[v(0x1ca)]);
    }
};