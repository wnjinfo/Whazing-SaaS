'use strict';
const I = b, J = b;
(function (c, d) {
    const G = b, H = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(G(0xb6)) / (-0xd9 * -0x14 + -0x17c5 + -0x369 * -0x2) + -parseInt(G(0x95)) / (0x66f + -0x106 + 0x3 * -0x1cd) + -parseInt(G(0xb1)) / (0xedf + -0xa85 + -0x457) + parseInt(G(0xa8)) / (0x23e9 + -0x22cd + 0x1 * -0x118) + parseInt(H(0x8f)) / (-0x377 + -0x15d + 0x4d9) * (parseInt(H(0xb9)) / (0x1c0d * -0x1 + -0x1271 * -0x2 + -0x37 * 0x29)) + parseInt(G(0xad)) / (0x26e9 * 0x1 + 0x2 * 0xa93 + -0x8 * 0x781) + -parseInt(H(0xa4)) / (-0x3 * 0xc53 + 0x1757 + 0x6 * 0x247) * (-parseInt(G(0x98)) / (-0x1d64 + -0x1 * -0x20eb + -0x2 * 0x1bf));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x86404 + -0x74c5a + -0x74 * -0x102b));
var __importDefault = this && this[I(0xa1) + I(0xac)] || function (c) {
    const K = I;
    return c && c[K(0xaa)] ? c : { 'default': c };
};
const o = {};
o[I(0xa5)] = !![], Object[J(0x9a) + J(0x9d)](exports, I(0xaa), o);
const AppError_1 = __importDefault(require(J(0xb5) + I(0xbb) + 'r')), socketEmit_1 = __importDefault(require(J(0xb2) + J(0xc1) + J(0x89))), Contact_1 = __importDefault(require(J(0xa7) + J(0x9e))), ContactWallet_1 = __importDefault(require(I(0xa7) + J(0x9e) + J(0xb7))), CreateContactService = async ({
        name: l,
        number: m,
        email: email = '',
        extraInfo: extraInfo = [],
        profilePicUrl: n,
        tenantId: p,
        wallets: q
    }) => {
        const L = I, M = J, r = {};
        r[L(0x91)] = L(0xab) + L(0x96) + 'CT', r[M(0x86)] = L(0x94), r[M(0xbe)] = M(0x9f), r[M(0xa9)] = L(0xbd), r[L(0x97)] = M(0xa6), r[L(0x8e)] = L(0xaf), r[M(0xc0)] = M(0x8c), r[L(0x92)] = L(0x90) + M(0x9c), r[L(0x8b)] = M(0xb3) + L(0xba);
        const s = r, t = {};
        t[M(0xaf)] = m, t[M(0xb4)] = p;
        const u = {};
        u[L(0xa0)] = t;
        const v = await Contact_1[M(0xbc)][M(0x8d)](u);
        if (v)
            throw new AppError_1[(M(0xbc))](s[L(0x91)]);
        const w = {};
        w[L(0xa6)] = l, w[M(0xaf)] = m, w[M(0x8c)] = email, w[L(0x94)] = extraInfo, w[L(0x90) + M(0x9c)] = n, w[L(0xb4)] = p;
        const x = {};
        x[M(0x93)] = [
            s[L(0x86)],
            s[L(0xbe)],
            {
                'association': s[L(0xa9)],
                'attributes': [
                    'id',
                    s[L(0x97)]
                ]
            }
        ];
        const y = await Contact_1[L(0xbc)][M(0x8a)](w, x);
        if (q) {
            const B = {};
            B[M(0xb4)] = p, B[L(0x88)] = y['id'];
            const C = {};
            C[M(0xa0)] = B, await ContactWallet_1[M(0xbc)][M(0x99)](C);
            const D = [];
            q[M(0xae)](E => {
                const N = M, O = L, F = {};
                F[N(0xb8)] = !E['id'] ? E : E['id'], F[N(0x88)] = y['id'], F[N(0xb4)] = p, D[N(0xa3)](F);
            }), await ContactWallet_1[M(0xbc)][L(0xb0)](D);
        }
        const z = {};
        z[M(0x9b)] = [
            'id',
            s[M(0x97)],
            s[M(0x8e)],
            s[M(0xc0)],
            s[M(0x92)]
        ], z[M(0x93)] = [
            s[L(0x86)],
            s[L(0xbe)],
            {
                'association': s[L(0xa9)],
                'attributes': [
                    'id',
                    s[L(0x97)]
                ]
            }
        ], await y[M(0x87)](z);
        const A = {};
        return A[L(0xb4)] = p, A[M(0xbf)] = s[L(0x8b)], A[M(0xa2)] = y, (0x1ffe + 0x2365 + 0x4363 * -0x1, socketEmit_1[M(0xbc)])(A), y;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x170f + -0x2 * 0xfee + 0xd9 * 0xb);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const P = [
        'date',
        'rs/AppErro',
        'default',
        'wallets',
        'iZynT',
        'type',
        'WkLWR',
        'ers/socket',
        'RRHTi',
        'reload',
        'contactId',
        'Emit',
        'create',
        'Vfhac',
        'email',
        'findOne',
        'PQnFw',
        '69005jtkRta',
        'profilePic',
        'udyXV',
        'YTZqh',
        'include',
        'extraInfo',
        '2117900QirlPy',
        'ATED_CONTA',
        'cYUiU',
        '9qoPAWk',
        'destroy',
        'defineProp',
        'attributes',
        'Url',
        'erty',
        'ls/Contact',
        'tags',
        'where',
        '__importDe',
        'payload',
        'push',
        '4209872VXUzOT',
        'value',
        'name',
        '../../mode',
        '1874928xAdgQz',
        'hUxOW',
        '__esModule',
        'ERR_DUPLIC',
        'fault',
        '2144128sCyqLy',
        'forEach',
        'number',
        'bulkCreate',
        '884388TNjgyb',
        '../../help',
        'contact:up',
        'tenantId',
        '../../erro',
        '590393RJBRNn',
        'Wallet',
        'walletId',
        '6YgThdb'
    ];
    a = function () {
        return P;
    };
    return a();
}
exports[J(0xbc)] = CreateContactService;