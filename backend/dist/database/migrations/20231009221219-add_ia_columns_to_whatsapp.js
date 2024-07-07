'use strict';
const o = b, p = b;
(function (d, e) {
    const m = b, n = b, f = d();
    while (!![]) {
        try {
            const g = -parseInt(m(0x1c3)) / (0x209a + -0x1693 * -0x1 + -0x372c) + parseInt(m(0x1b7)) / (0x10d6 + 0x182 + -0x1256) * (parseInt(n(0x1c4)) / (-0x1f8d * 0x1 + 0xf3f + -0x1051 * -0x1)) + parseInt(m(0x1cd)) / (0x2521 + -0x1746 + 0x3 * -0x49d) * (-parseInt(m(0x1bd)) / (-0xf * 0x22e + 0x1 * 0xd3 + 0x1fe4)) + -parseInt(n(0x1cc)) / (0x1 * -0x1ddf + 0xd * 0x2c3 + -0x602) + parseInt(m(0x1c6)) / (-0x17ab + 0xb * -0xb + 0x182b) + parseInt(n(0x1d3)) / (0x484 + 0x249f + -0x11 * 0x26b) * (-parseInt(m(0x1bc)) / (-0x19 * 0xa + 0x1 * 0x1df2 + 0x3 * -0x9a5)) + parseInt(n(0x1ca)) / (0xaa3 + -0x1cce + 0x1235) * (parseInt(m(0x1c7)) / (-0x6bb * -0x1 + 0x37 * -0x2f + 0x369));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0x122a * 0x10 + 0x2239 * -0xa + 0xa * 0x6e53));
const c = {};
c[o(0x1c2)] = !![], Object[p(0x1c8) + p(0x1cf)](exports, o(0x1bf), c);
const sequelize_1 = require(p(0x1d1));
function a() {
    const u = [
        '2108LMqMWm',
        'ble',
        'BOOLEAN',
        'RDUqA',
        'VNPdj',
        '693747aKYXEF',
        '25765GoMkPm',
        'type',
        '__esModule',
        'removeColu',
        'SwFmI',
        'value',
        '154086kdaBKD',
        '153bWqlmF',
        'defaultVal',
        '959189RDNsNC',
        '11IgsKaG',
        'defineProp',
        'allowNull',
        '5477140GGLTCS',
        'exports',
        '1180014pYlnxy',
        '28HaBdAb',
        'sJoWS',
        'erty',
        'describeTa',
        'sequelize',
        'Whatsapps',
        '24twPkOJ',
        'qGfnl',
        'addColumn',
        'GlouH',
        'INTEGER',
        'queue_tran',
        'is_open_ia',
        'DataTypes'
    ];
    a = function () {
        return u;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 * -0x2f9 + 0x747 * 0x2 + 0x6e9 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[o(0x1cb)] = {
    'up': async g => {
        const q = p, r = p, h = {};
        h[q(0x1ba)] = r(0x1d2), h[q(0x1c1)] = r(0x1b5), h[q(0x1bb)] = q(0x1b4) + 'sf';
        const i = h, j = await g[q(0x1d0) + r(0x1b8)](i[r(0x1ba)]);
        if (!j || !j[i[r(0x1c1)]]) {
            const k = {};
            k[q(0x1be)] = sequelize_1[r(0x1b6)][r(0x1b9)], k[r(0x1c5) + 'ue'] = ![], k[r(0x1c9)] = !![], await g[r(0x1d5)](i[q(0x1ba)], i[q(0x1c1)], k);
        }
        if (!j || !j[i[r(0x1bb)]]) {
            const l = {};
            l[r(0x1be)] = sequelize_1[q(0x1b6)][r(0x1b3)], l[q(0x1c9)] = !![], await g[r(0x1d5)](i[r(0x1ba)], i[r(0x1bb)], l);
        }
    },
    'down': async e => {
        const s = p, t = p, f = {};
        f[s(0x1ce)] = s(0x1d2), f[s(0x1d4)] = s(0x1b5), f[s(0x1d6)] = t(0x1b4) + 'sf';
        const g = f;
        await e[t(0x1c0) + 'mn'](g[s(0x1ce)], g[t(0x1d4)]), await e[t(0x1c0) + 'mn'](g[s(0x1ce)], g[s(0x1d6)]);
    }
};