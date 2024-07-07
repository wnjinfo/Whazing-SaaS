'use strict';
const I = b, J = b;
(function (c, d) {
    const G = b, H = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(G(0x1fb)) / (0x9bd + -0x1 * -0x2222 + -0x2bde) + -parseInt(G(0x1ec)) / (0x1cbf + -0x98f * 0x1 + -0x132e) * (-parseInt(G(0x1d6)) / (0x567 * 0x3 + -0xa77 + -0x5bb)) + -parseInt(G(0x1e3)) / (-0x6fb + -0x1bf9 + -0x1 * -0x22f8) + parseInt(G(0x1bd)) / (0x1467 + 0x191 * -0x1 + 0x1 * -0x12d1) + -parseInt(G(0x1ef)) / (0x2 * -0xae1 + -0x1 * -0x1b4c + -0x584) * (-parseInt(G(0x1bc)) / (-0x23c * -0x1 + -0x6c1 + 0x48c)) + -parseInt(G(0x1fd)) / (0x145e + -0x1 * 0x12ef + -0x167 * 0x1) + parseInt(H(0x1e4)) / (0x20af + 0x197a + -0x1d1 * 0x20);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1e57 * 0x43 + -0x17f * -0xa07 + -0xa4088));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x176 + 0xd1e + 0x2 * -0x66c);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[I(0x1d4) + J(0x1e0)] || function (c) {
    const K = J;
    return c && c[K(0x1d9)] ? c : { 'default': c };
};
const o = {};
o[I(0x1e1)] = !![], Object[J(0x1da) + J(0x1e2)](exports, J(0x1d9), o);
const AppError_1 = __importDefault(require(I(0x1d2) + J(0x1ed) + 'r')), socketEmit_1 = __importDefault(require(I(0x1dc) + J(0x1f6) + J(0x1be))), Contact_1 = __importDefault(require(I(0x1f9) + I(0x1ca))), ContactCustomField_1 = __importDefault(require(I(0x1f9) + J(0x1ca) + J(0x1d1) + 'd')), ContactWallet_1 = __importDefault(require(I(0x1f9) + J(0x1ca) + I(0x1f8))), UpdateContactService = async ({
        contactData: k,
        contactId: l,
        tenantId: m
    }) => {
        const L = I, M = J, n = {};
        n[L(0x1cd)] = function (B, C) {
            return B === C;
        }, n[L(0x1fa)] = L(0x1c4), n[M(0x1d5)] = M(0x1e5), n[L(0x1f7)] = L(0x1ee), n[M(0x1e9)] = M(0x1c8) + L(0x1c2), n[L(0x1d0)] = M(0x1d8), n[L(0x1c5)] = M(0x1ce), n[M(0x1ea)] = M(0x1cc), n[M(0x1e7)] = M(0x1df) + M(0x1eb), n[M(0x1e8)] = L(0x1db) + L(0x1c0);
        const p = n, {
                email: q,
                name: r,
                number: s,
                extraInfo: t,
                wallets: u
            } = k, v = {};
        v['id'] = l, v[L(0x1c3)] = m;
        const w = {};
        w[M(0x1f5)] = v, w[L(0x1bf)] = [
            'id',
            p[M(0x1fa)],
            p[L(0x1d5)],
            p[M(0x1f7)],
            p[M(0x1e9)]
        ], w[M(0x1f2)] = [
            p[M(0x1d0)],
            p[M(0x1c5)],
            {
                'association': p[M(0x1ea)],
                'attributes': [
                    'id',
                    p[M(0x1fa)]
                ]
            }
        ];
        const x = await Contact_1[M(0x1c7)][L(0x1cf)](w);
        if (!x)
            throw new AppError_1[(M(0x1c7))](p[L(0x1e7)], 0x1df6 + -0x1bc8 + -0x9a);
        t && (await Promise[M(0x1cb)](t[M(0x1f1)](async B => {
            const N = L, O = L, C = { ...B };
            C[N(0x1f3)] = x['id'], await ContactCustomField_1[O(0x1c7)][N(0x1c9)](C);
        })), await Promise[L(0x1cb)](x[L(0x1d8)][M(0x1f1)](async B => {
            const P = M, Q = M, C = t[P(0x1fc)](D => D['id'] === B['id']);
            if (p[Q(0x1cd)](C, -(-0x1e5 * 0xd + 0x8da * 0x1 + -0x5 * -0x328))) {
                const D = {};
                D['id'] = B['id'];
                const E = {};
                E[Q(0x1f5)] = D, await ContactCustomField_1[P(0x1c7)][P(0x1f4)](E);
            }
        })));
        if (u) {
            const B = {};
            B[M(0x1c3)] = m, B[M(0x1f3)] = l;
            const C = {};
            C[L(0x1f5)] = B, await ContactWallet_1[L(0x1c7)][M(0x1f4)](C);
            const D = [];
            u[L(0x1dd)](E => {
                const R = L, S = M, F = {};
                F[R(0x1d7)] = !E['id'] ? E : E['id'], F[S(0x1f3)] = l, F[S(0x1c3)] = m, D[R(0x1e6)](F);
            }), await ContactWallet_1[L(0x1c7)][L(0x1c6)](D);
        }
        const y = {};
        y[L(0x1c4)] = r, y[L(0x1e5)] = s, y[L(0x1ee)] = q, await x[L(0x1d3)](y);
        const z = {};
        z[L(0x1bf)] = [
            'id',
            p[M(0x1fa)],
            p[M(0x1d5)],
            p[M(0x1f7)],
            p[M(0x1e9)]
        ], z[L(0x1f2)] = [
            p[L(0x1d0)],
            p[M(0x1c5)],
            {
                'association': p[M(0x1ea)],
                'attributes': [
                    'id',
                    p[L(0x1fa)]
                ]
            }
        ], await x[M(0x1de)](z);
        const A = {};
        return A[M(0x1c3)] = m, A[L(0x1c1)] = p[M(0x1e8)], A[L(0x1f0)] = x, (0x1c4c + 0x9d1 + 0x261d * -0x1, socketEmit_1[L(0x1c7)])(A), x;
    };
exports[I(0x1c7)] = UpdateContactService;
function a() {
    const T = [
        '../../help',
        'forEach',
        'reload',
        'ERR_NO_CON',
        'fault',
        'value',
        'erty',
        '4974456YxAfoO',
        '14645376EGIMtg',
        'number',
        'push',
        'SXgSd',
        'XuRwJ',
        'IjcPh',
        'CVIEp',
        'TACT_FOUND',
        '2syEmNY',
        'rs/AppErro',
        'email',
        '6HbKODZ',
        'payload',
        'map',
        'include',
        'contactId',
        'destroy',
        'where',
        'ers/socket',
        'oHTfw',
        'Wallet',
        '../../mode',
        'mkIHu',
        '890365xyoGan',
        'findIndex',
        '7839384SzjkTn',
        '8132607FFNZGn',
        '4021450ZvJexi',
        'Emit',
        'attributes',
        'date',
        'type',
        'Url',
        'tenantId',
        'name',
        'hPgrM',
        'bulkCreate',
        'default',
        'profilePic',
        'upsert',
        'ls/Contact',
        'all',
        'wallets',
        'hESon',
        'tags',
        'findOne',
        'IypBJ',
        'CustomFiel',
        '../../erro',
        'update',
        '__importDe',
        'BlitZ',
        '1056651WeewkM',
        'walletId',
        'extraInfo',
        '__esModule',
        'defineProp',
        'contact:up'
    ];
    a = function () {
        return T;
    };
    return a();
}