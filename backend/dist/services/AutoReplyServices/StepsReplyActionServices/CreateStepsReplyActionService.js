'use strict';
const q = b, r = b;
function a() {
    const v = [
        'create',
        '316PnybHT',
        'ination',
        'default',
        '551295HDGvuh',
        'fault',
        '11EgBTqy',
        'userId',
        'queueId',
        'userIdDest',
        '371BsyUNh',
        '1798038MzsrGb',
        '105445nPqtZH',
        '../../../m',
        'words',
        'ition',
        'nextStepId',
        'sReplyActi',
        'erty',
        '125262ZFJzwk',
        '18581370Ebenyw',
        'action',
        '33304284nLgwKa',
        '__importDe',
        'replyDefin',
        'odels/Step',
        'value',
        'stepReplyI',
        '16CRMeZZ',
        'defineProp',
        '9oHOTQp',
        '768166cBZrSs',
        '__esModule'
    ];
    a = function () {
        return v;
    };
    return a();
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x1c4)) / (0x1 * -0x22e1 + 0xa2a * 0x1 + 0x18b8) + -parseInt(o(0x1b7)) / (-0xd6 * -0x23 + -0x26a3 + 0x963) * (-parseInt(o(0x1b6)) / (-0x662 + -0x17e4 * -0x1 + -0x3 * 0x5d5)) + -parseInt(p(0x1ba)) / (0x615 + -0x26a6 + 0x2095) * (-parseInt(o(0x1c5)) / (0xf5b + -0x5 * 0x6cd + 0x51 * 0x3b)) + -parseInt(p(0x1cc)) / (-0x1cf * 0xd + 0x167d + -0x1 * -0x10c) * (parseInt(o(0x1c3)) / (0x19dd * -0x1 + -0x1b1e + 0x3502)) + parseInt(p(0x1d5)) / (-0x2229 * -0x1 + 0x2 * 0xf45 + -0x40ab) * (parseInt(p(0x1bd)) / (-0x1b12 + 0xeb6 + 0xc65 * 0x1)) + parseInt(p(0x1cd)) / (-0x687 + -0x615 + -0xca6 * -0x1) * (-parseInt(p(0x1bf)) / (0x2593 * -0x1 + 0x23 * 0x25 + 0x208f)) + parseInt(o(0x1cf)) / (-0xabb * -0x3 + -0xa * 0x21 + -0x1edb * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3e * -0x7807 + 0x186a5b + -0x26ef7a));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x25e0 + -0x1b2 * 0x16 + 0x4ce1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[q(0x1d0) + r(0x1be)] || function (c) {
    const s = r;
    return c && c[s(0x1b8)] ? c : { 'default': c };
};
const k = {};
k[q(0x1d3)] = !![], Object[r(0x1b5) + q(0x1cb)](exports, q(0x1b8), k);
const StepsReplyAction_1 = __importDefault(require(r(0x1c6) + r(0x1d2) + r(0x1ca) + 'on')), CreateStepsReplyActionService = async ({
        stepReplyId: d,
        words: e,
        action: f,
        userId: g,
        queueId: h,
        userIdDestination: i,
        nextStepId: j,
        replyDefinition: l
    }) => {
        const t = r, u = q, m = {};
        m[t(0x1d4) + 'd'] = d, m[u(0x1c7)] = e, m[u(0x1ce)] = f, m[t(0x1c0)] = g, m[u(0x1c1)] = h, m[t(0x1c2) + t(0x1bb)] = i, m[u(0x1c9)] = j, m[t(0x1d1) + u(0x1c8)] = l;
        const n = await StepsReplyAction_1[u(0x1bc)][t(0x1b9)](m);
        return n;
    };
exports[r(0x1bc)] = CreateStepsReplyActionService;