'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0xcc)) / (0x13fb + 0x1854 * 0x1 + -0x2c4e) + parseInt(o(0xc2)) / (0x50d * -0x6 + -0x9 * 0x2f9 + -0x3911 * -0x1) * (parseInt(n(0xa6)) / (0x882 + -0x3 * -0x1 + -0x882)) + -parseInt(n(0xb8)) / (-0x1d75 + 0x2531 * 0x1 + 0x68 * -0x13) * (-parseInt(o(0xc0)) / (0x1f11 + -0x61 * 0x52 + 0x6)) + -parseInt(o(0xa2)) / (-0x4f6 * -0x6 + 0x2342 + -0x4100) * (parseInt(o(0xb5)) / (0x254a + -0xfe7 * 0x1 + -0x155c)) + parseInt(n(0xa1)) / (0x1 * -0x1861 + 0x246a + -0xc01) * (-parseInt(o(0xb1)) / (0x32b + 0x2b6 + -0x5d8)) + -parseInt(n(0xae)) / (-0x218e + -0x2 * -0x743 + -0x989 * -0x2) + parseInt(o(0xb7)) / (0x11de * 0x1 + -0x8ae + 0x925 * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x74f * 0x29 + 0x1 * -0xa988 + 0x396ea));
function a() {
    const u = [
        'blocking',
        '9BelIzL',
        'default',
        'contacts',
        'url',
        '2471kuNeKU',
        'logger',
        '4314739grbOps',
        '1708JQlzgT',
        'Content-Ty',
        'headers',
        'fault',
        '__importDe',
        'AFQTb',
        's/logger',
        'data',
        '375EGhvDj',
        'error',
        '8LdLkyd',
        'rs/AppErro',
        '__esModule',
        'API_URL_36',
        '360_NOT_GE',
        'erty',
        '/v1/contac',
        'D360-API-K',
        '../../erro',
        'value',
        '169212PREDyL',
        'defineProp',
        'T_CONTACTS',
        '777912GugQZc',
        '402uwXzeJ',
        'method',
        'post',
        'wait',
        '118293xXCvZz',
        'FuDwW',
        'applicatio',
        'env',
        'axios',
        'force_chec',
        'n/json',
        'rMkYU',
        '1767650UvTtIb',
        '../../util'
    ];
    a = function () {
        return u;
    };
    return a();
}
var __importDefault = this && this[p(0xbc) + q(0xbb)] || function (c) {
    const r = q;
    return c && c[r(0xc4)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1cca + -0x20dc * 0x1 + -0x6 * -0xa61);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[p(0xcb)] = !![], Object[p(0xcd) + q(0xc7)](exports, q(0xc4), k);
const axios_1 = __importDefault(require(p(0xaa))), AppError_1 = __importDefault(require(q(0xca) + p(0xc3) + 'r')), logger_1 = require(q(0xaf) + q(0xbe)), CheckContact = async ({
        contacts: e,
        apiKey: f
    }) => {
        const s = q, t = p, g = {};
        g[s(0xbd)] = s(0xa4), g[s(0xa7)] = s(0xa5), g[s(0xad)] = t(0xa8) + s(0xac);
        const h = g, i = process[s(0xa9)][s(0xc5) + '0'] + (s(0xc8) + 'ts');
        try {
            const j = {};
            j[t(0xa3)] = h[s(0xbd)], j[t(0xb4)] = i, j[s(0xbf)] = {}, j[s(0xba)] = {}, j[s(0xbf)][s(0xb0)] = h[s(0xa7)], j[s(0xbf)][t(0xab) + 'k'] = !![], j[s(0xbf)][s(0xb3)] = e, j[s(0xba)][t(0xc9) + 'EY'] = f, j[s(0xba)][t(0xb9) + 'pe'] = h[s(0xad)];
            const l = await (0x2279 + 0x88b + -0x2b04, axios_1[s(0xb2)])(j);
            return l[t(0xbf)];
        } catch (m) {
            logger_1[s(0xb6)][s(0xc1)](m);
            throw new AppError_1[(s(0xb2))](t(0xc6) + s(0xa0) + ':\x20' + m);
        }
    };
exports[q(0xb2)] = CheckContact;