'use strict';
const a9 = b, aa = b;
(function (c, d) {
    const a7 = b, a8 = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(a7(0x1fd)) / (0x1 * 0x8cc + 0x2 * 0x7eb + 0x1e5 * -0xd) * (-parseInt(a7(0x2cc)) / (-0x25aa + -0xa * -0x238 + -0x3df * -0x4)) + -parseInt(a7(0x1ba)) / (-0x13da + -0x12a5 + 0x2682) + parseInt(a7(0x204)) / (-0x59 * 0x32 + -0x12d3 * 0x2 + 0x370c) + -parseInt(a7(0x2f2)) / (0x1a45 * 0x1 + 0xf52 + -0x2992) * (parseInt(a7(0x19a)) / (-0xfd2 + -0x9b8 * 0x2 + 0x2348 * 0x1)) + parseInt(a8(0x195)) / (-0x1 * -0x22d8 + 0x4 * -0x77d + -0x4dd) + -parseInt(a8(0x18d)) / (-0x21d0 + 0x14 * -0x72 + -0xe4 * -0x30) * (-parseInt(a8(0x1c6)) / (-0x12b1 + -0x9 * 0x25f + 0x2811)) + parseInt(a8(0x1a9)) / (-0xc + 0x32 * 0x8e + -0x1ba6 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0xc00ec + 0x2800 + 0x156a1e));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xc11 * 0x1 + -0x1fc8 + -0x1 * -0x153d);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[a9(0x1ed) + aa(0x25f)] || function (c) {
    const ab = aa;
    return c && c[ab(0x1a0)] ? c : { 'default': c };
};
const t = {};
t[aa(0x1d3)] = !![], Object[aa(0x23c) + aa(0x2c6)](exports, aa(0x1a0), t);
const sequelize_1 = require(a9(0x19d)), Ticket_1 = __importDefault(require(aa(0x23f) + aa(0x276))), UsersQueues_1 = __importDefault(require(aa(0x23f) + aa(0x1b2) + aa(0x2b1))), AppError_1 = __importDefault(require(aa(0x22d) + aa(0x2cd) + 'r')), Queue_1 = __importDefault(require(a9(0x23f) + aa(0x277))), User_1 = __importDefault(require(aa(0x23f) + a9(0x1f6))), ListSettingsService_1 = __importDefault(require(a9(0x244) + aa(0x231) + a9(0x287) + aa(0x208))), ListTicketsService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1',
        status: l,
        date: m,
        showAll: n,
        userId: o,
        withUnreadMessages: p,
        queuesIds: q,
        isNotAssignedUser: r,
        includeNotQueueDefined: s,
        tenantId: u,
        profile: v
    }) => {
        const ac = aa, ad = a9, w = {
                'nKSks': function (V, W) {
                    return V === W;
                },
                'UYrVR': ac(0x206) + ad(0x2d0) + 'ts',
                'XRUjq': function (V, W) {
                    return V > W;
                },
                'rpjdM': function (V, W) {
                    return V(W);
                },
                'egHmo': ad(0x1f4),
                'vMYin': ad(0x207),
                'rCOYx': ac(0x2b4),
                'OIBxs': function (V, W) {
                    return V === W;
                },
                'RbbJE': ad(0x20f),
                'bUScO': ac(0x29f),
                'DNduf': function (V, W) {
                    return V(W);
                },
                'RXHpi': function (V, W) {
                    return V == W;
                },
                'zHsMi': ac(0x2a0),
                'QrPjL': function (V, W) {
                    return V === W;
                },
                'wBIQr': ac(0x2b9),
                'NYVeS': function (V, W) {
                    return V == W;
                },
                'Soymu': function (V, W) {
                    return V == W;
                },
                'jhMYq': function (V, W) {
                    return V === W;
                },
                'gcefF': ac(0x190),
                'ytfmb': function (V, W) {
                    return V && W;
                },
                'bCmWW': ac(0x1a1) + ad(0x2cf) + 'ED',
                'DuYqV': function (V, W) {
                    return V === W;
                },
                'gQjhH': ad(0x1dc),
                'fAlvq': ad(0x2c7),
                'FIBIb': function (V, W) {
                    return V === W;
                },
                'InkUA': function (V, W) {
                    return V !== W;
                },
                'KSRVA': ac(0x2df),
                'MZpFj': ac(0x272),
                'yxQWW': function (V, W) {
                    return V === W;
                },
                'FIBGi': ad(0x28c),
                'anTkn': function (V, W) {
                    return V * W;
                },
                'zGBtR': function (V, W) {
                    return V - W;
                },
                'lHolP': function (V, W) {
                    return V + W;
                }
            }, x = w[ac(0x203)](n, w[ac(0x227)]) && w[ac(0x26e)](v, w[ac(0x1b6)]), y = p && w[ad(0x2c3)](p, w[ad(0x227)]) ? 'S' : 'N', z = r && w[ad(0x245)](r, w[ad(0x227)]) ? 'S' : 'N', A = x ? 'S' : 'N', B = q ? 'S' : 'N', C = searchParam ? 'S' : 'N', D = await (-0xe1a + -0x3a6 * -0x1 + 0xa74, ListSettingsService_1[ac(0x1c5)])(u), E = w[ad(0x20e)](D?.[ad(0x2f8)](V => {
                const ae = ad, af = ac;
                return w[ae(0x2f0)](V[af(0x261)], w[af(0x1d7)]);
            })?.[ac(0x1d3)], w[ad(0x2a7)]) ? 'S' : 'N';
        if (w[ad(0x2ea)](!l, !x))
            throw new AppError_1[(ac(0x1c5))](w[ad(0x299)], -0x77 * 0xd + -0x1 * 0x2345 + -0x12 * -0x262);
        if (x) {
            if (w[ac(0x2ca)](w[ad(0x251)], w[ad(0x28d)])) {
                const W = O[ad(0x1f8)](X => o(p) == X);
                w[ad(0x2e7)](W, -(0x6d7 + 0x22d * -0xb + -0x3 * -0x5b3)) && o[ac(0x1b1)](w[ac(0x285)](p, q));
            } else
                l = [
                    w[ac(0x28f)],
                    w[ac(0x288)],
                    w[ad(0x1b7)]
                ];
        }
        const F = {};
        F[ac(0x294)] = u;
        const G = {};
        G[ac(0x286)] = F;
        const H = w[ad(0x2e7)](await Queue_1[ad(0x1c5)][ad(0x1fc)](G), 0xe9 + 0x1592 + -0x167b) ? 'S' : 'N', I = await User_1[ad(0x1c5)][ac(0x2f1)](o);
        let J;
        if (w[ac(0x2eb)](I[ac(0x19e)], w[ac(0x1b6)])) {
            const W = {};
            W[ac(0x294)] = u, W[ac(0x263)] = !![];
            const X = {};
            X[ad(0x286)] = W, X[ac(0x22f)] = ['id'], J = await Queue_1[ad(0x1c5)][ac(0x2d2)](X), J = J[ac(0x2bd)](Y => {
                const ag = ad, Z = {};
                return Z[ag(0x278)] = Y['id'], Z;
            });
        } else {
            if (w[ac(0x2e6)](w[ad(0x2c0)], w[ad(0x2d6)])) {
                const Y = {};
                Y[ad(0x250)] = o;
                const Z = {};
                Z[ad(0x286)] = Y, J = await UsersQueues_1[ad(0x1c5)][ad(0x2d2)](Z);
            } else {
                const a1 = {};
                return a1[ad(0x278)] = G['id'], a1;
            }
        }
        let K = J[ad(0x2bd)](a1 => a1[ad(0x278)]);
        K[ac(0x1b1)](-0x20b2 + 0x875 + 0x183d);
        if (q) {
            if (w[ad(0x264)](w[ad(0x1cc)], w[ac(0x1cc)])) {
                const a1 = [];
                q[ad(0x209)](a2 => {
                    const ah = ad, ai = ac, a3 = {};
                    a3[ah(0x1f9)] = w[ai(0x28f)], a3[ai(0x262)] = w[ai(0x288)], a3[ah(0x258)] = w[ah(0x1b7)];
                    const a4 = a3, a5 = K[ai(0x1f8)](a6 => Number(a2) == a6);
                    w[ai(0x2e7)](a5, -(-0x15ba + -0xc * -0x17d + 0x3df)) && (w[ah(0x210)](w[ah(0x2bf)], w[ai(0x202)]) ? G = [
                        a4[ah(0x1f9)],
                        a4[ai(0x262)],
                        a4[ah(0x258)]
                    ] : a1[ah(0x1b1)](w[ai(0x240)](Number, a2)));
                }), K = a1[ad(0x21f)] ? a1 : [-0x1 * 0x10c + 0x1dfe * 0x1 + -0x1cf2];
            } else
                G = [0x133e + 0x220d * 0x1 + 0x7 * -0x79d];
        }
        !K[ac(0x21f)] && (K = [0x166e + 0x1 * -0x1e17 + 0x7a9]);
        let L;
        w[ad(0x245)](v, w[ad(0x1b6)]) ? L = L = ad(0x1df) + ad(0x191) + ad(0x224) + ad(0x1ec) + ad(0x1ea) + ac(0x19f) + ac(0x217) + ad(0x2a3) + ac(0x20c) + ad(0x21b) + ac(0x2b6) + ad(0x1dd) + ad(0x1b0) + ad(0x189) + ad(0x269) + ac(0x2ce) + ad(0x265) + ad(0x192) + ac(0x1e7) + ac(0x297) + ad(0x211) + ad(0x1f2) + ad(0x198) + ad(0x24e) + ac(0x26a) + ac(0x1fa) + ad(0x2bc) + ad(0x1ae) + ad(0x1ce) + ad(0x1b5) + ac(0x1c8) + ac(0x2d4) + ad(0x1a7) + ac(0x28b) + ac(0x260) + ad(0x1f5) + ac(0x1d8) + ac(0x1bc) + ac(0x2a2) + ac(0x219) + ad(0x1c8) + ad(0x26d) + ac(0x2be) + ad(0x20d) + ac(0x1c0) + ac(0x259) + ad(0x1f7) + ac(0x215) + ac(0x233) + ac(0x1d2) + ac(0x229) + ad(0x290) + ad(0x2b3) + ad(0x1cf) + ac(0x197) + ad(0x18a) + ad(0x1e0) + ac(0x2a4) + ad(0x23a) + ad(0x298) + ac(0x2de) + ad(0x2b8) + ad(0x20b) + ad(0x1be) + ad(0x2ab) + ad(0x1db) + ac(0x1ca) + ac(0x186) + ad(0x22c) + ac(0x187) + ac(0x2ec) + ac(0x249) + ac(0x2db) + ac(0x268) + ac(0x274) + ad(0x1f3) + ac(0x254) + ac(0x23b) + ac(0x25a) + ac(0x212) + ac(0x1e4) + ac(0x29c) + ad(0x22b) + ad(0x23d) + ac(0x2cb) + ac(0x223) + ac(0x21c) + ac(0x2c4) + ad(0x27e) + ad(0x2ba) + ad(0x1da) + ad(0x24a) + ac(0x236) + ac(0x27a) + ad(0x2d3) + ac(0x19b) + ad(0x221) + ad(0x1ff) + ad(0x1b8) + ad(0x193) + (ac(0x283) + ad(0x18f) + ac(0x225) + ac(0x1f0) + ac(0x1e2) + ad(0x1e9) + ac(0x1da) + ad(0x2e2) + ac(0x24d) + ad(0x29d) + ac(0x1ef) + ac(0x1bf) + ad(0x230) + ad(0x248) + ad(0x1fb) + ad(0x2ac) + ad(0x199) + ac(0x275) + ad(0x1a4) + ad(0x2ed) + ac(0x25b) + ac(0x25d) + ac(0x1e8) + ac(0x22a) + ad(0x2b2) + ac(0x1ab) + ad(0x296) + ad(0x253) + ad(0x1fe) + ac(0x2d8) + ac(0x1aa) + ac(0x2e5) + ad(0x273) + ac(0x24b) + ad(0x2c2) + ac(0x2ed) + ad(0x25b) + ac(0x2d9) + ac(0x2e3) + ac(0x2b5) + ac(0x281) + ac(0x1bd) + ad(0x241) + ad(0x2f4) + ac(0x214) + ad(0x2e8) + ad(0x1ee) + ad(0x1c7) + ac(0x1c4) + ac(0x238) + ac(0x18e) + ad(0x188)) : L = ac(0x1df) + ad(0x191) + ad(0x224) + ad(0x1ec) + ac(0x1ea) + ad(0x19f) + ad(0x217) + ad(0x2a3) + ad(0x20c) + ac(0x21b) + ad(0x2b6) + ac(0x1dd) + ad(0x1b0) + ac(0x189) + ad(0x269) + ac(0x2ce) + ac(0x265) + ac(0x192) + ad(0x1e7) + ad(0x297) + ad(0x211) + ac(0x1f2) + ad(0x198) + ac(0x24e) + ad(0x26a) + ad(0x1fa) + ad(0x2bc) + ac(0x1ae) + ad(0x1ce) + ac(0x1b5) + ad(0x1c8) + ac(0x2d4) + ac(0x1a7) + ad(0x28b) + ac(0x260) + ad(0x1f5) + ad(0x1d8) + ac(0x1bc) + ac(0x2a2) + ad(0x219) + ad(0x1c8) + ad(0x26d) + ad(0x2be) + ac(0x20d) + ac(0x1c0) + ad(0x259) + ad(0x1f7) + ac(0x215) + ad(0x233) + ad(0x1d2) + ac(0x229) + ac(0x290) + ac(0x2b3) + ac(0x1cf) + ad(0x197) + ad(0x18a) + ac(0x1e0) + ad(0x2a4) + ac(0x23a) + ad(0x298) + ad(0x2de) + ac(0x26f) + ad(0x2c4) + ad(0x27e) + ad(0x247) + ac(0x1b3) + ad(0x1e1) + ad(0x26b) + ad(0x1c9) + ac(0x2f9) + ac(0x21e) + ac(0x26c) + ad(0x2d7) + ac(0x2da) + ac(0x196) + ac(0x2a1) + ad(0x28b) + ad(0x2dc) + ac(0x21d) + ac(0x2f6) + ac(0x1e6) + ad(0x1cd) + ac(0x2e1) + ad(0x201) + ad(0x194) + ad(0x2aa) + ac(0x24f) + ad(0x267) + ac(0x289) + ad(0x2f3) + ac(0x2ef) + ac(0x2a5) + ad(0x20a) + ac(0x1b9) + ac(0x22e) + ad(0x28e) + ac(0x220) + ac(0x1c1) + ad(0x19c) + ad(0x22c) + (ad(0x284) + ac(0x1a2) + ad(0x1af) + ad(0x1a5) + ad(0x27f) + ac(0x1ac) + ad(0x18c) + ad(0x1c2) + ac(0x25e) + ac(0x1a3) + ac(0x23b) + ad(0x2c8) + ad(0x2bb) + ad(0x28a) + ac(0x222) + ac(0x27b) + ad(0x2c5) + ad(0x1b4) + ac(0x216) + ac(0x24c) + ac(0x1eb) + ad(0x29b) + ad(0x1de) + ad(0x1d9) + ac(0x280) + ac(0x2d1) + ad(0x2c9) + ad(0x270) + ad(0x2a9) + ac(0x2ee) + ad(0x205) + ac(0x257) + ad(0x239) + ad(0x1d0) + ac(0x232) + ac(0x226) + ad(0x27c) + ad(0x1ad) + ac(0x243) + ac(0x2a6) + ac(0x271) + ad(0x1e5) + ad(0x266) + ad(0x18b) + ac(0x218) + ac(0x228) + ac(0x293) + ac(0x2e0) + ac(0x2e9) + ad(0x291) + ac(0x2e4) + ad(0x1bb) + ac(0x27c) + ac(0x1ad) + ac(0x2ad) + ac(0x1a8) + ad(0x2f7) + ac(0x1d1) + ac(0x255) + ac(0x1a6) + ac(0x1ff) + ac(0x2b0) + ad(0x2b7) + ad(0x2f5) + ad(0x213) + ac(0x27d) + ac(0x2dd) + ad(0x1e3) + ad(0x2af));
        const M = 0x26c + -0x2 * 0x6d + -0x4 * 0x5d, N = w[ac(0x242)](M, w[ad(0x1cb)](+pageNumber, -0x2 * 0xef5 + -0x1c50 + -0x1 * -0x3a3b)), O = {};
        O[ad(0x294)] = u, O[ad(0x2fa) + 's'] = B, O[ad(0x256)] = l, O[ac(0x2c1)] = A, O[ad(0x25c) + ac(0x23e)] = H, O[ad(0x292) + ad(0x279)] = K, O[ac(0x250)] = o, O[ad(0x237)] = y, O[ac(0x193) + ac(0x282)] = z, O[ad(0x29a) + ac(0x295)] = C, O[ac(0x246) + 'm'] = '%' + searchParam + '%', O[ac(0x29e)] = M, O[ad(0x234)] = N, O[ad(0x2a8) + ad(0x1c3) + ac(0x252)] = E, O[ac(0x19e)] = v;
        const P = {};
        P[ad(0x2ae) + 'ts'] = O, P[ac(0x2d5)] = sequelize_1[ad(0x1d5)][ad(0x1d4)], P[ac(0x235)] = !![];
        const Q = await Ticket_1[ac(0x1c5)][ad(0x19d)]?.[ad(0x1d6)](L, P);
        let R = 0x7d9 + -0x1 * 0x9fb + 0x222, S = 0x123e + 0x982 + -0xc * 0x250;
        Q?.[ad(0x21f)] && (R = Q[-0xea3 + -0x1ac9 * -0x1 + -0x2 * 0x613][ac(0x1fc)], S = Q[ac(0x21f)]);
        const T = w[ac(0x2e7)](R, w[ac(0x21a)](N, S)), U = {};
        return U[ac(0x1f1)] = Q || [], U[ad(0x1fc)] = R, U[ad(0x200)] = T, U;
    };
