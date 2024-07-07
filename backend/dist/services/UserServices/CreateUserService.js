'use strict';
const J = b, K = b;
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(H(0x19c)) / (-0x2c * 0x11 + 0x1620 + -0x1 * 0x1333) * (parseInt(H(0x1bc)) / (-0x81 * -0x2d + -0x1 * 0x687 + -0x4 * 0x409)) + parseInt(H(0x17a)) / (-0x20a5 + -0x991 + 0xe13 * 0x3) + -parseInt(H(0x18f)) / (-0x9f0 + 0xa95 + -0xa1) + -parseInt(H(0x1c9)) / (0xc97 + 0x1 * -0x13e7 + 0x755) * (parseInt(H(0x189)) / (0xe4d + 0x2483 + -0x32ca)) + parseInt(I(0x1c0)) / (0x51f + -0x5 * -0xef + -0x77 * 0x15) + parseInt(H(0x17c)) / (-0xf43 + -0x3 * 0x8b5 + 0x296a) * (-parseInt(I(0x1c1)) / (-0x1286 * 0x1 + 0x20ba + -0xd * 0x117)) + -parseInt(I(0x1a4)) / (0xbf * -0x24 + 0x28d * 0xb + 0x3 * -0x63) * (parseInt(I(0x180)) / (-0x18a7 + 0x7 * -0x4b + 0x1abf));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x355 * -0xda + 0x6fc81 + -0x10e46 * 0x1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1f3a * 0x1 + -0xc07 * 0x3 + 0x652);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __createBinding = this && this[J(0x1a7) + K(0x1a1)] || (Object[J(0x181)] ? function (e, f, g, h) {
        const L = J, M = K, i = {};
        i[L(0x1b4)] = function (n, p) {
            return n === p;
        }, i[M(0x1ac)] = function (n, p) {
            return n in p;
        }, i[L(0x1b7)] = M(0x1ad);
        const j = i;
        if (j[M(0x1b4)](h, undefined))
            h = g;
        var l = Object[M(0x18c) + L(0x1ce) + M(0x1bf)](f, g);
        if (!l || (j[L(0x1ac)](j[M(0x1b7)], l) ? !f[M(0x177)] : l[M(0x1b1)] || l[M(0x1c7) + 'le'])) {
            const n = {};
            n[L(0x19f)] = !![], n[M(0x1ad)] = function () {
                return f[g];
            }, l = n;
        }
        Object[M(0x17b) + M(0x1b9)](e, h, l);
    } : function (d, e, f, g) {
        const N = K, O = K, h = {};
        h[N(0x19d)] = function (j, l) {
            return j === l;
        };
        const i = h;
        if (i[O(0x19d)](g, undefined))
            g = f;
        d[g] = e[f];
    }), __setModuleDefault = this && this[K(0x1af) + J(0x1a8)] || (Object[J(0x181)] ? function (e, f) {
        const P = J, Q = K, g = {};
        g[P(0x1c2)] = P(0x195);
        const h = g, i = {};
        i[P(0x19f)] = !![], i[Q(0x1b8)] = f, Object[Q(0x17b) + P(0x1b9)](e, h[P(0x1c2)], i);
    } : function (d, e) {
        const R = K, S = K, f = {};
        f[R(0x18d)] = S(0x195);
        const g = f;
        d[g[R(0x18d)]] = e;
    }), __importStar = this && this[J(0x198) + 'ar'] || function (c) {
        const T = J, U = K, d = {
                'DCDBW': T(0x184),
                'tqYlZ': function (i, j, l) {
                    return i(j, l);
                },
                'aDVaY': function (i, j) {
                    return i != j;
                },
                'apxxa': function (i, j) {
                    return i !== j;
                },
                'zhOif': T(0x195),
                'yJdUU': function (i, j, l, m) {
                    return i(j, l, m);
                }
            }, e = d[T(0x190)][T(0x1c5)]('|');
        let f = 0x1796 + 0xa1d + -0x1 * 0x21b3;
        while (!![]) {
            switch (e[f++]) {
            case '0':
                d[U(0x1ca)](__setModuleDefault, g, c);
                continue;
            case '1':
                var g = {};
                continue;
            case '2':
                if (c && c[T(0x177)])
                    return c;
                continue;
            case '3':
                return g;
            case '4':
                if (d[T(0x1b2)](c, null)) {
                    for (var h in c)
                        if (d[U(0x197)](h, d[U(0x1a3)]) && Object[T(0x19e)][U(0x178) + T(0x1b9)][T(0x1cb)](c, h))
                            d[U(0x1cd)](__createBinding, g, c, h);
                }
                continue;
            }
            break;
        }
    }, __importDefault = this && this[J(0x194) + K(0x17f)] || function (c) {
        const V = K;
        return c && c[V(0x177)] ? c : { 'default': c };
    };
