const mongoose = require('mongoose'),
    { Schema } = mongoose,
    Subscriber = require('./subscriber'),
    bcrypt = require('bcrypt'),
    passportLocalMongoose = require('passport-local-mongoose'),

    userSchema = new Schema(
        {
            name: {
                first: {
                    type: String,
                    trim: true
                },
                last: {
                    type: String,
                    trim: true
                }
            },
            email: {
                type: String,
                required: true,
                lowercase: true,
                unique: true
            },
            zipCode: {
                type: Number,
                min: [1000, "Zipcode too short"],
                max: [9999, "Zipcode too long"]
            },
            courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
            subscribedAccount: {
                type: Schema.Types.ObjectId,
                ref: "Subscriber"
            }
        },
        {
            timestamps: true
        }
    );

userSchema.virtual("fullName")
    .get(function () {
        return `${this.name.first} ${this.name.last}`;
    });

// Middleware function needs next. Also no => with mongoose
userSchema.pre("save", function (next) {
    let user = this;
    // If no subscriber added to user already
    if (user.subscribedAccount === undefined) {
        Subscriber.findOne({
            email: user.email
        })
            .then(subscriber => {
                user.subscribedAccount = subscriber;
                next();
            })
            .catch(error => {
                console.log(`Error connecting subscriber: ${error.message}`);
                next(error);
            });
    } else {
        next();
    }
});

// Hashing
userSchema.plugin(passportLocalMongoose, {
    usernameField: "email"
});

module.exports = mongoose.model('User', userSchema);