import Post from "../../component/Post/Post"

export default function Main ({data}){
  console.log(data)
    return(
    <>
    <h1>{data[0].avatar}</h1>
    <h1>{data[0].name}</h1>
    <h1>{data[0].hobbies}</h1>
    <h1>{data[0].biography}</h1>
    <Post/>
    </>
  )};
