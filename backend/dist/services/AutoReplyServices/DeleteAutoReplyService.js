'use strict';
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0xf1)) / (-0xc84 + -0x17d + 0xa3 * 0x16) * (-parseInt(t(0xf7)) / (-0x8 * 0x5b + -0x5 * 0x3 + 0x2e9)) + -parseInt(s(0xff)) / (0x5ea + -0x82f + 0x248) * (-parseInt(t(0xfc)) / (-0x9bf + -0x17c2 * -0x1 + -0xdff * 0x1)) + parseInt(t(0xfa)) / (0x9 * 0x16a + -0x17eb + 0xb36) * (parseInt(s(0x109)) / (-0xca9 + -0xa7 * -0x17 + 0x1 * -0x252)) + parseInt(s(0xef)) / (-0xbb + 0x1 * -0xb77 + 0xc39) * (parseInt(s(0xfb)) / (0xf4d + 0x1 * -0x11b3 + 0x2 * 0x137)) + parseInt(t(0x107)) / (0x2 * -0x623 + 0x159e * 0x1 + -0x94f * 0x1) * (-parseInt(t(0x10a)) / (0x7 * -0x2d3 + -0xe3 * 0x23 + 0x65b * 0x8)) + parseInt(t(0xe9)) / (0x14 * 0x41 + 0x2 * 0xdcd + -0x20a3) * (-parseInt(s(0xea)) / (-0x1158 + -0x21ed + 0x3351)) + -parseInt(s(0xf5)) / (0x1f * 0x39 + -0x116b + 0x21d * 0x5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3 * 0x1dd33 + -0x5 * -0x121a9 + -0x3 * -0x13b68));
var __importDefault = this && this[u(0xf8) + u(0xec)] || function (c) {
    const w = v;
    return c && c[w(0x104)] ? c : { 'default': c };
};
function a() {
    const z = [
        '__esModule',
        'where',
        'default',
        '47700xWgZlA',
        'value',
        '96FFsMrV',
        '190XHeIzC',
        'tenantId',
        'ERR_AUTO_R',
        'erty',
        'findOne',
        '1186427HtDIYO',
        '24klTTRa',
        'O_REPLY_FO',
        'fault',
        'IONED_TICK',
        'rs/AppErro',
        '14PxTwbJ',
        'HKRSZ',
        '363431LfJCWh',
        'ERR_NO_AUT',
        '../../mode',
        'ls/Ticket',
        '10987405DTGDYv',
        'destroy',
        '2KjNgOG',
        '__importDe',
        'EMfkp',
        '72265DiFSlu',
        '1566280PaHXLH',
        '843716Xxqtji',
        'UND',
        'autoReplyI',
        '6SuAIkj',
        '../../erro',
        'ls/AutoRep',
        'defineProp',
        'EPLY_RELAT'
    ];
    a = function () {
        return z;
    };
    return a();
}
const k = {};
k[u(0x108)] = !![], Object[v(0x102) + u(0xe7)](exports, v(0x104), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xa46 * -0x2 + -0x1d08 + 0x2 * 0x4b1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AutoReply_1 = __importDefault(require(u(0xf3) + v(0x101) + 'ly')), AppError_1 = __importDefault(require(v(0x100) + u(0xee) + 'r')), Ticket_1 = __importDefault(require(v(0xf3) + v(0xf4))), DeleteAutoReplyService = async ({
        id: h,
        tenantId: i
    }) => {
        const x = u, y = v, j = {};
        j[x(0xf9)] = y(0xe6) + y(0x103) + x(0xed) + 'ET', j[x(0xf0)] = x(0xf2) + x(0xeb) + y(0xfd);
        const l = j, m = {};
        m['id'] = h, m[x(0x10b)] = i;
        const n = {};
        n[y(0x105)] = m;
        const o = await AutoReply_1[x(0x106)][x(0xe8)](n), p = {};
        p[x(0xfe) + 'd'] = h;
        const q = {};
        q[y(0x105)] = p;
        const r = await Ticket_1[x(0x106)][y(0xe8)](q);
        if (r)
            throw new AppError_1[(x(0x106))](l[x(0xf9)], -0x2402 + 0x1 * 0x23c2 + 0x1d4);
        if (!o)
            throw new AppError_1[(y(0x106))](l[x(0xf0)], 0xe85 + 0x1f9 + -0xeea);
        await o[y(0xf6)]();
    };
exports[u(0x106)] = DeleteAutoReplyService;