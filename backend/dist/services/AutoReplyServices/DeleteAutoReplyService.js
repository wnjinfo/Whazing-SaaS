'use strict';
function a() {
    const z = [
        '1972812QzUvBv',
        'IONED_TICK',
        'destroy',
        '__importDe',
        'ERR_NO_AUT',
        '1020980ioXjiO',
        '../../erro',
        'UND',
        'where',
        '63160mmPNSk',
        'ybZJW',
        'O_REPLY_FO',
        'ERR_AUTO_R',
        '4529NKbSoT',
        'fault',
        'findOne',
        '../../mode',
        'erty',
        'ls/Ticket',
        'value',
        '__esModule',
        'EPLY_RELAT',
        'default',
        '2430898DiLoMB',
        'ls/AutoRep',
        '1136313DWpKGj',
        '2151tjotAl',
        'rs/AppErro',
        'udfXt',
        'autoReplyI',
        '162JkCdhj',
        '6035095qTvXgX',
        'defineProp',
        'tenantId'
    ];
    a = function () {
        return z;
    };
    return a();
}
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0x75)) / (0x19bb + -0x1 * 0x14a1 + 0xf * -0x57) + -parseInt(s(0x87)) / (0x3c7 * 0x1 + 0x35d + -0x722) + parseInt(t(0x67)) / (-0x2017 + 0x3 * -0x423 + 0x2c83) + -parseInt(t(0x70)) / (-0x2d3 * 0x7 + 0x1d7b * -0x1 + 0x3144) + parseInt(s(0x6d)) / (-0xf6a + 0x154a + -0x5db * 0x1) + -parseInt(t(0x6c)) / (0xcdc + 0x2e8 * -0x2 + 0x3e * -0x1d) * (parseInt(t(0x7d)) / (0xc * -0x1a5 + -0x1 * 0xbb7 + -0xed * -0x22)) + parseInt(t(0x79)) / (-0x1 * 0x6c5 + 0x2301 + -0x1c34) * (parseInt(s(0x68)) / (-0x1b05 + -0x21 * -0x117 + -0x8e9));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3 * 0xfe4f + -0x4bc6 + 0xe590d));
var __importDefault = this && this[u(0x73) + u(0x7e)] || function (c) {
    const w = u;
    return c && c[w(0x84)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x14d7 + 0x1 * -0x529 + -0xf47);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[v(0x83)] = !![], Object[v(0x6e) + v(0x81)](exports, v(0x84), k);
const AutoReply_1 = __importDefault(require(u(0x80) + u(0x88) + 'ly')), AppError_1 = __importDefault(require(u(0x76) + u(0x69) + 'r')), Ticket_1 = __importDefault(require(u(0x80) + u(0x82))), DeleteAutoReplyService = async ({
        id: h,
        tenantId: i
    }) => {
        const x = u, y = v, j = {};
        j[x(0x6a)] = x(0x7c) + y(0x85) + x(0x71) + 'ET', j[x(0x7a)] = x(0x74) + x(0x7b) + y(0x77);
        const l = j, m = {};
        m['id'] = h, m[x(0x6f)] = i;
        const n = {};
        n[x(0x78)] = m;
        const o = await AutoReply_1[y(0x86)][y(0x7f)](n), p = {};
        p[y(0x6b) + 'd'] = h;
        const q = {};
        q[x(0x78)] = p;
        const r = await Ticket_1[x(0x86)][y(0x7f)](q);
        if (r)
            throw new AppError_1[(x(0x86))](l[y(0x6a)], 0x1b1 * 0xc + 0x228c + -0x3544);
        if (!o)
            throw new AppError_1[(y(0x86))](l[y(0x7a)], -0x23ef + -0x181e + 0x1 * 0x3da1);
        await o[y(0x72)]();
    };
exports[v(0x86)] = DeleteAutoReplyService;