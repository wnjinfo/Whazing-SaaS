'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(B(0x17d)) / (-0x2 * -0x107 + 0x8c6 + 0x11 * -0xa3) + -parseInt(C(0x10e)) / (-0x1a90 + 0x1 * 0x24f2 + -0xa60) + parseInt(B(0xa5)) / (-0x1 * 0x23f2 + -0x1 * 0x869 + 0x2c5e) * (-parseInt(C(0x178)) / (-0x839 + -0x1999 + 0x21d6)) + parseInt(C(0x161)) / (-0x16a * 0x13 + -0x1 * 0xc5e + -0x1 * -0x2741) * (parseInt(C(0xe8)) / (-0x1 * -0x16c3 + -0x40f * -0x1 + -0x23 * 0xc4)) + parseInt(C(0x99)) / (-0x5a5 + -0xf8c + 0x2a7 * 0x8) * (parseInt(C(0x16c)) / (0x708 + -0x1ccf + 0x15cf * 0x1)) + parseInt(B(0x159)) / (0x1 * -0x2063 + 0x24b5 + -0x449 * 0x1) + parseInt(B(0xfd)) / (-0x4c7 * -0x2 + 0x77b * 0x3 + 0x38d * -0x9);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2cd4 + -0x28c * 0x7c + 0x2b4bf));
var __importDefault = this && this[D(0xe5) + E(0x163)] || function (c) {
    const F = E;
    return c && c[F(0x177)] ? c : { 'default': c };
};
const z = {};
z[E(0x119)] = !![], Object[E(0x147) + E(0x13b)](exports, E(0x177), z), exports[E(0x14b) + E(0x180) + 'n'] = exports[D(0x83) + D(0x136)] = exports[D(0x175)] = exports[D(0x169) + D(0x8d)] = void (-0x14 * 0x1e1 + 0x7 * 0x355 + 0xe41);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x4f * 0x70 + -0x1dac + 0x3 * -0x176);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sdk_typescript_apis_efi_1 = __importDefault(require(E(0x12d) + E(0x96) + E(0x14e))), path_1 = __importDefault(require(E(0x10d))), CheckSettingsGeneral_1 = __importDefault(require(E(0x155) + D(0x16a) + E(0x13a) + D(0xa2))), logger_1 = require(D(0x116) + E(0x184)), Invoices_1 = __importDefault(require(D(0x17b) + D(0x14f) + 's')), Tenant_1 = __importDefault(require(E(0x17b) + D(0x101))), AppError_1 = __importDefault(require(D(0xcf) + D(0x188) + 'r')), PaymentGatewayServices_1 = require(D(0x172) + D(0x94) + E(0x138)), webhookUrl = process[D(0x165)][E(0x12f) + 'L'] + (D(0x164) + D(0xf1) + E(0xda));
async function getEfiOptions() {
    const G = D, H = D, d = {};
    d[G(0x8b)] = G(0x128) + 'e', d[H(0x95)] = H(0x113) + 'd', d[H(0x123)] = H(0xa3) + H(0x11d);
    const e = d, f = path_1[G(0x89)][G(0xb6)](__dirname, G(0xe0) + H(0x145) + await (0x133 * -0x1d + -0x1d11 + 0x3fd8, CheckSettingsGeneral_1[H(0x89)])(e[H(0x8b)]));
    return {
        'sandbox': !![],
        'client_id': await (-0x26 * -0x16 + 0x2121 + -0x2465, CheckSettingsGeneral_1[H(0x89)])(e[H(0x95)]),
        'client_secret': await (0x1 * -0x936 + -0x7 * -0x364 + 0x2 * -0x743, CheckSettingsGeneral_1[H(0x89)])(e[G(0x123)]),
        'pix_cert': f,
        'validateMtls': ![]
    };
}
const newEfiPayInstance = async () => {
        const I = E, J = E, c = {
                'GWGjG': function (e) {
                    return e();
                }
            }, d = await c[I(0x158)](getEfiOptions);
        return new sdk_typescript_apis_efi_1[(I(0x89))](d);
    }, createWebHook = async e => {
        const K = D, L = D, f = {};
        f[K(0x102)] = function (k, l) {
            return k === l;
        }, f[K(0x125)] = L(0x9a), f[L(0xa9)] = K(0x168);
        const g = f, h = { 'chave': await (-0x1114 + 0x1bfc + -0xae8, CheckSettingsGeneral_1[K(0x89)])(g[K(0xa9)]) }, i = {};
        i[L(0xbb)] = webhookUrl;
        const j = i;
        return e[L(0x186) + L(0xf5)](h, j)[K(0xf7)](k => {
            const M = L, N = K;
            logger_1[M(0x82)][M(0x118)](N(0x186) + N(0xc0));
        }, k => {
            const O = L, P = L;
            g[O(0x102)](g[P(0x125)], g[P(0x125)]) ? logger_1[O(0x82)][P(0x9f)](O(0x186) + O(0x174) + O(0x8f) + k) : f[O(0x82)][P(0x9f)](P(0x169) + O(0xd7) + P(0x182) + O(0x162) + O(0x13f) + g[O(0x16f)](h));
        });
    }, efiInitialize = async () => {
        const Q = E, R = E, c = {
                'gKiMm': function (e, f) {
                    return e !== f;
                },
                'sRvpV': function (e, f) {
                    return e(f);
                },
                'BCiSS': Q(0x175) + R(0x14c) + Q(0x167) + R(0xd1) + R(0xb9),
                'JFChY': function (e, f) {
                    return e !== f;
                },
                'Oiavc': Q(0xa8),
                'tUKcb': Q(0xe4),
                'HWyOB': function (e, f) {
                    return e === f;
                },
                'TlRZL': R(0x93) + Q(0xde) + 'do',
                'PMMHm': function (e, f) {
                    return e === f;
                },
                'FfFdi': R(0xf0),
                'jgqUQ': Q(0x18b),
                'FYvZr': function (e, f) {
                    return e(f);
                },
                'HLIfA': Q(0x15a),
                'LWvKB': Q(0x10c),
                'jFLXQ': R(0x175) + R(0xd4) + R(0x13c) + R(0xc2) + R(0x187),
                'JrZQi': R(0xfc) + R(0x11f),
                'LWMBo': R(0x11a),
                'RUkdb': Q(0x14e),
                'nGEUF': function (e) {
                    return e();
                },
                'TuVab': R(0x168),
                'AqqQT': R(0xc6),
                'tZJYO': Q(0x105)
            }, d = await (0x135 * 0x6 + 0x117 * 0xe + -0x1680, CheckSettingsGeneral_1[R(0x89)])(c[R(0x13e)]);
        if (!webhookUrl[Q(0x18c)](c[Q(0x91)])) {
            logger_1[Q(0x82)][Q(0xf6)](R(0x169) + R(0xeb) + Q(0x11b) + R(0x117) + R(0x135));
            return;
        }
        ;
        try {
            if (c[Q(0xcb)](d, c[R(0x130)])) {
                const e = await c[R(0xf2)](getEfiOptions), f = new sdk_typescript_apis_efi_1[(Q(0x89))](e), g = { 'chave': await (0x377 + -0x26 * 0xdc + -0x3 * -0x9bb, CheckSettingsGeneral_1[R(0x89)])(c[Q(0xd9)]) };
                f[Q(0x121) + Q(0xf5)](g)[R(0xf7)](h => {
                    const S = Q, T = R;
                    c[S(0xbe)](h?.[T(0xbb)], webhookUrl) ? c[S(0x179)](createWebHook, f) : logger_1[T(0x82)][T(0xf6)](T(0x169) + S(0xdc) + T(0x17e) + T(0xb3) + T(0x115));
                }, h => {
                    const U = Q, V = Q, i = {};
                    i[U(0x134)] = c[U(0x11e)];
                    const j = i;
                    if (c[U(0xdd)](c[V(0x143)], c[V(0x8e)])) {
                        logger_1[U(0x82)][V(0x9f)](U(0x121) + V(0x174) + U(0x8f) + JSON[U(0x16f)](h));
                        if (c[U(0xdf)](h?.[V(0x9d)], c[U(0x148)]))
                            c[U(0xcb)](c[U(0x114)], c[U(0x129)]) ? e[V(0x82)][U(0x9f)](U(0x83) + U(0x9b) + ':\x20' + f) : c[U(0xf8)](createWebHook, f);
                        else {
                            if (c[V(0xbe)](c[U(0x127)], c[V(0x160)]))
                                logger_1[U(0x82)][V(0x9f)](V(0x169) + U(0xd7) + U(0x182) + U(0x162) + U(0x13f) + JSON[V(0x16f)](h));
                            else
                                return d[U(0x82)][V(0xf6)](j[U(0x134)]), !![];
                        }
                    } else
                        return e[V(0x82)][U(0xf6)](U(0x10f) + V(0xd8) + V(0x142) + V(0x140) + f[U(0xb2)]), ![];
                });
            }
        } catch (h) {
            if (c[R(0xdf)](c[R(0xe7)], c[Q(0x15e)]))
                return d[R(0x82)][Q(0xf6)](c[Q(0x98)]), !![];
            else
                logger_1[Q(0x82)][Q(0x9f)](Q(0x169) + R(0xe3) + Q(0x18d) + h);
        }
    };
