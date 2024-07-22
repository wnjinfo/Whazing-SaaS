'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x140)) / (-0x1 * -0x9d6 + 0xe0f + 0x1 * -0x17e4) + parseInt(n(0x14d)) / (-0xdca + 0x1 * 0x8dc + 0x4 * 0x13c) * (parseInt(o(0x162)) / (-0x1b04 + 0x6 * -0x41f + -0x1 * -0x33c1)) + -parseInt(n(0x155)) / (-0x1c72 + -0x2479 + 0x737 * 0x9) * (-parseInt(n(0x15a)) / (-0x91e + -0xb8 * 0x6 + 0xd73)) + parseInt(o(0x14c)) / (-0x1739 + 0x19f7 + 0x2b8 * -0x1) + parseInt(o(0x169)) / (-0x1 * 0x2479 + -0x3 * 0xd6 + 0x2702) + -parseInt(n(0x141)) / (0x266f * -0x1 + 0x1f * -0x29 + -0xe7a * -0x3) + parseInt(o(0x14b)) / (-0x19 * 0x37 + 0x9 * -0x59 + 0x889) * (-parseInt(o(0x15e)) / (-0x1 * -0xac9 + 0x15e2 + 0x20a1 * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0x12b320 + -0x13bd57 + 0x3191fa));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x6ab + -0xf39 + 0x4e7 * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const m = {};
m[p(0x143)] = !![], Object[q(0x147) + q(0x158)](exports, p(0x142), m);
const sequelize_1 = require(p(0x149));
function a() {
    const v = [
        '1420112bBaBSR',
        '4723128zHcjtr',
        '__esModule',
        'value',
        'ssage',
        'XxVFo',
        'iUHRT',
        'defineProp',
        'XXkmh',
        'sequelize',
        'SET\x20NULL',
        '89703EZrxcK',
        '1096182ejwMdK',
        '163660lCXxKf',
        'CASCADE',
        'InternalMe',
        'HOjGS',
        'DataTypes',
        'iVCrU',
        'ysRVT',
        'RHZuV',
        '742104klXDIu',
        'CEWli',
        'Users',
        'erty',
        'all',
        '15LbcoFF',
        'changeColu',
        'UsEEC',
        'groupId',
        '3570tzSdjf',
        'INTEGER',
        'jsWCr',
        'exports',
        '51UHRkih',
        'receiverId',
        'JmwdF',
        'Groups',
        'Derwe',
        'waDVQ',
        'wUDwh',
        '9293116mYMkDm'
    ];
    a = function () {
        return v;
    };
    return a();
}
module[q(0x161)] = {
    'up': d => {
        const r = q, s = q, e = {};
        e[r(0x152)] = r(0x14f) + s(0x144), e[r(0x150)] = s(0x15d), e[r(0x167)] = s(0x165), e[s(0x168)] = s(0x14e), e[r(0x15c)] = r(0x163), e[s(0x145)] = s(0x157), e[r(0x160)] = r(0x14a);
        const f = e;
        return Promise[r(0x159)]([
            d[s(0x15b) + 'mn'](f[s(0x152)], f[s(0x150)], {
                'type': sequelize_1[r(0x151)][s(0x15f)],
                'references': {
                    'model': f[r(0x167)],
                    'key': 'id'
                },
                'onUpdate': f[s(0x168)],
                'onDelete': f[s(0x168)],
                'allowNull': !![]
            }),
            d[s(0x15b) + 'mn'](f[r(0x152)], f[r(0x15c)], {
                'type': sequelize_1[r(0x151)][r(0x15f)],
                'references': {
                    'model': f[s(0x145)],
                    'key': 'id'
                },
                'onUpdate': f[s(0x168)],
                'onDelete': f[s(0x160)],
                'allowNull': !![]
            })
        ]);
    },
    'down': d => {
        const t = p, u = q, e = {};
        e[t(0x154)] = t(0x14f) + u(0x144), e[u(0x156)] = u(0x15d), e[u(0x148)] = t(0x165), e[t(0x153)] = t(0x14e), e[u(0x146)] = t(0x163), e[t(0x166)] = u(0x157), e[u(0x164)] = t(0x14a);
        const f = e;
        return Promise[t(0x159)]([
            d[t(0x15b) + 'mn'](f[u(0x154)], f[t(0x156)], {
                'type': sequelize_1[t(0x151)][u(0x15f)],
                'references': {
                    'model': f[t(0x148)],
                    'key': 'id'
                },
                'onUpdate': f[u(0x153)],
                'onDelete': f[u(0x153)],
                'allowNull': !![]
            }),
            d[t(0x15b) + 'mn'](f[u(0x154)], f[u(0x146)], {
                'type': sequelize_1[t(0x151)][t(0x15f)],
                'references': {
                    'model': f[u(0x166)],
                    'key': 'id'
                },
                'onUpdate': f[t(0x153)],
                'onDelete': f[u(0x164)],
                'allowNull': !![]
            })
        ]);
    }
};