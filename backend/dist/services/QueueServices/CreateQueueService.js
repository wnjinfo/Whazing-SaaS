'use strict';
function a() {
    const t = [
        'isActive',
        '3452SJLLYz',
        '8KdsUFq',
        'color',
        'erty',
        '385leZulM',
        'from_ia',
        '3391276gERFeS',
        'queue',
        '11zAjNMy',
        '304716fDGOGD',
        'default',
        'create',
        'defineProp',
        '../../mode',
        '1242423YYINTI',
        'fault',
        'ls/Queue',
        'tenantId',
        'value',
        '__esModule',
        '5815377tzvoJl',
        '5QISBqU',
        '4195146YQFpvD',
        '1921940ZcImtg',
        'userId',
        '__importDe'
    ];
    a = function () {
        return t;
    };
    return a();
}
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x98)) / (-0xea * -0x1b + -0x1b7b + 0x2ce * 0x1) * (parseInt(n(0xa7)) / (-0x1 * 0x2d7 + -0x53c * -0x4 + -0x1217)) + -parseInt(m(0x91)) / (0x1d49 + 0x1ea4 + -0x3bea) + parseInt(m(0x9e)) / (0xd96 + -0xbc * 0x16 + -0x1 * -0x296) * (-parseInt(m(0xa2)) / (-0x11c6 + -0x7 * -0x347 + -0x526)) + parseInt(m(0x99)) / (0x3 * -0x177 + 0x1 * 0x1574 + 0x1 * -0x1109) + parseInt(n(0xa4)) / (0x33 * 0x59 + 0x1 * 0x13c0 + 0xbc * -0x33) + -parseInt(m(0x9f)) / (-0x2395 + -0x11b1 + -0x1 * -0x354e) * (-parseInt(n(0x97)) / (0x20d3 + -0xcf4 * 0x2 + -0x6e2)) + parseInt(m(0x9a)) / (-0x1d * 0x4b + 0x1f * 0x3b + 0x164) * (-parseInt(m(0xa6)) / (0x1d61 + 0x260a + 0x4 * -0x10d8));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x884e * -0x3 + 0x2ad53 * -0x4 + 0x2 * 0x79223));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x169 * 0x19 + -0x1fe * -0x8 + -0x32a2);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0x9c) + p(0x92)] || function (c) {
    const q = o;
    return c && c[q(0x96)] ? c : { 'default': c };
};
const k = {};
k[p(0x95)] = !![], Object[o(0x8f) + o(0xa1)](exports, p(0x96), k);
const Queue_1 = __importDefault(require(o(0x90) + p(0x93))), CreateQueueService = async ({
        queue: d,
        isActive: e,
        userId: f,
        from_ia: g,
        color: h,
        tenantId: i
    }) => {
        const r = o, s = o, j = {};
        j[r(0xa5)] = d, j[r(0x9d)] = e, j[r(0x9b)] = f, j[s(0xa3)] = g, j[r(0xa0)] = h, j[s(0x94)] = i;
        const l = await Queue_1[r(0xa8)][r(0xa9)](j);
        return l;
    };
exports[p(0xa8)] = CreateQueueService;