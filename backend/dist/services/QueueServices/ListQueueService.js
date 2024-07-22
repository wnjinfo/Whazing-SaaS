'use strict';
const o = b, p = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x19b9 + 0x2523 + 0xae2 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x9b)) / (-0xd3 * -0x1 + 0x912 + -0x9e4) + parseInt(n(0x92)) / (0x3 * 0x9a3 + -0x27 * -0x33 + -0x24ac) + parseInt(m(0x98)) / (-0x705 * 0x5 + 0x6 * 0x470 + 0x21f * 0x4) * (-parseInt(n(0x89)) / (-0x26cc + 0x12ea + -0x236 * -0x9)) + parseInt(m(0x9e)) / (-0x111f + -0x1aab + -0x1 * -0x2bcf) + parseInt(n(0x8d)) / (-0x1 * 0x1c19 + -0x63f + 0x35 * 0xa6) * (-parseInt(n(0x9c)) / (0x593 * -0x2 + 0x11fe + 0x5 * -0x15d)) + parseInt(m(0x8a)) / (0xfba * -0x2 + -0x1e2 * -0x13 + 0x6 * -0xb7) + -parseInt(m(0x9a)) / (-0x2314 + 0x1ba4 + 0x779);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xd * -0x1d571 + 0x5 * -0x8ee2 + -0x6d2c * -0x5e));
var __importDefault = this && this[o(0x91) + p(0x96)] || function (c) {
    const q = p;
    return c && c[q(0x88)] ? c : { 'default': c };
};
const k = {};
function a() {
    const t = [
        'default',
        '15PifDtX',
        'tenantId',
        '2252466qbYlqE',
        '244918cgZtMQ',
        '7hGTHla',
        'value',
        '911990XzPpHC',
        'where',
        'erty',
        'hpEsT',
        '__esModule',
        '226124QGhnqJ',
        '3775648fJhiTU',
        'order',
        'ls/Queue',
        '5282898vFEWsu',
        'queue',
        'defineProp',
        'qiWYE',
        '__importDe',
        '2792122VqDodT',
        'findAll',
        '../../mode',
        'ASC',
        'fault'
    ];
    a = function () {
        return t;
    };
    return a();
}
k[o(0x9d)] = !![], Object[p(0x8f) + o(0xa0)](exports, p(0x88), k);
const Queue_1 = __importDefault(require(o(0x94) + o(0x8c))), ListQueueService = async ({tenantId: f}) => {
        const r = o, s = o, g = {};
        g[r(0xa1)] = r(0x8e), g[s(0x90)] = r(0x95);
        const h = g, i = {};
        i[r(0x99)] = f;
        const j = {};
        j[r(0x9f)] = i, j[r(0x8b)] = [[
                h[s(0xa1)],
                h[r(0x90)]
            ]];
        const l = await Queue_1[r(0x97)][s(0x93)](j);
        return l;
    };
exports[o(0x97)] = ListQueueService;