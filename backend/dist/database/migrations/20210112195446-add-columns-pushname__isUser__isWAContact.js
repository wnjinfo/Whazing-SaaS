'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0xa6)) / (0x1891 * -0x1 + -0x26 * -0x6f + 0x2 * 0x40c) + -parseInt(r(0xa2)) / (0x6b * -0x47 + 0x1f10 + -0x1 * 0x161) * (parseInt(s(0x9a)) / (-0x496 * -0x8 + -0x399 * -0x1 + 0x407 * -0xa)) + parseInt(r(0x8f)) / (0x2bb * 0xd + -0x19b8 * -0x1 + 0x3d33 * -0x1) + -parseInt(r(0x8a)) / (0xd4f * -0x1 + 0x13a + 0xc1a) * (parseInt(r(0xa1)) / (-0x2 * -0x63 + -0x97 * 0x3e + 0x23d2)) + -parseInt(s(0xa3)) / (-0x225 * -0xb + -0xfe + -0x1692) * (-parseInt(s(0x99)) / (-0x20a7 + 0x41 * -0x1 + 0x3e * 0x88)) + -parseInt(s(0x90)) / (0x25fe + 0x1d54 + -0x4349) * (-parseInt(r(0x9b)) / (-0x1 * 0x22cd + -0x252 + 0x2529)) + -parseInt(r(0x9e)) / (-0xb * -0x24c + -0xd25 + 0x2 * -0x60a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xda3 * -0xa + 0xdcd48 + -0x52786 * 0x1));
const q = {};
q[t(0x89)] = !![], Object[t(0x8d) + t(0x9c)](exports, u(0x8e), q);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1955 * 0x1 + 0x12e3 + -0x1 * 0x2baf);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(t(0x92));
function a() {
    const z = [
        'ikdqO',
        '2157738HyjzVW',
        'BOOLEAN',
        'pushname',
        '12174sGLXLC',
        '175130AuHsqA',
        '119133tGGqId',
        'isUser',
        'Contacts',
        '801445qDezrW',
        'DataTypes',
        'allowNull',
        'DjTcw',
        'TCYkE',
        'defaultVal',
        'addColumn',
        'bjuyT',
        'removeColu',
        'value',
        '1190XxVfdT',
        'JAlLv',
        'type',
        'defineProp',
        '__esModule',
        '2354076xCsFMx',
        '5503167ZJVWbd',
        'eWAeS',
        'sequelize',
        'ePiFO',
        'all',
        'isWAContac',
        'STRING',
        'exports',
        'laixS',
        '40yjBqZp',
        '30twvmfO',
        '10myNulo',
        'erty'
    ];
    a = function () {
        return z;
    };
    return a();
}
module[t(0x97)] = {
    'up': g => {
        const v = u, w = u, h = {};
        h[v(0xad)] = v(0xa5), h[w(0xaa)] = v(0xa0), h[v(0x8b)] = w(0xa4), h[v(0xa9)] = v(0x95) + 't';
        const i = h, j = {};
        j[w(0x8c)] = sequelize_1[v(0xa7)][v(0x96)], j[w(0xa8)] = !![], j[w(0xab) + 'ue'] = null;
        const k = {};
        k[w(0x8c)] = sequelize_1[v(0xa7)][w(0x9f)], k[v(0xa8)] = !![], k[v(0xab) + 'ue'] = null;
        const l = {};
        return l[v(0x8c)] = sequelize_1[w(0xa7)][v(0x9f)], l[w(0xa8)] = !![], l[v(0xab) + 'ue'] = null, Promise[v(0x94)]([
            g[v(0xac)](i[v(0xad)], i[w(0xaa)], j),
            g[v(0xac)](i[w(0xad)], i[w(0x8b)], k),
            g[v(0xac)](i[v(0xad)], i[v(0xa9)], l)
        ]);
    },
    'down': d => {
        const x = t, y = u, e = {};
        e[x(0x9d)] = y(0xa5), e[y(0x91)] = x(0xa0), e[x(0x98)] = y(0xa4), e[y(0x93)] = x(0x95) + 't';
        const f = e;
        return Promise[x(0x94)]([
            d[y(0xae) + 'mn'](f[y(0x9d)], f[x(0x91)]),
            d[x(0xae) + 'mn'](f[y(0x9d)], f[x(0x98)]),
            d[x(0xae) + 'mn'](f[x(0x9d)], f[y(0x93)])
        ]);
    }
};