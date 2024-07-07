'use strict';
function a() {
    const F = [
        'token',
        '1544610JsHbKF',
        '5UOmrAw',
        'AebFu',
        'ices/AuthU',
        'bhIDb',
        '__importDe',
        '30niyptX',
        'User',
        'nTLMY',
        'store',
        'ERR_SESSIO',
        '../models/',
        'status',
        'password',
        'SendRefres',
        'USER_LOGOU',
        'OT_FOUND',
        'emit',
        'jrt',
        'userId',
        '../errors/',
        'line',
        'email',
        'defineProp',
        '33pEKakR',
        's/AuthServ',
        'shToken',
        '712518TiAAyM',
        'body',
        'getIO',
        'cookies',
        '1918521MWdeHC',
        '171374UUFRoK',
        'username',
        'update',
        '../libs/so',
        's/UserServ',
        '160hulSGZ',
        '../helpers',
        'shTokenSer',
        '65374hHYToe',
        'AppError',
        'name',
        'vice',
        'ERR_USER_N',
        'enService',
        'fault',
        'RjUaQ',
        'message',
        'erty',
        'cket',
        'findByPk',
        'tenantId',
        'configs',
        'profile',
        '8746056SIWmeE',
        'RefreshTok',
        'ices/Refre',
        '10WPMxcT',
        '../service',
        ':users',
        'hToken',
        '__esModule',
        'DnIwg',
        'default',
        'usuariosOn',
        'queues',
        '/SendRefre',
        'serSerice',
        '735316YpKcvy',
        'value',
        'logout',
        'json',
        'N_EXPIRED'
    ];
    a = function () {
        return F;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xd6d + -0xbe9 * 0x2 + 0xb79);
        let h = e[f];
        return h;
    }, b(c, d);
}
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(u(0x12b)) / (0x7 * 0x86 + 0xa6 * 0x31 + -0x236f) * (parseInt(v(0x152)) / (-0x1 * -0x139d + 0xf6b + -0x2306)) + -parseInt(u(0x12a)) / (0x1b * -0x58 + -0x2b1 * 0x7 + -0x2 * -0xe11) + -parseInt(u(0x124)) / (-0x307 + -0x1efe * 0x1 + 0x2209) + -parseInt(v(0x119)) / (-0x12a0 + -0x2ba * 0x4 + 0x11 * 0x1bd) * (-parseInt(v(0x145)) / (-0x1424 + 0x4 * 0x360 + 0x6aa)) + -parseInt(v(0x14a)) / (-0xa1a * 0x1 + -0x1 * 0x179b + 0x21bc) * (parseInt(v(0x14f)) / (-0x551 * 0x4 + -0x224 * -0x3 + 0xee0)) + -parseInt(u(0x149)) / (0x2163 + -0x19 * -0x18d + -0x481f) * (parseInt(u(0x130)) / (-0x166 * 0xc + -0x313 * 0x3 + 0x1a0b)) + -parseInt(v(0x142)) / (0xa6 * 0x8 + 0x1 * -0x64 + -0x1 * 0x4c1) * (-parseInt(u(0x116)) / (0x72e + -0x1558 + 0xe36));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x55a4a + 0xcb2f2 + -0xbe45));
var __importDefault = this && this[w(0x12f) + w(0x158)] || function (c) {
    const y = w;
    return c && c[y(0x11d)] ? c : { 'default': c };
};
const k = {};
k[w(0x125)] = !![], Object[x(0x141) + x(0x15b)](exports, w(0x11d), k), exports[x(0x126)] = exports[x(0x14c)] = exports[w(0x133)] = void (0x1b81 + -0x1d70 + 0x1ef);
const AppError_1 = __importDefault(require(w(0x13e) + x(0x153))), AuthUserSerice_1 = __importDefault(require(w(0x11a) + x(0x14e) + w(0x12d) + w(0x123))), SendRefreshToken_1 = require(w(0x150) + w(0x122) + w(0x144)), RefreshTokenService_1 = require(w(0x11a) + w(0x143) + x(0x118) + x(0x151) + x(0x155)), socket_1 = require(x(0x14d) + w(0x15c)), User_1 = __importDefault(require(x(0x135) + w(0x131))), store = async (f, g) => {
        const z = x, A = w, h = {};
        h[z(0x132)] = z(0x14c);
        const i = h, j = (0x1 * 0x10ff + 0x18e8 + 0x277 * -0x11, socket_1[z(0x147)])(), {
                email: l,
                password: m
            } = f[z(0x146)], n = {};
        n[A(0x140)] = l, n[A(0x137)] = m;
        const {
            token: o,
            user: p,
            refreshToken: q,
            usuariosOnline: r
        } = await (-0x283 * -0xd + -0x1004 * -0x1 + -0x30ab, AuthUserSerice_1[A(0x11f)])(n);
        (-0xb * -0xfe + -0x24ba + 0x19d0, SendRefreshToken_1[A(0x138) + A(0x11c)])(g, q);
        const s = {};
        s[A(0x129)] = o, s[A(0x14b)] = p[A(0x154)], s[z(0x140)] = p[z(0x140)], s[A(0x115)] = p[z(0x115)], s[A(0x136)] = p[z(0x136)], s[z(0x13d)] = p['id'], s[z(0x15e)] = p[z(0x15e)], s[A(0x121)] = p[A(0x121)], s[z(0x120) + A(0x13f)] = r, s[A(0x114)] = p[A(0x114)];
        const t = s;
        return j[A(0x13b)](t[A(0x15e)] + z(0x11b), {
            'action': i[z(0x132)],
            'data': {
                'username': t[z(0x14b)],
                'email': t[A(0x140)],
                'isOnline': !![],
                'lastLogin': new Date()
            }
        }), g[A(0x136)](-0x5f * -0x1e + -0x3 * 0x25 + -0x9eb)[z(0x127)](t);
    };
