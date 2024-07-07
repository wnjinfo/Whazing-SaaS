'use strict';
var J = b, K = b;
(function (c, d) {
    var H = b, I = b, e = c();
    while (!![]) {
        try {
            var f = -parseInt(H(0x10b)) / (0x26c2 + 0x3 * 0x5af + -0x37ce) + -parseInt(H(0xec)) / (0x19ce + 0x52a + -0x3 * 0xa52) + -parseInt(H(0x110)) / (0x1898 + -0x2156 + 0x8c1) + -parseInt(H(0x10c)) / (0x67a + 0x12fe + -0x1974) * (parseInt(H(0x105)) / (-0xcce + -0x1 * -0x211f + 0x6 * -0x362)) + parseInt(I(0xe9)) / (-0xa7 + 0x43 * 0xb + -0x6 * 0x5e) * (parseInt(H(0x10e)) / (-0x11a8 + 0x1 * -0x2688 + -0x9 * -0x63f)) + -parseInt(H(0xfc)) / (0x7d2 + -0x912 + -0x29 * -0x8) + parseInt(H(0x112)) / (0x282 + 0x7e + -0x2f7);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3e55a + 0x5 * -0x5ebd + -0x47 * -0x38d5));
var __createBinding = this && this[J(0xd2) + K(0xef)] || (Object[K(0xd8)] ? function (e, f, g, h) {
        var L = J, M = J, i = {};
        i[L(0xd6)] = function (p, q) {
            return p === q;
        }, i[L(0xf8)] = function (p, q) {
            return p in q;
        }, i[M(0x10a)] = L(0xdf);
        var j = i;
        if (j[L(0xd6)](h, undefined))
            h = g;
        var l = Object[L(0xfb) + M(0xe3) + L(0x111)](f, g);
        if (!l || (j[M(0xf8)](j[L(0x10a)], l) ? !f[M(0xf2)] : l[L(0xdd)] || l[L(0xe4) + 'le'])) {
            var n = {};
            n[L(0xe2)] = !![], n[M(0xdf)] = function () {
                return f[g];
            }, l = n;
        }
        Object[M(0xd3) + M(0xf4)](e, h, l);
    } : function (d, e, f, g) {
        var N = J, O = J, h = {};
        h[N(0xf5)] = function (j, l) {
            return j === l;
        };
        var i = h;
        if (i[O(0xf5)](g, undefined))
            g = f;
        d[g] = e[f];
    }), __setModuleDefault = this && this[J(0xed) + K(0xd5)] || (Object[J(0xd8)] ? function (e, f) {
        var P = J, Q = J, g = {};
        g[P(0x107)] = P(0xf9);
        var h = g, i = {};
        i[P(0xe2)] = !![], i[Q(0xfd)] = f, Object[Q(0xd3) + P(0xf4)](e, h[P(0x107)], i);
    } : function (d, e) {
        var R = J, S = K, f = {};
        f[R(0xf0)] = S(0xf9);
        var g = f;
        d[g[S(0xf0)]] = e;
    }), __importStar = this && this[J(0x102) + 'ar'] || function (c) {
        var T = J, U = J, d = {
                'yRhBz': T(0x106),
                'TJuif': function (i, j, l) {
                    return i(j, l);
                },
                'VpblK': function (i, j) {
                    return i != j;
                },
                'Dyaur': function (i, j) {
                    return i !== j;
                },
                'rkbTl': U(0xf9),
                'zRuMm': function (i, j, l, m) {
                    return i(j, l, m);
                }
            }, e = d[U(0xee)][U(0xfa)]('|'), f = -0xa8c + 0x1 * -0x939 + -0x2d3 * -0x7;
        while (!![]) {
            switch (e[f++]) {
            case '0':
                if (c && c[U(0xf2)])
                    return c;
                continue;
            case '1':
                return h;
            case '2':
                d[T(0xf3)](__setModuleDefault, h, c);
                continue;
            case '3':
                if (d[T(0x114)](c, null)) {
                    for (var g in c)
                        if (d[U(0xe7)](g, d[T(0xf7)]) && Object[T(0xde)][U(0xf1) + T(0xf4)][U(0xff)](c, g))
                            d[T(0x103)](__createBinding, h, c, g);
                }
                continue;
            case '4':
                var h = {};
                continue;
            }
            break;
        }
    }, __importDefault = this && this[K(0xd9) + K(0xe0)] || function (c) {
        var V = J;
        return c && c[V(0xf2)] ? c : { 'default': c };
    }, G = {};
function b(c, d) {
    var e = a();
    return b = function (f, g) {
        f = f - (-0xb * 0x9a + -0xb3 * -0x2a + -0x15ee);
        var h = e[f];
        return h;
    }, b(c, d);
}
G[J(0xfd)] = !![], Object[J(0xd3) + J(0xf4)](exports, J(0xf2), G);
const express_1 = __importDefault(require(K(0xe1))), isAuth_1 = __importDefault(require(K(0xea) + J(0xda))), TicketController = __importStar(require(J(0xe6) + K(0xd4) + J(0xdc) + 'r')), ticketRoutes = express_1[K(0xf9)][J(0xdb)]();
ticketRoutes[K(0xdf)](K(0x109), isAuth_1[K(0xf9)], TicketController[J(0xf6)]), ticketRoutes[K(0xdf)](J(0xeb) + K(0xfe), isAuth_1[K(0xf9)], TicketController[J(0xd7)]), ticketRoutes[K(0x104)](K(0x109), isAuth_1[J(0xf9)], TicketController[J(0x100)]), ticketRoutes[J(0x113)](K(0xeb) + J(0xfe), isAuth_1[J(0xf9)], TicketController[J(0xe8)]), ticketRoutes[J(0x108)](K(0xeb) + K(0xfe), isAuth_1[J(0xf9)], TicketController[J(0xe5)]), ticketRoutes[K(0xdf)](K(0xeb) + J(0x10d) + J(0x115), isAuth_1[K(0xf9)], TicketController[J(0x10f) + K(0x101)]), exports[K(0xf9)] = ticketRoutes;
function a() {
    var W = [
        'prototype',
        'get',
        'fault',
        'express',
        'enumerable',
        'ertyDescri',
        'configurab',
        'remove',
        '../control',
        'Dyaur',
        'update',
        '7610388eeElWK',
        '../middlew',
        '/tickets/:',
        '518406bQRudW',
        '__setModul',
        'yRhBz',
        'nding',
        'soNaN',
        'hasOwnProp',
        '__esModule',
        'TJuif',
        'erty',
        'GjtBU',
        'index',
        'rkbTl',
        'uhDaA',
        'default',
        'split',
        'getOwnProp',
        '5085312NKAjPv',
        'value',
        'ticketId',
        'call',
        'store',
        'cket',
        '__importSt',
        'zRuMm',
        'post',
        '2044645xwCzUX',
        '0|4|3|2|1',
        'rfTYz',
        'delete',
        '/tickets',
        'dnlys',
        '318019rFzPOh',
        '4nWCePi',
        'ticketId/l',
        '7hmNzft',
        'showLogsTi',
        '2576487ViHCSI',
        'ptor',
        '16817742SQPbdy',
        'put',
        'VpblK',
        'ogs',
        '__createBi',
        'defineProp',
        'lers/Ticke',
        'eDefault',
        'hchvX',
        'show',
        'create',
        '__importDe',
        'are/isAuth',
        'Router',
        'tControlle',
        'writable'
    ];
    a = function () {
        return W;
    };
    return a();
}