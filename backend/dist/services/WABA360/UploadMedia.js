'use strict';
const r = b, s = b;
function a() {
    const w = [
        'default',
        's/logger',
        'logger',
        'file',
        '../../erro',
        '360_NOT_UP',
        'fault',
        'RTIfW',
        'axios',
        '532616YdNRoT',
        'url',
        'erty',
        'LOAD_MEDIA',
        '953622bMMEGY',
        'form-data',
        'Content-Ty',
        'zmWMd',
        '392889Xtjytq',
        'headers',
        '../../util',
        'multipart/',
        '10hWfjrT',
        '__importDe',
        '__esModule',
        'post',
        'data',
        'defineProp',
        'error',
        'env',
        '2087673jMCQMU',
        'D360-API-K',
        '34046LZwUen',
        'value',
        '2120856PBVDuR',
        'rs/AppErro',
        'method',
        '/v1/media',
        '1045566IaDlGu',
        '7dKooAg',
        'API_URL_36'
    ];
    a = function () {
        return w;
    };
    return a();
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x1ad)) / (-0xb26 + -0x14f1 + 0x2018) * (parseInt(q(0x1a6)) / (0x1 * 0x1bc3 + 0x3b * 0xc + 0xd * -0x259)) + parseInt(p(0x198)) / (0x130d + -0x13 * -0x89 + -0x1d35) + -parseInt(q(0x1b8)) / (-0x1304 + -0x4 * -0x65 + 0x1174) + -parseInt(p(0x19c)) / (-0x1887 + -0x1 * -0x61f + 0x126d * 0x1) * (parseInt(q(0x194)) / (0x1 * 0x26b9 + -0x1537 * -0x1 + -0x2 * 0x1df5)) + parseInt(q(0x1a4)) / (0x785 * -0x1 + 0xbb * 0x22 + -0x8a5 * 0x2) + parseInt(q(0x1a8)) / (-0x1647 * -0x1 + 0x2126 + -0x3765) + parseInt(p(0x1ac)) / (-0x1be1 + -0x1 * -0x37f + 0x186b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x8344 * -0xa + -0x5eea7 + 0x478a5));
var __importDefault = this && this[r(0x19d) + s(0x1b5)] || function (c) {
    const t = s;
    return c && c[t(0x19e)] ? c : { 'default': c };
};
const k = {};
k[r(0x1a7)] = !![], Object[r(0x1a1) + r(0x1ba)](exports, r(0x19e), k);
const axios_1 = __importDefault(require(s(0x1b7))), AppError_1 = __importDefault(require(r(0x1b3) + s(0x1a9) + 'r')), logger_1 = require(r(0x19a) + s(0x1b0)), UploadMedia = async ({
        file: f,
        apiKey: g
    }) => {
        const u = s, v = s, h = {};
        h[u(0x1b6)] = u(0x19f), h[v(0x197)] = u(0x19b) + v(0x195);
        const i = h, j = process[v(0x1a3)][v(0x1ae) + '0'] + u(0x1ab);
        try {
            const l = {};
            l[v(0x1b2)] = f;
            const m = {};
            m[u(0x1aa)] = i[u(0x1b6)], m[v(0x1b9)] = j, m[u(0x1a0)] = l, m[v(0x199)] = {}, m[v(0x199)][v(0x1a5) + 'EY'] = g, m[v(0x199)][v(0x196) + 'pe'] = i[u(0x197)];
            const n = await (0x196e + 0x1 * -0x2513 + 0xba5, axios_1[v(0x1af)])(m);
            return n[v(0x1a0)];
        } catch (o) {
            logger_1[v(0x1b1)][u(0x1a2)](o);
            throw new AppError_1[(u(0x1af))](u(0x1b4) + u(0x193) + ':\x20' + o);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xc5 * 0x1f + -0xd47 + 0x1b * 0x16f);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[s(0x1af)] = UploadMedia;