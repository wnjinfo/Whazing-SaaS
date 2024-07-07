'use strict';
const m = b, n = b;
(function (d, e) {
    const k = b, l = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(k(0x194)) / (-0x1bc3 + -0xd * 0x40 + 0x1f04) + parseInt(l(0x184)) / (0x193a + 0x1 * -0x20e3 + 0x7ab) * (parseInt(l(0x1a1)) / (-0x1ad7 * 0x1 + 0x3 * -0x7d8 + 0x3262)) + -parseInt(l(0x191)) / (0x1927 * 0x1 + 0x178e + -0x30b1) * (-parseInt(l(0x182)) / (-0xb * 0x95 + -0x2655 * -0x1 + -0x1fe9)) + parseInt(l(0x18a)) / (0xc4f + 0x469 * 0x3 + -0x1984) * (-parseInt(l(0x187)) / (-0x15a + 0xace + -0x96d)) + -parseInt(l(0x190)) / (0x1 * 0x10cb + -0x1b60 + 0x8f * 0x13) * (parseInt(k(0x197)) / (0xf45 + 0xc87 * -0x1 + 0xe7 * -0x3)) + parseInt(l(0x192)) / (-0x5 * 0x63b + -0x3 * -0x2d1 + 0x16be) * (parseInt(k(0x19f)) / (0x997 + 0x38 * 0x9d + -0x2be4)) + -parseInt(k(0x186)) / (0x4ed + -0x24c2 + -0x1 * -0x1fe1) * (parseInt(l(0x183)) / (0x1644 + 0x106e + -0x26a5));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0x10dbe9 + 0x3054 * 0x12 + -0x199dab * -0x1));
function a() {
    const s = [
        'addColumn',
        '310563rCEPRR',
        'erty',
        '19905okSFxJ',
        'ble',
        '25IVKktA',
        '117KicUyt',
        '118iAtPCi',
        'value',
        '25032rExpWZ',
        '21JgeEdu',
        'type',
        'describeTa',
        '1042206KStsDn',
        'Messages',
        'defineProp',
        'allowNull',
        'seOCF',
        'OPSQq',
        '10126744DfHhqK',
        '813204tqYDsj',
        '300VAnNkB',
        'UWJqc',
        '347346BMxuHI',
        'DataTypes',
        '__esModule',
        '9tvfTHX',
        'exports',
        'TEXT',
        'removeColu',
        'BwCQh',
        'sequelize',
        'dataJson'
    ];
    a = function () {
        return s;
    };
    return a();
}
const c = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x26ab * -0x1 + -0x456 + 0x279 * 0x12);
        let h = e[f];
        return h;
    }, b(c, d);
}
c[m(0x185)] = !![], Object[m(0x18c) + m(0x1a0)](exports, m(0x196), c);
const sequelize_1 = require(m(0x19c));
module[n(0x198)] = {
    'up': async f => {
        const o = n, p = n, g = {};
        g[o(0x18f)] = p(0x18b), g[p(0x193)] = p(0x19d);
        const h = g, i = await f[o(0x189) + p(0x181)](h[o(0x18f)]);
        if (!i || !i[h[o(0x193)]]) {
            const j = {};
            j[o(0x188)] = sequelize_1[p(0x195)][p(0x199)], j[p(0x18d)] = !![], await f[p(0x19e)](h[o(0x18f)], h[o(0x193)], j);
        }
    },
    'down': async e => {
        const q = n, r = m, f = {};
        f[q(0x18e)] = r(0x18b), f[r(0x19b)] = q(0x19d);
        const g = f;
        await e[q(0x19a) + 'mn'](g[q(0x18e)], g[q(0x19b)]);
    }
};