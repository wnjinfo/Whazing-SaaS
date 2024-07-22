'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x1d9)) / (0x2567 * 0x1 + -0x1 * -0x118f + -0x36f5) * (parseInt(r(0x1e6)) / (0xaa8 + 0x85d * 0x1 + -0x1303)) + parseInt(r(0x1e7)) / (-0x2 * 0x8dd + -0x21e6 + 0x33a3 * 0x1) * (-parseInt(q(0x1e9)) / (-0x1 * -0x22da + 0x271 * 0xd + -0x4293)) + parseInt(q(0x1df)) / (-0x7ba + 0xdf5 + 0x9f * -0xa) * (-parseInt(r(0x1fc)) / (0x24 * -0x25 + 0x1438 + -0xefe)) + -parseInt(q(0x1e5)) / (-0x54a + 0x24f0 + -0x1f9f * 0x1) + -parseInt(q(0x1e4)) / (-0x115 * 0xa + 0x1fe6 + 0x543 * -0x4) * (parseInt(r(0x1f6)) / (-0x25d8 + -0x13ae + 0x5 * 0xb83)) + parseInt(r(0x1dd)) / (-0x291 * 0xb + 0xa * 0x3b9 + -0x1 * 0x8f5) + parseInt(r(0x1f7)) / (-0x2485 + -0x860 + 0x2cf * 0x10);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3e782 + -0x2 * -0x948c7 + -0x3ca05));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1b73 + -0x2 * 0x1369 + 0xd2f);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[s(0x1f3) + s(0x1f5)] || function (c) {
    const u = t;
    return c && c[u(0x1e3)] ? c : { 'default': c };
};
const k = {};
k[s(0x1de)] = !![], Object[s(0x1d0) + s(0x1d6)](exports, t(0x1e3), k);
const getQuotedForMessageId_1 = __importDefault(require(s(0x1d5) + s(0x1d8) + s(0x1db) + t(0x1d2))), CreateMessageService_1 = __importDefault(require(t(0x1f1) + s(0x1fb) + s(0x1e0) + s(0x1ec))), VerifyMessage = async (d, e, f, g) => {
        const v = s, w = s, h = {
                'qPqEY': function (o, p) {
                    return o && p;
                },
                'OXEzO': function (o, p) {
                    return o(p);
                },
                'bHcsL': v(0x1ef),
                'OpJXH': function (o, p) {
                    return o * p;
                },
                'CHgfJ': v(0x1d1),
                'RBCwX': function (o, p) {
                    return o || p;
                }
            };
        let i, j = {};
        i = d?.[w(0x1ea)], j = d?.[w(0x1fd)];
        h[w(0x1eb)](!i, j) && (i = j?.[v(0x1d7) + w(0x1da)]);
        let l;
        if (i?.[v(0x1d4) + w(0x1f8)]?.[w(0x1e1)]) {
            const o = await (0x26c + -0x1cd * -0x15 + 0x283d * -0x1, getQuotedForMessageId_1[v(0x1e2)])(i[w(0x1d4) + w(0x1f8)][v(0x1e1)], f[w(0x1d3)]);
            l = o?.['id'] || undefined;
        }
        const m = {
            'messageId': h[v(0x1dc)](String, i?.[v(0x1e1)]),
            'ticketId': f['id'],
            'contactId': e ? undefined : g['id'],
            'body': i[w(0x1f0)],
            'fromMe': e,
            'read': e,
            'mediaType': h[v(0x1e8)],
            'quotedMsgId': l,
            'timestamp': h[v(0x1f9)](+i[w(0x1ed)], 0xc1 * -0xd + -0x1346 * 0x1 + 0x20fb),
            'status': h[v(0x1f4)]
        };
        await f[w(0x1fd)]({
            'lastMessage': i[v(0x1f0)],
            'lastMessageAt': new Date()[w(0x1ee)](),
            'answered': h[v(0x1fa)](e, ![])
        });
        const n = {};
        n[w(0x1f2) + 'a'] = m, n[v(0x1d3)] = f[v(0x1d3)], await (-0x62e + 0x20e1 + -0x5 * 0x557, CreateMessageService_1[w(0x1e2)])(n);
    };
function a() {
    const x = [
        'messageDat',
        '__importDe',
        'CHgfJ',
        'fault',
        '306enYjII',
        '31720392RPhKry',
        'essage',
        'OpJXH',
        'RBCwX',
        'Services/C',
        '42wPikBc',
        'update',
        'defineProp',
        'received',
        'ageId',
        'tenantId',
        'reply_to_m',
        '../../help',
        'erty',
        'edited_mes',
        'ers/getQuo',
        '3ewegww',
        'sage',
        'tedForMess',
        'OXEzO',
        '2638810ajfIVJ',
        'value',
        '994555nGZvyr',
        'reateMessa',
        'message_id',
        'default',
        '__esModule',
        '59848JPmNdc',
        '5913425FTxuhA',
        '205126ZXwXQZ',
        '753075NVzRbm',
        'bHcsL',
        '4XKZuvI',
        'message',
        'qPqEY',
        'geService',
        'date',
        'getTime',
        'chat',
        'text',
        '../Message'
    ];
    a = function () {
        return x;
    };
    return a();
}
exports[t(0x1e2)] = VerifyMessage;