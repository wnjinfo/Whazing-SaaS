'use strict';
const T = b, U = b;
(function (c, d) {
    const R = b, S = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(R(0x1a0)) / (-0x59 * -0xa + -0x7c * -0x16 + -0xe21) + -parseInt(S(0x184)) / (0x166 * 0x1 + 0x2c * 0x18 + 0x4 * -0x161) + -parseInt(R(0x1c5)) / (0xc5b * 0x2 + -0x21e4 + 0x931) * (-parseInt(R(0x1f5)) / (0x1ed0 + 0x232f * 0x1 + -0x41fb)) + parseInt(R(0x1f7)) / (0x23c7 + 0x18e6 + -0x4 * 0xf2a) * (parseInt(S(0x1c6)) / (0x12a * 0xf + 0xd * 0x25c + 0xc07 * -0x4)) + -parseInt(R(0x1ae)) / (0x1d96 + -0x3 * -0xafa + -0x11 * 0x3ad) + parseInt(R(0x1be)) / (0xff4 * -0x1 + -0x2d4 + -0x968 * -0x2) * (parseInt(S(0x1ef)) / (0x1ed9 + 0x753 + -0x2623)) + parseInt(R(0x1f0)) / (0x1bae + -0x380 + -0x1824);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x10ea68 + -0x18bd27 + 0x189 * 0xd8d));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x22f * 0xd + -0x1fa + -0x3 * 0x851);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[T(0x1ca) + U(0x1a8)] || function (c) {
    const V = U;
    return c && c[V(0x1ed)] ? c : { 'default': c };
};
const q = {};
q[U(0x188)] = !![], Object[U(0x183) + T(0x193)](exports, T(0x1ed), q);
const promises_1 = require(U(0x178) + 's'), fluent_ffmpeg_1 = __importDefault(require(U(0x17f) + U(0x1b2))), path_1 = require(U(0x190)), sequelize_1 = require(U(0x1b7)), sharp_1 = __importDefault(require(U(0x179))), socketEmit_1 = __importDefault(require(T(0x181) + T(0x1ab) + T(0x1d8))), Message_1 = __importDefault(require(U(0x1db) + U(0x177))), Ticket_1 = __importDefault(require(T(0x1db) + U(0x1e2))), logger_1 = require(T(0x1cf) + T(0x1b9)), sleepRandomTime_1 = require(T(0x1cf) + T(0x1fa) + T(0x1bd)), SendMessagesSystemWbot = async (l, m) => {
        const W = U, X = U, n = {
                'vIlbW': W(0x1c7),
                'jsHYv': X(0x17c),
                'wKUkn': W(0x1ba),
                'xBwNb': X(0x1e4),
                'aLisU': W(0x18c),
                'dziQR': W(0x1d7),
                'dgqlE': X(0x1ea),
                'tMIwo': W(0x18d),
                'jRXTx': X(0x1d9),
                'BCQxv': W(0x1a4),
                'aDEZS': W(0x1d0),
                'eMGrW': X(0x1b5),
                'GuSds': W(0x1bc),
                'nVEQC': W(0x1b3),
                'xBmpB': function (t, u) {
                    return t === u;
                },
                'HklkL': W(0x1ce),
                'qRzyI': function (t, u) {
                    return t === u;
                },
                'FfXfm': X(0x1d6),
                'Vjpff': X(0x1f2),
                'dhtfH': function (t, u) {
                    return t === u;
                },
                'oLhQE': X(0x1d5),
                'rlPzE': W(0x1de) + X(0x199),
                'bsRwk': X(0x1de) + X(0x1b8),
                'eCYUe': W(0x1a7),
                'tPblR': W(0x1b0),
                'HSvOV': W(0x18a) + W(0x1ad),
                'ZUKns': function (t, u) {
                    return t(u);
                }
            }, o = { [sequelize_1['Op']['is']]: null }, p = {
                'fromMe': !![],
                'messageId': o,
                'status': n[W(0x1da)],
                [sequelize_1['Op']['or']]: [
                    { 'scheduleDate': { [sequelize_1['Op'][X(0x18b)]]: new Date() } },
                    { 'scheduleDate': { [sequelize_1['Op']['is']]: null } }
                ]
            }, r = await Message_1[X(0x198)][X(0x1af)]({
                'where': p,
                'include': [
                    n[W(0x1a9)],
                    {
                        'model': Ticket_1[X(0x198)],
                        'as': n[W(0x18e)],
                        'where': {
                            'tenantId': m,
                            [sequelize_1['Op']['or']]: {
                                'status': { [sequelize_1['Op']['ne']]: n[W(0x189)] },
                                'isFarewellMessage': !![]
                            },
                            'channel': n[X(0x1f3)],
                            'whatsappId': l['id']
                        },
                        'include': [n[X(0x1a9)]]
                    },
                    {
                        'model': Message_1[X(0x198)],
                        'as': n[W(0x186)],
                        'include': [n[W(0x1a9)]]
                    }
                ],
                'order': [[
                        n[X(0x1cb)],
                        n[W(0x1e1)]
                    ]]
            });
        let s;
        for (const t of r) {
            const u = t, {ticket: v} = u, w = v[X(0x18c)][W(0x1c1) + 'K'], x = await l[W(0x187)][X(0x1a5) + 'ad']([w]);
            try {
                if (![
                        n[X(0x18f)],
                        n[X(0x1e3)]
                    ][W(0x1dc)](u[W(0x1aa)]) && u[X(0x1b6)]) {
                    const E = (-0x1397 * -0x1 + 0x1e93 + -0x1 * 0x322a, path_1[X(0x19f)])(__dirname, '..', '..', '..', n[W(0x1f8)]), F = (0x107f + -0x1bc5 * 0x1 + 0xb46, path_1[X(0x19f)])(E, u[X(0x1b6)]), G = await (0x2380 + 0x247e + -0x26 * 0x1e5, promises_1[W(0x1b4)])(F);
                    console[X(0x1bf)](F);
                    if (n[X(0x1a6)](u[W(0x1aa)], n[X(0x1dd)]) || n[X(0x1f6)](u[X(0x1aa)], n[X(0x1e0)])) {
                        const H = u[X(0x1b6)][X(0x1e9)]('.'), I = (0x95d + -0x5 * -0x28d + -0x161e, path_1[W(0x19f)])(E, H[-0x2687 + 0x2055 + 0x632] + X(0x1a2));
                        await new Promise((L, M) => {
                            const Y = X, Z = X;
                            (0x763 * 0x1 + 0x531 + -0xc94, fluent_ffmpeg_1[Y(0x198)])(F)[Y(0x17a)](n[Y(0x194)])['on'](n[Y(0x1fc)], N => M(N))['on'](n[Z(0x1a3)], () => L(!![]))[Z(0x176)](I);
                        });
                        const J = await (-0x264 + 0x197b + -0x101 * 0x17, promises_1[W(0x1b4)])(I), K = {};
                        K[W(0x1c8)] = J, s = await x[W(0x19a) + X(0x1b1)](K);
                    }
                    if (n[X(0x1a6)](u[W(0x1aa)], n[X(0x1c0)])) {
                        const L = await (-0x1 * -0x22ed + -0x1735 + -0xbb8, sharp_1[X(0x198)])(G)[X(0x185)]()[W(0x1f1)](), M = {};
                        M[X(0x1c8)] = L, s = await x[W(0x1c3) + X(0x19b)](M);
                    }
                    if (n[W(0x1e5)](u[W(0x1aa)], n[X(0x1fb)])) {
                        const N = {};
                        N[W(0x1d5)] = G, s = await x[W(0x19a) + W(0x196)](N);
                    }
                    logger_1[X(0x192)][W(0x1e6)](n[W(0x1c9)]);
                }
                [
                    n[W(0x18f)],
                    n[X(0x1e3)]
                ][X(0x1dc)](u[X(0x1aa)]) && !u[X(0x1b6)] && (s = await x[X(0x1c2) + W(0x1cd)](u[W(0x1e7)]), logger_1[W(0x192)][X(0x1e6)](n[X(0x182)]));
                const y = {
                    ...u,
                    ...s
                };
                y['id'] = u['id'], y[X(0x1c4)] = u[X(0x1c4)], y[W(0x19e)] = s[X(0x1d1)], y[X(0x195)] = n[X(0x1d3)], y[X(0x1d4)] = 0x2;
                const z = y, A = { ...z }, B = {};
                B['id'] = u['id'];
                const C = {};
                C[W(0x19c)] = B, await Message_1[W(0x198)][X(0x197)](A, C);
                const D = {};
                D[X(0x17d)] = v[X(0x17d)], D[W(0x1bb)] = n[W(0x19d)], D[X(0x191)] = { ...u[W(0x17e)] }, D[X(0x191)][X(0x1f9)] = u[X(0x1f9)], D[X(0x191)]['id'] = u['id'], D[X(0x191)][X(0x1c4)] = u[X(0x1c4)], D[X(0x191)][W(0x19e)] = s[X(0x1d1)], D[X(0x191)][X(0x195)] = n[X(0x1d3)], D[X(0x191)][X(0x1d4)] = 0x2, (0x8db * 0x2 + -0xacb + -0x4d * 0x17, socketEmit_1[W(0x198)])(D), logger_1[X(0x192)][W(0x1e6)](n[X(0x1cc)]), await (0xbf7 * -0x1 + 0x2 * -0x103f + 0x2c75 * 0x1, sleepRandomTime_1[X(0x1f4) + W(0x1eb)])({
                    'minMilliseconds': n[X(0x1df)](Number, -0x1 * 0x6ce + 0x19 * 0xf7 + -0x981),
                    'maxMilliseconds': n[X(0x1df)](Number, 0x7af * -0x3 + -0x1957 + 0x3c1c)
                });
            } catch (O) {
                const P = u['id'], Q = u[X(0x1d7)]['id'];
                logger_1[X(0x192)][W(0x17c)](X(0x1ec) + W(0x180) + W(0x1ac) + m + (W(0x1ee) + '\x20') + Q + ')'), logger_1[X(0x192)][X(0x17c)](W(0x1a1) + W(0x17b) + X(0x1e8) + P + W(0x1d2) + O);
            }
        }
    };
