'use strict';
const O = b, P = b;
function a() {
    const T = [
        'type',
        'WABA:\x20favo',
        'ldnKI',
        'error',
        'oldDefault',
        'emit',
        '6NfjmQM',
        'MNCku',
        '8479870vFUrBh',
        'ram',
        'ls/Whatsap',
        's/logger',
        'bPdxC',
        'dlWCJ',
        'KFNyX',
        '63496PZfPRw',
        'waba',
        'uário\x20e\x20se',
        'ser',
        'create',
        'farewellMe',
        'telegram',
        'sjavB',
        'whatsapp',
        'defineProp',
        'value',
        'rmar\x20o\x20Tok',
        'tQzzf',
        'favor\x20info',
        'ssage',
        'WzVUP',
        'ETrTJ',
        '11744530jXCCGf',
        '\x20o\x20Token\x20e',
        'PrByb',
        'liGDZ',
        '310bPGfOW',
        '92015IgFXjy',
        'hkAzY',
        'instagramK',
        'CtHCr',
        'fKdCn',
        'instagramU',
        '8kCTfwF',
        'tokenAPI',
        'LiePe',
        'mcjQJ',
        'PGScV',
        '__importDe',
        'amente.',
        'findOne',
        'default',
        '_WAPP',
        '\x20favor\x20inf',
        '../../libs',
        'name',
        'CPsll',
        '../../mode',
        'WaflL',
        'XhqtD',
        'fbPageId',
        'zhQQI',
        'tokenTeleg',
        '\x20a\x20BSP',
        '__esModule',
        '../../erro',
        'HhSxO',
        '788exJlnM',
        'instagram',
        'ERR_CREATE',
        'rs/AppErro',
        'ormar\x20o\x20Us',
        'fault',
        '3167427AiNTSE',
        '155NRBrpE',
        'ratAr',
        '1668EeAYSq',
        'MnwJD',
        'rWQdE',
        'swFWS',
        '../../util',
        'status',
        'update',
        'rHNKU',
        'dwCaZ',
        'Whatsapp',
        '/socket',
        'Telegram:\x20',
        'erty',
        'fPpSm',
        'r\x20informar',
        'logger',
        'UhLux',
        'pLxfN',
        'where',
        ':whatsapp',
        'getIO',
        'AblUb',
        'DISCONNECT',
        'isDefault',
        '12589767XFIEUJ',
        'en.',
        'tenantId',
        'Instagram:',
        'action',
        'nha\x20corret',
        'wabaBSP'
    ];
    a = function () {
        return T;
    };
    return a();
}
(function (c, d) {
    const M = b, N = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(M(0x1dd)) / (0x2c * -0xb5 + 0x2b * -0x4e + 0x2c37) * (parseInt(M(0x1fc)) / (0x2386 * -0x1 + -0x1 * -0xb4e + -0x7 * -0x376)) + parseInt(N(0x202)) / (-0x1a14 + -0x1a1 * -0xa + 0x9cd) + -parseInt(M(0x1c8)) / (-0x1 * -0x7da + -0x1d2e + -0xaac * -0x2) * (parseInt(N(0x203)) / (0x1890 + -0x210e + 0x883)) + parseInt(M(0x1bf)) / (0x1190 + -0x110d + -0x7d) * (parseInt(N(0x1c1)) / (-0xe51 * 0x1 + -0x1 * -0x26 + -0x2 * -0x719)) + -parseInt(M(0x1e4)) / (0x4 * 0x63f + 0x600 + 0x7bd * -0x4) * (-parseInt(M(0x1b2)) / (-0x1 * -0x2303 + 0xae5 + 0x1 * -0x2ddf)) + -parseInt(N(0x1d9)) / (-0x2364 + 0x523 * 0x1 + -0x1 * -0x1e4b) + parseInt(M(0x1de)) / (-0x166 + 0x8ac + -0x3 * 0x269) * (-parseInt(M(0x205)) / (-0x31 * 0x62 + -0xffa + 0x4 * 0x8b2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x63e6a + -0x10 * -0x81f6 + 0x1bb13 * -0x2));
var __importDefault = this && this[O(0x1e9) + O(0x201)] || function (c) {
    const Q = O;
    return c && c[Q(0x1f9)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xcd4 + 0x43 * 0x7 + 0xca2);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[P(0x1d2)] = !![], Object[O(0x1d1) + P(0x1a6)](exports, P(0x1f9), k);
const AppError_1 = __importDefault(require(P(0x1fa) + P(0x1ff) + 'r')), socket_1 = require(O(0x1ef) + P(0x1a4)), Whatsapp_1 = __importDefault(require(O(0x1f2) + P(0x1c3) + 'p')), logger_1 = require(P(0x209) + O(0x1c4)), CreateWhatsAppService = async ({
        name: j,
        status: status = P(0x1b0) + 'ED',
        tenantId: l,
        tokenTelegram: m,
        instagramUser: n,
        instagramKey: o,
        type: p,
        wabaBSP: q,
        tokenAPI: r,
        fbPageId: s,
        farewellMessage: t,
        isDefault: isDefault = ![]
    }) => {
        const R = P, S = P, u = {};
        u[R(0x1d8)] = R(0x1ba) + S(0x1a8) + S(0x1da) + R(0x1f8), u[R(0x1f4)] = R(0x1a5) + S(0x1d5) + R(0x1d3) + R(0x1b3), u[R(0x1fb)] = R(0x1fe) + R(0x1ed), u[S(0x1dc)] = R(0x1b5) + S(0x1ee) + R(0x200) + S(0x1ca) + R(0x1b7) + R(0x1ea), u[R(0x1e8)] = function (z, A) {
            return z === A;
        }, u[S(0x20d)] = R(0x1c9), u[R(0x1e7)] = function (z, A) {
            return z || A;
        }, u[S(0x1e2)] = R(0x1db), u[R(0x1af)] = S(0x1c6), u[S(0x1f1)] = R(0x1fd), u[R(0x208)] = function (z, A) {
            return z !== A;
        }, u[S(0x207)] = R(0x206), u[R(0x1e1)] = R(0x1bb), u[R(0x20c)] = function (z, A) {
            return z === A;
        }, u[S(0x1e6)] = S(0x1ce), u[S(0x1ab)] = function (z, A) {
            return z === A;
        }, u[S(0x1c5)] = R(0x1c7), u[R(0x1f6)] = S(0x1c0), u[R(0x1d4)] = function (z, A) {
            return z === A;
        }, u[R(0x1a7)] = R(0x1d7), u[R(0x1aa)] = R(0x1df), u[S(0x204)] = S(0x1cf), u[S(0x1f3)] = S(0x20b);
        const v = u;
        if (v[R(0x1e8)](p, v[R(0x20d)]) && v[R(0x1e7)](!r, !q)) {
            if (v[R(0x1e8)](v[R(0x1e2)], v[S(0x1af)]))
                throw new w[(S(0x1ec))](v[R(0x1d8)]);
            else
                throw new AppError_1[(S(0x1ec))](v[R(0x1d8)]);
        }
        if (v[R(0x1e8)](p, v[R(0x1f1)]) && !n) {
            if (v[R(0x208)](v[R(0x207)], v[S(0x1e1)]))
                throw new AppError_1[(R(0x1ec))](v[S(0x1dc)]);
            else
                throw new w[(R(0x1ec))](v[R(0x1f4)]);
        }
        if (v[S(0x20c)](p, v[R(0x1e6)]) && !m) {
            if (v[R(0x1ab)](v[R(0x1c5)], v[R(0x1c5)]))
                throw new AppError_1[(R(0x1ec))](v[S(0x1f4)]);
            else {
                f[S(0x1a9)][S(0x1bc)](g);
                throw new h[(S(0x1ec))](v[R(0x1fb)], 0x1e9b + -0x100b + -0xcfc);
            }
        }
        const w = {};
        w[R(0x1b4)] = l, w[S(0x1b1)] = !![];
        const x = {};
        x[R(0x1ac)] = w;
        const y = await Whatsapp_1[R(0x1ec)][S(0x1eb)](x);
        !y && (v[R(0x20c)](v[S(0x1f6)], v[R(0x1f6)]) ? isDefault = !y : x = !f);
        if (isDefault) {
            if (v[S(0x1d4)](v[S(0x1a7)], v[S(0x1a7)])) {
                if (y) {
                    if (v[R(0x1ab)](v[S(0x1aa)], v[S(0x204)])) {
                        const E = {};
                        return E[S(0x1ec)] = j, g && h[R(0x1f9)] ? i : E;
                    } else {
                        const E = {};
                        E[R(0x1b1)] = ![], await y[R(0x20b)](E);
                    }
                }
            } else
                throw new w[(S(0x1ec))](v[R(0x1dc)]);
        }
        try {
            const G = {};
            G[S(0x1f0)] = j, G[R(0x20a)] = status, G[S(0x1b1)] = isDefault, G[S(0x1b4)] = l, G[S(0x1f7) + S(0x1c2)] = m, G[S(0x1e3) + S(0x1cb)] = n, G[R(0x1e0) + 'ey'] = o, G[S(0x1b9)] = p, G[R(0x1b8)] = q, G[R(0x1e5)] = r, G[R(0x1f5)] = s, G[S(0x1cd) + S(0x1d6)] = t;
            const H = await Whatsapp_1[R(0x1ec)][R(0x1cc)](G), I = (-0x8ed * 0x1 + 0x6cb * 0x2 + -0x4a9, socket_1[S(0x1ae)])(), J = {};
            J[S(0x1b6)] = v[R(0x1f3)], J[R(0x1d0)] = H, I[R(0x1be)](l + S(0x1ad), J);
            const K = {};
            return K[R(0x1d0)] = H, K[S(0x1bd) + S(0x1a3)] = y, K;
        } catch (L) {
            logger_1[S(0x1a9)][R(0x1bc)](L);
            throw new AppError_1[(R(0x1ec))](v[R(0x1fb)], 0x1 * 0xa1b + 0x629 * 0x6 + -0x2d7d * 0x1);
        }
    };
exports[P(0x1ec)] = CreateWhatsAppService;