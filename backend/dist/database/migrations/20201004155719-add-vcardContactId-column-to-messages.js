'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x1e2)) / (0xf * 0x4 + -0x1936 + 0x18fb) + parseInt(j(0x1eb)) / (0xa7a + 0x7 * -0x4f5 + 0x183b) + -parseInt(j(0x1df)) / (-0xf9e + -0x1740 + 0x26e1) + -parseInt(i(0x1e9)) / (-0xc30 + -0x22de + 0x2f12) * (-parseInt(i(0x1f4)) / (-0x7 * -0x1e1 + -0x2601 + -0x1 * -0x18df)) + parseInt(i(0x1e0)) / (0xe * 0xe8 + -0xdb * -0x29 + -0x2fbd) + parseInt(j(0x1d8)) / (-0x4 * 0x4f7 + -0x9d9 * 0x1 + -0xb * -0x2b4) * (-parseInt(i(0x1f1)) / (-0x2333 + -0x1e55 + 0x4190)) + -parseInt(j(0x1dc)) / (0x619 * 0x1 + -0x22b0 + 0x1ca0);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6e640 + -0x3ebed + -0x1 * -0x1dce1));
function a() {
    const q = [
        '5656abtYWd',
        'CASCADE',
        'sequelize',
        '10yvwjAG',
        'Messages',
        '5558VfcNlu',
        'removeColu',
        'wiUGQ',
        'fYgAw',
        '5141673uMtqPy',
        'value',
        'xdkVo',
        '26499NSqffr',
        '2581878gAoWlM',
        'wUUWd',
        '483564UssmPN',
        'addColumn',
        'pNLzh',
        'defineProp',
        'INTEGER',
        'vcardConta',
        'DataTypes',
        '239896DireeA',
        'ctId',
        '849798ApgrLM',
        'TXxmZ',
        'Contacts',
        'exports',
        '__esModule',
        'erty'
    ];
    a = function () {
        return q;
    };
    return a();
}
const g = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x47b * -0x7 + -0x23e9 + 0x663);
        let h = e[f];
        return h;
    }, b(c, d);
}
g[k(0x1dd)] = !![], Object[k(0x1e5) + l(0x1f0)](exports, k(0x1ef), g);
const sequelize_1 = require(k(0x1f3));
module[k(0x1ee)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x1e1)] = n(0x1d7), e[m(0x1da)] = m(0x1e7) + m(0x1ea), e[m(0x1db)] = n(0x1ed), e[n(0x1e4)] = m(0x1f2);
        const f = e;
        return d[m(0x1e3)](f[n(0x1e1)], f[n(0x1da)], {
            'type': sequelize_1[m(0x1e8)][n(0x1e6)],
            'references': {
                'model': f[m(0x1db)],
                'key': 'id'
            },
            'onUpdate': f[n(0x1e4)],
            'onDelete': f[m(0x1e4)]
        });
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0x1de)] = p(0x1d7), e[o(0x1ec)] = p(0x1e7) + p(0x1ea);
        const f = e;
        return d[o(0x1d9) + 'mn'](f[o(0x1de)], f[p(0x1ec)]);
    }
};