exports[E(0x169) + D(0x8d)] = efiInitialize;
const efiWebhook = async (e, f) => {
    const W = E, X = D, g = {
            'PIiNA': function (j, k) {
                return j(k);
            },
            'vZqNy': function (j, k) {
                return j === k;
            },
            'qQoar': W(0x10b),
            'eQQzd': X(0xa4),
            'aqHPW': X(0x185),
            'qxyPU': W(0xfb),
            'YDgaq': X(0x175) + X(0x14c) + X(0x167) + W(0xd1) + W(0xb9),
            'EsFrY': function (j, k) {
                return j < k;
            },
            'apOop': X(0x175) + X(0xd4) + W(0x13c) + W(0xc2) + X(0x187),
            'RCPBH': X(0x175) + W(0x14c) + X(0x110) + X(0x149),
            'Tauna': function (j, k, l) {
                return j(k, l);
            },
            'OnNty': X(0xaa) + X(0x86),
            'MZZHt': function (j, k) {
                return j !== k;
            },
            'sPTHt': W(0xf9),
            'JHhHs': W(0xea)
        }, {evento: h} = e[W(0xd0)];
    if (g[X(0xd3)](h, g[X(0xf3)])) {
        const j = {};
        return j['ok'] = !![], f[X(0xec)](j);
    }
    e[W(0xd0)][X(0x150)] && (g[W(0x183)](g[W(0x137)], g[W(0x189)]) ? e[X(0xd0)][X(0x150)][W(0x87)](async k => {
        const Z = X, a0 = W, l = {
                'Gvbgg': function (m, n) {
                    const Y = b;
                    return g[Y(0xd2)](m, n);
                }
            };
        if (g[Z(0xd3)](g[Z(0x16d)], g[Z(0x152)]))
            l[Z(0x85)](e, f);
        else {
            logger_1[Z(0x82)][Z(0xf6)](a0(0x156) + Z(0x171) + Z(0x151) + JSON[a0(0x16f)](k));
            const n = {};
            n[a0(0x139)] = k[Z(0xe6)], n[a0(0xb2)] = g[a0(0xef)];
            const o = {};
            o[a0(0xa1)] = Tenant_1[Z(0x89)], o['as'] = g[a0(0xcd)];
            const p = {};
            p[Z(0xae)] = n, p[Z(0x124)] = [o];
            const q = await Invoices_1[a0(0x89)][a0(0x17a)](p);
            if (!q)
                return logger_1[a0(0x82)][a0(0xf6)](g[Z(0xc3)]), !![];
            if (g[Z(0x126)](k[a0(0x17f)], q[a0(0x119)]))
                return logger_1[a0(0x82)][a0(0xf6)](g[Z(0xb8)]), !![];
            return await (-0x1831 + 0x1df1 + -0x5c0, PaymentGatewayServices_1[a0(0xbc) + a0(0xce)])(q), logger_1[a0(0x82)][Z(0xf6)](g[Z(0xc8)]), !![];
        }
    }) : g[W(0xb7)](f, g, h));
    const i = {};
    return i['ok'] = !![], f[W(0xec)](i);
};
function a() {
    const ab = [
        'FfFdi',
        'ado',
        '../../util',
        'ks\x20are\x20sup',
        'info',
        'value',
        'https://',
        'SSL\x20webhoo',
        'TObyI',
        'ecret',
        'BCiSS',
        'eway',
        'NqOzo',
        'pixDetailW',
        'zLamv',
        'IyhHP',
        'include',
        'yYtiw',
        'EsFrY',
        'HLIfA',
        'efiCertFil',
        'jgqUQ',
        'ckStatus:\x20',
        'WCXXT',
        'QBOqS',
        'sdk-typesc',
        'NxaHo',
        'BACKEND_UR',
        'RUkdb',
        'ce\x20',
        'ola',
        '\x20for\x20invoi',
        'ApKfL',
        'ported',
        'atus',
        'sPTHt',
        'ices',
        'txId',
        'ettingsGen',
        'erty',
        '\x20value\x20les',
        'pixCreateI',
        'JrZQi',
        'bhook:\x20',
        'luded:\x20',
        'ts\x20reached',
        's\x20not\x20conc',
        'Oiavc',
        'reload',
        'rivate/',
        'KHDxJ',
        'defineProp',
        'TlRZL',
        'paid',
        'IUeOV',
        'efiCreateS',
        ':\x20Invoice\x20',
        'replace',
        'efi',
        'ls/Invoice',
        'pix',
        'or\x20pix:\x20',
        'eQQzd',
        't\x20found',
        'qrcode',
        '../../help',
        'Processing',
        'ncontrado,',
        'GWGjG',
        '1108989ijRRrH',
        'JlDSc',
        'orzSR',
        'Problema\x20e',
        'YEbqM',
        'tZJYO',
        '\x20entre\x20em\x20',
        'LWvKB',
        '592060chrOTb',
        'current\x20we',
        'fault',
        '/subscript',
        'env',
        '#Fatura:',
        'not\x20found\x20',
        'efiPixKey',
        'efiInitial',
        'ers/CheckS',
        'pt-br',
        '8376gtttlm',
        'qQoar',
        'pixDetailC',
        'stringify',
        'QCQqq',
        '\x20payment\x20f',
        './PaymentG',
        'ZTtiK',
        'ebhook\x20err',
        'efiWebhook',
        'TxsMt',
        '__esModule',
        '45244NKinuv',
        'sRvpV',
        'findOne',
        '../../mode',
        'ZILcn',
        '83041PYMLcM',
        'ok\x20correto',
        'valor',
        'ubscriptio',
        'UdTrX',
        'to\x20verify\x20',
        'MZZHt',
        's/logger',
        'open',
        'pixConfigW',
        'oice\x20value',
        'rs/AppErro',
        'JHhHs',
        'ring',
        'DIjqf',
        'startsWith',
        'error:\x20',
        'wSBVW',
        'logger',
        'efiCheckSt',
        'contato\x20co',
        'Gvbgg',
        'ook',
        'forEach',
        'EfYcd',
        'default',
        'uZocA',
        'dgrBO',
        'zWFtI',
        'ize',
        'tUKcb',
        'or:\x20',
        'oiceExpire',
        'LWMBo',
        'PAKEA',
        'webhook_na',
        'atewayServ',
        'CdgOy',
        'ript-apis-',
        'harge',
        'jFLXQ',
        '105wIiNjy',
        'bOWez',
        'atus\x20error',
        'ckykt',
        'nome',
        'm\x20o\x20suport',
        'error',
        'fUexG',
        'model',
        'eral',
        'efiClientS',
        'pKQVt',
        '3IfYcnW',
        'LslCC',
        'pDEkR',
        'UDkmQ',
        'dSyJl',
        'teste_webh',
        'Max\x20attemp',
        'AYqRo',
        'aRDvs',
        'where',
        'XiITE',
        'efiPollChe',
        'n\x20error:\x20',
        'status',
        '\x20já\x20instal',
        'original',
        'emrSc',
        'join',
        'Tauna',
        'apOop',
        '\x20paid',
        'KINXA',
        'webhookUrl',
        'processInv',
        'pixCopiaEC',
        'gKiMm',
        'expiracao',
        'ebhook\x20ok',
        'CONCLUIDA',
        's\x20than\x20inv',
        'YDgaq',
        'findByPk',
        '\x20as\x20paid',
        'dmjKu',
        'hOreb',
        'RCPBH',
        'szQYG',
        'WkgoP',
        'PMMHm',
        'thbZZ',
        'qxyPU',
        'oicePaid',
        '../../erro',
        'body',
        'or\x20already',
        'PIiNA',
        'vZqNy',
        ':\x20Received',
        'minimumFra',
        'fNMfi',
        'ize:\x20fail\x20',
        'n\x20status\x20i',
        'TuVab',
        'g/webhook/',
        'fqHqQ',
        'ize:\x20webho',
        'JFChY',
        'o_encontra',
        'HWyOB',
        '../../../p',
        'REZwC',
        'update',
        'ize\x20catch\x20',
        'cAxye',
        '__importDe',
        'txid',
        'AqqQT',
        '6EtsMFM',
        'azofu',
        'sbAFJ',
        'ize:\x20only\x20',
        'json',
        'ATIVA',
        'atus:\x20Invo',
        'aqHPW',
        'Yapag',
        'ion/whazin',
        'nGEUF',
        'OnNty',
        'Invoice\x20no',
        'ebhook',
        'debug',
        'then',
        'FYvZr',
        'Yohwx',
        'KVFTU',
        'tenant',
        'paymentGat',
        '1291420YEnAWk',
        'MeXGX',
        'ice\x20marked',
        'XIlrb',
        'ls/Tenant',
        'kHgGX',
        'PXhJZ',
        'mmediateCh',
        'RlsQh',
        'eWdbv',
        'VseOO',
        'TqXih',
        'toLocaleSt',
        'oAodh',
        'CLBkx',
        'WEWQB',
        'path',
        '368314TwuHeO',
        'Transactio',
        'marked\x20as\x20',
        'ctionDigit',
        'arge',
        'efiClientI'
    ];
    a = function () {
        return ab;
    };
    return a();
}
exports[E(0x175)] = efiWebhook;
const efiCheckStatus = async (d, e = null) => {
    const a1 = D, a2 = D, f = {
            'TObyI': function (g, h) {
                return g === h;
            },
            'WkgoP': a1(0xe9),
            'orzSR': function (g) {
                return g();
            },
            'aRDvs': function (g, h) {
                return g === h;
            },
            'uZocA': a1(0xed),
            'wSBVW': function (g, h) {
                return g !== h;
            },
            'REZwC': a1(0xc1),
            'XIlrb': function (g, h) {
                return g >= h;
            },
            'KINXA': function (g, h) {
                return g === h;
            },
            'pDEkR': a1(0x122),
            'emrSc': a2(0x88),
            'KVFTU': a1(0x83) + a1(0xee) + a1(0xff) + a1(0xc5),
            'zWFtI': a1(0xaf)
        };
    try {
        if (!e) {
            if (f[a2(0x11c)](f[a2(0xca)], f[a1(0xca)]))
                e = await f[a2(0x15b)](newEfiPayInstance);
            else {
                g[a2(0x82)][a1(0xf6)](a1(0xb0) + a1(0x12a) + a1(0xab) + a1(0x141) + a2(0x133) + a2(0x131) + h['id']), (-0x1186 + 0xa8b * -0x1 + 0x1c11, i[a1(0xbc) + a2(0x90) + 'd'])(j);
                return;
            }
        }
        const g = {};
        g[a1(0xe6)] = d[a1(0x139)];
        const h = await e[a2(0x16e) + a1(0x97)](g);
        if (f[a2(0xad)](h[a1(0xb2)], f[a1(0x8a)]) || f[a1(0x18e)](h[a2(0xb2)], f[a1(0xe1)]))
            return logger_1[a1(0x82)][a2(0xf6)](a1(0x10f) + a1(0xd8) + a2(0x142) + a1(0x140) + h[a2(0xb2)]), ![];
        const {pix: i} = h;
        if (f[a2(0x100)](i[-0x2 * 0xeb + -0x1 * 0x25df + -0x217 * -0x13][a1(0x17f)], d[a2(0x119)])) {
            if (f[a1(0xba)](f[a1(0xa7)], f[a2(0xb5)]))
                d[a2(0x82)][a2(0x118)](a1(0x186) + a2(0xc0));
            else
                return await (0x1 * -0x18fd + 0x1a79 + -0x5f * 0x4, PaymentGatewayServices_1[a2(0xbc) + a2(0xce)])(d), logger_1[a2(0x82)][a2(0xf6)](f[a1(0xfa)]), !![];
        }
        return ![];
    } catch (l) {
        if (f[a1(0x18e)](f[a1(0x8c)], f[a2(0x8c)]))
            return;
        else
            logger_1[a1(0x82)][a1(0x9f)](a1(0x83) + a1(0x9b) + ':\x20' + l);
    }
    return ![];
};
exports[E(0x83) + E(0x136)] = efiCheckStatus;
const efiPollCheckStatus = async (c, d, e = 0x1a2b + -0x181a + -0xad * 0x3, f = -0x2 * 0x560b + 0x31 * 0x337 + 0x1d * 0x48b) => {
        const a3 = E, a4 = E, g = {
                'PXhJZ': function (j, k, l) {
                    return j(k, l);
                },
                'ZTtiK': function (j, k) {
                    return j === k;
                },
                'NqOzo': a3(0x149),
                'WCXXT': a4(0x12c),
                'thbZZ': a4(0x181),
                'fqHqQ': function (j, k) {
                    return j >= k;
                },
                'NxaHo': function (j) {
                    return j();
                }
            };
        let h = -0x39 * -0x16 + -0xeaa + -0x4 * -0x271;
        async function i() {
            const a6 = a3, a7 = a3, j = {
                    'AYqRo': function (l, m, n) {
                        const a5 = b;
                        return g[a5(0x103)](l, m, n);
                    }
                };
            await d[a6(0x144)]();
            if (g[a6(0x173)](d[a7(0xb2)], g[a6(0x120)]))
                return;
            const k = await (0x7f * -0x7 + 0x15f2 + 0x1279 * -0x1, exports[a6(0x83) + a7(0x136)])(d, c);
            if (k) {
                if (g[a6(0x173)](g[a6(0x12b)], g[a7(0xcc)]))
                    d[a7(0x82)][a7(0xf6)](a7(0x169) + a7(0xdc) + a6(0x17e) + a7(0xb3) + a6(0x115));
                else
                    return;
            }
            h += 0x3 * -0xb1c + -0x69a + 0x1 * 0x27ef;
            if (g[a6(0xdb)](h, e)) {
                logger_1[a6(0x82)][a6(0xf6)](a7(0xb0) + a6(0x12a) + a7(0xab) + a7(0x141) + a7(0x133) + a7(0x131) + d['id']), (-0x1667 + -0x1172 + 0x1 * 0x27d9, PaymentGatewayServices_1[a7(0xbc) + a6(0x90) + 'd'])(d);
                return;
            }
            await new Promise(m => {
                const a8 = a6;
                j[a8(0xac)](setTimeout, m, f);
            }), await g[a6(0x12e)](i);
        }
        return g[a3(0x12e)](i);
    }, efiCreateSubscription = async (h, i) => {
        const a9 = D, aa = D, j = {
                'KHDxJ': a9(0x15c) + a9(0x157) + aa(0x15f) + a9(0x84) + aa(0x9e) + 'e!',
                'MeXGX': aa(0x16b),
                'fNMfi': a9(0x168),
                'YEbqM': function (q) {
                    return q();
                },
                'TqXih': function (q, r) {
                    return q === r;
                },
                'VseOO': aa(0x10a),
                'eWdbv': function (q, r) {
                    return q !== r;
                },
                'TxsMt': a9(0xc7),
                'fUexG': aa(0xf4) + a9(0x153),
                'QCQqq': aa(0x14e),
                'PAKEA': function (q, r, s) {
                    return q(r, s);
                },
                'ckykt': function (q, r) {
                    return q !== r;
                },
                'ZILcn': aa(0xc9),
                'LslCC': a9(0x14a)
            }, {
                price: k,
                invoiceId: l
            } = h[a9(0xd0)], m = {};
        m[a9(0xbf)] = 0x12c;
        const n = {};
        n[aa(0xd5) + aa(0x111) + 's'] = 0x2;
        const o = {
                'calendario': m,
                'valor': { 'original': k[aa(0x109) + aa(0x18a)](j[aa(0xfe)], n)[aa(0x14d)](',', '.') },
                'chave': await (-0x5 * 0x269 + 0x1f8c + 0x7 * -0x2c9, CheckSettingsGeneral_1[a9(0x89)])(j[a9(0xd6)]),
                'solicitacaoPagador': a9(0x166) + l
            }, p = await j[a9(0x15d)](getEfiOptions);
        try {
            if (j[aa(0x108)](j[a9(0x107)], j[aa(0x107)])) {
                const q = await Invoices_1[a9(0x89)][aa(0xc4)](l);
                if (!q) {
                    if (j[a9(0x106)](j[a9(0x176)], j[aa(0x176)]))
                        return;
                    else
                        throw new Error(j[aa(0xa0)]);
                }
                await (0x772 * 0x5 + 0xe3 * -0x1f + -0x9bd, exports[a9(0x169) + aa(0x8d)])();
                const r = new sdk_typescript_apis_efi_1[(a9(0x89))](p), s = await r[a9(0x13d) + a9(0x104) + aa(0x112)]([], o);
                await q[a9(0xe2)]({
                    'txId': s[a9(0xe6)],
                    'payGw': j[aa(0x170)],
                    'payGwData': JSON[aa(0x16f)](s)
                }), await q[aa(0x144)](), j[a9(0x92)](efiPollCheckStatus, r, q);
                const t = {};
                t[a9(0x154)] = s[aa(0xbd) + a9(0x132)];
                const u = {};
                u[aa(0xb4)] = k;
                const v = {};
                return v[a9(0x154)] = t, v[a9(0x17f)] = u, i[aa(0xec)](v);
            } else
                e[a9(0x82)][aa(0x9f)](a9(0x186) + a9(0x174) + aa(0x8f) + f);
        } catch (y) {
            if (j[a9(0x9c)](j[a9(0x17c)], j[a9(0xa6)])) {
                logger_1[aa(0x82)][aa(0x9f)](aa(0x14b) + aa(0x180) + aa(0xb1) + y);
                throw new AppError_1[(aa(0x89))](j[a9(0x146)], -0x1 * -0x2f3 + -0x1932 + 0x17cf * 0x1);
            } else {
                f[a9(0x82)][aa(0x9f)](a9(0x14b) + aa(0x180) + aa(0xb1) + g);
                throw new h[(a9(0x89))](j[a9(0x146)], 0x1 * 0x3e5 + -0xe46 + 0xbf1);
            }
        }
    };
exports[D(0x14b) + D(0x180) + 'n'] = efiCreateSubscription;