'use strict';
const k = b, l = b;
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(i(0x114)) / (-0x167 * -0x7 + -0x2091 * 0x1 + 0x16c1) * (-parseInt(j(0x119)) / (-0x174f + 0x9ff * -0x3 + -0x1 * -0x354e)) + parseInt(i(0x12b)) / (-0x20a + 0x25af + -0x23a2) + -parseInt(j(0x12f)) / (-0x16eb * -0x1 + -0x3d + 0x1 * -0x16aa) * (-parseInt(i(0x12c)) / (-0x23eb + 0xa52 * -0x2 + 0x3894)) + parseInt(j(0x124)) / (-0xc97 + 0x16f * 0xb + -0x328) + parseInt(i(0x125)) / (-0x196f + -0x1 * 0xc2c + -0x25a2 * -0x1) + parseInt(i(0x116)) / (-0x3f8 + 0x8 * -0x83 + 0x818) * (-parseInt(i(0x118)) / (0xd55 * -0x1 + -0x27e + -0x1d * -0x8c)) + -parseInt(j(0x122)) / (0x10c + -0x22ca + 0x4 * 0x872) * (parseInt(i(0x12a)) / (-0x567 + 0x8 * -0x4a2 + 0x2a82));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2872c * -0x2 + 0xca253 + 0x1 * -0x98926));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x10f9 + 0x2 * -0x120b + 0x3622);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const q = [
        'CASCADE',
        'xxiQM',
        'wBQfS',
        'exports',
        '487XDdAve',
        'Tenants',
        '8pArNUq',
        'UGfpG',
        '164907inmESJ',
        '4218eAIADQ',
        'sequelize',
        'removeColu',
        'nnbRi',
        'value',
        'SET\x20NULL',
        'YOwUs',
        'planId',
        'addColumn',
        '202490mwpTea',
        'Plans',
        '2564658sjXVLt',
        '4938185iHBASV',
        'defineProp',
        'cztDD',
        'DataTypes',
        'INTEGER',
        '1837CItNCK',
        '2756643aGuaMB',
        '4277245lcbVOd',
        '__esModule',
        'erty',
        '4JVOQMw',
        'jhNFj'
    ];
    a = function () {
        return q;
    };
    return a();
}
const g = {};
g[k(0x11d)] = !![], Object[l(0x126) + l(0x12e)](exports, l(0x12d), g);
const sequelize_1 = require(k(0x11a));
module[k(0x113)] = {
    'up': d => {
        const m = k, n = l, e = {};
        e[m(0x127)] = n(0x115), e[n(0x11f)] = n(0x120), e[n(0x133)] = n(0x123), e[m(0x11c)] = n(0x131), e[m(0x132)] = m(0x11e);
        const f = e;
        return d[n(0x121)](f[m(0x127)], f[m(0x11f)], {
            'type': sequelize_1[m(0x128)][n(0x129)],
            'references': {
                'model': f[n(0x133)],
                'key': 'id'
            },
            'onUpdate': f[m(0x11c)],
            'onDelete': f[m(0x132)]
        });
    },
    'down': d => {
        const o = k, p = k, e = {};
        e[o(0x117)] = p(0x115), e[p(0x130)] = p(0x120);
        const f = e;
        return d[p(0x11b) + 'mn'](f[p(0x117)], f[p(0x130)]);
    }
};