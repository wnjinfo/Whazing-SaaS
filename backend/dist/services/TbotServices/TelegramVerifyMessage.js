'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0x97)) / (-0x25 + -0x24b * -0x1 + -0x1 * 0x225) + -parseInt(q(0x81)) / (-0x19b2 + -0x1 * -0x270e + 0x2 * -0x6ad) * (parseInt(q(0x72)) / (0x2538 + -0x1e + -0x2517)) + -parseInt(q(0x89)) / (0x1 * 0x13bb + 0x1 * 0x252f + -0x38e6) + parseInt(r(0x71)) / (-0x2 * 0x9f1 + 0x1 * 0x841 + 0xba6) * (-parseInt(r(0x7c)) / (-0x16e6 * -0x1 + -0x106f + -0x671)) + -parseInt(r(0x93)) / (0x1225 + 0x1d85 + -0x10f * 0x2d) * (-parseInt(r(0x6e)) / (-0x193 * 0x1 + -0x593 * -0x1 + -0x3f8)) + -parseInt(q(0x8b)) / (-0xd * 0x268 + 0x1c5e * 0x1 + 0x2f3 * 0x1) + parseInt(r(0x6d)) / (-0x1 * 0x693 + -0x1849 + 0x1ee6);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xc62d5 + -0x1c08b5 * -0x1 + -0x19b3eb));
function a() {
    const x = [
        'knhZv',
        '219536QBWELw',
        'reply_to_m',
        'ers/getQuo',
        'Services/C',
        'messageDat',
        'getTime',
        'message_id',
        '__importDe',
        '5178408XgnBUs',
        '../Message',
        '6589620QFTVqp',
        'chat',
        'date',
        'tenantId',
        'text',
        'erty',
        '__esModule',
        'edited_mes',
        '12592517dfUVSc',
        'geService',
        'received',
        'update',
        '503215bPcypL',
        'HtjQe',
        'ageId',
        '38116760bZMENp',
        '8cUYCKG',
        'QsZFJ',
        'fault',
        '9482815czwvlT',
        '6bfNIZn',
        'fhZAw',
        'tedForMess',
        'sage',
        'CIALI',
        'message',
        'essage',
        'defineProp',
        'default',
        'MSmQG',
        '6xQnOFw',
        'reateMessa',
        '../../help',
        'value'
    ];
    a = function () {
        return x;
    };
    return a();
}
var __importDefault = this && this[s(0x88) + s(0x70)] || function (c) {
    const u = t;
    return c && c[u(0x91)] ? c : { 'default': c };
};
const k = {};
k[t(0x7f)] = !![], Object[t(0x79) + s(0x90)](exports, s(0x91), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xd4 * -0x8 + -0x93d + 0x308);
        let h = e[f];
        return h;
    }, b(c, d);
}
const getQuotedForMessageId_1 = __importDefault(require(t(0x7e) + s(0x83) + s(0x74) + t(0x6c))), CreateMessageService_1 = __importDefault(require(s(0x8a) + s(0x84) + t(0x7d) + t(0x94))), VerifyMessage = async (d, e, f, g) => {
        const v = s, w = s, h = {
                'CIALI': function (o, p) {
                    return o && p;
                },
                'QsZFJ': function (o, p) {
                    return o(p);
                },
                'MSmQG': v(0x8c),
                'knhZv': function (o, p) {
                    return o * p;
                },
                'fhZAw': v(0x95),
                'HtjQe': function (o, p) {
                    return o || p;
                }
            };
        let i, j = {};
        i = d?.[w(0x77)], j = d?.[w(0x96)];
        h[w(0x76)](!i, j) && (i = j?.[v(0x92) + w(0x75)]);
        let l;
        if (i?.[w(0x82) + v(0x78)]?.[w(0x87)]) {
            const o = await (0x8e7 * -0x3 + -0x109 * -0xc + 0x1 * 0xe49, getQuotedForMessageId_1[w(0x7a)])(i[w(0x82) + w(0x78)][v(0x87)], f[w(0x8e)]);
            l = o?.['id'] || undefined;
        }
        const m = {
            'messageId': h[w(0x6f)](String, i?.[w(0x87)]),
            'ticketId': f['id'],
            'contactId': e ? undefined : g['id'],
            'body': i[w(0x8f)],
            'fromMe': e,
            'read': e,
            'mediaType': h[v(0x7b)],
            'quotedMsgId': l,
            'timestamp': h[w(0x80)](+i[v(0x8d)], 0xc * 0x3b + 0xbd3 * -0x1 + 0xcf7),
            'status': h[v(0x73)]
        };
        await f[w(0x96)]({
            'lastMessage': i[v(0x8f)],
            'lastMessageAt': new Date()[w(0x86)](),
            'answered': h[v(0x6b)](e, ![])
        });
        const n = {};
        n[v(0x85) + 'a'] = m, n[w(0x8e)] = f[w(0x8e)], await (-0x15c1 * 0x1 + -0x13 * 0x192 + 0x3397, CreateMessageService_1[w(0x7a)])(n);
    };
exports[s(0x7a)] = VerifyMessage;