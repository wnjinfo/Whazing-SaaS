'use strict';
const F = b, G = b;
(function (c, d) {
    const D = b, E = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(D(0xc2)) / (0x147e + -0x606 + 0xa1 * -0x17) + parseInt(D(0xd3)) / (-0x1423 + -0x1 * -0x2363 + 0x2 * -0x79f) + parseInt(D(0xdd)) / (0xb98 + -0xa6 * -0x1c + -0x1dbd) + -parseInt(D(0x104)) / (0x1 * -0x3b3 + 0x2302 + -0x1f4b * 0x1) + -parseInt(D(0xf1)) / (0x1502 + 0x6e * 0x11 + -0x1c4b) + parseInt(D(0xf5)) / (-0xe87 + 0x22 * 0x10f + -0x1571) * (parseInt(E(0x12d)) / (0x1dc1 + -0x2710 + -0xef * -0xa)) + parseInt(E(0xd6)) / (0x1 * 0x89b + -0x1 * 0xe59 + -0x2e3 * -0x2) * (-parseInt(E(0xd0)) / (0x13ff + -0xfb + -0x12fb));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x87b47 + -0x41e37 * -0x6 + -0x13a87b));
var __importDefault = this && this[F(0xd1) + G(0x128)] || function (c) {
    const H = G;
    return c && c[H(0x103)] ? c : { 'default': c };
};
const B = {};
B[F(0x12e)] = !![], Object[F(0x11f) + G(0x11a)](exports, G(0x103), B), exports[F(0xda) + 'e'] = exports[G(0x129)] = exports[F(0x11d)] = void (-0x395 + -0x2a8 + 0x63d * 0x1);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1afb + 0x9e4 + 0x11d8);
        let h = e[f];
        return h;
    }, b(c, d);
}
const ioredis_1 = __importDefault(require(G(0x12b))), redisClient = new ioredis_1[(G(0xd4))]({
        'port': Number(process[G(0x10a)][F(0x106) + F(0xdb)]),
        'host': process[G(0x10a)][G(0x124) + F(0x119)],
        'db': Number(process[F(0x10a)][F(0xc4) + F(0xfe)]) || -0x5ac + -0x147a * 0x1 + 0x1a2f,
        'password': process[G(0x10a)][F(0x106) + G(0x10b)] || undefined
    }), getValue = c => {
        const I = G, J = F, d = {
                'LIrxT': function (e, f) {
                    return e(f);
                },
                'mzxJq': function (e, f) {
                    return e === f;
                },
                'GgXwY': I(0xd7),
                'wbzGb': function (e, f) {
                    return e(f);
                },
                'VwAyl': function (e, f) {
                    return e === f;
                },
                'qQWWF': I(0x11b),
                'SNWvR': J(0xe8),
                'sJeRy': J(0xfa),
                'DlWsN': function (e, f) {
                    return e || f;
                },
                'fRQnU': function (e, f) {
                    return e === f;
                },
                'RZZdX': J(0xf6),
                'kkSZC': function (e, f) {
                    return e(f);
                },
                'DjYHJ': function (e, f) {
                    return e !== f;
                },
                'CPdrQ': J(0xf8),
                'EmLEI': I(0xc8),
                'XSymC': function (e, f) {
                    return e(f);
                },
                'YhiqF': function (e, f) {
                    return e(f);
                },
                'FHUJc': function (e, f) {
                    return e === f;
                },
                'QHJSe': J(0x107)
            };
        return new Promise((e, f) => {
            const L = J, Q = J, g = {
                    'KzFXo': function (h, i) {
                        const K = b;
                        return d[K(0xde)](h, i);
                    },
                    'GQhCV': d[L(0x110)],
                    'HQtDL': function (h, i) {
                        const M = L;
                        return d[M(0x12c)](h, i);
                    },
                    'KyYxf': function (h, i) {
                        const N = L;
                        return d[N(0x108)](h, i);
                    },
                    'oJrGm': function (h, i) {
                        const O = L;
                        return d[O(0xca)](h, i);
                    },
                    'llOGJ': function (h, i) {
                        const P = L;
                        return d[P(0x108)](h, i);
                    }
                };
            if (d[L(0x11e)](d[L(0x10c)], d[L(0x10c)]))
                redisClient[Q(0xf4)](c, (h, i) => {
                    const T = Q, U = Q, j = {
                            'iMlJL': function (k, l) {
                                const R = b;
                                return d[R(0x12c)](k, l);
                            },
                            'XlDwV': function (k, l) {
                                const S = b;
                                return d[S(0x12c)](k, l);
                            }
                        };
                    if (d[T(0xe5)](d[T(0xfc)], d[T(0xfc)])) {
                        if (h)
                            return d[T(0x115)](f, h);
                        let k;
                        if (i) {
                            if (d[T(0xc1)](d[T(0xe3)], d[T(0xe3)]))
                                try {
                                    if (d[U(0xc1)](d[U(0xcd)], d[T(0xfd)])) {
                                        let m;
                                        g[T(0x10e)](typeof l, g[T(0x11c)]) ? m = u[T(0x130)](v) : m = g[T(0xc9)](w, x), q[T(0x118)](r, m, C => {
                                            const V = U, W = T;
                                            if (C)
                                                return j[V(0xdf)](m, C);
                                            return j[W(0x131)](z, m);
                                        });
                                    } else
                                        k = JSON[U(0x112)](d[T(0x121)](i, ''));
                                } catch (m) {
                                    if (d[T(0xde)](d[T(0xef)], d[T(0xef)]))
                                        k = d[U(0xc5)](String, i);
                                    else {
                                        const o = {
                                            'LqHXC': function (p, q) {
                                                const X = U;
                                                return g[X(0xc9)](p, q);
                                            },
                                            'AhXsC': function (p, q) {
                                                const Y = T;
                                                return g[Y(0xc9)](p, q);
                                            }
                                        };
                                        return new f((p, q) => {
                                            const a1 = U, r = {
                                                    'RJkLe': function (s, t) {
                                                        const Z = b;
                                                        return o[Z(0x122)](s, t);
                                                    },
                                                    'imgFl': function (s, t) {
                                                        const a0 = b;
                                                        return o[a0(0x111)](s, t);
                                                    }
                                                };
                                            i[a1(0xcb)](j, s => {
                                                const a2 = a1, a3 = a1;
                                                if (s)
                                                    return r[a2(0x105)](q, s);
                                                return r[a3(0x10f)](p, !![]);
                                            });
                                        });
                                    }
                                }
                            else {
                                const p = {};
                                return p[T(0xd4)] = j, g && h[U(0x103)] ? i : p;
                            }
                        } else
                            d[T(0x109)](d[T(0x102)], d[T(0x102)]) ? f = j[U(0xdf)](g, h) : k = i;
                        return d[T(0xc5)](e, k);
                    } else {
                        if (h)
                            return g[T(0xc6)](i, j);
                        return g[U(0xe0)](k, l);
                    }
                });
            else {
                const i = {
                    'JUjXL': function (j, k) {
                        const a4 = L;
                        return g[a4(0xc6)](j, k);
                    },
                    'WrEFx': function (j, k) {
                        const a5 = Q;
                        return g[a5(0x12a)](j, k);
                    }
                };
                g[Q(0xcb)](h, n => {
                    const a6 = L, a7 = Q;
                    if (n)
                        return i[a6(0x114)](k, n);
                    return i[a6(0xf3)](l, !![]);
                });
            }
        });
    };
