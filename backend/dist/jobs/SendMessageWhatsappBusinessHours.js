'use strict';
function a() {
    const y = [
        'djoxB',
        '../libs/wb',
        'contact',
        'g.us',
        'lvUBP',
        '\x20business\x20',
        'erty',
        'ogger',
        'ticket',
        'tenant',
        'eWhatsappB',
        'defineProp',
        '11931104cvPfPn',
        'usinessHou',
        '5965100KOgVvK',
        '197792vDPclK',
        'message',
        'ar\x20message',
        '__esModule',
        'number',
        '35MEsXgT',
        '475674OieIFz',
        'mplete',
        'value',
        'whatsappId',
        'removeOnFa',
        'inessHours',
        'text',
        'messageBus',
        'attempts',
        'ot-baileys',
        'isGroup',
        '187952SMKQXj',
        '67968qkeryk',
        'logger',
        'delay',
        'Error\x20envi',
        'removeOnCo',
        '2669330rZJvPb',
        'sendMessag',
        '../utils/l',
        'getWbot',
        'error',
        'hours:\x20',
        'default',
        'SendMessag',
        's.whatsapp',
        '.net'
    ];
    a = function () {
        return y;
    };
    return a();
}
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0x1e0)) / (-0x1474 + -0xdb2 + 0x2227) + -parseInt(t(0x1f7)) / (0x1ba5 + 0x11 * 0x121 + -0x1bc * 0x1b) + -parseInt(s(0x1f2)) / (-0x1 * 0x200d + 0x1041 + 0xfcf) + -parseInt(s(0x1f1)) / (-0x76b + 0x1825 + -0x10b6) + parseInt(s(0x1df)) / (-0x1 * -0x4cd + 0x212b + -0x25f3) + -parseInt(s(0x1e6)) / (0x1d3 * -0x6 + -0xbf1 * -0x1 + -0xf9) * (parseInt(t(0x1e5)) / (0x3 * 0xea + -0x1007 * -0x1 + -0x12be)) + parseInt(t(0x1dd)) / (-0x1f0f + -0x7 * -0x2cf + -0x9a * -0x13);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x824ef * -0x1 + 0xac4fb * 0x1 + 0x7d74c * 0x1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x7ee + 0x1c2 + -0x7d6);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[u(0x1e8)] = !![], Object[v(0x1dc) + u(0x207)](exports, v(0x1e3), k);
const wbot_baileys_1 = require(v(0x202) + v(0x1ef)), logger_1 = require(v(0x1f9) + v(0x208)), l = {};
l[v(0x1f4)] = 0x1f4, l[v(0x1ee)] = 0x32, l[v(0x1f6) + u(0x1e7)] = !![], l[u(0x1ea) + 'il'] = ![], exports[v(0x1fd)] = {
    'key': v(0x1fe) + v(0x1db) + v(0x1de) + 'rs',
    'options': l,
    async 'handle'({data: f}) {
        const w = v, x = v, g = {};
        g[w(0x201)] = w(0x204), g[x(0x205)] = w(0x1ff) + w(0x200);
        const h = g;
        try {
            const i = (0x22e + 0x1b5c + -0x1d8a * 0x1, wbot_baileys_1[w(0x1fa)])(f[w(0x209)][x(0x1e9)]), j = f[w(0x209)]?.[x(0x1f0)] ? h[x(0x201)] : h[w(0x205)], m = f[w(0x209)][w(0x203)][x(0x1e4)] + '@' + j, n = {};
            n[w(0x1ec)] = f[w(0x1da)][x(0x1ed) + w(0x1eb)];
            const o = await i[w(0x1f8) + 'e'](m, n), p = {};
            p[x(0x1e1)] = o, p[x(0x1ed) + w(0x1eb)] = f[x(0x1da)][w(0x1ed) + x(0x1eb)], p[w(0x209)] = f[w(0x209)];
            const q = p;
            return q;
        } catch (r) {
            logger_1[x(0x1f3)][x(0x1fb)](w(0x1f5) + x(0x1e2) + w(0x206) + x(0x1fc) + r);
            throw new Error(r);
        }
    }
};