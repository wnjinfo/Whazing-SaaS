'use strict';
function a() {
    const v = [
        'payload',
        '__importDe',
        '9753NWezgD',
        '../../mode',
        'rJKcn',
        'erty',
        'Emit',
        'defineProp',
        'fault',
        '2234562UCXbMx',
        '13303827TNCWfE',
        'RClVi',
        '8GeuFbe',
        '__esModule',
        '5188315ESVoxj',
        '716anLcMr',
        'ls/Contact',
        'update',
        '1099482AMNNNn',
        'watermark',
        'default',
        'ls/Ticket',
        'sended',
        'mediaUrl',
        'sequelize',
        'chat:ack',
        'status',
        'map',
        'timestamp',
        'findAll',
        'tenantId',
        'sender',
        '4386tzlruc',
        'ls/Message',
        'type',
        'ack',
        'lte',
        '1915333hnULot',
        'messageId',
        'all',
        'dataValues',
        'read',
        'value',
        'ers/socket',
        '../../help'
    ];
    a = function () {
        return v;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2a * 0x22 + -0x9 * 0x1a1 + -0xa73 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x183)) / (0x6 * -0x4aa + 0x1dfa + 0x1 * -0x1fd) + -parseInt(n(0x18a)) / (0x2fa * -0xa + 0x1afa + 0x4 * 0xb3) + -parseInt(n(0x174)) / (0x26d1 + 0xe00 * -0x1 + -0x18ce) * (parseInt(n(0x163)) / (-0x7 * -0x93 + -0x373 + -0x47 * 0x2)) + parseInt(n(0x162)) / (-0x20ff * -0x1 + 0x193a * 0x1 + -0x3a34) + -parseInt(n(0x166)) / (-0x1 * 0x565 + 0x2b * -0x1 + 0xb * 0x82) + -parseInt(n(0x179)) / (0x20ac + -0x2e + -0x2077) * (parseInt(n(0x160)) / (-0x11 * 0xf6 + -0xcc8 * 0x3 + 0x36b6)) + parseInt(n(0x15e)) / (0x1 * -0x1391 + 0x4 * 0x202 + 0x1 * 0xb92);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0xf0cda + 0x448ce + -0x11ede * -0x13));
var __importDefault = this && this[o(0x182) + p(0x189)] || function (c) {
    const q = o;
    return c && c[q(0x161)] ? c : { 'default': c };
};
const k = {};
k[p(0x17e)] = !![], Object[o(0x188) + p(0x186)](exports, p(0x161), k);
const sequelize_1 = require(p(0x16c)), socketEmit_1 = __importDefault(require(o(0x180) + o(0x17f) + o(0x187))), Contact_1 = __importDefault(require(o(0x184) + p(0x164))), Message_1 = __importDefault(require(o(0x184) + o(0x175))), Ticket_1 = __importDefault(require(o(0x184) + o(0x169))), MessengerMarkRead = async (d, e) => {
        const r = o, s = p, f = {};
        f[r(0x185)] = s(0x16d), f[s(0x15f)] = r(0x16a);
        const g = f, h = await Message_1[s(0x168)][s(0x171)]({
                'where': {
                    'tenantId': e,
                    'createdAt': { [sequelize_1['Op'][s(0x178)]]: new Date(d[s(0x17d)][s(0x167)]) },
                    'fromMe': !![],
                    'ack': {
                        [sequelize_1['Op']['in']]: [
                            -0x94 * -0x22 + -0x2 * -0x62b + -0x1ffd,
                            0x38b * 0x1 + 0x70a + -0xa93
                        ]
                    }
                },
                'include': [{
                        'model': Ticket_1[s(0x168)],
                        'where': { 'tenantId': e },
                        'include': [{
                                'model': Contact_1[r(0x168)],
                                'where': {
                                    'tenantId': e,
                                    'messengerId': d[s(0x173)]['id']
                                }
                            }]
                    }]
            });
        await Promise[s(0x17b)](h[s(0x16f)](async i => {
            const t = s, u = r, j = {};
            j[t(0x177)] = 0x3, await i[t(0x165)](j);
            const l = {};
            l[t(0x172)] = e, l[u(0x176)] = g[u(0x185)], l[t(0x181)] = { ...i[u(0x17c)] }, l[t(0x181)][u(0x16b)] = i[t(0x16b)], l[t(0x181)]['id'] = i['id'], l[t(0x181)][u(0x170)] = i[t(0x170)], l[t(0x181)][u(0x17a)] = i[t(0x17a)], l[t(0x181)][t(0x16e)] = g[t(0x15f)], l[t(0x181)][t(0x177)] = 0x3, (-0x15a * -0x3 + -0x22f3 + 0x1ee5, socketEmit_1[t(0x168)])(l);
        }));
    };
exports[o(0x168)] = MessengerMarkRead;