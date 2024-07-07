'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x1f6)) / (0x23b9 + 0x83 * 0x10 + -0x232 * 0x14) * (-parseInt(o(0x1e0)) / (0x1ea7 + 0x131d + -0x31c2)) + -parseInt(p(0x1f7)) / (0x1 * 0xd8b + -0x1235 + 0x39 * 0x15) + parseInt(o(0x1d8)) / (-0xadf + -0x2679 + 0x315c) + parseInt(p(0x1dd)) / (0x9e2 + -0x15 * 0x1b4 + 0x1 * 0x19e7) * (-parseInt(o(0x1e7)) / (-0x3a9 + 0x115 + -0x29a * -0x1)) + -parseInt(p(0x1df)) / (-0x1f46 * -0x1 + -0x1e * -0x88 + -0x2f2f) * (parseInt(p(0x1fa)) / (-0xa * 0x1 + -0x15ce + 0x15e0)) + -parseInt(o(0x1db)) / (0x5cb + 0x1 * -0x1d80 + -0x3 * -0x7ea) + parseInt(p(0x1e2)) / (-0x1a33 + 0xcb * 0x1c + 0x409);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1c * 0x1113 + -0x2493 * 0x6d + -0x4c * -0x68b4));
var __importDefault = this && this[q(0x1d6) + r(0x1d1)] || function (c) {
    const s = q;
    return c && c[s(0x1e9)] ? c : { 'default': c };
};
const k = {};
function a() {
    const v = [
        '/v1/settin',
        '__esModule',
        'env',
        'n/json',
        '../../erro',
        'patch',
        '../../util',
        'logger',
        'T_ABOUT:\x20',
        's/logger',
        'headers',
        'Content-Ty',
        'applicatio',
        'erty',
        '3hDhcDF',
        '3558381LWIoNe',
        'Iqzep',
        'defineProp',
        '1264696WWyNBS',
        'value',
        'fault',
        'error',
        'method',
        'default',
        '360_NOT_SE',
        '__importDe',
        '/about',
        '2390424ZEYSkB',
        'rs/AppErro',
        'D360-API-K',
        '6409404ZXRtsn',
        'text',
        '15515gcJNzO',
        'url',
        '14viwpyf',
        '8006AQiguL',
        'data',
        '29977680STkQuu',
        'gs/profile',
        'axios',
        'API_URL_36',
        'kopHn',
        '918BQqrcD'
    ];
    a = function () {
        return v;
    };
    return a();
}
k[q(0x1fb)] = !![], Object[q(0x1f9) + q(0x1f5)](exports, r(0x1e9), k);
const axios_1 = __importDefault(require(r(0x1e4))), AppError_1 = __importDefault(require(r(0x1ec) + r(0x1d9) + 'r')), logger_1 = require(q(0x1ee) + q(0x1f1)), SetAboutProfileInfo = async ({
        text: f,
        apiKey: g
    }) => {
        const t = r, u = r, h = {};
        h[t(0x1e6)] = u(0x1ed), h[u(0x1f8)] = u(0x1f4) + t(0x1eb);
        const i = h, j = process[t(0x1ea)][u(0x1e5) + '0'] + (t(0x1e8) + u(0x1e3) + t(0x1d7));
        try {
            const l = {};
            l[t(0x1dc)] = f;
            const m = {};
            return m[u(0x1d3)] = i[u(0x1e6)], m[t(0x1de)] = j, m[u(0x1e1)] = l, m[t(0x1f2)] = {}, m[t(0x1f2)][t(0x1da) + 'EY'] = g, m[t(0x1f2)][u(0x1f3) + 'pe'] = i[u(0x1f8)], await (-0x61a * 0x4 + -0x1059 + 0x28c1, axios_1[t(0x1d4)])(m), !![];
        } catch (n) {
            logger_1[u(0x1ef)][u(0x1d2)](n);
            throw new AppError_1[(u(0x1d4))](t(0x1d5) + t(0x1f0) + n);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2180 + -0x185f + -0x750);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[q(0x1d4)] = SetAboutProfileInfo;