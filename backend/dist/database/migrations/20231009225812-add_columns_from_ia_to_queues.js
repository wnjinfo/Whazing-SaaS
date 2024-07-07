'use strict';
function a() {
    const s = [
        'cnpj',
        '__esModule',
        'defineProp',
        'type',
        'BzXgO',
        'DataTypes',
        '20uDeSDM',
        '732204WjFRXu',
        'DTwsg',
        'oNLTK',
        'sequelize',
        'BOOLEAN',
        '4kgLjZN',
        '1669730xPZLWL',
        'describeTa',
        'ble',
        'GLpEK',
        '5778HSHdCF',
        '1134mydIgE',
        '984bXaaYC',
        '48451loMSUZ',
        'addColumn',
        'Queues',
        '11ZOakQK',
        'value',
        'erty',
        'QJvcX',
        '903640eCJIPg',
        '30495LEElUN',
        'from_ia',
        'allowNull',
        'removeColu',
        'defaultVal',
        'exports'
    ];
    a = function () {
        return s;
    };
    return a();
}
const m = b, n = b;
(function (d, e) {
    const k = b, l = b, f = d();
    while (!![]) {
        try {
            const g = -parseInt(k(0x100)) / (0x2d8 + 0x128d + -0x2 * 0xab2) * (-parseInt(k(0xf8)) / (-0x228b + -0x2685 + 0x2 * 0x2489)) + parseInt(l(0x108)) / (-0x2 * -0xd2b + 0xd7c + 0x81 * -0x4f) * (-parseInt(k(0xf2)) / (-0x11c4 + 0x1 * -0xa37 + 0x1bff)) + -parseInt(k(0x107)) / (0x792 * 0x5 + -0x11d5 + -0x1400) + -parseInt(k(0xfd)) / (0x166b * 0x1 + 0x16 * -0x49 + -0x101f) * (-parseInt(k(0xfe)) / (-0x1ba0 * -0x1 + -0x3b * -0xa3 + -0x412a)) + parseInt(k(0xff)) / (-0x1 * -0x1024 + -0xb61 + 0xad * -0x7) + -parseInt(l(0xf3)) / (-0x5 * 0x60d + -0x2656 + -0x30 * -0x16e) + -parseInt(l(0xf9)) / (-0x3 * -0xa17 + -0x2419 * -0x1 + -0x4254) * (-parseInt(l(0x103)) / (-0x97 * -0x33 + -0x20f2 + 0x2e8));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, 0x2e2e5 + -0x2f5ed * -0x1 + -0x4367b));
const c = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x112e + 0x18ab + -0x696);
        let h = e[f];
        return h;
    }, b(c, d);
}
c[m(0x104)] = !![], Object[m(0xee) + m(0x105)](exports, m(0xed), c);
const sequelize_1 = require(m(0xf6));
module[n(0xeb)] = {
    'up': async f => {
        const o = n, p = n, g = {};
        g[o(0xf5)] = o(0x102), g[p(0xf0)] = o(0xec), g[p(0xf4)] = p(0xe7);
        const h = g, i = await f[p(0xfa) + p(0xfb)](h[p(0xf5)]);
        if (!i || !i[h[p(0xf0)]]) {
            const j = {};
            j[p(0xef)] = sequelize_1[p(0xf1)][o(0xf7)], j[o(0xea) + 'ue'] = ![], j[p(0xe8)] = !![], await f[o(0x101)](h[p(0xf5)], h[o(0xf4)], j);
        }
    },
    'down': async e => {
        const q = n, r = n, f = {};
        f[q(0x106)] = r(0x102), f[r(0xfc)] = r(0xe7);
        const g = f;
        await e[r(0xe9) + 'mn'](g[q(0x106)], g[r(0xfc)]);
    }
};