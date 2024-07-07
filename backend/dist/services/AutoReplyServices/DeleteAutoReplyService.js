'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(s(0x152)) / (0x7cb * 0x3 + 0x7e8 + -0x1f48) + parseInt(s(0x154)) / (-0xb79 * 0x3 + 0xb * -0xa + -0x22db * -0x1) * (parseInt(s(0x14b)) / (0x7f6 + -0x13 * 0xe9 + 0x958)) + parseInt(s(0x141)) / (-0x955 + -0xc3 * -0x2c + -0x10d * 0x17) + -parseInt(t(0x156)) / (0x31 * -0x17 + 0x3 * -0x7c7 + 0x1bc1) + -parseInt(t(0x155)) / (-0x1399 * 0x1 + 0x1e1d + 0x9e * -0x11) * (-parseInt(s(0x13d)) / (-0xb43 * 0x1 + -0x2 * 0xba2 + 0x228e)) + parseInt(s(0x13c)) / (-0xbcf + -0x967 + -0x2 * -0xa9f) * (-parseInt(t(0x13a)) / (0x1 * -0x1844 + 0x1d2c + -0x1d * 0x2b)) + -parseInt(t(0x15b)) / (-0x284 + -0x53f * 0x1 + -0x7cd * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xd01c7 + 0x193d21 + 0xd942));
var __importDefault = this && this[u(0x146) + u(0x158)] || function (c) {
    const w = u;
    return c && c[w(0x148)] ? c : { 'default': c };
};
const k = {};
k[u(0x147)] = !![], Object[u(0x13b) + v(0x13e)](exports, u(0x148), k);
function a() {
    const z = [
        'tenantId',
        '../../mode',
        'IONED_TICK',
        'ls/Ticket',
        '202627VoWHdg',
        '../../erro',
        '44LSvJpC',
        '309534Wornpw',
        '5315775xAFzCm',
        'FkwCC',
        'fault',
        'ERR_AUTO_R',
        'where',
        '12032790eMMqxe',
        'tIpjI',
        '36Iqudtg',
        'defineProp',
        '776864MMQIDn',
        '91CyAtZj',
        'erty',
        'destroy',
        'UND',
        '6489792xmkcOQ',
        'findOne',
        'default',
        'rs/AppErro',
        'ERR_NO_AUT',
        '__importDe',
        'value',
        '__esModule',
        'O_REPLY_FO',
        'ls/AutoRep',
        '138597ObreqR',
        'EPLY_RELAT',
        'autoReplyI'
    ];
    a = function () {
        return z;
    };
    return a();
}
const AutoReply_1 = __importDefault(require(v(0x14f) + u(0x14a) + 'ly')), AppError_1 = __importDefault(require(v(0x153) + u(0x144) + 'r')), Ticket_1 = __importDefault(require(v(0x14f) + v(0x151))), DeleteAutoReplyService = async ({
        id: h,
        tenantId: i
    }) => {
        const x = v, y = v, j = {};
        j[x(0x157)] = y(0x159) + x(0x14c) + x(0x150) + 'ET', j[y(0x139)] = x(0x145) + x(0x149) + y(0x140);
        const l = j, m = {};
        m['id'] = h, m[x(0x14e)] = i;
        const n = {};
        n[x(0x15a)] = m;
        const o = await AutoReply_1[x(0x143)][x(0x142)](n), p = {};
        p[x(0x14d) + 'd'] = h;
        const q = {};
        q[y(0x15a)] = p;
        const r = await Ticket_1[x(0x143)][y(0x142)](q);
        if (r)
            throw new AppError_1[(y(0x143))](l[y(0x157)], 0x66b + 0x1 * 0xe21 + -0x12f8);
        if (!o)
            throw new AppError_1[(y(0x143))](l[x(0x139)], 0x632 + 0x1 * 0x1413 + 0x3 * -0x83b);
        await o[y(0x13f)]();
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2e4 + 0x21bd + -0xb * 0x338);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[u(0x143)] = DeleteAutoReplyService;