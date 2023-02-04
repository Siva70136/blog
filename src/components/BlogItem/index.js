// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {item} = props
  const {title, imageUrl, avatarUrl, topic, author, id} = item

  return (
    <Link to={`blogs/${id}`} className="item-link">
      <li className="blog-item">
        <div className="image-container">
          <img src={imageUrl} className="main-image" alt={title} />
        </div>
        <div className="data-container">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avatar-container">
            <img src={avatarUrl} alt="title" className="avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
