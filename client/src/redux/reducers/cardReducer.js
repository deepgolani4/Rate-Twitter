const intial_state={
	card:[]
}

export default (state=intial_state,action) => {
	switch(action.type) {
		case 'SAVE_CARD' :
			return {cards:[...state.cards,ction.payload]}
		case 'DELETE_CARD' :
            return {cards:state.cards.filter((obj)=>obj.username!==action.payload.username)}
        default:
        	return state
	}
}