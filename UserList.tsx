import { FunctionComponent, useEffect } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { fetchUsers, User } from "./useListSlice";

const UserList: FunctionComponent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers({ page: 1 }))
    }, [])

    const screenState = useSelector((state: RootState) => state.userList)

    const handleOnEnd = () => {
        if (!screenState.loading) {
            dispatch(fetchUsers({ page: screenState.nextPage }))
        }
    }

    return (<>
        <SafeAreaView style={{ flex: 1 }}>
            {screenState.loading && <Text>Loading</Text>}
            {screenState.error && <Text>Error</Text>}
            {!screenState.loading && !screenState.error && <Text>Done</Text>}

            <FlatList data={screenState.users}
                keyExtractor={(_, i) => i.toString()}
                renderItem={({ item }) => {
                    return (
                        <UserListItem user={item} />
                    )
                }}
                onEndReached={handleOnEnd}
            />
        </SafeAreaView>
    </>)
}

const UserListItem: FunctionComponent<{ user: User }> = ({ user }) => {
    return <View style={style.container}>
        <Image
            style={style.img}
            source={{
                uri: user.picture.thumbnail
            }} />
        <Text style={style.nameText}>
            {
                user.name.first
            }
        </Text>
    </View>
}

const style = StyleSheet.create({
    nameText: {
        padding: 15
    },
    container: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center'
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderColor: 'purple',
        borderWidth: 2
    }
})

export default UserList