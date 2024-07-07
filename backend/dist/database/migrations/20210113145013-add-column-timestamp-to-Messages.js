'use strict';
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(j(0xb3)) / (0x3f * 0x2a + -0x779 * 0x5 + -0x1 * -0x1b08) * (parseInt(j(0xa4)) / (0x224c + -0x8 * 0x2ce + -0xbda)) + parseInt(k(0xb2)) / (-0x1 * -0x1343 + 0x1 * -0x1daa + -0x1 * -0xa6a) + parseInt(k(0xaf)) / (0x982 + -0xd65 + -0x25 * -0x1b) + parseInt(j(0xae)) / (-0xa5a + -0x18d8 + -0xbbd * -0x3) + -parseInt(k(0x9d)) / (-0x2b6 + -0x587 + 0x3 * 0x2c1) + -parseInt(j(0xa0)) / (-0xc7f + 0x2 * -0xa6d + 0x2160) * (parseInt(j(0xa1)) / (-0x181c + 0x1 * -0x264e + 0x2 * 0x1f39)) + -parseInt(j(0x9a)) / (-0xf * -0x130 + -0x1f35 + 0xd6e);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2cf05 + 0x24156 + 0x1 * 0x6868c));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x5f6 + -0x27c * -0x2 + -0x17 * 0x73);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const r = [
        '2860135jkNHAI',
        '1225292BGAAOv',
        'removeColu',
        'lbhHi',
        '865296EuPrBq',
        '85837YeCxxJ',
        'defineProp',
        'ISyDh',
        'type',
        '6319593wrwvVe',
        'addColumn',
        'ZjwvB',
        '1080822mVumLZ',
        'Messages',
        'erty',
        '60781PHgHNP',
        '376cbVrIO',
        'INTEGER',
        'rdLLR',
        '12HvUXqr',
        'value',
        'allowNull',
        'timestamp',
        'DataTypes',
        'exports',
        'all',
        'sequelize',
        'defaultVal',
        '__esModule'
    ];
    a = function () {
        return r;
    };
    return a();
}
const i = {};
i[l(0xa5)] = !![], Object[m(0xb4) + m(0x9f)](exports, m(0xad), i);
const sequelize_1 = require(m(0xab));
module[l(0xa9)] = {
    'up': e => {
        const n = m, o = l, f = {};
        f[n(0x9c)] = o(0x9e), f[o(0xb5)] = o(0xa7);
        const g = f, h = {};
        return h[n(0x99)] = sequelize_1[n(0xa8)][o(0xa2)], h[n(0xa6)] = !![], h[o(0xac) + 'ue'] = null, Promise[n(0xaa)]([e[o(0x9b)](g[n(0x9c)], g[n(0xb5)], h)]);
    },
    'down': d => {
        const p = m, q = l, e = {};
        e[p(0xb1)] = q(0x9e), e[q(0xa3)] = q(0xa7);
        const f = e;
        return Promise[p(0xaa)]([d[p(0xb0) + 'mn'](f[q(0xb1)], f[p(0xa3)])]);
    }
};