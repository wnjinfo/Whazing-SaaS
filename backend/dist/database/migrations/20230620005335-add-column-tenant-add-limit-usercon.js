'use strict';
const o = b, p = b;
function a() {
    const u = [
        '829768wlvPGL',
        'defineProp',
        'describeTa',
        'jfGIU',
        '3wnXGUL',
        'removeColu',
        '8876857pmslLJ',
        'sequelize',
        'maxUsers',
        'ble',
        'orgzN',
        'BQwNm',
        'Tenants',
        'DataTypes',
        'value',
        'allowNull',
        'WqTXL',
        'maxConnect',
        'OqfJP',
        'BOeWq',
        'addColumn',
        'exports',
        'INTEGER',
        '337448tgGIQz',
        '18GDkwvv',
        '49GlrHKW',
        '513310HXJBQG',
        'type',
        '58742PsCSuF',
        '__esModule',
        'ions',
        '560818zNlzex',
        '6szcMcA',
        'erty',
        '428620LORvDU'
    ];
    a = function () {
        return u;
    };
    return a();
}
(function (d, e) {
    const m = b, n = b, f = d();
    while (!![]) {
        try {
            const g = -parseInt(m(0xfc)) / (-0x4cc + -0x337 * 0x6 + 0x1817) + -parseInt(m(0xff)) / (0x1a06 + 0x250e + -0x9 * 0x702) * (parseInt(m(0xe4)) / (0x1ca1 + -0xdf * 0x4 + 0x1 * -0x1922)) + parseInt(m(0xe0)) / (0x1cf9 + -0x12d * 0xa + -0x275 * 0x7) + -parseInt(m(0xdf)) / (0xc72 + -0x12b9 + -0x34 * -0x1f) * (parseInt(n(0x100)) / (-0x5c * 0x16 + 0x2fb + 0x4f3 * 0x1)) + parseInt(m(0xf9)) / (0xe9f * -0x2 + 0x2b6 + 0x1a8f) * (-parseInt(m(0xf7)) / (0x121 * -0x2 + 0x2171 + 0x19 * -0x13f)) + parseInt(m(0xf8)) / (-0xc54 * 0x2 + -0x1 * -0x493 + 0x32 * 0x67) * (-parseInt(m(0xfa)) / (0x4ef * 0x7 + 0x34 * -0x1 + 0x1 * -0x224b)) + parseInt(n(0xe6)) / (0x1b66 + -0x11ea * -0x1 + 0xf17 * -0x3);
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, 0xdf55 + 0x50b0f * -0x1 + -0x71843 * -0x1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x5e8 + 0x3 * -0xc93 + 0x1 * 0x20af);
        let h = e[f];
        return h;
    }, b(c, d);
}
const c = {};
c[o(0xee)] = !![], Object[o(0xe1) + o(0xde)](exports, p(0xfd), c);
const sequelize_1 = require(o(0xe7));
module[p(0xf5)] = {
    'up': async g => {
        const q = p, r = p, h = {};
        h[q(0xe3)] = q(0xec), h[q(0xf3)] = q(0xe8), h[r(0xf0)] = q(0xf1) + q(0xfe);
        const i = h, j = await g[q(0xe2) + q(0xe9)](i[r(0xe3)]);
        if (!j || !j[i[r(0xf3)]]) {
            const k = {};
            k[q(0xfb)] = sequelize_1[q(0xed)][r(0xf6)], k[q(0xef)] = !![], await g[q(0xf4)](i[r(0xe3)], i[r(0xf3)], k);
        }
        if (!j || !j[i[r(0xf0)]]) {
            const l = {};
            l[q(0xfb)] = sequelize_1[q(0xed)][q(0xf6)], l[r(0xef)] = !![], await g[r(0xf4)](i[r(0xe3)], i[r(0xf0)], l);
        }
    },
    'down': async e => {
        const s = p, t = p, f = {};
        f[s(0xf2)] = t(0xec), f[t(0xea)] = s(0xe8), f[s(0xeb)] = t(0xf1) + t(0xfe);
        const g = f;
        await e[s(0xe5) + 'mn'](g[t(0xf2)], g[t(0xea)]), await e[s(0xe5) + 'mn'](g[s(0xf2)], g[s(0xeb)]);
    }
};