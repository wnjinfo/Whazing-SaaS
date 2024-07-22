'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0xdc)) / (0x6a0 + 0xcaa * 0x3 + 0xf3 * -0x2f) * (-parseInt(r(0xe4)) / (-0x6 * -0x6d + -0x1ab5 + 0x4d5 * 0x5)) + parseInt(r(0xe7)) / (0x26f1 + 0x977 * -0x1 + -0x18d * 0x13) + -parseInt(r(0xdd)) / (-0x469 + -0x3 * -0x1bd + -0x1 * 0xca) + parseInt(s(0xe2)) / (0x19 * -0x134 + 0x5e * -0x22 + -0x1 * -0x2a95) * (parseInt(r(0xf1)) / (-0x174c + 0x87b + 0xed7)) + -parseInt(r(0xfb)) / (-0x42a + -0x4fc + 0x92d) * (parseInt(s(0xf3)) / (0x188c + 0x755 * -0x4 + 0x38 * 0x16)) + -parseInt(r(0xda)) / (0x1ab1 + 0x74a + 0x9e * -0x37) + parseInt(s(0x10a)) / (0x1a6e + 0xb6c + 0x4ba * -0x8);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7d93 + 0x71d7 + 0x5a290));
var __importDefault = this && this[t(0x106) + u(0xe3)] || function (c) {
    const v = t;
    return c && c[v(0x101)] ? c : { 'default': c };
};
const k = {};
k[t(0xe1)] = !![], Object[u(0x100) + t(0x107)](exports, t(0x101), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2 * 0x834 + -0x1991 + 0x2ad2);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const y = [
        'defineProp',
        '__esModule',
        'yServices/',
        '../models/',
        'chatBot',
        'contactId',
        '__importDe',
        'erty',
        '../service',
        'number',
        '11604890wpExcM',
        'plyId',
        'rvices/Cre',
        '4406652gDnhwV',
        'ticketId',
        '61NHQncR',
        '2717956hUNOYv',
        's/AutoRepl',
        'UTfAk',
        'toReplyMes',
        'value',
        '690JnAKGC',
        'fault',
        '206IXigTG',
        'stepAutoRe',
        'autoReply',
        '1089921zDPCVF',
        'telegram',
        'substr',
        'findByPk',
        'yuEDC',
        's/TicketSe',
        'type',
        'default',
        'update',
        'WSICg',
        '11688tMuMhV',
        'autoReplyI',
        '95816wTxshY',
        'indexOf',
        'ateLogTick',
        'tenantId',
        'channel',
        'isGroup',
        'etService',
        'sageServic',
        '154ezPjgH',
        'userId',
        'ShowStepAu',
        'DVRIe',
        'Contact'
    ];
    a = function () {
        return y;
    };
    return a();
}
const Contact_1 = __importDefault(require(t(0x103) + u(0xff))), ShowStepAutoReplyMessageService_1 = __importDefault(require(t(0x108) + t(0xde) + t(0x102) + u(0xfd) + u(0xe0) + u(0xfa) + 'e')), CreateLogTicketService_1 = __importDefault(require(u(0x108) + u(0xec) + u(0xd9) + u(0xf5) + u(0xf9))), AutoReplyWelcome = async f => {
        const w = u, x = u, g = {};
        g[w(0xf0)] = function (p, q) {
            return p === q;
        }, g[x(0xfe)] = function (p, q) {
            return p !== q;
        }, g[w(0xdf)] = w(0xe8), g[x(0xeb)] = w(0x104);
        const h = g;
        if (f[x(0xfc)] || f[x(0xf8)])
            return;
        const i = await (0xeee + -0xac0 + -0x2 * 0x217, ShowStepAutoReplyMessageService_1[x(0xee)])(0x39 * 0x88 + 0x6f7 * 0x1 + 0x5 * -0x773, -0x96b + 0xb9 * 0x11 + -0x2de, 0x2 * 0xbcb + -0x15d7 + -0x1bf, !![], f[x(0xf6)]);
        if (!i)
            return;
        const j = await Contact_1[x(0xee)][x(0xea)](f[w(0x105)]), {celularTeste: l} = i[w(0xe6)], m = j?.[w(0x109)];
        if (l && h[x(0xf0)](m?.[x(0xf4)](l[w(0xe9)](0x1 * -0x1f19 + 0x1 * -0x8f + 0x1fa9)), -(0x1 * 0x367 + 0x1010 * 0x1 + 0x2 * -0x9bb)) || !m) {
            if (h[w(0xfe)](f[x(0xf7)], h[w(0xdf)]))
                return;
        }
        const n = {};
        n[x(0xf2) + 'd'] = i[w(0xe6)]['id'], n[x(0xe5) + w(0x10b)] = i['id'], await f[x(0xef)](n);
        const o = {};
        o[x(0xdb)] = f['id'], o[w(0xed)] = h[x(0xeb)], await (-0x143e * 0x1 + 0x104e + 0x3f0, CreateLogTicketService_1[w(0xee)])(o);
    };
exports[t(0xee)] = AutoReplyWelcome;