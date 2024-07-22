'use strict';
const o = b, p = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x53c * 0x7 + 0x144b + -0x5c * 0x9d);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const t = [
        '11058756PKcafV',
        'dXsKW',
        'defineProp',
        'ls/StepsRe',
        'VhOPK',
        'findOne',
        '42485GbSIAM',
        'erty',
        '10LWIePV',
        '5499eypduL',
        'where',
        '543102RZbgIf',
        'plyAction',
        'sequelize',
        'NAYKe',
        '1202380oVYsIi',
        '1880GToXOP',
        '11UfBXST',
        'stepsReply',
        'ls/AutoRep',
        'autoReply',
        '__importDe',
        'lUqjM',
        'ply',
        'lower',
        'tenantId',
        'fault',
        '172LpnRsk',
        '7QyZQNk',
        'col',
        '267864uUiXzm',
        '__esModule',
        'value',
        '../../mode',
        'words',
        'default',
        '108343jhmKyx'
    ];
    a = function () {
        return t;
    };
    return a();
}
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x9a)) / (-0xca6 * 0x2 + 0x1 * 0x16ba + 0x293) * (-parseInt(n(0xa3)) / (0x16 * 0x10f + 0x1136 * 0x1 + -0x143f * 0x2)) + parseInt(n(0x94)) / (0xf37 + -0x1 * -0x18c7 + -0x7ff * 0x5) + -parseInt(m(0x91)) / (-0x1bc3 + -0x3 * 0x66b + -0x1c * -0x1ae) * (parseInt(n(0xa1)) / (0x1ef * 0x7 + -0x5ab + 0x11f * -0x7)) + parseInt(n(0xa6)) / (0x1f06 + 0x97e + -0x287e) * (-parseInt(m(0x92)) / (0xde5 + -0x24ae + 0xa * 0x248)) + -parseInt(n(0x86)) / (0x4e3 + -0xed9 + 0x9fe) * (-parseInt(m(0xa4)) / (-0x4 * -0xf1 + 0x1003 * 0x2 + -0x23c1)) + parseInt(n(0x85)) / (-0xef7 * -0x1 + -0x14e5 * -0x1 + -0x23d2) + -parseInt(n(0x87)) / (0x26e9 + 0x109a + -0x3778) * (-parseInt(m(0x9b)) / (0x99e + -0x164f + 0x1 * 0xcbd));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6edfe * -0x1 + 0x8f29 * -0xf + 0x138bb4));
var __importDefault = this && this[o(0x8b) + o(0x90)] || function (c) {
    const q = o;
    return c && c[q(0x95)] ? c : { 'default': c };
};
const k = {};
k[o(0x96)] = !![], Object[p(0x9d) + o(0xa2)](exports, o(0x95), k);
const sequelize_1 = require(p(0x83)), AutoReply_1 = __importDefault(require(p(0x97) + p(0x89) + 'ly')), StepsReply_1 = __importDefault(require(p(0x97) + o(0x9e) + p(0x8d))), StepsReplyAction_1 = __importDefault(require(p(0x97) + o(0x9e) + p(0xa7))), VerifyActionStepAutoReplyService = async (e, f, g) => {
        const r = o, s = p, h = {};
        h[r(0x84)] = r(0x8e), h[r(0x8c)] = s(0x98), h[s(0x9f)] = s(0x88), h[s(0x9c)] = s(0x8a);
        const i = h;
        if (!f)
            return null;
        const j = {};
        j[r(0x8f)] = g;
        const l = await StepsReplyAction_1[s(0x99)][s(0xa0)]({
            'where': {
                'stepReplyId': e,
                'words': (0x2cc + -0x1c5 + -0x107, sequelize_1[r(0xa5)])((-0x1a1b + -0x1cac + 0x36c7, sequelize_1['fn'])(i[s(0x84)], (0x653 * 0x1 + -0x5de * -0x2 + -0x120f, sequelize_1[r(0x93)])(i[r(0x8c)])), (-0x13a7 + 0xd1 * 0x11 + 0x5c6 * 0x1, sequelize_1['fn'])(i[r(0x84)], f))
            },
            'include': [{
                    'model': StepsReply_1[s(0x99)],
                    'as': i[s(0x9f)],
                    'include': [{
                            'model': AutoReply_1[s(0x99)],
                            'as': i[s(0x9c)],
                            'where': j
                        }]
                }]
        });
        return l;
    };
exports[p(0x99)] = VerifyActionStepAutoReplyService;