'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x12b)) / (0x17b8 + 0x2d * 0x89 + 0x1 * -0x2fcc) * (-parseInt(q(0x110)) / (0x9d * -0x15 + 0x2543 * -0x1 + 0x106 * 0x31)) + parseInt(q(0x12f)) / (-0x1 * 0x10b1 + -0x19 * -0xbe + -0x1da) * (-parseInt(q(0x112)) / (0x1e90 + 0x3 * -0x169 + -0x1 * 0x1a51)) + parseInt(q(0x105)) / (0x11 * -0x86 + 0x10e8 + -0x199 * 0x5) * (-parseInt(r(0x10a)) / (-0x2a * -0x1d + 0xed9 + -0x9 * 0x22d)) + -parseInt(q(0x116)) / (0x94b + 0x267d + -0x2fc1) + parseInt(r(0x106)) / (-0x8 * -0x46c + -0x151 * -0x13 + -0x3c5b) * (parseInt(r(0x117)) / (-0x97d + -0x12e1 + -0x1 * -0x1c67)) + -parseInt(r(0x12e)) / (-0x1a6e + 0x835 + -0x1243 * -0x1) + parseInt(r(0x114)) / (-0x1ebe + -0x2301 * 0x1 + 0x1 * 0x41ca);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x61 * -0x649 + -0x1 * -0xf93e7 + 0x4 * -0x1744));
function a() {
    const x = [
        '351884HFQlXN',
        'fault',
        '52539058eUTcGn',
        '__esModule',
        '10099803uCkwMn',
        '81kIulEg',
        '../../help',
        'geService',
        'messageDat',
        'reateMessa',
        'message_id',
        '../Message',
        'Services/C',
        'update',
        'tnRTg',
        'messageId',
        'value',
        'read',
        'type',
        'body',
        'getTime',
        'status',
        'mediaType',
        'reply_to',
        'received',
        '1OEaLit',
        'message',
        'tenantId',
        '14889950HFsary',
        '3sjzXzO',
        'defineProp',
        'tedForMess',
        'text',
        'ers/getQuo',
        'default',
        '130JMFVfz',
        '1077216obCkgj',
        'timestamp',
        'erty',
        'ageId',
        '193866yIlYSB',
        'mid',
        'fromMe',
        'quotedMsgI',
        'ticketId',
        'contactId',
        '2574518eBNGii',
        '__importDe'
    ];
    a = function () {
        return x;
    };
    return a();
}
var __importDefault = this && this[s(0x111) + s(0x113)] || function (c) {
    const u = t;
    return c && c[u(0x115)] ? c : { 'default': c };
};
const k = {};
k[t(0x122)] = !![], Object[t(0x130) + s(0x108)](exports, s(0x115), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x1c1b + 0x1e51 + -0x132);
        let h = e[f];
        return h;
    }, b(c, d);
}
const getQuotedForMessageId_1 = __importDefault(require(s(0x118) + t(0x133) + s(0x131) + s(0x109))), CreateMessageService_1 = __importDefault(require(t(0x11d) + t(0x11e) + t(0x11b) + t(0x119))), MessengerVerifyMessage = async (f, g, h) => {
        const v = s, w = s, i = {};
        i[v(0x120)] = v(0x12a);
        const j = i;
        let l;
        if (f?.[v(0x12c)]?.[v(0x129)]?.[w(0x10b)]) {
            const p = await (0x11ed + -0x1b6f + 0x982, getQuotedForMessageId_1[w(0x104)])(f[v(0x12c)][w(0x129)][v(0x10b)], g[w(0x12d)]);
            l = p?.['id'] || undefined;
        }
        const m = {};
        m[v(0x121)] = f[v(0x11c)] || '', m[w(0x10e)] = g['id'], m[w(0x10f)] = h['id'], m[v(0x125)] = f[v(0x12c)][v(0x132)] || '', m[v(0x10c)] = ![], m[v(0x128)] = f[w(0x124)], m[v(0x123)] = ![], m[v(0x10d) + 'd'] = l, m[v(0x107)] = f[w(0x107)], m[v(0x127)] = j[v(0x120)];
        const n = m;
        await g[v(0x11f)]({
            'lastMessage': n[v(0x125)],
            'lastMessageAt': new Date()[v(0x126)](),
            'answered': ![]
        });
        const o = {};
        o[w(0x11a) + 'a'] = n, o[v(0x12d)] = g[v(0x12d)], await (-0x1 * 0x2223 + -0x920 + -0x19 * -0x1bb, CreateMessageService_1[v(0x104)])(o);
    };
exports[s(0x104)] = MessengerVerifyMessage;