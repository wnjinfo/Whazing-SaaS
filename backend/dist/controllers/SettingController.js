'use strict';
function a() {
    const C = [
        'Service',
        '../errors/',
        '971523HGpZfl',
        '2902872cyzEUR',
        'status',
        '__importDe',
        'aXfGa',
        'emit',
        'fault',
        's/SettingS',
        'JCkHA',
        '__esModule',
        'ERR_NO_PER',
        'stSettings',
        'ervices/Li',
        'cket',
        ':settings',
        '8789072tqOCIP',
        '2478002rjCVlM',
        '100ibVNDb',
        'gRafu',
        '../libs/so',
        '1oUwEwD',
        'kCqRI',
        'user',
        'MISSION',
        'gService',
        '6289302omhkvN',
        'profile',
        'default',
        '../service',
        'setting',
        'defineProp',
        'tenantId',
        'action',
        'update',
        'index',
        'dateSettin',
        'key',
        'ervices/Up',
        'AppError',
        '7SBeTLt',
        '2418800XnjHvw',
        'value',
        'getIO',
        'erty',
        '3450645jSrbJz',
        'body',
        'admin',
        'json'
    ];
    a = function () {
        return C;
    };
    return a();
}
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0xdb)) / (0x15dd * -0x1 + -0x3 * -0xff + 0x12e1) * (-parseInt(t(0xd7)) / (0x1d30 + -0xfb * 0x22 + -0x1c * -0x26)) + parseInt(u(0xc1)) / (-0x1 * -0x13fa + -0x1f95 + -0x1 * -0xb9e) + -parseInt(u(0xc8)) / (0xac9 * -0x1 + 0xdf1 + -0x192 * 0x2) + parseInt(t(0xbd)) / (0xe8c + -0x624 * 0x2 + -0x1 * 0x23f) + -parseInt(t(0xe0)) / (-0x24fa + 0xc25 * -0x3 + 0x496f) * (parseInt(t(0xbc)) / (-0x19e * -0x6 + -0x9cc + 0x1f)) + parseInt(t(0xd6)) / (0x166e + -0xad7 + -0xb8f) + -parseInt(u(0xc7)) / (0x1 * -0x1927 + -0xa4d * -0x2 + 0x496 * 0x1) * (-parseInt(t(0xd8)) / (-0x16 * 0x67 + 0x1a03 * -0x1 + -0x1 * -0x22e7));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xe9226 + 0x1 * 0x5ad3c + -0x80dbb));
var __importDefault = this && this[v(0xca) + v(0xcd)] || function (c) {
    const x = w;
    return c && c[x(0xd0)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2d7 * 0x3 + 0x24ba * -0x1 + 0x1ce7);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[v(0xbe)] = !![], Object[w(0xb3) + w(0xc0)](exports, v(0xd0), k), exports[w(0xb6)] = exports[v(0xb7)] = void (-0x1d6e + 0x2 * 0xd53 + 0x2c8);
const socket_1 = require(v(0xda) + v(0xd4)), AppError_1 = __importDefault(require(w(0xc6) + v(0xbb))), UpdateSettingService_1 = __importDefault(require(v(0xe3) + v(0xce) + w(0xba) + v(0xb8) + w(0xdf))), ListSettingsService_1 = __importDefault(require(w(0xe3) + v(0xce) + w(0xd3) + w(0xd2) + w(0xc5))), index = async (c, d) => {
        const y = w, z = w, {tenantId: e} = c[y(0xdd)], f = await (0x20a0 + -0xa2 * 0x9 + -0x1aee, ListSettingsService_1[y(0xe2)])(e);
        return d[y(0xc9)](0x1 * 0x1375 + -0x1 * 0x14ec + 0x23f)[z(0xc4)](f);
    };
exports[v(0xb7)] = index;
const update = async (f, g) => {
    const A = w, B = v, h = {};
    h[A(0xcf)] = function (r, s) {
        return r !== s;
    }, h[A(0xd9)] = B(0xc3), h[A(0xcb)] = B(0xd1) + B(0xde), h[B(0xdc)] = A(0xb6);
    const i = h;
    if (i[B(0xcf)](f[A(0xdd)][B(0xe1)], i[B(0xd9)]))
        throw new AppError_1[(B(0xe2))](i[B(0xcb)], 0xe64 + -0x3be + 0x17 * -0x65);
    const {tenantId: j} = f[B(0xdd)], {
            value: l,
            key: m
        } = f[A(0xc2)], n = {};
    n[B(0xb9)] = m, n[A(0xbe)] = l, n[B(0xb4)] = j;
    const o = await (-0x106b + 0x1 * -0x2074 + 0x30df * 0x1, UpdateSettingService_1[B(0xe2)])(n), p = (-0x1a76 + -0x2 * 0x77c + 0x296e, socket_1[B(0xbf)])(), q = {};
    return q[A(0xb5)] = i[B(0xdc)], q[A(0xb2)] = o, p[B(0xcc)](j + A(0xd5), q), g[B(0xc9)](0xabc + -0x11 * 0x12b + 0x41 * 0x27)[B(0xc4)](o);
};
exports[w(0xb6)] = update;