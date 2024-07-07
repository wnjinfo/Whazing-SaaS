'use strict';
const D = b, E = b;
(function (c, d) {
    const B = b, C = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(B(0x1cc)) / (-0xa * -0x17f + 0x1 * -0x5ad + 0x21 * -0x48) + parseInt(B(0x1bd)) / (0x2dc + -0x3 * -0xa14 + 0x34f * -0xa) * (parseInt(C(0x1be)) / (-0x1 * -0xc79 + 0x35 * 0x29 + -0x14f3)) + parseInt(B(0x1d5)) / (-0x121 + -0x1 * -0x2153 + 0x55d * -0x6) * (-parseInt(B(0x1d7)) / (-0x23d4 + -0xef * 0x17 + 0x3952)) + parseInt(B(0x1c1)) / (0x26e + -0x2b * 0x19 + 0x1cb) + -parseInt(B(0x1e0)) / (-0xf31 + -0x1b59 * -0x1 + -0x9 * 0x159) * (-parseInt(C(0x1e4)) / (-0x1c1 * 0x12 + -0x22f1 * -0x1 + -0x13 * 0x2d)) + parseInt(C(0x1ec)) / (-0x1f0c + 0x1b5 + 0x758 * 0x4) * (-parseInt(B(0x1de)) / (0xfaa + 0x25 * 0xe9 + 0x1 * -0x314d)) + parseInt(C(0x1f3)) / (0x5 * -0x4c1 + 0x2334 + -0x3cc * 0x3) * (parseInt(C(0x1bc)) / (0x8b * 0x3e + -0x1cd0 + -0x4ce));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x15b * -0x1b1 + 0xba8 * -0x48 + 0x7acb * 0x7));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x11 * 0xd9 + -0x87c + 0x1 * -0x436);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[D(0x1d6) + D(0x1d2)] || function (c) {
    const F = E;
    return c && c[F(0x1d8)] ? c : { 'default': c };
};
const k = {};
k[D(0x1f2)] = !![], Object[D(0x1e8) + D(0x1e9)](exports, E(0x1d8), k);
const ShowWhatsAppService_1 = __importDefault(require(D(0x1e3) + E(0x1c5) + E(0x1c4) + E(0x1b8))), TelegramVerifyContact_1 = __importDefault(require(E(0x1bf) + D(0x1ef) + E(0x1ed))), FindOrCreateTicketService_1 = __importDefault(require(E(0x1e5) + D(0x1da) + E(0x1eb) + E(0x1b7) + D(0x1bb))), TelegramVerifyMediaMessage_1 = __importDefault(require(D(0x1bf) + E(0x1c7) + E(0x1df))), TelegramVerifyMessage_1 = __importDefault(require(E(0x1bf) + E(0x1d4) + E(0x1ce))), VerifyBusinessHours_1 = __importDefault(require(E(0x1fd) + E(0x1ea) + E(0x1c8) + E(0x1d1) + D(0x1c0))), VerifyStepsChatFlowTicket_1 = __importDefault(require(E(0x1d9) + E(0x1e6) + E(0x1dc) + D(0x1f4) + D(0x1b9))), HandleMessage = async (h, i) => {
        const G = D, H = D, j = {};
        j[G(0x1fa)] = function (z, A) {
            return z && A;
        }, j[H(0x1cf)] = function (z, A) {
            return z === A;
        }, j[H(0x1c6)] = function (z, A) {
            return z * A;
        }, j[G(0x1f8)] = H(0x1dd);
        const l = j, m = {};
        m['id'] = i['id'];
        const n = await (0x3 * -0x8dd + -0x2442 + 0x3ed9 * 0x1, ShowWhatsAppService_1[G(0x1fc)])(m);
        let o, p = {};
        o = h?.[G(0x1f1)], p = h?.[G(0x1ba)];
        l[H(0x1fa)](!o, p) && (o = p?.[H(0x1c9) + G(0x1cd)]);
        const q = o?.[G(0x1f7)], r = await h[G(0x1dd)][H(0x1e2)](), s = l[G(0x1cf)](r['id'], h[G(0x1f1)]?.[G(0x1ca)]['id']), t = {
                ...o,
                'timestamp': l[H(0x1c6)](+o[H(0x1f9)], 0x11bc + 0x5d1 * 0x1 + -0x13a5 * 0x1)
            }, u = await (0x1 * -0x1d6f + 0x45 * -0x5 + 0x2 * 0xf64, TelegramVerifyContact_1[H(0x1fc)])(h, n[H(0x1f5)]), v = {};
        v[G(0x1e7)] = u, v[H(0x1f0)] = i['id'], v[G(0x1cb) + H(0x1e1)] = s ? 0x1684 * -0x1 + 0x2 * 0xc22 + -0x1c0 : 0x78d + -0xbe0 + 0x454, v[H(0x1f5)] = n[G(0x1f5)], v[G(0x1ee)] = { ...t }, v[H(0x1fb)] = l[G(0x1f8)], v[G(0x1ee)][H(0x1f6)] = s;
        const w = await (0x1c04 + -0x2 * 0xf97 + 0x32a, FindOrCreateTicketService_1[G(0x1fc)])(v);
        if (w?.[G(0x1d3) + H(0x1c2)])
            return;
        !t?.[G(0x1c3)] && q?.['id'] ? await (0x1 * -0xbc7 + 0xfc1 + 0x3fa * -0x1, TelegramVerifyMediaMessage_1[H(0x1fc)])(h, s, w, u) : await (0xf34 + 0x24f2 + 0x6 * -0x8b1, TelegramVerifyMessage_1[G(0x1fc)])(h, s, w, u);
        const x = {};
        x[G(0x1f6)] = s, x[G(0x1db)] = o[G(0x1c3)] || '', await (0x1536 + 0x9 * 0x3 + -0x1551, VerifyStepsChatFlowTicket_1[H(0x1fc)])(x, w);
        const y = {};
        y[H(0x1f6)] = s, y[G(0x1d0)] = t[H(0x1d0)], await (-0xac9 + -0x16af + -0x38 * -0x99, VerifyBusinessHours_1[G(0x1fc)])(y, w);
    };
