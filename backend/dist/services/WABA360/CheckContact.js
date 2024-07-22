'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0xa4)) / (0x17 * -0x10d + 0x16c6 + -0x2 * -0xb3) + parseInt(o(0xa7)) / (0x1 * 0x233b + 0x5d6 * 0x2 + -0x2ee5) + parseInt(n(0xc9)) / (-0xd * 0x11b + 0x17b * -0x1 + 0xfdd) + parseInt(o(0xc5)) / (-0x1 * 0x887 + -0x1 * 0x46c + -0x1 * -0xcf7) * (parseInt(o(0xb6)) / (-0xccb * -0x1 + 0x11d1 * -0x2 + 0x16dc)) + -parseInt(o(0xb8)) / (0x70a + 0x1cff + -0x15 * 0x1b7) * (-parseInt(o(0xc7)) / (-0x1 * 0xe33 + 0x2 * -0x12b8 + -0x2 * -0x19d5)) + parseInt(o(0xc6)) / (0xfb + -0x1633 + 0x220 * 0xa) + parseInt(o(0xa6)) / (0x24c0 + -0x15fc + -0xebb) * (-parseInt(o(0xc0)) / (-0x2a0 + 0x12df + 0x1035 * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x97124 + -0x28822 + 0x10f387 * 0x1));
var __importDefault = this && this[p(0xab) + q(0xb4)] || function (c) {
    const r = q;
    return c && c[r(0xbd)] ? c : { 'default': c };
};
const k = {};
k[p(0xa1)] = !![], Object[q(0x9f) + q(0xbc)](exports, p(0xbd), k);
const axios_1 = __importDefault(require(p(0xba))), AppError_1 = __importDefault(require(p(0xc3) + q(0xb2) + 'r')), logger_1 = require(q(0xb5) + q(0xad)), CheckContact = async ({
        contacts: e,
        apiKey: f
    }) => {
        const s = q, t = p, g = {};
        g[s(0xb1)] = s(0xbf), g[t(0xbb)] = t(0xb3), g[s(0xc2)] = t(0x9e) + s(0xaa);
        const h = g, i = process[s(0xa5)][t(0xb0) + '0'] + (t(0xbe) + 'ts');
        try {
            const j = {};
            j[s(0xb7)] = h[s(0xb1)], j[s(0xa3)] = i, j[t(0xaf)] = {}, j[s(0xc8)] = {}, j[t(0xaf)][t(0xa9)] = h[s(0xbb)], j[t(0xaf)][t(0xb9) + 'k'] = !![], j[t(0xaf)][t(0xa0)] = e, j[s(0xc8)][t(0xa2) + 'EY'] = f, j[s(0xc8)][s(0xc1) + 'pe'] = h[t(0xc2)];
            const l = await (-0x1999 * -0x1 + -0x1ffe + -0x665 * -0x1, axios_1[t(0xae)])(j);
            return l[s(0xaf)];
        } catch (m) {
            logger_1[s(0xa8)][t(0xca)](m);
            throw new AppError_1[(s(0xae))](s(0xc4) + t(0xac) + ':\x20' + m);
        }
    };
exports[p(0xae)] = CheckContact;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x250e + -0x31 * 0xc8 + 0x1d8);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const u = [
        'fault',
        '../../util',
        '5fTWUeL',
        'method',
        '12810hOtXSA',
        'force_chec',
        'axios',
        'IsihC',
        'erty',
        '__esModule',
        '/v1/contac',
        'post',
        '10zFGOCK',
        'Content-Ty',
        'Jrkye',
        '../../erro',
        '360_NOT_GE',
        '838652CGhnzD',
        '1348376iMGcYB',
        '413BdiRIY',
        'headers',
        '885153otXQhJ',
        'error',
        'applicatio',
        'defineProp',
        'contacts',
        'value',
        'D360-API-K',
        'url',
        '405555NRoODD',
        'env',
        '6410565LbwCRe',
        '1289646DNIAHw',
        'logger',
        'blocking',
        'n/json',
        '__importDe',
        'T_CONTACTS',
        's/logger',
        'default',
        'data',
        'API_URL_36',
        'UeitA',
        'rs/AppErro',
        'wait'
    ];
    a = function () {
        return u;
    };
    return a();
}