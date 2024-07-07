'use strict';
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(j(0x109)) / (-0x1 * 0xfc3 + 0xd8c * -0x2 + 0x2adc) * (parseInt(k(0x10c)) / (-0x2 * 0xbe1 + 0x3b * 0x98 + -0xb44)) + -parseInt(k(0x112)) / (-0x9 * 0x3be + -0x1a82 + 0x3c33) + -parseInt(j(0x110)) / (0xf09 + 0x1 * -0xd3b + -0x1ca) * (-parseInt(k(0x10f)) / (-0x79 * 0x5 + 0xc31 + -0x1 * 0x9cf)) + parseInt(k(0x10b)) / (0xa9 * -0x13 + 0xbe9 + 0x15 * 0x8) * (-parseInt(j(0x116)) / (-0x1c38 + 0x18e2 + -0x1 * -0x35d)) + -parseInt(j(0x11e)) / (-0x2 * -0x15f + 0x1710 + -0x19c6) + parseInt(j(0x11d)) / (0xe34 + -0x1b64 + 0xd39) * (parseInt(k(0x11a)) / (-0x1429 * -0x1 + -0x1532 + 0x5 * 0x37)) + parseInt(k(0x120)) / (0x7af + 0x1cd * 0x3 + -0x1dd * 0x7) * (parseInt(j(0x10a)) / (-0x205e + 0x23eb + -0x12b * 0x3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x68501 + 0x124 * 0x3db + -0x6366b));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x237 * -0x3 + -0x1196 + -0x86b * -0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const i = {};
i[l(0x114)] = !![], Object[l(0x11c) + m(0x111)](exports, m(0x11b), i);
const sequelize_1 = require(m(0x113));
function a() {
    const r = [
        'removeColu',
        'Tickets',
        'AwWln',
        'DATE',
        '1WtTtoi',
        '204NCAfwp',
        '12NYlAwv',
        '857828lUoyTu',
        'DataTypes',
        'all',
        '50eCryIu',
        '132584PgjVcQ',
        'erty',
        '1641306uoFviN',
        'sequelize',
        'value',
        'gHBiS',
        '500892mEqeJw',
        'yArkV',
        'exports',
        'addColumn',
        '20SUdKNV',
        '__esModule',
        'defineProp',
        '1851732DheYbR',
        '4629120UuGCwo',
        'ctqRi',
        '817322UxwRlZ',
        'closedAt'
    ];
    a = function () {
        return r;
    };
    return a();
}
module[m(0x118)] = {
    'up': d => {
        const n = l, o = m, e = {};
        e[n(0x107)] = o(0x106), e[n(0x117)] = o(0x121);
        const f = e;
        return Promise[o(0x10e)]([d[o(0x122) + 'mn'](f[o(0x107)], f[o(0x117)])]);
    },
    'down': d => {
        const p = m, q = l, e = {};
        e[p(0x115)] = p(0x106), e[q(0x11f)] = q(0x121);
        const f = e;
        return Promise[q(0x10e)]([d[p(0x119)](f[p(0x115)], f[p(0x11f)], {
                'type': sequelize_1[p(0x10d)][p(0x108)](),
                'allowNull': !![],
                'defaultValue': null
            })]);
    }
};