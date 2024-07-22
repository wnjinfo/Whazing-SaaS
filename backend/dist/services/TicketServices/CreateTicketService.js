'use strict';
const B = b, C = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1f8f + -0x1 * 0xb2a + -0x83 * 0x26);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0xf3)) / (0x49c + -0x425 * -0x2 + -0xce5) * (parseInt(z(0x10f)) / (0x21d8 + 0x9 * 0x1a0 + -0x3076)) + parseInt(A(0xf9)) / (-0x2 * -0x109 + -0x1 * -0x527 + 0x736 * -0x1) + parseInt(A(0x122)) / (-0x2 * -0x755 + -0x3 * 0x863 + 0x9 * 0x12b) * (parseInt(A(0x124)) / (-0x30 * 0x85 + -0x171b + -0x602 * -0x8)) + parseInt(z(0x121)) / (0xda * -0x8 + 0xd8b + -0x11 * 0x65) + -parseInt(A(0x10c)) / (-0x16 * -0x15d + 0x23ed + -0x41e4) * (parseInt(z(0xfc)) / (-0x7 * 0x143 + 0x2047 * -0x1 + -0x4 * -0xa49)) + parseInt(A(0x11e)) / (0x1d8 * 0x4 + -0xa * -0x135 + -0x1369 * 0x1) * (-parseInt(z(0x10d)) / (0x1 * -0x4f7 + 0xe9 * 0xf + -0x171 * 0x6)) + parseInt(z(0x12f)) / (-0x1 * 0x625 + 0x3a0 + 0x290);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xbec15 + -0xa9f * 0x2b + -0x1 * -0x1568e9));
var __importDefault = this && this[B(0x131) + C(0x134)] || function (c) {
    const D = C;
    return c && c[D(0x12e)] ? c : { 'default': c };
};
const k = {};
k[B(0xfa)] = !![], Object[C(0x110) + C(0x117)](exports, B(0x12e), k);
const AppError_1 = __importDefault(require(B(0x10a) + C(0x11b) + 'r')), CheckContactOpenTickets_1 = __importDefault(require(B(0x119) + C(0x113) + C(0x118) + B(0x11f))), GetDefaultWhatsApp_1 = __importDefault(require(C(0x119) + C(0x12c) + B(0x132) + 'pp')), socketEmit_1 = __importDefault(require(C(0x119) + C(0x115) + C(0x107))), ShowContactService_1 = __importDefault(require(C(0xff) + C(0x127) + C(0x111) + B(0x126))), CreateLogTicketService_1 = __importDefault(require(C(0x112) + B(0x102) + B(0x103))), ShowTicketService_1 = __importDefault(require(B(0xf5) + B(0x10b))), CreateTicketService = async ({
        contactId: i,
        status: j,
        userId: l,
        tenantId: m,
        channel: n,
        channelId: channelId = undefined
    }) => {
        const E = C, F = B, o = {};
        o[E(0xf7)] = F(0x105), o[F(0xf6)] = F(0x120), o[F(0x128)] = F(0xf8), o[F(0x104)] = E(0x11d) + F(0xfd), o[E(0x10e)] = F(0x101), o[E(0xfe)] = E(0x100), o[E(0x106)] = F(0x12d) + F(0x123);
        const p = o, q = await (0x26c2 + -0x98b + 0x33f * -0x9, GetDefaultWhatsApp_1[F(0x125)])(m, channelId);
        if (!n || ![
                p[F(0xf7)],
                p[F(0xf6)],
                p[F(0x128)]
            ][E(0x114)](n))
            throw new AppError_1[(E(0x125))](p[E(0x104)]);
        await (-0x857 + 0x254e + -0x1cf7, CheckContactOpenTickets_1[E(0x125)])(i);
        const r = {};
        r['id'] = i, r[E(0x116)] = m;
        const {isGroup: s} = await (0x211c + 0xbd9 + -0x1 * 0x2cf5, ShowContactService_1[F(0x125)])(r), t = {};
        t[E(0x11a)] = i, t[F(0x108)] = j, t[E(0x133)] = s, t[F(0x12b)] = l, t[E(0x130) + F(0xfb)] = !![], t[F(0xf4)] = n, t[F(0x116)] = m;
        const {id: u} = await q[F(0x129)](p[F(0x10e)], t), v = {};
        v['id'] = u, v[F(0x116)] = m;
        const w = await (0x3 * 0xc45 + -0x135c + 0x5d1 * -0x3, ShowTicketService_1[F(0x125)])(v);
        if (!w)
            throw new AppError_1[(F(0x125))](p[F(0x104)]);
        const x = {};
        x[F(0x12b)] = l, x[F(0x109)] = w['id'], x[F(0x12a)] = p[E(0xfe)], await (-0x1349 * 0x1 + -0x1e61 + 0x31aa, CreateLogTicketService_1[E(0x125)])(x);
        const y = {};
        return y[E(0x116)] = m, y[E(0x12a)] = p[E(0x106)], y[E(0x11c)] = w, (-0x12 * 0x1d0 + -0x6e2 + -0x2 * -0x13c1, socketEmit_1[F(0x125)])(y), w;
    };
function a() {
    const G = [
        'whatsapp',
        '1551405esMvdY',
        'value',
        'mand',
        '9544xrCYXb',
        'NG_TICKET',
        'bdXMe',
        '../Contact',
        'create',
        'ticket',
        'gTicketSer',
        'vice',
        'dnOvp',
        'instagram',
        'YOrPc',
        'Emit',
        'status',
        'ticketId',
        '../../erro',
        'etService',
        '5754JgXleZ',
        '6237640BbaqXj',
        'RXVhZ',
        '20DNreEC',
        'defineProp',
        'howContact',
        './CreateLo',
        'ers/CheckC',
        'includes',
        'ers/socket',
        'tenantId',
        'erty',
        'ontactOpen',
        '../../help',
        'contactId',
        'rs/AppErro',
        'payload',
        'ERR_CREATI',
        '9BuDtQA',
        'Tickets',
        'telegram',
        '3632550BmwEIe',
        '4ioDfeE',
        'ate',
        '4577935LZQDpc',
        'default',
        'Service',
        'Services/S',
        'bKbvU',
        '$create',
        'type',
        'userId',
        'ers/GetDef',
        'ticket:upd',
        '__esModule',
        '7950316AxZhng',
        'isActiveDe',
        '__importDe',
        'aultWhatsA',
        'isGroup',
        'fault',
        '65163tndgEJ',
        'channel',
        './ShowTick',
        'JIKaw',
        'AYQcu'
    ];
    a = function () {
        return G;
    };
    return a();
}
exports[C(0x125)] = CreateTicketService;