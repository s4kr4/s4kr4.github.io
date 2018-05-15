import * as React from 'react'
import axios from 'axios'

import ItemList from './ItemList'

interface Props {}
interface State {
  items: Array<{
    id: number
    name: string
    url: string
  }>
}

export default class QiitaList extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state)

    this.state = {
      items: []
    }
  }

  componentDidMount() {
    axios
      .get('https://qiita.com/api/v2/users/s4kr4/items')
      .then((res: any) => {
        res.data.map((data: any) => {
          this.setState({
            items: this.state.items.concat({
              id: data.id,
              name: data.title,
              url: data.url
            })
          })
        })
      })
      .catch((error: any) => {
        console.log(error)
      })
  }

  render() {
    return <ItemList source="Qiita" items={this.state.items} />
  }
}
