import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { faGithub, faQuora, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEdit } from "@fortawesome/free-solid-svg-icons"

interface ISite {
  icon: IconDefinition
  text: string
  url: string
  option: string
  modifier: string
}

const Sites: ISite[] = [
  {
    icon: faGithub,
    text: 'GitHub',
    url: 'https://github.com/s4kr4',
    option: 'spin',
    modifier: 'github-icon',
  },
  {
    icon: faQuora,
    text: 'Qiita',
    url: 'https://qiita.com/s4kr4',
    option: 'vertical',
    modifier: 'qiita-icon',
  },
  {
    icon: faEdit,
    text: 'Blog',
    url: 'http://s4kr4.hatenablog.com/',
    option: 'vertical',
    modifier: 'hatenablog-icon',
  },
  {
    icon: faTwitter,
    text: 'Twitter',
    url: 'https://twitter.com/s4kr4_',
    option: 'vertical',
    modifier: 'twitter-icon',
  },
]

export default Sites
