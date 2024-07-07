'use strict';
function a() {
    const s = [
        'findOne',
        '7355624RCqhAJ',
        'value',
        'default',
        '78190LfQNLq',
        'erty',
        'Message',
        '../models/',
        '716840RZiaLE',
        'DlTNt',
        '3649625kTxbni',
        'defineProp',
        '663639SidQNX',
        '__importDe',
        '__esModule',
        '304ISFdQS',
        'fault',
        '1LIzptq',
        '31145607dqTVoz',
        '6677076GFUjNn'
    ];
    a = function () {
        return s;
    };
    return a();
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x151)) / (0x6 * 0xcc + 0x383 * -0x3 + 0x5c2) * (-parseInt(l(0x148)) / (0x12ab + -0x17 * -0x28 + -0x1641)) + parseInt(m(0x14c)) / (0x1345 * -0x2 + 0x3fa + 0x1 * 0x2293) + -parseInt(m(0x14f)) / (-0x1829 + 0x1fdc + -0x7 * 0x119) * (parseInt(l(0x144)) / (0x1c1 * -0x13 + 0x21c4 + -0x6c)) + -parseInt(l(0x13f)) / (-0x11 * -0x1cb + -0xcb * -0x22 + 0x1 * -0x396b) + parseInt(m(0x14a)) / (-0x218 + -0x258d + 0x27ac) + -parseInt(l(0x141)) / (-0x30 + -0x1555 + 0x158d) + parseInt(m(0x13e)) / (-0x1cf * 0x2 + 0xea8 + 0x9 * -0x139);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x11795 + -0xe0d2 + 0xb7deb));
var __importDefault = this && this[n(0x14d) + n(0x150)] || function (c) {
    const p = o;
    return c && c[p(0x14e)] ? c : { 'default': c };
};
const k = {};
k[n(0x142)] = !![], Object[n(0x14b) + n(0x145)](exports, n(0x14e), k);
const Message_1 = __importDefault(require(n(0x147) + o(0x146))), getQuotedForMessageId = async (c, d) => {
        const q = o, r = n, e = {
                'DlTNt': function (g, h) {
                    return g(h);
                }
            }, f = await Message_1[q(0x143)][q(0x140)]({
                'where': {
                    'messageId': e[r(0x149)](String, c),
                    'tenantId': +d
                }
            });
        return f;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x10e9 + -0x2ff * 0x7 + -0x7 * -0xc2);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[o(0x143)] = getQuotedForMessageId;