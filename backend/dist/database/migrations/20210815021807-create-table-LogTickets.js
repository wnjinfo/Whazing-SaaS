'use strict';
function _0x5cd7(_0x5e69ae, _0x1235e3) {
    const _0x17a435 = _0x4823();
    return _0x5cd7 = function (_0x3fc5eb, _0x418fc8) {
        _0x3fc5eb = _0x3fc5eb - (0x1d0 * 0x1 + 0x155a + -0x1 * 0x154b);
        let _0x5cee78 = _0x17a435[_0x3fc5eb];
        return _0x5cee78;
    }, _0x5cd7(_0x5e69ae, _0x1235e3);
}
const _0x2c5e16 = _0x5cd7;
function _0x4823() {
    const _0x1b4201 = [
        'dropTable',
        '204110UfTaws',
        'DataTypes',
        'STRING',
        '21MqcuPv',
        '708GwDUAk',
        'erty',
        'Tickets',
        'exports',
        'primaryKey',
        'LogTickets',
        'allowNull',
        'hbGzs',
        '1625nprlwh',
        'defineProp',
        'ghEVw',
        '2053208rcDenA',
        'CASCADE',
        'type',
        'INTEGER',
        'Queues',
        'nJyqc',
        'NKReC',
        'Users',
        '8040XPWYKN',
        '8592723qNoEqu',
        'ent',
        'autoIncrem',
        'LHqbm',
        'yCmSN',
        '__esModule',
        '4612AuglXS',
        'createTabl',
        '50777jrXjIq',
        'sequelize',
        '3729984XqzxLV',
        'value',
        '1243uQCJdq',
        'DATE'
    ];
    _0x4823 = function () {
        return _0x1b4201;
    };
    return _0x4823();
}
(function (_0x33ceb1, _0x525f18) {
    const _0x877520 = _0x5cd7, _0x3f90fa = _0x33ceb1();
    while (!![]) {
        try {
            const _0x1f619d = -parseInt(_0x877520(0x1e1)) / (0xdc2 + 0x1 * -0x23b9 + 0x15f8) + parseInt(_0x877520(0x1ec)) / (-0x8de * -0x1 + 0xa * -0x6f + -0x6 * 0xc1) * (parseInt(_0x877520(0x1ff)) / (-0x1640 + -0xe * -0x41 + 0x12b5 * 0x1)) + -parseInt(_0x877520(0x1df)) / (0x1aa7 + -0x5 * 0x471 + -0x46e) * (parseInt(_0x877520(0x1f4)) / (-0x85 * -0x2 + -0x47 * 0x2f + 0xc04)) + parseInt(_0x877520(0x1e3)) / (-0x4 * -0x710 + 0x2173 + -0x3dad) + parseInt(_0x877520(0x1eb)) / (-0x1833 + 0x11 * 0x2c + -0x1b * -0xca) * (parseInt(_0x877520(0x1f7)) / (-0x1c71 + 0x4 * -0x8b4 + -0x3f49 * -0x1)) + parseInt(_0x877520(0x200)) / (-0x1fbe + 0x203c * 0x1 + 0x9 * -0xd) + -parseInt(_0x877520(0x1e8)) / (-0x11 * -0x139 + 0x2115 + -0x35d4) * (parseInt(_0x877520(0x1e5)) / (0x4df + -0x21cb + 0x1cf7));
            if (_0x1f619d === _0x525f18)
                break;
            else
                _0x3f90fa['push'](_0x3f90fa['shift']());
        } catch (_0x498281) {
            _0x3f90fa['push'](_0x3f90fa['shift']());
        }
    }
}(_0x4823, 0x6aae2 + 0x27 * 0x4963 + 0x2504d * -0x4));
const _0x2aff3c = {};
_0x2aff3c[_0x2c5e16(0x1e4)] = !![], Object[_0x2c5e16(0x1f5) + _0x2c5e16(0x1ed)](exports, _0x2c5e16(0x205), _0x2aff3c);
const sequelize_1 = require(_0x2c5e16(0x1e2));
module[_0x2c5e16(0x1ef)] = {
    'up': _0x2859b6 => {
        const _0xf980c8 = _0x2c5e16, _0x3fc95a = {};
        _0x3fc95a[_0xf980c8(0x1f6)] = _0xf980c8(0x1f1), _0x3fc95a[_0xf980c8(0x1fc)] = _0xf980c8(0x1fe), _0x3fc95a[_0xf980c8(0x204)] = _0xf980c8(0x1f8), _0x3fc95a[_0xf980c8(0x203)] = _0xf980c8(0x1ee), _0x3fc95a[_0xf980c8(0x1fd)] = _0xf980c8(0x1fb);
        const _0x2928a9 = _0x3fc95a, _0x37b196 = {};
        return _0x37b196[_0xf980c8(0x1f9)] = sequelize_1[_0xf980c8(0x1e9)][_0xf980c8(0x1fa)], _0x37b196[_0xf980c8(0x202) + _0xf980c8(0x201)] = !![], _0x37b196[_0xf980c8(0x1f0)] = !![], _0x37b196[_0xf980c8(0x1f2)] = ![], _0x2859b6[_0xf980c8(0x1e0) + 'e'](_0x2928a9[_0xf980c8(0x1f6)], {
            'id': _0x37b196,
            'userId': {
                'type': sequelize_1[_0xf980c8(0x1e9)][_0xf980c8(0x1fa)],
                'references': {
                    'model': _0x2928a9[_0xf980c8(0x1fc)],
                    'key': 'id'
                },
                'onUpdate': _0x2928a9[_0xf980c8(0x204)],
                'onDelete': _0x2928a9[_0xf980c8(0x204)],
                'allowNull': !![],
                'defaultValue': null
            },
            'ticketId': {
                'type': sequelize_1[_0xf980c8(0x1e9)][_0xf980c8(0x1fa)],
                'references': {
                    'model': _0x2928a9[_0xf980c8(0x203)],
                    'key': 'id'
                },
                'onUpdate': _0x2928a9[_0xf980c8(0x204)],
                'onDelete': _0x2928a9[_0xf980c8(0x204)],
                'allowNull': ![]
            },
            'queueId': {
                'type': sequelize_1[_0xf980c8(0x1e9)][_0xf980c8(0x1fa)],
                'references': {
                    'model': _0x2928a9[_0xf980c8(0x1fd)],
                    'key': 'id'
                },
                'onUpdate': _0x2928a9[_0xf980c8(0x204)],
                'onDelete': _0x2928a9[_0xf980c8(0x204)],
                'defaultValue': null,
                'allowNull': !![]
            },
            'type': {
                'type': sequelize_1[_0xf980c8(0x1e9)][_0xf980c8(0x1ea)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[_0xf980c8(0x1e9)][_0xf980c8(0x1e6)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[_0xf980c8(0x1e9)][_0xf980c8(0x1e6)],
                'allowNull': ![]
            }
        });
    },
    'down': _0x2ca751 => {
        const _0x286cc0 = _0x2c5e16, _0x185d14 = {};
        _0x185d14[_0x286cc0(0x1f3)] = _0x286cc0(0x1f1);
        const _0x59c12d = _0x185d14;
        return _0x2ca751[_0x286cc0(0x1e7)](_0x59c12d[_0x286cc0(0x1f3)]);
    }
};