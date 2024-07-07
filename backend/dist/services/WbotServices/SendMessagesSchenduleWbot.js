'use strict';
const L = b, M = b;
(function (c, d) {
    const J = b, K = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(J(0x11c)) / (0x89c + -0xf52 + 0x23d * 0x3) * (-parseInt(K(0x141)) / (-0xc * -0xa4 + 0xe * -0x13a + -0x1b * -0x5a)) + -parseInt(K(0x177)) / (0x1d7e + 0x2340 + -0x40bb) + parseInt(J(0x155)) / (-0x6fd * -0x1 + -0x3 * -0xccf + -0x2d66) * (parseInt(J(0x191)) / (0x1 * 0x1a23 + -0x15a2 + 0x11f * -0x4)) + parseInt(K(0x121)) / (0xe08 + -0x1 * 0x579 + -0x889) + -parseInt(J(0x181)) / (-0x19fb * -0x1 + -0x26a6 + -0x82 * -0x19) + -parseInt(K(0x173)) / (0xdf3 + 0x1721 + 0x943 * -0x4) + parseInt(J(0x150)) / (-0x19d1 + 0x240c + -0xa32) * (parseInt(J(0x146)) / (-0x5 * 0xc1 + -0x1591 + 0x1960));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x10abf0 + 0x1037e1 + -0x154fc5));
var __importDefault = this && this[L(0x152) + L(0x12c)] || function (c) {
    const N = M;
    return c && c[N(0x168)] ? c : { 'default': c };
};
const k = {};
k[M(0x125)] = !![], Object[M(0x16a) + M(0x189)](exports, L(0x168), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x5 * -0x62e + 0x32 * 0x6b + -0x32b5);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(M(0x178)), Message_1 = __importDefault(require(L(0x17e) + M(0x118))), logger_1 = require(M(0x18c) + L(0x186)), wbot_baileys_1 = require(M(0x180) + M(0x127) + M(0x192)), path_1 = require(L(0x14c)), SendMessagesSystemWbotBaileys_1 = require(L(0x153) + M(0x14d) + L(0x119) + 's'), sleepRandomTime_1 = require(M(0x18c) + M(0x12f) + M(0x188)), Ticket_1 = __importDefault(require(L(0x17e) + M(0x11b))), SendMessagesSchenduleWbot = async () => {
        const O = M, P = M, g = {
                'eFmnQ': function (p, q) {
                    return p <= q;
                },
                'kihKO': O(0x14a),
                'VAQoQ': P(0x169) + O(0x129),
                'LMKxx': function (p, q) {
                    return p !== q;
                },
                'AUWJt': O(0x16b),
                'byFfl': P(0x185),
                'fodPW': P(0x145) + P(0x13b) + O(0x132),
                'JbmFx': O(0x145) + P(0x11a) + O(0x17f),
                'HjTiS': O(0x143),
                'ylvlD': P(0x162) + P(0x12e) + P(0x18a),
                'tgyot': function (p, q) {
                    return p(q);
                },
                'rFFDe': O(0x145) + P(0x17b) + 'e',
                'lGhpU': function (p, q) {
                    return p === q;
                },
                'EbGeM': O(0x11e),
                'KuyQw': P(0x18b),
                'AfTyp': P(0x12d),
                'NnuJr': P(0x128),
                'haHbd': P(0x12a),
                'tXlxp': P(0x167),
                'cvlYt': P(0x17d),
                'CQaPz': P(0x16e)
            }, h = { [sequelize_1['Op']['is']]: null }, i = {};
        i[O(0x161)] = !![], i[P(0x16f)] = h, i[O(0x160)] = g[O(0x148)];
        const j = i, l = {};
        l[P(0x15e)] = Ticket_1[P(0x15d)], l['as'] = g[O(0x183)], l[O(0x11f)] = {
            [sequelize_1['Op']['or']]: {
                'status': { [sequelize_1['Op']['ne']]: g[P(0x15a)] },
                'isFarewellMessage': !![]
            }
        }, l[O(0x13a)] = [g[P(0x123)]], l[O(0x11f)][P(0x17a)] = g[P(0x190)];
        const m = {};
        m[O(0x11f)] = j, m[O(0x13a)] = [l], m[P(0x18e)] = [[
                g[P(0x144)],
                g[P(0x17c)]
            ]];
        const n = await Message_1[O(0x15d)][O(0x187)](m);
        let o;
        n[P(0x147)](async p => {
            const Q = P, R = P;
            if (p[Q(0x175) + 'te'] && g[R(0x13d)](p[Q(0x175) + 'te'][R(0x120)](), new Date()[R(0x120)]())) {
                logger_1[R(0x117)][Q(0x170)](Q(0x149) + Q(0x159) + Q(0x15f) + p['id'] + (R(0x137) + '\x20') + p[Q(0x158)]);
                const q = (0x2472 + -0x1e0b + -0x667, wbot_baileys_1[Q(0x130)])(p[Q(0x12d)][R(0x15b)]), r = p[R(0x12d)][Q(0x167)][Q(0x184)], s = p[R(0x12d)][Q(0x174)] ? g[Q(0x135)] : g[Q(0x194)], t = r + '@' + s;
                try {
                    if (g[Q(0x11d)](p[R(0x138)], g[R(0x15c)]) && p[Q(0x142)]) {
                        const z = (-0x162c + 0x8be + -0x1 * -0xd6e, path_1[R(0x164)])(__dirname, '..', '..', '..', g[R(0x16c)]), A = (-0x5f * -0x19 + -0x53 * -0x6b + -0x8 * 0x57f, path_1[Q(0x164)])(z, p[Q(0x142)]), B = await (-0x3 * 0xa79 + 0x1 * -0x22db + 0x4246, SendMessagesSystemWbotBaileys_1[Q(0x14f) + Q(0x154)])(p[R(0x142)], A);
                        if (B) {
                            const C = { ...B };
                            o = await q[R(0x145) + 'e'](t, C);
                        }
                        logger_1[R(0x117)][R(0x170)](g[R(0x18f)]);
                    } else {
                        const D = {};
                        D[R(0x124)] = p[Q(0x122)], o = await q[R(0x145) + 'e'](t, D), logger_1[R(0x117)][Q(0x170)](g[R(0x16d)]);
                    }
                    const u = {};
                    u[R(0x16f)] = o[Q(0x151)]['id'], u[R(0x160)] = g[R(0x171)];
                    const v = u, w = { ...v }, x = {};
                    x['id'] = p['id'];
                    const y = {};
                    y[R(0x11f)] = x, await Message_1[R(0x15d)][Q(0x182)](w, y), logger_1[R(0x117)][R(0x170)](g[Q(0x140)]), await (-0x1056 + -0xb * 0x1ca + -0x901 * -0x4, sleepRandomTime_1[R(0x14e) + Q(0x166)])({
                        'minMilliseconds': g[Q(0x134)](Number, process[R(0x18d)][R(0x157) + Q(0x12b)] || -0x223f + 0x1 * 0xa83 + 0x112 * 0x18),
                        'maxMilliseconds': g[Q(0x134)](Number, process[Q(0x18d)][Q(0x172) + R(0x12b)] || 0x27d * 0xd + 0x559 * -0x2 + -0x49d * 0x3)
                    }), logger_1[Q(0x117)][R(0x170)](g[R(0x13e)]);
                } catch (E) {
                    const F = p['id'], G = p[R(0x13c)];
                    if (g[R(0x156)](E[Q(0x136)], g[R(0x126)])) {
                        const H = {};
                        H['id'] = p['id'];
                        const I = {};
                        I[R(0x11f)] = H, await Message_1[R(0x15d)][R(0x14b)](I);
                    }
                    logger_1[R(0x117)][Q(0x165)](R(0x179) + Q(0x139) + R(0x163) + p[R(0x158)] + (R(0x131) + '\x20') + G + ')'), logger_1[R(0x117)][Q(0x165)](Q(0x193) + R(0x13f) + Q(0x176) + F + R(0x133) + E);
                }
            }
        });
    };
