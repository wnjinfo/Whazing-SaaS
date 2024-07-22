'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(w(0xfa)) / (0x203d + 0x89a * -0x2 + -0xf08) + parseInt(x(0x103)) / (0x23ed * -0x1 + -0x1 * -0x117f + 0x1270) * (parseInt(w(0xf9)) / (-0x5 * 0x725 + 0x1894 + 0x7 * 0x198)) + parseInt(w(0xfe)) / (0x1bb + -0xc1 + -0xf6) + parseInt(x(0xed)) / (-0x208c + -0x18d1 + 0x3962) + parseInt(w(0xe6)) / (0x44 * 0x3 + 0x16 * -0x1f + 0xb * 0x2c) * (-parseInt(w(0xfd)) / (-0xe * -0x24d + 0x4d + -0xfc * 0x21)) + parseInt(x(0x102)) / (0xdac + -0x17a6 + -0x356 * -0x3) + -parseInt(w(0xee)) / (-0x16e6 + 0x17d * -0x19 + -0x6 * -0xa06);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x968a4 + -0x202df * 0x1 + 0x68d5 * 0x1));
function a() {
    const D = [
        'DrFvB',
        '597583rGzqig',
        '3383296XMcVgq',
        'OIpSs',
        'T_REPLY_FO',
        '../../erro',
        '3125280UhUxjI',
        '6LdCDwB',
        'rs/AppErro',
        'userId',
        'media',
        'message',
        'UND',
        'update',
        'fault',
        'DpHdq',
        '6ZMUiRN',
        'ERR_NO_FAS',
        'key',
        '../../mode',
        'defineProp',
        'PwtvG',
        'erty',
        '529745ZnsWCS',
        '15985440LUtZqF',
        '__esModule',
        'findOne',
        'where',
        'ls/FastRep',
        '__importDe',
        'default',
        'tenantId',
        'value',
        'eiskc',
        'reload',
        '81546FKWMnS',
        '949192IshzEb',
        'attributes'
    ];
    a = function () {
        return D;
    };
    return a();
}
var __importDefault = this && this[y(0xf3) + z(0xe4)] || function (c) {
    const A = y;
    return c && c[A(0xef)] ? c : { 'default': c };
};
const k = {};
k[z(0xf6)] = !![], Object[y(0xea) + y(0xec)](exports, z(0xef), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x22d + 0x5 * 0x783 + -0x157 * 0x1d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(y(0x101) + y(0x104) + 'r')), FastReply_1 = __importDefault(require(y(0xe9) + y(0xf2) + 'ly')), updateFastReplyService = async ({
        fastReplyData: h,
        fastReplyId: i
    }) => {
        const B = y, C = z, j = {};
        j[B(0xe5)] = B(0xe8), j[C(0xfc)] = C(0xe1), j[C(0xff)] = B(0x106), j[B(0xf7)] = B(0x105), j[C(0xeb)] = B(0xe7) + C(0x100) + B(0xe2);
        const l = j, {
                key: m,
                message: n,
                media: o,
                userId: p,
                tenantId: q
            } = h, r = {};
        r['id'] = i, r[B(0xf5)] = q;
        const s = {};
        s[C(0xf1)] = r, s[B(0xfb)] = [
            'id',
            l[C(0xe5)],
            l[C(0xfc)],
            l[B(0xff)],
            l[B(0xf7)]
        ];
        const t = await FastReply_1[B(0xf4)][C(0xf0)](s);
        if (!t)
            throw new AppError_1[(C(0xf4))](l[B(0xeb)], -0x1daa + 0x2509 + -0x5cb);
        const u = {};
        u[B(0xe8)] = m, u[C(0xe1)] = n, u[B(0x106)] = o, u[B(0x105)] = p, await t[B(0xe3)](u);
        const v = {};
        return v[C(0xfb)] = [
            'id',
            l[C(0xe5)],
            l[C(0xfc)],
            l[C(0xff)],
            l[B(0xf7)]
        ], await t[B(0xf8)](v), t;
    };
exports[y(0xf4)] = updateFastReplyService;