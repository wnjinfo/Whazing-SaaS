'use strict';
function a() {
    const u = [
        'reateMessa',
        'getTime',
        'UGZyJ',
        'erty',
        'geService',
        'otBRH',
        '1240719mbZwiR',
        'messageDat',
        'Services/C',
        'received',
        'default',
        '2314272jWVvjs',
        'item_id',
        'value',
        '85858pxhzCB',
        '../Message',
        'fault',
        '52DGfTvw',
        '5880ALfZsT',
        'defineProp',
        '99gAXKiu',
        '24414280kPunRA',
        'tenantId',
        'chat',
        '228681cFrugu',
        '8071mnflcZ',
        '536245QKYfAo',
        '__importDe',
        '__esModule',
        'ycIhI',
        '130VwxFsG',
        'hLMcP',
        'message',
        'text',
        'update'
    ];
    a = function () {
        return u;
    };
    return a();
}
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x1c7)) / (-0x1f2 * 0xa + 0x16af + -0x33a) + parseInt(n(0x1ac)) / (-0x1370 + 0xd3f + 0x633) * (parseInt(n(0x1b2)) / (0x129c + -0x26af + 0x359 * 0x6)) + -parseInt(n(0x1af)) / (0x9 * -0x392 + -0x104e + 0x3074) * (-parseInt(n(0x1b8)) / (0x1 * 0x1e9d + -0x59 * 0x6d + 0x74d)) + parseInt(n(0x1b0)) / (0x1ce2 + 0x1d06 + 0xef * -0x3e) * (-parseInt(n(0x1b7)) / (0x1f0e + -0x167 + -0x1da0)) + -parseInt(n(0x1cc)) / (-0x131 + -0x9 * 0x1db + 0x11ec) + -parseInt(n(0x1b6)) / (-0x6fb + 0x5a8 + 0x15c) * (-parseInt(o(0x1bc)) / (0x1b * -0x1e + -0x1 * 0x119c + 0x14d0)) + -parseInt(n(0x1b3)) / (0x860 + -0x10a5 + 0xe * 0x98);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x8 * -0xe252 + -0x2d6 * 0x2dc + -0x1 * -0x1a85b2));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x18 + -0x792 + 0x924);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[p(0x1b9) + p(0x1ae)] || function (c) {
    const r = q;
    return c && c[r(0x1ba)] ? c : { 'default': c };
};
const k = {};
k[p(0x1ab)] = !![], Object[q(0x1b1) + p(0x1c4)](exports, p(0x1ba), k);
const CreateMessageService_1 = __importDefault(require(q(0x1ad) + p(0x1c9) + q(0x1c1) + p(0x1c5))), VerifyMessage = async (d, e, f, g) => {
        const s = q, t = q, h = {
                'UGZyJ': function (l, m) {
                    return l(m);
                },
                'hLMcP': s(0x1b5),
                'otBRH': t(0x1ca),
                'ycIhI': function (l, m) {
                    return l || m;
                }
            }, i = {
                'messageId': h[s(0x1c3)](String, d[t(0x1be)][s(0x1aa)]),
                'ticketId': f['id'],
                'contactId': e ? undefined : g['id'],
                'body': d[t(0x1be)][t(0x1bf)],
                'fromMe': e,
                'read': e,
                'mediaType': h[t(0x1bd)],
                'quotedMsgId': '',
                'timestamp': new Date()[s(0x1c2)](),
                'status': h[s(0x1c6)]
            };
        await f[s(0x1c0)]({
            'lastMessage': d[s(0x1be)][s(0x1bf)],
            'lastMessageAt': new Date()[t(0x1c2)](),
            'answered': h[t(0x1bb)](e, ![])
        });
        const j = {};
        j[t(0x1c8) + 'a'] = i, j[s(0x1b4)] = f[s(0x1b4)], await (0x346 * 0x7 + 0x1b0d + -0x31f7, CreateMessageService_1[t(0x1cb)])(j);
    };
exports[p(0x1cb)] = VerifyMessage;