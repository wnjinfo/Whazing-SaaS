'use strict';
function a() {
    const C = [
        '11832183bYTehO',
        'rs/AppErro',
        '174228qelAcb',
        '15362990TlbJpx',
        '273439PLrDkN',
        'reload',
        'update',
        '3NCxQyw',
        'bWrJS',
        '../../erro',
        '__importDe',
        'findOne',
        '2233iYHTfC',
        'ansyZ',
        'key',
        'ERR_NO_FAS',
        '288ijaSyV',
        '6301375aKxfPD',
        'UND',
        'attributes',
        'where',
        'AXugI',
        '__esModule',
        'tenantId',
        '../../mode',
        'value',
        '7578484oyoNOt',
        'T_REPLY_FO',
        'userId',
        'ls/FastRep',
        '54803kkHLVW',
        'message',
        'default',
        'fault',
        'erty',
        '6ezfznt',
        'eekwf',
        '6kXvnUL',
        'defineProp'
    ];
    a = function () {
        return C;
    };
    return a();
}
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0xf7)) / (0xe0b + 0x1ef1 * 0x1 + -0x2cfb) * (parseInt(v(0xef)) / (-0xc6a + -0x1bcc + 0x2838)) + parseInt(v(0xfa)) / (-0x132c + -0x673 + 0x22 * 0xc1) * (parseInt(w(0xe6)) / (-0x12a * -0x9 + 0xc0 + -0xb36)) + -parseInt(v(0x104)) / (-0x15d3 + -0x20a5 + 0x367d * 0x1) * (-parseInt(w(0xf1)) / (-0x1c08 + 0x13da + 0xaf * 0xc)) + parseInt(v(0xea)) / (0x1 * -0x1e65 + -0x25e2 + -0xe * -0x4e1) * (-parseInt(v(0x103)) / (0x22bd + -0x735 + 0x10 * -0x1b8)) + -parseInt(v(0xf3)) / (0x6b * -0x20 + 0x6f * -0x52 + 0x30f7) + parseInt(v(0xf6)) / (0x21f5 * 0x1 + 0x376 + -0x2561) + parseInt(v(0xff)) / (0x8e8 + 0x16d * 0xc + -0x19f9) * (-parseInt(v(0xf5)) / (-0x42 * 0x4 + -0x213d + 0x7 * 0x4e7));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0x1c4059 + 0x7 * -0x32a7f + 0x412d9a));
var __importDefault = this && this[x(0xfd) + x(0xed)] || function (c) {
    const z = y;
    return c && c[z(0xe2)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xd * 0x121 + -0x1a83 * -0x1 + -0x3 * 0x3a7);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[y(0xe5)] = !![], Object[y(0xf2) + x(0xee)](exports, y(0xe2), k);
const AppError_1 = __importDefault(require(y(0xfc) + x(0xf4) + 'r')), FastReply_1 = __importDefault(require(y(0xe4) + y(0xe9) + 'ly')), UpdateFastReplyService = async ({
        fastReplyData: h,
        fastReplyId: i
    }) => {
        const A = x, B = x, j = {};
        j[A(0xfb)] = A(0x101), j[A(0xf0)] = A(0xeb), j[A(0xe1)] = A(0xe8), j[A(0x100)] = A(0x102) + B(0xe7) + A(0x105);
        const l = j, {
                key: m,
                message: n,
                userId: o,
                tenantId: p
            } = h, q = {};
        q['id'] = i, q[B(0xe3)] = p;
        const r = {};
        r[A(0x107)] = q, r[A(0x106)] = [
            'id',
            l[B(0xfb)],
            l[B(0xf0)],
            l[B(0xe1)]
        ];
        const s = await FastReply_1[B(0xec)][A(0xfe)](r);
        if (!s)
            throw new AppError_1[(A(0xec))](l[A(0x100)], 0x20 * -0x4 + -0x13d9 + 0x15ed);
        const t = {};
        t[B(0x101)] = m, t[A(0xeb)] = n, t[B(0xe8)] = o, await s[A(0xf9)](t);
        const u = {};
        return u[B(0x106)] = [
            'id',
            l[B(0xfb)],
            l[A(0xf0)],
            l[A(0xe1)]
        ], await s[B(0xf8)](u), s;
    };
exports[y(0xec)] = UpdateFastReplyService;