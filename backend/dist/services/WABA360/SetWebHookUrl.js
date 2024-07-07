'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x207)) / (0x6f * 0x51 + -0x32d + -0x1ff1) * (parseInt(p(0x201)) / (0x22a4 + 0xb29 + -0x2dcb)) + parseInt(o(0x1fa)) / (0x836 + 0x18da * -0x1 + 0x10a7) * (-parseInt(o(0x1fd)) / (-0x1fe * 0xe + -0x1115 + -0x15d * -0x21)) + parseInt(p(0x20a)) / (-0x1 * 0x4ac + -0x1f0e + 0x23bf) + parseInt(p(0x1f6)) / (0x5b8 + 0x552 + -0xb04) * (parseInt(p(0x20e)) / (-0x2313 + -0x121 + 0x243b * 0x1)) + parseInt(o(0x1fc)) / (-0x5 * 0x419 + 0xe72 + 0x1 * 0x613) * (parseInt(p(0x1f1)) / (0xf * -0x15d + 0xfb6 + -0x4c6 * -0x1)) + -parseInt(o(0x1f0)) / (-0x815 * -0x4 + 0x1819 + -0x1 * 0x3863) * (-parseInt(p(0x1fb)) / (-0x1 * -0xb + -0x2003 + -0x37 * -0x95)) + parseInt(o(0x1f7)) / (0x188b + 0x3ad * 0x7 + -0x191d * 0x2) * (-parseInt(p(0x206)) / (0x147 + -0x145b + 0x3b * 0x53));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xaf4 * 0x8b + -0x3173d + 0x16c522));
function a() {
    const v = [
        'method',
        'defineProp',
        'fault',
        'post',
        's/logger',
        '../../util',
        'erUZb',
        'n/json',
        'erty',
        '/v1/config',
        '825530JzvazV',
        '2810241clEZTg',
        'rs/AppErro',
        'error',
        'headers',
        'env',
        '469356KaszBO',
        '5472hWFrCq',
        'axios',
        'T_WEBHOOK:',
        '3bRHylu',
        '66KfQLBY',
        '40OVxjyE',
        '1865700NsIxzQ',
        '__importDe',
        '360_NOT_SE',
        '__esModule',
        '3315010YOJqop',
        'value',
        'default',
        'data',
        'D360-API-K',
        '21801eBdndg',
        '1bcZKCv',
        'url',
        'NSmPr',
        '3575430XEFJsH',
        's/webhook',
        'logger',
        'Content-Ty',
        '91wWzdAf',
        'API_URL_36',
        'applicatio',
        '../../erro'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[q(0x1fe) + q(0x214)] || function (c) {
    const s = r;
    return c && c[s(0x200)] ? c : { 'default': c };
};
const k = {};
k[q(0x202)] = !![], Object[q(0x213) + q(0x1ee)](exports, q(0x200), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1d4f + 0x43 * -0x7f + 0x407a);
        let h = e[f];
        return h;
    }, b(c, d);
}
const axios_1 = __importDefault(require(q(0x1f8))), AppError_1 = __importDefault(require(r(0x211) + r(0x1f2) + 'r')), logger_1 = require(r(0x217) + r(0x216)), SetWebHookUrl = async ({
        url: f,
        apiKey: g
    }) => {
        const t = r, u = q, h = {};
        h[t(0x218)] = t(0x215), h[u(0x209)] = t(0x210) + t(0x219);
        const i = h, j = process[t(0x1f5)][t(0x20f) + '0'] + (u(0x1ef) + u(0x20b));
        try {
            const l = {};
            l[u(0x208)] = f;
            const m = {};
            return m[u(0x212)] = i[t(0x218)], m[u(0x208)] = j, m[u(0x204)] = l, m[t(0x1f4)] = {}, m[t(0x1f4)][t(0x205) + 'EY'] = g, m[t(0x1f4)][u(0x20d) + 'pe'] = i[t(0x209)], await (-0x1598 + 0x16a1 * -0x1 + -0x1 * -0x2c39, axios_1[u(0x203)])(m), !![];
        } catch (n) {
            logger_1[u(0x20c)][u(0x1f3)](n);
            throw new AppError_1[(u(0x203))](t(0x1ff) + u(0x1f9) + '\x20' + n);
        }
    };
exports[r(0x203)] = SetWebHookUrl;