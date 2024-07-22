'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0xf3)) / (0x1071 + 0x234 + -0x12a4 * 0x1) + -parseInt(u(0xd4)) / (-0xc3b + -0x2d0 + 0xf0d) * (parseInt(t(0xfa)) / (-0xbd * 0x1c + -0x21 * 0x59 + 0x2028)) + -parseInt(t(0xfc)) / (-0xc0 + -0x1 * 0x17d3 + 0x1897) * (parseInt(t(0xca)) / (-0x1 * 0x2507 + 0x3f3 + 0x2119)) + parseInt(u(0xcb)) / (-0x2 * 0xa16 + 0xbd * -0x7 + -0x195d * -0x1) + parseInt(t(0xcd)) / (0x6b * 0x23 + 0x305 * 0xc + -0x32d6) * (parseInt(u(0xd7)) / (-0x139 * -0x1d + -0x23aa + 0x3d * 0x1)) + parseInt(u(0xfd)) / (0x1d19 * -0x1 + -0x1 * 0x1bce + 0x38f0) * (-parseInt(t(0xf9)) / (0x3 * -0xb2d + 0x1755 + 0x2 * 0x51e)) + parseInt(u(0xc6)) / (0x229 * 0x7 + -0x14b8 + -0x169 * -0x4);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6ae9 + 0x15127 * -0x2 + -0x3ee9f * -0x1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x24bb * 0x1 + 0x1713 + -0x1 * 0x3b08);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[v(0xe7) + v(0xdd)] || function (c) {
    const x = w;
    return c && c[x(0x105)] ? c : { 'default': c };
};
const k = {};
k[v(0xdb)] = !![], Object[v(0xeb) + w(0xfb)](exports, w(0x105), k), exports[w(0xec)] = exports[w(0x101) + w(0xf1)] = exports[v(0xef)] = exports[v(0xe2)] = void (-0x1 * -0x22e2 + -0x217e + -0x164);
const socket_1 = require(v(0xc8) + v(0xf5)), AppError_1 = __importDefault(require(w(0xcc) + v(0xe9))), UpdateSettingService_1 = __importDefault(require(v(0xc7) + v(0xd1) + v(0xd3) + v(0xea) + v(0xff))), UpdateSettingService_2 = __importDefault(require(v(0xc7) + w(0xe6) + v(0xfe) + w(0xd9) + w(0x106) + v(0xde))), ListSettingsService_1 = __importDefault(require(w(0xc7) + v(0xd1) + v(0xe1) + w(0xd8) + w(0xda))), index = async (c, d) => {
        const y = w, z = v, {tenantId: e} = c[y(0xc9)], f = await (-0x29 * -0x3b + 0x1dbd + -0x2730, ListSettingsService_1[y(0xce)])(e);
        return d[z(0x104)](0x1c76 + -0xe45 + 0xd69 * -0x1)[y(0xee)](f);
    };
exports[v(0xe2)] = index;
const update = async (f, g) => {
    const A = w, B = v, h = {};
    h[A(0xf2)] = function (r, s) {
        return r !== s;
    }, h[B(0xe4)] = B(0xd6), h[B(0xe3)] = A(0x100) + B(0x107), h[A(0xf7)] = A(0xef);
    const i = h;
    if (i[B(0xf2)](f[A(0xc9)][A(0x102)], i[B(0xe4)]))
        throw new AppError_1[(B(0xce))](i[B(0xe3)], 0x3 * -0x577 + 0x26de + -0x14e6);
    const {tenantId: j} = f[B(0xc9)], {
            value: l,
            key: m
        } = f[B(0xe8)], n = {};
    n[B(0xed)] = m, n[A(0xdb)] = l, n[A(0x108)] = j;
    const o = await (0x1 * 0x26a6 + -0x1e0b + -0x89b, UpdateSettingService_1[A(0xce)])(n), p = (0xf * -0x1d4 + 0x77f * -0x1 + 0x22eb * 0x1, socket_1[B(0xdc)])(), q = {};
    return q[B(0xe0)] = i[B(0xf7)], q[B(0xf8)] = o, p[B(0xd2)](j + A(0xf0), q), g[B(0x104)](0x2017 + 0x1f30 + -0x3e7f)[B(0xee)](o);
};
exports[v(0xef)] = update;
const storePrivateFile = async (e, f) => {
    const C = v, D = v, g = {};
    g[C(0xe5)] = C(0xd5) + 'e';
    const h = g, i = e[C(0xf4)], {tenantId: j} = e[D(0xc9)], l = {};
    l[C(0xed)] = h[C(0xe5)], l[D(0xdb)] = i[C(0xdf)];
    const m = await (-0x2628 + 0xbbc * 0x2 + 0xeb0, UpdateSettingService_2[D(0xce)])(l);
    return f[D(0x104)](-0x2 * 0x4e1 + 0x4 * 0x878 + -0x1 * 0x1756)[C(0xee)](m[D(0xdb)]);
};
exports[w(0x101) + v(0xf1)] = storePrivateFile;
const storeLogo = async (e, f) => {
    const E = w, F = w, g = {};
    g[E(0xf6)] = E(0xcf);
    const h = g, i = e[F(0xf4)], {tenantId: j} = e[F(0xc9)];
    if (i && i[E(0x103)][E(0x109)](h[E(0xf6)])) {
        const l = {};
        l[F(0xed)] = E(0xd0), l[E(0xdb)] = i[F(0xdf)], l[F(0x108)] = j;
        const m = await (-0x23c7 * 0x1 + -0x3 * 0xc1f + 0x4824, UpdateSettingService_1[E(0xce)])(l);
        return f[F(0x104)](0x115c + -0x114 + -0xf80)[F(0xee)](m[E(0xdb)]);
    }
    return f[F(0x104)](-0xd * -0x107 + 0xad * 0x22 + 0xb95 * -0x3);
};
function a() {
    const G = [
        'body',
        'AppError',
        'dateSettin',
        'defineProp',
        'storeLogo',
        'key',
        'json',
        'update',
        ':settings',
        'teFile',
        'jhtRX',
        '30280qVDenQ',
        'file',
        'cket',
        'tPlQn',
        'grhyc',
        'setting',
        '5380lilzvj',
        '1071gZaHiX',
        'erty',
        '1508qzXEdd',
        '1917MSCekM',
        'eneralServ',
        'gService',
        'ERR_NO_PER',
        'storePriva',
        'profile',
        'mimetype',
        'status',
        '__esModule',
        'eSettingSe',
        'MISSION',
        'tenantId',
        'startsWith',
        '4444671wKEdxG',
        '../service',
        '../libs/so',
        'user',
        '1000EZAMGz',
        '228000GtyPAb',
        '../errors/',
        '243292WRWkBM',
        'default',
        'image/',
        'LOGO',
        's/SettingS',
        'emit',
        'ervices/Up',
        '1002dLlKyH',
        'efiCertFil',
        'admin',
        '16HEIHJm',
        'stSettings',
        'ices/Updat',
        'Service',
        'value',
        'getIO',
        'fault',
        'rvice',
        'filename',
        'action',
        'ervices/Li',
        'index',
        'aIYfW',
        'zVrxh',
        'XKiho',
        's/SettingG',
        '__importDe'
    ];
    a = function () {
        return G;
    };
    return a();
}
exports[v(0xec)] = storeLogo;