
import { openInbox } from 'react-native-email-link';
<Button
text={languageData?.data?.openEmailApp}
buttonContainer={styles.buttonStyle}
onPress={() => openInbox()}
/>
const fetchGroupMessages = (group) => {
    const limit = 30;
    const messagesRequest = new CometChat.MessagesRequestBuilder()
      .setGUID(group.guid)
      .setLimit(limit)
      .build();

    messagesRequest.fetchPrevious().then(
      (fetchedMessages) => {
        console.log("Group messages fetched successfully:", fetchedMessages);
        setMessages(fetchedMessages);
      },
      (error) => {
        console.log("Error fetching group messages:", error);
      }
    );
  };

  const joinGroup = (group) => {
    console.log("group", group);
    CometChat.joinGroup(group.guid, "public", "").then(
      (joinedGroup) => {
        console.log("Joined group successfully:", joinedGroup);
        fetchJoinedGroups();
        setSelectedGroup(joinedGroup);
        fetchGroupMessages(joinedGroup);
      },
      (error) => {
        console.log("Error joining group:", error);
      }
    );
  };


  const sendMessage = () => {
    if (selectedGroup && messageText.trim() !== "") {
      const textMessage = new CometChat.TextMessage(
        selectedGroup.guid,
        messageText,
        CometChat.MESSAGE_TYPE.TEXT,
        CometChat.RECEIVER_TYPE.GROUP
      );

      CometChat.sendMessage(textMessage).then(
        (message) => {
          console.log("Message sent successfully:", message);
          setMessages((prevMessages) => [...prevMessages, message]);
          setMessageText("");
        },
        (error) => {
          console.log("Error sending message:", error);
        }
      );
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersRequest = new CometChat.UsersRequestBuilder()
          // .setUID(userId)  // Set the user ID here
          .setLimit(30)
          .build();
        const userList = await usersRequest.fetchNext();
        console.log("userList fetching users:", userList);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };
    fetchUsers();
    return () => {
      CometChat.logout();
    };
  }, []);

  const addMembersToGroup = () => {
    // Replace "userUIDs" with an array of user IDs you want to add to the group
    const userUIDs = ["user1", "user2", "user3"];
    CometChat.addMembersToGroup(selectedGroup.guid, userUIDs, []).then(
      (response) => {
        console.log("Members added successfully:", response);
      },
      (error) => {
        console.log("Error adding members:", error);
      }
    );
  };

  const fetchJoinedGroups = () => {
    CometChat.getJoinedGroups().then(
      (groups) => {
        console.log("Joined groups:", groups);
        setJoinedGroups(groups);
      },
      (error) => {
        console.log("Error fetching joined groups:", error);
      }
    );
  };

  const createGroup = () => {
    const groupGuid = `group_${Date.now()}`;
    console.log(":GUID", groupGuid);
    const groupName = "Your Group Name";
    const groupPassword = "";
    const groupType = CometChat.GROUP_TYPE.PUBLIC;
    const group = new CometChat.Group(groupGuid, groupName, groupType);
    let members = [
      new CometChat.GroupMember(
        groupGuid,
        CometChat.GROUP_MEMBER_SCOPE.PARTICIPANT
      ),
    ];
    CometChat.createGroup(group, members).then(
      (createdGroup) => {
        console.log("Group created successfully:", createdGroup);
        // joinGroup(createdGroup);
      },
      (error) => {
        console.log("Error creating group:", error);
      }
    );
  };

