'use strict';
const o = b, p = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xdd5 + 0x2656 + -0x3359);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0xec)) / (-0x2444 + 0x3 * -0x54f + 0x22 * 0x189) * (-parseInt(m(0xd7)) / (-0x1 * -0x2ad + -0x242c + 0x3b9 * 0x9)) + parseInt(m(0xe7)) / (0x1 * 0x14c1 + 0x1471 + -0x292f) * (parseInt(m(0xf3)) / (0x5 * 0x1da + -0x1433 + 0xaf5)) + -parseInt(m(0xe0)) / (-0xdf9 + 0x172a + -0x92c) + parseInt(m(0xd9)) / (0x1 * -0x25e7 + -0x38c * -0x3 + 0x1b49) * (-parseInt(m(0xdd)) / (-0x115 * 0x1 + 0x5ab * -0x3 + -0x1 * -0x121d)) + -parseInt(n(0xe1)) / (0x23a * 0x6 + 0x1 * -0x22 + -0xd32) * (parseInt(n(0xf4)) / (0x1b0d + -0x1279 * 0x1 + -0x88b)) + -parseInt(n(0xd3)) / (-0x4b1 * -0x2 + -0x884 + 0x4 * -0x35) + parseInt(n(0xea)) / (-0x26e3 + 0x19 * 0x161 + -0x1 * -0x475) * (parseInt(m(0xef)) / (-0x7e9 * 0x1 + 0x15f2 + -0x1 * 0xdfd));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x21a23 * -0x8 + 0x7e1ec + 0x14685a * 0x1));
var __importDefault = this && this[o(0xd6) + o(0xe3)] || function (c) {
    const q = o;
    return c && c[q(0xf1)] ? c : { 'default': c };
};
const k = {};
function a() {
    const t = [
        '__importDe',
        '533020ZwTrjF',
        'tZStz',
        '1236AASAWX',
        'getFileLin',
        'reateOrUpd',
        'photo',
        '39914rkIZeG',
        'getChat',
        'ateContact',
        '6804120YAnnLv',
        '72hplmdW',
        'telegram',
        'fault',
        'value',
        'erty',
        '_id',
        '3OxNzsY',
        'last_name',
        'Service',
        '22IAdKOr',
        'default',
        '2Dslbgv',
        'defineProp',
        'first_name',
        '24016332tWvlwU',
        'fHiSY',
        '__esModule',
        'small_file',
        '3659688RGkkIy',
        '123390MsFQAL',
        '../Contact',
        '9738800fYuGXR',
        'username',
        'Services/C'
    ];
    a = function () {
        return t;
    };
    return a();
}
k[p(0xe4)] = !![], Object[p(0xed) + p(0xe5)](exports, p(0xf1), k);
const CreateOrUpdateContactService_1 = __importDefault(require(p(0xd2) + p(0xd5) + o(0xdb) + p(0xdf) + o(0xe9))), VerifyContact = async (c, d) => {
        const r = p, s = o, e = {
                'tZStz': function (j, l) {
                    return j(l);
                },
                'fHiSY': r(0xe2)
            };
        let f;
        const g = await c[r(0xde)]();
        try {
            f = g[s(0xdc)]?.[s(0xf2) + s(0xe6)] ? await c[s(0xe2)][r(0xda) + 'k'](g[r(0xdc)]?.[r(0xf2) + s(0xe6)]) : undefined;
        } catch (j) {
            f = undefined;
        }
        const h = {
                'name': g[r(0xee)] + '\x20' + g[r(0xe8)] || g[s(0xd4)] || '',
                'number': '',
                'profilePicUrl': f ? e[s(0xd8)](String, f) : undefined,
                'tenantId': d,
                'pushname': g[r(0xd4)] || '',
                'isUser': !![],
                'isWAContact': ![],
                'isGroup': ![],
                'origem': e[r(0xf0)],
                'telegramId': g['id']
            }, i = await (0x1bed + -0x17e0 + 0x11 * -0x3d, CreateOrUpdateContactService_1[r(0xeb)])(h);
        return i;
    };
exports[o(0xeb)] = VerifyContact;