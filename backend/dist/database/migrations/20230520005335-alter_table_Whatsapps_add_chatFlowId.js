'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0xc1)) / (0xd06 + 0x1fde + -0x1 * 0x2ce3) * (-parseInt(i(0xda)) / (0x13b2 * -0x1 + -0x18c6 + 0x2c7a * 0x1)) + -parseInt(i(0xc8)) / (0x19a2 + -0xf1d * -0x1 + -0x28bc) * (parseInt(i(0xdb)) / (0x1540 + 0x5c * -0x56 + 0x1 * 0x9ac)) + -parseInt(i(0xca)) / (0x2 * -0x112d + 0x980 + 0x18df) * (parseInt(i(0xc9)) / (-0x191 + -0x1 * 0xd0d + 0xea4)) + parseInt(j(0xc6)) / (0x45e + -0x1ca5 + 0x184e) * (-parseInt(i(0xb9)) / (-0x1f45 * 0x1 + 0x185d + 0x18 * 0x4a)) + parseInt(j(0xc7)) / (-0xe74 + 0x3 * -0x18f + 0x132a) * (parseInt(i(0xd6)) / (-0x4 * -0x7ab + -0x1919 + -0xd * 0x6d)) + parseInt(j(0xd2)) / (0x1c66 + -0x2 * -0x83 + -0x147 * 0x17) + -parseInt(j(0xc2)) / (0x2cc + 0x2 * 0x45e + -0xb7c) * (-parseInt(i(0xd8)) / (-0x144d + 0x1cf8 + -0x2 * 0x44f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0xd * 0x9324 + 0x47 * -0x2a3e + 0x198a22));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xb * 0x17c + 0x1956 + -0x28f1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const q = [
        'value',
        'ChatFlow',
        '2489465DcpuwP',
        'SET\x20NULL',
        'DataTypes',
        'aqUyf',
        '100saoxGb',
        'eKPBF',
        '709007rwXcEY',
        'lNphC',
        '60898rAIzRP',
        '1164344qIcXRZ',
        '8zuZBlT',
        'Whatsapps',
        'exports',
        '__esModule',
        'SeUEG',
        'WhtCI',
        'chatFlowId',
        'CASCADE',
        '5ctabFb',
        '264gwtsOh',
        'erty',
        'sequelize',
        'snDRi',
        '343231MplNyG',
        '16290qQjqKL',
        '3itqxgQ',
        '3750GYeLXk',
        '4285gVqYcq',
        'Plufz',
        'addColumn',
        'INTEGER',
        'removeColu',
        'defineProp'
    ];
    a = function () {
        return q;
    };
    return a();
}
const g = {};
g[k(0xd0)] = !![], Object[k(0xcf) + l(0xc3)](exports, k(0xbc), g);
const sequelize_1 = require(k(0xc4));
module[l(0xbb)] = {
    'up': d => {
        const m = k, n = k, e = {};
        e[m(0xd5)] = m(0xba), e[n(0xd9)] = n(0xbf), e[n(0xcb)] = m(0xd1), e[m(0xd7)] = n(0xc0), e[m(0xc5)] = n(0xd3);
        const f = e;
        return d[n(0xcc)](f[m(0xd5)], f[n(0xd9)], {
            'type': sequelize_1[m(0xd4)][m(0xcd)],
            'references': {
                'model': f[m(0xcb)],
                'key': 'id'
            },
            'onUpdate': f[m(0xd7)],
            'onDelete': f[n(0xc5)],
            'allowNull': !![],
            'defaultValue': null
        });
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0xbe)] = p(0xba), e[p(0xbd)] = o(0xbf);
        const f = e;
        return d[p(0xce) + 'mn'](f[o(0xbe)], f[o(0xbd)]);
    }
};