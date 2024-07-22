'use strict';
const k = b, l = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1d23 + -0x259 * 0x10 + 0x924);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0xb7)) / (-0x17e7 * -0x1 + 0x1c8 + 0x1 * -0x19ae) + parseInt(i(0xc8)) / (-0xd * 0x61 + -0x1 * -0x163d + -0x114e) + -parseInt(j(0xd0)) / (0x1edc + -0x27f * 0xa + 0x5e3 * -0x1) * (-parseInt(j(0xd6)) / (-0x37 * 0x52 + -0xada * 0x2 + 0x2756)) + -parseInt(j(0xb9)) / (0x65b * -0x5 + 0x269c + -0x6d0) * (parseInt(i(0xbb)) / (0x57b * 0x5 + 0x27 * -0x33 + 0x1f6 * -0xa)) + parseInt(j(0xbd)) / (0xd40 + -0x1d54 + 0x85 * 0x1f) * (parseInt(j(0xc4)) / (-0x181f + -0xf83 + -0x1 * -0x27aa)) + parseInt(j(0xbe)) / (-0x1078 + -0x1822 + 0x28a3) + -parseInt(j(0xba)) / (-0xc7 * 0x25 + 0x1969 * 0x1 + -0x2 * -0x1b2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0xa9a2d * -0x1 + 0x6cb5e + 0x11583f));
const g = {};
g[k(0xc0)] = !![], Object[l(0xcf) + k(0xd3)](exports, l(0xd5), g);
function a() {
    const q = [
        'CASCADE',
        'SET\x20NULL',
        'removeColu',
        '1939848jqfddQ',
        'vaqjV',
        'Tickets',
        'zKYPf',
        'Whatsapps',
        'exports',
        'addColumn',
        'defineProp',
        '3YVbXqj',
        'usuJg',
        'FAYoO',
        'erty',
        'DataTypes',
        '__esModule',
        '5274220PYBZTV',
        '1007499fOzKdT',
        'INTEGER',
        '2670bUoKZz',
        '23998960ePyXYx',
        '19842SPtQEK',
        'WiBDz',
        '10345377OGBvAW',
        '2511873qJClVP',
        'whatsappId',
        'value',
        'Rfitz',
        'MojPW',
        'sequelize',
        '8QKBmKv'
    ];
    a = function () {
        return q;
    };
    return a();
}
const sequelize_1 = require(l(0xc3));
module[l(0xcd)] = {
    'up': d => {
        const m = l, n = l, e = {};
        e[m(0xc1)] = n(0xca), e[n(0xc2)] = m(0xbf), e[m(0xcb)] = n(0xcc), e[n(0xd1)] = m(0xc5), e[n(0xc9)] = n(0xc6);
        const f = e;
        return d[n(0xce)](f[m(0xc1)], f[n(0xc2)], {
            'type': sequelize_1[n(0xd4)][m(0xb8)],
            'references': {
                'model': f[n(0xcb)],
                'key': 'id'
            },
            'onUpdate': f[m(0xd1)],
            'onDelete': f[n(0xc9)]
        });
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0xbc)] = p(0xca), e[p(0xd2)] = o(0xbf);
        const f = e;
        return d[o(0xc7) + 'mn'](f[o(0xbc)], f[o(0xd2)]);
    }
};