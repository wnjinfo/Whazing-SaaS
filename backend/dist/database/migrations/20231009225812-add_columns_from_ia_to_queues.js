'use strict';
const m = b, n = b;
(function (d, e) {
    const k = b, l = b, f = d();
    while (!![]) {
        try {
            const g = parseInt(k(0x212)) / (0xea3 + -0x6eb * 0x2 + -0xcc) + -parseInt(k(0x20c)) / (-0x7ff + -0xd6d + 0x156e) * (parseInt(l(0x1fa)) / (0x1 * -0x1e67 + 0x6fb * -0x1 + -0xc77 * -0x3)) + parseInt(l(0x1ff)) / (0xd75 + -0x57f + 0xe2 * -0x9) + parseInt(l(0x213)) / (-0x7ca * -0x2 + 0x133e + 0x97 * -0x3b) * (parseInt(k(0x1f4)) / (-0x277 * -0xa + -0x132d * 0x2 + 0xdba)) + parseInt(k(0x1fc)) / (-0x1d * -0x67 + 0x157c + -0x6a0 * 0x5) + -parseInt(l(0x1fd)) / (0x2b9 * -0xe + -0x300 * 0x1 + 0x2926) + -parseInt(k(0x1fb)) / (-0x1d2e + 0x52 * 0x6f + -0x657);
            if (g === e)
                break;
            else
                f['push'](f['shift']());
        } catch (h) {
            f['push'](f['shift']());
        }
    }
}(a, -0x1 * -0x86a5 + -0x1 * 0x77931 + 0xda626));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xf * -0xc9 + -0x2436 + 0x31f1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const s = [
        'defaultVal',
        '477786xSgZSp',
        '4825iBdOLN',
        '1614wCNRFe',
        'type',
        'jFpKJ',
        'value',
        '__esModule',
        'Queues',
        '1245201tGKJJn',
        '4540104StnkiG',
        '1723827vgKNnf',
        '302752DHJiXg',
        'addColumn',
        '1651716QDGBdL',
        'describeTa',
        'allowNull',
        'NGoTU',
        'dYNsh',
        'Ulxfi',
        'sequelize',
        'BOOLEAN',
        'afjIu',
        'ble',
        'erty',
        'removeColu',
        'cnpj',
        '2pJkzZC',
        'DataTypes',
        'from_ia',
        'exports',
        'defineProp'
    ];
    a = function () {
        return s;
    };
    return a();
}
const c = {};
c[m(0x1f7)] = !![], Object[m(0x210) + n(0x209)](exports, m(0x1f8), c);
const sequelize_1 = require(m(0x205));
module[n(0x20f)] = {
    'up': async f => {
        const o = m, p = m, g = {};
        g[o(0x204)] = p(0x1f9), g[p(0x207)] = p(0x20b), g[p(0x202)] = p(0x20e);
        const h = g, i = await f[p(0x200) + p(0x208)](h[o(0x204)]);
        if (!i || !i[h[p(0x207)]]) {
            const j = {};
            j[p(0x1f5)] = sequelize_1[p(0x20d)][p(0x206)], j[p(0x211) + 'ue'] = ![], j[p(0x201)] = !![], await f[o(0x1fe)](h[p(0x204)], h[p(0x202)], j);
        }
    },
    'down': async e => {
        const q = m, r = n, f = {};
        f[q(0x203)] = q(0x1f9), f[r(0x1f6)] = q(0x20e);
        const g = f;
        await e[q(0x20a) + 'mn'](g[r(0x203)], g[r(0x1f6)]);
    }
};