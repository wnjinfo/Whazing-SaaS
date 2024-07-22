'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x3 * -0x9c + 0xf * 0xa5 + -0x2b * 0x3b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x1aa)) / (0x1 * -0x150b + 0xc79 + 0x893) * (-parseInt(p(0x1bb)) / (0x1 * 0x2174 + 0x21 * 0x21 + -0x1 * 0x25b3)) + -parseInt(o(0x1a0)) / (-0x1 * 0x142f + 0x14d5 + -0xa3) + -parseInt(p(0x1a9)) / (0x4e1 + -0x13 * 0xc9 + 0xa0e) + -parseInt(p(0x1a3)) / (-0x2607 + -0x2d4 * -0x8 + -0x3 * -0x524) * (-parseInt(p(0x19a)) / (0x7 * 0x361 + 0x1505 * 0x1 + 0x12 * -0x27b)) + -parseInt(o(0x1a4)) / (-0x2f * -0x4 + 0x1185 + 0x91d * -0x2) + parseInt(p(0x1b8)) / (-0x77b * 0x5 + 0x1 * 0x19cd + 0xba2) + -parseInt(o(0x1ab)) / (0xfbe * -0x1 + 0x1575 + -0x2 * 0x2d7) * (-parseInt(o(0x1b3)) / (0xd8b * -0x1 + 0x440 + 0x1 * 0x955));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x21870 * -0x5 + -0xfd2bb + 0x22fd8d));
var __importDefault = this && this[q(0x1b4) + r(0x197)] || function (c) {
    const s = q;
    return c && c[s(0x1b5)] ? c : { 'default': c };
};
const k = {};
function a() {
    const v = [
        '328874kvwcMa',
        '../../erro',
        'env',
        's/logger',
        'method',
        '826236MemJFd',
        '910279RnFJcq',
        '369LkQLWl',
        'url',
        'T_WEBHOOK:',
        'GgOjo',
        '360_NOT_SE',
        'D360-API-K',
        '/v1/config',
        'post',
        '274390ysxuaH',
        '__importDe',
        '__esModule',
        'value',
        'error',
        '7287184oeABJw',
        's/webhook',
        'axios',
        '2iqmlyO',
        'headers',
        'default',
        'rs/AppErro',
        '../../util',
        'fault',
        'applicatio',
        'n/json',
        '26478XtuuaY',
        'erty',
        'UlMii',
        'API_URL_36',
        'logger',
        'Content-Ty',
        '1543185JOGZeP',
        'data',
        'defineProp',
        '240vVMzFd'
    ];
    a = function () {
        return v;
    };
    return a();
}
k[q(0x1b6)] = !![], Object[q(0x1a2) + q(0x19b)](exports, q(0x1b5), k);
const axios_1 = __importDefault(require(r(0x1ba))), AppError_1 = __importDefault(require(r(0x1a5) + r(0x1be) + 'r')), logger_1 = require(r(0x196) + r(0x1a7)), SetWebHookUrl = async ({
        url: f,
        apiKey: g
    }) => {
        const t = r, u = q, h = {};
        h[t(0x19c)] = u(0x1b2), h[t(0x1ae)] = u(0x198) + u(0x199);
        const i = h, j = process[u(0x1a6)][t(0x19d) + '0'] + (t(0x1b1) + t(0x1b9));
        try {
            const l = {};
            l[t(0x1ac)] = f;
            const m = {};
            return m[u(0x1a8)] = i[t(0x19c)], m[u(0x1ac)] = j, m[t(0x1a1)] = l, m[u(0x1bc)] = {}, m[u(0x1bc)][t(0x1b0) + 'EY'] = g, m[u(0x1bc)][t(0x19f) + 'pe'] = i[u(0x1ae)], await (0x26bb + -0xb37 + -0xc * 0x24b, axios_1[u(0x1bd)])(m), !![];
        } catch (n) {
            logger_1[u(0x19e)][t(0x1b7)](n);
            throw new AppError_1[(u(0x1bd))](u(0x1af) + t(0x1ad) + '\x20' + n);
        }
    };
exports[r(0x1bd)] = SetWebHookUrl;