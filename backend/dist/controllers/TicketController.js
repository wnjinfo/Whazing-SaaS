'use strict';
const K = b, L = b;
(function (c, d) {
    const I = b, J = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(I(0xce)) / (-0x5e * 0x1a + -0x2453 + 0x2de0) * (-parseInt(I(0x108)) / (-0x28 * 0x4c + 0xa62 + 0x180)) + -parseInt(J(0xd2)) / (-0x231b * -0x1 + 0x8da + -0x2bf2) + -parseInt(J(0x92)) / (-0x101c + 0xbfa + -0x9 * -0x76) * (parseInt(I(0x113)) / (0x1ea9 + 0x26bf * -0x1 + 0x81b)) + parseInt(I(0x11b)) / (-0x4 * 0x676 + -0xd5 + 0x1ab3) + parseInt(J(0x96)) / (0xbcb * 0x2 + 0xf64 + -0x26f3) * (parseInt(I(0xcf)) / (-0x3 * -0x22c + 0x437 + -0xab3)) + parseInt(I(0xc8)) / (0x808 + 0x2b * 0x24 + -0x1 * 0xe0b) + parseInt(J(0x91)) / (0x16a1 + -0x1fe5 + 0x94e);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2d500 * -0x5 + 0xe9289 + 0x86e55 * -0x2));
var __importDefault = this && this[K(0xa9) + K(0xa0)] || function (c) {
    const M = K;
    return c && c[M(0x11f)] ? c : { 'default': c };
};
const n = {};
n[K(0xdb)] = !![], Object[K(0xc6) + K(0xb8)](exports, L(0x11f), n), exports[K(0xa3) + L(0xc4)] = exports[K(0x99)] = exports[K(0xd8)] = exports[K(0x9c)] = exports[K(0xf9)] = exports[L(0x112)] = void (-0x1a0d + -0x1 * 0x191 + 0x1b9e);
const sequelize_1 = require(L(0x111)), socket_1 = require(K(0xc3) + L(0xc4)), Message_1 = __importDefault(require(K(0xe3) + K(0x9d))), CreateLogTicketService_1 = __importDefault(require(K(0xec) + K(0xa4) + L(0xb7) + L(0xe7) + L(0xc1))), CreateTicketService_1 = __importDefault(require(L(0xec) + L(0xa4) + K(0xb7) + K(0xab) + L(0xd4))), DeleteTicketService_1 = __importDefault(require(K(0xec) + K(0xa4) + L(0xf3) + L(0xbb) + L(0xd4))), ListTicketsService_1 = __importDefault(require(L(0xec) + L(0xa4) + K(0x121) + K(0x11c) + K(0xbd))), ShowLogTicketService_1 = __importDefault(require(K(0xec) + K(0xa4) + L(0x126) + L(0x8f) + L(0x127))), ShowTicketService_1 = __importDefault(require(L(0xec) + L(0xa4) + K(0x126) + K(0x106) + K(0x119))), UpdateTicketService_1 = __importDefault(require(L(0xec) + L(0xa4) + L(0xef) + L(0xab) + L(0xd4))), Whatsapp_1 = __importDefault(require(L(0xe3) + K(0xf5))), AppError_1 = __importDefault(require(L(0xae) + K(0xcd))), CreateMessageSystemService_1 = __importDefault(require(L(0xec) + K(0xaa) + K(0xbf) + L(0x9f) + K(0xf2) + K(0x119))), pupa_1 = require(K(0xaf) + L(0xf0)), Ticket_1 = __importDefault(require(K(0xe3) + L(0x10a))), ListSettingsService_1 = __importDefault(require(K(0xec) + L(0x93) + L(0xa7) + K(0x12a) + L(0x127))), index = async (e, f) => {
        const N = L, O = L, {
                tenantId: g,
                profile: h
            } = e[N(0xde)], {
                searchParam: i,
                pageNumber: j,
                status: k,
                date: l,
                showAll: m,
                withUnreadMessages: o,
                queuesIds: p,
                isNotAssignedUser: q,
                includeNotQueueDefined: r
            } = e[O(0x8c)], s = e[N(0xde)]['id'], t = {};
        t[O(0x102) + 'm'] = i, t[O(0x104)] = j, t[O(0xd7)] = k, t[O(0x122)] = l, t[O(0xfa)] = m, t[O(0xf4)] = s, t[O(0xc9) + O(0xfc)] = o, t[O(0xe4)] = p, t[O(0xfb) + N(0x114)] = q, t[N(0x8a) + N(0xd0) + 'ed'] = r, t[N(0xdd)] = g, t[N(0xac)] = h;
        const {
                tickets: u,
                count: v,
                hasMore: w
            } = await (0x4cd * 0x3 + 0x11f6 + -0x205d, ListTicketsService_1[O(0xe8)])(t), x = {};
        return x[O(0xb1)] = u, x[N(0xcb)] = v, x[O(0xb9)] = w, f[N(0xd7)](0x6f1 * -0x5 + -0x2 * 0xd25 + 0xc5b * 0x5)[O(0xda)](x);
    };
