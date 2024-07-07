'use strict';
const p = b, q = b;
function a() {
    const u = [
        'username',
        '378748SMFxFJ',
        'FxbVT',
        '8048608VXCrdu',
        '20214tDIwjZ',
        'VvkFN',
        '21OnFFKY',
        '207QMwUmu',
        '764130VxlHGI',
        'default',
        'defineProp',
        '../Contact',
        'fault',
        '__importDe',
        'reateOrUpd',
        '742aFamRv',
        'instagram',
        'erty',
        'profile_pi',
        'ateContact',
        '578776YgAgwa',
        '1128980HjeDdm',
        'full_name',
        '__esModule',
        'Service',
        '1451054wsTFEm',
        'thread',
        'Services/C',
        'c_url',
        'value',
        'users'
    ];
    a = function () {
        return u;
    };
    return a();
}
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x1af)) / (-0x52 * -0x39 + -0x74f * 0x2 + 0x7 * -0x85) + -parseInt(o(0x1a8)) / (0x125 * 0x7 + -0x1606 * -0x1 + -0x1e07) + -parseInt(n(0x1b4)) / (0x42 + -0x3 * -0x64d + 0x56 * -0x39) * (parseInt(n(0x1a3)) / (0xbb7 + 0x8 * 0x2d + 0x37 * -0x3d)) + parseInt(n(0x1a4)) / (-0x2 * -0x505 + 0x17 * 0x7a + -0x29 * 0x83) + -parseInt(o(0x1b2)) / (-0x60c + -0x7 * 0x3f5 + 0x6c1 * 0x5) * (parseInt(o(0x19e)) / (0x155 * -0x1 + -0x2ff + 0x45b)) + parseInt(o(0x1b1)) / (0x233 * -0xc + 0x48 * -0x83 + 0x3f44) + parseInt(n(0x196)) / (-0x1 * -0x287 + 0x1 * 0x1ab1 + -0x1d2f) * (parseInt(n(0x197)) / (-0x25eb + 0x6f1 + 0x4 * 0x7c1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2695e + 0x71 * -0xd3a + 0xb4970));
var __importDefault = this && this[p(0x19c) + q(0x19b)] || function (c) {
    const r = q;
    return c && c[r(0x1a6)] ? c : { 'default': c };
};
const k = {};
k[p(0x1ac)] = !![], Object[p(0x199) + q(0x1a0)](exports, q(0x1a6), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x17 * -0x1b + -0xe6e + -0x1271 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const CreateOrUpdateContactService_1 = __importDefault(require(p(0x19a) + p(0x1aa) + p(0x19d) + p(0x1a2) + p(0x1a7))), InstagramVerifyContact = async (c, d, e) => {
        const s = p, t = q, f = {
                'VvkFN': function (l, m) {
                    return l(m);
                },
                'FxbVT': s(0x19f)
            };
        let g, h;
        try {
            h = c[t(0x1a9)]?.[s(0x1ad)][0x1392 + -0x3 * -0x277 + -0x1af7], g = h[t(0x1a1) + t(0x1ab)];
        } catch (l) {
            g = undefined;
        }
        const i = {
                'name': h?.[t(0x1a5)] || h[s(0x1ae)] || '',
                'number': '',
                'profilePicUrl': g ? f[t(0x1b3)](String, g) : undefined,
                'tenantId': e,
                'pushname': h[t(0x1ae)] || '',
                'isUser': !![],
                'isWAContact': ![],
                'isGroup': ![],
                'origem': f[t(0x1b0)],
                'instagramPK': h['pk']
            }, j = await (0xee3 + 0x3 * -0x583 + 0x1a6, CreateOrUpdateContactService_1[t(0x198)])(i);
        return j;
    };
exports[q(0x198)] = InstagramVerifyContact;