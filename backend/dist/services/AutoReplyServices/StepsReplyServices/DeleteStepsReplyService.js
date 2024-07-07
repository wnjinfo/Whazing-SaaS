'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x1df)) / (-0x1426 + -0x20b8 + -0xa93 * -0x5) * (parseInt(m(0x1ce)) / (-0x249 + -0x110b + -0x19 * -0xc6)) + -parseInt(m(0x1e7)) / (-0x2 * 0x704 + -0x2a5 * -0xd + -0x1456) + -parseInt(m(0x1db)) / (-0x2630 + 0x1286 + 0x13ae) + -parseInt(n(0x1cf)) / (0x17f3 + 0xa81 + -0xd7 * 0x29) + parseInt(n(0x1e6)) / (0x1 * -0xd31 + -0xbe7 + 0x191e) + parseInt(n(0x1d4)) / (0x158e + 0x243 * 0x3 + 0x6 * -0x4b8) + parseInt(n(0x1e3)) / (-0x1943 + 0x5 * -0x79b + 0x3f52);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1330e6 + 0xc7b97 + 0x10ac60));
function a() {
    const t = [
        '1bcIOsW',
        'value',
        'P_AUTO_REP',
        'findOne',
        '7647408bdjNsy',
        'rror',
        'odels/Step',
        '3538200ZQuTcR',
        '98103AcjJwU',
        'destroy',
        '__esModule',
        '24286hcWyBz',
        '2279050HJDXPl',
        'xiOfj',
        'fault',
        'defineProp',
        '../../../e',
        '935319ChfzMe',
        'rrors/AppE',
        '../../../m',
        '__importDe',
        'ERR_NO_STE',
        'where',
        'LY_FOUND',
        '2199208NHKgsc',
        'default',
        'erty',
        'sReply'
    ];
    a = function () {
        return t;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x44 * 0xb + -0x940 * -0x4 + 0x8 * -0x409);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0x1d7) + p(0x1d1)] || function (c) {
    const q = p;
    return c && c[q(0x1cd)] ? c : { 'default': c };
};
const k = {};
k[p(0x1e0)] = !![], Object[o(0x1d2) + o(0x1dd)](exports, p(0x1cd), k);
const StepsReply_1 = __importDefault(require(p(0x1d6) + o(0x1e5) + o(0x1de))), AppError_1 = __importDefault(require(p(0x1d3) + p(0x1d5) + p(0x1e4))), DeleteStepsReplyService = async f => {
        const r = p, s = o, g = {};
        g[r(0x1d0)] = r(0x1d8) + r(0x1e1) + s(0x1da);
        const h = g, i = {};
        i['id'] = f;
        const j = {};
        j[r(0x1d9)] = i;
        const l = await StepsReply_1[r(0x1dc)][r(0x1e2)](j);
        if (!l)
            throw new AppError_1[(s(0x1dc))](h[s(0x1d0)], -0x142 + -0xb31 + 0x201 * 0x7);
        await l[s(0x1cc)]();
    };
exports[o(0x1dc)] = DeleteStepsReplyService;