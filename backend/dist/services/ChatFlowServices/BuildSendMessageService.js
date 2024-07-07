'use strict';
function a() {
    const P = [
        'substr',
        'BWWDI',
        'indexOf',
        'contact',
        '2475891TdPdat',
        'VRRDE',
        'quotedMsg',
        'erty',
        'ERR_CREATI',
        '__importDe',
        'whatsappId',
        'error',
        '566076jKGXaG',
        'tenantId',
        'message',
        'NG_MESSAGE',
        'update',
        'contactId',
        'payload',
        's/logger',
        'UGwfP',
        'Emit',
        's/queueVal',
        '977934ciCUcT',
        'chat',
        'fault',
        'model',
        'pupa',
        'rZgdY',
        'pending',
        'BuildSendM',
        '34MpAjzJ',
        'where',
        '992335ACuMeO',
        'dXPYg',
        'mediaType',
        'MediaField',
        'protocol',
        'ls/Ticket',
        'chat:creat',
        'bot',
        's/pupa',
        'MQLUN',
        'essageServ',
        'uPGfP',
        'length',
        '_SYSTEM',
        'type',
        '../../mode',
        'acplv',
        'idation',
        'getTime',
        '__esModule',
        '7FdEeWc',
        'include',
        'name',
        'mediaUrl',
        'split',
        'xzLwg',
        '914328vuIVgE',
        'data',
        '../../util',
        'zKMGD',
        '190438jRRvOG',
        'ice',
        'value',
        '24981cFMNvQ',
        'ls/Message',
        'defineProp',
        'body',
        'findByPk',
        'ticket',
        'logger',
        'default',
        'WMMwZ',
        'create',
        'aEUMN',
        'ers/socket',
        '../../help'
    ];
    a = function () {
        return P;
    };
    return a();
}
const K = b, L = b;
(function (c, d) {
    const I = b, J = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(I(0x178)) / (0x1095 + 0x24a8 + -0x4 * 0xd4f) + parseInt(J(0x1a7)) / (-0x16ba + -0x95 * -0x39 + -0xa71) * (-parseInt(J(0x17b)) / (-0x17ce + 0x1d * -0x86 + 0x26ff)) + -parseInt(J(0x194)) / (0xadf * -0x3 + 0x18fc + 0x7a5) + parseInt(J(0x15a)) / (-0x2 * -0xcb5 + 0x3 * -0xa4c + 0x57f * 0x1) + -parseInt(J(0x19f)) / (0xe07 + -0x1d70 + 0xf6f) * (parseInt(I(0x16e)) / (-0x95 * 0x13 + 0x329 * 0x2 + 0x14 * 0x3d)) + -parseInt(I(0x174)) / (0x1a0f + -0x1 * -0x655 + -0x205c) + parseInt(I(0x18c)) / (-0x1 * 0x1863 + -0x1 * 0x205d + 0x38c9);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x152aa + -0xba50 + 0xfc84));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x233 * -0x4 + 0x235b + 0x2cd * -0x9);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[K(0x191) + K(0x1a1)] || function (c) {
    const M = K;
    return c && c[M(0x16d)] ? c : { 'default': c };
};
const k = {};
k[L(0x17a)] = !![], Object[K(0x17d) + L(0x18f)](exports, K(0x16d), k);
const pupa_1 = require(L(0x176) + L(0x162)), logger_1 = require(L(0x176) + L(0x19b)), Ticket_1 = __importDefault(require(K(0x169) + K(0x15f))), Message_1 = __importDefault(require(L(0x169) + K(0x17c))), socketEmit_1 = __importDefault(require(L(0x187) + K(0x186) + L(0x19d))), queueValidation_1 = __importDefault(require(K(0x176) + L(0x19e) + K(0x16b))), BuildSendMessageService = async ({
        msg: m,
        tenantId: n,
        ticket: o,
        userId: p
    }) => {
        const N = K, O = L, q = {};
        q[N(0x19c)] = N(0x1a0), q[O(0x18d)] = O(0x161), q[O(0x185)] = N(0x1a5), q[N(0x163)] = function (t, u) {
            return t === u;
        }, q[N(0x15b)] = O(0x15d), q[N(0x173)] = function (t, u) {
            return t - u;
        }, q[N(0x189)] = N(0x180), q[O(0x16a)] = O(0x18b), q[O(0x165)] = O(0x18e), q[O(0x1a4)] = N(0x190) + O(0x197) + N(0x167), q[O(0x183)] = N(0x160) + 'e', q[N(0x177)] = O(0x1a6) + N(0x164) + O(0x179);
        const r = q, s = {
                'ticketId': o['id'],
                'body': '',
                'contactId': o[N(0x199)],
                'fromMe': !![],
                'read': !![],
                'mediaType': r[O(0x19c)],
                'mediaUrl': undefined,
                'timestamp': new Date()[O(0x16c)](),
                'quotedMsgId': undefined,
                'userId': p,
                'scheduleDate': undefined,
                'sendType': r[O(0x18d)],
                'status': r[N(0x185)],
                'tenantId': n
            };
        try {
            if (r[N(0x163)](m[O(0x168)], r[O(0x15b)]) && m[O(0x175)][N(0x171)]) {
                const t = m[O(0x175)][N(0x171)][N(0x172)]('/'), u = {
                        ...s,
                        'body': m[N(0x175)][N(0x170)],
                        'mediaUrl': t[r[N(0x173)](t[N(0x166)], 0x2 * -0xadb + 0x1 * 0x8de + 0xb * 0x12b)],
                        'mediaType': m[O(0x175)][N(0x168)] ? m[N(0x175)]?.[N(0x168)][N(0x188)](-0x11 * -0x220 + 0xc61 * 0x3 + 0x25d * -0x1f, m[N(0x175)][O(0x168)][N(0x18a)]('/')) : r[O(0x19c)]
                    }, v = await Message_1[O(0x182)][N(0x184)](u), w = {};
                w[O(0x195)] = n;
                const x = {};
                x[N(0x1a2)] = Ticket_1[O(0x182)], x['as'] = r[O(0x189)], x[N(0x1a8)] = w, x[N(0x16f)] = [r[O(0x16a)]];
                const y = await Message_1[N(0x182)][O(0x17f)](v['id'], {
                    'include': [
                        x,
                        {
                            'model': Message_1[N(0x182)],
                            'as': r[O(0x165)],
                            'include': [r[N(0x16a)]]
                        }
                    ]
                });
                if (!y)
                    throw new Error(r[N(0x1a4)]);
                await o[O(0x198)]({
                    'lastMessage': y[O(0x17e)],
                    'lastMessageAt': new Date()[N(0x16c)]()
                }), await (-0x11 * 0x186 + -0x21bb + 0x3ba1, queueValidation_1[O(0x182)])(o[O(0x192)], o[N(0x195)], [y]);
                const z = {};
                z[O(0x195)] = n, z[N(0x168)] = r[N(0x183)], z[O(0x19a)] = y, (-0x32b * -0x4 + 0x16a7 * -0x1 + -0x7 * -0x16d, socketEmit_1[O(0x182)])(z);
            } else {
                const A = {};
                A[O(0x15e)] = o[O(0x15e)], A[O(0x170)] = o[N(0x18b)][N(0x170)], m[N(0x175)][N(0x196)] = (0x808 * -0x2 + 0xe0d + 0x203, pupa_1[N(0x1a3)])(m[N(0x175)][O(0x196)] || '', A);
                const B = { ...s };
                B[N(0x17e)] = m[N(0x175)][N(0x196)], B[N(0x15c)] = r[N(0x19c)];
                const C = await Message_1[N(0x182)][N(0x184)](B), D = {};
                D[N(0x195)] = n;
                const E = {};
                E[N(0x1a2)] = Ticket_1[N(0x182)], E['as'] = r[N(0x189)], E[N(0x1a8)] = D, E[O(0x16f)] = [r[O(0x16a)]];
                const F = await Message_1[O(0x182)][N(0x17f)](C['id'], {
                    'include': [
                        E,
                        {
                            'model': Message_1[O(0x182)],
                            'as': r[O(0x165)],
                            'include': [r[N(0x16a)]]
                        }
                    ]
                });
                if (!F)
                    throw new Error(r[N(0x1a4)]);
                await o[O(0x198)]({
                    'lastMessage': F[O(0x17e)],
                    'lastMessageAt': new Date()[N(0x16c)](),
                    'answered': !![]
                }), await (-0x250c + 0xd * 0x59 + -0x1 * -0x2087, queueValidation_1[O(0x182)])(o[N(0x192)], o[O(0x195)], [F]);
                const G = {};
                G[O(0x195)] = n, G[N(0x168)] = r[N(0x183)], G[O(0x19a)] = F, (0x1317 + -0x1 * 0xc92 + 0x1 * -0x685, socketEmit_1[N(0x182)])(G);
            }
        } catch (H) {
            logger_1[O(0x181)][O(0x193)](r[O(0x177)], H);
        }
    };
exports[K(0x182)] = BuildSendMessageService;