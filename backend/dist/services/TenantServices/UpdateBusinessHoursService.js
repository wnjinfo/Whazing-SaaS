'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0xca)) / (0x6a5 * -0x2 + -0x1981 + 0x26cc) + parseInt(r(0xba)) / (0xc88 + 0x229d + -0x2f23) * (parseInt(r(0xa8)) / (0xd2a + -0xb27 + -0x2 * 0x100)) + parseInt(s(0xb6)) / (-0x2088 + -0x122f + 0x5a3 * 0x9) + parseInt(r(0xbe)) / (-0x13b * -0x14 + 0xe6c + -0x2703) + -parseInt(r(0xc7)) / (0x2679 + -0x8d5 * 0x3 + 0x5a * -0x22) + parseInt(s(0xc3)) / (0xc * 0x125 + 0x9ba + -0x176f) * (-parseInt(s(0xb4)) / (0x1145 * 0x1 + -0x7c7 + -0x1 * 0x976)) + parseInt(r(0xae)) / (-0x11de + -0x31 * 0xca + 0x3891) * (-parseInt(s(0xbf)) / (0xa * 0x269 + 0x1476 + 0x1 * -0x2c86));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5 * 0x2008e + 0x52cbe + 0x1 * 0xb0a26));
var __importDefault = this && this[t(0xc8) + t(0xab)] || function (c) {
    const v = t;
    return c && c[v(0xb8)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x466 * -0x6 + -0x1772 * -0x1 + -0x312e * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[t(0xac)] = !![], Object[t(0xa9) + u(0xc4)](exports, t(0xb8), k);
const AppError_1 = __importDefault(require(u(0xc5) + t(0xbc) + 'r')), Tenant_1 = __importDefault(require(u(0xb9) + t(0xb3))), UpdateBusinessHoursService = async ({
        businessHours: h,
        tenantId: i
    }) => {
        const w = u, x = u, j = {};
        j[w(0xc0)] = w(0xad) + w(0xb2), j[w(0xaf)] = x(0xb0) + x(0xbb), j[x(0xc1)] = w(0xbd) + x(0xc2);
        const l = j, m = {};
        m['id'] = i;
        const n = {};
        n[w(0xb1)] = m;
        const o = await Tenant_1[x(0xaa)][w(0xc9)](n);
        if (!o)
            throw new AppError_1[(w(0xaa))](l[x(0xc0)], 0x1 * 0x2519 + 0x24e7 + -0x486c);
        const p = {};
        p[x(0xb0) + w(0xbb)] = h, await o[x(0xb7)](p);
        const q = {};
        return q[x(0xb5)] = [
            l[x(0xaf)],
            l[w(0xc1)]
        ], await o[x(0xc6)](q), o;
    };
exports[u(0xaa)] = UpdateBusinessHoursService;
function a() {
    const y = [
        'value',
        'ERR_NO_TEN',
        '8559rnFcdH',
        'NpokK',
        'businessHo',
        'where',
        'ANT_FOUND',
        'ls/Tenant',
        '64fbfZUI',
        'attributes',
        '1746948adMRvn',
        'update',
        '__esModule',
        '../../mode',
        '306rbUiVo',
        'urs',
        'rs/AppErro',
        'messageBus',
        '1759065WmPJwx',
        '3760ugiZpb',
        'UyPOc',
        'quNFq',
        'inessHours',
        '526722pksQwm',
        'erty',
        '../../erro',
        'reload',
        '1313874DxAhaU',
        '__importDe',
        'findOne',
        '377005TPJUNn',
        '8226DiNzml',
        'defineProp',
        'default',
        'fault'
    ];
    a = function () {
        return y;
    };
    return a();
}