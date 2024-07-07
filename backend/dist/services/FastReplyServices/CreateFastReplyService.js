'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x1d5)) / (0xe46 + 0x1c * -0x8 + -0xd65) + -parseInt(l(0x1e7)) / (-0x25 * -0x3 + 0x20ef + -0x215c) + parseInt(m(0x1d7)) / (0x865 + -0x184b + 0x1 * 0xfe9) * (-parseInt(m(0x1de)) / (0x966 * 0x1 + 0x1090 + 0x3 * -0x8a6)) + parseInt(l(0x1d0)) / (-0x15c0 + -0x1125 + 0x26ea) * (-parseInt(l(0x1df)) / (0x701 * 0x3 + 0x1 * -0x174a + 0x1 * 0x24d)) + parseInt(l(0x1db)) / (-0x13ed * -0x1 + 0x1c41 + 0x3027 * -0x1) + -parseInt(m(0x1d1)) / (0x2 * -0x11a7 + -0x14c * -0xe + 0x112e * 0x1) + -parseInt(l(0x1e3)) / (-0xdc + 0x147d + -0x1398) * (-parseInt(l(0x1d2)) / (-0x1 * -0x17bf + 0xab * -0x1e + -0x3ab));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5 * 0x799b + 0x3b6d1 + -0x6a8 * 0x8d));
var __importDefault = this && this[n(0x1d6) + n(0x1e2)] || function (c) {
    const p = n;
    return c && c[p(0x1e1)] ? c : { 'default': c };
};
function a() {
    const s = [
        '69010bcjrGx',
        '29585uUoaqQ',
        '676320oNLeJx',
        '10BiGKMr',
        'ls/FastRep',
        'message',
        '217678CgBntA',
        '__importDe',
        '255NJsMEU',
        'defineProp',
        'erty',
        'value',
        '835240ijPqQz',
        'create',
        'tenantId',
        '4312tYrHQW',
        '18oeWFuT',
        'key',
        '__esModule',
        'fault',
        '452052LxcqYP',
        'userId',
        '../../mode',
        'default'
    ];
    a = function () {
        return s;
    };
    return a();
}
const k = {};
k[o(0x1da)] = !![], Object[n(0x1d8) + n(0x1d9)](exports, o(0x1e1), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x10 * -0x12e + 0x42c + 0x1084);
        let h = e[f];
        return h;
    }, b(c, d);
}
const FastReply_1 = __importDefault(require(n(0x1e5) + o(0x1d3) + 'ly')), CreateFastReplyService = async ({
        key: d,
        message: e,
        userId: f,
        tenantId: g
    }) => {
        const q = n, r = o, h = {};
        h[q(0x1e0)] = d, h[q(0x1d4)] = e, h[q(0x1e4)] = f, h[q(0x1dd)] = g;
        const i = await FastReply_1[q(0x1e6)][q(0x1dc)](h);
        return i;
    };
exports[o(0x1e6)] = CreateFastReplyService;