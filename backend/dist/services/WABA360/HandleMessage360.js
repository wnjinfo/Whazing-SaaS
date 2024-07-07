'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x132)) / (-0x3 * -0x97b + 0x2 * -0x135b + -0x107 * -0xa) + -parseInt(r(0x14c)) / (-0xd * -0x21 + 0x4c0 + -0x66b) * (parseInt(s(0x142)) / (0x5e0 * 0x5 + 0x5 * 0x335 + 0x37e * -0xd)) + -parseInt(s(0x128)) / (-0x80b * 0x1 + -0x904 + -0x8d * -0x1f) + -parseInt(s(0x141)) / (-0x600 + -0xa2e + 0x1033) + -parseInt(r(0x15b)) / (-0xb6d + 0x266d + -0x1afa) + -parseInt(r(0x127)) / (-0x3a1 * 0x8 + 0x3 * -0xb3f + 0xfb3 * 0x4) + -parseInt(r(0x14f)) / (-0x1f8d * -0x1 + -0x1eae + -0x2b * 0x5) * (-parseInt(s(0x156)) / (-0x106b + 0xa * 0x1ba + -0xd0));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x64947 + -0x32 * -0xd13 + 0x757d9));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x4d3 + -0x2 * 0x9bd + 0xfce);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[t(0x149) + t(0x130)] || function (c) {
    const v = t;
    return c && c[v(0x13d)] ? c : { 'default': c };
};
const k = {};
function a() {
    const A = [
        'message_id',
        '../../util',
        'TicketServ',
        'wolgu',
        'whatsappId',
        'isCampaign',
        'ervices/Fi',
        'fault',
        'fromMe',
        '44864MAfKwx',
        'diaMessage',
        'tenantId',
        'channel',
        'contacts',
        '../Whatsap',
        'value',
        'waba',
        'logger',
        'pService',
        'msg',
        '__esModule',
        's/logger',
        'isFarewell',
        'text',
        '2043990UtIccI',
        '3ciQVRd',
        'ice',
        'IkPtm',
        'ntactWaba3',
        'type',
        'erty',
        'DGbSm',
        '__importDe',
        'Message',
        'pService/S',
        '666566hgGiLj',
        'ndOrCreate',
        'default',
        '12320872BZhBVZ',
        'ssage360',
        './VerifyMe',
        'ages',
        'defineProp',
        '360',
        'messages',
        '9jpHtHY',
        'ZaJgV',
        'error',
        'howWhatsAp',
        '../TicketS',
        '44082XrsJaX',
        'unreadMess',
        './VerifyCo',
        'contact',
        'XTJKf',
        '2471042eJWsTv',
        '624780yLrzmx'
    ];
    a = function () {
        return A;
    };
    return a();
}
k[t(0x138)] = !![], Object[u(0x153) + u(0x147)](exports, u(0x13d), k);
const logger_1 = require(u(0x12a) + t(0x13e)), FindOrCreateTicketService_1 = __importDefault(require(t(0x15a) + u(0x12f) + u(0x14d) + u(0x12b) + t(0x143))), ShowWhatsAppService_1 = __importDefault(require(u(0x137) + u(0x14b) + u(0x159) + u(0x13b))), VerifyContactWaba360_1 = __importDefault(require(t(0x15d) + u(0x145) + '60')), VerifyMediaMessage360_1 = __importDefault(require(u(0x151) + t(0x133) + t(0x154))), VerifyMessage360_1 = __importDefault(require(t(0x151) + t(0x150))), HandleMessage360 = async (c, d) => {
        const w = u, x = u, e = {
                'XTJKf': w(0x139),
                'IkPtm': function (f) {
                    return f();
                },
                'wolgu': function (f, g) {
                    return f !== g;
                },
                'ZaJgV': w(0x140),
                'DGbSm': function (f, g) {
                    return f(g);
                }
            };
        return new Promise((f, g) => {
            ((async () => {
                const y = b, z = b;
                let h, i;
                const j = -0x1210 + 0x258c + -0x137b;
                try {
                    const l = {};
                    l['id'] = d, h = await (-0x22a7 + 0x1 * 0xfb2 + 0x12f5, ShowWhatsAppService_1[y(0x14e)])(l), i = await (-0x181f + -0x16e4 + 0x2f03, VerifyContactWaba360_1[y(0x14e)])(c[z(0x136)][-0x307 + 0x91c + -0x615], h[z(0x134)]);
                    const m = { ...c[y(0x155)][0x21e * 0x3 + -0xf29 + 0x8cf] };
                    m[y(0x131)] = ![], m[y(0x129)] = c[y(0x155)][-0x2485 + 0x10f1 + 0x1394]['id'];
                    const n = m, o = {};
                    o[y(0x15e)] = i, o[z(0x12d)] = h['id'], o[y(0x15c) + z(0x152)] = j, o[z(0x134)] = h[y(0x134)], o[y(0x13c)] = n, o[z(0x135)] = e[y(0x15f)];
                    const p = await (-0x1ad9 + -0x7 * -0x385 + 0x236, FindOrCreateTicketService_1[z(0x14e)])(o);
                    if (p?.[y(0x12e) + z(0x14a)]) {
                        e[z(0x144)](f);
                        return;
                    }
                    if (p?.[y(0x13f) + z(0x14a)]) {
                        e[y(0x144)](f);
                        return;
                    }
                    e[z(0x12c)](n[y(0x146)], e[z(0x157)]) ? await (0x17e0 + 0x8fe * -0x3 + 0x31a, VerifyMediaMessage360_1[z(0x14e)])(h, n, p, i) : await (-0x47 * -0x2e + -0x1043 + 0x381, VerifyMessage360_1[z(0x14e)])(n, p, i), e[y(0x144)](f);
                } catch (q) {
                    logger_1[z(0x13a)][y(0x158)](q), e[y(0x148)](g, q);
                }
            })());
        });
    };
exports[u(0x14e)] = HandleMessage360;