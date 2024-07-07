'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(z(0x125)) / (0x1fd3 + -0xc0e + -0x13c4) + parseInt(z(0x144)) / (0x1f67 * 0x1 + 0x1d26 + -0x581 * 0xb) + parseInt(z(0x12f)) / (-0x1a86 + 0x10 * 0x82 + 0x1269) + parseInt(A(0x150)) / (0x194a + -0x120f + -0x737) * (parseInt(A(0x129)) / (0x1 * -0x16e6 + -0xa * -0x124 + 0xb83)) + -parseInt(z(0x11a)) / (-0xb0 * 0x17 + 0x18f3 * -0x1 + 0x28c9 * 0x1) * (-parseInt(z(0x12e)) / (0x1 * 0x50e + 0x199d + -0x1ea4)) + -parseInt(z(0x14c)) / (0x35c * -0x2 + -0x216f + 0x282f) * (parseInt(z(0x145)) / (-0x2 * 0x10d5 + 0x7ef * -0x3 + 0x730 * 0x8)) + -parseInt(z(0x126)) / (-0x2663 + 0xd3d * 0x2 + 0x13 * 0xa1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x55eba + -0x1 * -0x14aad + -0x1 * -0x76d17));
var __importDefault = this && this[B(0x153) + B(0x117)] || function (c) {
    const D = C;
    return c && c[D(0x12b)] ? c : { 'default': c };
};
const k = {};
k[B(0x13f)] = !![], Object[B(0x12a) + C(0x130)](exports, C(0x12b), k);
function a() {
    const G = [
        'ticketId',
        'NG_TICKET',
        'fault',
        './ShowTick',
        'default',
        '11478UrPHpm',
        'ERR_CREATI',
        'tenantId',
        'userId',
        '$create',
        'includes',
        'isGroup',
        'mand',
        'Emit',
        'type',
        'channel',
        '161501ypMnjj',
        '2996730OExDpu',
        'Tickets',
        'ers/GetDef',
        '302145iPzVqz',
        'defineProp',
        '__esModule',
        './CreateLo',
        'create',
        '553eQOOYw',
        '983955sAsxnT',
        'erty',
        'ticket',
        'ontactOpen',
        'ZaBBq',
        'contactId',
        'telegram',
        'vice',
        'payload',
        'DymRg',
        'aultWhatsA',
        '../../erro',
        'instagram',
        'Service',
        'ticket:upd',
        'fbYDh',
        'value',
        'DOSSA',
        'ate',
        'ers/CheckC',
        'status',
        '12508FcdfEY',
        '9QmgOzS',
        'DYHTL',
        'Ojvro',
        'ers/socket',
        'etService',
        'rs/AppErro',
        'gTicketSer',
        '2472632aoIATc',
        'isActiveDe',
        '../../help',
        '../Contact',
        '12FGbEtu',
        'howContact',
        'whatsapp',
        '__importDe',
        'aHKJr',
        'Services/S'
    ];
    a = function () {
        return G;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x5 * 0x62b + 0x478 + 0x7 * 0x3ec);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(B(0x13a) + B(0x14a) + 'r')), CheckContactOpenTickets_1 = __importDefault(require(B(0x14e) + C(0x142) + C(0x132) + B(0x127))), GetDefaultWhatsApp_1 = __importDefault(require(C(0x14e) + C(0x128) + C(0x139) + 'pp')), socketEmit_1 = __importDefault(require(B(0x14e) + C(0x148) + B(0x122))), ShowContactService_1 = __importDefault(require(B(0x14f) + B(0x155) + C(0x151) + B(0x13c))), CreateLogTicketService_1 = __importDefault(require(B(0x12c) + B(0x14b) + C(0x136))), ShowTicketService_1 = __importDefault(require(B(0x118) + C(0x149))), CreateTicketService = async ({
        contactId: i,
        status: j,
        userId: l,
        tenantId: m,
        channel: n,
        channelId: channelId = undefined
    }) => {
        const E = C, F = B, o = {};
        o[E(0x138)] = E(0x13b), o[F(0x140)] = E(0x135), o[F(0x13e)] = E(0x152), o[E(0x147)] = F(0x11b) + E(0x116), o[E(0x146)] = F(0x131), o[F(0x133)] = F(0x12d), o[F(0x154)] = E(0x13d) + E(0x141);
        const p = o, q = await (-0xf91 * 0x1 + -0x534 * 0x4 + 0x2461, GetDefaultWhatsApp_1[E(0x119)])(m, channelId);
        if (!n || ![
                p[E(0x138)],
                p[F(0x140)],
                p[E(0x13e)]
            ][E(0x11f)](n))
            throw new AppError_1[(F(0x119))](p[F(0x147)]);
        await (-0x3 * 0x773 + 0x1 * -0x5d5 + 0x1 * 0x1c2e, CheckContactOpenTickets_1[F(0x119)])(i);
        const r = {};
        r['id'] = i, r[E(0x11c)] = m;
        const {isGroup: s} = await (-0x1bd9 + -0x1213 + 0x2dec, ShowContactService_1[F(0x119)])(r), t = {};
        t[E(0x134)] = i, t[E(0x143)] = j, t[E(0x120)] = s, t[E(0x11d)] = l, t[E(0x14d) + E(0x121)] = !![], t[F(0x124)] = n, t[E(0x11c)] = m;
        const {id: u} = await q[F(0x11e)](p[E(0x146)], t), v = {};
        v['id'] = u, v[F(0x11c)] = m;
        const w = await (0xa * -0x233 + -0x191 + 0xa3 * 0x25, ShowTicketService_1[F(0x119)])(v);
        if (!w)
            throw new AppError_1[(E(0x119))](p[F(0x147)]);
        const x = {};
        x[F(0x11d)] = l, x[E(0x115)] = w['id'], x[E(0x123)] = p[E(0x133)], await (-0x1 * 0x15e3 + -0x1 * -0xa21 + -0xbc2 * -0x1, CreateLogTicketService_1[E(0x119)])(x);
        const y = {};
        return y[E(0x11c)] = m, y[E(0x123)] = p[F(0x154)], y[F(0x137)] = w, (0x1 * -0x59a + -0x3 * 0xbdd + -0x2931 * -0x1, socketEmit_1[E(0x119)])(y), w;
    };
exports[B(0x119)] = CreateTicketService;