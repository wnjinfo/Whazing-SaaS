'use strict';
const K = b, L = b;
(function (c, d) {
    const I = b, J = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(I(0xe2)) / (-0x935 * -0x1 + -0x1a67 + 0x1133 * 0x1) * (parseInt(J(0x9f)) / (-0x8ce + 0x728 * 0x5 + -0x1af8)) + -parseInt(J(0xe9)) / (0x3 * 0x9c7 + -0xeb0 + -0xea2) + -parseInt(I(0xc4)) / (-0x8f6 * 0x3 + -0x9fa * 0x3 + 0x38d4) * (parseInt(J(0xd7)) / (-0x6 * 0x5bc + 0x191 * 0x11 + 0x7cc)) + parseInt(J(0xd4)) / (-0x1 * 0x15f5 + 0xa65 * 0x2 + 0x131) * (parseInt(I(0xb3)) / (0x7 * 0x577 + -0x69e + 0x7 * -0x484)) + parseInt(I(0xa1)) / (-0x74f * 0x1 + -0x1905 + -0x26 * -0xda) + parseInt(I(0xed)) / (0x721 + 0x64f + -0xd67) + parseInt(I(0xe1)) / (-0x22ab + -0x182e + 0x3ae3) * (-parseInt(I(0xc7)) / (0x22cf + -0x1 * 0x1000 + -0x12c4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4576c * 0x1 + -0x1 * -0x24979 + 0x2a35c * 0x2));
var __importDefault = this && this[K(0xc0) + K(0xa9)] || function (c) {
    const M = L;
    return c && c[M(0xc2)] ? c : { 'default': c };
};
const k = {};
k[L(0xe3)] = !![], Object[K(0xc1) + L(0xa5)](exports, L(0xc2), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2088 + 0xf26 * -0x2 + -0x19f);
        let h = e[f];
        return h;
    }, b(c, d);
}
const pupa_1 = require(L(0xce) + K(0xa2)), logger_1 = require(L(0xce) + K(0xe4)), Ticket_1 = __importDefault(require(L(0xb6) + K(0xeb))), Message_1 = __importDefault(require(L(0xb6) + L(0xda))), socketEmit_1 = __importDefault(require(L(0xec) + K(0xb4) + K(0xa8))), queueValidation_1 = __importDefault(require(L(0xce) + K(0xa6) + L(0xc5))), BuildSendMessageService = async ({
        msg: m,
        tenantId: n,
        ticket: o,
        userId: p
    }) => {
        const N = K, O = L, q = {};
        q[N(0xde)] = N(0xb8), q[O(0xe5)] = O(0xb1), q[O(0xdc)] = N(0xcf), q[N(0xdb)] = function (t, u) {
            return t === u;
        }, q[O(0xe6)] = O(0xe7), q[N(0x9e)] = function (t, u) {
            return t - u;
        }, q[N(0xab)] = O(0xd5), q[N(0xc6)] = O(0xac), q[N(0xbf)] = N(0xea), q[O(0xbb)] = N(0xd3) + O(0xbe) + N(0xd8), q[N(0xc9)] = N(0xc8) + 'e', q[N(0x9d)] = O(0xe8) + O(0xca) + O(0xd9);
        const r = q, s = {
                'ticketId': o['id'],
                'body': '',
                'contactId': o[O(0xd1)],
                'fromMe': !![],
                'read': !![],
                'mediaType': r[O(0xde)],
                'mediaUrl': undefined,
                'timestamp': new Date()[N(0xb7)](),
                'quotedMsgId': undefined,
                'userId': p,
                'scheduleDate': undefined,
                'sendType': r[O(0xe5)],
                'status': r[N(0xdc)],
                'tenantId': n
            };
        try {
            if (r[N(0xdb)](m[O(0xcb)], r[N(0xe6)]) && m[O(0xb0)][O(0xad)]) {
                const t = m[O(0xb0)][N(0xad)][O(0xdf)]('/'), u = {
                        ...s,
                        'body': m[N(0xb0)][N(0xcd)],
                        'mediaUrl': t[r[O(0x9e)](t[N(0xdd)], -0x3a1 * -0x8 + 0x1dfa + -0x3b01)],
                        'mediaType': m[O(0xb0)][N(0xcb)] ? m[N(0xb0)]?.[O(0xcb)][O(0xd6)](-0x1156 + -0x2573 + -0xb * -0x4fb, m[N(0xb0)][O(0xcb)][N(0xa0)]('/')) : r[N(0xde)]
                    }, v = await Message_1[O(0xa3)][N(0xd0)](u), w = {};
                w[O(0xb9)] = n;
                const x = {};
                x[N(0xaf)] = Ticket_1[O(0xa3)], x['as'] = r[N(0xab)], x[N(0xbc)] = w, x[O(0xb2)] = [r[O(0xc6)]];
                const y = await Message_1[N(0xa3)][O(0xba)](v['id'], {
                    'include': [
                        x,
                        {
                            'model': Message_1[O(0xa3)],
                            'as': r[O(0xbf)],
                            'include': [r[N(0xc6)]]
                        }
                    ]
                });
                if (!y)
                    throw new Error(r[N(0xbb)]);
                await o[O(0xa7)]({
                    'lastMessage': y[N(0xa4)],
                    'lastMessageAt': new Date()[N(0xb7)]()
                }), await (-0x1269 + 0x2 * -0x26a + -0x9 * -0x295, queueValidation_1[O(0xa3)])(o[O(0xae)], o[N(0xb9)], [y]);
                const z = {};
                z[N(0xb9)] = n, z[N(0xcb)] = r[N(0xc9)], z[O(0xb5)] = y, (-0x23d4 * -0x1 + 0x829 + -0x2bfd, socketEmit_1[O(0xa3)])(z);
            } else {
                const A = {};
                A[O(0xd2)] = o[N(0xd2)], A[N(0xcd)] = o[N(0xac)][O(0xcd)], m[O(0xb0)][O(0xbd)] = (0x2 * 0xec0 + 0x1e80 + -0x300 * 0x14, pupa_1[N(0xaa)])(m[O(0xb0)][N(0xbd)] || '', A);
                const B = { ...s };
                B[N(0xa4)] = m[N(0xb0)][O(0xbd)], B[O(0xe0)] = r[N(0xde)];
                const C = await Message_1[N(0xa3)][N(0xd0)](B), D = {};
                D[N(0xb9)] = n;
                const E = {};
                E[O(0xaf)] = Ticket_1[N(0xa3)], E['as'] = r[N(0xab)], E[O(0xbc)] = D, E[N(0xb2)] = [r[N(0xc6)]];
                const F = await Message_1[N(0xa3)][O(0xba)](C['id'], {
                    'include': [
                        E,
                        {
                            'model': Message_1[N(0xa3)],
                            'as': r[N(0xbf)],
                            'include': [r[N(0xc6)]]
                        }
                    ]
                });
                if (!F)
                    throw new Error(r[O(0xbb)]);
                await o[O(0xa7)]({
                    'lastMessage': F[N(0xa4)],
                    'lastMessageAt': new Date()[O(0xb7)](),
                    'answered': !![]
                }), await (-0x33 * -0x7f + -0xde7 * -0x2 + -0x1 * 0x351b, queueValidation_1[N(0xa3)])(o[O(0xae)], o[O(0xb9)], [F]);
                const G = {};
                G[O(0xb9)] = n, G[N(0xcb)] = r[O(0xc9)], G[O(0xb5)] = F, (0x1 * -0x1a37 + 0x321 + 0x1716, socketEmit_1[O(0xa3)])(G);
            }
        } catch (H) {
            logger_1[O(0xc3)][O(0xcc)](r[O(0x9d)], H);
        }
    };
