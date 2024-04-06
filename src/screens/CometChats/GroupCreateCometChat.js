// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   TextInput,
//   Image,
//   TouchableOpacity,
// } from "react-native";
// import { CometChat } from "@cometchat/chat-sdk-react-native";

// const UserListScreen = () => {
//   const [users, setUsers] = useState([]);
//   const [filteredUsers, setFilteredUsers] = useState([]);
//   const [searchInput, setSearchInput] = useState("");
//   const [selectedUsers, setSelectedUsers] = useState([]);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = () => {
//     const limit = 30; // Adjust the limit as needed
//     const usersRequest = new CometChat.UsersRequestBuilder()
//       .setLimit(limit)
//       .build();

//     CometChat.login(
//       "65c1f940afc58f34a4048bf2",
//       "9944f82721f4825370a5ddc4f41d4d144869c11a"
//     ).then(
//       (user) => {
//         usersRequest.fetchNext().then(
//           (userList): any => {
//             setUsers(userList);
//             setFilteredUsers(userList);
//             createGroup();
//           },
//           (error) => {
//             console.log("User list fetching failed with error:", error);
//           }
//         );
//       },
//       (error) => {
//         console.log("Login failed with error:", error);
//       }
//     );
//   };

//   const createGroup = () => {
//     const groupGuid = `group_${Date.now()}`;
//     const groupName = "Raghav guraje";
//     const groupType = CometChat.GROUP_TYPE.PUBLIC;
//     const selectedUsers = [
//       "65bb92fa42dcb5b8525e3b50",
//       "65bb919642dcb5b8525e181b",
//       "65c0838caaca231075239e04",
//     ]; // Replace with your selected user IDs

//     const group = new CometChat.Group(
//       groupGuid,
//       groupName,
//       groupType,
//       selectedUsers
//     );

//     const members = selectedUsers.map((userId) => {
//       return new CometChat.GroupMember(
//         userId,
//         CometChat.GROUP_MEMBER_SCOPE.PARTICIPANT
//       );
//     });

//     CometChat.createGroup(group).then(
//       (createdGroup) => {
//         console.log("Group created successfully:", createdGroup);

//         const groupMembers = selectedUsers.map((userId) => {
//           return new CometChat.GroupMember(
//             userId,
//             CometChat.GROUP_MEMBER_SCOPE.PARTICIPANT
//           );
//         });

//         CometChat.addMembersToGroup(createdGroup.guid, groupMembers, []).then(
//           (response) => {
//             console.log("Users added to the group:", response);
//             // You can navigate to the group chat screen or perform any other action after adding users
//           },
//           (error) => {
//             console.log("Error adding users to the group:", error);
//           }
//         );
//       },
//       (error) => {
//         console.log("Error creating group:", error);
//       }
//     );
//   };

//   const handleSearch = (text) => {
//     setSearchInput(text);
//     const filteredList: any = users.filter((user) =>
//       user?.name.toLowerCase().includes(text.toLowerCase())
//     );
//     console.log("filteredList", filteredList);

//     setFilteredUsers(filteredList);
//   };

//   const toggleSelection = (user) => {
//     const isSelected = selectedUsers.includes(user.uid);
//     if (isSelected) {
//       setSelectedUsers((prevSelected) =>
//         prevSelected.filter((id)
//  => id !== user.uid)
//       );
//     } else {
//       setSelectedUsers((prevSelected): any => [...prevSelected, user.uid]);
//       console.log("selectedUsers", selectedUsers);
//     }
//   };

//   const renderUserItem = ({ item }: any) => (
//     <TouchableOpacity onPress={() => toggleSelection(item)}>
//       <View style={{ flexDirection: "row", padding: 20, alignItems: "center" }}>
//         <View style={{ marginRight: 10 }}>
//           <Image
//             source={{
//               uri:
//                 item.avatar ||
//                 "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg",
//             }}
//             style={{ height: 20, width: 20 }}
//           />
//         </View>
//         <Text style={{ marginLeft: 12 }}>{item.name}</Text>
//         <View style={{ flex: 1, alignItems: "flex-end" }}>
//           <CheckBox isChecked={selectedUsers.includes(item.uid)} />
//         </View>
//       </View>
//     </TouchableOpacity>
//   );

//   const CheckBox = ({ isChecked }: any) => (
//     <View
//       style={{
//         width: 20,
//         height: 20,
//         borderWidth: 1,
//         borderColor: "black",
//         justifyContent: "center",
//         alignItems: "center",
//         borderRadius: 10,
//       }}
//     >
//       {isChecked && (
//         <View
//           style={{
//             width: 10,
//             borderRadius: 2,
//             height: 10,
//             backgroundColor: "black",
//           }}
//         />
//       )}
//     </View>
//   );

//   return (
//     <View>
//       <TextInput
//         style={{
//           height: 40,
//           borderColor: "gray",
//           borderWidth: 1,
//           margin: 10,
//           padding: 5,
//         }}
//         placeholder="Search by name"
//         onChangeText={handleSearch}
//         value={searchInput}
//       />
//       <FlatList
//         data={filteredUsers}
//         keyExtractor={(item) => item.uid}
//         renderItem={renderUserItem}
//       />
//     </View>
//   );
// };

// export default UserListScreen;


 // const createGroup = () => {
//     const groupGuid = `group_${Date.now()}`;
//     const groupName = "Your Group";
//     const groupType = CometChat.GROUP_TYPE.PUBLIC;
//     const group = new CometChat.Group(groupGuid, groupName, groupType);

//     const members = selectedUsers.map((userId) => {
//       return new CometChat.GroupMember(
//         userId,
//         CometChat.GROUP_MEMBER_SCOPE.PARTICIPANT
//       );
//     });

//     CometChat.createGroup(group).then(
//       (createdGroup) => {
//         console.log("Group created successfully:", createdGroup);

//         const groupMembers = selectedUsers.map((userId) => {
//           return new CometChat.GroupMember(
//             userId,
//             CometChat.GROUP_MEMBER_SCOPE.PARTICIPANT
//           );
//         });

//         CometChat.addMembersToGroup(createdGroup.guid, groupMembers, []).then(
//           (response) => {
//             console.log("Users added to the group:", response);
//             // You can navigate to the group chat screen or perform any other action after adding users
//           },
//           (error) => {
//             console.log("Error adding users to the group:", error);
//           }
//         );
//       },
//       (error) => {
//         console.log("Error creating group:", error);
//       }
//     );
//   };

