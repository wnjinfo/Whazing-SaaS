'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x9d)) / (-0x1 * 0x1483 + -0xfb4 + 0x2438) * (parseInt(s(0xa5)) / (0x2 * 0x83b + 0x23f9 * -0x1 + 0x1385)) + -parseInt(s(0xa9)) / (-0x1885 + 0x1a19 + -0x1 * 0x191) * (-parseInt(s(0x9b)) / (0x4ae + 0x5 * 0x67f + -0x2525)) + -parseInt(r(0xa0)) / (-0x241d + -0xd3 + 0x24f5) * (-parseInt(s(0xb7)) / (0x5 * -0x40c + 0x185f + 0xd * -0x51)) + parseInt(r(0xa2)) / (-0x2 * -0x29a + -0x1b46 + 0x1619) + -parseInt(r(0xab)) / (-0x1674 * 0x1 + 0xe * 0x17f + 0x2 * 0xc5) * (-parseInt(s(0xb0)) / (0x1 * 0x262a + -0xc5 + -0xc * 0x31d)) + parseInt(r(0xa1)) / (-0xf51 + -0x1 * 0x7b5 + -0x12 * -0x148) + -parseInt(s(0xb5)) / (-0x3a * 0x82 + -0x2 * 0x1269 + 0x4251 * 0x1) * (parseInt(s(0xb2)) / (-0x2 * 0x505 + 0x2 * -0x8ef + 0x1bf4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x73 * -0x4b3 + 0x7be60 + 0xf5b7));
var __importDefault = this && this[t(0xaf) + t(0xa7)] || function (c) {
    const v = u;
    return c && c[v(0xb4)] ? c : { 'default': c };
};
function a() {
    const y = [
        'erty',
        'ls/Tenant',
        '__importDe',
        '42993vxPdow',
        'ERR_NO_TEN',
        '6143052mEFCFa',
        'sAdyb',
        '__esModule',
        '33xEhxap',
        'aNbUQ',
        '6KilASR',
        'findOne',
        'where',
        '../../mode',
        'urs',
        'reload',
        'value',
        'businessHo',
        '../../erro',
        '9976ARqJbj',
        'ANT_FOUND',
        '129TeUAuF',
        'inessHours',
        'default',
        '4176365LbdDhn',
        '5032590SpQPRM',
        '1280405gzqcPj',
        'rs/AppErro',
        'defineProp',
        '1628MLPndv',
        'ugBLR',
        'fault',
        'attributes',
        '261SGCFZg',
        'update',
        '560eKVkUx',
        'messageBus'
    ];
    a = function () {
        return y;
    };
    return a();
}
const k = {};
k[t(0xbd)] = !![], Object[t(0xa4) + t(0xad)](exports, u(0xb4), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1bb * -0x13 + -0x24b9 + 0x4635);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(u(0xbf) + t(0xa3) + 'r')), Tenant_1 = __importDefault(require(u(0xba) + u(0xae))), UpdateBusinessHoursService = async ({
        businessHours: h,
        tenantId: i
    }) => {
        const w = t, x = u, j = {};
        j[w(0xb3)] = x(0xb1) + x(0x9c), j[w(0xa6)] = w(0xbe) + x(0xbb), j[w(0xb6)] = x(0xac) + w(0x9e);
        const l = j, m = {};
        m['id'] = i;
        const n = {};
        n[w(0xb9)] = m;
        const o = await Tenant_1[x(0x9f)][w(0xb8)](n);
        if (!o)
            throw new AppError_1[(x(0x9f))](l[x(0xb3)], 0x732 * -0x1 + 0x3 * 0x1a6 + 0x3d4);
        const p = {};
        p[x(0xbe) + w(0xbb)] = h, await o[x(0xaa)](p);
        const q = {};
        return q[w(0xa8)] = [
            l[w(0xa6)],
            l[x(0xb6)]
        ], await o[x(0xbc)](q), o;
    };
exports[u(0x9f)] = UpdateBusinessHoursService;