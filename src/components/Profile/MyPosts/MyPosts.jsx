import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
  return <div className={classes.content}>
    
   <Post message = "I'am a coon" likeCounts="15"/>
   <Post message = "Coon is the coolest animal" likeCounts="20"/>
   

  </div>
}

export default MyPosts;