import React from "react"
import { Card } from "react-bootstrap"
import { Posts } from "./PopularPosts.styles"
import PopularPostsItem from "./PopularPostsItem/PopularPostsItem"

export default function PopularPosts() {
  return (
    <Posts className="mb-4">
      <Card className="posts-card card-wrapper">
        <Card.Header className="posts-card-header wrapper-header">
          Popular Posts
        </Card.Header>
        <Card.Body className="posts-card-body">
          <PopularPostsItem />
          <PopularPostsItem />
          <PopularPostsItem />
        </Card.Body>
      </Card>
    </Posts>
  )
}
