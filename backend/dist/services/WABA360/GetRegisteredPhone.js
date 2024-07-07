'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x1b2)) / (-0x2 * -0xf3a + 0x91d + -0x13c8 * 0x2) * (parseInt(m(0x1ab)) / (0x694 + -0x1b * -0xce + -0x713 * 0x4)) + parseInt(n(0x1c9)) / (0x6d4 * 0x3 + -0x1e07 + -0x1 * -0x98e) + parseInt(n(0x1bb)) / (-0x26dd + 0x13cd + 0x1314) * (-parseInt(m(0x1ac)) / (-0x12bf + -0x1c6e + 0x2f32)) + parseInt(m(0x1b6)) / (-0x49 * 0x2f + -0x2b7 * -0x5 + -0x26) * (-parseInt(m(0x1b5)) / (-0x35 * -0x3d + -0x1624 + 0x98a)) + parseInt(n(0x1c7)) / (-0x227f + -0x19 * 0x14b + 0x56 * 0xc7) * (parseInt(n(0x1a2)) / (-0x5bd * 0x3 + 0x1493 * 0x1 + -0x25 * 0x17)) + -parseInt(n(0x1c3)) / (-0xea6 + -0x25d1 + 0x3481) * (-parseInt(n(0x1a3)) / (0x1af2 + 0xae9 + 0x16 * -0x1b8)) + parseInt(n(0x19f)) / (-0x88 + -0x179b + 0x182f) * (-parseInt(m(0x1c0)) / (-0x544 + -0x1 * -0x3f7 + -0x15a * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4d2dc + -0x1840d7 + -0x226a01 * -0x1));
function a() {
    const t = [
        '1071lEicZR',
        '11QPkyOm',
        'T_PHONE_NU',
        '360_NOT_GE',
        'value',
        'defineProp',
        'D360-API-K',
        'API_URL_36',
        'n/json',
        '54lbQToH',
        '144695mCDCRm',
        '/v1/config',
        '__importDe',
        's/phone_nu',
        'logger',
        '__esModule',
        '71398VioLjv',
        'env',
        'mber',
        '1175293BUsQxI',
        '66hSJlmO',
        'TERED:\x20',
        'error',
        'axios',
        'get',
        '108blCxOD',
        's/logger',
        'MBER_REGIS',
        'rs/AppErro',
        'url',
        '221taxkMf',
        'default',
        'method',
        '16555150TQOaWb',
        'data',
        '../../util',
        'uqhJJ',
        '30776JjfCmV',
        '../../erro',
        '387009lnURGd',
        'Content-Ty',
        'erty',
        'doscd',
        'applicatio',
        '395148gArioc',
        'fault',
        'headers'
    ];
    a = function () {
        return t;
    };
    return a();
}
var __importDefault = this && this[o(0x1ae) + o(0x1a0)] || function (c) {
    const q = p;
    return c && c[q(0x1b1)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x23ff * 0x1 + 0x1 * 0x239f + -0x45ff);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[p(0x1a6)] = !![], Object[p(0x1a7) + p(0x1cb)](exports, p(0x1b1), k);
const axios_1 = __importDefault(require(p(0x1b9))), AppError_1 = __importDefault(require(p(0x1c8) + p(0x1be) + 'r')), logger_1 = require(p(0x1c5) + o(0x1bc)), GetRegisteredPhone = async e => {
        const r = p, s = p, f = {};
        f[r(0x1c6)] = r(0x1ba), f[r(0x1cc)] = r(0x1cd) + r(0x1aa);
        const g = f, h = process[s(0x1b3)][s(0x1a9) + '0'] + (r(0x1ad) + s(0x1af) + s(0x1b4));
        try {
            const i = {};
            i[s(0x1c2)] = g[s(0x1c6)], i[s(0x1bf)] = h, i[r(0x1a1)] = {}, i[r(0x1a1)][s(0x1a8) + 'EY'] = e, i[r(0x1a1)][s(0x1ca) + 'pe'] = g[s(0x1cc)];
            const j = await (0x50d * 0x1 + -0xf7e * -0x1 + -0x148b, axios_1[s(0x1c1)])(i);
            return j[s(0x1c4)];
        } catch (l) {
            logger_1[r(0x1b0)][s(0x1b8)](l);
            throw new AppError_1[(r(0x1c1))](r(0x1a5) + s(0x1a4) + r(0x1bd) + r(0x1b7) + l);
        }
    };
exports[p(0x1c1)] = GetRegisteredPhone;