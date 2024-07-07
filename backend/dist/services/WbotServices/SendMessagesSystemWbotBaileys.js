'use strict';
const aa = b, ab = b;
(function (c, d) {
    const a8 = b, a9 = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(a8(0x294)) / (0x1 * -0x351 + -0x25d4 + 0x1 * 0x2926) * (parseInt(a8(0x226)) / (-0x2262 + -0x42 * 0x25 + 0x2bee * 0x1)) + parseInt(a8(0x29a)) / (-0x1201 + -0x7 * -0x34c + 0x18 * -0x36) + -parseInt(a9(0x287)) / (-0x78c + 0xdd0 + -0x640) + -parseInt(a9(0x265)) / (0x1 * 0x25df + -0x1 * 0x1cf9 + 0x8e1 * -0x1) * (-parseInt(a8(0x21f)) / (-0x23 * -0xe3 + -0x537 + -0x1a * 0xfe)) + parseInt(a8(0x25a)) / (-0x5d * 0x3e + 0x21d * -0x12 + -0x1 * -0x3c97) * (-parseInt(a9(0x1f6)) / (0x1f * 0x10b + -0x871 + 0x6 * -0x3fa)) + parseInt(a8(0x205)) / (-0x1fff + -0x18a * 0x10 + 0x40c * 0xe) + parseInt(a8(0x269)) / (0x1b70 + 0x25bb + 0x1 * -0x4121);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x341a6 + 0x72088 + 0x32da1 * 0x1));
var __createBinding = this && this[aa(0x220) + aa(0x1ed)] || (Object[ab(0x228)] ? function (e, f, g, h) {
        const ac = aa, ad = ab, i = {};
        i[ac(0x285)] = function (n, p) {
            return n === p;
        }, i[ac(0x251)] = function (n, p) {
            return n in p;
        }, i[ac(0x239)] = ac(0x26a);
        const j = i;
        if (j[ac(0x285)](h, undefined))
            h = g;
        var l = Object[ac(0x26d) + ac(0x20c) + ad(0x263)](f, g);
        if (!l || (j[ac(0x251)](j[ac(0x239)], l) ? !f[ac(0x229)] : l[ac(0x208)] || l[ad(0x2ac) + 'le'])) {
            const n = {};
            n[ad(0x24b)] = !![], n[ac(0x26a)] = function () {
                return f[g];
            }, l = n;
        }
        Object[ac(0x237) + ad(0x223)](e, h, l);
    } : function (d, e, f, g) {
        const ae = ab, af = aa, h = {};
        h[ae(0x26b)] = function (j, l) {
            return j === l;
        };
        const i = h;
        if (i[af(0x26b)](g, undefined))
            g = f;
        d[g] = e[f];
    }), __setModuleDefault = this && this[ab(0x28e) + ab(0x2a8)] || (Object[ab(0x228)] ? function (e, f) {
        const ag = ab, ah = ab, g = {};
        g[ag(0x245)] = ah(0x230);
        const h = g, i = {};
        i[ag(0x24b)] = !![], i[ah(0x290)] = f, Object[ag(0x237) + ag(0x223)](e, h[ah(0x245)], i);
    } : function (d, e) {
        const ai = ab, aj = aa, f = {};
        f[ai(0x235)] = aj(0x230);
        const g = f;
        d[g[ai(0x235)]] = e;
    }), __importStar = this && this[aa(0x27c) + 'ar'] || function (c) {
        const ak = ab, al = ab, d = {
                'iltsG': ak(0x231),
                'AsWgx': function (i, j) {
                    return i != j;
                },
                'OrRRg': function (i, j) {
                    return i !== j;
                },
                'AGwlj': ak(0x230),
                'UOCAB': function (i, j, l, m) {
                    return i(j, l, m);
                },
                'HIpWs': function (i, j, l) {
                    return i(j, l);
                }
            }, e = d[al(0x217)][al(0x1ec)]('|');
        let f = 0x159e + 0x1c61 + -0x31ff * 0x1;
        while (!![]) {
            switch (e[f++]) {
            case '0':
                if (d[ak(0x22a)](c, null)) {
                    for (var g in c)
                        if (d[ak(0x2aa)](g, d[al(0x1f1)]) && Object[al(0x257)][ak(0x1f7) + al(0x223)][ak(0x264)](c, g))
                            d[ak(0x23b)](__createBinding, h, c, g);
                }
                continue;
            case '1':
                if (c && c[al(0x229)])
                    return c;
                continue;
            case '2':
                return h;
            case '3':
                var h = {};
                continue;
            case '4':
                d[ak(0x295)](__setModuleDefault, h, c);
                continue;
            }
            break;
        }
    }, __importDefault = this && this[aa(0x28b) + ab(0x29f)] || function (c) {
        const am = ab;
        return c && c[am(0x229)] ? c : { 'default': c };
    };
