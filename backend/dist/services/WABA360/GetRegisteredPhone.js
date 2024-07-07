'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0xb9)) / (-0x81d + 0x89e + -0x80) + parseInt(n(0xca)) / (-0xe * -0x1ef + -0x457 + -0x16b9) + -parseInt(m(0xd3)) / (-0x1658 + 0xb * 0x254 + -0x77 * 0x7) * (parseInt(n(0xcb)) / (-0x4 * 0x8e5 + -0xe * -0xf8 + 0x1608)) + -parseInt(n(0xd1)) / (0x115 * 0x7 + -0x25d2 + 0xd * 0x254) + -parseInt(n(0xd0)) / (-0xa27 + 0x1 * -0x47 + 0xa74) * (parseInt(n(0xbe)) / (0x15 * -0x48 + 0x7 * -0x35 + 0x762)) + -parseInt(n(0xbb)) / (0x25d5 + -0x22ad * -0x1 + 0x243d * -0x2) * (-parseInt(n(0xdc)) / (0x1 * -0xbb9 + -0x9fc * -0x3 + -0x1232)) + parseInt(m(0xd8)) / (0x149e + -0x88d * 0x4 + 0xda0);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3bc * -0x31 + -0x4e8 * -0xbe + 0x8b07 * -0x2));
var __importDefault = this && this[o(0xb7) + o(0xe2)] || function (c) {
    const q = p;
    return c && c[q(0xcd)] ? c : { 'default': c };
};
const k = {};
k[p(0xce)] = !![], Object[p(0xc6) + o(0xc8)](exports, p(0xcd), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x22 * 0xb1 + -0x33a * 0xb + 0xcb3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const axios_1 = __importDefault(require(o(0xc4))), AppError_1 = __importDefault(require(o(0xc3) + p(0xd7) + 'r')), logger_1 = require(p(0xc9) + p(0xbd)), GetRegisteredPhone = async e => {
        const r = p, s = p, f = {};
        f[r(0xc5)] = s(0xcf), f[r(0xc7)] = r(0xdb) + r(0xd5);
        const g = f, h = process[r(0xc0)][r(0xd2) + '0'] + (s(0xd6) + r(0xc1) + r(0xc2));
        try {
            const i = {};
            i[r(0xd4)] = g[r(0xc5)], i[s(0xb8)] = h, i[s(0xbc)] = {}, i[s(0xbc)][r(0xe1) + 'EY'] = e, i[s(0xbc)][s(0xe0) + 'pe'] = g[r(0xc7)];
            const j = await (-0x132 + 0x51 + -0x3 * -0x4b, axios_1[r(0xda)])(i);
            return j[r(0xba)];
        } catch (l) {
            logger_1[r(0xd9)][s(0xdf)](l);
            throw new AppError_1[(r(0xda))](r(0xde) + s(0xdd) + s(0xbf) + s(0xcc) + l);
        }
    };
function a() {
    const t = [
        'fault',
        '__importDe',
        'url',
        '217464iFxmBK',
        'data',
        '54728NiaCaM',
        'headers',
        's/logger',
        '28HEfxYU',
        'MBER_REGIS',
        'env',
        's/phone_nu',
        'mber',
        '../../erro',
        'axios',
        'JFeMS',
        'defineProp',
        'rRxJt',
        'erty',
        '../../util',
        '130668wlJyvg',
        '4lSxjfZ',
        'TERED:\x20',
        '__esModule',
        'value',
        'get',
        '310314gXXDvb',
        '71220Dzzpoa',
        'API_URL_36',
        '197763dayzgn',
        'method',
        'n/json',
        '/v1/config',
        'rs/AppErro',
        '154010rmJbNj',
        'logger',
        'default',
        'applicatio',
        '144McrPQt',
        'T_PHONE_NU',
        '360_NOT_GE',
        'error',
        'Content-Ty',
        'D360-API-K'
    ];
    a = function () {
        return t;
    };
    return a();
}
exports[o(0xda)] = GetRegisteredPhone;