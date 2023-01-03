const React = require("react")


class Edit extends React.Component {
  render (){
    const { profile } = this.props
    return (
      
        <form action={`/profile/${profile._id}?_method=PUT`} method="POST">
          <fieldset>
            <legend>Edit Profile </legend>
            <label>Name:<input type="text" name="name" placeholder="Enter Name" value={profile.name} /> </label>
            
            <label> Age:<input type="text" name="age" placeholder="Enter Age" value={profile.age} /></label>

            <label> Eye Color:<input type="text" name="eyeColor" value={profile.eyeColor} /> </label>

            <label> Hair Color:<input type="number" name="hairColor" value={profile.hairColor} /> </label>

            <label> Region:<input type="text" name="region" value={profile.region}/> </label>

            <label>Hometown:<input type="text" name="homeTown" value={profile.homeTown} /> </label>

            <label>Family:<input type="text" name="family" value={profile.family.join(",")} /> </label>

            <label>Trainer Class:<input type="text" name="trainerClass" value={profile.trainerClass} /> </label>

            <label>Badges:<input type="text" name="badge" value={profile.badges} /> </label>
            
          </fieldset>
          <input type="submit" value="Submit Edits" />
        </form>
     
    )
  }
}

module.exports = Edit