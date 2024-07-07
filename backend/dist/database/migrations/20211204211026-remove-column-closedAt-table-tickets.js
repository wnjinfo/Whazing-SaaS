'use strict';
const l = b, m = b;
function a() {
    const r = [
        '280134zEshpm',
        'DATE',
        'tDnQP',
        'removeColu',
        '7jNHuax',
        'erty',
        '177wiNyxP',
        'DataTypes',
        'addColumn',
        '771460eHgXKg',
        '8190070ELDTfj',
        'defineProp',
        'sequelize',
        'Tickets',
        '703720HgnWZC',
        'EZJyP',
        'closedAt',
        '1865226ahDSkO',
        'XMDLE',
        '5476DOgTco',
        'all',
        'wgGZk',
        '20LBejUL',
        '__esModule',
        'exports',
        '10110528UvuKUo',
        'value'
    ];
    a = function () {
        return r;
    };
    return a();
}
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(j(0x1b5)) / (-0x2 * 0xe04 + -0x384 + -0x29 * -0xc5) + -parseInt(j(0x1be)) / (-0xc * 0x28b + -0x1 * -0x751 + -0xd * -0x1c9) + -parseInt(j(0x1bb)) / (0x1b68 + 0x2ff * -0x9 + -0xb * 0xa) * (-parseInt(j(0x1c8)) / (-0xced + 0x2 * -0x212 + -0x1 * -0x1115)) + -parseInt(j(0x1cb)) / (-0x231b + 0x3 * 0xca9 + -0x2db) * (-parseInt(k(0x1c6)) / (-0xaec + -0x2073 * 0x1 + -0x1e3 * -0x17)) + parseInt(j(0x1b9)) / (-0xedd + 0x10 * 0xac + 0x424) * (-parseInt(k(0x1c3)) / (0x1a72 + 0x616 + 0x10 * -0x208)) + -parseInt(j(0x1b3)) / (-0x25a6 + -0x1f5f + -0x2 * -0x2287) + parseInt(k(0x1bf)) / (-0xd6d * 0x1 + 0x69 * 0x43 + 0x3 * -0x4ac);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2 * -0x3dae7 + 0x1a421 + 0x341d6));
const i = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1227 + 0x1f2 + 0x7 * -0x2a1);
        let h = e[f];
        return h;
    }, b(c, d);
}
i[l(0x1b4)] = !![], Object[m(0x1c0) + m(0x1ba)](exports, l(0x1cc), i);
const sequelize_1 = require(m(0x1c1));
module[l(0x1b2)] = {
    'up': d => {
        const n = m, o = l, e = {};
        e[n(0x1c4)] = n(0x1c2), e[n(0x1ca)] = o(0x1c5);
        const f = e;
        return Promise[n(0x1c9)]([d[n(0x1b8) + 'mn'](f[o(0x1c4)], f[o(0x1ca)])]);
    },
    'down': d => {
        const p = m, q = m, e = {};
        e[p(0x1c7)] = q(0x1c2), e[p(0x1b7)] = p(0x1c5);
        const f = e;
        return Promise[p(0x1c9)]([d[q(0x1bd)](f[p(0x1c7)], f[q(0x1b7)], {
                'type': sequelize_1[q(0x1bc)][p(0x1b6)](),
                'allowNull': !![],
                'defaultValue': null
            })]);
    }
};