'use strict';
function a() {
    const P = [
        'PJWsF',
        'fbmQT',
        'start',
        '3536635GALJKy',
        'cpgpi',
        'mimetype',
        '271479wAQnuo',
        '14ByOuUQ',
        'hlUWh',
        'where',
        'CBaie',
        'CuPXI',
        'update',
        '../../util',
        '__importDe',
        '4GYjLlw',
        'error',
        '7073930emCmSX',
        'lyavq',
        'canceled',
        'LIaCw',
        'Erazy',
        '9irZfHf',
        'findOne',
        'substr',
        'fault',
        'reload',
        'erty',
        'ERR_NO_CAM',
        '../../erro',
        's/logger',
        'pending',
        'defineProp',
        '../../mode',
        'status',
        'logger',
        'isArray',
        'filename',
        'indexOf',
        'PAIGN_FOUN',
        'getTime',
        'split',
        'SlBdo',
        'value',
        'hPdAD',
        'ENDING',
        'default',
        'rs/AppErro',
        'mediaType',
        'length',
        'CANCELED_P',
        'GN_NOT_IN_',
        'tenantId',
        '705221kSpxcJ',
        'map',
        '2092956mGAkkj',
        'QqeSm',
        'iTEMW',
        '__esModule',
        '1150467rvmoPP',
        'kdGdz',
        '892792aAkYXp',
        'all',
        'null',
        '2sFegrv',
        'ATE_CAMPAI',
        'mediaUrl',
        'ERR_NO_UPD',
        'ls/Campaig'
    ];
    a = function () {
        return P;
    };
    return a();
}
const G = b, H = b;
(function (c, d) {
    const E = b, F = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(E(0x18d)) / (-0x4 * -0x1f6 + 0xe72 + -0x5 * 0x475) * (-parseInt(E(0x1c7)) / (-0x6e1 + -0x17 * -0x70 + -0x32d)) + -parseInt(E(0x1c2)) / (-0xe5 * -0xd + 0x1914 + -0x3d * 0x9a) + parseInt(F(0x196)) / (0x64d * 0x1 + 0x2604 * 0x1 + -0xb * 0x407) * (-parseInt(E(0x18a)) / (-0x2486 + -0x14bb + 0x3946)) + parseInt(F(0x1be)) / (0x1 * -0x9d0 + -0x2100 + 0x156b * 0x2) + -parseInt(E(0x18e)) / (0xdd1 + -0xe6d + 0xa3) * (-parseInt(E(0x1c4)) / (-0x3 * 0x62f + 0x1d1 * -0x13 + 0x2 * 0x1a8c)) + parseInt(E(0x19d)) / (-0x3c0 + 0x43c * 0x5 + -0x1163) * (parseInt(F(0x198)) / (-0x2164 + -0x979 + 0x7 * 0x621)) + -parseInt(E(0x1bc)) / (0x2 * 0xf7c + 0x1ec3 + -0x3db0);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3e * 0x22d + 0x50b9e + 0x783d));
