import React, {FC, useState} from 'react';
import {
  Alert,
  FlatList,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  MentionInput,
  MentionSuggestionsProps,
} from 'react-native-controlled-mentions';
import EmojiPicker from 'rn-emoji-keyboard';
import {default as SvgIndex} from '../../../assets/svgIndex';
import {ModalComponent, ReportDataCard, Spinner} from '../../../components';
import CommentCard from '../../../components/card/commentCard/CommentCard';
import Container from '../../../components/common/container/Container';
import {LangaugeContext} from '../../../i18n/langaugeController';
import {color} from '../../../theme';
import commentScreenController from './commentScreen.controller';
import style from './commentScreen.style';
import EmptyList from '../../../components/common/emptyList/EmptyList';
import imageIndex from '../../../assets/imageIndex';
import {ReportData} from '../homeScreen/homeScreen.const';

const CommentScreen: React.FC = () => {
  const {
    goBack,
    commentData,
    commentText,
    loading,
    setCommentData,
    setCommentText,
    handleCommentSubmit,
    setReplytext,
    replytext,
    validation,
    commentFor,
    setCommentFor,
    replyIndex,
    setReplyIndex,
    handleEmojiClick,
    handleEmojiSelected,
    setShowEmojiPicker,
    showEmojiPicker,
    handleReplyEmojiSelected,
    handleReplayEmojiClick,
    setShowReplyEmojiPicker,
    showReplyEmojiPicker,
    followers,
    hashTagData,
    isLoading,
    comments,
    setComments,
    reportDataModal,
    setReportDataModal,
    commentReport,
    commentsDetails,
    setCommentsDetails,
  } = commentScreenController();

  const renderSuggestions: (suggestions: any) => FC<MentionSuggestionsProps> =
    suggestions =>
    ({keyword, onSuggestionPress}: any) => {
      if (keyword == null) {
        return null;
      }
      return (
        <View style={style.mentoionContainer}>
          <ScrollView nestedScrollEnabled keyboardShouldPersistTaps="handled">
            {suggestions
              ?.filter((item: any) =>
                `${item?.name} `
                  .toLowerCase()
                  .includes(keyword.toLocaleLowerCase()),
              )
              .map((item: any, index: number) => (
                <TouchableOpacity
                  key={`${index}`}
                  style={style.mentionView}
                  onPress={() => {
                    onSuggestionPress({
                      ...item,
                      name: `${item?.userName ?? item?.hashTags?.substr(1)}`,
                      id: `${item?._id ?? 0}`,
                    });
                  }}>
                  <Text style={style.mentionTextStyle}>
                    {item?.name ?? item?.hashTags}
                  </Text>
                  {item?.count != 0 && (
                    <Text style={style.countText}>
                      {item?.count?.toString()}
                    </Text>
                  )}
                </TouchableOpacity>
              ))}
          </ScrollView>
        </View>
      );
    };

  const renderMentionSuggestions = renderSuggestions(followers);
  const renderHashtagSuggestions = renderSuggestions(hashTagData);
  const [selectIndex, setSelectIndex] = useState<number>();

  return (
    <View style={style.container}>
      <ImageBackground
        source={imageIndex.splashBackground}
        style={style.backgroundImage}>
        <KeyboardAvoidingView
          style={style.keyboardContainer}
          behavior={Platform.OS == 'ios' ? 'height' : undefined}>
          <View style={style.mainViewOne}>
            <View style={style.mainView}>
              {comments ? (
                <View style={style.closeView}>
                  <Text style={style.commentTextStyle}>
                    {commentData?.length}{' '}
                    {LangaugeContext.translations.headerTitle.Comments}
                  </Text>
                  <TouchableOpacity
                    style={style.closeContainer}
                    activeOpacity={0.6}
                    onPress={goBack}>
                    <SvgIndex.closeIcon />
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={style.closeView}>
                  <Text style={style.commentTextStyle}>
                    {LangaugeContext.translations.headerTitle.Comments}
                  </Text>
                  <TouchableOpacity
                    style={style.closeContainer}
                    activeOpacity={0.6}
                    onPress={() => {
                      setReportDataModal(true);
                    }}>
                    <SvgIndex.report />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={style.closeContainer}
                    activeOpacity={0.6}
                    onPress={goBack}>
                    <SvgIndex.closeIcon />
                  </TouchableOpacity>
                </View>
              )}

              {isLoading && !commentData ? (
                <Spinner color={color.black} />
              ) : (
                <View style={style.flatListContainer}>
                  <FlatList
                    data={commentData}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={style.contentContainerStyle}
                    keyboardShouldPersistTaps={'handled'}
                    keyExtractor={(item, index) => `${index}`}
                    ListEmptyComponent={() => (
                      <EmptyList
                        label=" No comments available"
                        noDataLabelStyle={style.noDataLabelStyle}
                      />
                    )}
                    renderItem={({item, index}) => (
                      <CommentCard
                        item={item}
                        index={index}
                        key={index}
                        replyValue={replytext}
                        onReplyChange={setReplytext}
                        onCommentReport={() => {
                          setComments(!comments);
                          setSelectIndex(index);
                          setCommentsDetails(item);
                        }}
                        onReplyPress={() => {
                          handleCommentSubmit('reply', item?._id);
                          setCommentFor('normal');
                        }}
                        emojiClick={handleReplayEmojiClick}
                        id={replyIndex}
                        handleId={id => {
                          setReplyIndex(id)
;
                          setReplytext('');
                        }}
                        onClickReply={resp => {
                          if (!resp) {
                            setCommentFor('reply');
                          } else {
                            setCommentFor('normal');
                          }
                        }}
                        selected={index === selectIndex} // Set selected prop based on index
                      />
                    )}
                  />
                </View>
              )}
              {commentFor === 'normal' && (
                <View style={style.inputViewStyle}>
                  <View style={style.inputView}>
                    <TouchableOpacity
                      onPress={handleEmojiClick}
                      style={{marginTop: 5}}>
                      <SvgIndex.smileIcon />
                    </TouchableOpacity>
                    <View
                      style={{
                        flex: 1,
                        top: Platform.OS === 'ios' ? 0 : 0,
                      }}>
                      <MentionInput
                        value={commentText}
                        onChange={(text: any) => setCommentText(text)}
                        placeholder="Comment here..."
                        placeholderTextColor={color.darkBlack}
                        style={style.inputContainer}
                        spellCheck={true}
                        multiline={true}
                        cursorColor={color.black}
                        partTypes={[
                          {
                            trigger: '@', // Should be a single character like '@' or '#'
                            renderSuggestions: renderMentionSuggestions,
                            isInsertSpaceAfterMention: true,
                            isBottomMentionSuggestionsRender: true,
                            textStyle: {color: color.darkBlack},
                          },
                          {
                            trigger: '#', // Should be a single character like '@' or '#'
                            renderSuggestions: renderHashtagSuggestions,
                            isInsertSpaceAfterMention: true,
                            isBottomMentionSuggestionsRender: true,
                            textStyle: {color: color.darkBlack},
                          },
                        ]}
                      />
                    </View>
                  </View>
                  <TouchableOpacity onPress={validation} activeOpacity={0.5}>
                    <SvgIndex.sendIcon />
                  </TouchableOpacity>
                </View>
              )}
              {showEmojiPicker && (
                <EmojiPicker
                  onEmojiSelected={handleEmojiSelected}
                  open={showEmojiPicker}
                  onClose={() => setShowEmojiPicker(false)}
                  enableRecentlyUsed
                  categoryPosition="top"
                  allowMultipleSelections
                />
              )}
              {showReplyEmojiPicker && (
                <EmojiPicker
                  onEmojiSelected={handleReplyEmojiSelected}
                  open={showReplyEmojiPicker}
                  onClose={() => setShowReplyEmojiPicker(false)}
                  enableRecentlyUsed
                  categoryPosition="top"
                  allowMultipleSelections
                />
              )}
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
      <ModalComponent
        visible={reportDataModal}
        onRequestClose={() => setReportDataModal(false)}
        bottomSheetContent={
          <FlatList
            data={ReportData}
            contentContainerStyle={style.reportFlatListContainer}
            renderItem={({item, index}: any) => (
              <ReportDataCard
                item={item}
                index={index}
                onPress={() => {
                  commentReport(item);
                }}
              />
            )}
          />
        }
      />
    </View>
  );
};

export default CommentScreen;
