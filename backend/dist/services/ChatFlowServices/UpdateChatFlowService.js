'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(z(0x13b)) / (-0x1ae1 + 0x11f1 + -0x2fb * -0x3) + parseInt(z(0x119)) / (-0x42 * 0x39 + -0x1a3b + 0x28ef) + parseInt(z(0x121)) / (-0x24f7 + 0xb0a + 0x1 * 0x19f0) * (-parseInt(z(0x112)) / (-0x1 * 0x1c7f + -0x112 * -0x1f + -0x4ab)) + parseInt(A(0x13d)) / (-0x18e2 + -0x758 + 0xd * 0x27b) + parseInt(A(0x117)) / (-0xd * 0x1f3 + -0x7f + 0x52c * 0x5) + -parseInt(z(0x12f)) / (0x5 * 0x4ff + -0x2bb * -0x1 + 0x13 * -0x175) + -parseInt(A(0x108)) / (0x10 + -0x4a * -0x76 + -0xbe * 0x2e);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x7a6aa * 0x1 + -0x10236c + -0x3 * -0x5a7e3));
var __importDefault = this && this[B(0x124) + B(0x12d)] || function (c) {
    const D = B;
    return c && c[D(0x110)] ? c : { 'default': c };
};
const k = {};
k[C(0x13f)] = !![], Object[C(0x113) + C(0x128)](exports, C(0x110), k);
function a() {
    const G = [
        'fault',
        'ERR_NO_CHA',
        '2512006AUuHxB',
        'yEjHL',
        'FveMy',
        'where',
        'public',
        'interactio',
        'celularTes',
        'join',
        'KnUoK',
        'data',
        'path',
        'aPFHb',
        '441542IjlWAd',
        'split',
        '5497215xEIQJN',
        'IvseN',
        'value',
        'UOVNe',
        'T_FLOW_FOU',
        'WaQtt',
        '../../erro',
        'tenantId',
        'gCwdf',
        'rs/AppErro',
        'findOne',
        'length',
        '3282112FGjgBs',
        'writeFile',
        'media',
        'type',
        'mediaUrl',
        'attributes',
        'plSJC',
        'flow',
        '__esModule',
        'name',
        '2172RkaytN',
        'defineProp',
        'reload',
        'UzeaS',
        'isActive',
        '3702684dxszDs',
        'userId',
        '287262nXhIcA',
        'default',
        'base64',
        'jcyda',
        'MediaField',
        'wEHLn',
        'getTime',
        'KcofP',
        '5397CmAQTU',
        'nodeList',
        'bcpwB',
        '__importDe',
        'promisify',
        'TNOdf',
        'ls/ChatFlo',
        'erty',
        '../../mode',
        'util',
        'update',
        'node'
    ];
    a = function () {
        return G;
    };
    return a();
}
const util_1 = require(C(0x12a)), path_1 = require(B(0x139)), fs_1 = require('fs'), ChatFlow_1 = __importDefault(require(B(0x129) + C(0x127) + 'w')), AppError_1 = __importDefault(require(B(0x143) + C(0x105) + 'r')), writeFileAsync = (0x2080 + -0x1396 + -0xcea, util_1[C(0x125)])(fs_1[C(0x109)]), UpdateChatFlowService = async ({
        chatFlowData: g,
        chatFlowId: h,
        tenantId: i
    }) => {
        const E = B, F = C, j = {
                'TNOdf': E(0x111),
                'KnUoK': F(0x10f),
                'wEHLn': E(0x118),
                'plSJC': E(0x116),
                'UOVNe': E(0x135) + 'te',
                'aPFHb': E(0x12e) + F(0x141) + 'ND',
                'UzeaS': function (v, w) {
                    return v === w;
                },
                'yEjHL': F(0x12c),
                'FveMy': function (v, w) {
                    return v === w;
                },
                'jcyda': E(0x11d),
                'bcpwB': function (v, w, x, y) {
                    return v(w, x, y);
                },
                'WaQtt': E(0x133),
                'gCwdf': F(0x11b),
                'IvseN': function (v, w) {
                    return v === w;
                },
                'KcofP': function (v, w) {
                    return v - w;
                }
            }, {
                name: l,
                flow: m,
                userId: n,
                isActive: o,
                celularTeste: p
            } = g, q = {};
        q['id'] = h, q[F(0x144)] = i;
        const r = {};
        r[F(0x132)] = q, r[E(0x10d)] = [
            'id',
            j[E(0x126)],
            j[F(0x137)],
            j[F(0x11e)],
            j[E(0x10e)],
            j[F(0x140)]
        ];
        const s = await ChatFlow_1[E(0x11a)][E(0x106)](r);
        if (!s)
            throw new AppError_1[(E(0x11a))](j[F(0x13a)], 0x16 * -0x7d + -0x266e + -0x32c0 * -0x1);
        for await (const v of m[E(0x10f)][F(0x122)]) {
            if (j[F(0x115)](v[E(0x10b)], j[E(0x130)]))
                for await (const w of v[F(0x134) + 'ns']) {
                    if (j[F(0x131)](w[F(0x10b)], j[E(0x11c)]) && w[E(0x138)][E(0x10a)]) {
                        const x = new Date()[E(0x11f)]() + '-' + w[E(0x138)][F(0x111)];
                        await j[E(0x123)](writeFileAsync, (-0x8ab * -0x1 + -0x3 * 0x7dc + 0xee9, path_1[F(0x136)])(__dirname, '..', '..', '..', j[E(0x142)], x), w[F(0x138)][E(0x10a)][F(0x13c)](j[E(0x145)])[-0xbbb * 0x1 + -0xb07 + 0x16c3], j[F(0x145)]), delete w[F(0x138)][F(0x10a)], w[F(0x138)][E(0x10c)] = x;
                    }
                    if (j[E(0x13e)](w[E(0x10b)], j[E(0x11c)]) && w[E(0x138)][F(0x10c)]) {
                        const y = w[F(0x138)][F(0x10c)][E(0x13c)]('/');
                        w[E(0x138)][F(0x10c)] = y[j[E(0x120)](y[E(0x107)], -0x2 * 0x1003 + 0xcad * -0x2 + 0x3961)];
                    }
                }
        }
        const t = {};
        t[F(0x111)] = l, t[E(0x10f)] = m[F(0x10f)], t[F(0x118)] = n, t[F(0x116)] = m[F(0x116)], t[F(0x135) + 'te'] = m[F(0x135) + 'te'], await s[E(0x12b)](t);
        const u = {};
        return u[F(0x10d)] = [
            'id',
            j[E(0x126)],
            j[E(0x137)],
            j[F(0x11e)],
            j[E(0x10e)],
            j[E(0x140)]
        ], await s[F(0x114)](u), s;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xb7b + 0x6 * -0x255 + 0x1a7e);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[B(0x11a)] = UpdateChatFlowService;