'use strict';
function a() {
    const v = [
        '7bhdXGA',
        'form-data',
        'SeezX',
        'error',
        'D360-API-K',
        '../../util',
        'API_URL_36',
        'logger',
        'value',
        'env',
        '__importDe',
        'njwJJ',
        's/logger',
        'defineProp',
        '2853966zlkGAu',
        'T_PHOTO:\x20',
        '3888666lEWeMu',
        'axios',
        '/photo',
        'default',
        'post',
        '../../erro',
        'erty',
        'headers',
        'fault',
        '1491048DrCRsN',
        'rs/AppErro',
        'data',
        'method',
        '__esModule',
        '2929750bavEMl',
        'multipart/',
        '360_NOT_SE',
        'file',
        '6202320KuLzhq',
        '467860xoflFN',
        'url',
        '/v1/settin',
        'gs/profile',
        '21OhnlXs',
        '383578LjUtCo',
        'Content-Ty'
    ];
    a = function () {
        return v;
    };
    return a();
}
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x9a)) / (-0x4 * -0x7a8 + -0x1122 + -0xd7d) + parseInt(o(0xb5)) / (0x2271 * 0x1 + -0xb85 + 0xe * -0x1a3) + -parseInt(o(0x99)) / (0x20f7 + 0x18c4 + -0x39b8) * (parseInt(o(0x95)) / (-0xe37 + 0x2650 + -0x1815)) + -parseInt(o(0x90)) / (-0x205b + 0x1e4b + 0xd * 0x29) + parseInt(o(0xaa)) / (0x1944 + -0xb50 + 0x2 * -0x6f7) * (-parseInt(o(0x9c)) / (0x9 * 0x25 + 0x179c + -0x18e2)) + parseInt(p(0x94)) / (-0x1 * 0x902 + -0x232e + -0x4 * -0xb0e) + parseInt(p(0xac)) / (0x8a0 + 0xca0 + -0x1537);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x29815 + 0x83d72 + 0x1 * -0x3dfe3));
var __importDefault = this && this[q(0xa6) + r(0xb4)] || function (c) {
    const s = r;
    return c && c[s(0x8f)] ? c : { 'default': c };
};
const k = {};
k[q(0xa4)] = !![], Object[q(0xa9) + q(0xb2)](exports, r(0x8f), k);
const axios_1 = __importDefault(require(q(0xad))), AppError_1 = __importDefault(require(q(0xb1) + q(0xb6) + 'r')), logger_1 = require(r(0xa1) + r(0xa8)), SetPhotoProfileInfo = async ({
        file: f,
        apiKey: g
    }) => {
        const t = q, u = q, h = {};
        h[t(0x9e)] = t(0xb0), h[u(0xa7)] = u(0x91) + u(0x9d);
        const i = h, j = process[t(0xa5)][t(0xa2) + '0'] + (u(0x97) + t(0x98) + t(0xae));
        try {
            const l = {};
            l[t(0x93)] = f;
            const m = {};
            return m[t(0x8e)] = i[u(0x9e)], m[t(0x96)] = j, m[u(0x8d)] = l, m[u(0xb3)] = {}, m[u(0xb3)][u(0xa0) + 'EY'] = g, m[u(0xb3)][u(0x9b) + 'pe'] = i[u(0xa7)], await (0xb * -0x55 + -0x1eec + -0x35 * -0xa7, axios_1[t(0xaf)])(m), !![];
        } catch (n) {
            logger_1[u(0xa3)][u(0x9f)](n);
            throw new AppError_1[(u(0xaf))](u(0x92) + u(0xab) + n);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x1610 + -0xcf + 0x176c);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[q(0xaf)] = SetPhotoProfileInfo;