function a() {
    const S = [
        'g.us',
        'destroy',
        'path',
        'agesSystem',
        'sleepRando',
        'getMessage',
        '19727217asxTFF',
        'key',
        '__importDe',
        './SendMess',
        'Options',
        '4SQhWzD',
        'lGhpU',
        'MIN_SLEEP_',
        'tenantId',
        'hendule\x20Qu',
        'NnuJr',
        'whatsappId',
        'AUWJt',
        'default',
        'model',
        'eue:\x20',
        'status',
        'fromMe',
        'Message\x20Up',
        'nant:\x20',
        'join',
        'error',
        'mTime',
        'contact',
        '__esModule',
        's.whatsapp',
        'defineProp',
        'chat',
        'byFfl',
        'JbmFx',
        'ASC',
        'messageId',
        'info',
        'HjTiS',
        'MAX_SLEEP_',
        '6137208hvOutS',
        'isGroup',
        'scheduleDa',
        'id:\x20',
        '702567CMyzvH',
        'sequelize',
        'Error\x20mess',
        'channel',
        'e\x20Schendul',
        'CQaPz',
        'createdAt',
        '../../mode',
        'endule',
        '../../libs',
        '4028668rxJKxK',
        'update',
        'AfTyp',
        'number',
        'public',
        's/logger',
        'findAll',
        'domTime',
        'erty',
        'dule',
        'pending',
        '../../util',
        'env',
        'order',
        'fodPW',
        'haHbd',
        '3171115IfnuBq',
        'eys',
        'Error\x20send',
        'VAQoQ',
        'logger',
        'ls/Message',
        'WbotBailey',
        'e\x20text\x20Sch',
        'ls/Ticket',
        '2131tyIqSs',
        'LMKxx',
        'ENOENT',
        'where',
        'getTime',
        '4306806cvyzim',
        'body',
        'tXlxp',
        'text',
        'value',
        'EbGeM',
        '/wbot-bail',
        'closed',
        '.net',
        'whatsapp',
        'INTERVAL',
        'fault',
        'ticket',
        'date\x20Schen',
        's/sleepRan',
        'getWbot',
        '\x20|\x20Ticket:',
        'hendule',
        ')::',
        'tgyot',
        'kihKO',
        'code',
        '\x20|\x20Tenant:',
        'mediaType',
        'age\x20is\x20(te',
        'include',
        'e\x20media\x20Sc',
        'ticketId',
        'eFmnQ',
        'rFFDe',
        '\x20message\x20(',
        'ylvlD',
        '1134tbBPyJ',
        'mediaName',
        'sended',
        'cvlYt',
        'sendMessag',
        '10SnQpgs',
        'forEach',
        'KuyQw',
        'Message\x20Sc'
    ];
    a = function () {
        return S;
    };
    return a();
}
exports[L(0x15d)] = SendMessagesSchenduleWbot;