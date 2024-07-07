'use strict';
const ax = b, ay = b;
(function (c, d) {
    const av = b, aw = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(av(0xa9)) / (0x47 * 0x4f + 0x2 * -0x1d7 + -0x123a) + parseInt(av(0xdd)) / (0xb9c + 0xb91 * 0x3 + -0x3 * 0xf6f) * (parseInt(av(0x72)) / (-0x1 * 0x914 + -0x6 * 0x4f7 + 0x26e1 * 0x1)) + -parseInt(aw(0x10b)) / (0x1 * 0x26ba + 0x1caa + -0x4360) * (-parseInt(av(0xbe)) / (-0x1 * 0xd72 + -0xa19 * 0x3 + -0x74b * -0x6)) + parseInt(av(0xfc)) / (-0xbb1 + -0x65 * -0x33 + 0x21a * -0x4) * (parseInt(av(0xac)) / (-0x1 * 0x1916 + -0x1 * -0x1f88 + -0x66b)) + -parseInt(av(0xd7)) / (0x272 * -0x2 + 0x3d3 + 0x119 * 0x1) + -parseInt(aw(0x99)) / (-0x2339 + 0x87e + 0x1ac4 * 0x1) * (-parseInt(av(0xe1)) / (-0x1f53 + -0x17e1 + 0x126a * 0x3)) + -parseInt(aw(0xdf)) / (0x539 * -0x1 + -0x61 * 0x17 + 0x3 * 0x4a9);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x58263 + 0x4 * -0x1553 + 0xa90 * 0xda));
