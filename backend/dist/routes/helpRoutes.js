'use strict';
var J = b, K = b;
function b(c, d) {
    var e = a();
    return b = function (f, g) {
        f = f - (-0x21 * -0x108 + -0x1 * 0x677 + -0x1a54);
        var h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    var H = b, I = b, e = c();
    while (!![]) {
        try {
            var f = -parseInt(H(0x142)) / (-0x7c0 + 0x205e + -0x1 * 0x189d) + -parseInt(H(0x140)) / (0x201b + -0x3 * 0x535 + -0x107a) * (parseInt(I(0x16e)) / (-0x23d3 + -0x10f * -0x1a + -0x850 * -0x1)) + -parseInt(H(0x162)) / (-0x1d * 0xbc + -0x177 * -0x5 + -0xdfd * -0x1) + parseInt(I(0x160)) / (0x2 * -0x7c8 + -0x607 * 0x2 + 0x1ba3) + parseInt(H(0x13f)) / (0x3 * 0x1db + -0x2 * 0x1241 + 0x1 * 0x1ef7) * (-parseInt(I(0x158)) / (0x1abc + 0x1 * -0x20e3 + 0x62e)) + -parseInt(I(0x171)) / (-0x2515 + 0xa73 + -0x1 * -0x1aaa) * (parseInt(H(0x172)) / (0x1dc6 + -0x1 * -0x25f4 + -0x43b1)) + parseInt(H(0x16d)) / (-0x2 * -0x766 + -0x2 * 0xc66 + 0xa * 0x101);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5a8c0 + 0x4d03e + -0x658b8));
var __createBinding = this && this[J(0x147) + K(0x17a)] || (Object[J(0x154)] ? function (d, e, f, g) {
        var L = J, M = J, h = {};
        h[L(0x178)] = function (l, n) {
            return l !== n;
        }, h[M(0x159)] = M(0x13d), h[M(0x16b)] = function (l, n) {
            return l === n;
        }, h[M(0x16c)] = function (l, n) {
            return l in n;
        }, h[M(0x145)] = L(0x17f);
        var i = h;
        if (i[L(0x16b)](g, undefined))
            g = f;
        var j = Object[L(0x150) + M(0x179) + L(0x168)](e, f);
        (!j || (i[L(0x16c)](i[L(0x145)], j) ? !e[L(0x14d)] : j[M(0x161)] || j[M(0x13e) + 'le'])) && (j = {
            'enumerable': !![],
            'get': function () {
                var N = L, O = M;
                if (i[N(0x178)](i[O(0x159)], i[N(0x159)])) {
                    var n = {};
                    return n[N(0x15b)] = j, g && h[N(0x14d)] ? i : n;
                } else
                    return e[f];
            }
        }), Object[L(0x173) + L(0x148)](d, g, j);
    } : function (d, e, f, g) {
        var P = K, Q = J, h = {};
        h[P(0x144)] = function (j, l) {
            return j === l;
        };
        var i = h;
        if (i[Q(0x144)](g, undefined))
            g = f;
        d[g] = e[f];
    }), __setModuleDefault = this && this[J(0x166) + K(0x15f)] || (Object[J(0x154)] ? function (e, f) {
        var R = K, S = J, g = {};
        g[R(0x16f)] = R(0x15b);
        var h = g, i = {};
        i[R(0x151)] = !![], i[S(0x164)] = f, Object[S(0x173) + R(0x148)](e, h[S(0x16f)], i);
    } : function (d, e) {
        var T = J, U = K, f = {};
        f[T(0x177)] = T(0x15b);
        var g = f;
        d[g[U(0x177)]] = e;
    }), __importStar = this && this[K(0x146) + 'ar'] || function (c) {
        var V = K, W = K, d = {
                'FUghC': V(0x149),
                'XKdAj': function (i, j, l) {
                    return i(j, l);
                },
                'UCNSE': function (i, j) {
                    return i != j;
                },
                'eqKhQ': function (i, j) {
                    return i !== j;
                },
                'rPxCF': V(0x15b),
                'rrCQx': function (i, j, l, m) {
                    return i(j, l, m);
                }
            }, e = d[W(0x17b)][W(0x17e)]('|'), f = -0x1e60 + 0x902 + 0x155e;
        while (!![]) {
            switch (e[f++]) {
            case '0':
                var g = {};
                continue;
            case '1':
                if (c && c[W(0x14d)])
                    return c;
                continue;
            case '2':
                return g;
            case '3':
                d[V(0x141)](__setModuleDefault, g, c);
                continue;
            case '4':
                if (d[W(0x170)](c, null)) {
                    for (var h in c)
                        if (d[W(0x15c)](h, d[W(0x155)]) && Object[V(0x14e)][V(0x14c) + W(0x148)][V(0x157)](c, h))
                            d[W(0x16a)](__createBinding, g, c, h);
                }
                continue;
            }
            break;
        }
    }, __importDefault = this && this[J(0x167) + J(0x165)] || function (c) {
        var X = K;
        return c && c[X(0x14d)] ? c : { 'default': c };
    }, G = {};
G[K(0x164)] = !![], Object[K(0x173) + K(0x148)](exports, K(0x14d), G);
const express_1 = __importDefault(require(J(0x174))), isAuth_1 = __importDefault(require(J(0x153) + J(0x14a))), HelpController = __importStar(require(K(0x17d) + J(0x15d) + J(0x163))), routes = express_1[J(0x15b)][J(0x180)]();
function a() {
    var Y = [
        '__esModule',
        'prototype',
        '/helps',
        'getOwnProp',
        'enumerable',
        'findList',
        '../middlew',
        'create',
        'rPxCF',
        '/helps/lis',
        'call',
        '140yerStz',
        'vLWua',
        'index',
        'default',
        'eqKhQ',
        'lers/HelpC',
        'post',
        'eDefault',
        '904595cyjnKZ',
        'writable',
        '1465924LGPZlb',
        'ontroller',
        'value',
        'fault',
        '__setModul',
        '__importDe',
        'ptor',
        'delete',
        'rrCQx',
        'aKRTJ',
        'REILj',
        '11792850zNBsoJ',
        '21EkXuZJ',
        'XQdLS',
        'UCNSE',
        '96kCxVDD',
        '232614ryjREN',
        'defineProp',
        'express',
        'remove',
        'update',
        'vskXR',
        'ZDRKg',
        'ertyDescri',
        'nding',
        'FUghC',
        'store',
        '../control',
        'split',
        'get',
        'Router',
        '/helps/:id',
        'VMBRt',
        'configurab',
        '27282FDanEL',
        '5634edSzML',
        'XKdAj',
        '302506zXFVIP',
        'put',
        'rPvyx',
        'HeMlL',
        '__importSt',
        '__createBi',
        'erty',
        '1|0|4|3|2',
        'are/isAuth',
        'show',
        'hasOwnProp'
    ];
    a = function () {
        return Y;
    };
    return a();
}
routes[K(0x17f)](K(0x156) + 't', isAuth_1[J(0x15b)], HelpController[K(0x152)]), routes[J(0x17f)](J(0x14f), isAuth_1[J(0x15b)], HelpController[J(0x15a)]), routes[J(0x17f)](J(0x181), isAuth_1[K(0x15b)], HelpController[K(0x14b)]), routes[J(0x15e)](J(0x14f), isAuth_1[J(0x15b)], HelpController[K(0x17c)]), routes[J(0x143)](J(0x181), isAuth_1[J(0x15b)], HelpController[J(0x176)]), routes[K(0x169)](J(0x181), isAuth_1[K(0x15b)], HelpController[K(0x175)]), exports[J(0x15b)] = routes;