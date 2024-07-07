'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0x189)) / (0x337 * -0x7 + -0x23b * 0x10 + -0x47a * -0xd) * (-parseInt(u(0x198)) / (0x79 * -0x49 + 0x1b6b + -0x718 * -0x1)) + -parseInt(u(0x188)) / (0x2 * 0x12dc + 0x1aad + -0x3 * 0x1576) + parseInt(u(0x185)) / (0xbf * 0x13 + -0x469 + -0x1a0 * 0x6) + parseInt(u(0x193)) / (-0x24a3 + -0xdb6 + 0x325e) + -parseInt(v(0x199)) / (-0x21c7 + -0xf6e + 0x3 * 0x1069) * (parseInt(v(0x180)) / (-0x665 * 0x1 + 0x28d + 0x1 * 0x3df)) + -parseInt(u(0x19a)) / (-0x11 + 0x8 * 0x41e + -0x20d7 * 0x1) + parseInt(v(0x195)) / (-0x1 * 0x6a7 + 0x1b93 + -0x14e3) * (parseInt(u(0x18c)) / (0x25bd + 0x25c4 + -0x4b77));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6d259 + -0x1 * -0x9e20e + -0xb2d87));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x8 * -0x316 + 0x1f1a + 0x1b25 * -0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const B = [
        'status',
        'action',
        '229630yVxTEF',
        'DISCONNECT',
        '__importDe',
        '/socket',
        'fbObject',
        'fbPageId',
        '../../libs',
        '1945840vUZEwq',
        ':whatsappS',
        '81ljoVHs',
        'ls/Whatsap',
        '../../mode',
        '533794NvUvOu',
        '21204WhdESE',
        '891896viodjT',
        'fault',
        'defineProp',
        'value',
        'emit',
        'default',
        'update',
        'tokenAPI',
        'getIO',
        'session',
        'oAwgB',
        '196klSCyA',
        'where',
        'eXcTM',
        'tenantId',
        'ession',
        '1695048EsMkHj',
        'erty',
        '__esModule',
        '540159ANiALn',
        '1rEYUNr'
    ];
    a = function () {
        return B;
    };
    return a();
}
var __importDefault = this && this[w(0x18e) + w(0x19b)] || function (c) {
    const y = x;
    return c && c[y(0x187)] ? c : { 'default': c };
};
const q = {};
q[x(0x19d)] = !![], Object[w(0x19c) + x(0x186)](exports, w(0x187), q);
const socket_1 = require(w(0x192) + w(0x18f)), Whatsapp_1 = __importDefault(require(w(0x197) + x(0x196) + 'p')), SetLogoutLinkedPage = async ({
        whatsapp: i,
        tenantId: j
    }) => {
        const z = w, A = w, k = {};
        k[z(0x1a4)] = z(0x18d) + 'ED', k[z(0x182)] = z(0x1a0);
        const l = k, m = (0x2 * -0x108e + 0x1aef + 0x62d, socket_1[z(0x1a2)])(), n = {};
        n[z(0x191)] = null, n[A(0x190)] = {}, n[z(0x1a1)] = null, n[z(0x18a)] = l[z(0x1a4)];
        const o = n, p = {};
        p['id'] = i['id'], p[A(0x183)] = j;
        const r = {};
        r[A(0x181)] = p, Whatsapp_1[z(0x19f)][z(0x1a0)](o, r);
        const s = {
                ...i,
                ...o
            }, t = {};
        t[z(0x18b)] = l[A(0x182)], t[z(0x1a3)] = s, m[A(0x19e)](j + (A(0x194) + A(0x184)), t);
    };
exports[x(0x19f)] = SetLogoutLinkedPage;