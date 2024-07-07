'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0xb9)) / (0x5 * 0x43f + -0x1841 * -0x1 + -0x2d7b) * (parseInt(n(0xc2)) / (0xd4 * -0x24 + 0x1aa8 + 0x32a)) + -parseInt(o(0xac)) / (-0x1 * -0x23dd + -0x73d + -0x1c9d) * (-parseInt(o(0xc7)) / (0x24fa + -0x21ce + -0x4 * 0xca)) + -parseInt(o(0xb7)) / (0x6fd * -0x3 + -0xa57 + 0x1f53) + -parseInt(o(0xb3)) / (-0x67 * 0x47 + 0x10cc + -0x1 * -0xbcb) * (parseInt(o(0xa5)) / (0x1 * 0x19b7 + 0x7cd + 0x1 * -0x217d)) + -parseInt(n(0xcc)) / (0x919 + 0x501 * 0x2 + -0x101 * 0x13) + -parseInt(n(0xbc)) / (0x1 * 0x23d2 + 0x771 + -0x159d * 0x2) + parseInt(n(0xaa)) / (-0xdff + 0x5 * 0x7cf + -0x1902);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0xf50d6 + -0x10 * 0x8a5b + 0x212251));
function a() {
    const u = [
        '__esModule',
        'data',
        '583660UulYwc',
        'blocking',
        '73385Odgqdk',
        'default',
        's/logger',
        '6424092tRBoFY',
        'contacts',
        'env',
        'axios',
        'url',
        'force_chec',
        '8nlqhkk',
        '/v1/contac',
        'wait',
        'DYCPm',
        'value',
        '428TedDOx',
        'BSRVN',
        'T_CONTACTS',
        'D360-API-K',
        '../../util',
        '8460248HChtYF',
        'headers',
        '../../erro',
        'logger',
        'applicatio',
        '360_NOT_GE',
        '147385apIEGg',
        '__importDe',
        'error',
        'JNhrP',
        'Content-Ty',
        '28141180dfJRan',
        'defineProp',
        '957mCGnSt',
        'erty',
        'fault',
        'rs/AppErro',
        'API_URL_36',
        'post',
        'method',
        '186mGgfBv',
        'n/json'
    ];
    a = function () {
        return u;
    };
    return a();
}
var __importDefault = this && this[p(0xa6) + q(0xae)] || function (c) {
    const r = q;
    return c && c[r(0xb5)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1dbf + -0x1 * 0x1c43 + -0xd7);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[p(0xc6)] = !![], Object[q(0xab) + q(0xad)](exports, q(0xb5), k);
const axios_1 = __importDefault(require(p(0xbf))), AppError_1 = __importDefault(require(q(0xce) + p(0xaf) + 'r')), logger_1 = require(p(0xcb) + q(0xbb)), CheckContact = async ({
        contacts: e,
        apiKey: f
    }) => {
        const s = p, t = p, g = {};
        g[s(0xc8)] = s(0xb1), g[s(0xc5)] = t(0xc4), g[t(0xa8)] = s(0xd0) + t(0xb4);
        const h = g, i = process[t(0xbe)][t(0xb0) + '0'] + (s(0xc3) + 'ts');
        try {
            const j = {};
            j[t(0xb2)] = h[s(0xc8)], j[s(0xc0)] = i, j[t(0xb6)] = {}, j[t(0xcd)] = {}, j[t(0xb6)][t(0xb8)] = h[s(0xc5)], j[t(0xb6)][t(0xc1) + 'k'] = !![], j[t(0xb6)][t(0xbd)] = e, j[t(0xcd)][t(0xca) + 'EY'] = f, j[t(0xcd)][s(0xa9) + 'pe'] = h[s(0xa8)];
            const l = await (0x8cb * 0x1 + 0x5e9 + -0xeb4, axios_1[t(0xba)])(j);
            return l[s(0xb6)];
        } catch (m) {
            logger_1[t(0xcf)][t(0xa7)](m);
            throw new AppError_1[(t(0xba))](t(0xd1) + t(0xc9) + ':\x20' + m);
        }
    };
exports[q(0xba)] = CheckContact;