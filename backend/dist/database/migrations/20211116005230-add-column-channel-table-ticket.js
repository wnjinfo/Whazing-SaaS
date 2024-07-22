'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xb63 + -0xb89 + 0x1890);
        let h = e[f];
        return h;
    }, b(c, d);
}
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(j(0x1ab)) / (0x4 * 0x3e2 + 0x1135 + 0x105e * -0x2) * (parseInt(j(0x1b5)) / (0x1209 + -0xe58 + 0x1 * -0x3af)) + parseInt(j(0x1bf)) / (-0x1674 + 0xcff * -0x1 + -0x6 * -0x5e9) + parseInt(k(0x1af)) / (0x1c * 0x10 + -0x20e3 + 0x1f27) + -parseInt(k(0x1b8)) / (0x22b0 + 0x23 * -0xa + -0x214d) + parseInt(j(0x1b3)) / (-0x7 * 0x2c3 + 0x19fb + -0x2 * 0x350) * (-parseInt(k(0x1b9)) / (0x1 * -0x319 + 0x1e0b + -0x3 * 0x8f9)) + -parseInt(j(0x1b2)) / (-0x8c5 + 0x203 + 0x6ca) * (-parseInt(k(0x1ac)) / (0x91a + -0x1 * -0x19fc + -0x230d)) + -parseInt(j(0x1c1)) / (-0x18e9 * -0x1 + -0x1f53 + 0x3b * 0x1c) * (parseInt(k(0x1a7)) / (0x1 * -0x6cf + -0xda6 * 0x1 + 0x1480));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1de3f + 0x6866 + -0x5f9 * -0x65));
function a() {
    const r = [
        '4448888oGxPQP',
        '30RoVfxh',
        'all',
        '70xccWzH',
        'UpbRl',
        'whatsapp',
        '555950HAXvqN',
        '634396HheoHT',
        'STRING',
        'removeColu',
        'addColumn',
        'exports',
        'RGpeW',
        '1331646wHxvXY',
        'Tickets',
        '22750ZMdrCr',
        'value',
        'cMvqO',
        '__esModule',
        '88HANWsh',
        'PZtcC',
        'erty',
        'DataTypes',
        '12119rTCnJW',
        '9Ksuayb',
        'channel',
        'sequelize',
        '1241152geLKxM',
        'defineProp',
        'bYnCr'
    ];
    a = function () {
        return r;
    };
    return a();
}
const i = {};
i[l(0x1a4)] = !![], Object[l(0x1b0) + m(0x1a9)](exports, m(0x1a6), i);
const sequelize_1 = require(m(0x1ae));
module[l(0x1bd)] = {
    'up': d => {
        const n = m, o = m, e = {};
        e[n(0x1be)] = o(0x1c0), e[o(0x1a5)] = n(0x1ad), e[n(0x1b1)] = n(0x1b7);
        const f = e;
        return Promise[n(0x1b4)]([d[n(0x1bc)](f[o(0x1be)], f[o(0x1a5)], {
                'type': sequelize_1[n(0x1aa)][n(0x1ba)],
                'allowNull': !![],
                'defaultValue': f[n(0x1b1)]
            })]);
    },
    'down': d => {
        const p = m, q = m, e = {};
        e[p(0x1a8)] = q(0x1c0), e[p(0x1b6)] = p(0x1ad);
        const f = e;
        return Promise[p(0x1b4)]([d[q(0x1bb) + 'mn'](f[q(0x1a8)], f[q(0x1b6)])]);
    }
};