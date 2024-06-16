'use strict';
const _0x433324 = _0x39c8;
(function (_0xaf4951, _0x276986) {
    const _0x503751 = _0x39c8, _0x870a3b = _0xaf4951();
    while (!![]) {
        try {
            const _0x4db47d = parseInt(_0x503751(0xe6)) / (0x2 * 0x641 + -0x7 * -0x3f6 + -0x283b) * (parseInt(_0x503751(0xee)) / (0x1d46 + -0x16a * 0x17 + 0x1a1 * 0x2)) + -parseInt(_0x503751(0xda)) / (0x1 * -0x223a + 0xf18 + -0xa9 * -0x1d) + parseInt(_0x503751(0xf3)) / (0xa20 + -0x5ba + -0x462) + parseInt(_0x503751(0xe7)) / (-0x2556 + 0x25af + -0x54) + parseInt(_0x503751(0xf1)) / (-0x18d * -0x4 + -0x79 * 0x2b + 0x1 * 0xe25) * (parseInt(_0x503751(0xfa)) / (-0xd78 + -0x1da0 + 0x2b1f)) + -parseInt(_0x503751(0xe4)) / (-0x1d31 + -0x71 * 0x27 + -0x1 * -0x2e70) * (-parseInt(_0x503751(0xe1)) / (0x209 * -0xc + 0x3be + 0x14b7 * 0x1)) + -parseInt(_0x503751(0xf6)) / (0x34d + -0x2249 + -0xb * -0x2d2);
            if (_0x4db47d === _0x276986)
                break;
            else
                _0x870a3b['push'](_0x870a3b['shift']());
        } catch (_0x1e20f6) {
            _0x870a3b['push'](_0x870a3b['shift']());
        }
    }
}(_0x11a3, 0x1366e + 0x18cf * -0x1c + -0x1a1ce * -0x3));
function _0x39c8(_0x150b21, _0x32b476) {
    const _0x1d74fa = _0x11a3();
    return _0x39c8 = function (_0x4cc485, _0x176a6c) {
        _0x4cc485 = _0x4cc485 - (0x26da + -0x7 * -0x4af + -0x46cf);
        let _0x1f6dfa = _0x1d74fa[_0x4cc485];
        return _0x1f6dfa;
    }, _0x39c8(_0x150b21, _0x32b476);
}
const _0x22e30 = {};
_0x22e30[_0x433324(0xdf)] = !![], Object[_0x433324(0xde) + _0x433324(0xf4)](exports, _0x433324(0xef), _0x22e30);
const sequelize_1 = require(_0x433324(0xe5));
module[_0x433324(0xe3)] = {
    'up': _0x2aa9b9 => {
        const _0x261425 = _0x433324, _0xe9685a = {};
        _0xe9685a[_0x261425(0xf5)] = _0x261425(0xea) + 's', _0xe9685a[_0x261425(0xf0)] = _0x261425(0xeb), _0xe9685a[_0x261425(0xd6)] = _0x261425(0xed), _0xe9685a[_0x261425(0xf2)] = _0x261425(0xe8), _0xe9685a[_0x261425(0xec)] = _0x261425(0xdd), _0xe9685a[_0x261425(0xd4)] = _0x261425(0xd7);
        const _0x4723af = _0xe9685a, _0x2bc04c = {};
        return _0x2bc04c[_0x261425(0xdc)] = sequelize_1[_0x261425(0xd8)][_0x261425(0xd5)], _0x2bc04c[_0x261425(0xf8) + _0x261425(0xd9)] = !![], _0x2bc04c[_0x261425(0xdb)] = !![], _0x2bc04c[_0x261425(0xe2)] = ![], _0x2aa9b9[_0x261425(0xe0) + 'e'](_0x4723af[_0x261425(0xf5)], {
            'id': _0x2bc04c,
            'tagId': {
                'type': sequelize_1[_0x261425(0xd8)][_0x261425(0xd5)],
                'references': {
                    'model': _0x4723af[_0x261425(0xf0)],
                    'key': 'id'
                },
                'onUpdate': _0x4723af[_0x261425(0xd6)],
                'onDelete': _0x4723af[_0x261425(0xf2)],
                'allowNull': ![]
            },
            'contactId': {
                'type': sequelize_1[_0x261425(0xd8)][_0x261425(0xd5)],
                'references': {
                    'model': _0x4723af[_0x261425(0xec)],
                    'key': 'id'
                },
                'onUpdate': _0x4723af[_0x261425(0xd6)],
                'onDelete': _0x4723af[_0x261425(0xd6)],
                'allowNull': ![]
            },
            'tenantId': {
                'type': sequelize_1[_0x261425(0xd8)][_0x261425(0xd5)],
                'references': {
                    'model': _0x4723af[_0x261425(0xd4)],
                    'key': 'id'
                },
                'onUpdate': _0x4723af[_0x261425(0xd6)],
                'onDelete': _0x4723af[_0x261425(0xd6)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[_0x261425(0xd8)][_0x261425(0xf9)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[_0x261425(0xd8)][_0x261425(0xf9)],
                'allowNull': ![]
            }
        });
    },
    'down': _0x23a52a => {
        const _0x15b9d5 = _0x433324, _0x532661 = {};
        _0x532661[_0x15b9d5(0xe9)] = _0x15b9d5(0xea) + 's';
        const _0x32675e = _0x532661;
        return _0x23a52a[_0x15b9d5(0xf7)](_0x32675e[_0x15b9d5(0xe9)]);
    }
};
function _0x11a3() {
    const _0x282b89 = [
        'kygOG',
        'CASCADE',
        '633810cNtUMx',
        '__esModule',
        'yjvCb',
        '11382SZvJRf',
        'vOKbV',
        '861492KHOkgG',
        'erty',
        'qJatN',
        '7275040BZfNgJ',
        'dropTable',
        'autoIncrem',
        'DATE',
        '63lFbgFg',
        'kQAaa',
        'INTEGER',
        'hjmsu',
        'Tenants',
        'DataTypes',
        'ent',
        '798114ipIOUO',
        'primaryKey',
        'type',
        'Contacts',
        'defineProp',
        'value',
        'createTabl',
        '173781xLxrAa',
        'allowNull',
        'exports',
        '168rblNUw',
        'sequelize',
        '1giZToY',
        '1306090vLsuME',
        'RESTRICT',
        'WGvFv',
        'ContactTag',
        'Tags'
    ];
    _0x11a3 = function () {
        return _0x282b89;
    };
    return _0x11a3();
}