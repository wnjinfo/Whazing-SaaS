'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x100f + 0x41 * -0xd + -0x6b * 0x1d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = b, l = b;
function a() {
    const q = [
        'Messages',
        'DataTypes',
        'erty',
        '50nUDolB',
        '2398744qAsHsx',
        'zOvGG',
        'Gqbtx',
        'sequelize',
        'STRING',
        'quotedMsgI',
        'removeColu',
        'exports',
        'EBIjl',
        '178ZRfJNY',
        'CASCADE',
        'FBSDv',
        'addColumn',
        '5YdNdMf',
        '4935168eOeTVW',
        'defineProp',
        'TwWLA',
        'dutPY',
        '5171572BHlnAM',
        '4523oThYEa',
        'value',
        '206919rWqoOx',
        '131013tXbDLE',
        '5739216cFMCdy',
        'SET\x20NULL',
        '__esModule'
    ];
    a = function () {
        return q;
    };
    return a();
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0xb7)) / (0x1 * 0x13b6 + -0x3 * 0xc86 + -0x11 * -0x10d) * (-parseInt(i(0xad)) / (-0x1c * 0x26 + -0x26b8 + 0x2ae2)) + parseInt(i(0xba)) / (-0x2315 * 0x1 + 0x14ba + -0x6 * -0x265) + parseInt(j(0xa4)) / (0x1069 * -0x1 + 0xe6 + 0x109 * 0xf) * (parseInt(i(0xb1)) / (-0x10ce + -0x45c * -0x1 + -0x1 * -0xc77)) + -parseInt(i(0xbb)) / (-0x2a7 * 0x5 + 0x49d + -0x22b * -0x4) + parseInt(i(0xb6)) / (0x25d0 + -0xd51 + 0x9 * -0x2b8) + parseInt(i(0xb2)) / (-0x74 * -0x46 + 0x1 * 0x7b5 + 0x5 * -0x7e1) + parseInt(i(0xb9)) / (-0x1d17 + -0x1142 + -0x2 * -0x1731) * (-parseInt(i(0xa3)) / (0x2 * 0xfb3 + -0x1459 + -0xb03));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0xe10c7 + -0x802bc + -0x3e99 * -0x8));
const g = {};
g[k(0xb8)] = !![], Object[k(0xb3) + k(0xc0)](exports, l(0xbd), g);
const sequelize_1 = require(l(0xa7));
module[l(0xab)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0xaf)] = m(0xbe), e[m(0xa5)] = m(0xa9) + 'd', e[m(0xa6)] = n(0xae), e[m(0xac)] = n(0xbc);
        const f = e;
        return d[n(0xb0)](f[m(0xaf)], f[n(0xa5)], {
            'type': sequelize_1[n(0xbf)][m(0xa8)],
            'references': {
                'model': f[m(0xaf)],
                'key': 'id'
            },
            'onUpdate': f[n(0xa6)],
            'onDelete': f[m(0xac)]
        });
    },
    'down': d => {
        const o = l, p = l, e = {};
        e[o(0xb4)] = p(0xbe), e[p(0xb5)] = o(0xa9) + 'd';
        const f = e;
        return d[o(0xaa) + 'mn'](f[o(0xb4)], f[o(0xb5)]);
    }
};