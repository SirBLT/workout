var app = require('./server.js');
var db = app.get('db');
module.exports = {
  getUsers: function (req, res) {
    db.read_users([], function (err, results) {
      console.log("test tickles")
      if(err){
        return res.send(err);
      }
      return res.send(results);
    })
  },
  createUser:function(req, res) {
    db.create_user([
      req.body.username,
      req.body.firstname,
      req.body.lastname,
      req.body.email,
      req.body.password
    ], function(err, results) {
      if (err){
        console.error(err);
        return res.send(err);
      }
      res.send(results);
    })
  },
  getUser:function(req, res) {
    db.read_user([req.params.userid], function(err, results) {
      if (err){
        console.error(err);
        return res.send(err);
      }
      if (results.length === 0) {
        return res.status(404).send("User isn't be findeded");
      }
      return res.send(results);
    })
  },
  updateUser:function(req, res) {
    db.updateUser([
      req.params.userid,
      req.params.username,
      req.params.firstname,
      req.params.lastname,
      req.params.email,
      req.params.password
    ], function(err, results) {
      if (err){
        console.error(err);
        return res.send(err);
      }
      return res.send(results)
    })
  },
  deleteUser:function(req, res) {
    db.delete_user([req.params.userid], function(err, results) {
      if (err) {
        console.error(err);
        return res.send(err);
      }
      if (results.length === 0) {
        return res.status(404).send("You bein' a wise guy or sumtin'?")
      }
      return res.send("Good ol' " + results[0].username + " has been... 'taken care of'... Deal wit it!")
    })
  },
  myRuns:function(req, res) {
    db.read_all_runs([req.params.username], function(err, results) {
      if (err) {
        console.error(err);
        return res.send(err);
      }
      if (results.length === 0) {
        return res.status(404).send("Run not found, should have manned up and hit the gym instead...")
      }
      return res.send(results);
    })
  },
  getOneRun:function(req, res) {
    db.read_one_run([req.params.date], function(err, results) {
      if (err) {
        console.error(err);
        return res.send(err);
      }
      if (results.length === 0) {
        return res.status(404).send("No info for that day... You don't gotta lie to kick it!")
      }
      return res.send(results)
    })
  },
  createRun:function(req, res) {
    db.create_run_workout([
      req.body.username,
      req.body.date,
      req.body.timeofday,
      req.body.distance,
      req.body.workoutlength,
      req.body.avgspeed,
      req.body.avghr,
      req.body.surfacetype,
      req.body.difficulty,
      req.body.othernotes
    ], function(err, results) {
      if (err) {
        console.error(err);
        return res.send(err);
      }
      res.send(results)
    })
  },
  updateRun:function(req, res) {
    db.update_run_workout([
      req.body.username,
      req.body.date,
      req.body.timeofday,
      req.body.distance,
      req.body.workoutlength,
      req.body.avgspeed,
      req.body.avghr,
      req.body.surfacetype,
      req.body.difficulty,
      req.body.othernotes
    ], function(err, results) {
      if (err) {
        console.error(err);
        return res.send(err);
      }
      return res.send(results)
    })
  },
  deleteRun:function(req, res) {
    db.delete_run([req.params.date], function(err, results) {
      if (err) {
        console.error(err);
        return res.send(err);
      }
      if (results.length === 0) {
        return res.status(404).send("Deesa run-a isss-a not-a foun")
      }
      return res.send("What run...? I never had info about a run on " + results[0].date + "...")
    })
  },
  mySwoleSessions: function(req, res) {
    db.read_gym_workouts([req.params.userId], function(err, results) {
      if (err) {
        console.error(err);
        return res.send(err);
      }
      if (results.length === 0) {
        return res.status(404).send("Workout not found...Whoops!")
      }
      return res.send(results)
    })
  },
  oneTimeSwole: function(req, res) {
    db.read_gym_workout([req.params.date], function(err, results) {
      if (err) {
        console.error(err);
        return res.send(err);
      }
      if (results.length === 0) {
        return res.status(404).send("Looks like you bitched out on that day")
      }
      return res.send(resutls)
    })
  },
  logSwoleSesh: function(req, res) {
    db.create_gym_workout([
      req.body.userId,
      req.body.date,
      req.body.timeOfDay,
      req.body.muscleGroup,
      req.body.workoutLength,
      req.body.numberOfExercises,
      req.body.difficultyLevel
    ], function(err, results) {
      if (err) {
        console.error(err);
        return res.send(err);
      }
      res.send(results)
    })
  },
  seshDeets: function(req, res) {
    db.update_gym_workout([
      req.body.userId,
      req.body.date,
      req.body.timeOfDay,
      req.body.muscleGroup,
      req.body.workoutLength,
      req.body.numberOfExercises,
      req.body.difficultyLevel
    ], function(err, results) {
      if (err) {
        console.error(err);
        return res.send(err);
      }
      res.send(results)
    })
  },
  deleteSesh: function(req, res) {
    db.delete_gym_workout([req.params.date], function(err, results) {
      if (err) {
        console.error(err);
        return res.send(err);
      }
      if (results.length === 0) {
        return res.status(404).send("I can't delete a sesh that your lazy ass never did")
      }
      return res.send("As far as I'm concerned, you didn't workout on " + results[0].date + "...")
    })
  },
  createBike:function(req, res) {
    db.create_biking_workout([
      req.body.userName,
      req.body.date,
      req.body.timeOfDay,
      req.body.distance,
      req.body.workoutLength,
      req.body.avgSpeed,
      req.body.avgHR,
      req.body.surfaceType,
      req.body.difficulty,
      req.body.otherNotes
    ], function(err, results) {
      if (err) {
        console.error(err);
        return res.send(err);
      }
      return res.send(results);
    })
  },
  getBikeRides:function(req, res) {
    db.read_biking_workouts([req.params.userName], function(err, results) {
      if (err) {
        console.error(err);
        return res.send(err);
      }
      if (results.length === 0) {
        return res.status(404).send("You never told me you can ride a bike!")
      }
      return res.send(results)
    })
  },
  getOneRide:function(req, res) {
    db.read_biking_workout([req.params.date], function(err, results) {
      if (err) {
        console.error(err);
        return res.send(err);
      }
      if (results.length === 0) {
        return res.status(404).send("Don't lie, you didn't go running that day...")
      }
      return res.send(results)
    })
  },
  updateBikeRide:function(req, res) {
    db.update_biking_workout([
      req.body.username,
      req.body.date,
      req.body.timeofday,
      req.body.distance,
      req.body.workoutlength,
      req.body.avgspeed,
      req.body.avghr,
      req.body.surfacetype,
      req.body.difficulty,
      req.body.othernotes
    ], function(err, results) {
      if (err) {
        console.error(err);
        return res.send(err);
      }
      res.send(results)
    })
  },
  deleteBikeRide:function(req, res) {
    db.delete_run([req.params.date], function(err, results) {
      if (err) {
        console.error(err);
        return res.send(err);
      }
      if (results.length === 0) {
        return res.status(404).send("No ride found, my friend...")
      }
      return res.send("I maintain that you never went for a ride on " + results[0].date + "...")
    })
  },
}
