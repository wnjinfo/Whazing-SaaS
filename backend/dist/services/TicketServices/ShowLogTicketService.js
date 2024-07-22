'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0x141)) / (0x1a97 + -0xbfd + -0xe99) * (-parseInt(q(0x127)) / (-0x101f + -0x1f02 + 0x449 * 0xb)) + parseInt(r(0x13d)) / (-0x1655 + 0x1 * -0x266b + -0x3d * -0xff) + -parseInt(r(0x144)) / (0x1426 + 0x184b + -0xdf * 0x33) + parseInt(q(0x123)) / (0x1 * 0x1f8f + -0x4 * -0x4ce + -0x32c2) * (parseInt(q(0x131)) / (-0x380 * 0x4 + -0x1 * -0x1319 + 0x513 * -0x1)) + -parseInt(r(0x138)) / (-0x1dce + -0x44f * -0x4 + 0xc99) * (parseInt(q(0x139)) / (0x633 * 0x6 + 0x1ecf + 0x43f9 * -0x1)) + -parseInt(q(0x125)) / (0x19f2 + 0x10d0 + 0x2ab9 * -0x1) * (-parseInt(q(0x135)) / (-0xcad * 0x1 + 0x39 * -0x6 + 0xe0d)) + parseInt(r(0x128)) / (-0x63b + 0x5a * 0x5a + -0x22 * 0xbf) * (parseInt(q(0x146)) / (0x1984 + 0x55b + -0x1ed3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x4ffdc + 0x6095 * 0x17 + -0x1f3d0 * 0x3));
var __importDefault = this && this[s(0x13e) + s(0x13a)] || function (c) {
    const u = s;
    return c && c[u(0x134)] ? c : { 'default': c };
};
function a() {
    const x = [
        'value',
        '__esModule',
        '2560sAiwEw',
        'findAll',
        'ls/LogTick',
        '7oFZMxn',
        '2778920keXcyG',
        'fault',
        'createdAt',
        'user',
        '2335986bBuaUn',
        '__importDe',
        'where',
        'defineProp',
        '136XozFnQ',
        'attributes',
        'default',
        '4088692CKVLyx',
        'ls/User',
        '132iDMgqA',
        'PIsSS',
        'model',
        'VMqJu',
        'Bpomv',
        '1827955lRSVOW',
        'name',
        '3123QJuBgb',
        'plYMQ',
        '596brAxuo',
        '608388BGwRUo',
        'order',
        'DdZrd',
        'ls/Queue',
        'queue',
        'DESC',
        'include',
        '../../mode',
        'ticketId',
        '6vTfudy',
        'erty'
    ];
    a = function () {
        return x;
    };
    return a();
}
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x989 + -0xb8f + 0x1639 * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[t(0x133)] = !![], Object[s(0x140) + t(0x132)](exports, t(0x134), k);
const LogTicket_1 = __importDefault(require(s(0x12f) + t(0x137) + 'et')), User_1 = __importDefault(require(s(0x12f) + t(0x145))), Queue_1 = __importDefault(require(t(0x12f) + t(0x12b))), ShowLogTicketService = async ({ticketId: h}) => {
        const v = s, w = t, i = {};
        i[v(0x12a)] = v(0x13c), i[w(0x147)] = v(0x124), i[v(0x122)] = v(0x12c), i[v(0x121)] = w(0x13b), i[v(0x126)] = w(0x12d);
        const j = i, l = {};
        l[v(0x130)] = h;
        const m = {};
        m[v(0x148)] = User_1[w(0x143)], m['as'] = j[v(0x12a)], m[v(0x142)] = [
            'id',
            j[w(0x147)]
        ];
        const n = {};
        n[v(0x148)] = Queue_1[w(0x143)], n['as'] = j[w(0x122)], n[w(0x142)] = [
            'id',
            j[w(0x122)]
        ];
        const o = {};
        o[w(0x13f)] = l, o[w(0x12e)] = [
            m,
            n
        ], o[v(0x129)] = [[
                j[v(0x121)],
                j[w(0x126)]
            ]];
        const p = await LogTicket_1[w(0x143)][w(0x136)](o);
        return p;
    };
exports[t(0x143)] = ShowLogTicketService;