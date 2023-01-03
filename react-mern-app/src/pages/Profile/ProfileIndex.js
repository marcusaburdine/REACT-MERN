
const React = require("react")



class Index extends React.Component {
    render(){
      const { profile } = this.props
      return(
        
          <div>
          <a href="/New">Create Profile</a>
            {
              profile.map((profile) => {
                return(
                  <article>
                    <img src={profile.name} alt="" />
                    <a href={`/profile/${profile._id}`}><h2>{profile.name}</h2></a>
                  </article>
                )
              })
            }
          </div>
        
      )
    }
  }
  
  module.exports = Index

