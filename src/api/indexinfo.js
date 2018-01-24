/**
 * Created by Hu_2015 on 2017/6/16.
 */
export const MY_MODEL_INDEXS = {
  'A0001': {
    message: '倒数第N1~第N2个交易日内总涨跌幅介于M1%~M2%之间',
    params: [{
      label: 'N1',
      value: 1,

    }, {
      label: 'N2',
      value: 5,

    }, {
      label: 'M1',
      value: -2.0,

    }, {
      label: 'M2',
      value: 2.0,

    }]
  },
  'A0002': {
    message: '倒数第N1~第N2个交易日内平均换手率介于M1%~M2%之间',
    params: [{
      label: 'N1',
      value: 1,

    }, {
      label: 'N2',
      value: 5,

    }, {
      label: 'M1',
      value: 0,

    }, {
      label: 'M2',
      value: 10.0,

    }]
  },
  'A0003': {},
  'A0004': {},
  'A0005': {
    message: '倒数第N1-第N2个交易日内每日涨跌幅绝对值的平均值介于M1%-M2%之间',
    params: [{
      label: 'N1',
      value: 1,

    }, {
      label: 'N2',
      value: 5,

    }, {
      label: 'M1',
      value: 0,

    }, {
      label: 'M2',
      value: 2.0,

    }]
  },
  'A0006': {},
  'A0007': {},
  'A0008': {
    message: '总市值介于M1~M2之间',
    params: [{
      label: 'M1',
      value: 20,

    }],
    select1: [{
      value: 100000000,
      optionList: [{
        value: 1000000,
        label: '百万'
      }, {
        value: 10000000,
        label: '千万'
      }, {
        value: 100000000,
        label: '亿'
      }, {
        value: 1000000000,
        label: '十亿'
      }, {
        value: 10000000000,
        label: '百亿'
      }, {
        value: 100000000000,
        label: '千亿'
      }],

    }],
    params2: [{
      label: 'M2',
      value: 30,

    }],

    select2: [{
      value: 100000000,
      optionList: [{
        value: 1000000,
        label: '百万'
      }, {
        value: 10000000,
        label: '千万'
      }, {
        value: 100000000,
        label: '亿'
      }, {
        value: 1000000000,
        label: '十亿'
      }, {
        value: 10000000000,
        label: '百亿'
      }, {
        value: 100000000000,
        label: '千亿'
      }],

    }]
  },
  'A0009': {
    message: '流通市值介于M1~M2之间',
    params: [{
      label: 'M1',
      value: 20,
    }],
    select1: [{
      value: 100000000,
      optionList: [{
        value: 1000000,
        label: '百万'
      }, {
        value: 10000000,
        label: '千万'
      }, {
        value: 100000000,
        label: '亿'
      }, {
        value: 1000000000,
        label: '十亿'
      }, {
        value: 10000000000,
        label: '百亿'
      }, {
        value: 100000000000,
        label: '千亿'
      }],

    }],
    params2: [{
      label: 'M2',
      value: 30,
    }],

    select2: [{
      value: 100000000,
      optionList: [{
        value: 1000000,
        label: '百万'
      }, {
        value: 10000000,
        label: '千万'
      }, {
        value: 100000000,
        label: '亿'
      }, {
        value: 1000000000,
        label: '十亿'
      }, {
        value: 10000000000,
        label: '百亿'
      }, {
        value: 100000000000,
        label: '千亿'
      }],

    }]
  },
  'A0010': {
    message: '倒数第M个交易日的成交量是倒数第N1~第N2个交易日内的最低量',
    params: [{
      label: 'M',
      value: 1,

    }, {
      label: 'N1',
      value: 1,

    }, {
      label: 'N2',
      value: 5,

    }]
  },
  'A0011': {
    message: '倒数第M个交易日的成交量是倒数第N1~第N2个交易日内的最高量',
    params: [{
      label: 'M',
      value: 1,

    }, {
      label: 'N1',
      value: 1,

    }, {
      label: 'N2',
      value: 5,

    }]
  },
  'A0012': {
    message: '股票上市超过N个自然日的票',
    params: [{
      label: 'N',
      value: 365,


    }]
  },
  'A0013': {
    message: '股票上市少于N个自然日的股票',
    params: [{
      label: 'N',
      value: 365,

    }]
  },
  'A0014': {
    message: '选择代码以A开头的股票',
    params: [{
      label: 'A',
      value: '00',

    }]
  },
  'A0015': {
    message: '剔除代码以A开头的股票',
    params: [{
      label: 'A',
      value: '300',

    }]
  },
  'A0016': {
    message: '倒数第N1~第N2个交易日内实体涨跌幅介于M1%~M2%之间',
    params: [{
      label: 'N1',
      value: 1,


    }, {
      label: 'N2',
      value: 5,


    }, {
      label: 'M1',
      value: -2.0,

    }, {
      label: 'M2',
      value: 2.0,

    }]
  },
  'A0017': {
    message: '倒数第N1~第N2个交易日内的最低交易量发生在倒数第N3~第N4个交易日内',
    params: [{
      label: 'N1',
      value: 1,

    }, {
      label: 'N2',
      value: 5,

    }, {
      label: 'N3',
      value: 1,

    }, {
      label: 'N4',
      value: 1,

    }]
  },
  'A0018': {
    message: '倒数第N1~第N2个交易日内的最高交易量发生在倒数第N3~第N4个交易日内',
    params: [{
      label: 'N1',
      value: 1,

    }, {
      label: 'N2',
      value: 5,

    }, {
      label: 'N3',
      value: 1,

    }, {
      label: 'N4',
      value: 1,

    }]
  },
  'A0019': {
    message: '倒数第N1~第N2个交易日内的最低收盘价发生在倒数第N3~第N4个交易日内',
    params: [{
      label: 'N1',
      value: 1,

    }, {
      label: 'N2',
      value: 5,

    }, {
      label: 'N3',
      value: 1,

    }, {
      label: 'N4',
      value: 1,

    }]
  },
  'A0020': {
    message: '倒数第N1~第N2个交易日内的最高收盘价发生在倒数第N3~第N4个交易日内',
    params: [{
      label: 'N1',
      value: 1,

    }, {
      label: 'N2',
      value: 5,

    }, {
      label: 'N3',
      value: 1,

    }, {
      label: 'N4',
      value: 1,

    }]
  },
  'A0021': {
    message: '倒数第N1~第N2个交易日的交易量按时间顺序依次下降',
    params: [{
      label: 'N1',
      value: 1,

    }, {
      label: 'N2',
      value: 5,

    }]
  },
  'A0022': {
    message: '倒数第N1~第N2个交易日的交易量按时间顺序依次上升',
    params: [{
      label: 'N1',
      value: 1,

    }, {
      label: 'N2',
      value: 5,

    }]
  },
  'A0023': {
    message: '倒数第N1~第N2个交易日的收盘价按时间顺序依次上升',
    params: [{
      label: 'N1',
      value: 1,

    }, {
      label: 'N2',
      value: 5,

    }]
  },
  'A0024': {
    message: '倒数第N1~第N2个交易日的收盘价按时间顺序依次下降',
    params: [{
      label: 'N1',
      value: 1,

    }, {
      label: 'N2',
      value: 5,

    }]
  },
  // 'A0025': {
  //   message: '倒数第N1~第N2个交易日的交易量最大振幅介于M1~M2之间',
  //   params: [{
  //     label: 'N1',
  //     value: 1,
  //     validator: [{
  //       validator: positiveIntegerValidator1,
  //       trigger: 'blur'
  //     }]
  //   }, {
  //     label: 'N2',
  //     value: 5,
  //     validator: [{
  //       validator: positiveIntegerValidator2,
  //       trigger: 'blur'
  //     }]
  //   }, {
  //     label: 'M1',
  //     value: 2.5,
  //     validator: [{
  //       validator: validateNonNegativeNumber3,
  //       trigger: 'blur'
  //     }]
  //   }, {
  //     label: 'M2',
  //     value: 5,
  //     validator: [{
  //       validator: validateNonNegativeNumber4,
  //       trigger: 'blur'
  //     }]
  //   }]
  // },
  'A0026': {
    message: '倒数第N1~第N2日交易量之和与倒数第N3~N4日交易量之和的比值介于M1~M2',
    params: [{
      label: 'N1',
      value: 1,

    }, {
      label: 'N2',
      value: 3,

    }, {
      label: 'N3',
      value: 1,

    }, {
      label: 'N4',
      value: 5,

    }, {
      label: 'M1',
      value: 0.5,

    }, {
      label: 'M2',
      value: 0.8,

    }]
  },
  'A0027': {
    message: 'macd(S,L,M),倒数第N个交易日指标死叉/金叉',
    params: [{
      label: 'S',
      value: 12,

    }, {
      label: 'L',
      value: 26,

    }, {
      label: 'M',
      value: 9,

    }, {
      label: 'N',
      value: 1,

    }],
    radios: [{
      value: '1',
      threeFlag: false,
      label1: '死叉',
      value1: '0',
      label2: '金叉',
      value2: '1'
    }]
  },
  'A0028': {
    message: 'macd(S,L,M),倒数第N个交易日指标白线dif和黄线dea均运行在0轴以下/以上',
    params: [{
      label: 'S',
      value: 12,

    }, {
      label: 'L',
      value: 26,

    }, {
      label: 'M',
      value: 9,

    }, {
      label: 'N',
      value: 1,

    }],
    radios: [{
      value: '1',
      threeFlag: false,
      label1: '以下',
      value1: '0',
      label2: '以上',
      value2: '1'
    }]
  },
  'A0029': {
    message: '倒数第M个交易日,收盘价位于N日均线以下/以上',
    params: [{
      label: 'M',
      value: 1,
    }, {
      label: 'N',
      value: 5,

    }],
    radios: [{
      value: '1',
      threeFlag: false,
      label1: '以下',
      value1: '0',
      label2: '以上',
      value2: '1'
    }]
  },
  'A0030': {
    message: 'kdj(Day, K, D)，倒数第M个交易日指标死叉/金叉',
    params: [{
      label: 'Day',
      value: 9,

    }, {
      label: 'K',
      value: 3,

    }, {
      label: 'D',
      value: 3,

    }, {
      label: 'M',
      value: 1,

    }],
    radios: [{
      value: '1',
      threeFlag: false,
      label1: '死叉',
      value1: '0',
      label2: '金叉',
      value2: '1'
    }]
  },
  'A0031': {
    message: 'kdj(Day, K, D)指标，倒数第N个交易日指标白线K值介于M1~M2之间',
    params: [{
      label: 'Day',
      value: 9,

    }, {
      label: 'K',
      value: 3,

    }, {
      label: 'D',
      value: 3,

    }, {
      label: 'N',
      value: 1,

    }, {
      label: 'M1',
      value: 20,

    }, {
      label: 'M2',
      value: 80,

    }]
  },
  'A0032': {
    message: 'kdj(Day, K, D)指标，倒数第N个交易日指标黄线D值介于M1~M2之间',
    params: [{
      label: 'Day',
      value: 9,

    }, {
      label: 'K',
      value: 3,

    }, {
      label: 'D',
      value: 3,

    }, {
      label: 'N',
      value: 1,

    }, {
      label: 'M1',
      value: 20,

    }, {
      label: 'M2',
      value: 80,

    }]
  },
  'A0033': {
    message: 'kdj(Day, K, D)指标，倒数第N个交易日指标紫线J值介于M1~M2之间',
    params: [{
      label: 'Day',
      value: 9,

    }, {
      label: 'K',
      value: 3,

    }, {
      label: 'D',
      value: 3,

    }, {
      label: 'N',
      value: 1,

    }, {
      label: 'M1',
      value: 20,

    }, {
      label: 'M2',
      value: 80,

    }]
  },
  'A0034': {
    message: '布林通道(Day)指标，倒数第M个交易日收盘价处于中轨以下/以上',
    params: [{
      label: 'Day',
      value: 20,

    }, {
      label: 'M',
      value: 1,

    }],
    radios: [{
      value: '1',
      threeFlag: false,
      label1: '以下',
      value1: '0',
      label2: '以上',
      value2: '1'
    }]
  },
  'A0035': {
    message: '布林通道(Day)指标，倒数第M个交易日收盘价处于下轨以下/上轨以上',
    params: [{
      label: 'Day',
      value: 20,

    }, {
      label: 'M',
      value: 1,

    }],
    radios: [{
      value: '1',
      threeFlag: false,
      label1: '下轨以下',
      value1: '0',
      label2: '上轨以上',
      value2: '1'
    }]
  },
  'A0036': {
    message: 'RSI(Day)指标，倒数第N个交易日指标值大于M1',
    params: [{
      label: 'Day',
      value: 14,

    }, {
      label: 'N',
      value: 1,

    }, {
      label: 'M1',
      value: 70,
      // validatePositiveNumber

    }]
  },
  'A0037': {
    message: 'RSI(Day)指标，倒数第N个交易日指标值小于M1',
    params: [{
      label: 'Day',
      value: 14,

    }, {
      label: 'N',
      value: 1,

    }, {
      label: 'M1',
      value: 30,

    }]
  },
  'A0038': {
    message: 'RSI(Day)指标，倒数第N个交易日指标值介于M1~M2之间',
    params: [{
      label: 'Day',
      value: 14,

    }, {
      label: 'N',
      value: 1,

    }, {
      label: 'M1',
      value: 30,

    }, {
      label: 'M2',
      value: 70,

    }]
  },
  'A0039': {
    message: 'OBV指标，倒数第M个交易日指标值位于该指标N日均线以下/以上',
    params: [{
      label: 'M',
      value: 1,

    }, {
      label: 'N',
      value: 30,

    }],
    radios: [{
      value: '1',
      threeFlag: false,
      label1: '以下',
      value1: '0',
      label2: '以上',
      value2: '1'
    }]
  },
  'A0040': {
    message: 'BIAS(Day)指标，倒数第M个交易日的指标值为N日内最小值/最大值',
    params: [{
      label: 'Day',
      value: 10,

    }, {
      label: 'M',
      value: 1,

    }, {
      label: 'N',
      value: 20,

    }],
    radios: [{
      value: '1',
      threeFlag: false,
      label1: '最小值',
      value1: '0',
      label2: '最大值',
      value2: '1'
    }]
  },
  'A0041': {
    message: 'BIAS(Day)指标，倒数第N个交易日的指标值介于M1~M2之间',
    params: [{
      label: 'Day',
      value: 10,

    }, {
      label: 'N',
      value: 1,

    }, {
      label: 'M1',
      value: -0.16,

    }, {
      label: 'M2',
      value: 0.16,

    }]
  },
  'A0042': {
    message: 'BIAS(Day)指标，倒数第N个交易日的指标值大于M',
    params: [{
      label: 'Day',
      value: 10,

    }, {
      label: 'N',
      value: 1,

    }, {
      label: 'M',
      value: 0.16,

    }]
  },
  'A0043': {
    message: 'BIAS(Day)指标，倒数第N个交易日的指标值小于M',
    params: [{
      label: 'Day',
      value: 10,

    }, {
      label: 'N',
      value: 1,

    }, {
      label: 'M',
      value: -0.16,

    }]
  },
  'A0044': {
    message: 'MIKE(Day)指标，倒数第N个交易日最高价处于轻/中/强压力位以下',
    params: [{
      label: 'Day',
      value: 10,

    }, {
      label: 'N',
      value: 1,

    }],
    radios: [{
      value: '0',
      threeFlag: true,
      label1: '轻',
      value1: '0',
      label2: '中',
      value2: '1',
      label3: '强',
      value3: '2'
    }]
  },
  'A0045': {
    message: 'MIKE(Day)指标，倒数第N个交易日最高价处于轻/中/强压力位以上',
    params: [{
      label: 'Day',
      value: 10,

    }, {
      label: 'N',
      value: 1,

    }],
    radios: [{
      value: '0',
      threeFlag: true,
      label1: '轻',
      value1: '0',
      label2: '中',
      value2: '1',
      label3: '强',
      value3: '2'
    }]
  },
  'A0046': {
    message: 'MIKE(Day)指标，倒数第N个交易日最低价处于轻/中/强支撑位以上',
    params: [{
      label: 'Day',
      value: 10,

    }, {
      label: 'N',
      value: 1,

    }],
    radios: [{
      value: '0',
      threeFlag: true,
      label1: '轻',
      value1: '0',
      label2: '中',
      value2: '1',
      label3: '强',
      value3: '2'
    }]
  },
  'A0047': {
    message: 'MIKE(Day)指标，倒数第N个交易日最低价处于轻/中/强支撑位以下',
    params: [{
      label: 'Day',
      value: 10,

    }, {
      label: 'N',
      value: 1,

    }],
    radios: [{
      value: '0',
      threeFlag: true,
      label1: '轻',
      value1: '0',
      label2: '中',
      value2: '1',
      label3: '强',
      value3: '2'
    }]
  },
  'A0048': {
    message: 'macd(S, L, M)，倒数第N个交易日指标呈空头/多头排布',
    params: [{
      label: 'S',
      value: 12,

    }, {
      label: 'L',
      value: 26,

    }, {
      label: 'M',
      value: 9,

    }, {
      label: 'N',
      value: 1,

    }],
    radios: [{
      value: '1',
      threeFlag: false,
      label1: '空头',
      value1: '0',
      label2: '多头',
      value2: '1'
    }]
  },
  'A0049': {
    message: 'kdj(Day, K, D)，倒数第N个交易日指标呈空头/多头排布',
    params: [{
      label: 'Day',
      value: 9,

    }, {
      label: 'K',
      value: 3,

    }, {
      label: 'D',
      value: 3,

    }, {
      label: 'N',
      value: 1,

    }],
    radios: [{
      value: '1',
      threeFlag: false,
      label1: '空头',
      value1: '0',
      label2: '多头',
      value2: '1'
    }]
  },
  'A0050': {
    message: '倒数第M个交易日,N1日均线上穿N2日均线',
    params: [{
      label: 'M',
      value: 1,

    }, {
      label: 'N1',
      value: 5,

    }, {
      label: 'N2',
      value: 15,

    }]
  },
  'A0051': {
    message: '倒数第M个交易日,收盘价位于N日均线以下/以上',
    params: [{
      label: 'M',
      value: 1,

    }, {
      label: 'N',
      value: 5,

    }],
    radios: [{
      value: '1',
      threeFlag: false,
      label1: '以下',
      value1: '0',
      label2: '以上',
      value2: '1'
    }]
  },
  'A0052': {
    message: '倒数第M个交易日,收盘价介于N1~N2日均线之间',
    params: [{
      label: 'M',
      value: 1,

    }, {
      label: 'N1',
      value: 5,

    }, {
      label: 'N2',
      value: 10,

    }]
  },
  'A0053': {
    message: '买入时否/是剔除st、*st股票',
    params: [],
    radios: [{
      value: '1',
      threeFlag: false,
      label1: '否',
      value1: '0',
      label2: '是',
      value2: '1'
    }]
  },
  'A0054': {
    message: '倒数第N1~第N2日收盘价之和与倒数第N3~N4日收盘价之和的比值介于M1~M2',
    params: [{
      label: 'N1',
      value: 1,

    }, {
      label: 'N2',
      value: 3,

    }, {
      label: 'N3',
      value: 1,

    }, {
      label: 'N4',
      value: 5,

    }, {
      label: 'M1',
      value: 0.5,

    }, {
      label: 'M2',
      value: 0.8,

    }]
  },
  'B0001': {
    message: '过去N日股价波动率越低/高越易被选中',
    params: [{
      label: 'N',
      value: 5,

    }],
    radios: [{
      value: '1',
      threeFlag: false,
      label1: '低',
      value1: '0',
      label2: '高',
      value2: '1'
    }]
  },
  'B0002': {

    message: '流通市值越低/高易被选中',
    params: [],
    radios: [{
      value: '0',
      threeFlag: false,
      label1: '低',
      value1: '0',
      label2: '高',
      value2: '1'
    }]

  },
  'B0003': {

    message: '过去N日涨幅越低/高越易被选中',
    params: [{
      label: 'N',
      value: 15,

    }],
    radios: [{
      value: '1',
      threeFlag: false,
      label1: '低',
      value1: '0',
      label2: '高',
      value2: '1'
    }]
  },
  'B0004': {

    message: '总市值越低/高易被选中',
    params: [],
    radios: [{
      value: '0',
      threeFlag: false,
      label1: '低',
      value1: '0',
      label2: '高',
      value2: '1'
    }]
  },
  'B0005': {

    message: '过去N日换手率总和越低/高越易被选中',
    params: [{
      label: 'N',
      value: 15,

    }],
    radios: [{
      value: '0',
      threeFlag: false,
      label1: '低',
      value1: '0',
      label2: '高',
      value2: '1'
    }]
  },
  'B0006': {

    message: '上市时间越短/长越易被选中',
    params: [],
    radios: [{
      value: '0',
      threeFlag: false,
      label1: '短',
      value1: '0',
      label2: '长',
      value2: '1'
    }]
  },
  'B0007': {

    message: '过去N日量比越小/大越易被选中',
    params: [{
      label: 'N',
      value: 10,

    }],
    radios: [{
      value: '1',
      threeFlag: false,
      label1: '小',
      value1: '0',
      label2: '大',
      value2: '1'
    }]
  },
  // 'B0008': {
  //   message: '千投定制二次筛选--K线分析法',
  //   params: []
  // },
  // 'B0009': {
  //   message: '千投定制二次筛选--量价分析法',
  //   params: []
  // },
  // 'B0010': {
  //
  //   message: '二次筛选函数，千投定制二次筛选--趋势分析法',
  //   params: []
  // },
  'C0001': {
    message: 'M指数位于N日均线以下/上才允许买，否则空仓',
    params: [{
      label: 'N',
      value: 15,

    }],
    radios: [{
      value: '1',
      threeFlag: false,
      label1: '下',
      value1: '0',
      label2: '上',
      value2: '1'
    }],
    selects: [{
      value: '上证指数000001',
      label: 'M',
      optionList: [{
        value: 'C0001-1',
        label: '上证指数000001'
      }, {
        value: 'C0001-2',
        label: 'A股指数000002'
      }, {
        value: 'C0001-3',
        label: 'B股指数000003'
      }, {
        value: 'C0001-4',
        label: '工业指数000004'
      }, {
        value: 'C0001-5',
        label: '商业指数000005'
      }, {
        value: 'C0001-6',
        label: '地产指数000006'
      },
        {
          value: 'C0001-7',
          label: '公用指数000007'
        },
        {
          value: 'C0001-8',
          label: '综合指数000008'
        },
        {
          value: 'C0001-9',
          label: '上证180指数000010'
        },
        {
          value: 'C0001-10',
          label: '基金指数000011'
        },
        {
          value: 'C0001-11',
          label: '国债指数000012'
        },
        {
          value: 'C0001-12',
          label: '企债指数000013'
        },
        {
          value: 'C0001-13',
          label: '上证50指数000016'
        },
        {
          value: 'C0001-14',
          label: '新综指000017'
        },
        {
          value: 'C0001-15',
          label: '180金融指数000018'
        },
        {
          value: 'C0001-16',
          label: '沪深300指数000300'
        },
        {
          value: 'C0001-17',
          label: '小康指数000901'
        },
        {
          value: 'C0001-18',
          label: '中证指数000903'
        },
        {
          value: 'C0001-19',
          label: '中证200指数000904'
        },
        {
          value: 'C0001-20',
          label: '中证500指数000905'
        },
        {
          value: 'C0001-21',
          label: '中证800指数000906'
        },
        {
          value: 'C0001-22',
          label: '300能源指数000908'
        },
        {
          value: 'C0001-23',
          label: '300材料指数000909'
        },
        {
          value: 'C0001-24',
          label: '深证成指399001'
        },
        {
          value: 'C0001-25',
          label: '成分A指399002'
        },
        {
          value: 'C0001-26',
          label: '成分B指399003'
        },
        {
          value: 'C0001-27',
          label: '深证100R指数399004'
        },
        {
          value: 'C0001-28',
          label: '中小板综合指数399101'
        }
      ],
    }],
  },
  'C0002': {
    message: '千投定制风控函数--小盘股综合分析',
    params: []
  },
  'C0003': {
    message: '千投定制风控函数--大盘股综合分析',
    params: []
  }

};

