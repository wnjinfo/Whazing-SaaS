'use strict';
const o = b, p = b;
function a() {
    const t = [
        '105WYsmTE',
        'getFileLin',
        '__importDe',
        'ateContact',
        'erty',
        'last_name',
        'reateOrUpd',
        'default',
        '81416YRsJTR',
        'kShMH',
        '_id',
        'getChat',
        'defineProp',
        '676646whqjLk',
        'value',
        '8aEVcNI',
        '671730zgYEUU',
        'Service',
        '63xJlFNT',
        'username',
        '308742mYMcKc',
        '../Contact',
        '860150QVZqnm',
        'Services/C',
        'photo',
        'telegram',
        '1475745mRRPVO',
        'first_name',
        '__esModule',
        'small_file',
        '18939844jnDvkd',
        'CwhKa',
        'fault',
        '1wgQGig'
    ];
    a = function () {
        return t;
    };
    return a();
}
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0xa9)) / (0x65 * 0x1c + -0x9a0 + -0x16b) * (-parseInt(m(0x95)) / (0x1 * -0x48a + 0xc2 * -0x7 + 0x61 * 0x1a)) + -parseInt(n(0x9c)) / (-0x2338 + -0x2164 * 0x1 + 0x449f * 0x1) + -parseInt(n(0x97)) / (-0x7 * 0x3d + -0x117 + 0x2c6 * 0x1) * (parseInt(m(0xa2)) / (0x3d * -0x52 + -0x17f7 + 0x26b * 0x12)) + parseInt(n(0x98)) / (0x1cb9 + 0x27 * -0x15 + -0x1980) + parseInt(n(0xaa)) / (-0x982 * 0x1 + 0x207f * 0x1 + -0x16f6) * (parseInt(m(0x90)) / (0x334 + -0x265c + 0x2330 * 0x1)) + -parseInt(m(0x9a)) / (0x29 * 0xe6 + -0xb40 + -0x198d) * (parseInt(m(0x9e)) / (-0x59 * -0x2c + -0xdfa + -0x148)) + parseInt(n(0xa6)) / (-0x17c1 + -0x1f * -0x11f + -0xaf5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6b448 + -0x3eaa1 + 0x2985f));
var __importDefault = this && this[o(0x8a) + p(0xa8)] || function (c) {
    const q = o;
    return c && c[q(0xa4)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x19a0 + -0x5b8 + -0x135f);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[o(0x96)] = !![], Object[p(0x94) + p(0x8c)](exports, p(0xa4), k);
const CreateOrUpdateContactService_1 = __importDefault(require(p(0x9d) + p(0x9f) + o(0x8e) + o(0x8b) + o(0x99))), VerifyContact = async (c, d) => {
        const r = o, s = p, e = {
                'CwhKa': function (j, l) {
                    return j(l);
                },
                'kShMH': r(0xa1)
            };
        let f;
        const g = await c[r(0x93)]();
        try {
            f = g[s(0xa0)]?.[s(0xa5) + r(0x92)] ? await c[s(0xa1)][r(0x89) + 'k'](g[r(0xa0)]?.[r(0xa5) + r(0x92)]) : undefined;
        } catch (j) {
            f = undefined;
        }
        const h = {
                'name': g[r(0xa3)] + '\x20' + g[s(0x8d)] || g[r(0x9b)] || '',
                'number': '',
                'profilePicUrl': f ? e[r(0xa7)](String, f) : undefined,
                'tenantId': d,
                'pushname': g[r(0x9b)] || '',
                'isUser': !![],
                'isWAContact': ![],
                'isGroup': ![],
                'origem': e[r(0x91)],
                'telegramId': g['id']
            }, i = await (0x1cdf + -0x2634 + 0x955, CreateOrUpdateContactService_1[s(0x8f)])(h);
        return i;
    };
exports[o(0x8f)] = VerifyContact;