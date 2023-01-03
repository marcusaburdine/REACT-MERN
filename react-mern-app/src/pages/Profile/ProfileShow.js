const React = require("react")


class Show extends React.Component {
  render() {
    const { profile } = this.props
    return (
      
      <div>
        <article>
          <h2>{profile.name}</h2>
         
         

          <a href={`/profile/${ profile._id }/Edit`}><button>Edit</button></a>
          <form action={`/movies/${ profile._id }?_method=DELETE`} method="POST">
            <input type="submit" value="Delete" />
          </form>
          <a href="/profile/"><button>Back to Main</button></a>
        </article>
      </div>
    )
  }
}

module.exports = Show