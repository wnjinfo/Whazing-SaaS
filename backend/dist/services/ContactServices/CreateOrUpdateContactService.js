'use strict';
const S = b, T = b;
(function (c, d) {
    const Q = b, R = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(Q(0x179)) / (-0x56b + 0x1a * 0xcc + -0xf4c) * (-parseInt(R(0x1af)) / (0x3 * 0xbe1 + 0x1250 + -0x35f1)) + -parseInt(R(0x18a)) / (0x26d2 * -0x1 + -0x400 + -0x891 * -0x5) + parseInt(R(0x17d)) / (-0x1645 * -0x1 + 0x154 * 0x14 + -0x30d1) * (parseInt(Q(0x184)) / (0x3 * -0x773 + 0x1 * 0x1993 + -0x335)) + -parseInt(R(0x187)) / (0x2 * 0xed5 + 0x2489 + -0x422d) + parseInt(R(0x178)) / (-0x1a26 * -0x1 + -0x14dc + -0x543) + parseInt(R(0x1b0)) / (0xf8 * 0x1c + 0x41c + -0x1f34) * (-parseInt(R(0x1a8)) / (-0x25e1 + -0x12f6 + 0x38e0)) + -parseInt(R(0x191)) / (0x1fef + 0x1d0c + -0x3cf1 * 0x1) * (-parseInt(R(0x1a7)) / (-0x215b + -0x4ac + 0x2612));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0xc59be + 0x1374e6 + 0x53e65));
var __importDefault = this && this[S(0x1ae) + S(0x17a)] || function (c) {
    const U = S;
    return c && c[U(0x17e)] ? c : { 'default': c };
};
const D = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xb * 0x28d + 0x5 * -0x767 + 0x4289);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const X = [
        'name',
        '../../help',
        'default',
        'uQGAT',
        'jlyOk',
        'Emit',
        'telegram',
        'ls/Contact',
        'pushname',
        '704Zwoxty',
        '423uJmrYh',
        'contact:up',
        'isWAContac',
        'xaClJ',
        'knOiE',
        'instagramP',
        '__importDe',
        '24lQbmHF',
        '235736kzPPRu',
        'telegramId',
        'isUser',
        '7035903XlNVGa',
        '23741FVtvNh',
        'fault',
        'number',
        'messenger',
        '5376556ZEHNHH',
        '__esModule',
        'isGroup',
        'instagram',
        'XQPhc',
        'tPLZW',
        'defineProp',
        '5AXoZBj',
        'value',
        'whatsapp',
        '9606492ZQeYhb',
        'profilePic',
        'type',
        '1979292gFkUoU',
        'erty',
        'znVhp',
        'tenantId',
        'create',
        'Url',
        'extraInfo',
        '284530pLEvsO',
        'replace',
        'findOne',
        'where',
        'payload',
        'ENVzW',
        '../../mode',
        'ers/socket',
        'date',
        'PYxZX',
        'email',
        'messengerI',
        'update'
    ];
    a = function () {
        return X;
    };
    return a();
}
D[S(0x185)] = !![], Object[S(0x183) + S(0x18b)](exports, S(0x17e), D);
const socketEmit_1 = __importDefault(require(T(0x19f) + S(0x198) + S(0x1a3))), Contact_1 = __importDefault(require(S(0x197) + S(0x1a5))), CreateOrUpdateContactService = async ({
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
        origem: origem = S(0x186)
    }) => {
        const V = S, W = S, z = {};
        z[V(0x1ab)] = function (F, G) {
            return F === G;
        }, z[W(0x1a1)] = W(0x186), z[V(0x196)] = function (F, G) {
            return F === G;
        }, z[W(0x19a)] = V(0x1a4), z[V(0x1ac)] = V(0x180), z[V(0x182)] = function (F, G) {
            return F === G;
        }, z[V(0x18c)] = V(0x17c), z[V(0x181)] = function (F, G) {
            return F == G;
        }, z[W(0x1a2)] = W(0x1a9) + W(0x199);
        const A = z, B = r ? p : p[V(0x192)](/[^0-9]/g, '');
        let C = null;
        if (A[W(0x1ab)](origem, A[W(0x1a1)])) {
            const F = {};
            F[V(0x17b)] = B, F[W(0x18d)] = s;
            const G = {};
            G[W(0x194)] = F, C = await Contact_1[V(0x1a0)][V(0x193)](G);
        }
        if (A[W(0x196)](origem, A[V(0x19a)]) && w) {
            const H = {};
            H[V(0x1b1)] = w, H[W(0x18d)] = s;
            const I = {};
            I[W(0x194)] = H, C = await Contact_1[V(0x1a0)][W(0x193)](I);
        }
        if (A[W(0x1ab)](origem, A[V(0x1ac)]) && x) {
            const J = {};
            J[V(0x1ad) + 'K'] = x, J[V(0x18d)] = s;
            const K = {};
            K[W(0x194)] = J, C = await Contact_1[V(0x1a0)][W(0x193)](K);
        }
        if (A[W(0x182)](origem, A[W(0x18c)]) && y) {
            const L = {};
            L[W(0x19c) + 'd'] = y, L[V(0x18d)] = s;
            const M = {};
            M[V(0x194)] = L, C = await Contact_1[V(0x1a0)][W(0x193)](M);
        }
        if (C) {
            let N;
            A[W(0x181)](C[W(0x19e)], C[W(0x17b)]) ? N = o : N = C[V(0x19e)];
            const O = {};
            O[V(0x19e)] = N, O[V(0x188) + W(0x18f)] = q, O[W(0x1a6)] = t, O[V(0x177)] = u, O[V(0x1aa) + 't'] = v, O[W(0x1b1)] = w, O[V(0x1ad) + 'K'] = x, O[V(0x19c) + 'd'] = y, C[W(0x19d)](O);
        } else {
            const P = {};
            P[W(0x19e)] = o, P[W(0x17b)] = B, P[W(0x188) + V(0x18f)] = q, P[V(0x19b)] = email, P[W(0x17f)] = r, P[W(0x1a6)] = t, P[W(0x177)] = u, P[W(0x1aa) + 't'] = v, P[V(0x18d)] = s, P[V(0x190)] = extraInfo, P[V(0x1b1)] = w, P[V(0x1ad) + 'K'] = x, P[V(0x19c) + 'd'] = y, C = await Contact_1[V(0x1a0)][V(0x18e)](P);
        }
        const E = {};
        return E[W(0x18d)] = s, E[V(0x189)] = A[W(0x1a2)], E[V(0x195)] = C, (0x23d + -0x5 * 0x563 + 0x3a * 0x6d, socketEmit_1[W(0x1a0)])(E), C;
    };
exports[T(0x1a0)] = CreateOrUpdateContactService;