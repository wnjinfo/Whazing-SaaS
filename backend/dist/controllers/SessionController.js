'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0xb2)) / (-0x147c * 0x1 + -0x1f8e + -0x1 * -0x340b) * (-parseInt(u(0xa9)) / (-0x1b07 + 0xb5c + 0xfad)) + parseInt(v(0xa1)) / (-0x71a * 0x2 + 0xab0 * 0x2 + -0x729) + -parseInt(v(0x9b)) / (0x187 * 0x13 + -0xe * 0x22a + 0x14b) + parseInt(v(0x9c)) / (-0x186e + -0xb * 0x23b + 0x30fc) * (parseInt(v(0x7c)) / (0x1 * 0x28d + -0x2565 + 0x22de)) + -parseInt(v(0xab)) / (0x13 * 0x6f + -0x263f * 0x1 + 0x1e09) * (parseInt(v(0x93)) / (-0x225 + 0x1b0f + -0x4fa * 0x5)) + parseInt(u(0x94)) / (-0xb28 + 0x26 * 0xa4 + 0xd * -0x103) * (parseInt(u(0xa8)) / (-0x2 * 0x662 + -0x430 * -0x2 + -0x51 * -0xe)) + parseInt(u(0x99)) / (0x243d * 0x1 + -0x25ba + 0x188);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1105 * 0x1d + -0x5d81d + 0x1588ed));
var __importDefault = this && this[w(0x83) + w(0x7d)] || function (c) {
    const y = w;
    return c && c[y(0xbf)] ? c : { 'default': c };
};
function a() {
    const F = [
        'AppError',
        '../helpers',
        'vice',
        'uVJpV',
        'aTCmX',
        'emit',
        'logout',
        'cket',
        '__esModule',
        'default',
        'ERR_USER_N',
        '/SendRefre',
        'ices/Refre',
        'store',
        'findByPk',
        '709572FTdnOI',
        'fault',
        'profile',
        'USER_LOGOU',
        'queues',
        's/AuthServ',
        'userId',
        '__importDe',
        'shTokenSer',
        'SendRefres',
        'serSerice',
        'shToken',
        ':users',
        'body',
        'message',
        'getIO',
        'erty',
        'token',
        'defineProp',
        'hToken',
        'tenantId',
        'N_EXPIRED',
        'jrt',
        '16808YUnYOe',
        '9RNGNaH',
        'update',
        'configs',
        'ices/AuthU',
        'name',
        '21720655iNICJb',
        'bwsKR',
        '2089892euZNsi',
        '20dRGYyq',
        'usuariosOn',
        'ERR_SESSIO',
        'EEYET',
        'line',
        '3032844faVnEM',
        'User',
        'value',
        'cookies',
        '../models/',
        'enService',
        'OT_FOUND',
        '6314060uJabFz',
        '1150762IwImCd',
        'eTFAG',
        '5047LEMNQc',
        'json',
        'RefreshTok',
        '../service',
        'password',
        '../libs/so',
        'email',
        '2hrXCQa',
        '../errors/',
        'status',
        'username',
        's/UserServ'
    ];
    a = function () {
        return F;
    };
    return a();
}
const k = {};
k[x(0xa3)] = !![], Object[x(0x8e) + x(0x8c)](exports, x(0xbf), k), exports[x(0xbd)] = exports[w(0x95)] = exports[x(0xc4)] = void (-0x4a * 0x59 + 0xa * 0x36b + -0x874);
const AppError_1 = __importDefault(require(w(0xb3) + x(0xb7))), AuthUserSerice_1 = __importDefault(require(x(0xae) + x(0xb6) + w(0x97) + x(0x86))), SendRefreshToken_1 = require(w(0xb8) + x(0xc2) + x(0x87)), RefreshTokenService_1 = require(x(0xae) + w(0x81) + w(0xc3) + w(0x84) + x(0xb9)), socket_1 = require(w(0xb0) + w(0xbe)), User_1 = __importDefault(require(w(0xa5) + x(0xa2))), store = async (f, g) => {
        const z = x, A = w, h = {};
        h[z(0x9a)] = A(0x95);
        const i = h, j = (-0xde0 + 0x13a9 * 0x1 + -0x5c9, socket_1[A(0x8b)])(), {
                email: l,
                password: m
            } = f[z(0x89)], n = {};
        n[A(0xb1)] = l, n[z(0xaf)] = m;
        const {
            token: o,
            user: p,
            refreshToken: q,
            usuariosOnline: r
        } = await (-0x2266 + 0x14ae + 0x4 * 0x36e, AuthUserSerice_1[z(0xc0)])(n);
        (0x1c * -0x146 + 0x2616 + 0x1 * -0x26e, SendRefreshToken_1[A(0x85) + A(0x8f)])(g, q);
        const s = {};
        s[z(0x8d)] = o, s[A(0xb5)] = p[A(0x98)], s[z(0xb1)] = p[z(0xb1)], s[z(0x7e)] = p[A(0x7e)], s[z(0xb4)] = p[z(0xb4)], s[z(0x82)] = p['id'], s[z(0x90)] = p[A(0x90)], s[A(0x80)] = p[A(0x80)], s[z(0x9d) + z(0xa0)] = r, s[A(0x96)] = p[A(0x96)];
        const t = s;
        return j[A(0xbc)](t[z(0x90)] + A(0x88), {
            'action': i[z(0x9a)],
            'data': {
                'username': t[A(0xb5)],
                'email': t[A(0xb1)],
                'isOnline': !![],
                'lastLogin': new Date()
            }
        }), g[A(0xb4)](-0x216a + 0x1e63 + 0x3cf)[A(0xac)](t);
    };
