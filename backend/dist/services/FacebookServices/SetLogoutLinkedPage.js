'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(u(0xad)) / (-0x4 * -0x5ad + -0x2194 + 0xae1) + -parseInt(v(0xbf)) / (-0xf6c + -0x4 * -0x78 + 0xd8e) * (parseInt(v(0xae)) / (-0x244d + 0x107 * -0xc + -0x2 * -0x1852)) + parseInt(u(0xb5)) / (-0x14d5 + -0x4 * 0x77c + 0x32c9) * (parseInt(v(0xc1)) / (-0x2265 + 0x2541 + 0x1 * -0x2d7)) + -parseInt(v(0xbb)) / (-0x179a + -0x20f5 + 0xb51 * 0x5) * (parseInt(u(0x9e)) / (0x629 + -0x95b + 0x339)) + -parseInt(u(0xaa)) / (-0x14d7 + -0x313 + -0x4ca * -0x5) + parseInt(v(0xb9)) / (-0xca4 + -0xecc * -0x1 + -0x21f) * (parseInt(u(0xc2)) / (-0xb * -0x32b + -0x1 * 0x21cd + -0x102)) + parseInt(v(0xb3)) / (0xb * 0x303 + 0x706 + -0x12e * 0x22) * (parseInt(v(0xa2)) / (-0xfdf + 0x1b7e + -0xb93 * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xacaf0 * -0x1 + 0x3e * 0x766 + -0xc8a4));
var __importDefault = this && this[w(0xba) + x(0xa5)] || function (c) {
    const y = w;
    return c && c[y(0xa8)] ? c : { 'default': c };
};
const q = {};
q[x(0xc3)] = !![], Object[w(0xc0) + x(0xa0)](exports, x(0xa8), q);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xbf7 + 0x26a0 + 0x31fa * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const B = [
        '__importDe',
        '2952vwJCdl',
        'session',
        'fbObject',
        '/socket',
        '8830MfYfzy',
        'defineProp',
        '154825fCOBKT',
        '582740ZqyFBX',
        'value',
        'ls/Whatsap',
        '20293RMqQOZ',
        'tenantId',
        'erty',
        '../../libs',
        '35154804swXTjZ',
        'fbPageId',
        'emit',
        'fault',
        'getIO',
        'ession',
        '__esModule',
        'status',
        '10201944iyqwXQ',
        'update',
        'oCYMW',
        '133234VbVJsC',
        '357EBFSCT',
        'default',
        'action',
        '../../mode',
        'hbBLZ',
        '11Temavc',
        ':whatsappS',
        '148ecipQD',
        'tokenAPI',
        'where',
        'DISCONNECT',
        '9LCgQly'
    ];
    a = function () {
        return B;
    };
    return a();
}
const socket_1 = require(w(0xa1) + x(0xbe)), Whatsapp_1 = __importDefault(require(x(0xb1) + x(0x9d) + 'p')), SetLogoutLinkedPage = async ({
        whatsapp: i,
        tenantId: j
    }) => {
        const z = x, A = w, k = {};
        k[z(0xb2)] = z(0xb8) + 'ED', k[A(0xac)] = A(0xab);
        const l = k, m = (0x217b + 0x23b7 + -0x4532, socket_1[A(0xa6)])(), n = {};
        n[z(0xa3)] = null, n[A(0xbd)] = {}, n[z(0xb6)] = null, n[z(0xa9)] = l[z(0xb2)];
        const o = n, p = {};
        p['id'] = i['id'], p[A(0x9f)] = j;
        const r = {};
        r[z(0xb7)] = p, Whatsapp_1[A(0xaf)][z(0xab)](o, r);
        const s = {
                ...i,
                ...o
            }, t = {};
        t[z(0xb0)] = l[z(0xac)], t[A(0xbc)] = s, m[z(0xa4)](j + (A(0xb4) + A(0xa7)), t);
    };
exports[w(0xaf)] = SetLogoutLinkedPage;