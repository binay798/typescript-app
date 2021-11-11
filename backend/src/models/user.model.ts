import crypto from 'crypto';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export interface UserSchema extends mongoose.Document {
  username: string;
  email: string;
  password: string;
  confirmPassword: string | undefined;
  photo: string;
  comparePassword(
    candidatePassword: string,
    mainPassword: string
  ): Promise<boolean>;
  passwordResetToken: string;
  passwordResetDate: number;
  createPasswordResetUrl(): string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<UserSchema>(
  {
    username: {
      type: String,
      required: [true, 'Must contain firstname'],
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Must contain email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Must contain password'],
      select: false,
    },
    confirmPassword: {
      type: String,
      required: [true, 'Must contain confirm password'],
      validate: {
        validator: function (this: UserSchema, el: string): boolean {
          return el === this.password;
        },
        message: 'Password and confirm password must be equal',
      },
    },
    photo: {
      type: String,
    },
    passwordResetToken: {
      type: String,
    },
    passwordResetDate: {
      type: Number,
    },
  },
  { timestamps: true }
);

// HASH PASSWORD
userSchema.pre('save', async function (next) {
  // const user = this as UserSchema;
  if (!this.isModified('password')) {
    return next();
  }
  console.log('hello', this.password);
  this.password = await bcrypt.hash(this.password, 10);
  this.confirmPassword = undefined;
  next();
});

// COMPARE PASSWORD
userSchema.methods.comparePassword = async function (
  candidatePassword: string,
  mainPassword: string
): Promise<boolean> {
  return await bcrypt
    .compare(candidatePassword, mainPassword)
    .catch((err: any) => false);
};

userSchema.methods.createPasswordResetUrl = function (): string {
  const randomString = crypto.randomBytes(32).toString('hex');
  const hash = crypto.createHash('sha256').update(randomString).digest('hex');
  this.passwordResetToken = hash;
  this.passwordResetDate = Date.now() + 10 * 60 * 1000;
  return randomString;
};

export const User = mongoose.model<UserSchema>('User', userSchema);
