'use strict';
const l = b, m = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xdaf + 0x701 * 0x4 + -0x5bf * 0x7);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(j(0x17e)) / (0x1 * 0x20a1 + 0x10d2 + 0x2 * -0x18b9) + parseInt(k(0x190)) / (0x83 + 0x65 * 0x37 + 0x3a * -0x62) + parseInt(k(0x18d)) / (0x1 * 0x805 + -0x362 * -0x1 + 0x6c * -0x1b) + -parseInt(k(0x187)) / (-0x10b * -0x2 + -0x11d2 * -0x2 + -0x25b6) + -parseInt(k(0x17c)) / (0x1ba3 + -0x1d0f + 0x1 * 0x171) * (parseInt(j(0x193)) / (0x3 * -0x301 + -0xb * 0x2ed + -0x1 * -0x2938)) + parseInt(j(0x182)) / (-0x3a * -0x72 + 0x1bff + -0x35cc) * (parseInt(k(0x183)) / (0x5 * -0x465 + -0x14c7 * -0x1 + -0x2 * -0x9d)) + parseInt(k(0x18a)) / (0x2638 + 0x7 * 0xf7 + -0xb3c * 0x4);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1b9 * 0x31 + 0x2972a * 0x1 + -0xbd8d));
const i = {};
i[l(0x184)] = !![], Object[m(0x17d) + m(0x195)](exports, l(0x18b), i);
const sequelize_1 = require(m(0x17a));
function a() {
    const r = [
        '201038xPqTLH',
        'type',
        'autoIncrem',
        'removeColu',
        '21iqVyVc',
        '699728MDRQFn',
        'value',
        'pdZBC',
        'primaryKey',
        '510104QInUfX',
        'Settings',
        'exports',
        '2194785FUgYYs',
        '__esModule',
        'allowNull',
        '168996VIJlYi',
        'PTiLf',
        'INTEGER',
        '376422fRviYJ',
        'ent',
        'all',
        '12znybsa',
        'DataTypes',
        'erty',
        'sequelize',
        'addColumn',
        '698470TukMBu',
        'defineProp'
    ];
    a = function () {
        return r;
    };
    return a();
}
module[l(0x189)] = {
    'up': e => {
        const n = l, o = l, f = {};
        f[n(0x18e)] = o(0x188);
        const g = f, h = {};
        return h[n(0x17f)] = sequelize_1[n(0x194)][o(0x18f)], h[o(0x180) + o(0x191)] = !![], h[o(0x186)] = !![], h[n(0x18c)] = ![], Promise[o(0x192)]([e[n(0x17b)](g[o(0x18e)], 'id', h)]);
    },
    'down': d => {
        const p = l, q = m, e = {};
        e[p(0x185)] = q(0x188);
        const f = e;
        return Promise[p(0x192)]([d[q(0x181) + 'mn'](f[p(0x185)], 'id')]);
    }
};