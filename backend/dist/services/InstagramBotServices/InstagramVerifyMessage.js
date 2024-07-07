'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0xbc)) / (-0x1 * 0x1510 + 0xd4f * 0x2 + 0x58d * -0x1) * (parseInt(n(0xb7)) / (0x1 * -0xd8a + 0x1019 + -0x28d)) + -parseInt(n(0xbb)) / (0x4e9 * -0x3 + -0xb9 * 0x3 + -0x27 * -0x6f) * (parseInt(n(0xc8)) / (0x126d * -0x1 + -0x4 * -0x7ff + 0x1 * -0xd8b)) + -parseInt(n(0xaf)) / (0x25 * 0x3 + 0x2148 + -0x21b2) * (parseInt(n(0xc2)) / (0x1ea6 + 0x1b38 + -0x39d8)) + -parseInt(n(0xcf)) / (0x806 + 0x1da9 + -0x25a8) + parseInt(n(0xb4)) / (-0x31c + 0x15c6 * 0x1 + 0x5 * -0x3ba) + -parseInt(n(0xc4)) / (-0xfce + -0x1 * 0x1872 + 0x2849) + parseInt(o(0xc0)) / (0x1845 + -0x58d * 0x2 + 0x1 * -0xd21) * (parseInt(n(0xc7)) / (-0x995 + -0xb1e + 0x24e * 0x9));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xd9 * -0x17f + 0x7 * 0xcfb3 + -0x122b * -0x5));
var __importDefault = this && this[p(0xcb) + q(0xb3)] || function (c) {
    const r = q;
    return c && c[r(0xc9)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2df * -0xa + 0x1ed + 0x1b78 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
function a() {
    const u = [
        'fault',
        '1562024wSFxNs',
        'getTime',
        'geService',
        '62iwIuxT',
        '../Message',
        'text',
        'defineProp',
        '7032DRZMWm',
        '17467AlxKNu',
        'chat',
        'received',
        'value',
        '10ftudJI',
        'messageDat',
        '6DAEsnI',
        'nEQke',
        '954936BiRIiu',
        'erty',
        'item_id',
        '13956789HVRXeu',
        '624IakUWp',
        '__esModule',
        'update',
        '__importDe',
        'cJfqP',
        'RnXur',
        'default',
        '948395pjZdwq',
        'tenantId',
        'reateMessa',
        '14905zEkcLo',
        'Services/C',
        'IWTMg',
        'message'
    ];
    a = function () {
        return u;
    };
    return a();
}
k[p(0xbf)] = !![], Object[q(0xba) + p(0xc5)](exports, p(0xc9), k);
const CreateMessageService_1 = __importDefault(require(q(0xb8) + q(0xb0) + q(0xd1) + q(0xb6))), VerifyMessage = async (d, e, f, g) => {
        const s = q, t = p, h = {
                'RnXur': function (l, m) {
                    return l(m);
                },
                'nEQke': s(0xbd),
                'IWTMg': s(0xbe),
                'cJfqP': function (l, m) {
                    return l || m;
                }
            }, i = {
                'messageId': h[s(0xcd)](String, d[s(0xb2)][t(0xc6)]),
                'ticketId': f['id'],
                'contactId': e ? undefined : g['id'],
                'body': d[s(0xb2)][s(0xb9)],
                'fromMe': e,
                'read': e,
                'mediaType': h[t(0xc3)],
                'quotedMsgId': '',
                'timestamp': new Date()[t(0xb5)](),
                'status': h[t(0xb1)]
            };
        await f[t(0xca)]({
            'lastMessage': d[t(0xb2)][s(0xb9)],
            'lastMessageAt': new Date()[t(0xb5)](),
            'answered': h[s(0xcc)](e, ![])
        });
        const j = {};
        j[s(0xc1) + 'a'] = i, j[t(0xd0)] = f[s(0xd0)], await (-0x43 * 0x50 + -0x1918 + -0x3 * -0xf58, CreateMessageService_1[s(0xce)])(j);
    };
exports[q(0xce)] = VerifyMessage;