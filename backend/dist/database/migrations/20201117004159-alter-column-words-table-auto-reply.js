'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x1d0)) / (0xff * -0x4 + 0x15 * -0x1d5 + 0x2a76) * (-parseInt(q(0x1d6)) / (-0xcf3 + -0x9ed + -0x1d * -0xca)) + parseInt(q(0x1c3)) / (0x1a93 + -0x55 * -0x3f + 0x1 * -0x2f7b) * (-parseInt(p(0x1cd)) / (-0x249f + 0xdf * -0x1 + 0x2582 * 0x1)) + parseInt(p(0x1dd)) / (-0x3 * 0x1eb + -0x12c6 + 0x623 * 0x4) * (-parseInt(p(0x1c9)) / (-0xa14 + 0xf13 + -0x4f9)) + parseInt(p(0x1de)) / (-0x9b + 0x212a + -0x2088) * (-parseInt(q(0x1c5)) / (-0x3 * 0x94d + -0xf75 * -0x2 + -0x2fb)) + -parseInt(q(0x1cf)) / (-0x2a1 * -0xd + 0x314 + -0x634 * 0x6) * (parseInt(p(0x1d1)) / (0x14b9 + -0x1fb1 + 0xb02)) + -parseInt(q(0x1d5)) / (-0x5dc * 0x2 + 0x5b9 * -0x1 + 0x117c) + parseInt(p(0x1e1)) / (-0x204 + -0x7d8 + 0x9e8 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4ac * -0x107 + 0x3195 * 0x1c + -0x6522a));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x4de * -0x6 + -0x1 * 0x2590 + 0x4487);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const x = [
        'value',
        'type',
        '15726uvJyEt',
        'AutoReply',
        'STRING',
        'T(\x22words\x22\x20',
        '456LJHqiV',
        '\x20USING\x20CAS',
        '72SZhvZj',
        '265geBhnX',
        '344390PFNrSJ',
        'DataTypes',
        'erty',
        'allowNull',
        '4126474rBzJdO',
        '122RjCBqQ',
        '__esModule',
        'all',
        'defineProp',
        'zCYbH',
        'as\x20',
        'words',
        '370wKrbEA',
        '68999zJmhKL',
        'sequelize',
        'erQcM',
        '16964304HzLDxA',
        'exports',
        'KMXGC',
        'ARRAY',
        '3744DieEGV',
        'BGgtl',
        '152YQHgul',
        'changeColu'
    ];
    a = function () {
        return x;
    };
    return a();
}
const o = {};
o[r(0x1c7)] = !![], Object[s(0x1d9) + r(0x1d3)](exports, r(0x1d7), o);
const sequelize_1 = require(s(0x1df));
module[r(0x1e2)] = {
    'up': d => {
        const t = s, u = r, e = {};
        e[t(0x1e3)] = t(0x1ca), e[u(0x1e0)] = t(0x1dc);
        const f = e;
        return Promise[t(0x1d8)]([d[t(0x1c6) + 'mn'](f[u(0x1e3)], f[u(0x1e0)], { 'type': sequelize_1[t(0x1d2)][u(0x1e4)](sequelize_1[t(0x1d2)][t(0x1cb)]) + (u(0x1ce) + u(0x1cc) + u(0x1db)) + sequelize_1[u(0x1d2)][t(0x1e4)](sequelize_1[t(0x1d2)][t(0x1cb)]) + ')' })]);
    },
    'down': e => {
        const v = s, w = s, f = {};
        f[v(0x1da)] = v(0x1ca), f[w(0x1c4)] = v(0x1dc);
        const g = f, h = {};
        return h[w(0x1c8)] = sequelize_1[w(0x1d2)][v(0x1cb)], h[w(0x1d4)] = ![], Promise[w(0x1d8)]([e[v(0x1c6) + 'mn'](g[w(0x1da)], g[w(0x1c4)], h)]);
    }
};