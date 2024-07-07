'use strict';
const G = b, H = b;
(function (c, d) {
    const E = b, F = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(E(0x19b)) / (0x11fd + 0x33 * 0x81 + -0x2baf) * (parseInt(E(0x1a2)) / (-0x1 * -0x8c6 + 0x266 * 0xf + -0x2cbe)) + -parseInt(E(0x1d5)) / (-0xfca + 0x2 * -0xc6b + 0x67 * 0x65) + -parseInt(E(0x1b8)) / (-0xb36 + 0xa * 0x2af + -0xf9c) + parseInt(E(0x1c4)) / (-0x2 * -0x4b + -0x3a3 + -0x6 * -0x83) + -parseInt(F(0x197)) / (-0x3 * 0x23d + 0x780 + -0xc3) * (parseInt(E(0x1c1)) / (-0x2602 * 0x1 + -0x169a * 0x1 + 0x3ca3)) + parseInt(F(0x1a1)) / (-0x932 + -0x3 * 0x9d3 + 0x26b3) + parseInt(F(0x19c)) / (0x7b2 + -0x1 * -0x311 + 0x1 * -0xaba);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1a0ab * 0x6 + 0x131d54 + -0x14f6f * -0x2));
var __importDefault = this && this[G(0x1ab) + H(0x1aa)] || function (c) {
    const I = G;
    return c && c[I(0x1bb)] ? c : { 'default': c };
};
const D = {};
D[G(0x1c2)] = !![], Object[H(0x1ba) + G(0x1c6)](exports, H(0x1bb), D);
const AppError_1 = __importDefault(require(H(0x1d4) + H(0x1cd) + 'r')), Campaign_1 = __importDefault(require(H(0x1d3) + G(0x1a9) + 'n')), logger_1 = require(G(0x19a) + G(0x1b1)), cArquivoName = d => {
        const J = H, K = H, e = {};
        e[J(0x1d8)] = function (i, j) {
            return i - j;
        };
        const f = e;
        if (!d)
            return '';
        const g = d[J(0x19f)]('/'), h = g[f[J(0x1d8)](g[J(0x1d9)], -0x1 * -0x431 + -0x302 + -0x12e)];
        return h;
    }, UpdateCampaignService = async ({
        campaignData: f,
        medias: g,
        campaignId: h,
        tenantId: i
    }) => {
        const L = H, M = H, j = {
                'ZVkck': L(0x1c0) + M(0x1d2) + 'D',
                'uJmLK': function (p, q) {
                    return p(q);
                },
                'islhd': function (p, q) {
                    return p !== q;
                },
                'iHsld': M(0x1a6),
                'AzTwj': function (p, q) {
                    return p !== q;
                },
                'NbRLh': M(0x1a5),
                'YaUDY': function (p, q) {
                    return p === q;
                },
                'MTNHW': M(0x1cf),
                'ZzVey': M(0x1bc),
                'eBhMo': L(0x1b3) + M(0x1b9) + L(0x1cb) + L(0x199) + L(0x1b7),
                'phach': L(0x1b0)
            };
        let k, l = {
                ...f,
                'mediaUrl': j[M(0x1c7)](cArquivoName, f[M(0x1bd)]),
                'start': f[M(0x1bf)]
            };
        const m = {};
        m['id'] = h, m[L(0x1b5)] = i;
        const n = {};
        n[L(0x1d0)] = m;
        const o = await Campaign_1[L(0x1ae)][M(0x1d7)](n);
        if (j[M(0x1ac)](o?.[L(0x1c5)], j[L(0x1cc)]) && j[L(0x1af)](o?.[L(0x1c5)], j[M(0x1b6)])) {
            if (j[M(0x1d6)](j[M(0x1c8)], j[M(0x198)]))
                throw new n[(M(0x1ae))](j[M(0x1ca)], -0x493 * -0x4 + 0x7 * 0x1f5 + -0x1e6b);
            else
                throw new AppError_1[(M(0x1ae))](j[M(0x1a3)], -0x10ea + 0x149 * -0x11 + 0x2857);
        }
        if (g && Array[M(0x1ad)](g) && g[L(0x1d9)])
            await Promise[M(0x1ce)](g[L(0x1a8)](async q => {
                const N = M, O = L;
                try {
                    if (!q[N(0x1b4)]) {
                        const r = q[N(0x19e)][O(0x19f)]('/')[-0x250 * -0x4 + -0x126c + 0x92d][O(0x19f)](';')[-0xc25 * 0x1 + 0x1869 + -0x1 * 0xc44];
                        q[O(0x1b4)] = new Date()[N(0x1a7)]() + '.' + r;
                    }
                    k = q;
                } catch (s) {
                    logger_1[N(0x1be)][N(0x19d)](s);
                }
            })), l = {
                ...f,
                'mediaUrl': k?.[L(0x1b4)],
                'mediaType': k?.[M(0x19e)][M(0x1d1)](0x1 * -0x2335 + 0xa * 0x3df + -0xd * 0x45, k[L(0x19e)][L(0x1c3)]('/'))
            };
        else {
            if (j[L(0x1d6)](f[M(0x1bd)], j[L(0x1a4)])) {
                const q = { ...f };
                q[M(0x1bd)] = '', q[M(0x1c9)] = '', l = q;
            }
        }
        if (!o)
            throw new AppError_1[(M(0x1ae))](j[L(0x1ca)], -0x108 + 0x64 * -0x5 + 0x10 * 0x49);
        return await o[L(0x1a0)](l), await o[M(0x1b2)](), o;
    };
exports[G(0x1ae)] = UpdateCampaignService;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x26e * 0xf + 0x2d9 * 0xb + 0x1 * 0x6b6);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const P = [
        'defineProp',
        '__esModule',
        'ynMmP',
        'mediaUrl',
        'logger',
        'start',
        'ERR_NO_CAM',
        '229950kJaJHO',
        'value',
        'indexOf',
        '5820830fuHBgb',
        'status',
        'erty',
        'uJmLK',
        'MTNHW',
        'mediaType',
        'ZVkck',
        'GN_NOT_IN_',
        'iHsld',
        'rs/AppErro',
        'all',
        'EJWeh',
        'where',
        'substr',
        'PAIGN_FOUN',
        '../../mode',
        '../../erro',
        '3379908EvXtXY',
        'YaUDY',
        'findOne',
        'OjhPf',
        'length',
        '78walHHY',
        'ZzVey',
        'CANCELED_P',
        '../../util',
        '1OiURgR',
        '8339967HGmfoU',
        'error',
        'mimetype',
        'split',
        'update',
        '12081200qVEzLS',
        '1986004vgxPFt',
        'eBhMo',
        'phach',
        'canceled',
        'pending',
        'getTime',
        'map',
        'ls/Campaig',
        'fault',
        '__importDe',
        'islhd',
        'isArray',
        'default',
        'AzTwj',
        'null',
        's/logger',
        'reload',
        'ERR_NO_UPD',
        'filename',
        'tenantId',
        'NbRLh',
        'ENDING',
        '1079436akoOtb',
        'ATE_CAMPAI'
    ];
    a = function () {
        return P;
    };
    return a();
}