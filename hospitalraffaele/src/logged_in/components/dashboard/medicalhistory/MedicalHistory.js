import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import MedicalHistoryContent from "./MedicalHistoryContent";
import AddMedicalHistoryEntry from "./AddMedicalHistoryEntry";

function MedicalHistory(props) {
  const {
    selectPosts,
    EmojiTextArea,
    ImageCropper,
    Dropzone,
    DateTimePicker,
    pushMessageToSnackbar,
    bla,
    posts,
    setPosts,
  } = props;
  const [isAddPostPaperOpen, setIsAddMedicalHistoryEntryPaperOpen] = useState(false);

  const openAddMedicalHistoryEntryModal = useCallback(() => {
    setIsAddMedicalHistoryEntryPaperOpen(true);
  }, [setIsAddMedicalHistoryEntryPaperOpen]);

  const closeAddMedicalHistoryEntryModal = useCallback(() => {
    setIsAddMedicalHistoryEntryPaperOpen(false);
  }, [setIsAddMedicalHistoryEntryPaperOpen]);


  if (isAddPostPaperOpen) {
    return <AddMedicalHistoryEntry
      onClose={closeAddMedicalHistoryEntryModal}
      EmojiTextArea={EmojiTextArea}
      ImageCropper={ImageCropper}
      Dropzone={Dropzone}
      DateTimePicker={DateTimePicker}
      pushMessageToSnackbar={pushMessageToSnackbar}
    />
  }
  return <MedicalHistoryContent
    openAddMedicalHistoryEntryModal={openAddMedicalHistoryEntryModal}
    pushMessageToSnackbar={pushMessageToSnackbar}
  />
}

MedicalHistory.propTypes = {
  EmojiTextArea: PropTypes.elementType,
  ImageCropper: PropTypes.elementType,
  Dropzone: PropTypes.elementType,
  DateTimePicker: PropTypes.elementType,
 // posts: PropTypes.arrayOf(PropTypes.object).isRequired,
 // setPosts: PropTypes.func.isRequired,
  pushMessageToSnackbar: PropTypes.func,
  selectPosts: PropTypes.func.isRequired,
};

export default MedicalHistory;
