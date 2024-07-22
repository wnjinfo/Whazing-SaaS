'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0xe5)) / (0x15de + -0x204c + 0xa6f) + parseInt(p(0xe9)) / (-0x1273 + -0x2fc + 0xb * 0x1f3) * (parseInt(p(0xf6)) / (0x168d + 0x1 * 0x1052 + -0x26dc)) + parseInt(o(0xe1)) / (-0x1863 + -0x5ad * -0x5 + 0x1fd * -0x2) + -parseInt(o(0xda)) / (0x1 * -0x191d + -0x49 * -0x29 + -0xd71 * -0x1) + -parseInt(p(0xde)) / (0x19c5 + 0x16f3 + -0x30b2) + parseInt(p(0xfb)) / (-0x1bc9 * 0x1 + -0x1426 + 0x2ff6) * (parseInt(o(0xfe)) / (0x2052 + 0x1 * -0x2147 + 0xfd)) + -parseInt(p(0xf9)) / (-0x2fb + -0x1af2 + 0x1df6) * (parseInt(o(0x100)) / (0xe39 * 0x1 + 0x13 * -0x63 + -0x6d6));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1896e6 + 0xede0f + -0x1a6cad));
function a() {
    const v = [
        'data',
        'D360-API-K',
        'value',
        '__importDe',
        '../../erro',
        'error',
        'headers',
        'url',
        'qaUDR',
        'axios',
        '201XKGhft',
        'form-data',
        'post',
        '9rOhGCK',
        '360_NOT_SE',
        '1770503zXweHs',
        'method',
        's/logger',
        '32JJudZv',
        'env',
        '28096820RJtNPQ',
        'Content-Ty',
        'rs/AppErro',
        'erty',
        'logger',
        '3362485uNbZaK',
        'default',
        'T_PHOTO:\x20',
        'gs/profile',
        '3835152IgQkPS',
        'API_URL_36',
        '../../util',
        '5970592ZrGsvj',
        '/v1/settin',
        '/photo',
        'fault',
        '1427168TwPMiR',
        '__esModule',
        'iJzKv',
        'multipart/',
        '31162zimUTd',
        'file',
        'defineProp'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[q(0xef) + q(0xe4)] || function (c) {
    const s = q;
    return c && c[s(0xe6)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2f5 * 0x5 + -0x1d4d + 0x2cef * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[r(0xee)] = !![], Object[q(0xeb) + r(0x103)](exports, r(0xe6), k);
const axios_1 = __importDefault(require(q(0xf5))), AppError_1 = __importDefault(require(r(0xf0) + q(0x102) + 'r')), logger_1 = require(q(0xe0) + r(0xfd)), SetPhotoProfileInfo = async ({
        file: f,
        apiKey: g
    }) => {
        const t = r, u = r, h = {};
        h[t(0xe7)] = u(0xf8), h[t(0xf4)] = t(0xe8) + t(0xf7);
        const i = h, j = process[t(0xff)][u(0xdf) + '0'] + (u(0xe2) + t(0xdd) + t(0xe3));
        try {
            const l = {};
            l[t(0xea)] = f;
            const m = {};
            return m[t(0xfc)] = i[u(0xe7)], m[u(0xf3)] = j, m[u(0xec)] = l, m[t(0xf2)] = {}, m[t(0xf2)][u(0xed) + 'EY'] = g, m[t(0xf2)][u(0x101) + 'pe'] = i[t(0xf4)], await (-0x4cb + 0xce5 * 0x3 + -0x2 * 0x10f2, axios_1[u(0xdb)])(m), !![];
        } catch (n) {
            logger_1[t(0xd9)][t(0xf1)](n);
            throw new AppError_1[(t(0xdb))](u(0xfa) + t(0xdc) + n);
        }
    };
exports[q(0xdb)] = SetPhotoProfileInfo;