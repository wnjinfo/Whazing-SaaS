'use strict';
function a() {
    const y = [
        'erty',
        '87726daBuDh',
        'value',
        'ERR_NO_TEN',
        'where',
        '118kyauQr',
        '343CrsqTn',
        'fault',
        '36YhsUdx',
        'businessHo',
        'rYgTX',
        'ooPSm',
        'ls/Tenant',
        '990275ljdOAA',
        '__importDe',
        '../../mode',
        'rs/AppErro',
        '885jVAWOR',
        'default',
        '__esModule',
        '8220RLorpw',
        '1776460YMitGA',
        'reload',
        'findOne',
        'defineProp',
        '5613831CMhNRQ',
        '3385sVQqKd',
        '393378xDNXzW',
        '../../erro',
        'ANT_FOUND',
        'GoJnP',
        'update',
        'messageBus',
        'attributes',
        'inessHours',
        '16PIUsxA',
        'urs'
    ];
    a = function () {
        return y;
    };
    return a();
}
const t = b, u = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x110a + 0x3c7 + 0xec2 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x18d)) / (-0x6fc * 0x1 + -0x8b * -0x32 + 0xd * -0x18d) + -parseInt(r(0x19c)) / (0x1aa + -0xff7 + -0x63 * -0x25) * (parseInt(r(0x183)) / (0x2 * -0x33 + -0x6 * 0x389 + 0x159f)) + parseInt(r(0x186)) / (0x352 + 0x1426 + 0xbba * -0x2) * (parseInt(s(0x18c)) / (0x22d8 + 0x9b2 + 0x83 * -0x57)) + parseInt(s(0x198)) / (0x291 + -0x24b * 0x11 + 0x350 * 0xb) * (parseInt(r(0x19d)) / (0x1ecd * -0x1 + -0x833 + 0x61 * 0x67)) + -parseInt(r(0x195)) / (0x2616 + -0x584 + -0x208a) * (parseInt(s(0x18b)) / (0x1735 + 0x1ce5 * -0x1 + 0x1 * 0x5b9)) + -parseInt(s(0x187)) / (-0xdf3 + 0x231b + 0x13e * -0x11) + -parseInt(r(0x17f)) / (-0xcf5 + -0x8 * -0x273 + -0x698 * 0x1) * (parseInt(r(0x19f)) / (0x1d72 * -0x1 + -0x2368 + 0x40e6));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xa57f9 * -0x2 + 0xdd2ce + -0x969 * -0x202));
var __importDefault = this && this[t(0x180) + t(0x19e)] || function (c) {
    const v = t;
    return c && c[v(0x185)] ? c : { 'default': c };
};
const k = {};
k[t(0x199)] = !![], Object[t(0x18a) + t(0x197)](exports, t(0x185), k);
const AppError_1 = __importDefault(require(t(0x18e) + t(0x182) + 'r')), Tenant_1 = __importDefault(require(t(0x181) + t(0x1a3))), UpdateMessageBusinessHoursService = async ({
        messageBusinessHours: h,
        tenantId: i
    }) => {
        const w = u, x = u, j = {};
        j[w(0x1a1)] = x(0x19a) + w(0x18f), j[w(0x1a2)] = x(0x1a0) + x(0x196), j[w(0x190)] = w(0x192) + x(0x194);
        const l = j, m = {};
        m['id'] = i;
        const n = {};
        n[w(0x19b)] = m;
        const o = await Tenant_1[x(0x184)][w(0x189)](n);
        if (!o)
            throw new AppError_1[(x(0x184))](l[w(0x1a1)], -0x1a35 * 0x1 + 0x1 * 0x1c62 + 0x3 * -0x33);
        const p = {};
        p[x(0x192) + w(0x194)] = h, await o[w(0x191)](p);
        const q = {};
        return q[x(0x193)] = [
            l[w(0x1a2)],
            l[w(0x190)]
        ], await o[w(0x188)](q), o;
    };
exports[u(0x184)] = UpdateMessageBusinessHoursService;