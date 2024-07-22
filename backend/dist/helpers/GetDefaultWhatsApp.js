'use strict';
const s = b, t = b;
function a() {
    const x = [
        'default',
        'ERR_NO_DEF',
        '1325084yicGGp',
        '493485LMAaeP',
        '30486WTdRvS',
        'frdUk',
        '17575220aEekNo',
        '_WAPP_FOUN',
        '../errors/',
        '1512010ayufFn',
        '10365712wsjttg',
        'value',
        'findOne',
        '1463QcfcJY',
        '__esModule',
        'aAiMQ',
        'Whatsapp',
        'status',
        '__importDe',
        'tenantId',
        'CONNECTED',
        'gIaze',
        '13473675iWHjmX',
        'fault',
        'type',
        'defineProp',
        'whatsapp',
        '../models/',
        'AppError',
        '12YzDcOZ',
        '10mewZuv',
        'erty',
        'where',
        'TsQRu'
    ];
    a = function () {
        return x;
    };
    return a();
}
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0x1c1)) / (0x8fc + -0x1 * -0x1748 + -0x3 * 0xac1) + -parseInt(r(0x1bb)) / (-0x33b * -0xc + 0x29e + 0x20 * -0x14b) * (-parseInt(q(0x1c2)) / (-0x1 * 0xc63 + 0x1 * 0x8bd + 0x3a9)) + -parseInt(r(0x1ba)) / (-0x1 * -0x361 + 0x2133 + -0x3c * 0x9c) * (-parseInt(q(0x1c8)) / (0x4 * -0x60d + -0x5ea * 0x3 + 0x3 * 0xdfd)) + -parseInt(q(0x1c3)) / (0x141b + 0x1066 * 0x1 + -0x247b) * (parseInt(r(0x1cc)) / (0x1f * 0xdb + -0x2380 + 0x902)) + parseInt(r(0x1c9)) / (0x53a * 0x3 + 0x13f5 + -0x239b) + -parseInt(r(0x1d5)) / (-0x1cfb * -0x1 + -0x5e * 0x1 + -0x1c94) + parseInt(q(0x1c5)) / (0x3 * -0x617 + 0x1499 * 0x1 + 0x2 * -0x125);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0xb3bf1 + 0x111ae8 + -0xe9fcc));
var __importDefault = this && this[s(0x1d1) + s(0x1b4)] || function (c) {
    const u = t;
    return c && c[u(0x1cd)] ? c : { 'default': c };
};
const k = {};
k[t(0x1ca)] = !![], Object[t(0x1b6) + s(0x1bc)](exports, t(0x1cd), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x236b + 0x11e * -0x5 + 0x2ab5);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(t(0x1c7) + s(0x1b9))), Whatsapp_1 = __importDefault(require(t(0x1b8) + t(0x1cf))), GetDefaultWhatsApp = async (f, g) => {
        const v = t, w = t, h = {};
        h[v(0x1c4)] = w(0x1d3), h[w(0x1ce)] = v(0x1b7), h[w(0x1d4)] = function (o, p) {
            return o || p;
        }, h[w(0x1be)] = w(0x1c0) + v(0x1c6) + 'D';
        const i = h, j = {};
        j[v(0x1d2)] = f, j[w(0x1d0)] = i[v(0x1c4)];
        const l = j;
        g ? l['id'] = g : l[w(0x1b5)] = i[v(0x1ce)];
        const m = {};
        m[w(0x1bd)] = l;
        const n = await Whatsapp_1[v(0x1bf)][v(0x1cb)](m);
        if (i[w(0x1d4)](!n, !f))
            throw new AppError_1[(v(0x1bf))](i[w(0x1be)]);
        return n;
    };
exports[t(0x1bf)] = GetDefaultWhatsApp;