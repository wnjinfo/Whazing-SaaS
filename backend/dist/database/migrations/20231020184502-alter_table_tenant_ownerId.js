'use strict';
const n = b, o = b;
function a() {
    const t = [
        'exports',
        '1006176VYPJbY',
        '18lwIxwS',
        '1300710fTPYPs',
        'nerId_fkey',
        'INTEGER',
        'changeColu',
        '156740IALQIR',
        '__esModule',
        '208272RuegED',
        'CASCADE',
        'fVMdA',
        '49ussvDF',
        'UQhIu',
        'removeCons',
        '2MxQuzc',
        '1663712PxZZHy',
        'all',
        'XRpaF',
        'value',
        'IgeMV',
        'erty',
        'wNmaI',
        'defineProp',
        'DataTypes',
        'Tenants_ow',
        'HXUbH',
        'mXJuG',
        '3047830gUPJgH',
        'sequelize',
        'ownerId',
        'Tenants',
        'traint',
        '111245eoBhir'
    ];
    a = function () {
        return t;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xdfc + -0x106 * 0x5 + -0x85c);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0xa3)) / (-0xd * 0x221 + -0x31 * 0x79 + 0x32d7) + -parseInt(m(0x91)) / (0x151 + 0x11 * 0x23b + -0x273a) * (-parseInt(l(0x83)) / (0x5c + 0x7 * -0x14d + -0x26 * -0x3b)) + parseInt(m(0x89)) / (0x821 * -0x1 + -0x2 * 0x115f + -0x2ae3 * -0x1) + parseInt(m(0x85)) / (-0xd92 + -0x10a + 0x7 * 0x217) + parseInt(l(0x8b)) / (-0x107d + -0x14b3 * 0x1 + 0x2536) * (parseInt(l(0x8e)) / (-0x19c6 + -0x8b * -0x13 + 0xf7c)) + -parseInt(m(0x92)) / (0x587 + 0x12a + -0x6a9) + parseInt(l(0x84)) / (0x33 * 0x6d + -0x1227 * -0x1 + -0x27d5) * (-parseInt(m(0x9e)) / (0x8c + -0x4 * -0x2d4 + 0xbd2 * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x124a1 + -0x3a38b + 0x2459 * 0x24));
const k = {};
k[n(0x95)] = !![], Object[o(0x99) + n(0x97)](exports, o(0x8a), k);
const sequelize_1 = require(o(0x9f));
module[o(0x82)] = {
    'up': d => {
        const p = o, q = n, e = {};
        e[p(0x8d)] = q(0xa1), e[q(0x9c)] = p(0x9b) + q(0x86), e[q(0x94)] = p(0xa0), e[q(0x8f)] = q(0x8c);
        const f = e;
        return Promise[q(0x93)]([
            d[q(0x90) + p(0xa2)](f[p(0x8d)], f[p(0x9c)]),
            d[q(0x88) + 'mn'](f[p(0x8d)], f[q(0x94)], {
                'type': sequelize_1[q(0x9a)][q(0x87)],
                'references': {
                    'model': f[p(0x8d)],
                    'key': 'id'
                },
                'onUpdate': f[q(0x8f)],
                'onDelete': f[q(0x8f)],
                'allowNull': !![]
            })
        ]);
    },
    'down': d => {
        const r = o, s = n, e = {};
        e[r(0x96)] = r(0xa1), e[r(0x9d)] = r(0xa0), e[s(0x98)] = r(0x8c);
        const f = e;
        return Promise[s(0x93)]([d[r(0x88) + 'mn'](f[s(0x96)], f[r(0x9d)], {
                'type': sequelize_1[r(0x9a)][r(0x87)],
                'references': {
                    'model': f[s(0x96)],
                    'key': 'id'
                },
                'onUpdate': f[r(0x98)],
                'onDelete': f[r(0x98)],
                'allowNull': !![]
            })]);
    }
};