'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0xb1)) / (-0x836 + 0x225b + -0x1a24) + parseInt(u(0xbf)) / (0x1081 + 0x1281 + -0x2 * 0x1180) + parseInt(u(0xb8)) / (-0x623 + -0xec9 + 0x14ef) * (-parseInt(t(0xb7)) / (0x23b6 + -0x481 * -0x3 + 0xd * -0x3c9)) + parseInt(t(0xba)) / (-0x4be * 0x7 + 0x1 * 0x2569 + -0x219 * 0x2) * (parseInt(t(0x90)) / (0x2161 * 0x1 + 0x24a * -0x7 + -0x11 * 0x105)) + -parseInt(u(0x99)) / (-0x3d * -0x82 + -0x277 * -0x6 + -0x1 * 0x2dbd) + parseInt(u(0xb3)) / (-0x16f * 0x10 + -0x705 * -0x1 + 0xff3) * (-parseInt(t(0xa9)) / (-0x1f19 * 0x1 + -0x1f35 + -0x3e57 * -0x1)) + -parseInt(u(0xab)) / (0x3 * -0x869 + -0x177c + 0x30c1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x70cef + 0x957e5 + 0x5 * -0x238d7));
var __importDefault = this && this[v(0xb5) + v(0x8e)] || function (c) {
    const x = v;
    return c && c[x(0xb9)] ? c : { 'default': c };
};
const k = {};
function a() {
    const C = [
        'ERR_NO_PER',
        'default',
        'Service',
        'tenantId',
        '568827GMpJez',
        'YbpoP',
        'haiSE',
        'defineProp',
        'body',
        ':settings',
        'index',
        '../service',
        'update',
        'stSettings',
        'value',
        'ervices/Li',
        '../libs/so',
        'AppError',
        'user',
        'KURyC',
        '4824hQKwVI',
        'emit',
        '2386150BztRvi',
        'json',
        'ervices/Up',
        's/SettingS',
        'admin',
        'action',
        '665682oRRdKQ',
        'setting',
        '3272iIlQji',
        'cket',
        '__importDe',
        'dateSettin',
        '8UcdaKA',
        '864231RKkZHy',
        '__esModule',
        '5iTdcga',
        'key',
        'gService',
        'MISSION',
        'getIO',
        '398606vJEzhZ',
        'fault',
        '../errors/',
        '3579252zbDbmU',
        'profile',
        'DzTHC',
        'status',
        'erty'
    ];
    a = function () {
        return C;
    };
    return a();
}
k[w(0xa3)] = !![], Object[v(0x9c) + w(0x94)](exports, v(0xb9), k), exports[v(0xa1)] = exports[w(0x9f)] = void (-0x5e6 * -0x2 + 0x3 * -0x71d + 0x7 * 0x15d);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3b * -0x25 + -0x47 * 0x2e + 0x15d7);
        let h = e[f];
        return h;
    }, b(c, d);
}
const socket_1 = require(w(0xa5) + w(0xb4)), AppError_1 = __importDefault(require(v(0x8f) + v(0xa6))), UpdateSettingService_1 = __importDefault(require(w(0xa0) + v(0xae) + w(0xad) + w(0xb6) + v(0xbc))), ListSettingsService_1 = __importDefault(require(v(0xa0) + v(0xae) + v(0xa4) + v(0xa2) + w(0x97))), index = async (c, d) => {
        const y = v, z = v, {tenantId: e} = c[y(0xa7)], f = await (-0x1 * 0x905 + 0x18f0 + -0x5 * 0x32f, ListSettingsService_1[z(0x96)])(e);
        return d[y(0x93)](-0x45 * -0x6e + 0x3 * -0x346 + -0x130c)[z(0xac)](f);
    };
exports[w(0x9f)] = index;
const update = async (f, g) => {
    const A = w, B = w, h = {};
    h[A(0x9b)] = function (r, s) {
        return r !== s;
    }, h[A(0x9a)] = B(0xaf), h[A(0xa8)] = B(0x95) + B(0xbd), h[A(0x92)] = A(0xa1);
    const i = h;
    if (i[A(0x9b)](f[A(0xa7)][B(0x91)], i[A(0x9a)]))
        throw new AppError_1[(A(0x96))](i[A(0xa8)], -0x559 * -0x2 + 0x19f3 * -0x1 + 0x10d4);
    const {tenantId: j} = f[B(0xa7)], {
            value: l,
            key: m
        } = f[A(0x9d)], n = {};
    n[A(0xbb)] = m, n[A(0xa3)] = l, n[B(0x98)] = j;
    const o = await (-0xbc7 + -0x1 * 0x403 + -0x2b * -0x5e, UpdateSettingService_1[A(0x96)])(n), p = (0x9d0 * -0x2 + -0x1a85 + 0x2e25 * 0x1, socket_1[B(0xbe)])(), q = {};
    return q[A(0xb0)] = i[A(0x92)], q[A(0xb2)] = o, p[B(0xaa)](j + A(0x9e), q), g[B(0x93)](-0x788 + -0x211f * -0x1 + -0x18cf)[B(0xac)](o);
};
exports[w(0xa1)] = update;