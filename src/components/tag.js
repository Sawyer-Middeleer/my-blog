import React from "react"

// const Tag = ({ postType }) => {
//   if (postType === "Civic Tech") {
//     return <small class="btn-civic-tech">{postType}</small>
//   }
//   else if (postType === "Web3") {
//     return <small class="btn-web3">{postType}</small>
//   }
//   else if (postType === "Product Management") {
//     return <small class="btn-product">{postType}</small>
//   }
//   else if (postType === "Public Policy") {
//     return <small class="btn-policy">{postType}</small>
//   }
// };
const Tag = ({ postType }) => {
  return <small class="btn-tag">{postType}</small>
};

export default Tag
