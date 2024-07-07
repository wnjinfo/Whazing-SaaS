'use strict';
const L = b, M = b;
(function (c, d) {
    const J = b, K = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(J(0xfd)) / (-0x1c73 * -0x1 + 0x567 * -0x1 + -0x11 * 0x15b) * (parseInt(K(0xe1)) / (-0xca + -0x1 * 0xf4 + 0x1c0)) + parseInt(K(0xfb)) / (-0x1c54 + 0x4 * -0x2a4 + 0x26e7) * (parseInt(K(0xeb)) / (0x184 * -0x14 + -0x1b6 * -0x13 + -0x22e)) + parseInt(K(0xf4)) / (0x1c60 + -0x14b * -0x7 + -0x2 * 0x12b4) * (-parseInt(J(0xd9)) / (-0xdf1 + -0x8d9 + 0x16d0)) + -parseInt(J(0xed)) / (-0x22cd + 0x1ccc + 0x8 * 0xc1) + -parseInt(K(0xf0)) / (0x224b + -0x3f5 * 0x7 + -0xe * 0x78) + -parseInt(J(0xe9)) / (0x1 * -0x18f5 + 0x35 * 0x55 + 0x765) * (-parseInt(K(0xd8)) / (0x79 * -0x33 + 0x1909 + -0xe4)) + parseInt(J(0x101)) / (0x1 * -0x1f31 + -0x1de5 + 0x3d21);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xd2307 + -0x1 * 0x67cd3 + 0x21c827));
var __importDefault = this && this[L(0xff) + L(0xd0)] || function (c) {
    const N = M;
    return c && c[N(0xf7)] ? c : { 'default': c };
};
function a() {
    const R = [
        '__esModule',
        'mRbug',
        'ger',
        '../utils/l',
        '3nfxyRB',
        'accessToke',
        '7uGGJHd',
        'ezaFM',
        '__importDe',
        'messaging-',
        '2819333XrfMqp',
        'env',
        'Not\x20token\x20',
        'process',
        'appId',
        'fault',
        'error',
        'findIndex',
        'lient',
        'defineProp',
        'or\x20|\x20Error',
        'default',
        'gerBot',
        '1049770UyIhNp',
        '325050ygZqOu',
        'ogger',
        'erBot',
        'AlMOr',
        'api-messen',
        'uVAIn',
        'logger',
        'uccNP',
        '447406PPQord',
        'BeWji',
        'PP_ID',
        'rxQtv',
        'configured',
        'push',
        '../errors/',
        'tokenAPI',
        '90Vghvqy',
        'erty',
        '1914296UJukPS',
        'gerBot\x20err',
        '7152719ZQpUsS',
        'initMessen',
        'MessengerC',
        '1239240jXRuaf',
        'HTvNH',
        'AppError',
        'FACEBOOK_A',
        '115ntPHKZ',
        'getMesseng',
        'value'
    ];
    a = function () {
        return R;
    };
    return a();
}
const I = {};
I[M(0xf6)] = !![], Object[L(0xd4) + M(0xea)](exports, M(0xf7), I), exports[M(0xf5) + M(0xdb)] = exports[L(0xee) + L(0xd7)] = void (-0x434 * -0x7 + -0x220c + 0x4a0);
const messaging_api_messenger_1 = require(L(0x100) + M(0xdd) + M(0xf9)), process_1 = __importDefault(require(M(0xce))), AppError_1 = __importDefault(require(L(0xe7) + L(0xf2))), logger_1 = require(M(0xfa) + M(0xda)), sessionsMessenger = [], initMessengerBot = async e => {
        const O = M, P = M, f = {};
        f[O(0xfe)] = function (h, i) {
            return h === i;
        }, f[P(0xe4)] = O(0xdc), f[O(0xe0)] = O(0xcd) + P(0xe5), f[P(0xde)] = function (h, i) {
            return h === i;
        }, f[O(0xf1)] = function (h, i) {
            return h === i;
        }, f[O(0xe2)] = P(0xf8);
        const g = f;
        try {
            const h = e[O(0xe8)], i = process_1[O(0xd6)][O(0x102)][P(0xf3) + O(0xe3)];
            if (!h) {
                if (g[P(0xfe)](g[P(0xe4)], g[P(0xe4)]))
                    throw new Error(g[O(0xe0)]);
                else {
                    const n = f[O(0xd2)](o => o['id'] == n);
                    return h[n];
                }
            }
            const j = {};
            j[P(0xfc) + 'n'] = h, j[O(0xcf)] = i;
            const k = new messaging_api_messenger_1[(O(0xef)) + (O(0xd3))](j);
            k['id'] = e['id'];
            const l = sessionsMessenger[O(0xd2)](n => n['id'] === e['id']);
            return g[O(0xde)](l, -(-0x1cd5 + 0xfce + 0xd08)) ? (k['id'] = e['id'], sessionsMessenger[P(0xe6)](k)) : (k['id'] = e['id'], sessionsMessenger[l] = k), k;
        } catch (n) {
            if (g[O(0xf1)](g[O(0xe2)], g[P(0xe2)])) {
                logger_1[O(0xdf)][O(0xd1)](P(0xee) + O(0xec) + P(0xd5) + ':\x20' + n);
                throw new AppError_1[(O(0xd6))]('' + n, -0x5 * 0x58d + 0x1f8e + -0x239);
            } else {
                g[P(0xdf)][P(0xd1)](P(0xee) + O(0xec) + P(0xd5) + ':\x20' + h);
                throw new i[(P(0xd6))]('' + j, -0x1708 + 0x1 * -0x10c9 + 0x2965);
            }
        }
    };
exports[M(0xee) + L(0xd7)] = initMessengerBot;
const getMessengerBot = c => {
    const Q = M, d = sessionsMessenger[Q(0xd2)](e => e['id'] == c);
    return sessionsMessenger[d];
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2273 * -0x1 + -0x12fb + 0x363b);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[L(0xf5) + L(0xdb)] = getMessengerBot;