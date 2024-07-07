'use strict';
const A = b, B = b;
(function (c, d) {
    const y = b, z = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(y(0x101)) / (-0x2036 + 0x1988 * -0x1 + -0x1 * -0x39bf) + -parseInt(z(0x100)) / (0x1247 + 0xf93 * -0x1 + -0x2b2) + parseInt(z(0xea)) / (0x2f1 * 0x2 + -0x17 * 0x133 + 0x15b6) + parseInt(z(0xd7)) / (0x1756 * -0x1 + -0x16f * 0x9 + -0x2441 * -0x1) * (-parseInt(y(0xe6)) / (0x1be * -0x7 + -0x2468 + 0x3 * 0x1035)) + -parseInt(z(0xd0)) / (-0x1f93 * 0x1 + -0x1aa6 + -0xd * -0x47b) * (parseInt(z(0x108)) / (0x1 * 0x240a + 0x1 * 0x1294 + -0x3697)) + -parseInt(y(0xe0)) / (0x667 + 0x297 + -0x8f6) + parseInt(z(0xe5)) / (0x1441 + 0x36 * 0x59 + -0x1f * 0x142);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0x114ddc + 0xffad * 0x3 + 0x181597));
var __importDefault = this && this[A(0xe4) + B(0xf5)] || function (c) {
    const C = B;
    return c && c[C(0x107)] ? c : { 'default': c };
};
function a() {
    const F = [
        'ketWbotBai',
        'erty',
        'defineProp',
        '1554998sYEkDG',
        '1237883CHdJJK',
        'ileys',
        'number',
        'include',
        'key',
        '_WAPP_MSG',
        '__esModule',
        '7GcmSTc',
        '../../help',
        '1254378MBsfpU',
        'dataJson',
        'ers/GetTic',
        'delete',
        'isGroup',
        'g.us',
        '\x20found\x20wit',
        '84248bIWZWe',
        'ERR_DELETE',
        'isDeleted',
        'rs/AppErro',
        'findOne',
        'ers/GetWbo',
        'BkUJI',
        'ls/Message',
        'mZSip',
        '7489592UESrFF',
        'leys',
        'parse',
        '../../erro',
        '__importDe',
        '9456993fikTht',
        '235uZXtzW',
        'tMessageBa',
        'WQDml',
        'ticket',
        '3794163kPqeqq',
        'value',
        'where',
        'log',
        'update',
        'default',
        'sendMessag',
        'model',
        'h\x20this\x20ID.',
        '../../mode',
        '.net',
        'fault',
        'YwkJn',
        'ls/Ticket',
        'IkbQF',
        'No\x20message',
        's.whatsapp',
        'CSyBD',
        'contact'
    ];
    a = function () {
        return F;
    };
    return a();
}
const k = {};
k[B(0xeb)] = !![], Object[B(0xff) + A(0xfe)](exports, B(0x107), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1908 * -0x1 + -0x474 + 0xf * 0x205);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(B(0xe3) + A(0xda) + 'r')), Message_1 = __importDefault(require(A(0xf3) + A(0xde))), Ticket_1 = __importDefault(require(A(0xf3) + B(0xf7))), GetTicketWbotBaileys_1 = __importDefault(require(B(0xcf) + B(0xd2) + B(0xfd) + A(0xe1))), GetWbotMessageBaileys_1 = __importDefault(require(A(0xcf) + A(0xdc) + A(0xe7) + B(0x102))), DeleteWhatsAppMessage = async i => {
        const D = B, E = A, j = {};
        j[D(0xf8)] = E(0xe9), j[D(0xe8)] = D(0xfc), j[D(0xf6)] = E(0xf9) + E(0xd6) + D(0xf2), j[D(0xdf)] = E(0xd5), j[D(0xfb)] = E(0xfa) + D(0xf4), j[D(0xdd)] = D(0xd8) + D(0x106);
        const l = j, m = {};
        m['id'] = i;
        const n = {};
        n[D(0xf1)] = Ticket_1[E(0xef)], n['as'] = l[D(0xf8)], n[E(0x104)] = [l[E(0xe8)]];
        const o = {};
        o[E(0xec)] = m, o[E(0x104)] = [n];
        const p = await Message_1[D(0xef)][E(0xdb)](o);
        if (!p)
            throw new AppError_1[(D(0xef))](l[D(0xf6)]);
        const {ticket: q} = p, r = await (0x1139 + 0xdaf * 0x2 + -0x2c97, GetWbotMessageBaileys_1[D(0xef)])(q, i);
        try {
            const t = await (0x17e0 * 0x1 + -0x251 * -0x1 + 0xf * -0x1bf, GetTicketWbotBaileys_1[E(0xef)])(q), u = r, v = JSON[E(0xe2)](u[D(0xd1)]), w = {};
            w[E(0xd3)] = v[E(0x105)], await t[E(0xf0) + 'e'](q[E(0xfc)][E(0x103)] + '@' + (q[D(0xd4)] ? l[D(0xdf)] : l[D(0xfb)]), w);
        } catch (x) {
            console[E(0xed)](x);
            throw new AppError_1[(E(0xef))](l[E(0xdd)]);
        }
        const s = {};
        return s[E(0xd9)] = !![], await p[D(0xee)](s), p;
    };
exports[A(0xef)] = DeleteWhatsAppMessage;