'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0xb4)) / (0x2171 + 0x95d + 0x2acd * -0x1) * (-parseInt(s(0x9b)) / (-0x3c7 * 0xa + 0x5 * -0x5df + 0x4323)) + -parseInt(s(0xa1)) / (0x49e * -0x3 + -0x17f5 * 0x1 + 0x25d2) * (parseInt(s(0xbd)) / (-0x19ea + -0x269c + -0x2ef * -0x16)) + -parseInt(s(0xc3)) / (-0xc7 * 0x20 + 0x63 * -0x2b + 0x14c3 * 0x2) + parseInt(t(0xac)) / (-0x1481 + -0x63 * -0x31 + -0xca * -0x2) + parseInt(s(0xa0)) / (0xdad + 0x1a94 + 0x141d * -0x2) * (-parseInt(t(0xc7)) / (0x3a0 + -0x11f4 + 0xe5c)) + parseInt(t(0xb9)) / (-0x18 * -0xb9 + -0x94a + -0x805 * 0x1) * (-parseInt(t(0xb6)) / (0xa0 * -0x1a + 0x27c * 0x2 + 0xb52)) + parseInt(t(0xb1)) / (0x1b43 * 0x1 + 0x18ba + 0x2 * -0x19f9);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x12504b * -0x1 + -0x1 * -0x5a2a6 + -0x160719 * -0x1));
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1340 + -0x2f4 * 0x6 + 0x258f);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[u(0xbb)] = !![], Object[v(0xb0) + u(0x98)](exports, u(0x9a), k);
const wbot_baileys_1 = require(u(0xab) + v(0xa6)), logger_1 = require(u(0xbe) + u(0xc5)), l = {};
function a() {
    const y = [
        'attempts',
        'defineProp',
        '13889700duurtV',
        'FUiMX',
        'inessHours',
        '276670BrWtKG',
        'delay',
        '10OboXNQ',
        'messageBus',
        'number',
        '8721045LkHRgt',
        'usinessHou',
        'value',
        '.net',
        '11056ipCNYp',
        '../utils/l',
        'sendMessag',
        'text',
        'removeOnFa',
        'default',
        '1789985DeJrxP',
        'eWhatsappB',
        'ogger',
        'logger',
        '80DxQnir',
        's.whatsapp',
        'tenant',
        'removeOnCo',
        'erty',
        'error',
        '__esModule',
        '6akNaWC',
        'SendMessag',
        'whatsappId',
        'Error\x20envi',
        'zomoX',
        '849331QTWjlq',
        '18EVmrGX',
        '\x20business\x20',
        'isGroup',
        'ticket',
        'ar\x20message',
        'ot-baileys',
        'mplete',
        'message',
        'contact',
        'hours:\x20',
        '../libs/wb',
        '6461580wGrEou',
        'getWbot',
        'g.us'
    ];
    a = function () {
        return y;
    };
    return a();
}
l[u(0xb5)] = 0x1f4, l[u(0xaf)] = 0x32, l[u(0x97) + v(0xa7)] = !![], l[u(0xc1) + 'il'] = ![], exports[v(0xc2)] = {
    'key': v(0x9c) + u(0xc4) + u(0xba) + 'rs',
    'options': l,
    async 'handle'({data: f}) {
        const w = v, x = u, g = {};
        g[w(0xb2)] = w(0xae), g[x(0x9f)] = x(0xc8) + w(0xbc);
        const h = g;
        try {
            const i = (0x20ef * 0x1 + -0x1954 + -0x79b, wbot_baileys_1[w(0xad)])(f[w(0xa4)][x(0x9d)]), j = f[x(0xa4)]?.[x(0xa3)] ? h[w(0xb2)] : h[x(0x9f)], m = f[w(0xa4)][w(0xa9)][x(0xb8)] + '@' + j, n = {};
            n[x(0xc0)] = f[x(0xc9)][w(0xb7) + x(0xb3)];
            const o = await i[x(0xbf) + 'e'](m, n), p = {};
            p[w(0xa8)] = o, p[x(0xb7) + w(0xb3)] = f[x(0xc9)][x(0xb7) + x(0xb3)], p[x(0xa4)] = f[x(0xa4)];
            const q = p;
            return q;
        } catch (r) {
            logger_1[w(0xc6)][w(0x99)](w(0x9e) + x(0xa5) + w(0xa2) + x(0xaa) + r);
            throw new Error(r);
        }
    }
};