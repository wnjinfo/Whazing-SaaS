'use strict';
const I = b, J = b;
(function (c, d) {
    const G = b, H = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(G(0x6f)) / (-0x196d + 0x9bf + 0xfaf) + parseInt(G(0x89)) / (0x9ee + 0xf * 0x1f + -0xbbd) + -parseInt(H(0x90)) / (0xb * -0x2c2 + 0x112d + 0xd2c) + -parseInt(H(0x73)) / (-0x1349 * -0x1 + -0xae * -0xd + 0x59f * -0x5) + parseInt(G(0xa9)) / (0x1 * -0x85d + -0xd3 * 0x17 + -0x3 * -0x91d) + -parseInt(H(0x84)) / (-0x713 * -0x1 + -0xab * -0x3 + -0x90e) + parseInt(H(0x92)) / (0x1 * 0x25cc + -0x1 * 0x1091 + -0x2 * 0xa9a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x11317d + -0x748 * -0x24a + -0x18654c));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xaae * -0x2 + -0x14ba + -0x1 * 0x33);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const T = [
        'VEklX',
        'contactId',
        'bulkCreate',
        'Wallet',
        '1543238jZsNtm',
        'value',
        'findIndex',
        'IvjRs',
        'findOne',
        'forEach',
        '../../help',
        '2491953SWSEzO',
        'name',
        '13469015LqImov',
        'extraInfo',
        '../../erro',
        'ERR_NO_CON',
        'bNWPg',
        'push',
        'update',
        '__esModule',
        '__importDe',
        'WFNQf',
        'Emit',
        'erty',
        'wallets',
        'walletId',
        'vnqlN',
        '../../mode',
        'ers/socket',
        'map',
        'TACT_FOUND',
        'IJarD',
        'payload',
        'date',
        'upsert',
        '4354805OzvZhQ',
        'reload',
        'all',
        'QUFTJ',
        'Btetf',
        'number',
        '482976znnaro',
        'type',
        'default',
        'fault',
        '1969048yamHGh',
        'CustomFiel',
        'rs/AppErro',
        'profilePic',
        'defineProp',
        'contact:up',
        'include',
        'Url',
        'email',
        'where',
        'attributes',
        'tenantId',
        'destroy',
        'ls/Contact',
        'tags',
        'XDMbP',
        'RhLBU',
        '6843282DxGvnm'
    ];
    a = function () {
        return T;
    };
    return a();
}
var __importDefault = this && this[I(0x9a) + I(0x72)] || function (c) {
    const K = I;
    return c && c[K(0x99)] ? c : { 'default': c };
};
const o = {};
o[I(0x8a)] = !![], Object[J(0x77) + J(0x9d)](exports, J(0x99), o);
const AppError_1 = __importDefault(require(J(0x94) + J(0x75) + 'r')), socketEmit_1 = __importDefault(require(J(0x8f) + I(0xa2) + J(0x9c))), Contact_1 = __importDefault(require(J(0xa1) + I(0x80))), ContactCustomField_1 = __importDefault(require(I(0xa1) + J(0x80) + I(0x74) + 'd')), ContactWallet_1 = __importDefault(require(I(0xa1) + I(0x80) + I(0x88))), UpdateContactService = async ({
        contactData: k,
        contactId: l,
        tenantId: m
    }) => {
        const L = J, M = I, n = {};
        n[L(0x8c)] = function (B, C) {
            return B === C;
        }, n[L(0x96)] = M(0x91), n[L(0x83)] = M(0xae), n[L(0x82)] = M(0x7b), n[L(0xac)] = M(0x76) + L(0x7a), n[M(0xad)] = L(0x93), n[M(0xa5)] = M(0x81), n[M(0x9b)] = M(0x9e), n[M(0x85)] = L(0x95) + L(0xa4), n[M(0xa0)] = L(0x78) + M(0xa7);
        const p = n, {
                email: q,
                name: r,
                number: s,
                extraInfo: t,
                wallets: u
            } = k, v = {};
        v['id'] = l, v[L(0x7e)] = m;
        const w = {};
        w[M(0x7c)] = v, w[M(0x7d)] = [
            'id',
            p[M(0x96)],
            p[L(0x83)],
            p[L(0x82)],
            p[L(0xac)]
        ], w[M(0x79)] = [
            p[M(0xad)],
            p[M(0xa5)],
            {
                'association': p[L(0x9b)],
                'attributes': [
                    'id',
                    p[L(0x96)]
                ]
            }
        ];
        const x = await Contact_1[L(0x71)][M(0x8d)](w);
        if (!x)
            throw new AppError_1[(M(0x71))](p[L(0x85)], -0x1b5 * 0x1 + 0x1 * 0x5b0 + -0x267);
        t && (await Promise[M(0xab)](t[L(0xa3)](async B => {
            const N = M, O = M, C = { ...B };
            C[N(0x86)] = x['id'], await ContactCustomField_1[N(0x71)][N(0xa8)](C);
        })), await Promise[M(0xab)](x[L(0x93)][M(0xa3)](async B => {
            const P = L, Q = M, C = t[P(0x8b)](D => D['id'] === B['id']);
            if (p[P(0x8c)](C, -(-0x1215 + -0x17d5 * -0x1 + -0x5bf))) {
                const D = {};
                D['id'] = B['id'];
                const E = {};
                E[P(0x7c)] = D, await ContactCustomField_1[P(0x71)][P(0x7f)](E);
            }
        })));
        if (u) {
            const B = {};
            B[L(0x7e)] = m, B[L(0x86)] = l;
            const C = {};
            C[L(0x7c)] = B, await ContactWallet_1[M(0x71)][M(0x7f)](C);
            const D = [];
            u[M(0x8e)](E => {
                const R = M, S = L, F = {};
                F[R(0x9f)] = !E['id'] ? E : E['id'], F[S(0x86)] = l, F[R(0x7e)] = m, D[R(0x97)](F);
            }), await ContactWallet_1[M(0x71)][M(0x87)](D);
        }
        const y = {};
        y[L(0x91)] = r, y[M(0xae)] = s, y[L(0x7b)] = q, await x[L(0x98)](y);
        const z = {};
        z[L(0x7d)] = [
            'id',
            p[M(0x96)],
            p[L(0x83)],
            p[L(0x82)],
            p[L(0xac)]
        ], z[L(0x79)] = [
            p[M(0xad)],
            p[L(0xa5)],
            {
                'association': p[L(0x9b)],
                'attributes': [
                    'id',
                    p[M(0x96)]
                ]
            }
        ], await x[L(0xaa)](z);
        const A = {};
        return A[M(0x7e)] = m, A[L(0x70)] = p[M(0xa0)], A[L(0xa6)] = x, (0x2cf * 0xa + -0x1 * 0x1f60 + -0x1a5 * -0x2, socketEmit_1[L(0x71)])(A), x;
    };
exports[J(0x71)] = UpdateContactService;