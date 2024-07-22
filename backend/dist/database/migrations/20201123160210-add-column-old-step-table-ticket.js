'use strict';
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(j(0xd3)) / (0x12d * 0xe + -0x22dd * -0x1 + 0x2 * -0x19a9) + parseInt(j(0xb8)) / (0x1cda + 0x137 * -0x13 + -0x19 * 0x3b) + parseInt(k(0xd4)) / (0x1 * 0x1c8b + 0x505 + -0x218d) + -parseInt(k(0xc8)) / (0x1655 + 0x17 * 0x10f + -0x2eaa) * (parseInt(k(0xc4)) / (-0xa8 * 0x24 + -0x41e * -0x7 + -0x52d)) + -parseInt(k(0xbe)) / (-0x1839 + 0x17e3 + 0x4 * 0x17) + parseInt(k(0xbd)) / (-0x14e6 + -0x1b * 0xf4 + 0x2ea9) + parseInt(j(0xc1)) / (-0x1f * 0x107 + 0x1c7e + 0x363) * (parseInt(j(0xd0)) / (-0xa0 * 0x1d + 0x61f * 0x5 + 0x1b * -0x76));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xe124f * 0x1 + 0xd5317 + 0x5 * -0x3d1b7));
const i = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x8 * -0x386 + -0x1c68 * 0x1 + 0x394d);
        let h = e[f];
        return h;
    }, b(c, d);
}
i[l(0xc0)] = !![], Object[m(0xcf) + l(0xc2)](exports, l(0xbc), i);
const sequelize_1 = require(l(0xc7));
function a() {
    const r = [
        'iOTII',
        'SET\x20NULL',
        'defineProp',
        '499581SGdbIR',
        'removeColu',
        'Tickets',
        '815913dhoyiW',
        '549648oEijCC',
        'TeuMP',
        'exports',
        'StepsReply',
        'CASCADE',
        '1559786btXTtT',
        'INTEGER',
        'DataTypes',
        'oVVnl',
        '__esModule',
        '1502284PMHtML',
        '2781624TeIiEj',
        'oReplyId',
        'value',
        '128YSbKyP',
        'erty',
        'cseDw',
        '5eRyNjK',
        'XecOn',
        'oldStepAut',
        'sequelize',
        '969572yxjRWL',
        'all',
        'addColumn',
        'ehRly',
        'bBNau'
    ];
    a = function () {
        return r;
    };
    return a();
}
module[l(0xb5)] = {
    'up': d => {
        const n = l, o = l, e = {};
        e[n(0xc5)] = o(0xd2), e[o(0xcb)] = n(0xc6) + o(0xbf), e[o(0xc3)] = o(0xb6), e[o(0xd5)] = n(0xb7), e[o(0xbb)] = o(0xce);
        const f = e;
        return Promise[o(0xc9)]([d[o(0xca)](f[n(0xc5)], f[o(0xcb)], {
                'type': sequelize_1[n(0xba)][n(0xb9)],
                'references': {
                    'model': f[o(0xc3)],
                    'key': 'id'
                },
                'onUpdate': f[n(0xd5)],
                'onDelete': f[n(0xbb)],
                'allowNull': !![],
                'defaultValue': null
            })]);
    },
    'down': d => {
        const p = l, q = l, e = {};
        e[p(0xcd)] = p(0xd2), e[p(0xcc)] = p(0xc6) + p(0xbf);
        const f = e;
        return d[p(0xd1) + 'mn'](f[p(0xcd)], f[p(0xcc)]);
    }
};