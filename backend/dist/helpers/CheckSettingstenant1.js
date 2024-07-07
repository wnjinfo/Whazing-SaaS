'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x18f)) / (-0x153 + 0x1f88 + 0x1e34 * -0x1) * (parseInt(p(0x186)) / (-0x1b05 + -0x3 * 0xbe8 + -0x3ebf * -0x1)) + parseInt(p(0x192)) / (0x87 * 0x3 + 0x1790 + -0x1 * 0x1922) + -parseInt(p(0x196)) / (0x7e6 + -0xb3f * 0x1 + -0x7b * -0x7) * (parseInt(q(0x198)) / (0x5e * 0x50 + 0x133d * -0x1 + -0xa1e)) + -parseInt(q(0x195)) / (-0xa67 + -0x1154 + 0x1bc1 * 0x1) + parseInt(p(0x183)) / (-0x2047 + -0xf4a + 0x2f98) * (-parseInt(p(0x18c)) / (0x268e + 0x1e92 + -0x18 * 0x2e1)) + parseInt(q(0x185)) / (-0xb7 * -0x2f + 0x34 * -0xa + -0x1f88) + -parseInt(q(0x193)) / (0x1a9 + 0x793 * 0x1 + 0xb * -0xd6) * (parseInt(q(0x194)) / (0x1 * 0xc1d + 0x6d7 * -0x1 + -0x53b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xc0d9 * 0x6 + -0x18 * 0x28d9 + 0x13ff * 0x8b));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x19 * -0x52 + 0x1af5 + -0x1178);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0x182) + r(0x181)] || function (c) {
    const t = r;
    return c && c[t(0x189)] ? c : { 'default': c };
};
const k = {};
k[s(0x197)] = !![], Object[s(0x17d) + s(0x180)](exports, s(0x189), k);
const Setting_1 = __importDefault(require(s(0x190) + r(0x17f))), AppError_1 = __importDefault(require(r(0x17e) + r(0x18a))), CheckSettingstenant1 = async (f, g = null) => {
        const u = r, v = r, h = {};
        h[u(0x17c)] = function (n, o) {
            return n && o;
        }, h[u(0x191)] = u(0x18b) + u(0x187);
        const i = h, j = {};
        j[u(0x18e)] = 0x1, j[v(0x17b)] = f;
        const l = {};
        l[v(0x18d)] = j;
        const m = await Setting_1[v(0x188)][v(0x184)](l);
        if (i[v(0x17c)](!m, !g))
            throw new AppError_1[(v(0x188))](i[v(0x191)], -0xb34 + -0xb * -0x295 + 0x81 * -0x1f);
        return m?.[u(0x197)] || g;
    };
function a() {
    const w = [
        'TING_FOUND',
        'default',
        '__esModule',
        'AppError',
        'ERR_NO_SET',
        '9256wjGHPW',
        'where',
        'tenantId',
        '1ADKvol',
        '../models/',
        'oclZs',
        '690315vfDSXl',
        '225110TuMTtd',
        '253cKAxQY',
        '1036776PsSMWn',
        '4kSKhIz',
        'value',
        '97895Wtytue',
        'key',
        'WeQeL',
        'defineProp',
        '../errors/',
        'Setting',
        'erty',
        'fault',
        '__importDe',
        '63XnfSID',
        'findOne',
        '2951334YDcvKr',
        '653738FZlzXx'
    ];
    a = function () {
        return w;
    };
    return a();
}
exports[r(0x188)] = CheckSettingstenant1;