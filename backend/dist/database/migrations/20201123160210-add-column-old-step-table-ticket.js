'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x3dd * 0x8 + 0xf * 0x7a + 0x196b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(j(0x1bc)) / (0x128c + -0x1f * -0x115 + -0x76 * 0x71) + parseInt(k(0x1b5)) / (-0x1211 + -0x17b8 + 0x29cb) * (parseInt(k(0x1b8)) / (0x405 + 0x11f9 + -0x15fb)) + parseInt(j(0x1cb)) / (0x1fe0 + -0x1957 + -0x685) + parseInt(k(0x1ad)) / (0x2244 + 0x1893 + 0x1d69 * -0x2) * (parseInt(j(0x1ac)) / (-0xc4 * 0x32 + -0x2387 + 0x49d5)) + parseInt(j(0x1c3)) / (0x1 * -0x186e + -0x124d + 0x2ac2) * (parseInt(j(0x1b2)) / (0x1e76 + 0x26ee + -0x455c)) + parseInt(j(0x1b3)) / (0x5b * -0x4e + 0x54c + 0x1677) + -parseInt(k(0x1c8)) / (-0x2 * -0xe4b + 0x247c + -0x8 * 0x821) * (parseInt(k(0x1aa)) / (0x1d30 + 0x2061 + 0x8ca * -0x7));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2224c + 0x28d81 * -0x5 + -0x2aecf * -0x9));
function a() {
    const r = [
        'sequelize',
        'value',
        'INTEGER',
        'SET\x20NULL',
        '7801736EAQRxL',
        '7383870uKospV',
        'exports',
        '23204IfriTO',
        'YlCVl',
        'oXfFu',
        '33iOYVaL',
        'DataTypes',
        '__esModule',
        'oldStepAut',
        '986383VjCoul',
        'removeColu',
        'erty',
        'VFPUD',
        'defineProp',
        'all',
        'StepsReply',
        '7PObult',
        'aYhrn',
        'oReplyId',
        'sqpPv',
        'CASCADE',
        '10438130NUsfhg',
        'bpjkY',
        'addColumn',
        '1312144TMlXwn',
        'KYeKk',
        '11cFvURk',
        'Tickets',
        '6yBHomW',
        '1924805ibAwhx'
    ];
    a = function () {
        return r;
    };
    return a();
}
const i = {};
i[l(0x1af)] = !![], Object[l(0x1c0) + l(0x1be)](exports, m(0x1ba), i);
const sequelize_1 = require(l(0x1ae));
module[m(0x1b4)] = {
    'up': d => {
        const n = m, o = m, e = {};
        e[n(0x1b7)] = o(0x1ab), e[n(0x1c6)] = n(0x1bb) + n(0x1c5), e[o(0x1b6)] = o(0x1c2), e[n(0x1bf)] = o(0x1c7), e[o(0x1c4)] = n(0x1b1);
        const f = e;
        return Promise[n(0x1c1)]([d[o(0x1ca)](f[o(0x1b7)], f[o(0x1c6)], {
                'type': sequelize_1[o(0x1b9)][o(0x1b0)],
                'references': {
                    'model': f[o(0x1b6)],
                    'key': 'id'
                },
                'onUpdate': f[n(0x1bf)],
                'onDelete': f[n(0x1c4)],
                'allowNull': !![],
                'defaultValue': null
            })]);
    },
    'down': d => {
        const p = m, q = m, e = {};
        e[p(0x1a9)] = q(0x1ab), e[q(0x1c9)] = p(0x1bb) + p(0x1c5);
        const f = e;
        return d[q(0x1bd) + 'mn'](f[p(0x1a9)], f[p(0x1c9)]);
    }
};