exports[K(0x112)] = index;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x268a + 0x17d7 + 0xf3d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const store = async (i, j) => {
    const P = K, Q = L, k = {};
    k[P(0x107)] = function (C, D) {
        return C === D;
    }, k[Q(0x110)] = P(0xcc) + P(0x129) + 'ts', k[Q(0x9b)] = Q(0xff), k[Q(0x98)] = Q(0x11a), k[Q(0xa8)] = Q(0xdf), k[P(0xad)] = function (C, D) {
        return C === D;
    }, k[Q(0x94)] = Q(0xb0), k[P(0xf7)] = function (C, D) {
        return C != D;
    }, k[P(0xeb)] = function (C, D) {
        return C == D;
    }, k[Q(0xe9)] = Q(0xe2) + P(0x10d) + P(0xb2) + Q(0xd9), k[P(0x10b)] = function (C, D) {
        return C === D;
    }, k[Q(0xb4)] = Q(0x11d);
    const l = k, {tenantId: m} = i[P(0xde)], {
            contactId: o,
            status: p,
            userId: q,
            channel: r,
            channelId: s
        } = i[Q(0x109)], t = {};
    t[Q(0xd7)] = l[Q(0x98)];
    const u = {};
    u[P(0xd7)] = l[P(0xa8)];
    const v = {
        [sequelize_1['Op']['or']]: [
            t,
            u
        ]
    };
    v[P(0xf1)] = o, v[Q(0xdd)] = m, v[P(0xbe)] = r;
    const w = {};
    w[P(0x12b)] = v;
    const x = await Ticket_1[P(0xe8)][Q(0xc0)](w), y = await (-0x1722 + 0x106f + 0x6b3, ListSettingsService_1[Q(0xe8)])(m), z = l[P(0xad)](y?.[Q(0x116)](C => {
            const R = P, S = Q;
            return l[R(0x107)](C[S(0x118)], l[S(0x110)]);
        })?.[P(0xdb)], l[Q(0x94)]) ? 'S' : 'N';
    if (x && !!x[P(0xf4)] && l[P(0xf7)](x[Q(0xf4)], q) && l[Q(0xeb)](z, 'S'))
        throw new AppError_1[(P(0xe8))](l[P(0xe9)]);
    if (x) {
        if (l[P(0x10b)](l[Q(0xb4)], l[P(0xb4)]))
            return j[Q(0xd7)](0x1756 + -0x1abe + 0x430)[P(0xda)](x);
        else {
            const D = (0x1499 + -0x1742 + 0x1 * 0x2a9, E[Q(0xea)])(), E = {};
            E[P(0x117)] = l[P(0x9b)], E[P(0xe1)] = l, D['to'](i + ':' + j[P(0xd7)])[P(0x10e)](k + P(0x12d), E);
        }
    }
    const A = {};
    A[P(0xf1)] = o, A[P(0xd7)] = p, A[Q(0xf4)] = q, A[P(0xdd)] = m, A[P(0xbe)] = r, A[P(0x8b)] = s;
    const B = await (0xfcb * 0x1 + -0x2 * -0x32a + 0x329 * -0x7, CreateTicketService_1[P(0xe8)])(A);
    if (!q) {
        const D = (0x262a * 0x1 + 0x27 * -0x9b + -0xe8d, socket_1[P(0xea)])();
        D['to'](m + ':' + B[P(0xd7)])[P(0x10e)](m + Q(0x12d), {
            'action': l[Q(0x9b)],
            'ticket': B
        });
    }
    return j[P(0xd7)](-0x20f6 + -0x1c80 + 0x3e3e)[P(0xda)](B);
};
exports[K(0xf9)] = store;
const show = async (i, j) => {
    const T = K, U = L, k = {};
    k[T(0x124)] = U(0xdf), k[T(0xe6)] = T(0xc7) + T(0x120), k[U(0x8d)] = T(0xf6);
    const l = k, {ticketId: m} = i[U(0xf8)], {tenantId: o} = i[U(0xde)], p = i[T(0xde)]['id'], q = {};
    q['id'] = m, q[U(0xdd)] = o;
    const r = await (0x2444 + -0x64e + -0xefb * 0x2, ShowTicketService_1[T(0xe8)])(q), s = { [sequelize_1['Op'][T(0xbc)]]: null }, t = {};
    t[T(0xf1)] = r[T(0xf1)], t[T(0xfe) + 'te'] = s, t[U(0xd7)] = l[U(0x124)];
    const u = t, v = {};
    v[U(0x12b)] = u;
    const w = await Message_1[U(0xe8)][U(0xa6)](v);
    r[U(0xb6) + 'ue'](l[U(0xe6)], w);
    const x = {};
    return x[T(0xf4)] = p, x[T(0xca)] = m, x[U(0x125)] = l[U(0x8d)], await (-0x23ba * 0x1 + 0x1bde + -0x1f7 * -0x4, CreateLogTicketService_1[T(0xe8)])(x), j[T(0xd7)](0x20e1 + 0xb * -0x277 + -0x4fc)[T(0xda)](r);
};
function a() {
    const a1 = [
        'queuesIds',
        'fromMe',
        'MQlqO',
        'ateLogTick',
        'default',
        'sdJij',
        'getIO',
        'qWIHK',
        '../service',
        'protocol',
        'userIdRequ',
        'rvices/Upd',
        'upa',
        'contactId',
        'eSystemSer',
        'rvices/Del',
        'userId',
        'Whatsapp',
        'access',
        'NybBM',
        'params',
        'store',
        'showAll',
        'isNotAssig',
        'Messages',
        'LFkAT',
        'scheduleDa',
        'create',
        ':notificat',
        'farewellMe',
        'searchPara',
        'isFarewell',
        'pageNumber',
        'YzRfh',
        'wTicketSer',
        'nKjKh',
        '16022KQAgVE',
        'body',
        'Ticket',
        'mZjHI',
        'yLXvb',
        'atribuido\x20',
        'emit',
        'est',
        'HqNTh',
        'sequelize',
        'index',
        '30695ITaRvB',
        'nedUser',
        'read',
        'find',
        'action',
        'key',
        'vice',
        'open',
        '683706oACSOH',
        'tTicketsSe',
        'Snymf',
        'IjDYA',
        '__esModule',
        'essages',
        'rvices/Lis',
        'date',
        'name',
        'IcDxg',
        'type',
        'rvices/Sho',
        'Service',
        'ion',
        'ignedTicke',
        'stSettings',
        'where',
        'closed',
        ':ticket',
        'DQQPC',
        'includeNot',
        'channelId',
        'query',
        'ddqAS',
        'ence',
        'wLogTicket',
        'ticketData',
        '12027730pjCNDK',
        '904wpgKEW',
        's/SettingS',
        'NhalS',
        'isTransfer',
        '14xIHPFn',
        'contact',
        'eMuwb',
        'remove',
        'pupa',
        'KhcVE',
        'show',
        'Message',
        'OjmuW',
        'eateMessag',
        'fault',
        'note',
        'eted',
        'showLogsTi',
        's/TicketSe',
        'TXPsy',
        'findAll',
        'ervices/Li',
        'uVzSZ',
        '__importDe',
        's/MessageS',
        'ateTicketS',
        'profile',
        'pLjuq',
        '../errors/',
        '../utils/p',
        'enabled',
        'tickets',
        'para\x20outro',
        'ticket\x20del',
        'QBJYB',
        'ycybI',
        'setDataVal',
        'rvices/Cre',
        'erty',
        'hasMore',
        'whatsappId',
        'eteTicketS',
        'not',
        'rvice',
        'channel',
        'ervices/Cr',
        'findOne',
        'etService',
        'message',
        '../libs/so',
        'cket',
        'itgbq',
        'defineProp',
        'scheduledM',
        '10876041xIeLvj',
        'withUnread',
        'ticketId',
        'count',
        'NotViewAss',
        'AppError',
        '25QYTpCX',
        '3563928JaMbAp',
        'QueueDefin',
        'sendType',
        '3151545ddqzbm',
        'ssage',
        'ervice',
        'delete',
        'msg',
        'status',
        'update',
        '\x20usuário',
        'json',
        'value',
        'bot',
        'tenantId',
        'user',
        'pending',
        'jqVTy',
        'ticket',
        'Ticket\x20já\x20',
        '../models/'
    ];
    a = function () {
        return a1;
    };
    return a();
}
exports[K(0x9c)] = show;
const update = async (l, m) => {
    const V = K, W = L, o = {};
    o[V(0x11e)] = W(0xe2) + V(0x10d) + V(0xb2) + W(0xd9), o[W(0xa5)] = function (z, A) {
        return z === A;
    }, o[W(0xc5)] = V(0x12c), o[W(0xb5)] = function (z, A) {
        return z !== A;
    }, o[W(0x10c)] = W(0xfd), o[V(0x12e)] = W(0xdc), o[W(0x105)] = W(0xdf);
    const p = o, {ticketId: q} = l[V(0xf8)], {tenantId: r} = l[W(0xde)], s = l[V(0xde)]['id'], {isTransference: t} = l[W(0x109)], u = { ...l[W(0x109)] };
    u[W(0xdd)] = r;
    const v = u, w = {};
    w[V(0x90)] = v, w[V(0xca)] = q, w[V(0x95) + W(0x8e)] = t, w[V(0xee) + V(0x10f)] = s;
    const {ticket: x} = await (-0x1f2 + -0x4a * -0x55 + -0x16a0, UpdateTicketService_1[W(0xe8)])(w);
    if (p[V(0xa5)](v[W(0xd7)], p[W(0xc5)])) {
        if (p[W(0xb5)](p[V(0x10c)], p[V(0x10c)]))
            throw new u[(W(0xe8))](p[W(0x11e)]);
        else {
            const z = {};
            z['id'] = x[V(0xba)], z[W(0xdd)] = r;
            const A = {};
            A[V(0x12b)] = z;
            const B = await Whatsapp_1[W(0xe8)][V(0xc0)](A);
            if (B?.[W(0x101) + W(0xd3)]) {
                const C = {};
                C[V(0xed)] = x[W(0xed)], C[V(0x123)] = x[W(0x97)][V(0x123)];
                const D = (-0xeb * -0x4 + 0xabd * -0x2 + 0x2b * 0x6a, pupa_1[W(0x9a)])(B[V(0x101) + V(0xd3)] || '', C), E = {};
                E[V(0x109)] = D, E[V(0xe5)] = !![], E[W(0x115)] = !![];
                const F = {};
                F[W(0xd6)] = E, F[V(0xdd)] = r, F[W(0xe1)] = x, F[W(0xf4)] = l[W(0xde)]['id'], F[W(0xd1)] = p[V(0x12e)], F[V(0xd7)] = p[V(0x105)], F[V(0x95)] = ![], F[V(0xa1)] = ![];
                const G = F;
                await (-0x155 * 0x9 + -0x8c1 + 0x14be, CreateMessageSystemService_1[W(0xe8)])(G);
                const H = {};
                H[V(0x103) + W(0x9d)] = !![], await x[V(0xd8)](H);
            }
        }
    }
    return m[W(0xd7)](0x9b8 * -0x3 + -0xfaf + 0x2d9f)[W(0xda)](x);
};
exports[L(0xd8)] = update;
const remove = async (f, g) => {
    const X = K, Y = L, h = {};
    h[X(0xe0)] = Y(0xd5), h[Y(0x9e)] = X(0xb3) + X(0xa2);
    const i = h, {ticketId: j} = f[X(0xf8)], {tenantId: k} = f[X(0xde)], l = f[Y(0xde)]['id'], m = {};
    m['id'] = j, m[Y(0xdd)] = k, m[X(0xf4)] = l;
    const o = await (0x2f0 + 0x5d * 0x1 + 0xd * -0x41, DeleteTicketService_1[Y(0xe8)])(m), p = (0x1 * 0x16e5 + -0x2418 + 0x1f * 0x6d, socket_1[X(0xea)])();
    p['to'](k + ':' + o[X(0xd7)])['to'](k + ':' + j)['to'](k + (X(0x100) + Y(0x128)))[Y(0x10e)](k + X(0x12d), {
        'action': i[Y(0xe0)],
        'ticketId': +j
    });
    const q = {};
    return q[Y(0xc2)] = i[X(0x9e)], g[Y(0xd7)](-0x6 * -0x1e9 + -0x1 * 0x902 + -0xd6 * 0x2)[Y(0xda)](q);
};
exports[K(0x99)] = remove;
const showLogsTicket = async (d, e) => {
    const Z = L, a0 = K, {ticketId: f} = d[Z(0xf8)], g = {};
    g[Z(0xca)] = f;
    const h = await (-0x24ce + -0xb * 0x335 + 0x4815, ShowLogTicketService_1[a0(0xe8)])(g);
    return e[Z(0xd7)](-0x53 * 0x44 + -0x1 * -0xeb8 + 0x2 * 0x40e)[Z(0xda)](h);
};
exports[K(0xa3) + K(0xc4)] = showLogsTicket;