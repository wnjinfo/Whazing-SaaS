'use strict';
const z = b, A = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x12da + -0x24a9 + 0xb * 0x1c4);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x1d5)) / (0xb0a + 0x2252 + 0x1 * -0x2d5b) * (-parseInt(y(0x1c2)) / (-0xb33 + 0x1a9a + 0x1 * -0xf65)) + parseInt(y(0x1b9)) / (0x247d + -0x288 * -0x4 + -0x2e9a) * (parseInt(y(0x1ac)) / (-0x1e7e + -0x1532 + 0x3 * 0x113c)) + -parseInt(y(0x1ca)) / (0x1cd4 + 0x19c * 0xa + -0x2ce7) + parseInt(x(0x1da)) / (0x7 * -0x513 + 0x139a + 0x247 * 0x7) + -parseInt(y(0x1a4)) / (-0x15c5 * 0x1 + 0x22 * 0x115 + -0xefe) + -parseInt(x(0x1ce)) / (-0x1 * -0xddd + -0xb8b * -0x1 + -0x1960) * (-parseInt(y(0x1c1)) / (-0x2f1 * 0xd + 0x655 * 0x4 + 0xcf2 * 0x1)) + -parseInt(x(0x1b2)) / (0x14e6 + -0x12a4 + -0x238);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x215ad * -0x2 + -0x1 * -0x16401 + -0x238b4));
var __importDefault = this && this[z(0x1b6) + A(0x1df)] || function (c) {
    const B = A;
    return c && c[B(0x1cf)] ? c : { 'default': c };
};
function a() {
    const E = [
        '643956ZDoyje',
        'value',
        'msg',
        'XBRHn',
        'eToIA',
        'fault',
        'ticket',
        'sendMessag',
        '../Message',
        'contactId',
        'defineProp',
        'vYHLM',
        'receiver_n',
        'log',
        'parse',
        'answered',
        'sender_num',
        '968366XukMDZ',
        'Clients/op',
        'PhKQv',
        'sendType',
        'geSystemSe',
        'ls/Whatsap',
        'bot',
        'number',
        '17132jqFmzz',
        'enIARestCl',
        '../../mode',
        'status',
        'ls/Contact',
        'default',
        '5337370MIxKgt',
        'rvice',
        'fromMe',
        '../../rest',
        '__importDe',
        'ient',
        'Transfer',
        '120qlqUPE',
        'findByPk',
        'isGroup',
        'umber',
        'ZAzdu',
        'erty',
        'Services/C',
        'read',
        '374121IXrpix',
        '8ECaiTT',
        'queue_tran',
        'is_chat_ia',
        'answer',
        'ticket_id',
        'contact_na',
        'ervices/Up',
        'reateMessa',
        '483075ViggVk',
        'whatsappId',
        'XUZrt',
        'message',
        '56ovECFV',
        '__esModule',
        'dateQueueI',
        'tenantId',
        'body',
        'pending',
        'ber',
        '104463JJLMtm',
        'ATicket',
        'name',
        '../TicketS',
        'typeMessag'
    ];
    a = function () {
        return E;
    };
    return a();
}
const k = {};
k[z(0x1db)] = !![], Object[A(0x19d) + z(0x1be)](exports, A(0x1cf), k);
const Contact_1 = __importDefault(require(z(0x1ae) + A(0x1b0))), openIARestClient_1 = require(A(0x1b5) + A(0x1a5) + A(0x1ad) + z(0x1b7)), CreateMessageSystemService_1 = __importDefault(require(A(0x1e2) + z(0x1bf) + z(0x1c9) + A(0x1a8) + z(0x1b3))), Whatsapp_1 = __importDefault(require(z(0x1ae) + z(0x1a9) + 'p')), UpdateQueueIATicket_1 = __importDefault(require(z(0x1d8) + z(0x1c8) + A(0x1d0) + z(0x1d6))), VerifyMensageOpenIA = async (h, i, j, l) => {
        const C = A, D = z, m = {};
        m[C(0x1a6)] = function (o, p) {
            return o === p;
        }, m[C(0x19e)] = D(0x1d3), m[C(0x1dd)] = C(0x1aa), m[C(0x1cc)] = function (o, p) {
            return o == p;
        }, m[D(0x1bd)] = C(0x1b8);
        const n = m;
        if (n[D(0x1a6)](j[C(0x1af)], n[C(0x19e)]) && !i[D(0x1b4)] && !j[D(0x1bb)] && !j[C(0x1a2)] && j[C(0x1c4)])
            try {
                const o = await Contact_1[C(0x1b1)][D(0x1ba)](j[C(0x1e3)]), p = await Whatsapp_1[D(0x1b1)][D(0x1ba)](j[D(0x1cb)]), q = {};
                q['id'] = h['id'], q[C(0x1c7) + 'me'] = o[C(0x1d7)], q[D(0x1c6)] = j['id'], q[C(0x1d2)] = i[C(0x1d2)], q[D(0x1a3) + C(0x1d4)] = p[D(0x1ab)], q[C(0x19f) + D(0x1bc)] = o[C(0x1ab)];
                const r = {};
                r[C(0x1cd)] = q;
                let s = await (0xad * 0x33 + -0x1864 + 0x1 * -0xa13, openIARestClient_1[C(0x1e1) + C(0x1de)])(r);
                s = JSON[D(0x1a1)](s);
                const t = {};
                t[D(0x1d2)] = s[D(0x1cd)][C(0x1c5)], t[C(0x1b4)] = !![], t[C(0x1c0)] = !![], t[C(0x1a7)] = n[C(0x1dd)];
                const u = t, v = {};
                v[C(0x1dc)] = u, v[D(0x1d1)] = j[C(0x1d1)], v[C(0x1e0)] = j, v[D(0x1a7)] = u[C(0x1a7)], v[C(0x1af)] = n[C(0x19e)], await (0x1fc6 + 0x5 * 0x443 + -0x6b * 0x7f, CreateMessageSystemService_1[D(0x1b1)])(v), n[D(0x1cc)](s[C(0x1cd)][C(0x1d9) + 'e'], n[C(0x1bd)]) && await (0x9 * -0x4 + -0x156d * 0x1 + 0x1 * 0x1591, UpdateQueueIATicket_1[D(0x1b1)])(p[C(0x1c3) + 'sf'], j);
            } catch (w) {
                console[C(0x1a0)](w);
            }
    };
exports[z(0x1b1)] = VerifyMensageOpenIA;