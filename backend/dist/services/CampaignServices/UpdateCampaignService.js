'use strict';
function a() {
    const P = [
        'filename',
        'isArray',
        'pending',
        '32FBDXue',
        'error',
        '2271537GRFqhv',
        'map',
        'DwcOq',
        'QRbbI',
        'dphgN',
        'substr',
        'default',
        '45772JgUjoI',
        'bSiSd',
        'where',
        'wrGrU',
        'fXUTn',
        'GN_NOT_IN_',
        'OkPqd',
        'zKbUq',
        '__importDe',
        '1146970fxRcjs',
        'mediaType',
        'HFilH',
        'CEEEk',
        'WNSIC',
        '7888636nMugRZ',
        'zkgbf',
        'CMrRJ',
        'ERR_NO_CAM',
        'UTlfI',
        'all',
        'split',
        'update',
        'canceled',
        'PAIGN_FOUN',
        'ENDING',
        '../../erro',
        '62017nyRUmy',
        'indexOf',
        'getTime',
        'tenantId',
        'findOne',
        'Lmlmf',
        'gcaIo',
        'xtxqU',
        'vdZue',
        '3kDuvjE',
        'bsCvc',
        '715CDUUBh',
        'IDMdh',
        '3709356WfNTtz',
        'ATE_CAMPAI',
        'fjTwF',
        'mimetype',
        'mediaUrl',
        'JBdIc',
        'blpbM',
        'qIkke',
        'hYzOW',
        'status',
        'CANCELED_P',
        'ls/Campaig',
        'JCWen',
        'length',
        'wkajA',
        'OKSda',
        'CBQQt',
        '../../mode',
        'DFeiU',
        '145170fUjJxs',
        'ODoYz',
        'JBVFQ',
        '1111krXrdt',
        'start',
        '../../util',
        'OBUGE',
        'WcCdD',
        'rs/AppErro',
        'null',
        'ERR_NO_UPD',
        'erty',
        'reload',
        'QoSuV',
        '__esModule',
        'fault',
        'logger',
        's/logger',
        'defineProp',
        'zUvZR',
        'value'
    ];
    a = function () {
        return P;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x15 * 0x18a + -0x13fd + 0x35f4);
        let h = e[f];
        return h;
    }, b(c, d);
}
const G = b, H = b;
(function (c, d) {
    const E = b, F = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(E(0x1fa)) / (-0xd83 + 0x1 * 0x2389 + -0x1605) + -parseInt(E(0x1e9)) / (0x11 * 0x236 + 0x13 * -0x1f9 + 0x1 * -0x19) * (-parseInt(F(0x1a8)) / (-0x6 * -0x38 + 0x85d + -0x9aa)) + -parseInt(E(0x1e0)) / (-0x799 + 0xb3a * 0x3 + -0x1 * 0x1a11) * (parseInt(F(0x1aa)) / (-0x1505 * -0x1 + -0x1d5c + -0xa * -0xd6)) + parseInt(F(0x1ac)) / (-0x1201 * -0x1 + -0x22d1 + 0xa * 0x1af) + -parseInt(F(0x1ee)) / (0x22fd + -0x1f19 + 0x1 * -0x3dd) + -parseInt(E(0x1d7)) / (-0x29 * -0x9b + 0x50 * -0x1d + 0xfbb * -0x1) * (-parseInt(F(0x1d9)) / (0x1 * 0xcfc + 0xff1 + -0xac * 0x2b)) + parseInt(E(0x1bf)) / (0x239a + -0x262a + 0x29a) * (parseInt(E(0x1c2)) / (-0xf9 + -0x1 * -0x1764 + -0x1660));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1323a5 + -0x1d4ac5 + 0x3f2cb6));
