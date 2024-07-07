'use strict';
const A = b, B = b;
(function (c, d) {
    const y = b, z = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(y(0x1f6)) / (0x1841 * -0x1 + 0x1df9 + -0x5b7) * (-parseInt(y(0x251)) / (-0x1 * -0x3df + 0x1e1e + -0x21fb)) + -parseInt(z(0x248)) / (-0x249f + 0x8b3 + 0x1bef * 0x1) + parseInt(z(0x20d)) / (0x109 * 0x1d + 0xe78 + -0x1ef * 0x17) * (parseInt(z(0x25e)) / (-0x1 * -0xfbd + -0xf * 0x18a + 0x2 * 0x3af)) + parseInt(y(0x20f)) / (-0x5f6 + -0x67 * 0x1c + 0x170 * 0xc) + parseInt(z(0x243)) / (-0x2 * -0xbfb + -0x37d * 0x7 + -0x4 * -0x1f) * (-parseInt(y(0x231)) / (-0x707 + 0x2f1 + 0x41e)) + parseInt(y(0x265)) / (-0x4 * 0x51 + 0x2 * 0x11f2 + -0x2297) + parseInt(y(0x219)) / (-0x14 * -0x14d + 0xe0c + -0x2 * 0x1403);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x43079 + 0x2f38a * 0x1 + 0xae26));
var __importDefault = this && this[A(0x20b) + A(0x246)] || function (c) {
    const C = B;
    return c && c[C(0x1ee)] ? c : { 'default': c };
};
const q = {};
q[A(0x223)] = !![], Object[B(0x21d) + B(0x241)](exports, A(0x1ee), q), exports[A(0x26f)] = exports[A(0x253)] = exports[A(0x209)] = exports[A(0x203)] = exports[B(0x25f) + A(0x232)] = exports[A(0x21b)] = void (0xa3 * -0x1 + 0x70d * 0x3 + -0xca * 0x1a);
const AppError_1 = __importDefault(require(A(0x273) + B(0x23a))), DeleteMessageSystem_1 = __importDefault(require(B(0x20c) + A(0x26d) + B(0x27a))), SetTicketMessagesAsRead_1 = __importDefault(require(B(0x20c) + A(0x1fc) + A(0x1fa) + A(0x268))), Message_1 = __importDefault(require(A(0x26c) + B(0x206))), CreateForwardMessageService_1 = __importDefault(require(A(0x1f9) + A(0x235) + A(0x242) + B(0x263) + B(0x202) + A(0x208))), CreateMessageSystemService_1 = __importDefault(require(A(0x1f9) + B(0x235) + A(0x242) + B(0x20a) + A(0x205) + A(0x24c))), ListMessagesService_1 = __importDefault(require(B(0x1f9) + A(0x235) + B(0x213) + A(0x224) + A(0x256))), ShowTicketService_1 = __importDefault(require(A(0x1f9) + A(0x1f3) + B(0x234) + A(0x279) + B(0x24c))), logger_1 = require(A(0x221) + A(0x22a)), EditWhatsAppMessage_1 = __importDefault(require(B(0x1f9) + A(0x259) + B(0x24f) + A(0x237) + A(0x26e))), index = async (e, f) => {
        const D = A, E = A, {ticketId: g} = e[D(0x222)], {pageNumber: h} = e[E(0x271)], {tenantId: i} = e[D(0x270)], j = {};
        j[E(0x25b)] = h, j[D(0x26a)] = g, j[E(0x255)] = i;
        const {
            count: k,
            messages: l,
            messagesOffLine: m,
            ticket: n,
            hasMore: o
        } = await (-0x208f + 0x17df + 0x4 * 0x22c, ListMessagesService_1[E(0x21a)])(j);
        (0x1110 + 0x1191 * 0x1 + 0x5 * -0x6ed, SetTicketMessagesAsRead_1[E(0x21a)])(n);
        const p = {};
        return p[E(0x22b)] = k, p[E(0x233)] = l, p[D(0x230) + D(0x1f4)] = m, p[E(0x23b)] = n, p[D(0x21f)] = o, f[E(0x257)](p);
    };
