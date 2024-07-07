'use strict';
const l = b, m = b;
(function (d, e) {
    const j = b, k = b, f = d();
    while (!![]) {
        try {
            const g = -parseInt(j(0x1ec)) / (0x46 * 0xa + 0x17d8 + -0x1a93) + -parseInt(j(0x1e7)) / (0x85 * 0xb + 0xd * -0x2fb + -0x1085 * -0x2) * (parseInt(k(0x1ef)) / (0x1b * 0x34 + -0x1c99 * 0x1 + 0x1720)) + -parseInt(j(0x1e4)) / (0x158 * 0x1d + 0xbe9 * 0x2 + 0xc8e * -0x5) * (parseInt(j(0x1e0)) / (-0x1711 * -0x1 + 0xd36 + 0x222 * -0x11)) + parseInt(k(0x1d3)) / (-0x1ae1 + 0xc0 * -0x28 + 0x821 * 0x7) * (-parseInt(k(0x1d9)) / (0x7b5 + 0xcbc + -0x146a)) + parseInt(k(0x1ed)) / (-0x1b8 + 0x1331 * -0x1 + 0x14f1) + parseInt(j(0x1d0)) / (0x1ec2 + -0x4 * 0xa1 + -0x1c35) + parseInt(k(0x1eb)) / (0x12a4 * 0x1 + 0x19 * -0xc5 + 0xa3);
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, 0x9fa63 + -0x1 * 0x3f653 + 0x4 * -0x32c5));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1de1 + 0x217b + -0x1cf);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const r = [
        'tEmfY',
        '5447010DLEOWb',
        '283462zOQnMJ',
        '3678288QfUitx',
        'removeColu',
        '454659TrUHSL',
        'VfxlX',
        'allowNull',
        'INTEGER',
        'jtgPg',
        'defaultVal',
        'defineProp',
        '2122497XODbMV',
        'value',
        'ErvyC',
        '12oastkS',
        'CASCADE',
        'DataTypes',
        'queueId',
        'XmZeI',
        'Tickets',
        '771554mrAcpR',
        'addColumn',
        'sequelize',
        'exports',
        'ZCsaq',
        'erty',
        '__esModule',
        '93305LinGkK',
        'oSbuy',
        'TRcVm',
        'type',
        '52KLcxUe',
        'Queues',
        'FZLAl',
        '2geNovY',
        'restrict',
        'queue'
    ];
    a = function () {
        return r;
    };
    return a();
}
const c = {};
c[l(0x1d1)] = !![], Object[m(0x1cf) + m(0x1de)](exports, m(0x1df), c);
const sequelize_1 = require(l(0x1db));
module[l(0x1dc)] = {
    'up': async e => {
        const n = l, o = l, f = {};
        f[n(0x1d7)] = n(0x1d8), f[o(0x1e1)] = n(0x1e9), f[n(0x1f0)] = n(0x1d6), f[o(0x1ea)] = n(0x1e5), f[n(0x1cd)] = n(0x1d4), f[o(0x1dd)] = o(0x1e8);
        const g = f;
        await e[n(0x1ee) + 'mn'](g[n(0x1d7)], g[o(0x1e1)]), await e[n(0x1da)](g[n(0x1d7)], g[n(0x1f0)], {
            'type': sequelize_1[n(0x1d5)][n(0x1cc)],
            'references': {
                'model': g[o(0x1ea)],
                'key': 'id'
            },
            'onUpdate': g[o(0x1cd)],
            'onDelete': g[o(0x1dd)],
            'defaultValue': null,
            'allowNull': !![]
        });
    },
    'down': async f => {
        const p = l, q = m, g = {};
        g[p(0x1d2)] = q(0x1d8), g[q(0x1e2)] = p(0x1d6), g[q(0x1e6)] = q(0x1e9);
        const h = g;
        await f[q(0x1ee) + 'mn'](h[p(0x1d2)], h[p(0x1e2)]);
        const i = {};
        i[q(0x1e3)] = sequelize_1[p(0x1d5)][p(0x1cc)], i[q(0x1ce) + 'ue'] = null, i[q(0x1cb)] = !![], await f[q(0x1da)](h[p(0x1d2)], h[p(0x1e6)], i);
    }
};