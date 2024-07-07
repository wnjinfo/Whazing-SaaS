'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x70 * -0x4f + 0x17ae + -0x3933);
        let h = e[f];
        return h;
    }, b(c, d);
}
const m = b, n = b;
(function (d, e) {
    const k = b, l = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(k(0x111)) / (0x1 * -0x528 + 0x109 * -0x1 + -0x1a * -0x3d) * (-parseInt(l(0x10d)) / (-0x1636 * -0x1 + 0x133c + -0x4e * 0x88)) + parseInt(k(0x11d)) / (0x673 * -0x1 + 0x18b * 0x19 + -0x1 * 0x201d) + -parseInt(k(0x127)) / (-0xaa8 + -0x6ac + 0x1158) * (parseInt(l(0x128)) / (0x1877 + 0x1ff5 + -0x12cd * 0x3)) + parseInt(k(0x10f)) / (0x18df * -0x1 + 0x13 * 0x1db + -0xa5c) + -parseInt(l(0x117)) / (-0x351 + 0x21cd + -0x1e75) * (parseInt(k(0x123)) / (0x1f83 * -0x1 + -0x21 * 0x56 + 0x2aa1 * 0x1)) + -parseInt(l(0x124)) / (0x26fc + 0x185a + -0x3f4d) * (-parseInt(l(0x11a)) / (-0x4 * -0x565 + 0x1b * -0x139 + -0x21 * -0x59)) + parseInt(l(0x121)) / (-0x26c7 + 0x19ed + -0xce5 * -0x1);
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0xa2a2d + -0x32 * -0x40f + 0x109999));
function a() {
    const s = [
        'ble',
        'describeTa',
        'allowNull',
        '6eGhmBE',
        'exports',
        '1375368QRHOOq',
        'KxYDF',
        '153519fdScZi',
        'STRING',
        'ssTfM',
        'defineProp',
        'value',
        'removeColu',
        '2044903eIAGNX',
        'erty',
        'sequelize',
        '70vksoBP',
        'addColumn',
        'DataTypes',
        '2220162KAUvtO',
        'type',
        'RiTHu',
        'QpibM',
        '4718758XRsORE',
        'Tenants',
        '24cjgWyu',
        '661887RPGabO',
        'cnpj',
        '__esModule',
        '52xzkJXO',
        '39395JPWNFl'
    ];
    a = function () {
        return s;
    };
    return a();
}
const c = {};
c[m(0x115)] = !![], Object[n(0x114) + m(0x118)](exports, m(0x126), c);
const sequelize_1 = require(m(0x119));
module[m(0x10e)] = {
    'up': async f => {
        const o = m, p = n, g = {};
        g[o(0x110)] = o(0x122), g[p(0x120)] = o(0x125);
        const h = g, i = await f[o(0x10b) + o(0x129)](h[o(0x110)]);
        if (!i || !i[h[p(0x120)]]) {
            const j = {};
            j[p(0x11e)] = sequelize_1[o(0x11c)][p(0x112)], j[o(0x10c)] = ![], await f[p(0x11b)](h[p(0x110)], h[p(0x120)], j);
        }
    },
    'down': async e => {
        const q = m, r = n, f = {};
        f[q(0x113)] = q(0x122), f[q(0x11f)] = q(0x125);
        const g = f;
        await e[q(0x116) + 'mn'](g[r(0x113)], g[r(0x11f)]);
    }
};