import React from "react"

const Tag = ({ postType }) => {
  if (postType === "Essay") {
    return <small class="btn-essay">{postType}</small>
  }
  if (postType === "Project") {
    return <small class="btn-project">{postType}</small>
  }
};

export default Tag
