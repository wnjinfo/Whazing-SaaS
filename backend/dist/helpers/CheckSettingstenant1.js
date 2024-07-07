'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x120)) / (0x1 * -0x1a57 + 0x3 * 0xcce + -0xc12) * (-parseInt(q(0x121)) / (-0xe7 + -0x1f8b + 0x2074)) + -parseInt(p(0x131)) / (0x13fd + 0x6a5 + -0x1a9f) * (-parseInt(q(0x12e)) / (0xe0b + 0x1db6 + -0x2bbd)) + parseInt(p(0x123)) / (0x49b + 0xca2 * 0x1 + -0x44e * 0x4) * (parseInt(p(0x11b)) / (0x26eb * -0x1 + 0x9b0 + 0x1d41)) + -parseInt(q(0x130)) / (0x1 * -0x1bf7 + 0x6 * 0x328 + 0x90e) * (parseInt(p(0x126)) / (0x1fbb * 0x1 + 0x73b * -0x2 + 0x5bf * -0x3)) + parseInt(p(0x115)) / (0x201c + 0x2db + 0x1 * -0x22ee) + -parseInt(p(0x12c)) / (0x1e27 + 0x2 * 0xb84 + -0x3525) * (-parseInt(p(0x12f)) / (0x23c4 + 0xb68 + -0x2f21)) + -parseInt(q(0x116)) / (-0x1 * 0x2135 + -0x7 * 0x395 + 0x3a54 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2c * 0x52a + 0x7a5 * -0x4d + -0x11 * -0x545e));
var __importDefault = this && this[r(0x12a) + s(0x12b)] || function (c) {
    const t = s;
    return c && c[t(0x125)] ? c : { 'default': c };
};
const k = {};
function a() {
    const w = [
        '20EVsrlo',
        '202873EDzNDT',
        '2011156EqNgqo',
        '179673duAMRr',
        'ERR_NO_SET',
        'value',
        '991890KayvZd',
        '4077504cWbMqU',
        'default',
        '../errors/',
        'findOne',
        'key',
        '762qyEQlB',
        'erty',
        'yiAIM',
        'Setting',
        'dobJs',
        '21829eqjNup',
        '10HFOjwE',
        'where',
        '3235emDSZF',
        'defineProp',
        '__esModule',
        '8hyaDzb',
        '../models/',
        'tenantId',
        'AppError',
        '__importDe',
        'fault',
        '100zYYGju',
        'TING_FOUND'
    ];
    a = function () {
        return w;
    };
    return a();
}
k[r(0x114)] = !![], Object[r(0x124) + s(0x11c)](exports, s(0x125), k);
const Setting_1 = __importDefault(require(r(0x127) + r(0x11e))), AppError_1 = __importDefault(require(s(0x118) + r(0x129))), CheckSettingstenant1 = async (f, g = null) => {
        const u = s, v = r, h = {};
        h[u(0x11f)] = function (n, o) {
            return n && o;
        }, h[v(0x11d)] = u(0x113) + u(0x12d);
        const i = h, j = {};
        j[v(0x128)] = 0x1, j[v(0x11a)] = f;
        const l = {};
        l[v(0x122)] = j;
        const m = await Setting_1[v(0x117)][v(0x119)](l);
        if (i[u(0x11f)](!m, !g))
            throw new AppError_1[(u(0x117))](i[v(0x11d)], -0x1 * 0x1c16 + 0x255b + -0x7b1 * 0x1);
        return m?.[u(0x114)] || g;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x62 * -0xa + 0xb * -0x2ed + 0x2 * 0xeb7);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[s(0x117)] = CheckSettingstenant1;