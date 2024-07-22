'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x1e8)) / (-0x21bd * -0x1 + 0x1 * 0x21a7 + -0x4363) * (parseInt(p(0x1f6)) / (-0x1db * 0x1 + -0x575 * 0x1 + -0x1 * -0x752)) + parseInt(o(0x1ec)) / (0x1 * 0x16be + 0x756 + -0x1e11) + parseInt(o(0x1ea)) / (-0xc9e + -0x77 + 0xd19) + parseInt(p(0x1fc)) / (-0x1d8c + -0xc8f + 0xa88 * 0x4) * (-parseInt(p(0x1ee)) / (0x1fdf * 0x1 + -0x135f + -0xc7a * 0x1)) + -parseInt(p(0x1ed)) / (-0x6f * 0x56 + 0x1a8a + 0xac7) + parseInt(p(0x1ff)) / (-0x2502 * 0x1 + 0xd8b * -0x1 + -0x233 * -0x17) + parseInt(o(0x1eb)) / (-0x3d * 0x17 + 0x101 * 0xb + -0x587) * (parseInt(p(0x1f5)) / (-0x2187 * 0x1 + 0x2 * -0x1223 + -0x13 * -0x3ad));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x59350 + -0xa9881 + -0x8 * -0x17d32));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x6b * 0x16 + -0x1dac + 0x165c);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[q(0x1fe) + r(0x1f9)] || function (c) {
    const s = q;
    return c && c[s(0x1fa)] ? c : { 'default': c };
};
const k = {};
k[q(0x1fd)] = !![], Object[r(0x1f0) + r(0x1f4)](exports, q(0x1fa), k);
function a() {
    const v = [
        'defineProp',
        'ndMessages',
        'owWhatsApp',
        'default',
        'erty',
        '10mtoiHg',
        '1099218KdsdQo',
        'GIUvn',
        'Service/Sh',
        'fault',
        '__esModule',
        'sendMessag',
        '1026390jhsiRW',
        'value',
        '__importDe',
        '1079920lzYIRU',
        'eBaileys',
        's/Whatsapp',
        '../service',
        '../jobs/Se',
        'Service',
        'type',
        '1KIfMvJ',
        'nbYQf',
        '118540XTbAiX',
        '14850711ZBChLJ',
        '891537GyiMOB',
        '2026381qHxIVo',
        '24zZRbvZ',
        'whatsapp'
    ];
    a = function () {
        return v;
    };
    return a();
}
const SendMessages_1 = require(r(0x1e5) + q(0x1f1)), ShowWhatsAppService_1 = __importDefault(require(q(0x1e4) + r(0x1e3) + q(0x1f8) + q(0x1f2) + q(0x1e6)));
async function queueValidation(e, f, g = undefined) {
    const t = q, u = r, h = {};
    h[t(0x1f7)] = function (m, n) {
        return m === n;
    }, h[u(0x1e9)] = t(0x1ef);
    const i = h, j = {};
    j['id'] = e;
    const l = await (0x133 + 0x224 * -0x3 + 0x539, ShowWhatsAppService_1[u(0x1f3)])(j);
    i[t(0x1f7)](l[u(0x1e7)], i[t(0x1e9)]) && await (-0x1c5 + -0x7ae + 0x973, SendMessages_1[t(0x1fb) + t(0x1e2)])(e, f, g);
}
exports[q(0x1f3)] = queueValidation;