const G = {};
G[J(0x1b8)] = !![], Object[J(0x17b) + J(0x1b9)](exports, K(0x177), G);
const Yup = __importStar(require(K(0x1aa))), AppError_1 = __importDefault(require(K(0x1a5) + J(0x1c3) + 'r')), User_1 = __importDefault(require(J(0x188) + J(0x182))), CreateUserService = async ({
        email: g,
        password: h,
        name: i,
        tenantId: j,
        profile: profile = J(0x1ba),
        configs: k
    }) => {
        const W = K, X = J, l = {};
        l[W(0x186)] = function (s, t) {
            return s === t;
        }, l[W(0x199)] = function (s, t) {
            return s in t;
        }, l[X(0x1b3)] = W(0x1ad), l[X(0x1a6)] = W(0x1cc) + 'l', l[X(0x18b)] = W(0x193) + X(0x179) + X(0x1c4) + W(0x18e), l[X(0x185)] = X(0x1bd), l[X(0x1be)] = function (s, t) {
            return s !== t;
        }, l[W(0x191)] = X(0x187), l[W(0x1ae)] = X(0x1a0);
        const m = l, n = Yup[X(0x1b5)]()[W(0x1a2)]({
                'name': Yup[W(0x1c8)]()[W(0x19b)]()[X(0x1b0)](0x1104 + 0x23f6 * -0x1 + 0x12f4),
                'tenantId': Yup[W(0x19a)]()[X(0x19b)](),
                'email': Yup[W(0x1c8)]()[X(0x18a)]()[W(0x19b)]()[W(0x1c6)](m[X(0x1a6)], m[X(0x18b)], async s => {
                    const Y = W, Z = W, t = {};
                    t[Y(0x18a)] = s;
                    const u = {};
                    u[Y(0x192)] = t;
                    const v = await User_1[Z(0x195)][Y(0x1ab)](u);
                    return !v;
                }),
                'password': Yup[W(0x1c8)]()[W(0x19b)]()[X(0x1b0)](-0x1219 + -0x1 * -0x1ad3 + -0x8b5)
            });
        try {
            if (m[X(0x186)](m[X(0x185)], m[W(0x185)])) {
                const s = {};
                s[W(0x18a)] = g, s[W(0x1a9)] = h, s[X(0x1b6)] = i, s[W(0x17e)] = j, await n[X(0x183)](s);
            } else {
                if (m[W(0x186)](k, l))
                    m = n;
                o[p] = q[r];
            }
        } catch (u) {
            if (m[W(0x1be)](m[W(0x191)], m[X(0x1ae)]))
                throw new AppError_1[(X(0x195))](u[X(0x196)]);
            else {
                if (m[X(0x186)](p, q))
                    r = s;
                var w = t[X(0x18c) + X(0x1ce) + W(0x1bf)](u, v);
                (!w || (m[X(0x199)](m[W(0x1b3)], w) ? !w[X(0x177)] : w[X(0x1b1)] || w[W(0x1c7) + 'le'])) && (w = {
                    'enumerable': !![],
                    'get': function () {
                        return w[F];
                    }
                }), z[W(0x17b) + X(0x1b9)](A, B, w);
            }
        }
        const o = {};
        o[W(0x18a)] = g, o[X(0x1a9)] = h, o[W(0x1b6)] = i, o[X(0x1bb)] = profile, o[W(0x17e)] = j, o[W(0x17d)] = k;
        const p = await User_1[X(0x195)][W(0x181)](o), q = {};
        q['id'] = p['id'], q[W(0x1b6)] = p[W(0x1b6)], q[W(0x18a)] = p[X(0x18a)], q[W(0x1bb)] = p[W(0x1bb)];
        const r = q;
        return r;
    };
function a() {
    const a0 = [
        '__importSt',
        'eWUvo',
        'number',
        'required',
        '200047gCePcG',
        'rrULp',
        'prototype',
        'enumerable',
        'GWRkm',
        'nding',
        'shape',
        'zhOif',
        '10ARDxYp',
        '../../erro',
        'ZeZEv',
        '__createBi',
        'eDefault',
        'password',
        'yup',
        'findOne',
        'ViaPf',
        'get',
        'Pqjyv',
        '__setModul',
        'min',
        'writable',
        'aDVaY',
        'zNToT',
        'rJVzk',
        'object',
        'name',
        'CbFOu',
        'value',
        'erty',
        'admin',
        'profile',
        '10gqCrCP',
        'TOJBp',
        'zFkUv',
        'ptor',
        '7388402QzhZml',
        '608121kRtbdT',
        'MYKvy',
        'rs/AppErro',
        'ail\x20alread',
        'split',
        'test',
        'configurab',
        'string',
        '3558955dxfOtz',
        'tqYlZ',
        'call',
        'Check-emai',
        'yJdUU',
        'ertyDescri',
        '__esModule',
        'hasOwnProp',
        'th\x20this\x20em',
        '3243954zBKbrK',
        'defineProp',
        '16MpoxXC',
        'configs',
        'tenantId',
        'fault',
        '6885329viGMzF',
        'create',
        'ls/User',
        'validate',
        '2|1|4|0|3',
        'kJAbM',
        'ajdxl',
        'geClb',
        '../../mode',
        '6bzLqDb',
        'email',
        'MonNM',
        'getOwnProp',
        'tjOuI',
        'y\x20exists.',
        '4358200UhTKoj',
        'DCDBW',
        'dhKjP',
        'where',
        'An\x20user\x20wi',
        '__importDe',
        'default',
        'message',
        'apxxa'
    ];
    a = function () {
        return a0;
    };
    return a();
}
exports[J(0x195)] = CreateUserService;