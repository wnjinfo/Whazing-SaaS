'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x1d5)) / (-0x256 + -0x15a8 + 0x17ff * 0x1) + parseInt(n(0x1d2)) / (-0x114 + 0x921 + -0x80b) + -parseInt(o(0x1dc)) / (-0x228a + 0x1e2 + 0x20ab) * (-parseInt(n(0x1df)) / (0xd40 + 0x1532 + -0x226e)) + parseInt(n(0x1c3)) / (0x49 * -0xe + 0x533 * -0x7 + -0x2868 * -0x1) + -parseInt(n(0x1c8)) / (-0xccf * -0x1 + 0x4 * 0x598 + -0x2329 * 0x1) + -parseInt(o(0x1cd)) / (-0x2421 + 0x120 * 0xf + -0x269 * -0x8) * (parseInt(n(0x1d0)) / (0x2b * -0x5c + 0x39e + 0xbde)) + parseInt(n(0x1d4)) / (-0xd37 + -0x3b * 0x4f + 0x1f75) * (parseInt(o(0x1d6)) / (0x1bf * 0xd + -0x1 * -0x21d0 + -0x3879));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xc719e + -0x71e8a + 0x22 * 0xe39f));
function a() {
    const v = [
        'allowNull',
        '8cOlJwR',
        'DataTypes',
        '2425874XAPNqi',
        'removeColu',
        '3275694QIITih',
        '1241676KZzBIC',
        '50gaDKKH',
        'erty',
        'defaultVal',
        'addColumn',
        'all',
        'sequelize',
        '377694gwAtlh',
        'celularTes',
        '__esModule',
        '8jPmHRm',
        'EKdcG',
        'AHEkX',
        'value',
        'AutoReply',
        'type',
        '3216425JSEzOt',
        'WPawu',
        'defineProp',
        'BOOLEAN',
        'kJbdg',
        '5271336vsnVsX',
        'exports',
        'STRING',
        'SjSwL',
        'jrqlm',
        '7759430tyOVRu',
        'isActive'
    ];
    a = function () {
        return v;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2133 + -0x2 * 0xb85 + 0x1 * 0x39fb);
        let h = e[f];
        return h;
    }, b(c, d);
}
const m = {};
m[p(0x1c0)] = !![], Object[q(0x1c5) + p(0x1d7)](exports, p(0x1de), m);
const sequelize_1 = require(p(0x1db));
module[p(0x1c9)] = {
    'up': f => {
        const r = q, s = p, g = {};
        g[r(0x1bf)] = r(0x1c1), g[s(0x1c7)] = s(0x1ce), g[s(0x1cb)] = s(0x1dd) + 'te';
        const h = g, i = {};
        i[r(0x1c2)] = sequelize_1[r(0x1d1)][s(0x1c6)], i[s(0x1cf)] = ![], i[s(0x1d8) + 'ue'] = !![];
        const j = {};
        return j[r(0x1c2)] = sequelize_1[s(0x1d1)][r(0x1ca)], j[r(0x1cf)] = !![], j[r(0x1d8) + 'ue'] = null, Promise[r(0x1da)]([
            f[r(0x1d9)](h[r(0x1bf)], h[r(0x1c7)], i),
            f[r(0x1d9)](h[s(0x1bf)], h[r(0x1cb)], j)
        ]);
    },
    'down': d => {
        const t = p, u = q, e = {};
        e[t(0x1c4)] = t(0x1c1), e[t(0x1cc)] = u(0x1ce), e[t(0x1be)] = u(0x1dd) + 'te';
        const f = e;
        return Promise[t(0x1da)]([
            d[t(0x1d3) + 'mn'](f[t(0x1c4)], f[u(0x1cc)]),
            d[t(0x1d3) + 'mn'](f[t(0x1c4)], f[t(0x1be)])
        ]);
    }
};