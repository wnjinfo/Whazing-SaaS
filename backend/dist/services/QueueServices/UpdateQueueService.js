'use strict';
function a() {
    const E = [
        'color',
        'isActive',
        'reload',
        '../../erro',
        'tenantId',
        '8998MuMQzK',
        '978WGtrUT',
        'defineProp',
        'CSGwi',
        'bAJEw',
        'userId',
        'queue',
        'fault',
        'ONZPt',
        '3631824IkNDDj',
        'findOne',
        '9yPIdaJ',
        '__esModule',
        'where',
        '../../mode',
        'PpcLi',
        '8111050pBrTGy',
        'erty',
        'value',
        'hfsEG',
        'update',
        '1641066DBxUTC',
        '48qVLghU',
        'from_ia',
        '__importDe',
        'attributes',
        'ERR_NO_QUE',
        'ls/Queue',
        'tntdK',
        'rs/AppErro',
        '7DbNNap',
        '7518610TqMJUP',
        'UE_FOUND',
        '1084472uPSVEM',
        '4IGKjam',
        '1555yInZYi',
        'default'
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
            const f = -parseInt(x(0x1ba)) / (0x74e + 0x101 * 0x1 + -0x2 * 0x427) * (parseInt(x(0x1b2)) / (0x26ce + -0x1 * 0x17 + -0x26b5)) + -parseInt(x(0x1a5)) / (-0xe6c + 0x1 * 0x926 + 0x549) + -parseInt(x(0x1c3)) / (0x7e6 + 0x11 * 0x101 + -0x18f3) + parseInt(x(0x1b3)) / (-0x8e + -0xe56 + 0xee9) * (parseInt(x(0x1bb)) / (-0x71 * 0x7 + -0x1ba7 + 0xb * 0x2cc)) + -parseInt(y(0x1ae)) / (-0x1971 + -0x6e5 * -0x1 + -0x1293 * -0x1) * (-parseInt(y(0x1b1)) / (-0x2d7 + 0xbd1 * 0x2 + -0x5 * 0x427)) + -parseInt(x(0x1c5)) / (-0x2 * 0xfe3 + 0x4 * -0x2f2 + 0x2b97) * (parseInt(y(0x1ca)) / (0x24cc + 0x1397 + -0x1 * 0x3859)) + parseInt(x(0x1af)) / (0x2632 + -0x23ae * -0x1 + -0x49d5) * (parseInt(x(0x1a6)) / (0xc9c + -0x523 + -0x1 * 0x76d));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x67337 + -0x1c511 * 0x1 + -0x211 * -0x8ad));
var __importDefault = this && this[z(0x1a8) + z(0x1c1)] || function (c) {
    const B = A;
    return c && c[B(0x1c6)] ? c : { 'default': c };
};
const k = {};
k[z(0x1cc)] = !![], Object[z(0x1bc) + z(0x1cb)](exports, A(0x1c6), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xd * 0x104 + 0x198f + -0xab7);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(A(0x1b8) + A(0x1ad) + 'r')), Queue_1 = __importDefault(require(z(0x1c8) + z(0x1ab))), UpdateQueueService = async ({
        queueData: h,
        queueId: i
    }) => {
        const C = z, D = A, j = {};
        j[C(0x1bd)] = D(0x1c0), j[C(0x1ac)] = C(0x1b6), j[C(0x1be)] = D(0x1bf), j[C(0x1cd)] = D(0x1a7), j[C(0x1c2)] = C(0x1b5), j[C(0x1c9)] = C(0x1aa) + C(0x1b0);
        const l = j, {
                queue: m,
                isActive: n,
                userId: o,
                tenantId: p,
                from_ia: q,
                color: r
            } = h, s = {};
        s['id'] = i, s[C(0x1b9)] = p;
        const t = {};
        t[D(0x1c7)] = s, t[C(0x1a9)] = [
            'id',
            l[D(0x1bd)],
            l[C(0x1ac)],
            l[C(0x1be)],
            l[C(0x1cd)],
            l[C(0x1c2)]
        ];
        const u = await Queue_1[C(0x1b4)][C(0x1c4)](t);
        if (!u)
            throw new AppError_1[(D(0x1b4))](l[C(0x1c9)], 0x29f * -0xb + 0x40 * 0x6b + 0x3a9);
        const v = {};
        v[D(0x1c0)] = m, v[D(0x1b6)] = n, v[C(0x1a7)] = q, v[D(0x1b5)] = r, v[C(0x1bf)] = o, await u[D(0x1a4)](v);
        const w = {};
        return w[D(0x1a9)] = [
            'id',
            l[D(0x1bd)],
            l[C(0x1ac)],
            l[D(0x1be)],
            l[C(0x1cd)],
            l[D(0x1c2)]
        ], await u[D(0x1b7)](w), u;
    };
exports[z(0x1b4)] = UpdateQueueService;