'use strict';
function a() {
    const E = [
        'default',
        'attributes',
        'YVxMg',
        '3924624xyaJNu',
        '../../erro',
        'erty',
        'isActive',
        '1957274cdxMYI',
        'name',
        'action',
        'VuHTm',
        'defineProp',
        'KKLAE',
        'O_REPLY_FO',
        '1001249JsNrtN',
        '2445444RUSmTA',
        'ZbVRC',
        'update',
        'where',
        'pfyye',
        '__esModule',
        '../../mode',
        'reload',
        'tenantId',
        'rs/AppErro',
        'ls/AutoRep',
        '3oetnrO',
        '1407RsXgpu',
        'findOne',
        'celularTes',
        '2363755QRTAVz',
        '8865387DshNLW',
        'value',
        '__importDe',
        'ERR_NO_AUT',
        'UND',
        'userId',
        'fault',
        '10oZDjqb',
        'rcvfg',
        '21288nvYmmS'
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
            const f = parseInt(x(0x1ef)) / (0x217 * 0x3 + -0x186e + -0x1e * -0x9b) + -parseInt(y(0x1e8)) / (0x1ffc + -0x9c4 + 0xb1b * -0x2) * (-parseInt(y(0x1fb)) / (0x19a8 * 0x1 + -0x2 * 0x53 + -0x18ff)) + -parseInt(y(0x1e4)) / (-0x2 * 0x72e + -0xf55 * 0x2 + -0x902 * -0x5) + parseInt(y(0x1d6)) / (0x4 * 0x6df + 0x2 * -0x109e + -0x7 * -0xd3) + -parseInt(y(0x1f0)) / (-0x20e * 0xb + 0x1b56 + 0x6 * -0xc9) + parseInt(x(0x1d3)) / (0x7f * 0x1 + 0xc09 + -0xc81) * (parseInt(x(0x1e0)) / (-0x5 * 0x53e + -0x2069 + -0x27 * -0x181)) + -parseInt(x(0x1d7)) / (-0x7 * -0x57b + -0x95 * 0x43 + 0xab) * (parseInt(y(0x1de)) / (-0x24fe + -0x843 + 0x2d4b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0xd1163 + 0x869c8 + 0xe04f8));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xc6d * 0x3 + -0x1 * -0xe17 + 0x1903);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[z(0x1d9) + z(0x1dd)] || function (c) {
    const B = A;
    return c && c[B(0x1f5)] ? c : { 'default': c };
};
const k = {};
k[z(0x1d8)] = !![], Object[z(0x1ec) + z(0x1e6)](exports, z(0x1f5), k);
const AppError_1 = __importDefault(require(A(0x1e5) + z(0x1f9) + 'r')), AutoReply_1 = __importDefault(require(A(0x1f6) + z(0x1fa) + 'ly')), UpdateAutoReplyService = async ({
        autoReplyData: h,
        autoReplyId: i,
        tenantId: j
    }) => {
        const C = z, D = z, l = {};
        l[C(0x1eb)] = D(0x1e9), l[D(0x1f4)] = D(0x1ea), l[C(0x1f1)] = D(0x1dc), l[D(0x1e3)] = D(0x1e7), l[C(0x1ed)] = C(0x1d5) + 'te', l[C(0x1df)] = C(0x1da) + D(0x1ee) + C(0x1db);
        const m = l, {
                name: n,
                action: o,
                userId: p,
                isActive: q,
                celularTeste: r
            } = h, s = {};
        s['id'] = i, s[C(0x1f8)] = j;
        const t = {};
        t[D(0x1f3)] = s, t[D(0x1e2)] = [
            'id',
            m[D(0x1eb)],
            m[C(0x1f4)],
            m[D(0x1f1)],
            m[D(0x1e3)],
            m[C(0x1ed)]
        ];
        const u = await AutoReply_1[D(0x1e1)][D(0x1d4)](t);
        if (!u)
            throw new AppError_1[(D(0x1e1))](m[D(0x1df)], -0x134d + -0x169d * 0x1 + -0x1 * -0x2b7e);
        const v = {};
        v[D(0x1e9)] = n, v[C(0x1ea)] = o, v[C(0x1dc)] = p, v[C(0x1e7)] = q, v[C(0x1d5) + 'te'] = r, await u[D(0x1f2)](v);
        const w = {};
        return w[C(0x1e2)] = [
            'id',
            m[C(0x1eb)],
            m[C(0x1f4)],
            m[D(0x1f1)],
            m[C(0x1e3)],
            m[D(0x1ed)]
        ], await u[D(0x1f7)](w), u;
    };
exports[A(0x1e1)] = UpdateAutoReplyService;