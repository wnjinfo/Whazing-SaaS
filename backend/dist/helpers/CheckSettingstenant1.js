'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x1f0)) / (-0x763 * 0x1 + -0x547 + 0xcab) * (-parseInt(q(0x204)) / (0x1e8f + 0x2145 + -0x3fd2)) + -parseInt(q(0x20a)) / (0x176c * 0x1 + -0xd * -0x53 + -0x1ba0) * (parseInt(p(0x205)) / (0xf * 0x2b + -0x1 * -0x235c + -0x3 * 0xc9f)) + -parseInt(p(0x1ef)) / (-0xe32 + 0x4 * -0x2f3 + 0x1a03) + parseInt(p(0x1f9)) / (0xa * 0x1eb + -0xc * -0x1c4 + -0x2858) + -parseInt(p(0x1f4)) / (0x114b * -0x1 + -0x2435 + 0x3587) * (-parseInt(p(0x1f1)) / (0xce1 + 0x2 * -0x217 + -0x7 * 0x13d)) + -parseInt(q(0x1f6)) / (0xc8 * -0xa + -0xdc1 + 0x159a) + parseInt(p(0x1fb)) / (-0x15a3 + 0x1f2a * -0x1 + 0x34d7);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6b211 * -0x1 + -0x65ff6 + 0x13e8d1));
var __importDefault = this && this[r(0x200) + s(0x1ff)] || function (c) {
    const t = r;
    return c && c[t(0x1ee)] ? c : { 'default': c };
};
function a() {
    const w = [
        'defineProp',
        'default',
        'value',
        '../models/',
        '25371LsMrTw',
        '__esModule',
        '2401930nZVnVM',
        '76031OSprHS',
        '8TWKtbH',
        'ERR_NO_SET',
        'AppError',
        '2209634WEGMXo',
        'Setting',
        '212058hzvTPG',
        'key',
        'TING_FOUND',
        '4993560qeMZzS',
        'where',
        '6581390rdEdrk',
        'kDHXc',
        'erty',
        'hgyMp',
        'fault',
        '__importDe',
        '../errors/',
        'tenantId',
        'findOne',
        '6UgKxUw',
        '296OuDwEw'
    ];
    a = function () {
        return w;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xb7d * -0x1 + 0x2dd * -0x6 + 0x1 * 0x79f);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[s(0x208)] = !![], Object[r(0x206) + r(0x1fd)](exports, s(0x1ee), k);
const Setting_1 = __importDefault(require(s(0x209) + r(0x1f5))), AppError_1 = __importDefault(require(s(0x201) + r(0x1f3))), CheckSettingstenant1 = async (f, g = null) => {
        const u = s, v = r, h = {};
        h[u(0x1fe)] = function (n, o) {
            return n && o;
        }, h[u(0x1fc)] = u(0x1f2) + u(0x1f8);
        const i = h, j = {};
        j[v(0x202)] = 0x1, j[u(0x1f7)] = f;
        const l = {};
        l[u(0x1fa)] = j;
        const m = await Setting_1[v(0x207)][v(0x203)](l);
        if (i[v(0x1fe)](!m, !g))
            throw new AppError_1[(v(0x207))](i[v(0x1fc)], -0xf77 + -0x33 * -0xb4 + 0x1 * -0x12d1);
        return m?.[u(0x208)] || g;
    };
exports[r(0x207)] = CheckSettingstenant1;