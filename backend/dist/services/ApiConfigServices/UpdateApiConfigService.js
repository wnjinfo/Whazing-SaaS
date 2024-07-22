'use strict';
const z = b, A = b;
function a() {
    const E = [
        'name',
        'isActive',
        'OUND',
        '1139369QtpZBK',
        '5296WDTkZE',
        'rs/AppErro',
        '__esModule',
        '126040XyZsiR',
        'erty',
        '17883MqIxLQ',
        'urlMessage',
        'reload',
        'defineProp',
        '1BAYRXg',
        '1490525IqmnVS',
        'tenantId',
        '__importDe',
        '108RZpuUT',
        '../../erro',
        '../../mode',
        'authToken',
        '96YwMhRY',
        '2149scokFL',
        'where',
        'urlService',
        'update',
        'default',
        '1525050yUturQ',
        'NFIG_NOT_F',
        'jebwP',
        'userId',
        'fault',
        'ERR_API_CO',
        'findOne',
        'sessionId',
        '12iLwILU',
        'ls/ApiConf',
        'value',
        'Status',
        '82082jTFmZy'
    ];
    a = function () {
        return E;
    };
    return a();
}
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0xea)) / (0xb3 * -0x5 + -0x8dd * -0x3 + -0x101 * 0x17) * (parseInt(y(0xdc)) / (0xe + -0x1b5a + 0xe9 * 0x1e)) + -parseInt(y(0xe6)) / (0x136a + -0x193a * -0x1 + -0x2ca1) * (-parseInt(x(0xca)) / (-0x259 + -0x1 * -0x1265 + -0x1008)) + parseInt(y(0xeb)) / (-0x3 * -0x996 + -0x1b8e + -0x12f) + -parseInt(y(0xd0)) / (0x8a2 * 0x1 + -0x1 * 0x1f90 + -0x71 * -0x34) + parseInt(x(0xcb)) / (-0x1 * 0x1e3b + 0x926 + -0xe * -0x182) * (parseInt(y(0xe1)) / (0x1e1d + 0x1 * 0x371 + 0x4ca * -0x7)) + -parseInt(x(0xc6)) / (-0x4 * -0x5d3 + 0x1b * 0x51 + -0x1fce) * (parseInt(x(0xe4)) / (0x19 * 0xdd + -0x24ac + 0xf21)) + -parseInt(x(0xe0)) / (-0x270e * -0x1 + 0x1224 + -0x3927) * (parseInt(y(0xd8)) / (-0xedc + -0x145 + -0x65 * -0x29));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xe52 * -0x43 + 0xcb03 * 0x6 + 0x1ae9e));
var __importDefault = this && this[z(0xc5) + A(0xd4)] || function (c) {
    const B = z;
    return c && c[B(0xe3)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1a6 * -0x1 + 0x119 * -0x1 + -0xb4 * -0x5);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[A(0xda)] = !![], Object[z(0xe9) + z(0xe5)](exports, A(0xe3), k);
const AppError_1 = __importDefault(require(A(0xc7) + z(0xe2) + 'r')), ApiConfig_1 = __importDefault(require(z(0xc8) + z(0xd9) + 'ig')), UpdateApiConfigService = async ({
        apiData: g,
        apiId: h,
        tenantId: i
    }) => {
        const C = z, D = z, j = {};
        j[C(0xd2)] = D(0xd5) + D(0xd1) + C(0xdf);
        const l = j, m = {};
        m['id'] = h, m[D(0xec)] = i;
        const n = {};
        n[D(0xcc)] = m;
        const o = await ApiConfig_1[C(0xcf)][C(0xd6)](n);
        if (!o)
            throw new AppError_1[(C(0xcf))](l[D(0xd2)], 0x1 * -0x19c4 + -0x11 * -0x20f + -0x28d * 0x3);
        const {
                name: p,
                sessionId: q,
                urlServiceStatus: r,
                urlMessageStatus: s,
                userId: t,
                authToken: u,
                isActive: v
            } = g, w = {};
        return w[D(0xdd)] = p, w[D(0xd7)] = q, w[C(0xcd) + D(0xdb)] = r, w[C(0xe7) + C(0xdb)] = s, w[D(0xd3)] = t, w[C(0xc9)] = u, w[D(0xde)] = v, await o[C(0xce)](w), await o[C(0xe8)](), o;
    };
exports[z(0xcf)] = UpdateApiConfigService;