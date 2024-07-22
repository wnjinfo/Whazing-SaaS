'use strict';
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(j(0x1a6)) / (0x34f * -0x1 + 0xa * 0x29b + 0xb5f * -0x2) + parseInt(j(0x1b9)) / (-0xc * 0x259 + -0x2 * -0x523 + -0x11e8 * -0x1) + -parseInt(j(0x1b5)) / (0x92 * 0x3a + -0xb6d + 0x14 * -0x115) * (parseInt(j(0x1a4)) / (0x1b92 + 0x1 * -0x638 + -0x1556)) + parseInt(j(0x1b3)) / (0x3d * 0x31 + 0x24c5 + 0x7 * -0x6eb) + -parseInt(j(0x1b7)) / (-0x14ae + -0x1 * -0x1831 + -0x37d) + -parseInt(j(0x1a7)) / (0x17ae + 0x1 * 0x19ed + -0x3194) + parseInt(j(0x1b0)) / (-0x539 + 0x18fd + -0x13bc) * (parseInt(k(0x1a5)) / (-0xa * -0x3d + -0x5a8 + 0x34f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x38581 * -0x2 + 0x7675b + 0x6a2b4));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x6c4 * 0x2 + 0x2384 + 0xa * -0x209);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const r = [
        'primaryKey',
        'addColumn',
        'Settings',
        'autoIncrem',
        'INTEGER',
        'all',
        '4KSLyUD',
        '153855lkPyJk',
        '836764JppjKy',
        '3139682JTHEnJ',
        'sequelize',
        'ent',
        'DataTypes',
        'erty',
        'value',
        'allowNull',
        'type',
        'VNfnN',
        '584bjlcfx',
        'exports',
        'cWBDC',
        '2018420dMHhxO',
        '__esModule',
        '626394ktFWQO',
        'removeColu',
        '2088936gXSJgj',
        'defineProp',
        '1298268JaXCCG'
    ];
    a = function () {
        return r;
    };
    return a();
}
const i = {};
i[l(0x1ac)] = !![], Object[l(0x1b8) + m(0x1ab)](exports, l(0x1b4), i);
const sequelize_1 = require(m(0x1a8));
module[m(0x1b1)] = {
    'up': e => {
        const n = m, o = l, f = {};
        f[n(0x1af)] = o(0x1bc);
        const g = f, h = {};
        return h[o(0x1ae)] = sequelize_1[o(0x1aa)][n(0x1a2)], h[o(0x1bd) + n(0x1a9)] = !![], h[n(0x1ba)] = !![], h[o(0x1ad)] = ![], Promise[n(0x1a3)]([e[o(0x1bb)](g[n(0x1af)], 'id', h)]);
    },
    'down': d => {
        const p = l, q = l, e = {};
        e[p(0x1b2)] = p(0x1bc);
        const f = e;
        return Promise[q(0x1a3)]([d[p(0x1b6) + 'mn'](f[q(0x1b2)], 'id')]);
    }
};