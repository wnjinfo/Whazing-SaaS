'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(u(0xce)) / (0x1 * 0x6ab + -0x22e9 + 0x1c3f) * (parseInt(v(0xb8)) / (-0x1e1b + 0x15d * -0x4 + 0x5 * 0x71d)) + -parseInt(v(0xc2)) / (-0x879 + 0x1ac1 + -0x1245) + -parseInt(v(0xca)) / (-0x250b + 0x2251 + -0x3 * -0xea) + parseInt(v(0xc3)) / (-0x2fb * -0x7 + -0xbe2 + -0x8f6) * (parseInt(v(0xcb)) / (0x1 * -0x26d7 + -0x11 * 0x37 + 0x6 * 0x716)) + -parseInt(v(0xdd)) / (0x11 * 0xc3 + -0x14 * -0x86 + -0x1764) * (-parseInt(u(0xbe)) / (-0x332 + 0x176f * -0x1 + -0x111 * -0x19)) + -parseInt(u(0xba)) / (0x2cf * -0xa + 0x1a53 + 0x4 * 0x73) * (parseInt(v(0xc7)) / (-0x1378 + 0x183 * 0x7 + -0x1 * -0x8ed)) + parseInt(u(0xd0)) / (-0x1b53 + -0x9ab + 0x1f3 * 0x13);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2bae6 + -0x98f0 + 0x313f8));
var __importDefault = this && this[w(0xb7) + w(0xb9)] || function (c) {
    const y = x;
    return c && c[y(0xc0)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0xa37 + -0x5 * -0x390 + -0x1b50);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const B = [
        'erty',
        'default',
        'defineProp',
        'rror',
        'rrors/AppE',
        'ERR_NO_STE',
        'AEpjE',
        'AwuZB',
        'reply',
        'sReply',
        '../../../e',
        'reload',
        '49NDnxew',
        '__importDe',
        '22964gOsZau',
        'fault',
        '18QLiZph',
        'odels/Step',
        'initialSte',
        'where',
        '281816womtZl',
        '../../../m',
        '__esModule',
        'update',
        '1057503SJhyts',
        '1135355bNaMOO',
        'findOne',
        'value',
        'attributes',
        '273170UGAJTu',
        'hJpNf',
        'LY_FOUND',
        '15884AjjCOm',
        '6WdAvIv',
        'P_AUTO_REP',
        'userId',
        '3LWpeMh',
        'lYgAE',
        '3447158utETlA'
    ];
    a = function () {
        return B;
    };
    return a();
}
const k = {};
k[x(0xc5)] = !![], Object[w(0xd3) + w(0xd1)](exports, x(0xc0), k);
const AppError_1 = __importDefault(require(w(0xdb) + x(0xd5) + x(0xd4))), StepsReply_1 = __importDefault(require(x(0xbf) + w(0xbb) + w(0xda))), UpdateStepsReplyService = async ({
        stepsReplyData: h,
        stepsReplyId: i
    }) => {
        const z = w, A = w, j = {};
        j[z(0xd7)] = z(0xd9), j[z(0xd8)] = z(0xcd), j[z(0xc8)] = A(0xbc) + 'p', j[A(0xcf)] = A(0xd6) + A(0xcc) + A(0xc9);
        const l = j, {
                reply: m,
                userId: n,
                initialStep: o
            } = h, p = {};
        p['id'] = i;
        const q = {};
        q[A(0xbd)] = p, q[A(0xc6)] = [
            'id',
            l[z(0xd7)],
            l[A(0xd8)],
            l[z(0xc8)]
        ];
        const r = await StepsReply_1[A(0xd2)][A(0xc4)](q);
        if (!r)
            throw new AppError_1[(A(0xd2))](l[A(0xcf)], -0x4f8 + -0x217c + 0x2808);
        const s = {};
        s[A(0xd9)] = m, s[A(0xcd)] = n, s[z(0xbc) + 'p'] = o, await r[A(0xc1)](s);
        const t = {};
        return t[A(0xc6)] = [
            'id',
            l[A(0xd7)],
            l[z(0xd8)],
            l[A(0xc8)]
        ], await r[z(0xdc)](t), r;
    };
exports[x(0xd2)] = UpdateStepsReplyService;