'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x18c)) / (0x26f5 + -0x1379 + -0x137b) + parseInt(q(0x14b)) / (-0x23ef + 0x1098 + 0x3 * 0x673) * (parseInt(p(0x1a9)) / (0x2106 * -0x1 + -0x19a5 + 0x3aae)) + parseInt(p(0x163)) / (-0xc96 + -0x2 * 0x2c8 + 0x122a) + -parseInt(p(0x190)) / (0x61 * 0x1d + -0x1128 + 0x630) + -parseInt(p(0x18d)) / (-0x240f + 0xc5 * -0x10 + 0x3065) * (parseInt(q(0x18a)) / (0x21b4 + -0xe2f + 0xa * -0x1f3)) + parseInt(q(0x154)) / (0x262a + 0xcf9 + -0x331b) * (-parseInt(q(0x185)) / (0x138f + -0x1 * 0x1049 + -0x1 * 0x33d)) + parseInt(q(0x158)) / (0x9cb + -0x1f1c + 0x155b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x60056 + 0x1 * -0x447dd + -0x6f * -0x336a));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xb * -0x11e + -0x834 + -0x9 * 0x50);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0x1a4) + s(0x1a5)] || function (c) {
    const t = r;
    return c && c[t(0x180)] ? c : { 'default': c };
};
const k = {};
k[s(0x168)] = !![], Object[r(0x172) + s(0x19f)](exports, r(0x180), k), exports[r(0x149) + s(0x173)] = void (0x2 * 0x77 + -0xe * -0x102 + -0xf0a);
const wbotMessageListener_1 = require(r(0x1a2) + s(0x14e) + 'r'), socket_1 = require(s(0x18f) + s(0x187)), logger_1 = require(r(0x17d) + s(0x195)), AppError_1 = __importDefault(require(s(0x14d) + s(0x18b) + 'r')), StartInstaBotSession_1 = require(r(0x16e) + r(0x14a) + s(0x1a3) + r(0x15b) + r(0x16b)), StartTbotSession_1 = require(r(0x177) + s(0x174) + r(0x192) + 'on'), StartWaba360_1 = require(s(0x1a8) + r(0x157) + r(0x186)), StartMessengerBot_1 = require(s(0x16a) + s(0x175) + s(0x194) + r(0x196) + s(0x15f)), wbot_baileys_1 = require(s(0x18f) + r(0x17b) + r(0x16d)), wbotMonitor_1 = __importDefault(require(r(0x14c) + r(0x193))), StartWhatsAppSession = async e => {
        const u = s, v = r, f = {};
        f[u(0x160)] = function (j, l) {
            return j === l;
        }, f[v(0x15c)] = v(0x186), f[v(0x15d)] = u(0x17e), f[v(0x197)] = u(0x1a1), f[v(0x189)] = function (j, l) {
            return j === l;
        }, f[v(0x184)] = u(0x183), f[v(0x1a0)] = v(0x147), f[v(0x19e)] = v(0x16c), f[u(0x162)] = function (j, l) {
            return j !== l;
        }, f[v(0x17a)] = v(0x153), f[v(0x161)] = function (j, l) {
            return j === l;
        }, f[u(0x176)] = u(0x199), f[u(0x152)] = v(0x191), f[u(0x179)] = v(0x198), f[v(0x19c)] = v(0x148), f[u(0x150)] = function (j, l) {
            return j === l;
        }, f[v(0x167)] = function (j, l) {
            return j !== l;
        }, f[u(0x146)] = u(0x156), f[v(0x15a)] = v(0x19a) + u(0x181);
        const g = f, h = {};
        h[u(0x151)] = g[v(0x15d)], await e[v(0x1a1)](h);
        const i = (-0x97e + -0x962 * 0x2 + -0xe21 * -0x2, socket_1[u(0x165)])();
        i[v(0x188)](e[v(0x166)] + (v(0x19b) + u(0x19d)), {
            'action': g[u(0x197)],
            'session': e
        });
        try {
            if (g[u(0x189)](e[v(0x1a7)], g[v(0x184)])) {
                const j = await (0x116c * -0x2 + -0x27f + 0x2557, wbot_baileys_1[u(0x17f) + 'et'])(e);
                await (-0xe * -0x2a + 0x5e6 + -0x832, wbotMessageListener_1[u(0x14f) + u(0x159) + u(0x164)])(j, e), (-0x1bf * 0x13 + -0x1 * -0x1645 + 0xae8 * 0x1, wbotMonitor_1[v(0x1a6)])(j, e, e[v(0x166)]);
            }
            g[u(0x189)](e[u(0x1a7)], g[v(0x1a0)]) && (0xdb * -0x18 + 0x368 * -0xb + 0x3a00, StartTbotSession_1[u(0x171) + v(0x19d)])(e), g[v(0x189)](e[u(0x1a7)], g[v(0x19e)]) && (g[v(0x162)](g[u(0x17a)], g[u(0x17a)]) ? (0x10 * 0x1 + -0x15ec + 0xaee * 0x2, e[u(0x17c) + '60'])(f) : (-0x197 * -0x11 + -0x1 * 0xbb9 + 0x7a7 * -0x2, StartInstaBotSession_1[u(0x182) + v(0x169)])(e)), g[u(0x161)](e[u(0x1a7)], g[u(0x176)]) && (g[u(0x160)](g[u(0x152)], g[u(0x179)]) ? g[v(0x160)](f[v(0x16f)], g[u(0x15c)]) && (0xcb1 + -0x265 * -0x6 + -0x1b0f, i[v(0x17c) + '60'])(j) : (0x10ff + -0x2063 + 0xf64, StartMessengerBot_1[v(0x15e) + v(0x178)])(e)), g[u(0x160)](e[u(0x1a7)], g[u(0x19c)]) && (g[v(0x150)](e[u(0x16f)], g[v(0x15c)]) && (-0x1360 + -0x6c * -0x37 + -0x4 * 0xf5, StartWaba360_1[v(0x17c) + '60'])(e));
        } catch (n) {
            if (g[u(0x167)](g[v(0x146)], g[u(0x146)]))
                (0xd6a + -0xfa1 * 0x1 + 0x9 * 0x3f, e[v(0x171) + u(0x19d)])(f);
            else {
                logger_1[v(0x170)][v(0x155)](v(0x149) + v(0x173) + u(0x18e) + n);
                throw new AppError_1[(u(0x1a6))](g[v(0x15a)], 0x1f33 + 0xad2 * -0x1 + -0x12cd);
            }
        }
    };
