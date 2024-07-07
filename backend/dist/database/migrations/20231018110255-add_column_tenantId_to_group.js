'use strict';
const m = b, n = b;
(function (d, e) {
    const k = b, l = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(k(0xb9)) / (-0x2309 + 0x141f + 0xeeb) + -parseInt(k(0xb1)) / (-0x1299 + -0x1ed9 + 0x3 * 0x107c) + parseInt(l(0xbd)) / (0x9a9 * -0x1 + -0x1d8c + 0x2738) * (-parseInt(l(0xb0)) / (0x6cd + 0x136 * -0x3 + 0x1 * -0x327)) + parseInt(l(0xba)) / (-0xb * 0xad + 0x7ca * -0x1 + 0x1 * 0xf3e) + -parseInt(k(0xce)) / (0x78 * -0x49 + 0x1e * 0x2e + 0x1cda) + -parseInt(k(0xb6)) / (-0x1731 + 0x269e + -0xf66) * (-parseInt(k(0xb4)) / (-0x1df5 + -0xe4b * -0x1 + 0x52 * 0x31)) + parseInt(k(0xbb)) / (-0x1c6f + 0x1 * 0x23c3 + -0x74b) * (parseInt(l(0xcf)) / (-0x50b * -0x7 + 0x1590 + 0x1 * -0x38d3));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0x8abd9 + 0xb3936 + -0x1 * -0x3963e));
const c = {};
c[m(0xb3)] = !![], Object[m(0xbc) + n(0xc8)](exports, m(0xbe), c);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x36 * -0x1f + -0x1 * 0x40 + -0x3ba * -0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(m(0xcd));
function a() {
    const s = [
        'Groups',
        'tenantId',
        'erty',
        'XUGlO',
        'INTEGER',
        'type',
        'cEcrO',
        'sequelize',
        '800016sUJsNs',
        '1405310leezKO',
        'addColumn',
        'defaultVal',
        'dorfa',
        'Tenants',
        'removeColu',
        'BOOLEAN',
        'exports',
        'allowNull',
        'CASCADE',
        '1561188RyIeiZ',
        '1468048JWlYQb',
        'NBGtW',
        'value',
        '388888lyLblU',
        'DataTypes',
        '63uuFQbX',
        'GpXQo',
        'describeTa',
        '370906qiDlqo',
        '1447295VxpncJ',
        '36jxjSrv',
        'defineProp',
        '3HelFvD',
        '__esModule',
        'oQSog',
        'isActive',
        'qcXtx',
        'oWEdJ',
        'wsRWj',
        'ble',
        'restrict'
    ];
    a = function () {
        return s;
    };
    return a();
}
module[m(0xad)] = {
    'up': async f => {
        const o = m, p = m, g = {};
        g[o(0xcc)] = p(0xc6), g[o(0xd2)] = p(0xc7), g[o(0xb7)] = o(0xaa), g[p(0xb2)] = p(0xaf), g[p(0xc3)] = p(0xc5), g[p(0xbf)] = p(0xc0);
        const h = g, i = await f[p(0xb8) + o(0xc4)](h[o(0xcc)]);
        (!i || !i[h[o(0xd2)]]) && await f[o(0xd0)](h[p(0xcc)], h[p(0xd2)], {
            'type': sequelize_1[p(0xb5)][o(0xca)],
            'references': {
                'model': h[p(0xb7)],
                'key': 'id'
            },
            'onUpdate': h[o(0xb2)],
            'onDelete': h[p(0xc3)],
            'allowNull': ![],
            'defaultValue': 0x1
        });
        if (!i || !i[h[p(0xbf)]]) {
            const j = {};
            j[p(0xcb)] = sequelize_1[o(0xb5)][o(0xac)], j[o(0xae)] = ![], j[p(0xd1) + 'ue'] = !![], await f[p(0xd0)](h[o(0xcc)], h[p(0xbf)], j);
        }
    },
    'down': async e => {
        const q = n, r = n, f = {};
        f[q(0xc1)] = r(0xc6), f[q(0xc9)] = r(0xc7), f[r(0xc2)] = r(0xc0);
        const g = f;
        await e[r(0xab) + 'mn'](g[q(0xc1)], g[q(0xc9)]), await e[r(0xab) + 'mn'](g[q(0xc1)], g[r(0xc2)]);
    }
};