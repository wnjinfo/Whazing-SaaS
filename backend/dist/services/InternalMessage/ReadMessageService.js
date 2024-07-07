'use strict';
const H = b, I = b;
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(F(0xdb)) / (0x11e8 + -0x1fc7 * 0x1 + 0xde0) + -parseInt(G(0xeb)) / (0x2 * -0x488 + -0x1f7 * -0xf + -0x1467) + -parseInt(G(0xe2)) / (-0x1a96 + 0x1 * -0x230b + 0x4 * 0xf69) * (parseInt(F(0xf9)) / (-0x1 * -0x6ef + 0x2 * 0x52f + -0x1149 * 0x1)) + -parseInt(G(0xd6)) / (-0x5dd * 0x1 + -0x3bd * 0xa + 0x2b44) + parseInt(G(0xe6)) / (0x1 * -0x1a7f + -0x11fb * -0x2 + -0x971) + -parseInt(G(0xff)) / (0xae0 + 0x1e8 * 0x5 + -0x1461) * (-parseInt(F(0xda)) / (-0x16ea + -0x1375 + -0x5 * -0x87b)) + parseInt(G(0xde)) / (0x1c0a + 0x70 * 0x2d + -0x2fb1 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xb9ae + -0x6811 * 0x3 + -0x74 * -0x8c5));
var __importDefault = this && this[H(0xd3) + I(0xe7)] || function (c) {
    const J = I;
    return c && c[J(0xf4)] ? c : { 'default': c };
};
const k = {};
function a() {
    const O = [
        'internalMe',
        '4jfxoUU',
        '../../erro',
        'PaMgt',
        'rs/AppErro',
        'length',
        'findOne',
        '38682TLjdCX',
        'default',
        '__importDe',
        'create',
        'cCcux',
        '1005050pSUxgg',
        'ls/Interna',
        'read',
        'groupId',
        '96boKpGB',
        '147094jQPMRp',
        'USER_GROUP',
        'Groups',
        '5255928KpzpyQ',
        'update',
        'obQwT',
        'receiverId',
        '364803TscsVj',
        'lMessage',
        './../../mo',
        'senderId',
        '512640aSnTfT',
        'fault',
        '../../mode',
        'ssageId',
        'forEach',
        '266152TrouON',
        'userId',
        'value',
        'userGroupI',
        '_NOT_FOUND',
        'ls/ReadMes',
        'sageGroups',
        'dels/Users',
        'findAll',
        '__esModule',
        'defineProp',
        'where',
        'erty'
    ];
    a = function () {
        return O;
    };
    return a();
}
k[I(0xed)] = !![], Object[H(0xf5) + H(0xf7)](exports, H(0xf4), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2471 + 0x4a0 * 0x2 + 0x1c04);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(H(0xfa) + H(0xfc) + 'r')), InternalMessage_1 = __importDefault(require(H(0xe8) + H(0xd7) + H(0xe3))), ReadMessageGroups_1 = __importDefault(require(I(0xe8) + I(0xf0) + H(0xf1))), UsersGroups_1 = __importDefault(require(H(0xe4) + I(0xf2) + I(0xdd))), ReadMessageService = async ({
        senderId: l,
        userId: m,
        isGroup: n
    }) => {
        const K = H, L = I, o = {};
        o[K(0xfb)] = function (q, r) {
            return q <= r;
        }, o[K(0xe0)] = function (q, r) {
            return q === r;
        }, o[K(0xd5)] = L(0xdc) + K(0xef);
        const p = o;
        if (p[L(0xe0)](n, ![])) {
            const q = {};
            q[K(0xd8)] = !![];
            const r = {};
            r[K(0xe5)] = l, r[K(0xe1)] = m;
            const s = {};
            s[L(0xf6)] = r, await InternalMessage_1[K(0x100)][L(0xdf)](q, s);
        } else {
            const t = {};
            t[K(0xd9)] = l, t[K(0xec)] = m;
            const u = {};
            u[L(0xf6)] = t;
            const v = await UsersGroups_1[L(0x100)][L(0xfe)](u);
            !v && new AppError_1[(K(0x100))](p[L(0xd5)], 0x3 * 0xb03 + 0x2 * 0x137d + -0x466f);
            const w = {};
            w[K(0xd9)] = v[L(0xd9)];
            const x = {};
            x[L(0xf6)] = w;
            const y = await InternalMessage_1[K(0x100)][L(0xf3)](x);
            y[K(0xea)](async z => {
                const M = K, N = L, A = {};
                A[M(0xf8) + N(0xe9)] = z['id'], A[M(0xee) + 'd'] = v['id'];
                const B = {};
                B[N(0xf6)] = A;
                const C = await ReadMessageGroups_1[M(0x100)][N(0xf3)](B);
                if (p[N(0xfb)](C[N(0xfd)], -0x89 * 0x7 + -0x2 * 0xb29 + -0x1 * -0x1a11)) {
                    const D = {};
                    D[M(0xf8) + N(0xe9)] = z['id'], D[N(0xee) + 'd'] = v['id'];
                    const E = D;
                    await ReadMessageGroups_1[N(0x100)][M(0xd4)](E);
                }
            });
        }
    };
exports[H(0x100)] = ReadMessageService;