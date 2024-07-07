'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x954 + -0x1 * 0x49e + -0x2dd * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(z(0x1de)) / (0x1 * 0x151c + -0xd * 0x207 + 0x540) * (-parseInt(z(0x1fe)) / (0x9cf + -0x1c2b + -0x92f * -0x2)) + parseInt(A(0x1e0)) / (0x107 * -0xc + -0x214f + -0x1 * -0x2da6) + parseInt(z(0x209)) / (0x10b4 + 0x101b + -0x20cb) * (-parseInt(A(0x1f7)) / (-0x360 * -0x1 + 0x2150 + -0x95 * 0x3f)) + parseInt(A(0x1dc)) / (0x18ae + -0x21 * 0x5a + -0x687 * 0x2) + parseInt(z(0x212)) / (-0xb * 0x1da + 0xbae + 0x8b7 * 0x1) * (-parseInt(A(0x1f5)) / (0x875 * -0x1 + -0x5ae + 0x117 * 0xd)) + parseInt(A(0x1fb)) / (0x12b8 + -0x2424 + -0x6d * -0x29) + parseInt(A(0x1f9)) / (-0x2665 * 0x1 + 0x20f1 + -0x2bf * -0x2) * (parseInt(A(0x1e1)) / (0x2549 + -0xd9 * -0xb + -0x2e91));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2e3 * -0xaa + 0x93b * -0x109 + 0xd04b7));
function a() {
    const G = [
        'ers/socket',
        'aultWhatsA',
        'Emit',
        'ticket:upd',
        'cPiOW',
        'rs/AppErro',
        'ticket',
        'status',
        'Service',
        '560454FequJH',
        'whatsapp',
        '305exqWGe',
        '../../help',
        '511863qSCBRY',
        '594OWcatp',
        'vymZF',
        'instagram',
        'JaEXV',
        'type',
        '__importDe',
        'payload',
        '../../erro',
        'gTicketSer',
        'ate',
        './CreateLo',
        'defineProp',
        'Tickets',
        'erty',
        'ticketId',
        'Services/S',
        'contactId',
        'channel',
        'RPXwe',
        'ekgty',
        '8UChUOp',
        'telegram',
        '1900aTHMZP',
        '$create',
        '196870mZqdTd',
        'default',
        '2372139wFeTXD',
        'value',
        'tenantId',
        '2370JsImhv',
        'etService',
        'HBKsW',
        './ShowTick',
        'create',
        'fKwap',
        'isActiveDe',
        'userId',
        'mand',
        'includes',
        'ers/CheckC',
        '5276QscHnk',
        'isGroup',
        'ERR_CREATI',
        'howContact',
        '../Contact',
        'NG_TICKET',
        'ers/GetDef',
        'fault',
        'vice',
        '2628108pHFymP',
        '__esModule',
        'ontactOpen'
    ];
    a = function () {
        return G;
    };
    return a();
}
var __importDefault = this && this[B(0x1e6) + B(0x210)] || function (c) {
    const D = C;
    return c && c[D(0x213)] ? c : { 'default': c };
};
const k = {};
k[B(0x1fc)] = !![], Object[C(0x1ec) + C(0x1ee)](exports, C(0x213), k);
const AppError_1 = __importDefault(require(C(0x1e8) + B(0x21a) + 'r')), CheckContactOpenTickets_1 = __importDefault(require(B(0x1df) + C(0x208) + B(0x214) + B(0x1ed))), GetDefaultWhatsApp_1 = __importDefault(require(C(0x1df) + B(0x20f) + B(0x216) + 'pp')), socketEmit_1 = __importDefault(require(B(0x1df) + C(0x215) + B(0x217))), ShowContactService_1 = __importDefault(require(C(0x20d) + C(0x1f0) + C(0x20c) + B(0x1db))), CreateLogTicketService_1 = __importDefault(require(B(0x1eb) + B(0x1e9) + B(0x211))), ShowTicketService_1 = __importDefault(require(B(0x201) + B(0x1ff))), CreateTicketService = async ({
        contactId: i,
        status: j,
        userId: l,
        tenantId: m,
        channel: n,
        channelId: channelId = undefined
    }) => {
        const E = C, F = C, o = {};
        o[E(0x1f3)] = E(0x1e3), o[E(0x203)] = F(0x1f6), o[E(0x219)] = E(0x1dd), o[E(0x200)] = E(0x20b) + F(0x20e), o[E(0x1e4)] = F(0x1d9), o[E(0x1e2)] = F(0x202), o[F(0x1f4)] = F(0x218) + E(0x1ea);
        const p = o, q = await (-0x1a * 0x107 + -0x2254 + 0x3d0a, GetDefaultWhatsApp_1[F(0x1fa)])(m, channelId);
        if (!n || ![
                p[E(0x1f3)],
                p[F(0x203)],
                p[F(0x219)]
            ][E(0x207)](n))
            throw new AppError_1[(E(0x1fa))](p[E(0x200)]);
        await (0x178d + 0x117 * 0x22 + -0x3c9b, CheckContactOpenTickets_1[F(0x1fa)])(i);
        const r = {};
        r['id'] = i, r[F(0x1fd)] = m;
        const {isGroup: s} = await (0x22b9 + -0x304 + -0x1fb5, ShowContactService_1[E(0x1fa)])(r), t = {};
        t[F(0x1f1)] = i, t[E(0x1da)] = j, t[F(0x20a)] = s, t[E(0x205)] = l, t[E(0x204) + F(0x206)] = !![], t[F(0x1f2)] = n, t[F(0x1fd)] = m;
        const {id: u} = await q[E(0x1f8)](p[E(0x1e4)], t), v = {};
        v['id'] = u, v[F(0x1fd)] = m;
        const w = await (-0x9b + 0x22a0 + 0x2205 * -0x1, ShowTicketService_1[E(0x1fa)])(v);
        if (!w)
            throw new AppError_1[(E(0x1fa))](p[E(0x200)]);
        const x = {};
        x[E(0x205)] = l, x[E(0x1ef)] = w['id'], x[F(0x1e5)] = p[F(0x1e2)], await (0xb3 * 0x27 + -0x17 * 0x41 + -0x1 * 0x156e, CreateLogTicketService_1[F(0x1fa)])(x);
        const y = {};
        return y[E(0x1fd)] = m, y[E(0x1e5)] = p[E(0x1f4)], y[E(0x1e7)] = w, (-0x1068 + 0x1 * -0x851 + 0x18b9, socketEmit_1[F(0x1fa)])(y), w;
    };
exports[B(0x1fa)] = CreateTicketService;