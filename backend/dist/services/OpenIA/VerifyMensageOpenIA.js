'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x1a1)) / (0x6b * 0x14 + 0x1ab8 + -0x2313) + -parseInt(x(0x1ae)) / (0x1a80 + 0x986 + 0x2404 * -0x1) + -parseInt(x(0x1a4)) / (-0xf12 * -0x1 + -0x25 * -0x6d + 0xe8 * -0x22) + -parseInt(y(0x191)) / (0x2 * -0x4d6 + 0x1d91 + 0x13e1 * -0x1) * (parseInt(x(0x1b0)) / (-0x6b9 + -0x103e + -0x16fc * -0x1)) + parseInt(x(0x1b7)) / (0x264b + -0x83b + -0x2 * 0xf05) * (-parseInt(x(0x1a0)) / (-0x23 * 0xc1 + 0x1524 + 0x546)) + -parseInt(y(0x19f)) / (-0x872 + -0x1f31 + 0x1 * 0x27ab) + -parseInt(y(0x184)) / (0x2 * 0x8c6 + -0x13 * 0x20c + 0x1a5 * 0xd) * (-parseInt(x(0x1bb)) / (-0xb * -0xf1 + 0x1 * 0x15d8 + -0x2029));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x8f93d * 0x1 + -0x2 * -0xc0a72 + 0x24e71 * -0x1));
var __importDefault = this && this[z(0x192) + A(0x18d)] || function (c) {
    const B = z;
    return c && c[B(0x1b1)] ? c : { 'default': c };
};
function a() {
    const E = [
        '__importDe',
        'message',
        'contactId',
        'body',
        '../../rest',
        'number',
        'umber',
        'is_chat_ia',
        'fromMe',
        'defineProp',
        'name',
        'Services/C',
        'Clients/op',
        '11354888SzQsuD',
        '7fnXhvM',
        '489341sRJqrC',
        'default',
        'enIARestCl',
        '3512517VWRfrn',
        'contact_na',
        'sendType',
        'pending',
        'log',
        'isGroup',
        'geSystemSe',
        'ls/Contact',
        'rsQCC',
        'findByPk',
        '459284KSDxxy',
        'ATicket',
        '20Zgukyl',
        '__esModule',
        'parse',
        'whatsappId',
        'ber',
        'Transfer',
        'queue_tran',
        '8479182ZyOByt',
        'dateQueueI',
        'LMBoI',
        'bot',
        '10EaCqZZ',
        'answered',
        'Eoxko',
        'typeMessag',
        'tenantId',
        'value',
        'mlPhU',
        'status',
        '../../mode',
        'OcUQE',
        'receiver_n',
        'ticket',
        'eToIA',
        'sender_num',
        'rvice',
        'ls/Whatsap',
        '60674598cUhobh',
        'ervices/Up',
        'ient',
        'ticket_id',
        'msg',
        'answer',
        'reateMessa',
        '../Message',
        '../TicketS',
        'fault',
        'sendMessag',
        'erty',
        'read',
        '1180276hkLDHp'
    ];
    a = function () {
        return E;
    };
    return a();
}
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2289 + -0x18b4 + -0x85e);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[A(0x179)] = !![], Object[A(0x19b) + z(0x18f)](exports, z(0x1b1), k);
const Contact_1 = __importDefault(require(z(0x17c) + A(0x1ab))), openIARestClient_1 = require(z(0x196) + A(0x19e) + z(0x1a3) + A(0x186)), CreateMessageSystemService_1 = __importDefault(require(z(0x18b) + A(0x19d) + A(0x18a) + z(0x1aa) + z(0x182))), Whatsapp_1 = __importDefault(require(A(0x17c) + z(0x183) + 'p')), UpdateQueueIATicket_1 = __importDefault(require(z(0x18c) + z(0x185) + z(0x1b8) + A(0x1af))), VerifyMensageOpenIA = async (h, i, j, l) => {
        const C = A, D = z, m = {};
        m[C(0x1ac)] = function (o, p) {
            return o === p;
        }, m[D(0x17d)] = D(0x1a7), m[D(0x1bd)] = D(0x1ba), m[C(0x17a)] = function (o, p) {
            return o == p;
        }, m[C(0x1b9)] = D(0x1b5);
        const n = m;
        if (n[C(0x1ac)](j[D(0x17b)], n[D(0x17d)]) && !i[D(0x19a)] && !j[D(0x1a9)] && !j[D(0x1bc)] && j[D(0x199)])
            try {
                const o = await Contact_1[C(0x1a2)][C(0x1ad)](j[C(0x194)]), p = await Whatsapp_1[C(0x1a2)][D(0x1ad)](j[C(0x1b3)]), q = {};
                q['id'] = h['id'], q[D(0x1a5) + 'me'] = o[C(0x19c)], q[C(0x187)] = j['id'], q[C(0x195)] = i[C(0x195)], q[D(0x181) + C(0x1b4)] = p[D(0x197)], q[C(0x17e) + C(0x198)] = o[D(0x197)];
                const r = {};
                r[D(0x193)] = q;
                let s = await (0x2a * -0x6a + 0x1cb3 + -0x243 * 0x5, openIARestClient_1[C(0x18e) + C(0x180)])(r);
                s = JSON[D(0x1b2)](s);
                const t = {};
                t[C(0x195)] = s[D(0x193)][C(0x189)], t[D(0x19a)] = !![], t[C(0x190)] = !![], t[C(0x1a6)] = n[C(0x1bd)];
                const u = t, v = {};
                v[C(0x188)] = u, v[D(0x178)] = j[D(0x178)], v[C(0x17f)] = j, v[D(0x1a6)] = u[C(0x1a6)], v[D(0x17b)] = n[D(0x17d)], await (0x933 + -0xbd9 + 0x2a6, CreateMessageSystemService_1[D(0x1a2)])(v), n[D(0x17a)](s[D(0x193)][C(0x177) + 'e'], n[D(0x1b9)]) && await (-0x29c * 0x6 + -0x225f + 0x3207, UpdateQueueIATicket_1[D(0x1a2)])(p[D(0x1b6) + 'sf'], j);
            } catch (w) {
                console[C(0x1a8)](w);
            }
    };
exports[A(0x1a2)] = VerifyMensageOpenIA;