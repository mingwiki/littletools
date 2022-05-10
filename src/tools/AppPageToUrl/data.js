export const miniAppIds = {
  vv会员: '2021002152610059',
  存量小程序: '2021002181632074',
  宽带中心小程序: '2021003120640616',
}
export const miniAppPages = {
  vv会员: {
    '首页/办理页': 'index/index',
    '详情页/生效页': 'detail/index',
    会员管理: 'manage/index',
    会员规则: 'memberRule/index',
    会员退订: 'exit/index',
    退订调查问卷: 'question/index',
    会员攻略: 'strategy/index',
    权益中间页: 'yinge/index',
    会员账单: 'billList/index',
    会员周: 'memberWeek/index',
    会员任务: 'task/index',
  },
  存量小程序: {
    首页: 'index/index',
    支付结果页: 'payResult/index',
    订单列表: 'tradeList/index',
    订单详情: 'tradeDetail/index',
    协议页面: 'pureText/index',
  },
  宽带中心小程序: {
    首页: 'index/index',
    oao列表页: 'oao/index',
  },
}
export const miniAppPageExtra = {
  2021002181632074: {
    'index/index': {
      pathname: ['splitItem', 'swiperItem', 'singleItem'],
    },
  },
  2021002152610059: {
    'index/index': {
      upgrade: true,
      type: 'basic',
      frame: 'single',
      anchor: ['call', 'life', 'fee'],
    },
    'exit/index': {
      type: ['vip', 'basic'],
    },
    'manage/index': {
      type: ['vip', 'basic'],
    },
    'memberRule/index': {
      type: ['vip', 'basic'],
    },
    'question/index': {
      type: ['vip', 'basic'],
    },
    'strategy/index': {
      type: ['vip', 'basic'],
    },
  },
  2021003120640616: {},
}
