'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x114)) / (0x1 * -0x347 + 0x13 * -0x138 + 0x1a70) + parseInt(n(0x11d)) / (0x239 * -0xe + 0xc86 + -0x1 * -0x129a) + -parseInt(m(0x125)) / (-0xbea + 0x13c7 * -0x1 + 0x1fb4) + -parseInt(m(0x11f)) / (-0x1 * -0x1f1f + -0x24d * 0x5 + -0x2 * 0x9cd) * (-parseInt(n(0x117)) / (0xea2 + 0x1702 + 0x259f * -0x1)) + parseInt(m(0x129)) / (-0x2e3 + -0x1 * 0x1073 + 0x7 * 0x2c4) + -parseInt(m(0x124)) / (0x4cb * 0x1 + 0x1 * -0xe5f + -0x99b * -0x1) + -parseInt(m(0x12d)) / (-0x934 + -0x1852 + -0x10c7 * -0x2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x8c9d5 * -0x1 + 0x199c5 + 0xc5442));
var __importDefault = this && this[o(0x12c) + p(0x123)] || function (c) {
    const q = p;
    return c && c[q(0x128)] ? c : { 'default': c };
};
const k = {};
k[p(0x120)] = !![], Object[o(0x12a) + o(0x122)](exports, o(0x128), k);
function a() {
    const t = [
        'default',
        '56910Cjpvnh',
        'sReplyActi',
        'knsTK',
        'PS_REPLY_F',
        'odels/Step',
        '../../../e',
        '1147614gbIYBS',
        'where',
        '76ckCtpx',
        'value',
        'rror',
        'erty',
        'fault',
        '1577268ZLTLXk',
        '1048566PjLwPL',
        'destroy',
        'findOne',
        '__esModule',
        '3620094WuHkbU',
        'defineProp',
        'OUND',
        '__importDe',
        '2150992uREanB',
        'ERR_NO_STE',
        'rrors/AppE',
        '212748uLrVzW',
        '../../../m'
    ];
    a = function () {
        return t;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xf79 * 0x2 + 0x1168 + -0x2f47);
        let h = e[f];
        return h;
    }, b(c, d);
}
const StepsReplyAction_1 = __importDefault(require(o(0x115) + p(0x11b) + o(0x118) + 'on')), AppError_1 = __importDefault(require(p(0x11c) + p(0x113) + p(0x121))), DeleteStepsReplyActionService = async f => {
        const r = o, s = o, g = {};
        g[r(0x119)] = s(0x12e) + s(0x11a) + r(0x12b);
        const h = g, i = {};
        i['id'] = f;
        const j = {};
        j[r(0x11e)] = i;
        const l = await StepsReplyAction_1[s(0x116)][r(0x127)](j);
        if (!l)
            throw new AppError_1[(r(0x116))](h[s(0x119)], 0x2128 + -0x1 * 0x226f + 0x2db);
        await l[s(0x126)]();
    };
exports[p(0x116)] = DeleteStepsReplyActionService;