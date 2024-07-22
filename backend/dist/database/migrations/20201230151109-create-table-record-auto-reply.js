'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0x8f)) / (-0x4b * 0x23 + -0x1 * -0x1225 + -0x7e3) * (-parseInt(A(0xaa)) / (-0x513 + 0x1e * 0x1c + 0x1cd)) + parseInt(z(0xa7)) / (-0x2 * -0x959 + 0x634 + 0x115 * -0x17) + parseInt(A(0x90)) / (-0x1 * 0x2302 + 0x1719 + -0xbed * -0x1) + parseInt(A(0x99)) / (0x2472 + -0x1066 + -0x1407) * (-parseInt(z(0xa4)) / (-0x198b + -0x252 + 0x1be3)) + -parseInt(z(0xa2)) / (-0x1243 + -0x1 * -0x1fc9 + 0x1 * -0xd7f) * (parseInt(A(0x8e)) / (-0x2ce * -0x2 + -0x1da7 * -0x1 + 0x233b * -0x1)) + -parseInt(A(0x9e)) / (0x25b5 + -0x1f8e * -0x1 + -0x453a) + parseInt(A(0xab)) / (0x2 * -0xdbc + 0xfd + -0x1a85 * -0x1) * (parseInt(z(0x9c)) / (-0x1 * 0xca + 0x1d * -0xf9 + -0x9ae * -0x3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * 0x157b4 + -0x1474 + -0x3d0f7 * -0x1));
function a() {
    const H = [
        'primaryKey',
        'allowNull',
        '1980531prVWfa',
        'STRING',
        '12UWhtUA',
        'type',
        'DataTypes',
        '661857lQNMhe',
        'xLNGp',
        'qBirL',
        '20Vmmmjd',
        '963370iDfQVS',
        'dropTable',
        'VsnFm',
        'restrict',
        'ent',
        'defineProp',
        'ogs',
        'value',
        'CASCADE',
        'pRvJu',
        'erty',
        '8dpDqBv',
        '29884ZZlhLy',
        '980316MSWprd',
        'INTEGER',
        'AutoReplyL',
        'peOPt',
        'Contacts',
        'exports',
        'Tickets',
        'sequelize',
        'autoIncrem',
        '545665KgKciP',
        'IBKRj',
        '__esModule',
        '11zTTeCh',
        'DATE',
        '1825173KKhzkC',
        'createTabl'
    ];
    a = function () {
        return H;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xb95 * 0x3 + -0x101 * -0x13 + 0x1030);
        let h = e[f];
        return h;
    }, b(c, d);
}
const y = {};
y[B(0x8a)] = !![], Object[B(0x88) + C(0x8d)](exports, B(0x9b), y);
const sequelize_1 = require(B(0x97));
module[B(0x95)] = {
    'up': j => {
        const D = C, E = B, k = {};
        k[D(0x85)] = E(0x92) + D(0x89), k[D(0x93)] = D(0x94), k[D(0x8c)] = D(0x8b), k[E(0xa9)] = D(0x86), k[E(0xa8)] = E(0x96);
        const l = k, m = {};
        m[D(0xa5)] = sequelize_1[D(0xa6)][E(0x91)], m[E(0x98) + D(0x87)] = !![], m[E(0xa0)] = !![], m[D(0xa1)] = ![];
        const n = {};
        n[D(0xa5)] = sequelize_1[D(0xa6)][D(0x91)], n[E(0xa1)] = ![];
        const o = {};
        o[E(0xa5)] = sequelize_1[E(0xa6)][D(0xa3)], o[E(0xa1)] = ![];
        const p = {};
        p[E(0xa5)] = sequelize_1[D(0xa6)][E(0x91)], p[D(0xa1)] = ![];
        const q = {};
        q[D(0xa5)] = sequelize_1[D(0xa6)][D(0xa3)], q[E(0xa1)] = ![];
        const r = {};
        return r[E(0xa5)] = sequelize_1[E(0xa6)][D(0xa3)], r[D(0xa1)] = ![], j[D(0x9f) + 'e'](l[E(0x85)], {
            'id': m,
            'autoReplyId': n,
            'autoReplyName': o,
            'stepsReplyId': p,
            'stepsReplyMessage': q,
            'wordsReply': r,
            'contactId': {
                'type': sequelize_1[D(0xa6)][E(0x91)],
                'references': {
                    'model': l[E(0x93)],
                    'key': 'id'
                },
                'onUpdate': l[E(0x8c)],
                'onDelete': l[E(0xa9)]
            },
            'ticketId': {
                'type': sequelize_1[D(0xa6)][D(0x91)],
                'references': {
                    'model': l[E(0xa8)],
                    'key': 'id'
                },
                'onUpdate': l[E(0x8c)],
                'onDelete': l[D(0xa9)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[E(0xa6)][E(0x9d)](0x278 + 0xbf5 + -0xe67),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[D(0xa6)][D(0x9d)](-0x25e0 + 0x11b6 + 0x143 * 0x10),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const F = B, G = B, e = {};
        e[F(0x9a)] = G(0x92) + F(0x89);
        const f = e;
        return d[F(0x84)](f[F(0x9a)]);
    }
};