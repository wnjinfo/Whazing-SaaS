'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(u(0x199)) / (0x3e7 * -0x1 + 0x2494 + -0x20ac) + parseInt(v(0x198)) / (-0x1d3a + -0x11b3 + 0x2eef) + parseInt(u(0x19e)) / (0x6e1 + 0x1 * -0xaae + 0x3d0) * (-parseInt(v(0x183)) / (-0x2049 + 0x1 * -0x26fb + 0x4748 * 0x1)) + -parseInt(v(0x18e)) / (0x140 + 0xaff + -0xc3a) + -parseInt(v(0x196)) / (0x1a75 * -0x1 + 0x1e21 * -0x1 + 0xe27 * 0x4) + -parseInt(u(0x1a3)) / (0x4 * 0x347 + -0x69 * -0x4d + -0x2 * 0x1655) + parseInt(v(0x186)) / (-0x7a * 0x51 + -0x22d6 + 0x4978);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0xb47ff + 0x11 * -0xa0c1 + 0x1 * 0x2196d4));
function a() {
    const B = [
        '1856eqieHc',
        'ession',
        '../../libs',
        '22567720fuagbc',
        'where',
        'mifMr',
        'value',
        'erty',
        'update',
        'fbPageId',
        'status',
        '2043950xsglIj',
        '__importDe',
        'default',
        'session',
        'tokenAPI',
        '__esModule',
        '/socket',
        ':whatsappS',
        '1801770fOemLk',
        'tenantId',
        '1566528ICPGyJ',
        '1298121QtMilO',
        '../../mode',
        'getIO',
        'fbObject',
        'emit',
        '1032hGqDlW',
        'action',
        'zbhit',
        'fault',
        'ls/Whatsap',
        '4725245TnFYZH',
        'defineProp',
        'DISCONNECT'
    ];
    a = function () {
        return B;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xb9c + -0xb9f + -0x1 * -0x185);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[w(0x18f) + w(0x1a1)] || function (c) {
    const y = x;
    return c && c[y(0x193)] ? c : { 'default': c };
};
const q = {};
q[x(0x189)] = !![], Object[w(0x1a4) + x(0x18a)](exports, w(0x193), q);
const socket_1 = require(w(0x185) + w(0x194)), Whatsapp_1 = __importDefault(require(x(0x19a) + x(0x1a2) + 'p')), SetLogoutLinkedPage = async ({
        whatsapp: i,
        tenantId: j
    }) => {
        const z = w, A = w, k = {};
        k[z(0x1a0)] = A(0x182) + 'ED', k[z(0x188)] = A(0x18b);
        const l = k, m = (0x12c8 + -0xe5a + -0x51 * 0xe, socket_1[z(0x19b)])(), n = {};
        n[z(0x18c)] = null, n[A(0x19c)] = {}, n[A(0x192)] = null, n[A(0x18d)] = l[z(0x1a0)];
        const o = n, p = {};
        p['id'] = i['id'], p[z(0x197)] = j;
        const r = {};
        r[A(0x187)] = p, Whatsapp_1[z(0x190)][z(0x18b)](o, r);
        const s = {
                ...i,
                ...o
            }, t = {};
        t[A(0x19f)] = l[A(0x188)], t[A(0x191)] = s, m[A(0x19d)](j + (A(0x195) + A(0x184)), t);
    };
exports[w(0x190)] = SetLogoutLinkedPage;