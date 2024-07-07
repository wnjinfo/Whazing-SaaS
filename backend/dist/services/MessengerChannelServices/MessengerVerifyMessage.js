'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0x1ab)) / (0x2 * -0x5 + 0x2bd * 0x8 + 0x15dd * -0x1) + -parseInt(q(0x1a7)) / (-0x292 + 0x1629 + -0x1395) * (parseInt(q(0x192)) / (-0xd * -0x1d + -0x2bb + 0x1 * 0x145)) + parseInt(q(0x1ac)) / (-0x2 * 0x8af + 0x1411 + -0x2af) * (-parseInt(r(0x19d)) / (0x31 + 0x1411 * 0x1 + -0x143d)) + parseInt(r(0x18d)) / (-0x845 + 0x1b2 * -0x3 + 0xd61) * (parseInt(q(0x1b2)) / (0x2311 + -0x33 * -0xac + -0x454e)) + -parseInt(r(0x190)) / (-0x1c13 + 0x1 * -0x3b9 + 0x1fd4) * (-parseInt(r(0x1a2)) / (-0x59e * 0x2 + -0xa45 + 0x158a)) + -parseInt(r(0x1ba)) / (0x1e98 + -0x2d9 * -0x6 + 0x2fa4 * -0x1) + parseInt(q(0x1bb)) / (-0x14e1 + 0x1e14 + -0x928);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xf036 + -0x1102a * 0x1 + 0x33e5f));
function a() {
    const x = [
        'type',
        'default',
        '../Message',
        'fault',
        '98jyhpWB',
        'status',
        '__importDe',
        'ageId',
        '__esModule',
        'reateMessa',
        'fromMe',
        'read',
        '2250040ewNLNU',
        '7184001pcVDPf',
        'timestamp',
        '18534bCBSQr',
        'messageId',
        'umumE',
        '32488emjgwv',
        'ers/getQuo',
        '39slyYdV',
        'defineProp',
        'quotedMsgI',
        'Services/C',
        'text',
        'mid',
        'ticketId',
        'received',
        'mediaType',
        'message',
        'messageDat',
        '5cnOyvB',
        'getTime',
        'message_id',
        'tedForMess',
        'body',
        '423nlVlPx',
        'contactId',
        'update',
        'tenantId',
        'value',
        '12646Lhgsuq',
        '../../help',
        'reply_to',
        'erty',
        '122924lXvbEn',
        '1010728WJtKUT',
        'geService'
    ];
    a = function () {
        return x;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x11f4 + 0x1 * 0xa1b + -0x269 * 0xb);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[s(0x1b4) + t(0x1b1)] || function (c) {
    const u = t;
    return c && c[u(0x1b6)] ? c : { 'default': c };
};
const k = {};
k[s(0x1a6)] = !![], Object[s(0x193) + s(0x1aa)](exports, s(0x1b6), k);
const getQuotedForMessageId_1 = __importDefault(require(t(0x1a8) + s(0x191) + t(0x1a0) + s(0x1b5))), CreateMessageService_1 = __importDefault(require(t(0x1b0) + s(0x195) + s(0x1b7) + t(0x1ad))), MessengerVerifyMessage = async (f, g, h) => {
        const v = s, w = t, i = {};
        i[v(0x18f)] = w(0x199);
        const j = i;
        let l;
        if (f?.[w(0x19b)]?.[v(0x1a9)]?.[w(0x197)]) {
            const p = await (0x1 * -0x1822 + -0xb01 + 0x505 * 0x7, getQuotedForMessageId_1[v(0x1af)])(f[w(0x19b)][v(0x1a9)][w(0x197)], g[v(0x1a5)]);
            l = p?.['id'] || undefined;
        }
        const m = {};
        m[w(0x18e)] = f[v(0x19f)] || '', m[w(0x198)] = g['id'], m[v(0x1a3)] = h['id'], m[w(0x1a1)] = f[w(0x19b)][w(0x196)] || '', m[v(0x1b8)] = ![], m[v(0x19a)] = f[w(0x1ae)], m[w(0x1b9)] = ![], m[v(0x194) + 'd'] = l, m[v(0x18c)] = f[w(0x18c)], m[v(0x1b3)] = j[v(0x18f)];
        const n = m;
        await g[v(0x1a4)]({
            'lastMessage': n[w(0x1a1)],
            'lastMessageAt': new Date()[w(0x19e)](),
            'answered': ![]
        });
        const o = {};
        o[w(0x19c) + 'a'] = n, o[w(0x1a5)] = g[w(0x1a5)], await (0x2 * 0x14c + -0x1bcc + -0x64d * -0x4, CreateMessageService_1[v(0x1af)])(o);
    };
exports[t(0x1af)] = MessengerVerifyMessage;