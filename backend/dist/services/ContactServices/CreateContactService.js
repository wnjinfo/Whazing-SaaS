'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1c3 * 0xa + 0x9 * 0x19f + -0x1fbb);
        let h = e[f];
        return h;
    }, b(c, d);
}
const I = b, J = b;
function a() {
    const P = [
        'Qqhsf',
        'payload',
        'erty',
        '__esModule',
        'ATED_CONTA',
        'walletId',
        'create',
        'contactId',
        'bulkCreate',
        'izQYf',
        'include',
        'default',
        'number',
        'extraInfo',
        'ers/socket',
        '1855340HCykwa',
        '732160qtnlyt',
        'push',
        'email',
        '40LzPLru',
        '1257495IBIHLY',
        'type',
        'Wallet',
        'MMvBM',
        'where',
        'NcwsR',
        'findOne',
        '25384LfzKUl',
        'destroy',
        '../../erro',
        '9842BIayDd',
        'HXimK',
        'contact:up',
        'fault',
        'iSork',
        'reload',
        '2534719mDljxI',
        'tags',
        'ERR_DUPLIC',
        'Url',
        'LPign',
        'name',
        'wallets',
        '4fxPoZl',
        '1217160XiafhT',
        'tpLvS',
        '11etZMTh',
        'ls/Contact',
        '../../help',
        '../../mode',
        'defineProp',
        '__importDe',
        'profilePic',
        'Emit',
        'tenantId',
        'date',
        'rs/AppErro',
        'attributes',
        '324YWAtnj',
        'value',
        'BOqja',
        'forEach'
    ];
    a = function () {
        return P;
    };
    return a();
}
(function (c, d) {
    const G = b, H = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(G(0x7a)) / (0x5 * 0x283 + -0x4 * 0x93a + 0x185a) * (-parseInt(G(0xa5)) / (0x139b * 0x1 + -0x3 * 0x1b4 + 0x1 * -0xe7d)) + -parseInt(H(0x9e)) / (-0x1c1b + 0x37 * 0x72 + 0x3a0 * 0x1) * (parseInt(H(0xb5)) / (-0x1 * 0x200e + 0x5 * -0x63d + 0x3f43)) + -parseInt(G(0x99)) / (-0xcbc * -0x1 + 0x151a + -0x21d1) + -parseInt(G(0x86)) / (0xa50 + 0xaf8 + -0x1542) * (parseInt(G(0xa8)) / (-0x1f9c * -0x1 + 0x2c1 + -0x2256)) + -parseInt(H(0x9a)) / (0x6 * -0x482 + -0x1c4d + 0x3761) + parseInt(G(0xb6)) / (-0xbff + -0x62a + 0x1232) + -parseInt(G(0x9d)) / (-0x2 * -0x4fd + -0xf7b + 0x58b) * (-parseInt(G(0xae)) / (-0x8cb + -0x32b * -0x1 + 0x5ab));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x24ac9 + -0x3a17e + 0x99172 * 0x1));
var __importDefault = this && this[I(0x7f) + J(0xab)] || function (c) {
    const K = J;
    return c && c[K(0x8d)] ? c : { 'default': c };
};
const o = {};
o[I(0x87)] = !![], Object[I(0x7e) + I(0x8c)](exports, I(0x8d), o);
const AppError_1 = __importDefault(require(I(0xa7) + J(0x84) + 'r')), socketEmit_1 = __importDefault(require(I(0x7c) + J(0x98) + J(0x81))), Contact_1 = __importDefault(require(I(0x7d) + J(0x7b))), ContactWallet_1 = __importDefault(require(I(0x7d) + I(0x7b) + J(0xa0))), CreateContactService = async ({
        name: l,
        number: m,
        email: email = '',
        extraInfo: extraInfo = [],
        profilePicUrl: n,
        tenantId: p,
        wallets: q
    }) => {
        const L = J, M = J, r = {};
        r[L(0x93)] = M(0xb0) + M(0x8e) + 'CT', r[L(0x8a)] = M(0x97), r[M(0x88)] = M(0xaf), r[M(0xb7)] = M(0xb4), r[L(0xa9)] = L(0xb3), r[M(0xa1)] = L(0x96), r[M(0xb2)] = M(0x9c), r[L(0xa3)] = L(0x80) + L(0xb1), r[M(0xac)] = L(0xaa) + M(0x83);
        const s = r, t = {};
        t[L(0x96)] = m, t[L(0x82)] = p;
        const u = {};
        u[M(0xa2)] = t;
        const v = await Contact_1[M(0x95)][M(0xa4)](u);
        if (v)
            throw new AppError_1[(L(0x95))](s[L(0x93)]);
        const w = {};
        w[L(0xb3)] = l, w[L(0x96)] = m, w[L(0x9c)] = email, w[L(0x97)] = extraInfo, w[L(0x80) + L(0xb1)] = n, w[M(0x82)] = p;
        const x = {};
        x[L(0x94)] = [
            s[M(0x8a)],
            s[L(0x88)],
            {
                'association': s[L(0xb7)],
                'attributes': [
                    'id',
                    s[M(0xa9)]
                ]
            }
        ];
        const y = await Contact_1[M(0x95)][M(0x90)](w, x);
        if (q) {
            const B = {};
            B[M(0x82)] = p, B[L(0x91)] = y['id'];
            const C = {};
            C[M(0xa2)] = B, await ContactWallet_1[L(0x95)][M(0xa6)](C);
            const D = [];
            q[L(0x89)](E => {
                const N = M, O = M, F = {};
                F[N(0x8f)] = !E['id'] ? E : E['id'], F[O(0x91)] = y['id'], F[O(0x82)] = p, D[O(0x9b)](F);
            }), await ContactWallet_1[M(0x95)][L(0x92)](D);
        }
        const z = {};
        z[M(0x85)] = [
            'id',
            s[L(0xa9)],
            s[M(0xa1)],
            s[M(0xb2)],
            s[M(0xa3)]
        ], z[M(0x94)] = [
            s[L(0x8a)],
            s[L(0x88)],
            {
                'association': s[M(0xb7)],
                'attributes': [
                    'id',
                    s[M(0xa9)]
                ]
            }
        ], await y[M(0xad)](z);
        const A = {};
        return A[M(0x82)] = p, A[M(0x9f)] = s[L(0xac)], A[L(0x8b)] = y, (0xe98 * -0x2 + -0x6 * -0xd6 + -0x1dc * -0xd, socketEmit_1[M(0x95)])(A), y;
    };
exports[I(0x95)] = CreateContactService;