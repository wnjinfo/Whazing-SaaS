'use strict';
const l = b, m = b;
(function (d, e) {
    const j = b, k = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(j(0xd3)) / (0x265c * -0x1 + -0x11ae + 0x380b) * (parseInt(j(0xc5)) / (0x1 * -0x6bf + -0x1a29 * -0x1 + -0x1368)) + parseInt(j(0xcc)) / (-0x55d * -0x7 + -0x4d + -0x423 * 0x9) + -parseInt(k(0xd6)) / (-0x4b * 0x2b + -0x20a7 + 0xb51 * 0x4) * (parseInt(j(0xd7)) / (0x17a3 + 0x2159 + -0x38f7)) + parseInt(k(0xce)) / (-0x268 + 0x1f11 + -0x1 * 0x1ca3) + -parseInt(k(0xbb)) / (0xb00 + -0x1ff2 + -0x1 * -0x14f9) * (parseInt(j(0xb7)) / (-0x203 * 0x8 + 0x5b * 0xe + 0xb26)) + -parseInt(k(0xc3)) / (0x2625 + 0x10 * 0xac + -0x30dc * 0x1) * (-parseInt(j(0xcf)) / (-0x1 * -0x14ae + 0xe44 + -0x22e8)) + -parseInt(k(0xc4)) / (0x10c4 + -0x1 * -0xce5 + 0xdf * -0x22) * (parseInt(j(0xda)) / (-0x1541 + -0x1d72 * -0x1 + -0x825));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0x104af2 + 0x5f * -0x2627 + 0x29edaa));
function a() {
    const r = [
        '38oXBktE',
        'defaultVal',
        'aTnUh',
        'CASCADE',
        'erty',
        'queue',
        'exports',
        '4249824EPsHTI',
        'ruHSu',
        '609894QhKgRT',
        '3274970UwtnAd',
        '__esModule',
        'addColumn',
        'defineProp',
        '8434yHoCrk',
        'qxGJZ',
        'allowNull',
        '131812XEZIQM',
        '20mLBVYi',
        'Tickets',
        'DataTypes',
        '25980FUyWYW',
        'AEwxc',
        '16fjxENx',
        'Queues',
        'removeColu',
        'cVVPg',
        '1236977GKdKqN',
        'fPJph',
        'INTEGER',
        'type',
        'oIGtZ',
        'restrict',
        'sequelize',
        'value',
        '9cDOfjX',
        '3905SSGyyW'
    ];
    a = function () {
        return r;
    };
    return a();
}
const c = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 * -0xce + 0x39 * -0x8 + 0x41b);
        let h = e[f];
        return h;
    }, b(c, d);
}
c[l(0xc2)] = !![], Object[m(0xd2) + m(0xc9)](exports, m(0xd0), c);
const sequelize_1 = require(m(0xc1));
module[l(0xcb)] = {
    'up': async e => {
        const n = l, o = m, f = {};
        f[n(0xdb)] = n(0xd8), f[n(0xcd)] = o(0xca), f[n(0xbc)] = o(0xb8), f[n(0xc7)] = n(0xc8), f[o(0xd4)] = n(0xc0);
        const g = f;
        await e[n(0xb9) + 'mn'](g[n(0xdb)], g[n(0xcd)]), await e[n(0xd1)](g[o(0xdb)], g[n(0xcd)], {
            'type': sequelize_1[o(0xd9)][o(0xbd)],
            'references': {
                'model': g[o(0xbc)],
                'key': 'id'
            },
            'onUpdate': g[o(0xc7)],
            'onDelete': g[n(0xd4)],
            'defaultValue': null,
            'allowNull': !![]
        });
    },
    'down': async f => {
        const p = l, q = m, g = {};
        g[p(0xbf)] = q(0xd8), g[q(0xba)] = p(0xca);
        const h = g;
        await f[q(0xb9) + 'mn'](h[q(0xbf)], h[q(0xba)]);
        const i = {};
        i[p(0xbe)] = sequelize_1[q(0xd9)][q(0xbd)], i[p(0xc6) + 'ue'] = null, i[p(0xd5)] = !![], await f[q(0xd1)](h[q(0xbf)], h[q(0xba)], i);
    }
};