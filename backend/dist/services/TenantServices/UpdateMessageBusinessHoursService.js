'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x121)) / (0x2037 + -0x1 * -0x1af + -0x1 * 0x21e5) * (-parseInt(r(0x128)) / (-0xc9b + 0x613 + 0xba * 0x9)) + parseInt(s(0x112)) / (-0x1 * 0x1c9a + -0x35 * 0x35 + 0x2796) * (parseInt(r(0x123)) / (0x2109 + -0x9a * -0x3f + -0x46eb)) + parseInt(s(0x116)) / (-0x47f + -0x175f + -0x1 * -0x1be3) + parseInt(s(0x124)) / (-0x1 * -0x12b7 + -0x4dc * -0x1 + -0x178d * 0x1) * (-parseInt(r(0x119)) / (-0x1264 + -0x6cc * -0x2 + 0x4d3)) + parseInt(r(0x12e)) / (-0x1538 + -0x20c9 + 0x3609) + -parseInt(r(0x114)) / (-0xacd + -0xb3c + -0x1612 * -0x1) + -parseInt(s(0x110)) / (0x7e4 + 0x1c9 * 0x3 + 0x17 * -0x93);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xea65d + 0x12d * -0x6bc + -0xf06a4 * -0x2));
function a() {
    const y = [
        '2120859IQWzUO',
        'oXLLV',
        '1581710sGSnBy',
        'messageBus',
        'urs',
        '49jgPvuU',
        '../../erro',
        'ERR_NO_TEN',
        'ls/Tenant',
        'where',
        'attributes',
        'value',
        'defineProp',
        '93723puOWHX',
        'ANT_FOUND',
        '76tSvLKF',
        '1110urgbcf',
        'findOne',
        '__importDe',
        'reload',
        '10olRKgk',
        'update',
        '__esModule',
        'Vikvk',
        'default',
        'MpZpZ',
        '3102648VJpFze',
        '../../mode',
        'erty',
        'rs/AppErro',
        'businessHo',
        '7808430rsaQap',
        'fault',
        '52968KiRIcd',
        'inessHours'
    ];
    a = function () {
        return y;
    };
    return a();
}
var __importDefault = this && this[t(0x126) + t(0x111)] || function (c) {
    const v = t;
    return c && c[v(0x12a)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1023 + -0x75c + -0x1 * 0x7b9);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[t(0x11f)] = !![], Object[u(0x120) + t(0x130)](exports, u(0x12a), k);
const AppError_1 = __importDefault(require(u(0x11a) + u(0x10e) + 'r')), Tenant_1 = __importDefault(require(t(0x12f) + u(0x11c))), UpdateMessageBusinessHoursService = async ({
        messageBusinessHours: h,
        tenantId: i
    }) => {
        const w = u, x = u, j = {};
        j[w(0x12b)] = w(0x11b) + x(0x122), j[w(0x12d)] = w(0x10f) + x(0x118), j[w(0x115)] = x(0x117) + x(0x113);
        const l = j, m = {};
        m['id'] = i;
        const n = {};
        n[w(0x11d)] = m;
        const o = await Tenant_1[x(0x12c)][w(0x125)](n);
        if (!o)
            throw new AppError_1[(w(0x12c))](l[x(0x12b)], -0x13ae + -0x1620 + 0x2b62);
        const p = {};
        p[x(0x117) + x(0x113)] = h, await o[w(0x129)](p);
        const q = {};
        return q[w(0x11e)] = [
            l[w(0x12d)],
            l[w(0x115)]
        ], await o[w(0x127)](q), o;
    };
exports[t(0x12c)] = UpdateMessageBusinessHoursService;