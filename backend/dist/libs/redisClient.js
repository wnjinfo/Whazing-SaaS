'use strict';
const E = b, F = b;
function a() {
    const a5 = [
        'default',
        'ASSWORD',
        'IO_REDIS_S',
        'HPFLy',
        'mXdOj',
        '20508uZkufq',
        'removeValu',
        'riVDd',
        'jnHUK',
        'OJhba',
        'eocUq',
        'erty',
        'env',
        '1670079KXvUrd',
        'CDmCH',
        'get',
        '__esModule',
        'parse',
        'wnAoa',
        'QtYEX',
        'ntaTj',
        'hHTap',
        'IO_REDIS_P',
        'yVkGO',
        '7180082ZlkRwv',
        '1267120wArYtJ',
        'setValue',
        'yEoDe',
        'OaFeh',
        'getValue',
        'XmFID',
        'value',
        'ioredis',
        'del',
        'dPyHJ',
        'qMPOd',
        'object',
        '1386020rMipUD',
        'wCdjU',
        'stringify',
        'acbCm',
        'UYHEM',
        'JTbJR',
        'skXVa',
        '18NxtYoa',
        'fault',
        'XQhir',
        'uFQAq',
        'PJQMf',
        'set',
        'jlcsY',
        'bAMqR',
        'WcxEK',
        'IO_REDIS_D',
        'RCfLq',
        'B_SESSION',
        'defineProp',
        'ORT',
        '__importDe',
        'ZjtjE',
        '588668uxoTOr',
        'QAYCS',
        '21465pMDcgl',
        'ERVER',
        'JQEpU'
    ];
    a = function () {
        return a5;
    };
    return a();
}
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(C(0xec)) / (-0x40e + -0x1 * -0x86f + 0x28 * -0x1c) + -parseInt(D(0xcb)) / (-0x1cb3 + 0x20fa + -0x445) + parseInt(D(0xb3)) / (-0x3ed + -0x1b17 + 0x1f07) + -parseInt(D(0xe2)) / (0x1903 + -0x2392 + -0x1 * -0xa93) + parseInt(D(0xe4)) / (-0x20e4 + 0x24b0 + -0x3c7 * 0x1) * (parseInt(C(0xd2)) / (-0x1e58 + 0x697 * -0x4 + 0x38ba)) + parseInt(C(0xbe)) / (0x2 * -0x1229 + -0x2 * -0x653 + -0x1 * -0x17b3) + -parseInt(D(0xbf)) / (-0xdf1 + 0x31a * -0xa + -0x21 * -0x15d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xb327 * 0xe + -0xd1390 + 0x1faa91));
var __importDefault = this && this[E(0xe0) + E(0xd3)] || function (c) {
    const G = E;
    return c && c[G(0xb6)] ? c : { 'default': c };
};
const B = {};
B[E(0xc5)] = !![], Object[E(0xde) + E(0xb1)](exports, F(0xb6), B), exports[F(0xac) + 'e'] = exports[E(0xc0)] = exports[E(0xc3)] = void (-0x76f + -0x472 * -0x1 + 0x2fd * 0x1);
const ioredis_1 = __importDefault(require(E(0xc6))), redisClient = new ioredis_1[(E(0xe7))]({
        'port': Number(process[E(0xb2)][F(0xbc) + F(0xdf)]),
        'host': process[E(0xb2)][E(0xe9) + F(0xe5)],
        'db': Number(process[E(0xb2)][E(0xdb) + E(0xdd)]) || -0xac * -0x30 + 0xe * -0x1fd + -0x461,
        'password': process[F(0xb2)][E(0xbc) + F(0xe8)] || undefined
    }), getValue = c => {
        const H = F, I = E, d = {
                'acbCm': function (e, f) {
                    return e(f);
                },
                'UYHEM': function (e, f) {
                    return e || f;
                },
                'RCfLq': function (e, f) {
                    return e !== f;
                },
                'qMPOd': H(0xbb),
                'wnAoa': H(0xd4),
                'HPFLy': function (e, f) {
                    return e !== f;
                },
                'eocUq': H(0xda)
            };
        return new Promise((e, f) => {
            const K = H, g = {
                    'skXVa': function (h, i) {
                        const J = b;
                        return d[J(0xce)](h, i);
                    }
                };
            redisClient[K(0xb5)](c, (h, i) => {
                const N = K, O = K, j = {
                        'yVkGO': function (l, m) {
                            const L = b;
                            return d[L(0xce)](l, m);
                        },
                        'QtYEX': function (l, m) {
                            const M = b;
                            return d[M(0xce)](l, m);
                        }
                    };
                if (h)
                    return d[N(0xce)](f, h);
                let k;
                if (i)
                    try {
                        k = JSON[O(0xb7)](d[N(0xcf)](i, ''));
                    } catch (l) {
                        d[N(0xdc)](d[N(0xc9)], d[N(0xb8)]) ? k = d[N(0xce)](String, i) : f = g[O(0xd1)](g, h);
                    }
                else {
                    if (d[O(0xea)](d[O(0xb0)], d[O(0xb0)])) {
                        const o = {
                            'jlcsY': function (p, q) {
                                const P = N;
                                return j[P(0xbd)](p, q);
                            },
                            'JTbJR': function (p, q) {
                                const Q = O;
                                return j[Q(0xb9)](p, q);
                            }
                        };
                        return new f((p, q) => {
                            const R = N;
                            i[R(0xc7)](j, r => {
                                const S = R, T = R;
                                if (r)
                                    return o[S(0xd8)](q, r);
                                return o[T(0xd0)](p, !![]);
                            });
                        });
                    } else
                        k = i;
                }
                return d[O(0xce)](e, k);
            });
        });
    };
