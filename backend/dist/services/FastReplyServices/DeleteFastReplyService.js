'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x19d)) / (-0x1468 + -0x1cd4 + 0x313d) + -parseInt(p(0x195)) / (-0xad4 + -0x173 * -0x17 + -0x167f) + -parseInt(p(0x18a)) / (-0x244 * 0x7 + -0x10f5 + 0x20d4) * (parseInt(o(0x18d)) / (0x2594 + 0x10b3 + -0x3643)) + -parseInt(o(0x19a)) / (0x11e1 + -0x5e6 * 0x6 + -0x8c4 * -0x2) + parseInt(p(0x196)) / (-0x2 * -0x68e + -0x1f * 0x7f + 0x24b) + -parseInt(p(0x190)) / (-0xa2e + 0x1fc9 * 0x1 + -0x1594) + -parseInt(o(0x19e)) / (-0x151b + 0x7df + -0x6 * -0x236) * (-parseInt(o(0x192)) / (-0x1988 + -0x17f * -0x1 + 0x1812));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xe090 * 0x9 + 0xce5be + -0xbeef2));
var __importDefault = this && this[q(0x19f) + r(0x194)] || function (c) {
    const s = r;
    return c && c[s(0x185)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x81 * 0x10 + 0x8b * -0x25 + 0xd8a);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[r(0x183)] = !![], Object[r(0x18c) + q(0x19b)](exports, r(0x185), k);
function a() {
    const v = [
        '__importDe',
        'where',
        'EPLY_EXIST',
        'value',
        '../../erro',
        '__esModule',
        'ERR_FAST_R',
        'findOne',
        'default',
        'destroy',
        '249591tIzFzR',
        'tenantId',
        'defineProp',
        '48NIJdhu',
        'DNnvO',
        '../../mode',
        '4496415MuwVRn',
        'T_REPLY_FO',
        '22014wfbzov',
        'jWIaQ',
        'fault',
        '1558740twsQNm',
        '2772606HoRlwW',
        'ERR_NO_FAS',
        'ls/FastRep',
        'UND',
        '4595870ntKabJ',
        'erty',
        'rs/AppErro',
        '715758mciTxK',
        '8968kXgVaF'
    ];
    a = function () {
        return v;
    };
    return a();
}
const AppError_1 = __importDefault(require(r(0x184) + r(0x19c) + 'r')), FastReply_1 = __importDefault(require(r(0x18f) + q(0x198) + 'ly')), DeleteFastReplyService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = r, u = r, h = {};
        h[t(0x193)] = u(0x197) + t(0x191) + t(0x199), h[t(0x18e)] = u(0x186) + u(0x1a1) + 'S';
        const i = h, j = {};
        j['id'] = f, j[t(0x18b)] = g;
        const l = {};
        l[u(0x1a0)] = j;
        const m = await FastReply_1[u(0x188)][u(0x187)](l);
        if (!m)
            throw new AppError_1[(t(0x188))](i[t(0x193)], -0x882 * -0x4 + 0xc5e + -0x2cd2);
        try {
            await m[t(0x189)]();
        } catch (n) {
            throw new AppError_1[(u(0x188))](i[t(0x18e)], -0x404 * 0x4 + -0x1 * -0x164b + -0x4a7);
        }
    };
exports[r(0x188)] = DeleteFastReplyService;