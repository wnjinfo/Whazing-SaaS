'use strict';
function a() {
    const t = [
        'Jnccz',
        '40EeboWS',
        'tenantId',
        'order',
        '810859bUiLNZ',
        'ASC',
        '../../mode',
        '163326gROLhb',
        '388ZmFnkH',
        '20890osSwSu',
        'default',
        'where',
        '298202tquczd',
        'fault',
        '__esModule',
        '2040786oCjWhu',
        '5517783OrnEWY',
        'key',
        'defineProp',
        'kgTtT',
        '1206696aUfaDb',
        'erty',
        'ls/FastRep',
        '__importDe',
        'findAll',
        'value'
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
            const f = -parseInt(m(0xee)) / (-0x17db + 0x12d * -0x11 + 0x2bd9 * 0x1) + parseInt(n(0x103)) / (-0x78d * 0x1 + 0x2 * 0xdc9 + -0x1403) + -parseInt(m(0xf1)) / (-0x7ca + 0x1 * 0xce2 + -0x515) + -parseInt(m(0x104)) / (-0xc82 + 0xc41 * 0x1 + 0x17 * 0x3) * (-parseInt(m(0xeb)) / (-0xbc4 + 0x3 * 0x597 + -0x4fc)) + -parseInt(m(0xf6)) / (0x83c + 0x1c * 0xe2 + -0x20ee) + parseInt(m(0x100)) / (0x1e1 + -0x2fb * -0x1 + 0x4d5 * -0x1) * (parseInt(n(0xfd)) / (0x2ba + -0x211f + 0x1e6d)) + parseInt(n(0xf2)) / (-0x512 + -0x2 * -0x12c1 + 0x67b * -0x5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xcc * 0x1123 + -0x134 * -0xb61 + -0x2353 * -0x37));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1cd9 + -0x11a6 + -0xa48);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0xf9) + o(0xef)] || function (c) {
    const q = p;
    return c && c[q(0xf0)] ? c : { 'default': c };
};
const k = {};
k[p(0xfb)] = !![], Object[p(0xf4) + o(0xf7)](exports, p(0xf0), k);
const FastReply_1 = __importDefault(require(o(0x102) + o(0xf8) + 'ly')), ListFastReplyService = async ({tenantId: f}) => {
        const r = o, s = p, g = {};
        g[r(0xfc)] = s(0xf3), g[r(0xf5)] = r(0x101);
        const h = g, i = {};
        i[s(0xfe)] = f;
        const j = {};
        j[s(0xed)] = i, j[s(0xff)] = [[
                h[r(0xfc)],
                h[s(0xf5)]
            ]];
        const l = await FastReply_1[s(0xec)][r(0xfa)](j);
        return l;
    };
exports[p(0xec)] = ListFastReplyService;