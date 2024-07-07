'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0x207)) / (0xfeb + -0x2209 * 0x1 + 0x121f) * (-parseInt(A(0x1f3)) / (0x2 * 0x8f0 + 0x6b * -0x1 + -0x1173)) + parseInt(A(0x20c)) / (-0x25b * -0xc + 0x1276 + -0x2eb7) + -parseInt(A(0x1ed)) / (-0x31 * -0x9d + -0x1ee5 + 0xdc) * (parseInt(z(0x206)) / (-0x1c88 + 0x59 * 0x4 + 0x1b29)) + parseInt(z(0x1f4)) / (-0x1a60 + 0x2093 + 0x11 * -0x5d) + parseInt(A(0x1ea)) / (0x58b + -0x466 + -0x11e) * (-parseInt(A(0x1fd)) / (0x1 * -0x1f0b + 0x2634 + 0x49 * -0x19)) + -parseInt(z(0x1e4)) / (-0x26 * 0x33 + 0xb7d + -0x7 * 0x8e) + parseInt(z(0x1fb)) / (0x1631 + 0x189f + -0x2ec6) * (parseInt(z(0x214)) / (0x1 * -0x65a + 0x24db + -0x1e76));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x1bcb2 + -0x5 * 0xe3f2 + 0x1 * 0x9afa9));
var __importDefault = this && this[B(0x1f1) + B(0x20d)] || function (c) {
    const D = C;
    return c && c[D(0x1f7)] ? c : { 'default': c };
};
const k = {};
k[C(0x1ec)] = !![], Object[C(0x1ef) + C(0x1e7)](exports, C(0x1f7), k);
function a() {
    const G = [
        'WLOXF',
        'ikeWN',
        'stepReplyI',
        'ination',
        '906708SnYvhu',
        'fault',
        '../../../e',
        'action',
        'words',
        'bLtpS',
        'attributes',
        'findOne',
        '3476FtbGEZ',
        'rror',
        'BzmMe',
        '2543094oGOYgC',
        'qnSAd',
        'ERR_NO_STE',
        'erty',
        'userIdDest',
        'update',
        '2010302Uvlcrw',
        'userId',
        'value',
        '847036QqsLjJ',
        'qdwwj',
        'defineProp',
        'rrors/AppE',
        '__importDe',
        'nextStepId',
        '204AewHju',
        '339084KKQjyD',
        '../../../m',
        'default',
        '__esModule',
        'pPVgQ',
        'queueId',
        'reload',
        '17910tbIQeE',
        'where',
        '8ffzigS',
        'LY_FOUND',
        'replyDefin',
        'sIKKe',
        'odels/Step',
        'xpebc',
        'sReplyActi',
        'P_AUTO_REP',
        'ition',
        '5RQvREb',
        '843WKfccW'
    ];
    a = function () {
        return G;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x7d9 + -0x43d * -0x3 + -0x2fc);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(C(0x20e) + C(0x1f0) + C(0x1e2))), StepsReplyAction_1 = __importDefault(require(C(0x1f5) + B(0x201) + B(0x203) + 'on')), UpdateStepsReplyActionService = async ({
        stepsReplyActionData: h,
        stepsReplyActionId: i
    }) => {
        const E = B, F = B, j = {};
        j[E(0x211)] = E(0x20a) + 'd', j[F(0x1f8)] = F(0x210), j[E(0x1ee)] = F(0x20f), j[E(0x1e5)] = F(0x1eb), j[F(0x202)] = F(0x1f9), j[F(0x1e3)] = E(0x1e8) + E(0x20b), j[F(0x209)] = F(0x1f2), j[F(0x200)] = E(0x1ff) + E(0x205), j[F(0x208)] = E(0x1e6) + E(0x204) + F(0x1fe);
        const l = j, {
                stepReplyId: m,
                words: n,
                action: o,
                userId: p,
                queueId: q,
                userIdDestination: r,
                nextStepId: s,
                replyDefinition: t
            } = h, u = {};
        u['id'] = i;
        const v = {};
        v[F(0x1fc)] = u, v[E(0x212)] = [
            'id',
            l[F(0x211)],
            l[E(0x1f8)],
            l[F(0x1ee)],
            l[E(0x1e5)],
            l[E(0x202)],
            l[E(0x1e3)],
            l[F(0x209)],
            l[E(0x200)]
        ];
        const w = await StepsReplyAction_1[E(0x1f6)][E(0x213)](v);
        if (!w)
            throw new AppError_1[(F(0x1f6))](l[F(0x208)], -0xc31 * -0x3 + -0x109d + -0x931 * 0x2);
        const x = {};
        x[E(0x20a) + 'd'] = m, x[F(0x210)] = n, x[E(0x20f)] = o, x[E(0x1eb)] = p, x[F(0x1f9)] = q, x[F(0x1e8) + E(0x20b)] = r, x[E(0x1f2)] = s, x[E(0x1ff) + F(0x205)] = t, await w[E(0x1e9)](x);
        const y = {};
        return y[E(0x212)] = [
            'id',
            l[E(0x211)],
            l[E(0x1f8)],
            l[F(0x1ee)],
            l[F(0x1e5)],
            l[F(0x202)],
            l[E(0x1e3)],
            l[F(0x209)],
            l[F(0x200)]
        ], await w[F(0x1fa)](y), w;
    };
exports[B(0x1f6)] = UpdateStepsReplyActionService;