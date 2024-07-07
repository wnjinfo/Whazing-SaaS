'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x9c)) / (0xeca + -0xc * -0x285 + 0x5 * -0x901) * (parseInt(p(0x96)) / (0x115d + -0x2df * 0x3 + 0x45f * -0x2)) + -parseInt(p(0x8b)) / (0xd18 + 0x28a + -0xf9f) + parseInt(p(0x87)) / (0x419 + -0x3 * -0x5ff + -0x71 * 0x32) * (-parseInt(o(0x98)) / (-0x21ab + 0x1 * -0x110b + 0x32bb)) + -parseInt(p(0xa2)) / (-0xd2 * 0x5 + 0xcf4 + -0x71 * 0x14) + -parseInt(p(0x95)) / (-0x2216 + -0xa7 + 0x22c4) * (-parseInt(p(0xa1)) / (-0x1 * -0x1ae3 + 0xf72 + -0x2a4d)) + parseInt(o(0xa0)) / (-0x188b + -0xb4d + -0xb * -0x343) * (parseInt(o(0x93)) / (-0x18e7 + 0x798 + -0x1 * -0x1159)) + parseInt(p(0x82)) / (-0x10bf + -0x148 + -0x12 * -0x101) * (parseInt(p(0x9d)) / (-0x2101 + 0xbf2 + 0x3 * 0x709));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x325 * 0x6d9 + 0xcc369 + -0x16b600));
var __importDefault = this && this[q(0x8d) + r(0x88)] || function (c) {
    const s = q;
    return c && c[s(0x97)] ? c : { 'default': c };
};
const k = {};
k[r(0x85)] = !![], Object[r(0x92) + q(0x8f)](exports, r(0x97), k);
const Tag_1 = __importDefault(require(q(0x8a) + r(0x86))), AppError_1 = __importDefault(require(r(0x8e) + q(0xa3) + 'r')), DeleteTagService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = r, u = r, h = {};
        h[t(0x9b)] = t(0x91) + u(0x8c), h[t(0x9f)] = t(0x89) + t(0x94) + u(0x83);
        const i = h, j = {};
        j['id'] = f, j[u(0x90)] = g;
        const l = {};
        l[u(0x9e)] = j;
        const m = await Tag_1[t(0x99)][t(0x84)](l);
        if (!m)
            throw new AppError_1[(t(0x99))](i[u(0x9b)], -0x4a3 * -0x2 + -0x5 * 0x42d + -0x465 * -0x3);
        try {
            await m[u(0x9a)]();
        } catch (n) {
            throw new AppError_1[(t(0x99))](i[u(0x9f)], -0x230a + 0x2020 + -0x73 * -0xa);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2dc + 0x54d * -0x3 + 0x1345 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const v = [
        '../../erro',
        'erty',
        'tenantId',
        'ERR_NO_TAG',
        'defineProp',
        '5125130WEUQnh',
        'NTACTS_EXI',
        '5243DrSncF',
        '22332EHNVfX',
        '__esModule',
        '15bguEda',
        'default',
        'destroy',
        'ihxDN',
        '39UHuWHF',
        '7102392mSjYpE',
        'where',
        'mMRge',
        '9dLCnPY',
        '2968ryYkfl',
        '3427590fqQdCn',
        'rs/AppErro',
        '33QpDSEF',
        'STS',
        'findOne',
        'value',
        'ls/Tag',
        '262424UZAKgq',
        'fault',
        'ERR_TAG_CO',
        '../../mode',
        '1809585KQuIIx',
        '_FOUND',
        '__importDe'
    ];
    a = function () {
        return v;
    };
    return a();
}
exports[r(0x99)] = DeleteTagService;