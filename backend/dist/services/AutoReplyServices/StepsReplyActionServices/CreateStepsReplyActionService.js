'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x109)) / (-0x2 * -0xa41 + 0x15fe + -0x2a7f * 0x1) + -parseInt(p(0x11a)) / (-0x17 * -0xb9 + -0x11b + 0x2 * -0x7c1) * (-parseInt(p(0x10d)) / (-0x1a2e * -0x1 + 0x2 * -0x3b1 + -0x12c9)) + -parseInt(p(0x111)) / (0x1aa3 + -0x5e7 + 0x374 * -0x6) * (parseInt(o(0x11f)) / (0x92 * -0x3e + -0xf95 + 0x32f6)) + -parseInt(o(0x11b)) / (0xdfc + 0xad * -0x11 + -0x3 * 0xd3) + parseInt(o(0x10c)) / (-0x2 * 0x3e + 0xf9b + -0xf18) + -parseInt(p(0x107)) / (-0x2b8 * -0xa + 0xd2f + -0x2857) + parseInt(p(0x116)) / (-0x3 * -0x8ef + 0x1634 + -0x30f8);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2c83a + -0x1 * 0x3707 + 0x6f27b * 0x1));
var __importDefault = this && this[q(0x10a) + q(0x10f)] || function (c) {
    const s = r;
    return c && c[s(0x113)] ? c : { 'default': c };
};
function a() {
    const v = [
        '172178AjTtPP',
        '1030026EgFsSt',
        'stepReplyI',
        'action',
        'odels/Step',
        '244235SGrnyt',
        'ination',
        'erty',
        'userId',
        'queueId',
        'value',
        '313288JNLNhr',
        'userIdDest',
        '2645pLAlXV',
        '__importDe',
        'sReplyActi',
        '2847978ktzMvR',
        '3YHbrfY',
        'replyDefin',
        'fault',
        'default',
        '20jtGkoD',
        'defineProp',
        '__esModule',
        '../../../m',
        'nextStepId',
        '1965177VtPqjr',
        'words',
        'create',
        'ition'
    ];
    a = function () {
        return v;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1943 + 0xe18 + 0x2 * 0x617);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[q(0x106)] = !![], Object[r(0x112) + q(0x103)](exports, r(0x113), k);
const StepsReplyAction_1 = __importDefault(require(r(0x114) + q(0x11e) + q(0x10b) + 'on')), CreateStepsReplyActionService = async ({
        stepReplyId: d,
        words: e,
        action: f,
        userId: g,
        queueId: h,
        userIdDestination: i,
        nextStepId: j,
        replyDefinition: l
    }) => {
        const t = r, u = r, m = {};
        m[t(0x11c) + 'd'] = d, m[u(0x117)] = e, m[t(0x11d)] = f, m[t(0x104)] = g, m[t(0x105)] = h, m[t(0x108) + u(0x120)] = i, m[u(0x115)] = j, m[t(0x10e) + u(0x119)] = l;
        const n = await StepsReplyAction_1[t(0x110)][u(0x118)](m);
        return n;
    };
exports[q(0x110)] = CreateStepsReplyActionService;