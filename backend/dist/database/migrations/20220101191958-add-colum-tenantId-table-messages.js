'use strict';
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(j(0x137)) / (-0x1af2 + 0x15d3 + 0x148 * 0x4) * (-parseInt(k(0x13d)) / (0x194f + 0x1253 + -0x15d0 * 0x2)) + parseInt(k(0x158)) / (0x263c + 0x10f3 + -0x372c) + -parseInt(k(0x159)) / (0xc24 + -0x1b29 + -0xf09 * -0x1) * (-parseInt(k(0x13f)) / (0x7 * 0x175 + -0x376 + -0x4 * 0x1ae)) + parseInt(j(0x14f)) / (0xa * 0x181 + 0x70a + -0x160e) * (parseInt(j(0x13a)) / (-0x12b5 + -0x151 * 0x7 + 0x1bf3)) + -parseInt(j(0x143)) / (0xefc + 0x1 * 0xce9 + -0x1bdd) + parseInt(k(0x13e)) / (0xfa4 + 0x137 * -0x1d + -0x274 * -0x8) * (parseInt(j(0x13b)) / (0xc18 * 0x1 + -0x15b * 0x3 + -0x1 * 0x7fd)) + -parseInt(k(0x141)) / (0x12b6 + -0xba * 0x1f + 0x3db) * (parseInt(j(0x146)) / (-0x1 * 0x995 + -0x26ee + 0x1 * 0x308f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x55a68 + -0x119 * 0x371 + 0xc79f0));
function a() {
    const r = [
        'tenantId',
        'addColumn',
        '__esModule',
        'VLtFn',
        '253137ccEeOl',
        '58980MFCAGq',
        '11GGNUkP',
        'value',
        'exports',
        '7YPhHAN',
        '1231580dYuLxq',
        'defineProp',
        '60110VJEEjJ',
        '9ukcoOR',
        '140tAbMNq',
        'CASCADE',
        '219428wVwHbS',
        'pyrZI',
        '1263328nTbTQj',
        'Messages',
        'jGqnx',
        '156OnnAGr',
        'DataTypes',
        'sequelize',
        'tzfSI',
        'Tenants',
        'removeColu',
        'erty',
        'vcvrK',
        'restrict',
        '2080266mJFybz',
        'sxefy',
        'all',
        'IIlFB',
        'INTEGER'
    ];
    a = function () {
        return r;
    };
    return a();
}
const i = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x133f * 0x1 + -0x9bb + 0x3b * 0x83);
        let h = e[f];
        return h;
    }, b(c, d);
}
i[l(0x138)] = !![], Object[m(0x13c) + m(0x14c)](exports, l(0x156), i);
const sequelize_1 = require(m(0x148));
module[m(0x139)] = {
    'up': d => {
        const n = l, o = m, e = {};
        e[n(0x142)] = o(0x144), e[n(0x150)] = n(0x154), e[n(0x14d)] = n(0x14a), e[n(0x145)] = n(0x140), e[o(0x157)] = n(0x14e);
        const f = e;
        return Promise[o(0x151)]([d[n(0x155)](f[n(0x142)], f[o(0x150)], {
                'type': sequelize_1[o(0x147)][n(0x153)],
                'references': {
                    'model': f[n(0x14d)],
                    'key': 'id'
                },
                'onUpdate': f[n(0x145)],
                'onDelete': f[n(0x157)],
                'allowNull': !![],
                'defaultValue': null
            })]);
    },
    'down': d => {
        const p = l, q = m, e = {};
        e[p(0x152)] = q(0x144), e[p(0x149)] = p(0x154);
        const f = e;
        return Promise[q(0x151)]([d[q(0x14b) + 'mn'](f[q(0x152)], f[q(0x149)])]);
    }
};