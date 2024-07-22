'use strict';
const k = b, l = b;
function a() {
    const q = [
        'DataTypes',
        'fSKKe',
        'exports',
        'HuLdS',
        'aIpCL',
        '1124946PRQwCe',
        'Users',
        '1348056wqzeOU',
        'INTEGER',
        'sequelize',
        '1877830emNJVX',
        '2694804yFOlGA',
        'EQIcz',
        '289701jkiiSF',
        'SET\x20NULL',
        'removeColu',
        'erty',
        'defineProp',
        'Messages',
        'pnHxH',
        'zlOjd',
        '93306fWPiAk',
        'CASCADE',
        'value',
        '7pAydgs',
        'addColumn',
        'userId',
        '__esModule',
        'Fdxod',
        '11472256WKguOE'
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
            const f = -parseInt(i(0x1da)) / (0x19d + 0x1621 * -0x1 + 0x1485) + -parseInt(i(0x1e2)) / (-0x2176 + -0x190b + 0x3a83) + -parseInt(j(0x1f0)) / (-0x3d7 * 0x1 + 0x3 * -0x1dd + 0x971 * 0x1) + parseInt(j(0x1f2)) / (0x1f13 * 0x1 + 0x1c6f + 0x1dbf * -0x2) + -parseInt(j(0x1d7)) / (-0x8 * -0x404 + -0x941 + -0x96 * 0x27) + -parseInt(i(0x1d8)) / (-0x1 * 0xbcf + -0x13c7 + 0x1f9c) * (parseInt(i(0x1e5)) / (0x1 * -0x191 + -0x605 * 0x5 + 0x1fb1)) + parseInt(j(0x1ea)) / (0x1 * 0x9be + -0x1c6d * 0x1 + 0x1 * 0x12b7);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0xc86 * -0x19 + -0x482e6 * -0x1 + 0x4c32));
const g = {};
g[k(0x1e4)] = !![], Object[l(0x1de) + k(0x1dd)](exports, l(0x1e8), g);
const sequelize_1 = require(k(0x1f4));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x19e2 * 0x1 + 0x20ef + 0x3a * -0x17);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[l(0x1ed)] = {
    'up': d => {
        const m = l, n = k, e = {};
        e[m(0x1d9)] = m(0x1df), e[n(0x1e1)] = n(0x1e7), e[n(0x1e9)] = n(0x1f1), e[n(0x1ee)] = n(0x1e3), e[m(0x1ef)] = m(0x1db);
        const f = e;
        return d[m(0x1e6)](f[m(0x1d9)], f[m(0x1e1)], {
            'type': sequelize_1[n(0x1eb)][n(0x1f3)],
            'references': {
                'model': f[m(0x1e9)],
                'key': 'id'
            },
            'onUpdate': f[n(0x1ee)],
            'onDelete': f[n(0x1ef)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = l, p = k, e = {};
        e[o(0x1ec)] = o(0x1df), e[p(0x1e0)] = p(0x1e7);
        const f = e;
        return d[p(0x1dc) + 'mn'](f[p(0x1ec)], f[o(0x1e0)]);
    }
};