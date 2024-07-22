'use strict';
const k = b, l = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xee8 + -0xd2d * -0x1 + 0x35e * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x1a7)) / (-0x185b + -0x5f * 0x62 + -0x143e * -0x3) * (-parseInt(i(0x1a9)) / (0x2e8 * 0x1 + 0x21e4 + -0x24ca)) + parseInt(i(0x1b5)) / (0x2688 + -0x2 * 0x346 + -0x1ff9) * (-parseInt(i(0x1a8)) / (-0xbf6 * -0x2 + -0x14ab + -0x33d)) + -parseInt(j(0x1bd)) / (0x1 * -0x2bf + 0x1575 + 0x3 * -0x63b) + parseInt(i(0x1bb)) / (0x165b + 0x2 * -0x89f + -0x517) * (-parseInt(j(0x1b1)) / (-0x1cd8 + -0x2479 + 0x4158)) + parseInt(i(0x1b6)) / (0xfef * -0x1 + -0x2583 + 0x357a) + -parseInt(i(0x1b7)) / (-0xbd3 * 0x1 + -0x1a85 + -0xccb * -0x3) * (parseInt(j(0x1a6)) / (0x1d2b * 0x1 + 0x1ff5 + -0x3d16)) + parseInt(j(0x1ad)) / (0x11bf + -0x3 * 0xa2d + -0xcd3 * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, 0x29e24 + 0x1144e4 + -0x7651f));
const g = {};
g[k(0x1c0)] = !![], Object[k(0x1b4) + k(0x1ba)](exports, k(0x1b3), g);
const sequelize_1 = require(l(0x1b8));
function a() {
    const q = [
        '45lMWjdk',
        'sequelize',
        'DataTypes',
        'erty',
        '6HqQCpI',
        'Messages',
        '1606075eEhYMk',
        'iImXA',
        'qGvrt',
        'value',
        'ChTIq',
        'Contacts',
        'removeColu',
        'UuPFa',
        '696650ZHSSLZ',
        '39zjGUDV',
        '136EFNxAb',
        '11468pNlTIV',
        'contactId',
        'JlBUT',
        'exports',
        '34256398iTLMDB',
        'CASCADE',
        'INTEGER',
        'ooYzG',
        '9046604EMuJBZ',
        'addColumn',
        '__esModule',
        'defineProp',
        '49518DOUPfa',
        '3609512Lrwxje'
    ];
    a = function () {
        return q;
    };
    return a();
}
module[k(0x1ac)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x1b0)] = m(0x1bc), e[m(0x1bf)] = m(0x1aa), e[m(0x1be)] = m(0x1a3), e[m(0x1a5)] = n(0x1ae);
        const f = e;
        return d[m(0x1b2)](f[m(0x1b0)], f[n(0x1bf)], {
            'type': sequelize_1[n(0x1b9)][n(0x1af)],
            'references': {
                'model': f[m(0x1be)],
                'key': 'id'
            },
            'onUpdate': f[m(0x1a5)],
            'onDelete': f[m(0x1a5)]
        });
    },
    'down': d => {
        const o = l, p = l, e = {};
        e[o(0x1c1)] = o(0x1bc), e[o(0x1ab)] = o(0x1aa);
        const f = e;
        return d[p(0x1a4) + 'mn'](f[p(0x1c1)], f[o(0x1ab)]);
    }
};