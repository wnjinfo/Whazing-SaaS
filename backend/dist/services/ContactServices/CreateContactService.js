'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x314 + -0x4 * -0x563 + -0x109f);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const P = [
        'JmtRE',
        'EvKLB',
        '10ZoDjqR',
        'type',
        'destroy',
        'number',
        '../../erro',
        'tenantId',
        'tags',
        'ls/Contact',
        '../../help',
        'reload',
        'extraInfo',
        'include',
        'fault',
        'erty',
        'dEpCb',
        '701492ZvbGcb',
        'uegAq',
        'Emit',
        'payload',
        'Url',
        '../../mode',
        'bulkCreate',
        '40NcwOtn',
        'rs/AppErro',
        'push',
        'value',
        'where',
        'profilePic',
        'qFskz',
        'KUBrR',
        'attributes',
        'contact:up',
        '241257FaVQpF',
        '26334KxPQsd',
        'email',
        'forEach',
        '242108uNbSpy',
        '763425LkvWtz',
        '1192hyEGvT',
        'name',
        'ers/socket',
        'create',
        'szeJz',
        '3066066kmYfZd',
        '__esModule',
        'contactId',
        'ERR_DUPLIC',
        'findOne',
        'SdxBI',
        'walletId',
        'ATED_CONTA',
        '11350089pdIQoI',
        '__importDe',
        'Wallet',
        'VVlGC',
        'default',
        'defineProp',
        'wallets',
        'date'
    ];
    a = function () {
        return P;
    };
    return a();
}
const I = b, J = b;
(function (c, d) {
    const G = b, H = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(G(0x1f2)) / (0x4e5 * -0x3 + 0x136 * -0x3 + 0x1252) + parseInt(G(0x1dc)) / (0x1 * -0x1fc7 + -0x5 * -0x379 + 0xe6c) + parseInt(H(0x1ed)) / (-0x6 * 0x355 + -0x1 * 0x21c1 + -0x7 * -0x7ae) + -parseInt(H(0x1f1)) / (-0x2d9 + 0x623 * -0x4 + -0x1b69 * -0x1) * (parseInt(G(0x1e3)) / (0x15ce + 0x1295 + -0x285e)) + parseInt(H(0x1f8)) / (0x1e5b + -0x188b + -0x5ca) + parseInt(G(0x1ee)) / (-0x336 + -0x1 * -0x36d + 0x4 * -0xc) * (-parseInt(G(0x1f3)) / (0x26 * -0xb + 0x1d59 + -0x1baf)) + -parseInt(H(0x200)) / (0x5 * 0x7cf + -0x3a8 + -0x235a) * (-parseInt(G(0x20a)) / (-0x37f * 0xb + -0x730 + 0x2daf));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4382f + -0x1086f + 0x2d7ae));
var __importDefault = this && this[I(0x201) + J(0x1d9)] || function (c) {
    const K = J;
    return c && c[K(0x1f9)] ? c : { 'default': c };
};
const o = {};
o[I(0x1e6)] = !![], Object[J(0x205) + J(0x1da)](exports, I(0x1f9), o);
const AppError_1 = __importDefault(require(I(0x20e) + J(0x1e4) + 'r')), socketEmit_1 = __importDefault(require(J(0x212) + I(0x1f5) + I(0x1de))), Contact_1 = __importDefault(require(J(0x1e1) + I(0x211))), ContactWallet_1 = __importDefault(require(I(0x1e1) + I(0x211) + J(0x202))), CreateContactService = async ({
        name: l,
        number: m,
        email: email = '',
        extraInfo: extraInfo = [],
        profilePicUrl: n,
        tenantId: p,
        wallets: q
    }) => {
        const L = I, M = J, r = {};
        r[L(0x1ea)] = M(0x1fb) + L(0x1ff) + 'CT', r[L(0x1f7)] = M(0x214), r[M(0x208)] = M(0x210), r[M(0x1db)] = L(0x206), r[L(0x209)] = M(0x1f4), r[M(0x1e9)] = M(0x20d), r[M(0x203)] = L(0x1ef), r[L(0x1fd)] = M(0x1e8) + M(0x1e0), r[M(0x1dd)] = L(0x1ec) + M(0x207);
        const s = r, t = {};
        t[L(0x20d)] = m, t[M(0x20f)] = p;
        const u = {};
        u[L(0x1e7)] = t;
        const v = await Contact_1[M(0x204)][M(0x1fc)](u);
        if (v)
            throw new AppError_1[(M(0x204))](s[L(0x1ea)]);
        const w = {};
        w[L(0x1f4)] = l, w[M(0x20d)] = m, w[M(0x1ef)] = email, w[L(0x214)] = extraInfo, w[M(0x1e8) + M(0x1e0)] = n, w[M(0x20f)] = p;
        const x = {};
        x[L(0x215)] = [
            s[L(0x1f7)],
            s[L(0x208)],
            {
                'association': s[M(0x1db)],
                'attributes': [
                    'id',
                    s[L(0x209)]
                ]
            }
        ];
        const y = await Contact_1[M(0x204)][M(0x1f6)](w, x);
        if (q) {
            const B = {};
            B[L(0x20f)] = p, B[M(0x1fa)] = y['id'];
            const C = {};
            C[L(0x1e7)] = B, await ContactWallet_1[L(0x204)][M(0x20c)](C);
            const D = [];
            q[L(0x1f0)](E => {
                const N = L, O = M, F = {};
                F[N(0x1fe)] = !E['id'] ? E : E['id'], F[O(0x1fa)] = y['id'], F[O(0x20f)] = p, D[O(0x1e5)](F);
            }), await ContactWallet_1[L(0x204)][M(0x1e2)](D);
        }
        const z = {};
        z[M(0x1eb)] = [
            'id',
            s[L(0x209)],
            s[M(0x1e9)],
            s[M(0x203)],
            s[L(0x1fd)]
        ], z[L(0x215)] = [
            s[L(0x1f7)],
            s[M(0x208)],
            {
                'association': s[L(0x1db)],
                'attributes': [
                    'id',
                    s[L(0x209)]
                ]
            }
        ], await y[L(0x213)](z);
        const A = {};
        return A[L(0x20f)] = p, A[M(0x20b)] = s[L(0x1dd)], A[L(0x1df)] = y, (0x10c7 + 0x1e7b + -0x2f42, socketEmit_1[M(0x204)])(A), y;
    };
exports[I(0x204)] = CreateContactService;