'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0xd6)) / (-0x1ab9 * 0x1 + 0xb0f * -0x1 + -0x239 * -0x11) + parseInt(m(0xcc)) / (-0x3fd + -0xb22 + 0x50b * 0x3) * (parseInt(m(0xd5)) / (0x40 * 0x74 + 0x1 * -0x4ab + -0x2 * 0xc29)) + parseInt(m(0xd1)) / (-0x5 * -0x263 + -0xd3 * -0x2 + -0x1 * 0xd91) + -parseInt(l(0xda)) / (-0x1c55 + 0xbca * 0x1 + 0x1090) + parseInt(l(0xc3)) / (-0x2440 + 0x160d + 0xe39) * (parseInt(l(0xc1)) / (-0xbb9 + -0x588 * -0x2 + 0xb0)) + parseInt(m(0xcb)) / (0x15a7 + 0x25a9 * -0x1 + -0x100a * -0x1) * (parseInt(m(0xe0)) / (-0x285 * -0xb + -0x739 + -0x1475)) + -parseInt(m(0xc9)) / (0x225d + -0x1f7e + 0x1 * -0x2d5) * (parseInt(l(0xc4)) / (-0x1cb1 + -0x1e67 + 0x3b23));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xd32ab + -0x63af3 + -0x4a32));
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x593 * -0x6 + -0x26ea + 0x491c);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const t = [
        '6WtSVYq',
        '4367hddbGW',
        'DataTypes',
        'removeCons',
        'changeColu',
        'BdZSw',
        '35030mpjczj',
        'WxNEw',
        '3328488GTvcYH',
        '857366nzOsCR',
        'all',
        'CASCADE',
        'defineProp',
        'INTEGER',
        '1987820OjiTUT',
        'value',
        'Tenants_ow',
        'pjlvv',
        '3OehumM',
        '393851dMcEGU',
        'qiwba',
        'pRmaP',
        'exports',
        '134895TrAJuP',
        'nerId_fkey',
        'erty',
        'sequelize',
        'Tenants',
        'ownerId',
        '18jmakKN',
        'nyedL',
        '__esModule',
        'traint',
        '3439793xbTUCV',
        'fpuMu'
    ];
    a = function () {
        return t;
    };
    return a();
}
k[n(0xd2)] = !![], Object[o(0xcf) + n(0xdc)](exports, n(0xe2), k);
const sequelize_1 = require(n(0xdd));
module[o(0xd9)] = {
    'up': d => {
        const p = n, q = n, e = {};
        e[p(0xe1)] = q(0xde), e[p(0xd4)] = q(0xd3) + q(0xdb), e[p(0xc2)] = q(0xdf), e[p(0xd8)] = p(0xce);
        const f = e;
        return Promise[q(0xcd)]([
            d[q(0xc6) + p(0xc0)](f[p(0xe1)], f[p(0xd4)]),
            d[q(0xc7) + 'mn'](f[q(0xe1)], f[q(0xc2)], {
                'type': sequelize_1[q(0xc5)][p(0xd0)],
                'references': {
                    'model': f[p(0xe1)],
                    'key': 'id'
                },
                'onUpdate': f[q(0xd8)],
                'onDelete': f[q(0xd8)],
                'allowNull': !![]
            })
        ]);
    },
    'down': d => {
        const r = n, s = o, e = {};
        e[r(0xca)] = r(0xde), e[r(0xd7)] = s(0xdf), e[s(0xc8)] = r(0xce);
        const f = e;
        return Promise[r(0xcd)]([d[r(0xc7) + 'mn'](f[r(0xca)], f[r(0xd7)], {
                'type': sequelize_1[s(0xc5)][r(0xd0)],
                'references': {
                    'model': f[r(0xca)],
                    'key': 'id'
                },
                'onUpdate': f[r(0xc8)],
                'onDelete': f[s(0xc8)],
                'allowNull': !![]
            })]);
    }
};