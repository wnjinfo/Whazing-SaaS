'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x91d * 0x4 + -0x2163 * -0x1 + 0x3ec);
        let h = e[f];
        return h;
    }, b(c, d);
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0xfa)) / (0x1 * -0xbe3 + 0x1625 + -0xa41) + parseInt(p(0xf1)) / (0x2f3 * 0x5 + -0xf63 * -0x2 + -0x2d83) + -parseInt(p(0xe7)) / (0x19c6 + -0x4 * 0x8f1 + -0x1 * -0xa01) * (parseInt(p(0xdb)) / (-0x511 + 0xd20 + 0x47 * -0x1d)) + parseInt(p(0xe0)) / (0xc0b * 0x2 + -0x1af9 + 0x2 * 0x174) * (-parseInt(q(0x105)) / (0x14c5 + -0x1159 * -0x2 + 0xf9 * -0x39)) + -parseInt(q(0xf6)) / (-0xc1a * 0x2 + -0x1 * -0xb53 + 0xce8) + -parseInt(q(0xfd)) / (0x17 * -0x18d + 0x946 + 0x1a6d) * (-parseInt(p(0x102)) / (0x92a + -0x1a2 + -0x77f)) + parseInt(q(0xfc)) / (-0x1 * 0x12e9 + -0x15 * 0x179 + 0x31e0) * (parseInt(q(0x10b)) / (-0x11e1 + -0x24a * -0xc + -0x98c));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x14c3 + 0x54b88 + -0x1c16f));
const o = {};
o[r(0xdc)] = !![], Object[r(0xf8) + r(0xf9)](exports, r(0x101), o);
const sequelize_1 = require(s(0xf4));
function a() {
    const x = [
        'STRING',
        'YXzLT',
        'allowNull',
        '2395uVjqfs',
        'straint_co',
        'traint',
        'removeCons',
        'unique_con',
        'oKJrq',
        'changeColu',
        '6HBNzqZ',
        'er_tenant',
        'bhYCy',
        'RIMhD',
        'eagdk',
        'int',
        'all',
        'BIGINT',
        'SuUQE',
        'yYZhl',
        '69794UwcGLC',
        'type',
        'removeColu',
        'sequelize',
        'addConstra',
        '1554126LZvExP',
        'unique',
        'defineProp',
        'erty',
        '449132rzehtF',
        'exports',
        '189580bQiWUy',
        '222608nvkhtB',
        'LStxD',
        'ntact_numb',
        'Contacts',
        '__esModule',
        '18lbdGWD',
        'addColumn',
        'telegramId',
        '3102wFJoYc',
        'pgDnt',
        'defaultVal',
        'number',
        'DataTypes',
        'qDDXv',
        '308sdVqqi',
        'tenantId',
        '727136ptNeNq',
        'value'
    ];
    a = function () {
        return x;
    };
    return a();
}
module[s(0xfb)] = {
    'up': f => {
        const t = r, u = s, g = {};
        g[t(0xea)] = u(0x100), g[u(0xe9)] = t(0x104), g[t(0xfe)] = u(0xe4) + u(0xe1) + u(0xff) + t(0xe8), g[u(0x10a)] = t(0x108);
        const h = g, i = {};
        i[u(0xf2)] = sequelize_1[t(0x109)][u(0xee)], i[t(0x107) + 'ue'] = null, i[t(0xdf)] = !![];
        const j = {};
        return j[t(0xf2)] = sequelize_1[u(0x109)][u(0xdd)], j[t(0xdf)] = !![], j[u(0xf7)] = ![], j[u(0x107) + 'ue'] = null, Promise[u(0xed)]([
            f[u(0x103)](h[u(0xea)], h[t(0xe9)], i),
            f[t(0xe3) + t(0xe2)](h[u(0xea)], h[u(0xfe)]),
            f[t(0xe6) + 'mn'](h[u(0xea)], h[u(0x10a)], j)
        ]);
    },
    'down': e => {
        const v = s, w = r, f = {};
        f[v(0xf0)] = w(0x100), f[w(0xef)] = w(0x104), f[v(0xe5)] = v(0x108), f[w(0xde)] = v(0x10c), f[v(0x106)] = w(0xf7), f[v(0xeb)] = w(0xe4) + v(0xe1) + v(0xff) + v(0xe8);
        const g = f, h = {};
        return h[v(0xf2)] = sequelize_1[v(0x109)][w(0xdd)], h[v(0xdf)] = ![], h[w(0xf7)] = !![], Promise[v(0xed)]([
            e[w(0xf3) + 'mn'](g[w(0xf0)], g[v(0xef)]),
            e[v(0xe6) + 'mn'](g[v(0xf0)], g[w(0xe5)], h),
            e[v(0xf5) + w(0xec)](g[v(0xf0)], [
                g[v(0xe5)],
                g[w(0xde)]
            ], {
                'type': g[w(0x106)],
                'name': g[w(0xeb)]
            })
        ]);
    }
};