exports[w(0xc4)] = store;
const update = async (e, f) => {
    const B = w, C = x, g = {};
    g[B(0x9f)] = C(0x9e) + B(0x91);
    const h = g, i = e[B(0xa4)][B(0x92)];
    if (!i)
        throw new AppError_1[(C(0xc0))](h[B(0x9f)], -0x244e + -0x3 * 0xa59 + -0x44ea * -0x1);
    const {
        newToken: j,
        refreshToken: l
    } = await (0x91 * 0x11 + 0x1b1b + -0x24bc, RefreshTokenService_1[C(0xad) + B(0xa6)])(i);
    (0x8a9 * 0x2 + -0x165 * -0xc + 0x220e * -0x1, SendRefreshToken_1[C(0x85) + B(0x8f)])(f, l);
    const m = {};
    return m[C(0x8d)] = j, f[B(0xac)](m);
};
exports[x(0x95)] = update;
const logout = async (e, f) => {
    const D = x, E = w, g = {};
    g[D(0xba)] = D(0xc1) + D(0xa7), g[D(0xaa)] = E(0x95), g[E(0xbb)] = E(0x7f) + 'T';
    const h = g, {userId: i} = e[E(0x89)];
    if (!i)
        throw new AppError_1[(D(0xc0))](h[D(0xba)], 0x30a * -0x8 + 0x7dc + 0x1208);
    const j = (-0x5 * 0x2ed + -0x4 * 0x508 + 0x22c1, socket_1[E(0x8b)])(), l = await User_1[D(0xc0)][D(0xc5)](i);
    l && l[E(0x95)]({
        'isOnline': ![],
        'lastLogout': new Date()
    });
    j[D(0xbc)](l?.[D(0x90)] + D(0x88), {
        'action': h[E(0xaa)],
        'data': {
            'username': l?.[E(0x98)],
            'email': l?.[D(0xb1)],
            'isOnline': ![],
            'lastLogout': new Date()
        }
    });
    const m = {};
    return m[D(0x8a)] = h[E(0xbb)], f[D(0xac)](m);
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xe63 + 0xe * -0x20a + -0x17 * -0xa3);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[x(0xbd)] = logout;