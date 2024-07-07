'use strict';
function a() {
    const t = [
        '4704136jQEQDq',
        'literal',
        'DataTypes',
        'UUID',
        'sequelize',
        'defineProp',
        'all',
        '__esModule',
        '14908nkeKKm',
        'gen_random',
        '_uuid()',
        'WSUQP',
        'NFpMT',
        '96912bRBldD',
        '566882SVLJCF',
        'ApiMessage',
        'erty',
        'exports',
        'changeColu',
        'value',
        '1183356QqroEG',
        '343000DCwJDv',
        'phIRA',
        'Sequelize',
        '1090TBbMqU',
        '9VcAoGv',
        'sOFzV',
        '5464613rPiovN'
    ];
    a = function () {
        return t;
    };
    return a();
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x101)) / (0x9 * -0x2aa + -0x1198 + -0x16f * -0x1d) + -parseInt(l(0xfa)) / (0x1793 + -0x7 * 0x52c + 0xca3) * (-parseInt(m(0x105)) / (-0x218 * -0x12 + -0x5a2 + -0x200b)) + parseInt(m(0x110)) / (0x206e + 0x145b + -0x34c5) * (-parseInt(m(0x104)) / (0xd20 + 0x1 * 0x51a + 0x1235 * -0x1)) + -parseInt(m(0xf9)) / (-0x3 * -0x2c0 + 0x1ea4 + -0x26de) + parseInt(l(0x107)) / (-0x2265 + -0x12eb + 0x3557) + -parseInt(l(0x108)) / (-0x21fa * 0x1 + 0x1 * 0x607 + -0xf7 * -0x1d) + -parseInt(l(0x100)) / (0x1a5 * 0x1 + 0xbc * -0x10 + 0xa24);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3a78f + 0xb63d5 + 0x13cd3 * -0x1));
const k = {};
k[n(0xff)] = !![], Object[o(0x10d) + n(0xfc)](exports, n(0x10f), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xb9a + 0x59e * 0x3 + 0x23 * -0xc9);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(n(0x10c));
module[n(0xfd)] = {
    'up': d => {
        const p = o, q = n, e = {};
        e[p(0x114)] = q(0xfb) + 's', e[q(0x102)] = p(0x111) + q(0x112);
        const f = e;
        return Promise[q(0x10e)]([d[q(0xfe) + 'mn'](f[p(0x114)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[p(0x10a)][p(0x10b)],
                'defaultValue': sequelize_1[p(0x103)][q(0x109)](f[q(0x102)])
            })]);
    },
    'down': d => {
        const r = n, s = o, e = {};
        e[r(0x113)] = r(0xfb) + 's', e[r(0x106)] = s(0x111) + s(0x112);
        const f = e;
        return Promise[s(0x10e)]([d[r(0xfe) + 'mn'](f[r(0x113)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[s(0x10a)][r(0x10b)],
                'defaultValue': sequelize_1[s(0x103)][r(0x109)](f[s(0x106)])
            })]);
    }
};