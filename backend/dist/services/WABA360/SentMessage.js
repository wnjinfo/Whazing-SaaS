'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0xf6)) / (0x6d7 * -0x4 + -0x1ba5 + 0x3702) + parseInt(p(0xe9)) / (-0x22 * 0x43 + 0x22ae + -0x19c6 * 0x1) + -parseInt(p(0xf3)) / (0xa37 * 0x1 + -0x12 * -0x1ea + -0x2ca8) + parseInt(p(0xe3)) / (0x19e6 + 0x2029 * 0x1 + -0x3a0b) + -parseInt(p(0xea)) / (-0xda + -0xb7 + -0x1 * -0x196) + -parseInt(q(0xe7)) / (-0x1de9 + -0x74a * -0x5 + -0x683) + parseInt(p(0xe2)) / (0x2031 * 0x1 + 0x464 + -0x2 * 0x1247);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x12b70 + -0x62c * -0x20e + 0x3 * 0x9d3));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1983 + -0x1d9 * -0x1 + -0x1a87);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0xdf) + s(0xd5)] || function (c) {
    const t = r;
    return c && c[t(0xec)] ? c : { 'default': c };
};
const k = {};
k[r(0xe1)] = !![], Object[r(0xdc) + r(0xdb)](exports, r(0xec), k);
function a() {
    const w = [
        '../../erro',
        '809135OUWxNv',
        'data',
        's/logger',
        'nGbDY',
        'fault',
        'Content-Ty',
        'headers',
        '360_NOT_SE',
        'NT_MESSAGE',
        'method',
        'erty',
        'defineProp',
        'D360-API-K',
        'n/json',
        '__importDe',
        'API_URL_36',
        'value',
        '23709539FIOqjh',
        '1918784ucJUio',
        'default',
        'error',
        'url',
        '5911278yeqSGZ',
        'axios',
        '996778UXXWBR',
        '6425390XOuaNT',
        '../../util',
        '__esModule',
        'applicatio',
        'rs/AppErro',
        'logger',
        'HpQhx',
        '/v1/messag',
        'post',
        '1111365TsnXrB',
        'env'
    ];
    a = function () {
        return w;
    };
    return a();
}
const axios_1 = __importDefault(require(s(0xe8))), AppError_1 = __importDefault(require(s(0xf5) + r(0xee) + 'r')), logger_1 = require(r(0xeb) + r(0xf8)), SentMessage = async ({
        message: f,
        apiKey: g
    }) => {
        const u = s, v = r, h = {};
        h[u(0xf0)] = v(0xf2), h[v(0xf9)] = v(0xed) + u(0xde);
        const i = h, j = process[u(0xf4)][v(0xe0) + '0'] + (v(0xf1) + 'es');
        try {
            const l = { ...f }, m = {};
            m[v(0xda)] = i[v(0xf0)], m[u(0xe6)] = j, m[v(0xf7)] = l, m[v(0xd7)] = {}, m[v(0xd7)][v(0xdd) + 'EY'] = g, m[v(0xd7)][u(0xd6) + 'pe'] = i[u(0xf9)];
            const n = await (-0x10e1 + 0xf50 * -0x1 + 0x2031, axios_1[u(0xe4)])(m);
            return n[u(0xf7)];
        } catch (o) {
            logger_1[v(0xef)][v(0xe5)](o);
            throw new AppError_1[(u(0xe4))](v(0xd8) + v(0xd9) + ':\x20' + o);
        }
    };
exports[r(0xe4)] = SentMessage;