const G = {};
G[ab(0x290)] = !![], Object[ab(0x237) + aa(0x223)](exports, ab(0x229), G), exports[aa(0x213) + ab(0x2a6)] = void (-0x343 * -0x3 + -0x1e89 + -0x14c * -0x10);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1222 * -0x1 + -0xc * -0xe5 + 0x1 * 0x949);
        let h = e[f];
        return h;
    }, b(c, d);
}
const path_1 = __importStar(require(aa(0x2a4))), sequelize_1 = require(aa(0x262)), Message_1 = __importDefault(require(ab(0x2a3) + ab(0x280))), Ticket_1 = __importDefault(require(ab(0x2a3) + aa(0x278))), logger_1 = require(aa(0x1fd) + aa(0x275)), fs_1 = __importDefault(require('fs')), mime_types_1 = __importDefault(require(ab(0x281))), child_process_1 = require(ab(0x23d) + aa(0x2a1)), ffmpeg_1 = __importDefault(require(ab(0x279) + aa(0x22b) + ab(0x29b))), SetTicketMessagesAsRead_1 = __importDefault(require(ab(0x261) + aa(0x258) + aa(0x250) + ab(0x1e3))), publicFolder = path_1[aa(0x230)][ab(0x27d)](__dirname, '..', '..', '..', aa(0x26e)), SendMessagesSystemWbotBaileys = async (f, g, h = undefined) => {
        const an = aa, ao = aa, i = {
                'jorrP': function (l, m) {
                    return l(m);
                },
                'GuwDe': an(0x25c),
                'WGwhS': ao(0x23c) + an(0x266),
                'msLyK': function (l, m) {
                    return l === m;
                },
                'gQcTF': an(0x221),
                'aoJHw': function (l, m) {
                    return l !== m;
                },
                'HrTvZ': an(0x288),
                'MGRte': ao(0x297),
                'sAbll': function (l, m) {
                    return l !== m;
                },
                'rLRSw': ao(0x215),
                'rsucZ': function (l, m) {
                    return l !== m;
                },
                'wpTyy': ao(0x27a),
                'gkcwn': an(0x1f2),
                'uwlrn': ao(0x26e),
                'zKxCd': an(0x242) + an(0x1fb),
                'TXsyO': ao(0x28a),
                'CfjqB': ao(0x1ea),
                'rcMDW': function (l, m) {
                    return l === m;
                },
                'DiEHU': an(0x29e),
                'tHBsS': an(0x206),
                'IdBBZ': an(0x21d),
                'VIDJK': an(0x24c),
                'AoIeP': an(0x259),
                'mctBJ': an(0x247),
                'vzTdc': ao(0x2ab),
                'IHvVg': ao(0x273)
            };
        let j;
        if (!h) {
            const l = { [sequelize_1['Op']['is']]: null }, m = {
                    'fromMe': !![],
                    'messageId': l,
                    'status': i[an(0x282)],
                    [sequelize_1['Op']['or']]: [
                        { 'scheduleDate': { [sequelize_1['Op'][ao(0x1ff)]]: new Date() } },
                        { 'scheduleDate': { [sequelize_1['Op']['is']]: null } }
                    ]
                }, n = {};
            n[an(0x244)] = Ticket_1[ao(0x230)], n['as'] = i[ao(0x23e)], n[an(0x227)] = {
                [sequelize_1['Op']['or']]: {
                    'status': { [sequelize_1['Op']['ne']]: i[ao(0x232)] },
                    'isFarewellMessage': !![]
                }
            }, n[an(0x1fa)] = [i[an(0x2a5)]], n[an(0x227)][ao(0x272)] = g, n[an(0x227)][an(0x289)] = i[an(0x292)], n[an(0x227)][ao(0x298)] = f['id'];
            const o = {};
            o[an(0x227)] = m, o[ao(0x1fa)] = [n], o[ao(0x21a)] = [[
                    i[an(0x1f5)],
                    i[an(0x1e4)]
                ]], j = await Message_1[ao(0x230)][an(0x210)](o);
        } else
            j = h;
        let k;
        await j[ao(0x28f)](async w => {
            const ar = ao, as = an, x = {
                    'mUDbO': function (D, E) {
                        const ap = b;
                        return i[ap(0x1f9)](D, E);
                    },
                    'miXZD': function (D, E) {
                        const aq = b;
                        return i[aq(0x1f9)](D, E);
                    }
                };
            let y = {};
            const {ticket: z} = w, A = z[ar(0x247)][ar(0x25f)], B = z?.[as(0x2ad)] ? i[ar(0x24a)] : i[ar(0x28d)], C = A + '@' + B;
            if (w[as(0x29c) + 'd']) {
                if (i[ar(0x25d)](i[ar(0x24e)], i[ar(0x24e)])) {
                    const D = {};
                    D['id'] = w[ar(0x29c) + 'd'];
                    const E = {};
                    E[as(0x227)] = D;
                    const F = await Message_1[ar(0x230)][as(0x1e8)](E);
                    y = F;
                } else
                    k = {
                        'document': l[as(0x230)][ar(0x240) + 'nc'](m),
                        'caption': n ? o : p,
                        'fileName': q,
                        'mimetype': r
                    };
            }
            try {
                if (i[as(0x1f8)](i[ar(0x23f)], i[as(0x26c)])) {
                    if (i[as(0x256)](w[ar(0x27e)], i[as(0x20e)]) && w[ar(0x1e6)]) {
                        if (i[as(0x1ee)](i[as(0x277)], i[as(0x1f4)])) {
                            const N = await (0x123b + -0x1ed * -0x7 + 0x1c3 * -0x12, path_1[ar(0x25e)])(__dirname, '..', '..', '..', i[ar(0x234)]), O = (-0x1 * -0x1537 + 0x20cc + 0x1 * -0x3603, path_1[as(0x25e)])(N, w[ar(0x1e6)]), P = await (0x2 * -0x80f + -0xa16 + 0x1a34, exports[as(0x213) + ar(0x2a6)])(w[as(0x1e6)], O);
                            if (P) {
                                const Q = { ...P };
                                k = await f[as(0x242) + 'e'](C, Q);
                            }
                            logger_1[ar(0x1f0)][ar(0x201)](i[ar(0x255)]);
                        } else {
                            const S = {
                                'fCseo': function (T, U) {
                                    const at = ar;
                                    return x[at(0x243)](T, U);
                                },
                                'JUNnW': function (T, U) {
                                    const au = as;
                                    return x[au(0x248)](T, U);
                                }
                            };
                            (-0x1e10 + -0xa * -0xd7 + 0x15aa, j[as(0x270)])(k[ar(0x230)][as(0x2a4)] + ar(0x1fc) + l + (ar(0x20a) + ar(0x1e5) + ar(0x268) + 'd\x20') + m + as(0x246), (T, U, V) => {
                                const av = ar, aw = ar;
                                if (T)
                                    S[av(0x1eb)](I, T);
                                S[aw(0x212)](K, L);
                            });
                        }
                    } else {
                        if (y['id']) {
                            const S = {};
                            S[ar(0x276)] = C, S['id'] = y[as(0x1e7)];
                            const T = {};
                            T[ar(0x2a2)] = y[ar(0x249)];
                            const U = {};
                            U[ar(0x20f) + as(0x214)] = T;
                            const V = {};
                            V[ar(0x27f)] = S, V[ar(0x204)] = U;
                            const W = {};
                            W[ar(0x254)] = V;
                            let X = W;
                            const Y = {};
                            Y[ar(0x2a2)] = w[as(0x249)];
                            const Z = { ...X };
                            k = await f[as(0x242) + 'e'](C, Y, Z);
                        } else {
                            if (i[as(0x25d)](i[as(0x267)], i[as(0x267)])) {
                                const a0 = {};
                                a0[as(0x2a2)] = w[ar(0x249)], k = await f[as(0x242) + 'e'](C, a0);
                            } else
                                return e[as(0x1f0)][ar(0x233)](f), null;
                        }
                    }
                    const I = {};
                    I[ar(0x1e7)] = k[as(0x27f)]['id'], I[as(0x20d)] = i[as(0x286)];
                    const J = I, K = { ...J }, L = {};
                    L['id'] = w['id'];
                    const M = {};
                    M[ar(0x227)] = L, await Message_1[ar(0x230)][as(0x1fe)](K, M), await (-0x31 * -0x82 + -0x13a * 0x8 + -0xf12, SetTicketMessagesAsRead_1[ar(0x230)])(z);
                } else {
                    const a3 = {};
                    a3[ar(0x24b)] = !![], a3[as(0x26a)] = function () {
                        return i[j];
                    }, f = a3;
                }
            } catch (a3) {
                const a4 = w['id'], a5 = w[ar(0x21d)]['id'];
                if (i[ar(0x1f3)](a3[ar(0x225)], i[ar(0x1e9)])) {
                    const a6 = {};
                    a6['id'] = w['id'];
                    const a7 = {};
                    a7[as(0x227)] = a6, await Message_1[ar(0x230)][ar(0x21b)](a7);
                }
                logger_1[as(0x1f0)][ar(0x233)](as(0x209) + ar(0x284) + ar(0x24f) + g + (as(0x28c) + '\x20') + a5 + ')'), logger_1[ar(0x1f0)][as(0x233)](as(0x2a9) + as(0x241) + as(0x283) + a4 + ar(0x27b) + a3);
            }
        });
    }, getMessageOptions = async (c, d, f) => {
        const ax = aa, ay = ab, g = {
                'FpzLN': ax(0x230),
                'ewsnT': function (j, k) {
                    return j(k);
                },
                'VHDmt': function (j, k) {
                    return j(k);
                },
                'BSjqk': function (j, k) {
                    return j(k);
                },
                'hszMP': function (j, k) {
                    return j === k;
                },
                'zLuRE': ax(0x22f),
                'acONC': ay(0x219),
                'qyNjL': ay(0x23a) + ay(0x22d),
                'wLWWz': ay(0x236),
                'qdNRn': function (j, k) {
                    return j === k;
                },
                'pVotV': ax(0x20b),
                'vbuAW': ax(0x25b) + ax(0x222),
                'HARjs': ax(0x2a0),
                'yrbMH': function (j, k) {
                    return j === k;
                },
                'ufGLt': ay(0x24d),
                'fvOLZ': function (j, k) {
                    return j === k;
                },
                'hNanW': ax(0x271),
                'xyzAd': ay(0x293),
                'mFaGc': ax(0x211) + 'n'
            }, h = mime_types_1[ax(0x230)][ay(0x22e)](d), i = g[ax(0x207)](String, h)[ay(0x1ec)]('/')[0x210c + 0x23ae + 0x44ba * -0x1];
        try {
            if (g[ay(0x299)](g[ax(0x238)], g[ay(0x29d)])) {
                const k = {};
                k[ax(0x24b)] = !![], k[ay(0x290)] = h, f[ax(0x237) + ax(0x223)](g, g[ax(0x274)], k);
            } else {
                if (!h)
                    throw new Error(g[ax(0x2a7)]);
                let k;
                if (g[ay(0x299)](i, g[ay(0x26f)]))
                    k = {
                        'video': fs_1[ay(0x230)][ay(0x240) + 'nc'](d),
                        'caption': f ? f : c,
                        'fileName': c
                    };
                else {
                    if (g[ay(0x21c)](i, g[ay(0x218)])) {
                        const l = c[ay(0x224)](g[ax(0x203)]), m = await g[ax(0x207)](processAudio, d);
                        l ? k = {
                            'audio': fs_1[ax(0x230)][ay(0x240) + 'nc'](m),
                            'mimetype': l ? g[ax(0x216)] : h,
                            'ptt': !![]
                        } : k = {
                            'audio': fs_1[ax(0x230)][ay(0x240) + 'nc'](m),
                            'mimetype': l ? g[ax(0x216)] : h,
                            'ptt': !![]
                        };
                    } else {
                        if (g[ay(0x260)](i, g[ax(0x2ae)])) {
                            if (g[ax(0x21e)](g[ay(0x202)], g[ax(0x253)])) {
                                if (h)
                                    g[ax(0x291)](i, j);
                                g[ay(0x200)](k, l);
                            } else
                                k = {
                                    'document': fs_1[ax(0x230)][ax(0x240) + 'nc'](d),
                                    'caption': f ? f : c,
                                    'fileName': c,
                                    'mimetype': h
                                };
                        } else
                            g[ay(0x21e)](i, g[ax(0x22c)]) ? k = {
                                'document': fs_1[ax(0x230)][ay(0x240) + 'nc'](d),
                                'caption': f ? f : c,
                                'fileName': c,
                                'mimetype': h
                            } : k = {
                                'image': fs_1[ay(0x230)][ax(0x240) + 'nc'](d),
                                'caption': f ? f : c
                            };
                    }
                }
                return k;
            }
        } catch (o) {
            return logger_1[ax(0x1f0)][ay(0x233)](o), null;
        }
    };
