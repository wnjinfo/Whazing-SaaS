'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x1c3)) / (0x1 * 0x1772 + -0x3c * -0x87 + -0x3715 * 0x1) * (-parseInt(q(0x1ad)) / (0x81e * -0x1 + -0x1 * 0xeb1 + 0x16d1)) + -parseInt(p(0x1ca)) / (0x15e8 + 0x5f5 + 0x136 * -0x17) + parseInt(q(0x1b2)) / (0x218f + 0x8 * 0x1e2 + -0x17 * 0x21d) * (parseInt(p(0x1c5)) / (0x146 * 0x13 + 0x2 * 0x1099 + -0x395f)) + -parseInt(p(0x1cb)) / (-0x124e + -0x989 + 0x1bdd) * (parseInt(q(0x1ac)) / (0x22c9 + -0x56c + -0x1d56)) + -parseInt(q(0x1ba)) / (0x6 * 0x28e + -0x1 * 0x2405 + 0x14b9) * (parseInt(q(0x1bf)) / (0x4d * -0x62 + 0x8b * 0x25 + -0x192 * -0x6)) + -parseInt(q(0x1cf)) / (-0x361 + -0x186b + 0x1fd * 0xe) * (-parseInt(p(0x1aa)) / (-0x45d + 0x366 + 0x102)) + parseInt(q(0x1b7)) / (-0x1d3 + 0x1 * -0x168a + -0x3 * -0x823);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x9edca * -0x1 + -0x1 * -0x9e4b9 + 0x91 * 0xd57));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x312 + -0x601 + 0x45 * 0x11);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0x1c8) + r(0x1c2)] || function (c) {
    const t = r;
    return c && c[t(0x1cd)] ? c : { 'default': c };
};
const k = {};
k[s(0x1b0)] = !![], Object[s(0x1c6) + s(0x1a6)](exports, r(0x1cd), k);
const axios_1 = __importDefault(require(s(0x1a7))), AppError_1 = __importDefault(require(r(0x1ae) + s(0x1bd) + 'r')), logger_1 = require(r(0x1b1) + s(0x1b4)), SentMessage = async ({
        message: f,
        apiKey: g
    }) => {
        const u = r, v = r, h = {};
        h[u(0x1ab)] = u(0x1b9), h[u(0x1b3)] = v(0x1c9) + v(0x1bb);
        const i = h, j = process[u(0x1b8)][u(0x1be) + '0'] + (v(0x1bc) + 'es');
        try {
            const l = { ...f }, m = {};
            m[v(0x1ce)] = i[v(0x1ab)], m[v(0x1a9)] = j, m[u(0x1c7)] = l, m[u(0x1af)] = {}, m[u(0x1af)][v(0x1c1) + 'EY'] = g, m[u(0x1af)][u(0x1b5) + 'pe'] = i[v(0x1b3)];
            const n = await (0x5 * -0x2cd + -0x1 * 0x110b + 0x1f0c * 0x1, axios_1[v(0x1c4)])(m);
            return n[u(0x1c7)];
        } catch (o) {
            logger_1[u(0x1cc)][v(0x1a8)](o);
            throw new AppError_1[(v(0x1c4))](v(0x1b6) + u(0x1c0) + ':\x20' + o);
        }
    };
function a() {
    const w = [
        'error',
        'url',
        '44cUTZAz',
        'gqGvo',
        '1270458xnDyAV',
        '30038rQRdGl',
        '../../erro',
        'headers',
        'value',
        '../../util',
        '1747652cZrDAk',
        'IpUOf',
        's/logger',
        'Content-Ty',
        '360_NOT_SE',
        '14542740vMcMFD',
        'env',
        'post',
        '4667096AxWIAD',
        'n/json',
        '/v1/messag',
        'rs/AppErro',
        'API_URL_36',
        '9pqHgFw',
        'NT_MESSAGE',
        'D360-API-K',
        'fault',
        '2mpCKZg',
        'default',
        '10sWcvnQ',
        'defineProp',
        'data',
        '__importDe',
        'applicatio',
        '1837746fLVRfp',
        '24voZHkq',
        'logger',
        '__esModule',
        'method',
        '897790CrXWCH',
        'erty',
        'axios'
    ];
    a = function () {
        return w;
    };
    return a();
}
exports[r(0x1c4)] = SentMessage;