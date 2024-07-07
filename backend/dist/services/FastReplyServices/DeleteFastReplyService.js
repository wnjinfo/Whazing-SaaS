'use strict';
const q = b, r = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xa99 * -0x2 + 0x1 * -0xcd4 + -0x72f);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x136)) / (0x20ad + 0x26f9 + 0x1 * -0x47a5) * (parseInt(o(0x14f)) / (0xfff + 0x293 + 0x129 * -0x10)) + -parseInt(o(0x141)) / (-0xfb * 0x21 + -0x1b6f + -0x13ef * -0x3) * (-parseInt(p(0x14d)) / (0x1ee5 + -0x4b * -0x25 + -0x29b8)) + parseInt(o(0x14a)) / (-0x6 * -0x1ee + 0x1a3 * -0x7 + -0x2 * 0xd) * (-parseInt(o(0x150)) / (-0x1644 + -0x13bb + 0x2a05)) + parseInt(o(0x13c)) / (0x14bc + -0x17f * 0xb + 0x110 * -0x4) + -parseInt(o(0x13f)) / (-0x228 + -0x8c1 + 0xaf1) * (parseInt(o(0x134)) / (0x18f1 + 0xed2 + -0x27ba)) + -parseInt(o(0x12f)) / (0x1e32 + 0x1731 + -0x3559) * (parseInt(p(0x135)) / (0x1f85 + 0x260f + -0x7 * 0x9ef)) + parseInt(p(0x14c)) / (0x1f1 + -0x7 * 0x1bd + 0xa46);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xf4642 + 0x4d2e8 + -0xe * -0x19ab2));
function a() {
    const v = [
        'rs/AppErro',
        '11628126OTudBQ',
        '121KsGHcu',
        '84242JfFGNm',
        'T_REPLY_FO',
        'destroy',
        'value',
        'findOne',
        'where',
        '5867484ejjvhg',
        'UND',
        'default',
        '8lMvvJW',
        'PKPgh',
        '40080ujQiIl',
        'erty',
        'ls/FastRep',
        'defineProp',
        '../../erro',
        'EPLY_EXIST',
        'ERR_NO_FAS',
        '__esModule',
        'ERR_FAST_R',
        '6740OGHYNO',
        '../../mode',
        '19166436WOqmMq',
        '216cXEECw',
        'uYpDN',
        '36qJNRJB',
        '6306UfBFzq',
        '1070370gVkiwg',
        'tenantId',
        '__importDe',
        'fault'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[q(0x131) + q(0x132)] || function (c) {
    const s = r;
    return c && c[s(0x148)] ? c : { 'default': c };
};
const k = {};
k[r(0x139)] = !![], Object[q(0x144) + r(0x142)](exports, r(0x148), k);
const AppError_1 = __importDefault(require(r(0x145) + q(0x133) + 'r')), FastReply_1 = __importDefault(require(q(0x14b) + r(0x143) + 'ly')), DeleteFastReplyService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = r, u = q, h = {};
        h[t(0x140)] = t(0x147) + u(0x137) + t(0x13d), h[u(0x14e)] = t(0x149) + t(0x146) + 'S';
        const i = h, j = {};
        j['id'] = f, j[t(0x130)] = g;
        const l = {};
        l[u(0x13b)] = j;
        const m = await FastReply_1[t(0x13e)][t(0x13a)](l);
        if (!m)
            throw new AppError_1[(u(0x13e))](i[u(0x140)], -0x6e6 + -0x2 * -0xcd0 + -0x1126);
        try {
            await m[u(0x138)]();
        } catch (n) {
            throw new AppError_1[(u(0x13e))](i[u(0x14e)], -0x1 * 0xab5 + 0xd76 + 0x2b * -0x7);
        }
    };
exports[r(0x13e)] = DeleteFastReplyService;