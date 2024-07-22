'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0xa8)) / (-0x1951 + 0xfb8 + 0x99a) + -parseInt(q(0xa3)) / (-0x232c + 0x8 * -0x493 + 0x47c6) * (-parseInt(q(0x9b)) / (-0x13 + 0xe5d + 0x11 * -0xd7)) + -parseInt(q(0xa5)) / (0x3 * 0x283 + 0x21c5 + -0x97 * 0x46) + -parseInt(p(0x9d)) / (0x2e + -0x1f72 + 0x1f49) * (parseInt(p(0xab)) / (-0x54 + 0x1297 + -0x123d)) + parseInt(p(0xae)) / (0x1 * -0x1b53 + -0x3bb + 0x49 * 0x6d) * (-parseInt(p(0x98)) / (0x1caa + -0x2 * -0x48b + -0x25b8)) + parseInt(p(0xad)) / (0x2 * -0x7d4 + -0x25b4 + 0x3565) * (-parseInt(q(0xa6)) / (0x2 * -0x966 + 0x1 * 0xbfb + 0x6db)) + parseInt(p(0x9a)) / (0x17b * 0xd + 0x1 * -0x162 + 0x11d2 * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2 * 0xabb17 + 0x1 * 0x172cbb + 0xc2172));
var __importDefault = this && this[r(0xa7) + s(0x91)] || function (c) {
    const t = r;
    return c && c[t(0x9f)] ? c : { 'default': c };
};
const k = {};
function a() {
    const w = [
        'neral',
        '1014776fnLrli',
        'TING_FOUND',
        '31737915iseoFX',
        '198mdoLMe',
        'ncvEq',
        '182005QvaAsC',
        'default',
        '__esModule',
        '../errors/',
        'value',
        'erty',
        '28568XKcqGP',
        'where',
        '666616xbYBWw',
        '779430dMXPpk',
        '__importDe',
        '639537uTtTrZ',
        '../models/',
        'findOne',
        '246WKEjMA',
        'defineProp',
        '117NaXyUK',
        '49SuAfrF',
        'fault',
        'ERR_NO_SET',
        'AppError',
        'key',
        'udfIQ',
        'SettingsGe'
    ];
    a = function () {
        return w;
    };
    return a();
}
k[s(0xa1)] = !![], Object[s(0xac) + s(0xa2)](exports, r(0x9f), k);
const SettingsGeneral_1 = __importDefault(require(r(0xa9) + s(0x96) + s(0x97))), AppError_1 = __importDefault(require(s(0xa0) + s(0x93))), CheckSettingsGeneral = async (f, g = null) => {
        const u = s, v = s, h = {};
        h[u(0x9c)] = function (n, o) {
            return n && o;
        }, h[v(0x95)] = u(0x92) + v(0x99);
        const i = h, j = {};
        j[u(0x94)] = f;
        const l = {};
        l[u(0xa4)] = j;
        const m = await SettingsGeneral_1[u(0x9e)][v(0xaa)](l);
        if (i[v(0x9c)](!m, !g))
            throw new AppError_1[(v(0x9e))](i[u(0x95)], -0x25f9 * 0x1 + 0x141a + 0x1373);
        return m?.[u(0xa1)] || g;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1251 + 0x2 * 0xb96 + -0x28ec);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[s(0x9e)] = CheckSettingsGeneral;