'use strict';
const aE = b, aF = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xf48 + 0xac5 + 0xcc7 * -0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const aC = b, aD = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(aC(0x10f)) / (-0x11ea + -0xa * 0x3df + 0x38a1) + parseInt(aD(0x11c)) / (-0x1576 + -0x3d1 * -0x3 + 0xa05) + parseInt(aD(0xaf)) / (0x21e9 + 0x1563 + -0x3749 * 0x1) + -parseInt(aD(0xd2)) / (0x33 * -0xa9 + -0xafc + 0x2cab) + -parseInt(aC(0x80)) / (0x7 * -0x465 + 0x2 * 0xd47 + 0x21d * 0x2) * (parseInt(aD(0x109)) / (-0x2120 + 0x2 * -0xe4b + 0x3dbc)) + -parseInt(aD(0xe7)) / (0x1533 + -0x259d + 0x1071) + parseInt(aD(0xb4)) / (-0x2225 + -0x86 * -0x4 + -0x2b * -0xbf);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x142d5 * 0x7 + -0x195d7 * -0x7 + -0x884e0));
var __importDefault = this && this[aE(0x9c) + aF(0xec)] || function (c) {
    const aG = aF;
    return c && c[aG(0x89)] ? c : { 'default': c };
};
const s = {};
s[aF(0xeb)] = !![], Object[aF(0x105) + aE(0xfb)](exports, aF(0x89), s);
const sequelize_1 = require(aF(0xa6)), Contact_1 = __importDefault(require(aF(0x97) + aE(0xf8))), Ticket_1 = __importDefault(require(aE(0x97) + aF(0xf6))), User_1 = __importDefault(require(aF(0x97) + aF(0x110))), ShowTicketService_1 = __importDefault(require(aE(0xcc) + aF(0xd8))), CampaignContacts_1 = __importDefault(require(aF(0x97) + aE(0xc2) + aE(0x90))), socketEmit_1 = __importDefault(require(aF(0xc3) + aF(0x82) + aE(0x87))), CheckChatBotFlowWelcome_1 = __importDefault(require(aE(0xc3) + aE(0xa4) + aE(0xac) + aF(0x7f))), CreateLogTicketService_1 = __importDefault(require(aE(0xbe) + aE(0xfc) + aE(0xd0))), Message_1 = __importDefault(require(aF(0x97) + aF(0xae))), ListSettingsService_1 = __importDefault(require(aE(0x99) + aE(0xad) + aF(0xe4) + aF(0x8c))), Whatsapp_1 = __importDefault(require(aF(0x97) + aE(0xa3) + 'p')), VerifyContactBaileys_1 = require(aF(0xf4) + aE(0x8e) + aE(0xb2) + aE(0xc7) + aF(0xfd)), FindOrCreateTicketService = async ({
        contact: G,
        whatsappId: H,
        unreadMessages: I,
        tenantId: J,
        groupContact: K,
        msg: L,
        isSync: M,
        channel: N
    }) => {
        const aH = aF, aI = aE, O = {};
        O[aH(0xb5)] = aH(0xf7), O[aH(0x113)] = function (a8, a9) {
            return a8 === a9;
        }, O[aH(0x117)] = aH(0x108), O[aI(0x8b)] = function (a8, a9) {
            return a8 !== a9;
        }, O[aI(0xa1)] = aI(0xd1), O[aI(0xc9)] = function (a8, a9) {
            return a8 === a9;
        }, O[aI(0xb6)] = aH(0xe8), O[aH(0xbd)] = aI(0xcd), O[aH(0xf2)] = aI(0x86), O[aI(0x84)] = aI(0xcb), O[aH(0xd3)] = aI(0xdb), O[aI(0xf0)] = function (a8, a9) {
            return a8 === a9;
        }, O[aI(0x94)] = aI(0x112), O[aI(0x9b)] = aI(0x118), O[aH(0x10c)] = function (a8, a9) {
            return a8 === a9;
        }, O[aH(0xc6)] = aH(0xb1), O[aI(0xc5)] = function (a8, a9) {
            return a8 === a9;
        }, O[aH(0x116)] = function (a8, a9) {
            return a8 !== a9;
        }, O[aH(0xe6)] = aH(0x9e), O[aI(0x11a)] = aH(0x11f), O[aH(0x8a)] = aH(0xb0), O[aH(0xb7)] = aI(0xdd), O[aI(0x115)] = aH(0x98), O[aH(0xd7)] = aI(0x11e), O[aI(0xaa)] = aH(0x111), O[aI(0x102)] = aH(0xe2), O[aH(0xfe)] = aI(0xa9), O[aI(0xb3)] = aI(0x114), O[aI(0xee)] = function (a8, a9) {
            return a8 !== a9;
        }, O[aH(0xb9)] = aI(0xda), O[aH(0x92)] = aI(0x101), O[aI(0xd4)] = aH(0xb8), O[aH(0xea)] = aH(0x122), O[aI(0xa8)] = function (a8, a9) {
            return a8 > a9;
        }, O[aH(0xbc)] = aH(0xe9) + aI(0xde), O[aI(0x93)] = aH(0xff), O[aH(0xc1)] = aH(0xf3), O[aI(0x9d)] = aI(0xa2), O[aH(0x9f)] = aH(0x8f), O[aI(0x119)] = aI(0xa0), O[aH(0xef)] = function (a8, a9) {
            return a8 === a9;
        }, O[aI(0x120)] = aI(0xbf), O[aH(0x103)] = aH(0x11d), O[aH(0xe1)] = function (a8, a9) {
            return a8 && a9;
        }, O[aH(0xd5)] = aI(0x10d);
        const P = O;
        let Q;
        if (P[aH(0x113)](N, P[aH(0x117)]))
            P[aH(0x8b)](P[aI(0xa1)], P[aI(0xa1)]) ? e = f[aH(0x100)][aI(0x10a)] : Q = L[aH(0x10a)];
        else {
            if (P[aH(0xc9)](P[aH(0xb6)], P[aI(0xb6)]))
                Q = L[aI(0x100)][aI(0x10a)];
            else {
                const aa = d[aI(0x118)];
                return aa[aH(0x83) + aI(0xfa)] = !![], aa;
            }
        }
        if (P[aI(0x113)](N, P[aH(0xbd)]) && L && Q) {
            if (P[aH(0x8b)](P[aH(0xf2)], P[aH(0x84)])) {
                const aa = {};
                aa[aI(0xf9)] = G['id'], aa[aH(0xbb)] = L[aI(0x100)]?.['id'];
                const ab = {};
                ab[aH(0x107)] = aa;
                const ac = await CampaignContacts_1[aI(0xc8)][aH(0x11b)](ab);
                if (ac?.['id']) {
                    if (P[aH(0x8b)](P[aI(0xd3)], P[aH(0xd3)]))
                        ab = f[aI(0x10a)];
                    else {
                        const ae = {};
                        return ae[aI(0x106) + aI(0xfa)] = !![], ae;
                    }
                }
            } else {
                const ag = {};
                return ag[aH(0x106) + aI(0xfa)] = !![], ag;
            }
        }
        if (L && L[aI(0x10a)]) {
            if (P[aH(0xf0)](P[aI(0x94)], P[aI(0x94)])) {
                const ag = {};
                ag[aI(0xbb)] = L[aI(0x100)]?.['id'];
                const ah = {};
                ah[aI(0x107)] = ag, ah[aH(0x81)] = [P[aH(0x9b)]];
                const ai = await Message_1[aH(0xc8)][aI(0x11b)](ah);
                if (P[aH(0x10c)](ai?.[aI(0x118)]?.[aI(0x88)], P[aH(0xc6)]) && P[aI(0xc5)](ai?.[aH(0x118)][aI(0xc4) + 'e'], L[aH(0xce)])) {
                    if (P[aH(0x116)](P[aI(0xe6)], P[aI(0x11a)])) {
                        const aj = ai[aI(0x118)];
                        return aj[aI(0x83) + aI(0xfa)] = !![], aj;
                    } else
                        ah[aI(0x88)] = P[aI(0xb5)], R[aH(0xe0)] = S[0x1c6a + 0x155b * -0x1 + -0x8b * 0xd]['id'], T[aH(0x91) + aI(0x121)] = new U()[aH(0xe3)]();
                }
            } else
                e[aH(0xe0)] = f[aH(0xe0)];
        }
        const R = {
                [sequelize_1['Op']['or']]: [
                    P[aI(0xb5)],
                    P[aH(0x8a)]
                ]
            }, S = {};
        S[aI(0x88)] = R, S[aH(0xd6)] = J, S[aH(0xd9)] = H, S[aI(0xf9)] = K ? K['id'] : G['id'];
        const T = {};
        T[aH(0xca)] = Contact_1[aH(0xc8)], T['as'] = P[aH(0xb7)], T[aI(0x81)] = [
            P[aI(0x115)],
            P[aI(0xd7)],
            {
                'association': P[aI(0xaa)],
                'attributes': [
                    'id',
                    P[aI(0x102)]
                ]
            }
        ];
        const U = {};
        U[aI(0xca)] = User_1[aH(0xc8)], U['as'] = P[aH(0xfe)], U[aH(0xa5)] = [
            'id',
            P[aH(0x102)]
        ];
        const V = {};
        V[aI(0xab) + 'n'] = P[aH(0xbd)], V[aH(0xa5)] = [
            'id',
            P[aH(0x102)],
            P[aI(0xb3)]
        ];
        const W = {};
        W[aI(0x107)] = S, W[aI(0x81)] = [
            T,
            U,
            V
        ];
        let X = await Ticket_1[aH(0xc8)][aI(0x11b)](W);
        if (X) {
            if (P[aH(0xee)](P[aI(0xb9)], P[aI(0xb9)]))
                R[aH(0xe0)] && (o[aI(0xe0)] = p[aI(0xe0)]), U[aH(0x9a)] && (q[aH(0x9a)] = r[aI(0x9a)]);
            else {
                I = [
                    P[aH(0x92)],
                    P[aI(0xd4)],
                    P[aI(0x117)],
                    P[aH(0xea)]
                ][aH(0x96)](N) && P[aI(0xa8)](I, 0x1250 + 0x194 * -0xa + 0x18 * -0x1b) ? I += X[aI(0x95) + aI(0xed)] : I;
                const an = {};
                an[aI(0x95) + aH(0xed)] = I, await X[aH(0xa7)](an);
                const ao = {};
                return ao[aI(0xd6)] = J, ao[aH(0xf1)] = P[aI(0xbc)], ao[aI(0x10b)] = X, (0x1062 + -0x14 * -0x1a8 + -0x3182 * 0x1, socketEmit_1[aH(0xc8)])(ao), X;
            }
        }
        if (K) {
            if (P[aH(0xf0)](P[aI(0x93)], P[aH(0xc1)])) {
                const aq = {};
                return aq[aI(0xc8)] = S, g && h[aI(0x89)] ? R : aq;
            } else {
                const aq = {};
                aq[aH(0xf9)] = K['id'], aq[aI(0xd6)] = J, aq[aI(0xd9)] = H;
                const ar = {};
                ar[aH(0x107)] = aq, ar[aI(0xdf)] = [[
                        P[aI(0x9d)],
                        P[aH(0x9f)]
                    ]], ar[aI(0x81)] = [
                    {
                        'model': Contact_1[aH(0xc8)],
                        'as': P[aI(0xb7)],
                        'include': [
                            P[aI(0x115)],
                            P[aI(0xd7)],
                            {
                                'association': P[aH(0xaa)],
                                'attributes': [
                                    'id',
                                    P[aH(0x102)]
                                ]
                            }
                        ]
                    },
                    {
                        'model': User_1[aH(0xc8)],
                        'as': P[aI(0xfe)],
                        'attributes': [
                            'id',
                            P[aH(0x102)]
                        ]
                    },
                    {
                        'association': P[aH(0xbd)],
                        'attributes': [
                            'id',
                            P[aH(0x102)],
                            P[aI(0xb3)]
                        ]
                    }
                ], X = await Ticket_1[aI(0xc8)][aH(0x11b)](ar);
                if (X) {
                    if (P[aI(0xc5)](P[aH(0x119)], P[aH(0x119)])) {
                        const as = {};
                        as[aI(0x88)] = P[aH(0x8a)], as[aH(0xe0)] = null, as[aH(0x95) + aI(0xed)] = I, await X[aH(0xa7)](as);
                        const at = {};
                        return at[aI(0xd6)] = J, at[aI(0xf1)] = P[aH(0xbc)], at[aH(0x10b)] = X, (0x21c9 + 0x1c8a + -0x3e53, socketEmit_1[aI(0xc8)])(at), X;
                    } else
                        e[aI(0x9a)] = f[aI(0x9a)];
                }
            }
        } else {
            const av = {
                    [sequelize_1['Op']['in']]: [
                        P[aH(0xb5)],
                        P[aI(0x8a)]
                    ]
                }, aw = {};
            aw[aI(0x88)] = av, aw[aH(0xd6)] = J, aw[aI(0xd9)] = H, aw[aH(0xf9)] = G['id'];
            const ax = {};
            ax[aI(0x107)] = aw, ax[aH(0xdf)] = [[
                    P[aH(0x9d)],
                    P[aH(0x9f)]
                ]], ax[aI(0x81)] = [
                {
                    'model': Contact_1[aH(0xc8)],
                    'as': P[aI(0xb7)],
                    'include': [
                        P[aI(0x115)],
                        P[aH(0xd7)],
                        {
                            'association': P[aI(0xaa)],
                            'attributes': [
                                'id',
                                P[aH(0x102)]
                            ]
                        }
                    ]
                },
                {
                    'model': User_1[aH(0xc8)],
                    'as': P[aH(0xfe)],
                    'attributes': [
                        'id',
                        P[aI(0x102)]
                    ]
                },
                {
                    'association': P[aH(0xbd)],
                    'attributes': [
                        'id',
                        P[aI(0x102)],
                        P[aI(0xb3)]
                    ]
                }
            ], X = await Ticket_1[aI(0xc8)][aH(0x11b)](ax);
            if (X) {
                const ay = {};
                ay[aI(0x88)] = P[aI(0x8a)], ay[aI(0xe0)] = null, ay[aI(0x95) + aI(0xed)] = I, await X[aI(0xa7)](ay);
                const az = {};
                return az[aI(0xd6)] = J, az[aH(0xf1)] = P[aI(0xbc)], az[aI(0x10b)] = X, (0xf6 * -0x9 + -0xccd + 0x1573, socketEmit_1[aH(0xc8)])(az), X;
            }
        }
        const Y = P[aI(0xef)]((await (0x1 * -0x1277 + 0x1c * 0x13 + 0x1063, ListSettingsService_1[aI(0xc8)])(J))?.[aH(0xf5)](aA => aA[aH(0x100)] === aH(0xe5) + aH(0xba) + 'ts')?.[aI(0xeb)], P[aH(0x120)]) || ![], Z = {};
        Z[aH(0xf9)] = K ? K['id'] : G['id'], Z[aH(0x88)] = P[aH(0x8a)], Z[aH(0xdc)] = !!K, Z[aH(0x95) + aI(0xed)] = I, Z[aI(0xd9)] = H, Z[aI(0xd6)] = J, Z[aH(0xcf)] = N;
        const a0 = Z, a1 = {};
        a1['id'] = H;
        const a2 = {};
        a2[aH(0x107)] = a1;
        const a3 = await Whatsapp_1[aI(0xc8)][aH(0x11b)](a2);
        a3 && (a3[aH(0xe0)] && (a0[aH(0xe0)] = a3[aI(0xe0)]), a3[aH(0x9a)] && (a0[aH(0x9a)] = a3[aI(0x9a)]));
        if (Y && G['id']) {
            const aA = G, aB = await aA[aH(0x10e)]();
            aB && aB[0xb * -0x316 + -0xc7 * -0x7 + -0x1c81 * -0x1]?.['id'] && (a0[aH(0x88)] = P[aI(0xb5)], a0[aH(0xe0)] = aB[0x1d9d + -0x20b * 0xd + -0x17 * 0x22]['id'], a0[aH(0x91) + aI(0x121)] = new Date()[aI(0xe3)]());
        }
        L && (a0[aH(0xc4) + 'e'] = await (0x4e2 + 0x7c * 0x1c + 0x1272 * -0x1, VerifyContactBaileys_1[aH(0x104) + aH(0xc0)])(L));
        const a4 = await Ticket_1[aH(0xc8)][aH(0x11d)](a0), a5 = {};
        a5[aI(0x8d)] = a4['id'], a5[aI(0xf1)] = P[aI(0x103)], await (-0xcaa * -0x1 + -0x43 * 0x12 + -0x7f4, CreateLogTicketService_1[aH(0xc8)])(a5);
        (P[aH(0xe1)](L, !Q) || M) && await (0x112 * -0x22 + 0x1afa + 0x96a * 0x1, CheckChatBotFlowWelcome_1[aI(0xc8)])(a4);
        const a6 = {};
        a6['id'] = a4['id'], a6[aI(0xd6)] = J, X = await (-0xfb2 + 0x1085 * -0x2 + 0x30bc, ShowTicketService_1[aI(0xc8)])(a6), X[aI(0x85) + 'ue'](P[aH(0xd5)], !![]);
        const a7 = {};
        return a7[aH(0xd6)] = J, a7[aH(0xf1)] = P[aH(0xbc)], a7[aI(0x10b)] = X, (-0x5e3 + 0x5f7 + -0x14, socketEmit_1[aH(0xc8)])(a7), X;
    };
