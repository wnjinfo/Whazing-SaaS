'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0xce)) / (0x31 * -0xd + 0x52 * -0x14 + 0x8e6) * (parseInt(l(0xcd)) / (-0x1 * 0x7c9 + -0x1d * -0x113 + 0x4 * -0x5d7)) + parseInt(l(0xd7)) / (0x1c6f + 0x2 * 0x23b + -0x17 * 0x16e) + -parseInt(m(0xd8)) / (-0x20fb * -0x1 + 0x1a77 + -0x3b6e) + parseInt(l(0xd4)) / (-0x9 * 0x1b8 + -0x1 * -0xb29 + 0x454) * (-parseInt(l(0xda)) / (0x15bf * 0x1 + 0x1 * -0x2459 + 0x60 * 0x27)) + parseInt(m(0xd1)) / (-0x21 * -0xb + 0x1b7 + -0x31b) + parseInt(m(0xc2)) / (-0x1de * -0xd + 0x74c + 0x1 * -0x1f8a) * (parseInt(m(0xc5)) / (0x9a * 0x2 + 0x3 * -0x20d + 0x4fc)) + -parseInt(m(0xc8)) / (-0x4 * -0x35f + 0x1871 + -0x25e3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x38e7 * 0x1d + -0x4e332 + 0xea092));
const k = {};
function a() {
    const t = [
        'UUID',
        'Sequelize',
        '20TKBLjH',
        '19961jTCHOG',
        'pQxou',
        'DataTypes',
        '2823170VrURbv',
        'erty',
        '_uuid()',
        '70dMRNRj',
        '__esModule',
        'ApiMessage',
        '139026jqxSSu',
        '281548fHCrYx',
        'defineProp',
        '40398UuAURk',
        'changeColu',
        'gen_random',
        'HIBwv',
        'literal',
        '2997928MzPzrp',
        'UlXAg',
        'value',
        '9FlHjRW',
        'kYsEA',
        'sequelize',
        '2442730gCezzl',
        'all',
        'exports'
    ];
    a = function () {
        return t;
    };
    return a();
}
k[n(0xc4)] = !![], Object[n(0xd9) + o(0xd2)](exports, n(0xd5), k);
const sequelize_1 = require(n(0xc7));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1b * -0x1 + 0xbf2 + -0x1 * 0xb19);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[n(0xca)] = {
    'up': d => {
        const p = o, q = n, e = {};
        e[p(0xc3)] = q(0xd6) + 's', e[q(0xc6)] = p(0xbf) + p(0xd3);
        const f = e;
        return Promise[q(0xc9)]([d[q(0xbe) + 'mn'](f[q(0xc3)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[p(0xd0)][p(0xcb)],
                'defaultValue': sequelize_1[q(0xcc)][q(0xc1)](f[q(0xc6)])
            })]);
    },
    'down': d => {
        const r = o, s = n, e = {};
        e[r(0xc0)] = s(0xd6) + 's', e[s(0xcf)] = r(0xbf) + r(0xd3);
        const f = e;
        return Promise[r(0xc9)]([d[r(0xbe) + 'mn'](f[r(0xc0)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[r(0xd0)][r(0xcb)],
                'defaultValue': sequelize_1[r(0xcc)][s(0xc1)](f[s(0xcf)])
            })]);
    }
};