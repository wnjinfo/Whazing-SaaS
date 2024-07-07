'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x1f1)) / (0x93c + 0x77f + 0x2 * -0x85d) * (parseInt(m(0x1e6)) / (0x1d6 + -0xa40 + -0x4 * -0x21b)) + -parseInt(n(0x1f7)) / (0x16b4 + 0x25e + 0x5 * -0x503) + -parseInt(n(0x1f0)) / (0xc * -0xc + -0xf * 0x162 + 0x1552) * (parseInt(m(0x1f5)) / (-0x2a9 * 0x1 + -0x1509 + 0xd * 0x1d3)) + -parseInt(m(0x1e3)) / (-0x24d * 0x1 + 0xfe0 + -0xd8d) * (-parseInt(m(0x1e5)) / (0x2 * -0x7ea + -0x1abc + 0x2a97)) + -parseInt(m(0x1e1)) / (-0x1 * 0x1411 + 0x3b1 * -0x4 + 0xff * 0x23) + parseInt(m(0x1ef)) / (0x5 * -0x5ba + 0x5 * 0x3cb + 0x9b4) + -parseInt(n(0x1e2)) / (-0xa36 * 0x2 + 0x7b * -0xb + 0x19bf) * (-parseInt(n(0x1f4)) / (0x771 * -0x1 + -0x1a87 + 0x2203));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x54bbe + 0x6a * 0x559 + 0x5fb0f));
var __importDefault = this && this[o(0x1ea) + p(0x1ec)] || function (c) {
    const q = p;
    return c && c[q(0x1e0)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xef * -0x28 + 0x86d + 0xea2 * -0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[p(0x1df)] = !![], Object[p(0x1f6) + o(0x1e7)](exports, o(0x1e0), k);
function a() {
    const t = [
        '../errors/',
        '176382ytkPpP',
        '1127572QCBwlJ',
        '1LQWdZT',
        'default',
        'key',
        '67254vVymJu',
        '5VBBdvq',
        'defineProp',
        '390993BldUyl',
        'where',
        'TING_FOUND',
        'AppError',
        'value',
        '__esModule',
        '2714216tsQuua',
        '1510Uykacl',
        '282KOyuhl',
        'findOne',
        '4081thrAet',
        '57434GCgXYO',
        'erty',
        '../models/',
        'Setting',
        '__importDe',
        'ERR_NO_SET',
        'fault',
        'VluwF'
    ];
    a = function () {
        return t;
    };
    return a();
}
const Setting_1 = __importDefault(require(p(0x1e8) + p(0x1e9))), AppError_1 = __importDefault(require(o(0x1ee) + p(0x1fa))), CheckSettings = async f => {
        const r = p, s = o, g = {};
        g[r(0x1ed)] = r(0x1eb) + s(0x1f9);
        const h = g, i = {};
        i[s(0x1f3)] = f;
        const j = {};
        j[s(0x1f8)] = i;
        const l = await Setting_1[r(0x1f2)][r(0x1e4)](j);
        if (!l)
            throw new AppError_1[(s(0x1f2))](h[r(0x1ed)], -0x1629 + -0x6cb + -0x2 * -0xf44);
        return l[s(0x1df)];
    };
exports[p(0x1f2)] = CheckSettings;