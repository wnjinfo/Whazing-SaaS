'use strict';
const V = b, W = b;
(function (c, d) {
    const T = b, U = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(T(0xd2)) / (-0x1 * -0x1e0b + 0x701 + 0x3 * -0xc59) + -parseInt(T(0xba)) / (0x1 * 0x56e + -0x126f * 0x2 + 0x2e * 0xaf) * (parseInt(T(0xe7)) / (-0x88 * 0xe + -0xe0f + 0x1582)) + parseInt(T(0xce)) / (0xc34 + -0xc33 + -0x3 * -0x1) * (-parseInt(T(0xa2)) / (-0x5f1 * -0x6 + 0x432 * -0x9 + 0x221)) + -parseInt(U(0xd6)) / (0x1a5e + -0x5 * 0x20e + 0x79 * -0x22) + -parseInt(T(0xaa)) / (-0x26a7 + -0x1616 + 0x3cc4) + -parseInt(U(0xc7)) / (-0x39 * 0x97 + 0x2149 * -0x1 + 0x2178 * 0x2) * (parseInt(T(0xb2)) / (-0x133c + -0xeb * 0x1 + -0xa18 * -0x2)) + parseInt(U(0xbd)) / (0x1537 + -0x36 * 0x42 + -0x741) * (parseInt(T(0x9f)) / (0x1 * 0x541 + -0x7ec + 0x2 * 0x15b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xd2d58 + -0x5 * -0xb99f + -0x86fbe));
function a() {
    const a4 = [
        'parseISO',
        'startOfDay',
        'kEInW',
        'profile',
        'DESC',
        '96290estSah',
        'ToJEW',
        'ls/UsersQu',
        '56554120vIhHGx',
        'indexOf',
        'map',
        'pending',
        'push',
        'model',
        'qXpep',
        'vEOhN',
        'SwtQw',
        'yVjXd',
        '8NkJtIg',
        'queueId',
        'Url',
        'NULhg',
        'number',
        'userId',
        'Fajif',
        '141668cjURIg',
        'QvezY',
        'SDAxw',
        'updatedAt',
        '961803oYZmXK',
        'between',
        'true',
        'KqfeU',
        '6049962VnwULl',
        'findAll',
        'where',
        'ls/User',
        'sHQhA',
        'fault',
        'whatsapp',
        'GOXbw',
        'status',
        'profilePic',
        'associatio',
        '../../mode',
        'forEach',
        'KgRIg',
        'sequelize',
        'QAtTn',
        'WkUiU',
        '60XkuRXT',
        'ShkrO',
        'name',
        'attributes',
        'value',
        'contact',
        'date-fns',
        'defineProp',
        'kFaNB',
        'open',
        '__importDe',
        'order',
        '11gVaEUL',
        'hYXwk',
        'include',
        '140fECTSS',
        'afRLq',
        'default',
        'DRyJA',
        'tenantId',
        'eues',
        'PFgJz',
        'ls/Ticket',
        '3440080EniFHd',
        'ls/Contact',
        'ls/Queue',
        'zmJTw',
        'AnMgJ',
        'erty',
        'endOfDay',
        'user',
        '6218901geUgYQ',
        'count',
        '__esModule'
    ];
    a = function () {
        return a4;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x147c + -0x1b7f * -0x1 + -0x66c);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[V(0x9d) + V(0xdb)] || function (c) {
    const X = V;
    return c && c[X(0xb4)] ? c : { 'default': c };
};
const u = {};
u[V(0x97)] = !![], Object[V(0x9a) + V(0xaf)](exports, W(0xb4), u);
const sequelize_1 = require(V(0xe4)), date_fns_1 = require(V(0x99)), Ticket_1 = __importDefault(require(W(0xe1) + V(0xa9))), UsersQueues_1 = __importDefault(require(V(0xe1) + V(0xbc) + V(0xa7))), User_1 = __importDefault(require(W(0xe1) + V(0xd9))), Contact_1 = __importDefault(require(W(0xe1) + V(0xab))), Queue_1 = __importDefault(require(W(0xe1) + W(0xac))), TicketsQueuesService = async ({
        dateStart: n,
        dateEnd: o,
        status: p,
        userId: q,
        queuesIds: r,
        tenantId: s,
        showAll: t
    }) => {
        const Y = W, Z = W, v = {};
        v[Y(0xa0)] = function (I, J) {
            return I !== J;
        }, v[Z(0xda)] = Z(0xca), v[Z(0xcd)] = Y(0xbb), v[Z(0xa8)] = Z(0x98), v[Z(0xc5)] = Z(0xe9), v[Y(0xa5)] = Z(0xcb), v[Y(0xad)] = Y(0xdf) + Z(0xc9), v[Z(0xc3)] = Z(0xdc), v[Z(0xc4)] = Z(0xb1), v[Y(0xe6)] = Y(0xb8), v[Y(0xc6)] = function (I, J) {
            return I === J;
        }, v[Z(0xae)] = Y(0xdd), v[Z(0x9b)] = function (I, J) {
            return I == J;
        }, v[Y(0xd5)] = Y(0xd4), v[Z(0xe8)] = Y(0xe3), v[Y(0xe5)] = Z(0x9c), v[Z(0xb7)] = Z(0xc0), v[Y(0xa3)] = function (I, J) {
            return I && J;
        }, v[Y(0xd0)] = Y(0xd1), v[Y(0xcf)] = Z(0xb9);
        const w = v;
        let x = {};
        const y = {};
        y[Y(0xc2)] = Contact_1[Z(0xa4)], y['as'] = w[Z(0xa8)], y[Y(0xea)] = [
            'id',
            w[Y(0xc5)],
            w[Z(0xa5)],
            w[Y(0xad)]
        ];
        const z = {};
        z[Z(0xe0) + 'n'] = w[Y(0xc3)], z[Y(0xea)] = [
            'id',
            w[Z(0xc5)]
        ];
        const A = {};
        A[Y(0xc2)] = User_1[Z(0xa4)], A['as'] = w[Y(0xc4)], A[Z(0xea)] = [
            'id',
            w[Z(0xc5)],
            w[Z(0xe6)]
        ];
        const B = [
                y,
                z,
                A
            ], C = {};
        C[Y(0xa6)] = s;
        const D = {};
        D[Y(0xd8)] = C;
        const E = await Queue_1[Y(0xa4)][Y(0xb3)](D);
        if (E) {
            const I = {};
            I[Z(0xcc)] = q;
            const J = {};
            J[Z(0xd8)] = I;
            const K = await UsersQueues_1[Z(0xa4)][Z(0xd7)](J);
            let L = K[Y(0xbf)](N => N[Y(0xc8)]);
            if (r) {
                if (w[Y(0xc6)](w[Y(0xae)], w[Z(0xae)])) {
                    const N = [];
                    r[Z(0xe2)](O => {
                        const a0 = Z, a1 = Z;
                        if (w[a0(0xa0)](w[a1(0xda)], w[a0(0xcd)])) {
                            const P = L[a1(0xbe)](+O);
                            P && N[a0(0xc1)](+O);
                        } else {
                            const R = { ...C };
                            R[a1(0xde)] = D, A = R;
                        }
                    }), L = N;
                } else {
                    const P = C[Y(0xbe)](+D);
                    P && M[Y(0xc1)](+F);
                }
            }
            const M = { [sequelize_1['Op']['in']]: L };
            x = {
                ...x,
                'queueId': M
            };
        }
        w[Y(0x9b)](t, w[Z(0xd5)]) && (x = {});
        if (p)
            x = {
                ...x,
                'status': p
            };
        else {
            if (w[Y(0xa0)](w[Y(0xe8)], w[Z(0xe8)])) {
                const Q = [];
                A[Z(0xe2)](R => {
                    const a2 = Y, a3 = Y, S = R[a2(0xbe)](+R);
                    S && Q[a2(0xc1)](+R);
                }), D = Q;
            } else
                p = [
                    w[Z(0xe5)],
                    w[Z(0xb7)]
                ];
        }
        w[Y(0xa3)](n, o) && (x = {
            ...x,
            'createdAt': {
                [sequelize_1['Op'][Z(0xd3)]]: [
                    +(-0x1914 + 0xb * 0x83 + 0x1373, date_fns_1[Z(0xb6)])((-0x2025 * -0x1 + 0x89 * -0x26 + -0xbcf, date_fns_1[Y(0xb5)])(n)),
                    +(0x1efa + -0x1 * 0xf94 + -0x7b3 * 0x2, date_fns_1[Y(0xb0)])((-0xd4 * -0x6 + -0x3d1 * -0x7 + -0x1 * 0x1faf, date_fns_1[Z(0xb5)])(o))
                ]
            }
        });
        const F = { ...x };
        F[Z(0xa6)] = s;
        const G = {};
        G[Y(0xd8)] = F, G[Y(0xa1)] = B, G[Z(0x9e)] = [[
                w[Y(0xd0)],
                w[Z(0xcf)]
            ]];
        const H = await Ticket_1[Y(0xa4)][Y(0xd7)](G);
        return H;
    };
exports[W(0xa4)] = TicketsQueuesService;