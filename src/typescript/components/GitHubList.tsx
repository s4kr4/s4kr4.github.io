import * as React from 'react'
import axios from 'axios'

import ItemList from './ItemList'

interface Props {}
interface State {
  items: Array<{
    id: number
    name: string
    url: string
    type: string
  }>
}

export default class GitHubList extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state)

    this.state = {
      items: []
    }
  }

  async componentDidMount() {
    await axios
      .get('https://api.github.com/users/s4kr4/repos', {
        params: {
          sort: 'pushed'
        }
      })
      .then((res: any) => {
        res.data.map((data: any) => {
          let type = ''
          if (data.fork) {
            type = 'fork'
          } else {
            type = 'repo'
          }

          this.setState({
            items: this.state.items.concat({
              id: data.id,
              name: data.full_name,
              url: data.html_url,
              type: type
            })
          })
        })
      })
      .catch((error: any) => {
        console.log(error)
      })
  }

  render() {
    return <ItemList source="GitHub" items={this.state.items} />
  }
}
