'use strict';
const T = b, U = b;
(function (c, d) {
    const R = b, S = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(R(0xf1)) / (-0x3 * -0x36d + 0x64d + 0x1 * -0x1093) + -parseInt(R(0xe3)) / (0xbce * 0x3 + -0x2461 + 0x3 * 0x53) * (parseInt(S(0xfb)) / (0x2 * -0xdee + -0x1 * -0x1369 + -0x1 * -0x876)) + -parseInt(S(0xb6)) / (0x8ef + -0x821 * 0x4 + 0x1799) * (-parseInt(R(0xfc)) / (-0x23 * -0x65 + -0x1ee4 + -0x111a * -0x1)) + parseInt(R(0xf4)) / (-0x85 * -0x1f + 0x170d + -0x2722) + parseInt(S(0xc5)) / (0x1 * 0x1257 + -0x20c8 + -0x39e * -0x4) * (-parseInt(S(0xc0)) / (0x23f9 + -0x2519 + 0x2 * 0x94)) + parseInt(R(0xde)) / (0xa * 0x3c1 + 0x153a * 0x1 + 0x1f * -0x1e5) + -parseInt(R(0xc3)) / (-0x8 * 0xc9 + -0x2 * 0xf7a + 0x2546);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xdac49 + 0x143c2a + -0x197bd * 0xd));
