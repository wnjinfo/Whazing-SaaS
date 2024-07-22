'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0xee)) / (-0x1 * -0x1652 + -0x1928 + 0x2d7) + parseInt(m(0xc4)) / (0xef7 + 0x4 * 0x939 + -0x1 * 0x33d9) * (parseInt(n(0xde)) / (0xe81 * 0x1 + -0x1f * 0x19 + -0x24b * 0x5)) + -parseInt(m(0xcc)) / (0x1439 + -0x3 * 0x167 + -0x20 * 0x80) + -parseInt(m(0xce)) / (0x4 * -0x602 + 0x1 * -0x421 + 0x1c2e * 0x1) * (-parseInt(n(0xdc)) / (0x1d9f * -0x1 + 0x6e * -0x16 + 0x2719)) + -parseInt(n(0xca)) / (-0x1 * -0x11d2 + -0x140e + 0x243) + -parseInt(n(0xe6)) / (-0x28 * -0x3b + 0x1217 + -0x1b47) * (-parseInt(n(0xe0)) / (0x3a * 0x3 + 0xcd + 0x172 * -0x1)) + -parseInt(m(0xd0)) / (-0xd45 + 0x426 + 0x929);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1b2187 + 0x199eaf + 0xff877));
function a() {
    const t = [
        '../../erro',
        'mber',
        'defineProp',
        'n/json',
        'rs/AppErro',
        '7152craNpV',
        'applicatio',
        'method',
        'Content-Ty',
        'error',
        'D360-API-K',
        'get',
        's/logger',
        '963486aMNQrr',
        '__esModule',
        '8gnLuBz',
        'T_PHONE_NU',
        'logger',
        'default',
        'API_URL_36',
        'IGXJo',
        '11530330LtsPFz',
        'axios',
        '2352096uVYZQE',
        'TERED:\x20',
        '10JLKZRw',
        'data',
        '3897090qrMZIg',
        's/phone_nu',
        'MBER_REGIS',
        '360_NOT_GE',
        'value',
        '/v1/config',
        'DKkaS',
        'fault',
        'env',
        'headers',
        '../../util',
        'erty',
        '2162262EKares',
        'url',
        '1400802EsOLap',
        '__importDe',
        '207PuLMib'
    ];
    a = function () {
        return t;
    };
    return a();
}
var __importDefault = this && this[o(0xdf) + o(0xd7)] || function (c) {
    const q = o;
    return c && c[q(0xef)] ? c : { 'default': c };
};
const k = {};
k[p(0xd4)] = !![], Object[p(0xe3) + o(0xdb)](exports, o(0xef), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x1cd + -0x21a7 + 0x209e);
        let h = e[f];
        return h;
    }, b(c, d);
}
const axios_1 = __importDefault(require(o(0xcb))), AppError_1 = __importDefault(require(o(0xe1) + p(0xe5) + 'r')), logger_1 = require(p(0xda) + o(0xed)), GetRegisteredPhone = async e => {
        const r = p, s = o, f = {};
        f[r(0xd6)] = s(0xec), f[r(0xc9)] = r(0xe7) + r(0xe4);
        const g = f, h = process[r(0xd8)][r(0xc8) + '0'] + (r(0xd5) + r(0xd1) + r(0xe2));
        try {
            const i = {};
            i[r(0xe8)] = g[r(0xd6)], i[s(0xdd)] = h, i[s(0xd9)] = {}, i[s(0xd9)][s(0xeb) + 'EY'] = e, i[s(0xd9)][r(0xe9) + 'pe'] = g[s(0xc9)];
            const j = await (-0xdd7 * -0x1 + -0x1 * 0x20c5 + 0x12ee, axios_1[r(0xc7)])(i);
            return j[r(0xcf)];
        } catch (l) {
            logger_1[r(0xc6)][r(0xea)](l);
            throw new AppError_1[(r(0xc7))](r(0xd3) + s(0xc5) + s(0xd2) + r(0xcd) + l);
        }
    };
exports[o(0xc7)] = GetRegisteredPhone;