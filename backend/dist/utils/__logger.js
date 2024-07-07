'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x1ac)) / (-0x20ac + -0x10c9 + 0x3176) * (-parseInt(q(0x1c4)) / (-0x2338 + 0xdd0 * 0x1 + 0x156a)) + -parseInt(q(0x1af)) / (0x2 * -0x673 + -0x1e31 * -0x1 + -0x1148) + parseInt(q(0x1b8)) / (-0x2 * -0x1c5 + 0x95e + -0xce4) + -parseInt(p(0x1c1)) / (-0x383 * -0x5 + 0x26aa + 0x147 * -0x2c) + -parseInt(p(0x1b7)) / (-0x11 * -0x47 + 0x1 * 0x7b9 + 0x1 * -0xc6a) * (-parseInt(q(0x1c0)) / (0x2329 + 0x47e * -0x1 + 0x25 * -0xd4)) + parseInt(p(0x1aa)) / (0x1 * -0x2079 + 0x26d6 + -0x655 * 0x1) + parseInt(q(0x1b0)) / (0x16c0 + -0x9 * -0x2cc + -0x17 * 0x215);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3edf9 * 0x2 + 0x1 * 0xa5775 + 0xcf77c * -0x1));
var __importDefault = this && this[r(0x1be) + s(0x1ad)] || function (c) {
    const t = s;
    return c && c[t(0x1bf)] ? c : { 'default': c };
};
const k = {};
k[r(0x1bb)] = !![], Object[r(0x1ab) + s(0x1b1)](exports, r(0x1bf), k), exports[s(0x1b4)] = void (-0x17 * -0x10c + 0xd03 + -0x2517);
const pino_1 = __importDefault(require(r(0x1b2))), l = {};
l[r(0x1b6)] = !![], l[r(0x1ae)] = r(0x1bd);
const m = {};
m[r(0x1c5)] = r(0x1b9) + 'me';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1a9b + 0xc62 + -0x2553);
        let h = e[f];
        return h;
    }, b(c, d);
}
const n = {};
n[s(0x1b6)] = !![], n[r(0x1ae)] = s(0x1bd), n[s(0x1ba) + 't'] = m;
function a() {
    const u = [
        '684656GmvDjs',
        'defineProp',
        '122777gURnQI',
        'fault',
        'level',
        '596838KhmOHP',
        '5051313UQVGfN',
        'erty',
        'pino',
        'NODE_ENV',
        'logger',
        'prod',
        'enabled',
        '903948WreqzB',
        '718380ASopfX',
        'pid,hostna',
        'prettyPrin',
        'value',
        'dev',
        'info',
        '__importDe',
        '__esModule',
        '14PPQDsi',
        '1087270SdhgeM',
        'default',
        'env',
        '6KJkylP',
        'ignore'
    ];
    a = function () {
        return u;
    };
    return a();
}
const o = {};
o[s(0x1bc)] = l, o[r(0x1b5)] = n;
const configPino = o;
let env = r(0x1b5);
process[s(0x1c3)]?.[s(0x1b3)] && (env = process[s(0x1c3)][s(0x1b3)]);
const logger = (-0xe63 * -0x2 + -0x1 * 0x14c6 + -0x800, pino_1[s(0x1c2)])(env === s(0x1b5) ? configPino[r(0x1b5)] : configPino[s(0x1bc)]);
exports[r(0x1b4)] = logger;