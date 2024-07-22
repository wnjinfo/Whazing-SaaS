'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x1f3)) / (0x1828 * -0x1 + -0x1451 + 0x1 * 0x2c7a) + -parseInt(p(0x1f4)) / (-0x260c + 0x1eb6 + 0x1 * 0x758) * (-parseInt(q(0x1fc)) / (-0x1733 + 0xdb2 + 0xe * 0xae)) + parseInt(q(0x208)) / (0x39 * 0xd + 0x1225 + -0x2 * 0xa83) * (-parseInt(p(0x1f0)) / (-0x4f * -0x1d + -0xd99 * -0x2 + -0x2420)) + parseInt(p(0x209)) / (0xe52 + -0xa86 * 0x1 + -0x142 * 0x3) * (-parseInt(p(0x1f1)) / (-0x56 * -0x65 + 0x66f + -0x2856)) + parseInt(p(0x204)) / (-0x1a9b + 0x1 * -0x244f + 0x3ef2) * (parseInt(q(0x1ff)) / (-0x2565 + -0x664 + -0x2bd2 * -0x1)) + -parseInt(q(0x20e)) / (-0x1a66 + 0x2457 + 0xc3 * -0xd) + parseInt(p(0x20c)) / (0x3 * -0x3b9 + -0x5 * -0x3e6 + -0x848) * (parseInt(p(0x1fd)) / (0x1e3 * -0x5 + 0x8ee + 0x3 * 0x2f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xde1e + -0x18a6e + -0x6f4 * -0x100));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x149f + -0x454 * 0x8 + 0xff1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const w = [
        '__importDe',
        'fault',
        'YTAtk',
        'rs/AppErro',
        'where',
        'update',
        '582QuheKl',
        '11247972tXwJzW',
        'ls/Whatsap',
        '9tAipgx',
        'defineProp',
        'findOne',
        'status',
        'tenantId',
        '4653464VAaTFl',
        'DISCONNECT',
        'Coxrk',
        '__esModule',
        '157356sQCsAm',
        '132JYfBqd',
        'ERR_NO_WAP',
        'isDeleted',
        '11GQlFQD',
        '../../mode',
        '1889450WEIZsx',
        'erty',
        'P_FOUND',
        '../../erro',
        '5VwDUsm',
        '87094ZsxOxv',
        'value',
        '726300FfDEky',
        '1246gYovsY',
        'default'
    ];
    a = function () {
        return w;
    };
    return a();
}
var __importDefault = this && this[r(0x1f6) + s(0x1f7)] || function (c) {
    const t = s;
    return c && c[t(0x207)] ? c : { 'default': c };
};
const k = {};
k[r(0x1f2)] = !![], Object[s(0x200) + r(0x20f)](exports, r(0x207), k);
const Whatsapp_1 = __importDefault(require(r(0x20d) + r(0x1fe) + 'p')), AppError_1 = __importDefault(require(s(0x211) + s(0x1f9) + 'r')), DeleteWhatsApprService = async (g, h) => {
        const u = s, v = r, i = {};
        i[u(0x1f8)] = v(0x20a) + u(0x210), i[u(0x206)] = u(0x205) + 'ED';
        const j = i, l = {};
        l['id'] = g, l[u(0x203)] = h;
        const m = {};
        m[u(0x1fa)] = l;
        const n = await Whatsapp_1[u(0x1f5)][u(0x201)](m);
        if (!n)
            throw new AppError_1[(u(0x1f5))](j[u(0x1f8)], 0x4a * 0x14 + 0x2205 + -0x2639);
        const o = {};
        o[v(0x20b)] = !![], o[u(0x202)] = j[u(0x206)], await n[v(0x1fb)](o);
    };
exports[r(0x1f5)] = DeleteWhatsApprService;