exports[a9(0x1c5)] = ListTicketsService;
function a() {
    const aj = [
        'closed',
        '\x20like\x20:sea',
        'rname,\x0a\x20\x20\x20',
        'rder\x20by\x20t.',
        '((\x20:isShow',
        'admin',
        't\x20=\x20\x27N\x27)\x20)',
        '\x20in\x20(\x20:sta',
        'atsapps\x22\x20w',
        'map',
        '\x20q\x20on\x20(t.\x22',
        'RbbJE',
        'KSRVA',
        'isShowAll',
        'r(c.\x22name\x22',
        'NYVeS',
        '(:isExists',
        'and\x20t.stat',
        'erty',
        'guMVI',
        '\x20t.status\x20',
        '\x20and\x20(\x20/*e',
        'DuYqV',
        '\x27)\x20OR\x20(t.\x22',
        '45286QnsSiC',
        'rs/AppErro',
        '.id,\x20\x27name',
        'TUS_SELECT',
        'ignedTicke',
        'aram\x20=\x20\x27S\x27',
        'findAll',
        'adMessages',
        'n\x20\x22Contact',
        'type',
        'MZpFj',
        '\x20cw\x20where\x20',
        '\x20\x22Contacts',
        'Param)\x20or\x20',
        'cw.\x22wallet',
        '1\x20from\x20\x22Co',
        'd\x22\x20=\x20t.\x22co',
        'mit\x20offset',
        ')\x0a\x20\x20\x20\x20and\x20',
        'uXWBu',
        '\x20c\x20where\x20c',
        'OR\x20(t.\x22isG',
        '(:isSearch',
        'c.\x22number\x22',
        'and\x20(upper',
        'c.id\x20=\x20t.\x22',
        'InkUA',
        'XRUjq',
        'order\x20by\x20t',
        '.id\x20=\x20t.\x22c',
        'ytfmb',
        'FIBIb',
        'd\x20or\x20exist',
        ')\x20like\x20upp',
        '\x201\x20from\x20\x22M',
        '\x20\x27S\x27\x20\x20and\x20',
        'nKSks',
        'findByPk',
        '5AZClZR',
        'isUnread\x20=',
        'm\x20=\x20\x27N\x27))\x0a',
        '\x22updatedAt',
        ')\x0a\x20\x20\x20\x20)\x20OR',
        'like\x20:sear',
        'find',
        'select\x201\x20f',
        'isQueuesId',
        ')\x0a\x20\x20\x20\x20\x20\x20or',
        '\x22\x20=\x20:userI',
        ';\x0a\x20\x20',
        'build_obje',
        '\x20and\x20coale',
        'am)\x20or\x20(ex',
        'signedTick',
        '7272008ttPgZC',
        't\x20:offset\x20',
        'and\x20t.\x22use',
        'enabled',
        't\x0a\x20\x20\x20\x20coun',
        '\x22\x20,\x20\x27isDel',
        'isNotAssig',
        'ue)\x20OR\x20(:i',
        '1713313UlWeuX',
        'Id\x22\x20=\x20:use',
        'atus\x20)\x0a\x20\x20\x20',
        '\x0a\x20\x20\x20\x20from\x20',
        '\x20=\x20t.id\x0a\x20\x20',
        '7513176tRoDBH',
        '\x22\x20>\x200)\x20OR\x20',
        '\x20=\x20\x27S\x27\x20and',
        'sequelize',
        'profile',
        '\x22profilePi',
        '__esModule',
        'ERR_NO_STA',
        '\x20OR\x20(:isNo',
        'serId\x22\x20=\x20:',
        'per(m.body',
        '=\x20\x27N\x27))\x0a\x20\x20',
        'earchParam',
        's\x22\x20c\x20on\x20(t',
        '.\x22number\x22\x20',
        '1990510GfIZMU',
        '\x22\x20c\x20where\x20',
        '\x20:searchPa',
        'sNotViewAs',
        'r(:searchP',
        '\x20on\x20(w.id\x20',
        'tAssigned\x20',
        '\x20\x20\x20\x20jsonb_',
        'push',
        'ls/UsersQu',
        '\x20\x20\x20\x20\x20or\x20t.',
        'us\x20\x20in\x20(\x20:',
        'appId\x22)\x0a\x20\x20',
        'wBIQr',
        'rCOYx',
        '\x20\x20\x20and\x20((:',
        '\x200)\x20OR\x20(:i',
        '2198442tXSeLR',
        '(c.\x22name\x22)',
        's\x22\x20u\x20on\x20(u',
        '))\x20OR\x20(:is',
        'and\x20\x20(\x0a\x20\x20\x20',
        '\x20\x20\x20\x20\x20selec',
        '\x20q.id)\x0a\x20\x20\x20',
        'otAssigned',
        'ets\x20=\x20\x27S\x27\x20',
        'ssignedTic',
        '\x20\x20limit\x20:l',
        'default',
        '9YkCajh',
        't\x22\x20desc\x0a\x20\x20',
        '\x20\x20left\x20joi',
        'r\x20exists\x20(',
        'nant\x20=\x20\x27S\x27',
        'zGBtR',
        'FIBGi',
        'll\x20=\x20\x27S\x27)\x20',
        '=\x20t.\x22whats',
        's\x20in\x20(\x20:st',
        '=\x20t.id\x0a\x20\x20\x20',
        'chParam)))',
        'c.\x22tenantI',
        'value',
        'SELECT',
        'QueryTypes',
        'query',
        'UYrVR',
        'join\x20\x22User',
        '\x20\x20\x20\x20and\x20((',
        '\x0a\x20\x20\x20\x20and\x20(',
        'stsQueueTe',
        'CBlWj',
        '\x20q.queue,\x0a',
        's\x20=\x20\x27N\x27))\x0a',
        '\x0a\x20\x20\x20\x20selec',
        'sce(t.\x22que',
        '\x22userId\x22\x20=',
        'sNotAssign',
        '\x20:offset\x20;',
        '\x22contactId',
        'char\x20like\x20',
        '\x20(:isShowA',
        'eted\x27\x20,\x20w.',
        '\x20\x20\x20)\x20or\x20*/',
        'ed\x20=\x20\x27N\x27))',
        'nt,\x0a\x20\x20\x20\x20c.',
        'otViewAssi',
        '(\x20)\x20as\x20cou',
        '__importDe',
        '.\x22updatedA',
        'exists\x20(\x0a\x20',
        'll)\x20OR\x20(:i',
        'tickets',
        'p,\x0a\x20\x20\x20\x20t.*',
        're\x20cw.\x22wal',
        'open',
        '\x0a\x20\x20\x20\x20left\x20',
        'ls/User',
        'tenantId\x22\x20',
        'findIndex',
        'OaCcb',
        'r\x20join\x20\x22Wh',
        'm\x20where\x20m.',
        'count',
        '5NOBgMk',
        'ect\x201\x20from',
        '\x20=\x20\x27N\x27))\x0a\x20',
        'hasMore',
        'roup\x22\x20=\x20tr',
        'bUScO',
        'RXHpi',
        '4583912kdTXGF',
        'essages\x22\x20m',
        'NotViewAss',
        'pending',
        'sService',
        'forEach',
        'essages\x22\x20>',
        'All\x20=\x20\x27N\x27\x20',
        '\x0a\x20\x20\x20\x20u.\x22na',
        'queueId\x22\x20=',
        'jhMYq',
        'EOqVo',
        'OIBxs',
        '\x22)\x20whatsap',
        'ctId\x22\x20=\x20t.',
        '\x22\x20desc\x0a\x20\x20\x20',
        '\x20\x20\x20\x20)\x0a\x20\x20\x20\x20',
        '=\x20:tenantI',
        'status\x20)))',
        'cUrl\x22,\x0a\x20\x20\x20',
        'ists\x20(sele',
        'serId\x22)\x0a\x20\x20',
        'lHolP',
        'me\x22\x20as\x20use',
        '\x20true)\x20OR\x20',
        'ntactId\x22)\x20',
        'rom\x20\x22Conta',
        'length',
        'and\x20((:isN',
        '(:isUnread',
        '(t.\x22userId',
        'isGroup\x22\x20=',
        't(*)\x20OVER\x20',
        'rId\x22\x20is\x20nu',
        'er(m.body)',
        'zHsMi',
        'ct\x201\x20from\x20',
        'd\x22\x20=\x20:tena',
        '\x20(t.id::va',
        '\x20OR\x20(:isSh',
        '\x20t.\x22userId',
        '../../erro',
        'sUnread\x20=\x20',
        'attributes',
        't\x201\x20from\x20\x22',
        'Services/L',
        '\x20\x20\x20and\x20upp',
        'd\x0a\x20\x20\x20\x20and\x20',
        'offset',
        'nest',
        'd\x20=\x20\x27S\x27\x20\x20a',
        'isUnread',
        'imit\x20offse',
        'ticketId\x22\x20',
        'in\x20(\x20:queu',
        'userId\x20and',
        'defineProp',
        'owAll\x20=\x20\x27S',
        'eueTenant',
        '../../mode',
        'DNduf',
        'SearchPara',
        'anTkn',
        'aram)\x0a\x20\x20\x20\x20',
        '../Setting',
        'Soymu',
        'searchPara',
        't\x20=\x20\x27S\x27)\x0a\x20',
        'Messages\x22\x20',
        's\x20(select\x20',
        '(\x20:isUnrea',
        '\x20and\x20(uppe',
        ')\x20OR\x20(:isN',
        'Param\x20=\x20\x27S',
        '\x22Tickets\x22\x20',
        'ueTenant\x20=',
        'userId',
        'gQjhH',
        'kets',
        'xists\x20(sel',
        'letId\x22\x20=\x20:',
        ')\x20OR\x20(:isS',
        'status',
        '\x20where\x20m.\x22',
        'VkzpI',
        '\x20where\x20t.\x22',
        '\x20cw.\x22conta',
        'er(:search',
        'isExistsQu',
        'Param)\x0a\x20\x20\x20',
        'and\x20((t.\x22u',
        'fault',
        'd\x22\x20=\x20c.id)',
        'key',
        'MqdrO',
        'isActive',
        'yxQWW',
        '\x27,\x20w.\x22name',
        ':searchPar',
        '\x20\x27N\x27)\x20)\x0a\x20\x20',
        'ntactWalle',
        'ct(\x27id\x27,\x20w',
        't\x0a\x20\x20\x20\x20inne',
        '\x20:userId\x20o',
        'ctWallets\x22',
        'n\x20\x22Queues\x22',
        'QrPjL',
        '(((\x0a\x20\x20\x20\x20\x20\x20',
        'xists\x20(\x0a\x20\x20',
        '(t.id::var',
        'lZuSu',
        'contactId\x22',
        'ts\x22\x20cw\x20whe',
        '\x20\x20\x20\x20and\x20up',
        'ls/Ticket',
        'ls/Queue',
        'queueId',
        'ser',
        'nd\x20t.\x22unre',
        '\x22\x20is\x20null\x20',
        '\x20like\x20uppe',
        '\x20limit\x20:li',
        'QueueTenan',
        '\x20\x20and\x20((:i',
        ':isSearchP',
        'rchParam))',
        'ned',
        'ned\x20=\x20\x27S\x27\x20',
        '\x22\x20is\x20null)',
        'rpjdM',
        'where',
        'istSetting',
        'vMYin',
        '\x20\x20and\x20((\x20:',
        'tus\x20))\x20or\x20',
        '.\x22contactI',
        'xLUuz',
        'fAlvq',
        '\x27N\x27))\x0a\x20\x20\x20\x20',
        'egHmo',
        'ntId\x0a\x20\x20\x20\x20a',
        'ontactId\x22\x20',
        'queuesIdsU',
        '\x22Contacts\x22',
        'tenantId',
        'ram',
        'ram)\x20or\x20(e',
        '\x22isDeleted',
        'esIdsUser\x20',
        'bCmWW',
        'isSearchPa',
        'gnedTicket',
        '\x22)\x20)\x0a\x20\x20\x20\x20)',
        '\x27\x20and\x20(\x20/*',
        'limit',
        'FbNtd',
        'true',
        'rId\x20and\x20cw',
        '.id\x20=\x20t.\x22u',
        '\x20c.\x22name\x22,',
        'ueId\x22,\x200)\x20',
        't.\x22unreadM',
        '\x20\x20)\x20or\x20*/\x20',
        'gcefF',
        'isNotViewA',
        '\x20\x20\x20\x20select',
        'sExistsQue',
        '\x20\x20\x20(:isExi',
        '\x22ticketId\x22',
        'aram)\x20or\x20c',
        'replacemen',
        '\x0a\x20\x20',
        '\x20\x20\x20)\x0a\x20\x20\x20\x20o',
        'eues',
        'rchar\x20like',
        'nd\x20t.statu'
    ];
    a = function () {
        return aj;
    };
    return a();
}