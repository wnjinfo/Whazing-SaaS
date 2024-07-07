'use strict';
function a() {
    const v = [
        '54YCRCdB',
        'owWhatsApp',
        '2368863vqTtuT',
        'ndMessages',
        '12254KZDdbo',
        'erty',
        '../jobs/Se',
        's/Whatsapp',
        'whatsapp',
        'default',
        '1244352iNFITK',
        'Service',
        'fault',
        'Service/Sh',
        'value',
        '4166407yuAzTo',
        '774830YWymSv',
        '__esModule',
        '48fpDhgu',
        '4610808GEuvsd',
        '10LTfKFc',
        'sendMessag',
        'nmbko',
        '../service',
        '__importDe',
        'type',
        '3544890GukrnA',
        'eBaileys',
        'defineProp',
        'JvxFj'
    ];
    a = function () {
        return v;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x14f4 + 0x1496 + 0x1 * -0x28e3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0xb6)) / (0x1 * -0x237d + 0x20e0 + -0x29e * -0x1) * (-parseInt(o(0xc4)) / (0x11 * -0x91 + -0x123b + 0x1bde)) + parseInt(o(0xc2)) / (0x1c * 0x2 + -0x86 * -0x12 + -0x9a1) + parseInt(p(0xb5)) / (-0x173b * 0x1 + -0x6 * 0x1bb + 0x1 * 0x21a1) + parseInt(p(0xb2)) / (-0x2ad * -0xe + -0xacf + -0x1aa2) * (-parseInt(p(0xb4)) / (0xca * -0x1a + 0xb1 * -0x32 + 0x371c)) + -parseInt(p(0xb1)) / (0x63f + 0x257 * 0x7 + 0x59 * -0x41) + -parseInt(p(0xac)) / (-0x169c + 0x7e * 0xf + 0xf42) * (-parseInt(p(0xc0)) / (0xb6f + -0x157e + 0x50c * 0x2)) + -parseInt(o(0xbc)) / (-0x1989 + -0x19b0 + 0x1 * 0x3343);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x571cf + -0x6b1ba + 0xca79a));
var __importDefault = this && this[q(0xba) + r(0xae)] || function (c) {
    const s = q;
    return c && c[s(0xb3)] ? c : { 'default': c };
};
const k = {};
k[q(0xb0)] = !![], Object[r(0xbe) + q(0xa7)](exports, q(0xb3), k);
const SendMessages_1 = require(q(0xa8) + r(0xc3)), ShowWhatsAppService_1 = __importDefault(require(q(0xb9) + r(0xa9) + q(0xaf) + q(0xc1) + q(0xad)));
async function queueValidation(e, f, g = undefined) {
    const t = q, u = q, h = {};
    h[t(0xbf)] = function (m, n) {
        return m === n;
    }, h[t(0xb8)] = t(0xaa);
    const i = h, j = {};
    j['id'] = e;
    const l = await (0x3 * -0x13a + -0x2 * 0x71 + -0x92 * -0x8, ShowWhatsAppService_1[u(0xab)])(j);
    i[t(0xbf)](l[u(0xbb)], i[u(0xb8)]) && await (-0x664 + 0xb3b * -0x1 + 0x119f * 0x1, SendMessages_1[t(0xb7) + t(0xbd)])(e, f, g);
}
exports[q(0xab)] = queueValidation;