'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0xf5)) / (0xde1 + -0x68f * 0x3 + 0x5cd) * (parseInt(n(0xf6)) / (0x49 * 0x2b + -0x26 * 0xd3 + -0x3 * -0x65b)) + -parseInt(o(0xff)) / (-0x3ad + -0x245 * 0xd + -0x1 * -0x2131) * (parseInt(n(0xe1)) / (0x285 * -0xb + 0x2506 + -0x319 * 0x3)) + -parseInt(o(0x100)) / (-0x670 + 0x2 * 0xd + 0x65b) + parseInt(n(0xe3)) / (0x1c6f * 0x1 + 0x13 * 0x22 + 0x1eef * -0x1) + -parseInt(o(0xe0)) / (-0xd13 + 0x5 * 0x151 + 0x685) * (parseInt(n(0xe2)) / (0x5d8 + -0x21a * 0x11 + 0xe * 0x223)) + parseInt(n(0xfb)) / (0x5e9 * 0x1 + 0x1f25 + 0xc57 * -0x3) * (parseInt(o(0xfe)) / (-0x5 * -0x552 + -0x8 * 0x419 + 0x638)) + parseInt(o(0xf3)) / (0x1645 + -0x2092 + 0x8 * 0x14b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0xbe869 + -0x4fea8 + 0x73b9b));
var __importDefault = this && this[p(0xea) + q(0xee)] || function (c) {
    const r = q;
    return c && c[r(0xe9)] ? c : { 'default': c };
};
const k = {};
k[p(0xf4)] = !![], Object[p(0xf8) + q(0xf2)](exports, q(0xe9), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x148b + -0x1ca6 + 0x320f);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const u = [
        'message',
        '913653FwfqkM',
        'tenantId',
        'messageDat',
        '160WgdIxe',
        '178725fSAeod',
        '4680515UDIcmE',
        'Services/C',
        'chat',
        '133441fUDQcN',
        '88FYNqBS',
        '168QuUwor',
        '2839530ittdYJ',
        'SZrzR',
        'reateMessa',
        'text',
        'default',
        '../Message',
        '__esModule',
        '__importDe',
        'ASAzt',
        'EArTG',
        'DHvDp',
        'fault',
        'getTime',
        'geService',
        'item_id',
        'erty',
        '14939771FpYYeW',
        'value',
        '268OvpqmL',
        '884MXhvzV',
        'received',
        'defineProp',
        'update'
    ];
    a = function () {
        return u;
    };
    return a();
}
const CreateMessageService_1 = __importDefault(require(p(0xe8) + q(0xde) + p(0xe5) + q(0xf0))), VerifyMessage = async (d, e, f, g) => {
        const s = p, t = p, h = {
                'EArTG': function (l, m) {
                    return l(m);
                },
                'SZrzR': s(0xdf),
                'DHvDp': s(0xf7),
                'ASAzt': function (l, m) {
                    return l || m;
                }
            }, i = {
                'messageId': h[s(0xec)](String, d[s(0xfa)][t(0xf1)]),
                'ticketId': f['id'],
                'contactId': e ? undefined : g['id'],
                'body': d[t(0xfa)][t(0xe6)],
                'fromMe': e,
                'read': e,
                'mediaType': h[t(0xe4)],
                'quotedMsgId': '',
                'timestamp': new Date()[s(0xef)](),
                'status': h[t(0xed)]
            };
        await f[s(0xf9)]({
            'lastMessage': d[t(0xfa)][t(0xe6)],
            'lastMessageAt': new Date()[s(0xef)](),
            'answered': h[t(0xeb)](e, ![])
        });
        const j = {};
        j[s(0xfd) + 'a'] = i, j[t(0xfc)] = f[s(0xfc)], await (-0xbef + 0xdf2 + -0x203, CreateMessageService_1[t(0xe7)])(j);
    };
exports[p(0xe7)] = VerifyMessage;