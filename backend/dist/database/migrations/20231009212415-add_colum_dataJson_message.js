'use strict';
const m = b, n = b;
(function (d, e) {
    const k = b, l = b, f = d();
    while (!![]) {
        try {
            const g = -parseInt(k(0x188)) / (0x16a5 + -0x1fa6 + 0x902) + parseInt(k(0x179)) / (-0x1a5 * -0x14 + -0x6 * -0x1b + -0x2cb * 0xc) * (parseInt(l(0x181)) / (-0x1 * 0x1125 + 0xd7e + 0x3aa)) + -parseInt(k(0x187)) / (0x1d98 + -0x1049 + -0xd4b) * (parseInt(k(0x178)) / (-0x167 * -0x3 + 0x2bd * -0x6 + 0xc3e)) + parseInt(l(0x186)) / (0x24b6 + -0x1a63 + -0x125 * 0x9) + parseInt(k(0x17a)) / (-0x1 * -0x16bc + -0x2505 + 0x1ca * 0x8) + parseInt(k(0x18f)) / (0x35 * 0x6d + 0x15a2 + -0x2c2b) * (-parseInt(l(0x177)) / (-0x20e5 + -0x161 * -0x3 + 0x1ccb)) + parseInt(l(0x18a)) / (-0x24f0 + 0x16da + 0xe20) * (parseInt(l(0x18e)) / (-0x1 * 0xcc + 0x2260 + -0x2189));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0xbc7b + -0x1 * 0x4338b + 0x86080));
const c = {};
function a() {
    const s = [
        '44YprWNK',
        '848932SLgMUZ',
        'type',
        'DataTypes',
        'ble',
        'sequelize',
        'dataJson',
        'allowNull',
        '10938IjXakN',
        'Ayzbf',
        'QHIjY',
        'defineProp',
        'Messages',
        '217686aUOFxn',
        '2096oZLFmR',
        '102993soxJGx',
        'TEXT',
        '20sNlEtr',
        'removeColu',
        'describeTa',
        'erty',
        '2304940GpQAjt',
        '170920wDUHqf',
        '__esModule',
        'exports',
        'addColumn',
        'Yqjuw',
        'value',
        'xhovN',
        '126uPeqbV',
        '280YvzEVu'
    ];
    a = function () {
        return s;
    };
    return a();
}
c[m(0x194)] = !![], Object[m(0x184) + n(0x18d)](exports, m(0x190), c);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x3e7 + 0x1214 + -0xcb6 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(m(0x17e));
module[m(0x191)] = {
    'up': async f => {
        const o = m, p = m, g = {};
        g[o(0x193)] = o(0x185), g[o(0x183)] = p(0x17f);
        const h = g, i = await f[o(0x18c) + o(0x17d)](h[o(0x193)]);
        if (!i || !i[h[o(0x183)]]) {
            const j = {};
            j[o(0x17b)] = sequelize_1[p(0x17c)][p(0x189)], j[o(0x180)] = !![], await f[o(0x192)](h[p(0x193)], h[p(0x183)], j);
        }
    },
    'down': async e => {
        const q = m, r = n, f = {};
        f[q(0x195)] = q(0x185), f[q(0x182)] = r(0x17f);
        const g = f;
        await e[r(0x18b) + 'mn'](g[q(0x195)], g[q(0x182)]);
    }
};