'use strict';
const o = b, p = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0xd3f + -0xb * -0x2f2 + -0x117b);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x1b0)) / (0x1355 * -0x1 + 0xe1c + 0x1 * 0x53a) + parseInt(m(0x1b9)) / (0x1539 + -0xc9 * -0x24 + 0x1 * -0x317b) * (-parseInt(n(0x1b1)) / (0x2090 + -0x1673 + -0xa1a)) + parseInt(m(0x1cd)) / (-0x1a32 + -0x7f1 * -0x1 + 0x3 * 0x617) + parseInt(m(0x1c4)) / (-0x1db0 + 0x1e86 + 0x13 * -0xb) + -parseInt(n(0x1ad)) / (0x397 + 0x2 * 0x4cf + -0xd2f) + parseInt(n(0x1c1)) / (-0x5e9 + 0x246 + 0x3aa) * (-parseInt(n(0x1c8)) / (-0x1991 + -0xc6c + 0x2605)) + -parseInt(n(0x1cc)) / (-0x1d * -0x155 + -0xeb2 + -0x17e6) * (-parseInt(m(0x1ac)) / (-0x20a7 + -0x80c + 0x28bd));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x17 * 0x9bda + -0x9 * -0xfd59 + 0xc2f33 * -0x1));
var __importDefault = this && this[o(0x1c7) + o(0x1d3)] || function (c) {
    const q = o;
    return c && c[q(0x1bb)] ? c : { 'default': c };
};
const k = {};
k[p(0x1b5)] = !![], Object[p(0x1b4) + p(0x1c3)](exports, p(0x1bb), k);
const sequelize_1 = require(p(0x1b3)), socketEmit_1 = __importDefault(require(o(0x1ca) + o(0x1be) + o(0x1b8))), Contact_1 = __importDefault(require(o(0x1bf) + p(0x1b7))), Message_1 = __importDefault(require(o(0x1bf) + p(0x1d8))), Ticket_1 = __importDefault(require(p(0x1bf) + o(0x1cf))), MessengerMarkRead = async (d, e) => {
        const r = p, s = p, f = {};
        f[r(0x1b6)] = r(0x1d4), f[r(0x1d5)] = r(0x1c5);
        const g = f, h = await Message_1[s(0x1b2)][s(0x1d9)]({
                'where': {
                    'tenantId': e,
                    'createdAt': { [sequelize_1['Op'][s(0x1ba)]]: new Date(d[r(0x1bc)][r(0x1c0)]) },
                    'fromMe': !![],
                    'ack': {
                        [sequelize_1['Op']['in']]: [
                            0x1f * 0xf2 + 0xa4a + -0x2797,
                            0x1e5 + -0x4b1 * 0x5 + 0x16 * 0xfb
                        ]
                    }
                },
                'include': [{
                        'model': Ticket_1[s(0x1b2)],
                        'where': { 'tenantId': e },
                        'include': [{
                                'model': Contact_1[r(0x1b2)],
                                'where': {
                                    'tenantId': e,
                                    'messengerId': d[s(0x1d1)]['id']
                                }
                            }]
                    }]
            });
        await Promise[s(0x1af)](h[r(0x1d7)](async i => {
            const t = r, u = r, j = {};
            j[t(0x1d6)] = 0x3, await i[u(0x1c6)](j);
            const l = {};
            l[t(0x1c9)] = e, l[t(0x1cb)] = g[u(0x1b6)], l[t(0x1bd)] = { ...i[t(0x1ae)] }, l[t(0x1bd)][t(0x1c2)] = i[t(0x1c2)], l[t(0x1bd)]['id'] = i['id'], l[t(0x1bd)][u(0x1ce)] = i[u(0x1ce)], l[t(0x1bd)][t(0x1d2)] = i[u(0x1d2)], l[t(0x1bd)][u(0x1d0)] = g[u(0x1d5)], l[t(0x1bd)][u(0x1d6)] = 0x3, (-0xe48 + -0x207f + 0x2ec7, socketEmit_1[u(0x1b2)])(l);
        }));
    };
function a() {
    const v = [
        'read',
        'payload',
        'ers/socket',
        '../../mode',
        'watermark',
        '7gqMjxu',
        'mediaUrl',
        'erty',
        '1394500qieexL',
        'sended',
        'update',
        '__importDe',
        '10235752Plnmrx',
        'tenantId',
        '../../help',
        'type',
        '110943ecGbbe',
        '4160648GQyNzV',
        'timestamp',
        'ls/Ticket',
        'status',
        'sender',
        'messageId',
        'fault',
        'chat:ack',
        'VTwpG',
        'ack',
        'map',
        'ls/Message',
        'findAll',
        '1910ioQKAH',
        '3890994NTdvZf',
        'dataValues',
        'all',
        '576182lcOvyc',
        '1399551sXCeqx',
        'default',
        'sequelize',
        'defineProp',
        'value',
        'DqSVc',
        'ls/Contact',
        'Emit',
        '2UJpBzB',
        'lte',
        '__esModule'
    ];
    a = function () {
        return v;
    };
    return a();
}
exports[o(0x1b2)] = MessengerMarkRead;