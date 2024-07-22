'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0x1bf)) / (0x726 + -0x23 * -0x1b + -0x49 * 0x26) + parseInt(v(0x1a2)) / (0x1b56 + 0x26 * 0x73 + -0x2c66) * (-parseInt(u(0x191)) / (-0x2162 + -0x30f + -0x2474 * -0x1)) + -parseInt(v(0x1ac)) / (0x34 * 0xad + -0x9 * -0x3b7 + -0x448f) + parseInt(v(0x1a8)) / (0x961 * 0x1 + -0x5e * 0x47 + 0xba * 0x17) + -parseInt(u(0x1c2)) / (0x97b + -0x1709 * 0x1 + 0xd94) + parseInt(u(0x182)) / (0x1ecf + 0x1 * -0x2597 + 0x6cf) + parseInt(u(0x1b4)) / (0x14df + 0x3 * 0x211 + -0x1b0a * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xb73ed * -0x1 + -0x9985 * 0x1a + 0x263ce5));
var __importDefault = this && this[w(0x189) + x(0x190)] || function (c) {
    const y = w;
    return c && c[y(0x1b2)] ? c : { 'default': c };
};
function a() {
    const F = [
        'cket',
        'default',
        'message',
        '3537288abAzpM',
        'findByPk',
        'update',
        '../libs/so',
        's/UserServ',
        'userId',
        '__esModule',
        'SendRefres',
        '3171280tcdNuq',
        'hToken',
        'shTokenSer',
        'logout',
        'BhUrN',
        'defineProp',
        'DlzXX',
        'OT_FOUND',
        'lBgWq',
        'token',
        'json',
        '1332009MmADRw',
        'profile',
        'vice',
        '6078882zeVmKY',
        'body',
        'N_EXPIRED',
        'ERR_USER_N',
        'shToken',
        'AppError',
        'configs',
        '6201356acDgod',
        'PowIL',
        'line',
        'ERR_SESSIO',
        'USER_LOGOU',
        'queues',
        'erty',
        '__importDe',
        's/AuthServ',
        'jrt',
        'usuariosOn',
        '../errors/',
        'username',
        'email',
        'fault',
        '6EXnrsl',
        '../service',
        'store',
        'fIGTv',
        '../models/',
        'password',
        'value',
        'getIO',
        '/SendRefre',
        'tenantId',
        'enService',
        'ices/AuthU',
        'RefreshTok',
        'ices/Refre',
        'cookies',
        'name',
        'emit',
        '719812KIDTFP',
        'User',
        'status',
        ':users',
        'serSerice',
        '../helpers',
        '3682560HcNgFj'
    ];
    a = function () {
        return F;
    };
    return a();
}
const k = {};
k[w(0x197)] = !![], Object[w(0x1b9) + x(0x188)](exports, x(0x1b2), k), exports[x(0x1b7)] = exports[x(0x1ae)] = exports[x(0x193)] = void (0x2305 + -0x493 * -0x2 + -0x1 * 0x2c2b);
const AppError_1 = __importDefault(require(x(0x18d) + x(0x180))), AuthUserSerice_1 = __importDefault(require(x(0x192) + w(0x1b0) + x(0x19c) + w(0x1a6))), SendRefreshToken_1 = require(w(0x1a7) + x(0x199) + w(0x17f)), RefreshTokenService_1 = require(w(0x192) + x(0x18a) + w(0x19e) + w(0x1b6) + w(0x1c1)), socket_1 = require(w(0x1af) + x(0x1a9)), User_1 = __importDefault(require(w(0x195) + w(0x1a3))), store = async (f, g) => {
        const z = x, A = w, h = {};
        h[z(0x1ba)] = z(0x1ae);
        const i = h, j = (-0x2004 + 0x168f + 0x975, socket_1[A(0x198)])(), {
                email: l,
                password: m
            } = f[z(0x1c3)], n = {};
        n[A(0x18f)] = l, n[A(0x196)] = m;
        const {
            token: o,
            user: p,
            refreshToken: q,
            usuariosOnline: r
        } = await (-0x1976 + -0x257d + -0x1 * -0x3ef3, AuthUserSerice_1[A(0x1aa)])(n);
        (0x2319 + 0x2d2 + -0x25eb * 0x1, SendRefreshToken_1[z(0x1b3) + z(0x1b5)])(g, q);
        const s = {};
        s[A(0x1bd)] = o, s[A(0x18e)] = p[A(0x1a0)], s[z(0x18f)] = p[A(0x18f)], s[z(0x1c0)] = p[A(0x1c0)], s[A(0x1a4)] = p[A(0x1a4)], s[A(0x1b1)] = p['id'], s[z(0x19a)] = p[A(0x19a)], s[z(0x187)] = p[A(0x187)], s[A(0x18c) + A(0x184)] = r, s[z(0x181)] = p[z(0x181)];
        const t = s;
        return j[z(0x1a1)](t[A(0x19a)] + z(0x1a5), {
            'action': i[z(0x1ba)],
            'data': {
                'username': t[z(0x18e)],
                'email': t[z(0x18f)],
                'isOnline': !![],
                'lastLogin': new Date()
            }
        }), g[z(0x1a4)](-0xc2d * 0x3 + -0x2022 + 0x4571)[z(0x1be)](t);
    };
exports[w(0x193)] = store;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x9a3 + 0x3 * -0xc07 + -0x6fc * -0x4);
        let h = e[f];
        return h;
    }, b(c, d);
}
const update = async (e, f) => {
    const B = x, C = x, g = {};
    g[B(0x194)] = C(0x185) + B(0x1c4);
    const h = g, i = e[C(0x19f)][C(0x18b)];
    if (!i)
        throw new AppError_1[(C(0x1aa))](h[C(0x194)], -0x2 * 0xaaf + -0x4 * -0xb5 + 0x141b);
    const {
        newToken: j,
        refreshToken: l
    } = await (-0x1294 + 0x16d8 + -0x1 * 0x444, RefreshTokenService_1[B(0x19d) + B(0x19b)])(i);
    (-0x2 * -0x11c3 + -0x1501 + 0x9 * -0x19d, SendRefreshToken_1[B(0x1b3) + B(0x1b5)])(f, l);
    const m = {};
    return m[C(0x1bd)] = j, f[C(0x1be)](m);
};
exports[x(0x1ae)] = update;
const logout = async (e, f) => {
    const D = w, E = w, g = {};
    g[D(0x1bc)] = D(0x17e) + E(0x1bb), g[E(0x183)] = D(0x1ae), g[E(0x1b8)] = D(0x186) + 'T';
    const h = g, {userId: i} = e[D(0x1c3)];
    if (!i)
        throw new AppError_1[(D(0x1aa))](h[D(0x1bc)], 0x1 * -0xbf2 + -0xde0 + 0x1b66);
    const j = (0xf * 0x5f + 0xcdd + -0x126e, socket_1[E(0x198)])(), l = await User_1[E(0x1aa)][D(0x1ad)](i);
    l && l[E(0x1ae)]({
        'isOnline': ![],
        'lastLogout': new Date()
    });
    j[E(0x1a1)](l?.[D(0x19a)] + D(0x1a5), {
        'action': h[D(0x183)],
        'data': {
            'username': l?.[D(0x1a0)],
            'email': l?.[D(0x18f)],
            'isOnline': ![],
            'lastLogout': new Date()
        }
    });
    const m = {};
    return m[D(0x1ab)] = h[D(0x1b8)], f[E(0x1be)](m);
};
exports[x(0x1b7)] = logout;