'use strict';
const l = b, m = b;
(function (d, e) {
    const j = b, k = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(j(0xbe)) / (-0x17b2 + -0x1930 + -0x1 * -0x30e3) * (parseInt(j(0xb5)) / (-0x1f52 + -0x1272 + 0x31c6)) + -parseInt(k(0xa8)) / (0x1e54 + -0x1b06 + -0x34b) + -parseInt(k(0xb0)) / (-0x337 + -0x20cb + 0x1d * 0x13e) * (-parseInt(j(0xc2)) / (-0x242d + -0xce7 + 0x3119)) + parseInt(j(0xb2)) / (0x2661 + -0x71 * 0x42 + 0x313 * -0x3) + -parseInt(j(0xbb)) / (0x2617 + 0x17bb + -0x3dcb) + parseInt(j(0xaf)) / (-0x8de + -0x2ef * -0xa + -0x1470) * (-parseInt(j(0xc3)) / (0x4b * 0x1b + 0xc57 + -0x1437)) + -parseInt(j(0xae)) / (0xefa + -0x1028 + 0x138) * (-parseInt(k(0xa9)) / (0x1 * 0x493 + -0x117 * -0x1f + -0x2651));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0x17228 + -0x55b29 * -0x1 + 0x1d * 0x423d));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x3b1 + -0xfc0 + 0x25 * 0x8b);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const r = [
        'sATjv',
        'CASCADE',
        'sequelize',
        'type',
        '2585241oweHbw',
        '33kHVRvv',
        'exports',
        'defineProp',
        'value',
        'YGlsA',
        '3321200htlCzT',
        '904aIOBoX',
        '4gOZSaa',
        'fGPWH',
        '5912400iDQykT',
        'allowNull',
        'DataTypes',
        '320918FUelLX',
        'defaultVal',
        'queue',
        'INTEGER',
        'Tickets',
        'restrict',
        '8082844CZWbdy',
        'ZQqyg',
        '__esModule',
        '1gwRcaO',
        'addColumn',
        'erty',
        'Queues',
        '3822485DqgUPi',
        '11331klUgkS',
        'rnGKY',
        'WIkDW',
        'removeColu',
        'DZytq'
    ];
    a = function () {
        return r;
    };
    return a();
}
const c = {};
c[l(0xac)] = !![], Object[l(0xab) + l(0xc0)](exports, m(0xbd), c);
const sequelize_1 = require(l(0xa6));
module[l(0xaa)] = {
    'up': async e => {
        const n = l, o = m, f = {};
        f[n(0xc4)] = o(0xb9), f[o(0xad)] = n(0xb7), f[o(0xc5)] = o(0xc1), f[n(0xbc)] = n(0xc9), f[o(0xc8)] = o(0xba);
        const g = f;
        await e[n(0xc6) + 'mn'](g[o(0xc4)], g[o(0xad)]), await e[n(0xbf)](g[o(0xc4)], g[n(0xad)], {
            'type': sequelize_1[o(0xb4)][n(0xb8)],
            'references': {
                'model': g[n(0xc5)],
                'key': 'id'
            },
            'onUpdate': g[o(0xbc)],
            'onDelete': g[o(0xc8)],
            'defaultValue': null,
            'allowNull': !![]
        });
    },
    'down': async f => {
        const p = l, q = l, g = {};
        g[p(0xb1)] = p(0xb9), g[q(0xc7)] = p(0xb7);
        const h = g;
        await f[q(0xc6) + 'mn'](h[q(0xb1)], h[q(0xc7)]);
        const i = {};
        i[q(0xa7)] = sequelize_1[p(0xb4)][q(0xb8)], i[p(0xb6) + 'ue'] = null, i[q(0xb3)] = !![], await f[p(0xbf)](h[q(0xb1)], h[p(0xc7)], i);
    }
};