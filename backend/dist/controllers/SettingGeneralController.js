'use strict';
const u = b, v = b;
function a() {
    const B = [
        '2537724sNzNwZ',
        'action',
        'rvice',
        'JEswT',
        'WPYzZ',
        'admin',
        'user',
        'key',
        'mUrUp',
        '12829531uiCxPR',
        '../errors/',
        '__esModule',
        '152buQJIn',
        'emit',
        'json',
        '58257XUNdQd',
        'ettingsSer',
        'status',
        '129905fUCHSZ',
        'update',
        'eSettingSe',
        'eneralServ',
        'AppError',
        '../libs/so',
        '4953809nZZzoG',
        '1:settings',
        'profile',
        '135lkyIpO',
        '../service',
        '10ACXkdG',
        'vice',
        'erty',
        'defineProp',
        'getIO',
        'MISSION',
        '92pMhvNl',
        'lmEkt',
        'default',
        '141260MLmrWj',
        'body',
        'ices/Updat',
        'fault',
        '__importDe',
        '126392Duncgz',
        'ices/ListS',
        'setting',
        'index',
        'value',
        's/SettingG',
        'cket',
        'ERR_NO_PER'
    ];
    a = function () {
        return B;
    };
    return a();
}
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(s(0x112)) / (0x1d * 0x42 + -0xdce + 0x655) + parseInt(t(0x123)) / (0x1a7e + 0x1682 + 0x187f * -0x2) * (parseInt(t(0x142)) / (0xe18 + -0x1335 + -0x1 * -0x520)) + -parseInt(t(0x13f)) / (0x1986 + -0xf35 + -0xa4d) * (parseInt(s(0x126)) / (0x6 * -0x11b + -0x53 * 0x1 + 0x6fa)) + parseInt(t(0x133)) / (-0x1af3 + -0x9a * 0x2f + -0x373f * -0x1) + -parseInt(t(0x118)) / (0x11 * -0x101 + 0x21c4 + -0x856 * 0x2) + parseInt(s(0x12b)) / (-0x7 * 0x115 + -0x3 * -0xb45 + -0x27 * 0xac) * (-parseInt(t(0x11b)) / (0xad8 * 0x2 + -0x90d * 0x2 + -0x1 * 0x38d)) + parseInt(s(0x11d)) / (0x1 * 0x1196 + 0x7e6 * -0x2 + -0x1c0) * (parseInt(t(0x13c)) / (0x740 + 0x4 * 0x8ce + 0x1 * -0x2a6d));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xfcfec + 0xf79b5 * -0x1 + 0x27b * 0x385));
var __importDefault = this && this[u(0x12a) + u(0x129)] || function (c) {
    const w = u;
    return c && c[w(0x13e)] ? c : { 'default': c };
};
const k = {};
k[v(0x12f)] = !![], Object[v(0x120) + v(0x11f)](exports, u(0x13e), k), exports[v(0x113)] = exports[v(0x12e)] = void (0x6 * 0x1d5 + 0x1 * 0x3dd + -0x1 * 0xedb);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x26ed + -0x2661 + 0x1 * 0x4e5f);
        let h = e[f];
        return h;
    }, b(c, d);
}
const socket_1 = require(u(0x117) + u(0x131)), AppError_1 = __importDefault(require(v(0x13d) + v(0x116))), UpdateSettingService_1 = __importDefault(require(v(0x11c) + u(0x130) + u(0x115) + u(0x128) + v(0x114) + u(0x135))), ListSettingsService_1 = __importDefault(require(v(0x11c) + u(0x130) + u(0x115) + u(0x12c) + u(0x143) + v(0x11e))), index = async (c, d) => {
        const x = u, y = u, e = await (0x2127 + 0x36d + -0x2494, ListSettingsService_1[x(0x125)])();
        return d[y(0x111)](0x8bd * -0x1 + -0x2120 + -0x4bd * -0x9)[x(0x141)](e);
    };
exports[v(0x12e)] = index;
const update = async (f, g) => {
    const z = v, A = v, h = {};
    h[z(0x124)] = function (q, r) {
        return q !== r;
    }, h[A(0x137)] = z(0x138), h[z(0x13b)] = A(0x132) + A(0x122), h[A(0x136)] = A(0x113);
    const i = h;
    if (i[A(0x124)](f[z(0x139)][z(0x11a)], i[z(0x137)]))
        throw new AppError_1[(A(0x125))](i[z(0x13b)], 0xb92 + 0x1c53 + 0xda * -0x2d);
    const {
            value: j,
            key: l
        } = f[A(0x127)], m = {};
    m[z(0x13a)] = l, m[A(0x12f)] = j;
    const n = await (0x3 * -0xcfb + -0x209d + 0xbed * 0x6, UpdateSettingService_1[A(0x125)])(m), o = (-0x1 * -0xe9f + -0x7cf * -0x3 + 0x3ce * -0xa, socket_1[z(0x121)])(), p = {};
    return p[z(0x134)] = i[A(0x136)], p[z(0x12d)] = n, o[z(0x140)](A(0x119), p), g[z(0x111)](-0x1 * 0x1364 + -0x16dd + 0x1df * 0x17)[z(0x141)](n);
};
exports[u(0x113)] = update;