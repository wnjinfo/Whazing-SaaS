'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x176 * 0x1a + 0x8 * 0x1c0 + 0x1985 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(A(0x1db)) / (-0x1 * -0x1de3 + 0x142f + -0x7 * 0x727) * (-parseInt(B(0x1d6)) / (-0x1f7 * 0x11 + 0x1 * 0xb1d + 0x593 * 0x4)) + -parseInt(A(0x1a8)) / (0x1cda + -0x3ec * 0x7 + 0x163 * -0x1) + parseInt(B(0x19e)) / (0x16ba + -0x4 * -0x769 + -0x345a) + parseInt(A(0x1dd)) / (-0x91 * -0x17 + -0x2 * -0x47e + -0x15fe) * (-parseInt(A(0x1ac)) / (0x77b + -0x3a * 0x36 + -0x4c7 * -0x1)) + parseInt(A(0x1ca)) / (-0x14a0 + 0x1 * -0x2272 + 0x43d * 0xd) * (-parseInt(B(0x199)) / (-0x12e * -0x4 + -0x2215 + 0x1d65)) + -parseInt(B(0x1bb)) / (0x2475 + 0x4e7 * -0x4 + 0x4 * -0x434) * (parseInt(A(0x1c7)) / (0x4be + -0x435 + -0x7f)) + parseInt(A(0x1aa)) / (-0x28 * -0xb + 0xf8a + -0x1137) * (parseInt(B(0x1e0)) / (0x1 * 0x14c2 + 0x16a2 + -0x2b58));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x10a054 + -0x3b * 0x39ec + 0x681ae));
var __importDefault = this && this[C(0x1b9) + C(0x18d)] || function (c) {
    const E = C;
    return c && c[E(0x18c)] ? c : { 'default': c };
};
function a() {
    const N = [
        'logger',
        'PP_ID',
        'default',
        'XgchP',
        'get',
        '3110jJSrmC',
        '/oauth/acc',
        'ken',
        '15421YuZrEo',
        'a\x20o\x20proces',
        'en=',
        'access_tok',
        'enas\x201\x20pág',
        'CONNECTED',
        'ge_token&c',
        'ccess_toke',
        'rrylh',
        'lient_id=',
        'long_lived',
        '../../libs',
        '26vPbMbE',
        'update',
        'error',
        '_access_to',
        'qNNiz',
        '92358mspSIe',
        'GET',
        '5gxWOvx',
        'so\x20e\x20selec',
        'fbObject',
        '12TzrkBc',
        '../../erro',
        '=fb_exchan',
        'limit=25&a',
        'where',
        'ina.\x20Refaç',
        'ession',
        'fbPageId',
        'axios',
        'KEY',
        'tLinkedPag',
        '__esModule',
        'fault',
        'status',
        'https://gr',
        'length',
        '../../util',
        'FACEBOOK_A',
        'action',
        '/accounts?',
        's\x201\x20página',
        'accountId',
        '/socket',
        'defineProp',
        '488MaqOIU',
        '&fb_exchan',
        'tenantId',
        'getIO',
        's/logger',
        '3685268OhbaAj',
        'value',
        'method',
        'rtEqE',
        'rs/AppErro',
        'v16.0',
        '&client_se',
        'ok.com/',
        'yuwQw',
        'Escolha\x20ap',
        '99234MoBGzd',
        'ess_token?',
        '1147938ouClBb',
        'ranWH',
        '4790910xnGPNq',
        'aph.facebo',
        'grant_type',
        'erty',
        'jHAoo',
        ':whatsappS',
        'url',
        'ls/Whatsap',
        'whatsapp',
        'session',
        'cret=',
        '../../mode',
        'ZMkwU',
        '__importDe',
        'ione\x20apena',
        '17919izYacU',
        'ge_token=',
        'PP_SECRET_',
        'tokenAPI',
        'emit',
        'env',
        './SetLogou'
    ];
    a = function () {
        return N;
    };
    return a();
}
const k = {};
k[C(0x19f)] = !![], Object[D(0x198) + D(0x1af)](exports, D(0x18c), k);
const axios_1 = __importDefault(require(C(0x189))), AppError_1 = __importDefault(require(D(0x1e1) + C(0x1a2) + 'r')), Whatsapp_1 = __importDefault(require(C(0x1b7) + D(0x1b3) + 'p')), SetLogoutLinkedPage_1 = __importDefault(require(C(0x1c1) + C(0x18b) + 'e')), socket_1 = require(C(0x1d5) + C(0x197)), logger_1 = require(D(0x191) + D(0x19d)), api_version = D(0x1a3), baseUrl = C(0x18f) + D(0x1ad) + D(0x1a5) + api_version, app_id = process[D(0x1c0)][D(0x192) + D(0x1c3)], app_secret = process[D(0x1c0)][D(0x192) + C(0x1bd) + C(0x18a)], getLongLivedAccessToken = async c => {
        const F = C, G = C, {data: d} = await axios_1[F(0x1c4)][F(0x1c6)](baseUrl + (G(0x1c8) + F(0x1a9) + G(0x1ae) + G(0x1e2) + F(0x1d0) + F(0x1d3)) + app_id + (F(0x1a4) + F(0x1b6)) + app_secret + (F(0x19a) + G(0x1bc)) + c);
        return d[F(0x1cd) + 'en'];
    }, getPermanentPageAccessToken = async (c, d) => {
        const H = C, I = D, {
                data: {data: e}
            } = await axios_1[H(0x1c4)][H(0x1c6)](baseUrl + '/' + d + (I(0x194) + H(0x1cd) + H(0x1cc)) + c);
        return e[H(0x190)] && e[0x101 * 0x26 + 0x196b + -0x3f91];
    }, getPageInfo = async (e, f) => {
        const J = D, K = C, g = {};
        g[J(0x1b0)] = K(0x1dc);
        const h = g, i = baseUrl + '/' + e + (J(0x194) + K(0x1e3) + J(0x1d1) + 'n=') + f, j = {};
        j[K(0x1a0)] = h[K(0x1b0)], j[J(0x1b2)] = i;
        const {
            data: {data: l}
        } = await (0x1fb4 + -0x1e63 + -0x151, axios_1[J(0x1c4)])(j);
        return l;
    }, GetTokenAndLinkedPage = async ({
        whatsapp: i,
        accountId: j,
        userToken: l,
        tenantId: m
    }) => {
        const L = D, M = D, n = {
                'rtEqE': function (o, p, q) {
                    return o(p, q);
                },
                'rrylh': function (o, p) {
                    return o > p;
                },
                'XgchP': L(0x1a7) + M(0x1ce) + M(0x1e5) + L(0x1cb) + L(0x1de) + L(0x1ba) + M(0x195) + '.',
                'qNNiz': function (o, p) {
                    return o === p;
                },
                'ZMkwU': function (o, p) {
                    return o(p);
                },
                'yuwQw': M(0x1cf),
                'ranWH': M(0x1d7)
            };
        try {
            const o = (-0x8a * -0x11 + 0x86 * -0x4a + -0x2f5 * -0xa, socket_1[L(0x19c)])(), p = await n[L(0x1a1)](getPageInfo, j, l);
            if (n[M(0x1d2)](p[M(0x190)], 0x1 * -0x20d9 + -0x1ac * 0x13 + 0x409e))
                throw new AppError_1[(M(0x1c4))](n[M(0x1c5)], -0x318 + 0x22 * -0x91 + -0x2 * -0xbf5);
            if (n[L(0x1da)](p[M(0x190)], 0x1ef1 + -0x2205 + -0x2 * -0x18a)) {
                const y = {};
                y[L(0x1b4)] = i, y[L(0x19b)] = m, await (0xb92 + 0x1b * 0xaf + -0x1e07 * 0x1, SetLogoutLinkedPage_1[L(0x1c4)])(y);
                return;
            }
            const q = await n[M(0x1b8)](getLongLivedAccessToken, l), r = await n[M(0x1a1)](getPermanentPageAccessToken, q, j), s = {};
            s[M(0x18e)] = n[M(0x1a6)], s[M(0x1e7)] = r['id'], s[L(0x1df)] = { ...r }, s[L(0x1be)] = r[L(0x1cd) + 'en'], s[L(0x1df)][M(0x196)] = j, s[L(0x1df)][L(0x1d4) + M(0x1d9) + L(0x1c9)] = q;
            const t = s, u = {};
            u['id'] = i['id'], u[M(0x19b)] = m;
            const v = {};
            v[L(0x1e4)] = u, Whatsapp_1[M(0x1c4)][M(0x1d7)](t, v);
            const w = {
                    ...i,
                    ...t
                }, x = {};
            x[L(0x193)] = n[L(0x1ab)], x[M(0x1b5)] = w, o[L(0x1bf)](m + (M(0x1b1) + M(0x1e6)), x);
        } catch (z) {
            logger_1[L(0x1c2)][M(0x1d8)](z);
            throw new AppError_1[(L(0x1c4))](z, 0x957 * -0x1 + -0xe55 + -0x11 * -0x17c);
        }
    };
exports[D(0x1c4)] = GetTokenAndLinkedPage;