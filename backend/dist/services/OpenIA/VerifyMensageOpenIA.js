'use strict';
const z = b, A = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1ad0 + -0x3 * 0xb1b + 0x1 * 0x74c);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0xd4)) / (-0x17 * 0x56 + -0xa88 * 0x1 + 0x1a9 * 0xb) * (parseInt(y(0xf6)) / (0x42d + -0x1 * -0x73d + -0xb68)) + -parseInt(x(0x10b)) / (-0x1f * 0x11c + 0x1d12 + 0x555) + parseInt(y(0x101)) / (-0x1b3 + 0x22c5 + -0x210e) + -parseInt(x(0xf2)) / (-0x4 * -0x34c + 0x10b3 + -0x1dde) + parseInt(x(0x106)) / (-0x264f + 0x7 * -0x112 + 0x2dd3 * 0x1) + -parseInt(y(0xe9)) / (-0x99e * -0x4 + -0x2073 + -0x5fe) * (-parseInt(y(0x108)) / (-0x1907 + 0x21d3 + -0x8c4)) + -parseInt(x(0xfb)) / (0x1896 + 0x1772 + -0x2fff * 0x1) * (-parseInt(y(0x10f)) / (-0x1 * -0x259d + -0x2 * 0x6c + -0x24bb));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4deb + -0x1 * 0x10f97 + -0x3 * -0x1ea06));
var __importDefault = this && this[z(0x105) + z(0xf8)] || function (c) {
    const B = A;
    return c && c[B(0xd7)] ? c : { 'default': c };
};
function a() {
    const E = [
        'contact_na',
        'ls/Whatsap',
        'body',
        'reateMessa',
        'msg',
        'contactId',
        'message',
        'answer',
        'BqJNX',
        '1HZqpYa',
        'is_chat_ia',
        'Services/C',
        '__esModule',
        'eToIA',
        'ls/Contact',
        'receiver_n',
        'log',
        'defineProp',
        'name',
        'ber',
        'enIARestCl',
        'Transfer',
        'queue_tran',
        'fromMe',
        'status',
        'Clients/op',
        'TLUbx',
        'parse',
        'value',
        'fwOkv',
        '92351MgFpnE',
        'number',
        '../TicketS',
        'dateQueueI',
        'sender_num',
        'typeMessag',
        'umber',
        'findByPk',
        'default',
        '2773935bwMbQG',
        'ticket_id',
        'answered',
        'tenantId',
        '304882afazgP',
        'ticket',
        'fault',
        'sendType',
        'whatsappId',
        '18jScqmC',
        'bot',
        'ient',
        '../../mode',
        'read',
        '../Message',
        '504540qiUXxu',
        'rvice',
        'isGroup',
        'sendMessag',
        '__importDe',
        '29916qVDvKO',
        'ervices/Up',
        '248gzzmfJ',
        'pending',
        'ogvqz',
        '1545828btdalb',
        '../../rest',
        'erty',
        'ATicket',
        '5045790VRWOwT',
        'geSystemSe',
        'zCqxa'
    ];
    a = function () {
        return E;
    };
    return a();
}
const k = {};
k[z(0xe7)] = !![], Object[A(0xdc) + A(0x10d)](exports, z(0xd7), k);
const Contact_1 = __importDefault(require(z(0xfe) + z(0xd9))), openIARestClient_1 = require(z(0x10c) + A(0xe4) + A(0xdf) + z(0xfd)), CreateMessageSystemService_1 = __importDefault(require(A(0x100) + A(0xd6) + z(0xce) + A(0x110) + z(0x102))), Whatsapp_1 = __importDefault(require(z(0xfe) + A(0xcc) + 'p')), UpdateQueueIATicket_1 = __importDefault(require(A(0xeb) + z(0x107) + z(0xec) + A(0x10e))), VerifyMensageOpenIA = async (h, i, j, l) => {
        const C = A, D = A, m = {};
        m[C(0x10a)] = function (o, p) {
            return o === p;
        }, m[D(0xd3)] = C(0x109), m[D(0x111)] = D(0xfc), m[D(0xe8)] = function (o, p) {
            return o == p;
        }, m[C(0xe5)] = D(0xe0);
        const n = m;
        if (n[D(0x10a)](j[C(0xe3)], n[D(0xd3)]) && !i[D(0xe2)] && !j[D(0x103)] && !j[D(0xf4)] && j[C(0xd5)])
            try {
                const o = await Contact_1[C(0xf1)][C(0xf0)](j[C(0xd0)]), p = await Whatsapp_1[C(0xf1)][C(0xf0)](j[C(0xfa)]), q = {};
                q['id'] = h['id'], q[D(0xcb) + 'me'] = o[C(0xdd)], q[D(0xf3)] = j['id'], q[C(0xcd)] = i[D(0xcd)], q[D(0xed) + C(0xde)] = p[C(0xea)], q[D(0xda) + D(0xef)] = o[C(0xea)];
                const r = {};
                r[D(0xd1)] = q;
                let s = await (-0xdcd * -0x2 + -0x15b5 + -0x5e5 * 0x1, openIARestClient_1[C(0x104) + C(0xd8)])(r);
                s = JSON[C(0xe6)](s);
                const t = {};
                t[D(0xcd)] = s[D(0xd1)][D(0xd2)], t[D(0xe2)] = !![], t[D(0xff)] = !![], t[C(0xf9)] = n[D(0x111)];
                const u = t, v = {};
                v[C(0xcf)] = u, v[C(0xf5)] = j[C(0xf5)], v[D(0xf7)] = j, v[C(0xf9)] = u[D(0xf9)], v[D(0xe3)] = n[C(0xd3)], await (-0x10a * 0x5 + -0x1 * 0x9af + 0xd * 0x125, CreateMessageSystemService_1[D(0xf1)])(v), n[D(0xe8)](s[C(0xd1)][D(0xee) + 'e'], n[C(0xe5)]) && await (0x1b2a + 0xd * 0x97 + -0x22d5, UpdateQueueIATicket_1[C(0xf1)])(p[D(0xe1) + 'sf'], j);
            } catch (w) {
                console[D(0xdb)](w);
            }
    };
exports[z(0xf1)] = VerifyMensageOpenIA;