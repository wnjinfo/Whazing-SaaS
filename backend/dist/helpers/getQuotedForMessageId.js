'use strict';
const n = b, o = b;
function a() {
    const s = [
        'findOne',
        '45306tGgMMF',
        '__importDe',
        '179494YBJvuY',
        'defineProp',
        '25940120knnJag',
        '__esModule',
        'Message',
        '368TLreHi',
        '283770UcRaaY',
        '1764840EiVdQi',
        '6591JgBNtK',
        'erty',
        'bUpWO',
        '../models/',
        '95ENeLan',
        'value',
        '498956HIswzC',
        '1780iCvMhF',
        'default',
        'fault'
    ];
    a = function () {
        return s;
    };
    return a();
}
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0x99)) / (0x2123 + 0x2648 + 0x115 * -0x42) + -parseInt(l(0x92)) / (-0x21db + 0x632 * -0x6 + -0x5 * -0xe35) + parseInt(m(0x8c)) / (-0x4d9 + 0xc33 * -0x1 + -0x110f * -0x1) * (-parseInt(l(0x93)) / (-0x388 + 0x1507 + -0x117b)) + parseInt(l(0x90)) / (0x53 + 0x1001 + -0x104f) * (-parseInt(m(0x9f)) / (0x1 * 0x9f + -0x26c2 + 0x2629)) + parseInt(m(0xa0)) / (0x3 * 0xbd3 + -0x42a * 0x6 + -0xa76 * 0x1) + -parseInt(l(0x9e)) / (-0x253c * -0x1 + -0x6ed + -0x1e47) * (parseInt(l(0x97)) / (-0x3d * -0x47 + -0xf2 * -0xe + 0x3 * -0xa0a)) + parseInt(l(0x9b)) / (0xcae + 0x21d5 + -0x2e79);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5c5ed * 0x1 + -0x11e1ff * 0x1 + 0x21da86));
var __importDefault = this && this[n(0x98) + o(0x95)] || function (c) {
    const p = o;
    return c && c[p(0x9c)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1931 + -0x591 + 0x1f4e);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[o(0x91)] = !![], Object[n(0x9a) + n(0x8d)](exports, o(0x9c), k);
const Message_1 = __importDefault(require(n(0x8f) + n(0x9d))), getQuotedForMessageId = async (c, d) => {
        const q = n, r = o, e = {
                'bUpWO': function (g, h) {
                    return g(h);
                }
            }, f = await Message_1[q(0x94)][q(0x96)]({
                'where': {
                    'messageId': e[q(0x8e)](String, c),
                    'tenantId': +d
                }
            });
        return f;
    };
exports[n(0x94)] = getQuotedForMessageId;