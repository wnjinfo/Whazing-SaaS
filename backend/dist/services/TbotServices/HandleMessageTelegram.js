'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(B(0xa7)) / (-0xd35 + 0xde5 * 0x1 + -0xaf) + -parseInt(C(0xab)) / (-0xa3f + -0x1ffd + 0x2a3e) * (parseInt(C(0x81)) / (0x1 * -0xce9 + -0x120c + 0x1ef8)) + parseInt(B(0x9c)) / (0x3ff + 0x2 * -0x370 + 0x2e5) * (-parseInt(B(0xa8)) / (0x107 * 0x18 + 0x40 * 0x36 + -0x1 * 0x2623)) + -parseInt(B(0x91)) / (-0x3 * -0xc10 + 0x1ce2 + -0x5c * 0xb5) * (parseInt(C(0xa3)) / (-0xd93 + 0xdd * 0x13 + -0x2cd)) + -parseInt(C(0xaa)) / (-0x3 * -0x45b + -0x199d + -0x2 * -0x64a) + parseInt(B(0x92)) / (-0x1531 + -0xba * -0x1b + -0x4 * -0x67) * (-parseInt(B(0xa9)) / (-0x5b0 + -0xd67 * -0x1 + -0x7ad)) + -parseInt(C(0x93)) / (-0x88e * -0x2 + 0x1 * 0x2632 + -0x2f * 0x12d) * (-parseInt(C(0x97)) / (0x1 * 0x37f + 0xd * -0xa7 + -0x7 * -0xb8));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x609f1 * -0x1 + 0x881 * -0x231 + -0x1 * -0x23a85d));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x7ff + -0x1e70 + -0xd * -0x2fe);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[D(0xbd) + D(0xae)] || function (c) {
    const F = D;
    return c && c[F(0x94)] ? c : { 'default': c };
};
const k = {};
k[D(0x7a)] = !![], Object[D(0x8f) + E(0x83)](exports, D(0x94), k);
const ShowWhatsAppService_1 = __importDefault(require(E(0xa4) + D(0xad) + D(0x85) + D(0x80))), TelegramVerifyContact_1 = __importDefault(require(E(0x8b) + D(0x90) + D(0x96))), FindOrCreateTicketService_1 = __importDefault(require(D(0xb1) + E(0xb3) + D(0x98) + E(0x88) + D(0xa1))), TelegramVerifyMediaMessage_1 = __importDefault(require(E(0x8b) + D(0xa5) + D(0x95))), TelegramVerifyMessage_1 = __importDefault(require(D(0x8b) + D(0xba) + E(0x8c))), VerifyBusinessHours_1 = __importDefault(require(E(0x82) + E(0x79) + D(0x7c) + E(0x8e) + E(0x7f))), VerifyStepsChatFlowTicket_1 = __importDefault(require(D(0xb2) + D(0x9d) + E(0x89) + D(0x8a) + E(0x8d))), HandleMessage = async (h, i) => {
        const G = E, H = E, j = {};
        j[G(0xa0)] = function (z, A) {
            return z && A;
        }, j[H(0xb6)] = function (z, A) {
            return z === A;
        }, j[H(0xb7)] = function (z, A) {
            return z * A;
        }, j[G(0x78)] = H(0x7b);
        const l = j, m = {};
        m['id'] = i['id'];
        const n = await (0x1c3 + -0x2 * 0xaaa + 0x1391, ShowWhatsAppService_1[H(0x9b)])(m);
        let o, p = {};
        o = h?.[H(0x77)], p = h?.[H(0xbc)];
        l[G(0xa0)](!o, p) && (o = p?.[G(0x7d) + H(0xb0)]);
        const q = o?.[H(0xb4)], r = await h[G(0x7b)][H(0x9f)](), s = l[H(0xb6)](r['id'], h[H(0x77)]?.[H(0xac)]['id']), t = {
                ...o,
                'timestamp': l[G(0xb7)](+o[H(0x9e)], -0x8a8 + -0x71d + 0x49 * 0x45)
            }, u = await (0xac + 0x21d * -0x11 + 0x1db * 0x13, TelegramVerifyContact_1[G(0x9b)])(h, n[H(0x87)]), v = {};
        v[G(0xbb)] = u, v[H(0xb8)] = i['id'], v[G(0x9a) + H(0xa6)] = s ? -0x1d01 + 0x206f * -0x1 + 0x3d70 * 0x1 : 0x860 + 0x1 * -0x374 + -0x1 * 0x4eb, v[H(0x87)] = n[G(0x87)], v[H(0xb9)] = { ...t }, v[H(0x84)] = l[G(0x78)], v[H(0xb9)][H(0xa2)] = s;
        const w = await (-0x954 + -0xcca + 0x161e, FindOrCreateTicketService_1[H(0x9b)])(v);
        if (w?.[G(0x99) + H(0x7e)])
            return;
        !t?.[H(0xb5)] && q?.['id'] ? await (-0x1240 + 0x143 * 0x8 + -0x4 * -0x20a, TelegramVerifyMediaMessage_1[H(0x9b)])(h, s, w, u) : await (0x155 * 0x11 + -0x194c + 0x2a7, TelegramVerifyMessage_1[H(0x9b)])(h, s, w, u);
        const x = {};
        x[G(0xa2)] = s, x[G(0x86)] = o[G(0xb5)] || '', await (0x1333 + -0x1d8b * 0x1 + -0x8 * -0x14b, VerifyStepsChatFlowTicket_1[H(0x9b)])(x, w);
        const y = {};
        y[G(0xa2)] = s, y[G(0xaf)] = t[H(0xaf)], await (0x1308 + 0x2 * 0x2d + -0x1362, VerifyBusinessHours_1[H(0x9b)])(y, w);
    };
exports[D(0x9b)] = HandleMessage;
function a() {
    const I = [
        '../ChatFlo',
        'ervices/Fi',
        'chat',
        'text',
        'kNfsR',
        'kNwxl',
        'whatsappId',
        'msg',
        'VerifyMess',
        'contact',
        'update',
        '__importDe',
        'message',
        'linLL',
        'vices/help',
        'value',
        'telegram',
        'ers/Verify',
        'edited_mes',
        'Message',
        'urs',
        'pService',
        '204195CWGiOh',
        '../WbotSer',
        'erty',
        'channel',
        'howWhatsAp',
        'body',
        'tenantId',
        'TicketServ',
        'VerifyStep',
        'sChatFlowT',
        './Telegram',
        'age',
        'icket',
        'BusinessHo',
        'defineProp',
        'VerifyCont',
        '7453992IEVQoA',
        '9gpDksY',
        '22FyDdvU',
        '__esModule',
        'aMessage',
        'act',
        '26835552KdxaAI',
        'ndOrCreate',
        'isFarewell',
        'unreadMess',
        'default',
        '88cXNjig',
        'wServices/',
        'date',
        'getMe',
        'zujXQ',
        'ice',
        'fromMe',
        '7shEPWu',
        '../Whatsap',
        'VerifyMedi',
        'ages',
        '1128008kPBnjH',
        '134505PmRGQN',
        '2939830CRgEHa',
        '3428632OuMZHH',
        '2ELQnRK',
        'from',
        'pService/S',
        'fault',
        'timestamp',
        'sage',
        '../TicketS'
    ];
    a = function () {
        return I;
    };
    return a();
}