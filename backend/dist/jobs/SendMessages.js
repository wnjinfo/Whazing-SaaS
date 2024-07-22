'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x163)) / (-0x1 * -0xa73 + 0x19 * -0x12b + -0x1 * -0x12c1) * (parseInt(n(0x14c)) / (-0x18d0 + -0x6c4 + 0x1f96)) + -parseInt(o(0x158)) / (0x1b * -0x3d + -0x1714 + 0x1d86) + parseInt(n(0x15f)) / (-0xdd9 + 0x1eb9 + 0x14c * -0xd) + -parseInt(n(0x150)) / (-0x6b2 + 0x1f4a + -0x1893) + parseInt(o(0x15c)) / (-0x1 * -0x118b + -0x1467 + 0x2e2) * (parseInt(n(0x168)) / (-0x24d6 + 0x107f * -0x1 + 0x355c)) + parseInt(n(0x162)) / (-0x1 * 0x5ad + 0x43 * 0x53 + 0x5 * -0x334) + -parseInt(n(0x14d)) / (-0x2d6 + -0x2626 * 0x1 + 0x2905) * (-parseInt(n(0x16d)) / (-0x8 * 0x30d + -0x1581 + 0x9 * 0x51b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5b3ea + 0x18 * 0x336a + 0x1 * -0x541af));
var __importDefault = this && this[p(0x16b) + q(0x14b)] || function (c) {
    const r = q;
    return c && c[r(0x15d)] ? c : { 'default': c };
};
const k = {};
function a() {
    const u = [
        'error',
        '__importDe',
        'Error\x20send',
        '599980QcVfvc',
        'logger',
        'fault',
        '17092oCOQrf',
        '72swMYjC',
        '../service',
        'default',
        '2183245IcYbkQ',
        'temWbotBai',
        's/WbotServ',
        'eBaileys',
        'value',
        'LsSUL',
        'leys',
        'erty',
        '1975908wejYuP',
        '../libs/wb',
        'ices/SendM',
        'defineProp',
        '6786RFjYIn',
        '__esModule',
        'getWbot',
        '2606640kLQcMk',
        'message',
        'essagesSys',
        '3319912EwJAol',
        '43lpMPxk',
        'ogger',
        'ot-baileys',
        'sendMessag',
        '../utils/l',
        '1617ndUnZH',
        '\x20messages'
    ];
    a = function () {
        return u;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x891 * -0x2 + -0x18c8 + -0x10 * -0x8f);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[p(0x154)] = !![], Object[q(0x15b) + q(0x157)](exports, q(0x15d), k), exports[q(0x166) + q(0x153)] = void (0x83 * 0x1f + 0x260 * 0x9 + -0x1 * 0x253d);
const wbot_baileys_1 = require(p(0x159) + p(0x165)), SendMessagesSystemWbotBaileys_1 = __importDefault(require(q(0x14e) + q(0x152) + p(0x15a) + q(0x161) + p(0x151) + q(0x156))), logger_1 = require(q(0x167) + p(0x164)), sendMessageBaileys = async (e, f, g = undefined) => {
        const s = q, t = p, h = {};
        h[s(0x155)] = t(0x16c) + s(0x169);
        const i = h;
        try {
            const j = (0x1 * 0x2479 + 0x1194 + -0x1 * 0x360d, wbot_baileys_1[t(0x15e)])(e);
            await (0x2438 + -0x2306 + -0x132, SendMessagesSystemWbotBaileys_1[t(0x14f)])(j, f, g);
        } catch (l) {
            const m = {};
            m[s(0x160)] = i[t(0x155)], m[s(0x16a)] = l, logger_1[t(0x14a)][t(0x16a)](m);
            throw new Error(l);
        }
    };
exports[q(0x166) + p(0x153)] = sendMessageBaileys;