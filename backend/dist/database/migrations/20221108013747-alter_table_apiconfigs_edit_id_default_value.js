'use strict';
const n = b, o = b;
function a() {
    const t = [
        '6pYdkdb',
        '526640gRWlzG',
        '8558316RthcWr',
        'YoPeO',
        'UUID',
        'changeColu',
        '4716450mTwGqb',
        'sequelize',
        '2ByEAwK',
        'literal',
        'gen_random',
        '609767aXtTOt',
        'DataTypes',
        '8nvSPWj',
        '16791552PclhnW',
        '__esModule',
        'ApiConfigs',
        'FHNlt',
        'defineProp',
        'Sequelize',
        'exports',
        'DFQpm',
        '_uuid()',
        'erty',
        '4857787qbKQut',
        'value',
        '6JwfSsu',
        '20CgYFgY',
        'QZuOo',
        '3690967IPknXj',
        '13fmpTpm',
        'all'
    ];
    a = function () {
        return t;
    };
    return a();
}
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0xd7)) / (0x2146 + 0x3 * -0x279 + -0x19da) * (parseInt(m(0xd4)) / (0x1bda * -0x1 + -0x16 * 0x49 + 0x2222)) + -parseInt(m(0xc6)) / (-0x187a + -0xcca + 0x2547) * (parseInt(m(0xcd)) / (-0x153 * 0x7 + -0x1251 * 0x2 + 0x1 * 0x2deb)) + parseInt(m(0xd2)) / (-0xe27 + 0x1 * 0x16ec + -0x8c0) + -parseInt(l(0xcc)) / (-0x62b * -0x1 + -0x1b32 + -0x150d * -0x1) * (-parseInt(m(0xc9)) / (0x25c2 + -0x9 * -0x1e7 + -0x36da)) + parseInt(l(0xd9)) / (-0xa1 * -0x2f + -0x7 * 0x559 + -0x4 * -0x1fa) * (parseInt(m(0xce)) / (-0x1539 * -0x1 + -0x36f + -0x65 * 0x2d)) + parseInt(l(0xc7)) / (-0x2b2 + -0x15 * -0x13d + 0x1745 * -0x1) * (-parseInt(l(0xe4)) / (-0x3 * 0xa67 + -0x2 * 0xfa6 + 0x3e8c)) + -parseInt(m(0xda)) / (-0x259 * 0x2 + -0x7b5 + 0xc73) * (parseInt(l(0xca)) / (0x1c9 * 0x1 + -0x490 + 0x2d4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xcd645 + -0x20be3 + -0x3623e));
const k = {};
k[n(0xc5)] = !![], Object[o(0xde) + o(0xe3)](exports, o(0xdb), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1f91 + 0x1351 + 0xd05 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(o(0xd3));
module[n(0xe0)] = {
    'up': d => {
        const p = n, q = o, e = {};
        e[p(0xcf)] = q(0xdc), e[p(0xc8)] = p(0xd6) + p(0xe2);
        const f = e;
        return Promise[p(0xcb)]([d[q(0xd1) + 'mn'](f[q(0xcf)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[p(0xd8)][p(0xd0)],
                'defaultValue': sequelize_1[q(0xdf)][q(0xd5)](f[p(0xc8)])
            })]);
    },
    'down': d => {
        const r = o, s = o, e = {};
        e[r(0xe1)] = s(0xdc), e[s(0xdd)] = s(0xd6) + r(0xe2);
        const f = e;
        return Promise[s(0xcb)]([d[s(0xd1) + 'mn'](f[s(0xe1)], 'id', {
                'allowNull': ![],
                'primaryKey': !![],
                'type': sequelize_1[r(0xd8)][r(0xd0)],
                'defaultValue': sequelize_1[r(0xdf)][r(0xd5)](f[s(0xdd)])
            })]);
    }
};