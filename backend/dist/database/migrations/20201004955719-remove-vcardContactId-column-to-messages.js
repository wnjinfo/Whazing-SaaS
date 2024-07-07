'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x112)) / (0x14eb + -0x1 * 0xd3d + 0x7ad * -0x1) + -parseInt(j(0x11f)) / (-0x21b7 + -0x182c + 0x39e5) * (parseInt(j(0x130)) / (-0x211 * -0x12 + 0x8f5 * 0x4 + -0x4903)) + parseInt(j(0x115)) / (-0xe88 + -0x35f * 0x2 + 0x154a) + -parseInt(j(0x11a)) / (0x1e9f + 0x1 * 0x1ea3 + -0x3d * 0x101) * (-parseInt(i(0x117)) / (-0x1a93 * -0x1 + 0xd4e * -0x1 + -0xd3f * 0x1)) + parseInt(j(0x11b)) / (0xa8d + 0x4 * -0xee + -0xd * 0x86) + -parseInt(j(0x114)) / (-0x2 * -0xb08 + 0x140a + -0x3 * 0xe06) * (-parseInt(i(0x113)) / (0x5 * -0x11d + -0x11dd + 0x1 * 0x1777)) + -parseInt(j(0x116)) / (-0xee8 * -0x1 + 0x6dc + 0x1b * -0xce);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5df83 + 0x28367 + 0xc54c));
const g = {};
function a() {
    const q = [
        '913728jYibuw',
        '655180TLwIev',
        '1746054oETfwH',
        '8sGynSL',
        '705192KQKnNo',
        '9259620GBvqaZ',
        '6fOLkYb',
        'AJksq',
        'xpPDU',
        '548990ylhRCk',
        '6999650DcGwwa',
        'cBBtZ',
        'sequelize',
        '__esModule',
        '4eWGfeH',
        'exports',
        'aZXPc',
        'RgrWC',
        'ctId',
        'INTEGER',
        'addColumn',
        'CASCADE',
        'DataTypes',
        'UkUcR',
        'erty',
        'Contacts',
        'defineProp',
        'vcardConta',
        'removeColu',
        'Messages',
        'value'
    ];
    a = function () {
        return q;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x196f + -0x488 + 0x7 * 0x46f);
        let h = e[f];
        return h;
    }, b(c, d);
}
g[k(0x12f)] = !![], Object[k(0x12b) + l(0x129)](exports, k(0x11e), g);
const sequelize_1 = require(k(0x11d));
module[k(0x120)] = {
    'up': d => {
        const m = l, n = l, e = {};
        e[m(0x119)] = m(0x12e), e[m(0x122)] = n(0x12c) + n(0x123);
        const f = e;
        return d[n(0x12d) + 'mn'](f[n(0x119)], f[n(0x122)]);
    },
    'down': d => {
        const o = l, p = l, e = {};
        e[o(0x121)] = p(0x12e), e[p(0x128)] = o(0x12c) + p(0x123), e[p(0x118)] = o(0x12a), e[p(0x11c)] = o(0x126);
        const f = e;
        return d[p(0x125)](f[p(0x121)], f[p(0x128)], {
            'type': sequelize_1[o(0x127)][p(0x124)],
            'references': {
                'model': f[p(0x118)],
                'key': 'id'
            },
            'onUpdate': f[o(0x11c)],
            'onDelete': f[p(0x11c)]
        });
    }
};