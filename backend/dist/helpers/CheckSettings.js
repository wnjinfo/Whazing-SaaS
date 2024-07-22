'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x183)) / (-0x19d6 + 0x2586 + -0xbaf) * (-parseInt(n(0x17b)) / (-0x1f59 + 0x8ee + 0x166d)) + parseInt(n(0x17c)) / (-0x39e * -0x8 + -0x1 * 0x26f1 + -0x4 * -0x281) + parseInt(m(0x18a)) / (0x1 * 0x196a + 0xa3 * -0x37 + 0x99f) + parseInt(m(0x185)) / (-0x164 * -0x1c + 0x6e5 * -0x4 + 0xb57 * -0x1) + parseInt(m(0x17f)) / (-0x21a5 + 0x99f + 0x201 * 0xc) + -parseInt(n(0x181)) / (-0x1 * 0xb7d + 0x1 * -0x1b5b + 0x26df) * (-parseInt(m(0x17d)) / (0x208b * 0x1 + -0x1138 + -0xf4b)) + parseInt(n(0x188)) / (0x141e + 0x1 * -0x13d9 + -0x2 * 0x1e) * (-parseInt(n(0x18d)) / (-0x1209 * -0x1 + -0x184 * -0x19 + -0x37e3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3e6 * -0x11c + 0x17293 + -0x2fdd * -0x22));
var __importDefault = this && this[o(0x194) + o(0x18b)] || function (c) {
    const q = p;
    return c && c[q(0x182)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2 * 0x515 + 0x2 * 0x123a + 0x31a * -0x8);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const t = [
        '../errors/',
        '9rkCGEQ',
        'where',
        '198560gAtxIz',
        'fault',
        'default',
        '9426610XSWbUa',
        'value',
        'ERR_NO_SET',
        'erty',
        'OkBCg',
        'TING_FOUND',
        'findOne',
        '__importDe',
        'defineProp',
        '5722pPqrwt',
        '933921sSOOFL',
        '571832MyKfIP',
        'Setting',
        '934458TDxCnv',
        'AppError',
        '28VIYfvP',
        '__esModule',
        '38qIMdym',
        'key',
        '1296870MuTgzT',
        '../models/'
    ];
    a = function () {
        return t;
    };
    return a();
}
const k = {};
k[o(0x18e)] = !![], Object[p(0x17a) + o(0x190)](exports, p(0x182), k);
const Setting_1 = __importDefault(require(p(0x186) + o(0x17e))), AppError_1 = __importDefault(require(o(0x187) + o(0x180))), CheckSettings = async f => {
        const r = o, s = o, g = {};
        g[r(0x191)] = r(0x18f) + r(0x192);
        const h = g, i = {};
        i[r(0x184)] = f;
        const j = {};
        j[r(0x189)] = i;
        const l = await Setting_1[s(0x18c)][r(0x193)](j);
        if (!l)
            throw new AppError_1[(s(0x18c))](h[r(0x191)], -0x1c4f + 0x23b1 + -0x5ce);
        return l[s(0x18e)];
    };
exports[p(0x18c)] = CheckSettings;