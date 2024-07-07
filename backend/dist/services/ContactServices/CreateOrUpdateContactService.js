'use strict';
function a() {
    const X = [
        'instagram',
        'LWjNJ',
        'contact:up',
        'email',
        '7208MDKjKj',
        'dYGiO',
        '10728bdNeTP',
        'isWAContac',
        'Url',
        'number',
        '../../mode',
        'Jnobv',
        '4977252jEwyeS',
        'DLGRr',
        'value',
        'update',
        'CQKwk',
        'telegram',
        'name',
        'payload',
        'ers/socket',
        'Emit',
        'pushname',
        'isUser',
        'default',
        'telegramId',
        '__esModule',
        '9726732yjKKRR',
        'erty',
        'create',
        'isGroup',
        'extraInfo',
        'LeOqi',
        'ls/Contact',
        'messenger',
        'defineProp',
        '1871211GDgIHU',
        'where',
        'tenantId',
        '7rgXjUM',
        'type',
        'messengerI',
        'kIcrH',
        '../../help',
        'fault',
        'fEPms',
        '50699270ZVxOCT',
        '3295BGWFnM',
        'profilePic',
        'whatsapp',
        'date',
        '12760624ZyRYPk',
        'findOne',
        'replace',
        '__importDe',
        '930hZuBIL',
        'instagramP'
    ];
    a = function () {
        return X;
    };
    return a();
}
const S = b, T = b;
(function (c, d) {
    const Q = b, R = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(Q(0x1eb)) / (-0x1935 + 0x749 * -0x5 + 0x3da3 * 0x1) + parseInt(Q(0x206)) / (0x25e8 + 0x92a + -0x2f10) * (parseInt(Q(0x1fe)) / (-0x1 * -0x751 + 0xea8 + -0x15f6)) + -parseInt(R(0x204)) / (-0x1707 + -0x253a + 0x1a1 * 0x25) * (-parseInt(R(0x1f6)) / (0x25f9 + 0xe56 * 0x2 + -0x29 * 0x1a0)) + parseInt(Q(0x20c)) / (0x313 * 0x1 + 0x192c + -0x1c39) + -parseInt(R(0x1ee)) / (-0x7 * 0x8f + 0xe58 + -0xa68) * (-parseInt(R(0x1fa)) / (-0x99 * 0x1c + 0x264 + 0xe60)) + -parseInt(R(0x1e2)) / (0x232e + -0x2 * -0xe03 + 0x3f2b * -0x1) + -parseInt(Q(0x1f5)) / (0x1e68 + -0x22cc + 0x46e);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3 * 0x2bc76 + 0x2 * 0x349a9 + 0x10d2ca));
var __importDefault = this && this[S(0x1fd) + T(0x1f3)] || function (c) {
    const U = S;
    return c && c[U(0x21a)] ? c : { 'default': c };
};
const D = {};
D[T(0x20e)] = !![], Object[T(0x1ea) + T(0x1e3)](exports, S(0x21a), D);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x6ff * 0x1 + 0x1a61 + 0x1c * -0xa0);
        let h = e[f];
        return h;
    }, b(c, d);
}
const socketEmit_1 = __importDefault(require(T(0x1f2) + T(0x214) + S(0x215))), Contact_1 = __importDefault(require(T(0x20a) + S(0x1e8))), CreateOrUpdateContactService = async ({
        name: o,
        number: p,
        profilePicUrl: q,
        isGroup: r,
        tenantId: s,
        pushname: t,
        isUser: u,
        isWAContact: v,
        email: email = '',
        telegramId: w,
        instagramPK: x,
        messengerId: y,
        extraInfo: extraInfo = [],
        origem: origem = T(0x1f8)
    }) => {
        const V = S, W = T, z = {};
        z[V(0x201)] = function (F, G) {
            return F === G;
        }, z[W(0x1e7)] = W(0x1f8), z[W(0x20d)] = function (F, G) {
            return F === G;
        }, z[V(0x205)] = W(0x211), z[W(0x210)] = W(0x200), z[V(0x1f1)] = W(0x1e9), z[V(0x1f4)] = function (F, G) {
            return F == G;
        }, z[W(0x20b)] = W(0x202) + W(0x1f9);
        const A = z, B = r ? p : p[W(0x1fc)](/[^0-9]/g, '');
        let C = null;
        if (A[W(0x201)](origem, A[W(0x1e7)])) {
            const F = {};
            F[W(0x209)] = B, F[W(0x1ed)] = s;
            const G = {};
            G[W(0x1ec)] = F, C = await Contact_1[V(0x218)][V(0x1fb)](G);
        }
        if (A[V(0x20d)](origem, A[V(0x205)]) && w) {
            const H = {};
            H[V(0x219)] = w, H[W(0x1ed)] = s;
            const I = {};
            I[W(0x1ec)] = H, C = await Contact_1[V(0x218)][W(0x1fb)](I);
        }
        if (A[W(0x201)](origem, A[V(0x210)]) && x) {
            const J = {};
            J[V(0x1ff) + 'K'] = x, J[V(0x1ed)] = s;
            const K = {};
            K[W(0x1ec)] = J, C = await Contact_1[W(0x218)][W(0x1fb)](K);
        }
        if (A[W(0x20d)](origem, A[W(0x1f1)]) && y) {
            const L = {};
            L[V(0x1f0) + 'd'] = y, L[V(0x1ed)] = s;
            const M = {};
            M[W(0x1ec)] = L, C = await Contact_1[W(0x218)][W(0x1fb)](M);
        }
        if (C) {
            let N;
            A[W(0x1f4)](C[V(0x212)], C[W(0x209)]) ? N = o : N = C[V(0x212)];
            const O = {};
            O[V(0x212)] = N, O[V(0x1f7) + W(0x208)] = q, O[W(0x216)] = t, O[V(0x217)] = u, O[V(0x207) + 't'] = v, O[V(0x219)] = w, O[V(0x1ff) + 'K'] = x, O[W(0x1f0) + 'd'] = y, C[W(0x20f)](O);
        } else {
            const P = {};
            P[W(0x212)] = o, P[V(0x209)] = B, P[W(0x1f7) + V(0x208)] = q, P[W(0x203)] = email, P[V(0x1e5)] = r, P[V(0x216)] = t, P[V(0x217)] = u, P[V(0x207) + 't'] = v, P[W(0x1ed)] = s, P[V(0x1e6)] = extraInfo, P[W(0x219)] = w, P[W(0x1ff) + 'K'] = x, P[V(0x1f0) + 'd'] = y, C = await Contact_1[W(0x218)][V(0x1e4)](P);
        }
        const E = {};
        return E[W(0x1ed)] = s, E[W(0x1ef)] = A[W(0x20b)], E[V(0x213)] = C, (-0x6e0 + -0x57e + 0xc5e, socketEmit_1[V(0x218)])(E), C;
    };
exports[T(0x218)] = CreateOrUpdateContactService;