'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(s(0x1d3)) / (-0xda5 + -0x995 + 0x173b) + -parseInt(s(0x1e4)) / (-0x8bf + 0x2d0 + 0x5f1) * (-parseInt(t(0x1d0)) / (0x9b7 + -0x4cd * -0x3 + -0x181b)) + -parseInt(s(0x1f9)) / (0x7 * 0x563 + 0x18 * 0xb3 + 0x1 * -0x3679) + parseInt(s(0x1da)) / (-0x2 * -0xd5e + -0x1 * 0x1b52 + 0x9b) + -parseInt(t(0x1ea)) / (0x1 * 0x15f5 + 0x13 * 0x2b + -0x1920) * (parseInt(t(0x1d6)) / (0x17 * -0x127 + -0x16ff + 0x3187)) + parseInt(s(0x1d8)) / (0x1 * 0x23b + -0x1d3 * 0x3 + 0x346) + -parseInt(t(0x1e6)) / (-0x2 * 0x1333 + 0x129f + 0x13d0);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4099a + 0x7 * 0x3acd + -0x1de7c));
var __importDefault = this && this[u(0x1dd) + u(0x1e1)] || function (c) {
    const w = u;
    return c && c[w(0x1f5)] ? c : { 'default': c };
};
function a() {
    const B = [
        '__importDe',
        'eiMcA',
        'default',
        'qFRHj',
        'fault',
        'AppError',
        'erty',
        '187522LJZsrX',
        'defineProp',
        '4616217TYAVCA',
        's/SettingG',
        '../service',
        'eneralServ',
        '463308pUvbjY',
        'cket',
        'admin',
        '../libs/so',
        'key',
        'json',
        'VURng',
        'vice',
        'getIO',
        'emit',
        'index',
        '__esModule',
        'action',
        'ices/ListS',
        'eSettingSe',
        '1583320pLVJQU',
        'MISSION',
        'status',
        '1:settings',
        'setting',
        'ERR_NO_PER',
        'user',
        'HPPRU',
        '15gcsYRL',
        'profile',
        'update',
        '214736hquqGU',
        'rvice',
        'ices/Updat',
        '14FrWTxu',
        'value',
        '3333592PYvnek',
        'body',
        '1052100BRVeQd',
        'ettingsSer',
        '../errors/'
    ];
    a = function () {
        return B;
    };
    return a();
}
const k = {};
k[u(0x1d7)] = !![], Object[u(0x1e5) + v(0x1e3)](exports, v(0x1f5), k), exports[u(0x1d2)] = exports[v(0x1f4)] = void (-0x7e1 + -0x4 * 0x899 + 0x2a45);
const socket_1 = require(v(0x1ed) + v(0x1eb)), AppError_1 = __importDefault(require(v(0x1dc) + u(0x1e2))), UpdateSettingService_1 = __importDefault(require(u(0x1e8) + u(0x1e7) + u(0x1e9) + u(0x1d5) + u(0x1f8) + u(0x1d4))), ListSettingsService_1 = __importDefault(require(u(0x1e8) + u(0x1e7) + u(0x1e9) + u(0x1f7) + v(0x1db) + u(0x1f1))), index = async (c, d) => {
        const x = u, y = u, e = await (0x2639 + -0x174d + 0x17e * -0xa, ListSettingsService_1[x(0x1df)])();
        return d[y(0x1fb)](0xea2 + -0x687 * -0x1 + 0x6cb * -0x3)[x(0x1ef)](e);
    };
exports[v(0x1f4)] = index;
const update = async (f, g) => {
    const z = u, A = v, h = {};
    h[z(0x1de)] = function (q, r) {
        return q !== r;
    }, h[A(0x1f0)] = z(0x1ec), h[A(0x1cf)] = A(0x1cd) + A(0x1fa), h[A(0x1e0)] = A(0x1d2);
    const i = h;
    if (i[A(0x1de)](f[z(0x1ce)][z(0x1d1)], i[z(0x1f0)]))
        throw new AppError_1[(A(0x1df))](i[z(0x1cf)], 0x54d * 0x5 + 0x38 * -0x53 + 0x11 * -0x66);
    const {
            value: j,
            key: l
        } = f[z(0x1d9)], m = {};
    m[A(0x1ee)] = l, m[z(0x1d7)] = j;
    const n = await (0x79c + 0x8e6 + 0x841 * -0x2, UpdateSettingService_1[z(0x1df)])(m), o = (-0x48e + -0x1ffb + 0x2489, socket_1[z(0x1f2)])(), p = {};
    return p[z(0x1f6)] = i[A(0x1e0)], p[A(0x1cc)] = n, o[A(0x1f3)](A(0x1cb), p), g[A(0x1fb)](-0x6 * 0xe1 + -0x2a5 * 0xb + 0x2325)[A(0x1ef)](n);
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x5e0 * 0x4 + -0x1341 + -0x13a * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[v(0x1d2)] = update;