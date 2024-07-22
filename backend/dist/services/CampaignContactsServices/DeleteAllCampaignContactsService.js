'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(s(0xa5)) / (0xad * -0x1a + -0x7 * 0x143 + 0x1a68) * (-parseInt(t(0x9b)) / (-0x2200 + 0x49e + 0x1d64)) + -parseInt(t(0xa3)) / (0x55 * -0x59 + 0x435 + -0x195b * -0x1) * (-parseInt(t(0xb7)) / (-0x3 * 0xa00 + -0x1832 * 0x1 + 0x3636)) + parseInt(s(0xb1)) / (0x340 * 0x7 + -0xe38 + -0x883) * (parseInt(t(0xae)) / (0x45c + -0x709 + 0x2b3)) + -parseInt(s(0xac)) / (-0x3dd + -0x1f0b + 0x32d * 0xb) + -parseInt(t(0xad)) / (0x2 * -0xdae + -0x147f + 0x3af * 0xd) + -parseInt(s(0xa7)) / (0x21aa + 0x21d * 0x9 + -0x125 * 0x2e) + parseInt(s(0x9f)) / (-0xa * 0x277 + 0x83 * -0x6 + 0x26 * 0xbb) * (parseInt(t(0x9d)) / (-0x2681 + -0x6b * 0x32 + 0x3b72));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x85d * -0x1de + 0xff954 + 0x14b479 * -0x1));
var __importDefault = this && this[u(0xa2) + v(0xa8)] || function (c) {
    const w = v;
    return c && c[w(0xa9)] ? c : { 'default': c };
};
function a() {
    const z = [
        'nContacts',
        '430gmossr',
        'destroy',
        'campaignId',
        '__importDe',
        '606ZrnBit',
        'ERR_CAMPAI',
        '317959VmmHNv',
        'default',
        '12442968MxDFYt',
        'fault',
        '__esModule',
        'ACESSIBLE',
        'value',
        '1067780FqNKLq',
        '11341568Fgltpa',
        '54DHKmhr',
        '../../mode',
        'erty',
        '2235oieiDy',
        'GN_CONTACT',
        'S_NOT_EXIS',
        'rs/AppErro',
        'findOne',
        'where',
        '15412rQYpNV',
        'yldRF',
        'TS_OR_NOT_',
        'tenantId',
        'defineProp',
        'ls/Campaig',
        '../../erro',
        '4rKAIcw',
        'aGWQe',
        '900394VLFCTp'
    ];
    a = function () {
        return z;
    };
    return a();
}
const k = {};
k[u(0xab)] = !![], Object[u(0xbb) + v(0xb0)](exports, u(0xa9), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xe8f + 0x21 * 0x29 + -0x133e);
        let h = e[f];
        return h;
    }, b(c, d);
}
const CampaignContacts_1 = __importDefault(require(u(0xaf) + v(0xbc) + u(0x9e))), AppError_1 = __importDefault(require(u(0x9a) + u(0xb4) + 'r')), Campaign_1 = __importDefault(require(u(0xaf) + v(0xbc) + 'n')), DeleteAllCampaignContactsService = async ({
        campaignId: h,
        tenantId: i
    }) => {
        const x = u, y = v, j = {};
        j[x(0xb8)] = x(0xa4) + y(0xb2) + x(0xb3) + x(0xb9) + x(0xaa), j[x(0x9c)] = x(0xa4) + y(0xb2) + 'S';
        const l = j;
        try {
            const m = {};
            m['id'] = h, m[x(0xba)] = i;
            const n = {};
            n[y(0xb6)] = m;
            const o = await Campaign_1[x(0xa6)][x(0xb5)](n);
            if (o?.['id']) {
                const p = {};
                p[y(0xa1)] = h;
                const q = {};
                q[x(0xb6)] = p, await CampaignContacts_1[y(0xa6)][y(0xa0)](q);
            } else
                throw new AppError_1[(x(0xa6))](l[y(0xb8)], -0x1 * 0x305 + -0x1 * 0x240b + -0x1 * -0x28a4);
        } catch (r) {
            throw new AppError_1[(y(0xa6))](l[x(0x9c)], -0xed + 0x1 * -0xf7f + 0x1200);
        }
    };
exports[u(0xa6)] = DeleteAllCampaignContactsService;