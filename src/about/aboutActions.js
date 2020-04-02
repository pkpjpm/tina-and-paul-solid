const DISMISS_LEGACY_INFO = "DISMISS_LEGACY_INFO";

export function aboutReducer(state = { showLegacyInfo: true }, action) {
    switch( action.type ) {
      case DISMISS_LEGACY_INFO:
          console.log("there's your problem")
        return Object.assign({}, state, { showLegacyInfo: false });
  
      default:
        return state;
    }
}

export function dismissLegacyInfoAction(dispatcher) {
    return function() {
        return dispatcher({type: DISMISS_LEGACY_INFO});
    }; 
}