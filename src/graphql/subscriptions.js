/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      title
      category
      likes
      createdAt
      comments {
        items {
          id
          postID
          likes
          createdAt
          content
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      title
      category
      likes
      createdAt
      comments {
        items {
          id
          postID
          likes
          createdAt
          content
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      title
      category
      likes
      createdAt
      comments {
        items {
          id
          postID
          likes
          createdAt
          content
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      postID
      post {
        id
        title
        category
        likes
        createdAt
        comments {
          nextToken
        }
        updatedAt
      }
      likes
      createdAt
      content
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      postID
      post {
        id
        title
        category
        likes
        createdAt
        comments {
          nextToken
        }
        updatedAt
      }
      likes
      createdAt
      content
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      postID
      post {
        id
        title
        category
        likes
        createdAt
        comments {
          nextToken
        }
        updatedAt
      }
      likes
      createdAt
      content
      updatedAt
    }
  }
`;
