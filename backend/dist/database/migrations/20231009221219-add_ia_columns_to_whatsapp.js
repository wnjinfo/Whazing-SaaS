'use strict';
function a() {
    const u = [
        'allowNull',
        '1041830kAsSlw',
        'aXYpW',
        '3273CTXhJp',
        'defineProp',
        'queue_tran',
        'removeColu',
        'exports',
        'BOOLEAN',
        'zoCCy',
        'Whatsapps',
        'YbVZs',
        'sequelize',
        '56PmeZkM',
        'TFTCT',
        '102508iQGwFV',
        'fJvfa',
        'DataTypes',
        '132YLqMPj',
        '190680yCxCRH',
        'INTEGER',
        'is_open_ia',
        'type',
        'ble',
        'value',
        'VSFZF',
        'describeTa',
        '334aclTeZ',
        '3996387aHihff',
        'addColumn',
        'defaultVal',
        '__esModule',
        '646141JmhZua',
        '796864tBNJBW',
        'erty',
        '77SYokqv'
    ];
    a = function () {
        return u;
    };
    return a();
}
const o = b, p = b;
(function (d, e) {
    const m = b, n = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(m(0xae)) / (0xdf6 + -0x168b + 0x2 * 0x44b) + parseInt(m(0xa9)) / (-0x122d * 0x1 + 0x1c3b * 0x1 + -0xa0c) * (parseInt(n(0xb5)) / (-0x17 * 0x7 + 0xd71 + -0x1d * 0x71)) + parseInt(n(0xaf)) / (0x193a + -0x598 * 0x6 + -0x2 * -0x42d) + parseInt(m(0xa1)) / (-0x39a + -0x72 * -0x48 + -0x329 * 0x9) * (parseInt(n(0xa0)) / (0xb5 * -0x33 + -0x2ce + -0xb * -0x389)) + parseInt(m(0x9d)) / (-0x1f19 + 0x23b2 + -0x492) * (-parseInt(m(0x9b)) / (0x1f0a + 0x47d * 0x6 + 0x8 * -0x73e)) + -parseInt(n(0xaa)) / (0x1ef * -0x7 + 0x3d * -0x43 + -0x1d89 * -0x1) + -parseInt(m(0xb3)) / (0x2257 * -0x1 + 0x9ad + -0x41e * -0x6) * (parseInt(m(0xb1)) / (-0x1f0f * -0x1 + 0x209d + -0xd * 0x4e5));
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0xb * 0x4d56 + 0x1 * -0x68f05 + 0x12e531));
const c = {};
c[o(0xa6)] = !![], Object[p(0xb6) + p(0xb0)](exports, o(0xad), c);
const sequelize_1 = require(o(0x9a));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x783 + -0xa19 + -0x3 * -0x611);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[p(0xb9)] = {
    'up': async g => {
        const q = o, r = o, h = {};
        h[q(0xa7)] = r(0x98), h[r(0x99)] = q(0xa3), h[q(0x97)] = r(0xb7) + 'sf';
        const i = h, j = await g[r(0xa8) + q(0xa5)](i[r(0xa7)]);
        if (!j || !j[i[r(0x99)]]) {
            const k = {};
            k[q(0xa4)] = sequelize_1[q(0x9f)][q(0xba)], k[q(0xac) + 'ue'] = ![], k[r(0xb2)] = !![], await g[r(0xab)](i[q(0xa7)], i[r(0x99)], k);
        }
        if (!j || !j[i[q(0x97)]]) {
            const l = {};
            l[r(0xa4)] = sequelize_1[r(0x9f)][r(0xa2)], l[r(0xb2)] = !![], await g[q(0xab)](i[q(0xa7)], i[q(0x97)], l);
        }
    },
    'down': async e => {
        const s = p, t = p, f = {};
        f[s(0x9e)] = t(0x98), f[s(0xb4)] = s(0xa3), f[s(0x9c)] = s(0xb7) + 'sf';
        const g = f;
        await e[t(0xb8) + 'mn'](g[s(0x9e)], g[s(0xb4)]), await e[t(0xb8) + 'mn'](g[s(0x9e)], g[t(0x9c)]);
    }
};