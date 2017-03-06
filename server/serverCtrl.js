var app = require('./../server.js');
var db = app.get('db');
var userArr = [];
module.exports = {
  me: function(req, res, next) {
		// Return user
		return res.status(200)
			.json(req.user);
	},

	// UPDATE CURRENT USER //
	updateCurrent: function(req, res, next) {
		var updateUser = req.body;
		updateUser.user_id = req.user.user_id;

		db.users.save(updateUser, function(err, user) {
			if (err) {
				console.log('User update error', err);

				return res.status(401)
					.send(err);
			}

			console.log('user: ', user);
			req.session.passport.user = user;

			res.status(200)
				.send(user);
		});
	},
  run: function() {
		log('Initializing database');

		db.initialize.tables_initialize(function(err, table) {
			if (err) return log('Some tables failed to create');
			else log('Tables successfully initialized');
		});
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
      req.body.email,
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
      req.body.email,
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
      req.body.email,
      req.body.date,
      req.body.timeOfDay,
      req.body.mGroup,
      req.body.workoutLength,
      req.body.numOfExercises,
      req.body.difficulty,
      req.body.workoutNotes
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
      req.body.email,
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
      res.send(results);
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
      req.body.email,
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
  logLift:function(req, res) {
    db.create_lift([
      req.body.email,
      req.body.date,
      req.body.exercise,
      req.body.sets,
      req.body.reps,
      req.body.weight,
      req.body.otherNotes
    ], function(err, results) {
      if (err) {
        console.error(err);
        return res.send(err);
      }
      res.send(results)
    })
  },
  getJoinDate:function(req, res) {
    console.log(req.body.gymJoin)
    db.return_workout_join([req.body.gymJoin], function(err, results) {
      console.log(results);
      if (err) {
        console.error(err);
        return res.send(err);
      }
      if (results.length === 0) {
        return res.status(404).send("Looks like you were lazy that day...")
      }
      return res.send(results)
    })
  }
}
