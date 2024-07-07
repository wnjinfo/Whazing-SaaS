'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x128)) / (0x18b9 + -0xa0f + -0xea9) * (parseInt(r(0x114)) / (-0x232b * 0x1 + 0x194b + 0xa * 0xfd)) + parseInt(r(0x10d)) / (-0x2696 + -0x1abf * -0x1 + 0xbda) * (-parseInt(s(0x129)) / (-0x246 + -0x21b5 * 0x1 + 0x23ff)) + -parseInt(r(0x121)) / (0x159d + -0x1e * -0xc7 + -0x2cea) + parseInt(r(0x10e)) / (0x54c + 0x1d75 + -0x22bb) * (parseInt(s(0x11d)) / (-0x31a * 0x4 + -0x487 * -0x5 + 0x51a * -0x2)) + parseInt(r(0x139)) / (-0x9c2 * -0x3 + -0x1eab + -0x49 * -0x5) + -parseInt(r(0x12d)) / (0x1 * -0x14b7 + -0x1e57 + 0x3317) * (-parseInt(r(0x140)) / (0xc65 + 0x11ca + -0x1e25 * 0x1)) + parseInt(r(0x11b)) / (-0x1d53 * -0x1 + -0x11b6 * -0x2 + -0x40b4) * (-parseInt(r(0x122)) / (0x1 * 0x1957 + 0x3 * -0x115 + -0x160c));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xf6d7 + 0x56a47 * -0x4 + 0x23f6ce));
var __importDefault = this && this[t(0x110) + u(0x137)] || function (c) {
    const v = t;
    return c && c[v(0x127)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1e2a + -0x5 * 0x196 + -0x18 * 0xe2);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const y = [
        '118965DZUjxG',
        'indexOf',
        '1141PiFkId',
        'number',
        'AKeut',
        's/AutoRepl',
        '3643785MONXHk',
        '1380osNeFD',
        'defineProp',
        'ateLogTick',
        'ShowStepAu',
        'userId',
        '__esModule',
        '156URVIov',
        '28Jeazuh',
        'update',
        'value',
        'ticketId',
        '45OpdhAZ',
        'autoReplyI',
        'chatBot',
        'MbqjY',
        'stepAutoRe',
        'rvices/Cre',
        'channel',
        'type',
        'telegram',
        'isGroup',
        'fault',
        'sageServic',
        '6421264ZdVVWw',
        'ormee',
        'OQVLQ',
        'tenantId',
        'plyId',
        'etService',
        '../models/',
        '2401480CYRvhf',
        'default',
        '174606zmUfKv',
        '14082ehAiDd',
        '../service',
        '__importDe',
        's/TicketSe',
        'contactId',
        'toReplyMes',
        '11130qpdEhl',
        'Contact',
        'yServices/',
        'substr',
        'autoReply',
        'findByPk',
        'erty'
    ];
    a = function () {
        return y;
    };
    return a();
}
k[t(0x12b)] = !![], Object[u(0x123) + u(0x11a)](exports, u(0x127), k);
const Contact_1 = __importDefault(require(t(0x13f) + t(0x115))), ShowStepAutoReplyMessageService_1 = __importDefault(require(u(0x10f) + u(0x120) + u(0x116) + u(0x125) + u(0x113) + u(0x138) + 'e')), CreateLogTicketService_1 = __importDefault(require(t(0x10f) + u(0x111) + u(0x132) + u(0x124) + u(0x13e))), AutoReplyWelcome = async f => {
        const w = u, x = u, g = {};
        g[w(0x11f)] = function (p, q) {
            return p === q;
        }, g[x(0x13a)] = function (p, q) {
            return p !== q;
        }, g[w(0x13b)] = w(0x135), g[w(0x130)] = w(0x12f);
        const h = g;
        if (f[x(0x126)] || f[x(0x136)])
            return;
        const i = await (0x1268 + -0x12 * -0x91 + -0x1c9a, ShowStepAutoReplyMessageService_1[w(0x10c)])(0x16a4 + -0x805 * 0x1 + -0x1 * 0xe9f, -0x1 * -0x10b + 0x2223 + 0x6 * -0x5dd, 0x5 * -0x50 + 0x397 + -0x207, !![], f[x(0x13c)]);
        if (!i)
            return;
        const j = await Contact_1[w(0x10c)][w(0x119)](f[w(0x112)]), {celularTeste: l} = i[x(0x118)], m = j?.[x(0x11e)];
        if (l && h[w(0x11f)](m?.[x(0x11c)](l[w(0x117)](-0x1 * -0x185 + -0xb8d * 0x1 + -0x7 * -0x16f)), -(-0x21a3 * -0x1 + -0x7fc + -0x3aa * 0x7)) || !m) {
            if (h[x(0x13a)](f[x(0x133)], h[w(0x13b)]))
                return;
        }
        const n = {};
        n[w(0x12e) + 'd'] = i[x(0x118)]['id'], n[w(0x131) + w(0x13d)] = i['id'], await f[x(0x12a)](n);
        const o = {};
        o[x(0x12c)] = f['id'], o[x(0x134)] = h[w(0x130)], await (-0x2051 + -0xf0a + 0x1b * 0x1c1, CreateLogTicketService_1[w(0x10c)])(o);
    };
exports[u(0x10c)] = AutoReplyWelcome;