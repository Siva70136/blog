// Write your JS code here
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogsList: [], isLoader: true}

  componentDidMount() {
    this.getListItems()
  }

  getListItems = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const statusCode = await response.statusCode
    console.log(statusCode)
    const data = await response.json()
    const updatedData = data.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      topic: each.topic,
      author: each.author,
    }))

    this.setState({
      blogsList: updatedData,
      isLoader: false,
    })
  }

  render() {
    const {blogsList, isLoader} = this.state
    console.log(blogsList)

    return (
      <div>
        {isLoader ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} />
        ) : (
          <div className="blogList-items" data-testid="loader">
            {blogsList.map(each => (
              <BlogItem item={each} key={each.id} />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default BlogList
