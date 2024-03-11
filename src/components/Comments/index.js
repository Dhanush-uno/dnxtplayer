import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [commentItem, setCommentItem] = useState({name: '', comment: ''})
  const [commentsList, setCommentsList] = useState([])

  const onChangeName = event => {
    setName(event.target.value)
  }

  const onChangeComment = event => {
    setComment(event.target.value)
  }

  const onAddComment = event => {
    event.preventDefault()

    const newComment = {
      id: uuidv4(),
      name,
      comment,
    }
    setCommentsList(prev => [...prev, newComment])
    setCommentItem({name, comment})
    setName('')
    setComment('')
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onAddComment}>
        <NameInput
          onChange={onChangeName}
          type="text"
          value={name}
          placeholder="Your name"
        />
        <CommentTextInput
          onChange={onChangeComment}
          value={comment}
          placeholder="Your comment"
          rows="6"
        />
        <CommentButton type="submit">Comment</CommentButton>
        <ul>
          {commentsList.map(each => (
            <CommentItem key={each.id} commentDetails={each} />
          ))}
        </ul>
      </Form>
    </CommentsContainer>
  )
}

export default Comments
