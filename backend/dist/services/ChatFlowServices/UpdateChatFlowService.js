'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1722 + 0x3d * -0x3d + 0xf5 * -0x7);
        let h = e[f];
        return h;
    }, b(c, d);
}
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0x1f2)) / (-0xdbc + 0x18e9 + -0xb2c) * (parseInt(A(0x1ef)) / (0x1183 + -0x2175 + 0x4 * 0x3fd)) + parseInt(z(0x208)) / (0x13b4 + -0x626 + -0xd8b) + -parseInt(z(0x21d)) / (-0x1eb * 0x1 + -0x249a + 0x2689) * (-parseInt(z(0x1ec)) / (0x1 * -0x2688 + -0x1d1d + -0x43aa * -0x1)) + parseInt(z(0x1ee)) / (0x12bc + 0x23c5 + -0x1 * 0x367b) + -parseInt(z(0x1fe)) / (0xfb1 * 0x1 + 0x8e1 + 0x3d * -0x67) + -parseInt(A(0x1f9)) / (-0x13b * 0xb + 0x1a87 + -0xcf6) * (-parseInt(z(0x226)) / (-0x1 * -0x998 + -0x51d + -0x472)) + parseInt(A(0x213)) / (0x2590 + -0x2 * -0xa7 + -0x26d4);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x149263 + 0x76224 + -0x2d1 * 0x503));
var __importDefault = this && this[B(0x1f5) + B(0x21b)] || function (c) {
    const D = B;
    return c && c[D(0x20a)] ? c : { 'default': c };
};
const k = {};
function a() {
    const G = [
        '__esModule',
        'update',
        'public',
        'MmPVq',
        'celularTes',
        'value',
        'ls/ChatFlo',
        'ERR_NO_CHA',
        'MediaField',
        '13890880lpYUUy',
        'tenantId',
        'where',
        'getTime',
        'GmtAu',
        'KHPhk',
        '../../erro',
        'defineProp',
        'fault',
        'isActive',
        '74012SDUfTR',
        'nodeList',
        'T_FLOW_FOU',
        'zuaQN',
        'util',
        'name',
        'FbEwR',
        'findOne',
        'base64',
        '28566PBPWyu',
        'hMADx',
        'qIhYs',
        'media',
        'writeFile',
        'path',
        'default',
        'join',
        '305UBAjeq',
        'rSvTi',
        '1010430jVsRNv',
        '79890hvGpmv',
        'split',
        'pGNwh',
        '31gMKGjU',
        'userId',
        'lUGRH',
        '__importDe',
        'type',
        'erty',
        '../../mode',
        '2536CxcdhD',
        'interactio',
        'attributes',
        'UseFF',
        'length',
        '11510541xjaOSS',
        'promisify',
        'dRqYL',
        'data',
        'mediaUrl',
        'flow',
        'reload',
        'rs/AppErro',
        'SYVNL',
        'Ibctp',
        '292056dUZTUg',
        'node'
    ];
    a = function () {
        return G;
    };
    return a();
}
k[C(0x20f)] = !![], Object[B(0x21a) + C(0x1f7)](exports, C(0x20a), k);
const util_1 = require(C(0x221)), path_1 = require(C(0x1e9)), fs_1 = require('fs'), ChatFlow_1 = __importDefault(require(B(0x1f8) + C(0x210) + 'w')), AppError_1 = __importDefault(require(B(0x219) + C(0x205) + 'r')), writeFileAsync = (0x435 * 0x3 + -0x1747 + -0x2aa * -0x4, util_1[C(0x1ff)])(fs_1[B(0x1e8)]), UpdateChatFlowService = async ({
        chatFlowData: g,
        chatFlowId: h,
        tenantId: i
    }) => {
        const E = C, F = C, j = {
                'KHPhk': E(0x222),
                'pGNwh': F(0x203),
                'dRqYL': E(0x1f3),
                'qIhYs': E(0x21c),
                'zuaQN': E(0x20e) + 'te',
                'SYVNL': F(0x211) + F(0x21f) + 'ND',
                'hMADx': function (v, w) {
                    return v === w;
                },
                'Ibctp': F(0x209),
                'rSvTi': F(0x212),
                'FbEwR': function (v, w, x, y) {
                    return v(w, x, y);
                },
                'MmPVq': E(0x20c),
                'UseFF': E(0x225),
                'lUGRH': function (v, w) {
                    return v === w;
                },
                'GmtAu': function (v, w) {
                    return v - w;
                }
            }, {
                name: l,
                flow: m,
                userId: n,
                isActive: o,
                celularTeste: p
            } = g, q = {};
        q['id'] = h, q[E(0x214)] = i;
        const r = {};
        r[E(0x215)] = q, r[E(0x1fb)] = [
            'id',
            j[F(0x218)],
            j[F(0x1f1)],
            j[E(0x200)],
            j[F(0x1e6)],
            j[E(0x220)]
        ];
        const s = await ChatFlow_1[E(0x1ea)][F(0x224)](r);
        if (!s)
            throw new AppError_1[(E(0x1ea))](j[E(0x206)], -0x54b + 0x456 + 0x289);
        for await (const v of m[F(0x203)][E(0x21e)]) {
            if (j[F(0x227)](v[E(0x1f6)], j[F(0x207)]))
                for await (const w of v[E(0x1fa) + 'ns']) {
                    if (j[E(0x227)](w[F(0x1f6)], j[E(0x1ed)]) && w[E(0x201)][F(0x1e7)]) {
                        const x = new Date()[E(0x216)]() + '-' + w[E(0x201)][E(0x222)];
                        await j[F(0x223)](writeFileAsync, (-0xb5b + -0x262e + 0x3189, path_1[F(0x1eb)])(__dirname, '..', '..', '..', j[F(0x20d)], x), w[E(0x201)][F(0x1e7)][E(0x1f0)](j[E(0x1fc)])[-0x5bb + -0x274 * 0x1 + 0x106 * 0x8], j[F(0x1fc)]), delete w[F(0x201)][F(0x1e7)], w[E(0x201)][F(0x202)] = x;
                    }
                    if (j[F(0x1f4)](w[F(0x1f6)], j[F(0x1ed)]) && w[F(0x201)][E(0x202)]) {
                        const y = w[F(0x201)][E(0x202)][F(0x1f0)]('/');
                        w[F(0x201)][E(0x202)] = y[j[E(0x217)](y[F(0x1fd)], -0x3 * 0x7ef + -0x13ae + 0x2b7c)];
                    }
                }
        }
        const t = {};
        t[F(0x222)] = l, t[F(0x203)] = m[F(0x203)], t[F(0x1f3)] = n, t[E(0x21c)] = m[F(0x21c)], t[F(0x20e) + 'te'] = m[F(0x20e) + 'te'], await s[F(0x20b)](t);
        const u = {};
        return u[F(0x1fb)] = [
            'id',
            j[E(0x218)],
            j[E(0x1f1)],
            j[F(0x200)],
            j[F(0x1e6)],
            j[E(0x220)]
        ], await s[F(0x204)](u), s;
    };
exports[C(0x1ea)] = UpdateChatFlowService;