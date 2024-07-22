'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(z(0x133)) / (-0x1 * 0x1c81 + 0xad1 + 0x1 * 0x11b1) + -parseInt(A(0x148)) / (-0x7c4 + -0x419 * 0x7 + 0x2475) + parseInt(A(0x131)) / (0x22b0 + -0x1ed2 + -0x3db) * (-parseInt(A(0x12d)) / (-0x1 * 0x2329 + -0x10d0 + 0x33fd)) + parseInt(A(0x14e)) / (0xce8 * 0x3 + -0x1 * -0x1f1e + 0x1 * -0x45d1) * (parseInt(z(0x14c)) / (0xbb1 * -0x1 + 0x1ce2 + -0x112b)) + parseInt(z(0x13d)) / (-0xd * 0x22d + -0xadb + 0x272b) * (parseInt(z(0x137)) / (-0xcc0 + -0x2a * 0x6f + 0x1efe)) + parseInt(z(0x146)) / (0x311 * 0x8 + 0x7ee + 0x3 * -0xacf) * (parseInt(z(0x135)) / (-0x4fe + 0x48 + -0x26 * -0x20)) + parseInt(z(0x130)) / (-0x16a9 * 0x1 + 0x1d7a + 0x2 * -0x363) * (-parseInt(z(0x132)) / (-0x2115 + -0x2 * -0xc4b + 0x88b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x5af4 + -0x4a * 0x15f3 + -0xcc2b * -0x1b));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1580 + -0x1a7 * -0xc + 0x1 * 0x2d1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const G = [
        'stepReplyI',
        'reload',
        'AmIrr',
        '580GOSzht',
        'update',
        'ination',
        '80894VFvHfv',
        '10263gcDbHG',
        '612HGCJsu',
        '745678AGXUXC',
        'odels/Step',
        '9973090fflAPc',
        'DKMDV',
        '6024SIXlku',
        'rror',
        '__esModule',
        'mGFYO',
        'userIdDest',
        'P_AUTO_REP',
        '15967pHxodr',
        'where',
        'LJrUD',
        'default',
        'defineProp',
        'Jmlch',
        'words',
        'value',
        'ERR_NO_STE',
        '9kzlTtW',
        'replyDefin',
        '3560384nplkKg',
        'fault',
        'LY_FOUND',
        'rrors/AppE',
        '6urzXrS',
        'ition',
        '814150pfFPLk',
        'sReplyActi',
        'gVviY',
        '../../../e',
        '__importDe',
        'action',
        'Wqgan',
        'nextStepId',
        'ProTV',
        'userId',
        'findOne',
        'queueId',
        'attributes',
        'rdTRX',
        '../../../m',
        'erty'
    ];
    a = function () {
        return G;
    };
    return a();
}
var __importDefault = this && this[B(0x152) + C(0x149)] || function (c) {
    const D = B;
    return c && c[D(0x139)] ? c : { 'default': c };
};
const k = {};
k[C(0x144)] = !![], Object[B(0x141) + C(0x129)](exports, B(0x139), k);
const AppError_1 = __importDefault(require(C(0x151) + C(0x14b) + B(0x138))), StepsReplyAction_1 = __importDefault(require(B(0x128) + C(0x134) + C(0x14f) + 'on')), UpdateStepsReplyActionService = async ({
        stepsReplyActionData: h,
        stepsReplyActionId: i
    }) => {
        const E = B, F = C, j = {};
        j[E(0x156)] = E(0x12a) + 'd', j[F(0x127)] = F(0x143), j[E(0x12c)] = F(0x153), j[E(0x136)] = E(0x157), j[E(0x13f)] = F(0x125), j[F(0x142)] = F(0x13b) + E(0x12f), j[E(0x150)] = E(0x155), j[E(0x154)] = E(0x147) + F(0x14d), j[F(0x13a)] = F(0x145) + F(0x13c) + E(0x14a);
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
        v[F(0x13e)] = u, v[F(0x126)] = [
            'id',
            l[F(0x156)],
            l[F(0x127)],
            l[E(0x12c)],
            l[E(0x136)],
            l[E(0x13f)],
            l[E(0x142)],
            l[F(0x150)],
            l[E(0x154)]
        ];
        const w = await StepsReplyAction_1[E(0x140)][E(0x158)](v);
        if (!w)
            throw new AppError_1[(E(0x140))](l[E(0x13a)], -0x26 * -0xd9 + -0x47b + -0x1a27 * 0x1);
        const x = {};
        x[F(0x12a) + 'd'] = m, x[F(0x143)] = n, x[F(0x153)] = o, x[E(0x157)] = p, x[F(0x125)] = q, x[E(0x13b) + E(0x12f)] = r, x[F(0x155)] = s, x[F(0x147) + F(0x14d)] = t, await w[E(0x12e)](x);
        const y = {};
        return y[F(0x126)] = [
            'id',
            l[F(0x156)],
            l[F(0x127)],
            l[F(0x12c)],
            l[F(0x136)],
            l[F(0x13f)],
            l[F(0x142)],
            l[F(0x150)],
            l[F(0x154)]
        ], await w[F(0x12b)](y), w;
    };
exports[C(0x140)] = UpdateStepsReplyActionService;