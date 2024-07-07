'use strict';
const q = b, r = b;
function a() {
    const v = [
        '../service',
        '__importDe',
        'XmAju',
        '__esModule',
        '186983uUQxEr',
        'default',
        'Service/Sh',
        'eBaileys',
        '1980072lheDZZ',
        's/Whatsapp',
        'value',
        'ndMessages',
        'Service',
        'defineProp',
        '1449316QvfMdB',
        'sendMessag',
        '16IkKGav',
        '74PxtXVa',
        '../jobs/Se',
        'fault',
        '819FAsmeT',
        '2891EnJHhw',
        'whatsapp',
        '26500BItyIQ',
        'erty',
        '8mzeXlK',
        '283510IxWjHK',
        'type',
        'owWhatsApp',
        'eUSmd',
        '21345dvukML'
    ];
    a = function () {
        return v;
    };
    return a();
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0xb3)) / (0x6 * 0x648 + 0x3e * 0x2 + 0x3 * -0xcb9) + parseInt(o(0xa1)) / (-0x24cd * 0x1 + 0x878 + 0x1c57) * (-parseInt(p(0xae)) / (-0x1e8 * 0x1 + 0x8 * 0x80 + -0x215 * 0x1)) + -parseInt(p(0xa9)) / (-0x9ef + -0x201c + 0x2a0f) * (-parseInt(p(0xaa)) / (-0x1a21 + 0x9e9 + 0x103d)) + parseInt(p(0xb7)) / (0x1bb * -0xa + -0x1 * -0x1bed + 0x1 * -0xa99) + parseInt(p(0xa5)) / (0x7 * 0x545 + -0x2072 + -0x46a) * (parseInt(p(0xa0)) / (0x7e5 + 0x2cb + -0xaa8)) + parseInt(o(0xa4)) / (-0xda4 + -0x13 * -0x1c6 + -0x1405) * (-parseInt(o(0xa7)) / (0x1425 * 0x1 + -0x4 * -0x751 + -0x47d * 0xb)) + parseInt(p(0x9e)) / (-0x253b + -0x9 * 0x1ac + 0x16a * 0x25);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4 * 0x10876 + 0x3a42e + -0xa * 0x61ff));
var __importDefault = this && this[q(0xb0) + r(0xa3)] || function (c) {
    const s = q;
    return c && c[s(0xb2)] ? c : { 'default': c };
};
const k = {};
k[q(0xb9)] = !![], Object[r(0x9d) + q(0xa8)](exports, q(0xb2), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1366 * -0x2 + 0x18c2 + 0x1f79 * -0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const SendMessages_1 = require(r(0xa2) + r(0xba)), ShowWhatsAppService_1 = __importDefault(require(q(0xaf) + r(0xb8) + q(0xb5) + r(0xac) + r(0x9c)));
async function queueValidation(e, f, g = undefined) {
    const t = r, u = r, h = {};
    h[t(0xad)] = function (m, n) {
        return m === n;
    }, h[u(0xb1)] = u(0xa6);
    const i = h, j = {};
    j['id'] = e;
    const l = await (0xbb7 * 0x3 + -0x514 + -0x1e11, ShowWhatsAppService_1[u(0xb4)])(j);
    i[t(0xad)](l[t(0xab)], i[t(0xb1)]) && await (-0x16e2 * 0x1 + -0x845 + 0x1f27, SendMessages_1[u(0x9f) + u(0xb6)])(e, f, g);
}
exports[q(0xb4)] = queueValidation;