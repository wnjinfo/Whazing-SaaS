'use strict';
const p = b, q = b;
function a() {
    const u = [
        'ls/ApiConf',
        '__esModule',
        'findOne',
        '75vXCcte',
        '7udvacy',
        '258282fkGGih',
        'erty',
        '3879080gSeRUY',
        'value',
        'defineProp',
        '1512150aAYRsa',
        '16586LZbQnL',
        'cFaFR',
        'default',
        'where',
        'ERR_API_CO',
        'NFIG_NOT_F',
        '1512740uEOCcU',
        'fault',
        'OUND',
        '9144040baFIkn',
        '__importDe',
        'tenantId',
        '302850yrKEhl',
        'destroy',
        '../../mode',
        '../../erro',
        'rs/AppErro'
    ];
    a = function () {
        return u;
    };
    return a();
}
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x129)) / (0x98e * -0x1 + 0x1f * -0x123 + -0x3d * -0xbc) * (parseInt(n(0x115)) / (-0x6cc + 0x1165 + 0x1 * -0xa97)) + parseInt(o(0x12b)) / (0x1177 + -0x1362 * 0x2 + 0xaa8 * 0x2) + parseInt(n(0x12d)) / (-0x1385 + 0x694 * -0x1 + 0x1a1d) + parseInt(n(0x11b)) / (-0x125e + -0x11 * 0xb0 + 0x1e13) + -parseInt(o(0x114)) / (-0x905 * -0x1 + -0x19 * -0x13a + -0xb * 0x39b) + -parseInt(o(0x12a)) / (-0x51 * -0xd + 0x1f * -0xb1 + 0x1159) * (parseInt(n(0x11e)) / (-0x1b2f * 0x1 + -0x23e4 + -0x167 * -0x2d)) + parseInt(n(0x121)) / (-0xa8f * -0x1 + -0xc5 * -0x2b + -0x2b9d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x604ee + -0x1e9d * -0x78 + -0x11d55 * -0x1));
var __importDefault = this && this[p(0x11f) + p(0x11c)] || function (c) {
    const r = q;
    return c && c[r(0x127)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x22f + 0x728 + -0x3e7);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[q(0x112)] = !![], Object[p(0x113) + q(0x12c)](exports, q(0x127), k);
const AppError_1 = __importDefault(require(q(0x124) + p(0x125) + 'r')), ApiConfig_1 = __importDefault(require(p(0x123) + p(0x126) + 'ig')), DeleteApiConfigService = async ({
        apiId: f,
        tenantId: g
    }) => {
        const s = p, t = p, h = {};
        h[s(0x116)] = s(0x119) + t(0x11a) + s(0x11d);
        const i = h, j = {};
        j['id'] = f, j[s(0x120)] = g;
        const l = {};
        l[s(0x118)] = j;
        const m = await ApiConfig_1[t(0x117)][t(0x128)](l);
        if (!m)
            throw new AppError_1[(s(0x117))](i[s(0x116)], 0x44 * 0x49 + 0x67f * 0x4 + 0x4 * -0xaf3);
        await m[s(0x122)]();
    };
exports[q(0x117)] = DeleteApiConfigService;