'use strict';
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(j(0xf3)) / (-0x655 * 0x2 + 0x26af + -0x1a04) + parseInt(j(0xe6)) / (-0x2d5 + -0xf6 * -0x1a + -0x1 * 0x1625) + parseInt(j(0xed)) / (-0x156c + 0x2160 + -0xbf1) + parseInt(j(0xfc)) / (0x2018 + -0x1127 * 0x1 + -0xeed) * (-parseInt(j(0xef)) / (-0x1216 * 0x2 + 0x1 * -0x1abb + -0xfbb * -0x4)) + parseInt(j(0xe2)) / (-0x8 * 0x346 + -0x7e4 + 0x221a) * (parseInt(j(0xee)) / (-0x1001 + 0x1c56 + 0x7e * -0x19)) + -parseInt(j(0xe7)) / (-0x26c1 * 0x1 + 0x268d + 0x5 * 0xc) * (-parseInt(j(0xf0)) / (-0x4b * 0x7a + 0x203 * -0x5 + -0x16eb * -0x2)) + -parseInt(j(0xeb)) / (-0xf * -0x185 + 0x1f6 * -0x12 + 0xc8b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1d0 * 0xbb + -0x37320 + -0x60f5e * -0x2));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x167b + -0xf70 + 0x26cd);
        let h = e[f];
        return h;
    }, b(c, d);
}
const i = {};
i[l(0xfb)] = !![], Object[l(0xe4) + l(0xf7)](exports, l(0xf8), i);
const sequelize_1 = require(l(0xea));
function a() {
    const r = [
        'exports',
        'status',
        '25288zuLcgR',
        'ynVTi',
        'qTtBp',
        'DataTypes',
        'erty',
        '__esModule',
        'removeColu',
        'all',
        'value',
        '11540uVQUKf',
        'Users',
        'Vdkdh',
        '238038COyDyx',
        'SekjE',
        'defineProp',
        'jwJhj',
        '1494510RlparO',
        '56YlYCNF',
        'STRING',
        'addColumn',
        'sequelize',
        '15168160LFpUHV',
        'offline',
        '1321455DlmJXo',
        '98MHSpWC',
        '165QJWxbf',
        '482913uxeAfI'
    ];
    a = function () {
        return r;
    };
    return a();
}
module[l(0xf1)] = {
    'up': d => {
        const n = l, o = l, e = {};
        e[n(0xf4)] = o(0xfd), e[n(0xfe)] = o(0xf2), e[o(0xe5)] = o(0xec);
        const f = e;
        return Promise[o(0xfa)]([d[n(0xe9)](f[o(0xf4)], f[n(0xfe)], {
                'type': sequelize_1[o(0xf6)][n(0xe8)],
                'allowNull': ![],
                'defaultValue': f[n(0xe5)]
            })]);
    },
    'down': d => {
        const p = m, q = l, e = {};
        e[p(0xf5)] = p(0xfd), e[p(0xe3)] = p(0xf2);
        const f = e;
        return Promise[p(0xfa)]([d[q(0xf9) + 'mn'](f[p(0xf5)], f[q(0xe3)])]);
    }
};