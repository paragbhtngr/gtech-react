generateSingleDummyMessage = () => {

}

const chat = (state = [], action) => {
    switch (action.type) {
        case 'GET_CHATS': 
            return [
                ...state,
                // TODO get top n chats from server
                // TODO for each chat in array, get 100 most recent messages
            ]
        case 'GET_CHATLOG':
            return [
                ...state,
                state.chats.map(chatlog => {
                    if(chatlog.id !== action.id) {
                        return chatlog
                    }
                    return {
                        chatlog,
                        // TODO get previous chat history
                    }
                })
            ]
        case 'SET_ACTIVE_CHAT':
            return [
                ...state,
                // TODO set active chat to chat ID
                // TODO if chat is unread, mark as read
                // TODO update chat server with new state
            ]
        case 'NEW_MESSAGE':
            return [
                ...state,
                state.chats.map(chatlog => {
                    if(chatlog.id !== action.id) {
                        return chatlog
                    }
                    return {
                        chatlog,
                        // TODO add new chat message to state
                        // TODO send message to server to add message to chatlog
                    }
                })
            ]
        default:
            return state
    }
}