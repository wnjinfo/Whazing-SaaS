'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x114 * -0xb + -0x1 * 0x6a1 + 0x1463);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const v = [
        'changeColu',
        'InternalMe',
        'hTxRU',
        '__esModule',
        'NajbL',
        'ajvgT',
        'Users',
        'RJgqw',
        'hdwbF',
        '1jgHrHP',
        'groupId',
        'erty',
        'all',
        'IFzua',
        'RNmij',
        'LkdZn',
        'receiverId',
        'YYDqo',
        '68607HOvMQH',
        '1188395xFWPDr',
        '190964RdbXBI',
        'DataTypes',
        '202323LEntyY',
        '110ubTkMn',
        '302526tLcePR',
        '18LGlDiQ',
        'exports',
        'INTEGER',
        'vQkff',
        'ssage',
        'defineProp',
        '392968emsfYl',
        '4bYaIYY',
        'SET\x20NULL',
        'XUKZW',
        'value',
        'MEWII',
        '445494nCpYVz',
        'RPYRI',
        'CASCADE',
        'Groups',
        'sequelize',
        'NivNu'
    ];
    a = function () {
        return v;
    };
    return a();
}
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x1e8)) / (-0x3 * -0x793 + 0x35 * 0x5f + 0x1 * -0x2a63) * (parseInt(n(0x1f3)) / (-0x2c2 * 0x4 + -0xc7 * 0x11 + 0x1841 * 0x1)) + -parseInt(o(0x1f1)) / (0x16ae + -0x12c0 + -0x3eb) + parseInt(n(0x1ff)) / (0x15d1 + -0x1632 + -0x65 * -0x1) * (parseInt(o(0x1f2)) / (0xb98 + 0xf7c + 0x1 * -0x1b0f)) + -parseInt(o(0x204)) / (0x180 * 0x11 + 0x4fa + 0x1 * -0x1e74) + parseInt(o(0x1f7)) / (0x183e + -0x239e + 0xb67) + parseInt(n(0x1fe)) / (0x1bb3 + -0x1a0 * 0xa + -0xb6b) * (parseInt(n(0x1f8)) / (0x1 * 0x191b + 0x1 * 0x1d3 + -0x1ae5)) + parseInt(n(0x1f6)) / (-0x1674 + 0x1137 + 0x547) * (-parseInt(n(0x1f5)) / (0x1d57 + 0x1047 + -0xf31 * 0x3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x133 * -0x7c + 0x2c134 + 0x7fcc));
const m = {};
m[p(0x202)] = !![], Object[q(0x1fd) + q(0x1ea)](exports, q(0x20d), m);
const sequelize_1 = require(p(0x208));
module[q(0x1f9)] = {
    'up': d => {
        const r = p, s = p, e = {};
        e[r(0x1ee)] = r(0x20b) + s(0x1fc), e[s(0x205)] = s(0x1e9), e[s(0x209)] = s(0x207), e[s(0x20c)] = r(0x206), e[r(0x203)] = s(0x1ef), e[r(0x1ec)] = s(0x210), e[r(0x201)] = r(0x200);
        const f = e;
        return Promise[s(0x1eb)]([
            d[s(0x20a) + 'mn'](f[s(0x1ee)], f[s(0x205)], {
                'type': sequelize_1[s(0x1f4)][r(0x1fa)],
                'references': {
                    'model': f[s(0x209)],
                    'key': 'id'
                },
                'onUpdate': f[r(0x20c)],
                'onDelete': f[s(0x20c)],
                'allowNull': !![]
            }),
            d[r(0x20a) + 'mn'](f[s(0x1ee)], f[r(0x203)], {
                'type': sequelize_1[s(0x1f4)][s(0x1fa)],
                'references': {
                    'model': f[s(0x1ec)],
                    'key': 'id'
                },
                'onUpdate': f[r(0x20c)],
                'onDelete': f[s(0x201)],
                'allowNull': !![]
            })
        ]);
    },
    'down': d => {
        const t = q, u = p, e = {};
        e[t(0x1f0)] = u(0x20b) + t(0x1fc), e[u(0x1ed)] = u(0x1e9), e[t(0x20e)] = u(0x207), e[u(0x1e6)] = u(0x206), e[t(0x20f)] = u(0x1ef), e[t(0x1fb)] = u(0x210), e[t(0x1e7)] = t(0x200);
        const f = e;
        return Promise[t(0x1eb)]([
            d[t(0x20a) + 'mn'](f[u(0x1f0)], f[t(0x1ed)], {
                'type': sequelize_1[t(0x1f4)][t(0x1fa)],
                'references': {
                    'model': f[u(0x20e)],
                    'key': 'id'
                },
                'onUpdate': f[u(0x1e6)],
                'onDelete': f[u(0x1e6)],
                'allowNull': !![]
            }),
            d[t(0x20a) + 'mn'](f[t(0x1f0)], f[t(0x20f)], {
                'type': sequelize_1[t(0x1f4)][t(0x1fa)],
                'references': {
                    'model': f[u(0x1fb)],
                    'key': 'id'
                },
                'onUpdate': f[u(0x1e6)],
                'onDelete': f[u(0x1e7)],
                'allowNull': !![]
            })
        ]);
    }
};