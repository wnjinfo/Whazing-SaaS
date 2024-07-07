'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x1d2)) / (0x11e7 + -0x61 * -0x18 + -0x1afe) + -parseInt(p(0x1c8)) / (0x5f * -0x26 + -0x10fd * -0x1 + -0x2e1) * (parseInt(o(0x1cd)) / (0x209a + -0x26d3 + 0x63c)) + parseInt(o(0x1c9)) / (0x1 * 0x101e + 0xa19 + -0x1a33) * (parseInt(p(0x1c7)) / (-0x2471 + -0x2298 + 0x470e)) + -parseInt(o(0x1d3)) / (-0x7fb + -0xef * -0x7 + -0xbc * -0x2) + parseInt(o(0x1c4)) / (-0xa61 + -0x1662 + 0xaee * 0x3) * (parseInt(o(0x1ce)) / (0xd23 + 0x1 * 0x67f + -0x139a)) + -parseInt(p(0x1d9)) / (0x1a * -0x52 + 0x29 * -0xc7 + 0x283c) + parseInt(o(0x1c3)) / (0x1 * -0xdff + 0x25ab + 0x6e * -0x37);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x11e81 + -0x10fc5 + 0x95c0a));
function a() {
    const v = [
        'rs/AppErro',
        '7570190iYTRgN',
        '49egeeWf',
        'fBqUC',
        'fault',
        '30FbugIN',
        '366nTnyJj',
        '81772pKcYdp',
        '_FOUND',
        'tenantId',
        'ls/Tag',
        '10134mFlJgX',
        '1057384CfCjig',
        'erty',
        '../../erro',
        '__importDe',
        '875092FZYPEC',
        '2711562WBpTvB',
        'where',
        'defineProp',
        'ERR_TAG_CO',
        'findOne',
        'NTACTS_EXI',
        '8934489JbfTwV',
        'value',
        'default',
        '../../mode',
        'STS',
        'destroy',
        'ERR_NO_TAG',
        '__esModule',
        'hNPWf'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[q(0x1d1) + q(0x1c6)] || function (c) {
    const s = q;
    return c && c[s(0x1c0)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1227 + 0x1e2 * -0x4 + -0x8e * 0x10);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[r(0x1da)] = !![], Object[r(0x1d5) + r(0x1cf)](exports, q(0x1c0), k);
const Tag_1 = __importDefault(require(r(0x1dc) + r(0x1cc))), AppError_1 = __importDefault(require(q(0x1d0) + r(0x1c2) + 'r')), DeleteTagService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = q, u = r, h = {};
        h[t(0x1c1)] = u(0x1bf) + u(0x1ca), h[t(0x1c5)] = t(0x1d6) + u(0x1d8) + u(0x1dd);
        const i = h, j = {};
        j['id'] = f, j[u(0x1cb)] = g;
        const l = {};
        l[u(0x1d4)] = j;
        const m = await Tag_1[t(0x1db)][u(0x1d7)](l);
        if (!m)
            throw new AppError_1[(t(0x1db))](i[u(0x1c1)], 0x8f * 0xf + -0x21c6 + 0x1af9);
        try {
            await m[u(0x1de)]();
        } catch (n) {
            throw new AppError_1[(t(0x1db))](i[u(0x1c5)], -0xb * 0x2f8 + -0x2 * -0x823 + 0x11f6);
        }
    };
exports[r(0x1db)] = DeleteTagService;