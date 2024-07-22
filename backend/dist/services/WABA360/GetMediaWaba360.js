'use strict';
const A = b, B = b;
function a() {
    const Q = [
        'NIQKX',
        'audio',
        'IA:\x20',
        'Voasr',
        'logger',
        'EoLUH',
        'FPEJS',
        'vslXD',
        '../../util',
        'mBxzC',
        'UBRsT',
        'GET',
        'data',
        'IVfFD',
        'QduYc',
        'finish',
        'SWmqB',
        'public',
        'defineProp',
        'mime_type',
        '1156101AtoBfs',
        'UNrBV',
        'default',
        '3677136LxhJog',
        'ERROR\x20DONW',
        'RxjoA',
        'length',
        'oOSAY',
        'TAnma',
        'ViwFK',
        'WeCbd',
        'headers',
        'TNWuw',
        'fRYsU',
        'IhWeS',
        'eStream',
        'lgcpU',
        'waxLx',
        'NBYAs',
        'UGatx',
        'YWLnE',
        'video',
        'ncFqv',
        'TcXPq',
        'method',
        '2891616AuMZZk',
        'getTime',
        'url',
        'document',
        'LOAD',
        'QIvyn',
        'responseTy',
        'voice',
        'idFDc',
        'bINuS',
        'erty',
        's/logger',
        'RPQWM',
        'ponOF',
        '/v1/media/',
        'WFHku',
        'sbbML',
        'UlaqK',
        'Dntdm',
        'DDkzW',
        'stream',
        'MrRao',
        '../../erro',
        'qvLRD',
        'join',
        '3421548pBmrCB',
        'BpAup',
        '__importDe',
        'createWrit',
        'error',
        'image',
        'YfBXY',
        'pipe',
        'vZynN',
        'filename',
        'rs/AppErro',
        'value',
        'Hvfvs',
        'path',
        'split',
        'vaRJs',
        'D360-API-K',
        'API_URL_36',
        'YoxGE',
        '3190404jcLoqe',
        'fault',
        'cWZYP',
        '3098652fyePct',
        '6947700nXakol',
        'tVvnu',
        'IFxoz',
        '__esModule',
        'XPtoo',
        'meidA',
        'ZDjLP',
        'axios',
        'env',
        'mrDYI',
        'VduyX',
        'tokenAPI',
        'WNLOAD_MED',
        'XPHCW',
        '360_NOT_DO',
        'MwRHz'
    ];
    a = function () {
        return Q;
    };
    return a();
}
(function (c, d) {
    const y = b, z = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(y(0xc9)) / (-0x4 * 0x84c + 0x125d + -0x34 * -0x49) + parseInt(z(0x75)) / (-0x3 * -0x5f6 + -0xa42 + -0x79e) + -parseInt(z(0xcc)) / (0x145b * -0x1 + -0x458 + -0x1 * -0x18b6) + parseInt(y(0x8e)) / (0x1077 * -0x1 + -0x1eb6 + 0x2f31) + -parseInt(y(0xa5)) / (-0x510 * -0x7 + 0xb6a * 0x3 + -0x45a9) + parseInt(y(0xa4)) / (-0x2200 + 0x8be * 0x3 + 0x1 * 0x7cc) + -parseInt(y(0xa1)) / (-0x1b99 + -0x2215 + -0x3db5 * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x18c3e8 + 0x10d7b2 * -0x1 + 0x3761d4));
var __importDefault = this && this[A(0x90) + A(0xa2)] || function (c) {
    const C = A;
    return c && c[C(0xa8)] ? c : { 'default': c };
};
const u = {};
u[B(0x99)] = !![], Object[B(0xc7) + B(0x7f)](exports, A(0xa8), u);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x97c + -0xb7b * -0x3 + -0x5c * 0x79);
        let h = e[f];
        return h;
    }, b(c, d);
}
const axios_1 = __importDefault(require(A(0xac))), fs_1 = require('fs'), path_1 = require(B(0x9b)), AppError_1 = __importDefault(require(B(0x8b) + A(0x98) + 'r')), logger_1 = require(A(0xbd) + A(0x80)), downloadFile = async (e, f, g) => {
        const D = A, E = B, h = {
                'SWmqB': function (n, o) {
                    return n !== o;
                },
                'Voasr': D(0x85),
                'meidA': D(0xcd) + D(0x79),
                'MwRHz': function (n, o) {
                    return n(o);
                },
                'waxLx': function (n, o) {
                    return n === o;
                },
                'DDkzW': E(0x9a),
                'ponOF': E(0x7d),
                'mBxzC': E(0xc4),
                'vslXD': E(0x92),
                'tVvnu': D(0xc6),
                'WeCbd': D(0xc0),
                'lgcpU': E(0x89)
            }, i = process[D(0xad)][D(0x9f) + '0'] + D(0x83) + f, j = (0xdd2 * -0x1 + 0xe9f + 0xcd * -0x1, path_1[D(0x8d)])(__dirname, '..', '..', h[D(0xa6)], g), k = {};
        k[D(0x9e) + 'EY'] = e;
        const l = {};
        l[E(0x77)] = i, l[D(0x74)] = h[D(0xd3)], l[E(0x7b) + 'pe'] = h[E(0xd9)], l[D(0xd4)] = k;
        const m = await (-0x1e2a + 0x22b9 + -0x48f, axios_1[D(0xcb)])(l);
        await new Promise((n, o) => {
            const G = D, H = D, p = {
                    'UGatx': function (q, r) {
                        const F = b;
                        return h[F(0xc5)](q, r);
                    },
                    'QIvyn': h[G(0xb8)],
                    'YfBXY': h[H(0xaa)],
                    'UlaqK': function (q, r) {
                        const I = H;
                        return h[I(0xb4)](q, r);
                    }
                };
            if (h[G(0xda)](h[G(0x88)], h[G(0x82)])) {
                g[G(0xb9)][G(0x92)](h);
                throw new i[(H(0xcb))](H(0xb3) + G(0xb1) + G(0xb7) + j);
            } else
                m[G(0xc1)][G(0x95)]((-0xd * -0x10d + -0x1 * -0x1c4e + 0x3 * -0xdfd, fs_1[H(0x91) + H(0xd8)])(j))['on'](h[G(0xbe)], async () => n(!![]))['on'](h[H(0xbc)], r => {
                    const J = G, K = G;
                    p[J(0xdc)](p[K(0x7a)], p[J(0x7a)]) ? (g = h[J(0x71)]['id'] || '', i = j[J(0x71)][K(0xc8)]) : (console[J(0x92)](p[J(0x94)], r), p[K(0x86)](o, new Error(r)));
                });
        });
    }, GetMediaWaba360 = async ({
        channel: c,
        msg: d,
        ticket: e
    }) => {
        const L = B, M = B, f = {
                'MrRao': L(0xcd) + M(0x79),
                'NIQKX': function (g, h) {
                    return g(h);
                },
                'IhWeS': function (g, h) {
                    return g > h;
                },
                'Dntdm': L(0xc4),
                'YWLnE': L(0x92),
                'YoxGE': function (g, h) {
                    return g !== h;
                },
                'EoLUH': M(0xa7),
                'TcXPq': function (g, h) {
                    return g === h;
                },
                'ZDjLP': L(0x96),
                'RPQWM': M(0xce),
                'FPEJS': function (g, h) {
                    return g !== h;
                },
                'TAnma': L(0xa3),
                'NBYAs': L(0xaf),
                'BpAup': M(0xc3),
                'UBRsT': function (g, h) {
                    return g === h;
                },
                'ncFqv': M(0xa9),
                'UNrBV': function (g, h) {
                    return g > h;
                },
                'mrDYI': L(0x7e),
                'vaRJs': L(0xc2),
                'TNWuw': function (g, h, i, j) {
                    return g(h, i, j);
                },
                'qvLRD': L(0xd2),
                'oOSAY': M(0xd6)
            };
        try {
            if (f[M(0xa0)](f[L(0xba)], f[M(0xba)]))
                h[M(0x92)](f[M(0x8a)], i), f[L(0xb5)](j, new k(l));
            else {
                let h = '', i, j;
                d?.[L(0x78)] && (f[L(0x73)](f[L(0xab)], f[M(0x81)]) ? (i = j[M(0x78)]['id'] || '', k = l[M(0x78)][M(0x97)], m = n[L(0x78)][M(0xc8)]) : (h = d[M(0x78)]['id'] || '', i = d[L(0x78)][M(0x97)], j = d[M(0x78)][M(0xc8)]));
                d?.[L(0x93)] && (f[M(0xbb)](f[L(0xd1)], f[L(0xdb)]) ? (h = d[L(0x93)]['id'] || '', j = d[M(0x93)][M(0xc8)]) : (g = h[L(0xb6)]['id'] || '', i = j[L(0xb6)][M(0xc8)]));
                if (d?.[M(0x71)]) {
                    if (f[M(0x73)](f[L(0x8f)], f[M(0x8f)]))
                        h = d[M(0x71)]['id'] || '', j = d[L(0x71)][M(0xc8)];
                    else {
                        const q = {};
                        return q[L(0xcb)] = j, g && h[L(0xa8)] ? i : q;
                    }
                }
                if (d?.[M(0x7c)]) {
                    if (f[L(0xbf)](f[M(0x72)], f[M(0x72)])) {
                        h = d[L(0x7c)]['id'] || '';
                        const q = d[M(0x7c)][M(0xc8)] || '', r = q[L(0x9c)](';');
                        j = f[M(0xca)](r[L(0xcf)], 0x107 * 0x18 + 0x119a * -0x2 + 0xa8d) ? r[-0x2e7 * 0xd + -0x784 + -0xb * -0x41d] : d[L(0x7c)][L(0xc8)];
                    } else {
                        h = i[L(0x7c)]['id'] || '';
                        const t = j[L(0x7c)][L(0xc8)] || '', v = t[M(0x9c)](';');
                        k = f[L(0xd7)](v[M(0xcf)], -0x19 * -0x105 + 0xecb + 0xd6d * -0x3) ? v[0x5bd + 0xe2a + -0x3fb * 0x5] : l[M(0x7c)][M(0xc8)];
                    }
                }
                if (d?.[M(0xb6)]) {
                    if (f[L(0xbf)](f[L(0xae)], f[M(0x9d)])) {
                        const v = {
                            'XPHCW': f[L(0x8a)],
                            'WFHku': function (w, x) {
                                const N = M;
                                return f[N(0xb5)](w, x);
                            }
                        };
                        j[M(0xc1)][L(0x95)]((0x99f * 0x4 + -0x1bc3 + -0xab9, k[M(0x91) + M(0xd8)])(l))['on'](f[M(0x87)], async () => q(!![]))['on'](f[L(0xdd)], w => {
                            const O = M, P = L;
                            q[O(0x92)](v[P(0xb2)], w), v[O(0x84)](r, new s(w));
                        });
                    } else
                        h = d[M(0xb6)]['id'] || '', j = d[M(0xb6)][L(0xc8)];
                }
                const k = j?.[L(0x9c)]('/')[0x151a + 0x179 * 0xb + -0x1b2 * 0x16][L(0x9c)](';')[0x5 * -0x95 + -0xc71 + 0x6 * 0x28f], l = new Date()[M(0x76)](), m = i ? i + '_' + e['id'] + '_' + h + '_' + l + '.' + k : e['id'] + '_' + h + '_' + l + '.' + k;
                return await f[L(0xd5)](downloadFile, c[L(0xb0)], h, m), m;
            }
        } catch (v) {
            if (f[M(0xa0)](f[M(0x8c)], f[M(0xd0)])) {
                logger_1[M(0xb9)][L(0x92)](v);
                throw new AppError_1[(M(0xcb))](M(0xb3) + L(0xb1) + L(0xb7) + v);
            } else
                g = h[M(0x93)]['id'] || '', i = j[L(0x93)][L(0xc8)];
        }
    };
exports[B(0xcb)] = GetMediaWaba360;