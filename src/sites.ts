import { IconProp } from "@fortawesome/fontawesome-svg-core"

interface Site {
  icon: IconProp
  text: string
  url: string
  option: string
  modifier: string
}

const Sites: Array<Site> = [
  {
    icon: ['fab', 'github'],
    text: 'GitHub',
    url: 'https://github.com/s4kr4',
    option: 'spin',
    modifier: 'github-icon',
  },
  {
    icon: ['fab','quora'],
    text: 'Qiita',
    url: 'https://qiita.com/s4kr4',
    option: 'vertical',
    modifier: 'qiita-icon',
  },
  {
    icon: 'edit',
    text: 'Blog',
    url: 'http://s4kr4.hatenablog.com/',
    option: 'vertical',
    modifier: 'hatenablog-icon',
  },
  {
    icon: ['fab', 'twitter'],
    text: 'Twitter',
    url: 'https://twitter.com/s4kr4_',
    option: 'vertical',
    modifier: 'twitter-icon',
  },
]

export default Sites
