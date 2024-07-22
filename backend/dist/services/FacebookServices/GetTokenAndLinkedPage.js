'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(A(0x1cc)) / (-0x2f * 0x47 + -0x4ff * 0x4 + 0x2106) * (parseInt(B(0x1e5)) / (0x943 * -0x2 + 0x5c3 + 0x1d3 * 0x7)) + parseInt(A(0x1b4)) / (0x386 + 0x12 * 0x179 + -0x1e05) + -parseInt(A(0x1cf)) / (0xb * 0x2b + 0x225d + 0x52 * -0x71) * (-parseInt(B(0x1b7)) / (0x40 * -0x55 + -0x16c + 0x16b1)) + parseInt(A(0x1a8)) / (-0xe39 + 0x1 * 0x7b7 + -0x4c * -0x16) * (parseInt(B(0x1de)) / (0x1 * 0x2433 + 0xf * 0x287 + -0x4a15)) + parseInt(A(0x1f3)) / (-0x178e + -0x200c + 0x37a2) + -parseInt(B(0x1c4)) / (-0x6 * 0x2b7 + -0x19f2 + -0x2a45 * -0x1) + -parseInt(A(0x1aa)) / (0xd * -0x192 + -0x13e7 + 0x285b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xf8 * 0xd50 + 0x1a8c * -0xc1 + 0x13a38 * 0x27));
var __importDefault = this && this[C(0x1bb) + C(0x1b0)] || function (c) {
    const E = D;
    return c && c[E(0x199)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x14e7 + 0xd0 * -0x11 + 0x70 * 0x53);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[C(0x1c8)] = !![], Object[D(0x1dd) + C(0x1c9)](exports, D(0x199), k);
function a() {
    const N = [
        'limit=25&a',
        ':whatsappS',
        'GET',
        'tokenAPI',
        'logger',
        '10993832KrQeGo',
        'fbObject',
        's\x201\x20página',
        '__esModule',
        'DBWtJ',
        'whatsapp',
        'accountId',
        'fbPageId',
        'ge_token&c',
        'HYzDW',
        'ession',
        '&fb_exchan',
        'ina.\x20Refaç',
        'PP_ID',
        'v16.0',
        'enas\x201\x20pág',
        'method',
        '/accounts?',
        '48RbyjWk',
        'ccess_toke',
        '37063330AUiqxx',
        'tVflZ',
        'default',
        'en=',
        '/oauth/acc',
        './SetLogou',
        'fault',
        'so\x20e\x20selec',
        'get',
        'STlSM',
        '5186307FLCZPs',
        'status',
        'Escolha\x20ap',
        '20285OvkRUC',
        'action',
        'emit',
        'ls/Whatsap',
        '__importDe',
        'OGhkl',
        's/logger',
        'rs/AppErro',
        'getIO',
        'wdnmI',
        'axios',
        'where',
        'a\x20o\x20proces',
        '2742453SELPbA',
        'CONNECTED',
        '&client_se',
        'lient_id=',
        'value',
        'erty',
        '../../libs',
        'KEY',
        '257eBISOq',
        'FACEBOOK_A',
        'KiCnr',
        '892vkyICw',
        'length',
        'access_tok',
        'ess_token?',
        'tLinkedPag',
        'grant_type',
        'session',
        'ione\x20apena',
        '/socket',
        'long_lived',
        'PP_SECRET_',
        'tenantId',
        'env',
        'ge_token=',
        'defineProp',
        '1119559dEFeIi',
        'url',
        'error',
        'ken',
        'ok.com/',
        '_access_to',
        'update',
        '2302lciwmo',
        '=fb_exchan',
        'https://gr',
        'ZLhjz',
        'aph.facebo',
        'cret=',
        '../../util',
        '../../mode',
        '../../erro'
    ];
    a = function () {
        return N;
    };
    return a();
}
const axios_1 = __importDefault(require(C(0x1c1))), AppError_1 = __importDefault(require(C(0x1ed) + C(0x1be) + 'r')), Whatsapp_1 = __importDefault(require(C(0x1ec) + C(0x1ba) + 'p')), SetLogoutLinkedPage_1 = __importDefault(require(D(0x1af) + D(0x1d3) + 'e')), socket_1 = require(C(0x1ca) + D(0x1d7)), logger_1 = require(C(0x1eb) + C(0x1bd)), api_version = C(0x1a4), baseUrl = C(0x1e7) + D(0x1e9) + D(0x1e2) + api_version, app_id = process[D(0x1db)][C(0x1cd) + C(0x1a3)], app_secret = process[C(0x1db)][D(0x1cd) + C(0x1d9) + C(0x1cb)], getLongLivedAccessToken = async c => {
        const F = C, G = D, {data: d} = await axios_1[F(0x1ac)][G(0x1b2)](baseUrl + (G(0x1ae) + G(0x1d2) + F(0x1d4) + G(0x1e6) + G(0x19e) + F(0x1c7)) + app_id + (G(0x1c6) + F(0x1ea)) + app_secret + (G(0x1a1) + G(0x1dc)) + c);
        return d[G(0x1d1) + 'en'];
    }, getPermanentPageAccessToken = async (c, d) => {
        const H = D, I = D, {
                data: {data: e}
            } = await axios_1[H(0x1ac)][H(0x1b2)](baseUrl + '/' + d + (I(0x1a7) + H(0x1d1) + H(0x1ad)) + c);
        return e[H(0x1d0)] && e[0x1f3f + -0x8a * 0x9 + -0x1a65];
    }, getPageInfo = async (e, f) => {
        const J = C, K = C, g = {};
        g[J(0x1ab)] = J(0x1f0);
        const h = g, i = baseUrl + '/' + e + (K(0x1a7) + J(0x1ee) + J(0x1a9) + 'n=') + f, j = {};
        j[K(0x1a6)] = h[K(0x1ab)], j[J(0x1df)] = i;
        const {
            data: {data: l}
        } = await (0x1e4a + -0x1 * -0x3c8 + -0x2 * 0x1109, axios_1[K(0x1ac)])(j);
        return l;
    }, GetTokenAndLinkedPage = async ({
        whatsapp: i,
        accountId: j,
        userToken: l,
        tenantId: m
    }) => {
        const L = D, M = C, n = {
                'KiCnr': function (o, p, q) {
                    return o(p, q);
                },
                'DBWtJ': function (o, p) {
                    return o > p;
                },
                'wdnmI': L(0x1b6) + M(0x1a5) + L(0x1a2) + M(0x1c3) + L(0x1b1) + M(0x1d6) + L(0x1f5) + '.',
                'STlSM': function (o, p) {
                    return o === p;
                },
                'OGhkl': function (o, p) {
                    return o(p);
                },
                'ZLhjz': M(0x1c5),
                'HYzDW': L(0x1e4)
            };
        try {
            const o = (-0x1e1 * 0xb + -0x1847 * -0x1 + -0x39c, socket_1[L(0x1bf)])(), p = await n[M(0x1ce)](getPageInfo, j, l);
            if (n[L(0x19a)](p[M(0x1d0)], -0xcb6 * 0x1 + -0x1dd8 + -0x5 * -0x883))
                throw new AppError_1[(L(0x1ac))](n[M(0x1c0)], -0x19f3 + -0xd4d + -0x4 * -0xa34);
            if (n[L(0x1b3)](p[L(0x1d0)], 0x1 * 0x24dc + -0x1 * 0x9e3 + -0x5 * 0x565)) {
                const y = {};
                y[M(0x19b)] = i, y[M(0x1da)] = m, await (-0x72b * 0x1 + 0x1090 + -0x965, SetLogoutLinkedPage_1[M(0x1ac)])(y);
                return;
            }
            const q = await n[L(0x1bc)](getLongLivedAccessToken, l), r = await n[M(0x1ce)](getPermanentPageAccessToken, q, j), s = {};
            s[L(0x1b5)] = n[L(0x1e8)], s[M(0x19d)] = r['id'], s[M(0x1f4)] = { ...r }, s[M(0x1f1)] = r[M(0x1d1) + 'en'], s[M(0x1f4)][L(0x19c)] = j, s[M(0x1f4)][M(0x1d8) + L(0x1e3) + L(0x1e1)] = q;
            const t = s, u = {};
            u['id'] = i['id'], u[M(0x1da)] = m;
            const v = {};
            v[M(0x1c2)] = u, Whatsapp_1[M(0x1ac)][L(0x1e4)](t, v);
            const w = {
                    ...i,
                    ...t
                }, x = {};
            x[L(0x1b8)] = n[L(0x19f)], x[L(0x1d5)] = w, o[L(0x1b9)](m + (M(0x1ef) + M(0x1a0)), x);
        } catch (z) {
            logger_1[L(0x1f2)][M(0x1e0)](z);
            throw new AppError_1[(L(0x1ac))](z, 0x1eb5 * 0x1 + 0x3 * -0xb0b + 0x44 * 0xf);
        }
    };
exports[D(0x1ac)] = GetTokenAndLinkedPage;