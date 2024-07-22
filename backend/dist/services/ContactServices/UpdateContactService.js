'use strict';
const I = b, J = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x5 * -0x4d6 + -0x15ab + 0x1 * -0x121);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const T = [
        '422300phVKjH',
        '../../erro',
        'erty',
        '../../help',
        'defineProp',
        '4710150dvFnYu',
        'payload',
        'bulkCreate',
        'findIndex',
        'Url',
        '__importDe',
        'walletId',
        'forEach',
        '398onMeNx',
        '5JwBpye',
        '5943OPOrTj',
        'MLIEI',
        'update',
        '3404012tFhtuR',
        'profilePic',
        'default',
        'reload',
        'Wallet',
        'VkoDW',
        'ERR_NO_CON',
        'destroy',
        'date',
        'jrSuw',
        'yXTnc',
        'rs/AppErro',
        'upsert',
        '1283645LCeaRS',
        'include',
        'extraInfo',
        '1610fEtSoF',
        'attributes',
        '../../mode',
        'contact:up',
        '37899muINJp',
        'iNLVh',
        'zVTHB',
        'ls/Contact',
        'tenantId',
        'number',
        'ers/socket',
        'map',
        'KmJkV',
        'wallets',
        'COaiV',
        'value',
        '72mHCdPu',
        'type',
        'TACT_FOUND',
        'fAbSZ',
        'name',
        '__esModule',
        'Emit',
        'push',
        'tags',
        'findOne',
        'email',
        'fault',
        'trBFD',
        'where',
        'contactId',
        'CustomFiel',
        'all',
        '371623LVlSvd'
    ];
    a = function () {
        return T;
    };
    return a();
}
(function (c, d) {
    const G = b, H = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(G(0x1a3)) / (0x900 + -0x1823 + 0x50c * 0x3) + parseInt(H(0x16c)) / (0xdf * 0x19 + 0x1 * 0x12b7 + -0x287c) * (-parseInt(G(0x16e)) / (0x1058 + 0x1 * -0x42d + 0x30a * -0x4)) + -parseInt(H(0x171)) / (0xa82 + -0x10d3 + 0x655) * (-parseInt(H(0x16d)) / (-0x157f * 0x1 + 0x5f * 0x17 + 0xcfb)) + parseInt(G(0x164)) / (-0x1 * -0x84a + 0x1573 + -0x1db7) + -parseInt(G(0x1a2)) / (0x5f3 * -0x1 + 0xcaf * -0x1 + 0x1 * 0x12a9) * (-parseInt(G(0x191)) / (-0x217d + 0x861 + -0x1924 * -0x1)) + -parseInt(G(0x185)) / (-0x2 * -0x12f1 + -0x2c * -0x55 + 0x409 * -0xd) * (parseInt(H(0x181)) / (-0x1606 + -0x1 * -0x14b4 + 0x15c)) + parseInt(H(0x17e)) / (0xff + -0x27d * -0x4 + -0xae8);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5 * 0x1f0f1 + -0x6800f + 0x1b6fe6));
var __importDefault = this && this[I(0x169) + J(0x19c)] || function (c) {
    const K = I;
    return c && c[K(0x196)] ? c : { 'default': c };
};
const o = {};
o[I(0x190)] = !![], Object[J(0x163) + I(0x1a5)](exports, J(0x196), o);
const AppError_1 = __importDefault(require(I(0x1a4) + J(0x17c) + 'r')), socketEmit_1 = __importDefault(require(J(0x162) + I(0x18b) + I(0x197))), Contact_1 = __importDefault(require(J(0x183) + J(0x188))), ContactCustomField_1 = __importDefault(require(I(0x183) + I(0x188) + I(0x1a0) + 'd')), ContactWallet_1 = __importDefault(require(I(0x183) + I(0x188) + J(0x175))), UpdateContactService = async ({
        contactData: k,
        contactId: l,
        tenantId: m
    }) => {
        const L = J, M = I, n = {};
        n[L(0x17a)] = function (B, C) {
            return B === C;
        }, n[L(0x194)] = M(0x195), n[M(0x176)] = L(0x18a), n[M(0x16f)] = L(0x19b), n[L(0x19d)] = L(0x172) + L(0x168), n[L(0x186)] = M(0x180), n[M(0x18f)] = L(0x199), n[L(0x17b)] = L(0x18e), n[M(0x187)] = M(0x177) + L(0x193), n[M(0x18d)] = L(0x184) + L(0x179);
        const p = n, {
                email: q,
                name: r,
                number: s,
                extraInfo: t,
                wallets: u
            } = k, v = {};
        v['id'] = l, v[L(0x189)] = m;
        const w = {};
        w[M(0x19e)] = v, w[M(0x182)] = [
            'id',
            p[L(0x194)],
            p[L(0x176)],
            p[L(0x16f)],
            p[L(0x19d)]
        ], w[M(0x17f)] = [
            p[L(0x186)],
            p[L(0x18f)],
            {
                'association': p[L(0x17b)],
                'attributes': [
                    'id',
                    p[L(0x194)]
                ]
            }
        ];
        const x = await Contact_1[M(0x173)][M(0x19a)](w);
        if (!x)
            throw new AppError_1[(L(0x173))](p[M(0x187)], 0x967 + 0x2450 + -0x2c23);
        t && (await Promise[M(0x1a1)](t[M(0x18c)](async B => {
            const N = M, O = M, C = { ...B };
            C[N(0x19f)] = x['id'], await ContactCustomField_1[O(0x173)][N(0x17d)](C);
        })), await Promise[M(0x1a1)](x[M(0x180)][M(0x18c)](async B => {
            const P = L, Q = M, C = t[P(0x167)](D => D['id'] === B['id']);
            if (p[P(0x17a)](C, -(-0x22 * -0x4d + 0x2605 + -0x2 * 0x181f))) {
                const D = {};
                D['id'] = B['id'];
                const E = {};
                E[Q(0x19e)] = D, await ContactCustomField_1[P(0x173)][P(0x178)](E);
            }
        })));
        if (u) {
            const B = {};
            B[M(0x189)] = m, B[L(0x19f)] = l;
            const C = {};
            C[L(0x19e)] = B, await ContactWallet_1[M(0x173)][L(0x178)](C);
            const D = [];
            u[M(0x16b)](E => {
                const R = L, S = L, F = {};
                F[R(0x16a)] = !E['id'] ? E : E['id'], F[S(0x19f)] = l, F[R(0x189)] = m, D[R(0x198)](F);
            }), await ContactWallet_1[M(0x173)][M(0x166)](D);
        }
        const y = {};
        y[M(0x195)] = r, y[M(0x18a)] = s, y[L(0x19b)] = q, await x[L(0x170)](y);
        const z = {};
        z[L(0x182)] = [
            'id',
            p[M(0x194)],
            p[L(0x176)],
            p[L(0x16f)],
            p[L(0x19d)]
        ], z[M(0x17f)] = [
            p[M(0x186)],
            p[M(0x18f)],
            {
                'association': p[M(0x17b)],
                'attributes': [
                    'id',
                    p[L(0x194)]
                ]
            }
        ], await x[M(0x174)](z);
        const A = {};
        return A[M(0x189)] = m, A[L(0x192)] = p[M(0x18d)], A[M(0x165)] = x, (0x136b + 0x22b7 * 0x1 + 0x1a * -0x215, socketEmit_1[M(0x173)])(A), x;
    };
exports[J(0x173)] = UpdateContactService;