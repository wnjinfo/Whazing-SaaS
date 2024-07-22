'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x16d)) / (-0x1 * -0x1fca + -0x1544 + -0xa85) * (parseInt(m(0x162)) / (-0xade * -0x1 + 0x31 * -0xa1 + 0x13f5)) + -parseInt(m(0x160)) / (-0x4a5 + 0x660 + -0xa * 0x2c) + -parseInt(n(0x166)) / (0x32d * -0x1 + -0x3 * 0x369 + -0xd6c * -0x1) * (-parseInt(m(0x163)) / (0x125a + 0x5 * 0x1c1 + 0x2 * -0xd8d)) + -parseInt(m(0x177)) / (0x5f * -0x17 + 0x76e * 0x3 + 0x5f * -0x25) + parseInt(n(0x171)) / (0x13b8 + -0x847 + -0xb6a) + -parseInt(m(0x169)) / (-0xfb0 * 0x2 + 0x392 + -0xe * -0x1fd) + parseInt(n(0x170)) / (0x131e + -0xdd * -0xe + 0x4f * -0x65);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1189c7 + 0x48d47 + 0x18acb8));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x16c9 + -0x101 * -0x17 + 0x40d * -0xb);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0x15b) + p(0x155)] || function (c) {
    const q = p;
    return c && c[q(0x16b)] ? c : { 'default': c };
};
function a() {
    const t = [
        '11007909NWyoKD',
        '3329382NYnWxp',
        'data',
        'default',
        'gs/busines',
        '360_NOT_SE',
        'error',
        '2690748EgXZVX',
        'value',
        '../../erro',
        'applicatio',
        'env',
        'Content-Ty',
        's/logger',
        'fault',
        'erty',
        'defineProp',
        'T_BUSINESS',
        'method',
        'logger',
        '__importDe',
        'axios',
        'url',
        'BiTDQ',
        '/v1/settin',
        '1004466TQzOjE',
        'qwmFd',
        '229422NfRiMo',
        '1940xdLHkF',
        's/profile',
        'headers',
        '15784lyVDir',
        'D360-API-K',
        'rs/AppErro',
        '2431640LsOtOY',
        '../../util',
        '__esModule',
        'post',
        '12gHtHYc',
        'n/json',
        'API_URL_36'
    ];
    a = function () {
        return t;
    };
    return a();
}
const k = {};
k[o(0x178)] = !![], Object[o(0x157) + o(0x156)](exports, p(0x16b), k);
const axios_1 = __importDefault(require(o(0x15c))), AppError_1 = __importDefault(require(p(0x179) + o(0x168) + 'r')), logger_1 = require(o(0x16a) + p(0x154)), SetBusinessProfile = async ({
        data: e,
        apiKey: f
    }) => {
        const r = p, s = p, g = {};
        g[r(0x161)] = r(0x16c), g[r(0x15e)] = r(0x151) + r(0x16e);
        const h = g, i = process[s(0x152)][s(0x16f) + '0'] + (s(0x15f) + r(0x174) + r(0x164));
        try {
            const j = {};
            return j[s(0x159)] = h[r(0x161)], j[s(0x15d)] = i, j[r(0x172)] = e, j[r(0x165)] = {}, j[r(0x165)][s(0x167) + 'EY'] = f, j[r(0x165)][r(0x153) + 'pe'] = h[s(0x15e)], await (0xa42 * -0x1 + 0xf89 + -0x547, axios_1[s(0x173)])(j), !![];
        } catch (l) {
            logger_1[r(0x15a)][s(0x176)](l);
            throw new AppError_1[(s(0x173))](s(0x175) + s(0x158) + ':\x20' + l);
        }
    };
exports[o(0x173)] = SetBusinessProfile;