exports[B(0x21b)] = index;
const ListCountMensagens = async (f, g) => {
    const F = A, G = A, h = {};
    h[F(0x210)] = G(0x1f5) + G(0x20e) + 'G', h[F(0x254)] = function (j, k) {
        return j !== k;
    }, h[G(0x238)] = F(0x24b), h[G(0x26b)] = F(0x1fd) + G(0x22e) + G(0x1f8) + G(0x1fb);
    const i = h;
    try {
        const j = await Message_1[F(0x21a)][G(0x22b)](), k = {};
        return k[F(0x22b)] = j, g[G(0x257)](k);
    } catch (l) {
        if (i[G(0x254)](i[G(0x238)], i[G(0x238)])) {
            f[G(0x22c)][G(0x21c)](F(0x1f5) + F(0x20e) + G(0x266) + g);
            throw new h[(F(0x21a))](i[G(0x210)]);
        } else {
            const n = {};
            return n[F(0x21c)] = i[F(0x26b)], g[F(0x275)](0x1b * 0x53 + 0x3 * -0x30b + 0x254)[G(0x257)](n);
        }
    }
};
exports[B(0x25f) + B(0x232)] = ListCountMensagens;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x4ae * 0x1 + 0x7 * 0x78 + -0x608);
        let h = e[f];
        return h;
    }, b(c, d);
}
const store = async (f, g) => {
    const H = B, I = B, h = {};
    h[H(0x25a)] = H(0x229), h[I(0x227)] = H(0x201), h[I(0x220)] = H(0x1fd) + H(0x22e) + H(0x1f8) + I(0x1fb), h[H(0x239)] = function (r, s) {
        return r === s;
    }, h[H(0x1f0)] = I(0x24a), h[I(0x261)] = H(0x269), h[H(0x214)] = I(0x1ff) + H(0x1f7) + I(0x274), h[I(0x24d)] = H(0x240), h[H(0x247)] = H(0x225), h[I(0x245)] = function (r, s) {
        return r !== s;
    }, h[H(0x1fe)] = I(0x207), h[H(0x250)] = I(0x252), h[H(0x212)] = H(0x23e) + H(0x215) + I(0x236);
    const i = h, {ticketId: j} = f[H(0x222)], {
            tenantId: k,
            id: l
        } = f[I(0x270)], m = f[H(0x204)], n = f[I(0x21e)], o = {};
    o['id'] = j, o[H(0x255)] = k;
    const p = await (-0x32b + -0x1 * -0x1315 + -0xfea, ShowTicketService_1[H(0x21a)])(o);
    try {
        if (i[H(0x239)](i[I(0x1f0)], i[I(0x261)])) {
            const s = {};
            return s[I(0x21c)] = f[I(0x1f1)], s[I(0x275)](-0x1 * 0x26c + 0xe98 + -0x61 * 0x1c)[H(0x257)](s);
        } else
            await (0x9d2 * 0x1 + 0xd9a + -0x176c, SetTicketMessagesAsRead_1[H(0x21a)])(p);
    } catch (s) {
        console[H(0x262)](i[H(0x214)], s);
    }
    try {
        if (n)
            n[I(0x23f)](async (t, u) => {
                const J = I, K = H, v = {
                        'fromMe': m[J(0x23d)],
                        'body': Array[K(0x258)](m[K(0x204)]) ? m[K(0x204)][u] : m[J(0x204)],
                        'idFront': Array[K(0x258)](m[K(0x1ef)]) ? m[K(0x1ef)][u] : m[K(0x1ef)],
                        'read': ![]
                    };
                await (-0x1 * -0x86e + -0x6a6 + -0xe4 * 0x2, CreateMessageSystemService_1[K(0x21a)])({
                    'msg': v,
                    'tenantId': k,
                    'medias': [t],
                    'ticket': p,
                    'userId': l,
                    'scheduleDate': m[K(0x228) + 'te'] ? new Date(Array[J(0x258)](m[J(0x228) + 'te']) ? m[J(0x228) + 'te'][u] : m[J(0x228) + 'te']) : undefined,
                    'sendType': m[K(0x218)] || i[J(0x25a)],
                    'status': i[K(0x227)],
                    'idFront': Array[J(0x258)](m[J(0x1ef)]) ? m[J(0x1ef)][u] : m[K(0x1ef)]
                });
            });
        else {
            if (i[I(0x239)](i[I(0x24d)], i[H(0x247)])) {
                const u = {};
                return u[I(0x21c)] = i[I(0x220)], o[I(0x275)](0x1f9d + -0x1c9 * 0x2 + -0x1a17)[H(0x257)](u);
            } else {
                const u = {};
                u[I(0x23c)] = m, u[H(0x255)] = k, u[I(0x1f2)] = n, u[I(0x23b)] = p, u[I(0x216)] = l, u[I(0x228) + 'te'] = m[H(0x228) + 'te'], u[I(0x218)] = m[I(0x218)] || i[I(0x25a)], u[H(0x275)] = i[H(0x227)], u[H(0x1ef)] = m[H(0x1ef)], await (-0x17ed + -0x1 * 0x943 + 0x2130, CreateMessageSystemService_1[I(0x21a)])(u);
            }
        }
    } catch (v) {
        if (i[H(0x245)](i[I(0x1fe)], i[H(0x250)]))
            console[I(0x262)](i[H(0x212)], v);
        else {
            const x = {};
            return x[H(0x21a)] = j, g && h[I(0x1ee)] ? i : x;
        }
    }
    return g[H(0x244)]();
};
function a() {
    const R = [
        'BoMpY',
        'truou',
        'log',
        'eateForwar',
        'Vpzrg',
        '2390076XRHajc',
        'G:\x20',
        'AQDBs',
        'Read',
        'cFJDZ',
        'ticketId',
        'qXFTy',
        '../models/',
        '/DeleteMes',
        'sage',
        'forward',
        'user',
        'query',
        'ticketIdOr',
        '../errors/',
        'ead',
        'status',
        'ERR_EDITIN',
        'contact',
        'oJAbY',
        'wTicketSer',
        'sageSystem',
        '__esModule',
        'idFront',
        'LaJoH',
        'message',
        'medias',
        's/TicketSe',
        'fLine',
        'ERR_DELETE',
        '343193RpqrOg',
        'essagesAsR',
        'ontar\x20as\x20m',
        '../service',
        'MessagesAs',
        'ensagens.',
        '/SetTicket',
        'Ocorreu\x20um',
        'ZbGRI',
        'SetTicketM',
        'ZNOZR',
        'pending',
        'dMessageSe',
        'store',
        'body',
        'eSystemSer',
        'Message',
        'HEEMO',
        'rvice',
        'edit',
        'eateMessag',
        '__importDe',
        '../helpers',
        '4npnria',
        '_SYSTEM_MS',
        '3597702BhnMMC',
        'nwIxQ',
        'NwAwh',
        'JcCbq',
        'ervices/Li',
        'dFTaQ',
        'MessageSys',
        'userId',
        'CLPLy',
        'sendType',
        '1708400VLRhAc',
        'default',
        'index',
        'error',
        'defineProp',
        'files',
        'hasMore',
        'NNMnY',
        '../utils/l',
        'params',
        'value',
        'stMessages',
        'jWwSF',
        'yCeVO',
        'mPWzy',
        'scheduleDa',
        'chat',
        'ogger',
        'count',
        'logger',
        'udVwk',
        '\x20erro\x20ao\x20c',
        'YVujy',
        'messagesOf',
        '18136xpkAPF',
        'ensagens',
        'messages',
        'rvices/Sho',
        's/MessageS',
        'temService',
        'hatsAppMes',
        'Lrkqc',
        'hzBOk',
        'AppError',
        'ticket',
        'msg',
        'fromMe',
        'try\x20Create',
        'forEach',
        'YLMuT',
        'erty',
        'ervices/Cr',
        '1211ZpUrsz',
        'send',
        'sJARN',
        'fault',
        'xsGPE',
        '992682eOLVeI',
        'tJnIq',
        'fZBLH',
        'TuBbP',
        'vice',
        'dWGHX',
        'G_WAPP_MSG',
        'ices/EditW',
        'LQORs',
        '4oYAQxw',
        'gudkY',
        'remove',
        'xIwxm',
        'tenantId',
        'Service',
        'json',
        'isArray',
        's/WbotServ',
        'GpRxi',
        'pageNumber',
        'igin',
        'messageId',
        '4430015ugdXAk',
        'ListCountM'
    ];
    a = function () {
        return R;
    };
    return a();
}
exports[B(0x203)] = store;
const edit = async (f, g) => {
    const L = B, M = B, h = {};
    h[L(0x226)] = function (n, o) {
        return n instanceof o;
    }, h[M(0x264)] = function (n, o) {
        return n === o;
    }, h[M(0x260)] = M(0x276) + M(0x24e), h[L(0x211)] = M(0x22f), h[M(0x217)] = function (n, o) {
        return n instanceof o;
    };
    const i = h, {messageId: j} = f[L(0x222)], {tenantId: k} = f[L(0x270)], l = +k, {body: m} = f[M(0x204)];
    try {
        const n = {};
        n[M(0x25d)] = j, n[L(0x255)] = l, n[M(0x204)] = m;
        const {
            ticketId: o,
            message: p
        } = await (-0xd * 0x17d + -0x1273 + 0x25cc * 0x1, EditWhatsAppMessage_1[M(0x21a)])(n);
    } catch (r) {
        if (i[L(0x264)](i[L(0x211)], i[L(0x211)])) {
            if (i[M(0x217)](r, AppError_1[M(0x21a)]) && i[M(0x264)](r[M(0x1f1)], i[M(0x260)])) {
                const s = {};
                return s[L(0x21c)] = r[L(0x1f1)], g[L(0x275)](0x2463 + -0x1359 + -0x2 * 0x7bd)[L(0x257)](s);
            }
            throw r;
        } else {
            if (i[L(0x226)](i, j[L(0x21a)]) && i[M(0x264)](k[M(0x1f1)], i[L(0x260)])) {
                const u = {};
                return u[L(0x21c)] = p[M(0x1f1)], o[L(0x275)](-0x1428 + 0x123 + 0x1495)[M(0x257)](u);
            }
            throw n;
        }
    }
    return g[L(0x244)]();
};
exports[A(0x209)] = edit;
const remove = async (d, e) => {
    const N = A, O = B, f = {};
    f[N(0x278)] = O(0x1f5) + O(0x20e) + 'G';
    const g = f, {messageId: h} = d[N(0x222)], {tenantId: i} = d[O(0x270)];
    try {
        await (-0x338 * -0x6 + -0x1fdc + -0xb * -0x124, DeleteMessageSystem_1[O(0x21a)])(d[N(0x204)]['id'], h, i);
    } catch (j) {
        logger_1[N(0x22c)][N(0x21c)](O(0x1f5) + N(0x20e) + O(0x266) + j);
        throw new AppError_1[(O(0x21a))](g[N(0x278)]);
    }
    return e[N(0x244)]();
};
exports[A(0x253)] = remove;
const forward = async (e, f) => {
    const P = A, Q = B, g = {};
    g[P(0x200)] = Q(0x1ff) + P(0x1f7) + P(0x274), g[P(0x267)] = function (k, l) {
        return k !== l;
    }, g[P(0x249)] = P(0x22d);
    const h = g, i = e[Q(0x204)], {user: j} = e;
    for (const k of i[Q(0x233)]) {
        if (h[P(0x267)](h[Q(0x249)], h[Q(0x249)]))
            e[P(0x262)](h[P(0x200)], f);
        else {
            const m = {};
            m[Q(0x216)] = j['id'], m[Q(0x255)] = j[P(0x255)], m[Q(0x1f1)] = k, m[P(0x277)] = i[P(0x277)], m[Q(0x272) + P(0x25c)] = k[P(0x26a)], await (0x11c0 + -0x31 + -0x9b * 0x1d, CreateForwardMessageService_1[P(0x21a)])(m);
        }
    }
    return f[Q(0x244)]();
};
exports[A(0x26f)] = forward;