'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0xbe)) / (-0x153 * -0x17 + 0x1f75 * -0x1 + -0x1 * -0x101) + -parseInt(o(0xca)) / (-0x2 * 0x922 + 0xcc5 + 0x1 * 0x581) * (parseInt(p(0xb3)) / (-0x288 + -0x1582 * 0x1 + -0x83 * -0x2f)) + parseInt(o(0xba)) / (0xd2b * -0x1 + 0x49c + -0x893 * -0x1) + parseInt(o(0xc1)) / (-0x4 * 0x703 + 0x24d7 * -0x1 + 0x40e8) * (-parseInt(p(0xb7)) / (-0xb3 * -0x27 + -0x1baa + 0x6b)) + parseInt(p(0xcc)) / (0x1706 + -0xa49 + 0xcb6 * -0x1) * (-parseInt(p(0xcd)) / (-0x173b + 0x25f1 + -0xeae)) + -parseInt(o(0xc2)) / (-0x21f * 0x5 + -0x28 * -0xcb + 0x4 * -0x545) + parseInt(o(0xc5)) / (0x1 * -0x1cf1 + 0x57 * 0x5 + 0x3 * 0x918) * (parseInt(p(0xc6)) / (0x173 + 0x63d + -0x67 * 0x13));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x32f2 * -0x9 + -0x4919e + 0x59 * 0x1e57));
var __importDefault = this && this[q(0xb9) + q(0xcf)] || function (c) {
    const s = r;
    return c && c[s(0xb5)] ? c : { 'default': c };
};
const k = {};
function a() {
    const v = [
        '191455oFhkNS',
        'queueId',
        'replyDefin',
        '10oMQFLk',
        '1142883kKXhei',
        'defineProp',
        'create',
        '915550sIHOmz',
        '165IkgJrj',
        '../../../m',
        'userIdDest',
        'action',
        '104GgWoVE',
        'odels/Step',
        '21nkSdQZ',
        '890952bOTSeG',
        'userId',
        'fault',
        'words',
        'sReplyActi',
        'stepReplyI',
        '17742kIWKDF',
        'ition',
        '__esModule',
        'value',
        '468516NbovYl',
        'nextStepId',
        '__importDe',
        '69548ILLCGr',
        'erty',
        'default',
        'ination'
    ];
    a = function () {
        return v;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x13 * -0xf3 + -0x1fe2 + 0x16 * 0x24d);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[r(0xb6)] = !![], Object[r(0xc3) + r(0xbb)](exports, q(0xb5), k);
const StepsReplyAction_1 = __importDefault(require(r(0xc7) + q(0xcb) + q(0xd1) + 'on')), CreateStepsReplyActionService = async ({
        stepReplyId: d,
        words: e,
        action: f,
        userId: g,
        queueId: h,
        userIdDestination: i,
        nextStepId: j,
        replyDefinition: l
    }) => {
        const t = q, u = q, m = {};
        m[t(0xd2) + 'd'] = d, m[u(0xd0)] = e, m[u(0xc9)] = f, m[t(0xce)] = g, m[t(0xbf)] = h, m[t(0xc8) + t(0xbd)] = i, m[t(0xb8)] = j, m[t(0xc0) + u(0xb4)] = l;
        const n = await StepsReplyAction_1[t(0xbc)][u(0xc4)](m);
        return n;
    };
exports[q(0xbc)] = CreateStepsReplyActionService;