var __importDefault = this && this[ax(0x107) + ay(0x74)] || function (c) {
    const az = ax;
    return c && c[az(0x73)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1c65 + 0x576 * 0x2 + -0x26e2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const m = {};
m[ax(0xde)] = !![], Object[ax(0xf3) + ay(0x100)](exports, ay(0x73), m);
const sequelize_1 = require(ay(0x7d)), Contact_1 = __importDefault(require(ay(0xb2) + ax(0xa8))), Ticket_1 = __importDefault(require(ax(0xb2) + ay(0xb6))), User_1 = __importDefault(require(ay(0xb2) + ax(0x103))), ShowTicketService_1 = __importDefault(require(ax(0xad) + ax(0x9e))), CampaignContacts_1 = __importDefault(require(ay(0xb2) + ax(0xb8) + ay(0xc7))), socketEmit_1 = __importDefault(require(ay(0xbd) + ax(0xc1) + ax(0x106))), CheckChatBotFlowWelcome_1 = __importDefault(require(ax(0xbd) + ay(0x105) + ay(0xe8) + ax(0xc6))), CreateLogTicketService_1 = __importDefault(require(ay(0xdb) + ax(0xe7) + ax(0xa2))), Message_1 = __importDefault(require(ax(0xb2) + ay(0x96))), ListSettingsService_1 = __importDefault(require(ay(0xa3) + ay(0x81) + ay(0xd0) + ax(0xf0))), VerifyContactBaileys_1 = require(ay(0xc5) + ay(0xb3) + ax(0x109) + ay(0xe9) + ay(0x10a)), FindOrCreateTicketService = async ({
        contact: E,
        whatsappId: F,
        unreadMessages: G,
        tenantId: H,
        groupContact: I,
        msg: J,
        isSync: K,
        channel: L
    }) => {
        const aA = ax, aB = ay, M = {};
        M[aA(0xf5)] = aA(0xab), M[aB(0xba)] = function (a3, a4) {
            return a3 === a4;
        }, M[aA(0x7e)] = aB(0xcd), M[aA(0xe2)] = function (a3, a4) {
            return a3 === a4;
        }, M[aB(0x70)] = aB(0xf1), M[aA(0xb9)] = function (a3, a4) {
            return a3 !== a4;
        }, M[aB(0x91)] = aA(0xd4), M[aA(0xf7)] = aB(0x9c), M[aB(0x89)] = function (a3, a4) {
            return a3 === a4;
        }, M[aB(0x90)] = aB(0x9f), M[aB(0xc9)] = aA(0xe4), M[aA(0xea)] = aA(0xc0), M[aB(0xda)] = function (a3, a4) {
            return a3 === a4;
        }, M[aB(0x85)] = aB(0x77), M[aB(0xce)] = aB(0x6f), M[aB(0xec)] = aB(0x7a), M[aA(0x8b)] = aB(0xe5), M[aA(0xf6)] = aB(0xa0), M[aA(0xbb)] = aA(0x101), M[aB(0x92)] = aB(0xcc), M[aB(0x76)] = aA(0x8a), M[aB(0x79)] = aA(0xa6), M[aB(0xed)] = aA(0xcb), M[aA(0xb7)] = aA(0x93), M[aB(0xcf)] = function (a3, a4) {
            return a3 > a4;
        }, M[aA(0x83)] = aA(0xc2) + aB(0xaf), M[aB(0xb0)] = aA(0xa5), M[aB(0x98)] = aB(0x84), M[aA(0xf4)] = function (a3, a4) {
            return a3 !== a4;
        }, M[aA(0xf8)] = aA(0x95), M[aA(0xbf)] = aB(0x8f), M[aB(0xd1)] = aB(0xff), M[aA(0xc8)] = function (a3, a4) {
            return a3 !== a4;
        }, M[aA(0xef)] = aB(0xeb), M[aB(0x86)] = aB(0xfe), M[aB(0x88)] = aA(0xe3), M[aA(0x104)] = function (a3, a4) {
            return a3 && a4;
        }, M[aB(0xa7)] = aB(0x9d), M[aB(0xe0)] = aB(0xee), M[aA(0xb1)] = aB(0xaa);
        const N = M;
        let O;
        N[aB(0xba)](L, N[aB(0x7e)]) ? O = J[aB(0xd5)] : O = J[aB(0x71)][aA(0xd5)];
        if (N[aB(0xe2)](L, N[aA(0x70)]) && J && O) {
            const a3 = {};
            a3[aB(0xae)] = E['id'], a3[aA(0x7c)] = J[aA(0x71)]?.['id'];
            const a4 = {};
            a4[aB(0x8d)] = a3;
            const a5 = await CampaignContacts_1[aB(0x7b)][aA(0xfa)](a4);
            if (a5?.['id']) {
                if (N[aB(0xb9)](N[aB(0x91)], N[aB(0xf7)])) {
                    const a6 = {};
                    return a6[aA(0xe6) + aA(0xca)] = !![], a6;
                } else
                    a4 = f[aB(0xd5)];
            }
        }
        if (J && J[aA(0xd5)]) {
            if (N[aA(0x89)](N[aB(0x90)], N[aB(0x90)])) {
                const a8 = {};
                a8[aA(0x7c)] = J[aA(0x71)]?.['id'];
                const a9 = {};
                a9[aA(0x8d)] = a8, a9[aA(0x9a)] = [N[aB(0xc9)]];
                const aa = await Message_1[aB(0x7b)][aA(0xfa)](a9);
                if (N[aB(0xba)](aa?.[aA(0xe4)]?.[aB(0x8c)], N[aB(0xea)]) && N[aB(0xda)](aa?.[aA(0xe4)][aA(0xd6) + 'e'], J[aA(0xd9)])) {
                    const ab = aa[aB(0xe4)];
                    return ab[aA(0xdc) + aA(0xca)] = !![], ab;
                }
            } else
                e = f[aA(0x71)][aA(0xd5)];
        }
        const P = {
                [sequelize_1['Op']['or']]: [
                    N[aB(0xf5)],
                    N[aA(0x85)]
                ]
            }, Q = {};
        Q[aA(0x8c)] = P, Q[aA(0xc4)] = H, Q[aB(0xa4)] = F, Q[aB(0xae)] = I ? I['id'] : E['id'];
        const R = {};
        R[aA(0x9b)] = Contact_1[aA(0x7b)], R['as'] = N[aA(0xce)], R[aB(0x9a)] = [
            N[aB(0xec)],
            N[aA(0x8b)],
            {
                'association': N[aB(0xf6)],
                'attributes': [
                    'id',
                    N[aB(0xbb)]
                ]
            }
        ];
        const S = {};
        S[aB(0x9b)] = User_1[aB(0x7b)], S['as'] = N[aA(0x92)], S[aA(0xd3)] = [
            'id',
            N[aB(0xbb)]
        ];
        const T = {};
        T[aB(0x108) + 'n'] = N[aB(0x70)], T[aA(0xd3)] = [
            'id',
            N[aB(0xbb)],
            N[aB(0x76)]
        ];
        const U = {};
        U[aA(0x8d)] = Q, U[aA(0x9a)] = [
            R,
            S,
            T
        ];
        let V = await Ticket_1[aA(0x7b)][aB(0xfa)](U);
        if (V) {
            G = [
                N[aA(0x79)],
                N[aB(0xed)],
                N[aB(0x7e)],
                N[aA(0xb7)]
            ][aA(0x80)](L) && N[aA(0xcf)](G, 0x2d * 0xa7 + 0x129e + 0x1 * -0x2ff9) ? G += V[aB(0xd8) + aA(0x8e)] : G;
            const ad = {};
            ad[aB(0xd8) + aB(0x8e)] = G, await V[aA(0x75)](ad);
            const ae = {};
            return ae[aA(0xc4)] = H, ae[aA(0xfb)] = N[aB(0x83)], ae[aA(0xb4)] = V, (0xdd5 * -0x1 + 0x8 * 0x19b + 0xfd, socketEmit_1[aA(0x7b)])(ae), V;
        }
        if (I) {
            const af = {};
            af[aA(0xae)] = I['id'], af[aA(0xc4)] = H, af[aA(0xa4)] = F;
            const ag = {};
            ag[aB(0x8d)] = af, ag[aB(0x87)] = [[
                    N[aA(0xb0)],
                    N[aB(0x98)]
                ]], ag[aA(0x9a)] = [
                {
                    'model': Contact_1[aA(0x7b)],
                    'as': N[aA(0xce)],
                    'include': [
                        N[aB(0xec)],
                        N[aB(0x8b)],
                        {
                            'association': N[aB(0xf6)],
                            'attributes': [
                                'id',
                                N[aB(0xbb)]
                            ]
                        }
                    ]
                },
                {
                    'model': User_1[aA(0x7b)],
                    'as': N[aB(0x92)],
                    'attributes': [
                        'id',
                        N[aA(0xbb)]
                    ]
                },
                {
                    'association': N[aA(0x70)],
                    'attributes': [
                        'id',
                        N[aB(0xbb)],
                        N[aA(0x76)]
                    ]
                }
            ], V = await Ticket_1[aB(0x7b)][aA(0xfa)](ag);
            if (V) {
                if (N[aB(0xf4)](N[aB(0xf8)], N[aA(0xf8)])) {
                    const ai = {};
                    return ai[aB(0x7b)] = Q, g && h[aA(0x73)] ? P : ai;
                } else {
                    const ai = {};
                    ai[aB(0x8c)] = N[aB(0x85)], ai[aB(0xfd)] = null, ai[aA(0xd8) + aA(0x8e)] = G, await V[aA(0x75)](ai);
                    const aj = {};
                    return aj[aA(0xc4)] = H, aj[aA(0xfb)] = N[aA(0x83)], aj[aA(0xb4)] = V, (0x86 * 0x22 + 0x40 * -0x50 + -0x5e * -0x6, socketEmit_1[aB(0x7b)])(aj), V;
                }
            }
        } else {
            if (N[aB(0xf4)](N[aA(0xbf)], N[aA(0xbf)])) {
                const al = {};
                return al[aB(0xe6) + aA(0xca)] = !![], al;
            } else {
                const al = {
                        [sequelize_1['Op']['in']]: [
                            N[aB(0xf5)],
                            N[aA(0x85)]
                        ]
                    }, am = {};
                am[aA(0x8c)] = al, am[aA(0xc4)] = H, am[aA(0xa4)] = F, am[aB(0xae)] = E['id'];
                const an = {};
                an[aB(0x8d)] = am, an[aA(0x87)] = [[
                        N[aB(0xb0)],
                        N[aA(0x98)]
                    ]], an[aA(0x9a)] = [
                    {
                        'model': Contact_1[aB(0x7b)],
                        'as': N[aB(0xce)],
                        'include': [
                            N[aB(0xec)],
                            N[aB(0x8b)],
                            {
                                'association': N[aB(0xf6)],
                                'attributes': [
                                    'id',
                                    N[aB(0xbb)]
                                ]
                            }
                        ]
                    },
                    {
                        'model': User_1[aA(0x7b)],
                        'as': N[aB(0x92)],
                        'attributes': [
                            'id',
                            N[aA(0xbb)]
                        ]
                    },
                    {
                        'association': N[aA(0x70)],
                        'attributes': [
                            'id',
                            N[aA(0xbb)],
                            N[aB(0x76)]
                        ]
                    }
                ], V = await Ticket_1[aA(0x7b)][aA(0xfa)](an);
                if (V) {
                    const ao = {};
                    ao[aB(0x8c)] = N[aB(0x85)], ao[aA(0xfd)] = null, ao[aA(0xd8) + aA(0x8e)] = G, await V[aA(0x75)](ao);
                    const ap = {};
                    return ap[aB(0xc4)] = H, ap[aA(0xfb)] = N[aB(0x83)], ap[aA(0xb4)] = V, (0x10 * -0x1f + -0x696 * 0x1 + 0x886, socketEmit_1[aA(0x7b)])(ap), V;
                }
            }
        }
        const W = N[aB(0xba)]((await (0x448 * 0x9 + -0xc4c + -0x5c * 0x49, ListSettingsService_1[aA(0x7b)])(H))?.[aA(0xd2)](aq => aq[aB(0x71)] === aB(0xf2) + aA(0x7f) + 'ts')?.[aB(0xde)], N[aA(0xd1)]) || ![], X = {};
        X[aA(0xae)] = I ? I['id'] : E['id'], X[aA(0x8c)] = N[aA(0x85)], X[aA(0x82)] = !!I, X[aB(0xd8) + aA(0x8e)] = G, X[aA(0xa4)] = F, X[aB(0xc4)] = H, X[aB(0x78)] = L;
        const Y = X;
        if (W && E['id']) {
            const aq = E, ar = await aq[aA(0xbc)]();
            ar && ar[-0x8c4 + 0xca + 0x7fa * 0x1]?.['id'] && (Y[aA(0x8c)] = N[aA(0xf5)], Y[aA(0xfd)] = ar[-0x1 * -0xe71 + 0x9e0 + -0x5 * 0x4dd]['id'], Y[aA(0x94) + aB(0xb5)] = new Date()[aA(0x102)]());
        }
        J && (N[aB(0xc8)](N[aA(0xef)], N[aB(0x86)]) ? Y[aB(0xd6) + 'e'] = await (-0xe7e + -0x25 * 0xb3 + -0x285d * -0x1, VerifyContactBaileys_1[aB(0xc3) + aB(0xf9)])(J) : (h[aB(0x8c)] = N[aA(0xf5)], P[aA(0xfd)] = Q[-0x1831 + 0x1f5b + -0x72a]['id'], R[aA(0x94) + aB(0xb5)] = new S()[aA(0x102)]()));
        const Z = await Ticket_1[aA(0x7b)][aA(0xe3)](Y), a0 = {};
        a0[aA(0xa1)] = Z['id'], a0[aB(0xfb)] = N[aA(0x88)], await (0x1 * 0x25bb + 0x3 * 0x48b + -0x335c, CreateLogTicketService_1[aA(0x7b)])(a0);
        if (N[aA(0x104)](J, !O) || !Z[aB(0xfd)] || K) {
            if (N[aA(0xc8)](N[aA(0xa7)], N[aA(0xe0)]))
                await (-0x8a9 * -0x1 + -0x1b3 + -0x6f6, CheckChatBotFlowWelcome_1[aA(0x7b)])(Z);
            else {
                const au = d[aB(0xe4)];
                return au[aA(0xdc) + aB(0xca)] = !![], au;
            }
        }
        const a1 = {};
        a1['id'] = Z['id'], a1[aA(0xc4)] = H, V = await (0x3 * 0x3c0 + -0xca * -0x2f + 0x1 * -0x3056, ShowTicketService_1[aB(0x7b)])(a1), V[aB(0x97) + 'ue'](N[aB(0xb1)], !![]);
        const a2 = {};
        return a2[aB(0xc4)] = H, a2[aA(0xfb)] = N[aB(0x83)], a2[aB(0xb4)] = V, (-0x24 * -0xfb + -0x3fb + -0x1f51 * 0x1, socketEmit_1[aA(0x7b)])(a2), V;
    };
exports[ax(0x7b)] = FindOrCreateTicketService;
function a() {
    const aC = [
        'sequelize',
        'GYtyO',
        'etsToWalle',
        'includes',
        'Services/L',
        'isGroup',
        'ZlZCK',
        'DESC',
        'QZfSG',
        'WRWRF',
        'order',
        'fmEFQ',
        'EYdpi',
        'isDeleted',
        'OUNhI',
        'status',
        'where',
        'ages',
        'DXsFr',
        'lIQpj',
        'REYnn',
        'EUpEt',
        'messenger',
        'startedAtt',
        'VBibv',
        'ls/Message',
        'setDataVal',
        'YrZXp',
        '1288404uHEsEC',
        'include',
        'model',
        'hWoqu',
        'pGqUM',
        'etService',
        'yWnwB',
        'wallets',
        'ticketId',
        'vice',
        '../Setting',
        'whatsappId',
        'updatedAt',
        'telegram',
        'OpKFq',
        'ls/Contact',
        '114589ARlrXl',
        'isCreated',
        'open',
        '25522PWllFj',
        './ShowTick',
        'contactId',
        'ate',
        'ZgAyd',
        'LXtJC',
        '../../mode',
        'vices/help',
        'payload',
        'endanceAt',
        'ls/Ticket',
        'sWczp',
        'ls/Campaig',
        'xrbRP',
        'kCHOS',
        'zbIPF',
        'getWallets',
        '../../help',
        '565llfsCj',
        'PnNEJ',
        'closed',
        'ers/socket',
        'ticket:upd',
        'getBodyMes',
        'tenantId',
        '../WbotSer',
        'Welcome',
        'nContacts',
        'YLiUs',
        'xYhQn',
        'Message',
        'waba',
        'user',
        'instagram',
        'zsmKd',
        'PyhgE',
        'istSetting',
        'rkpsr',
        'find',
        'attributes',
        'clqzk',
        'fromMe',
        'lastMessag',
        '360640yCYLWN',
        'unreadMess',
        'body',
        'EDHHO',
        './CreateLo',
        'isFarewell',
        '92oDcwfH',
        'value',
        '7592321ewSuFa',
        'CZIIx',
        '10VISQGI',
        'MKCXy',
        'create',
        'ticket',
        'tags',
        'isCampaign',
        'gTicketSer',
        'hatBotFlow',
        'ContactBai',
        'nigvN',
        'tYzCH',
        'DLKsM',
        'QkHXB',
        'hudvS',
        'Vyepz',
        'sService',
        'whatsapp',
        'DirectTick',
        'defineProp',
        'pSysf',
        'sNiUL',
        'PNTYj',
        'lPsdT',
        'LsRQo',
        'sage',
        'findOne',
        'type',
        '54MvhaSq',
        'userId',
        'zdUIF',
        'enabled',
        'erty',
        'name',
        'getTime',
        'ls/User',
        'TxTCb',
        'ers/CheckC',
        'Emit',
        '__importDe',
        'associatio',
        'ers/Verify',
        'leys',
        '9532MUvfRQ',
        'contact',
        'ccFlS',
        'key',
        '24915LsBMSC',
        '__esModule',
        'fault',
        'update',
        'Ynhgg',
        'pending',
        'channel',
        'evSfh',
        'extraInfo',
        'default',
        'messageId'
    ];
    a = function () {
        return aC;
    };
    return a();
}