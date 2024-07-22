'use strict';
function a() {
    const E = [
        'ERR_NO_AUT',
        'bHwjn',
        'defineProp',
        'isActive',
        'ls/AutoRep',
        'O_REPLY_FO',
        '__importDe',
        '../../mode',
        '7891500kLPCQM',
        'userId',
        'attributes',
        '72gcfcGk',
        'fault',
        '192740jQzgDC',
        'rs/AppErro',
        'erty',
        'IxkvP',
        'action',
        '2729010BtGklS',
        'tenantId',
        '10417542fHEmYO',
        'FHpas',
        'default',
        'where',
        'lkKFK',
        'UND',
        'reload',
        'ulsqB',
        '8902512JbbkkS',
        'value',
        'name',
        '1556400HDJfkO',
        '5410QZKZeY',
        '93Oujgmo',
        '../../erro',
        '42WHcIMR',
        '__esModule',
        'RKQOk',
        'celularTes',
        'update',
        'findOne'
    ];
    a = function () {
        return E;
    };
    return a();
}
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x88)) / (-0x17 * -0xf4 + 0x2149 * -0x1 + 0x3 * 0x3ca) * (parseInt(y(0x73)) / (-0x83a + -0xd2f * -0x1 + -0x4f3)) + parseInt(x(0x89)) / (-0x347 + -0x1c9e + 0x1fe8) * (-parseInt(y(0x75)) / (0x24b0 + 0x1d2d + 0x41d9 * -0x1)) + -parseInt(y(0x7a)) / (-0x85a + 0x19b8 + -0x1159) + parseInt(y(0x7c)) / (-0x21aa + -0xfd3 + 0x41 * 0xc3) + parseInt(x(0x8b)) / (-0x160e + -0x1 * 0x1393 + 0x2b * 0xf8) * (parseInt(x(0x87)) / (0x12 * 0xb5 + 0x1195 + -0x1e47)) + parseInt(y(0x84)) / (0x13dc + -0x1 * -0x144a + 0x9 * -0x475) + -parseInt(y(0x70)) / (0x1a9e + 0x5 * -0x7cd + 0xc6d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x18cfe2 * 0x1 + 0xdd09e + -0x195ce2));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x985 + -0xa99 * -0x1 + -0x13b7);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[z(0x6e) + z(0x74)] || function (c) {
    const B = A;
    return c && c[B(0x8c)] ? c : { 'default': c };
};
const k = {};
k[z(0x85)] = !![], Object[z(0x6a) + z(0x77)](exports, z(0x8c), k);
const AppError_1 = __importDefault(require(z(0x8a) + z(0x76) + 'r')), AutoReply_1 = __importDefault(require(z(0x6f) + z(0x6c) + 'ly')), UpdateAutoReplyService = async ({
        autoReplyData: h,
        autoReplyId: i,
        tenantId: j
    }) => {
        const C = z, D = z, l = {};
        l[C(0x83)] = D(0x86), l[D(0x78)] = D(0x79), l[C(0x69)] = D(0x71), l[C(0x7d)] = C(0x6b), l[D(0x8d)] = D(0x8e) + 'te', l[C(0x80)] = C(0x68) + D(0x6d) + D(0x81);
        const m = l, {
                name: n,
                action: o,
                userId: p,
                isActive: q,
                celularTeste: r
            } = h, s = {};
        s['id'] = i, s[D(0x7b)] = j;
        const t = {};
        t[C(0x7f)] = s, t[C(0x72)] = [
            'id',
            m[D(0x83)],
            m[C(0x78)],
            m[C(0x69)],
            m[C(0x7d)],
            m[D(0x8d)]
        ];
        const u = await AutoReply_1[C(0x7e)][D(0x67)](t);
        if (!u)
            throw new AppError_1[(D(0x7e))](m[D(0x80)], -0x8b * 0x2 + -0x1937 + -0x1be1 * -0x1);
        const v = {};
        v[C(0x86)] = n, v[C(0x79)] = o, v[D(0x71)] = p, v[D(0x6b)] = q, v[D(0x8e) + 'te'] = r, await u[D(0x8f)](v);
        const w = {};
        return w[C(0x72)] = [
            'id',
            m[D(0x83)],
            m[C(0x78)],
            m[D(0x69)],
            m[C(0x7d)],
            m[D(0x8d)]
        ], await u[C(0x82)](w), u;
    };
exports[z(0x7e)] = UpdateAutoReplyService;