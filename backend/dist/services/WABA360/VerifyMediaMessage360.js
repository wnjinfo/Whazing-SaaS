'use strict';
function a() {
    const D = [
        'TKkpD',
        '2358NzWkch',
        '39738hQxNAM',
        'Services/C',
        'contactId',
        'defineProp',
        'wabaMediaI',
        '__importDe',
        'timestamp',
        'tenantId',
        'getTime',
        '619005xUaMYC',
        'fault',
        'ticket',
        'type',
        'text',
        '../Message',
        'msg',
        '__esModule',
        'mediaUrl',
        'reateMessa',
        'Waba360',
        'update',
        '320ZlgQla',
        'received',
        'fromMe',
        'chat',
        'status',
        'tzKQJ',
        'rvSsx',
        'geService',
        'default',
        '113067MurjLm',
        'body',
        'template',
        'mediaType',
        '716271XkIidw',
        'JoQTS',
        './GetMedia',
        'channel',
        'value',
        'sended',
        'messageId',
        'includes',
        'erty',
        '4179mzehYH',
        'read',
        'messageDat',
        'ticketId',
        '136612ETdBGN',
        'IaIBM',
        '543968sSaMFp'
    ];
    a = function () {
        return D;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x7 * 0x563 + 0x2547 * 0x1 + 0x146);
        let h = e[f];
        return h;
    }, b(c, d);
}
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(w(0x103)) / (0x1 * -0x13f1 + -0x1915 + -0x1 * -0x2d07) + parseInt(x(0x108)) / (0x908 + -0x1d * -0x109 + -0x270b) + parseInt(w(0xf6)) / (-0x8a5 * -0x1 + 0x41 * 0x73 + -0x25d5) + parseInt(x(0x105)) / (-0x1 * 0x40f + -0x1e7 * 0x5 + 0xd96) + -parseInt(w(0xdd)) / (-0xa1 * -0x3e + 0x1fc1 + -0x46ba) + -parseInt(w(0x107)) / (0x3 * 0x481 + 0x2 * 0xa07 + -0x1 * 0x218b) * (-parseInt(w(0xff)) / (0xfb * -0x1 + -0xa35 + 0x1d * 0x63)) + parseInt(w(0xe9)) / (0x12af * -0x1 + 0x13f * 0x1 + 0x1178 * 0x1) * (-parseInt(w(0xf2)) / (-0x10 * 0x115 + 0x16d3 + 0x2 * -0x2bd));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x504 * 0x17 + 0x1 * 0x2627 + 0x18787));
var __importDefault = this && this[y(0xd9) + y(0xde)] || function (c) {
    const A = y;
    return c && c[A(0xe4)] ? c : { 'default': c };
};
const k = {};
k[y(0xfa)] = !![], Object[y(0x10b) + y(0xfe)](exports, z(0xe4), k);
const CreateMessageService_1 = __importDefault(require(y(0xe2) + z(0x109) + z(0xe6) + z(0xf0))), GetMediaWaba360_1 = __importDefault(require(y(0xf8) + z(0xe7))), VerifyMediaMessage = async (g, h, i, j) => {
        const B = z, C = z, l = {};
        l[B(0xf7)] = C(0xe1), l[B(0x104)] = C(0xec), l[B(0x106)] = C(0xf4), l[B(0xef)] = C(0xfb), l[B(0xee)] = B(0xea);
        const m = l;
        let n;
        try {
            const t = {};
            t[C(0xf9)] = g, t[B(0xe3)] = h, t[B(0xdf)] = i, n = await (0x112b + 0x1 * -0x2517 + 0x1e * 0xaa, GetMediaWaba360_1[B(0xf1)])(t);
        } catch (u) {
        }
        let o;
        if (![
                m[B(0xf7)],
                m[C(0x104)],
                m[B(0x106)]
            ][C(0xfd)](h[B(0xe0)])) {
            const v = h;
            o = v[h[C(0xe0)]]['id'];
        }
        const p = {};
        p[B(0xfc)] = h['id'] || '', p[C(0x102)] = i['id'], p[B(0x10a)] = h[B(0xeb)] ? undefined : j['id'], p[C(0xf3)] = h?.[C(0xe1)]?.[B(0xf3)] || n || '', p[C(0xeb)] = h[B(0xeb)], p[B(0x100)] = h[B(0xeb)], p[C(0xe5)] = n, p[B(0xf5)] = h[C(0xe0)], p[C(0xda)] = +h[C(0xda)], p[C(0xd8) + 'd'] = o, p[C(0xed)] = h[C(0xeb)] ? m[B(0xef)] : m[C(0xee)];
        const q = p;
        await i[B(0xe8)]({
            'lastMessage': h?.[C(0xe1)]?.[B(0xf3)] || n,
            'lastMessageAt': new Date()[C(0xdc)](),
            'answered': h[C(0xeb)] || ![]
        });
        const r = {};
        r[C(0x101) + 'a'] = q, r[C(0xdb)] = i[C(0xdb)];
        const s = await (-0x26ce * 0x1 + 0xc92 + 0x49 * 0x5c, CreateMessageService_1[B(0xf1)])(r);
        return s;
    };
exports[y(0xf1)] = VerifyMediaMessage;