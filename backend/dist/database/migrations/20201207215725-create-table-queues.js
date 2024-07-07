'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x203)) / (-0x1 * -0xeb0 + 0x228b + -0x313a) * (parseInt(q(0x1f4)) / (-0x3 * -0x3ed + -0x75 + -0x10 * 0xb5)) + -parseInt(p(0x205)) / (-0x4df + 0x1c04 + -0x2f * 0x7e) + parseInt(p(0x20b)) / (0x49 * 0x6f + -0xb * 0x1a8 + -0xd6b) + parseInt(q(0x1fb)) / (0xf3f + -0x40f + -0xb2b) * (parseInt(p(0x1f7)) / (-0x2581 + -0x3 * 0x66f + 0x1c6a * 0x2)) + -parseInt(p(0x200)) / (0x744 + 0x2 * -0x665 + 0x58d) + parseInt(p(0x1fa)) / (-0x1 * -0x1a5 + -0x1 * 0x1193 + 0x1 * 0xff6) * (-parseInt(q(0x206)) / (-0x76 * 0x1d + 0x1fc3 + -0x125c)) + parseInt(q(0x211)) / (-0x4f8 + -0x26b7 * -0x1 + -0x21b5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x17ad + 0x14ca6 + -0x283d * -0x2));
const o = {};
o[r(0x1ef)] = !![], Object[r(0x209) + r(0x20a)](exports, s(0x204), o);
const sequelize_1 = require(s(0x210));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1886 + -0x17f4 + 0x3268);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const x = [
        'primaryKey',
        'PmRdY',
        '268152MVicBU',
        '11785WzoHwR',
        'ZcaiW',
        'Users',
        'OBeMC',
        'STRING',
        '760396IwJsCn',
        'allowNull',
        'CASCADE',
        '1321nyFpoO',
        '__esModule',
        '513417yQUqnU',
        '9gIrgHN',
        'exports',
        'DataTypes',
        'defineProp',
        'erty',
        '452984BadqLD',
        'dropTable',
        'ktumy',
        'type',
        'autoIncrem',
        'sequelize',
        '3664920AZeAKF',
        'SET\x20NULL',
        'value',
        'createTabl',
        'DATE',
        'SqNyP',
        'ent',
        '254rxxOMz',
        'Queues',
        'INTEGER',
        '288ezSvXI'
    ];
    a = function () {
        return x;
    };
    return a();
}
module[r(0x207)] = {
    'up': f => {
        const t = s, u = r, g = {};
        g[t(0x1f9)] = u(0x1f5), g[t(0x20d)] = u(0x1fd), g[t(0x1f2)] = u(0x202), g[u(0x1fe)] = u(0x1ee);
        const h = g, i = {};
        i[u(0x20e)] = sequelize_1[u(0x208)][u(0x1f6)], i[t(0x1f8)] = !![], i[u(0x20f) + u(0x1f3)] = !![], i[t(0x201)] = ![];
        const j = {};
        return j[u(0x20e)] = sequelize_1[u(0x208)][u(0x1ff)], j[u(0x201)] = ![], f[u(0x1f0) + 'e'](h[t(0x1f9)], {
            'id': i,
            'queue': j,
            'userId': {
                'type': sequelize_1[t(0x208)][t(0x1f6)],
                'references': {
                    'model': h[t(0x20d)],
                    'key': 'id'
                },
                'onUpdate': h[t(0x1f2)],
                'onDelete': h[t(0x1fe)]
            },
            'createdAt': {
                'type': sequelize_1[t(0x208)][t(0x1f1)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[t(0x208)][t(0x1f1)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const v = s, w = s, e = {};
        e[v(0x1fc)] = v(0x1f5);
        const f = e;
        return d[v(0x20c)](f[w(0x1fc)]);
    }
};