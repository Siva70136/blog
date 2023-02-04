// Write your JS code here
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogsItem: {}, isLoader: true}

  componentDidMount() {
    this.getListItems()
  }

  getListItems = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedForm = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      topic: data.topic,
      author: data.author,
      content: data.content,
    }
    console.log(updatedForm)
    this.setState({blogsItem: updatedForm, isLoader: false})
  }

  getItem = () => {
    const {blogsItem} = this.state
    console.log(blogsItem)
    const {imageUrl, avatarUrl, title, author, content} = blogsItem
    return (
      <div className="blog-details">
        <h1 className="title1">{title}</h1>
        <div className="avatar-container">
          <img src={avatarUrl} alt="avatar" className="avatar" />
          <p className="author">{author}</p>
        </div>
        <img src={imageUrl} className="image" alt={title} />
        <p className="description">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoader} = this.state

    return (
      <div>
        {isLoader ? (
          <Loader
            type="TailSpin"
            color="#00BFFF"
            height={50}
            width={50}
            data-testid="loader"
          />
        ) : (
          this.getItem()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
