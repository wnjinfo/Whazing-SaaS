'use strict';
function a() {
    const H = [
        'value',
        'isOnline',
        'model',
        'email',
        'lastOnline',
        'ls/User',
        'ers/Create',
        '__importDe',
        'tenantId',
        'findAll',
        'dGIzS',
        '329517gZtaou',
        'update',
        'ESMYd',
        'ls/Tenant',
        'nsHir',
        'EAEyq',
        'ls/Queue',
        'ssToken',
        'findOne',
        'createAcce',
        'status',
        '4613ROmzYr',
        'tenant',
        '6282820CeOAar',
        'user',
        '../../erro',
        'active',
        'usuariosOn',
        'Uzaid',
        'online',
        'refreshTok',
        'lastLogin',
        'token',
        '2fiZyFN',
        'queues',
        '5973935qgQJSb',
        '3XhzdrB',
        '__esModule',
        'eshToken',
        'attributes',
        '../../mode',
        '2081765sKOLKu',
        'Tokens',
        'include',
        'erty',
        'kJFgm',
        '5765404KhPfYA',
        'D_CREDENTI',
        '11766qacgXu',
        '208gvTQbN',
        'where',
        'checkPassw',
        'rs/AppErro',
        'defineProp',
        'VlqCF',
        'xWExQ',
        'name',
        'fault',
        'uKaer',
        'ERR_INVALI',
        'DfKKV',
        '../../help',
        'ALS',
        'ord',
        'createRefr',
        '1658236CxPtqa',
        'default',
        'line'
    ];
    a = function () {
        return H;
    };
    return a();
}
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(A(0x1bf)) / (0x5ee + 0x214 + -0x801) * (parseInt(A(0x19f)) / (0xf6a + 0x1 * 0x16a + 0x2 * -0x869)) + -parseInt(B(0x1a2)) / (0x3 * -0x8f6 + 0x8 * 0x20c + 0xa85 * 0x1) * (-parseInt(A(0x1ac)) / (-0x47f * -0x3 + 0x83 + -0x4 * 0x37f)) + -parseInt(B(0x1a7)) / (-0x2 * -0x50b + -0x535 + 0x4dc * -0x1) + -parseInt(A(0x1ae)) / (-0x1980 + 0x96a + -0x80e * -0x2) * (-parseInt(A(0x193)) / (0x1b2f + -0xf31 * -0x2 + -0x398a)) + -parseInt(A(0x1af)) / (0x1 * 0x1745 + -0x1 * 0x2455 + -0x8 * -0x1a3) * (parseInt(B(0x188)) / (0x199d + 0x71a + -0x20ae * 0x1)) + parseInt(B(0x195)) / (-0x2561 + -0x81 * -0x5 + 0x22e6) + parseInt(B(0x1a1)) / (0x5d6 * 0x1 + 0x10 * -0x119 + 0xbc5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xf6644 + 0x85f9 * -0x16 + 0x115 * 0x8cc));
var __importDefault = this && this[C(0x184) + C(0x1b7)] || function (c) {
    const E = C;
    return c && c[E(0x1a3)] ? c : { 'default': c };
};
const k = {};
k[D(0x17d)] = !![], Object[D(0x1b3) + D(0x1aa)](exports, D(0x1a3), k);
const User_1 = __importDefault(require(C(0x1a6) + D(0x182))), AppError_1 = __importDefault(require(C(0x197) + D(0x1b2) + 'r')), CreateTokens_1 = require(D(0x1bb) + D(0x183) + D(0x1a8)), Queue_1 = __importDefault(require(D(0x1a6) + C(0x18e))), Tenant_1 = __importDefault(require(C(0x1a6) + D(0x18b))), AuthUserService = async ({
        email: l,
        password: m
    }) => {
        const F = C, G = D, n = {};
        n[F(0x19a)] = F(0x1a0), n[G(0x1b4)] = F(0x194), n[G(0x1b8)] = G(0x198), n[G(0x1ba)] = G(0x1b9) + F(0x1ad) + F(0x1bc), n[G(0x1b5)] = F(0x19b), n[G(0x1ab)] = G(0x180), n[G(0x18a)] = G(0x192), n[F(0x18c)] = G(0x181), n[G(0x18d)] = G(0x1b6), n[G(0x187)] = G(0x19d);
        const o = n, p = {};
        p[F(0x180)] = l;
        const q = {};
        q[G(0x17f)] = Queue_1[G(0x1c0)], q['as'] = o[G(0x19a)];
        const r = {};
        r[F(0x17f)] = Tenant_1[F(0x1c0)], r['as'] = o[F(0x1b4)], r[G(0x1b0)] = {}, r[G(0x1b0)][F(0x192)] = o[F(0x1b8)];
        const s = {};
        s[F(0x1b0)] = p, s[F(0x1a9)] = [
            q,
            r
        ];
        const t = await User_1[F(0x1c0)][F(0x190)](s);
        if (!t)
            throw new AppError_1[(F(0x1c0))](o[G(0x1ba)], 0x2d3 * 0x5 + -0x2 * 0x527 + -0x120 * 0x2);
        if (!await t[F(0x1b1) + G(0x1bd)](m))
            throw new AppError_1[(F(0x1c0))](o[G(0x1ba)], 0x1594 + 0x5 * -0x46a + 0x20f);
        const u = (0x1e9d + 0x13a * -0x3 + -0x1aef, CreateTokens_1[F(0x191) + G(0x18f)])(t), v = (0x48f + 0x92 * 0x35 + -0x22c9, CreateTokens_1[G(0x1be) + F(0x1a4)])(t);
        await t[F(0x189)]({
            'isOnline': !![],
            'status': o[F(0x1b5)],
            'lastLogin': new Date()
        });
        const w = {};
        w[F(0x185)] = t[F(0x185)], w[G(0x17e)] = !![];
        const x = {};
        x[F(0x1b0)] = w, x[G(0x1a5)] = [
            'id',
            o[F(0x1ab)],
            o[G(0x18a)],
            o[G(0x18c)],
            o[F(0x18d)],
            o[G(0x187)]
        ];
        const y = await User_1[G(0x1c0)][G(0x186)](x), z = {};
        return z[F(0x196)] = t, z[G(0x19e)] = u, z[G(0x19c) + 'en'] = v, z[G(0x199) + G(0x17c)] = y, z;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x6cf + 0x27e + -0x7d1 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[C(0x1c0)] = AuthUserService;