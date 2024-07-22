'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xd9 * -0x23 + -0x25fe + 0x221b * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const H = b, I = b;
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(F(0x9c)) / (-0x3 * -0x727 + -0x253b * 0x1 + 0x7 * 0x241) * (parseInt(F(0x95)) / (-0x2314 + -0x10e2 + -0x67f * -0x8)) + parseInt(F(0x9e)) / (0x2b * -0x6d + 0x1a * -0x115 + 0x2e74) * (parseInt(F(0x96)) / (-0x11be + 0x72 * 0x20 + 0x382)) + -parseInt(G(0x8e)) / (0xa + -0x156f + 0x156a) * (-parseInt(F(0x9b)) / (0x9 * -0x243 + 0x7b4 + -0xcad * -0x1)) + parseInt(G(0x90)) / (0x96 * -0x8 + -0x27 * 0x5b + 0x1294) * (-parseInt(F(0xad)) / (-0x5 * 0x3ad + 0x2437 * 0x1 + -0x11ce)) + -parseInt(G(0xae)) / (0x204b + -0x485 * -0x2 + 0xdc4 * -0x3) * (parseInt(F(0x9f)) / (-0x11f0 + 0x200d + -0xe13)) + parseInt(F(0xab)) / (0x15e2 + 0x3 * -0xb11 + -0x4 * -0x2d7) + parseInt(F(0x93)) / (-0x25a8 + -0x11d * -0x1b + 0x13 * 0x67) * (-parseInt(G(0x8f)) / (0x14fc + 0x260 * -0x2 + 0x565 * -0x3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xe * -0xf8ec + 0x1 * 0x53974 + -0x1 * 0xa6d9b));
function a() {
    const O = [
        'create',
        '11319xXTqfw',
        '4034830jeYwYL',
        'value',
        '__importDe',
        'USER_GROUP',
        'defineProp',
        'Groups',
        '../../erro',
        'groupId',
        '../../mode',
        'where',
        'internalMe',
        'ssageId',
        '4643430YMaFuh',
        'ls/Interna',
        '53864hTaKxf',
        '9fgoykh',
        'findOne',
        'dels/Users',
        'findAll',
        './../../mo',
        'userGroupI',
        'forEach',
        'qWYxc',
        'PCRWj',
        '__esModule',
        'fault',
        'rs/AppErro',
        'default',
        'read',
        'update',
        'ls/ReadMes',
        'erty',
        '_NOT_FOUND',
        '5lCWWPa',
        '1001kEJrnh',
        '518ebBuAX',
        'lMessage',
        'sageGroups',
        '249252qFmkHK',
        'senderId',
        '2cmafCb',
        '892nQeVMV',
        'userId',
        'receiverId',
        'RsQtn',
        'length',
        '5289042vCsnsL',
        '907181tYcLXK'
    ];
    a = function () {
        return O;
    };
    return a();
}
var __importDefault = this && this[H(0xa1) + H(0xb8)] || function (c) {
    const J = H;
    return c && c[J(0xb7)] ? c : { 'default': c };
};
const k = {};
k[H(0xa0)] = !![], Object[I(0xa3) + H(0xbe)](exports, H(0xb7), k);
const AppError_1 = __importDefault(require(H(0xa5) + I(0xb9) + 'r')), InternalMessage_1 = __importDefault(require(I(0xa7) + H(0xac) + H(0x91))), ReadMessageGroups_1 = __importDefault(require(I(0xa7) + H(0xbd) + H(0x92))), UsersGroups_1 = __importDefault(require(H(0xb2) + H(0xb0) + H(0xa4))), ReadMessageService = async ({
        senderId: l,
        userId: m,
        isGroup: n
    }) => {
        const K = I, L = H, o = {};
        o[K(0xb6)] = function (q, r) {
            return q <= r;
        }, o[L(0x99)] = function (q, r) {
            return q === r;
        }, o[L(0xb5)] = K(0xa2) + L(0x8d);
        const p = o;
        if (p[K(0x99)](n, ![])) {
            const q = {};
            q[K(0xbb)] = !![];
            const r = {};
            r[K(0x94)] = l, r[K(0x98)] = m;
            const s = {};
            s[L(0xa8)] = r, await InternalMessage_1[K(0xba)][K(0xbc)](q, s);
        } else {
            const t = {};
            t[L(0xa6)] = l, t[L(0x97)] = m;
            const u = {};
            u[L(0xa8)] = t;
            const v = await UsersGroups_1[K(0xba)][K(0xaf)](u);
            !v && new AppError_1[(K(0xba))](p[K(0xb5)], 0x21a1 + 0x106 * 0x2 + -0x12d * 0x1d);
            const w = {};
            w[K(0xa6)] = v[K(0xa6)];
            const x = {};
            x[L(0xa8)] = w;
            const y = await InternalMessage_1[K(0xba)][K(0xb1)](x);
            y[K(0xb4)](async z => {
                const M = K, N = L, A = {};
                A[M(0xa9) + M(0xaa)] = z['id'], A[N(0xb3) + 'd'] = v['id'];
                const B = {};
                B[N(0xa8)] = A;
                const C = await ReadMessageGroups_1[M(0xba)][N(0xb1)](B);
                if (p[N(0xb6)](C[N(0x9a)], -0x16a3 + 0x21a3 + -0xb00)) {
                    const D = {};
                    D[M(0xa9) + N(0xaa)] = z['id'], D[N(0xb3) + 'd'] = v['id'];
                    const E = D;
                    await ReadMessageGroups_1[N(0xba)][M(0x9d)](E);
                }
            });
        }
    };
exports[I(0xba)] = ReadMessageService;