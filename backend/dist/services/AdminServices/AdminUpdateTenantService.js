'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(B(0x102)) / (0x2 * 0xa + -0x10af * 0x1 + 0x427 * 0x4) + -parseInt(B(0xff)) / (-0x1 * -0x14aa + -0x24ad + 0x1005) * (-parseInt(C(0xf5)) / (0xb81 + -0x2505 + 0x51b * 0x5)) + parseInt(C(0xfe)) / (-0x905 + 0x1982 + -0x1079) * (-parseInt(C(0xfd)) / (0x1b2e + 0x49e + -0x1fc7)) + -parseInt(C(0xfa)) / (0x1458 + 0x619 + 0x1 * -0x1a6b) + -parseInt(C(0x10b)) / (0x21d * 0x1 + -0x4cd * -0x4 + -0x154a) + -parseInt(B(0xf8)) / (0x2648 * -0x1 + 0x5b1 + -0x4a9 * -0x7) * (parseInt(C(0x10f)) / (-0x68 * -0x21 + 0x7 * -0x4a4 + 0xe9 * 0x15)) + parseInt(B(0x10a)) / (-0x11e4 + -0x397 * 0x9 + 0x595 * 0x9);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x129bd2 + -0x5005d + 0x9 * -0x2f9b));
var __importDefault = this && this[D(0x10d) + D(0x103)] || function (c) {
    const F = D;
    return c && c[F(0xf4)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4 * -0x71f + 0xae4 * -0x1 + -0x10a5);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[D(0xfc)] = !![], Object[D(0x10e) + D(0x106)](exports, D(0xf4), k);
const Tenant_1 = __importDefault(require(E(0xf6) + D(0xfb))), AdminUpdateTenantService = async ({
        id: f,
        name: g,
        cnpj: h,
        maxUsers: i,
        maxConnections: j,
        planId: l,
        phone: m,
        email: n,
        dueDate: o,
        recurrence: p
    }) => {
        const G = E, H = D, q = {};
        q[G(0x114)] = function (z, A) {
            return z !== A;
        }, q[G(0x101)] = function (z, A) {
            return z !== A;
        };
        const r = q, s = await Tenant_1[G(0x105)][G(0x112)](f), t = {};
        t[H(0x107)] = g, t[H(0x10c)] = h, t[G(0x111)] = m, t[G(0x108)] = n, t[H(0x109)] = o, t[H(0xf9)] = p;
        const u = t;
        if (r[H(0x114)](i, undefined))
            u[H(0x100)] = i;
        if (r[H(0x101)](j, undefined))
            u[G(0xf3) + H(0x110)] = j;
        if (r[H(0x114)](l, undefined))
            u[H(0x104)] = l;
        await s[H(0x115)](u);
        const v = {};
        v['id'] = s['id'], v[H(0x107)] = s[G(0x107)], v[H(0x10c)] = s[H(0x10c)], v[H(0xf7)] = s[G(0xf7)], v[G(0x113)] = s[H(0x113)], v[H(0x100)] = s[G(0x100)], v[G(0xf3) + H(0x110)] = s[H(0xf3) + H(0x110)], v[H(0x104)] = s[G(0x104)], v[G(0x111)] = s[H(0x111)], v[G(0x108)] = s[G(0x108)], v[H(0x109)] = s[G(0x109)], v[H(0xf9)] = s[H(0xf9)];
        const w = v;
        return w;
    };
function a() {
    const I = [
        'value',
        '40hCelxV',
        '696704hYHBCz',
        '2qhPNjy',
        'maxUsers',
        'RnqIo',
        '1149554prPouZ',
        'fault',
        'planId',
        'default',
        'erty',
        'name',
        'email',
        'dueDate',
        '44715610IkEoVY',
        '1849862pJqszx',
        'cnpj',
        '__importDe',
        'defineProp',
        '135sDZgGz',
        'ions',
        'phone',
        'findByPk',
        'ownerId',
        'iKAZZ',
        'update',
        'maxConnect',
        '__esModule',
        '2572269rDydKf',
        '../../mode',
        'status',
        '495520naDBJr',
        'recurrence',
        '4863444fqvvmG',
        'ls/Tenant'
    ];
    a = function () {
        return I;
    };
    return a();
}
exports[E(0x105)] = AdminUpdateTenantService;