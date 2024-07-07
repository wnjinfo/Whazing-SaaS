'use strict';
function a() {
    const w = [
        '5640hZKcTA',
        'neral',
        'AppError',
        '287208RMAYxn',
        '__esModule',
        'SettingsGe',
        'ERR_NO_SET',
        '1236wncsYE',
        '10CTDxOe',
        'findOne',
        '1860072wZLwbn',
        'gLHYc',
        'ARgEp',
        '10636ZFZEEl',
        '__importDe',
        '4507FwSwPI',
        'default',
        'erty',
        '219401jBxeGC',
        'fault',
        'defineProp',
        '../models/',
        '818653cXwnLl',
        '30dwiLzP',
        'key',
        'TING_FOUND',
        'value',
        '../errors/',
        'where',
        '54TFPqFV'
    ];
    a = function () {
        return w;
    };
    return a();
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x1cb)) / (0x159d * 0x1 + 0x6 * 0x607 + 0xff * -0x3a) * (-parseInt(p(0x1b5)) / (0x1cf * 0x11 + 0x23fb * -0x1 + 0x29f * 0x2)) + -parseInt(q(0x1bb)) / (-0xeb0 + -0x2 * 0x12cd + -0x1 * -0x344d) * (-parseInt(p(0x1c9)) / (0x1 * 0xfb5 + 0x3 * -0x40a + -0x3d * 0xf)) + -parseInt(q(0x1bc)) / (0x769 * 0x4 + 0x226b + 0xe * -0x493) * (parseInt(p(0x1c3)) / (0x1 * 0x579 + -0xc5f * 0x1 + -0x6ec * -0x1)) + parseInt(p(0x1b0)) / (0x1794 + 0xea + -0x1877) + parseInt(p(0x1c6)) / (0x9eb * -0x2 + -0x7ea + 0x6f2 * 0x4) + parseInt(q(0x1bf)) / (0x15b1 + 0xf4 + -0x169c * 0x1) + parseInt(p(0x1c4)) / (0x4 * 0x124 + 0x1c + -0x4a2) * (parseInt(q(0x1b4)) / (0x2694 + 0x1 * 0x2597 + -0x4c20));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x2b201 + -0x1d * -0x395 + -0x1 * 0x14ca6));
var __importDefault = this && this[r(0x1ca) + s(0x1b1)] || function (c) {
    const t = s;
    return c && c[t(0x1c0)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x241c + -0xe69 + -0x1405);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[r(0x1b8)] = !![], Object[r(0x1b2) + r(0x1af)](exports, s(0x1c0), k);
const SettingsGeneral_1 = __importDefault(require(s(0x1b3) + s(0x1c1) + r(0x1bd))), AppError_1 = __importDefault(require(s(0x1b9) + r(0x1be))), CheckSettingsGeneral = async (f, g = null) => {
        const u = r, v = s, h = {};
        h[u(0x1c7)] = function (n, o) {
            return n && o;
        }, h[v(0x1c8)] = v(0x1c2) + u(0x1b7);
        const i = h, j = {};
        j[v(0x1b6)] = f;
        const l = {};
        l[v(0x1ba)] = j;
        const m = await SettingsGeneral_1[u(0x1ae)][v(0x1c5)](l);
        if (i[v(0x1c7)](!m, !g))
            throw new AppError_1[(u(0x1ae))](i[v(0x1c8)], -0x2 * 0x7c3 + 0x403 * -0x1 + 0x439 * 0x5);
        return m?.[u(0x1b8)] || g;
    };
exports[s(0x1ae)] = CheckSettingsGeneral;