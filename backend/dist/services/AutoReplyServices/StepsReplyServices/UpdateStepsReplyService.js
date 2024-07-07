'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x99b + 0x335 * -0xa + 0x174c);
        let h = e[f];
        return h;
    }, b(c, d);
}
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0xe7)) / (-0x102b + -0xef9 + 0x11 * 0x1d5) * (-parseInt(u(0xf7)) / (0x5 * -0x313 + -0x1c8e + 0x17 * 0x1e9)) + parseInt(v(0xf0)) / (0xfb0 * -0x1 + -0xa69 + 0x1a1c) * (parseInt(u(0xf2)) / (-0x49 * -0x23 + 0x7 * 0x44b + -0x2 * 0x1402)) + parseInt(v(0xe2)) / (-0xd21 + 0x2 * -0x63c + -0x445 * -0x6) * (parseInt(v(0xde)) / (-0x5 * 0x3ef + 0x6 * 0x206 + 0x78d)) + -parseInt(u(0xfa)) / (0x2090 + -0x1941 + -0x748) + parseInt(u(0xdc)) / (-0x17ee + 0xc * 0x115 + 0x232 * 0x5) + parseInt(u(0xd8)) / (-0x5b1 + -0x1 * 0x1952 + 0x1f0c) * (parseInt(u(0xda)) / (-0x176b + -0x1c91 + -0x1 * -0x3406)) + -parseInt(u(0xdd)) / (0xb6b * -0x1 + -0x21e6 * -0x1 + -0x10 * 0x167);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6f636 + 0x78ac0 + 0x1 * -0x9f949));
var __importDefault = this && this[w(0xe1) + w(0xd5)] || function (c) {
    const y = x;
    return c && c[y(0xe0)] ? c : { 'default': c };
};
const k = {};
function a() {
    const B = [
        'P_AUTO_REP',
        '103773yWYDIf',
        '../../../m',
        '24yGZCKQ',
        'reload',
        'EcsWn',
        'where',
        'userId',
        '2pMJHdV',
        'findOne',
        'LY_FOUND',
        '2301859RtQhlo',
        'attributes',
        'fault',
        '../../../e',
        'erty',
        '232866sCygKO',
        'sReply',
        '120QtyvWc',
        'nGsxf',
        '3177032WfdbwW',
        '3047726TEQOEd',
        '312462GLkHpA',
        'odels/Step',
        '__esModule',
        '__importDe',
        '30GnGSBT',
        'rrors/AppE',
        'ERR_NO_STE',
        'value',
        'reply',
        '324845MEWHIW',
        'update',
        'initialSte',
        'nZQDj',
        'rror',
        'ncCVA',
        'default',
        'defineProp'
    ];
    a = function () {
        return B;
    };
    return a();
}
k[w(0xe5)] = !![], Object[w(0xee) + w(0xd7)](exports, x(0xe0), k);
const AppError_1 = __importDefault(require(w(0xd6) + x(0xe3) + w(0xeb))), StepsReply_1 = __importDefault(require(w(0xf1) + w(0xdf) + w(0xd9))), UpdateStepsReplyService = async ({
        stepsReplyData: h,
        stepsReplyId: i
    }) => {
        const z = x, A = x, j = {};
        j[z(0xea)] = z(0xe6), j[z(0xf4)] = A(0xf6), j[A(0xec)] = A(0xe9) + 'p', j[A(0xdb)] = z(0xe4) + z(0xef) + A(0xf9);
        const l = j, {
                reply: m,
                userId: n,
                initialStep: o
            } = h, p = {};
        p['id'] = i;
        const q = {};
        q[z(0xf5)] = p, q[A(0xfb)] = [
            'id',
            l[z(0xea)],
            l[z(0xf4)],
            l[z(0xec)]
        ];
        const r = await StepsReply_1[z(0xed)][z(0xf8)](q);
        if (!r)
            throw new AppError_1[(z(0xed))](l[z(0xdb)], 0x97 * -0x3 + 0xf2d + -0xbd4);
        const s = {};
        s[A(0xe6)] = m, s[A(0xf6)] = n, s[z(0xe9) + 'p'] = o, await r[z(0xe8)](s);
        const t = {};
        return t[z(0xfb)] = [
            'id',
            l[A(0xea)],
            l[A(0xf4)],
            l[A(0xec)]
        ], await r[A(0xf3)](t), r;
    };
exports[x(0xed)] = UpdateStepsReplyService;