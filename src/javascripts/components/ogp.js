//@flow
import React, { Component } from 'react'
import parser from 'ogp-parser'

export default class OGP extends Component {
  props: {
    url: string,
  }

  state: {
    title: string,
    type: string,
    image: string,
    imageType: string,
    imageWidth: number,
    imageHeight: number,
    description: string,
  }

  constructor() {
    super()

    this.state = {
      title: "",
      type: "",
      image: "",
      imageType: "",
      imageWidth: 0,
      imageHeight: 0,
      description: "",
    }
  }

  componentWillMount() {
    parser(this.props.url, false)
      .then(data => {
        const ogp = JSON.parse(data).ogp

        this.setState({
          title: ogp["og:title"],
          type: ogp["og:type"],
          image: ogp["og:image"],
          imageType: ogp["og:image:type"],
          imageWidth: ogp["og:image:width"],
          imageHeight: ogp["og:image:height"],
          description: ogp["og:description"],
        })
      })
  }

  render() {
    return (
      <div className="ogp">
        <img src={this.state.image} width={this.state.imageWidth} height={this.state.imageHeight} />
        <div className="ogp-title">{this.state.title}</div>
        <div className="ogp-description">{this.state.description}</div>
      </div>
    )
  }
}
