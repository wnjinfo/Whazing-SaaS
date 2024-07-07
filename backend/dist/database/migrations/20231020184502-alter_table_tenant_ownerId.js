'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x1e3)) / (-0x1 * -0x1c1f + -0x812 + -0x140c) * (-parseInt(l(0x1f1)) / (-0xf97 + 0x287 * -0x5 + 0x1c3c)) + parseInt(l(0x1e5)) / (0x42d * 0x4 + -0x529 * 0x3 + 0xa * -0x1f) * (parseInt(m(0x1da)) / (0x55c + -0x1ba7 + -0x1 * -0x164f)) + -parseInt(l(0x1ea)) / (-0x1fae + 0x2b * 0x1b + 0x1b2a) + -parseInt(m(0x1df)) / (0x9b * 0x11 + -0x244e + 0x535 * 0x5) * (parseInt(m(0x1e0)) / (-0xb7b * -0x3 + 0x27a * 0x3 + -0x19c * 0x1a)) + parseInt(m(0x1f5)) / (-0x1c0a * 0x1 + 0xb39 + 0x1 * 0x10d9) * (parseInt(m(0x1dd)) / (-0x1 * 0x11ed + -0x667 + 0x185d)) + -parseInt(m(0x1e2)) / (0x71 * 0x2b + -0x1d5 * 0x5 + -0x9c8) * (parseInt(m(0x1dc)) / (-0xc95 + -0x1 * 0xedc + 0x1b7c * 0x1)) + parseInt(m(0x1f6)) / (-0x943 + -0x216e + -0xe3f * -0x3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xcc7cb + -0xc84d * -0x1 + -0x6 * 0xecfe));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xb7 * 0x12 + 0x1577 + -0x207e);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[n(0x1e4)] = !![], Object[o(0x1de) + n(0x1f8)](exports, n(0x1e9), k);
function a() {
    const t = [
        '31777oYcXxX',
        'value',
        '1937151rZUXah',
        'changeColu',
        'ownerId',
        'all',
        '__esModule',
        '5104585BytGDL',
        'sequelize',
        'exports',
        'yCrLU',
        'traint',
        'DataTypes',
        'mPlds',
        '14mIPiKQ',
        'INTEGER',
        'Rtiml',
        'Tenants_ow',
        '2336seVuxH',
        '10743012YioaWY',
        'RSFsm',
        'erty',
        'removeCons',
        'nerId_fkey',
        'CWMnA',
        'CASCADE',
        'JohjZ',
        '4icYpNn',
        'iAakE',
        '55uFfuls',
        '14157AZTsZc',
        'defineProp',
        '6270oVZRhe',
        '4305IJxemW',
        'Tenants',
        '68590TIEibc'
    ];
    a = function () {
        return t;
    };
    return a();
}
const sequelize_1 = require(o(0x1eb));
module[n(0x1ec)] = {
    'up': d => {
        const p = o, q = o, e = {};
        e[p(0x1db)] = p(0x1e1), e[p(0x1f3)] = q(0x1f4) + p(0x1fa), e[q(0x1f7)] = p(0x1e7), e[p(0x1d7)] = q(0x1d8);
        const f = e;
        return Promise[q(0x1e8)]([
            d[q(0x1f9) + q(0x1ee)](f[q(0x1db)], f[q(0x1f3)]),
            d[q(0x1e6) + 'mn'](f[p(0x1db)], f[p(0x1f7)], {
                'type': sequelize_1[q(0x1ef)][p(0x1f2)],
                'references': {
                    'model': f[p(0x1db)],
                    'key': 'id'
                },
                'onUpdate': f[p(0x1d7)],
                'onDelete': f[q(0x1d7)],
                'allowNull': !![]
            })
        ]);
    },
    'down': d => {
        const r = o, s = o, e = {};
        e[r(0x1f0)] = r(0x1e1), e[s(0x1d9)] = s(0x1e7), e[r(0x1ed)] = r(0x1d8);
        const f = e;
        return Promise[r(0x1e8)]([d[r(0x1e6) + 'mn'](f[r(0x1f0)], f[s(0x1d9)], {
                'type': sequelize_1[s(0x1ef)][s(0x1f2)],
                'references': {
                    'model': f[r(0x1f0)],
                    'key': 'id'
                },
                'onUpdate': f[r(0x1ed)],
                'onDelete': f[s(0x1ed)],
                'allowNull': !![]
            })]);
    }
};