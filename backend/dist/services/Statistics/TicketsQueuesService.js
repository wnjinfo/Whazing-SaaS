'use strict';
const W = b, X = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xd26 + 0x4ac + -0x1032);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const U = b, V = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(U(0x1c7)) / (-0x2ff * -0x8 + -0x1237 + -0x5c0) + parseInt(V(0x200)) / (-0x1332 + 0x67 * -0x1b + 0xb3 * 0x2b) * (-parseInt(V(0x1f3)) / (-0x16d7 + 0x3 * -0x2 + 0x10 * 0x16e)) + parseInt(V(0x1c0)) / (-0x6a5 * -0x5 + 0x19f6 + -0x21 * 0x1cb) * (parseInt(V(0x1b7)) / (-0x1fb7 + 0xea2 + 0x111a)) + -parseInt(V(0x1d2)) / (0x11d7 + 0x1 * -0x1c2b + 0xa5a) + -parseInt(U(0x1ec)) / (0x2 * 0x545 + -0x24c5 + 0xd21 * 0x2) * (-parseInt(V(0x1fa)) / (-0x1 * 0x9a5 + 0x70e * -0x4 + 0x25e5)) + parseInt(V(0x1e0)) / (0x13fe + 0xc5 * 0x29 + -0x15b * 0x26) * (parseInt(V(0x1a1)) / (0x20d2 * -0x1 + 0x1 * 0xac1 + -0x161b * -0x1)) + parseInt(V(0x1b4)) / (-0x15b * 0x2 + 0x1 * -0x1bf + -0x40 * -0x12) * (-parseInt(V(0x1e6)) / (-0x11f * -0x7 + -0x11d * -0x9 + -0x11d2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x19a0b1 * -0x1 + -0x18 * -0xa1a8 + 0x3d79 * -0x71));
var __importDefault = this && this[W(0x1b6) + X(0x1f0)] || function (c) {
    const Y = W;
    return c && c[Y(0x1d0)] ? c : { 'default': c };
};
const u = {};
u[W(0x203)] = !![], Object[W(0x1fb) + W(0x1bc)](exports, W(0x1d0), u);
function a() {
    const a5 = [
        'PAbFt',
        'associatio',
        'attributes',
        'yCxtf',
        'updatedAt',
        'between',
        '__esModule',
        'BZzEc',
        '2182416uuAEBz',
        'vHRXq',
        'profilePic',
        'whatsapp',
        'userId',
        'NSnqw',
        'eues',
        'status',
        'ls/Contact',
        'open',
        'profile',
        'MlWvi',
        'true',
        'eJIBx',
        '109161jibKEq',
        'nOTgm',
        'buyVK',
        'LgNkL',
        'wNvwi',
        'VMjfd',
        '93996SWiwhj',
        'zJBdN',
        'VOcWi',
        'IjMXF',
        'upYGr',
        'ERIRx',
        '3185189MKvpup',
        'IdlqT',
        'XlOsK',
        'number',
        'fault',
        'xXkKv',
        'Nhpud',
        '36RGFORR',
        'ls/User',
        'MgNKQ',
        'KzwGf',
        'include',
        'queueId',
        'name',
        '16ezqJAe',
        'defineProp',
        'AhULh',
        'XnHcv',
        'order',
        'date-fns',
        '102092gOyYeu',
        'parseISO',
        'startOfDay',
        'value',
        'pending',
        '1270XJkpEy',
        'endOfDay',
        'ZeBwP',
        'kJmxX',
        'push',
        'Url',
        'DESC',
        'user',
        'nQMzA',
        'forEach',
        'tUdGe',
        'gxbGy',
        'cSmms',
        'default',
        'ls/Ticket',
        'map',
        'BHwpq',
        'sequelize',
        'ueUJv',
        '3377NINTpN',
        'uEzQJ',
        '__importDe',
        '65svsQTz',
        'model',
        'contact',
        'count',
        'LOfto',
        'erty',
        'ls/Queue',
        'findAll',
        'tenantId',
        '213412LVMavI',
        'ls/UsersQu',
        'xLsDN',
        'aAUan',
        '../../mode',
        'where',
        'indexOf',
        '1131465ecLFKL',
        'BuIWl',
        'slUsh'
    ];
    a = function () {
        return a5;
    };
    return a();
}
const sequelize_1 = require(X(0x1b2)), date_fns_1 = require(X(0x1ff)), Ticket_1 = __importDefault(require(W(0x1c4) + X(0x1af))), UsersQueues_1 = __importDefault(require(W(0x1c4) + X(0x1c1) + W(0x1d8))), User_1 = __importDefault(require(W(0x1c4) + W(0x1f4))), Contact_1 = __importDefault(require(W(0x1c4) + X(0x1da))), Queue_1 = __importDefault(require(W(0x1c4) + W(0x1bd))), TicketsQueuesService = async ({
        dateStart: n,
        dateEnd: o,
        status: p,
        userId: q,
        queuesIds: r,
        tenantId: s,
        showAll: t
    }) => {
        const Z = X, a0 = X, v = {};
        v[Z(0x1d1)] = function (I, J) {
            return I !== J;
        }, v[Z(0x1b1)] = a0(0x1dd), v[a0(0x1fc)] = function (I, J) {
            return I === J;
        }, v[Z(0x1e1)] = a0(0x1f6), v[Z(0x1e8)] = a0(0x1db), v[a0(0x1e7)] = Z(0x1a0), v[Z(0x1c8)] = a0(0x1b9), v[Z(0x1a9)] = a0(0x1f9), v[Z(0x1c3)] = a0(0x1ef), v[a0(0x1e2)] = a0(0x1d4) + a0(0x1a6), v[Z(0x1ac)] = a0(0x1d5), v[Z(0x1e3)] = Z(0x1a8), v[Z(0x1bb)] = a0(0x1dc), v[Z(0x1d3)] = Z(0x1ed), v[a0(0x1e5)] = Z(0x1a4), v[Z(0x1e4)] = a0(0x1b3), v[a0(0x1f1)] = function (I, J) {
            return I == J;
        }, v[Z(0x1c9)] = a0(0x1de), v[Z(0x1cd)] = function (I, J) {
            return I === J;
        }, v[a0(0x1f2)] = Z(0x1a3), v[a0(0x1ab)] = Z(0x1e9), v[Z(0x1d7)] = Z(0x1b5), v[a0(0x1c2)] = a0(0x1ee), v[a0(0x1df)] = Z(0x1eb), v[a0(0x1ad)] = function (I, J) {
            return I && J;
        }, v[Z(0x1ca)] = Z(0x1ea), v[Z(0x1fd)] = Z(0x1ce), v[a0(0x1f5)] = Z(0x1a7);
        const w = v;
        let x = {};
        const y = {};
        y[Z(0x1b8)] = Contact_1[a0(0x1ae)], y['as'] = w[Z(0x1c8)], y[a0(0x1cc)] = [
            'id',
            w[Z(0x1a9)],
            w[Z(0x1c3)],
            w[a0(0x1e2)]
        ];
        const z = {};
        z[a0(0x1cb) + 'n'] = w[a0(0x1ac)], z[Z(0x1cc)] = [
            'id',
            w[a0(0x1a9)]
        ];
        const A = {};
        A[a0(0x1b8)] = User_1[a0(0x1ae)], A['as'] = w[a0(0x1e3)], A[Z(0x1cc)] = [
            'id',
            w[a0(0x1a9)],
            w[Z(0x1bb)]
        ];
        const B = [
                y,
                z,
                A
            ], C = {};
        C[a0(0x1bf)] = s;
        const D = {};
        D[a0(0x1c5)] = C;
        const E = await Queue_1[Z(0x1ae)][a0(0x1ba)](D);
        if (E) {
            if (w[Z(0x1d1)](w[Z(0x1d3)], w[a0(0x1e5)])) {
                const I = {};
                I[a0(0x1d6)] = q;
                const J = {};
                J[a0(0x1c5)] = I;
                const K = await UsersQueues_1[Z(0x1ae)][a0(0x1be)](J);
                let L = K[a0(0x1b0)](N => N[Z(0x1f8)]);
                if (r) {
                    if (w[Z(0x1fc)](w[Z(0x1e4)], w[Z(0x1e4)])) {
                        const N = [];
                        r[a0(0x1aa)](O => {
                            const a1 = Z, a2 = a0;
                            if (w[a1(0x1d1)](w[a1(0x1b1)], w[a1(0x1b1)])) {
                                const Q = {};
                                return Q[a2(0x1ae)] = J, C && D[a1(0x1d0)] ? O : Q;
                            } else {
                                const Q = L[a2(0x1c6)](+O);
                                Q && (w[a2(0x1fc)](w[a1(0x1e1)], w[a1(0x1e1)]) ? N[a2(0x1a5)](+O) : F = {
                                    ...G,
                                    'createdAt': {
                                        [n['Op'][a1(0x1cf)]]: [
                                            +(0x8f * -0x39 + -0x14b * -0x1a + 0x41 * -0x7, o[a1(0x202)])((0x1e7 * -0xe + -0x26fe + 0x41a0, p[a2(0x201)])(q)),
                                            +(0x210c + 0x257 * -0x2 + -0x1c5e * 0x1, r[a2(0x1a2)])((-0x3 * 0xbfd + -0x1 * -0xec1 + 0x1536, s[a2(0x201)])(t))
                                        ]
                                    }
                                });
                            }
                        }), L = N;
                    } else {
                        const P = { ...C };
                        P[a0(0x1d9)] = D, A = P;
                    }
                }
                const M = { [sequelize_1['Op']['in']]: L };
                x = {
                    ...x,
                    'queueId': M
                };
            } else
                z[Z(0x1a5)](+A);
        }
        if (w[a0(0x1f1)](t, w[a0(0x1c9)])) {
            if (w[Z(0x1cd)](w[a0(0x1f2)], w[a0(0x1f2)]))
                x = {};
            else {
                const R = [];
                A[Z(0x1aa)](S => {
                    const a3 = a0, a4 = Z, T = S[a3(0x1c6)](+S);
                    T && R[a4(0x1a5)](+S);
                }), D = R;
            }
        }
        if (p) {
            if (w[Z(0x1d1)](w[Z(0x1ab)], w[a0(0x1d7)]))
                x = {
                    ...x,
                    'status': p
                };
            else {
                const S = C[a0(0x1c6)](+D);
                S && k[a0(0x1a5)](+F);
            }
        } else
            w[Z(0x1d1)](w[Z(0x1c2)], w[a0(0x1df)]) ? p = [
                w[a0(0x1e8)],
                w[a0(0x1e7)]
            ] : y = {};
        w[a0(0x1ad)](n, o) && (w[a0(0x1fc)](w[Z(0x1ca)], w[Z(0x1ca)]) ? x = {
            ...x,
            'createdAt': {
                [sequelize_1['Op'][Z(0x1cf)]]: [
                    +(-0x6a0 + 0x16d2 + -0x1032, date_fns_1[Z(0x202)])((-0xe8 + -0x18 * 0xc7 + 0x1390, date_fns_1[a0(0x201)])(n)),
                    +(0x5e2 + 0x1cf7 + -0x22d9, date_fns_1[a0(0x1a2)])((0x25 * -0x5d + 0xbd + -0xc * -0x10f, date_fns_1[a0(0x201)])(o))
                ]
            }
        } : y = [
            w[a0(0x1e8)],
            w[Z(0x1e7)]
        ]);
        const F = { ...x };
        F[Z(0x1bf)] = s;
        const G = {};
        G[Z(0x1c5)] = F, G[a0(0x1f7)] = B, G[a0(0x1fe)] = [[
                w[a0(0x1fd)],
                w[Z(0x1f5)]
            ]];
        const H = await Ticket_1[a0(0x1ae)][a0(0x1be)](G);
        return H;
    };
exports[W(0x1ae)] = TicketsQueuesService;