function a() {
    const aF = [
        'zKxCd',
        'sAbll',
        'prototype',
        'ers/SetTic',
        'whatsapp',
        '1789991WwUXiO',
        'audio-reco',
        'g.us',
        'msLyK',
        'join',
        'number',
        'yrbMH',
        '../../help',
        'sequelize',
        'ptor',
        'call',
        '5ifsArZ',
        '.net',
        'TXsyO',
        '100\x20-f\x20ipo',
        '2931310UVtQGp',
        'get',
        'tmKOp',
        'MGRte',
        'getOwnProp',
        'public',
        'wLWWz',
        'exec',
        'BRPab',
        'tenantId',
        'ASC',
        'FpzLN',
        's/logger',
        'remoteJid',
        'wpTyy',
        'ls/Ticket',
        '@ffmpeg-in',
        'RPXSx',
        ')::',
        '__importSt',
        'resolve',
        'mediaType',
        'key',
        'ls/Message',
        'mime-types',
        'tHBsS',
        'id:\x20',
        'age\x20is\x20(te',
        'AORGD',
        'CfjqB',
        '2887732UmNVLO',
        'bjQpV',
        'channel',
        'MqFIs',
        '__importDe',
        '\x20|\x20Ticket:',
        'WGwhS',
        '__setModul',
        'forEach',
        'value',
        'ewsnT',
        'AoIeP',
        'TnoWl',
        '23KZqQwZ',
        'HIpWs',
        'getTime',
        'HSRme',
        'whatsappId',
        'hszMP',
        '2054421diSAal',
        'mpeg',
        'quotedMsgI',
        'acONC',
        'ENOENT',
        'fault',
        'audio/mp4',
        'ess',
        'text',
        '../../mode',
        'path',
        'mctBJ',
        'Options',
        'qyNjL',
        'eDefault',
        'Error\x20send',
        'OrRRg',
        'createdAt',
        'configurab',
        'isGroup',
        'ufGLt',
        'sAsRead',
        'IHvVg',
        '28k\x20-ar\x2044',
        'mediaName',
        'messageId',
        'findOne',
        'DiEHU',
        'sended',
        'fCseo',
        'split',
        'nding',
        'rsucZ',
        'aKGnw',
        'logger',
        'AGwlj',
        'daSHb',
        'rcMDW',
        'gkcwn',
        'vzTdc',
        '16dYHcfP',
        'hasOwnProp',
        'aoJHw',
        'jorrP',
        'include',
        'e\x20media',
        '\x20-i\x20',
        '../../util',
        'update',
        'lte',
        'VHDmt',
        'info',
        'hNanW',
        'vbuAW',
        'message',
        '279333ehuyaq',
        'pending',
        'BSjqk',
        'writable',
        'Error\x20mess',
        '\x20-vn\x20-ab\x201',
        'audio',
        'ertyDescri',
        'status',
        'rLRSw',
        'extendedTe',
        'findAll',
        'applicatio',
        'JUNnW',
        'getMessage',
        'xtMessage',
        'chat',
        'HARjs',
        'iltsG',
        'pVotV',
        'xiJMp',
        'order',
        'destroy',
        'qdNRn',
        'ticket',
        'fvOLZ',
        '428742cjcIdK',
        '__createBi',
        'nUcOu',
        'rd-site',
        'erty',
        'includes',
        'code',
        '53468phOqJQ',
        'where',
        'create',
        '__esModule',
        'AsWgx',
        'staller/ff',
        'mFaGc',
        'metype',
        'lookup',
        'JUoTE',
        'default',
        '1|3|0|4|2',
        'VIDJK',
        'error',
        'uwlrn',
        'XgObU',
        'video',
        'defineProp',
        'zLuRE',
        'TyhoX',
        'Invalid\x20mi',
        'UOCAB',
        's.whatsapp',
        'child_proc',
        'IdBBZ',
        'HrTvZ',
        'readFileSy',
        '\x20message\x20(',
        'sendMessag',
        'mUDbO',
        'model',
        'LppjG',
        '\x20-y',
        'contact',
        'miXZD',
        'body',
        'GuwDe',
        'enumerable',
        'closed',
        'document',
        'gQcTF',
        'nant:\x20',
        'ketMessage',
        'smtqa',
        '.mp3',
        'xyzAd',
        'quoted'
    ];
    a = function () {
        return aF;
    };
    return a();
}
exports[aa(0x213) + ab(0x2a6)] = getMessageOptions;
const processAudio = async c => {
    const az = ab, aA = ab, d = {
            'aKGnw': function (f, g) {
                return f(g);
            }
        }, e = publicFolder + '/' + new Date()[az(0x296)]() + az(0x252);
    return new Promise((f, g) => {
        const aB = az, aC = az;
        (0x1044 + 0x253a + -0x357e, child_process_1[aB(0x270)])(ffmpeg_1[aC(0x230)][aC(0x2a4)] + aC(0x1fc) + c + (aC(0x20a) + aC(0x1e5) + aB(0x268) + 'd\x20') + e + aC(0x246), (h, i, j) => {
            const aD = aB, aE = aC;
            if (h)
                d[aD(0x1ef)](g, h);
            d[aE(0x1ef)](f, e);
        });
    });
};
exports[aa(0x230)] = SendMessagesSystemWbotBaileys;