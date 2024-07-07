'use strict';
const o = b, p = b;
function a() {
    const t = [
        'fault',
        '__importDe',
        'API_URL_36',
        'n/json',
        'env',
        'post',
        '../../util',
        '__esModule',
        'vVBpE',
        '13089447AGjvpV',
        '360_NOT_SE',
        '6005164zFdzef',
        'D360-API-K',
        '30958180MrEWeP',
        '10GqVcwr',
        'applicatio',
        '2766492ICnJQG',
        '116EjbqDV',
        'hLNFa',
        'error',
        'url',
        '31818LirpDm',
        'value',
        '7343PZiDrS',
        '891896evxZEn',
        '6648KqWUIw',
        'data',
        'defineProp',
        'rs/AppErro',
        '../../erro',
        'gs/busines',
        's/logger',
        's/profile',
        'logger',
        'default',
        'erty',
        'axios',
        '15ReWYQc',
        '/v1/settin',
        'method',
        'headers',
        'T_BUSINESS',
        'Content-Ty'
    ];
    a = function () {
        return t;
    };
    return a();
}
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x103)) / (0x123c + 0xfab * -0x1 + 0x8 * -0x52) + parseInt(m(0x127)) / (-0x1c06 + 0x2094 + -0x48c) * (-parseInt(n(0x100)) / (-0x259 * -0x7 + 0x1 * 0x143f + -0x9 * 0x413)) + parseInt(m(0x121)) / (0x258e + 0xaf0 + -0x307a) + -parseInt(m(0x110)) / (-0x169 * 0x11 + -0x325 + 0x1b23) * (-parseInt(n(0x126)) / (0x1053 + 0x74 * 0x3e + -0x2c65)) + parseInt(n(0x102)) / (-0xc * 0x2cc + -0x3d7 + 0x63d * 0x6) * (-parseInt(m(0x104)) / (0x351 * 0x2 + -0x1 * -0xa07 + 0x2b * -0x63)) + parseInt(n(0x11f)) / (-0x586 * 0x5 + -0x4 * -0x959 + -0x9bd) * (parseInt(n(0x124)) / (-0x4d * 0x49 + 0xa1a + 0xbe5)) + -parseInt(n(0x123)) / (0x1 * -0x685 + -0x7af * -0x3 + -0x107d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x66629 + 0x6d * 0x35fc + -0xf * 0x1036c));
var __importDefault = this && this[o(0x117) + o(0x116)] || function (c) {
    const q = p;
    return c && c[q(0x11d)] ? c : { 'default': c };
};
const k = {};
k[o(0x101)] = !![], Object[o(0x106) + o(0x10e)](exports, o(0x11d), k);
const axios_1 = __importDefault(require(p(0x10f))), AppError_1 = __importDefault(require(o(0x108) + o(0x107) + 'r')), logger_1 = require(o(0x11c) + p(0x10a)), SetBusinessProfile = async ({
        data: e,
        apiKey: f
    }) => {
        const r = p, s = p, g = {};
        g[r(0x128)] = r(0x11b), g[r(0x11e)] = s(0x125) + r(0x119);
        const h = g, i = process[r(0x11a)][s(0x118) + '0'] + (s(0x111) + s(0x109) + r(0x10b));
        try {
            const j = {};
            return j[s(0x112)] = h[s(0x128)], j[s(0xff)] = i, j[r(0x105)] = e, j[r(0x113)] = {}, j[r(0x113)][r(0x122) + 'EY'] = f, j[r(0x113)][r(0x115) + 'pe'] = h[r(0x11e)], await (0x107e + -0x756 * -0x3 + 0x380 * -0xb, axios_1[r(0x10d)])(j), !![];
        } catch (l) {
            logger_1[r(0x10c)][s(0x129)](l);
            throw new AppError_1[(s(0x10d))](r(0x120) + s(0x114) + ':\x20' + l);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x5b * 0x53 + -0x132e + -0x18d7 * -0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[p(0x10d)] = SetBusinessProfile;