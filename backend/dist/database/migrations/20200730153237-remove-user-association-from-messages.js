'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x153)) / (-0x708 + 0x4da * 0x6 + -0x1 * 0x1613) * (-parseInt(i(0x145)) / (0x85 * -0x7 + 0x1a47 + -0x2 * 0xb51)) + -parseInt(j(0x14b)) / (-0xbb7 + 0x1 * 0x16eb + -0x5 * 0x23d) * (-parseInt(j(0x147)) / (-0x2097 + -0x1 * -0x2203 + 0x48 * -0x5)) + parseInt(i(0x14a)) / (0x1 * 0x26ee + 0x2 * 0xb62 + -0x3dad) * (-parseInt(i(0x150)) / (0x80 + 0x1afb + 0x1b75 * -0x1)) + -parseInt(i(0x151)) / (-0x5dd * -0x1 + -0x864 + 0x3 * 0xda) + parseInt(j(0x13c)) / (-0x1 * -0x598 + -0x1a56 + 0x14c6 * 0x1) + -parseInt(j(0x158)) / (0x5ed + -0x20b8 * 0x1 + 0x4 * 0x6b5) + parseInt(i(0x152)) / (0xd8c + 0x223 * -0x4 + -0x27b * 0x2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2682f + -0xa * 0x985f + 0x8bc02));
const g = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x690 + 0x2339 + -0x1 * 0x288f);
        let h = e[f];
        return h;
    }, b(c, d);
}
g[k(0x13d)] = !![], Object[l(0x148) + k(0x141)](exports, l(0x159), g);
const sequelize_1 = require(l(0x14e));
function a() {
    const q = [
        'erMWQ',
        'addColumn',
        '66YGEZrY',
        'UGkRi',
        '16AAyJqZ',
        'defineProp',
        'DataTypes',
        '1573935bkLsxe',
        '208011BFSlVG',
        'rnofG',
        'Users',
        'sequelize',
        'YtfWd',
        '12oXSTll',
        '1355718KeEITz',
        '13786250cFmGiG',
        '753mkSvAC',
        'INTEGER',
        'CASCADE',
        'dthOG',
        'nIocp',
        '4730472NFhDmt',
        '__esModule',
        'userId',
        'Messages',
        '65000JMScPP',
        'value',
        'XtNvQ',
        'removeColu',
        'exports',
        'erty',
        'SET\x20NULL'
    ];
    a = function () {
        return q;
    };
    return a();
}
module[k(0x140)] = {
    'up': d => {
        const m = k, n = k, e = {};
        e[m(0x143)] = n(0x13b), e[m(0x156)] = m(0x13a);
        const f = e;
        return d[m(0x13f) + 'mn'](f[m(0x143)], f[m(0x156)]);
    },
    'down': d => {
        const o = k, p = l, e = {};
        e[o(0x157)] = p(0x13b), e[o(0x146)] = p(0x13a), e[p(0x14c)] = o(0x14d), e[o(0x13e)] = o(0x155), e[o(0x14f)] = p(0x142);
        const f = e;
        return d[o(0x144)](f[p(0x157)], f[o(0x146)], {
            'type': sequelize_1[p(0x149)][p(0x154)],
            'references': {
                'model': f[o(0x14c)],
                'key': 'id'
            },
            'onUpdate': f[o(0x13e)],
            'onDelete': f[o(0x14f)]
        });
    }
};