var __importDefault = this && this[G(0x195) + H(0x1a0)] || function (c) {
    const I = H;
    return c && c[I(0x1c1)] ? c : { 'default': c };
};
const D = {};
D[G(0x1b2)] = !![], Object[H(0x1a7) + H(0x1a2)](exports, H(0x1c1), D);
const AppError_1 = __importDefault(require(G(0x1a4) + G(0x1b6) + 'r')), Campaign_1 = __importDefault(require(G(0x1a8) + H(0x186) + 'n')), logger_1 = require(G(0x194) + G(0x1a5)), cArquivoName = d => {
        const J = H, K = H, e = {};
        e[J(0x187)] = function (i, j) {
            return i - j;
        };
        const f = e;
        if (!d)
            return '';
        const g = d[K(0x1b0)]('/'), h = g[f[J(0x187)](g[J(0x1b8)], 0x1a9b * 0x1 + 0x49 * -0x55 + -0x25d)];
        return h;
    }, UpdateCampaignService = async ({
        campaignData: f,
        medias: g,
        campaignId: h,
        tenantId: i
    }) => {
        const L = H, M = G, j = {
                'SlBdo': function (p, q) {
                    return p !== q;
                },
                'Erazy': L(0x1b3),
                'LIaCw': function (p, q) {
                    return p - q;
                },
                'lyavq': function (p, q) {
                    return p(q);
                },
                'CuPXI': M(0x1a6),
                'iTEMW': L(0x19a),
                'QqeSm': L(0x1ca) + M(0x1c8) + L(0x1ba) + M(0x1b9) + L(0x1b4),
                'CBaie': function (p, q) {
                    return p === q;
                },
                'hlUWh': M(0x18b),
                'kdGdz': M(0x1c6),
                'fbmQT': M(0x1a3) + M(0x1ae) + 'D'
            };
        let k, l = {
                ...f,
                'mediaUrl': j[M(0x199)](cArquivoName, f[M(0x1c9)]),
                'start': f[L(0x189)]
            };
        const m = {};
        m['id'] = h, m[M(0x1bb)] = i;
        const n = {};
        n[L(0x190)] = m;
        const o = await Campaign_1[M(0x1b5)][L(0x19e)](n);
        if (j[M(0x1b1)](o?.[M(0x1a9)], j[L(0x192)]) && j[L(0x1b1)](o?.[M(0x1a9)], j[L(0x1c0)]))
            throw new AppError_1[(L(0x1b5))](j[L(0x1bf)], -0x3 * -0x9e5 + -0x2b * -0x59 + -0x2 * 0x1587);
        if (g && Array[L(0x1ab)](g) && g[M(0x1b8)]) {
            if (j[L(0x191)](j[L(0x18f)], j[M(0x18f)]))
                await Promise[L(0x1c5)](g[M(0x1bd)](async p => {
                    const N = M, O = L;
                    try {
                        if (!p[N(0x1ac)]) {
                            const q = p[N(0x18c)][N(0x1b0)]('/')[0x265c + -0x1dfb + 0x4 * -0x218][O(0x1b0)](';')[0x159e * -0x1 + 0x1a6a + -0x4 * 0x133];
                            p[O(0x1ac)] = new Date()[O(0x1af)]() + '.' + q;
                        }
                        k = p;
                    } catch (r) {
                        if (j[N(0x1b1)](j[O(0x19c)], j[N(0x19c)]))
                            try {
                                if (!q[O(0x1ac)]) {
                                    const t = w[O(0x18c)][O(0x1b0)]('/')[0x2ed * -0x3 + -0xc3 * -0x1b + -0xbc9][N(0x1b0)](';')[0x204 + 0x1 * 0x4f7 + -0x6fb];
                                    x[N(0x1ac)] = new y()[O(0x1af)]() + '.' + t;
                                }
                                u = v;
                            } catch (u) {
                                A[O(0x1aa)][O(0x197)](u);
                            }
                        else
                            logger_1[O(0x1aa)][N(0x197)](r);
                    }
                })), l = {
                    ...f,
                    'mediaUrl': k?.[M(0x1ac)],
                    'mediaType': k?.[M(0x18c)][M(0x19f)](-0x8d8 + -0x2038 + -0x90 * -0x49, k[M(0x18c)][L(0x1ad)]('/'))
                };
            else {
                if (!e)
                    return '';
                const q = f[L(0x1b0)]('/'), r = q[j[M(0x19b)](q[M(0x1b8)], -0x84e * -0x4 + -0x1cba + -0x47d)];
                return r;
            }
        } else {
            if (j[L(0x191)](f[M(0x1c9)], j[M(0x1c3)])) {
                const q = { ...f };
                q[M(0x1c9)] = '', q[M(0x1b7)] = '', l = q;
            }
        }
        if (!o)
            throw new AppError_1[(M(0x1b5))](j[M(0x188)], -0x19f * -0xe + -0x1f57 + 0xa39 * 0x1);
        return await o[M(0x193)](l), await o[L(0x1a1)](), o;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1f4 + -0x2e9 + 0x27b);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[G(0x1b5)] = UpdateCampaignService;