'use strict';
function a() {
    const v = [
        'env',
        '311429KnlDwK',
        'default',
        '466tXmKLq',
        '13570OojyWJ',
        'sendMessag',
        'fault',
        'axios',
        'HYivf',
        'response',
        '3006366biwKmt',
        '/message_s',
        'YDFol',
        'log',
        '2750858upWtks',
        '6601VmjCfV',
        '5uIyJyz',
        'OPEN_IA_UR',
        'eToIA',
        'value',
        '2549956UsIptQ',
        'data',
        '664MsxLNu',
        'defineProp',
        '3021ZdODFt',
        '__esModule',
        '__importDe',
        '360QDRhIM',
        'erty',
        'post',
        'isnetsul'
    ];
    a = function () {
        return v;
    };
    return a();
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0xd8)) / (0x75 * 0xd + 0x23e1 + -0x29d1) + parseInt(l(0xda)) / (-0x1 * 0x8aa + -0x1a * 0x15d + -0x2c1e * -0x1) * (parseInt(m(0xd0)) / (-0xd11 + 0xa * -0x51 + 0x103e)) + -parseInt(l(0xcc)) / (0xd21 * 0x1 + -0x49e + -0x87f) * (parseInt(m(0xc8)) / (0x72e + 0x616 * 0x6 + -0x3 * 0xe8f)) + parseInt(l(0xc2)) / (-0x4ad + -0x2066 + 0x2519) + parseInt(l(0xc7)) / (-0x178f + -0x1dec + 0x3582) * (-parseInt(l(0xce)) / (0x113d + -0x1 * 0x31a + 0x1 * -0xe1b)) + parseInt(m(0xd3)) / (0x5ee + -0x16f0 + 0x1 * 0x110b) * (parseInt(l(0xdb)) / (0x781 + -0x153f + 0xdc8)) + parseInt(l(0xc6)) / (-0x1 * 0x38f + 0xa0b + 0x11 * -0x61);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xb3 * -0x3b5 + 0xd2e68 + -0x612ae * 0x1));
var __importDefault = this && this[n(0xd2) + o(0xdd)] || function (c) {
    const p = o;
    return c && c[p(0xd1)] ? c : { 'default': c };
};
const k = {};
k[o(0xcb)] = !![], Object[o(0xcf) + o(0xd4)](exports, n(0xd1), k), exports[o(0xdc) + n(0xca)] = void (0x1ff3 + 0xfa9 + -0x2f9c);
const axios_1 = __importDefault(require(o(0xbf))), sendMessageToIA = async d => {
        const q = n, r = o, e = {
                'HYivf': function (f, g) {
                    return f(g);
                },
                'YDFol': function (f, g) {
                    return f(g);
                }
            };
        try {
            const f = { ...d }, g = await axios_1[q(0xd9)][r(0xd5)](process[r(0xd7)][r(0xc9) + 'L'] + (q(0xc3) + r(0xd6)), f);
            return e[q(0xc0)](handleSucces, g);
        } catch (h) {
            return e[r(0xc4)](handleError, h);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x17b3 + -0x163c + -0xb8);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[o(0xdc) + o(0xca)] = sendMessageToIA;
const handleError = c => {
        const s = n, t = o;
        console[s(0xc5)](c[t(0xc1)]);
    }, handleSucces = c => {
        const u = o;
        return c[u(0xcd)];
    };