function a() {
    const a0 = [
        'audio',
        '../../util',
        'ASC',
        'item_id',
        ')::\x20',
        'eCYUe',
        'ack',
        'video',
        'ptt',
        'ticket',
        'Emit',
        'quotedMsg',
        'xBwNb',
        '../../mode',
        'includes',
        'HklkL',
        'sendMessag',
        'ZUKns',
        'FfXfm',
        'aDEZS',
        'ls/Ticket',
        'GuSds',
        'pending',
        'dhtfH',
        'info',
        'body',
        'id:\x20',
        'split',
        'closed',
        'mTime',
        'Error\x20mess',
        '__esModule',
        '\x20|\x20Ticket:',
        '1997829fKJMll',
        '28584370CcpUuN',
        'toBuffer',
        'image',
        'tMIwo',
        'sleepRando',
        '261428GrRHBQ',
        'qRzyI',
        '1255wIojad',
        'nVEQC',
        'mediaUrl',
        's/sleepRan',
        'oLhQE',
        'jsHYv',
        'saveToFile',
        'ls/Message',
        'fs/promise',
        'sharp',
        'toFormat',
        '\x20message\x20(',
        'error',
        'tenantId',
        'dataValues',
        'fluent-ffm',
        'age\x20is\x20(te',
        '../../help',
        'bsRwk',
        'defineProp',
        '2531850uboWFO',
        'jpeg',
        'jRXTx',
        'entity',
        'value',
        'dgqlE',
        'Message\x20Up',
        'lte',
        'contact',
        'instagram',
        'dziQR',
        'eMGrW',
        'path',
        'payload',
        'logger',
        'erty',
        'vIlbW',
        'status',
        'ideo',
        'update',
        'default',
        'e\x20media',
        'broadcastV',
        'hoto',
        'where',
        'tPblR',
        'messageId',
        'join',
        '1566839RTGoEp',
        'Error\x20send',
        '.mp4',
        'wKUkn',
        'createdAt',
        'directThre',
        'xBmpB',
        'sended',
        'fault',
        'aLisU',
        'mediaType',
        'ers/socket',
        'nant:\x20',
        'date\x20ok',
        '1976898NGRvsX',
        'findAll',
        'chat:ack',
        'oice',
        'peg',
        'public',
        'readFile',
        'chat',
        'mediaName',
        'sequelize',
        'e\x20text',
        's/logger',
        'end',
        'type',
        'text',
        'domTime',
        '8HGIQoF',
        'log',
        'Vjpff',
        'instagramP',
        'broadcastT',
        'broadcastP',
        'timestamp',
        '3GPhslA',
        '19602MjbhcX',
        'mp4',
        'file',
        'rlPzE',
        '__importDe',
        'BCQxv',
        'HSvOV',
        'ext'
    ];
    a = function () {
        return a0;
    };
    return a();
}
exports[U(0x198)] = SendMessagesSystemWbot;