exports[L(0xa3)] = BuildSendMessageService;
function a() {
    const P = [
        'error',
        'name',
        '../../util',
        'pending',
        'create',
        'contactId',
        'protocol',
        'ERR_CREATI',
        '372348uIDloq',
        'ticket',
        'substr',
        '24655DyhwDU',
        '_SYSTEM',
        'ice',
        'ls/Message',
        'edhuQ',
        'jnJpr',
        'length',
        'imoFS',
        'split',
        'mediaType',
        '3260pUUSik',
        '29527VuyeZd',
        'value',
        's/logger',
        'gnhDf',
        'gOfTA',
        'MediaField',
        'BuildSendM',
        '102330LEcExq',
        'quotedMsg',
        'ls/Ticket',
        '../../help',
        '2020824fasOYH',
        'lXjMA',
        'jnjte',
        '2PHhjtj',
        'indexOf',
        '3331560OXdLOO',
        's/pupa',
        'default',
        'body',
        'erty',
        's/queueVal',
        'update',
        'Emit',
        'fault',
        'pupa',
        'sMify',
        'contact',
        'mediaUrl',
        'whatsappId',
        'model',
        'data',
        'bot',
        'include',
        '42MNxgcU',
        'ers/socket',
        'payload',
        '../../mode',
        'getTime',
        'chat',
        'tenantId',
        'findByPk',
        'NVUMU',
        'where',
        'message',
        'NG_MESSAGE',
        'NtHBC',
        '__importDe',
        'defineProp',
        '__esModule',
        'logger',
        '84yMnySp',
        'idation',
        'DoxCq',
        '23419qOVMVG',
        'chat:creat',
        'XtrLp',
        'essageServ',
        'type'
    ];
    a = function () {
        return P;
    };
    return a();
}