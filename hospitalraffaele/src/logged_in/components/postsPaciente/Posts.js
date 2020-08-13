import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import PostContent from "./PostContent";
import AddPost from "./AddPost";

function PostsPaciente(props) {
  const {
    selectPosts,
    EmojiTextArea,
    ImageCropper,
    Dropzone,
    DateTimePicker,
    pushMessageToSnackbar,
    posts,
    setPosts,
    targets
  } = props;
  const [isAddPostPaperOpen, setIsAddPostPaperOpen] = useState(false);

  const openAddPostModal = useCallback(() => {
    setIsAddPostPaperOpen(true);
  }, [setIsAddPostPaperOpen]);

  const closeAddPostModal = useCallback(() => {
    setIsAddPostPaperOpen(false);
  }, [setIsAddPostPaperOpen]);

  useEffect(() => {
    selectPosts();
  }, [selectPosts]);

  if (isAddPostPaperOpen) {
    return <AddPost
      onClose={closeAddPostModal}
      EmojiTextArea={EmojiTextArea}
      ImageCropper={ImageCropper}
      Dropzone={Dropzone}
      targets={targets}
      DateTimePicker={DateTimePicker}
      pushMessageToSnackbar={pushMessageToSnackbar}
    />
  }
  return <PostContent
    openAddPostModal={openAddPostModal}
    posts={posts}
    setPosts={setPosts}
    pushMessageToSnackbar={pushMessageToSnackbar}
  />
}

PostsPaciente.propTypes = {
  EmojiTextArea: PropTypes.elementType,
  ImageCropper: PropTypes.elementType,
  Dropzone: PropTypes.elementType,
  DateTimePicker: PropTypes.elementType,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPosts: PropTypes.func.isRequired,
  pushMessageToSnackbar: PropTypes.func,
  selectPosts: PropTypes.func.isRequired,
};

export default PostsPaciente;
