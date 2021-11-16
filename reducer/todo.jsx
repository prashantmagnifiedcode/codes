

const initialdata = {
  list: [],
};
const TodoReducer = (state = initialdata, action) => {
  switch (action.type) {
    case "add_todo":
      const { id, email ,name,phone,img} = action.payload;

        console.log(state)
        return {
          ...state,

          list: [
            ...state.list,
            {
              id: id,
              email:email,
               names:name,
              phones:phone,
              imgs:img
            },
          ],
        
      }

    case "delete_todo":
      const newlist = state.list.filter((elem) => elem.id !== action.id);
      return {
        ...state,

        list: newlist,
      };
    case "remove_todo":
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};
export default TodoReducer;
