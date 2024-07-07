'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(A(0x226)) / (-0x7a * -0x10 + -0x58 + -0x747 * 0x1) * (-parseInt(B(0x1e1)) / (-0x1 * 0x1e02 + -0x17a6 + 0x35aa)) + -parseInt(A(0x1fd)) / (-0x2403 + -0x1a2e + 0x3e34) * (parseInt(B(0x1e3)) / (-0xf2f + -0x305 + 0x1238)) + -parseInt(B(0x22e)) / (0x1 * 0x2345 + 0x16 * -0xf6 + -0x3 * 0x4b4) * (-parseInt(B(0x231)) / (-0x7a2 + -0x1ba * -0x7 + -0x51 * 0xe)) + -parseInt(A(0x21a)) / (-0x625 + 0x1363 * 0x2 + -0x209a) * (-parseInt(B(0x1fc)) / (0x17 * -0xf5 + 0x2686 + -0x107b * 0x1)) + parseInt(A(0x1ed)) / (0x397 * 0x1 + 0xa3 * 0x18 + 0x2 * -0x96b) * (-parseInt(B(0x1e5)) / (-0x8b7 + -0x26be + 0x2f7f)) + -parseInt(B(0x1f4)) / (-0x400 * -0x7 + -0x324 + -0x1 * 0x18d1) + parseInt(B(0x20a)) / (-0x73 * -0x25 + -0x8f9 * -0x3 + 0x1 * -0x2b7e);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x20bad + 0x3b7e4 * -0x2 + 0x33 * 0x5ced));
function a() {
    const N = [
        'ccess_toke',
        'ione\x20apena',
        'where',
        'ls/Whatsap',
        'GET',
        'https://gr',
        'enas\x201\x20pág',
        'grant_type',
        '33268CxBmom',
        '../../erro',
        'fbPageId',
        'rs/AppErro',
        'error',
        'defineProp',
        'getIO',
        'tokenAPI',
        '10TPhZyJ',
        'JwejN',
        'emit',
        '2060082KxxLpX',
        'fNVVX',
        'ok.com/',
        'update',
        'ken',
        'fault',
        'ina.\x20Refaç',
        '../../util',
        'accountId',
        'CONNECTED',
        'tNNje',
        'Escolha\x20ap',
        'tenantId',
        's\x201\x20página',
        'so\x20e\x20selec',
        '2iXNGeq',
        'default',
        '4VXeqeT',
        'ge_token&c',
        '6650790Renmfz',
        './SetLogou',
        'whatsapp',
        'v16.0',
        'action',
        '&fb_exchan',
        'length',
        '/accounts?',
        '9kYVyBY',
        'value',
        'ession',
        'ess_token?',
        'PP_ID',
        'access_tok',
        'NexOX',
        '6656342oySVVG',
        'erty',
        'get',
        'logger',
        'tLinkedPag',
        'IiVXJ',
        'limit=25&a',
        'session',
        '402392MbvLMk',
        '1909596hLHtcf',
        'fbObject',
        'a\x20o\x20proces',
        '=fb_exchan',
        '/socket',
        '__importDe',
        'method',
        'status',
        '../../mode',
        '_access_to',
        'QbBKW',
        'url',
        'aph.facebo',
        '20135796hidcAi',
        '&client_se',
        'long_lived',
        'ge_token=',
        'FACEBOOK_A',
        '__esModule',
        '../../libs',
        'GFWuY',
        ':whatsappS',
        '/oauth/acc',
        'PP_SECRET_',
        'env',
        'FoZJo',
        'cret=',
        's/logger',
        'KEY',
        '14tguwys',
        'lient_id=',
        'axios',
        'en='
    ];
    a = function () {
        return N;
    };
    return a();
}
var __importDefault = this && this[C(0x202) + D(0x1d7)] || function (c) {
    const E = D;
    return c && c[E(0x20f)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x10d * 0x13 + -0xee7 + -0x74 * -0x51);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[C(0x1ee)] = !![], Object[C(0x22b) + C(0x1f5)](exports, D(0x20f), k);
const axios_1 = __importDefault(require(D(0x21c))), AppError_1 = __importDefault(require(C(0x227) + D(0x229) + 'r')), Whatsapp_1 = __importDefault(require(D(0x205) + D(0x221) + 'p')), SetLogoutLinkedPage_1 = __importDefault(require(C(0x1e6) + D(0x1f8) + 'e')), socket_1 = require(C(0x210) + C(0x201)), logger_1 = require(D(0x1d9) + D(0x218)), api_version = D(0x1e8), baseUrl = C(0x223) + C(0x209) + D(0x233) + api_version, app_id = process[D(0x215)][C(0x20e) + C(0x1f1)], app_secret = process[C(0x215)][C(0x20e) + D(0x214) + C(0x219)], getLongLivedAccessToken = async c => {
        const F = D, G = D, {data: d} = await axios_1[F(0x1e2)][G(0x1f6)](baseUrl + (F(0x213) + F(0x1f0) + G(0x225) + G(0x200) + G(0x1e4) + F(0x21b)) + app_id + (G(0x20b) + F(0x217)) + app_secret + (F(0x1ea) + G(0x20d)) + c);
        return d[F(0x1f2) + 'en'];
    }, getPermanentPageAccessToken = async (c, d) => {
        const H = C, I = C, {
                data: {data: e}
            } = await axios_1[H(0x1e2)][I(0x1f6)](baseUrl + '/' + d + (H(0x1ec) + I(0x1f2) + I(0x21d)) + c);
        return e[H(0x1eb)] && e[0x4 * -0x355 + -0x2 * 0xd8b + -0x2e3 * -0xe];
    }, getPageInfo = async (e, f) => {
        const J = D, K = C, g = {};
        g[J(0x1f9)] = J(0x222);
        const h = g, i = baseUrl + '/' + e + (K(0x1ec) + K(0x1fa) + J(0x21e) + 'n=') + f, j = {};
        j[K(0x203)] = h[K(0x1f9)], j[K(0x208)] = i;
        const {
            data: {data: l}
        } = await (0x2256 + -0x805 * -0x3 + -0x1377 * 0x3, axios_1[K(0x1e2)])(j);
        return l;
    }, GetTokenAndLinkedPage = async ({
        whatsapp: i,
        accountId: j,
        userToken: l,
        tenantId: m
    }) => {
        const L = D, M = C, n = {
                'QbBKW': function (o, p, q) {
                    return o(p, q);
                },
                'JwejN': function (o, p) {
                    return o > p;
                },
                'FoZJo': L(0x1dd) + M(0x224) + L(0x1d8) + M(0x1ff) + L(0x1e0) + M(0x21f) + M(0x1df) + '.',
                'NexOX': function (o, p) {
                    return o === p;
                },
                'fNVVX': function (o, p) {
                    return o(p);
                },
                'tNNje': M(0x1db),
                'GFWuY': M(0x234)
            };
        try {
            const o = (-0x1e21 + 0x554 + 0x18cd, socket_1[L(0x22c)])(), p = await n[M(0x207)](getPageInfo, j, l);
            if (n[M(0x22f)](p[M(0x1eb)], 0x21 * -0x49 + 0x26b4 + -0x1d4a))
                throw new AppError_1[(M(0x1e2))](n[L(0x216)], 0xfa5 * 0x1 + 0x126 + -0xf3b);
            if (n[L(0x1f3)](p[L(0x1eb)], -0x1 * -0x17e1 + -0x2cc * 0x5 + -0x95 * 0x11)) {
                const y = {};
                y[L(0x1e7)] = i, y[M(0x1de)] = m, await (-0x1 * 0x230e + -0xaa + 0x23b8, SetLogoutLinkedPage_1[M(0x1e2)])(y);
                return;
            }
            const q = await n[L(0x232)](getLongLivedAccessToken, l), r = await n[L(0x207)](getPermanentPageAccessToken, q, j), s = {};
            s[L(0x204)] = n[L(0x1dc)], s[L(0x228)] = r['id'], s[M(0x1fe)] = { ...r }, s[L(0x22d)] = r[L(0x1f2) + 'en'], s[M(0x1fe)][M(0x1da)] = j, s[M(0x1fe)][M(0x20c) + M(0x206) + M(0x1d6)] = q;
            const t = s, u = {};
            u['id'] = i['id'], u[M(0x1de)] = m;
            const v = {};
            v[M(0x220)] = u, Whatsapp_1[L(0x1e2)][M(0x234)](t, v);
            const w = {
                    ...i,
                    ...t
                }, x = {};
            x[M(0x1e9)] = n[L(0x211)], x[L(0x1fb)] = w, o[L(0x230)](m + (M(0x212) + L(0x1ef)), x);
        } catch (z) {
            logger_1[L(0x1f7)][M(0x22a)](z);
            throw new AppError_1[(L(0x1e2))](z, 0x1e17 + -0x1 * 0x8bf + 0x1 * -0x13c8);
        }
    };
exports[C(0x1e2)] = GetTokenAndLinkedPage;