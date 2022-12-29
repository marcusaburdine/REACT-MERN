

// Dependencies



export default function Main({data}) {
  console.log(data)


  
  return (
    <>
  
 

    </>
  )
};




// CHEAT-SHEET

/*
CREATE
  .create(data, callback function(error, new doc){})
  .insertMany([data], callback function(error, new docs){})

READ
  .find({filter}, callback function(err, docs){})
  .findOne({filter}, callback function(err, doc){})
  .findById("id", callback function(err, doc){})

UPDATE
  .findByIdAndUpdate("id", data, {new:true}, callback function)
  .updateOne({filter}, data, {new:true, multi: true}, callback function)

DELETE
  this is the method you should use when delete
  .findByIdAndDelete("id", callback function(error, deleted doc){})

  another one you COULD use
  .deleteOne({filter}, callback function(error, deleted doc){})

  only use this IF you know exactly what you are doing
  .deleteMany({filter}, callback function(error, deleted docs){})

*/
