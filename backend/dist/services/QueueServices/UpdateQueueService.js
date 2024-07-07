'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x100)) / (-0x249a + 0x1917 + -0x5c2 * -0x2) + parseInt(x(0xe2)) / (-0x3a0 + 0x6 * -0x426 + 0x1c86) + parseInt(y(0xf9)) / (-0x2 * 0x32e + -0x114e * 0x1 + 0x1 * 0x17ad) * (-parseInt(x(0xdb)) / (-0x1 * -0x1ca + 0x1d63 * 0x1 + -0x1f29)) + -parseInt(x(0xe3)) / (-0x2 * -0x1c9 + 0xfaf + -0x133c) * (-parseInt(x(0xfc)) / (-0x1b93 + 0xe3 * 0x4 + 0x2f * 0x83)) + parseInt(x(0xfa)) / (-0x1 * 0x19fc + -0x2 * 0x2a9 + -0xd * -0x269) + parseInt(y(0xed)) / (0xd * -0x1f9 + 0x250f + -0xb62) * (parseInt(x(0xf2)) / (-0x7 * 0x4a9 + -0x5f * -0x4f + 0x5 * 0xab)) + -parseInt(x(0xe9)) / (0xa56 + 0x1 * 0x173d + -0x65 * 0x55);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x7fb36 + 0x6be87 + 0x53 * -0x141b));
function a() {
    const E = [
        '../../erro',
        'erty',
        'GKvjv',
        'rhdzn',
        '__esModule',
        '__importDe',
        '1090992gxOGFx',
        '128585qeKqqX',
        '../../mode',
        'defineProp',
        'tenantId',
        'RpmKJ',
        'rs/AppErro',
        '9274430GfpXdO',
        'findOne',
        'CfDAA',
        'ls/Queue',
        '32aFqIsa',
        'UE_FOUND',
        'fault',
        'DdPqv',
        'value',
        '1199169afUZgA',
        'yXkNJ',
        'ERR_NO_QUE',
        'from_ia',
        'reload',
        'attributes',
        'update',
        '543sATlHn',
        '834820WgeoND',
        'where',
        '234uZoiuU',
        'queue',
        'userId',
        'default',
        '562171njTFti',
        'isActive',
        'color',
        '3828DdpgII'
    ];
    a = function () {
        return E;
    };
    return a();
}
var __importDefault = this && this[z(0xe1) + A(0xef)] || function (c) {
    const B = A;
    return c && c[B(0xe0)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x19f * 0xc + 0xd2 + -0x1 * 0x136b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[z(0xf1)] = !![], Object[A(0xe5) + z(0xdd)](exports, z(0xe0), k);
const AppError_1 = __importDefault(require(z(0xdc) + z(0xe8) + 'r')), Queue_1 = __importDefault(require(A(0xe4) + z(0xec))), UpdateQueueService = async ({
        queueData: h,
        queueId: i
    }) => {
        const C = z, D = z, j = {};
        j[C(0xde)] = C(0xfd), j[C(0xdf)] = D(0x101), j[D(0xe7)] = D(0xfe), j[D(0xf0)] = D(0xf5), j[D(0xeb)] = C(0x102), j[C(0xf3)] = C(0xf4) + C(0xee);
        const l = j, {
                queue: m,
                isActive: n,
                userId: o,
                tenantId: p,
                from_ia: q,
                color: r
            } = h, s = {};
        s['id'] = i, s[C(0xe6)] = p;
        const t = {};
        t[D(0xfb)] = s, t[C(0xf7)] = [
            'id',
            l[D(0xde)],
            l[C(0xdf)],
            l[C(0xe7)],
            l[C(0xf0)],
            l[C(0xeb)]
        ];
        const u = await Queue_1[D(0xff)][C(0xea)](t);
        if (!u)
            throw new AppError_1[(C(0xff))](l[D(0xf3)], 0x1 * 0x15d3 + 0xe * -0x1cf + 0x1 * 0x513);
        const v = {};
        v[D(0xfd)] = m, v[C(0x101)] = n, v[C(0xf5)] = q, v[D(0x102)] = r, v[D(0xfe)] = o, await u[D(0xf8)](v);
        const w = {};
        return w[D(0xf7)] = [
            'id',
            l[C(0xde)],
            l[D(0xdf)],
            l[D(0xe7)],
            l[D(0xf0)],
            l[C(0xeb)]
        ], await u[C(0xf6)](w), u;
    };
exports[z(0xff)] = UpdateQueueService;