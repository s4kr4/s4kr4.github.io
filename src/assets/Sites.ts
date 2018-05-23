interface ISite {
  name: string
  text: string
  url: string
  option: string
  modifier: string
}

const Sites: ISite[] = [
  {
    name: 'github',
    text: 'GitHub',
    url: 'https://github.com/s4kr4',
    option: 'spin',
    modifier: 'github-icon'
  },
  {
    name: 'quora',
    text: 'Qiita',
    url: 'https://qiita.com/s4kr4',
    option: 'vertical',
    modifier: 'qiita-icon'
  },
  {
    name: 'edit',
    text: 'Blog',
    url: 'http://s4kr4.hatenablog.com/',
    option: 'vertical',
    modifier: 'hatenablog-icon'
  },
  {
    name: 'twitter',
    text: 'Twitter',
    url: 'https://twitter.com/s4kr4m4',
    option: 'vertical',
    modifier: 'twitter-icon'
  }
]

export default Sites
