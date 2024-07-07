'use strict';
const l = b, m = b;
(function (c, d) {
    const j = b, k = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(j(0x17f)) / (0x6b5 + -0x1 * -0x869 + -0xf1d * 0x1) * (parseInt(k(0x18d)) / (-0x165c + -0xc33 + -0x1 * -0x2291)) + -parseInt(k(0x18b)) / (0x2 * -0xbdf + 0xecf + 0x8f2) + parseInt(k(0x17e)) / (-0x257a + -0x57d * -0x2 + 0x1a84) + parseInt(k(0x17b)) / (-0x12bd + -0x21b8 + 0x2 * 0x1a3d) * (-parseInt(k(0x178)) / (-0x12b9 + 0x2137 + -0xe78)) + parseInt(j(0x18e)) / (-0x1 * 0x1a05 + -0x233d * -0x1 + -0x931) + -parseInt(j(0x195)) / (-0x772 + -0x127d + 0x19f7) * (parseInt(k(0x194)) / (-0xe37 + -0x26e3 + 0xdf * 0x3d)) + parseInt(k(0x179)) / (-0x3d6 * -0x3 + 0x1130 * 0x1 + 0x418 * -0x7) * (parseInt(j(0x17a)) / (0x1 * 0x22b1 + 0x1 * -0x2c5 + -0x1 * 0x1fe1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2 * 0x2277d + -0x1 * -0x5a941 + -0x1d4c1 * -0x1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x13d0 + 0xc4d + 0x79 * 0x13);
        let h = e[f];
        return h;
    }, b(c, d);
}
const i = {};
function a() {
    const r = [
        'DataTypes',
        'exports',
        'erty',
        'channel',
        'removeColu',
        'whatsapp',
        '683508QclDNm',
        'zJLki',
        '346ChfvsU',
        '1951117rGIEnD',
        'all',
        'value',
        'STRING',
        'sequelize',
        'defineProp',
        '117MqGPcJ',
        '208072RnRsUI',
        '10722oTuQoH',
        '10JODJQr',
        '7681927gijKcC',
        '655hxnquE',
        'QPBXH',
        'Tickets',
        '1219108TfTsEJ',
        '1579ivLdjN',
        'uhLmn',
        '__esModule',
        'Smbds',
        'wBpXK',
        'addColumn'
    ];
    a = function () {
        return r;
    };
    return a();
}
i[l(0x190)] = !![], Object[l(0x193) + l(0x187)](exports, l(0x181), i);
const sequelize_1 = require(l(0x192));
module[l(0x186)] = {
    'up': d => {
        const n = m, o = l, e = {};
        e[n(0x180)] = n(0x17d), e[o(0x18c)] = o(0x188), e[o(0x17c)] = n(0x18a);
        const f = e;
        return Promise[n(0x18f)]([d[o(0x184)](f[o(0x180)], f[n(0x18c)], {
                'type': sequelize_1[o(0x185)][o(0x191)],
                'allowNull': !![],
                'defaultValue': f[o(0x17c)]
            })]);
    },
    'down': d => {
        const p = m, q = l, e = {};
        e[p(0x183)] = p(0x17d), e[p(0x182)] = q(0x188);
        const f = e;
        return Promise[p(0x18f)]([d[q(0x189) + 'mn'](f[p(0x183)], f[q(0x182)])]);
    }
};