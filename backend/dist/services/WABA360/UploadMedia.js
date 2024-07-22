'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x166)) / (-0xa02 + -0x1aa4 * 0x1 + 0x24a7) + -parseInt(q(0x181)) / (-0x2 * 0xc98 + 0x1 * -0x19c6 + -0x3a4 * -0xe) * (parseInt(q(0x17b)) / (-0x9a3 * -0x1 + -0xe2e + -0x1 * -0x48e)) + -parseInt(q(0x173)) / (0x1171 + -0xf5b * -0x1 + -0x1064 * 0x2) + -parseInt(p(0x179)) / (0x1752 + -0x3e * -0x30 + -0x1 * 0x22ed) + parseInt(q(0x184)) / (0x2 * -0x875 + -0xd27 + 0x1e17) * (parseInt(p(0x169)) / (-0x1181 * -0x1 + -0x779 + -0xa01 * 0x1)) + -parseInt(q(0x16f)) / (0x4fa * 0x2 + -0x1 * -0x21c7 + -0x2bb3) * (parseInt(p(0x17c)) / (-0x1f * 0xaa + 0x3 * 0x48b + -0x37f * -0x2)) + -parseInt(p(0x172)) / (0x9a7 + -0x6 * 0xac + -0x595);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x12a7f + -0xa1945 + -0x3a * -0x401e));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2241 * -0x1 + 0x10aa * 0x1 + 0x12f4);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0x180) + s(0x170)] || function (c) {
    const t = s;
    return c && c[t(0x16e)] ? c : { 'default': c };
};
const k = {};
k[s(0x178)] = !![], Object[r(0x185) + s(0x160)](exports, s(0x16e), k);
function a() {
    const w = [
        '__esModule',
        '2975624kWhGfs',
        'fault',
        'headers',
        '703850qispyq',
        '307640kayEbZ',
        'logger',
        'env',
        'BXGww',
        'Content-Ty',
        'value',
        '643315yrIbuF',
        'file',
        '3NhDMuy',
        '9DhjKRq',
        '../../util',
        'rs/AppErro',
        'multipart/',
        '__importDe',
        '738252qnCVqj',
        'post',
        'url',
        '24AfgsZR',
        'defineProp',
        'API_URL_36',
        'method',
        '/v1/media',
        'erty',
        'D360-API-K',
        'axios',
        'LOAD_MEDIA',
        'form-data',
        'data',
        '687567rvXZpa',
        '../../erro',
        'default',
        '1218119GxaPHu',
        's/logger',
        'error',
        '360_NOT_UP',
        'XhKiP'
    ];
    a = function () {
        return w;
    };
    return a();
}
const axios_1 = __importDefault(require(s(0x162))), AppError_1 = __importDefault(require(r(0x167) + r(0x17e) + 'r')), logger_1 = require(r(0x17d) + s(0x16a)), UploadMedia = async ({
        file: f,
        apiKey: g
    }) => {
        const u = r, v = s, h = {};
        h[u(0x16d)] = v(0x182), h[v(0x176)] = u(0x17f) + v(0x164);
        const i = h, j = process[u(0x175)][v(0x15d) + '0'] + u(0x15f);
        try {
            const l = {};
            l[v(0x17a)] = f;
            const m = {};
            m[u(0x15e)] = i[u(0x16d)], m[v(0x183)] = j, m[v(0x165)] = l, m[u(0x171)] = {}, m[u(0x171)][u(0x161) + 'EY'] = g, m[u(0x171)][v(0x177) + 'pe'] = i[v(0x176)];
            const n = await (-0x6 * -0x31 + -0x22e + -0xb * -0x18, axios_1[v(0x168)])(m);
            return n[u(0x165)];
        } catch (o) {
            logger_1[v(0x174)][u(0x16b)](o);
            throw new AppError_1[(u(0x168))](v(0x16c) + v(0x163) + ':\x20' + o);
        }
    };
exports[s(0x168)] = UploadMedia;