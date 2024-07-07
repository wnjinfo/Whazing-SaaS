'use strict';
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(j(0xc1)) / (0x1 * -0x5a3 + 0x2208 + -0x1c64) + -parseInt(j(0xd1)) / (-0x16af * -0x1 + 0x37 * -0xb + -0x1450) + -parseInt(j(0xbb)) / (0x1 * 0x21b5 + -0x17c7 + 0x1 * -0x9eb) + -parseInt(k(0xbd)) / (0x11c5 * -0x1 + 0x18e * -0xd + 0x25ff) + parseInt(j(0xc5)) / (-0x91 * -0xa + -0x1 * 0xeb3 + 0x90e) * (parseInt(j(0xcf)) / (-0x2 * 0x11e1 + 0x143f + -0x29 * -0x61)) + parseInt(j(0xb7)) / (0x1 * -0x1f27 + -0x791 + 0x1 * 0x26bf) * (-parseInt(k(0xce)) / (-0x1a82 + -0x1e * -0xca + 0x2de)) + -parseInt(k(0xc0)) / (0x139d + -0xd99 + -0x5fb) * (-parseInt(k(0xc9)) / (0x373 * 0x7 + -0x4f6 + -0x1325));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3d9df * -0x2 + 0x12b915 + -0x2 * -0x6511));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x24ac + 0xe51 * 0x1 + 0x1712);
        let h = e[f];
        return h;
    }, b(c, d);
}
const i = {};
function a() {
    const r = [
        'STRING',
        '8716110yfrdil',
        'sequelize',
        'exports',
        'addColumn',
        '__esModule',
        '9668072lKqDng',
        '9286932VvlbhC',
        'Users',
        '1152400fSYTdS',
        'value',
        'RfXGf',
        '7EgGeXq',
        'status',
        'Hcltt',
        'DataTypes',
        '3202857uiLmsD',
        'defineProp',
        '1049632nLRreC',
        'removeColu',
        'all',
        '27JdbkzI',
        '273910EmDvST',
        'SNmdf',
        'erty',
        'kFGRS',
        '5zgsPWh',
        'offline',
        'XRwIN'
    ];
    a = function () {
        return r;
    };
    return a();
}
i[l(0xd2)] = !![], Object[l(0xbc) + m(0xc3)](exports, m(0xcd), i);
const sequelize_1 = require(m(0xca));
module[m(0xcb)] = {
    'up': d => {
        const n = m, o = m, e = {};
        e[n(0xd3)] = o(0xd0), e[n(0xb9)] = n(0xb8), e[o(0xc4)] = o(0xc6);
        const f = e;
        return Promise[o(0xbf)]([d[o(0xcc)](f[o(0xd3)], f[n(0xb9)], {
                'type': sequelize_1[n(0xba)][n(0xc8)],
                'allowNull': ![],
                'defaultValue': f[n(0xc4)]
            })]);
    },
    'down': d => {
        const p = m, q = m, e = {};
        e[p(0xc2)] = p(0xd0), e[q(0xc7)] = p(0xb8);
        const f = e;
        return Promise[p(0xbf)]([d[q(0xbe) + 'mn'](f[p(0xc2)], f[q(0xc7)])]);
    }
};