exports[D(0x1fc)] = HandleMessage;
function a() {
    const I = [
        'age',
        'RzHQx',
        'timestamp',
        'BusinessHo',
        'fault',
        'isFarewell',
        'VerifyMess',
        '26984ourfhx',
        '__importDe',
        '200Gorlyc',
        '__esModule',
        '../ChatFlo',
        'ervices/Fi',
        'body',
        'VerifyStep',
        'telegram',
        '10lzwQiU',
        'aMessage',
        '1099NeHlcD',
        'ages',
        'getMe',
        '../Whatsap',
        '10072fvvsXO',
        '../TicketS',
        'wServices/',
        'contact',
        'defineProp',
        'erty',
        'vices/help',
        'ndOrCreate',
        '822006cbDBAz',
        'act',
        'msg',
        'VerifyCont',
        'whatsappId',
        'message',
        'value',
        '44OYrTqU',
        'sChatFlowT',
        'tenantId',
        'fromMe',
        'chat',
        'fXvUO',
        'date',
        'VCMfy',
        'channel',
        'default',
        '../WbotSer',
        'TicketServ',
        'pService',
        'icket',
        'update',
        'ice',
        '698184LxuEPy',
        '308702WDzRrG',
        '3vLAVcR',
        './Telegram',
        'urs',
        '761820nxAHwX',
        'Message',
        'text',
        'howWhatsAp',
        'pService/S',
        'BOVWT',
        'VerifyMedi',
        'ers/Verify',
        'edited_mes',
        'from',
        'unreadMess',
        '195090amEcBZ',
        'sage'
    ];
    a = function () {
        return I;
    };
    return a();
}