'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x118)) / (-0xc7 * -0x24 + -0x99 + -0x1b62) + -parseInt(n(0x11b)) / (0x2692 * -0x1 + -0x103e + 0x36d2) + -parseInt(n(0x11e)) / (-0x1a * 0x9d + 0x368 + -0xbd * -0x11) + parseInt(n(0x127)) / (-0x4 * 0x2a5 + -0x2703 * 0x1 + -0xf9 * -0x33) + -parseInt(m(0x12b)) / (0x29 * 0x52 + 0x4f8 + 0x3 * -0x607) + parseInt(n(0x126)) / (0x3 * 0x819 + 0x1d0f + -0x3554) + parseInt(m(0x121)) / (0x29 * -0xa1 + 0x168c + 0xd1 * 0x4) * (parseInt(m(0x12f)) / (0x726 + -0x6d * 0x3d + 0x12db));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x69e5c + -0xd0456 + 0x1cd0b3));
var __importDefault = this && this[o(0x125) + o(0x11d)] || function (c) {
    const q = o;
    return c && c[q(0x11f)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x17db + 0x1ca0 + -0x1d7 * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[o(0x12d)] = !![], Object[p(0x128) + o(0x122)](exports, o(0x11f), k);
function a() {
    const t = [
        '1896750ZqNGen',
        '__esModule',
        'default',
        '2457GvQDMa',
        'erty',
        'P_FOUND',
        'ls/Help',
        '__importDe',
        '4319802bgaExH',
        '2021384LQNjjP',
        'defineProp',
        'where',
        'LMwwT',
        '5755225ykgoVt',
        'ERR_NO_HEL',
        'value',
        'findOne',
        '16248NSvSuD',
        '../../mode',
        '547253YXLBws',
        '../../erro',
        'destroy',
        '201102iPwCLD',
        'rs/AppErro',
        'fault'
    ];
    a = function () {
        return t;
    };
    return a();
}
const Help_1 = __importDefault(require(o(0x117) + p(0x124))), AppError_1 = __importDefault(require(o(0x119) + o(0x11c) + 'r')), DeleteService = async f => {
        const r = o, s = p, g = {};
        g[r(0x12a)] = s(0x12c) + r(0x123);
        const h = g, i = {};
        i['id'] = f;
        const j = {};
        j[s(0x129)] = i;
        const l = await Help_1[s(0x120)][r(0x12e)](j);
        if (!l)
            throw new AppError_1[(r(0x120))](h[s(0x12a)], 0x13d9 * 0x1 + 0x33 * 0x1a + -0x1773);
        await l[r(0x11a)]();
    };
exports[p(0x120)] = DeleteService;