'use strict';
var J = b, K = b;
(function (c, d) {
    var H = b, I = b, e = c();
    while (!![]) {
        try {
            var f = -parseInt(H(0x10d)) / (-0x5 * 0x79c + 0xb37 + -0x2af * -0xa) * (-parseInt(I(0x13b)) / (0xb55 + 0x2 * 0x736 + -0x19bf)) + -parseInt(H(0x138)) / (0x189f + 0x570 + 0xa04 * -0x3) + -parseInt(I(0x12f)) / (0xcc3 + -0x22a4 + 0x15e5) * (parseInt(I(0x134)) / (0x21a6 + 0x132d + -0x34ce)) + parseInt(H(0x130)) / (-0x4d9 * 0x2 + -0x60 * -0x60 + -0x1a48) + parseInt(I(0x118)) / (-0x83 * -0x1d + -0x1005 * -0x2 + -0x2eda) * (parseInt(I(0x11a)) / (0x206f + -0x1485 + -0x1fb * 0x6)) + parseInt(I(0x132)) / (0x1 * -0x1ca2 + 0x47f * 0x5 + 0x630) + parseInt(H(0x124)) / (0x632 + 0x4 * 0x80 + -0x828 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5 * 0x2e01b + 0x12dba + 0x4 * 0x5a233));
var __createBinding = this && this[J(0x125) + J(0x133)] || (Object[K(0x128)] ? function (e, f, g, h) {
        var L = J, M = K, i = {};
        i[L(0x11d)] = function (p, q) {
            return p === q;
        }, i[L(0x127)] = function (p, q) {
            return p in q;
        }, i[L(0x11f)] = M(0x114);
        var j = i;
        if (j[M(0x11d)](h, undefined))
            h = g;
        var l = Object[M(0x11c) + L(0x120) + M(0x12a)](f, g);
        if (!l || (j[L(0x127)](j[M(0x11f)], l) ? !f[M(0x13e)] : l[M(0x131)] || l[L(0x137) + 'le'])) {
            var n = {};
            n[L(0x126)] = !![], n[M(0x114)] = function () {
                return f[g];
            }, l = n;
        }
        Object[M(0x141) + L(0x12c)](e, h, l);
    } : function (d, e, f, g) {
        var N = K, O = J, h = {};
        h[N(0x10c)] = function (j, l) {
            return j === l;
        };
        var i = h;
        if (i[N(0x10c)](g, undefined))
            g = f;
        d[g] = e[f];
    }), __setModuleDefault = this && this[J(0x13f) + J(0x147)] || (Object[K(0x128)] ? function (e, f) {
        var P = K, Q = J, g = {};
        g[P(0x139)] = Q(0x12d);
        var h = g, i = {};
        i[Q(0x126)] = !![], i[P(0x13d)] = f, Object[Q(0x141) + Q(0x12c)](e, h[Q(0x139)], i);
    } : function (d, e) {
        var R = K, S = J, f = {};
        f[R(0x11e)] = R(0x12d);
        var g = f;
        d[g[R(0x11e)]] = e;
    }), __importStar = this && this[K(0x117) + 'ar'] || function (c) {
        var T = K, U = K, d = {
                'SLjMU': T(0x113),
                'fxeYL': function (i, j, l) {
                    return i(j, l);
                },
                'uUDzz': function (i, j) {
                    return i != j;
                },
                'INIOY': function (i, j) {
                    return i !== j;
                },
                'aoYup': T(0x12d),
                'UvLbe': function (i, j, l, m) {
                    return i(j, l, m);
                }
            }, e = d[U(0x10f)][U(0x146)]('|'), f = 0x1d + -0x1af * -0x11 + 0xe5e * -0x2;
        while (!![]) {
            switch (e[f++]) {
            case '0':
                var g = {};
                continue;
            case '1':
                return g;
            case '2':
                d[T(0x140)](__setModuleDefault, g, c);
                continue;
            case '3':
                if (c && c[U(0x13e)])
                    return c;
                continue;
            case '4':
                if (d[T(0x12e)](c, null)) {
                    for (var h in c)
                        if (d[T(0x14a)](h, d[U(0x10e)]) && Object[U(0x123)][U(0x11b) + T(0x12c)][U(0x119)](c, h))
                            d[U(0x144)](__createBinding, g, c, h);
                }
                continue;
            }
            break;
        }
    }, __importDefault = this && this[K(0x122) + K(0x142)] || function (c) {
        var V = K;
        return c && c[V(0x13e)] ? c : { 'default': c };
    }, G = {};
G[K(0x13d)] = !![], Object[J(0x141) + J(0x12c)](exports, J(0x13e), G);
function b(c, d) {
    var e = a();
    return b = function (f, g) {
        f = f - (0x1e0 + -0x2261 + 0x218d);
        var h = e[f];
        return h;
    }, b(c, d);
}
const express_1 = __importDefault(require(J(0x116))), isAuth_1 = __importDefault(require(J(0x115) + J(0x110))), ChatFlowController = __importStar(require(K(0x121) + K(0x13a) + J(0x135) + J(0x112))), chatFlowRoutes = express_1[J(0x12d)][K(0x148)]();
chatFlowRoutes[K(0x136)](J(0x14b), isAuth_1[K(0x12d)], ChatFlowController[J(0x13c)]), chatFlowRoutes[J(0x114)](K(0x14b), isAuth_1[J(0x12d)], ChatFlowController[K(0x143)]), chatFlowRoutes[J(0x129)](K(0x14b) + K(0x145) + 'Id', isAuth_1[K(0x12d)], ChatFlowController[J(0x149)]), chatFlowRoutes[J(0x111)](J(0x14b) + J(0x145) + 'Id', isAuth_1[K(0x12d)], ChatFlowController[J(0x12b)]), exports[J(0x12d)] = chatFlowRoutes;
function a() {
    var W = [
        'prototype',
        '1906030sDINhn',
        '__createBi',
        'enumerable',
        'BddOT',
        'create',
        'put',
        'ptor',
        'remove',
        'erty',
        'default',
        'uUDzz',
        '236oywRgB',
        '2712696tLIsXY',
        'writable',
        '3887217APSSTO',
        'nding',
        '44810oxpwUn',
        'lowControl',
        'post',
        'configurab',
        '2412387efQtYE',
        'VwuMT',
        'lers/ChatF',
        '784134XEpBFT',
        'store',
        'value',
        '__esModule',
        '__setModul',
        'fxeYL',
        'defineProp',
        'fault',
        'index',
        'UvLbe',
        '/:chatFlow',
        'split',
        'eDefault',
        'Router',
        'update',
        'INIOY',
        '/chat-flow',
        'OsIYc',
        '1wYftii',
        'aoYup',
        'SLjMU',
        'are/isAuth',
        'delete',
        'ler',
        '3|0|4|2|1',
        'get',
        '../middlew',
        'express',
        '__importSt',
        '3346189zgdpFY',
        'call',
        '8xsiIVj',
        'hasOwnProp',
        'getOwnProp',
        'FODLS',
        'WTGcC',
        'wDrpp',
        'ertyDescri',
        '../control',
        '__importDe'
    ];
    a = function () {
        return W;
    };
    return a();
}