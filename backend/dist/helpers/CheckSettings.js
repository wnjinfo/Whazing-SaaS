'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x188)) / (0x1399 + 0x6 * 0x7 + -0x3 * 0x696) + parseInt(m(0x185)) / (-0x1783 + -0xa1 + 0x1826) + -parseInt(n(0x17d)) / (-0x14ac + 0xa * 0x26d + 0xb7 * -0x5) * (-parseInt(m(0x172)) / (0x2 * 0xc5a + -0xb8 * 0x26 + 0x2a0)) + -parseInt(m(0x178)) / (-0x1112 + -0xb9d * -0x1 + 0x57a) * (parseInt(n(0x17c)) / (0x1942 + -0x1 * 0x5b4 + -0x1388)) + -parseInt(n(0x18a)) / (-0x1b31 + 0x127 + -0x1a11 * -0x1) + -parseInt(n(0x189)) / (0xa59 + 0x1525 * -0x1 + -0xb * -0xfc) + parseInt(m(0x18c)) / (0x1 * 0xe3a + -0x5e5 * 0x1 + -0x84c) * (parseInt(m(0x17a)) / (0x1f4b + 0x2197 * -0x1 + 0x1 * 0x256));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1b7a * -0x2 + 0x29c2d + -0x73 * -0xb9d));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xf4d * 0x2 + 0x2 * 0xe6e + 0xbc * -0x4f);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0x17f) + o(0x17b)] || function (c) {
    const q = o;
    return c && c[q(0x177)] ? c : { 'default': c };
};
const k = {};
k[p(0x187)] = !![], Object[p(0x186) + p(0x18b)](exports, o(0x177), k);
function a() {
    const t = [
        'findOne',
        'ERR_NO_SET',
        '../errors/',
        'default',
        '1619262jidEAf',
        'defineProp',
        'value',
        '136446xsHVyT',
        '2058376mxuVhu',
        '5736038MIxLnx',
        'erty',
        '9045RGKWow',
        '4556IfOuAS',
        'zvtZe',
        'AppError',
        'where',
        'Setting',
        '__esModule',
        '820835AzKITa',
        'TING_FOUND',
        '10240fyYoTQ',
        'fault',
        '24MqiOqq',
        '1470zJDGoM',
        'key',
        '__importDe',
        '../models/'
    ];
    a = function () {
        return t;
    };
    return a();
}
const Setting_1 = __importDefault(require(o(0x180) + p(0x176))), AppError_1 = __importDefault(require(p(0x183) + p(0x174))), CheckSettings = async f => {
        const r = p, s = p, g = {};
        g[r(0x173)] = r(0x182) + s(0x179);
        const h = g, i = {};
        i[r(0x17e)] = f;
        const j = {};
        j[r(0x175)] = i;
        const l = await Setting_1[r(0x184)][s(0x181)](j);
        if (!l)
            throw new AppError_1[(s(0x184))](h[s(0x173)], -0x1dd4 + 0x4 * 0x1eb + 0x17bc);
        return l[r(0x187)];
    };
exports[o(0x184)] = CheckSettings;