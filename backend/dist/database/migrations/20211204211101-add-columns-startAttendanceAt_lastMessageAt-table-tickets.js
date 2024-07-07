'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0xaf)) / (0x3b2 * 0x2 + -0x1ec5 + 0x2 * 0xbb1) + -parseInt(s(0xb4)) / (0x9 * 0x42f + -0x1cfe + -0x8a7) + -parseInt(r(0xb2)) / (0x1190 + -0x24cd * -0x1 + -0x365a) + parseInt(r(0xbf)) / (-0x167 + -0x1 * -0x18fb + -0x1790) * (parseInt(s(0xbc)) / (0x15b6 + 0x1844 + -0x2df5)) + parseInt(s(0x9f)) / (-0x21 * -0x10f + 0x1435 + -0x371e) + parseInt(s(0xa1)) / (-0x14c3 + -0x1 * -0x21cd + -0xd03) * (parseInt(s(0xad)) / (0x5 * 0x29 + 0x1eb1 + -0x1f76)) + -parseInt(s(0x9e)) / (-0x13f9 + 0x35 * 0x53 + 0x2d3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x35b2b + -0x6 * 0xa63d + -0x68ee * -0x7));
const q = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 * -0x8db + 0x1062 + -0x3 * -0xa5);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const z = [
        'lastMessag',
        'OGyCd',
        'defineProp',
        'eAt',
        '8rBcuvn',
        'VsGle',
        '186827XpRVKg',
        'removeColu',
        'allowNull',
        '488232pJyBfk',
        'addColumn',
        '293736CrLNPh',
        'value',
        'XmOmz',
        'Tickets',
        'exports',
        'sequelize',
        'DataTypes',
        'defaultVal',
        '5WGEwmP',
        'all',
        'startedAtt',
        '1166444kygZuD',
        'closedAt',
        'VzPQi',
        'MbBer',
        '2891754vkcDXI',
        '537822oVfrjX',
        '__esModule',
        '1508374gKnfOq',
        'XolIl',
        'BIGINT',
        'endanceAt',
        'hgMKf',
        'UELCn',
        'type',
        'erty'
    ];
    a = function () {
        return z;
    };
    return a();
}
q[t(0xb5)] = !![], Object[u(0xab) + u(0xa8)](exports, u(0xa0), q);
const sequelize_1 = require(t(0xb9));
module[t(0xb8)] = {
    'up': g => {
        const v = u, w = u, h = {};
        h[v(0xa2)] = v(0xb7), h[v(0x9c)] = w(0xa9) + w(0xac), h[w(0xa5)] = w(0xbe) + v(0xa4), h[v(0x9d)] = w(0x9b);
        const i = h, j = {};
        j[v(0xa7)] = sequelize_1[v(0xba)][v(0xa3)], j[w(0xb1)] = !![], j[w(0xbb) + 'ue'] = null;
        const k = {};
        k[w(0xa7)] = sequelize_1[v(0xba)][w(0xa3)], k[w(0xb1)] = !![], k[v(0xbb) + 'ue'] = null;
        const l = {};
        return l[w(0xa7)] = sequelize_1[v(0xba)][w(0xa3)], l[w(0xb1)] = !![], l[w(0xbb) + 'ue'] = null, Promise[w(0xbd)]([
            g[v(0xb3)](i[w(0xa2)], i[v(0x9c)], j),
            g[v(0xb3)](i[w(0xa2)], i[w(0xa5)], k),
            g[v(0xb3)](i[v(0xa2)], i[w(0x9d)], l)
        ]);
    },
    'down': d => {
        const x = t, y = u, e = {};
        e[x(0xb6)] = x(0xb7), e[y(0xaa)] = y(0xa9) + y(0xac), e[y(0xa6)] = x(0xbe) + y(0xa4), e[y(0xae)] = x(0x9b);
        const f = e;
        return Promise[x(0xbd)]([
            d[x(0xb0) + 'mn'](f[y(0xb6)], f[y(0xaa)]),
            d[y(0xb0) + 'mn'](f[x(0xb6)], f[y(0xa6)]),
            d[y(0xb0) + 'mn'](f[x(0xb6)], f[x(0xae)])
        ]);
    }
};