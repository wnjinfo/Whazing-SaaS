'use strict';
const E = b, F = b;
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(C(0x1df)) / (-0x1 * 0xef5 + -0x11a * -0x1b + -0xec8) + parseInt(C(0x1c3)) / (0xcd * 0x1d + -0x12e3 + 0x454 * -0x1) * (-parseInt(D(0x1d1)) / (0xb * -0x67 + 0x4 * 0x17e + -0x188)) + parseInt(C(0x1cc)) / (-0x1043 + 0x12a * -0xd + 0x1f69) * (parseInt(D(0x1c2)) / (-0x1 * -0x877 + 0x17d * -0x5 + -0x101)) + -parseInt(C(0x1d2)) / (0x5c8 + 0x1195 + -0x1757) * (-parseInt(D(0x1ae)) / (-0x1376 + -0x35 * -0x93 + 0x1d3 * -0x6)) + -parseInt(C(0x1bc)) / (0x42a * 0x3 + -0x42 * -0x3e + -0x1 * 0x1c72) + parseInt(C(0x1be)) / (-0x19 * -0xeb + -0x1 * -0x132d + -0x2a17) + parseInt(D(0x1c6)) / (0xb9d + -0x1393 + 0x800);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1f * -0x35e7 + -0x1 * -0x44b3e + 0x3 * -0x15231));
var __importDefault = this && this[E(0x1b0) + E(0x1c8)] || function (c) {
    const G = E;
    return c && c[G(0x1d9)] ? c : { 'default': c };
};
const B = {};
B[E(0x1ac)] = !![], Object[E(0x1a8) + F(0x1ab)](exports, F(0x1d9), B), exports[E(0x1b2) + 'e'] = exports[E(0x1e0)] = exports[F(0x1a9)] = void (-0x119 * 0x15 + 0xa16 * 0x3 + 0xf * -0x7b);
const ioredis_1 = __importDefault(require(F(0x1de))), redisClient = new ioredis_1[(E(0x1cf))]({
        'port': Number(process[F(0x1b8)][F(0x1b9) + F(0x1bf)]),
        'host': process[F(0x1b8)][E(0x1cd) + F(0x1af)],
        'db': Number(process[E(0x1b8)][F(0x1cb) + E(0x1c4)]) || 0x15d * -0xd + -0x1 * 0x1f03 + -0x9c1 * -0x5,
        'password': process[E(0x1b8)][E(0x1b9) + E(0x1b3)] || undefined
    }), getValue = c => {
        const H = E, I = F, d = {
                'hgZbe': function (e, f) {
                    return e(f);
                },
                'RWClr': function (e, f) {
                    return e !== f;
                },
                'RgfeR': H(0x1c0),
                'xyxul': function (e, f) {
                    return e === f;
                },
                'cnUII': I(0x1a6),
                'vIfkH': function (e, f) {
                    return e || f;
                },
                'ptbJc': function (e, f) {
                    return e(f);
                },
                'WTLwK': function (e, f) {
                    return e !== f;
                },
                'mWFyG': I(0x1b6),
                'kkrPW': H(0x1b7)
            };
        return new Promise((e, f) => {
            const L = H, M = I, g = {
                    'xiMRV': function (h, i) {
                        const J = b;
                        return d[J(0x1da)](h, i);
                    },
                    'UiRjr': function (h, i) {
                        const K = b;
                        return d[K(0x1da)](h, i);
                    }
                };
            d[L(0x1ca)](d[L(0x1c1)], d[M(0x1d7)]) ? redisClient[M(0x1b5)](c, (h, i) => {
                const N = L, O = M;
                if (h)
                    return d[N(0x1da)](f, h);
                let j;
                if (i) {
                    if (d[O(0x1dc)](d[O(0x1db)], d[O(0x1db)])) {
                        if (g)
                            return g[N(0x1ad)](h, i);
                        return g[O(0x1bb)](j, !![]);
                    } else
                        try {
                            d[N(0x1d8)](d[O(0x1d6)], d[N(0x1d6)]) ? j = JSON[N(0x1d4)](d[O(0x1ce)](i, '')) : e = f;
                        } catch (m) {
                            j = d[O(0x1ba)](String, i);
                        }
                } else
                    j = i;
                return d[N(0x1ba)](e, j);
            }) : f = g[L(0x1c9)](h);
        });
    };
exports[F(0x1a9)] = getValue;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x319 * -0x5 + 0x62 * -0x2e + 0x3c4);
        let h = e[f];
        return h;
    }, b(c, d);
}
const setValue = (c, d) => {
    const P = E, Q = E, e = {
            'AOwnR': function (f, g) {
                return f(g);
            },
            'NzqXm': function (f, g) {
                return f || g;
            },
            'ypOfz': function (f, g) {
                return f === g;
            },
            'Pmlou': P(0x1aa),
            'PdAcz': Q(0x1c7)
        };
    return new Promise((f, g) => {
        const S = P, T = P, h = {
                'kWFij': function (j, k) {
                    const R = b;
                    return e[R(0x1d5)](j, k);
                }
            };
        let i;
        e[S(0x1b4)](typeof d, e[S(0x1d3)]) ? i = JSON[S(0x1c9)](d) : e[T(0x1b4)](e[T(0x1bd)], e[S(0x1bd)]) ? i = e[T(0x1b1)](String, d) : f = g[T(0x1d4)](h[T(0x1d0)](h, '')), redisClient[T(0x1c5)](c, i, k => {
            const U = T, V = S;
            if (k)
                return e[U(0x1b1)](g, k);
            return e[V(0x1b1)](f, i);
        });
    });
};
function a() {
    const Z = [
        '3006140rUtTNn',
        'vHOUk',
        'fault',
        'stringify',
        'WTLwK',
        'IO_REDIS_D',
        '469988bUMByi',
        'IO_REDIS_S',
        'vIfkH',
        'default',
        'kWFij',
        '327093kBuAyh',
        '2488872ReFwkV',
        'Pmlou',
        'parse',
        'NzqXm',
        'cnUII',
        'kkrPW',
        'xyxul',
        '__esModule',
        'hgZbe',
        'RgfeR',
        'RWClr',
        'del',
        'ioredis',
        '285773gKtQlp',
        'setValue',
        'TxmHS',
        'Btvie',
        'RWnpi',
        'defineProp',
        'getValue',
        'object',
        'erty',
        'value',
        'xiMRV',
        '7bAGNep',
        'ERVER',
        '__importDe',
        'AOwnR',
        'removeValu',
        'ASSWORD',
        'ypOfz',
        'get',
        'fYyRs',
        'eoXyl',
        'env',
        'IO_REDIS_P',
        'ptbJc',
        'UiRjr',
        '5633288opcndn',
        'PdAcz',
        '6286986ybXZiv',
        'ORT',
        'Kpndm',
        'mWFyG',
        '15XKlFAy',
        '6zcNhrh',
        'B_SESSION',
        'set'
    ];
    a = function () {
        return Z;
    };
    return a();
}
exports[F(0x1e0)] = setValue;
const removeValue = c => {
    const d = {
        'RWnpi': function (e, f) {
            return e(f);
        },
        'TxmHS': function (e, f) {
            return e(f);
        }
    };
    return new Promise((e, f) => {
        const W = b;
        redisClient[W(0x1dd)](c, g => {
            const X = W, Y = W;
            if (g)
                return d[X(0x1a7)](f, g);
            return d[Y(0x1a5)](e, !![]);
        });
    });
};
exports[E(0x1b2) + 'e'] = removeValue;