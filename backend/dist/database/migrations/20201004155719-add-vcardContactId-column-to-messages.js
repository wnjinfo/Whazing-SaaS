'use strict';
const k = b, l = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x12 * 0x21e + -0x1ad * 0x16 + 0x25c4 * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0xad)) / (0x1 * -0x2303 + 0x2 * -0x416 + 0x2b3 * 0x10) * (parseInt(j(0x99)) / (-0x19b6 + 0x18f * -0x13 + 0x3755)) + parseInt(i(0x97)) / (-0x1168 + 0x1 * 0x703 + 0xa68) + parseInt(i(0xab)) / (-0x354 + 0xde + 0x1 * 0x27a) + -parseInt(i(0xa7)) / (-0x199c + 0x5 * -0x214 + 0x2405) * (parseInt(i(0x96)) / (-0x891 + -0x22c * 0xc + 0x3 * 0xb8d)) + parseInt(j(0xac)) / (0x2fa * 0x1 + -0x1a0f * -0x1 + 0xe81 * -0x2) + parseInt(i(0xa5)) / (0x1211 + 0x292 * 0x4 + 0x293 * -0xb) * (-parseInt(j(0x9e)) / (-0x26cb * 0x1 + -0xe2c + 0x3500 * 0x1)) + parseInt(i(0xa3)) / (0x7 * -0x97 + 0x382 + 0x1 * 0xa9) * (parseInt(j(0xa9)) / (0x2 * -0x1a3 + -0x2204 * 0x1 + 0x2555));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x5b6f9 + 0x1 * 0x4d4a1 + 0xfabba * 0x1));
function a() {
    const q = [
        'INTEGER',
        'sequelize',
        '18HwMrWk',
        '2374686JRUqtY',
        'Messages',
        '22EaBkPf',
        'YVJek',
        'addColumn',
        'ctId',
        'removeColu',
        '4719069RfdzGj',
        'exports',
        'value',
        'erty',
        'mZmMJ',
        '11540AeipBs',
        'aaBSI',
        '16KeGJoR',
        'gNIAl',
        '1411105rJGuRt',
        'CASCADE',
        '7645FbcMbG',
        'defineProp',
        '3128276VCTUrk',
        '9761451rRsHPU',
        '82341HPfWrb',
        'Contacts',
        'qakcL',
        '__esModule',
        'vcardConta',
        'DataTypes',
        'DbOXS'
    ];
    a = function () {
        return q;
    };
    return a();
}
const g = {};
g[k(0xa0)] = !![], Object[k(0xaa) + k(0xa1)](exports, k(0x90), g);
const sequelize_1 = require(l(0x95));
module[k(0x9f)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0xa4)] = n(0x98), e[n(0xa2)] = m(0x91) + m(0x9c), e[m(0xa6)] = m(0x8e), e[m(0x93)] = m(0xa8);
        const f = e;
        return d[m(0x9b)](f[n(0xa4)], f[m(0xa2)], {
            'type': sequelize_1[n(0x92)][n(0x94)],
            'references': {
                'model': f[n(0xa6)],
                'key': 'id'
            },
            'onUpdate': f[n(0x93)],
            'onDelete': f[m(0x93)]
        });
    },
    'down': d => {
        const o = k, p = l, e = {};
        e[o(0x9a)] = p(0x98), e[p(0x8f)] = p(0x91) + p(0x9c);
        const f = e;
        return d[o(0x9d) + 'mn'](f[p(0x9a)], f[p(0x8f)]);
    }
};