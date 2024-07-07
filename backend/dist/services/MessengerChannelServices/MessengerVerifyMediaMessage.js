'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0xd5)) / (0xff2 * 0x2 + -0x18a * -0x7 + -0x2aa9) * (parseInt(y(0xb9)) / (0x5a4 + 0x1 * 0x552 + -0x2 * 0x57a)) + parseInt(y(0xb5)) / (0x8a5 * -0x4 + -0xb40 + 0x5 * 0x92b) + parseInt(y(0xce)) / (-0x168e + -0x154 + 0x13 * 0x142) + parseInt(x(0x9a)) / (0xc7 + 0x6d4 + 0x1 * -0x796) + parseInt(x(0x98)) / (-0x515 + 0x229d * -0x1 + 0x4f7 * 0x8) + parseInt(y(0xca)) / (0x14df * 0x1 + 0x8e7 + -0x1dbf) * (parseInt(x(0xab)) / (-0xfd + -0xba7 + -0x4 * -0x32b)) + -parseInt(x(0xe0)) / (0x2192 + -0x2 * -0x120e + -0x45a5) * (parseInt(y(0x99)) / (0x1513 * -0x1 + -0x1 * -0x10b4 + 0x469 * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x9a441 + -0x2 * -0x40d71 + 0xca05 * -0xe));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1d90 + 0x147a * 0x1 + 0x9e5 * -0x5);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const N = [
        'received',
        'NHppQ',
        'data',
        '1MDOlif',
        'parse',
        'POTCe',
        'update',
        'tedForMess',
        'ageId',
        'text',
        'PvthM',
        'kFxDa',
        'type',
        'eStream',
        '108sJhgaL',
        'wQdIE',
        '__importDe',
        '__esModule',
        'all',
        'YIOoR',
        'parameters',
        'Services/C',
        'reateMessa',
        '2114184gqfdir',
        '1517770ltNopb',
        '3589040APGoHA',
        'createWrit',
        '../Message',
        'content-ty',
        'defineProp',
        'qbwin',
        'finish',
        'payload',
        'value',
        'axios',
        'jvxnA',
        'message_id',
        'public',
        'geService',
        'erty',
        'map',
        'sposition',
        '7400TYPGSL',
        'error',
        'path',
        '../../help',
        'fault',
        'attachment',
        'timestamp',
        'LOAD',
        'mid',
        'message',
        '2165553pFWzpq',
        'default',
        'responseTy',
        'getTime',
        '518826ogWYby',
        'ers/getQuo',
        'zncib',
        'split',
        'fromMe',
        'join',
        'reply_to',
        'content-di',
        'SuSfI',
        'messageDat',
        'GET',
        'JRaGV',
        'method',
        'tenantId',
        'filename',
        'dhlvz',
        'pipe',
        '5327AfLmMe',
        'ERROR\x20DONW',
        'url',
        'stream',
        '95176bCoFpm',
        'HZxkr',
        'OTUZc',
        'headers'
    ];
    a = function () {
        return N;
    };
    return a();
}
var __importDefault = this && this[z(0x91) + A(0xaf)] || function (c) {
    const B = z;
    return c && c[B(0x92)] ? c : { 'default': c };
};
const w = {};
w[z(0xa2)] = !![], Object[z(0x9e) + z(0xa8)](exports, z(0x92), w);
const path_1 = require(A(0xad)), axios_1 = __importDefault(require(A(0xa3))), fs_1 = require('fs'), content_disposition_1 = __importDefault(require(z(0xc0) + z(0xaa))), CreateMessageService_1 = __importDefault(require(A(0x9c) + A(0x96) + z(0x97) + A(0xa7))), getQuotedForMessageId_1 = __importDefault(require(z(0xae) + z(0xba) + z(0xd9) + A(0xda))), downloadFile = async (e, f) => {
        const C = z, D = A, g = {
                'OTUZc': C(0xcb) + D(0xb2),
                'HZxkr': function (o, p) {
                    return o(p);
                },
                'JRaGV': D(0xa0),
                'jvxnA': D(0xac),
                'kFxDa': D(0xc3),
                'zncib': D(0xcd),
                'POTCe': D(0xc0) + C(0xaa),
                'NHppQ': C(0x9d) + 'pe',
                'PvthM': C(0xa6)
            }, h = {};
        h[D(0xcc)] = e, h[D(0xc5)] = g[C(0xdd)], h[C(0xb7) + 'pe'] = g[C(0xbb)];
        const i = await (-0x23d * -0x6 + -0x2 * -0x833 + -0x2 * 0xeea, axios_1[C(0xb6)])(h), j = {};
        j[C(0x95)] = {};
        const k = i[D(0xd1)][g[D(0xd7)]] ? content_disposition_1[C(0xb6)][D(0xd6)](i[C(0xd1)][g[C(0xd7)]] || '') : j;
        let l = '';
        const m = k?.[D(0x95)]?.[C(0xc7)];
        if (m) {
            const o = k[C(0x95)][C(0xc7)];
            l = new Date()[D(0xb8)]() + '-' + o;
        } else {
            const p = i[D(0xd1)][g[D(0xd3)]], q = p[D(0xbc)]('/')[-0x1c24 + 0x1d11 + -0xec];
            l = f + '-' + new Date()[C(0xb8)]() + '.' + q;
        }
        const n = (0x1 * -0x3bf + 0xfc5 + -0xc06, path_1[D(0xbe)])(__dirname, '..', '..', '..', g[D(0xdc)], l);
        return await new Promise((r, s) => {
            const E = C, G = D, t = {
                    'qbwin': g[E(0xd0)],
                    'dhlvz': function (u, v) {
                        const F = E;
                        return g[F(0xcf)](u, v);
                    }
                };
            i[G(0xd4)][E(0xc9)]((-0x3a6 * -0xa + 0x2e4 * 0xb + 0x73 * -0x98, fs_1[E(0x9b) + E(0xdf)])(n))['on'](g[G(0xc4)], async () => r(l))['on'](g[G(0xa4)], u => {
                const H = E, I = E;
                console[H(0xac)](t[I(0x9f)], u), t[I(0xc8)](s, new Error(u));
            });
        }), l;
    }, MessengerVerifyMediaMessage = async (c, d, e, f) => {
        const J = z, K = z, g = {
                'wQdIE': function (i, j, k) {
                    return i(j, k);
                },
                'SuSfI': function (i, j) {
                    return i > j;
                },
                'YIOoR': J(0xd2)
            };
        let h;
        await Promise[K(0x93)](d[J(0xb4)][J(0xb0) + 's'][J(0xa9)](async (i, j) => {
            const L = J, M = J, k = e['id'] + '_' + d[L(0xa5)];
            h = await g[M(0xe1)](downloadFile, i[M(0xa1)][L(0xcc)], k);
            let l;
            if (d?.[M(0xb4)]?.[M(0xbf)]?.[L(0xb3)]) {
                const o = await (0x2265 + 0xe84 + 0x13 * -0x293, getQuotedForMessageId_1[M(0xb6)])(d[L(0xb4)][L(0xbf)][M(0xb3)], e[M(0xc6)]);
                l = o?.['id'] || undefined;
            }
            const m = {
                'messageId': g[L(0xc1)](j, -0x1cf9 + -0x7a * 0x7 + 0x204f) ? d[L(0xa5)] + '__' + j : d[M(0xa5)] || '',
                'ticketId': e['id'],
                'contactId': f['id'],
                'body': d[L(0xb4)]?.[M(0xdb)] || '',
                'fromMe': d[M(0xbd)],
                'read': ![],
                'mediaUrl': h,
                'mediaType': d[M(0xde)],
                'quotedMsgId': l,
                'timestamp': +d[M(0xb1)],
                'status': g[M(0x94)]
            };
            await e[M(0xd8)]({
                'lastMessage': d[L(0xb4)]?.[M(0xdb)] || h || '',
                'lastMessageAt': new Date()[M(0xb8)](),
                'answered': ![]
            });
            const n = {};
            n[M(0xc2) + 'a'] = m, n[M(0xc6)] = e[L(0xc6)], await (-0x1fab + 0x67f + 0x192c, CreateMessageService_1[M(0xb6)])(n);
        }));
    };
exports[A(0xb6)] = MessengerVerifyMediaMessage;