function a() {
    const aJ = [
        'ls/Message',
        '1144257uJddvk',
        'pending',
        'closed',
        'ers/Verify',
        'bKhSu',
        '18299656zkUtkh',
        'scsjI',
        'xRhOr',
        'TLOly',
        'waba',
        'kNdgs',
        'etsToWalle',
        'messageId',
        'ftlAo',
        'xHGNn',
        './CreateLo',
        'enabled',
        'sage',
        'PPuiP',
        'ls/Campaig',
        '../../help',
        'lastMessag',
        'oJEQG',
        'irZli',
        'ContactBai',
        'default',
        'IYJQw',
        'model',
        'DbvJL',
        './ShowTick',
        'whatsapp',
        'body',
        'channel',
        'vice',
        'FzHpb',
        '3159160ftyLhz',
        'MHKTa',
        'iGEtB',
        'TNRtP',
        'tenantId',
        'cHLKR',
        'etService',
        'whatsappId',
        'jgCqK',
        'GvQtg',
        'isGroup',
        'contact',
        'ate',
        'order',
        'userId',
        'GgvaJ',
        'name',
        'getTime',
        'istSetting',
        'DirectTick',
        'MqaSS',
        '9604322BTxnvI',
        'ZRJhu',
        'ticket:upd',
        'jJTVJ',
        'value',
        'fault',
        'ages',
        'VvGpw',
        'zotym',
        'NMbfC',
        'type',
        'BxNsn',
        'RdHrx',
        '../WbotSer',
        'find',
        'ls/Ticket',
        'open',
        'ls/Contact',
        'contactId',
        'Message',
        'erty',
        'gTicketSer',
        'leys',
        'yUPFL',
        'DQdmz',
        'key',
        'telegram',
        'kwrfV',
        'BlQKh',
        'getBodyMes',
        'defineProp',
        'isCampaign',
        'where',
        'instagram',
        '330nvSYzK',
        'fromMe',
        'payload',
        'EeHuq',
        'isCreated',
        'getWallets',
        '731085gUwUvZ',
        'ls/User',
        'wallets',
        'HmesY',
        'vPSmY',
        'isDeleted',
        'nlpfB',
        'GmHkU',
        'SARPv',
        'ticket',
        'ERdmH',
        'VLKhw',
        'findOne',
        '2706222uPrCpz',
        'create',
        'tags',
        'wTLXy',
        'zxHdL',
        'endanceAt',
        'messenger',
        'Welcome',
        '34690iZmomY',
        'include',
        'ers/socket',
        'isFarewell',
        'QSvEE',
        'setDataVal',
        'qnlxP',
        'Emit',
        'status',
        '__esModule',
        'OsEbr',
        'mDiOF',
        'sService',
        'ticketId',
        'vices/help',
        'DESC',
        'nContacts',
        'startedAtt',
        'VuwVk',
        'OzFxm',
        'PVFqL',
        'unreadMess',
        'includes',
        '../../mode',
        'extraInfo',
        '../Setting',
        'queueId',
        'JiOtq',
        '__importDe',
        'xwUUY',
        'eCyoQ',
        'ioOOY',
        'Ywidn',
        'yDLBu',
        'updatedAt',
        'ls/Whatsap',
        'ers/CheckC',
        'attributes',
        'sequelize',
        'update',
        'MllPn',
        'user',
        'MFBIk',
        'associatio',
        'hatBotFlow',
        'Services/L'
    ];
    a = function () {
        return aJ;
    };
    return a();
}
exports[aF(0xc8)] = FindOrCreateTicketService;