exports[w(0x133)] = store;
const update = async (e, f) => {
    const B = x, C = w, g = {};
    g[B(0x159)] = C(0x134) + C(0x128);
    const h = g, i = e[B(0x148)][B(0x13c)];
    if (!i)
        throw new AppError_1[(C(0x11f))](h[B(0x159)], -0x169 * 0xa + 0xa0f + 0x59c * 0x1);
    const {
        newToken: j,
        refreshToken: l
    } = await (0x2 * -0x633 + -0x1ac * -0xe + 0x1 * -0xb02, RefreshTokenService_1[C(0x117) + B(0x157)])(i);
    (-0x161 + 0xb82 * 0x3 + -0x2125, SendRefreshToken_1[C(0x138) + B(0x11c)])(f, l);
    const m = {};
    return m[B(0x129)] = j, f[C(0x127)](m);
};
exports[w(0x14c)] = update;
const logout = async (e, f) => {
    const D = x, E = x, g = {};
    g[D(0x12c)] = D(0x156) + D(0x13a), g[E(0x12e)] = D(0x14c), g[E(0x11e)] = E(0x139) + 'T';
    const h = g, {userId: i} = e[D(0x146)];
    if (!i)
        throw new AppError_1[(E(0x11f))](h[D(0x12c)], -0x20ab + 0x1c9d + -0x67 * -0xe);
    const j = (0x1 * 0x145d + 0x1b91 + -0x2fee, socket_1[E(0x147)])(), l = await User_1[E(0x11f)][D(0x15d)](i);
    l && l[D(0x14c)]({
        'isOnline': ![],
        'lastLogout': new Date()
    });
    j[D(0x13b)](l?.[E(0x15e)] + E(0x11b), {
        'action': h[E(0x12e)],
        'data': {
            'username': l?.[E(0x154)],
            'email': l?.[E(0x140)],
            'isOnline': ![],
            'lastLogout': new Date()
        }
    });
    const m = {};
    return m[D(0x15a)] = h[E(0x11e)], f[D(0x127)](m);
};
exports[x(0x126)] = logout;