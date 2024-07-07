'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x14fe + 0xd16 + 0x91d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const H = b, I = b;
function a() {
    const O = [
        '_NOT_FOUND',
        'userId',
        'update',
        'findAll',
        'internalMe',
        '2238699EFZxUz',
        '8890188Cayhte',
        'sageGroups',
        '87471IctKKX',
        'defineProp',
        'receiverId',
        'where',
        'ZrRWz',
        'senderId',
        'USER_GROUP',
        'create',
        'ls/ReadMes',
        'groupId',
        '928771ICUyTG',
        '__esModule',
        'lMessage',
        'findOne',
        '../../erro',
        'ls/Interna',
        'dels/Users',
        'fault',
        'ivngt',
        'rs/AppErro',
        'ssageId',
        './../../mo',
        'erty',
        '__importDe',
        '../../mode',
        'MLZUU',
        'forEach',
        '5zZZAuC',
        'read',
        'default',
        'length',
        '104sOSmIq',
        '6262824KlSuVk',
        '41336170hisNzK',
        'Groups',
        'userGroupI',
        '8998731soRYXK',
        '4BhIWyi',
        'value'
    ];
    a = function () {
        return O;
    };
    return a();
}
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(F(0x148)) / (0x1d27 + -0x527 * -0x6 + -0x10 * 0x3c1) + parseInt(G(0x163)) / (0x851 * -0x3 + 0x121f + -0x23 * -0x32) * (parseInt(F(0x13b)) / (-0x177c * 0x1 + -0x2c5 * 0x4 + -0x2293 * -0x1)) + parseInt(G(0x15e)) / (-0xa * -0x35 + 0x25c + -0x235 * 0x2) * (parseInt(F(0x159)) / (0x14b * -0x1a + -0xaa4 + 0x8db * 0x5)) + parseInt(F(0x13c)) / (-0x26db + -0xfaf + 0x369 * 0x10) + parseInt(F(0x162)) / (-0x1670 + -0x11d9 * 0x2 + 0x7 * 0x84f) + parseInt(G(0x15d)) / (0x2245 + -0x213f + -0xfe) * (parseInt(F(0x13e)) / (-0x1 * 0xfa7 + -0xd94 + -0x4 * -0x751)) + -parseInt(G(0x15f)) / (0x233f + -0x22c1 * -0x1 + -0x45f6);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3 * -0x14fab + -0x4d * -0x1fd1 + 0x7ef36));
var __importDefault = this && this[H(0x155) + H(0x14f)] || function (c) {
    const J = I;
    return c && c[J(0x149)] ? c : { 'default': c };
};
const k = {};
k[I(0x135)] = !![], Object[H(0x13f) + I(0x154)](exports, H(0x149), k);
const AppError_1 = __importDefault(require(H(0x14c) + H(0x151) + 'r')), InternalMessage_1 = __importDefault(require(I(0x156) + H(0x14d) + I(0x14a))), ReadMessageGroups_1 = __importDefault(require(H(0x156) + H(0x146) + I(0x13d))), UsersGroups_1 = __importDefault(require(H(0x153) + H(0x14e) + H(0x160))), ReadMessageService = async ({
        senderId: l,
        userId: m,
        isGroup: n
    }) => {
        const K = I, L = I, o = {};
        o[K(0x150)] = function (q, r) {
            return q <= r;
        }, o[K(0x142)] = function (q, r) {
            return q === r;
        }, o[K(0x157)] = L(0x144) + K(0x136);
        const p = o;
        if (p[K(0x142)](n, ![])) {
            const q = {};
            q[K(0x15a)] = !![];
            const r = {};
            r[K(0x143)] = l, r[K(0x140)] = m;
            const s = {};
            s[K(0x141)] = r, await InternalMessage_1[K(0x15b)][K(0x138)](q, s);
        } else {
            const t = {};
            t[K(0x147)] = l, t[K(0x137)] = m;
            const u = {};
            u[L(0x141)] = t;
            const v = await UsersGroups_1[L(0x15b)][K(0x14b)](u);
            !v && new AppError_1[(K(0x15b))](p[L(0x157)], 0x24c6 + 0x2 * -0x2f3 + -0x2 * 0xea6);
            const w = {};
            w[L(0x147)] = v[L(0x147)];
            const x = {};
            x[K(0x141)] = w;
            const y = await InternalMessage_1[K(0x15b)][L(0x139)](x);
            y[K(0x158)](async z => {
                const M = K, N = K, A = {};
                A[M(0x13a) + N(0x152)] = z['id'], A[M(0x161) + 'd'] = v['id'];
                const B = {};
                B[N(0x141)] = A;
                const C = await ReadMessageGroups_1[M(0x15b)][N(0x139)](B);
                if (p[N(0x150)](C[N(0x15c)], 0x67 * 0x2 + 0x1709 + 0x1 * -0x17d7)) {
                    const D = {};
                    D[M(0x13a) + N(0x152)] = z['id'], D[M(0x161) + 'd'] = v['id'];
                    const E = D;
                    await ReadMessageGroups_1[N(0x15b)][N(0x145)](E);
                }
            });
        }
    };
exports[H(0x15b)] = ReadMessageService;