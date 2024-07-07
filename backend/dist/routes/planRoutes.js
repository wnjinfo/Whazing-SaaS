'use strict';
var J = b, K = b;
(function (c, d) {
    var H = b, I = b, e = c();
    while (!![]) {
        try {
            var f = parseInt(H(0x9a)) / (-0x264a + -0x1 * 0x1660 + 0x3cab) + -parseInt(H(0xce)) / (0xcbf + -0x1 * 0x1899 + 0xb * 0x114) * (-parseInt(H(0xcc)) / (0x4b0 + 0x7 * 0xef + 0x23 * -0x52)) + parseInt(H(0xc2)) / (0x1274 + -0x823 + -0xa4d * 0x1) * (-parseInt(H(0xd6)) / (0x2 * -0x867 + -0x1 * 0x2fb + 0x41 * 0x4e)) + -parseInt(H(0x98)) / (-0x1772 * 0x1 + 0x1f21 + -0x25 * 0x35) * (-parseInt(H(0xc7)) / (-0x12b2 + 0x46c * 0x2 + 0x34b * 0x3)) + parseInt(I(0xad)) / (0x3 * -0x70a + 0x3e * -0x2 + 0x15a2) * (-parseInt(I(0xb3)) / (0x1a8e + -0x12a0 + -0x7e5)) + -parseInt(I(0xa8)) / (0x1a41 * -0x1 + 0x7 * -0x222 + 0xad * 0x3d) + parseInt(H(0xca)) / (0x4e3 + -0x2306 + -0xf17 * -0x2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x96f + 0x27 * -0x673 + 0x30938));
function b(c, d) {
    var e = a();
    return b = function (f, g) {
        f = f - (-0xe1f + -0x16f * -0xf + -0x6cc);
        var h = e[f];
        return h;
    }, b(c, d);
}
var __createBinding = this && this[J(0xb2) + J(0xb6)] || (Object[J(0xcb)] ? function (e, f, g, h) {
        var L = J, M = J, i = {};
        i[L(0xc6)] = function (p, q) {
            return p === q;
        }, i[L(0xb8)] = function (p, q) {
            return p in q;
        }, i[L(0xc8)] = L(0xd5);
        var j = i;
        if (j[L(0xc6)](h, undefined))
            h = g;
        var l = Object[L(0xc5) + L(0xb9) + L(0xd0)](f, g);
        if (!l || (j[L(0xb8)](j[L(0xc8)], l) ? !f[M(0xd7)] : l[L(0xa0)] || l[L(0x96) + 'le'])) {
            var n = {};
            n[L(0xcd)] = !![], n[M(0xd5)] = function () {
                return f[g];
            }, l = n;
        }
        Object[L(0xa7) + M(0xaa)](e, h, l);
    } : function (d, e, f, g) {
        var N = J, O = K, h = {};
        h[N(0xd2)] = function (j, l) {
            return j === l;
        };
        var i = h;
        if (i[O(0xd2)](g, undefined))
            g = f;
        d[g] = e[f];
    }), __setModuleDefault = this && this[K(0xa3) + K(0xaf)] || (Object[K(0xcb)] ? function (e, f) {
        var P = K, Q = J, g = {};
        g[P(0xa2)] = Q(0xa6);
        var h = g, i = {};
        i[Q(0xcd)] = !![], i[Q(0x9c)] = f, Object[Q(0xa7) + P(0xaa)](e, h[Q(0xa2)], i);
    } : function (d, e) {
        var R = J, S = J, f = {};
        f[R(0xbf)] = S(0xa6);
        var g = f;
        d[g[R(0xbf)]] = e;
    }), __importStar = this && this[K(0xd8) + 'ar'] || function (c) {
        var T = K, U = J, d = {
                'XTzTy': T(0xb1),
                'lzduz': function (i, j, l) {
                    return i(j, l);
                },
                'KXuLP': function (i, j) {
                    return i != j;
                },
                'ZYjQO': function (i, j) {
                    return i !== j;
                },
                'FWBUl': U(0xa6),
                'dKauI': function (i, j, l, m) {
                    return i(j, l, m);
                }
            }, e = d[T(0x9e)][U(0xd4)]('|'), f = 0xae4 + 0x499 * -0x1 + -0x9 * 0xb3;
        while (!![]) {
            switch (e[f++]) {
            case '0':
                d[U(0xb4)](__setModuleDefault, g, c);
                continue;
            case '1':
                var g = {};
                continue;
            case '2':
                if (c && c[T(0xd7)])
                    return c;
                continue;
            case '3':
                return g;
            case '4':
                if (d[U(0xa5)](c, null)) {
                    for (var h in c)
                        if (d[U(0xbd)](h, d[T(0xa1)]) && Object[U(0xac)][T(0xb0) + T(0xaa)][U(0x9d)](c, h))
                            d[T(0xab)](__createBinding, g, c, h);
                }
                continue;
            }
            break;
        }
    }, __importDefault = this && this[K(0xbb) + J(0xa4)] || function (c) {
        var V = J;
        return c && c[V(0xd7)] ? c : { 'default': c };
    }, G = {};
G[J(0x9c)] = !![], Object[K(0xa7) + J(0xaa)](exports, J(0xd7), G);
const express_1 = __importDefault(require(K(0xc0))), isAuth_1 = __importDefault(require(K(0x9b) + K(0xc3))), PlanController = __importStar(require(J(0xbc) + J(0xb5) + K(0xd3))), planRoutes = express_1[K(0xa6)][K(0x99)]();
planRoutes[J(0xd5)](K(0xb7) + J(0xbe), PlanController[K(0xba)]), planRoutes[J(0xd5)](J(0xb7) + 't', isAuth_1[K(0xa6)], PlanController[J(0x9f)]), planRoutes[J(0xc1)](J(0x97), isAuth_1[K(0xa6)], PlanController[J(0xa9)]), planRoutes[J(0xcf)](J(0xc4), isAuth_1[J(0xa6)], PlanController[J(0xc9)]), planRoutes[K(0xae)](K(0x97), isAuth_1[J(0xa6)], PlanController[J(0xd1)]), exports[J(0xa6)] = planRoutes;
function a() {
    var W = [
        'tpublic',
        'XwldJ',
        'express',
        'delete',
        '565588cwTNQI',
        'are/isAuth',
        '/plans',
        'getOwnProp',
        'iOWPX',
        '1131816SvITYp',
        'vDrbW',
        'store',
        '3603908awQaKv',
        'create',
        '3RDdhZz',
        'enumerable',
        '209948IcOYkK',
        'post',
        'ptor',
        'update',
        'qHkdw',
        'ontroller',
        'split',
        'get',
        '5ORCpuV',
        '__esModule',
        '__importSt',
        'configurab',
        '/plans/:id',
        '6YuVviJ',
        'Router',
        '99529qmGDyQ',
        '../middlew',
        'value',
        'call',
        'XTzTy',
        'list',
        'writable',
        'FWBUl',
        'aUrlL',
        '__setModul',
        'fault',
        'KXuLP',
        'default',
        'defineProp',
        '1950970tePJam',
        'remove',
        'erty',
        'dKauI',
        'prototype',
        '632OaFzND',
        'put',
        'eDefault',
        'hasOwnProp',
        '2|1|4|0|3',
        '__createBi',
        '25101stxIYi',
        'lzduz',
        'lers/PlanC',
        'nding',
        '/plans/lis',
        'EnvPI',
        'ertyDescri',
        'listPublic',
        '__importDe',
        '../control',
        'ZYjQO'
    ];
    a = function () {
        return W;
    };
    return a();
}