'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x35d + 0xb5 * -0x17 + 0xd6b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(w(0x88)) / (-0x272 * 0x1 + -0x1 * -0x1b37 + -0x18c4) * (-parseInt(x(0x8c)) / (0x2 * -0x1f7 + -0x793 + 0x1a5 * 0x7)) + -parseInt(w(0xb4)) / (-0x2028 + -0x10 * -0x1e9 + 0x1 * 0x19b) + -parseInt(w(0x89)) / (0x1d10 + -0x1bcd + -0x13f) + parseInt(w(0x85)) / (-0xab7 + 0x985 + -0x137 * -0x1) + parseInt(x(0xa2)) / (-0x1ddf + -0xb66 + -0x1f * -0x155) + -parseInt(x(0xa1)) / (0x1eaa + 0x1c31 + 0x5 * -0xbc4) * (parseInt(x(0xb6)) / (0x1e01 + 0x1ad9 + -0x38d2)) + parseInt(x(0x93)) / (-0x3 * 0xd3 + -0x10bf + 0x9f * 0x1f);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2 * -0x2f1af + -0x1 * -0x187859 + 0x47 * -0x1426));
var __importDefault = this && this[y(0xb5) + z(0x92)] || function (c) {
    const A = y;
    return c && c[A(0x99)] ? c : { 'default': c };
};
function a() {
    const D = [
        'ticket',
        '14QfctQp',
        '4145682knVhBY',
        'mediaUrl',
        'tenantId',
        'geService',
        'HJDzI',
        'erty',
        'msg',
        '../Message',
        'includes',
        'update',
        'default',
        'chat',
        'reateMessa',
        'contactId',
        'getTime',
        'value',
        'status',
        'template',
        '4752678IuztIF',
        '__importDe',
        '216440QhmzLg',
        'type',
        'sended',
        '8280140HyOAuR',
        './GetMedia',
        'messageId',
        '6mIfcMB',
        '6722688QsuKiX',
        'DAxRV',
        'wabaMediaI',
        '269634IKbUPs',
        'received',
        'VNzgy',
        'OOcEj',
        'channel',
        'text',
        'fault',
        '9132300NPbsFp',
        'Waba360',
        'timestamp',
        'defineProp',
        'read',
        'Services/C',
        '__esModule',
        'fromMe',
        'KygjD',
        'ticketId',
        'body',
        'messageDat',
        'mediaType'
    ];
    a = function () {
        return D;
    };
    return a();
}
const k = {};
k[y(0xb1)] = !![], Object[y(0x96) + z(0xa7)](exports, z(0x99), k);
const CreateMessageService_1 = __importDefault(require(y(0xa9) + y(0x98) + z(0xae) + z(0xa5))), GetMediaWaba360_1 = __importDefault(require(y(0x86) + z(0x94))), VerifyMediaMessage = async (g, h, i, j) => {
        const B = y, C = y, l = {};
        l[B(0xa6)] = C(0x91), l[B(0x9b)] = C(0xad), l[B(0x8a)] = C(0xb3), l[C(0x8e)] = B(0xb8), l[B(0x8f)] = C(0x8d);
        const m = l;
        let n;
        try {
            const t = {};
            t[B(0x90)] = g, t[B(0xa8)] = h, t[C(0xa0)] = i, n = await (-0x3c1 + 0x1d96 + 0x11 * -0x185, GetMediaWaba360_1[B(0xac)])(t);
        } catch (u) {
        }
        let o;
        if (![
                m[B(0xa6)],
                m[C(0x9b)],
                m[B(0x8a)]
            ][B(0xaa)](h[B(0xb7)])) {
            const v = h;
            o = v[h[B(0xb7)]]['id'];
        }
        const p = {};
        p[B(0x87)] = h['id'] || '', p[C(0x9c)] = i['id'], p[C(0xaf)] = h[B(0x9a)] ? undefined : j['id'], p[C(0x9d)] = h?.[B(0x91)]?.[C(0x9d)] || n || '', p[B(0x9a)] = h[C(0x9a)], p[B(0x97)] = h[B(0x9a)], p[C(0xa3)] = n, p[B(0x9f)] = h[B(0xb7)], p[B(0x95)] = +h[C(0x95)], p[B(0x8b) + 'd'] = o, p[B(0xb2)] = h[C(0x9a)] ? m[C(0x8e)] : m[C(0x8f)];
        const q = p;
        await i[B(0xab)]({
            'lastMessage': h?.[B(0x91)]?.[C(0x9d)] || n,
            'lastMessageAt': new Date()[B(0xb0)](),
            'answered': h[B(0x9a)] || ![]
        });
        const r = {};
        r[C(0x9e) + 'a'] = q, r[B(0xa4)] = i[B(0xa4)];
        const s = await (0x52f * 0x3 + 0x95b + -0x18e8, CreateMessageService_1[C(0xac)])(r);
        return s;
    };
exports[y(0xac)] = VerifyMediaMessage;