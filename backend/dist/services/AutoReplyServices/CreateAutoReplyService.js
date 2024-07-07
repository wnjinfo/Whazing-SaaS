'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x1b8)) / (0x3 * -0xb7b + 0x1d * 0x43 + 0xb * 0x271) + -parseInt(l(0x1b2)) / (0xfb8 + -0x1b1d + 0x7 * 0x1a1) + -parseInt(m(0x1ba)) / (-0x12e3 * 0x1 + -0x443 + -0x7 * -0x34f) + parseInt(m(0x1b0)) / (0x15d0 + -0x2470 + -0x3a9 * -0x4) + -parseInt(l(0x1b6)) / (0xe2 * 0x2b + 0x24af * -0x1 + 0x2 * -0xa1) * (parseInt(m(0x1b1)) / (0x8 * -0x102 + -0x156 * -0xa + -0x546)) + parseInt(l(0x1c4)) / (-0x33e * 0x3 + 0x26b9 * -0x1 + 0x307a) * (parseInt(l(0x1c6)) / (0x1ee4 + -0xd * 0xdf + -0x1 * 0x1389)) + parseInt(l(0x1bd)) / (-0x1a25 + 0xfe7 * -0x1 + 0x18f * 0x1b) * (parseInt(l(0x1b4)) / (-0x4d9 + -0xc7 * -0x2e + 0x7 * -0x469));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x19100 * 0x2 + -0x2fafb + 0x1e773));
var __importDefault = this && this[n(0x1bc) + n(0x1bb)] || function (c) {
    const p = n;
    return c && c[p(0x1c0)] ? c : { 'default': c };
};
const k = {};
function a() {
    const s = [
        '__importDe',
        '441BDIGfu',
        '../../mode',
        'create',
        '__esModule',
        'defineProp',
        'ls/AutoRep',
        'erty',
        '237083geXIns',
        'userId',
        '24DkSOtR',
        'name',
        '195804jHbXQC',
        '126402SUKucZ',
        '216248CEIFpX',
        'tenantId',
        '102890eSSGzp',
        'action',
        '25OQrKSv',
        'default',
        '192474WfObZn',
        'value',
        '342030cqUvGu',
        'fault'
    ];
    a = function () {
        return s;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1e25 + 0x5 * 0x3f3 + 0xc16);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[n(0x1b9)] = !![], Object[n(0x1c1) + o(0x1c3)](exports, o(0x1c0), k);
const AutoReply_1 = __importDefault(require(o(0x1be) + o(0x1c2) + 'ly')), CreateAutoReplyService = async ({
        name: d,
        action: e,
        userId: f,
        tenantId: g
    }) => {
        const q = n, r = o, h = {};
        h[q(0x1c7)] = d, h[q(0x1b5)] = e, h[r(0x1c5)] = f, h[q(0x1b3)] = g;
        const i = await AutoReply_1[q(0x1b7)][q(0x1bf)](h);
        return i;
    };
exports[o(0x1b7)] = CreateAutoReplyService;