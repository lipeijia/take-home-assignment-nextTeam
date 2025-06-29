import React, { useReducer } from "react";
import Btn from "./Btn";

interface State {
    likeCount: number;
    dislikeCount: number;
    isLiked: boolean;
    isDisliked: boolean;
}

type Action = 
    | { type: 'TOGGLE_LIKE' }
    | { type: 'TOGGLE_DISLIKE' };

const initialState: State = {
    likeCount: 100,
    dislikeCount: 25,
    isLiked: false,
    isDisliked: false
};

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'TOGGLE_LIKE':
            return {
                ...state,
                likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
                isLiked: !state.isLiked,
                isDisliked: false,
                dislikeCount: state.isDisliked ? state.dislikeCount - 1 : state.dislikeCount
            };
        case 'TOGGLE_DISLIKE':
            return {
                ...state,
                dislikeCount: state.isDisliked ? state.dislikeCount - 1 : state.dislikeCount + 1,
                isDisliked: !state.isDisliked,
                isLiked: false,
                likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount
            };
        default:
            return state;
    }
}

/**
 * LikeDislikeBtn - Like/Dislike 按鈕組件
 * 
 * 使用 useReducer 管理複雜的狀態邏輯：
 * - Like/Dislike 互斥選擇
 * - 即時計數更新
 * - 狀態同步管理
 */
export default function LikeDislikeBtn() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <div>
        <Btn 
            btnType='like' 
            num={state.likeCount} 
            isClicked={state.isLiked}
            onClick={() => dispatch({ type: 'TOGGLE_LIKE' })}
        />
        <Btn 
            btnType='dislike' 
            num={state.dislikeCount} 
            isClicked={state.isDisliked}
            onClick={() => dispatch({ type: 'TOGGLE_DISLIKE' })}
        />
      </div>
    );
}