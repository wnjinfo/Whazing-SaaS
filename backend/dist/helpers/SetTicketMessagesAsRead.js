'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(B(0x1e7)) / (-0x1487 + 0x79d * 0x3 + -0x24f * 0x1) + -parseInt(C(0x1cb)) / (0x1902 + 0x19cc + 0x32cc * -0x1) * (-parseInt(C(0x1b3)) / (0x2 * 0x1016 + -0x8 * 0x150 + -0x15a9)) + -parseInt(B(0x1d4)) / (-0xb33 + -0x1 * -0x2646 + -0x3 * 0x905) + -parseInt(C(0x1d9)) / (-0x5f2 * 0x2 + -0x249f + 0x2 * 0x1844) * (parseInt(C(0x1ac)) / (0xd1a * -0x2 + 0xa5 * -0x33 + 0x3b19)) + -parseInt(C(0x1a9)) / (-0x401 + 0xc66 + 0x1 * -0x85e) + parseInt(B(0x1eb)) / (0x7 * -0x16f + 0x1fd9 + -0x15c8) + parseInt(B(0x1c9)) / (0x22e5 + 0x952 + -0x1d * 0x186) * (-parseInt(C(0x1de)) / (0x2f * 0x7c + -0x876 + -0xe44 * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x33 * -0x1cf9 + -0x7b96 * 0xf + 0x156b30));
var __importDefault = this && this[D(0x1d3) + E(0x1b5)] || function (c) {
    const F = E;
    return c && c[F(0x1d0)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xb59 * -0x3 + -0x6e4 * 0x5 + -0x4625 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[D(0x1a7)] = !![], Object[D(0x1e6) + D(0x1a6)](exports, E(0x1d0), k);
const cache_1 = require(D(0x1f7) + D(0x1cc)), Message_1 = __importDefault(require(D(0x1ee) + D(0x1b2))), logger_1 = require(D(0x1b0) + E(0x1f8)), GetTicketWbotBaileys_1 = __importDefault(require(E(0x1d8) + D(0x1b8) + 'ys')), socketEmit_1 = __importDefault(require(D(0x1e8) + 'it')), SetTicketMessagesAsRead = async m => {
        const G = D, H = D, n = {};
        n[G(0x1ad)] = function (p, q) {
            return p === q;
        }, n[G(0x1d5)] = G(0x1ec), n[H(0x1c7)] = H(0x1b6), n[G(0x1d2)] = H(0x1c0), n[G(0x1dc)] = function (p, q) {
            return p > q;
        }, n[H(0x1c8)] = function (p, q) {
            return p === q;
        }, n[H(0x1b7)] = G(0x1b9), n[H(0x1c1)] = H(0x1c3) + H(0x1c5), n[H(0x1e4)] = H(0x1df) + G(0x1a8);
        const o = n;
        try {
            const p = {};
            p[G(0x1ed) + H(0x1cf)] = 0x0, await m[G(0x1f1)](p), await cache_1[H(0x1ab)][H(0x1bf)](H(0x1d1) + m[G(0x1f0)] + G(0x1af), '0');
            if (o[G(0x1ad)](m[G(0x1f6)], o[H(0x1d5)])) {
                const q = await (0x5 * -0x25b + -0xffa + 0x1bc1, GetTicketWbotBaileys_1[G(0x1f9)])(m), r = {};
                r[G(0x1e3)] = m['id'], r[G(0x1f2)] = ![], r[H(0x1ef)] = ![];
                const s = {};
                s[H(0x1e9)] = r, s[H(0x1ca)] = [[
                        o[H(0x1c7)],
                        o[H(0x1d2)]
                    ]];
                const t = await Message_1[G(0x1f9)][G(0x1c2)](s);
                t[G(0x1e5)](async y => {
                    const I = G, J = H, z = JSON[I(0x1b1)](y[J(0x1ea)]);
                    z[I(0x1ae)] && o[I(0x1ad)](z[I(0x1ae)][J(0x1f2)], ![]) && await q[J(0x1c6) + 'es']([z[J(0x1ae)]]);
                });
                if (o[G(0x1dc)](t[H(0x1c4)], 0x220 + 0x1 * 0xa35 + -0x7 * 0x1c3)) {
                    const y = JSON[H(0x1b1)](JSON[G(0x1d6)](t[0x1b70 + -0x6be + -0x14b2][G(0x1ea)]));
                    if (y[G(0x1ae)] && o[H(0x1c8)](y[G(0x1ae)][H(0x1f2)], ![])) {
                        const z = {};
                        z[G(0x1f3)] = !![], z[H(0x1cd) + 'es'] = [y], await q[G(0x1e1)](z, m[G(0x1e2)][G(0x1aa)] + '@' + (m[G(0x1da)] ? o[G(0x1b7)] : o[G(0x1c1)]));
                    }
                }
                const u = {};
                u[H(0x1ef)] = !![];
                const v = {};
                v[G(0x1e3)] = m['id'], v[G(0x1ef)] = ![];
                const w = {};
                w[H(0x1e9)] = v, await Message_1[G(0x1f9)][G(0x1f1)](u, w);
                const x = {};
                x[G(0x1bd)] = m[G(0x1bd)], x[G(0x1be)] = o[H(0x1e4)], x[H(0x1fa)] = m, (-0x5 * 0x33 + 0x798 + 0x3 * -0x233, socketEmit_1[G(0x1f9)])(x);
            }
        } catch (A) {
            console[H(0x1dd)](A), logger_1[H(0x1ce)][G(0x1f5)](G(0x1e0) + H(0x1bb) + G(0x1db) + G(0x1d7) + H(0x1bc) + G(0x1b4) + H(0x1ba) + G(0x1f4) + A);
        }
    };
exports[E(0x1f9)] = SetTicketMessagesAsRead;
function a() {
    const K = [
        'default',
        'payload',
        'erty',
        'value',
        'ate',
        '7247429jiyvjF',
        'number',
        'cacheLayer',
        '44490zzpZFP',
        'OzQOS',
        'key',
        ':unreads',
        '../utils/l',
        'parse',
        'Message',
        '21xHrstr',
        'ssion\x20disc',
        'fault',
        'createdAt',
        'oUhrs',
        'tWbotBaile',
        'g.us',
        'onnected?\x20',
        'mark\x20messa',
        'hatsApp\x20se',
        'tenantId',
        'type',
        'set',
        'DESC',
        'oMZDm',
        'findAll',
        's.whatsapp',
        'length',
        '.net',
        'readMessag',
        'WZPZX',
        'ryAkv',
        '81gjyEdE',
        'order',
        '112674VwRXYy',
        'che',
        'lastMessag',
        'logger',
        'ages',
        '__esModule',
        'contacts:',
        'MxqID',
        '__importDe',
        '169944XvnYIA',
        'VREOW',
        'stringify',
        'd.\x20Maybe\x20W',
        './GetTicke',
        '75BWZvSy',
        'isGroup',
        'ges\x20as\x20rea',
        'WvQbx',
        'log',
        '205140jVAeID',
        'ticket:upd',
        'Could\x20not\x20',
        'chatModify',
        'contact',
        'ticketId',
        'sypcz',
        'forEach',
        'defineProp',
        '735553cNCxhJ',
        './socketEm',
        'where',
        'dataJson',
        '6357048jbiPiE',
        'whatsapp',
        'unreadMess',
        '../models/',
        'read',
        'contactId',
        'update',
        'fromMe',
        'markRead',
        'Err:\x20',
        'warn',
        'channel',
        '../libs/ca',
        'ogger'
    ];
    a = function () {
        return K;
    };
    return a();
}