exports[F(0xc3)] = getValue;
const setValue = (c, d) => {
    const U = E, V = E, e = {
            'uFQAq': function (f, g) {
                return f(g);
            },
            'JQEpU': function (f, g) {
                return f(g);
            },
            'riVDd': function (f, g) {
                return f !== g;
            },
            'yEoDe': U(0xe3),
            'ntaTj': U(0xe1),
            'XmFID': function (f, g) {
                return f === g;
            },
            'bAMqR': U(0xca),
            'mXdOj': function (f, g) {
                return f === g;
            },
            'OJhba': U(0xc8),
            'PJQMf': U(0xcc)
        };
    return new Promise((f, g) => {
        const Y = V, Z = U, h = {
                'OaFeh': function (i, j) {
                    const W = b;
                    return e[W(0xd5)](i, j);
                },
                'jnHUK': function (i, j) {
                    const X = b;
                    return e[X(0xe6)](i, j);
                }
            };
        if (e[Y(0xad)](e[Z(0xc1)], e[Y(0xba)])) {
            let i;
            if (e[Z(0xc4)](typeof d, e[Y(0xd9)])) {
                if (e[Z(0xeb)](e[Y(0xaf)], e[Z(0xd6)])) {
                    if (g)
                        return h[Y(0xc2)](h, i);
                    return h[Z(0xc2)](j, !![]);
                } else
                    i = JSON[Y(0xcd)](d);
            } else
                i = e[Z(0xe6)](String, d);
            redisClient[Z(0xd7)](c, i, k => {
                const a0 = Y, a1 = Z;
                if (k)
                    return h[a0(0xc2)](g, k);
                return h[a1(0xae)](f, i);
            });
        } else
            e = f;
    });
};
exports[E(0xc0)] = setValue;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x5 * -0x6e9 + 0x1 * -0x3cb + -0xf0b * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const removeValue = c => {
    const d = {
        'CDmCH': function (e, f) {
            return e(f);
        }
    };
    return new Promise((e, f) => {
        const a2 = b;
        redisClient[a2(0xc7)](c, g => {
            const a3 = a2, a4 = a2;
            if (g)
                return d[a3(0xb4)](f, g);
            return d[a4(0xb4)](e, !![]);
        });
    });
};
exports[E(0xac) + 'e'] = removeValue;