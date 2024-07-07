'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0x1c4)) / (-0x22d * -0x3 + -0x2612 + 0x1f8c) * (-parseInt(y(0x1be)) / (-0x27c * 0xb + 0x115 * -0x6 + 0xa * 0x362)) + parseInt(y(0x1cc)) / (-0x1b37 + -0x23ed + 0x3f27) * (-parseInt(x(0x1d1)) / (0x2043 + -0x2452 + 0x7 * 0x95)) + -parseInt(y(0x1de)) / (0x1ce7 + 0x2537 + 0x4219 * -0x1) * (parseInt(x(0x1d7)) / (-0x39 * -0x16 + -0x2 * -0x23 + -0x526)) + -parseInt(y(0x1e4)) / (0x4d7 + -0xfaf + 0xb * 0xfd) + -parseInt(y(0x1d8)) / (0x10e5 + -0x1bc8 + 0xaeb) + -parseInt(y(0x1e2)) / (-0x1d03 * -0x1 + -0x2151 * -0x1 + -0x3e4b) * (-parseInt(x(0x1c9)) / (-0x4c7 * 0x1 + -0x121e + 0x16ef)) + parseInt(x(0x1d3)) / (-0x3 * -0xcff + -0xa8a + 0x12 * -0x194) * (parseInt(y(0x1d0)) / (0x1 * 0x16c3 + -0x169c + -0x1b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x807cd + 0x1 * -0x84b69 + 0x190899));
var __importDefault = this && this[z(0x1d5) + A(0x1c5)] || function (c) {
    const B = z;
    return c && c[B(0x1c1)] ? c : { 'default': c };
};
const k = {};
function a() {
    const E = [
        'attributes',
        '5zEnYCR',
        'name',
        'isActive',
        '../../erro',
        '18VcZbZE',
        'update',
        '7838075gyHcdN',
        'erty',
        'action',
        'YMMjt',
        'rs/AppErro',
        '16bUHpVV',
        'value',
        'reload',
        '__esModule',
        'ApQtb',
        'findOne',
        '98918FyIyTp',
        'fault',
        '../../mode',
        'where',
        'tenantId',
        '4995310ZTOVar',
        'nMmlV',
        'O_REPLY_FO',
        '18hNuLIM',
        'FAPEq',
        'celularTes',
        'qluTa',
        '696SJLRFa',
        '32624mjBTzb',
        'ERR_NO_AUT',
        '368533eTxMJM',
        'default',
        '__importDe',
        'defineProp',
        '1570512iRoSfk',
        '1198048pdPJqF',
        'cQHqb',
        'userId',
        'ls/AutoRep',
        'UND'
    ];
    a = function () {
        return E;
    };
    return a();
}
k[z(0x1bf)] = !![], Object[z(0x1d6) + z(0x1e5)](exports, A(0x1c1), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2 * -0x875 + 0x1 * 0x1d15 + 0x4eb * -0x9);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(z(0x1e1) + A(0x1bd) + 'r')), AutoReply_1 = __importDefault(require(z(0x1c6) + z(0x1db) + 'ly')), UpdateAutoReplyService = async ({
        autoReplyData: h,
        autoReplyId: i,
        tenantId: j
    }) => {
        const C = A, D = A, l = {};
        l[C(0x1cf)] = C(0x1df), l[D(0x1d9)] = D(0x1e6), l[C(0x1c2)] = D(0x1da), l[D(0x1ca)] = C(0x1e0), l[C(0x1bc)] = D(0x1ce) + 'te', l[D(0x1cd)] = C(0x1d2) + C(0x1cb) + C(0x1dc);
        const m = l, {
                name: n,
                action: o,
                userId: p,
                isActive: q,
                celularTeste: r
            } = h, s = {};
        s['id'] = i, s[D(0x1c8)] = j;
        const t = {};
        t[D(0x1c7)] = s, t[C(0x1dd)] = [
            'id',
            m[C(0x1cf)],
            m[C(0x1d9)],
            m[D(0x1c2)],
            m[C(0x1ca)],
            m[C(0x1bc)]
        ];
        const u = await AutoReply_1[C(0x1d4)][D(0x1c3)](t);
        if (!u)
            throw new AppError_1[(C(0x1d4))](m[D(0x1cd)], -0xea2 * 0x1 + 0x1 * 0xe36 + -0x2 * -0x100);
        const v = {};
        v[C(0x1df)] = n, v[D(0x1e6)] = o, v[C(0x1da)] = p, v[D(0x1e0)] = q, v[D(0x1ce) + 'te'] = r, await u[C(0x1e3)](v);
        const w = {};
        return w[C(0x1dd)] = [
            'id',
            m[D(0x1cf)],
            m[D(0x1d9)],
            m[C(0x1c2)],
            m[C(0x1ca)],
            m[C(0x1bc)]
        ], await u[D(0x1c0)](w), u;
    };
exports[A(0x1d4)] = UpdateAutoReplyService;