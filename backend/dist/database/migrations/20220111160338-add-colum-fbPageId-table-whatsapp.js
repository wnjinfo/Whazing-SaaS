'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0xb1)) / (-0x2343 + -0x1 * -0x1683 + 0x28d * 0x5) + -parseInt(o(0xa0)) / (0x1317 + -0x1d * -0x8b + -0x22d4) * (-parseInt(n(0xa7)) / (-0x24b4 + -0x22 * 0x3 + 0x251d)) + parseInt(n(0xa2)) / (-0x1 * 0x214a + -0x1 * -0x22ac + 0x7 * -0x32) * (-parseInt(n(0x9e)) / (0x221a + 0x103c + -0x3251)) + parseInt(n(0x9a)) / (-0x1cbe + -0x10de + 0x16d1 * 0x2) + parseInt(n(0x9f)) / (-0x1cb3 * 0x1 + 0x917 * 0x2 + 0x4 * 0x2a3) * (-parseInt(n(0xaa)) / (0x13 * 0xe2 + -0x1609 * 0x1 + -0x1 * -0x54b)) + parseInt(o(0xb3)) / (-0xd80 + 0x5 * -0x26b + 0x19a0) * (parseInt(n(0xb5)) / (-0xaba + 0x1 * -0x9d2 + 0x1496)) + parseInt(o(0xb4)) / (0xa * -0x4f + 0x2e1 + 0x1 * 0x40);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3215 * 0x3f + 0x79fa7 * 0x1 + 0xbfe04));
const m = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x42b * -0x8 + -0x86 * -0xf + 0x1a11);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const v = [
        'erty',
        '2440DoeYdi',
        'exports',
        'allowNull',
        'xKeAX',
        'fbPageId',
        'eEIQy',
        'fbObject',
        '619418zSzQol',
        'defaultVal',
        '1375758yZaWBH',
        '8167071NqJRVD',
        '50HVKgVE',
        'VyvqV',
        'DataTypes',
        'mCORS',
        'AFoUr',
        '__esModule',
        'all',
        'TEXT',
        '1048650rumBtY',
        'value',
        'addColumn',
        'wrIhE',
        '130CMZewb',
        '4781oBLRlx',
        '98fZjuup',
        'Whatsapps',
        '58440bXijHE',
        'defineProp',
        'type',
        'sequelize',
        'removeColu',
        '237oAyKUx',
        'JSONB'
    ];
    a = function () {
        return v;
    };
    return a();
}
m[p(0x9b)] = !![], Object[q(0xa3) + p(0xa9)](exports, p(0x97), m);
const sequelize_1 = require(q(0xa5));
module[p(0xab)] = {
    'up': f => {
        const r = q, s = p, g = {};
        g[r(0xad)] = s(0xa1), g[r(0x96)] = r(0xae), g[s(0x9d)] = s(0xb0);
        const h = g, i = {};
        i[s(0xa4)] = sequelize_1[r(0x94)][s(0x99)], i[s(0xac)] = !![], i[r(0xb2) + 'ue'] = null;
        const j = {};
        return j[r(0xa4)] = sequelize_1[r(0x94)][r(0xa8)], j[s(0xac)] = !![], j[r(0xb2) + 'ue'] = null, Promise[s(0x98)]([
            f[s(0x9c)](h[s(0xad)], h[r(0x96)], i),
            f[s(0x9c)](h[r(0xad)], h[s(0x9d)], j)
        ]);
    },
    'down': d => {
        const t = q, u = p, e = {};
        e[t(0xaf)] = u(0xa1), e[u(0x93)] = t(0xae), e[u(0x95)] = t(0xb0);
        const f = e;
        return Promise[u(0x98)]([
            d[t(0xa6) + 'mn'](f[u(0xaf)], f[u(0x93)]),
            d[u(0xa6) + 'mn'](f[u(0xaf)], f[u(0x95)])
        ]);
    }
};