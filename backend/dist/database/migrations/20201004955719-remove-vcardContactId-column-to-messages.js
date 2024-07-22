'use strict';
const k = b, l = b;
function a() {
    const q = [
        'INTEGER',
        '334lthQZD',
        'VjivF',
        'DataTypes',
        'swRxw',
        'CASCADE',
        '34951IfvORl',
        'ctId',
        '324WxTMWi',
        'defineProp',
        '5431392bQKALs',
        'Messages',
        'vcardConta',
        '7498971sBUdxo',
        'wQUrr',
        'addColumn',
        '127317AsjJzu',
        'ukzGC',
        '4057UjPXxX',
        'removeColu',
        'erty',
        '57880ClzQIr',
        '132190EupPXC',
        'CBszi',
        '1122tJnJuz',
        'WoYRv',
        'Contacts',
        'sequelize',
        '__esModule',
        'value',
        'exports'
    ];
    a = function () {
        return q;
    };
    return a();
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0xbf)) / (0x1ecb + -0xe15 + -0x7 * 0x263) * (parseInt(i(0xcd)) / (0x6fb * -0x4 + -0x466 * -0x1 + -0x7d8 * -0x3)) + -parseInt(j(0xbd)) / (-0x12 * -0x40 + -0x53 * -0x41 + 0x664 * -0x4) + -parseInt(j(0xb5)) / (-0x24bc + 0x2341 + 0x17f * 0x1) * (-parseInt(i(0xc2)) / (-0xc6d + 0x50b + 0x1 * 0x767)) + -parseInt(i(0xc5)) / (0x79 * 0xd + 0xba * -0x1 + -0x565) * (parseInt(j(0xd2)) / (0x2 * -0xbcf + 0x1 * 0x104f + 0x756)) + parseInt(i(0xb7)) / (-0x1013 + -0x2650 + 0x366b) + -parseInt(j(0xba)) / (0x1 * -0x62b + -0x208c + 0x26c0) + parseInt(i(0xc3)) / (-0x66 * -0x5c + 0x1d * -0x14a + 0xc4);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0xb279 * 0x7 + 0x230 * 0x1bb + 0x8 * 0x1162e));
const g = {};
g[k(0xca)] = !![], Object[l(0xb6) + k(0xc1)](exports, k(0xc9), g);
const sequelize_1 = require(l(0xc8));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x6ca + -0x1 * 0x1139 + 0xb24);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[l(0xcb)] = {
    'up': d => {
        const m = l, n = k, e = {};
        e[m(0xce)] = n(0xb8), e[n(0xc4)] = m(0xb9) + n(0xd3);
        const f = e;
        return d[n(0xc0) + 'mn'](f[m(0xce)], f[m(0xc4)]);
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0xbe)] = p(0xb8), e[p(0xbb)] = o(0xb9) + o(0xd3), e[p(0xd0)] = o(0xc7), e[o(0xc6)] = o(0xd1);
        const f = e;
        return d[o(0xbc)](f[o(0xbe)], f[p(0xbb)], {
            'type': sequelize_1[o(0xcf)][o(0xcc)],
            'references': {
                'model': f[o(0xd0)],
                'key': 'id'
            },
            'onUpdate': f[o(0xc6)],
            'onDelete': f[o(0xc6)]
        });
    }
};