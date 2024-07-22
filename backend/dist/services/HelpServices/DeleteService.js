'use strict';
function a() {
    const t = [
        'defineProp',
        'destroy',
        '__importDe',
        'ls/Help',
        'findOne',
        '3508HKqeSH',
        '50NpTfZI',
        'P_FOUND',
        'rs/AppErro',
        'default',
        'fault',
        '__esModule',
        '3369954GWMFdf',
        '5650nSUjzC',
        'ERR_NO_HEL',
        'value',
        '../../mode',
        '4014xvjBai',
        '2410832iwJkfr',
        '317YuVIYi',
        'erty',
        '5755146ZzNJAY',
        '393520EWIfDP',
        '../../erro',
        'XTKCI',
        'where',
        '1967241BsrRTk'
    ];
    a = function () {
        return t;
    };
    return a();
}
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x153)) / (-0x1b0b + 0x1720 + -0x4 * -0xfb) * (-parseInt(n(0x160)) / (0x13 * 0x148 + 0xdb9 + 0x1 * -0x260f)) + parseInt(n(0x15a)) / (0x1bc3 + -0x107d + -0xb43) + -parseInt(m(0x156)) / (-0x16b5 + 0xd37 + 0x982) * (parseInt(m(0x161)) / (-0x1a37 + 0x139a + 0x6a2)) + parseInt(m(0x155)) / (-0xc66 + 0x5 * 0x413 + -0x5 * 0x197) + parseInt(n(0x14c)) / (0xc9d + -0x41 * 0x19 + 0x1 * -0x63d) + -parseInt(m(0x152)) / (0x21e1 + 0x805 + -0x29de) + -parseInt(n(0x151)) / (-0x9fe * -0x3 + -0x2 * -0x118b + -0x4107) * (-parseInt(n(0x14d)) / (-0x2473 + 0x21e3 + 0x29a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4 * 0x10f33 + -0x2 * -0x20f69 + -0x9e74));
var __importDefault = this && this[o(0x15d) + p(0x165)] || function (c) {
    const q = p;
    return c && c[q(0x14b)] ? c : { 'default': c };
};
const k = {};
k[p(0x14f)] = !![], Object[o(0x15b) + o(0x154)](exports, p(0x14b), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x13d * -0x4 + -0x1739 + 0x29 * 0xb8);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Help_1 = __importDefault(require(p(0x150) + p(0x15e))), AppError_1 = __importDefault(require(o(0x157) + p(0x163) + 'r')), DeleteService = async f => {
        const r = o, s = p, g = {};
        g[r(0x158)] = r(0x14e) + r(0x162);
        const h = g, i = {};
        i['id'] = f;
        const j = {};
        j[s(0x159)] = i;
        const l = await Help_1[r(0x164)][s(0x15f)](j);
        if (!l)
            throw new AppError_1[(s(0x164))](h[s(0x158)], -0xd67 + -0x8 * 0x6 + 0xf2b);
        await l[r(0x15c)]();
    };
exports[o(0x164)] = DeleteService;