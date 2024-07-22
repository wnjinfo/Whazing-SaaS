'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0x126)) / (-0x1 * -0x1707 + 0x1e91 + -0x33 * 0x10d) * (parseInt(u(0x12c)) / (-0x8d3 + 0xb70 + -0x29b)) + -parseInt(u(0x12f)) / (-0x1c11 + 0x11ba + 0xa5a) + parseInt(v(0x12d)) / (0x11f8 + 0xc35 * -0x1 + -0x1 * 0x5bf) + parseInt(u(0x134)) / (-0x5d2 + -0x233e + 0x2915) * (parseInt(v(0x140)) / (0x6b5 * 0x4 + 0x1827 + -0x32f5)) + -parseInt(u(0x133)) / (0x1 * -0x1169 + 0xfc3 + 0x8f * 0x3) + parseInt(v(0x120)) / (0x10b1 * 0x1 + 0x5d4 + -0x167d) + -parseInt(u(0x121)) / (-0x131 * -0xc + 0xf72 + -0x1db5) * (parseInt(v(0x13c)) / (0x2633 + 0x26c1 * 0x1 + -0x4cea));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xa537 + 0x937e6 + 0x1c677));
var __importDefault = this && this[w(0x131) + x(0x12b)] || function (c) {
    const y = x;
    return c && c[y(0x11c)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1a78 + -0x2075 + 0x4f * 0x17);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const B = [
        'defineProp',
        '__importDe',
        'erty',
        '5226662jKhlFI',
        '15odABtj',
        'vjbbP',
        'value',
        'rror',
        'attributes',
        '../../../e',
        'default',
        'odels/Step',
        '30JFtDJd',
        'update',
        'where',
        'initialSte',
        '553326cxJGuD',
        'LY_FOUND',
        '__esModule',
        'wZKoG',
        'sReply',
        'reply',
        '7470616bqedlZ',
        '62397Xmmdfv',
        'reload',
        'rrors/AppE',
        'P_AUTO_REP',
        'userId',
        '6qLgfRv',
        '../../../m',
        'nakPX',
        'zfByr',
        'ERR_NO_STE',
        'fault',
        '133938RuxYlT',
        '1849692TaoAGD',
        'findOne',
        '1887240YqFgqX'
    ];
    a = function () {
        return B;
    };
    return a();
}
k[w(0x136)] = !![], Object[w(0x130) + x(0x132)](exports, w(0x11c), k);
const AppError_1 = __importDefault(require(x(0x139) + w(0x123) + w(0x137))), StepsReply_1 = __importDefault(require(w(0x127) + w(0x13b) + w(0x11e))), UpdateStepsReplyService = async ({
        stepsReplyData: h,
        stepsReplyId: i
    }) => {
        const z = w, A = w, j = {};
        j[z(0x128)] = z(0x11f), j[A(0x135)] = A(0x125), j[A(0x129)] = A(0x13f) + 'p', j[A(0x11d)] = A(0x12a) + z(0x124) + z(0x141);
        const l = j, {
                reply: m,
                userId: n,
                initialStep: o
            } = h, p = {};
        p['id'] = i;
        const q = {};
        q[z(0x13e)] = p, q[A(0x138)] = [
            'id',
            l[A(0x128)],
            l[A(0x135)],
            l[A(0x129)]
        ];
        const r = await StepsReply_1[A(0x13a)][z(0x12e)](q);
        if (!r)
            throw new AppError_1[(A(0x13a))](l[z(0x11d)], 0x21e7 + 0x1f80 + -0x3fd3);
        const s = {};
        s[z(0x11f)] = m, s[z(0x125)] = n, s[z(0x13f) + 'p'] = o, await r[z(0x13d)](s);
        const t = {};
        return t[z(0x138)] = [
            'id',
            l[A(0x128)],
            l[z(0x135)],
            l[A(0x129)]
        ], await r[z(0x122)](t), r;
    };
exports[w(0x13a)] = UpdateStepsReplyService;