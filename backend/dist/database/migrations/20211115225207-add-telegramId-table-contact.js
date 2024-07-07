'use strict';
const r = b, s = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x1f01 + 0x58 + -0x1e47);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x124)) / (-0x263f + 0x17 * -0x83 + 0x3205) * (parseInt(p(0x12b)) / (0x35 * 0x11 + 0x721 * 0x5 + -0x2728)) + parseInt(q(0x115)) / (-0xfa7 * 0x2 + -0x163 + 0x20b4) * (parseInt(q(0x13e)) / (0x1 * -0x25bb + -0x1 * 0x23a5 + 0xf4 * 0x4d)) + -parseInt(p(0x138)) / (-0xe48 + 0x9de + 0x46f) + -parseInt(q(0x137)) / (0x67 * 0x44 + -0x14eb + -0x66b) + parseInt(q(0x11b)) / (0x163f + 0x8a1 * 0x2 + -0x277a) + -parseInt(q(0x136)) / (-0x1 * -0x1f1b + 0x124 * 0x21 + -0x44b7) + parseInt(p(0x127)) / (0x5e + 0x12d6 * -0x2 + 0x2557);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x57d * -0x16c + -0x9d * 0x832 + 0x14d876));
function a() {
    const x = [
        'qDXlC',
        'number',
        '6402151cSAVhI',
        'defaultVal',
        'tenantId',
        'ntact_numb',
        'nJWUV',
        'int',
        'otljN',
        'pupiG',
        'VRBPA',
        '10aMZvSV',
        'BIGINT',
        'traint',
        '9629280jrfcVO',
        'removeCons',
        'obpQk',
        'unique',
        '51276hWpTlj',
        'straint_co',
        'er_tenant',
        'removeColu',
        '__esModule',
        'addColumn',
        'Contacts',
        'type',
        'erty',
        'HpUQq',
        'STRING',
        '6363024xZEUCz',
        '1365438KRsdhY',
        '1946910YDBoaI',
        'telegramId',
        'exports',
        'changeColu',
        'unique_con',
        'allowNull',
        '16krUUda',
        'defineProp',
        'aANkg',
        'ulDmQ',
        'gJrbV',
        'sequelize',
        'all',
        '157146lkoTIS',
        'value',
        'addConstra',
        'DataTypes'
    ];
    a = function () {
        return x;
    };
    return a();
}
const o = {};
o[r(0x116)] = !![], Object[s(0x13f) + s(0x133)](exports, s(0x12f), o);
const sequelize_1 = require(r(0x113));
module[s(0x13a)] = {
    'up': f => {
        const t = r, u = r, g = {};
        g[t(0x141)] = t(0x131), g[t(0x122)] = t(0x139), g[u(0x134)] = u(0x13c) + t(0x12c) + u(0x11e) + u(0x12d), g[t(0x129)] = u(0x11a);
        const h = g, i = {};
        i[t(0x132)] = sequelize_1[t(0x118)][t(0x125)], i[t(0x11c) + 'ue'] = null, i[t(0x13d)] = !![];
        const j = {};
        return j[u(0x132)] = sequelize_1[t(0x118)][u(0x135)], j[u(0x13d)] = !![], j[u(0x12a)] = ![], j[u(0x11c) + 'ue'] = null, Promise[t(0x114)]([
            f[t(0x130)](h[t(0x141)], h[u(0x122)], i),
            f[t(0x128) + u(0x126)](h[t(0x141)], h[u(0x134)]),
            f[u(0x13b) + 'mn'](h[u(0x141)], h[u(0x129)], j)
        ]);
    },
    'down': e => {
        const v = r, w = s, f = {};
        f[v(0x123)] = w(0x131), f[v(0x11f)] = w(0x139), f[w(0x121)] = v(0x11a), f[w(0x112)] = v(0x11d), f[w(0x140)] = w(0x12a), f[w(0x119)] = v(0x13c) + v(0x12c) + v(0x11e) + w(0x12d);
        const g = f, h = {};
        return h[v(0x132)] = sequelize_1[w(0x118)][w(0x135)], h[v(0x13d)] = ![], h[v(0x12a)] = !![], Promise[v(0x114)]([
            e[w(0x12e) + 'mn'](g[w(0x123)], g[v(0x11f)]),
            e[w(0x13b) + 'mn'](g[w(0x123)], g[w(0x121)], h),
            e[w(0x117) + v(0x120)](g[v(0x123)], [
                g[w(0x121)],
                g[v(0x112)]
            ], {
                'type': g[v(0x140)],
                'name': g[w(0x119)]
            })
        ]);
    }
};