'use strict';
function a() {
    const R = [
        'yUkJi',
        'findIndex',
        'default',
        'fault',
        'lient',
        'AppError',
        'error',
        '2049730LmGfTD',
        'Not\x20token\x20',
        '__importDe',
        'gerBot\x20err',
        'zICRn',
        'FACEBOOK_A',
        'or\x20|\x20Error',
        'api-messen',
        'PDqAo',
        'initMessen',
        '2300564mwWxRc',
        'erty',
        'value',
        '../errors/',
        'process',
        'BWLsQ',
        '639RzCpkU',
        'PP_ID',
        'getMesseng',
        'logger',
        '__esModule',
        'defineProp',
        'Ebdwo',
        'appId',
        'ogger',
        'configured',
        '1299942bsdDaV',
        '1442972sGyxbs',
        '86728EJeuKa',
        'messaging-',
        '../utils/l',
        '528270YKibYJ',
        'MessengerC',
        'accessToke',
        'erBot',
        'ger',
        '160032TPusUN',
        'gerBot',
        'MWKou',
        'mBtCL',
        'tokenAPI',
        'push',
        'env',
        '5TRQoJh'
    ];
    a = function () {
        return R;
    };
    return a();
}
const L = b, M = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x1a23 + 0x25eb + -0xb2a);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const J = b, K = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(J(0xa4)) / (-0x25d1 + -0x1 * -0x195d + 0xc75) * (parseInt(K(0xd0)) / (0xae5 * -0x2 + -0x1c47 + 0x10b1 * 0x3)) + -parseInt(J(0xc6)) / (0x1845 + -0x529 + 0x1319 * -0x1) + parseInt(J(0xc7)) / (-0x1b12 + -0xa * 0x13b + 0x13b2 * 0x2) + -parseInt(J(0xac)) / (0x7 * -0x272 + 0x8e4 + -0x83f * -0x1) + -parseInt(J(0xcb)) / (0x11db + -0xb * 0x1ab + -0x2 * -0x42) + -parseInt(J(0xb6)) / (-0x5af + 0x2c9 + 0x2ed) + -parseInt(J(0xc8)) / (0x1 * -0xa9f + -0x1edb + 0xe7 * 0x2e) * (-parseInt(J(0xbc)) / (-0x32f * -0xb + -0x272 + -0x208a));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3fd4c + 0x2 * 0x13c93 + 0x5a517));
var __importDefault = this && this[L(0xae) + L(0xa8)] || function (c) {
    const N = L;
    return c && c[N(0xc0)] ? c : { 'default': c };
};
const I = {};
I[M(0xb8)] = !![], Object[M(0xc1) + M(0xb7)](exports, L(0xc0), I), exports[L(0xbe) + L(0xce)] = exports[L(0xb5) + L(0x9e)] = void (-0x2089 + 0x78 * 0x1d + 0xd * 0x175);
const messaging_api_messenger_1 = require(M(0xc9) + M(0xb3) + M(0xcf)), process_1 = __importDefault(require(M(0xba))), AppError_1 = __importDefault(require(M(0xb9) + M(0xaa))), logger_1 = require(M(0xca) + M(0xc4)), sessionsMessenger = [], initMessengerBot = async e => {
        const O = M, P = L, f = {};
        f[O(0xb4)] = P(0xad) + P(0xc5), f[O(0xa0)] = function (h, i) {
            return h === i;
        }, f[O(0xa5)] = O(0xbb), f[P(0xb0)] = function (h, i) {
            return h === i;
        }, f[P(0x9f)] = P(0xc2);
        const g = f;
        try {
            const h = e[O(0xa1)], i = process_1[P(0xa7)][O(0xa3)][P(0xb1) + O(0xbd)];
            if (!h)
                throw new Error(g[O(0xb4)]);
            const j = {};
            j[O(0xcd) + 'n'] = h, j[O(0xc3)] = i;
            const k = new messaging_api_messenger_1[(P(0xcc)) + (O(0xa9))](j);
            k['id'] = e['id'];
            const l = sessionsMessenger[P(0xa6)](m => m['id'] === e['id']);
            return g[P(0xa0)](l, -(0x135e + -0x1c0e + 0x8b1)) ? g[P(0xa0)](g[P(0xa5)], g[O(0xa5)]) ? (k['id'] = e['id'], sessionsMessenger[O(0xa2)](k)) : (g['id'] = h['id'], i[O(0xa2)](j)) : (k['id'] = e['id'], sessionsMessenger[l] = k), k;
        } catch (n) {
            if (g[P(0xb0)](g[P(0x9f)], g[P(0x9f)])) {
                logger_1[P(0xbf)][O(0xab)](O(0xb5) + P(0xaf) + P(0xb2) + ':\x20' + n);
                throw new AppError_1[(O(0xa7))]('' + n, -0x10 * 0xe5 + -0x1d * -0x9d + -0x1e5);
            } else {
                const p = {};
                return p[O(0xa7)] = j, g && h[P(0xc0)] ? i : p;
            }
        }
    };
exports[M(0xb5) + M(0x9e)] = initMessengerBot;
const getMessengerBot = c => {
    const Q = L, d = sessionsMessenger[Q(0xa6)](e => e['id'] == c);
    return sessionsMessenger[d];
};
exports[L(0xbe) + L(0xce)] = getMessengerBot;