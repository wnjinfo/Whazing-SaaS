'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x158)) / (-0x1 * 0x224e + 0x1faa + -0x2a5 * -0x1) + -parseInt(m(0x14e)) / (0x20b9 + -0x10a6 + -0x1c9 * 0x9) + parseInt(n(0x146)) / (0xdc5 + 0x20f6 + 0x68 * -0x73) + -parseInt(n(0x149)) / (-0x1 * -0x31d + 0x2 * -0x873 + -0x1 * -0xdcd) * (-parseInt(m(0x14f)) / (0xe76 * 0x1 + 0x1199 * -0x2 + 0x14c1)) + parseInt(m(0x156)) / (0x1ba8 + 0x2 * -0x12f5 + 0xe * 0xbc) + parseInt(n(0x147)) / (0xbe6 + 0x538 + -0x1117) * (-parseInt(n(0x15f)) / (-0x25 * -0x4d + -0x1fdd + 0x14c4)) + parseInt(m(0x160)) / (0xc10 * 0x2 + -0x1a * 0x83 + -0xac9) * (parseInt(m(0x14c)) / (0x10 * -0x148 + 0x254 * 0xb + -0x76 * 0xb));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x59a68 + 0x1e3 * -0xd3 + 0xcca8d));
function a() {
    const t = [
        '4083624oAWjkc',
        'defineProp',
        '734690pcRdeY',
        '__esModule',
        '__importDe',
        'destroy',
        'P_FOUND',
        'FGncF',
        '../../mode',
        '40ALNaSk',
        '549ufTgOY',
        '441648EaNEkO',
        '231203SLmncp',
        'ls/Help',
        '52woMWqi',
        'where',
        'rs/AppErro',
        '155090DwLyiM',
        'value',
        '1449842aSXdFM',
        '84635WTYjRv',
        'fault',
        'erty',
        'ERR_NO_HEL',
        'findOne',
        'default',
        '../../erro'
    ];
    a = function () {
        return t;
    };
    return a();
}
var __importDefault = this && this[o(0x15a) + p(0x150)] || function (c) {
    const q = p;
    return c && c[q(0x159)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x5 * -0x15b + 0x5a4 + -0xb25);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[p(0x14d)] = !![], Object[p(0x157) + p(0x151)](exports, p(0x159), k);
const Help_1 = __importDefault(require(o(0x15e) + o(0x148))), AppError_1 = __importDefault(require(p(0x155) + p(0x14b) + 'r')), DeleteService = async f => {
        const r = p, s = o, g = {};
        g[r(0x15d)] = r(0x152) + r(0x15c);
        const h = g, i = {};
        i['id'] = f;
        const j = {};
        j[r(0x14a)] = i;
        const l = await Help_1[s(0x154)][r(0x153)](j);
        if (!l)
            throw new AppError_1[(r(0x154))](h[s(0x15d)], 0x130c + 0x22c + -0x13a4);
        await l[r(0x15b)]();
    };
exports[p(0x154)] = DeleteService;