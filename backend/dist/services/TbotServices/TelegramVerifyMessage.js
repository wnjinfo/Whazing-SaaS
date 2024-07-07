'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0xa7)) / (0x1 * 0x2f9 + 0xe4 * -0xf + 0xa64) * (-parseInt(q(0xbd)) / (-0xb0d + -0x1a9f + 0x25ae)) + -parseInt(q(0xa8)) / (-0xaab * -0x1 + 0xbc * 0x1f + 0x8a * -0x3e) + -parseInt(r(0xc2)) / (-0x2 * 0x70b + -0x25e6 + 0x3400) + parseInt(r(0xba)) / (0x1543 * -0x1 + 0xd24 * 0x2 + 0x28 * -0x20) + parseInt(r(0xb4)) / (0x4 * 0x95f + 0xa04 + -0x2 * 0x17bd) + parseInt(r(0xc8)) / (-0x25ba + -0xcc6 * 0x1 + 0x3287) * (parseInt(q(0xac)) / (-0x1b1a * -0x1 + 0x5b6 + -0x20c8)) + parseInt(q(0xb1)) / (0x2 * -0x732 + -0x359 * 0xa + 0x2fe7);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x18f99 + -0x1 * 0x2b06a + 0x9f4b8));
var __importDefault = this && this[s(0xb8) + t(0xb3)] || function (c) {
    const u = s;
    return c && c[u(0xc1)] ? c : { 'default': c };
};
const k = {};
k[s(0xce)] = !![], Object[s(0xb6) + t(0xbe)](exports, s(0xc1), k);
const getQuotedForMessageId_1 = __importDefault(require(s(0xa6) + t(0xae) + s(0xc4) + t(0xd1))), CreateMessageService_1 = __importDefault(require(s(0xca) + t(0xbc) + t(0xb5) + t(0xab))), VerifyMessage = async (d, e, f, g) => {
        const v = t, w = t, h = {
                'iBWln': function (o, p) {
                    return o && p;
                },
                'YziML': function (o, p) {
                    return o(p);
                },
                'PJilO': v(0xb0),
                'eygcn': function (o, p) {
                    return o * p;
                },
                'kADWf': v(0xc6),
                'IfpyA': function (o, p) {
                    return o || p;
                }
            };
        let i, j = {};
        i = d?.[v(0xc3)], j = d?.[w(0xc5)];
        h[v(0xcb)](!i, j) && (i = j?.[w(0xd0) + v(0xcc)]);
        let l;
        if (i?.[w(0xc7) + v(0xc0)]?.[w(0xad)]) {
            const o = await (0x200a * -0x1 + -0x1da5 * 0x1 + 0x3daf * 0x1, getQuotedForMessageId_1[w(0xc9)])(i[w(0xc7) + v(0xc0)][v(0xad)], f[v(0xb2)]);
            l = o?.['id'] || undefined;
        }
        const m = {
            'messageId': h[w(0xcf)](String, i?.[v(0xad)]),
            'ticketId': f['id'],
            'contactId': e ? undefined : g['id'],
            'body': i[w(0xaf)],
            'fromMe': e,
            'read': e,
            'mediaType': h[w(0xaa)],
            'quotedMsgId': l,
            'timestamp': h[v(0xb9)](+i[v(0xbf)], 0x8d1 * -0x1 + 0x2612 + 0x3f * -0x67),
            'status': h[w(0xbb)]
        };
        await f[w(0xc5)]({
            'lastMessage': i[w(0xaf)],
            'lastMessageAt': new Date()[v(0xa9)](),
            'answered': h[v(0xcd)](e, ![])
        });
        const n = {};
        n[v(0xb7) + 'a'] = m, n[w(0xb2)] = f[w(0xb2)], await (0x1c57 + -0xd69 + -0xeee, CreateMessageService_1[v(0xc9)])(n);
    };
function a() {
    const x = [
        'fault',
        '1239648QIuxCw',
        'reateMessa',
        'defineProp',
        'messageDat',
        '__importDe',
        'eygcn',
        '3095375QJhUcD',
        'kADWf',
        'Services/C',
        '2AXKelj',
        'erty',
        'date',
        'essage',
        '__esModule',
        '965816vxpQBI',
        'message',
        'tedForMess',
        'update',
        'received',
        'reply_to_m',
        '24458CGJHRP',
        'default',
        '../Message',
        'iBWln',
        'sage',
        'IfpyA',
        'value',
        'YziML',
        'edited_mes',
        'ageId',
        '../../help',
        '1115971IZOPeC',
        '2969613PkEONJ',
        'getTime',
        'PJilO',
        'geService',
        '2160QMQuMc',
        'message_id',
        'ers/getQuo',
        'text',
        'chat',
        '10410912SgOjRI',
        'tenantId'
    ];
    a = function () {
        return x;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xd62 * -0x1 + 0x9e1 + -0x7 * 0x33b);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[s(0xc9)] = VerifyMessage;