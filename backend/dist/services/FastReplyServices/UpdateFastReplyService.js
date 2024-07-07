'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x148)) / (-0xb * -0x1f4 + -0x1729 * -0x1 + 0x4 * -0xb29) * (-parseInt(v(0x15e)) / (0xe2c + 0x25c8 + 0xda * -0x3d)) + parseInt(v(0x14b)) / (-0x86 * 0x14 + -0x52e + 0xfa9 * 0x1) * (parseInt(v(0x156)) / (0x12fb + -0x95 * 0x4 + 0x10a3 * -0x1)) + parseInt(w(0x13e)) / (-0x1d21 + -0x765 * -0x3 + -0x6f7 * -0x1) + parseInt(v(0x147)) / (0x1c28 + -0x88 + -0x1b9a) * (parseInt(v(0x153)) / (0x1 * -0xf35 + 0x1c53 * -0x1 + 0x213 * 0x15)) + parseInt(v(0x15a)) / (-0x1a9b + 0xe2b + -0x13 * -0xa8) + -parseInt(v(0x14d)) / (0x5b * 0x35 + -0x3e3 + -0xeeb) + -parseInt(w(0x15c)) / (-0x1da0 + 0xe5 * -0x19 + -0x13 * -0x2bd);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1683b9 + -0x4cd38 * 0x4 + 0x88d89));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x930 + -0x3a * 0x7 + 0x65d * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const C = [
        '8949444WRaWNP',
        'ls/FastRep',
        'message',
        '4IWJhND',
        '../../erro',
        'update',
        'default',
        '12029080FiUdNm',
        'defineProp',
        '35053430bYIvoX',
        'rs/AppErro',
        '482HOQVdW',
        'userId',
        'findOne',
        '__esModule',
        '__importDe',
        '7733135gochQV',
        'erty',
        'where',
        'aQlID',
        'key',
        'rutiT',
        'attributes',
        'T_REPLY_FO',
        'FfiVX',
        '6amOBDZ',
        '1973zZVUlm',
        '../../mode',
        'reload',
        '4541043IIRmaS',
        'UND',
        '9758565clPtLU',
        'fault',
        'tenantId',
        'value',
        'ERR_NO_FAS',
        'GipSK'
    ];
    a = function () {
        return C;
    };
    return a();
}
var __importDefault = this && this[x(0x13d) + x(0x14e)] || function (c) {
    const z = y;
    return c && c[z(0x161)] ? c : { 'default': c };
};
const k = {};
k[y(0x150)] = !![], Object[x(0x15b) + x(0x13f)](exports, x(0x161), k);
const AppError_1 = __importDefault(require(y(0x157) + x(0x15d) + 'r')), FastReply_1 = __importDefault(require(x(0x149) + x(0x154) + 'ly')), UpdateFastReplyService = async ({
        fastReplyData: h,
        fastReplyId: i
    }) => {
        const A = x, B = x, j = {};
        j[A(0x141)] = B(0x142), j[A(0x152)] = B(0x155), j[A(0x146)] = A(0x15f), j[A(0x143)] = A(0x151) + B(0x145) + A(0x14c);
        const l = j, {
                key: m,
                message: n,
                userId: o,
                tenantId: p
            } = h, q = {};
        q['id'] = i, q[A(0x14f)] = p;
        const r = {};
        r[B(0x140)] = q, r[B(0x144)] = [
            'id',
            l[A(0x141)],
            l[B(0x152)],
            l[A(0x146)]
        ];
        const s = await FastReply_1[B(0x159)][B(0x160)](r);
        if (!s)
            throw new AppError_1[(B(0x159))](l[B(0x143)], 0x1 * 0x147a + 0x152f + -0x2815);
        const t = {};
        t[A(0x142)] = m, t[A(0x155)] = n, t[B(0x15f)] = o, await s[A(0x158)](t);
        const u = {};
        return u[A(0x144)] = [
            'id',
            l[A(0x141)],
            l[B(0x152)],
            l[B(0x146)]
        ], await s[A(0x14a)](u), s;
    };
exports[x(0x159)] = UpdateFastReplyService;