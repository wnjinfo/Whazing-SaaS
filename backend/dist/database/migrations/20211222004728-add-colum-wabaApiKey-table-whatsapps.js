'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0xe6)) / (-0xca3 + -0x839 * 0x2 + -0x1b6 * -0x11) * (parseInt(r(0x103)) / (-0xae3 + -0x22c0 + 0x2da5)) + -parseInt(r(0xfe)) / (-0xb1f * -0x2 + 0x1b5b + -0x3196) + -parseInt(r(0xef)) / (-0x1 * 0x1cc0 + 0x1ed4 + -0x210) * (parseInt(s(0xe7)) / (-0x11fd + -0x1a4e + 0x1628 * 0x2)) + parseInt(r(0xed)) / (0x70 + 0x17e4 * 0x1 + -0x7a * 0x33) + -parseInt(s(0x105)) / (-0x1064 * 0x1 + 0x1c8e + -0xef * 0xd) * (parseInt(r(0xf6)) / (0xf * 0x1c3 + 0xb31 * -0x3 + 0x72e)) + parseInt(s(0x102)) / (0x1af3 + -0x1450 + -0x69a) + parseInt(s(0xf2)) / (-0x1332 + -0x70d + 0x1a49 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x29929 + -0xb4 * -0xcd + 0x43731));
const q = {};
q[t(0x101)] = !![], Object[t(0xf3) + t(0xee)](exports, u(0xfc), q);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x6 * -0x345 + 0x6bf + 0xdc4);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const z = [
        'wabaBSP',
        'value',
        '713412viSKgP',
        '2JZWNXX',
        'RAWir',
        '7WUAbGP',
        'addColumn',
        'all',
        'pfbAk',
        'type',
        'TEXT',
        '214018vFKhSR',
        '78565UWakkB',
        'allowNull',
        'llmxt',
        'defaultVal',
        'sequelize',
        'mPpIf',
        '922896aoxFED',
        'erty',
        '28emUpcC',
        'STRING',
        'CUSrZ',
        '5147390BPoHIb',
        'defineProp',
        'fFuEk',
        'wabaKeyHoo',
        '956680UlpXWR',
        'exports',
        'MIkKi',
        'removeColu',
        'Whatsapps',
        'tokenAPI',
        '__esModule',
        'DataTypes',
        '484011RwXgUT',
        'HwuIc'
    ];
    a = function () {
        return z;
    };
    return a();
}
const sequelize_1 = require(u(0xeb));
module[u(0xf7)] = {
    'up': g => {
        const v = t, w = u, h = {};
        h[v(0xf1)] = w(0xfa), h[w(0x104)] = w(0xfb), h[v(0xf4)] = v(0x100), h[v(0x108)] = w(0xf5) + 'k';
        const i = h, j = {};
        j[v(0x109)] = sequelize_1[w(0xfd)][v(0xe5)], j[w(0xe8)] = !![], j[w(0xea) + 'ue'] = null;
        const k = {};
        k[v(0x109)] = sequelize_1[w(0xfd)][w(0xf0)], k[v(0xe8)] = !![], k[v(0xea) + 'ue'] = null;
        const l = {};
        return l[v(0x109)] = sequelize_1[v(0xfd)][w(0xe5)], l[v(0xe8)] = !![], l[w(0xea) + 'ue'] = null, Promise[v(0x107)]([
            g[w(0x106)](i[v(0xf1)], i[v(0x104)], j),
            g[w(0x106)](i[v(0xf1)], i[w(0xf4)], k),
            g[v(0x106)](i[v(0xf1)], i[w(0x108)], l)
        ]);
    },
    'down': d => {
        const x = u, y = u, e = {};
        e[x(0xf8)] = x(0xfa), e[x(0xe9)] = x(0xfb), e[y(0xff)] = x(0x100), e[x(0xec)] = y(0xf5) + 'k';
        const f = e;
        return Promise[x(0x107)]([
            d[y(0xf9) + 'mn'](f[y(0xf8)], f[x(0xe9)]),
            d[y(0xf9) + 'mn'](f[x(0xf8)], f[x(0xff)]),
            d[y(0xf9) + 'mn'](f[x(0xf8)], f[y(0xec)])
        ]);
    }
};