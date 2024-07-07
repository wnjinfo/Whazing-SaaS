'use strict';
function a() {
    const v = [
        'read',
        'fault',
        'tenantId',
        'chat:ack',
        'sender',
        'payload',
        '6506334ggxgCx',
        '350kEbQEy',
        'ls/Message',
        'ls/Contact',
        'sequelize',
        'erty',
        'IQFCP',
        '../../help',
        'all',
        '../../mode',
        'value',
        '__esModule',
        'NJWwt',
        'ls/Ticket',
        'dataValues',
        '33658kETsuy',
        'lte',
        '3rtNspD',
        'map',
        'findAll',
        'default',
        'ers/socket',
        '2891396IKtsmz',
        'defineProp',
        'sended',
        '10kUvMUt',
        'mediaUrl',
        'update',
        'ack',
        'Emit',
        '38232NHpnSE',
        '1284132LPcFhI',
        '__importDe',
        '35vTFUYq',
        'watermark',
        'status',
        'messageId',
        '22lJXFQT',
        'timestamp',
        '43801784TZtmZF',
        'type',
        '77QoRbLj',
        '1178248yEBOnE'
    ];
    a = function () {
        return v;
    };
    return a();
}
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x1ef)) / (-0x23b9 + 0x31 * -0xa + 0x323 * 0xc) * (parseInt(m(0x1d9)) / (0x2626 + 0x22 * 0xe5 + -0x448e)) + -parseInt(n(0x1db)) / (-0x2653 * 0x1 + -0xff9 + 0x364f) * (-parseInt(n(0x1e0)) / (-0x37 * 0xb5 + -0x89b + 0x2f82)) + parseInt(m(0x1cb)) / (-0x35 * -0x5 + 0x22a5 + -0x23a9) * (parseInt(n(0x1e8)) / (-0x6c1 + -0x551 * 0x6 + 0x26ad * 0x1)) + parseInt(n(0x1eb)) / (0x165 * -0x9 + 0x29 * -0x43 + 0x174f) * (parseInt(m(0x1f4)) / (-0xf75 * -0x2 + 0x64b * -0x1 + -0x1897)) + parseInt(n(0x1fb)) / (0x2120 + 0x3da + -0xc1 * 0x31) * (parseInt(n(0x1e3)) / (0x234f + -0x1fc0 + -0x385)) + parseInt(m(0x1f3)) / (-0x1a * -0x2d + -0x264e + 0x21c7) * (parseInt(n(0x1e9)) / (-0x798 + -0x987 + 0x5 * 0x36f)) + -parseInt(m(0x1f1)) / (-0x23c + -0x25b7 * 0x1 + 0x2800);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xcc17 + 0x6e2f + 0x6231f));
var __importDefault = this && this[o(0x1ea) + o(0x1f6)] || function (c) {
    const q = p;
    return c && c[q(0x1d5)] ? c : { 'default': c };
};
const k = {};
k[o(0x1d4)] = !![], Object[p(0x1e1) + p(0x1cf)](exports, p(0x1d5), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x199 * -0x1 + -0x3e6 * 0x2 + 0x7fe);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(o(0x1ce)), socketEmit_1 = __importDefault(require(p(0x1d1) + p(0x1df) + o(0x1e7))), Contact_1 = __importDefault(require(p(0x1d3) + o(0x1cd))), Message_1 = __importDefault(require(o(0x1d3) + o(0x1cc))), Ticket_1 = __importDefault(require(p(0x1d3) + p(0x1d7))), MessengerMarkRead = async (d, e) => {
        const r = p, s = o, f = {};
        f[r(0x1d0)] = s(0x1f8), f[s(0x1d6)] = s(0x1e2);
        const g = f, h = await Message_1[s(0x1de)][r(0x1dd)]({
                'where': {
                    'tenantId': e,
                    'createdAt': { [sequelize_1['Op'][r(0x1da)]]: new Date(d[r(0x1f5)][r(0x1ec)]) },
                    'fromMe': !![],
                    'ack': {
                        [sequelize_1['Op']['in']]: [
                            -0x1979 * -0x1 + -0xc5 * -0x26 + -0x36b6,
                            0x1 * 0x1afa + -0x269 * -0xd + 0x19 * -0x255
                        ]
                    }
                },
                'include': [{
                        'model': Ticket_1[r(0x1de)],
                        'where': { 'tenantId': e },
                        'include': [{
                                'model': Contact_1[s(0x1de)],
                                'where': {
                                    'tenantId': e,
                                    'messengerId': d[s(0x1f9)]['id']
                                }
                            }]
                    }]
            });
        await Promise[s(0x1d2)](h[s(0x1dc)](async i => {
            const t = s, u = s, j = {};
            j[t(0x1e6)] = 0x3, await i[t(0x1e5)](j);
            const l = {};
            l[u(0x1f7)] = e, l[u(0x1f2)] = g[u(0x1d0)], l[u(0x1fa)] = { ...i[u(0x1d8)] }, l[u(0x1fa)][u(0x1e4)] = i[u(0x1e4)], l[u(0x1fa)]['id'] = i['id'], l[u(0x1fa)][u(0x1f0)] = i[t(0x1f0)], l[u(0x1fa)][u(0x1ee)] = i[u(0x1ee)], l[u(0x1fa)][u(0x1ed)] = g[u(0x1d6)], l[u(0x1fa)][u(0x1e6)] = 0x3, (-0x1fd4 + -0x47 * 0x6b + 0x3d81, socketEmit_1[u(0x1de)])(l);
        }));
    };
exports[o(0x1de)] = MessengerMarkRead;