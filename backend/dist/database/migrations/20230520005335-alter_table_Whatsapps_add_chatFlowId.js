'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x1bd)) / (-0xcc8 + -0x3 * -0x6af + -0x744) * (-parseInt(i(0x1cf)) / (0xc10 + 0xc7 * 0x11 + -0x1945)) + -parseInt(i(0x1c4)) / (-0x1d48 + 0x8c + 0x21 * 0xdf) + -parseInt(j(0x1d0)) / (0xbaf + 0xa + -0x1 * 0xbb5) * (parseInt(j(0x1b7)) / (0x5ba * 0x5 + 0x185 * -0xe + -0x757)) + -parseInt(i(0x1bb)) / (0x3 * 0x50b + 0x26cc + -0x35e7) * (parseInt(j(0x1b5)) / (-0x1e4e + 0x1608 + -0x55 * -0x19)) + -parseInt(j(0x1ce)) / (0xcb6 + -0x1 * -0x5cf + -0x127d) * (parseInt(j(0x1c5)) / (-0x24ba + 0x3 * 0x20e + -0x7 * -0x45f)) + parseInt(j(0x1cd)) / (-0xad * -0x1d + 0x2 * -0xe89 + 0x983) * (-parseInt(j(0x1b1)) / (-0x247c + -0xdbc * 0x1 + 0x3243)) + -parseInt(i(0x1b3)) / (-0x1770 + -0x490 + 0x1c0c) * (-parseInt(j(0x1c6)) / (-0xe5f + 0x1899 + -0xa2d * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x45af9 + 0x155 * -0x391 + 0x59112));
const g = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1a8d + 0x1cab + 0x1 * -0x3589);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const q = [
        'xpwOm',
        'chatFlowId',
        '1291617FXZcwH',
        '91737HOugZe',
        '13LvqTmF',
        '__esModule',
        'removeColu',
        'XezfN',
        'INTEGER',
        'DataTypes',
        'Whatsapps',
        '10zWJPUv',
        '312SjhZkr',
        '2716fscEhk',
        '2702652FpEFwQ',
        'defineProp',
        'SET\x20NULL',
        'CASCADE',
        '5415069aTcwnj',
        'pxxPE',
        '26144064dgFESm',
        'jDNHI',
        '28TUrHik',
        'ChatFlow',
        '5dAvrJN',
        'value',
        'dONrp',
        'erty',
        '89502kVPmqa',
        'yPKSj',
        '159LPsxUQ',
        'exports',
        'addColumn',
        'xQoDD',
        'sequelize'
    ];
    a = function () {
        return q;
    };
    return a();
}
g[k(0x1b8)] = !![], Object[k(0x1d1) + k(0x1ba)](exports, l(0x1c7), g);
const sequelize_1 = require(l(0x1c1));
module[l(0x1be)] = {
    'up': d => {
        const m = l, n = l, e = {};
        e[m(0x1b4)] = m(0x1cc), e[m(0x1bc)] = n(0x1c3), e[m(0x1b2)] = m(0x1b6), e[n(0x1c2)] = n(0x1b0), e[m(0x1c0)] = m(0x1af);
        const f = e;
        return d[n(0x1bf)](f[m(0x1b4)], f[m(0x1bc)], {
            'type': sequelize_1[n(0x1cb)][n(0x1ca)],
            'references': {
                'model': f[n(0x1b2)],
                'key': 'id'
            },
            'onUpdate': f[n(0x1c2)],
            'onDelete': f[n(0x1c0)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = l, p = l, e = {};
        e[o(0x1c9)] = p(0x1cc), e[o(0x1b9)] = p(0x1c3);
        const f = e;
        return d[o(0x1c8) + 'mn'](f[o(0x1c9)], f[p(0x1b9)]);
    }
};