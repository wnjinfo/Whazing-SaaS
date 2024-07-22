'use strict';
const k = b, l = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x766 + -0x1 * 0x1f01 + -0x1 * -0x1977);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const i = b, j = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(i(0x1ee)) / (0x10c2 + 0x2351 + -0x3412) * (parseInt(i(0x1e6)) / (-0x3 * -0x4a9 + -0x1 * -0x259 + -0x2 * 0x829)) + -parseInt(i(0x1fc)) / (-0x13d * 0x1c + 0x151 * 0x11 + 0x1 * 0xc4e) * (-parseInt(j(0x1e1)) / (-0x2706 + 0x2 * -0x8bd + 0x1 * 0x3884)) + parseInt(j(0x1fb)) / (-0x253f + -0x11e2 + 0x3726) * (-parseInt(j(0x1fa)) / (-0x2 * -0xe8 + -0x2207 + 0x15 * 0x189)) + -parseInt(i(0x1f8)) / (0x1975 + 0x941 + -0x1 * 0x22af) * (-parseInt(j(0x1f5)) / (-0xe47 * -0x1 + 0x1f9a + -0x2dd9)) + -parseInt(i(0x1f1)) / (-0x18a3 + 0x1 * 0x159e + 0x30e) * (-parseInt(j(0x1e8)) / (0xea2 + -0x13d6 + 0x1 * 0x53e)) + parseInt(j(0x1e9)) / (0x222c + -0x2 * -0xf61 + -0x40e3) + -parseInt(j(0x1fe)) / (-0x3f * 0x1b + -0x1a58 + 0x2109) * (parseInt(j(0x1f2)) / (0x6c2 + 0x1fd5 * -0x1 + -0x218 * -0xc));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (h) {
            e['push'](e['shift']());
        }
    }
}(a, -0x6fea3 + 0x5 * 0x9686 + -0x1 * -0xab29e));
function a() {
    const q = [
        'CASCADE',
        'HgSne',
        'PygLA',
        'INTEGER',
        '190756NOgpMS',
        'Tenants',
        '10HNlKIN',
        '292127SwLZiJ',
        'xxpJO',
        'SET\x20NULL',
        'DataTypes',
        'defineProp',
        '8UeVNNe',
        'nxXCv',
        'erty',
        '222687nQPApn',
        '13QzVTRO',
        'PfgLC',
        'planId',
        '48tcrsgi',
        'asRME',
        'exports',
        '442694hfHOxd',
        'Plans',
        '56598hGFlxK',
        '155LCobib',
        '3ZDhTRs',
        'removeColu',
        '9930612cdaVhc',
        '__esModule',
        'addColumn',
        'zLrOl',
        'value',
        'sequelize',
        '1446204TGtXfm'
    ];
    a = function () {
        return q;
    };
    return a();
}
const g = {};
g[k(0x1df)] = !![], Object[k(0x1ed) + k(0x1f0)](exports, l(0x1dc), g);
const sequelize_1 = require(k(0x1e0));
module[l(0x1f7)] = {
    'up': d => {
        const m = k, n = k, e = {};
        e[m(0x1ea)] = m(0x1e7), e[m(0x1f6)] = n(0x1f4), e[m(0x1e3)] = n(0x1f9), e[n(0x1e4)] = m(0x1e2), e[m(0x1f3)] = n(0x1eb);
        const f = e;
        return d[m(0x1dd)](f[m(0x1ea)], f[m(0x1f6)], {
            'type': sequelize_1[n(0x1ec)][n(0x1e5)],
            'references': {
                'model': f[n(0x1e3)],
                'key': 'id'
            },
            'onUpdate': f[n(0x1e4)],
            'onDelete': f[n(0x1f3)]
        });
    },
    'down': d => {
        const o = l, p = l, e = {};
        e[o(0x1de)] = o(0x1e7), e[p(0x1ef)] = p(0x1f4);
        const f = e;
        return d[p(0x1fd) + 'mn'](f[o(0x1de)], f[o(0x1ef)]);
    }
};