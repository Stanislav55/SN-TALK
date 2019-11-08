let state = {
    profilePage:{
        posts: [
            {id: 1, message: 'Hi', likesCount: "-"+12}, 
            {id: 2, message: 'It\'s my first app', likesCount: "-"+11},
            {id: 2, message: 'Blabla', likesCount: "-"+4},
            {id: 2, message: 'DaDa', likesCount: "-"+8}
        ],        
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dima'}, 
            {id: 2, name: 'Andrey'}, 
            {id: 3, name: 'Sveta'}, 
            {id: 4, name: 'Sasha'}, 
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi'}, 
            {id: 2, message: 'How is your app?'}, 
            {id: 3, message: 'Good'}, 
            {id: 4, message: 'Good'}, 
            {id: 5, message: 'Good'}
        ]
    }       
}

export default state;