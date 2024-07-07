'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(B(0x118)) / (0x1 * 0x1334 + -0x52 * -0x16 + 0x1a3f * -0x1) * (parseInt(B(0x122)) / (-0xa8a * 0x1 + -0x17a0 + 0x144 * 0x1b)) + -parseInt(C(0x110)) / (-0x977 * -0x2 + -0xe73 + -0x478) + parseInt(C(0x10a)) / (0x25be + 0x1107 + -0x36c1 * 0x1) * (-parseInt(B(0x11f)) / (0x4 * -0x5e0 + -0x2391 + 0x3b16)) + -parseInt(C(0x11b)) / (-0x2 * 0x86d + -0xbc8 + 0x1ca8) + parseInt(C(0x119)) / (-0x248b + 0x1b7 * -0x7 + 0x3093) + -parseInt(C(0x100)) / (0xd * 0x15d + -0x1128 * -0x2 + -0x3401) + -parseInt(B(0xde)) / (0x18c0 + 0x1016 + 0x28cd * -0x1) * (-parseInt(C(0x121)) / (0x978 + 0x224b + -0x2bb9));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x7ce06 + -0x1 * 0x70c3 + 0x68 * -0x623));
var __importDefault = this && this[D(0x105) + D(0x10c)] || function (c) {
    const F = D;
    return c && c[F(0xe7)] ? c : { 'default': c };
};
const k = {};
k[D(0x10d)] = !![], Object[D(0xdd) + E(0xef)](exports, E(0xe7), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xb * -0x2dd + -0x1a38 + -0x3a8f * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const VerifyStepsChatFlowTicket_1 = __importDefault(require(D(0xe5) + E(0xf9) + D(0x109) + D(0xeb) + E(0xee))), FindOrCreateTicketService_1 = __importDefault(require(D(0x112) + E(0x116) + D(0xf4) + D(0xe9) + E(0xec))), VerifyBusinessHours_1 = __importDefault(require(D(0x120) + D(0xd9) + D(0xe6) + E(0x104) + E(0x111))), ShowWhatsAppService_1 = __importDefault(require(D(0x10f) + D(0xfa) + D(0x11a) + E(0xf8))), InstagramVerifyContact_1 = __importDefault(require(D(0xf2) + D(0xfc) + D(0xfd))), InstagramVerifyMediaMessage_1 = __importDefault(require(E(0xf2) + E(0xe2) + E(0x107))), InstagramVerifyMessage_1 = __importDefault(require(E(0xf2) + E(0xdb) + D(0x11d))), handleRealtimeReceive = async (h, i) => {
        const G = D, H = D, j = {};
        j[G(0xea)] = function (z, A) {
            return z === A;
        }, j[H(0xe0)] = H(0x102), j[H(0x10e)] = function (z, A) {
            return z !== A;
        }, j[G(0xda)] = G(0xf6), j[G(0x117)] = function (z, A) {
            return z / A;
        };
        const l = j, m = {};
        m['id'] = i['id'];
        const n = await (-0x160b + -0x265a + 0x1 * 0x3c65, ShowWhatsAppService_1[H(0xff)])(m), o = {};
        o[G(0xdc)] = h[H(0xe4)][G(0xdc)], o[H(0xe1) + H(0xf3)] = '';
        const p = await i[G(0xe3)][G(0x11e) + 'ad'](o)[G(0x11c)](), q = await (-0x2109 + 0xede + 0x122b, InstagramVerifyContact_1[G(0xff)])(p, i, n[H(0xdf)]), r = i?.[H(0x114) + 'in'], s = l[H(0xea)](r?.['pk'], h[H(0xe4)][H(0x103)]), t = {};
        t[H(0xf0)] = q, t[H(0xed)] = i['id'], t[G(0xd8) + G(0x115)] = s ? -0x1428 * -0x1 + 0xda * -0xd + -0x916 : 0x2043 + -0xe61 * -0x1 + 0x1 * -0x2ea3, t[H(0xdf)] = n[H(0xdf)], t[G(0xf1)] = { ...h[H(0xe4)] }, t[H(0xfe)] = l[G(0xe0)], t[G(0xf1)][H(0x108)] = s;
        const u = await (-0x24fa * -0x1 + 0x2133 + -0x462d, FindOrCreateTicketService_1[G(0xff)])(t);
        if (u?.[H(0x113) + G(0xf7)])
            return;
        l[G(0x10e)](h[H(0xe4)][G(0x101)], l[G(0xda)]) ? await (-0xde7 + 0x1 * -0x4b3 + 0x2 * 0x94d, InstagramVerifyMediaMessage_1[G(0xff)])(h, s, u, q) : await (-0x6 * -0x3ce + 0x265 * 0xc + -0x3390, InstagramVerifyMessage_1[G(0xff)])(h, s, u, q);
        const v = await i[H(0xe8)][G(0x11e) + 'ad'](h[H(0xe4)][G(0xdc)]);
        v[G(0x106) + 'en'](h[H(0xe4)][G(0xfb)]);
        const w = {};
        w[H(0x108)] = s, w[H(0x10b)] = h[G(0xe4)]?.[G(0xf6)] || '', await (0x10fd + 0xb7f + 0x71f * -0x4, VerifyStepsChatFlowTicket_1[G(0xff)])(w, u), await (0xee + -0x5fb * 0x1 + 0x50d, VerifyBusinessHours_1[H(0xff)])({
            'fromMe': s,
            'timestamp': l[H(0x117)](h[H(0xe4)][G(0xf5)], 0x18 * 0xa3 + 0x22a9 + -0x2e09)
        }, u);
    };
function a() {
    const I = [
        'accountLog',
        'ages',
        'ervices/Fi',
        'SnmEY',
        '280871eYvcLX',
        '2931831anvGkl',
        'howWhatsAp',
        '2997276ycfMZL',
        'request',
        'sage',
        'directThre',
        '555Mbhxjy',
        '../WbotSer',
        '3033450sqBfwM',
        '2xsonnD',
        'unreadMess',
        'vices/help',
        'FTYht',
        'mVerifyMes',
        'thread_id',
        'defineProp',
        '45UtUBCf',
        'tenantId',
        'Mhkvu',
        'oldest_cur',
        'mVerifyMed',
        'feed',
        'message',
        '../ChatFlo',
        'ers/Verify',
        '__esModule',
        'entity',
        'TicketServ',
        'DzHWi',
        'sChatFlowT',
        'ice',
        'whatsappId',
        'icket',
        'erty',
        'contact',
        'msg',
        './Instagra',
        'sor',
        'ndOrCreate',
        'timestamp',
        'text',
        'Message',
        'pService',
        'wServices/',
        'pService/S',
        'item_id',
        'mVerifyCon',
        'tact',
        'channel',
        'default',
        '4277928CQkLOF',
        'item_type',
        'instagram',
        'user_id',
        'BusinessHo',
        '__importDe',
        'markItemSe',
        'iaMessage',
        'fromMe',
        'VerifyStep',
        '22348svAiKN',
        'body',
        'fault',
        'value',
        'QZwGu',
        '../Whatsap',
        '728226qxfIRv',
        'urs',
        '../TicketS',
        'isFarewell'
    ];
    a = function () {
        return I;
    };
    return a();
}
exports[D(0xff)] = handleRealtimeReceive;