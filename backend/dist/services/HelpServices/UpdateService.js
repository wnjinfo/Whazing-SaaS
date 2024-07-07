'use strict';
function a() {
    const s = [
        '59213HzNNMU',
        'defineProp',
        '__importDe',
        '../../mode',
        '2PRwQeA',
        '1619238TaZQIm',
        '../../erro',
        '106280orNRDo',
        'yFdlz',
        '1221320ERpIJO',
        '__esModule',
        'findByPk',
        'fault',
        'ERR_NO_HEL',
        'value',
        '567QBudIM',
        'ls/Help',
        'update',
        'erty',
        '44470DRgOQp',
        'P_FOUND',
        'rs/AppErro',
        'default',
        '91jPKeIy',
        '408822LnwTZy',
        '1006556Nrbxpc'
    ];
    a = function () {
        return s;
    };
    return a();
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x101)) / (0x203c + 0x24 * 0x7 + -0x2137) + parseInt(m(0x105)) / (0x12f * 0x1b + 0x26d9 + 0x1 * -0x46cc) * (parseInt(m(0xff)) / (0xf05 + -0x1b56 * -0x1 + -0xa * 0x43c)) + parseInt(l(0x100)) / (0x466 * 0x2 + -0x82 * 0x2 + -0x7c4) + parseInt(l(0x10a)) / (-0x2 * 0xe9f + 0x107 * 0x13 + -0x2 * -0x4df) + -parseInt(l(0x106)) / (0x2397 * -0x1 + -0x1a05 + -0xe * -0x467) + parseInt(l(0xfe)) / (-0x9ab + 0x9a2 * -0x3 + 0x2698) * (parseInt(l(0x108)) / (-0x46 * 0x74 + -0x228 * -0xb + 0x808)) + parseInt(m(0x110)) / (0xaf0 + -0x179a + -0xcb3 * -0x1) * (-parseInt(l(0x114)) / (0xc5 * 0x1 + 0x1 * 0x305 + -0xc0 * 0x5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x34 * 0x1f + -0x145fd + -0x19 * -0x2bdc));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1087 + 0x1 * 0x701 + -0xa * 0x241);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[n(0x103) + o(0x10d)] || function (c) {
    const p = o;
    return c && c[p(0x10b)] ? c : { 'default': c };
};
const k = {};
k[o(0x10f)] = !![], Object[n(0x102) + o(0x113)](exports, o(0x10b), k);
const AppError_1 = __importDefault(require(n(0x107) + n(0x116) + 'r')), Help_1 = __importDefault(require(o(0x104) + o(0x111))), UpdateService = async d => {
        const q = n, r = o, e = {};
        e[q(0x109)] = r(0x10e) + r(0x115);
        const f = e, {id: g} = d, h = await Help_1[r(0x117)][r(0x10c)](g);
        if (!h)
            throw new AppError_1[(r(0x117))](f[q(0x109)], -0x617 * -0x4 + 0x2 * -0x4e2 + -0x1c * 0x77);
        return await h[r(0x112)](d), h;
    };
exports[o(0x117)] = UpdateService;