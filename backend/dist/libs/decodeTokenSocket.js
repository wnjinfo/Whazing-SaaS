'use strict';
const A = b, B = b;
(function (c, d) {
    const y = b, z = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(y(0x10f)) / (-0x149a + -0x1 * 0xb9d + -0x101c * -0x2) * (-parseInt(y(0xfd)) / (-0x49 * -0x35 + 0x1301 + 0x76 * -0x4a)) + parseInt(z(0xf4)) / (-0x41 * -0x62 + -0x62b * 0x1 + -0x3 * 0x63c) * (-parseInt(y(0xf6)) / (-0x12d1 + 0x3 * -0xb17 + 0x341a)) + parseInt(z(0x10b)) / (-0x48d * -0x1 + 0xb48 + -0x7e8 * 0x2) + parseInt(z(0x10a)) / (-0x114 * -0x20 + 0x1151 + 0x33cb * -0x1) * (-parseInt(z(0xf9)) / (-0x35 * 0xa9 + 0x52 * -0x68 + -0x1 * -0x4454)) + parseInt(y(0x105)) / (0x2 * 0x1012 + 0x11c5 + -0x71 * 0x71) + parseInt(z(0xfc)) / (0x4 * -0x65 + -0x3 * 0x7c1 + 0x18e0) + -parseInt(z(0x106)) / (0x9c6 * -0x1 + 0x815 + 0x1 * 0x1bb) * (-parseInt(z(0x100)) / (0x26ee + -0x822 + -0x1ec1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x49cab * 0x4 + -0x8054a + 0x282055 * 0x1));
var __importDefault = this && this[A(0xf3) + B(0xfa)] || function (c) {
    const C = B;
    return c && c[C(0x114)] ? c : { 'default': c };
};
const x = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1a6b * 0x1 + -0x7e * -0xf + -0x20df);
        let h = e[f];
        return h;
    }, b(c, d);
}
x[B(0xf7)] = !![], Object[B(0xf2) + A(0x102)](exports, A(0x114), x);
function a() {
    const F = [
        'secret',
        '5801663cKbzrd',
        'fault',
        'Token\x20not\x20',
        '1296549WGfNSH',
        '34418lAWJtB',
        'ogger',
        'isValid',
        '49291xpsfxW',
        'tenantId',
        'erty',
        '../utils/l',
        'logger',
        '5219664VUoBiW',
        '4510yaWMdd',
        'rZAZz',
        'ywcqc',
        'profile',
        '6jPJWBU',
        '2709835tZceao',
        'data',
        'error',
        'BgHAW',
        '8jrMoUH',
        'default',
        'auth',
        'jFzFU',
        'EIONd',
        '__esModule',
        'verify',
        'provided',
        'aSijb',
        '../config/',
        'defineProp',
        '__importDe',
        '47301tAPNda',
        'jsonwebtok',
        '380RsEqep',
        'value'
    ];
    a = function () {
        return F;
    };
    return a();
}
const jsonwebtoken_1 = require(B(0xf5) + 'en'), auth_1 = __importDefault(require(A(0xf1) + B(0x111))), logger_1 = require(B(0x103) + A(0xfe)), decode = g => {
        const D = A, E = A, h = {};
        h[D(0x10e)] = E(0xfb) + D(0xef), h[D(0xf0)] = function (m, n) {
            return m === n;
        }, h[D(0x112)] = D(0x107), h[E(0x108)] = E(0x113);
        const i = h, j = {};
        j['id'] = '', j[E(0x109)] = '', j[E(0x101)] = 0x0;
        const k = {};
        k[D(0xff)] = ![], k[D(0x10c)] = j;
        const l = k;
        if (!g)
            return logger_1[D(0x104)][E(0x10d)](i[D(0x10e)]), l;
        try {
            const m = (-0x31c * 0x7 + 0x12a0 * 0x1 + 0x1 * 0x324, jsonwebtoken_1[D(0xee)])(g, auth_1[D(0x110)][D(0xf8)]), {
                    id: n,
                    profile: o,
                    tenantId: p
                } = m;
            l[D(0xff)] = !![];
            const q = {};
            q['id'] = n, q[E(0x109)] = o, q[E(0x101)] = p, l[E(0x10c)] = q;
        } catch (r) {
            if (i[D(0xf0)](i[E(0x112)], i[E(0x108)]))
                return k[E(0x104)][E(0x10d)](i[E(0x10e)]), f;
            else
                logger_1[D(0x104)][D(0x10d)](r);
        }
        return l;
    };
exports[B(0x110)] = decode;