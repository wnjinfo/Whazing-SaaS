'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0xa9)) / (-0x1aaa + -0x1d * -0x6 + 0x19fd * 0x1) * (parseInt(i(0xb3)) / (-0x1f3 * 0xb + 0x1a60 + 0xd * -0x61)) + parseInt(i(0xa4)) / (-0x1 * 0x1319 + 0x1 * -0x19d + 0x14b9) * (-parseInt(j(0xab)) / (0x4d1 * -0x2 + -0x1 * 0x1fc5 + -0x17 * -0x1cd)) + -parseInt(j(0x9d)) / (0x1251 + 0xb31 * 0x1 + -0x1 * 0x1d7d) + -parseInt(j(0xb1)) / (0xa3d + -0x92a + -0x10d) + -parseInt(j(0xaa)) / (-0x26a2 + -0xc54 + 0x32fd * 0x1) * (parseInt(i(0xa1)) / (0x19 * -0x125 + -0x9d5 + -0x7b2 * -0x5)) + -parseInt(j(0xae)) / (-0x1beb + -0x1 * -0x1615 + 0x5df) * (-parseInt(j(0x99)) / (0x17e3 + 0x43 * 0x7b + -0x380a)) + parseInt(i(0xac)) / (0x458 * 0x3 + -0x145d + 0x760);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1cd2c * 0x6 + -0xa9 * -0xfb1 + -0xfb00b));
const g = {};
g[k(0x97)] = !![], Object[k(0x95) + k(0xaf)](exports, l(0xa8), g);
const sequelize_1 = require(l(0xb4));
function a() {
    const q = [
        'SET\x20NULL',
        '__esModule',
        '8YqBwhe',
        '7KRDHws',
        '9352vIxHyR',
        '5874715kHuVHy',
        'WIFVH',
        '9ypipGj',
        'erty',
        'Tickets',
        '595782GZAfTe',
        'DataTypes',
        '110794CECxzl',
        'sequelize',
        'exports',
        'INTEGER',
        'oldStepAut',
        'defineProp',
        'CASCADE',
        'value',
        'YCxFZ',
        '5511090pPujcD',
        'all',
        'oReplyId',
        'TEGVN',
        '378855vyIRGG',
        'FPEXf',
        'rcCXY',
        'StepsReply',
        '2472976hnFBEI',
        'addColumn',
        'removeColu',
        '879ulDSEq',
        'ZBHPz',
        'mCLtz'
    ];
    a = function () {
        return q;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x73b * 0x1 + -0x68e * -0x5 + 0x2a1 * -0xf);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[k(0x92)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0xa5)] = m(0xb0), e[m(0xad)] = m(0x94) + n(0x9b);
        const f = e;
        return Promise[m(0x9a)]([d[n(0xa3) + 'mn'](f[m(0xa5)], f[m(0xad)])]);
    },
    'down': d => {
        const o = l, p = l, e = {};
        e[o(0x9e)] = p(0xb0), e[o(0x9f)] = o(0x94) + p(0x9b), e[o(0xa6)] = o(0xa0), e[o(0x9c)] = o(0x96), e[o(0x98)] = p(0xa7);
        const f = e;
        return d[p(0xa2)](f[p(0x9e)], f[o(0x9f)], {
            'type': sequelize_1[o(0xb2)][p(0x93)],
            'references': {
                'model': f[p(0xa6)],
                'key': 'id'
            },
            'onUpdate': f[o(0x9c)],
            'onDelete': f[o(0x98)],
            'allowNull': !![],
            'defaultValue': null
        });
    }
};