'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x13a)) / (-0x2035 + 0x1 * 0x135a + 0xcdc) * (-parseInt(m(0x13f)) / (0x21f2 + -0x35 * -0xb6 + -0x479e)) + -parseInt(m(0x144)) / (-0x229 + 0xa20 + -0x1fd * 0x4) + -parseInt(l(0x13c)) / (-0x394 * -0x9 + 0x1 * -0x25e + -0x1dd2) * (-parseInt(m(0x14d)) / (0x26b1 + 0xe1b * 0x1 + 0x3b * -0xe5)) + parseInt(l(0x146)) / (-0x1 * 0x1083 + 0xb * 0x39 + 0x70b * 0x2) * (-parseInt(m(0x148)) / (-0xd * -0xe5 + 0x4 * 0x467 + -0xe9b * 0x2)) + -parseInt(m(0x14c)) / (0x1 * -0x219d + -0xbec + 0x2d91 * 0x1) + parseInt(m(0x13e)) / (0x14 + 0x14b * -0x1a + -0xbf * -0x2d) * (parseInt(l(0x14b)) / (0x840 * 0x4 + 0x6d * -0x2 + -0x201c * 0x1)) + parseInt(m(0x14e)) / (-0x10be + -0x1505 * 0x1 + -0x6 * -0x64d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3a * 0xfbf + 0x9edf1 * -0x1 + 0x190530));
var __importDefault = this && this[n(0x14a) + o(0x140)] || function (c) {
    const p = o;
    return c && c[p(0x141)] ? c : { 'default': c };
};
const k = {};
k[o(0x142)] = !![], Object[n(0x143) + o(0x149)](exports, n(0x141), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xc * -0xed + -0x122d + 0x1e82);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const s = [
        '3160323uVRHjx',
        'findOne',
        '6wMkbMn',
        'OyAwh',
        '4180701eVTwfm',
        'erty',
        '__importDe',
        '47010SFBwVI',
        '2530848mYTDZG',
        '26570lWoByQ',
        '6441721bJvaYu',
        'Message',
        '76837VveTVP',
        'default',
        '648ejGQLv',
        '../models/',
        '1854UWsFvm',
        '8qfObco',
        'fault',
        '__esModule',
        'value',
        'defineProp'
    ];
    a = function () {
        return s;
    };
    return a();
}
const Message_1 = __importDefault(require(o(0x13d) + o(0x139))), getQuotedForMessageId = async (c, d) => {
        const q = n, r = n, e = {
                'OyAwh': function (g, h) {
                    return g(h);
                }
            }, f = await Message_1[q(0x13b)][r(0x145)]({
                'where': {
                    'messageId': e[q(0x147)](String, c),
                    'tenantId': +d
                }
            });
        return f;
    };
exports[o(0x13b)] = getQuotedForMessageId;