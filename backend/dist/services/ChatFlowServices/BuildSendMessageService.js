'use strict';
const K = b, L = b;
(function (c, d) {
    const I = b, J = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(I(0x8e)) / (0x1da6 + -0xcd5 + -0x10d0) + parseInt(J(0x79)) / (0x10 * -0x18d + 0x11ac + 0x726) * (-parseInt(J(0x78)) / (0x1653 + 0x634 + -0x1c84)) + parseInt(J(0xaf)) / (-0x2561 + 0x9 * 0x2e3 + 0xb6a) * (parseInt(J(0x8a)) / (-0x1dd8 + 0x1286 + -0xb57 * -0x1)) + -parseInt(J(0x6c)) / (-0x2b9 + -0x13 * -0x9c + -0x143 * 0x7) * (parseInt(J(0x96)) / (-0x2159 + 0x2 * 0x411 + -0x86a * -0x3)) + -parseInt(J(0xa5)) / (0x14de + 0x6a0 + -0x1b76 * 0x1) + -parseInt(J(0xaa)) / (0xbad + -0xb4b + -0x59) * (parseInt(I(0x92)) / (-0x865 * 0x1 + -0x2651 + 0x2ec0)) + parseInt(J(0x8d)) / (0xcf * -0x1 + -0xb0f + 0xbe9 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x15819e + 0x40a * 0x106 + -0x11ba * -0x1a8));
var __importDefault = this && this[K(0x94) + L(0x9a)] || function (c) {
    const M = L;
    return c && c[M(0xb3)] ? c : { 'default': c };
};
const k = {};
k[K(0x81)] = !![], Object[K(0xba) + L(0x9d)](exports, K(0xb3), k);
const pupa_1 = require(K(0xae) + L(0x8b)), logger_1 = require(L(0xae) + K(0x98)), Ticket_1 = __importDefault(require(L(0x77) + K(0x95))), Message_1 = __importDefault(require(K(0x77) + K(0x7c))), socketEmit_1 = __importDefault(require(K(0x72) + K(0x91) + K(0xa1))), queueValidation_1 = __importDefault(require(L(0xae) + K(0xa0) + L(0x87))), BuildSendMessageService = async ({
        msg: m,
        tenantId: n,
        ticket: o,
        userId: p
    }) => {
        const N = K, O = K, q = {};
        q[N(0x74)] = O(0x7d), q[O(0x75)] = O(0x83), q[N(0x7f)] = O(0x6f), q[N(0x9f)] = function (t, u) {
            return t === u;
        }, q[O(0xb7)] = O(0xbb), q[O(0x97)] = function (t, u) {
            return t - u;
        }, q[N(0xb5)] = N(0x9b), q[O(0xa3)] = N(0xb1), q[N(0xb2)] = N(0xb6), q[N(0xa4)] = O(0xa6) + O(0x93) + N(0x6e), q[N(0xb0)] = N(0xb4) + 'e', q[O(0x86)] = O(0xa8) + N(0x6d) + N(0xbc);
        const r = q, s = {
                'ticketId': o['id'],
                'body': '',
                'contactId': o[O(0xa2)],
                'fromMe': !![],
                'read': !![],
                'mediaType': r[O(0x74)],
                'mediaUrl': undefined,
                'timestamp': new Date()[O(0x7b)](),
                'quotedMsgId': undefined,
                'userId': p,
                'scheduleDate': undefined,
                'sendType': r[O(0x75)],
                'status': r[O(0x7f)],
                'tenantId': n
            };
        try {
            if (r[N(0x9f)](m[O(0x99)], r[O(0xb7)]) && m[O(0xb8)][N(0x7a)]) {
                const t = m[N(0xb8)][O(0x7a)][N(0x80)]('/'), u = {
                        ...s,
                        'body': m[O(0xb8)][O(0xab)],
                        'mediaUrl': t[r[N(0x97)](t[N(0x90)], 0xa2 * 0x6 + -0x17a9 + 0x13de)],
                        'mediaType': m[O(0xb8)][N(0x99)] ? m[N(0xb8)]?.[N(0x99)][O(0x70)](-0xa * -0x3b5 + 0x9 * -0x3bb + -0x37f, m[N(0xb8)][O(0x99)][O(0xb9)]('/')) : r[O(0x74)]
                    }, v = await Message_1[N(0x71)][O(0x8f)](u), w = {};
                w[N(0x8c)] = n;
                const x = {};
                x[N(0x85)] = Ticket_1[N(0x71)], x['as'] = r[N(0xb5)], x[O(0x9c)] = w, x[N(0xa7)] = [r[O(0xa3)]];
                const y = await Message_1[N(0x71)][O(0x9e)](v['id'], {
                    'include': [
                        x,
                        {
                            'model': Message_1[N(0x71)],
                            'as': r[N(0xb2)],
                            'include': [r[N(0xa3)]]
                        }
                    ]
                });
                if (!y)
                    throw new Error(r[O(0xa4)]);
                await o[O(0x88)]({
                    'lastMessage': y[O(0x7e)],
                    'lastMessageAt': new Date()[O(0x7b)]()
                }), await (0x94d * 0x4 + 0x414 + -0x2948 * 0x1, queueValidation_1[N(0x71)])(o[N(0x89)], o[O(0x8c)], [y]);
                const z = {};
                z[N(0x8c)] = n, z[N(0x99)] = r[N(0xb0)], z[O(0x76)] = y, (-0x1 * -0x11d2 + 0x18fe + 0x55a * -0x8, socketEmit_1[N(0x71)])(z);
            } else {
                const A = {};
                A[N(0x82)] = o[O(0x82)], A[N(0xab)] = o[N(0xb1)][O(0xab)], m[O(0xb8)][N(0xa9)] = (-0xe6 * -0x1d + 0x1 * 0x2306 + -0x3d14, pupa_1[N(0xac)])(m[N(0xb8)][O(0xa9)] || '', A);
                const B = { ...s };
                B[N(0x7e)] = m[O(0xb8)][N(0xa9)], B[O(0x84)] = r[O(0x74)];
                const C = await Message_1[O(0x71)][N(0x8f)](B), D = {};
                D[N(0x8c)] = n;
                const E = {};
                E[O(0x85)] = Ticket_1[N(0x71)], E['as'] = r[O(0xb5)], E[O(0x9c)] = D, E[O(0xa7)] = [r[N(0xa3)]];
                const F = await Message_1[O(0x71)][O(0x9e)](C['id'], {
                    'include': [
                        E,
                        {
                            'model': Message_1[N(0x71)],
                            'as': r[O(0xb2)],
                            'include': [r[N(0xa3)]]
                        }
                    ]
                });
                if (!F)
                    throw new Error(r[O(0xa4)]);
                await o[N(0x88)]({
                    'lastMessage': F[O(0x7e)],
                    'lastMessageAt': new Date()[O(0x7b)](),
                    'answered': !![]
                }), await (0x49f * -0x2 + -0x1 * -0x228f + -0x1951, queueValidation_1[O(0x71)])(o[N(0x89)], o[O(0x8c)], [F]);
                const G = {};
                G[O(0x8c)] = n, G[N(0x99)] = r[N(0xb0)], G[N(0x76)] = F, (-0xefa * -0x1 + 0x798 + -0x1692, socketEmit_1[O(0x71)])(G);
            }
        } catch (H) {
            logger_1[O(0xad)][N(0x73)](r[N(0x86)], H);
        }
    };
exports[K(0x71)] = BuildSendMessageService;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0xfa5 + -0x1 * -0x24b2 + -0x14a1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const P = [
        'findByPk',
        'ffikJ',
        's/queueVal',
        'Emit',
        'contactId',
        'TKvMW',
        'mtkzK',
        '11649320xdskOC',
        'ERR_CREATI',
        'include',
        'BuildSendM',
        'message',
        '2205iUjFJI',
        'name',
        'pupa',
        'logger',
        '../../util',
        '88FRWwym',
        'TBNfT',
        'contact',
        'NBstR',
        '__esModule',
        'chat:creat',
        'ZVazC',
        'quotedMsg',
        'ifNuC',
        'data',
        'indexOf',
        'defineProp',
        'MediaField',
        'ice',
        '6EQsZkR',
        'essageServ',
        '_SYSTEM',
        'pending',
        'substr',
        'default',
        '../../help',
        'error',
        'xhruT',
        'jPNDu',
        'payload',
        '../../mode',
        '57NfjhxN',
        '74794LgsVvZ',
        'mediaUrl',
        'getTime',
        'ls/Message',
        'chat',
        'body',
        'vRaFP',
        'split',
        'value',
        'protocol',
        'bot',
        'mediaType',
        'model',
        'cKjTi',
        'idation',
        'update',
        'whatsappId',
        '118520HRdqZS',
        's/pupa',
        'tenantId',
        '56953226WuvWSM',
        '1396708SatcBi',
        'create',
        'length',
        'ers/socket',
        '12110AbmTfl',
        'NG_MESSAGE',
        '__importDe',
        'ls/Ticket',
        '7373527gONRCH',
        'XdBqk',
        's/logger',
        'type',
        'fault',
        'ticket',
        'where',
        'erty'
    ];
    a = function () {
        return P;
    };
    return a();
}