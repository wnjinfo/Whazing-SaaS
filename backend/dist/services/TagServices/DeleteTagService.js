'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x14c)) / (0x13 * -0x2b + 0x28d * -0x1 + 0x5bf) + -parseInt(p(0x146)) / (0xfd1 + -0x39e + -0x1 * 0xc31) * (-parseInt(p(0x157)) / (0x10a * 0x16 + -0x1baf + 0x4d6)) + parseInt(o(0x148)) / (-0x1e8c + 0x17da + -0x35b * -0x2) * (parseInt(o(0x156)) / (-0x1b3c + 0x1a2 * -0x3 + 0x2027 * 0x1)) + -parseInt(p(0x153)) / (-0x2 * -0x93 + -0x22aa + -0xb2e * -0x3) * (-parseInt(p(0x14d)) / (-0x916 + 0xb81 * -0x1 + 0x149e)) + parseInt(o(0x14e)) / (0xec1 * -0x2 + 0x26a7 * 0x1 + -0x91d) * (-parseInt(p(0x147)) / (-0x7 * 0x491 + 0x19e2 + -0x1d * -0x36)) + parseInt(o(0x143)) / (0x1bc4 + 0x2553 + -0x410d) * (parseInt(p(0x141)) / (0x61 * 0x1 + 0xc74 + -0xcca)) + parseInt(o(0x155)) / (0x1dc5 + 0x6d * 0x16 + 0x2717 * -0x1) * (-parseInt(o(0x152)) / (-0x2449 + -0x684 + -0x156d * -0x2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4 * 0x22fa3 + 0xac0a + -0x14ed * -0xd3));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1e31 + 0xbf3 * 0x1 + 0x1c5 * 0xb);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const v = [
        '_FOUND',
        'default',
        'value',
        'destroy',
        'ERR_NO_TAG',
        'erty',
        '../../mode',
        'tenantId',
        '1537184pMgXPf',
        'ls/Tag',
        '70SxOWVj',
        'defineProp',
        'where',
        '15958VceXmk',
        '3887937rjAVVt',
        '12YjKlaj',
        '../../erro',
        '__esModule',
        'ERR_TAG_CO',
        '295693gvrVYD',
        '1981679jsrYTC',
        '16fuXoYv',
        'fault',
        'fgQhd',
        'NTACTS_EXI',
        '10811411ofAywQ',
        '6SaVpoU',
        'findOne',
        '24yPkvGq',
        '1781510GvDRhS',
        '189PzVPTK',
        'STS',
        'dpnGW',
        '__importDe',
        'rs/AppErro'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[q(0x15a) + q(0x14f)] || function (c) {
    const s = q;
    return c && c[s(0x14a)] ? c : { 'default': c };
};
const k = {};
k[r(0x13b)] = !![], Object[r(0x144) + q(0x13e)](exports, q(0x14a), k);
const Tag_1 = __importDefault(require(q(0x13f) + r(0x142))), AppError_1 = __importDefault(require(q(0x149) + r(0x15b) + 'r')), DeleteTagService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = q, u = q, h = {};
        h[t(0x150)] = u(0x13d) + u(0x139), h[u(0x159)] = u(0x14b) + u(0x151) + u(0x158);
        const i = h, j = {};
        j['id'] = f, j[u(0x140)] = g;
        const l = {};
        l[t(0x145)] = j;
        const m = await Tag_1[t(0x13a)][u(0x154)](l);
        if (!m)
            throw new AppError_1[(t(0x13a))](i[t(0x150)], 0x19 * -0x45 + -0x49 + 0x44d * 0x2);
        try {
            await m[t(0x13c)]();
        } catch (n) {
            throw new AppError_1[(u(0x13a))](i[t(0x159)], 0x3 * 0x44f + 0x1dcc + -0x2925);
        }
    };
exports[q(0x13a)] = DeleteTagService;