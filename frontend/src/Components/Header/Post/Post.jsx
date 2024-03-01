import {Avatar,Button, Typography,Dialog} from "@mui/material";
import React, { useEffect } from "react";
import{
    MoreVert,
    Favorite,
    FavoriteBorder,
    ChatBubbleOutline,
    DeleteOutline,
} from "@mui/icons.material";
import { Link } from "react-router-dom";
import "./Post.css";
import {useState} from "react";
import { useDispatch , useSelector } from "react-redux";
import {likePost} from "../../Actions/Post";
import { getFollowingPosts } from "../../Actions/User";
import User from "../User/User";


const Post =({
    postId,
    caption,
    postImage,
    likes = [],
    comments = [],
    ownerImage,
    ownerName,
    ownerId,
    isDelete = false,
    isAccount = false,
}) =>{

    const [liked, setLiked] = useState(false);
    const [likesUser,setLikesUser] = useState(false);
    const [ commentValue,setCommentValue] = useState("");
    const [ commentToggle,setCommentToggle] = useState(false);
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.user);
    

    const handleLike = async () =>{
        setLiked(!liked);

       await dispatch(likePost(postId));

       if(isAccount){

       }
       else{
        dispatch(getFollowingPosts());
       }
        
    };

    const addCommentHandler = () =>{
        console.log("Add comment")
    }

    useEffect(() =>{
        likes.forEach(item =>{
            if(item._id ===user._id){
                setLiked(true);
            }
        });
    }, [likes, user._id]);
    

    return (
        <div className="post">

           <div className="postHeader">

             {isAccount? <Button>
                <MoreVert />
             </Button> : null};   

           </div>

            <img src="{postImage}" alt="Post" />

            <div className="postDetails">
                <Avatar src={ownerImage} alt="User" sx={{
                    height: "3vmax",
                    width: "3vmax",
                }} />

                <Link to={`/user/${ownerId}`}>

                    <Typography fontweight={700}>{ownerName}</Typography>
                </Link>

                <Typography
                    fontweight={100}
                    color="grba(0,0,0,0.582"
                    style={{ alignSelf:"center"}}
                >
                    {caption}
                </Typography>


            </div>
                <button 
                 style={{
                    border: "none",
                    backgroundColor: "white",
                    cursor: "pointer",
                    margin: "1vmax 2vmax",
                 }}

                 onclick={() => setLikesUser(!likesUser)}
                 disabled={likes.length === 0 ? true : false}
                >
                    <Typography>{likes.length}Likes</Typography>
                </button>

                 <div className="postFooter">

                    <Button onclick={handleLike}>
                        {liked ? <Favorite style={{color: "red"}} />: <FavoriteBorder />}
                    </Button>
                        

                    <Button onclick={() => setCommentToggle(!commentToggle)}>
                        <ChatBubbleOutline />
                    </Button>

                    {
                        isDelete?( <Button>
                        <DeleteOutline />
                    </Button>
                    ):null}

                 </div>
                    
                    <Dialog open={likesUser} onClose={() => setLikesUser(!likesUser)}>

                        <div className="DialogBox">

                            <Typography variant="h4">Liked By</Typography>

                            {
                                likes.map(like =>{
                                <User
                                key = {like._id}
                                userId={like._id}
                                name={like.name}
                                avatar={like.avatar.url}
                            />
                                })
                            }
                        </div>
                    </Dialog>


                    <Dialog open={commentToggle} onClose={() => setCommentToggle(!commentToggle)}>

                        <div className="DialogBox">

                            <Typography variant="h4">Comments</Typography>

                            <form className="commentForm" onSubmit={addCommentHandler}> 

                                <input type="text" value={commentValue} onChange={(e) => setCommentValue(e.target.value)} placeholder="Comment Here..."  required/>

                                <Button type="submit" variant="contained">Add</Button>
                            </form>
                        </div>
                    </Dialog>

        </div>
    );
};

export default Post