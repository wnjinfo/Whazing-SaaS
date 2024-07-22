'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x1fa)) / (0x12f7 * 0x2 + 0xd * -0x14 + 0x24e9 * -0x1) + parseInt(o(0x1ed)) / (-0x10d2 + 0x1 * 0x1df3 + -0x1 * 0xd1f) * (parseInt(o(0x1fd)) / (-0xa3a + 0x9 * -0x322 + 0x266f)) + -parseInt(o(0x1ec)) / (-0x89d + -0x141 * -0x15 + -0x11b4) + -parseInt(n(0x1f6)) / (-0x15ca + 0x3 * 0x6c4 + 0x183) * (-parseInt(n(0x1e5)) / (0x1af4 + -0x15af * -0x1 + -0x309d)) + -parseInt(o(0x1ff)) / (-0x208c * 0x1 + 0x19e7 + 0xf4 * 0x7) + parseInt(n(0x1fc)) / (-0x5e + -0x1051 + 0x10b7) + -parseInt(n(0x1e6)) / (-0x5 * -0x107 + -0x1a1b * -0x1 + 0x1f35 * -0x1) * (-parseInt(n(0x1f0)) / (0x57e + 0x1dd0 + -0x2344));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xcec83 + -0xbd6cd + 0xb0f9a));
function a() {
    const u = [
        'full_name',
        'erty',
        '10IZOxrB',
        'ateContact',
        '__esModule',
        'defineProp',
        'default',
        'tYBcT',
        '5ALSoyw',
        'thread',
        'profile_pi',
        '__importDe',
        '408466DyEwIG',
        'Service',
        '769744JUpFWX',
        '279933JDzlHl',
        'reateOrUpd',
        '10451133lLjfFe',
        'username',
        'value',
        'users',
        'instagram',
        '8106744PWVTAB',
        '10812861RzQtLz',
        'Services/C',
        'fault',
        '../Contact',
        'jgyVb',
        'c_url',
        '551696MgmOUM',
        '4qQpCRy'
    ];
    a = function () {
        return u;
    };
    return a();
}
var __importDefault = this && this[p(0x1f9) + q(0x1e8)] || function (c) {
    const r = q;
    return c && c[r(0x1f2)] ? c : { 'default': c };
};
const k = {};
k[q(0x1e2)] = !![], Object[p(0x1f3) + p(0x1ef)](exports, p(0x1f2), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xfcc + 0x1 * -0x20dd + 0x12f3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const CreateOrUpdateContactService_1 = __importDefault(require(q(0x1e9) + q(0x1e7) + p(0x1fe) + q(0x1f1) + p(0x1fb))), InstagramVerifyContact = async (c, d, e) => {
        const s = q, t = p, f = {
                'tYBcT': function (l, m) {
                    return l(m);
                },
                'jgyVb': s(0x1e4)
            };
        let g, h;
        try {
            h = c[s(0x1f7)]?.[t(0x1e3)][0x2445 + -0x50f * 0x1 + 0x63e * -0x5], g = h[t(0x1f8) + t(0x1eb)];
        } catch (l) {
            g = undefined;
        }
        const i = {
                'name': h?.[t(0x1ee)] || h[s(0x200)] || '',
                'number': '',
                'profilePicUrl': g ? f[s(0x1f5)](String, g) : undefined,
                'tenantId': e,
                'pushname': h[t(0x200)] || '',
                'isUser': !![],
                'isWAContact': ![],
                'isGroup': ![],
                'origem': f[s(0x1ea)],
                'instagramPK': h['pk']
            }, j = await (0xec * -0x25 + 0x250d + 0x2f1 * -0x1, CreateOrUpdateContactService_1[t(0x1f4)])(i);
        return j;
    };
exports[p(0x1f4)] = InstagramVerifyContact;