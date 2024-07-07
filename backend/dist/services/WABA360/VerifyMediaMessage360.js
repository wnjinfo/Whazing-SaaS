'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(w(0x18d)) / (-0x2bf + -0x3 * -0x85d + -0x1 * 0x1657) * (parseInt(w(0x19e)) / (0x1cf5 + -0xeae + -0xe45)) + -parseInt(x(0x17f)) / (-0x265b + 0x5 * -0x42c + 0x1d9d * 0x2) + parseInt(w(0x196)) / (-0xa58 + -0x18de + 0x233a) * (parseInt(w(0x17a)) / (0x248b + -0x5f9 * 0x1 + -0x1e8d * 0x1)) + -parseInt(w(0x199)) / (0x38 * -0x4 + -0x8 * -0x337 + 0xc69 * -0x2) * (-parseInt(x(0x18e)) / (0x14ae + -0x1503 + 0x5c * 0x1)) + parseInt(x(0x182)) / (-0x1e5 * 0x8 + -0x22c3 + -0x1 * -0x31f3) * (-parseInt(w(0x18b)) / (0x48 * 0x21 + -0x1eab + 0x392 * 0x6)) + -parseInt(w(0x198)) / (-0xd0f * 0x2 + -0x1 * -0x133b + 0x6ed) + parseInt(x(0x176)) / (0x23 * -0x5b + -0x1 * 0xb4a + 0x17c6);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0x11886 + -0x1 * -0xb3c39 + 0x1 * -0x46f83));
var __importDefault = this && this[y(0x189) + z(0x175)] || function (c) {
    const A = y;
    return c && c[A(0x185)] ? c : { 'default': c };
};
const k = {};
k[z(0x18a)] = !![], Object[z(0x19f) + z(0x184)](exports, z(0x185), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x867 * -0x1 + 0x2c9 * -0xd + 0x1d3b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const CreateMessageService_1 = __importDefault(require(z(0x173) + y(0x195) + z(0x194) + z(0x1a1))), GetMediaWaba360_1 = __importDefault(require(y(0x170) + z(0x174))), VerifyMediaMessage = async (g, h, i, j) => {
        const B = y, C = z, l = {};
        l[B(0x193)] = C(0x19b), l[B(0x16d)] = B(0x181), l[C(0x180)] = B(0x192), l[B(0x17c)] = B(0x1a2), l[C(0x190)] = B(0x17b);
        const m = l;
        let n;
        try {
            const t = {};
            t[B(0x16f)] = g, t[B(0x172)] = h, t[C(0x17e)] = i, n = await (-0x5f4 * -0x5 + 0x22d0 + -0x4094, GetMediaWaba360_1[C(0x18f)])(t);
        } catch (u) {
        }
        let o;
        if (![
                m[C(0x193)],
                m[B(0x16d)],
                m[C(0x180)]
            ][C(0x187)](h[C(0x183)])) {
            const v = h;
            o = v[h[B(0x183)]]['id'];
        }
        const p = {};
        p[B(0x191)] = h['id'] || '', p[C(0x19a)] = i['id'], p[C(0x186)] = h[C(0x178)] ? undefined : j['id'], p[B(0x19c)] = h?.[B(0x19b)]?.[B(0x19c)] || n || '', p[C(0x178)] = h[C(0x178)], p[B(0x171)] = h[B(0x178)], p[B(0x188)] = n, p[B(0x177)] = h[B(0x183)], p[C(0x1a0)] = +h[B(0x1a0)], p[C(0x16e) + 'd'] = o, p[B(0x197)] = h[C(0x178)] ? m[B(0x17c)] : m[C(0x190)];
        const q = p;
        await i[B(0x19d)]({
            'lastMessage': h?.[B(0x19b)]?.[C(0x19c)] || n,
            'lastMessageAt': new Date()[C(0x18c)](),
            'answered': h[B(0x178)] || ![]
        });
        const r = {};
        r[B(0x17d) + 'a'] = q, r[C(0x179)] = i[B(0x179)];
        const s = await (-0x1409 + -0x1 * -0x11a7 + 0x262, CreateMessageService_1[C(0x18f)])(r);
        return s;
    };
exports[z(0x18f)] = VerifyMediaMessage;
function a() {
    const D = [
        'mediaType',
        'fromMe',
        'tenantId',
        '34215MASIPM',
        'received',
        'nucVk',
        'messageDat',
        'ticket',
        '1964049JnLPJc',
        'vKVqf',
        'chat',
        '2118344TGlKkk',
        'type',
        'erty',
        '__esModule',
        'contactId',
        'includes',
        'mediaUrl',
        '__importDe',
        'value',
        '9qgkcLc',
        'getTime',
        '15581BkctyA',
        '7sKTijY',
        'default',
        'oIBIa',
        'messageId',
        'template',
        'DgVXj',
        'reateMessa',
        'Services/C',
        '48IKjIQU',
        'status',
        '4195900XcaLLG',
        '2862348PJYltZ',
        'ticketId',
        'text',
        'body',
        'update',
        '86btIXKK',
        'defineProp',
        'timestamp',
        'geService',
        'sended',
        'XmSvg',
        'wabaMediaI',
        'channel',
        './GetMedia',
        'read',
        'msg',
        '../Message',
        'Waba360',
        'fault',
        '20060513LkbHco'
    ];
    a = function () {
        return D;
    };
    return a();
}