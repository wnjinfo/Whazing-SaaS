'use strict';
const k = b, l = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3 * 0x773 + 0x1e4d + -0x7 * 0x771);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x97)) / (-0x31 * 0x15 + 0x3 * 0x7a9 + -0x12f5) + parseInt(i(0x9e)) / (0x1e * 0x133 + -0x3 * -0x2e + -0x2482) * (parseInt(i(0xaa)) / (-0x3 * 0x7c2 + -0xc10 + 0x2359)) + parseInt(i(0x9a)) / (-0x474 + -0x182d + 0x1ca5) * (parseInt(i(0xa5)) / (0x1 * 0x314 + -0x321 + -0x9 * -0x2)) + -parseInt(j(0x8f)) / (0xd5 * -0x11 + 0x73c + 0x6ef) + parseInt(i(0xa8)) / (0x3ad * -0x3 + -0x110e + 0x1c1c) + parseInt(i(0xac)) / (0x4b8 + -0x1f4a + -0xe3 * -0x1e) * (-parseInt(i(0x9d)) / (0x1 * 0x7f2 + 0x2e * -0x68 + -0x59 * -0x1f)) + -parseInt(j(0xa1)) / (0x8 * -0x2f0 + -0x1271 + 0x29fb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x314 * -0x20b + 0x183296 + -0x46250 * 0x4));
const g = {};
g[k(0x9b)] = !![], Object[k(0x94) + k(0x9f)](exports, k(0xa7), g);
function a() {
    const q = [
        'removeColu',
        'whtqN',
        'ASPXN',
        'addColumn',
        'defineProp',
        'GUCGF',
        'sequelize',
        '1631775xwoUUS',
        'INTEGER',
        'exports',
        '4XpEVUS',
        'value',
        'contactId',
        '450wPCJrg',
        '84746HyWgMy',
        'erty',
        'Contacts',
        '29921640MSAXoT',
        'VmQZW',
        'Messages',
        'pXeSM',
        '2629515ziOaXQ',
        'Gbwzk',
        '__esModule',
        '11485999cgknWU',
        'CASCADE',
        '87XWmhsY',
        'DataTypes',
        '126296EmwYNU',
        '2382888OqfgPW'
    ];
    a = function () {
        return q;
    };
    return a();
}
const sequelize_1 = require(l(0x96));
module[k(0x99)] = {
    'up': d => {
        const m = l, n = k, e = {};
        e[m(0xa2)] = m(0xa3), e[m(0xa4)] = n(0x9c), e[m(0x95)] = n(0xa0), e[n(0x91)] = m(0xa9);
        const f = e;
        return d[n(0x93)](f[n(0xa2)], f[m(0xa4)], {
            'type': sequelize_1[n(0xab)][m(0x98)],
            'references': {
                'model': f[m(0x95)],
                'key': 'id'
            },
            'onUpdate': f[n(0x91)],
            'onDelete': f[n(0x91)]
        });
    },
    'down': d => {
        const o = k, p = l, e = {};
        e[o(0x92)] = o(0xa3), e[p(0xa6)] = o(0x9c);
        const f = e;
        return d[p(0x90) + 'mn'](f[p(0x92)], f[p(0xa6)]);
    }
};