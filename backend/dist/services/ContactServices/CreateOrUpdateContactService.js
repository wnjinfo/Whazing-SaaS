'use strict';
const S = b, T = b;
(function (c, d) {
    const Q = b, R = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(Q(0x90)) / (0xd7d + 0x13 * 0x2b + -0x10ad) + -parseInt(Q(0x9d)) / (0x13d5 + -0x168b + -0x2 * -0x15c) * (-parseInt(R(0x8c)) / (0x1d7b + 0x7 * -0x529 + 0x6a7)) + parseInt(R(0x71)) / (-0x2443 + 0xafd + -0x3 * -0x86e) * (-parseInt(Q(0x9e)) / (0x17f + 0x1f * -0x5e + 0x9e8)) + parseInt(Q(0xa4)) / (0x10 * -0x21a + 0x40 + 0x2166) + parseInt(R(0x94)) / (0x1a0b * 0x1 + -0xea7 + -0xb5d * 0x1) * (-parseInt(Q(0xa3)) / (-0x1e0b * 0x1 + 0x10a7 + 0xd6c)) + parseInt(R(0x80)) / (-0x262e * -0x1 + 0x209 * 0x9 + -0x646 * 0x9) + -parseInt(R(0x73)) / (0xf35 * 0x1 + -0x79a + -0x791) * (parseInt(Q(0x83)) / (-0x2107 + 0x5d4 * 0x5 + -0x1 * -0x3ee));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2 * 0x682ed + -0x97196 + 0x47629));
var __importDefault = this && this[S(0x99) + S(0x95)] || function (c) {
    const U = S;
    return c && c[U(0x76)] ? c : { 'default': c };
};
const D = {};
function a() {
    const X = [
        '460282pYBRiD',
        'telegramId',
        'telegram',
        'isWAContac',
        '365463JYonTF',
        'fault',
        'profilePic',
        'replace',
        'findOne',
        '__importDe',
        'default',
        'messenger',
        'defineProp',
        '87598gFSgQK',
        '23325arzcKr',
        'ls/Contact',
        'messengerI',
        'email',
        'name',
        '40gFoEHW',
        '2572158uRDfiZ',
        'pushname',
        'erty',
        'EqzZY',
        'where',
        'LJwfJ',
        'whatsapp',
        '212cBBXxI',
        'type',
        '30qczEat',
        'Url',
        'number',
        '__esModule',
        'ers/socket',
        'update',
        'instagramP',
        'jCWiJ',
        '../../mode',
        'SXRJc',
        'Emit',
        'value',
        'create',
        '3109644EheNyJ',
        'isGroup',
        'yfjCR',
        '1051754AsmzKw',
        'AQJGj',
        'payload',
        'date',
        'isUser',
        'contact:up',
        'extraInfo',
        '../../help',
        'HaUNB',
        '6XVfHiU',
        'TpFQZ',
        'tenantId',
        'instagram'
    ];
    a = function () {
        return X;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2239 * -0x1 + -0x1 * 0x761 + -0x21a * -0x14);
        let h = e[f];
        return h;
    }, b(c, d);
}
D[T(0x7e)] = !![], Object[T(0x9c) + S(0xa6)](exports, S(0x76), D);
const socketEmit_1 = __importDefault(require(T(0x8a) + T(0x77) + T(0x7d))), Contact_1 = __importDefault(require(S(0x7b) + T(0x9f))), CreateOrUpdateContactService = async ({
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
        origem: origem = S(0x70)
    }) => {
        const V = T, W = S, z = {};
        z[V(0x7c)] = function (F, G) {
            return F === G;
        }, z[W(0x7a)] = V(0x70), z[V(0xa7)] = W(0x92), z[W(0x8b)] = V(0x8f), z[W(0x8d)] = function (F, G) {
            return F === G;
        }, z[W(0x84)] = V(0x9b), z[W(0x6f)] = function (F, G) {
            return F == G;
        }, z[W(0x82)] = W(0x88) + V(0x86);
        const A = z, B = r ? p : p[V(0x97)](/[^0-9]/g, '');
        let C = null;
        if (A[V(0x7c)](origem, A[V(0x7a)])) {
            const F = {};
            F[V(0x75)] = B, F[V(0x8e)] = s;
            const G = {};
            G[W(0x6e)] = F, C = await Contact_1[V(0x9a)][V(0x98)](G);
        }
        if (A[W(0x7c)](origem, A[V(0xa7)]) && w) {
            const H = {};
            H[W(0x91)] = w, H[V(0x8e)] = s;
            const I = {};
            I[V(0x6e)] = H, C = await Contact_1[W(0x9a)][V(0x98)](I);
        }
        if (A[W(0x7c)](origem, A[W(0x8b)]) && x) {
            const J = {};
            J[W(0x79) + 'K'] = x, J[V(0x8e)] = s;
            const K = {};
            K[W(0x6e)] = J, C = await Contact_1[W(0x9a)][W(0x98)](K);
        }
        if (A[V(0x8d)](origem, A[V(0x84)]) && y) {
            const L = {};
            L[W(0xa0) + 'd'] = y, L[V(0x8e)] = s;
            const M = {};
            M[V(0x6e)] = L, C = await Contact_1[W(0x9a)][V(0x98)](M);
        }
        if (C) {
            let N;
            A[V(0x6f)](C[V(0xa2)], C[W(0x75)]) ? N = o : N = C[W(0xa2)];
            const O = {};
            O[V(0xa2)] = N, O[W(0x96) + V(0x74)] = q, O[V(0xa5)] = t, O[V(0x87)] = u, O[W(0x93) + 't'] = v, O[V(0x91)] = w, O[V(0x79) + 'K'] = x, O[V(0xa0) + 'd'] = y, C[W(0x78)](O);
        } else {
            const P = {};
            P[V(0xa2)] = o, P[V(0x75)] = B, P[W(0x96) + V(0x74)] = q, P[W(0xa1)] = email, P[V(0x81)] = r, P[V(0xa5)] = t, P[W(0x87)] = u, P[W(0x93) + 't'] = v, P[W(0x8e)] = s, P[W(0x89)] = extraInfo, P[V(0x91)] = w, P[W(0x79) + 'K'] = x, P[V(0xa0) + 'd'] = y, C = await Contact_1[V(0x9a)][W(0x7f)](P);
        }
        const E = {};
        return E[V(0x8e)] = s, E[W(0x72)] = A[V(0x82)], E[W(0x85)] = C, (-0x5ad + 0x199c + -0x6a5 * 0x3, socketEmit_1[W(0x9a)])(E), C;
    };
exports[T(0x9a)] = CreateOrUpdateContactService;