exports[s(0x149) + r(0x173)] = StartWhatsAppSession;
function a() {
    const w = [
        'FPEFz',
        '../TbotSer',
        'ngerBot',
        'zyjjL',
        'LVeBF',
        '/wbot-bail',
        'StartWaba3',
        '../../util',
        'OPENING',
        'initWASock',
        '__esModule',
        'SESSION',
        'StartInsta',
        'whatsapp',
        'JMQve',
        '2916JYSdxy',
        '360',
        '/socket',
        'emit',
        'HrePs',
        '4413983kneXYA',
        'rs/AppErro',
        '948059zGGuHd',
        '6iAGhMS',
        '\x20|\x20Error:\x20',
        '../../libs',
        '4243175YXcHLL',
        'QpviX',
        'tTbotSessi',
        'tor',
        'ervices/St',
        's/logger',
        'artMesseng',
        'wMvTi',
        'SZjeA',
        'messenger',
        'ERR_START_',
        ':whatsappS',
        'qgKWI',
        'ession',
        'blQMF',
        'erty',
        'CbRdu',
        'update',
        './wbotMess',
        'ces/StartI',
        '__importDe',
        'fault',
        'default',
        'type',
        '../WABA360',
        '3atOyxn',
        'RBygj',
        'telegram',
        'waba',
        'StartWhats',
        'amBotServi',
        '192118mwqrFH',
        './wbotMoni',
        '../../erro',
        'ageListene',
        'wbotMessag',
        'lWgCo',
        'status',
        'CCTAe',
        'VmNcJ',
        '25264bGLeAa',
        'error',
        'SGZDQ',
        '/StartWaba',
        '21248070LrfQZG',
        'eListenerB',
        'HvqOU',
        'nstaBotSes',
        'JfHbI',
        'xHlbl',
        'StartMesse',
        'erBot',
        'mytFg',
        'gmzZS',
        'tXDlf',
        '482440oJUenJ',
        'aileys',
        'getIO',
        'tenantId',
        'ZbWMQ',
        'value',
        'BotSession',
        '../Messeng',
        'sion',
        'instagram',
        'eys',
        '../Instagr',
        'wabaBSP',
        'logger',
        'StartTbotS',
        'defineProp',
        'AppSession',
        'vices/Star',
        'erChannelS'
    ];
    a = function () {
        return w;
    };
    return a();
}