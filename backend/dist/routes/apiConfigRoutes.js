'use strict';
var J = b, K = b;
(function (c, d) {
    var H = b, I = b, e = c();
    while (!![]) {
        try {
            var f = parseInt(H(0xee)) / (0xd * 0xdf + -0x8 * -0x322 + -0x2462) * (-parseInt(H(0xff)) / (0x23b9 + -0x1 * 0x1f2b + -0x48c)) + parseInt(H(0xf2)) / (0x1 * -0x2082 + 0x1580 + 0xb05) * (-parseInt(I(0xde)) / (0x11e7 + 0xf * -0x168 + -0x1 * -0x335)) + parseInt(I(0xd6)) / (0x38b * -0xb + 0x2b4 * -0x3 + 0x2f1a) * (parseInt(I(0x100)) / (-0x1e17 + 0x21ae + -0x391)) + parseInt(I(0xc7)) / (0x257f + 0x1a1e + -0x3f96 * 0x1) + parseInt(I(0xe5)) / (-0x18 * 0x47 + -0x951 + 0x11 * 0xf1) * (-parseInt(H(0xd0)) / (0x107d + 0x601 + 0x1 * -0x1675)) + parseInt(I(0x102)) / (-0x39 * 0x19 + 0xa * 0x2db + 0xeb * -0x19) + parseInt(H(0xd7)) / (0x28 * 0xa + -0x20b * 0xa + 0x12e9) * (parseInt(H(0xca)) / (-0x233 * 0x6 + -0x6e8 + 0x1426));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xdd91 * -0x4 + -0x44e5e + 0x1 * 0x5b79d));
var __createBinding = this && this[J(0xfa) + J(0xd3)] || (Object[K(0xef)] ? function (e, f, g, h) {
        var L = J, M = J, i = {};
        i[L(0xfd)] = L(0xdd), i[M(0xcb)] = function (p, q) {
            return p === q;
        }, i[L(0xdb)] = function (p, q) {
            return p in q;
        }, i[L(0xe6)] = M(0xc1), i[M(0xc3)] = function (p, q) {
            return p === q;
        }, i[L(0xbb)] = M(0xf3), i[M(0xbf)] = L(0xc9);
        var j = i;
        if (j[L(0xcb)](h, undefined))
            h = g;
        var l = Object[M(0xf4) + M(0xf9) + M(0xe7)](f, g);
        if (!l || (j[L(0xdb)](j[L(0xe6)], l) ? !f[M(0xd5)] : l[L(0xec)] || l[L(0xfc) + 'le'])) {
            if (j[M(0xc3)](j[L(0xbb)], j[L(0xbf)])) {
                var q = {};
                q[M(0xc0)] = !![], q[L(0xe9)] = h, f[M(0x101) + L(0xed)](g, j[L(0xfd)], q);
            } else {
                var n = {};
                n[M(0xc0)] = !![], n[L(0xc1)] = function () {
                    return f[g];
                }, l = n;
            }
        }
        Object[M(0x101) + L(0xed)](e, h, l);
    } : function (d, e, f, g) {
        var N = K, O = K, h = {};
        h[N(0xc2)] = function (j, l) {
            return j === l;
        };
        var i = h;
        if (i[O(0xc2)](g, undefined))
            g = f;
        d[g] = e[f];
    }), __setModuleDefault = this && this[K(0xfe) + K(0x103)] || (Object[J(0xef)] ? function (e, f) {
        var P = K, Q = K, g = {};
        g[P(0xdf)] = P(0xdd);
        var h = g, i = {};
        i[P(0xc0)] = !![], i[Q(0xe9)] = f, Object[Q(0x101) + Q(0xed)](e, h[P(0xdf)], i);
    } : function (d, e) {
        var R = J, S = J, f = {};
        f[R(0xc8)] = R(0xdd);
        var g = f;
        d[g[S(0xc8)]] = e;
    }), __importStar = this && this[J(0xe1) + 'ar'] || function (c) {
        var T = K, U = J, d = {
                'lEeaZ': T(0xc6),
                'CBxqf': function (i, j, l) {
                    return i(j, l);
                },
                'Xvvhp': function (i, j) {
                    return i != j;
                },
                'MCfLd': function (i, j) {
                    return i !== j;
                },
                'BQNpL': U(0xdd),
                'moCPb': function (i, j, l, m) {
                    return i(j, l, m);
                }
            }, e = d[T(0xd1)][U(0xeb)]('|'), f = -0x2176 + -0x184c + 0x39c2;
        while (!![]) {
            switch (e[f++]) {
            case '0':
                return g;
            case '1':
                var g = {};
                continue;
            case '2':
                d[U(0xd9)](__setModuleDefault, g, c);
                continue;
            case '3':
                if (c && c[U(0xd5)])
                    return c;
                continue;
            case '4':
                if (d[U(0xf6)](c, null)) {
                    for (var h in c)
                        if (d[T(0xf1)](h, d[U(0xcc)]) && Object[T(0xe8)][T(0xdc) + T(0xed)][T(0xce)](c, h))
                            d[U(0xbd)](__createBinding, g, c, h);
                }
                continue;
            }
            break;
        }
    }, __importDefault = this && this[J(0xcf) + J(0xbc)] || function (c) {
        var V = J;
        return c && c[V(0xd5)] ? c : { 'default': c };
    }, G = {};
G[J(0xe9)] = !![], Object[J(0x101) + K(0xed)](exports, K(0xd5), G);
const express_1 = __importDefault(require(K(0xba))), isAuth_1 = __importDefault(require(J(0xd8) + J(0xe4))), APIConfigController = __importStar(require(J(0xc4) + K(0xe0) + K(0xf0) + J(0xd2))), apiConfigRoutes = express_1[K(0xdd)][K(0xbe)]();
function b(c, d) {
    var e = a();
    return b = function (f, g) {
        f = f - (-0x96b + 0x8f3 * 0x1 + 0x10 * 0x13);
        var h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    var W = [
        'lEeaZ',
        'ller',
        'nding',
        '/api-confi',
        '__esModule',
        '895zReoAJ',
        '39754zwiNKh',
        '../middlew',
        'CBxqf',
        'ken/:apiId',
        'BiXGv',
        'hasOwnProp',
        'default',
        '4AjGArq',
        'oLUxV',
        'lers/APICo',
        '__importSt',
        'delete',
        'renewToken',
        'are/isAuth',
        '293352JkEETR',
        'xRQng',
        'ptor',
        'prototype',
        'value',
        'put',
        'split',
        'writable',
        'erty',
        '34683dOcxPT',
        'create',
        'nfigContro',
        'MCfLd',
        '1136529SsNyQz',
        'BQhkc',
        'getOwnProp',
        'post',
        'Xvvhp',
        'g/renew-to',
        'g/:apiId',
        'ertyDescri',
        '__createBi',
        'store',
        'configurab',
        'TVoTv',
        '__setModul',
        '14WbezDy',
        '9264uqzsVt',
        'defineProp',
        '3617960OwKryT',
        'eDefault',
        'update',
        'Api',
        'express',
        'zkpPJ',
        'fault',
        'moCPb',
        'Router',
        'yTGHA',
        'enumerable',
        'get',
        'uNnZk',
        'GteVf',
        '../control',
        'remove',
        '3|1|4|2|0',
        '2926161SfJKRQ',
        'wEeTU',
        'vUgMQ',
        '348KnSeiT',
        'ZDhnf',
        'BQNpL',
        'index',
        'call',
        '__importDe',
        '54RaorGV'
    ];
    a = function () {
        return W;
    };
    return a();
}
apiConfigRoutes[J(0xf5)](K(0xd4) + 'g', isAuth_1[K(0xdd)], APIConfigController[J(0xfb)]), apiConfigRoutes[J(0xc1)](K(0xd4) + 'g', isAuth_1[J(0xdd)], APIConfigController[K(0xcd)]), apiConfigRoutes[J(0xea)](J(0xd4) + J(0xf8), isAuth_1[J(0xdd)], APIConfigController[K(0xb8)]), apiConfigRoutes[J(0xe2)](K(0xd4) + J(0xf8), isAuth_1[J(0xdd)], APIConfigController[K(0xc5)]), apiConfigRoutes[K(0xea)](K(0xd4) + K(0xf7) + K(0xda), isAuth_1[J(0xdd)], APIConfigController[K(0xe3) + J(0xb9)]), exports[J(0xdd)] = apiConfigRoutes;