var __importDefault = this && this[T(0xf9) + U(0xc9)] || function (c) {
    const V = T;
    return c && c[V(0xd3)] ? c : { 'default': c };
};
const u = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1292 + -0x134a + -0x2692 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const a2 = [
        'contact',
        '2482990rpeJcU',
        'user',
        '786233TxlksN',
        'zbOCG',
        'nyLDg',
        'JzLDa',
        'fault',
        'mteMq',
        'DESC',
        'queueId',
        'ls/Queue',
        'date-fns',
        'UsAZE',
        'tzgHD',
        'default',
        'pending',
        '__esModule',
        'name',
        'profilePic',
        'startOfDay',
        'UWCJU',
        'model',
        'cvtMg',
        'indexOf',
        'number',
        'forEach',
        'parseISO',
        '2709207AKgXQm',
        'whatsapp',
        'XhQbb',
        'attributes',
        'ls/User',
        '11212EzhAUk',
        'map',
        'include',
        'endOfDay',
        'order',
        'Url',
        'FXEwR',
        'between',
        'sequelize',
        'defineProp',
        'value',
        'VuLXl',
        'ZoLjX',
        'push',
        '1455073VaLTbd',
        'profile',
        'erty',
        '7739808hsXrrz',
        'userId',
        'count',
        'ls/UsersQu',
        'fLPnk',
        '__importDe',
        'zeJIs',
        '36BbljmB',
        '190yGnIKm',
        'associatio',
        'pgBnI',
        'tenantId',
        'GbftZ',
        'XlRvC',
        'where',
        '121812MRlbfS',
        'findAll',
        'ls/Ticket',
        'true',
        'YDfwc',
        'iotld',
        'eues',
        '../../mode',
        'updatedAt',
        'open',
        '8PrmeWJ',
        'ls/Contact'
    ];
    a = function () {
        return a2;
    };
    return a();
}
u[U(0xed)] = !![], Object[U(0xec) + U(0xf3)](exports, T(0xd3), u);
const sequelize_1 = require(U(0xeb)), date_fns_1 = require(T(0xce)), Ticket_1 = __importDefault(require(T(0xbd) + U(0xb8))), UsersQueues_1 = __importDefault(require(U(0xbd) + T(0xf7) + T(0xbc))), User_1 = __importDefault(require(U(0xbd) + T(0xe2))), Contact_1 = __importDefault(require(T(0xbd) + T(0xc1))), Queue_1 = __importDefault(require(U(0xbd) + T(0xcd))), TicketsQueuesService = async ({
        dateStart: n,
        dateEnd: o,
        status: p,
        userId: q,
        queuesIds: r,
        tenantId: s,
        showAll: t
    }) => {
        const W = T, X = T, v = {};
        v[W(0xee)] = W(0xc2), v[X(0xca)] = X(0xd4), v[X(0xc7)] = W(0xdb), v[W(0xf8)] = W(0xd5) + W(0xe8), v[W(0xd9)] = X(0xdf), v[W(0x101)] = W(0xc4), v[X(0xe9)] = W(0xf2), v[W(0xc8)] = function (I, J) {
            return I !== J;
        }, v[X(0xe0)] = W(0xfa), v[W(0xc6)] = function (I, J) {
            return I == J;
        }, v[X(0xba)] = X(0xb9), v[X(0xd7)] = W(0x100), v[W(0xcf)] = X(0xbf), v[W(0xfe)] = W(0xd2), v[W(0xd0)] = function (I, J) {
            return I && J;
        }, v[X(0xef)] = W(0xbe), v[W(0xbb)] = X(0xcb);
        const w = v;
        let x = {};
        const y = {};
        y[X(0xd8)] = Contact_1[X(0xd1)], y['as'] = w[W(0xee)], y[X(0xe1)] = [
            'id',
            w[X(0xca)],
            w[W(0xc7)],
            w[X(0xf8)]
        ];
        const z = {};
        z[W(0xfd) + 'n'] = w[W(0xd9)], z[X(0xe1)] = [
            'id',
            w[W(0xca)]
        ];
        const A = {};
        A[W(0xd8)] = User_1[X(0xd1)], A['as'] = w[X(0x101)], A[W(0xe1)] = [
            'id',
            w[X(0xca)],
            w[X(0xe9)]
        ];
        const B = [
                y,
                z,
                A
            ], C = {};
        C[W(0xff)] = s;
        const D = {};
        D[W(0x102)] = C;
        const E = await Queue_1[X(0xd1)][W(0xf6)](D);
        if (E) {
            if (w[W(0xc8)](w[W(0xe0)], w[W(0xe0)])) {
                const J = [];
                A[W(0xdc)](K => {
                    const Y = W, Z = W, L = K[Y(0xda)](+K);
                    L && J[Z(0xf0)](+K);
                }), D = J;
            } else {
                const J = {};
                J[X(0xf5)] = q;
                const K = {};
                K[X(0x102)] = J;
                const L = await UsersQueues_1[X(0xd1)][W(0xb7)](K);
                let M = L[X(0xe4)](O => O[W(0xcc)]);
                if (r) {
                    const O = [];
                    r[X(0xdc)](P => {
                        const a0 = W, a1 = W, Q = M[a0(0xda)](+P);
                        Q && O[a1(0xf0)](+P);
                    }), M = O;
                }
                const N = { [sequelize_1['Op']['in']]: M };
                x = {
                    ...x,
                    'queueId': N
                };
            }
        }
        w[X(0xc6)](t, w[X(0xba)]) && (x = {});
        if (p) {
            if (w[X(0xc8)](w[W(0xd7)], w[W(0xd7)])) {
                const Q = {};
                return Q[X(0xd1)] = j, C && D[W(0xd3)] ? i : Q;
            } else
                x = {
                    ...x,
                    'status': p
                };
        } else
            p = [
                w[X(0xcf)],
                w[X(0xfe)]
            ];
        w[X(0xd0)](n, o) && (x = {
            ...x,
            'createdAt': {
                [sequelize_1['Op'][X(0xea)]]: [
                    +(-0x6a5 + 0x189b + -0x13 * 0xf2, date_fns_1[X(0xd6)])((-0x5bf * -0x5 + -0x39 * 0x66 + -0x605, date_fns_1[X(0xdd)])(n)),
                    +(0x1 * -0xce5 + -0x3 * 0x763 + 0x230e, date_fns_1[X(0xe6)])((-0x26 * -0x2b + -0x49 * -0x88 + 0x2 * -0x1695, date_fns_1[X(0xdd)])(o))
                ]
            }
        });
        const F = { ...x };
        F[X(0xff)] = s;
        const G = {};
        G[X(0x102)] = F, G[X(0xe5)] = B, G[W(0xe7)] = [[
                w[W(0xef)],
                w[X(0xbb)]
            ]];
        const H = await Ticket_1[X(0xd1)][W(0xb7)](G);
        return H;
    };
exports[T(0xd1)] = TicketsQueuesService;