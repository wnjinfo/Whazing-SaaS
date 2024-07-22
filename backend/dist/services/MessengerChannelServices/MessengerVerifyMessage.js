'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x168)) / (0x4f6 + 0x1dde * 0x1 + 0x22d3 * -0x1) + parseInt(r(0x156)) / (-0x1 * -0x617 + -0x1f6d + 0x1958) * (parseInt(r(0x145)) / (-0x1 * 0x11d5 + 0x13ac + -0x1d4)) + parseInt(r(0x169)) / (0x1faf + 0x3c7 + -0x1 * 0x2372) * (parseInt(q(0x147)) / (0xce * 0x25 + 0x166d + 0x1a17 * -0x2)) + -parseInt(r(0x154)) / (-0x26af + -0xabc + 0x3171) + parseInt(r(0x16b)) / (-0x1 * 0x151b + -0x6be * 0x4 + -0x2 * -0x180d) * (parseInt(r(0x14e)) / (-0x1b7a + -0x848 + 0x23ca)) + -parseInt(r(0x15f)) / (0x13d4 + 0x15cf + -0x299a) + -parseInt(r(0x15b)) / (0x2364 + -0x1e33 + -0x527) * (-parseInt(r(0x150)) / (0x226d * -0x1 + -0x16a9 * -0x1 + 0x1 * 0xbcf));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x89ea7 + 0x10dc98 + -0x61f61 * -0x1));
function a() {
    const x = [
        '2144oOUSrI',
        'mid',
        '266203viHywr',
        'message',
        'value',
        'default',
        'fromMe',
        'received',
        'kbhcg',
        'getTime',
        'text',
        'reply_to',
        '3ktzAxq',
        'tenantId',
        '12605dcrNrI',
        'messageId',
        'type',
        'Services/C',
        'body',
        '__importDe',
        'status',
        '168RalQaG',
        'geService',
        '2582723woSaRO',
        '__esModule',
        'read',
        'messageDat',
        '9196734MpKTSK',
        'message_id',
        '285888POqivG',
        'quotedMsgI',
        'tedForMess',
        'mediaType',
        '../../help',
        '10riwrRm',
        'ageId',
        'update',
        '../Message',
        '15746940aqiITO',
        'fault',
        'contactId',
        'timestamp',
        'reateMessa',
        'defineProp',
        'ers/getQuo',
        'ticketId',
        'erty',
        '1696241BBAomw'
    ];
    a = function () {
        return x;
    };
    return a();
}
var __importDefault = this && this[s(0x14c) + t(0x160)] || function (c) {
    const u = s;
    return c && c[u(0x151)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1d57 + -0x7 * 0x16a + 0x22 * -0x89);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[t(0x16d)] = !![], Object[t(0x164) + s(0x167)](exports, t(0x151), k);
const getQuotedForMessageId_1 = __importDefault(require(t(0x15a) + s(0x165) + s(0x158) + t(0x15c))), CreateMessageService_1 = __importDefault(require(t(0x15e) + s(0x14a) + s(0x163) + s(0x14f))), MessengerVerifyMessage = async (f, g, h) => {
        const v = s, w = s, i = {};
        i[v(0x141)] = v(0x140);
        const j = i;
        let l;
        if (f?.[v(0x16c)]?.[v(0x144)]?.[v(0x16a)]) {
            const p = await (-0x1 * 0x157f + 0x1fb5 + 0xa36 * -0x1, getQuotedForMessageId_1[v(0x16e)])(f[v(0x16c)][w(0x144)][v(0x16a)], g[w(0x146)]);
            l = p?.['id'] || undefined;
        }
        const m = {};
        m[v(0x148)] = f[v(0x155)] || '', m[v(0x166)] = g['id'], m[v(0x161)] = h['id'], m[w(0x14b)] = f[w(0x16c)][w(0x143)] || '', m[v(0x13f)] = ![], m[w(0x159)] = f[w(0x149)], m[w(0x152)] = ![], m[v(0x157) + 'd'] = l, m[v(0x162)] = f[w(0x162)], m[v(0x14d)] = j[v(0x141)];
        const n = m;
        await g[w(0x15d)]({
            'lastMessage': n[w(0x14b)],
            'lastMessageAt': new Date()[v(0x142)](),
            'answered': ![]
        });
        const o = {};
        o[w(0x153) + 'a'] = n, o[v(0x146)] = g[w(0x146)], await (-0x1339 * 0x1 + 0x4 * -0x3fd + 0x232d, CreateMessageService_1[w(0x16e)])(o);
    };
exports[s(0x16e)] = MessengerVerifyMessage;