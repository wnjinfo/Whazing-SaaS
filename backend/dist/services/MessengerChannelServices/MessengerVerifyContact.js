'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x14c)) / (0x1400 * 0x1 + -0x7fd + 0x601 * -0x2) + parseInt(q(0x14d)) / (-0x1e0f + 0x53 * -0x70 + 0x4261 * 0x1) * (-parseInt(q(0x144)) / (0xbf9 + 0xb57 + 0x5 * -0x4a9)) + -parseInt(q(0x150)) / (0x1413 * 0x1 + -0x247f + 0x41c * 0x4) + -parseInt(r(0x155)) / (-0x1b28 + 0xca4 * -0x1 + 0x27d1 * 0x1) + parseInt(r(0x143)) / (-0x7 * 0xed + -0x2387 + 0x2a08) * (-parseInt(q(0x158)) / (-0x11f * 0x1 + -0x20c * 0xa + 0x159e)) + parseInt(q(0x15b)) / (0x92d + -0x3 * -0xc73 + -0x2e7e) + parseInt(q(0x162)) / (0xa * -0x23d + 0x26 * 0x70 + 0x1 * 0x5cb);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x21 * -0x3a1 + -0x15a9c1 + 0x215db0));
var __importDefault = this && this[s(0x15e) + s(0x151)] || function (c) {
    const u = t;
    return c && c[u(0x156)] ? c : { 'default': c };
};
const k = {};
k[s(0x159)] = !![], Object[s(0x15a) + s(0x15f)](exports, s(0x156), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x672 * 0x5 + -0x15c9 + 0x3744);
        let h = e[f];
        return h;
    }, b(c, d);
}
const CreateOrUpdateContactService_1 = __importDefault(require(s(0x14f) + t(0x153) + s(0x157) + t(0x160) + s(0x149))), MessengerVerifyContact = async (e, f, g) => {
        const v = s, w = s, h = {};
        h[v(0x14b)] = w(0x145);
        const i = h, j = await f[w(0x141)](e['id']), l = j?.[w(0x15c) + w(0x14e)] || j?.[v(0x15c)] || undefined, m = j[w(0x161)] || j[w(0x147)] + '\x20' + j[w(0x165)] || '', n = {};
        n[v(0x161)] = m, n[w(0x152)] = j['id'], n[v(0x154) + 'd'] = j['id'], n[v(0x15c) + v(0x15d)] = l, n[v(0x146)] = g, n[w(0x14a)] = m, n[w(0x163)] = ![], n[v(0x166) + 't'] = !![], n[w(0x148)] = ![], n[w(0x164)] = i[w(0x14b)];
        const o = n, p = await (0x52 * -0x6d + 0x16f + 0x1 * 0x217b, CreateOrUpdateContactService_1[v(0x142)])(o);
        return p;
    };
function a() {
    const x = [
        'Services/C',
        'messengerI',
        '1467980bIKzDU',
        '__esModule',
        'reateOrUpd',
        '14bPGOAU',
        'value',
        'defineProp',
        '5920176yIDpMS',
        'profilePic',
        'Url',
        '__importDe',
        'erty',
        'ateContact',
        'name',
        '14228604CzdIyt',
        'isUser',
        'origem',
        'lastName',
        'isWAContac',
        'getPersona',
        'default',
        '4048194xkUUKj',
        '336540qquChh',
        'messenger',
        'tenantId',
        'firstName',
        'isGroup',
        'Service',
        'pushname',
        'DZXpI',
        '1236825NRbDKs',
        '2zJRvxU',
        'tureUrl',
        '../Contact',
        '4265308azdRjT',
        'fault',
        'number'
    ];
    a = function () {
        return x;
    };
    return a();
}
exports[s(0x142)] = MessengerVerifyContact;