exports[F(0x11d)] = getValue;
function a() {
    const ap = [
        'cWsOc',
        'object',
        'HQtDL',
        'YhiqF',
        'del',
        'htwow',
        'SNWvR',
        'iLwsZ',
        'FAoRM',
        '226602fMFeaD',
        '__importDe',
        'Cwcuq',
        '797204pRxlhz',
        'default',
        'FWyYd',
        '152jkwZqj',
        'nEuNO',
        'DyMXm',
        'VRBmu',
        'removeValu',
        'ORT',
        'wxZKQ',
        '4801716jmwrdu',
        'fRQnU',
        'iMlJL',
        'oJrGm',
        'akPEh',
        'kOjbj',
        'qQWWF',
        'GhnvA',
        'mzxJq',
        'nZItF',
        'yeuno',
        'ySonq',
        'AGtZG',
        'BDEyR',
        'qhcWN',
        'uFMwk',
        'sULVg',
        'uVdwV',
        'RZZdX',
        'yCetL',
        '4600050XFnFLw',
        'qrLxC',
        'WrEFx',
        'get',
        '264kbGbWv',
        'DFOAz',
        'RZyIn',
        'dLOAk',
        'LefVh',
        'NrEvk',
        'xzKfZ',
        'GgXwY',
        'sJeRy',
        'B_SESSION',
        'WnSOo',
        'bOdCJ',
        'reQAJ',
        'CPdrQ',
        '__esModule',
        '1854988ApZuna',
        'RJkLe',
        'IO_REDIS_P',
        'OixFg',
        'XSymC',
        'DjYHJ',
        'env',
        'ASSWORD',
        'QHJSe',
        'jgaqQ',
        'KzFXo',
        'imgFl',
        'EmLEI',
        'AhXsC',
        'parse',
        'aVBVZ',
        'JUjXL',
        'wbzGb',
        'ICfzt',
        'mgYYq',
        'set',
        'ERVER',
        'erty',
        'OSjXe',
        'GQhCV',
        'getValue',
        'FHUJc',
        'defineProp',
        'WBhbT',
        'DlWsN',
        'LqHXC',
        'Rtvfs',
        'IO_REDIS_S',
        'nOmsz',
        'bCgQd',
        'OIkpY',
        'fault',
        'setValue',
        'llOGJ',
        'ioredis',
        'LIrxT',
        '276528MkMkhZ',
        'value',
        'jySsp',
        'stringify',
        'XlDwV',
        'VwAyl',
        '988405qVtqMg',
        'zNCft',
        'IO_REDIS_D',
        'kkSZC',
        'KyYxf'
    ];
    a = function () {
        return ap;
    };
    return a();
}
const setValue = (c, d) => {
    const a8 = G, a9 = G, e = {
            'FAoRM': function (f, g) {
                return f !== g;
            },
            'OIkpY': a8(0xe7),
            'akPEh': a9(0xe6),
            'sULVg': function (f, g) {
                return f(g);
            },
            'kOjbj': function (f, g) {
                return f(g);
            },
            'reQAJ': function (f, g) {
                return f(g);
            },
            'iLwsZ': function (f, g) {
                return f || g;
            },
            'nOmsz': function (f, g) {
                return f !== g;
            },
            'uVdwV': a9(0x113),
            'jgaqQ': a9(0xd8),
            'jySsp': function (f, g) {
                return f === g;
            },
            'bOdCJ': a8(0xc8),
            'cWsOc': function (f, g) {
                return f !== g;
            },
            'Rtvfs': a9(0xec),
            'RZyIn': a9(0x117),
            'ICfzt': a9(0xfb)
        };
    return new Promise((f, g) => {
        const ad = a8, ae = a9, h = {
                'LefVh': function (i, j) {
                    const aa = b;
                    return e[aa(0xce)](i, j);
                },
                'AGtZG': function (i, j) {
                    const ab = b;
                    return e[ab(0x101)](i, j);
                },
                'WnSOo': function (i, j) {
                    const ac = b;
                    return e[ac(0xed)](i, j);
                }
            };
        if (e[ad(0x125)](e[ae(0xee)], e[ae(0x10d)])) {
            let i;
            e[ad(0x12f)](typeof d, e[ae(0x100)]) ? e[ad(0xc7)](e[ae(0x123)], e[ad(0x123)]) ? f = g[ae(0x130)](h) : i = JSON[ad(0x130)](d) : e[ad(0x125)](e[ae(0xf7)], e[ad(0x116)]) ? i = e[ae(0xed)](String, d) : f = g[ad(0x112)](h[ad(0xf9)](h, '')), redisClient[ae(0x118)](c, i, l => {
                const af = ad, ag = ae;
                if (e[af(0xcf)](e[ag(0x127)], e[af(0xe1)])) {
                    if (l)
                        return e[af(0xed)](g, l);
                    return e[ag(0xe2)](f, i);
                } else {
                    if (g)
                        return h[af(0xe9)](h, i);
                    return h[af(0xff)](j, !![]);
                }
            });
        } else
            f = e[ad(0x101)](g, h);
    });
};
exports[F(0x129)] = setValue;
const removeValue = c => {
    const ah = G, ai = G, d = {
            'WBhbT': function (e, f) {
                return e === f;
            },
            'yCetL': ah(0xeb),
            'Cwcuq': function (e, f) {
                return e(f);
            },
            'VRBmu': function (e, f) {
                return e || f;
            },
            'BDEyR': function (e, f) {
                return e(f);
            },
            'bCgQd': function (e, f) {
                return e !== f;
            },
            'qrLxC': ah(0xcc),
            'FWyYd': ah(0xc3)
        };
    return new Promise((e, f) => {
        const al = ah, am = ah, g = {
                'GhnvA': function (h, i) {
                    const aj = b;
                    return d[aj(0xd9)](h, i);
                },
                'wxZKQ': function (h, i) {
                    const ak = b;
                    return d[ak(0xea)](h, i);
                }
            };
        if (d[al(0x126)](d[al(0xf2)], d[am(0xd5)]))
            redisClient[al(0xcb)](c, h => {
                const an = am, ao = al;
                if (d[an(0x120)](d[an(0xf0)], d[ao(0xf0)])) {
                    if (h)
                        return d[an(0xd2)](f, h);
                    return d[ao(0xd2)](e, !![]);
                } else
                    e = f;
            });
        else
            try {
                o = p[am(0x112)](g[am(0xe4)](q, ''));
            } catch (i) {
                u = g[am(0xdc)](v, w);
            }
    });
};
exports[F(0xda) + 'e'] = removeValue;