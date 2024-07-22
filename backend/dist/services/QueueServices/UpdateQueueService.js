'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x963 + -0x206d + 0x2ad1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0x109)) / (0x3ad * -0x7 + 0x2178 + -0x7bc) + parseInt(x(0x10f)) / (-0x7 * -0x283 + 0x1f * -0x97 + 0xb6) + parseInt(x(0x124)) / (0x13a4 * 0x1 + 0x262c + -0x39cd) * (-parseInt(y(0x11c)) / (0x25f8 + -0x28 * -0x5 + -0x26bc)) + parseInt(x(0x107)) / (0x39a + 0x1 * 0x1223 + -0x15b8) + -parseInt(y(0x10d)) / (-0x223 * 0x4 + -0x256c * 0x1 + 0xe * 0x349) + parseInt(x(0x115)) / (0x6da * -0x1 + -0x897 + -0x318 * -0x5) + -parseInt(y(0x10b)) / (-0x1fe7 + -0x1e01 + 0x10 * 0x3df) * (parseInt(y(0x119)) / (-0x57a + -0xf7a + -0x255 * -0x9));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x9 * -0x31f7 + 0xb7 * -0x2a1 + -0x8c5 * -0xb4));
var __importDefault = this && this[z(0x111) + z(0x11f)] || function (c) {
    const B = A;
    return c && c[B(0x104)] ? c : { 'default': c };
};
const k = {};
k[A(0x112)] = !![], Object[z(0x11a) + z(0x105)](exports, z(0x104), k);
function a() {
    const E = [
        '61624RwpPqr',
        'ls/Queue',
        '706200iCOlFc',
        'default',
        '356500EMIVYo',
        'rs/AppErro',
        '__importDe',
        'value',
        'findOne',
        'UE_FOUND',
        '2175166Mifvwo',
        'sPEHy',
        'userId',
        'tenantId',
        '468ijMtVb',
        'defineProp',
        '../../erro',
        '172ptjuBN',
        'update',
        'nDZbd',
        'fault',
        'obMfc',
        'from_ia',
        'HBapU',
        'aGxoV',
        '6948UoCIym',
        'isActive',
        'where',
        'reload',
        'GzmEP',
        'color',
        'attributes',
        '__esModule',
        'erty',
        '../../mode',
        '1296845dephnY',
        'ERR_NO_QUE',
        '35309VAOKFW',
        'queue'
    ];
    a = function () {
        return E;
    };
    return a();
}
const AppError_1 = __importDefault(require(z(0x11b) + A(0x110) + 'r')), Queue_1 = __importDefault(require(z(0x106) + z(0x10c))), UpdateQueueService = async ({
        queueData: h,
        queueId: i
    }) => {
        const C = z, D = z, j = {};
        j[C(0x11e)] = C(0x10a), j[C(0x120)] = D(0x125), j[C(0x122)] = C(0x117), j[D(0x116)] = D(0x121), j[C(0x101)] = D(0x102), j[D(0x123)] = D(0x108) + D(0x114);
        const l = j, {
                queue: m,
                isActive: n,
                userId: o,
                tenantId: p,
                from_ia: q,
                color: r
            } = h, s = {};
        s['id'] = i, s[C(0x118)] = p;
        const t = {};
        t[D(0x126)] = s, t[C(0x103)] = [
            'id',
            l[C(0x11e)],
            l[C(0x120)],
            l[C(0x122)],
            l[C(0x116)],
            l[C(0x101)]
        ];
        const u = await Queue_1[D(0x10e)][D(0x113)](t);
        if (!u)
            throw new AppError_1[(C(0x10e))](l[C(0x123)], 0x2530 + 0x1e3d * 0x1 + -0x751 * 0x9);
        const v = {};
        v[C(0x10a)] = m, v[D(0x125)] = n, v[D(0x121)] = q, v[D(0x102)] = r, v[D(0x117)] = o, await u[C(0x11d)](v);
        const w = {};
        return w[C(0x103)] = [
            'id',
            l[C(0x11e)],
            l[C(0x120)],
            l[D(0x122)],
            l[C(0x116)],
            l[C(0x101)]
        ], await u[D(0x127)](w), u;
    };
exports[A(0x10e)] = UpdateQueueService;