var __importDefault = this && this[G(0x1e8) + G(0x1ce)] || function (c) {
    const I = H;
    return c && c[I(0x1cd)] ? c : { 'default': c };
};
const D = {};
D[G(0x1d3)] = !![], Object[G(0x1d1) + G(0x1ca)](exports, G(0x1cd), D);
const AppError_1 = __importDefault(require(G(0x1f9) + H(0x1c7) + 'r')), Campaign_1 = __importDefault(require(H(0x1bd) + H(0x1b7) + 'n')), logger_1 = require(H(0x1c4) + G(0x1d0)), cArquivoName = d => {
        const J = G, K = H, e = {};
        e[J(0x1e4)] = function (i, j) {
            return i - j;
        };
        const f = e;
        if (!d)
            return '';
        const g = d[K(0x1f4)]('/'), h = g[f[J(0x1e4)](g[J(0x1b9)], -0x2573 + 0x7a0 + -0x1dd4 * -0x1)];
        return h;
    }, UpdateCampaignService = async ({
        campaignData: f,
        medias: g,
        campaignId: h,
        tenantId: i
    }) => {
        const L = H, M = H, j = {
                'zKbUq': L(0x1f1) + M(0x1f7) + 'D',
                'hYzOW': function (p, q) {
                    return p - q;
                },
                'WcCdD': M(0x1c9) + M(0x1ad) + L(0x1e5) + M(0x1b6) + M(0x1f8),
                'CMrRJ': function (p, q) {
                    return p === q;
                },
                'bsCvc': M(0x1a5),
                'Lmlmf': M(0x1e6),
                'zUvZR': function (p, q) {
                    return p === q;
                },
                'WNSIC': M(0x1c5),
                'JBdIc': function (p, q) {
                    return p !== q;
                },
                'zkgbf': M(0x1eb),
                'JCWen': M(0x1dd),
                'ODoYz': M(0x1e3),
                'QoSuV': function (p, q) {
                    return p(q);
                },
                'IDMdh': L(0x1d6),
                'xtxqU': function (p, q) {
                    return p !== q;
                },
                'UTlfI': L(0x1f6),
                'JBVFQ': L(0x1ba),
                'qIkke': function (p, q) {
                    return p !== q;
                },
                'CEEEk': L(0x1e1),
                'fjTwF': L(0x1c8),
                'OKSda': L(0x1dc),
                'vdZue': L(0x1bc),
                'blpbM': L(0x1be)
            };
        let k, l = {
                ...f,
                'mediaUrl': j[M(0x1cc)](cArquivoName, f[M(0x1b0)]),
                'start': f[L(0x1c3)]
            };
        const m = {};
        m['id'] = h, m[M(0x1fd)] = i;
        const n = {};
        n[M(0x1e2)] = m;
        const o = await Campaign_1[M(0x1df)][L(0x1fe)](n);
        if (j[L(0x1b1)](o?.[M(0x1b5)], j[M(0x1ab)]) && j[M(0x1a6)](o?.[L(0x1b5)], j[M(0x1f2)])) {
            if (j[M(0x1a6)](j[L(0x1c1)], j[L(0x1c1)])) {
                const q = { ...f };
                q[L(0x1b0)] = '', q[L(0x1ea)] = '', q = q;
            } else
                throw new AppError_1[(M(0x1df))](j[L(0x1c6)], -0x31b + 0x2 * -0x4ec + 0x1 * 0xe87);
        }
        if (g && Array[M(0x1d5)](g) && g[M(0x1b9)]) {
            if (j[L(0x1b3)](j[L(0x1ec)], j[L(0x1ec)]))
                throw new n[(M(0x1df))](j[M(0x1e7)], -0x8fa + -0x1c18 + 0x26a6);
            else
                await Promise[M(0x1f3)](g[L(0x1da)](async r => {
                    const N = L, O = M, s = {};
                    s[N(0x1db)] = j[O(0x1c6)];
                    const t = s;
                    if (j[O(0x1f0)](j[N(0x1a9)], j[O(0x1ff)]))
                        s[O(0x1cf)][O(0x1d8)](f);
                    else
                        try {
                            if (j[N(0x1d2)](j[N(0x1ed)], j[N(0x1ed)])) {
                                if (!r[O(0x1d4)]) {
                                    if (j[O(0x1b1)](j[N(0x1ef)], j[O(0x1b8)])) {
                                        const v = r[N(0x1af)][O(0x1f4)]('/')[0x141 * 0x9 + -0x2 * 0xc7a + 0xdac][O(0x1f4)](';')[0x1499 + 0x1 * -0x2ea + -0x9 * 0x1f7];
                                        r[N(0x1d4)] = new Date()[O(0x1fc)]() + '.' + v;
                                    } else
                                        throw new n[(O(0x1df))](t[N(0x1db)], 0x1 * -0x1d56 + 0x103f * -0x1 + 0x2f29);
                                }
                                k = r;
                            } else {
                                if (!s)
                                    return '';
                                const y = f[N(0x1f4)]('/'), z = y[j[N(0x1b4)](y[O(0x1b9)], -0x29 * 0x18 + -0x1306 + 0x16df)];
                                return z;
                            }
                        } catch (y) {
                            if (j[O(0x1d2)](j[N(0x1c0)], j[O(0x1c0)]))
                                logger_1[O(0x1cf)][O(0x1d8)](y);
                            else {
                                const A = f[O(0x1af)][O(0x1f4)]('/')[0x391 * 0x8 + -0x1cf8 + 0x71][N(0x1f4)](';')[0x1 * -0x1378 + 0x866 + -0x1 * -0xb12];
                                g[O(0x1d4)] = new h()[N(0x1fc)]() + '.' + A;
                            }
                        }
                })), l = {
                    ...f,
                    'mediaUrl': k?.[L(0x1d4)],
                    'mediaType': k?.[M(0x1af)][M(0x1de)](0x16f3 + -0x3a * -0x3a + -0x2417, k[L(0x1af)][M(0x1fb)]('/'))
                };
        } else {
            if (j[L(0x1d2)](f[M(0x1b0)], j[L(0x1ae)])) {
                if (j[L(0x1f0)](j[L(0x1bb)], j[M(0x1bb)])) {
                    const r = { ...f };
                    r[M(0x1b0)] = '', r[M(0x1ea)] = '', l = r;
                } else
                    try {
                        if (!q[L(0x1d4)]) {
                            const t = w[L(0x1af)][L(0x1f4)]('/')[-0x1545 + 0xbf3 + 0x953][L(0x1f4)](';')[0x204 * -0x10 + 0x2392 + -0x1a9 * 0x2];
                            x[M(0x1d4)] = new y()[M(0x1fc)]() + '.' + t;
                        }
                        u = v;
                    } catch (u) {
                        A[M(0x1cf)][M(0x1d8)](u);
                    }
            }
        }
        if (!o) {
            if (j[M(0x1a6)](j[M(0x1a7)], j[L(0x1b2)]))
                throw new AppError_1[(M(0x1df))](j[M(0x1e7)], -0xab * -0xf + 0x50 + -0x8c1);
            else {
                const u = {};
                return u[M(0x1df)] = j, g && h[L(0x1cd)] ? i : u;
            }
        }
        return await o[L(0x1f5)](l), await o[M(0x1cb)](), o;
    };
exports[H(0x1df)] = UpdateCampaignService;