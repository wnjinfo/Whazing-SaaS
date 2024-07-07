'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(A(0x1fe)) / (0xc9f + 0xd61 + 0x37 * -0x79) + -parseInt(A(0x1eb)) / (0xe0e + 0x1630 + -0x243c) * (parseInt(A(0x208)) / (-0x1bb8 + -0x1 * 0x159d + -0xc56 * -0x4)) + -parseInt(B(0x1de)) / (0x264f * 0x1 + -0xb3 * -0x22 + 0x1 * -0x3e11) * (-parseInt(B(0x219)) / (0x1c04 + 0x1a2e + -0x17 * 0x25b)) + -parseInt(A(0x1f8)) / (0x823 * -0x2 + -0x1b2b * -0x1 + 0xb * -0xfd) + parseInt(A(0x1fd)) / (0x6f7 + 0x125a + -0x53 * 0x4e) * (-parseInt(A(0x1ee)) / (-0xae0 + -0x12d3 + -0x81 * -0x3b)) + -parseInt(A(0x1df)) / (0x2 * -0xb93 + -0xc4d + 0x237c) + parseInt(B(0x203)) / (-0x12e * 0x2 + 0x92f + -0x1 * 0x6c9) * (parseInt(B(0x202)) / (-0x1 * 0x2161 + -0xbb * 0x35 + 0x3b * 0x139));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x21a23 * 0x1 + -0x1 * 0x1102 + 0x29 * 0x18d1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1994 + -0x97 * 0x17 + 0x209 * -0x5);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[C(0x1e6) + D(0x213)] || function (c) {
    const E = C;
    return c && c[E(0x1f0)] ? c : { 'default': c };
};
const k = {};
k[C(0x210)] = !![], Object[C(0x1fc) + C(0x21a)](exports, D(0x1f0), k);
function a() {
    const H = [
        '19025ARLUUy',
        'erty',
        'ERR_INVALI',
        'include',
        'lastOnline',
        'KhHHb',
        'isOnline',
        'MytBP',
        'online',
        'email',
        '16dbZwzw',
        '455832upvxMy',
        'model',
        'JWpgh',
        'createAcce',
        'queues',
        'active',
        '../../help',
        '__importDe',
        'where',
        '../../erro',
        '../../mode',
        'checkPassw',
        '12bGnnKN',
        'tenantId',
        'line',
        '1608WlAxCI',
        'findOne',
        '__esModule',
        'status',
        'xeBgW',
        'name',
        'ALS',
        'default',
        'EublB',
        'createRefr',
        '365310bTcELN',
        'ord',
        'aGCED',
        'findAll',
        'defineProp',
        '2163vwYHne',
        '99783tDWrdO',
        'rs/AppErro',
        'user',
        'update',
        '213565PpUHMK',
        '170pSfuOT',
        'refreshTok',
        'TpXAw',
        'ls/Queue',
        'ers/Create',
        '76530AKPoKD',
        'ssToken',
        'usuariosOn',
        'lastLogin',
        'D_CREDENTI',
        'ls/User',
        'tTTsp',
        'attributes',
        'value',
        'token',
        'ls/Tenant',
        'fault',
        'tenant',
        'Tokens',
        'bdfEV',
        'fwChv',
        'eshToken'
    ];
    a = function () {
        return H;
    };
    return a();
}
const User_1 = __importDefault(require(D(0x1e9) + C(0x20d))), AppError_1 = __importDefault(require(C(0x1e8) + D(0x1ff) + 'r')), CreateTokens_1 = require(C(0x1e5) + D(0x207) + C(0x215)), Queue_1 = __importDefault(require(C(0x1e9) + D(0x206))), Tenant_1 = __importDefault(require(D(0x1e9) + C(0x212))), AuthUserService = async ({
        email: l,
        password: m
    }) => {
        const F = C, G = D, n = {};
        n[F(0x205)] = F(0x1e3), n[F(0x217)] = F(0x214), n[G(0x20e)] = F(0x1e4), n[F(0x1f6)] = F(0x1d6) + G(0x20c) + F(0x1f4), n[F(0x1f2)] = G(0x1dc), n[G(0x1fa)] = F(0x1dd), n[G(0x216)] = G(0x1f1), n[G(0x1d9)] = F(0x1d8), n[G(0x1e1)] = F(0x1f3), n[F(0x1db)] = F(0x20b);
        const o = n, p = {};
        p[G(0x1dd)] = l;
        const q = {};
        q[G(0x1e0)] = Queue_1[G(0x1f5)], q['as'] = o[G(0x205)];
        const r = {};
        r[F(0x1e0)] = Tenant_1[F(0x1f5)], r['as'] = o[F(0x217)], r[G(0x1e7)] = {}, r[G(0x1e7)][F(0x1f1)] = o[F(0x20e)];
        const s = {};
        s[G(0x1e7)] = p, s[F(0x1d7)] = [
            q,
            r
        ];
        const t = await User_1[G(0x1f5)][F(0x1ef)](s);
        if (!t)
            throw new AppError_1[(G(0x1f5))](o[F(0x1f6)], 0xefd + -0x1117 + 0x3ab);
        if (!await t[G(0x1ea) + F(0x1f9)](m))
            throw new AppError_1[(F(0x1f5))](o[F(0x1f6)], -0x1a00 + 0x66e + 0x1523);
        const u = (0x1 * -0xaa9 + -0x1 * -0x2377 + -0x18ce, CreateTokens_1[G(0x1e2) + G(0x209)])(t), v = (0xa21 + -0xf39 + 0x518, CreateTokens_1[G(0x1f7) + G(0x218)])(t);
        await t[F(0x201)]({
            'isOnline': !![],
            'status': o[G(0x1f2)],
            'lastLogin': new Date()
        });
        const w = {};
        w[F(0x1ec)] = t[G(0x1ec)], w[G(0x1da)] = !![];
        const x = {};
        x[F(0x1e7)] = w, x[G(0x20f)] = [
            'id',
            o[F(0x1fa)],
            o[F(0x216)],
            o[F(0x1d9)],
            o[F(0x1e1)],
            o[G(0x1db)]
        ];
        const y = await User_1[F(0x1f5)][G(0x1fb)](x), z = {};
        return z[F(0x200)] = t, z[G(0x211)] = u, z[G(0x204) + 'en'] = v, z[F(0x20a) + F(0x1ed)] = y, z;
    };
exports[D(0x1f5)] = AuthUserService;