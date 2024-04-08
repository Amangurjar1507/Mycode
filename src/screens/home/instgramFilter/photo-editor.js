const onEdit = async () => {
    const stickers: any = [];
    try {
      const path: any = await PhotoEditor.open({
        path: storyImage,
        // path: photo.path,
        stickers,
      });
      setStoryImage(path);
    } catch (e) {}
  };

  import PhotoEditor from '@baronha/react-native-photo-editor';




