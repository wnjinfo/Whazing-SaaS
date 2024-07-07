'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x157)) / (0x2 * 0x1380 + -0x1d7 * -0x1 + 0x146b * -0x2) * (-parseInt(n(0x164)) / (0xa08 + 0x446 + -0xe4c)) + -parseInt(n(0x153)) / (0x4 * -0x26 + -0x937 + -0x1a3 * -0x6) * (-parseInt(n(0x155)) / (-0x1747 * 0x1 + 0x267f * -0x1 + 0x3dca)) + -parseInt(n(0x165)) / (0x153b + 0x4e6 + -0x1a1c) + -parseInt(n(0x160)) / (0xd26 + 0x1 * 0xac1 + -0x1 * 0x17e1) * (parseInt(n(0x171)) / (0x55 * 0x10 + -0x1a45 + 0x14fc)) + -parseInt(o(0x172)) / (0x71 * -0x1f + 0x174c + -0x995) + -parseInt(n(0x168)) / (0xf5b + 0xa59 * -0x3 + 0xfb9) * (-parseInt(n(0x152)) / (0x13a8 + 0x1a1 * 0xb + 0x3 * -0xc83)) + parseInt(o(0x16b)) / (-0x24fb + 0x146c + -0xa * -0x1a9);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x170f5e + 0x5 * 0xb81 + -0x249f64 * -0x1));
function a() {
    const u = [
        'logger',
        '2023Zachjj',
        '8452272burplf',
        'Error\x20send',
        'error',
        'sendMessag',
        'value',
        '130jAKLdw',
        '2117463cAumsH',
        'ices/SendM',
        '8ZrpzXh',
        'defineProp',
        '97obnxKF',
        '../libs/wb',
        'message',
        '__importDe',
        '\x20messages',
        's/WbotServ',
        'erty',
        'fault',
        'default',
        '10926qPDEqU',
        'temWbotBai',
        'eBaileys',
        'ot-baileys',
        '16216SsjiyQ',
        '1881005ynIKJB',
        '__esModule',
        'getWbot',
        '723258uxVsjd',
        '../utils/l',
        'KlyqB',
        '13119645dwcRaq',
        '../service',
        'ogger',
        'essagesSys',
        'leys'
    ];
    a = function () {
        return u;
    };
    return a();
}
var __importDefault = this && this[p(0x15a) + p(0x15e)] || function (c) {
    const r = p;
    return c && c[r(0x166)] ? c : { 'default': c };
};
const k = {};
k[p(0x151)] = !![], Object[q(0x156) + p(0x15d)](exports, p(0x166), k), exports[q(0x150) + q(0x162)] = void (-0x6 * 0x2e7 + 0x18fb + -0x95 * 0xd);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x8c * -0x25 + 0x2668 + -0x3954);
        let h = e[f];
        return h;
    }, b(c, d);
}
const wbot_baileys_1 = require(p(0x158) + q(0x163)), SendMessagesSystemWbotBaileys_1 = __importDefault(require(q(0x16c) + p(0x15c) + q(0x154) + p(0x16e) + q(0x161) + q(0x16f))), logger_1 = require(q(0x169) + q(0x16d)), sendMessageBaileys = async (e, f, g = undefined) => {
        const s = p, t = q, h = {};
        h[s(0x16a)] = s(0x173) + s(0x15b);
        const i = h;
        try {
            const j = (-0xd79 + -0xf * 0x80 + 0x3b * 0x5b, wbot_baileys_1[s(0x167)])(e);
            await (-0xd1 * -0xb + -0x31a * 0x3 + -0x1 * -0x53, SendMessagesSystemWbotBaileys_1[s(0x15f)])(j, f, g);
        } catch (l) {
            const m = {};
            m[s(0x159)] = i[t(0x16a)], m[t(0x174)] = l, logger_1[s(0x170)][s(0x174)](m);
            throw new Error(l);
        }
    };
exports[p(0x150) + q(0x162)] = sendMessageBaileys;