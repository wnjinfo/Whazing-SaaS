'use strict';
const l = b, m = b;
function a() {
    const r = [
        '259602DlQobU',
        '259079qyvEpD',
        'nZPbQ',
        'restrict',
        'hutwl',
        'Messages',
        'mGmik',
        'uGgox',
        '580773kcgjTZ',
        'CXJor',
        'value',
        'sequelize',
        'DataTypes',
        '4815QZxxUD',
        '916qMFoAp',
        'defineProp',
        'eidSG',
        '4196836NrSJcl',
        'tenantId',
        'removeColu',
        'Tenants',
        'all',
        '1624752MuHdKu',
        'ZYJKZ',
        'addColumn',
        'exports',
        'erty',
        '16bMuyHl',
        'CASCADE',
        'INTEGER',
        '10639719BcISlb',
        '__esModule'
    ];
    a = function () {
        return r;
    };
    return a();
}
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(j(0xcf)) / (-0x2 * -0x7fa + -0x138f + 0x39c) + parseInt(k(0xe4)) / (-0x332 * 0x4 + -0x1 * 0x1a21 + 0x26eb) + -parseInt(j(0xd6)) / (-0x1b3c + -0x20a2 + 0x1 * 0x3be1) + parseInt(j(0xdc)) / (0x9 * -0x42f + -0x1 * 0x15d1 + 0x13d4 * 0x3) * (-parseInt(j(0xdb)) / (-0x2 * 0xee1 + 0x100c * 0x1 + 0xb9 * 0x13)) + -parseInt(j(0xce)) / (0x29 * -0x59 + -0xcda + 0x90b * 0x3) + parseInt(j(0xdf)) / (0x2 * -0xb1a + -0xb54 + -0xb * -0x30d) * (parseInt(k(0xe9)) / (-0x50 * -0x71 + 0xa09 * 0x1 + 0xf1b * -0x3)) + -parseInt(j(0xec)) / (-0x3b * -0x19 + 0x11ab + -0x35 * 0x71);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3 * 0x285cf + -0x8bd23 + 0x436d * 0x29));
const i = {};
i[l(0xd8)] = !![], Object[l(0xdd) + m(0xe8)](exports, l(0xed), i);
const sequelize_1 = require(m(0xd9));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x514 + 0x359 + 0x3b * 0xb);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[m(0xe7)] = {
    'up': d => {
        const n = m, o = l, e = {};
        e[n(0xd0)] = o(0xd3), e[o(0xde)] = o(0xe0), e[o(0xd4)] = n(0xe2), e[n(0xd2)] = n(0xea), e[n(0xd5)] = o(0xd1);
        const f = e;
        return Promise[o(0xe3)]([d[o(0xe6)](f[n(0xd0)], f[n(0xde)], {
                'type': sequelize_1[o(0xda)][n(0xeb)],
                'references': {
                    'model': f[o(0xd4)],
                    'key': 'id'
                },
                'onUpdate': f[n(0xd2)],
                'onDelete': f[o(0xd5)],
                'allowNull': !![],
                'defaultValue': null
            })]);
    },
    'down': d => {
        const p = l, q = m, e = {};
        e[p(0xe5)] = q(0xd3), e[q(0xd7)] = q(0xe0);
        const f = e;
        return Promise[p(0xe3)]([d[p(0xe1) + 'mn'](f[p(0xe5)], f[q(0xd7)])]);
    }
};